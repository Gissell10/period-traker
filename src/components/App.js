import { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";
import Home from "./Home";
import Nav from "./Nav";
import Users from "./Users";
import AboutYou from "./AboutYou";
import Schedule from "./Schedule";
import Symptoms from "./Symptoms";

const SIGN_UP_URL = "http://localhost:3000/users";
const SIGN_IN_URL = "http://localhost:3000/login";
const USER_PROFILE_URL = "http://localhost:3000/profile";

class App extends Component {
  state = {
    user: {},
    error: "",
  };

  signUp = (user) => {
    const body = JSON.stringify({
      user: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password,
      },
    });
    axios
      .post(SIGN_UP_URL, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.token) {
          localStorage.setItem("token", data.token); // this is fetched later on componentDidMount
          this.setState({
            user: data.user,
          });
        } else {
          this.setState({
            error: data.error,
          });
        }
      });
  };

  signIn = (user) => {
    const body = JSON.stringify({
        email: user.email,
        password: user.password,
    });

    axios
      .post(SIGN_IN_URL, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.token) {
          localStorage.setItem("token", data.token); // this is fetched later on componentDidMount
          this.setState({
            user: data.user,
          });
        } else {
          this.setState({
            error: data.error,
          });
        }
      });
  };

  signOut = () => {
    localStorage.removeItem('token')
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get(USER_PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data;
          if (data.id) {
            this.setState({
              user: data,
            });
          }
        });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Nav userName={this.state.user.first_name}/>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route
              path="/login"
              element={
                <Users
                  signUp={this.signUp}
                  signIn={this.signIn}
                  signOut={this.signOut}
                  error={this.state.error}
                />
              }
            />

            <Route path="/calendar" element={<Schedule />} />

            <Route path="/symptoms" element={<Symptoms />} />
          </Routes>
        </div>
        <div>
          <AboutYou />
        </div>
      </Router>
    );
  }
}

export default App;
