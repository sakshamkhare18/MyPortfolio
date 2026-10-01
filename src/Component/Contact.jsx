
import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: ""
});
const [status, setStatus] = useState("");
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });
};
const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    setStatus("Please fill all fields.");
    return;
  }

  emailjs
    .send(
      "portfolio_contact",
      "template_t5098am",
      formData,
      {
        publicKey: "CQWzoV-_ASN-cvf27",
      }
    )
    .then(() => {
      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    })
    .catch((error) => {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    });
};
  return (
    <section id="contact" className="contact-section">

      {/* Left Side */}
      <div className="contact-info">

        <p className="contact-label">
           GET IN TOUCH
        </p>

        <h1>
          Let's work
          <br />
          together.
        </h1>

        <p className="contact-description">
          Have a project, opportunity, or just want to
          start a conversation? I'd love to hear from you.
        </p>

        <div className="social-links">

          <a href="mailto:sakshamkhare563@gmail.com">
            Email ↗
          </a>

          <a href="https://github.com/sakshamkhare18">
            GitHub ↗
          </a>

          <a href="mailto:sakshamkhare563@gmail.com"
  className="email-link">
            LinkedIn ↗
          </a>

        </div>

      </div>


      {/* Right Side */}
    <form className="contact-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Your Name</label>
          <input type="text"
           name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
/>
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="What's this about?"
/>
        </div>

        <div className="form-group">
          <label>Message</label>
         <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows="5"
  placeholder="Tell me about your project..."
></textarea>
        </div>

        <button type="submit" className="send-button">
          Send Message ↗
        </button>
        {status && <p className="form-status">{status}</p>}

      </form>
<footer className="portfolio-footer">
  <p>© 2026 Saksham Khare. All rights reserved.</p>

  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </div>

  <p className="footer-built">
    Built with React & JavaScript
  </p>
</footer>
    </section>
  );
}

export default Contact;