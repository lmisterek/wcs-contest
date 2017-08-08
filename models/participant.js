'use strict';

module.exports = function(sequelize, DataTypes) {
  var Participant = sequelize.define('Participant', {
    bib_number: {
      type:  DataTypes.STRING,
      primaryKey: true
    },
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    division: DataTypes.STRING,
    role: DataTypes.STRING
  });

  Participant.associate = function(models) {
    // Associating Participant with Scores
    Participant.hasMany(models.Score);
  };


  return Participant;
};







