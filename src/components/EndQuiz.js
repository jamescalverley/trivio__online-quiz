import React from 'react';

function EndQuiz(props){

    return (
        <div className="end-quiz">
            <h2>The quiz has ended.</h2>
            <h3>You answered {props.userCorrect} of {props.quizLength} questions correctly</h3>
            <h3>Time bonus: </h3>
            <h2>Total Score: {props.userScore}</h2>
        </div>
        
    );
};

export default EndQuiz;