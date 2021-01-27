import React, {useState} from 'react';
import './Question.css';
import NextQuestion from '../NextQuestion/NextQuestion';
import AnswerBtn from '../AnswerBtn/AnswerBtn';


function Question(props){


  const [nextDisplay, setNextDisplay] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  
  const question = props.activeQ;
  
  function setAnswer(ev){
    setUserAnswer(ev.target.value);
    setNextDisplay(true);
  };

  function checkAnswer(ev){
    const correctAnswer = question.correctAnswer;
   
    setNextDisplay(false);
    if ( correctAnswer === userAnswer ) {
        props.setUserScore( props.userScore + 100 )
        props.setUserCorrect( props.userCorrect + 1)
        props.setUserAnswersArr( [ ...props.userAnswersArr, true ] );
    } else 
        props.setUserAnswersArr( [ ...props.userAnswersArr, false ] );
        return 
  };

  return (
    <div className="active-question">
      <h3>Question {question.questionNumber} / {props.questionNum}</h3>
      <p>{question.question}</p>
      <div className="answers">
        {question.answers.map( answer => 
          <AnswerBtn 
            userAnswer={userAnswer} 
            setAnswer={setAnswer} 
            checkAnswer={checkAnswer} 
            answer={answer} 
            key={answer}
          />
        )}    
      </div>
      { nextDisplay && 
        <NextQuestion nextQuestion={props.nextQuestion} checkAnswer={checkAnswer} />
      }
    </div>
  );
};

export default Question;