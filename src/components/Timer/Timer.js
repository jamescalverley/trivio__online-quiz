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

  const timeWidth = ( seconds / props.quizSeconds ) * 100;
  
  const barColor = (
    timeWidth >= 40  ? "green" :
    timeWidth < 40 && timeWidth > 15 ? "yellow" : "red"
  )
  
  return (
    <div className="timer-bar-container">
      <h4>Time Remaining</h4>
      <div className="timer-bar">
        <div className="bar" style={ { width: `${timeWidth}%`, background: `${barColor}`}}></div>
      </div>
    </div>
  );
};

export default Timer;