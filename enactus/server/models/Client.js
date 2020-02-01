const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClientSchema = new Schema({
	name: String
});

// Create Model
const Client = mongoose.model('client', ClientSchema);

module.exports = Client;