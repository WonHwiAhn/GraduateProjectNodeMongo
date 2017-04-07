var restful = require('node-restful');
var mongoose = restful.mongoose;

//create Schema
var statusSchema = new mongoose.Schema({
	id: String,
	pw: String,
});

//return models;
module.exports = restful.model('tblstatus', statusSchema);