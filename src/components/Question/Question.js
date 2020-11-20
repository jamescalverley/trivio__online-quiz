import React, {useState} from 'react';
import NextQuestion from '../NextQuestion/NextQuestion';


function Question(props){

    console.log("RENDER ___ Question")

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
        } else 
            return 
    };

    return (
        <div className="active-question">
            <h3>Question {question.questionNumber}</h3>
            <p>{question.question}</p>
            <div className="answers">
                {question.answers.map( answer => 
                    <button onClick={setAnswer} value={answer} key={answer}>{answer}</button>
                )}    
            </div>
            { nextDisplay && 
                <NextQuestion nextQuestion={props.nextQuestion} checkAnswer={checkAnswer}/>
            }
        </div>
    );
};

export default Question;