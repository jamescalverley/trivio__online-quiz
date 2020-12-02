import React, {useState, useEffect} from 'react';
import './Scoreboard.css';
import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';
const axios = require('axios');

function Scoreboard(props){

    const [scoreboard, setScoreboard] = useState([]);

    async function getScoreData(){
        try {
            const result = await axios.get('/api/userscores');
            //console.log("Scores from DB ---", result);
            const scores = result.data.data;
            setScoreboard( scores.sort( (a,b) => b.score - a.score )); 
        } catch (err) {
            console.log("ERROR", err)
        };
    };

    useEffect( () => {
        getScoreData();
    },[]);

    const highscores = scoreboard.filter( user => user.score >= 500 ); 

    return (
      <div className="scoreboard-page">
        <h2>Scoreboard</h2>
        <div className="scores-container">
          <div className="highscores-container">
              <h3>High Scores</h3> 
              { highscores.map( scores => 
                  <div key={uuidv4()} className="score">
                      <h5>{scores.username} --- Score: {scores.score} Quiz: {scores.quiz}</h5> 
                  </div>
              )}
          </div>
          <div className="allscores-container">
              <h3>All Scores</h3> 
              { scoreboard.map( scores => 
                  <div key={uuidv4()} className="score">
                      <h5>{scores.username} Score: {scores.score} Quiz: {scores.quiz}</h5>  
                  </div>
              )}
          </div> 
        </div> 
      </div>
    );
};

export default Scoreboard;