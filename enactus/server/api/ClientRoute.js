const express = require('express');
const router = express.Router();

// User model
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
// '/api/client' - GET
router.get('/', (req, res) => {
	res.send("Client says hi");
});


// ======================================================================================
// Export Module
module.exports = router;