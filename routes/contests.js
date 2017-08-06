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
        db.Participant.findAll({
            where: {
                role: role,
                division: division
            }
        }).then((results) => {
            // console.log(judge);
            // console.log(results);
            // var group = [];
            // for(var i = 0; i < results.length; i++) {
            // 	var participant = results[i].dataValues;
            // 	// console.log(participant);
            // 	group.push(participant);
            // }
            res.render('prelim', { division: division, role: role, list: results, round: round });

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

        db.Scores.create({
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
router.get("/results/:round/:division?", function(req, res) {
    console.log(req.params.round);
    let round = req.params.round;
    let division = req.params.division;
    db.Scores.findAll({}).then((data) => {
        res.render('prelimResults', { scores: data });

    });

});

// Search through an array of objects and find the index of the value
function findIndex(array, value) {

    for (var i = 0; i < array.length; i++) {

        var index = Object.values(array[i]).indexOf(value);

        if (index > -1) {
            return i;
        }
    }
    return -1;
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