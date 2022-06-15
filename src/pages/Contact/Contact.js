import { useState } from "react";
import { send } from "emailjs-com";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const SERVICE_ID = "service_rzrugoo";
const TEMPLATE_ID = "template_fqppt0o";
const USER_ID = "79mlUIUpEVBYgesYE";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-left">
          <h2>Contact</h2>
          <form onSubmit={handleOnSubmit}>
            <label className="name">Name</label>
            <input
              type="text"
              className="text"
              id="from_name"
              name="from_name"
            />
            <label className="phone">Phone Number</label>
            <input
              className="text"
              id="contact_number"
              name="contact_number"
              type="number"
            />
            <label className="email">Email</label>
            <input className="text" id="from_email" name="from_email" />
            <label className="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              className="send-message-cta"
              value="send message"
            />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
