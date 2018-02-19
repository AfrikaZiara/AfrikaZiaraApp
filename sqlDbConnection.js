//import mysql package
const mysql = require('mysql');

// Connect to mysql database
const con = mysql.createConnection({
  "host" : "localhost",
  "user" : "frenx",
  "password":"POkerface1994",
  "database":"afrikaziara_db"
});

//check mysql database connection
const bear= con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
});

//Create routes


