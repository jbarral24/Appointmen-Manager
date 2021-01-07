import React from "react";

const Formulary = () => {
  return (
    <React.Fragment>
      <h2>Create Appointment</h2>
      <form>
        <label>Pet Name</label>

        <input
          type="text"
          name="Pet"
          className="u-full-width"
          placeholder="Pet name"
        />

        <label> Pet Owner</label>
        <input
          type="text"
          name="Pet Owner"
          className="u-full-width"
          placeholder="Pet owner name"
        />

        <label> Date</label>
        <input type="date" name="date" className="u-full-width" />
      </form>
    </React.Fragment>
  );
};

export default Formulary;
