const Contact = () => {
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
        </div>
      </section>
    );
};
export default Contact;