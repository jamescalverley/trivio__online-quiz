import React, {useState} from 'react';
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
        console.log("[submitUsername] -- submitting =>", usernameInput);
        props.setUsername(usernameInput);
        setUsernameInput(""); 
        postCurrentUserAPI();
        compareScores( props.topScore, props.userScore);
        history.push('/scoreboard')      
    };

    async function postCurrentUserAPI(){
        try {
            const data = { username: usernameInput, score: props.userScore, quiz: props.quizTitle };
            const result = await axios.post('/api/userscores', data );
            console.log("NEW USERSCORE POSTED ---", result)
        } catch (err) {
            console.log("ERROR", err);
        };
    };

    function compareScores( currentScore, userScore ){
        console.log(`Current: ${currentScore} User: ${userScore}`);
        userScore > currentScore && addTopScore();
    };

    async function addTopScore(){
        try {
            const data = { topScore: props.userScore, topUsername: usernameInput };
            const result = await axios.put(`/api/quizdata/${props.quizID}`, data);
            console.log("QUIZ data changed ---", result)
        } catch (err) {
            console.log("ERROR", err);
        };
    };

    return (
        <div className="end-quiz">
            <div className="end-quiz-display">
                <h2>The quiz has ended.</h2>
                <h3>You answered {props.userCorrect} of {props.quizLength} questions correctly</h3>
                <h3>Time bonus: </h3>
                <h2>Total Score: {props.userScore}</h2>
            </div>    
            <div className="addusername">
                <h4>Add name</h4>
                <form action="submit" onSubmit={submitUsername}>
                    <input value={usernameInput} onChange={inputTextHandler} type="text"></input> 
                    <button type="submit">SUBMIT</button>
                </form>                 
            </div>  
        </div> 
    );
};

export default EndQuiz;