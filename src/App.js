import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Quiz from './components/Quiz';
import Timer from './components/Timer';

function App() {
  
  const [quizDisplay, setQuizDisplay] = useState(false);
  const [timerDisplay, setTimerDisplay] = useState(false);

  function startQuiz(){
    console.log("starting quiz ++++ ")
    setQuizDisplay(true);
  };

  function stopQuiz(){
    console.log("stopping quiz ---- ")
    setQuizDisplay(false);
  };

  function startTimer(){
    setTimerDisplay(true);
  };
  function stopTimer(){
    setTimerDisplay(false)
  };

  return (
    <div className="App"> 
      <Nav />
      <h1>Quiz App</h1>
      <button onClick={ () => {startQuiz(); startTimer() }}>START QUIZ</button>
      { quizDisplay && 
        <Quiz stopQuiz={stopQuiz} stopTimer={stopTimer} /> }
      { timerDisplay &&
        <Timer startQuiz={startQuiz} /> 
      }
      
    </div>
  );
}

export default App;
