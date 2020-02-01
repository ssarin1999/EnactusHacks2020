// ======================================================================================
// Packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')

// API Routes
const UsageRoutes = require('./api/UsageRoute');
const ClientRoutes = require('./api/ClientRoute');

const app = express();


// ======================================================================================
// Middleware
app.use(bodyParser.json());
app.use(cors())


// ======================================================================================
// Connect to mongoDB
const mongoURL = 'mongodb+srv://avatanab:mongopower@mongodb-r6m0u.mongodb.net/Enactus?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));


// ======================================================================================
// Use Routes
app.use('/api/usage', UsageRoutes);
app.use('/api/client', ClientRoutes);


// ======================================================================================
// Start Server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Backend Server listening on port ${port}`));
