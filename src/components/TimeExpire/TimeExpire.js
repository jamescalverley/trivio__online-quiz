import React from 'react';
import { useHistory } from 'react-router-dom';

function TimeExpire(props){

    const history = useHistory();

    function handleRestartQuiz(){
      history.push('/quiz')
      props.restartQuiz();
    };

    function handleHomeBtn(){
      history.push('/home');
    };

    return (
        <div className="time-expire-container">
          <h1>TIME EXPIRED !!</h1>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
          <button onClick={handleHomeBtn}>Home</button>
        </div>
      );
};

export default TimeExpire;