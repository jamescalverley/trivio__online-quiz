import React from 'react';
import QuizHeader from './QuizHeader';


function QuizSelect(props){

 

  return (
    <div className="quizselect-container">
      <div className="quizselect-title">
        <h2>Select a quiz</h2>
      </div>
      <div className="quizheader-container">
        { props.quizHeaders.map( quiz => 
          <QuizHeader
            title={quiz.quizTitle}
            questions={quiz.questionNum}
            timeLimit={quiz.timeLimit}
            key={quiz._id}
          />
        )}
      </div>
      
    </div>
  );
};

export default QuizSelect;