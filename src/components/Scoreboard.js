import React, {useState, useEffect} from 'react';
import {scoreboardData} from '../data/seedData.js';
import {v4 as uuidv4} from 'uuid';

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

    useEffect( () => {
        setScoreboard(props.highScores)
    },[props.highScores]);


    console.log("SCOREBOARD", scoreboard )

    // const [highScoresData, setHighScoresData] = useState([]);
    // const [currentUser] = useState({ username: props.username, userscore: props.userscore});

    // async function getScoreData(){
    //     const url = '/api/scoreboard';
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log("____data", data)    
    //     await setHighScoresData(data);
    //     addCurrentUser(currentUser);
    // };

    // function sortAsc( a, b ){
    //     if ( a.score < b.score ) 
    //         return 1
    //     if ( a.score > b.score ) 
    //         return -1
    //     return 0
    // };

    // function addCurrentUser( user ){
    //     const updatedScores = highScoresData.concat(user);
    //     setHighScoresData(updatedScores)
    // };

    //const sortedScores = highScoresData.sort(sortAsc);
    
    // const [ scoreboard, setScoreboard] = useState("");
    
    // console.log("scoreboard", scoreboard)
    // console.log("Currenct User", currentUser)
    
    // useEffect( () => {
    //     console.log("!!useEffect!!");
    //     getScoreData();
        
    // }, [])

    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <div>
                
                <h3>Current User</h3>
                {/* <h4>Username: {props.username}</h4>
                <h4>Score: {props.userscore}</h4> */}
            </div>
            <div>{ scoreboard.map( scores => 
                <h5 key={uuidv4()}>{scores.username} --- Score: {scores.score}</h5>
                )}</div>

            <div>
                <h3>Data Set Scores</h3>
                {/* { highScoresData.map( user => 
                <div key={uuidv4()}>
                    <p>{user.username} Score: {user.score}</p>
                </div>) } */}
                {/* { scoreboard.map( user => 
                <div key={uuidv4()}>
                    <p>{user.username} Score: {user.score}</p>
                </div>) } */}
            </div>
        </div>
    );
};

export default Scoreboard;