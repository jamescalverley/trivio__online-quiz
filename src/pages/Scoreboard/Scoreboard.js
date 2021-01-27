import React, {useState, useEffect} from 'react';
import './Scoreboard.css';
import {v4 as uuidv4} from 'uuid';
import Medal_1 from '../../img/medal_1.png';
import Medal_2 from '../../img/medal_2.png';
import Medal_3 from '../../img/medal_3.png';
const axios = require('axios');

function Scoreboard(props){

    const [scoreboard, setScoreboard] = useState([]);
    const [display, setDisplay] = useState(false);

    async function getScoreData(){
      try {
        const result = await axios.get('/api/userscores');
        const scores = result.data.data;
        const sortedScores = scores.sort( (a,b) => b.score - a.score );
        setScoreboard( sortedScores.splice(0,13)); 
        setDisplay(true);
      } catch (err) {
        console.log("ERROR", err)
      };
    };

    useEffect( () => {
      getScoreData();
    },[]);

    const highscores = scoreboard.splice(0, 3);
    console.log(scoreboard)
    console.log("Highscores", highscores)

    return (
      <div className="scoreboard-page">
        { display &&
        <>
          <h2>Leaderboard</h2>
          <div className="scores-container">
            <div className="highscores-container">

              <div className="ribbon-wrapper lower">
                <div className="medal-image-sm">
                  <img src={Medal_2} alt="first-place-medal"/>
                </div>
                <div className="highscore">
                  <div className="block-out">
                    <div className="triangle-left"></div>
                    <div className="triangle-right"></div>
                  </div>
                  <div className="highscore-info">
                    <h3>Username</h3>
                    <h5>{highscores[1].username}</h5>
                    <h3>Points</h3>
                    <h5>{highscores[1].score}</h5>
                    <h3>Quiz</h3>
                    <h5>{highscores[1].quiz}</h5>
                  </div> 
                </div>
              </div>
              <div className="ribbon-wrapper">
                <div className="medal-image-lg">
                  <img src={Medal_1} alt="first-place-medal"/>
                </div>
                <div className="highscore">
                  <div className="block-out">
                    <div className="triangle-left"></div>
                    <div className="triangle-right"></div>
                  </div>
                  <div className="highscore-info">
                    <h3>Username</h3>
                    <h5>{highscores[0].username}</h5>
                    <h3>Points</h3>
                    <h5>{highscores[0].score}</h5>
                    <h3>Quiz</h3>
                    <h5>{highscores[0].quiz}</h5>
                  </div> 
                </div>
              </div>
              <div className="ribbon-wrapper lower">
                <div className="medal-image-sm">
                  <img src={Medal_3} alt="first-place-medal"/>
                </div>
                <div className="highscore">
                  <div className="block-out">
                    <div className="triangle-left"></div>
                    <div className="triangle-right"></div>
                  </div>
                  <div className="highscore-info">
                    <h3>Username</h3>
                    <h5>{highscores[2].username}</h5>
                    <h3>Points</h3>
                    <h5>{highscores[2].score}</h5>
                    <h3>Quiz</h3>
                    <h5>{highscores[2].quiz}</h5>
                  </div> 
                </div>
              </div>
            </div>
            <div className="allscores-container"> 
              { scoreboard.map( scores => 
                <div key={uuidv4()} className="score">
                  <div className="score-info">
                    <h4>{scoreboard.indexOf(scores) + 4}th</h4>
                    <h5>{scores.username}</h5>
                  </div>
                  <div className="score-metrics">
                    <p>{scores.quiz}</p>
                    <h5>{scores.score}</h5>
                  </div>
                </div>
              )}
            </div> 
          </div> 
        </>
        }
      </div>
    );
};

export default Scoreboard;