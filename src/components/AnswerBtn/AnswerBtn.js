import React, { useEffect, useState } from 'react';
import './AnswerBtn.css';

function AnswerBtn(props) {

  const [selected, setSelected] = useState(false);
  const checked = selected ? "checked" : "";

  function handleClick(ev){
    props.setAnswer(ev);
  };

  useEffect( () => {
    if ( props.answer === props.userAnswer ){
      setSelected(true);
    } else {
      setSelected(false)
    }
  }, [props.answer, props.userAnswer]);

  return (
    <div>
      <button className={`answerBtn ${checked}`} onClick={handleClick} value={props.answer}>{props.answer}</button>
    </div>
  );
}

export default AnswerBtn;