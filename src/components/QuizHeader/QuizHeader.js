import React from 'react';
import './QuizHeader.css';

function QuizHeader(props){

  //console.log(`Quiz Header: ${props.title}, ${props.questions}, ${props.timeLimit}`);

  function handleStart(value){
    //console.log("Button clicked", value);
    props.getQuizDataAPI(value);
    props.handleQuizStart( props.timeLimit );
  };
  
  return (
    <div className="quizheader">
      <h2>{props.title}</h2>
      <div className="quiz-info">
        <p>{props.questions} Questions</p>
        <p>{props.timeLimit} seconds</p>
      </div>
    
      
      <div className="highscore">
        <h4>High Score <span>{props.topScore}</span></h4>
      </div>
      
      <button onClick={ () => handleStart(props.quizID) }>Select</button>
    </div>
  );
};

export default QuizHeader;

