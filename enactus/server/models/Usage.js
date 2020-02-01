const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UsageSchema = new Schema({
	clientID: String,
	month: Number,
	year: Number,
	usageDollar: Number,
	usageKwh: Number,
	carbonDollar: Number,
	carbonTon: Number
});

// Create Model
const Usage = mongoose.model('usage', UsageSchema);

module.exports = Usage;