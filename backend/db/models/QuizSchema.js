const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  questionNumber: {
    type: Number,
    required: true, 
  },
  question: {
    type: String,
    required: true, 
    trim: true
  },
  answers: {
    type: Array,
    required: true, 
  },
  correctAnswer: {
    type: String,
    required: true, 
    trim: true
  }
});

const QuizSchema = new Schema({
  quizTitle: {
    type: String,
    required: true, 
    trim: true
  },
  topScore: {
    type: Number, 
    required: true, 
    default: 0
  },
  topUsername: {
    type: String, 
    trim: true
  },
  active: {
    type: Boolean,
    required: true,
    default: false, 
  },
  questionNum: {
    type: Number, 
    required: true
  },
  timeLimit: {
    type: Number,
    required: true
  },
  questionSet: [QuestionSchema]
});

module.exports = mongoose.model('Quiz', QuizSchema, 'quiz_data')