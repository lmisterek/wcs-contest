
'use strict';

// Creates the User table in the database
module.exports = function(sequelize, DataTypes) {
  var Administrator = sequelize.define('administrator', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    competitionName: DataTypes.STRING,
    competitionYear: DataTypes.STRING,
    compCode: DataTypes.TEXT
  });

  return Administrator;
};







