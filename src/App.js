import React, {useState} from 'react';
import './App.css';
import seedData from './seedData.js';
import Nav from './components/Nav';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import EndQuiz from './components/EndQuiz';
// import TimeExpire from './components/TimeExpire';

function App() {

  const quizQuestions = seedData.questions;
  
  const [startBtnDisplay, setStartBtnDisplay] = useState(true);
  const [quizDisplay, setQuizDisplay] = useState(false);
  const [timerDisplay, setTimerDisplay] = useState(false);
  const [endDisplay, setEndDisplay] = useState(false);
  // const [timeExpire, setTimeExpireDisplay] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [userCorrect, setUserCorrect] = useState(0);
  const [currentUserName, setCurrentUserName] = useState('');

  console.log("[App] Userscore:", userScore);
  console.log("[App] User Correct Count: ", userCorrect)
  console.log("[App] Current username: ", currentUserName)
  let quizLength = quizQuestions.length;

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

  // function timeExpireHandler(){
  //   console.log("running timeExpireHandler")
  //   setTimeExpireDisplay(true)
  // }

  return (
    <div className="App"> 
      <Nav />
      <h1>Quiz App</h1>
      { startBtnDisplay &&
        <button onClick={ () => {startQuiz(); startTimer(); setStartBtnDisplay(false) }}>START QUIZ</button>
      }
      { quizDisplay && 
        <Quiz 
          questions={quizQuestions}
          stopQuiz={stopQuiz} 
          stopTimer={stopTimer} 
          startQuiz={startQuiz}
          userScore={userScore}
          setUserScore={setUserScore}
          userCorrect={userCorrect} 
          setUserCorrect={setUserCorrect} 
        /> }
      { timerDisplay &&
        <Timer /> }
       { endDisplay &&
        <EndQuiz 
          userCorrect={userCorrect} 
          userScore={userScore} 
          quizLength={quizLength}
          username={currentUserName}
          setUsername={setCurrentUserName}
          setEndDisplay={setEndDisplay}
        /> }
      
      
    </div>
  );
}

export default App;
