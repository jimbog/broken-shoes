var mongoose = require('mongoose');

var ShoeSchema = mongoose.Schema({
	name: String, //It said StringCheese. Changed it to String
	color: String
});

var Shoe = mongoose.model('Shoe', ShoeSchema); //This line was missing

module.exports = Shoe; // It was equal to mongoose.model('Shoe', ShoeSchema);
