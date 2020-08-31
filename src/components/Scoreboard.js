import React, {useState} from 'react';

function Scoreboard(props){


    // pull in other scores from json file >> set as scores
    // add new score to all scores (...use spread operator)
    // add logic to order the scores highest to lowest
    

    const [scores, setScores] = useState([]);

    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <h4>Username: {props.username}</h4>
            <h4>Score: {props.userscore}</h4>
        </div>
    );
};

export default Scoreboard;