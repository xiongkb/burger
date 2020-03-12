const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 8000,
    user: "root",
    password: "root",
    database: "burgersDB"
});

connection.connect(function(err) {
    if (err) {
        console.log("Error: " + error.stack);
    }
    console.log("Connected id: " + connection.threadId);
})

module.exports = connection;