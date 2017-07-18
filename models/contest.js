var mysql = require('mysql');
var squel = require('squel');

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





// module.exports.getLeads = function() {
// 	console.log("in here");
	// Put user into the database
 //        var sql = "INSERT INTO users (firstname, lastname, username, email, pass_word)" +
	// 	"VALUES ('" + newUser.first_name + "', '" + newUser.last_name + "', '" +
	// 	newUser.username + "', '"  + newUser.email + "', '"  + newUser.password + "')";

	// 	connection.query(sql, function(err, res) {
 //    		if (err) throw err;

 //        console.log(res);

		// }

// 	var sql = "SELECT * from participants WHERE division = '" + division + "'";
// 	console.log(sql);
// }

// module.exports.getParticipants = function(id, callback) {

// 	// Search for user in the data base
//     var sql = "SELECT * from users WHERE id = '" + id + "'";
// 	connection.query(sql, function(err, res) {
//     	callback(err, res[0]);
//   		});
// }