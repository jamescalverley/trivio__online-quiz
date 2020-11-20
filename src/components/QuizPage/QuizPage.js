import React, {useEffect, useState} from 'react';
import './QuizPage.css';
import TimeExpire from '../TimeExpire/TimeExpire';
import PreQuiz from '../PreQuiz/PreQuiz';
import QuizSelect from '../QuizSelect/QuizSelect';
import Quiz from '../Quiz/Quiz';
import Timer from '../Timer/Timer';
import EndQuiz from '../EndQuiz/EndQuiz';
const axios = require('axios');

function QuizPage(){

  console.log("RENDER ___ QuizPage");

//* display states
  const [timeExpireDisplay, setTimeExpireDisplay] = useState(false);
  const [quizSelectDisplay, setQuizSelectDisplay] = useState(true);
  const [preQuizDisplay, setPreQuizDisplay] = useState(false);
  const [quizDisplay, setQuizDisplay] = useState(false);
  const [timerDisplay, setTimerDisplay] = useState(false);
  const [endDisplay, setEndDisplay] = useState(false);

//* current user state
  const [userScore, setUserScore] = useState(0);
  const [userCorrect, setUserCorrect] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);
  const [currentUserName, setCurrentUserName] = useState([]);

//* quiz data
  const [quizHeaders, setQuizHeaders] = useState([]);
  const [quizData, setQuizData] = useState({quizTitle: "", topScore: 0, active: false, questionSet:[] });
  let questionsLength = quizData.questionSet.length;
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  async function getQuizHeaders(){
    try {
      const result = await axios.get('/api/quizheaders');
      //console.log("QUIZ HEADERS", result);
      const quizHeaders = result.data.data;
      //console.log(">>>", quizHeaders);
      setQuizHeaders(quizHeaders)
    } catch (err) {
      console.log("ERROR", err)
    };
  };

  async function getQuizDataAPI(quiz){
    try {
      //console.log("finding ---", quiz)
      const result = await axios.get(`/api/quizdata/${quiz}`);
      const quizData = result.data.data;
     // console.log("setting as quizData", quizData);
      setQuizData( {...quizData} );
    } catch (err) {
      console.log("ERROR", err);
    };
  };

  function startQuiz(){
    //console.log("starting quiz ++++ ");
    setQuizDisplay(true);
    setQuizSelectDisplay(false);
    setStartTime(Date.now());
  };

  function stopQuiz(){
    //console.log("stopping quiz ---- ");
    setQuizDisplay(false);
    setEndDisplay(true);
  };

  function startTimer(){
    setTimerDisplay(true);
  };
  function stopTimer(){
    setTimerDisplay(false);
  };

  function resetQuiz(){
    //console.log("resetting quiz");
    setQuizDisplay(false);
    setTimerDisplay(false);
    setUserScore(0);
  };

  function restartQuiz(){
    //console.log("restarting quiz");
    setTimeExpireDisplay(false);
    setPreQuizDisplay(true)
    preQuizTimer();
    resetQuiz();
  };
  
  function preQuizTimer(){
    setTimeout( () => {
      setPreQuizDisplay(false);
      setQuizDisplay(true);
      startTimer();
      startQuiz();
      trueTimer( quizData.timeLimit );
    }, 3000);
  };

  function trueTimer( seconds ){
    console.log(`True timer starting --- ${seconds}`)
    setTimeout( () => {
      //console.log("TIME IS UP");
      setTimeExpireDisplay(true);
      setQuizDisplay(false);
      setTimerDisplay(false);
    }, seconds *1000)
  };

  useEffect( () => {
    //console.log("--getting QUIZ and HIGHSCORES data--");
    getQuizHeaders();
}, [])

  return (
    <div className="quiz-page">
      <h1>Quiz Page</h1>
      { quizSelectDisplay && 
        <QuizSelect 
          quizHeaders={quizHeaders} 
          getQuizDataAPI={getQuizDataAPI}
          preQuizTimer={preQuizTimer}
          setPreQuizDisplay={setPreQuizDisplay}
          setQuizSelectDisplay={setQuizSelectDisplay}
        />
      }
      { timeExpireDisplay && 
        <TimeExpire 
          restartQuiz={restartQuiz}
        /> 
      } 
      { preQuizDisplay && 
        <PreQuiz />
      }
      { quizDisplay && 
        <Quiz 
          quizData={quizData}
          stopQuiz={stopQuiz} 
          stopTimer={stopTimer} 
          startQuiz={startQuiz}
          userScore={userScore}
          setUserScore={setUserScore}
          userCorrect={userCorrect} 
          setUserCorrect={setUserCorrect} 
          setEndTime={setEndTime}
          startTime={startTime}
          endTime={endTime}
          setBonusPoints={setBonusPoints}
        /> 
      }
      { timerDisplay &&
        <Timer quizSeconds={quizData.timeLimit}/> 
      }      
      { endDisplay &&
        <EndQuiz 
          userCorrect={userCorrect} 
          userScore={userScore} 
          bonusPoints={bonusPoints}
          quizTitle={quizData.quizTitle}
          quizID={quizData._id}
          quizSeconds={quizData.timeLimit}
          topScore={quizData.topScore}
          quizLength={questionsLength}
          username={currentUserName}
          setUsername={setCurrentUserName}
          setEndDisplay={setEndDisplay}
        /> 
      }
    </div>
  )
};

export default QuizPage;