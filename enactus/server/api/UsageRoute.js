const express = require('express');
const router = express.Router();
const axios = require('axios');

// Models
const Client = require('../models/Client');
const Usage = require('../models/Usage');
/*	UsageSchema = {
		clientID: String,
		month: Number,
		year: Number,
		usageDollar: Number,
		usageKwh: Number,
		carbonDollar: Number,
		carbonTon: Number
	}
*/

// ======================================================================================
// API's

// '/api/usage' - GET
router.get('/', (req, res) => {

});

// '/api/usage' - POST
router.post('/', (req, res) => {
	console.log("POST request to /api/usage");
	let clientName = req.body.clientName;
	console.log(req.body);

	axios.get('http://localhost:8080/api/client/' + clientName)
    .then(response => {
		let clientID = response.data;
		let carbonDollar = req.body.carbonDollar;
		let carbonTon = parseFloat(carbonDollar)/20;

		const newUsage = new Usage({
			clientID: clientID,
			month: req.body.month,
			year: req.body.year,
			usageDollar: req.body.usageDollar,
			usageKwh: req.body.usageKwh,
			carbonDollar: carbonDollar,
			carbonTon: carbonTon
		});
	
		newUsage.save().then(item => {
			console.log(item);
			res.json(item);
		})
		.catch(err => {
			res.status(500).json({error: err});
		});
    })
    .catch(error => {
		console.log(error);
		res.status(500).json({error: err});
    });
});


// ======================================================================================
// Export Module
module.exports = router;