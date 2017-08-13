
var generatePassword = require("password-generator");

// Use novice participants
const admins = require("../dbSeeds/Admins");
//insertParticipants("participants", dancers.Novice);


// Generate a password and a 
var password = generatePassword(5);
console.log(password.toUpperCase());