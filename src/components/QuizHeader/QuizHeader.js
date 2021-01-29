import React from 'react';
import { useHistory } from 'react-router-dom';
import './QuizHeader.css';
import imgCamera from '../../img/quiz-img-camera.png';
import imgGlobe from '../../img/quiz-img-globe.png';
import imgMic from '../../img/quiz-img-mic.png';
import imgPalette from '../../img/quiz-img-palette.png';
import imgSave from '../../img/quiz-img-save.png';
import imgTarget from '../../img/quiz-img-target.png';

function QuizHeader(props){
  
  function getImage( img ){
    if ( img === "imgCamera") return imgCamera
    if ( img === "imgGlobe") return imgGlobe
    if ( img === "imgMic") return imgMic
    if ( img === "imgPalette") return imgPalette
    if ( img === "imgSave") return imgSave
    if ( img === "imgTarget") return imgTarget
  };

  const img = getImage(props.image);

  let history = useHistory();
  function handleClick(){
    history.push(`/quiz/${props.title}`)
  }
  
  return (
    <div className="quizheader-wrapper">
      <div className="image">
        <img src={img} alt={props.alt}/>
      </div>
      <div className="quizheader">
        <h2>{props.title}</h2>
        <div className="highscore-number">
          <h4>High Score<span>{props.topScore}</span></h4>
        </div>
        <button onClick={handleClick}>PLAY</button>
      </div>
    </div>
  );
};

export default QuizHeader;

