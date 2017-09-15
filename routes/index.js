var express = require('express');
var router = express.Router();
var db = require('../models');

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
// router.get('/', function(req, res){

	res.render('index');
});



function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	} else {
		console.log('not ensured');
		res.redirect('/users/login'); 
	}
}

module.exports = router;