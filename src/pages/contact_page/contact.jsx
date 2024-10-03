import React from 'react';
import './contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const ContactPage = () => {
  return (
    <div className="contact-container " id="contact-page">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you. Please fill out the form on the right, and we'll get back to you as soon as possible.
        </p>
        <p>
          Our team is available to answer your questions and help you with any inquiries you may have about our services.
        </p>
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>
            <i className="fas fa-envelope"></i> 
            <a href="mailto:info@example.com"> info@example.com</a>
          </p>
        </div>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="tel" id="contactNumber" name="contactNumber" placeholder="Contact Number" required />
          </div>
          <div className="form-group">
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" placeholder="Your message..." rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
