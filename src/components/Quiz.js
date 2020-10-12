import React, { useState } from 'react';
import Question from './Question';

function Quiz(props){
    
    const quizData = props.quizData;
    const questions = quizData.questionSet;
    console.log("QUIZDATA", quizData);
    console.log("QUESTIONS", questions)
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