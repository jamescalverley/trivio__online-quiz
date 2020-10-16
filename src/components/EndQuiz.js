import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
const axios = require('axios');

function EndQuiz(props){

    const [inputText, setInputText] = useState("");
    const history = useHistory();
    
    function inputTextHandler(ev){
        let username = ev.target.value;
        setInputText(username);
    };

    async function submitUsername(ev){
        ev.preventDefault();
        console.log("[submitUsername] -- submitting =>", inputText);
        props.setUsername(inputText);
        setInputText(""); 
        postCurrentUserAPI();
        history.push('/scoreboard')      
    };

    async function postCurrentUserAPI(){
        try {
            const data = { username: inputText, score: props.userScore, quiz: props.quizTitle };
            const result = await axios.post('/api/userscores', data );
            console.log("NEW USERSCORE POSTED ---", result)
        } catch (err) {
            console.log("ERROR", err)
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
                    <input value={inputText} onChange={inputTextHandler} type="text"></input> 
                    <button type="submit">SUBMIT</button>
                </form>                 
            </div>  
        </div> 
    );
};

export default EndQuiz;