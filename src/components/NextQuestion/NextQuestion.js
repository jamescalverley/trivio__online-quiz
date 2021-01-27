import React from 'react';
import './NextQuestion.css';

function NextQuestion(props){
  return (
    <div className="next-question">
      <button onClick={ () => { props.nextQuestion(); props.checkAnswer() } }>
          NEXT
      </button>
    </div>
  );
};

export default NextQuestion;