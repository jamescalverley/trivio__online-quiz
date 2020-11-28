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

app.use('/*', express.static('build'))

const quizApi = require('./backend/routes/apiRoutes')
app.use('/api', quizApi )

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`.cyan)
});