module.exports = function(sequelize, DataTypes) {
    var Participant = sequelize.define("Participant", {
        bib_number: DataTypes.STRING,
        lastname: DataTypes.STRING,
        firstname: DataTypes.STRING,
        division: DataTypes.STRING,
        role: DataTypes.STRING
    }); 
    return Participant;
};

