import React, { useState } from "react";
import Schedule from "./Schedule";

const Symptoms = function () {
  const [symptoms, setSymtoms] = useState({});

  const handleImput = (event) => {
    const { name, value } = event.target;

    setSymtoms({
      ...symptoms,
      [name]: value,
    });
    console.log(symptoms, Schedule.date());
  };

  const handleSubmit = (e) => {
    //console.log(date, symptons, level);
  };

  return (
    <div className="col-md-10 mx-auto col-lg-5 rounded-5">
      <h3>Please tell us about your symptoms</h3>
      <form onSubmit={handleSubmit}>
        <div className="form mb-3">
          <label>
            Had Flow:
            <select
              name="flow"
              value={symptoms.value}
              onChange={handleImput}
              className="form-select"
            >
              <option value="Light">Light</option>
              <option value="Medium">Medium</option>
              <option value="Heavy">Heavy</option>
            </select>
          </label>
        </div>

        <label className="form-label">Headache</label>
        <input
          type="number"
          name="headache"
          value={symptoms.headache}
          onChange={handleImput}
          min="1"
          max="10"
          className="form-control mb-3"
        />

        <label className="form-label">Stomachache</label>
        <input
          type="number"
          name="stomachache"
          value={symptoms.stomachache}
          onChange={handleImput}
          min="1"
          max="10"
          className="form-control mb-3"
        />

        <label className="form-label">Breast pain</label>
        <input
          type="number"
          name="breastPain"
          value={symptoms.breastPain}
          onChange={handleImput}
          min="1"
          max="10"
          className="form-control mb-3"
        />

        <button type="submit" className="boton">
          submit
        </button>
      </form>
    </div>
  );
};

export default Symptoms;
