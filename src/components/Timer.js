import React, {useState, useEffect} from 'react';

function Timer(){
    const [seconds, setSeconds] = useState(60);
    if (seconds === 0 ) {
        console.log("Seconds = 0!");
    };

    useEffect( () => {
        const timer = 
        seconds > 0 && setInterval(() => {
            setSeconds( seconds - 1 );
        }, 1000);
        return () => clearInterval(timer);       
    }, [seconds] );

    return (
        <div className="timer-container">
            <h3>Timer</h3>
            <div className="seconds">
                {seconds}
            </div>
        </div>
    );
};

export default Timer;