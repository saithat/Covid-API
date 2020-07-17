const mongoose = require('mongoose');

// Specifying the format of the JSON data
const dataSchema = mongoose.Schema({
  iso_code: String,
  continent: String,
  location: String,
  location_id: Number,
  date: String,
  total_cases: Number,
  new_cases: Number,
  total_deaths: Number,
});

module.exports = mongoose.model('covid-data', dataSchema);
