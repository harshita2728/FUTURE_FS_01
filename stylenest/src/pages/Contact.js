import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Your Email" />
        <input placeholder="Your Message"></input>
        <button className="btn-secondary">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
