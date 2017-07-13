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


app.listen(1337, function() {
	console.log('listening on port 1337');
});




// var http = require('http');

// http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');