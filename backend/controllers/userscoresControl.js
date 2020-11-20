const UserScore = require('../db/models/UserScoreSchema');

const getUserScores = async (req,res) => {
  console.log(req.url + req.method);
  try {
    const scores = await UserScore.find();
    console.log("Getting User Scores", scores);
    return res.status(200).json({
      success: true, 
      results: scores.length, 
      data: scores
    });
  } catch (err) {
      return res.status(500).json({
        success: false, 
        message: "SERVER ERROR -- getUserScores", 
        error: err
      })
  };
};

const postUserScore = async (req,res) => {
  console.log(req.url + req.method);
  try {
    const scoreData = {
      username: req.body.username,
      score: req.body.score, 
      quiz: req.body.quiz
    };
    const userScore = await UserScore.create(scoreData)
    console.log("New score added:", userScore)
    return res.status(200).json({
      success: true, 
      message: "NEW userscore added", 
      data: userScore
    });
  } catch (err) {
      return res.status(500).json({
        success: false, 
        message: "SERVER ERROR -- postUserScore", 
        error: err
      });
  };
};

module.exports = { getUserScores, postUserScore };