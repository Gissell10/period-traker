import React, { useState } from "react";
import { dataSymptom } from "../hooks";

const Symptoms = function ({ periodDate }) {
  const [symptoms, setSymptoms] = useState({
    date: periodDate.toDateString(),
    symptoms: [],
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (name !== "flow") {
      const previousSymptom = Object.assign({}, symptoms);
      previousSymptom.symptoms.push({ symptom_name: name, level: value });

      setSymptoms(previousSymptom);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(symptoms);
    for (let i = 0; i < symptoms.symptoms.length; i++) {
      const currentSymptom = symptoms.symptoms[i];
      dataSymptom({
        date: symptoms.date,
        symptom: currentSymptom.symptom_name,
        level: parseInt(currentSymptom.level),
      });
    }
    setSymptoms({
      date: periodDate.toDateString(),
      symptoms: [],
    });
  };

  return (
    <div className="animate__animated animate__fadeInUp animate__faster">
      <h3>Please tell us about your symptoms</h3>
      <div className="my-3">selected date: {periodDate.toDateString()}</div>
      <form onSubmit={handleSubmit}>
        <div className="form mb-3">
          <label className="my-3">
            Had Flow:
            <select
              name="flow"
              value={symptoms.value}
              onChange={handleInput}
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
          onChange={handleInput}
          min="1"
          max="10"
          className="form-control mb-3"
        />

        <label className="form-label">Stomachache</label>
        <input
          type="number"
          name="stomachache"
          value={symptoms.stomachache}
          onChange={handleInput}
          min="1"
          max="10"
          className="form-control mb-3"
        />

        <label className="form-label">Breast pain</label>
        <input
          type="number"
          name="breastPain"
          value={symptoms.breastPain}
          onChange={handleInput}
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
