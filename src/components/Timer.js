import React, {useState, useEffect} from 'react';


function Timer(props){
    const [seconds, setSeconds] = useState(60);

    useEffect( () => {
        const timer = 
        seconds > 0 && setInterval(() => {
            setSeconds( seconds - 1 )
        }, 100);
        return () => clearInterval(timer)
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