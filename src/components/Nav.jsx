import React from "react";
import { Link } from "react-router-dom";

const Nav = function (props) {
  const signOut = () => {
    props.signOut();
  };

  const getLogged = () => {
    return (
      <header className="p-3  border-bottom">
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-5 justify-content-center mb-md-0">
              <li className="nav-link px-2 navigator">
                <Link className="navigator-brand" to="calendar ">
                  Anita
                </Link>
              </li>
              <li className="nav-link px-2 navigator">
                <Link className="navigator" to="your-cycles">
                  Cycle forecast
                </Link>
              </li>

              <li className="nav-link px-2 ">
                <Link onClick={signOut} className="navigator">
                  Sign out
                </Link>
              </li>

              <li className="nav-link ps-5  navigator-name">
                {props.userName.charAt(0).toUpperCase() +
                  props.userName.slice(1)}
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  class="rounded-circle"
                ></img>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  };

  const getNotLogged = () => {
    return (
      <header className="p-3  border-bottom">
        <div className="container ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-5 justify-content-center mb-md-0">
              <li className="nav-link px-2 ">
                <Link className="navigator-brand" to="/">
                  {" "}
                  Anita
                </Link>
              </li>

              <li className="nav-link px-2 ">
                <Link className="navigator" to="login">
                  Log in
                </Link>
              </li>

              <li className="nav-link px-2 ">
                <Link className="navigator" to="signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
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
