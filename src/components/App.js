import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import runtimeEnv from '@mars/heroku-js-runtime-env';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";
import Home from "./Home";
import Nav from "./Nav";
import AboutYou from "./AboutYou";
import Schedule from "./Schedule";
import YearCycles from "./YearCycles";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const BACKEND_URL = runtimeEnv().REACT_APP_BACKEND_URL || "http://localhost:3000";
const SIGN_UP_URL = `${BACKEND_URL}/users`;
const SIGN_IN_URL = `${BACKEND_URL}/login`;
const USER_PROFILE_URL = `${BACKEND_URL}/profile`;


const useApp = () => {
  const [userState, setUserState] = useState({
    user: {},
  });

  const signOut = () => {
    localStorage.clear();
    window.location.href = "/";
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

  const onLoggedIn = (user) => {
    setUserState({
      ...useState,
      user,
    });
  };

  return {
    userState,
    onLoggedIn,
    signOut,
  };
};

const App = () => {
  const { userState, onLoggedIn, signOut } = useApp();

  return (
    <Router>
      <div>
        <Nav userName={userState.user.first_name} signOut={signOut} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<SignIn onLoggedIn={onLoggedIn} />} />
          <Route path="/signup" element={<SignUp onLoggedIn={onLoggedIn} />} />
          <Route path="/calendar" element={<Schedule />} />
          <Route path="/about-you" element={<AboutYou />} />
          <Route path="/year-cycle" element={<YearCycles />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
