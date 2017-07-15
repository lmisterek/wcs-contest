var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// Register
router.get('/register', function(req, res){
	res.render('register');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

router.post('/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login', failureFlash: true}), 
	function(req, res) {
		console.log(res);
    res.redirect('/');
  }
  );

router.get('/logout', function(req, res) {
	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('users/login');
});

passport.use(new LocalStrategy(
  function(username, password, done) {
 	User.getUserByUsername(username, function(err, user) {
 		if (err) throw err;

 		if(!user) {
 			return done(null, false, {message: 'Uknown User'});
 		}

 		User.comparePassword(password, user.pass_word, function(err, isMatch) {
 			if(err) throw err;

 			if(isMatch) {
 				return done(null, user);
 			} else {
 				return done(null, false, {message: 'Invalid Password'});
 			}
 		});

 	});
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// Register User
router.post('/register', function(req, res){
	var last_name = req.body.last_name;
	var first_name = req.body.first_name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
	var cell_number = req.body.cell_number;
	var level = req.body.level;

	console.log(req);




	// Validation
	req.checkBody('last_name', 'Last Name is required').notEmpty();
	req.checkBody('first_name', 'First Name is required').notEmpty();
	req.checkBody('email', 'Email is required').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
	req.checkBody('last_name', 'Last Name is required').notEmpty();

	// TODO:  Validate phone number



	var errors = req.validationErrors();
	if(errors) {
		res.render('register', {
			errors: errors
		})
	}
	else {

		var newUser = new User(last_name, first_name, email, cell_number, username, level, password);

		 console.log(newUser);

		 User.createUser(newUser, function(err, user) {
		 	if(err) throw err;

		 });

		 // TODO:  Fix this flash message
		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');
	}
});




module.exports = router;