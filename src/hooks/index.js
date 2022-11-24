import { useEffect, useState } from "react";

export const useCycleData = ({ userId }) => {
  const [cycleData, setCycleData] = useState([]);

  console.log("cycle data for user ", userId);

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      // const requestOptions = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`
      //   }
      // };
      fetch("http://localhost:3000/cycles", {
        method: "GET",
        Authorization: `Bearer ${token}`,
      })
        .then((response) => response.json())
        .then((json) => {
          setCycleData(json.cycles);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setCycleData([
      {
        id: 1,
        period_start: new Date(2021, 6, 1),
        period_end: new Date(2021, 6, 16),
      },
      {
        id: 2,
        period_start: new Date(2021, 5, 1),
        period_end: new Date(2021, 5, 3),
      },
      {
        id: 13,
        period_start: new Date(2021, 3, 1),
        period_end: new Date(2021, 3, 12),
      },
      {
        id: 4,
        period_start: new Date(2021, 2, 1),
        period_end: new Date(2021, 2, 7),
      },
    ]);
  }, []);

  return cycleData;
};

export const about = (params) => {
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
