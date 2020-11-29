import React from 'react';

function NextQuestion(props){

    console.log("RENDER ___ NextQuestion")
    return (
        <button onClick={ () => {props.nextQuestion(); props.checkAnswer()}} >NEXT QUESTION</button>
    );
};

export default NextQuestion;