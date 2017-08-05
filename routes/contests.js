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
    if(badRoute(convention, round, division, role)) {
    	 res.redirect('/');
    	 return;
    }
    else {
    	db.Participant.findAll({}).then((results) => {
    		console.log(judge);
    		console.log(results);
    		var group = [];
    		for(var i = 0; i < results.length; i++) {
    			var participant = results[i].dataValues;
    			console.log(participant);
    			group.push(participant);
    		}

    		res.render('prelim', {division: division, role: role, list: group, round: round});

    	});

  		
    }

    	
 });


// This route posts the results from the judge sheets and then redirects to the dashboard
router.post("/judge/:round/:division/:role", function(req, res) {

	var judgeId = res.locals.user;
	var scores = req.body;
	var division = req.params.division;
	var round = req.params.round;
	
	// insert data into database
	Contest.addScores(scores, round, division, judgeId);

	res.redirect("/");
});


 


// Search through an array of objects and find the index of the value
function findIndex(array, value) {

	for(var i = 0; i < array.length; i++) {
		
		var index = Object.values(array[i]).indexOf(value);
		
		if(index > -1) {
			return i;
		}
	}
	return -1;
}

function orderObjByKey(array, key) {
	array.sort(function(a, b) {return a.total - b.total;});
	return array;
}

function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	} else {
		
		res.redirect('/users/login'); 
	}
}

function badRoute(object, param1, param2, param3) {
	if(object.contests.indexOf(param1) == (-1) ||
		object.divisions.indexOf(param2) == (-1) ||
		object.roles.indexOf(param3) == (-1)){
			console.log("one is bad");
  			return true;
  	}
  	else
  		return false;
}



module.exports = router;