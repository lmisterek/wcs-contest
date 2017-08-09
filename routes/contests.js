var express = require('express');
var router = express.Router();
var passport = require('passport');


var db = require('../models');
var convention = require('../config/dcsData.js');


// This route creates prelim and semi-finals judge sheets

router.get("/judge/:round/:division/:role", ensureAuthenticated, function(req, res) {

    var judge = res.locals.user;
    var division = req.params.division;
    var round = req.params.round;
    var role = req.params.role;


    // Check route paramaters, If the route is bad, then re-direct to dashboard
    if (badRoute(convention, round, division, role)) {
        res.redirect('/');
        return;
    } else {


    	// Check to see if the judge has judged this competition
    	db.Score.findAll({
    		where: {
    			judge: judge.id,
    			division: division,
    			round: round,
    		}
    	}).then((results) => {
   
    		if(results.length == 0) {

    			//Get all the participants
	        	db.Participant.findAll({
	            where: {
	                role: role,
	                division: division
	            }
		        }).then((results) => {
		            res.render('prelim', { division: division, role: role, list: results, round: round });

		        });
    		}
    		else {
    			res.redirect('/');
    		}
    	});
    	
    }
});


// This route posts the results from the judge sheets and then redirects to the dashboard
router.post("/:round/:division/:role", function(req, res) {

    var judge = res.locals.user;
    console.log("judge   " + judge.username);
    var scores = req.body;
    var division = req.params.division;
    var round = req.params.round;
    var role = req.params.role;

    for (let key in req.body) {
        let score = req.body[key];
        let bib_number = key;
        console.log('bib: ' + bib_number + '  score: ' + score);

        db.Score.create({
            bib_number: bib_number,
            division: division,
            round: round,
            judge: judge.id,
            score: score
        }).then(() => {
            console.log('created Scores');
        });
    }
    // insert data into database
    // Contest.addScores(scores, round, division, judgeId);
    res.redirect("/");
});

//James took this route from results.js in the routes directory
router.get("/results/:round/:division/:role", function(req, res) {
    
    let round = req.params.round;
    let division = req.params.division;
    let role = req.params.role;
    
    db.Score.findAll({
    	where: {
    		round: round,
    		division: division
    	},
    	include: [
    		{model: db.Participant}
    	]
    }).then((data) => {
    	
    	// select the data for which participated in the given role
    	var scores = getRole(data, role);
    	
    	// get participants
    	var participants = getParticipantScores(scores);

  		// Order participants by Total
  		participants = orderObjByKey(participants, "total");

  		res.render('prelimResults', {division: division, role: role, scores: participants, round: round});

    });


});

// Search through an array of objects and find the index of the value
function findIndex(array, value) {

    for (var i = 0; i < array.length; i++) {

    	var object = array[i];
        // var index = Object.values(array[i]).indexOf(value);
        for(var key in object) {
        	if(object[key]==value)
        	return i;
        }
    }
    return -1;
}


// This function reads all of the scores and creates an array of the dancers with each of their scores
function getParticipantScores(scores) {

	var participants = [];

  		for(var i = 0; i < scores.length; i++) {

  			// find the index of the particular bib_number in the participants array
			var index = findIndex(participants, scores[i].bib_number);
			var judge = "judge" + scores[i].judge;
			var score = scores[i].score;

			// Create a new dancer if the dancer has not been added to the list
			if(index == -1) {
				var dancer = {
					bib_number: scores[i].bib_number,
					name: scores[i].Participant.firstname + " " + scores[i].Participant.lastname,
					[judge]: score,
					total: score,

				}
				participants.push(dancer);
			}
			
			// Only add the judge score to the proper index
			else {
				participants[index][judge] = score;

				//  Add the new judge's score to the total
				participants[index].total += score;	
			}

  		} // End of loop

  		return participants;
}

function getRole (data, role) {
	var scores = [];
	for (var i = 0; i < data.length; i++) {
		if(data[i].Participant.role == role) {
			scores.push(data[i]);
		}
	}
	return scores;
}


function orderObjByKey(array, key) {
    array.sort(function(a, b) { return a.total - b.total; });
    return array;
}

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {

        res.redirect('/users/login');
    }
}

function badRoute(object, param1, param2, param3) {
    if (object.contests.indexOf(param1) == (-1) ||
        object.divisions.indexOf(param2) == (-1) ||
        object.roles.indexOf(param3) == (-1)) {
        console.log("one is bad");
        return true;
    } else
        return false;
}



module.exports = router;