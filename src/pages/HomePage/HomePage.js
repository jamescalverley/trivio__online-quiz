import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
//import { motion }  from 'framer-motion';  

function HomePage(){

  // hero animations
  // const heroAnimate = {
  //   hidden: { x: 200 },
  //   show: { x: 0, transition: { duration: 0.75, staggerChildern: 1, when: "afterChildren" }}
  // };
  // const h1Animate = {
  //   hidden: { opacity: 0 }, 
  //   show: { opacity: 1, transition: { duration: 1, delay: 0.4 } }
  // };

  // return (
  //   <div className="home">
  //     <motion.div 
  //       variants={heroAnimate}
  //       initial="hidden"
  //       animate="show"
  //       className="hero-text"
  //     >
  //       <motion.h1 variants={h1Animate} initial="hidden" animate="show"> 
  //         Quiz App
  //       </motion.h1>
  //       <h2>test your knowledge</h2>
  //       <button>Find a quiz</button>
  //     </motion.div>
  //   </div>
  // )

  return (
    <div className="home">
      <div className="hero-text">
        <h1>Quiz<span>.</span>App</h1>
        <h2>Test Your Knowledge</h2>
        
        <Link to ="/quiz-select">
          <button>LET'S PLAY</button>
        </Link> 
      </div>
    </div>
  );
};

export default HomePage;