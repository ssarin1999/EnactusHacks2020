const express = require('express');
const router = express.Router();

// Models
const EnergyProvider = require('../models/EnergyProvider');
/*	EnergyProviderSchema = {
		name: String,
		type: String,
		ratePerKwh: Number,
		address: String,
		postal: String,
		city: String,
		province: String,
		country: String
	}
*/

// ======================================================================================
// API's

// '/api/provider' - GET - Get all energy providers
router.get('/', (req, res) => {
	console.log("GET request to /api/provider");
	EnergyProvider.find().then(items => {
		res.json(items)
	})
	.catch(err => {
        res.status(500).json({error: err});
    });
});

// '/api/provider' - POST - Add new provider to table
router.post('/', (req, res) => {
	console.log("POST request to /api/provider");
    const newEnergyProvider = new EnergyProvider({
        name: req.body.name,
		type: req.body.type,
		ratePerKwh: req.body.ratePerKwh,
		address: req.body.address,
		postal: req.body.postal,
		city: req.body.city,
		province: req.body.province,
		country: req.body.country
    });

	newEnergyProvider.save().then(item => {
		res.json(item);
		console.log(item);
	})
	.catch(err => {
        res.status(500).json({error: err});
    });
});


// ======================================================================================
// Export Module
module.exports = router;