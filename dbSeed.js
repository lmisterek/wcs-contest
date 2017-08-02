// Seed database with participants

var express = require('express');
var Faker = require('Faker');
var mysql = require('mysql');
var squel = require('squel');

// Use novice participants
const dancers = require("./sql/novice.js");
//insertParticipants("participants", dancers.Novice);


// Init App
var app = express();


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'contest'
});

connection.connect();

	var sql = squel.insert()
				.into("participants")
				.setFieldsRows(dancers.Novice).toString();

				console.log(sql);

	  	connection.query(sql, function(err, res) {
  		if(err) throw err;
  });


//insertParticipants(table, participants)

// set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log('listening on port ' + app.get('port'));
});


//*********************  FUNCTIONS ***********************************************************//

function insertParticipants(table, array) {
	// var sql = squel.insert()
	// 			.into(table)
	// 			.setFieldsRows(array).toString();

	// 			console.log(sql);

	//   	connection.query(sql, function(err, res) {
 //  		if(err) throw err;
  		
  	// });

}

