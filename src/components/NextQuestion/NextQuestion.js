import React from 'react';
import './NextQuestion.css';
//Animations
import { motion }  from 'framer-motion';  
import { nextQFadeAnimation } from '../../animations';

function NextQuestion(props){
  return (
    <motion.div className="next-question" 
      variants={nextQFadeAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.button 
        onClick={ () => { props.nextQuestion(); props.checkAnswer() } }
        whileHover={nextQFadeAnimation.hover} 
        whileTap={nextQFadeAnimation.tap} 
      >
          NEXT
      </motion.button>
    </motion.div>
  );
};

export default NextQuestion;