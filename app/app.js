var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shoes_db');

var routes = require('./config/routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

var db = mongoose.connection;
db.on('error', console.error.bind(console,"connection error:"));
db.once('connected', function(err){
  if(err) return console.log(err);
  console.log('connection to db successul');
});


app.listen(3000, function(err){
  if(err) return console.log(err);
  console.log("connection to 3000 successful");
});
