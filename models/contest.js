var mysql = require('mysql');
var squel = require('squel');
var jquery = require('jquery');

var connection = require("../config/connection.js");
var orm = require('../config/orm.js');


// Contest constructor
function Contest(division){
  this.division = division

}

module.exports = Contest;

// ****************************** Database Methods ******************************************* //



// ****************************** Contest Methods ******************************************* //
module.exports.separateByRole = function (data) {

	var list = {
		leads: [],
		follows: []
	}

	for (var i = 0; i < data.length; i++) {
		if(data[i].role == 'lead') {
			list.leads.push(data[i]);
		}
		else {
			list.follows.push(data[i]);
		}
	}
	return list;
}

module.exports.determineHeats = function(data, role) {
	
	var numHeats = 0;
	var comp = data.follows[0].division;

	for (var i = 0; i < data.length; i++) {
		if(data[i].role == 'lead') {
			numLeads++;
		}
		else {

		}
	}

	// determine if there are more leaders or followers
	var largestSize = Math.max(data.follows.length, data.leads.length);
	var smallestSize = Math.min(data.follows.length, data.leads.length);
	var largestGroup = 'follows';
	var smallestGroup = 'leads';

	if (largestSize != data.follows.length) {
		largestGroup = 'leads';
		smallestGroup = 'follows';
	}
	var maxSize = 0;
	var minSize = 0;

	switch(comp) {
		case 'novice':
			maxSize = 25;
			minSize = 15;
			break;
		case 'intermediate':
			maxSize = 20;
			minSize = 10;
			break;
		case 'advanced':
			maxSize = 15;
			minSize = 10;
		case 'allstar':
			maxSize = 8;
			minSize = 5;
		case 'champion':
			maxSize = 8;
			minSize = 5;
		default:
			maxSize = 0;
	 		minSize = 0;
	 		break;
	}  // end of switch

	var maxHeats = Math.ceil((largestSize/minSize));

		var heats = {
		lead: {},
		follow: {}
	};

	for(var i = maxHeats; i > 0; i--) {
		if(largestSize/i < 25) {
			numHeats = i;		
		}
		else {
			break;
		}
	}

	heats.number = numHeats;

	var heatSize = Math.ceil(largestSize/numHeats);

	// Repeat the smaller group so that their are equal partnerships
	var smallerGroup = data[smallestGroup];
	var numRepeats = Math.ceil(largestSize/smallestSize);
	var partners = [];
	
	for (var i = 0; i < largestSize; i++) {
		index = i % (smallerGroup.length);
		partners.push(smallerGroup[index]);
	}

	var role1 = data[largestGroup][0].role;
	var role2 = data[smallestGroup][0].role;

	// Put each participant in a heat
	for (var i = 1; i <= numHeats; i++) {
		
		// the larger group is the requested group	
		heats[role1]["heat" + i] = data[largestGroup].splice(0, heatSize);
		heats[role2]["heat" + i] = partners.splice(0,heatSize); 
		
	}

	return heats;
}

module.exports.getList = function(table, division, callback) {
  	
  	// Create a sql query with the division and role identified
  	var sql = squel.select()
  				.from(table)
  				.where("division = '" + division + "'").toString();

  	connection.query(sql, function(err, res) {
  		if(err) throw err;

  		callback(null, res);
  	});
}

module.exports.joinTablesByDiv = function(table1, table2, division, callback) {
	  	// Create a sql query with the division and role identified
  	var sql = "SELECT scores.bib_number, participants.lastname, participants.firstname, scores.division, scores.round, " +
  				"scores.judge, scores.score FROM participants INNER JOIN scores ON scores.bib_number = participants.bib_number " +
  				"and scores.division = '" + division + "'";

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

	// This variable determines if the judge has completed judging the current division
	var condition = 'judge = ' + judge.id + " and " + "division = '" + division + "'";

	// SELECT all data from the table scores to see if the judge has scored the round
	orm.allWhere("scores", condition, function(result) {

		// If a result has been submitted, then return true that the judge has completed the contest
		if(result[0]) {
			callback(null, true);
		}
		else {
			callback(null, false);
		}
	});

}

module.exports.heatJudged = function(bib_number, division, round, callback) {

	
	var condition = 'bib_number = ' + bib_number + " and " + "division = '" + division + "'"
	+ " and " + "round = '" + round + "'";

	orm.allWhere("scores", condition, function(result) {
		if(result[0]) {
			callback(null, true);
		}
		else {
			callback(null, false);
		}
	});
}

