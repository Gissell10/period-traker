import axios from "axios";
import runtimeEnv from '@mars/heroku-js-runtime-env';


const BACKEND_URL = runtimeEnv().REACT_APP_BACKEND_URL || "http://localhost:3000";
const SIGN_UP_URL = `${BACKEND_URL}/users`;
const SIGN_IN_URL = `${BACKEND_URL}/login`;

export const signUp = ({ user, onSignedIn, onError }) => {
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
        onSignedIn(data.user);
      } else {
        onError(data.error);
      }
    });
};

export const signIn = ({ user, onSignedIn, onError }) => {
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
        onSignedIn(data.user);
      } else {
        onError(data.error);
      }
    });
};
