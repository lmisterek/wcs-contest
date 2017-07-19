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

	console.log(scores);

	for (var key in scores) {
		data.push(
			{ bib_number: parseInt(key), 
				round: round, 
				division: division, 
				score: scores[key], 
				judge: judgeId.id});
	};


	console.log(data);
	var sql = squel.insert()
			.into("scores")
			.setFieldsRows(data)
			.toString();

	connection.query(sql, function(err, res) {
  		if(err) throw err;
  	});
}

