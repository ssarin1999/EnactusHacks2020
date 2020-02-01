const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UsageSchema = new Schema({
	clientID: {
        type: String,
        required: true
    },
	month: {
        type: Number,
        required: true
    },
	year: {
        type: Number,
        required: true
    },
	usageDollar: {
        type: Number,
        required: true
    },
	usageKwh: {
        type: Number,
        required: true
    },
	carbonDollar: {
        type: Number,
        required: true
    },
	carbonTon: {
        type: Number,
        required: true
    }
});

// Create Model
const Usage = mongoose.model('usage', UsageSchema);

module.exports = Usage;