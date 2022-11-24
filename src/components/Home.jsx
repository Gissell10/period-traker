import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
          <h1>Hey, there!</h1>

          <p>Thank you for using Period tracker, women's best friend!</p>

          <p>We often times need to check how we were feeling at some day or check if our period will happen any time soon.</p>
          <p>Thinking on that, Cycle Tracker can manage this for you. With time, you cycle predictions will get better based on the data you provide to us.</p>
          <p>We hope you have a pleasant experience.</p>

        <img scr="img/Tupl.jpeg" />

        <div className="home-page-button">
          <Link to="login"><button  className="boton">Sign in</button></Link>
          <Link to="signup"><button  className="boton">Sign up</button></Link>
        </div>

      </div>
        
    );

  }
}
export default Home;
