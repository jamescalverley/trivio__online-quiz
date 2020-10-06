const express = require('express');
const router = express.Router();

const { getQuizData } = require('../controllers/quizDataControl');

const { getUserScores, postUserScore } = require('../controllers/userscoresControl')

router
  .route('/quizdata/:quiz')
  .get( getQuizData )
  
router 
  .route('/userscores')
  .get( getUserScores )
  .post( postUserScore )


module.exports = router;