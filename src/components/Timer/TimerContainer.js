import React, { useEffect } from 'react';
import Timer from './Timer';

function TimerContainer({ timeExpireInit }) {
  
  useEffect( () => {
    
    const timer = setTimeout( () => {
      timeExpireInit();
    }, 61000 );
    return () => {
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