import React from "react";
import "./Footerstyle.css";

const NavbarSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="footer-column">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            <li>Contact</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Fields & Domains</h3>
          <ul className="footer-links">
            <li>Engineering</li>
            <li>Medical</li>
            <li>Agriculture</li>
            <li>Automation</li>
            <li>Finance</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li>Ai Fields</li>
            <li>About Us</li>
          </ul>
        </div>
        
        <div className="footer-column newsletter">
          <h3 className="footer-heading">Newsletter</h3>
          <p>Sign up with your email to join our mailing list.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Email Address:*"
              className="newsletter-input"
            />
            <label>
              <input type="checkbox" /> I would like to receive emails from
              Pluralsight
            </label><br></br>
            <button type="submit" className="newsletter-button">Submit</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Ai Concepts Hub. All rights reserved</p>
        <ul className="footer-bottom-links">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default NavbarSection;
