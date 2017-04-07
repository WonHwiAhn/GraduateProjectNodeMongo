var restful = require('node-restful');
var mongoose = restful.mongoose;

//create Schema
var statusSchema = new mongoose.Schema({
	//id:[{name:String, title:String}],
	id: String,
	pw: String
});

//return models;user
module.exports = restful.model('usrData', statusSchema);