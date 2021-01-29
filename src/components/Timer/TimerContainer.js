import React, { useEffect } from 'react';
import Timer from './Timer';

function TimerContainer({ timeExpireInit }) {
  
  useEffect( () => {
    console.log("TIMER CONTAINER ___ START");
    
    const timer = setTimeout( () => {
      console.log("TIME IS UP ");
      timeExpireInit();
    }, 63000 );

    return () => {
      console.log("TIMER CONTAINER ___ END");
      clearTimeout( timer );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  return (
    <div>
      <Timer />
    </div>
  );
}

export default TimerContainer;