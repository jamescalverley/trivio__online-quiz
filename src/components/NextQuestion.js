import React from 'react';

function NextQuestion(props){
    return (
        <button onClick={ () => {props.nextQuestion(); props.checkAnswer()}} >NEXT QUESTION</button>
    );
};

export default NextQuestion;