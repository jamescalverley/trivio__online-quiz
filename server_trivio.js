const express = require('express');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const dbConnection = require('./backend/db/config/db.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use( express.urlencoded({ extended: true }) );

// mongoDB connection
dbConnection();

const quizApi = require('./backend/routes/apiRoutes');
app.use('/api', quizApi );

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req,res) => {
    console.log("----Catch all----", req.url);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`.cyan)
});