import React, { useState } from "react";
import { about } from "../hooks";

const AboutYou = function () {
  const [userData, setUserData] = useState({
    lastPeriod: " ",
    averageCycle: "",
    takesPill: false,
    prefersNotifications: false,
  });

  const handleImput = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUserData({
      ...userData,
      [name]: value,
    });
    //console.log(userData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(userData);
    about(userData);
  };

  return (
    <div className="col-md-10 mx-auto col-lg-5 rounded-5">
      <h2>we want to know more about you</h2>
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
        <div className="form">
          <input
            type="checkbox"
            name="takesPill"
            value={userData.takesPill}
            onChange={handleImput}
          />
          <label className="ms-2"> Do you take a pill</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="prefersNotifications"
            value={userData.prefersNotifications}
            onChange={handleImput}
          />
          <label className="ms-2"> Would you like to get notification </label>
        </div>

        <button type="Submit" className="boton">
          submit
        </button>
      </form>
    </div>
  );
};
export default AboutYou;
