import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Management/Navigation/Navigation";
import "./SalesManagement.css";
import { addSalesData } from "../../../server/admin-api";
import { useAlert } from "react-alert";
const SalesManagement = () => {
  const alert = useAlert();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    itemPurchased: "",
    itemNumber: "",
    paymentType: "",
    totalCost: "",
  });
  const {
    firstName,
    lastName,
    email,
    phone,
    itemPurchased,
    itemNumber,
    paymentType,
    totalCost,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    let salesData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      itemPurchased: itemPurchased,
      itemNumber: itemNumber,
      paymentType: paymentType,
      totalCost: totalCost,
    };
    addSalesData({ salesData })
      .then((res) => {
        console.log(res);
        navigate(-1);
        alert.show("Successfully added Sales Data");
      })
      .catch((error) => console.error("Failed to Add Sales Data"));
  };
  return (
    <>
      <Navigation
      />

      <div className="sales-testbox">
        <form action="/" className="sales-form" onSubmit={(e) => onSubmit(e)}>
          <div className="sales-banner">
            <h1 className="sales-title">Instore Sales</h1>
          </div>
          <div className="sales-item">
            <label>Name</label>
            <div className="sales-item-name">
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => onChange(e)}
                required
                placeholder="First"
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => onChange(e)}
                placeholder="Last"
              />
            </div>
          </div>
          <div className="sales-item">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="sales-item">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="sales-item">
            <label>Item Purchased</label>
            <input
              type="text"
              name="itemPurchased"
              value={itemPurchased}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="sales-item">
            <label>Item Number</label>
            <input
              type="text"
              name="itemNumber"
              value={itemNumber}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="sales-item">
            <label>Payment Type</label>
            <input
              type="text"
              name="paymentType"
              value={paymentType}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="sales-item">
            <label>Total Cost</label>
            <input
              type="text"
              name="totalCost"
              value={totalCost}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="sales-btn-div">
            <button type="submit" href="/" className="sales-btn">
              Submit Sales
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SalesManagement;
