import React, {useState} from 'react';
import './EndQuiz.css';
import {useHistory} from 'react-router-dom';
const axios = require('axios');

function EndQuiz(props){

    const [usernameInput, setUsernameInput] = useState("");    
    const history = useHistory();
    
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
      <div className="end-quiz">
        <div className="end-quiz-display-left">
          <h1>Quiz complete !</h1>
          <h2>{props.quizTitle}</h2>
          <p>You answered <span>{props.userCorrect}</span> of <span>{props.quizLength}</span> questions correctly</p>
        </div> 
        <div className="end-quiz-display-right">
          <div className="points">
            <div>
              <h3>Points</h3>
              <h5>{props.userScore}</h5>
            </div>
            <div>
              <h3>Time Bonus</h3>
              <h5>{props.bonusPoints}</h5>
            </div>
          </div>
          <h2>Total Score: <span>{props.userScore + props.bonusPoints}</span></h2>
    
          <div className="addusername">
            <h4>Add username to scoreboard</h4>
            <form action="submit" onSubmit={submitUsername}>
                <input value={usernameInput} onChange={inputTextHandler} type="text"></input> 
                <button type="submit">SUBMIT</button>
            </form>                 
          </div>  
        </div>     
      </div> 
    );
};

export default EndQuiz;