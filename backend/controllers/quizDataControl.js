const Quiz = require('../db/models/QuizSchema');

const getQuizData = async (req,res) => {
  console.log(req.url);
  try {
    const quizNeeded = req.params.quiz;
    console.log("Quiz needed".red, quizNeeded)
    const quizData = await Quiz.findOne( {quizTitle: quizNeeded } );
    console.log("SENDING QUIZ DATA --- DB".red, quizData)
    return res.status(200).json({
      success: true,
      message: "Success - getQuizData",
      data: quizData});
  } catch (err) {
      return res.status(500).json({
        success: false, 
        message: "SERVER ERROR -- getQuizData", 
        error: err 
      });
  };
};

module.exports = { getQuizData }; 