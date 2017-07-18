var bcrypt = require('bcryptjs');
var mysql = require('mysql');
var squel = require('squel');


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'contest'
});

connection.connect();



function User(last, first, email, username, password){
  this.last_name = last,
	this.first_name = first,
	this.email = email,
	this.username = username,
	this.password = password
}



module.exports = User;

const saltRounds = 10;

module.exports.createUser = function(newUser, callback) {
	bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        
        // Put user into the database
        var sql = squel.insert()
        .into("users")
        .setFieldsRows([
            {firstname: newUser.first_name.toString(), lastname: newUser.last_name.toString(),
              email: newUser.email.toString(), pass_word: newUser.password.toString()}
          ]).toString();

  //       var sql = "INSERT INTO users (firstname, lastname, username, email, pass_word)" +
		// "VALUES ('" + newUser.first_name + "', '" + newUser.last_name + "', '" +
		// newUser.username + "', '"  + newUser.email + "', '"  + newUser.password + "')";

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

module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		if(err) throw err;
		callback(null, isMatch);
    // res == true 
});
}





