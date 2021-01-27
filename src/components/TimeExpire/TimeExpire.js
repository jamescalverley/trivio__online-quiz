import React from 'react';
import './TimeExpire.css';
import { useHistory } from 'react-router-dom';

function TimeExpire(props){

    const history = useHistory();

    function handleRestartQuiz(){
      history.push('/quiz')
      props.restartQuiz();
    };

    function handleHomeBtn(){
      history.push('/');
    };

    return (
        <div className="time-expire-container">
          <h1>TIME IS UP !</h1>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
          <button onClick={handleHomeBtn}>Home</button>
        </div>
      );
};

export default TimeExpire;