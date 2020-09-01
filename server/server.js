const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
// app.use(express.static('../public'));
app.use( express.urlencoded({ extended: true }) );

app.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname + '..public/index.html'));
    res.send("react quiz")
})

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
});