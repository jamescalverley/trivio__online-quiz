import React, {useState} from 'react';
import NextQuestion from './NextQuestion';


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
        console.log("Answer: ", userAnswer);
        console.log("Correct Answer: ", correctAnswer);
        setNextDisplay(false);
        if ( correctAnswer === userAnswer ) {
            console.log("CORRECT");
            props.setUserScore( props.userScore + 100 )
            props.setUserCorrect( props.userCorrect + 1)
        } else 
            console.log("INCORRECT"); 
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