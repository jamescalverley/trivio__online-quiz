import React from 'react';
import './TimeExpire.css';
import { useHistory } from 'react-router-dom';

function TimeExpire(props){

    const history = useHistory();
    
    function handleRestartQuiz(){
      props.restartQuiz();
    };

    function handleHomeBtn(){
      history.push('/');
    };

    return (
        <div className="time-expire-container">
          <h1>TIME IS UP !</h1>
          <button onClick={handleRestartQuiz} className="restart">Restart Quiz</button>
          <button onClick={handleHomeBtn} className="homeBtn">Home</button>
        </div>
      );
};

export default TimeExpire;