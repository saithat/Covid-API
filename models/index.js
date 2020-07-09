const mongoose = require('mongoose');
const covid19 = require('./covid19');

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};
   
const models = { covid19 };
   
//export { connectDb };
   
module.exports = models;