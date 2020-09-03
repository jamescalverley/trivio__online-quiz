const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use( express.urlencoded({ extended: true }) );


app.get('/api/test', (req,res) => {
    console.log("REQ --", req.url, req.method);
    res.send("test")
})

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
});