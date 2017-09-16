'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//have not started thinking through this model - just copied SQL model to Mongoose
var ParticipantSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  bib_number: {
    type: String
  },
  scores: [{
    type: Schema.Types.ObjectId,
    ref: "Score"
  }]
});

var Participant = mongoose.model("Participant", ParticipantSchema);

module.exports = Participant;


// module.exports = function(sequelize, DataTypes) {
//   var Participant = sequelize.define('Participant', {
//     bib_number: {
//       type:  DataTypes.STRING,
//       primaryKey: true,
//       underscored: true
//     },
//     lastname: DataTypes.STRING,
//     firstname: DataTypes.STRING,
//     division: DataTypes.STRING,
//     role: DataTypes.STRING
//   });

//   Participant.associate = function(models) {
//     // Associating Participant with Scores
//     Participant.hasMany(models.Score, {foreignKey: "bib_number"});
//   };


//   return Participant;
// };







