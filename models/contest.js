var mysql = require('mysql');

// Contest constructor
function Contest (division){
  this.division = division
}



var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'contest'
});

connection.connect();


module.exports = Contest;

module.exports.createContest = function(division, callback) {
	// Put user into the database
 //        var sql = "INSERT INTO users (firstname, lastname, username, email, pass_word)" +
	// 	"VALUES ('" + newUser.first_name + "', '" + newUser.last_name + "', '" +
	// 	newUser.username + "', '"  + newUser.email + "', '"  + newUser.password + "')";

	// 	connection.query(sql, function(err, res) {
 //    		if (err) throw err;

 //        console.log(res);

		// }

	var sql = "SELECT * from participants WHERE division = '" + division + "'";
	console.log(sql);
}

// module.exports.getParticipants = function(id, callback) {

// 	// Search for user in the data base
//     var sql = "SELECT * from users WHERE id = '" + id + "'";
// 	connection.query(sql, function(err, res) {
//     	callback(err, res[0]);
//   		});
// }