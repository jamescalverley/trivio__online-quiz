import React, {useState, useEffect} from 'react';
import './App.css';
import {seedData} from './data/seedData.js';
import Nav from './components/Nav';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import EndQuiz from './components/EndQuiz';
import Scoreboard from './components/Scoreboard';
// import TimeExpire from './components/TimeExpire';

function App() {
  
  //* display states
  const [startBtnDisplay, setStartBtnDisplay] = useState(true);
  const [quizDisplay, setQuizDisplay] = useState(false);
  const [timerDisplay, setTimerDisplay] = useState(false);
  const [endDisplay, setEndDisplay] = useState(false);
  const [scoreboardDisplay, setScoreboardDisplay] = useState(false);
  // const [timeExpire, setTimeExpireDisplay] = useState(false);
  
  //* current user state
  const [userScore, setUserScore] = useState(100);
  const [userCorrect, setUserCorrect] = useState(0);
  const [currentUserName, setCurrentUserName] = useState('quizmaster1000');

  //* quiz data
  const quizQuestions = seedData.questions;
  
  //* highscores data
  const [highScoresData, setHighScoresData] = useState([]);
  let quizLength = quizQuestions.length;

  async function getScoreData(){
    const url = '/api/scoreboard';
    const response = await fetch(url);
    const data = await response.json();
    console.log("____data", data)    
    await setHighScoresData(data);
  };

  
  console.log("[App] Userscore:", userScore);
  console.log("[App] User Correct Count: ", userCorrect)
  console.log("[App] Current username: ", currentUserName)
  

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

  useEffect( () => {
    console.log("--getting QUIZ and HIGHSCORES data--");
    getScoreData();
}, [])


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
          setHighScoresData={setHighScoresData}
          setEndDisplay={setEndDisplay}
          setScoreboardDisplay={setScoreboardDisplay}
      /> }
      { scoreboardDisplay &&
        <Scoreboard 
          username={currentUserName}
          userscore={userScore}
          highScores={highScoresData} 
      /> }
    </div>
  );
}

export default App;
