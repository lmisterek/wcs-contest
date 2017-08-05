var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../modelsj/user');

// Register
router.get('/register', function(req, res) {
    res.render('register');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

router.post('/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login', failureFlash: true}), 
	function(req, res) {
    res.redirect('/');
  }
  );

router.get('/logout', function(req, res) {
	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('login');
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




module.exports = router;