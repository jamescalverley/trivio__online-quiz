import React, {useState} from 'react';
import './EndQuiz.css';
import {useHistory} from 'react-router-dom';
const axios = require('axios');

function EndQuiz(props){

    const [usernameInput, setUsernameInput] = useState("");    
    const history = useHistory();

    console.log("QUIZ DATA ----", props.quizData);
    console.log("USER ANSWERS ---", props.userAnswersArr);

    const questions = props.quizData.questionSet;
    
    function inputTextHandler(ev){
      let username = ev.target.value;
      setUsernameInput(username);
    };

    async function submitUsername(ev){
      ev.preventDefault();
      //console.log("[submitUsername] -- submitting =>", usernameInput);
      props.setUsername(usernameInput);
      setUsernameInput(""); 
      postCurrentUserAPI();
      compareScores( props.topScore, props.userScore, props.bonusPoints);
      history.push('/scoreboard');      
    };

    async function postCurrentUserAPI(){
      try {
        const data = { username: usernameInput, score: (props.userScore + props.bonusPoints), quiz: props.quizTitle };
        // eslint-disable-next-line no-unused-vars
        const result = await axios.post('/api/userscores', data );
        //console.log("NEW USERSCORE POSTED ---", result)
      } catch (err) {
        console.log("ERROR", err);
      };
    };

    function compareScores( currentScore, userScore, bonusPoints ){
      console.log(`--- Current: ${currentScore} User: ${userScore} Bonus: ${bonusPoints}`);
      const totalScore = userScore + bonusPoints;
      //console.log("TotalScore: ", totalScore)
      totalScore > currentScore && addTopScore();
    };

    async function addTopScore(){
      try {
        const data = { topScore: (props.userScore + props.bonusPoints), topUsername: usernameInput };
        const result = await axios.put(`/api/quizdata/${props.quizID}`, data);
        console.log("QUIZ data changed ---", result);
      } catch (err) {
        console.log("ERROR", err);
      };
    };

    return (
      <div className="end-quiz-container">
        <h1>Quiz Complete!</h1>
        <div className="end-quiz">
          <div className="end-quiz-display-left">
          <h2>{props.quizTitle}</h2>
          <h4>You got <span>{props.userCorrect}</span>/{props.quizLength} correct.</h4>
          <div className="question-list">
            { questions.map( q => {
              if( props.userAnswersArr[ q.questionNumber - 1] === true){
                return <div className="q-display correct" key={q.questionNumber}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                  <p>{q.questionNumber} - {q.question}</p>
                </div>
              } else {
                return <div className="q-display incorrect" key={q.questionNumber}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  <p>{q.questionNumber} - {q.question}</p>
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
              <h3>{props.userScore}</h3>
            </div>
            <div>
              <h2>Time Bonus</h2>
              <h3>{props.bonusPoints}</h3>
            </div>
          </div>
          <h5>Total Score: <span>{props.userScore + props.bonusPoints}</span></h5>
    
          <div className="addusername">
            <p>Add username to scoreboard</p>
            <form action="submit" onSubmit={submitUsername}>
                <input placeholder="username" value={usernameInput} onChange={inputTextHandler} type="text"></input> 
                <button type="submit">Submit</button>
            </form>                 
          </div>  
        </div>     
      </div> 
        
      </div>
      
    );
};

export default EndQuiz;