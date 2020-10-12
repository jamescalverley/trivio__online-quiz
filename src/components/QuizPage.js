import React, {useEffect, useState} from 'react';
import TimeExpire from './TimeExpire';
import Quiz from './Quiz';
import Timer from './Timer';
import EndQuiz from './EndQuiz';
const axios = require('axios');

function QuizPage(){
//* display states
  const [startBtnDisplay, setStartBtnDisplay] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [quizDisplay, setQuizDisplay] = useState(false);
  const [timerDisplay, setTimerDisplay] = useState(false);
  const [endDisplay, setEndDisplay] = useState(false);

//* current user state
  const [userScore, setUserScore] = useState(0);
  const [userCorrect, setUserCorrect] = useState(0);
  const [currentUserName, setCurrentUserName] = useState([]);

//* quiz data
  const[quizData, setQuizData] = useState({quizTitle: "", topScore: 0, active: false, questionSet:[] });
  let questionsLength = quizData.questionSet.length;

  
  async function getQuizDataAPI(){
    try {
      const result = await axios.get('/api/quizdata/Geography');
      const quizData = result.data.data;
      console.log("setting as quizData", quizData);
      setQuizData( {...quizData} );
    } catch (err) {
      console.log("ERROR", err);
    };
  };

  function startQuiz(){
    console.log("starting quiz ++++ ");
    setQuizDisplay(true);
  };

  function stopQuiz(){
    console.log("stopping quiz ---- ");
    setQuizDisplay(false);
    setEndDisplay(true);
  };

  function startTimer(){
    setTimerDisplay(true);
  };
  function stopTimer(){
    setTimerDisplay(false);
  };

  function trueTimer(){
    setTimeout( () => {
      console.log("TIME IS UP");
      setOpenModal(true);
    }, 60*1000)
  };

  useEffect( () => {
    console.log("--getting QUIZ and HIGHSCORES data--");
    
    getQuizDataAPI();
    
}, [])

  return (
    <div className="quiz-page">
      <h1>Quiz Page</h1>
      <button onClick={getQuizDataAPI}>TEST</button>  

      { startBtnDisplay &&
        <button onClick={ () => {trueTimer(); startQuiz(); startTimer(); setStartBtnDisplay(false) }}>START QUIZ</button> 
      }
      { openModal && 
        <TimeExpire 
          // setQuizDisplay={setQuizData}  
          // setQuizData={setQuizData}
        /> 
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
        /> 
      }
      { timerDisplay &&
        <Timer /> 
      }      
      { endDisplay &&
        <EndQuiz 
          userCorrect={userCorrect} 
          userScore={userScore} 
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