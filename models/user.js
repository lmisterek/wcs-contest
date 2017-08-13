
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







