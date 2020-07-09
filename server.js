// REQUIRED DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// App + PORT + Database URL
const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = 'mongodb://localhost:27017/covid';

// --(TEST)-- Shows the user given data (post) in json format
app.use(bodyParser.json());

// Routes
const covidDataRoute = require('./routes/data-routes');
app.use(covidDataRoute);

// Connect to MongoDB -- Local Database
mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('DB connection successful!')
);

// Listen to the server
app.listen(PORT, () => console.log(`Listening...http://localhost:${PORT}`));
