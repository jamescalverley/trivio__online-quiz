import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';

function Scoreboard(props){

    const [scoreboard, setScoreboard] = useState([]);

    async function getScoreData(){
        const url = '/api/scoreboard';
        const response = await fetch(url);
        const data = await response.json();
        console.log("____score data", data)    
        setScoreboard(data.sort( (a,b) => b.score - a.score ));
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