var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoes-app');

var routes = require('./config/routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000);
