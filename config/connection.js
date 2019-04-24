// This file sets up the connection to the SQL server

// Load the required Node modules
var mysql = require('mysql');

// Connect to the SQL database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'fuckshitup',
    database: 'burgers_db'
});

// Provides developer feedback on whether a connection to the database was established
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Exports object as connection
module.exports = connection;
