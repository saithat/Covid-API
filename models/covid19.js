const mongoose = require('mongoose');

const covid19Schema = new mongoose.Schema(
    {
        iso_code: String,
        continent: String,
        location: String,
        location_id: String,
        date: Date,
        total_cases: Number,
        new_cases: Number,
        total_deaths: Number
    },
    { collection : 'covid19_data' }
);

module.exports = mongoose.model('covid19', covid19Schema);