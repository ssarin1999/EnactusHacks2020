const express = require('express');
const router = express.Router();
const axios = require('axios');

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

// '/api/usage/:client' - GET - get all usages for a client
router.get('/:client', (req, res) => {
	let clientName = req.params.client;
	console.log("GET Request to /api/usage/:" + clientName);

	axios.get('http://localhost:8080/api/client/' + clientName)
		.then(response => {
			let clientID = response.data;

			Usage.find({ clientID: clientID })
				.then(items => {
					console.log(items);
					res.status(200).send(items);
				})
				.catch(err => {
					console.log(err);
					res.status(500).json({ error: err });
				});

		})
		.catch(error => {
			console.log(error);
			res.status(500).json({ error: error });
		});

});

// '/api/usage' - POST - post new usage
router.post('/', (req, res) => {
	console.log("POST request to /api/usage");
	let clientName = req.body.clientName;
	console.log(req.body);

	axios.get('http://localhost:8080/api/client/' + clientName)
		.then(response => {
			let clientID = response.data;
			let carbonDollar = req.body.carbonDollar;
			let carbonTon = parseFloat(carbonDollar) / 30;

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
				console.log(item);
				res.json(item);
			})
				.catch(err => {
					res.status(500).json({ error: err });
				});
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({ error: err });
		});
});

// '/api/usage/projection/:client' - GET - get projection usages for a client
router.get('/projection/:client', (req, res) => {
	let clientName = req.params.client;
	console.log("GET Request to /api/usage/projection/:" + clientName);

	axios.get('http://localhost:8080/api/usage/' + clientName)
		.then(response => {
			let usages = response.data;
			let length = usages.length;

			let avgCarbonChange = calcAvgCarbonTonChange(usages, length);
			let projection = project(usages, avgCarbonChange);

			console.log("Projection:");
			console.log(projection);

			res.status(200).send(projection);
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({ error: error });
		});
});


// ======================================================================================
// Helper Functions
function calcAvgCarbonTonChange(usages, length) {
	let monthlyChange = [];
	for (let i = 0; i < length - 1; i++) {
		let change = usages[i + 1].carbonTon - usages[i].carbonTon;
		monthlyChange.push(change);
	}

	if (monthlyChange[monthlyChange.length - 1] < 0) {
		// Recent Decrease
		return monthlyChange[monthlyChange.length - 1]
	}
	else {
		let sum = 0;
		monthlyChange.forEach(number => {
			sum += number;
		});
		let average = sum / monthlyChange.length;
		return average;
	}
}

function project(usage, carbonChangeRate) {
	// Project month to month
	let month, year, carbonTon, carbonTaxRate;
	year = usage[0].year;
	let monthlyData = []; //[month, year, carbonTon, carbonDollar, Social]
	for (let i = 0; year < 2023; i++) {
		// Calc carbon tax rate
		switch (year) {
			case 2019:
				carbonTaxRate = 20;
				break;
			case 2020:
				carbonTaxRate = 30;
				break;
			case 2021:
				carbonTaxRate = 40;
				break;
			case 2022:
				carbonTaxRate = 50;
				break;
			default:
				carbonTaxRate = 20;
		}

		if (i < usage.length) {
			month = usage[i].month;
			year = usage[i].year;
			carbonTon = usage[i].carbonTon;
			let carbonDollar = usage[i].carbonDollar;

			let data = [month, year, carbonTon, carbonDollar, carbonTon*50];
			monthlyData.push(data);

			if (month == 12) {
				month = 1;
				year++;
			}
			else {
				month++;
			}

			continue;
		}

		carbonTon += carbonChangeRate
		let data = [month, year, carbonTon, carbonTon*carbonTaxRate, carbonTon*50];
		monthlyData.push(data);

		if (month == 12) {
			month = 1;
			year++;
		}
		else {
			month++;
		}
	}

	// Use month to month projects to create year to year projections
	let anualData = [];
	let lastYear = usage[0].year;
	console.log(lastYear);
	let carbonTonSum, carbonTaxSum, carbonSocialSum;
	carbonTonSum = carbonTaxSum = carbonSocialSum = 0;
	for (let i = 0; i < monthlyData.length; i++){
		let month = monthlyData[i]

		if(month[1] != lastYear){
			if(carbonTon <= 0){
				carbonTonSum = carbonTaxSum = carbonSocialSum = 0;
			}
			let yearData = [lastYear, carbonTonSum, carbonTaxSum, carbonSocialSum];
			anualData.push(yearData);
			carbonTonSum = 0;
			carbonTaxSum = 0;
			carbonSocialSum = 0;
		}

		lastYear = month[1];
		carbonTonSum += month[2];
		carbonTaxSum += month[3];
		carbonSocialSum += month[4];

		if(month[0] == 12 && month[1] == 2022){
			if(carbonTon <= 0){
				carbonTonSum = carbonTaxSum = carbonSocialSum = 0;
			}
			let yearData = [lastYear, carbonTonSum, carbonTaxSum, carbonSocialSum];
			anualData.push(yearData); // Push final 2022 data
		}
	}
	
	return anualData;
}

// ======================================================================================
// Export Module
module.exports = router;