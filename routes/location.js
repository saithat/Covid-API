var express = require('express');
var router = express.Router();
var covid19 = require('../models/covid19')

router.get('/', async (req, res) => {
  console.log("Getting all documents")
  let locations = await covid19.find().sort({date : -1});
  //console.log(locations)
  return res.send(locations);
});

router.get('/location', async (req, res) => {
    console.log("Getting all documents sorted by location_id")
    let locations = await covid19.find().sort({location_id : 1});
    //console.log(locations)
    return res.send(locations);
  });

  router.get('/test', (req, res) => {
    console.log("Getting test")
    res.send("test")
  })

router.get('/:id', async (req, res) => {
    //console.log("location_ID parameter: ", req.params.location_ID)
    let rows = await covid19.find({location_id : req.params.id}
    );
    return res.send(rows);
});

module.exports = router;