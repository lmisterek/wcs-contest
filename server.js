var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local'), Strategy;


var routes = require('./routes/index');
var users = require('./routes/users');
var contests = require('./routes/contests');

// Init App
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// View engine

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

// Middle ware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(cookieParser());

// Set static folder

app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session( {
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}))

// Passport init
app.use(passport.initialize());
app.use(passport.session());


// Express Validator
app.use(expressValidator( {
	errorFormatter: function(param, msg, value) {
		var namespace = param.split('.')
		, root = namespace.shift()
		, formParam = root;

		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param: formParam,
			msg: msg,
			value: value
		};
	}
}));

// Connect Flash middleware
app.use(flash());

// Global vars
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
})

app.use('/', routes);
app.use('/users', users);
app.use('/contests', contests);


// Syncing our sequelize models and then starting our Express app
// ================================================================================
db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});

