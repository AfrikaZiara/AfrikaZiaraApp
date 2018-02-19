//import mysql package
var mysql = require('mysql');

// Connect to mysql database
var con = mysql.createConnection({
  "host" : "localhost",
  "user" : "elykips",
  "password":"elykips+254",
  "database":"afrikaziara_db"
});

//check mysql database connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
});

//Create routes


