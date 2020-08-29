import React from 'react';


function Question(props){
    console.log("Passed to <Question /> :", props.activeQ);

    // const userScore = props.userScore;
    let answer = '';

    function setAnswer(ev){
        answer = ev.target.value;
        console.log("Answer Set: ", answer)
        return answer
    };

    function checkAnswer(ev){
        const correctAnswer = props.activeQ.correctAnswer;
        
        console.log("Answer: ", answer);
        console.log("Correct Answer: ", correctAnswer);

        if ( correctAnswer === answer ) {
            console.log("CORRECT");
            props.setUserScore( props.userScore + 100 )
            props.setUserCorrect( props.userCorrect + 1)
        }; 
    };

    return (
        <div className="active-question">
            <h3>{props.activeQ.heading}</h3>
            <p>{props.activeQ.content}</p>
            <div className="answers">
                {props.activeQ.choices.map( answer => 
                    <button onClick={setAnswer} value={answer} key={answer}>{answer}</button>
                )}
            </div>
            <button onClick={ () => {props.nextQuestion(); checkAnswer()}} >NEXT QUESTION</button>
        </div>
    );
};

export default Question;