import React from 'react';
import './NextQuestion.css';

function NextQuestion(props){
  console.log("RENDER ___ NextQuestion")
  return (
    <div className="next-question">
      <button onClick={ () => { props.nextQuestion(); props.checkAnswer() } }>
          NEXT
      </button>
    </div>
  );
};

export default NextQuestion;