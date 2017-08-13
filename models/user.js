var bcrypt = require('bcryptjs');

'use strict';

// Creates the User table in the database
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT
  });

  return User;
};

// Constructor function for a new user
function User(last, first, email, username, password) {
    this.last_name = last,
    this.first_name = first,
    this.email = email,
    this.username = username,
    this.password = password
}





// This function takes in a user's password when registering and returns
// a hashed password to put it into the database
// module.exports.hashPassword = function (password) {

// 	const saltRounds = 10;

// 	// This will be the hashed version of the password that will be sent to the database
// 	var hashWord = '';

// 	bcrypt.genSalt(saltRounds, function(err, salt) {
// 		bcrypt.hash(password, salt, function (err, hash) {
// 			hashWord = hash;
// 		})
// 	});
// 	return hashWord;
// }

// module.exports.createUser = function(newUser, callback) {
// 	bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(newUser.password, salt, function(err, hash) {
//         newUser.password = hash;


        
        // Put user into the database
        // var sql = squel.insert()
        // .into("users")
        // .setFieldsRows([
        //     {firstname: newUser.first_name.toString(), lastname: newUser.last_name.toString(),
        //       email: newUser.email.toString(), username: newUser.username.toString(), pass_word: newUser.password.toString()}
        //   ]).toString();

// 		 // connection.query(sql, function(err, res) {
//    //    console.log(sql);
//    //  		if (err) throw err;

//   	// 	});
//    //  });
// });
// }

// module.exports.getUserByUsername= function(username, callback) {

// 	// Search for user in the data base
//   var sql = "SELECT * from users WHERE username = '" + username + "'";


// 	connection.query(sql, function(err, res) {
//     	callback(err, res[0]);
//   		});
// }

// module.exports.getUserById= function(id, callback) {

// 	// Search for user in the data base
//     var sql = "SELECT * from users WHERE id = '" + id + "'";
// 	connection.query(sql, function(err, res) {
//     	callback(err, res[0]);
//   		});
// }

// module.exports.comparePassword = function(candidatePassword, hash, callback) {
// 	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
// 		if(err) throw err;
// 		callback(null, isMatch);
//     // res == true 
// });
// }





