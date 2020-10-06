const express = require('express');
const fs = require('fs');
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


const quizApi = require('./backend/routes/apiRoutes')
app.use('/api', quizApi )



app.get('/api/quiz', (req,res) => {
    console.log("REQ --", req.url, req.method);
    const quizData = fs.readFileSync('./db/data/quizData.json', 'utf-8');
    res.setHeader('Content-Type', 'application/json');
    res.send(quizData);
    console.log("SENDING >>", JSON.parse(quizData));
});

app.post('/api/currentuser', (req,res) => {
    console.log("REQ --", req.url, req.method);
    const currentUser = req.body;
    
    console.log("REQ BODY ----", currentUser);

    const highscores = JSON.parse(fs.readFileSync('./db/data/highscores.json', 'utf-8'));
    console.log("CURRENT SCOREs", highscores )
    highscores.push(currentUser);
    console.log("--UPDATED-- CURRENT SCOREs", highscores )

    fs.writeFileSync('./db/data/highscores.json', JSON.stringify(highscores), 'utf-8')

    res.send(highscores)
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`.cyan)
});