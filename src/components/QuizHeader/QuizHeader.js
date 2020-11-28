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
      <h3>{props.title}</h3>
      <p>{props.questions} Questions</p>
      <p>{props.timeLimit} seconds</p>
      <h4>High Score: {props.topScore}</h4>
      <button onClick={ () => handleStart(props.quizID) }>Select</button>
    </div>
  );
};

export default QuizHeader;

