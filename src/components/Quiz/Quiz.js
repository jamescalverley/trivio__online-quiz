import React, { useState, useEffect } from 'react';
import './Quiz.css';
import PreQuiz from '../PreQuiz/PreQuiz';
import TimerContainer from '../Timer/TimerContainer';
import TimeExpire from '../TimeExpire/TimeExpire';
import Question from '../Question/Question';
import EndQuiz from '../EndQuiz/EndQuiz';
import { useParams } from 'react-router-dom';
const axios = require('axios');


function Quiz(props){
  
  let { selectedQuiz } = useParams();
  
  const [quizData, setQuizData] = useState();
  const [userData, setUserData] = useState({ userCorrect: 0, userScore: 0, userAnswersArr: [ ] });

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
      const result = await axios.get(`/api/quizdataTEST/${quiz}`);
      const quizData = result.data.data;
      //console.log("RESULT", quizData);
      setQuizData( quizData[0] );
    } catch (err) {
      console.log("ERROR", err);
    };
  };

  function preQuizClose(){
    console.log("PreQuiz INIT---- ");
    setPreQuizDisplay(false);
    // start quiz
    setTimerDisplay(true);
    setQuizDisplay(true);
    setStartTime( Date.now() );
  };

  function stopQuiz(){
    console.log("stopping quiz ---- ");
    setQuizDisplay(false);
    setTimerDisplay(false);
    setEndDisplay(true);
    setEndTime( Date.now() )
  };

  function timeExpireInit(){
    console.log("TIME EXPIRE INIT");
    setTimerDisplay(false);
    setQuizDisplay(false);
    setTimeExpireDisplay(true);
  };

  useEffect( () => {
    getQuizDataAPI( selectedQuiz )
    
    const preQuizTimer = setTimeout( () => {
      console.log("preQuizTimer ----> ");
      preQuizClose();
    }, 3000);

    const timer = setTimeout( () => {
      console.warn("TIME IS UP")
    }, 600000);
    return () => { 
      console.log("QUIZ ENDED -------")
      clearTimeout(preQuizTimer);
      clearTimeout(timer); 
    }
    }, [selectedQuiz]);

    return (
      <div className="quiz">
        { preQuizDisplay && 
          <PreQuiz />
        }
        { timerDisplay &&
          <TimerContainer  timeExpireInit={timeExpireInit} /> 
        } 
        { timeExpireDisplay && 
          <TimeExpire 
            //restartQuiz={restartQuiz}
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
      </div>       
    );
};

export default Quiz;