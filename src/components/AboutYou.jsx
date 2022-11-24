import React, { useState } from "react";
import { about } from "../hooks";
import { useNavigate } from "react-router-dom";

const AboutYou = function () {
  const [userData, setUserData] = useState({
    lastPeriod: " ",
    averageCycle: 0,
    takesPill: false,
    prefersNotifications: false,
  });
  const navigate = useNavigate();

  const handleImput = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    about(
      {
        period_end: userData.lastPeriod,
        average_period_days: parseInt(userData.averageCycle),
        take_pill: userData.takesPill,
        notification_on: userData.prefersNotifications,
      },
      navigate
    );
  };

  return (
    <div className="col-md-10 mx-auto col-lg-5 rounded-5">
      <h1 className="text-center my-5">we want to know more about you</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label"> Last period</label>
        <input
          type="date"
          name="lastPeriod"
          value={userData.lastPeriod}
          onChange={handleImput}
          className="form-control mb-3"
        />

        <label>Average cicle</label>
        <input
          type="number"
          name="averageCycle"
          value={userData.averageCycle}
          onChange={handleImput}
          min="1"
          max="10"
          className="form-control mb-3"
        />
        <div className="d-flex align-items-center my-3">
          <input
            type="checkbox"
            name="takesPill"
            value={userData.takesPill}
            onChange={handleImput}
          />
          <label className="ms-2"> Do you take a pill</label>
        </div>

        <div className="d-flex align-items-center my-3">
          <input
            type="checkbox"
            name="prefersNotifications"
            value={userData.prefersNotifications}
            onChange={handleImput}
          />
          <label className="ms-2"> Would you like to get notification </label>
        </div>

        <button type="submit" className="boton my-5">
          submit
        </button>
      </form>
    </div>
  );
};
export default AboutYou;
