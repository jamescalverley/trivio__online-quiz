

const getQuizData = async (req,res) => {
  console.log(req.url);
  const quizNeeded = req.params.quiz
  res.send({message: "getQuizData working", data: quizNeeded});
}

const getUserScores = async (req,res) => {
  console.log(req.url);
  res.send({message: "getUserScores working"});
};

const postUserScore = async (req,res) => {
  console.log(req.url);
  const data = req.body;
  res.send({message: "postUserScore working", data: data});
};

module.exports = { getQuizData, getUserScores, postUserScore }; 