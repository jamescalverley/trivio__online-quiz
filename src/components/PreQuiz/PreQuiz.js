import React, {useEffect, useState} from 'react';
import './PreQuiz.css';
//Animations
import { motion }  from 'framer-motion';  
import { fadeInAnimation } from '../../animations';

function PreQuiz(){
  const [seconds, setSeconds] = useState(3);
    useEffect( () => {
        const timer = 
        seconds > 0 && setInterval(() => {
            setSeconds( seconds - 1 );
        }, 800);
        return () => clearInterval(timer);       
    }, [seconds] );

  return (
    <motion.div 
      className="prequiz-container"
      variants={fadeInAnimation}
      intial="hidden"
      animate="show"    
    >
      { seconds > 0 &&
        <div className="countdown">
          <h2>Quiz starting in</h2>
          <h1>
          <span>{seconds}</span> 
          { seconds > 1 ? "seconds" : "second" }
          </h1>
        </div>
      }
      { seconds === 0 &&
        <div className="begin">
          <h2>Begin!</h2>
        </div>
      }
    </motion.div>
  );
};

export default PreQuiz;