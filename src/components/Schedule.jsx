import React, { useState } from "react";
import Calendar from "react-calendar";
import Symptoms from "./Symptoms";
import "react-calendar/dist/Calendar.css";

const Schedule = function () {
  const [periodDate, setPeriodDate] = useState(new Date());

  return (
    <div className="col-md-10 mx-auto col-lg-5 rounded-5">
      <h1>Period Tracker</h1>
      <div className="calendar-container">
        <Calendar
          onChange={setPeriodDate}
          value={periodDate}
          className="mb-5"
        />
      </div>

      <Symptoms periodDate={periodDate} />
    </div>
  );
};
export default Schedule;
