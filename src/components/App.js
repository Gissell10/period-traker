import { Component } from "react";
import axios from 'axios'

import Nav from "./Nav";
import Home from "./Home";
import Users from "./Users";
import AboutYou from "./AboutYou";
import Schedule from "./Schedule";
import Symptoms from "./Symptoms";

class App extends Component {

  state = {
    user: {}
  }

  signUp = (user) => {
    const body = JSON.stringify({
      user: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password,
      }
    });
    axios.post('http://localhost:3000/users', body, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return this.setState({user: response.data})
    })
  }

  render() {
    return (
      <div>
        {this.state.user.firstName ? <h4>Welcome {this.state.user.firstName}</h4> : <Users signUp={this.signUp}/>}
        <Nav />
        <Home />
        <Users />
        <AboutYou />
        <Schedule />
        <Symptoms />
      </div>
    );
  }
}

export default App;
