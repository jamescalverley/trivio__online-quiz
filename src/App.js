import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Quiz from './components/Quiz';
import Timer from './components/Timer';

function App() {
  
  const [quizDisplay, setQuizDisplay] = useState(false);

  function startQuiz(){
    console.log("starting quiz ++++ ")
    setQuizDisplay(true);
  };

  return (
    <div className="App"> 
      <Nav />
      <h1>Quiz App</h1>
      { quizDisplay && 
        <Quiz /> }
      <Timer startQuiz={startQuiz} /> 
    </div>
  );
}

export default App;
