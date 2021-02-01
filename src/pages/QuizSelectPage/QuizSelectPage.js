import React, { useEffect, useState } from 'react';
import './QuizSelectPage.css';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
//Animations
import { motion }  from 'framer-motion';  
import { pageAnimation, titleAnimation, quizSelectAnimation } from '../../animations';
const axios = require('axios');


function QuizSelect(props){

  const [quizHeaders, setQuizHeaders] = useState([]);

  async function getQuizHeadersAPI(){
    try {
      const result = await axios.get('/api/quizheaders');
      setQuizHeaders(result.data.data);
    } catch (err) {
        console.log("ERROR", err)
    };
  };

  
  useEffect( () => {
    getQuizHeadersAPI();
  }, []);

  return (
    <motion.div 
      className="quizselect"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div 
        className="quizselect-title"
        variants={titleAnimation}
        intial="hidden"
        animate="show"
      >
        <h2>Popular quizzes</h2>
      </motion.div>
      <motion.div 
        className="quizheader-container"
        variants={quizSelectAnimation}
        initial="hidden"
        animate="show"
      >
        { quizHeaders.map( quiz => 
          <QuizHeader
            key={quiz._id}
            title={quiz.quizTitle}
            topScore={quiz.topScore}
            image={quiz.imageIcon}
            alt={quiz.imageAlt}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default QuizSelect;

