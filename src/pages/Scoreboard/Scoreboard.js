import React, { useState, useEffect } from 'react';
import './Scoreboard.css';
import {v4 as uuidv4} from 'uuid';
import Medal_1 from '../../img/medal_1.png';
import Medal_2 from '../../img/medal_2.png';
import Medal_3 from '../../img/medal_3.png';
//Animations
import { motion }  from 'framer-motion';  
import { pageAnimation, titleAnimation, scoreAnimation, ribbonAnimation } from '../../animations';
const axios = require('axios');

function Scoreboard(props){

  const [scores, setScores] = useState({ display: false });
  const [noScoresDisplay, setNoScoresDisplay] = useState(false);
  
  async function getScoreData(){
    try {
      const result = await axios.get('/api/userscores');
      const highScoresArr = result.data.highScores;
      const allScoresArr = result.data.allScores;
      if ( highScoresArr.length >= 3  ){
        setScores( { ...scores, highScores: highScoresArr, allScores: allScoresArr, display: true })
      } else {
        setNoScoresDisplay(true)
      }

    } catch (err) {
        console.log("ERROR", err)
    };
  };

  useEffect( () => {
    getScoreData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div 
      className="scoreboard-page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      { noScoresDisplay && 
        <div className="noscores">
          <h2>No User Scores!</h2>
        </div>
      }
      { scores.display &&
      <>
        <motion.h2
          variants={titleAnimation}
          initial="hidden"
          animate="show"
        >
          Leaderboard
        </motion.h2>
        <div className="scores-container">
          <div className="highscores-container horizontal">
            <motion.div 
              className="ribbon-wrapper lower"
              variants={ribbonAnimation.second}
              intital="hidden"
              animate="show"
            >
              <div className="medal-image-sm">
                <img src={Medal_2} alt="second-place-medal"/>
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
            </motion.div>
            <motion.div 
              className="ribbon-wrapper"
              variants={ribbonAnimation.first}
              intital="hidden"
              animate="show"
            >
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
            </motion.div>
            <motion.div 
              className="ribbon-wrapper lower"
              variants={ribbonAnimation.third}
              intital="hidden"
              animate="show"
            >
              <div className="medal-image-sm">
                <img src={Medal_3} alt="third-place-medal"/>
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
            </motion.div>
          </div>
          <div className="highscores-container vertical">
            <motion.div 
              className="ribbon-wrapper lower"
              variants={ribbonAnimation.second}
              intital="hidden"
              animate="show"
            >
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
            </motion.div>
            <motion.div 
              className="ribbon-wrapper"
              variants={ribbonAnimation.first}
              intital="hidden"
              animate="show"
            >
              <div className="medal-image-lg">
                <img src={Medal_2} alt="second-place-medal"/>
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
            </motion.div>
            <motion.div 
              className="ribbon-wrapper lower"
              variants={ribbonAnimation.third}
              intital="hidden"
              animate="show"
            >
              <div className="medal-image-lg">
                <img src={Medal_3} alt="third-place-medal"/>
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
            </motion.div>
          </div>
          <div className="allscores-container"> 
            { scores.allScores.map( s => 
              <motion.div 
                key={uuidv4()} 
                className="score"
                variants={scoreAnimation}
                intital="hidden"
                animate="show"
              >
                <div className="score-info">
                  <h4>{scores.allScores.indexOf( s ) + 4 }th</h4>
                  <h5>{s.username}</h5>
                </div>
                <div className="score-metrics">
                  <p>{s.quiz}</p>
                  <h5>{s.score}</h5>
                </div>
              </motion.div>
            )}
          </div> 
        </div> 
      </>
      }
    </motion.div>
  );
};

export default Scoreboard;