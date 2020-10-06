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
  active: {
    type: Boolean, 
    required: true
  },
  questions: [QuestionSchema]
});

module.exports = mongoose.model('Quiz', QuizSchema)