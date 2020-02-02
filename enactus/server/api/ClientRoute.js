const express = require('express');
const router = express.Router();

// Models
const Client = require('../models/Client');
/*	ClientSchema = {
    	name: String,
		address: String,
    	postal: String,
    	city: String,
    	province: String,
		country: String
	}
*/

// ======================================================================================
// API's
// '/api/client/:name' - GET - get client id 
router.get('/:name', (req, res) => {
	let clientName = req.params.name;
    console.log("GET Request to /api/client/" + clientName);
	
	Client.findOne({name: clientName})
	.then(items => {
		console.log(items);
		res.send(items._id);
	})
	.catch(err => {
		console.log(err);
        res.status(500).json({error: err});
    });
});

// '/api/client/province/:name' - GET - get client province 
router.get('/province/:name', (req, res) => {
	let clientName = req.params.name;
    console.log("GET Request to /api/client/province/" + clientName);
	
	Client.findOne({name: clientName})
	.then(items => {
		console.log(items);
		res.send(items.province);
	})
	.catch(err => {
		console.log(err);
        res.status(500).json({error: err});
    });
});


// ======================================================================================
// Export Module
module.exports = router;