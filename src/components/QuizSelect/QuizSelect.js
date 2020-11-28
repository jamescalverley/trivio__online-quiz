import React from 'react';
import './QuizSelect.css';
import QuizHeader from '../QuizHeader/QuizHeader';


function QuizSelect(props){

  function handleQuizStart(){
    props.preQuizTimer();
    props.setPreQuizDisplay(true);
    props.setQuizSelectDisplay(false);
  };

  return (
    <div className="quizselect-container">
      <div className="quizselect-title">
        <h2>Select a quiz</h2>
      </div>
      <div className="quizheader-container">
        { props.quizHeaders.map( quiz => 
          <QuizHeader
            getQuizDataAPI={props.getQuizDataAPI}
            handleQuizStart={handleQuizStart}
            title={quiz.quizTitle}
            topScore={quiz.topScore}
            questions={quiz.questionNum}
            timeLimit={quiz.timeLimit}
            quizID={quiz._id}
            key={quiz._id}
          />
        )}
      </div>
      
    </div>
  );
};

export default QuizSelect;