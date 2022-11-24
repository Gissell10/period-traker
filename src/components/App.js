import React, { useState, useEffect } from "react";
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
import YearCycles from "./YearCycles";

const SIGN_UP_URL = "http://localhost:3000/users";
const SIGN_IN_URL = "http://localhost:3000/login";
const USER_PROFILE_URL = "http://localhost:3000/profile";

const App = () => {
  const [userState, setUserState] = useState({
    user: {},
    error: "",
  });

  const signUp = (user) => {
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
        setUserState({
          ...userState,
          user: response.data,
        });
      });
  };

  const signIn = (user) => {
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
          setUserState({
            ...useState,
            user: data.user,
          });
        } else {
          setUserState({
            ...userState,
            error: data.error,
          });
        }
      });
  };

  const signOut = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
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
            setUserState({
              ...useState,
              user: data,
            });
          }
        });
    }
  }, []);

  return (
    <Router>
      <div>
        <Nav userName={userState.user.first_name} />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            path="/login"
            element={
              <Users
                signUp={signUp}
                signIn={signIn}
                signOut={signOut}
                error={userState.error}
              />
            }
          />
          <Route path="/calendar" element={<Schedule />} />
          <Route path="/about-you" element={<AboutYou />} />
          <Route path="/year-cycle" element={<YearCycles />} />
        </Routes>
      </div>
      <div></div>
    </Router>
  );
};

export default App;
