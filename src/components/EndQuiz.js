import React, {useState} from 'react';
const axios = require('axios');

function EndQuiz(props){

    const [inputText, setInputText] = useState("");

    function inputTextHandler(ev){
        console.log("[inputTextHandler]");
        let newText = ev.target.value;
        setInputText(newText);
    };

    function submitUsername(ev){
        ev.preventDefault();
        console.log("[submitUsername] -- submitting =>", inputText);
        props.setUsername(inputText);
        setInputText(""); 
        postCurrentUserAPI();      
    };

    async function postCurrentUserAPI(){
        try {
            const data = { username: inputText, score: props.userScore };
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
                <form action="submit">
                    <input onChange={inputTextHandler} type="text" id="usernameAdd"></input> 
                    <button onClick={submitUsername} type="submit">Submit</button>
                </form>                 
            </div>  
        </div> 
    );
};

export default EndQuiz;