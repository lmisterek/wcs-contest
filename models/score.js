var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//have not started thinking through this model - just copied SQL model to Mongoose
var ScoreSchema = new Schema({
  bib_number: {
    type: String
  },
  division: {
    type: String
  },
  round: {
    type: String
  },
  judge: {
    type: String
  },
  score: {
    type: Number
  },
});

var Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;


// module.exports = function(sequelize, DataTypes) {
//     var Score = sequelize.define("Score", {
//         bib_number: DataTypes.STRING,
//         division: DataTypes.STRING,
//         round: DataTypes.STRING,
//         judge: DataTypes.STRING,
//         score: DataTypes.INTEGER
//     }); 

//     Score.associate = function(models) {
//     // Associating Participant with Scores
//     Score.belongsTo(models.Participant, {foreignKey:'bib_number', targetKey: 'bib_number'});
//    };
    
    
//     return Score;
// };