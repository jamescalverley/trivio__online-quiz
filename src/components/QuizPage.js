import React, {useEffect, useState} from 'react';
import TimeExpire from './TimeExpire';
import Quiz from './Quiz';
import Timer from './Timer';
import EndQuiz from './EndQuiz'

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
  const [currentUserName, setCurrentUserName] = useState("");

//* quiz data
  const[quizData, setQuizData] = useState([]);
  let quizLength = quizData.length;

  async function getQuizData(){
    console.log("[getQuizData]");
    const url = '/api/quiz';
    const response = await fetch(url);
    const data = await response.json();
    console.log("____quiz data", data)    
    setQuizData(data);
  };

  function startQuiz(){
    console.log("starting quiz ++++ ")
    setQuizDisplay(true);
  };

  function stopQuiz(){
    console.log("stopping quiz ---- ")
    setQuizDisplay(false);
    setEndDisplay(true);
  };

  function startTimer(){
    setTimerDisplay(true);
  };
  function stopTimer(){
    setTimerDisplay(false)
  };

  function trueTimer(){
    setTimeout( () => {
      console.log("TIME IS UP");
      setOpenModal(true);
    }, 60*1000)
  };

  useEffect( () => {
    console.log("--getting QUIZ and HIGHSCORES data--");
    getQuizData();
    
}, [])

  return (
    <div className="quiz-page">
      <h1>Quiz Page</h1>

      { startBtnDisplay &&
        <button onClick={ () => {trueTimer(); startQuiz(); startTimer(); setStartBtnDisplay(false) }}>START QUIZ</button> 
      }
      { openModal && 
        <TimeExpire 
          setQuizDisplay={setQuizData}  
          setQuizData={setQuizData}
        /> 
      } 
      { quizDisplay && 
        <Quiz 
          questions={quizData.questions}
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
          quizLength={quizLength}
          username={currentUserName}
          setUsername={setCurrentUserName}
          setEndDisplay={setEndDisplay}
        /> 
      }
    </div>
  )
};

export default QuizPage;