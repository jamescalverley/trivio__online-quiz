const express = require('express');
const router = express.Router();

const { getQuizData, getUserScores, postUserScore } = require('../controllers/quizDataControl')

router
  .route('/quizdata/:quiz')
  .get( getQuizData )
  
router 
  .route('/userscores')
  .get( getUserScores )
  .post( postUserScore )


module.exports = router;