const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use( express.urlencoded({ extended: true }) );


app.get('/api/test', (req,res) => {
    console.log("REQ --", req.url, req.method);
    res.send("test")
});

app.get('/api/quiz', (req,res) => {
    console.log("REQ --", req.url, req.method);
    const quizData = fs.readFileSync('./data/quizData.json', 'utf-8');
    res.setHeader('Content-Type', 'application/json');
    res.send(quizData);
    console.log("SENDING >>", JSON.parse(quizData));
});

app.get('/api/scoreboard', (req,res) => {
    console.log("REQ --", req.url, req.method);
    const highscores = fs.readFileSync('./data/highscores.json', 'utf-8');
    res.setHeader('Content-Type', 'application/json');
    res.send(highscores);
    console.log("SENDING >> ", JSON.parse(highscores))
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
});