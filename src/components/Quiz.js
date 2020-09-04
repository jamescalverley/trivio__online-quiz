import React, { useState } from 'react';
import Question from './Question';

function Quiz(props){
    
    const questions = props.questions;
    console.log(questions)
    const [index, setIndex] = useState(0);
    
    function nextQuestion(){
        if (index < questions.length - 1){
            setIndex( index + 1 );
        } else {
            props.stopQuiz();
            props.stopTimer();  
        };
    };

    return (
        <div>
            <h5>Quiz Display</h5>
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