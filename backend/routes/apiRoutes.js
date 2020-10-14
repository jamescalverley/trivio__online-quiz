const express = require('express');
const router = express.Router();

const { getQuizData, getQuizHeader } = require('../controllers/quizDataControl');

const { getUserScores, postUserScore } = require('../controllers/userscoresControl')

router
  .route('/quizdata/:quiz')
  .get( getQuizData )

router
  .route('/quizheaders')
  .get( getQuizHeader )
  
router 
  .route('/userscores')
  .get( getUserScores )
  .post( postUserScore )

module.exports = router;