
'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//have not started thinking through this model - just copied SQL model to Mongoose
var AdministratorSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  competitionName: {
    type: String
  },
  competitionYear: {
    type: String
  },
  compCode: {
    type: String
  },
});

var Administrator = mongoose.model("Administrator", AdministratorSchema);

module.exports = Administrator;
// Creates the User table in the database
// module.exports = function(sequelize, DataTypes) {
//   var Administrator = sequelize.define('administrator', {
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     competitionName: DataTypes.STRING,
//     competitionYear: DataTypes.STRING,
//     compCode: DataTypes.TEXT
//   });

//   return Administrator;
// };







