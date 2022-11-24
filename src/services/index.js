import axios from "axios";

const SIGN_UP_URL = "http://localhost:3000/users";
const SIGN_IN_URL = "http://localhost:3000/login";
const USER_PROFILE_URL = "http://localhost:3000/profile";

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
