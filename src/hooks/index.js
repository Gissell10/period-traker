import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export const useCycleData = () => {
  let token = localStorage.getItem("token");
  console.log("cycle data for user ");
  const [cycleData, setCycleData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cycles", {
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
    fetch("http://localhost:3000/setup", requestOptions)
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
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    };
    fetch("http://localhost:3000//cycle/<id>/symptoms", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
