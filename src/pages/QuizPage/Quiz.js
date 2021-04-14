import React, { useState, useEffect } from 'react';
import './Quiz.css';
import PreQuiz from '../../components/PreQuiz/PreQuiz';
import TimerContainer from '../../components/Timer/TimerContainer';
import TimeExpire from '../../components/TimeExpire/TimeExpire';
import Question from '../../components/Question/Question';
import EndQuiz from '../../components/EndQuiz/EndQuiz';
import { useParams } from 'react-router-dom';
//Animations
import { motion }  from 'framer-motion';  
import { pageAnimation } from '../../animations';
const axios = require('axios');


function Quiz(props){
  
  let { selectedQuiz } = useParams();
  
  const [quizData, setQuizData] = useState();
  const [userData, setUserData] = useState({ userCorrect: 0, userScore: 0, userAnswersArr: [] });

  //* bonus point states
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  //* display state
  const [preQuizDisplay, setPreQuizDisplay] = useState(true);
  const [timerDisplay, setTimerDisplay] = useState(false);
  const [timeExpireDisplay, setTimeExpireDisplay] = useState(false);
  const [endDisplay, setEndDisplay] = useState(false);
  const [quizDisplay, setQuizDisplay] = useState(false);
  
  // calls for all quiz data for the selected quiz
  async function getQuizDataAPI(quiz){
    try {
      const result = await axios.get(`/api/quizdata/${quiz}`);
      const quizData = result.data.data;
      console.log("RESULT", quizData);
      setQuizData( quizData[0] );
    } catch (err) {
      console.log("ERROR", err);
    };
  };

  function preQuizClose(){
    setPreQuizDisplay(false);
    // start quiz
    setTimerDisplay(true);
    setQuizDisplay(true);
    setStartTime( Date.now() );
  };

  function stopQuiz(){
    setQuizDisplay(false);
    setTimerDisplay(false);
    setEndDisplay(true);
    setEndTime( Date.now() )
  };

  function restartQuiz(){
    setTimeExpireDisplay(false);
    setQuizDisplay(true);
    setTimerDisplay(true);
    setStartTime( Date.now() );
    // reset userData
    setUserData({ userCorrect: 0, userScore: 0, userAnswersArr: [ ] })
  };

  function timeExpireInit(){
    setTimerDisplay(false);
    setQuizDisplay(false);
    setTimeExpireDisplay(true);
  };

  useEffect( () => {
    getQuizDataAPI( selectedQuiz )
    const preQuizTimer = setTimeout( () => {
      preQuizClose();
    }, 3600);

    const timer = setTimeout( () => {
    }, 63000);
    return () => { 
      clearTimeout(preQuizTimer);
      clearTimeout(timer); 
    }
    }, [selectedQuiz]);

    return (
      <motion.div 
        className="quiz"
        variants={pageAnimation}
        intial="hidden"
        animate="show"
        exit="exit"  
      >
        { preQuizDisplay && 
          <PreQuiz />
        }
        { timerDisplay &&
          <TimerContainer  timeExpireInit={timeExpireInit} /> 
        } 
        { timeExpireDisplay && 
          <TimeExpire 
            restartQuiz={restartQuiz}
          /> 
        } 
        { quizDisplay && 
          <>
            <h2>{quizData.quizTitle}</h2>
            <div className="quiz-container">
              <Question
                entireQ={quizData.questionSet}
                stopQuiz={stopQuiz}
                userData={userData}
                setUserData={setUserData}
              />
            </div>
          </>
        }
        { endDisplay &&
          <EndQuiz 
            quizData={quizData}
            userData={userData}
            startTime={startTime}
            endTime={endTime}
          /> 
        }
      </motion.div>       
    );
};

export default Quiz;