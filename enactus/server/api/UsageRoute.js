const express = require('express');
const router = express.Router();

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

// '/api/usage' - GET
router.post('/', (req, res) => {
	console.log("POST request to /api/usage");
	console.log(req.body);
	let clientID = getClientId(req.body.clientName);
	console.log(clientID);
	let carbonDollar = req.body.carbonDollar;
	let carbonTon = carbonDollar/20;

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
		res.json(item);
		console.log(item);
	})
	.catch(err => {
        res.status(500).json({error: err});
    });
});


// ======================================================================================
// Helper Functions
function getClientId(name){
	Client.findOne({name: name})
	.then(items => {return items;})
	.catch(err => {
		console.log(err);
		return null;
    });
}


// ======================================================================================
// Export Module
module.exports = router;