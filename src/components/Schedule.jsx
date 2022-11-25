import React, { useState } from "react";
import Calendar from "react-calendar";
import Symptoms from "./Symptoms";
import "react-calendar/dist/Calendar.css";

const Schedule = function () {
  const [periodDate, setPeriodDate] = useState(new Date());

  return (
    <div className="col-md-10 mx-auto col-lg-5 rounded-5 my-5 animate__animated animate__fadeInUp animate__faster">
      <div className="row align-items-center">
        <h1 className="my-3 textName">Period Tracker</h1>
        <div className="col align-self-center">
          <Calendar
            onChange={setPeriodDate}
            value={periodDate}
            className="mb-5"
          />
        </div>

        <Symptoms periodDate={periodDate} />
      </div>
    </div>
  );
};
export default Schedule;
