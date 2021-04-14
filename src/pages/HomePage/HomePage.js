import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
//Animations
import { motion }  from 'framer-motion';  
import { pageAnimation } from '../../animations';

function HomePage(){

  // hero animations
  // const heroAnimate = {
  //   hidden: { y: 200 },
  //   show: { y: 0, transition: { duration: 0.75, delay: 2, staggerChildern: 1, when: "afterChildren" }}
  // };
  // const h1Animate = {
  //   hidden: { opacity: 0 }, 
  //   show: { opacity: 1, transition: { duration: 1, delay: 0.4 } }
  // };

  return (
    <motion.div 
      className="home"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div 
        className="hero-text"
        // variants={heroAnimate}
        // initial="hidden"
        // animate="show"
        // exit={{ x: 200 }}
      >
        <motion.h1 > 
          Triv<span>.</span>io
        </motion.h1>
        <motion.h2>Test Your Knowledge</motion.h2>
        <Link to="/quiz-select">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "#F6B53F" }}
            whileTap={{ scale: 0.8 }}
          >
            LET'S PLAY
          </motion.button>
        </Link> 
        
      </motion.div>
    </motion.div>
  )

  // return (
  //   <div className="home">
  //     <div className="hero-text">
  //       <h1>Quiz<span>.</span>App</h1>
  //       <h2>Test Your Knowledge</h2>
        
  //       <Link to ="/quiz">
  //         <button>LET'S PLAY</button>
  //       </Link> 
  //     </div>
  //   </div>
  // )
};

export default HomePage;