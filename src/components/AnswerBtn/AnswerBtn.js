import React, { useEffect, useState } from 'react';
import './AnswerBtn.css';
//Animations
import { motion }  from 'framer-motion';  
import { answerBtnAnimation,  } from '../../animations';

function AnswerBtn(props) {

  const [selected, setSelected] = useState(false);
  const checked = selected ? "checked" : "";

  function handleClick(ev){
    props.setAnswer(ev);
  };

  useEffect( () => {
    if ( props.answer === props.userAnswer ){
      setSelected(true);
    } else {
      setSelected(false)
    }
  }, [props.answer, props.userAnswer]);

  return (
    
    <motion.div
      variants={answerBtnAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.button 
        className={`answerBtn ${checked}`} 
        onClick={handleClick} 
        value={props.answer}
        whileHover={answerBtnAnimation.hover}
        whileTap={answerBtnAnimation.tap}
      >
        {props.answer}
      </motion.button>

      
    </motion.div>
   
  );
}

export default AnswerBtn;