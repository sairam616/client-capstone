import React from 'react';
import { useState } from "react";
import "../BookAppointment/BookAppointment.css";
const BookAppointments = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [appointmenDetails, setAppointment] = useState([]);
  const handleSubmit = (e) =>{
    console.log(appointmenDetails);
    e.preventDefault();
    const Data = new FormData(e.target)
    const formJSON = Object.fromEntries(Data.entries());
    setAppointment(formJSON);
    console.log("email is ",{email},"Name is",{firstName});
  };
  return( 
    <div>
      <div className="appointment-testbox">
        <form onSubmit={handleSubmit} className='appointment-form' action='#'>
          <div className="appointment-banner">
            <h1 className='appointment-title'>Brampton Opticians Appointment</h1>
          </div>
          <fieldset className="appointment-item">
            <legend>Name</legend>
            <div className="appointment-item-name">
              <input type="text" name="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First" />
              <input type="text" name="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last" />
            </div>
          </fieldset>
          <fieldset className='appointment-item'>
            <legend>Email</legend>
            <input type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </fieldset>
          <fieldset className="appointment-item">
            <legend>Phone</legend>
            <input type="text" name="Phone" placeholder="### ### ####" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </fieldset>
          <fieldset className="appointment-item">
            <legend>Appointment Date</legend>
            <input className='appointment-date' type="date" name="Appointment-Date" required value={date} onChange={(e) => setDate(e.target.value)}/>
            <i className="fas fa-calendar-alt"></i>
          </fieldset>
          <fieldset className="appointment-item">
            <legend>Appointment Time</legend>
            <input type="time" name="Appointment-Time" required value={time} onChange={(e) => setTime(e.target.value)}/>
          </fieldset>
          <fieldset className="appointment-item">
            <legend>Address</legend>
            <label for="street">Street:</label>
            <input type="text" name="Street" required/>
            <label for="suite">Suite No:</label>
            <input type="text" placeholder="optional"name="suite" />
            <label for="postal">Postal:</label>
            <input type="text" name="Postal" required/>
            <label for="province">Province:</label>

            <select className='appointment-select' name="Province" id="province">
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NT">Northwest Territories</option>
              <option value="NS">Nova Scotia</option>
              <option value="NU">Nunavut</option>
              <option value="ON" selected>Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="YT">Yukon</option>
          </select>
          
          </fieldset>
          <fieldset className="appointment-item">
            <legend>Purpose</legend>
            <textarea rows="3" name="Purpose-of-Visit" value={purpose} onChange={(e) => setPurpose(e.target.value)}></textarea>
          </fieldset>
          <div className="appointment-btn-div">
            <button type="submit" className='appointment-btn'>Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointments;
    