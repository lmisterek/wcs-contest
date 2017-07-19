var mysql = require('mysql');
var squel = require('squel');
var jquery = require('jquery');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'contest'
});

connection.connect();

// Contest constructor
function Contest(division){
  this.division = division
}

module.exports = Contest;



module.exports.getList = function(division, role, callback) {
  	
  	// Create a sql query with the division and role identified
  	var sql = squel.select()
  				.from("participants")
  				.where("division = '" + division + "'")
  				.where("role = '" + role + "'").toString();

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

