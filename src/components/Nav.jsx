import React from "react";
import { Link } from "react-router-dom";

const Nav = function (props) {
  const signOut = () => {
    props.signOut();
  };

  const getLogged = () => {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="calendar">Home</Link>
          </li>
          <li>
            <Link to="about-you">About you</Link>
          </li>
          <li>
            <Link to="year-cycle">Year Cycle</Link>
          </li>
          <li>{props.userName}</li>
          <li>
            <Link onClick={signOut}>Sign out</Link>
          </li>
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

          <li>
            <Link to="login">Log in</Link>
          </li>

          <li>
            <Link to="signup">Sign Up</Link>
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
