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
  }
});

module.exports = mongoose.model('UserScore', UserScoreSchema);