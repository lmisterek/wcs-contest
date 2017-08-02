var express = require('express');
var router = express.Router();
var passport = require('passport');


var Contest = require('../models/contest');
var orm = require('../config/orm.js');
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

  // Check to see if this contest has been judged
  // Returns a true or false value
  Contest.judgeComplete(judge, division, function (err, result){

  		// If the judge has completed the judging form, re-route the judge to the results page
  		if(result) {
  				var newUrl = "/contests/results/" + round + "/" + division;
		 		res.redirect(newUrl);

  		}
  		else {
  			var table = "participants";
  			var condition = "division = '" + division + "'";
			orm.allWhere(table, condition, function(data) {
	  			// Create a separated list of leads/follows
	  			var sepList = Contest.separateByRole(data);

	  			// Determine the number of heats from the total number of leads/follows
	  			var heats = Contest.determineHeats(sepList, role);

	  			console.log(sepList);
	  			var numHeats = heats.number;
	  			var group = [];

	  			// // Determine which heat number to send
	  			// for (var i = numHeats; i > 0; i--) {
	  			// 	var heat = "heat" + i;
	  			// 	var person = heats[role][heat][0];
	  				
	  			// 	// Check to see if the heat has been judged
	  			// 	Contest.heatJudged(person.bib_number, person.division, person.round, function(err, score) {
	  				
	  			// 		if(!score) {
	  			// 			var group = heats[role][heat];
	  			// 			// res.render('prelim', {division: division, role: role, list: group, heat: heat, round: round});
	  			// 			res.end();
	  			// 		}
		 				
	  			// 	}); // end of function heatJudged



	  				
	  			// } // end of for loop
	  			// if( i == 0 ) {
	  			// 	var newUrl = "/contests/results/" + round + "/" + division;
		 			// 	res.redirect(newUrl);
	  			// }
	  			
	  			res.render('prelim', {division: division, role: role, list: data, round: round});
	  	});
	  }  // end of else statement

  }); // end of judge complete

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