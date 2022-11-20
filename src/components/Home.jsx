import React from "react";
import React, { useState } from "react";

class Home extends React.Component {
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
      <><><div class="date">
        <p> ddd {this.state.date}</p>
      </div>


        <h1>Welcome!{Users}</h1>

        <p>Thank you for using Period tracker, women's best friend!</p>

        <p>Now you can manage and record your period and symptoms more scientifically. Then you can find how your cycle affects your body and well being.</p>
        <p>We hope you have a pleasant experience.</p>
        <p>Please let us know more about you.</p>

      </><img scr="img/Tupl.jpeg" /></></>
        
    );

}


<<<<<<< Updated upstream
const Home = function () {
  return (
    <div>
      <div>LOGO</div>
      <h1>period tracker app</h1>
      <p> something about this app</p>
    </div>
  );
};
=======
>>>>>>> Stashed changes
export default Home;
