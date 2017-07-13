var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();	



// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware

app.use(express.static(path.join(__dirname, 'bower_components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// define routes

app.use(require('./routes'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('listening on port 3000');
});



