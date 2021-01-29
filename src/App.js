import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import QuizSelectPage from './pages/QuizSelectPage/QuizSelectPage';
import Quiz from './components/Quiz/Quiz';
import Scoreboard from './pages/Scoreboard/Scoreboard';

function App() {
  
  return (

    <Router>
      <div className="App"> 
        <NavBar />
        <Route exact path={"/"} >
          <HomePage />
        </Route>
        <Route exact path={"/quiz-select"} >
          <QuizSelectPage />
        </Route>
        <Route path={"/quiz/:selectedQuiz"} >
          <Quiz />  
        </Route> 
        <Route exact path={'/leaderboard'} >
          <Scoreboard />
        </Route>
      </div>
    </Router>
  );
}

export default App;
