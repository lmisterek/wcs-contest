var bcrypt = require('bcryptjs');

'use strict';

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


// const saltRounds = 10;

// module.exports.createUser = function(newUser, callback) {
// 	bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(newUser.password, salt, function(err, hash) {
//         newUser.password = hash;
        
//         // Put user into the database
//    //      var sql = squel.insert()
//    //      .into("users")
//    //      .setFieldsRows([
//    //          {firstname: newUser.first_name.toString(), lastname: newUser.last_name.toString(),
//    //            email: newUser.email.toString(), username: newUser.username.toString(), pass_word: newUser.password.toString()}
//    //        ]).toString();

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





