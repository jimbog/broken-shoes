var mongoose = require('mongoose');

var ShoeSchema = mongoose.Schema({
	name: String,
	color: String
});

module.exports = mongoose.model('Shoe', ShoeSchema);
