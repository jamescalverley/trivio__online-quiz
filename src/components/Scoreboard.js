import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';


// pull in other scores from json file >> set as scores
// add current user and score to displayed data
// write current user/score to highscores.json


// move getScoreData outside of Scoreboard, save data to variable outsite, set highScoresData with useState("data variable")
// add new user right away to highScoresData with setHighScoresData() 
// then >>> sort, then >>> display
// pass the new (unsorted b/c it doesn't matter) highScoresData to the server to write to new json file

  
    // function addScore(user, score){
    //     let newUserScore = { username: user, score: score };
    //     scoreDataTest.push(newUserScore);

    //     const newScores = highScores.concat(newUserScore);

    //     setHighScoresData(newScores);
    // };

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