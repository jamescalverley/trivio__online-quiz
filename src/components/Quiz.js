import React, { useState } from 'react';
import seedData from '../seedData.js';
import Question from './Question';

console.log(seedData)




function Quiz(){
    
    const questions = seedData.questions;
    const [index, setIndex] = useState(0);
    
    function nextQuestion(){
        if (index < questions.length - 1){
            setIndex( index + 1 );
        } else {
            console.log("end of questions")
            return 
        };
    };

    return (
        <>
        <h5>Quiz Display</h5>
        <Question activeQ={questions[index]} nextQuestion={nextQuestion} />
        
        </>
    );
};

export default Quiz;