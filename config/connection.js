var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "contest"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;