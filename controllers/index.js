var express = require('express');
var router = express.Router();
var db = require("../models");

// Get Homepage
// router.get('/', ensureAuthenticated, function(req, res){
// 	res.render('login');
// });

router.get('/', function(req, res) {
    res.render('login');
});

router.get('/users/register', function(req, res) {
    res.render('register');
});

router.get('/index', function(req, res) {
    res.render('index');
});

router.get('/prelim', function(req, res) {
    db.Participant.findAll({}).then(function(results) {
        // console.log(results);
        res.render("prelim", { list: results });
    });
    // res.render('prelim');
});

router.get('/prelimResults', function(req, res) {
    db.Scores.findAll({}).then((results) => {
        res.render('prelimResults', { scores: results });

    });

});

router.get('/signup', function(req, res) {
    res.render('signup');
});

router.post('/scores', function(req, res) {
    console.log(req.body);
    var judge = "";
    var division = "";
    var round = "";

    // for (let key in req.body) {
    //     if (key === "judgeNum") {
    //         judge = req.body[key];
    //     }
    //     if (key === "division") {
    //         division = req.body[key];
    //     }
    //     if (key === "round") {
    //         round = req.body[key];
    //     }
    // }
    for (let key in req.body) {
        if (key != "judgeNum" || key != "division" || key != "round") {
            let score = req.body[key];
            let bib_number = key;
            console.log('bib: ' + bib_number + '  score: ' + score);

            db.Scores.create({
                bib_number: bib_number,
                division: "division",
                round: "round",
                judge: "judge",
                score: score
            }).then(() => {
                console.log('created Scores');
            });
        }
    }
    res.redirect('prelimResults');
});

router.post('/register', function(req, res) {
    //************************************************
    if (req.body.password === req.body.password2) {
        db.Judge.create({
            firstname: req.body.first_name,
            lastname: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            pass_word: req.body.password
        }).then(function() {
            res.render('index');
        });
    } else {
        res.redirect('/register');
    }


    //************************************************

    // var last_name = req.body.last_name;
    // var first_name = req.body.first_name;
    // var email = req.body.email;
    // var username = req.body.username;
    // var password = req.body.password;
    // var password2 = req.body.password2;

    // // Validation
    // // TODO:  Do not allow a username to be used more than once
    // req.checkBody('last_name', 'Last Name is required').notEmpty();
    // req.checkBody('first_name', 'First Name is required').notEmpty();
    // req.checkBody('email', 'Email is required').isEmail();
    // req.checkBody('username', 'Username is required').notEmpty();
    // req.checkBody('password', 'Password is required').notEmpty();
    // req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    // var errors = req.validationErrors();
    // if(errors) {
    // 	res.render('register', {
    // 		errors: errors
    // 	})
    // }
    // else {

    // 	var newUser = new User(last_name, first_name, email, username, password);

    // 	 User.createUser(newUser, function(err, user) {
    // 	 	if(err) throw err;

    // 	 });

    // 	 // TODO:  Fix this flash message
    // 	req.flash('success_msg', 'You are registered and can now login');

    // 	res.redirect('/users/login');
    // }
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {

        res.redirect('/users/login');
    }
}

module.exports = router;