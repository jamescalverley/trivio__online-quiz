import React, {useState, useEffect} from 'react';
import './Timer.css';

function Timer(props){

  const [seconds, setSeconds] = useState(60);

  useEffect( () => {
    const timer = 
    seconds > 0 && setInterval(() => {
        setSeconds( seconds - 1 );
    }, 1000);
    return () => {
      clearInterval(timer); 
    }      
  }, [seconds] );

  const timeWidth = ( seconds / 60 ) * 100;
  const barColor = "linear-gradient(90deg, #EA9C0F 50%, #FAE426 83.06%)";
  
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