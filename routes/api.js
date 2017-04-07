var express = require('express');
var router = express.Router();

//get models
//var Status = require('../models/status');
var Status = require('../models/userData');

//routes
Status.methods(['get', 'post', 'put', 'delete']);
//Status.register(router, '/status');
Status.register(router, '/userData');

//return router;
module.exports = router;
