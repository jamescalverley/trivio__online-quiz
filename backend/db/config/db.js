const mongoose = require('mongoose');
require('dotenv').config();

//const uri = process.env.MONGO_URI;

const { mongoURI } = require('../../../config.js')

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect( mongoURI, { 
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log(`mongoDB connected -- ${connect.connection.host}`.cyan);
  } catch (err) {
      console.log(`Mongo DB ERROR --- ${err.message}`.red )
  };
};

module.exports = dbConnection;