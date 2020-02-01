const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EnergyProviderSchema = new Schema({
	name: String,
	type: String,
	ratePerKwh: Number,
	address: String,
	postal: String,
	city: String,
	province: String,
	country: String
});

// Create Model
const EnergyProvider = mongoose.model('energyProvider', EnergyProviderSchema);

module.exports = EnergyProvider;