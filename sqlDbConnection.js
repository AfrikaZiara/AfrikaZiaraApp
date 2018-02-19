
//import packages
var mysql = require('mysql');
var express = require('express')
var path = require('path')
var ejs = require('ejs')

var azCtrl = require('../controllers/afrikaZiaraController');

var port = process.env.PORT || 8001;


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
  console.log("Database Connected!")
});

//Start Express App
var app = express()


//Create public directory for views
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Routes
app.get('/api/v1', function (req, res) {
  res.render('index',{
    title: 'AfrikaZiara API'
  });
});

// tour-operators route
app.get('/api/v1/operators', function (req, res) {
  res.render('operators', {
  	title: 'Operators'
  });
});

// tourists route
app.get('/api/v1/tourists', function (req, res) {
	res.render('tourists',{
		title: 'Tourists'
  })
});

// Listen Port
app.listen(port);
console.log('AfrikaZiara RESTful API server started on: ' + port);




