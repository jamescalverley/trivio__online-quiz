import React from 'react';

function QuizHeader(props){

  console.log(`Quiz Header: ${props.title}, ${props.questions}, ${props.timeLimit}`);

  function handleStart(value){
    console.log("Button clicked", value);
    props.getQuizDataAPI(value);
    props.handleQuizStart();
  };
  
  return (
    <div className="quizheader">
      <h5>{props.title} </h5>
      <p>{props.questions} Questions</p>
      <p>{props.timeLimit} seconds</p>
      <button onClick={ () => handleStart(props.quizID) }>Select</button>
    </div>
  );
};

export default QuizHeader;

