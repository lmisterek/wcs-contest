var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');



// Requiring our Todo model
var db = require("../models");

// Register
router.get('/register', function(req, res) {
    res.render('register');
});

// Login
router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
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


    	// Search the database for the given user
        db.User.findOne({ where: {username: username, password: password }}).then(function(dbUser) {
        	
        	// If the user is not in the database, send a message to let the user know
        	if(!dbUser) {
        		return done(null, false, {message: 'Unknown User'});
        	}

        	//
            return done(null, dbUser);
        });

        // 
        // db.User.comparePassword(password, user.pass_word, function(err, isMatch) {
        // 	if(err) throw err;

        // 	if(isMatch) {
        // 		return done(null, user);
        // 	} else {
        // 		return done(null, false, {message: 'Invalid Password'});
        // 	}
        // });

        // });
    }));


passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {

    db.User.findOne({ where: {id: id }}).then(function(dbUser) {
        done(null, dbUser.dataValues);

    });

    // User.getUserById(id, function(err, user) {
    //   done(err, user);
    // });

});

// passport.deserializeUser(function(id, done) {
//   User.getUserById(id, function(err, user) {
//     done(err, user);
//   });
// });

// Register User

router.post('/register', function(req, res){

	// Take in form input from the registration form
	var last_name = req.body.last_name;
	var first_name = req.body.first_name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Validation
	// TODO:  Do not allow a username to be used more than once
	req.checkBody('last_name', 'Last Name is required').notEmpty();
	req.checkBody('first_name', 'First Name is required').notEmpty();
	req.checkBody('email', 'Email is required').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();
	if(errors) {
		res.render('register', {
			errors: errors
		})
	}
	else {

		// Add new user to the database with hashed password
		createUser(last_name, first_name, email, username, password);

		 // TODO:  Fix this flash message
		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');
	}

});


module.exports = router;

createUser = function (last, first, email, username, password) {
	const saltRounds = 10;

	
	bcrypt.genSalt(saltRounds, function(err, salt) {
		if (err) throw err;
		bcrypt.hash(password, salt, function (err, hash) {
			
			db.User.create({
			firstname: first,
    		lastname: last,
    		username: username,
   			email: email,
    		password: hash
		});
		});

	});



}