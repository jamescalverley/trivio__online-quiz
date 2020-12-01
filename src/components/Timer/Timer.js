import React, {useState, useEffect} from 'react';
import './Timer.css';

function Timer(props){

    const [seconds, setSeconds] = useState(props.quizSeconds);
   
    useEffect( () => {
        const timer = 
        seconds > 0 && setInterval(() => {
            setSeconds( seconds - 1 );
        }, 1000);
        return () => clearInterval(timer);       
    }, [seconds] );

    return (
        <div className="timer-container">
            <h3>Time Remaining: <span>{seconds}</span>seconds</h3>
            
        </div>
    );
};

export default Timer;