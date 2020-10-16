const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScoreSchema = new Schema({
  username: {
    type: String, 
    required: true, 
    trim: true
  },
  score: {
    type: Number, 
    required: true
  }, 
  quiz: {
    type: String, 
    required: true,
    trim: true, 
  }
});

module.exports = mongoose.model('UserScore', UserScoreSchema);

