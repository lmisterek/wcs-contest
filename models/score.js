'use strict';

module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        // bib_number: DataTypes.STRING,
        division: DataTypes.STRING,
        round: DataTypes.STRING,
        judge: DataTypes.STRING,
        score: DataTypes.INTEGER
    });

    Score.associate = function(models) {
        // Associating Participant with Scores
        Score.belongsTo(models.Participant, { foreignKey: 'bib_number', targetKey: "bib_number" });
    };

    return Score;
};