var mysql = require('mysql');
var squel = require('squel');
var jquery = require('jquery');

var connection = require("../config/connection.js");

// Contest constructor
function Contest(division){
  this.division = division
}

module.exports = Contest;

module.exports.getName = function(bib, callback) {
  	
  	// Create a sql query with the division and role identified
  	var sql = squel.select()
  				.from("participants")
  				.where("bib_number = " + bib).toString();

  	var name = '';

  	connection.query(sql, function(err, res) {
  		
  		callback(err, res[0]);
  	});
}


module.exports.getList = function(table, division, role, callback) {
  	
  	// Create a sql query with the division and role identified
  	var sql = squel.select()
  				.from(table)
  				.where("division = '" + division + "'")
  				.where("role = '" + role + "'").toString();

  	connection.query(sql, function(err, res) {
  		if(err) throw err;
  		callback(null, res);
  	});
}

module.exports.getPrelimResults = function(table, division, callback) {
  	
  	// Create a sql query with the division and role identified
  	var sql = squel.select()
  				.from(table)
  				.where("division = '" + division + "'").toString();

  	connection.query(sql, function(err, res) {
  		if(err) throw err;
  		callback(err, res);
  	});
}

module.exports.addScores = function(scores, round, division, judgeId) {
	var data = [];

	for (var key in scores) {
		data.push(
			{ bib_number: parseInt(key), 
				round: round, 
				division: division, 
				score: scores[key], 
				judge: judgeId.id});
	};

	var sql = squel.insert()
			.into("scores")
			.setFieldsRows(data)
			.toString();

	connection.query(sql, function(err, res) {
  		if(err) throw err;
  	});
}

module.exports.judgeComplete = function(judge, division, callback) {

	var complete = false;
	
	// look up results for this judge
	var sql = squel.select()
			.from("scores")
			.limit(1)
			.where("division = '" + division + "'")
			.where("judge = '" + judge.id + "'")
			.toString();

	// if there are results, then return true
		connection.query(sql, function(err, res) {
  		
  		if(err) throw err;
  		
  		else {
  			
  			// If there is a score in the database, then the judge has scored the contest
  			if (res.length == 1){
  				complete =  true;
  			}

  			callback(null, complete);
  		}
  			
  	});



}