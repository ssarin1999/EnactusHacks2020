const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EnergyProviderSchema = new Schema({
	name: {
        type: String,
        required: true
    },
	type: {
        type: String,
        required: true
    },
	ratePerKwh: {
        type: Number,
        required: true
    },
	address: {
        type: String,
        required: true
    },
	postal: {
        type: String,
        required: true
    },
	city: {
        type: String,
        required: true
    },
	province: {
        type: String,
        required: true
    },
	country: {
        type: String,
        required: true
    },
	ratings: {
        type: String,
        required: false
    }
});

// Create Model
const EnergyProvider = mongoose.model('energyProvider', EnergyProviderSchema);

module.exports = EnergyProvider;