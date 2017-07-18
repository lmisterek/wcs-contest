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
  	  // create a new contest
  		var newContest = new Contest(division);

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

router.post("/prelim/:divsiion?", function(req, res) {
	console.log(res.body);
});

function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	} else {
		
		res.redirect('/users/login'); 
	}
}



module.exports = router;