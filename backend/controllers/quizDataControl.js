const Quiz = require('../db/models/QuizSchema');

const getQuizData = async (req,res) => {
  try {
    const quizNeeded = req.params.quiz;
    //console.log("Quiz needed".red, quizNeeded)
    const quizData = await Quiz.findOne({ _id: quizNeeded });
    //console.log("SENDING QUIZ DATA --- DB".red, quizData)
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

const getQuizHeader = async (req,res) => {
  try {
    const quizResults = await Quiz.find( {}, { quizTitle: 1, topScore: 1, timeLimit: 1, questionNum: 1, imageIcon: 1, imageAlt: 1 });
    //console.log("RESULT".red, quizResults)
    return res.status(200).json({
      success: true,
      message: "Success - getQuizData",
      data: quizResults});
  } catch (err) {
    return res.status(500).json({
      success: false, 
      message: "SERVER ERROR -- getQuiz", 
      error: err 
    });
  }; 
};

const addTopScore = async (req,res) => {
  try { 
    await Quiz.updateOne({ "_id": req.params.quiz }, { $set: { "topScore": req.body.topScore, "topUsername": req.body.topUsername }});
    //console.log("Success".green, topAdd.n)
    return res.status(200).json({
      success: true,
      message: "Sucess - addTopScore"
    })
  } catch (err) {
    return res.status(500).json({
      success: false, 
      message: "SERVER ERROR -- addTopScore", 
      error: err 
    });
  };
};

module.exports = { getQuizData, getQuizHeader, addTopScore }; 