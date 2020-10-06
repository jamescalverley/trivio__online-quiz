const Quiz = require('../db/models/QuizSchema');

const getQuizData = async (req,res) => {
  console.log(req.url);
  try {
    const quizNeeded = req.params.quiz;
    const newQuiz = Quiz;
    console.log(newQuiz)
    return res.status(200).json({
      success: true,
      message: "Success - getQuizData",
      data: quizNeeded});

  } catch (err) {
      return res.status(500).json({
        success: false, 
        message: "SERVER ERROR -- getQuizData", 
        error: err 
      });
  };
};

module.exports = { getQuizData }; 