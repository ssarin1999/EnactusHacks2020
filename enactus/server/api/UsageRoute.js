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

// '/api/usage' - GET - get all usages for a client
router.get('/:client', (req, res) => {
	let clientName = req.params.client;
	console.log("GET Request to /api/usage/:" + clientName);
	
	axios.get('http://localhost:8080/api/client/' + clientName)
    .then(response => {
		let clientID = response.data;
		
		Usage.find({clientID: clientID})
		.then(items => {
			console.log(items);
			res.status(200).send(items);
		})
		.catch(err => {
			console.log(err);
        	res.status(500).json({error: err});
		});

    })
    .catch(error => {
		console.log(error);
		res.status(500).json({error: error});
    });
	
});

// '/api/usage' - POST - post new usage
router.post('/', (req, res) => {
	console.log("POST request to /api/usage");
	let clientName = req.body.clientName;
	console.log(req.body);

	axios.get('http://localhost:8080/api/client/' + clientName)
    .then(response => {
		let clientID = response.data;
		let carbonDollar = req.body.carbonDollar;
		let carbonTon = parseFloat(carbonDollar)/30;

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