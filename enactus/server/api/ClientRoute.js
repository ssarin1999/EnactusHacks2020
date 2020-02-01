const express = require('express');
const router = express.Router();

// User model
const Client = require('../models/Client');

// ======================================================================================
// API's
// '/api/client' - GET
router.get('/', (req, res) => {
    res.send("Client says hi");
});


// ======================================================================================
// Export Module
module.exports = router;