const express = require('express');
const router = express.Router();
const axios = require('axios');


// Models
const EnergyProvider = require('../models/EnergyProvider');
/*	EnergyProviderSchema = {
		name: String,
		type: String,
		ratePerKwh: Number,
		address: String,
		postal: String,
		city: String,
		province: String,
		country: String
	}
*/

// ======================================================================================
// API's

// '/api/provider' - GET - Get all energy providers
router.get('/', (req, res) => {
	console.log("GET request to /api/provider");
	EnergyProvider.find().then(items => {
		res.json(items)
	})
	.catch(err => {
        res.status(500).json({error: err});
    });
});

// '/api/provider' - POST - Add new provider to table
router.post('/', (req, res) => {
	console.log("POST request to /api/provider");
    const newEnergyProvider = new EnergyProvider({
        name: req.body.name,
		type: req.body.type,
		ratePerKwh: req.body.ratePerKwh,
		address: req.body.address,
		postal: req.body.postal,
		city: req.body.city,
		province: req.body.province,
		country: req.body.country
    });

	newEnergyProvider.save().then(item => {
		res.json(item);
		console.log(item);
	})
	.catch(err => {
        res.status(500).json({error: err});
    });
});

// '/api/provider/:clientName/:rankings' - GET - Get ranked energy providers 
router.get('/:clientName/:rankings', (req, res) => {
    let clientName = req.params.clientName;
    let rankings = req.params.rankings.split(',');
    console.log("GET request to /api/provider/" + clientName + "/" + req.params.rankings);
    
    axios.get('http://localhost:8080/api/client/province/' + clientName)
		.then(response => {
            let province = response.data;
            EnergyProvider.find({province: province}).then(items => {
                // items = array of all providers in province
                let rankedProviders = rankProviders(items, rankings);
                res.json(rankedProviders);
            })
            .catch(err => {
                res.status(500).json({error: err});
            });
			
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({ error: error });
		});
});


// ======================================================================================
// Helper Functions
function rankProviders(providers, ranking){
    console.log(providers);
    console.log(ranking);

    // Initialize provider scores
    let providerScores = [];
    for(let i = 0; i < providers.length; i++){
        providerScores.push(0);
    }
    console.log(providerScores);

    // Calculate Scores
    let currentCriteria = 1;
    for(let i = 0; i < ranking.length; i++){
        if(parseInt(ranking[i]) == currentCriteria){
            for(let j = 0; j < providers.length; j++){
                providerScores[j] += parseInt(providers[j].ratings.split(',')[i]);
            }
            currentCriteria++;
            i = 0;
        }
        if(currentCriteria >= 4){
            // Ties breaks should take place...
            break;
        }
    }
    console.log(providerScores);

    // Order Providers by rank 
    for(let i = 0; i < providerScores.length-1; i++){
        if(providerScores[i+1] > providerScores[i]){
            let tempProvider = providers[i];
            providers[i] = providers[i+1];
            providers[i+1] = tempProvider;

            let tempScore = providerScores[i];
            providerScores[i] = providerScores[i+1];
            providerScores[i+1] = tempScore;

            i = 0;
        }
    }
    console.log(providerScores);
    console.log(providers);

    return providers;
}


// ======================================================================================
// Export Module
module.exports = router;