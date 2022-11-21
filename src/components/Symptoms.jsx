import React, { useState } from "react";
import Select from 'react-select';

const options = [
  { value: 'heavy', label: 'Heavy' },
  { value: 'mid', label: 'Mid' },
  { value: 'light', label: 'Light' },
];


 

const Symptoms = function () {
  const [selectedOption, setSelectedOption] = useState(null);
    return (
      <div>
        <h2>What kinds of symptoms do you have and the extent of the symptoms.</h2>
        <form>
          <label>Headache</label>
          <input type="number" min="1" max="10" />
          <label>Stomachache</label>
          <input type="number" min="1" max="10" />
          <label>Breast pain</label>
          <input type="number" min="1" max="10" />
          <label>Emotional fluctuation</label>
          <input type="number" min="1" max="10" />
          <label>Others</label>
          <input type="text"></input>

          <label>Flow</label>
          <div className="Flow">
          <Select
            defaultValue={selectedOption}
            nChange={setSelectedOption}
            options={options}
          />
          </div>
          <button type="Submit">submit</button>
          </form>
         </div>
    );
  };

          

export default Symptoms;


