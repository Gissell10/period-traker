import React, { Component } from "react";

class Home extends Component {
  state = {
    date: ""
  };

  getDate() {
    var date = { currentTime: new Date().toLocaleString() };

    this.setState({
      date: date
    });
  }

  render() {
    return (
      <div>
        <div className="date">
          <p>{this.state.date}</p>
        </div>


          <h1>Welcome! </h1>

          <p>Thank you for using Period tracker, women's best friend!</p>

          <p>Now you can manage and record your period and symptoms more scientifically. Then you can find how your cycle affects your body and well being.</p>
          <p>We hope you have a pleasant experience.</p>
          <p>Please let us know more about you.</p>

        <img scr="img/Tupl.jpeg" />

        <div className="home-page-button">
          <button className="boton">Sign In</button>
          <button className="boton">Sign Out</button>
        </div>

      </div>
        
    );

}
}
export default Home;
