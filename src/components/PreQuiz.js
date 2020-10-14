import React, {useEffect, useState} from 'react';

function PreQuiz(){
  const [seconds, setSeconds] = useState(3);
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
    <div className="prequiz-container">
      <h1>Quiz Starting in</h1>
      <h2>{seconds} seconds</h2>
    </div>
  );
};

export default PreQuiz;