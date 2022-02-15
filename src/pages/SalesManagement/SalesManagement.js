import React from 'react';
import "../SalesManagement/SalesManagement.css";
const SalesManagement = () => {
  return( 
    <div>
      <div className="sales-testbox">
        <form action="/" className='sales-form'>
          <div className="sales-banner">
            <h1 className='sales-title'>Sales Management</h1>
          </div>
          <div className="sales-item">
            <label>Name</label>
            <div className="sales-item-name">
              <input type="text" name="name" placeholder="First" />
              <input type="text" name="name" placeholder="Last" />
            </div>
          </div>
          <div className='sales-item'>
            <label>Email</label>
            <input type="email" name="email"/>
          </div>
          <div className="sales-item">
            <label>Phone</label>
            <input type="text" name="phone"/>
          </div>
          <fieldset className="sales-item">
            <legend>Address</legend>
            <label for="street">Street:</label>
            <input type="text" name="street" required/>
            <label for="suite">Suite No:</label>
            <input type="text" placeholder="optional"name="suite" />
            <label for="postal">Postal:</label>
            <input type="text" name="postal" required/>
            <label for="province">Province:</label>
            <select className='sales-select' name="province" id="province">
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
          <div className='sales-item'>
            <label>Item Purchased</label>
            <input type="text" name="item-purchased"/>
          </div>
          <div className='sales-item'>
            <label>Item Number</label>
            <input type="text" name="item-number"/>
          </div>
          <div className='sales-item'>
            <label>Payment Type</label>
            <input type="text" name="payment-type"/>
          </div>
          <div className="sales-btn-div">
            <button type="submit" href="/" className='sales-btn'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );

};

export default SalesManagement;
    