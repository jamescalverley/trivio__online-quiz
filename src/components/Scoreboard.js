import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';
const axios = require('axios');

function Scoreboard(props){

    const [scoreboard, setScoreboard] = useState([]);

    async function getScoreData(){
        try {
            const result = await axios.get('/api/userscores');
            console.log("Scores from DB ---", result);
            const scores = result.data.data;
            console.log("DATA", scores);
            setScoreboard( scores.sort( (a,b) => b.score - a.score )); 
        } catch (err) {
            console.log("ERROR", err)
        };
    };

    useEffect( () => {
        getScoreData();
    },[]);

    const highscores = scoreboard.filter( user => user.score >= 500 ); 

    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <button>
                <Link
                    to="/">
                    home
                </Link>
            </button>
            
            <div className="scoreboard">
                <h3>HIGH SCORES</h3> 
                { highscores.map( scores => 
                    <h5 key={uuidv4()}>{scores.username} --- Score: {scores.score}</h5>
                )}
                <h3>All SCORES</h3> 
                { scoreboard.map( scores => 
                    <h5 key={uuidv4()}>{scores.username} --- Score: {scores.score}</h5>
                )}
            </div>  
        </div>
    );
};

export default Scoreboard;