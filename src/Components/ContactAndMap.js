const ContactAndMap = () => {
    return(
<section className="contact-section">
        <div className="container">
          <div className="contact-left">
            <h2>Contact</h2>
            <form action="">
              <label className="name">Name</label>
              <input className="text" id="name" name="name" />
              <label className="name">Phone Number</label>
              <input className="text" id="name" name="name" />
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
          <div className="contact-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174929.19030425497!2d-79.87806017547486!3d43.682240834848436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15a250b4849d%3A0xa1c1d68bc4744aa!2sBrampton&#39;s%20Main%20Opticians!5e0!3m2!1sen!2sca!4v1644460430325!5m2!1sen!2sca"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    );
};

export default ContactAndMap;