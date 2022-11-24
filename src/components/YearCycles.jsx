import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import { useCycleData } from "../hooks";
import "react-calendar/dist/Calendar.css";

const YearCycles = function () {
  //const { userId } = useParams();
  const cycleData = useCycleData(); // replace with user id from url params
  console.log(cycleData);
  return (
    <div className="app animate__animated animate__fadeInUp animate__faster">
      <h1 className="text-center my-5">Cylce forecast</h1>
      <div
        className="calendar-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {cycleData.map((periodDate) => {
          return (
            <div key={periodDate.id}>
              <Calendar
                value={[
                  new Date(periodDate.period_start),
                  new Date(periodDate.period_end),
                ]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YearCycles;
