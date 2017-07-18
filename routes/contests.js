var express = require('express');
var router = express.Router();
var passport = require('passport');



var Contest = require('../models/contest');

// Search for Specific Character (or all characters) - provides JSON
router.get("/prelim/:division?", ensureAuthenticated, function(req, res) {

  var division = req.params.division;

  // Check to make sure that it is one of the given contests
  var contests = ["juniors", "novice", "intermediate", "advanced", "champion", "masters"];

  if(contests.indexOf(division) > -1 ) {

  		//**********************************************************************************//
  		//*** TODO: This role will be set by the judge information "judging leads or follows"
  		// A temporary fix might be to let the judges choose lead or follow 
  		//**********************************************************************************//
  		var role = 'follow';

  		Contest.getList(division, role, function(err, list) {
  		
  		res.render('prelim', {division: division, role: role, list: list});
  		

  		});
  
  }
  else {
  	  res.redirect('/');
  }
  
});

router.post("/:round/:division?", function(req, res) {

	var judgeId = res.locals.user;

	var scores = req.body;
	var division = req.params.division;
	var round = req.params.round;
	
	// insert data into database
	Contest.addScores(scores, round, division, judgeId);
});

function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	} else {
		
		res.redirect('/users/login'); 
	}
}



module.exports = router;