import React, {useState} from 'react';
import {scoreboardData} from '../db/seedData.js';
import {v4 as uuidv4} from 'uuid';

// pull in other scores from json file >> set as scores

function Scoreboard(props){
    const scoreData = scoreboardData;
    
    function addScore(user, score){
        let newUserScore = { username: user, score: score };
        scoreData.push(newUserScore);
    };
    
    function sortAsc( a, b ){
        if ( a.score < b.score ){
            return 1
        };
        if ( a.score > b.score ){
            return -1
        };
        return 0
    };

    addScore( props.username, props.userscore);
    
    const sortedScores = scoreData.sort(sortAsc);
   
    const [scores] = useState(sortedScores);
    console.log("Scores:", scores);

    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <div>
                <h3>Current User</h3>
                <h4>Username: {props.username}</h4>
                <h4>Score: {props.userscore}</h4>
            </div>
            <div>
                <h3>All Users</h3>
                { scores.map( user => 
                <div key={uuidv4()}>
                    <p>{user.username}</p>
                    <p>{user.score}</p>
                </div>) }
            </div>
        </div>
    );
};

export default Scoreboard;