import React, { useState } from "react";
import Calendar from "react-calendar";
import Symptoms from "./Symptoms";
import "react-calendar/dist/Calendar.css";

const Schedule = function () {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>Period Tracker</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div>selected date: {date.toDateString()}</div>

      <Symptoms />
    </div>
  );
};
export default Schedule;
