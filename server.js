var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

//DB connection ()
//mongoose.connect('mongodb://localhost:27017/local');
mongoose.connect('mongodb://Allan:bible1234@ds135790.mlab.com:35790/allanahntest');
//express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes;
app.use('/api', require('./routes/api'));

//start server
app.listen(3000);
console.log('Server is running on port 3000');