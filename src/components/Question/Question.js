import React, {useState} from 'react';
import './Question.css';
import NextQuestion from '../NextQuestion/NextQuestion';
import AnswerBtn from '../AnswerBtn/AnswerBtn';

function Question(props){

  const [nextDisplay, setNextDisplay] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  const [qIndex, setQIndex] = useState(0);
  
  console.log("USER DATA", props.userData)

  const questionSet = props.entireQ;
  
  function setAnswer(ev){
    setUserAnswer(ev.target.value);
    setNextDisplay(true);
  };

  function checkAnswer(ev){
    const correctAnswer = questionSet[qIndex].correctAnswer;
    setNextDisplay(false);
    console.log(`Checking -- ${correctAnswer} vs ${userAnswer}`)
    if ( correctAnswer === userAnswer ) {
      console.log("CORRECT")
      const updated = {
        score: props.userData.userScore + 100,
        correct: props.userData.userCorrect + 1,
        answers: [ ...props.userData.userAnswersArr, true ]
      };
      props.setUserData(  { ...props.userData, userScore: updated.score, userCorrect: updated.correct, userAnswersArr: updated.answers })
    } else {
      console.log("INCORRECT") 
        const updated = { answers: [ ...props.userData.userAnswersArr, false ]}
      
        props.setUserData(  { ...props.userData, userAnswersArr: updated.answers })
    }
  };

  function nextQuestion(){
    console.log("nextQuestion ----")
    if (qIndex < questionSet.length - 1){
        setQIndex( qIndex + 1 );
    } else {
        console.log("QUIZ FINISHED");
        props.stopQuiz();
    };
};

  return (
    <div className="active-question">
      <h3>Question {questionSet[qIndex].questionNumber} / {questionSet.length}</h3>
      <p>{questionSet[qIndex].question}</p>
      <div className="answers">
        {questionSet[qIndex].answers.map( answer => 
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
        <NextQuestion nextQuestion={nextQuestion} checkAnswer={checkAnswer} />
      }
    </div>
  );
};

export default Question;

