import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from './components/Nav';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import EndQuiz from './components/EndQuiz';
import Scoreboard from './components/Scoreboard';
import TimeExpire from './components/TimeExpire';

// import TimeExpire from './components/TimeExpire';

function App() {
  
  //* display states
  const [startBtnDisplay, setStartBtnDisplay] = useState(true);
  const [quizDisplay, setQuizDisplay] = useState(false);
  const [timerDisplay, setTimerDisplay] = useState(false);
  const [endDisplay, setEndDisplay] = useState(false);
  const [scoreboardDisplay, setScoreboardDisplay] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  
  //* current user state
  const [userScore, setUserScore] = useState(0);
  const [userCorrect, setUserCorrect] = useState(0);
  const [currentUserName, setCurrentUserName] = useState("");

  //* quiz data
  const[quizData, setQuizData] = useState([]);
  let quizLength = quizData.length;
  
  //* highscores data
  const [highScoresData, setHighScoresData] = useState([]);
  
  async function getQuizData(){
    console.log("[getQuizData]");
    const url = '/api/quiz';
    const response = await fetch(url);
    const data = await response.json();
    console.log("____quiz data", data)    
    setQuizData(data);
  };

  async function getScoreData(){
    const url = '/api/scoreboard';
    const response = await fetch(url);
    const data = await response.json();
    console.log("____score data", data)    
    setHighScoresData(data);
  };
  
  function trueTimer(){
    setTimeout( () => {
      console.log("TIME IS UP");
      setOpenModal(true);
    }, 3*1000)
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

  useEffect( () => {
    console.log("--getting QUIZ and HIGHSCORES data--");
    getQuizData();
    getScoreData();
}, [])

  return (
    <div className="App"> 
      <Nav />
      <h1>Quiz App</h1>
      { openModal && 
        <TimeExpire 
          setQuizDisplay={setQuizData}  
          setQuizData={setQuizData}
        /> } 
      { startBtnDisplay &&
        <button onClick={ () => {trueTimer(); startQuiz(); startTimer(); setStartBtnDisplay(false) }}>START QUIZ</button> }
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
          highScores={highScoresData} 
          setScoreboardDisplay={setScoreboardDisplay}
          setStartBtnDisplay={setStartBtnDisplay}
      /> }
    </div>
  );
}

export default App;
