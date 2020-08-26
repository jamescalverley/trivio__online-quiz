import React from 'react';
import seedData from '../seedData.js';
import Question from './Question';

console.log(seedData)




function Quiz(){
    const questions = seedData.questions;
    console.log(questions)

    return (
        <>
        <h5>Quiz Display</h5>
        {/* <Question question={questions[0]}/> */}
        {questions.map( q => 
            <Question key={q.qID} activeQ={q} />
            )}
        </>
    );
};

export default Quiz;