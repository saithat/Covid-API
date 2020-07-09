const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//const models = require('./models/index');
var connectDb = require('./models').connectDb;
var locRouter = require('./routes/location');
var indexRouter = require('./routes/index');


dotenv.config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const app = express();
app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware
// * Routes * //
app.use('/', indexRouter)
app.use('/location', locRouter);

/*app.get('/', (req, res) => {
    res.send('Hello World!');
  });

//const url = 'mongodb://127.0.0.1:27017/covid19'

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})*/

var listener = app.listen(process.env.PORT, function() {
    //console.log(`listening on ${process.env.PORT}!`)
    console.log("server started on port %d",listener.address().port);
  });