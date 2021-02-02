
// Page Animations
export const pageAnimation = {
  hidden: { 
    opacity: 0,
  }, 
  show: {
    opacity: 1, 
    transition: {
      duration: 1
    }
  },
  exit: {
    opacity: 0, 
    transition: {
      duration: 0.5, 
    }
  }
}; 

export const titleAnimation = {
  hidden: { opacity: 0, x: 400 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } }
};

// Leaderboard Animations
export const scoreAnimation = {
  hidden: { 
    x: 100, 
    opacity: 0 
  }, 
  show: {
    x: 0, 
    opacity: 1,
    transition: {
    duration: 1
  } }
};

export const ribbonAnimation = {
  first: { 
    hidden: { y: 400, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } }
  },
  second: {
    hidden: { y: 400, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1 } }
  }, 
  third: {
    hidden: { y: 400, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1 } }
  }
};

// Quiz Animations
export const quizSelectAnimation = {
  hidden: { opacity: 0, y: 400 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export const playBtnAnimation = { 
  hover: {
    scale: 1.1, 
  },
  tap: {
    scale: 0.85
  }
};

export const fadeInAnimation = {
  hidden: { opacity: 0 }, 
  show: { opacity: 1, transition: { duration: 3, delay: 1 }}
};

export const answerBtnAnimation = {
  hover: { scale: 1.05, y: -3 },
  tap: { scale: 0.9 }, 
  hidden: { opacity: 0, x: 200 }, 
  show: { opacity: 1, x: 0,  transition: { duration: 1 }}, 
};

export const nextQFadeAnimation = {
  hidden: { opacity: 0, y: 200 }, 
  show: { opacity: 1, y: 0, transition: { duration: 0.5 }},
  hover: { scale: 1.1 },
  tap: { scale: 0.8 }
};

export const endQuizAnimation = {
  hidden: { opacity: 0, y: 200 }, 
  show: { opacity: 1, y: 0, transition: { duration: 0.8 }},
};

export const pointsAnimation = { 
  points: {
    hidden: { opacity: 0 }, 
    show: { opacity: 1, transition: { duration: 1, delay: 0.8 }}
  }, 
  timebonus: {
    hidden: { opacity: 0 }, 
    show: { opacity: 1, transition: { duration: 1, delay: 1.4}}
  }, 
  totalscore: {
    hidden: { opacity: 0 }, 
    show: { opacity: 1, transition: { duration: 1, delay: 2 }}
  }
};  

