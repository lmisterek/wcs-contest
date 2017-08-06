module.exports = function(sequelize, DataTypes) {
    var Judge = sequelize.define("Judge", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        pass_word: DataTypes.STRING
    });

 
    return Judge;
};