var mongoose = require('mongoose');

var ShoeSchema = mongoose.Schema({
	name: String,
	color: String
});

var Shoe = mongoose.model('Shoe', ShoeSchema);

module.exports = Shoe;
