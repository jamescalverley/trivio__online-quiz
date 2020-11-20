import React, { useState } from 'react';
import Question from '../Question/Question';


function Quiz(props){
    
    console.log("RENDER ___ Quiz")

    const quizData = props.quizData;
    const questions = quizData.questionSet;
    const [index, setIndex] = useState(0);
    
    function timeBonus(endTime){
        //console.log(`START: ${props.startTime} END: ${endTime} CORRECT: ${props.userCorrect}`)
        const timeTaken = Math.floor( (endTime - props.startTime) / 1000 );
        const points = ( quizData.timeLimit - timeTaken ) * 5 * props.userCorrect;
        //console.log(`USER pts: ${props.userScore} BONUS pts: ${points}`)
        props.setBonusPoints( prev => prev + points );
    };

    function nextQuestion(){
        if (index < questions.length - 1){
            setIndex( index + 1 );
        } else {
            timeBonus( Date.now() );
            props.stopQuiz();
            props.stopTimer();  
        };
    };

    return (
        <div>
            <h2>Quiz - {quizData.quizTitle}</h2>
            <Question 
                activeQ={questions[index]} 
                nextQuestion={nextQuestion}
                userScore={props.userScore}
                setUserScore={props.setUserScore} 
                userCorrect={props.userCorrect} 
                setUserCorrect={props.setUserCorrect}
            />
        </div>
    );
};

export default Quiz;