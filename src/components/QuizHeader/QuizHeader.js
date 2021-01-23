import React from 'react';
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

  function handleStart(value){
    //console.log("Button clicked", value);
    props.getQuizDataAPI(value);
    //props.handleQuizStart( props.timeLimit );
    //! for UI work 
    props.handleQuizStart( 1000 );
    //! --------
  };
  
  return (
    // <div className="quizheader-container">
    //   {/* <div className="quiz-image">
    //       <img src={cameraImg} alt="camera"/>
    //   </div> */}
    //   </div>
      
    <div className="quizheader-wrapper">
      <div className="image">
        <img src={img} alt={props.alt}/>
      </div>
      <div className="quizheader">
        <h2>{props.title}</h2>
        {/* <div className="quiz-info">
          <p>{props.questions} Questions</p>
          <p>{props.timeLimit} seconds</p>
        </div> */}
        <div className="highscore">
          <h4>High Score<span>{props.topScore}</span></h4>
        </div>
        <button onClick={ () => handleStart(props.quizID) }>PLAY</button>
      </div>
    </div>
  );
};

export default QuizHeader;

