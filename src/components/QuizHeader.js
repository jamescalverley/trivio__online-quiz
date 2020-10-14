import React from 'react';

function QuizHeader(props){

  console.log(`Quiz Header: ${props.title}, ${props.questions}, ${props.timeLimit}`);
  

  return (
    <div className="quizheader">
      <h5>{props.title} </h5>
      <p>{props.questions} Questions</p>
      <p>{props.timeLimit} Seconds</p>
      <button>Select</button>
    </div>
  );
};

export default QuizHeader;