import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Quiz from './components/Quiz';
import Timer from './components/Timer';

function App() {
  
  return (
    <div className="App"> 
      <Nav />
      <h1>Quiz App</h1>
      <Quiz />
      <Timer /> 
    </div>
  );
}

export default App;
