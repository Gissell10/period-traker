import React, { useState } from "react";
import Calendar from "react-calendar";
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
    </div>
  );
};
<<<<<<< Updated upstream
export default Schedule;
=======
export default Schedule;
>>>>>>> Stashed changes
