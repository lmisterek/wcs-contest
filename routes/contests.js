var express = require('express');
var router = express.Router();

var Contest = require('../models/contest');

// HTML route
// router.get('/prelim/juniors', function(req, res){
// 	res.render('prelim');
// });

// Search for Specific Character (or all characters) - provides JSON
router.get("/prelim/:division?", function(req, res) {
  
  var division = req.params.division;

  // create a new contest
  var newContest = new Contest(division);
  
  console.log(newContest);
  // pull up the list of 
  // if (chosen) {
  //   console.log(chosen);

  //   for (var i = 0; i < characters.length; i++) {
  //     if (chosen === characters[i].routeName) {
  //       return res.json(characters[i]);
  //     }
  //   }
  //   return res.json(false);
  // }
  // return res.json(characters);
});


console.log("on this page.");

module.exports = router;