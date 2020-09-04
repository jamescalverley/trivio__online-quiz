const seedData = { 
    quizName: "Geography",
    topScore: 0,
    active: false,
    questions: [
        {
        qID: 1001,
        heading: "Question 1",
        content: "How many continents are there?",
        choices: [" 4 ", " 6 ", " 7 ", " 8 "],
        correctAnswer: " 7 "
        }]
        // },
        // {
        // qID: 1002,
        // heading: "Question 2",
        // content: "How many countries are there in the world?",
        // choices: [" 200 ", " 195 ", " 197 ", " 202 "],
        // correctAnswer: " 197 "
        // },
        // {
        // qID: 1003,
        // heading: "Question 3",
        // content: "How many countires belong to the European Union",
        // choices: [" 30 ", " 31 ", " 28 ", " 27 "],
        // correctAnswer: " 27 "
        // },
        // {
        // qID: 1004,
        // heading: "Question 4",
        // content: "What is the largest country in the world by population?",
        // choices: ["China", "USA", "India", "Indonesia"],
        // correctAnswer: "China"
        // },
        // {
        // qID: 1005,
        // heading: "Question 5",
        // content: "Which country has the longest coastline?",
        // choices: ["Russia", "Indonesia", "Norway", "Canada"],
        // correctAnswer: "Canada"
        // },
        // {
        // qID: 1005,
        // heading: "Question 6!!!",
        // content: "Which country has the longest coastline?",
        // choices: ["Russia", "Indonesia", "Norway", "Canada"],
        // correctAnswer: "Canada"
        // }]
};

const scoreboardData = [
    {
        username: "Steve23",
        score: 650
    },
    {
        username: "james419", 
        score: 400
    },
    {
        username: "ronda", 
        score: 800
    },
    {
        username: "barry869", 
        score: 100
    }
];

export  {seedData, scoreboardData};