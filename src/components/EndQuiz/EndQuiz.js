import React, {useEffect, useState} from 'react';
import './EndQuiz.css';
import {useHistory} from 'react-router-dom';
//Animations
import { motion }  from 'framer-motion';  
import { endQuizAnimation, pointsAnimation } from '../../animations';
const axios = require('axios');

function EndQuiz(props){

    const [usernameInput, setUsernameInput] = useState("");   
    const [bonusPoints, setBonusPoints] = useState(0); 
    const history = useHistory();

    // console.log("QUIZ DATA ----", props.quizData);
    // console.log("USER DATA ---", props.userData);
    // console.log(`START: ${props.startTime} END: ${props.endTime}`)

    const questions = props.quizData.questionSet;
    
    function inputTextHandler(ev){
      let username = ev.target.value;
      setUsernameInput(username);
    };

    async function submitUsername(ev){
      ev.preventDefault();
      console.log("CLICK");
      console.log(usernameInput.length )
      if ( usernameInput && usernameInput.length <= 15 ){
        setUsernameInput(""); 
        postCurrentUserAPI();
        compareScores( props.quizData.topScore, props.userData.userScore, bonusPoints);
        history.push('/leaderboard'); 
      } if ( usernameInput.length > 15 ) {
          alert("Username exceeds 15 characters. Please shorten to continue!")
      } if ( usernameInput.length <= 0 ) {
          alert("Please add a username to submit!")
      }
    };

    async function postCurrentUserAPI(){
      try {
        const data = { username: usernameInput, score: (props.userData.userScore + bonusPoints), quiz: props.quizData.quizTitle };
        await axios.post('/api/userscores', data );
      } catch (err) {
          console.log("ERROR", err);
      };
    };

    function compareScores( currentScore, userScore, bonusPoints ){
      const totalScore = userScore + bonusPoints;
      totalScore > currentScore && addTopScore();
    };

    function bonusPointsCalc(){
      const timeTaken = Math.floor( ( props.endTime - props.startTime ) / 1000 );
      const points = ( props.quizData.timeLimit - timeTaken ) * 5 * props.userData.userCorrect;
      setBonusPoints( points );
  };

    async function addTopScore(){
      try {
        const data = { topScore: (props.userData.userScore + bonusPoints), topUsername: usernameInput };
        await axios.put(`/api/quizdata/${props.quizData.quizTitle}`, data);
      } catch (err) {
         console.log("ERROR", err);
      };
    };

    useEffect( () => {
      bonusPointsCalc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <motion.div 
        className="end-quiz-container"
        variants={endQuizAnimation}
        initial="hidden"
        animate="show"
      >
        <h1>Quiz Complete!</h1>
        <div className="end-quiz">
          <div className="end-quiz-display-left">
          <h2>{props.quizData.quizTitle}</h2>
          <h4>You got <span>{props.userData.userCorrect}</span>/{questions.length} correct.</h4>
          <div className="question-list">
            { questions.map( q => {
              if( props.userData.userAnswersArr[ q.questionNumber - 1] === true){
                return <div className="q-display correct" key={q.questionNumber}>
                  <div className="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                  </div>
                  
                  <h6>#{q.questionNumber}</h6>
                  <p>{q.question}</p>
                </div>
              } else {
                return <div className="q-display incorrect" key={q.questionNumber}>
                  <div className="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  
                  <h6>#{q.questionNumber}</h6>
                  <p>{q.question}</p>
                </div>
              }
            }
            )}
          </div>
        </div> 
          <div className="end-quiz-display-right">
          <div className="points">
            <div>
              <h2>Points</h2>
              <motion.h3
                variants={pointsAnimation.points}
                initial="hidden"
                animate="show"
              >
                {props.userData.userScore}
              </motion.h3>
            </div>
            <div>
              <h2>Time Bonus</h2>
              <motion.h3
                variants={pointsAnimation.timebonus}
                initial="hidden"
                animate="show"
              >
                {bonusPoints}
              </motion.h3>
            </div>
          </div>
          <h5>Total Score: <motion.span
            variants={pointsAnimation.totalscore}
            initial="hidden"
            animate="show"
          >
            {props.userData.userScore + bonusPoints}
          </motion.span>
          </h5>
          <div className="addusername">
            <p>Add username to scoreboard</p>
            <form action="submit" onSubmit={submitUsername}>
                <input placeholder="username" value={usernameInput} onChange={inputTextHandler} type="text"></input> 
                <button type="submit">Submit</button>
            </form>                 
          </div>  
        </div>     
      </div> 
        
      </motion.div>
      
    );
};

export default EndQuiz;