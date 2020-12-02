import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import QuizPage from './components/QuizPage/QuizPage';
import Scoreboard from './components/Scoreboard/Scoreboard';

function App() {
  
  return (

    <Router>
      <div className="App"> 
        <NavBar />
        <Route exact path={"/home"} >
          <HomePage />
        </Route>
        <Route exact path={"/quiz"} >
          <QuizPage />
        </Route>
        <Route exact path={'/scoreboard'} >
          <Scoreboard />
        </Route>
    </div>
    </Router>

    // <Router>
    //   <div className="App"> 
    //     <NavBar />
    //     <Route 
    //       exact path={"/"}
    //       component={HomePage}
    //     />
    //     <Route 
    //       exact path={"/quiz"} 
    //       component={QuizPage} 
    //     />
    //     <Route 
    //       exact path={'/scoreboard'}
    //       component={Scoreboard}
    //     />
    // </div>
    // </Router>
    
  );
}

export default App;
