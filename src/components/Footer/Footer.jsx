import React from "react";
import "./Footerstyle.css";
import { text } from "@fortawesome/fontawesome-svg-core";
import { FaAlignJustify } from "react-icons/fa";

const NavbarSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="footer-column">
          <h3 className="footer-heading">About Us</h3>
          <p>AI Concepts Hub is a comprehensive platform dedicated to empowering individuals through expert-led training in artificial intelligence and machine learning. We develop innovative products and conduct R&D to address real-world problems using advanced AI solutions.</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Fields & Domains</h3>
          <ul className="footer-links">
          <li>Engineering</li>
          <li>Medical</li>
          <li>Agriculture</li>
          <li>Transport & Automotive</li>
          <li>Chemical & Infrastructure</li>
          <li>Aeronautics & Aviation</li>
          <li>Arts</li>
          <li>Statistics</li>

          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li>Ai Fields</li>
            <li>About Us</li>
            <li>Contact </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-links">
            <li>aiconceptshub@gmail.com</li>
            <li></li>
          </ul>
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
