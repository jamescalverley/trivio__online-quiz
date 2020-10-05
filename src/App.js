import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import Scoreboard from './components/Scoreboard';

function App() {
  
  return (
    <Router>
      <div className="App"> 
        <NavBar />
        <Route 
          exact path={"/home"}
          component={HomePage}
        />
        <Route 
          exact path={"/quiz"} 
          component={QuizPage} 
        />
        <Route 
          exact path={'/scoreboard'}
          component={Scoreboard}
        />
    </div>
    </Router>
    
  );
}

export default App;
