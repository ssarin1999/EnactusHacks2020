const express = require('express');
const router = express.Router();

// User model
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


// ======================================================================================
// Export Module
module.exports = router;