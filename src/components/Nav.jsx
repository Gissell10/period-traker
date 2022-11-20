import React from "react";
import { Link } from "react-router-dom";

const Nav = function () {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="login"> Log in</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="calendar"> Calendar</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="symptoms"> Symptoms</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav; 
