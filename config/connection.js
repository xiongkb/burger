const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgersDB"
    });
}

connection.connect(function(err) {
    if (err) {
        console.log("Error: " + error.stack);
    }
    console.log("Connected id: " + connection.threadId);
})

module.exports = connection;