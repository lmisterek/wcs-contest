var express = require('express');
var router = express.Router();
var passport = require('passport');




var Contest = require('../models/contest');

// This route creates prelim and semi-finals judge sheets

router.get("/judge/:round/:division?", ensureAuthenticated, function(req, res) {

  var judge = res.locals.user;
  var division = req.params.division;
  var round = req.params.round;

  // Check to see if this contest has been judged
	Contest.judgeComplete(judge, division, function (err, result) {
			if (err) throw err;


			res.render('prelimResults');
	
	});

  // if(Contest.judgeComplete(judge, division)) {
  // 		
  // }

//   else {
//   		  // Check to make sure that it is one of the given contests
//   		var contests = ["juniors", "novice", "intermediate", "advanced", "champion", "masters"];


  
//   		if(contests.indexOf(division) > -1 ) {



//   		//**********************************************************************************//
//   		//*** TODO: This role will be set by the judge information "judging leads or follows"
//   		// A temporary fix might be to let the judges choose lead or follow 
//   		//**********************************************************************************//
//   		var role = 'follow';

//   		Contest.getList(division, role, function(err, list) {
  		
  
//   		res.render('prelim', {division: division, role: role, list: list, round: round});
  		

//   		});


  
//   		}
//   		else {
//   	  	res.redirect('/');
//   	}

//   }


  
});


// This route posts the results from the judge sheets and then redirects to the dashboard
router.post("/judge/:round/:division?", function(req, res) {

	var judgeId = res.locals.user;
	var scores = req.body;
	var division = req.params.division;
	var round = req.params.round;
	
	// insert data into database
	Contest.addScores(scores, round, division, judgeId);


	res.redirect("/");
});

router.get("/results/:round/:division?", ensureAuthenticated, function(req, res) {
	res.render('prelimResults');
});



function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	} else {
		
		res.redirect('/users/login'); 
	}
}



module.exports = router;