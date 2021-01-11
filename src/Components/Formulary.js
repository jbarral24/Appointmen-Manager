import React, {useState} from "react";

const Formulary = () => {

const [Appointment, actualizeApointment] = useState({

pet: '',
Owner: '',


})

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

        <label> Owner</label>
        <input
          type="text"
          name="Owner"
          className="u-full-width"
          placeholder="Pet owner name"
        />

        <label> Date</label>
        <input type="date" name="date" className="u-full-width" />
        <label> pick up hour</label>
        <input type="time" name="hour" className="u-full-width" />
      </form>
    </React.Fragment>
  );
};

export default Formulary;
