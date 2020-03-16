const connection = require("./connection.js");
let queryString;

function questionMarks(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push("?");
    };
    return array.toString();
};

function objToSql(ob) {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            arr.push(key + "=" + value);
        };
    };
    return arr.toString();
};

// creating orm for sql function/input
const orm = {
    all: function(tableInput, cb) {
        queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    create: function(table, col, val, cd) {
        queryString = "INSERT INTO " + table + " (" + col.toString() + ") " + "VALUES (" + questionMarks(val.length) + ") ";
        console.log(queryString);
        connection.query(queryString, val, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(table, objColVal, condition, cb) {
        let queryString = "UPDATE " + table + " SET " + objToSql(objColVal) + " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        let queryString = "DELETE FROM " + table + " WHERE " + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

// exporting this file
module.exports = orm;