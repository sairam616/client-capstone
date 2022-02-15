import React from 'react';
import "../BookAppointment/BookAppointment.css";
const BookAppointments = () => {
  return( 
    <div>
      <div className="appointment-testbox">
        <form action="/" className='appointment-form'>
          <div className="appointment-banner">
            <h1 className='appointment-title'>Brampton Opticians Appointment</h1>
          </div>
          <fieldset className="appointment-item">
            <legend>Name</legend>
            <div className="appointment-item-name">
              <input type="text" name="name" placeholder="First" />
              <input type="text" name="name" placeholder="Last" />
            </div>
          </fieldset>
          <fieldset className='appointment-item'>
            <legend>Email</legend>
            <input type="email" name="email"/>
          </fieldset>
          <fieldset className="appointment-item">
            <legend>Phone</legend>
            <input type="text" name="phone" placeholder="### ### ####"/>
          </fieldset>
          <fieldset className="appointment-item">
            <legend>Appointment Date</legend>
            <input className='appointment-date' type="date" name="bdate" required/>
            <i className="fas fa-calendar-alt"></i>
          </fieldset>
          <fieldset className="appointment-item">
            <legend>Appointment Time</legend>
            <input type="time" name="btime" required/>
          </fieldset>
          <fieldset className="appointment-item">
            <legend>Address</legend>
            <label for="street">Street:</label>
            <input type="text" name="street" required/>
            <label for="suite">Suite No:</label>
            <input type="text" placeholder="optional"name="suite" />
            <label for="postal">Postal:</label>
            <input type="text" name="postal" required/>
            <label for="province">Province:</label>

            <select className='appointment-select' name="province" id="province">
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
            <textarea rows="3"></textarea>
          </fieldset>
          <div className="appointment-btn-div">
            <button type="submit" href="/" className='appointment-btn'>Book</button>
          </div>
        </form>
      </div>
    </div>
  );

};

export default BookAppointments;
    