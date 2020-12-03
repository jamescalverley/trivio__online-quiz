import React, {useState, useEffect} from 'react';
import './Scoreboard.css';
import {v4 as uuidv4} from 'uuid';
const axios = require('axios');

function Scoreboard(props){

    const [scoreboard, setScoreboard] = useState([]);

    async function getScoreData(){
      try {
        const result = await axios.get('/api/userscores');
        const scores = result.data.data;
        setScoreboard( scores.sort( (a,b) => b.score - a.score )); 
      } catch (err) {
        console.log("ERROR", err)
      };
    };

    useEffect( () => {
      getScoreData();
    },[]);

    const highscores = scoreboard.splice(0, 5);

    return (
      <div className="scoreboard-page">
        <h2>Scoreboard</h2>
        <div className="scores-container">
        <h3>High Scores</h3> 
          <div className="highscores-container">
            { highscores.map( scores => 
              <div key={uuidv4()} className="score high">
                <div className="score-number">
                  {scores.score}
                </div>
                <div className="score-info">
                  <h4>{scores.username}</h4>
                  <h5>{scores.quiz}</h5>
                </div>
              </div>
            )}
          </div>
          <h3>All Scores</h3>
          <div className="allscores-container"> 
            { scoreboard.map( scores => 
              <div key={uuidv4()} className="score">
                <div className="score-number">
                  {scores.score}
                </div>
                <div className="score-info">
                  <h4>{scores.username}</h4>
                  <h5>{scores.quiz}</h5>
              </div>
            </div>
            )}
          </div> 
        </div> 
      </div>
    );
};

export default Scoreboard;