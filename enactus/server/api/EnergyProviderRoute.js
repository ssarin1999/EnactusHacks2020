const express = require('express');
const router = express.Router();

// User model
const EnergyProvider = require('../models/EnergyProvider');

// ======================================================================================
// API's
// '/api/usage' - GET
router.get('/', (req, res) => {
    res.send("Energy provider says hi");
});


// ======================================================================================
// Export Module
module.exports = router;