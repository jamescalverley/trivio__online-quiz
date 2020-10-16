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

//! look into creating a sub component for the button to hold the value of the quiz header that needs to be passed 

//*
// pass the getQuizDataAPI function into the QuizHeader component and call it through handleStart
// adjust function to take in the ID that is being searched and pass through the API route
// adjust controller function to search and return quiz data for the ID that is given 