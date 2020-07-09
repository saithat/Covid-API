const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// Welcome page
router.get('/', async (req, res) => {
  res.send('Welcome! Go to ../api for the data!');
});

// Shows all the data
router.get('/api', async (req, res) => {
  try {
    const covidData = await Data.find();
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

// Shows data of the given location_id
router.get('/api/:id', async (req, res) => {
  try {
    const covidData = await Data.find({ location_id: req.params.id });
    res.json(covidData);
  } catch (err) {
    res.json({ message: err });
  }
});

// -----(FOR TESTING)-----
router.post('/post', (req, res) => {
  const data = new Data({
    iso_code: req.body.iso_code,
    continent: req.body.continent,
    location: req.body.location,
    location_id: req.body.location_id,
    date: req.body.date,
    total_cases: req.body.total_cases,
    new_cases: req.body.new_cases,
    total_deaths: req.body.total_deaths,
  });

  data
    .save()
    .then((info) => {
      res.json(info);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
