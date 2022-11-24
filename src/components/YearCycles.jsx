import Calendar from "react-calendar";
import { useCycleData } from "../hooks";
import "react-calendar/dist/Calendar.css";

const YearCycles = function () {
  //const { userId } = useParams();
  const cycleData = useCycleData(); // replace with user id from url params
  console.log(cycleData);
  return (
    <div className="app">
      <h1 className="text-center">React Calendar with Range</h1>
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
