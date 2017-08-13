// Seed database with participants

var express = require('express');
var mysql = require('mysql');
var squel = require('squel');


// Use novice participants
const admins = require("../dbSeeds/Admins");
//insertParticipants("participants", dancers.Novice);



// Init App
var app = express();


var connection = mysql.createConnection({
  // host     : 'h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  // user     : 'ce109fk4twy15rel',
  // password : 'iw3wmp6ptxfttwzu',
  // database : 'q7h2gsg984mysc3j'

  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'contest'
});

connection.connect();
	var sql = squel.insert()
				.into("administrators")
				.setFieldsRows(admins.Admins).toString();
				console.log(sql);
	  	connection.query(sql, function(err, res) {
  		if(err) throw err;
  });


// set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log('listening on port ' + app.get('port'));
});