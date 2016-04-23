var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
	job : String,
	company : String,
	jobType : String,
	time : String,
	distance : {
		longitude : Number,
		atitude : Number
	}
})

mongoose.model('Job',JobSchema);