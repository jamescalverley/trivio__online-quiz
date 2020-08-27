import React, {useState} from 'react';
import Countdown from './Countdown';

function Timer(props){

    //need to have a value to display timer or not
    const [timerDisplay, setTimerDisplay ] = useState(false);

    function startTimer(){
        console.log("---- starting timer ----");
        setTimerDisplay(true);
    };
    
    // need to have a conditional statement that displays  <Countdown /> if display is changed to true

    return (
        <div className="timer-container">
            <h3>Timer</h3>
            <button onClick={ () => {startTimer(); props.startQuiz() }}>START</button>  
            { timerDisplay && (
                <Countdown />
            )}
        </div>
    );
};

export default Timer;