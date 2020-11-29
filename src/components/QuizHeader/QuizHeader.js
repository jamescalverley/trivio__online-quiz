import React from 'react';
import './QuizHeader.css';

function QuizHeader(props){

  //console.log(`Quiz Header: ${props.title}, ${props.questions}, ${props.timeLimit}`);

  function handleStart(value){
    //console.log("Button clicked", value);
    props.getQuizDataAPI(value);
    props.handleQuizStart();
  };
  
  return (
    <div className="quizheader">
      <h2>{props.title}</h2>
      <p>{props.questions} Questions</p>
      <p>{props.timeLimit} seconds</p>
      <div className="highscore">
        <h5>High Score</h5>
        <h4>{props.topScore}</h4>
      </div>
      
      <button onClick={ () => handleStart(props.quizID) }>Select</button>
    </div>
  );
};

export default QuizHeader;

