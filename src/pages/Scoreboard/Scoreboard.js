import React, {useState, useEffect, useCallback} from 'react';
import './Scoreboard.css';
import {v4 as uuidv4} from 'uuid';
import Medal_1 from '../../img/medal_1.png';
import Medal_2 from '../../img/medal_2.png';
import Medal_3 from '../../img/medal_3.png';
const axios = require('axios');

function Scoreboard(props){

  const [scores, setScores] = useState({ display: false })
  
  console.log("SCORES", scores)

  async function getScoreData(){
    try {
      const result = await axios.get('/api/userscores');
      console.log("RESULT", result)
      const highScoresArr = result.data.highScores;
      const allScoresArr = result.data.allScores;
      setScores( { ...scores, highScores: highScoresArr, allScores: allScoresArr, display: true  })
      //etDisplay(true);
    } catch (err) {
        console.log("ERROR", err)
    };
  };

  useEffect( () => {
    getScoreData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="scoreboard-page">
      { scores.display &&
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
                  <h5>{scores.highScores[1].username}</h5>
                  <h3>Points</h3>
                  <h5>{scores.highScores[1].score}</h5>
                  <h3>Quiz</h3>
                  <h5>{scores.highScores[1].quiz}</h5>
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
                  <h5>{scores.highScores[0].username}</h5>
                  <h3>Points</h3>
                  <h5>{scores.highScores[0].score}</h5>
                  <h3>Quiz</h3>
                  <h5>{scores.highScores[0].quiz}</h5>
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
                  <h5>{scores.highScores[2].username}</h5>
                  <h3>Points</h3>
                  <h5>{scores.highScores[2].score}</h5>
                  <h3>Quiz</h3>
                  <h5>{scores.highScores[2].quiz}</h5>
                </div> 
              </div>
            </div>
          </div>
          <div className="allscores-container"> 
            { scores.allScores.map( s => 
              <div key={uuidv4()} className="score">
                <div className="score-info">
                  <h4>{scores.allScores.indexOf( s ) + 4 }th</h4>
                  <h5>{s.username}</h5>
                </div>
                <div className="score-metrics">
                  <p>{s.quiz}</p>
                  <h5>{s.score}</h5>
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