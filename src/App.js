import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Timer from './components/Timer';

function App() {
  
  return (
    <div className="App"> 
      <Nav />
      <h1>Quiz App</h1>
      <Timer /> 
    </div>
  );
}

export default App;
