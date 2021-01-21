import React from 'react';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

function NavBar(){

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className="link"
            >
              Home (LOGO)
            </Link> 
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