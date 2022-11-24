import runtimeEnv from '@mars/heroku-js-runtime-env';
import { useEffect, useState } from "react";


const BACKEND_URL = runtimeEnv().REACT_APP_BACKEND_URL || "http://localhost:3000";

export const useCycleData = ({ userId }) => {
  const [cycleData, setCycleData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(`${BACKEND_URL}/cycles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setCycleData(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return cycleData;
};

export const about = (params, navigate) => {
  let token = localStorage.getItem("token");
  if (token) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    };
    fetch(`${BACKEND_URL}/setup`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        navigate("/calendar");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const dataSymptom = (params) => {
  let token = localStorage.getItem("token");
  if (token) {
    console.log(token);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    };
    fetch(`${BACKEND_URL}/cycle/symptoms`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
