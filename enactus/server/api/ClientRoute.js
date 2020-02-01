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
// '/api/client/:name' - GET
router.get('/:name', (req, res) => {
    console.log("GET Request to /api/client/:" + clientName);
	
	let clientName = req.params.name;
	

	Client.findOne({_id: songId})
	.then(items => {
		console.log(items);
		res.json(items)
	})
	.catch(err => {
		console.log(err);
        res.status(500).json({error: err});
    });
});


// ======================================================================================
// Export Module
module.exports = router;