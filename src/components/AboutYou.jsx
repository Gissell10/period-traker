import React from "react";
const AboutYou = function () {
  return (
    <div>
      <h2>we want to know more about you</h2>
      <form>
        <label>Birthday:</label>
        <input type="date" name="birthday" />
        <label> Last period</label>
        <input type="date" name="last-period" />
        <label htmlFor="">Average cicle</label>
        <input type="number" min="1" max="10" />
        <button type="Submit">submit</button>
      </form>
    </div>
  );
};
<<<<<<< Updated upstream
export default AboutYou;
=======
export default AboutYou;
>>>>>>> Stashed changes
