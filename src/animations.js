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