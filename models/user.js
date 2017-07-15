var bcrypt = require('bcryptjs');
var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'contest'
});

connection.connect();




function User(last, first, email, mobile, username, level, password){
    this.last_name = last,
	this.first_name = first,
	this.email = email,
	this.cell_number = mobile,
	this.username = username,
	this.level = level,
	this.password = password
}



module.exports = User;

const saltRounds = 10;

module.exports.createUser = function(newUser, callback) {
	bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        
        // Put user into the database
        var sql = "INSERT INTO users (firstname, lastname, cell_number, username, email, comp_category, pass_word)" +
		"VALUES ('" + newUser.first_name + "', '" + newUser.last_name + "', '" + newUser.cell_number + "', '" +
		newUser.username + "', '"  + newUser.email + "', '" + newUser.level + "', '"  + newUser.password + "')";

		 connection.query(sql, function(err, res) {
    		if (err) throw err;
  		});
    });
});
}

module.exports.getUserByUsername= function(username, callback) {

	// Search for user in the data base
    var sql = "SELECT * from users WHERE username = '" + username + "'";


	connection.query(sql, function(err, res) {
    	callback(err, res[0]);
  		});
}

module.exports.getUserById= function(id, callback) {

	// Search for user in the data base
    var sql = "SELECT * from users WHERE id = '" + id + "'";
	connection.query(sql, function(err, res) {
    	callback(err, res[0]);
  		});
}

// Working :)
module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		if(err) throw err;
		callback(null, isMatch);
    // res == true 
});
}



