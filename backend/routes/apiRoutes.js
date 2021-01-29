const express = require('express');
const router = express.Router();

const { getQuizData, getQuizDataTEST, getQuizHeader, addTopScore } = require('../controllers/quizDataControl');

const { getUserScores, postUserScore } = require('../controllers/userscoresControl')

router
  .route('/quizdata/:quiz')
  .get( getQuizData )
  .put( addTopScore )

router 
  .route('/quizdataTEST/:quiz')
  .get( getQuizDataTEST )

router
  .route('/quizheaders')
  .get( getQuizHeader )
  
router 
  .route('/userscores')
  .get( getUserScores )
  .post( postUserScore )

module.exports = router;