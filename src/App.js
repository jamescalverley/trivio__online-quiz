import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import QuizSelectPage from './pages/QuizSelectPage/QuizSelectPage';
import Quiz from './pages/QuizPage/Quiz';
import Scoreboard from './pages/Scoreboard/Scoreboard';
import {  Switch, Route, useLocation } from 'react-router-dom';
//Animations
import {AnimatePresence} from 'framer-motion';


function App() {

  const location = useLocation();

  return (
    <div className="App"> 
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key} >
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/quiz-select">
            <QuizSelectPage />
          </Route>
          <Route path="/quiz/:selectedQuiz" >
            <Quiz />  
          </Route> 
          <Route exact path='/leaderboard' >
            <Scoreboard />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
