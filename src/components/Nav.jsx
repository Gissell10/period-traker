import React from "react";
import { Link } from "react-router-dom";

const Nav = function (props) {
  const getLogged = () => {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="calendar">Home</Link>
          </li>
          <li>
            <Link to="symptoms">Symptoms</Link>
          </li>
          <li>
            <Link to="about-you">About you</Link>
          </li>
          <li>{props.userName}</li>
        </ul>
      </nav>
    );
  };

  const getNotLogged = () => {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="login">Log in</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="signup">Sign Up</Link> {/* need to create a link here */}
          </li>
        </ul>
      </nav>
    );
  };

  const getNav = () => {
    if (props.userName) {
      return getLogged();
    } else {
      return getNotLogged();
    }
  };

  return getNav();
};

export default Nav;
