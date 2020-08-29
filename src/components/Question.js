import React, {useState} from 'react';
import NextQuestion from './NextQuestion';


function Question(props){
    console.log("Passed to <Question /> :", props.activeQ);

    const [nextDisplay, setNextDisplay] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    

    function setAnswer(ev){
        setUserAnswer(ev.target.value);
        setNextDisplay(true);
    };

    console.log("Answer Set: ", userAnswer)

    function checkAnswer(ev){
        const correctAnswer = props.activeQ.correctAnswer;
        
        console.log("Answer: ", userAnswer);
        console.log("Correct Answer: ", correctAnswer);
        setNextDisplay(false);

        if ( correctAnswer === userAnswer ) {
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
            { nextDisplay && 
                <NextQuestion nextQuestion={props.nextQuestion} checkAnswer={checkAnswer}/>
            }
            
           
        </div>
    );
};

export default Question;