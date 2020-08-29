import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import EndQuiz from './components/EndQuiz';
// import TimeExpire from './components/TimeExpire';

function App() {
  
  const [startBtnDisplay, setStartBtnDisplay] = useState(true);
  const [quizDisplay, setQuizDisplay] = useState(false);
  const [timerDisplay, setTimerDisplay] = useState(false);
  const [endDisplay, setEndDisplay] = useState(false);
  // const [timeExpire, setTimeExpireDisplay] = useState(false);

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
          stopQuiz={stopQuiz} 
          stopTimer={stopTimer} 
          startQuiz={startQuiz} 
        /> }
      { timerDisplay &&
        <Timer /> }
       { endDisplay &&
        <EndQuiz /> }
      
    </div>
  );
}

export default App;
