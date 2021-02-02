const express = require('express');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const dbConnection = require('./backend/db/config/db.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use( express.urlencoded({ extended: true }) );

// mongoDB connection
dbConnection();

app.use('/', express.static('build'))

const quizApi = require('./backend/routes/apiRoutes')
app.use('/api', quizApi )

function checkQuizData( data ){
    console.log("checking quiz data...");
    data.forEach( set => {
        console.log("---> ", set.quizTitle);
        set.questionSet.forEach( q => {
            if (q.answers.length === 0 ){
                console.log(`${q.questionNumber} -- Incomplete`)
            }
            else if (q.answers.length === 4 ){
                const match =  q.answers.find( element => element === q.correctAnswer )
                
                if ( match ) {
                    console.log(`${q.questionNumber} -- CORRECT - MATCH`.green)
                } else {
                    console.log(`${q.questionNumber} -- CORRECT - NO MATCH`.red)
                }
                   
            } else {
                console.log(`${q.questionNumber} -- INCORRECT`.red)
            }
        })
    })
};

const quizData = require('./backend/db/data/quizData-complete.json');

checkQuizData( quizData );

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`.cyan)
});