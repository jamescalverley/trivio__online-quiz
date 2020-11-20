import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
          <NavLink
              to="/home"
              className="link"
              activeclassname="active"
            >
              Home
            </NavLink> 
          </li>
          <li>
            <NavLink
              to="/quiz"
              className="link"
              activeclassname="active"
            >
              Quiz
            </NavLink> 
          </li>
          <li>
            <NavLink
              to="/scoreboard"
              className="link"
              activeclassname="active"
            >
              Scoreboard
            </NavLink> 
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;