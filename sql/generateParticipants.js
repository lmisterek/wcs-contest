// Seed database with participants

var express = require('express');
var Faker = require('Faker');
var mysql = require('mysql');
var squel = require('squel');
var fs = require('fs');

// Init App
var app = express();


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'contest'
});

connection.connect();

// CONSTANTS
const num_novice_follow = 10;
const num_novice_leads = 10;

var Bibs = createBibs();
var participants = [];

// Generate Novice Lead/Follows
var Follow = createDancer(num_novice_follow, "champion", "follow");
var Lead = createDancer(num_novice_leads, "champion", "lead");

participants = participants.concat(Follow);
participants = participants.concat(Lead);


console.log(participants);



// Insert participants into the database
var table = "participants";
insertParticipants(table, participants);



// set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log('listening on port ' + app.get('port'));
});

connection.end();
//*********************  FUNCTIONS ***********************************************************//

function insertParticipants(table, array) {
	var sql = squel.insert()
				.into(table)
				.setFieldsRows(array).toString();

	  	connection.query(sql, function(err, res) {
  		if(err) throw err;
  		
  	});

}

function createDancer(number, division, role) {

	var dancers = [];
	for (var i = 0; i < number; i ++) {

		// generate fake names
		if(role =='follow') {
			var first = Faker.Name.firstNameFemale();
		}
		else if( role == 'lead') {
			var first = Faker.Name.firstNameMale();
		}
		
		var last = Faker.Name.lastName();

		var dancer = {
			bib_number: assignBib(division, role),
			lastname: last,
			firstname: first,
			division: division,
			role: role,
			createdAt: '2017-08-05 11:38:42',
			updatedAt: '2017-08-05 11:38:42'
		}

		dancers.push(dancer);

	}  // end of loop

	return dancers;
}  // end of createDancer

function assignBib(division, role) {


	// find a bib number from bibs with division
	var index = findIndex(Bibs[division], role);

	var bib = Bibs[division][index]['bib_number'];

	// take the bib number out of the array
	Bibs[division].splice(index, 1);

	// return the bib number
	return bib;
}

// Search through an array of objects and find the index of the value
function findIndex(array, value) {

	for(var i = 0; i < array.length; i++) {
		
		var index = Object.values(array[i]).indexOf(value);
		
		if(index > -1) {
			return i;
		}
	}
	return -1;
}


function createBibs() {

	var Bibs = {
		novice: [],
		intermediate: [],
		advanced: [],
		allstar: [],
		champion: [],
		other: []
	};
	// Generate BibNumbers
	for (var i = 0; i < 1000; i++) {
	
	switch(true) {
		
		// Create junior follows
		case (i > -1 && i < 50):

			var object = {
				bib_number: i,
				division: 'juniors',
				role: 'follow'
			}
		Bibs.other.push(object);
		break;

		// Create junior leads
		case (i > 49 && i < 100):

			var object = {
				bib_number: i,
				division: 'juniors',
				role: 'lead'
			}
		Bibs.other.push(object);
		break;

		// Create novice follows
		case (i > 99 && i < 200):

			var object = {
				bib_number: i,
				division: 'novice',
				role: 'follow'
			}
		Bibs.novice.push(object);
		break;

		// Create novice leads
		case (i > 199 && i < 300):

			var object = {
				bib_number: i,
				division: 'novice',
				role: 'lead'
			}
		Bibs.novice.push(object);
		break;

		// Create intermediate follows
		case (i > 299 && i < 400):

			var object = {
				bib_number: i,
				division: 'intermediate',
				role: 'follow'
			}
		Bibs.intermediate.push(object);
		break;

		// Create intermediate leads
		case (i > 399 && i < 500):

			var object = {
				bib_number: i,
				division: 'intermediate',
				role: 'lead'
			}
		Bibs.intermediate.push(object);
		break;

		// Create advanced follows
		case (i > 499 && i < 600):

			var object = {
				bib_number: i,
				division: 'advanced',
				role: 'follow'
			}
		Bibs.advanced.push(object);
		break;

		// Create advanced leads
		case (i > 599 && i < 700):

			var object = {
				bib_number: i,
				division: 'advanced',
				role: 'lead'
			}
		Bibs.advanced.push(object);
		break;

		// Create AllStar follows
		case (i > 699 && i < 750):

			var object = {
				bib_number: i,
				division: 'allstar',
				role: 'follow'
			}
		Bibs.allstar.push(object);
		break;

		// Create AllStar leads
		case (i > 749 && i < 800):

			var object = {
				bib_number: i,
				division: 'allstar',
				role: 'lead'
			}
		Bibs.allstar.push(object);
		break;

		// Create Champion follows
		case (i > 799 && i < 850):

			var object = {
				bib_number: i,
				division: 'champion',
				role: 'follow'
			}
		Bibs.champion.push(object);
		break;

		// Create Champion leads
		case (i > 849 && i < 900):

			var object = {
				bib_number: i,
				division: 'champion',
				role: 'lead'
			}
		Bibs.champion.push(object);
		break;

		// Create noPoints follows
		case (i > 899 && i < 950):

			var object = {
				bib_number: i,
				division: 'noPoints',
				role: 'follow'
			}
		Bibs.other.push(object);
		break;

		// Create noPoints leads
		case (i > 949 && i < 1000):

			var object = {
				bib_number: i,
				division: 'noPoints',
				role: 'lead'
			}
		Bibs.other.push(object);
		break;


	}  // end of switch statement

	
	}  // End of loop

	return Bibs;

}  // End of createBibs function



