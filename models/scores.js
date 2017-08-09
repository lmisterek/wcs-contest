module.exports = function(sequelize, DataTypes) {
    var Scores = sequelize.define("Scores", {
        bib_number: DataTypes.STRING,
        division: DataTypes.STRING,
        round: DataTypes.STRING,
        judge: DataTypes.STRING,
        score: DataTypes.INTEGER
    }); 
    return Scores;
};