module.exports = function(sequelize, DataTypes) {
    var Scores = sequelize.define("Scores", {
        bib_number: DataTypes.INTEGER,
        division: DataTypes.STRING,
        round: DataTypes.STRING,
        judge: DataTypes.INTEGER,
        score: DataTypes.INTEGER
    }); 
    return Scores;
};

