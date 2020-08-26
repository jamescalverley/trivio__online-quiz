import React, {useState, useEffect}from 'react';

function Countdown(){

    const [seconds, setSeconds] = useState(60);
    
    useEffect( () => {
        const timer = 
        seconds > 0 && setInterval(() => {
            setSeconds( seconds - 1 )
        }, 1000);
        return () => clearInterval(timer)
    }, [seconds] );

    return (
        <div className="seconds">
        {seconds}
        </div>
    );
};

export default Countdown;