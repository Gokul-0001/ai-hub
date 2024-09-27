import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate(); 


  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo"><a href="/">AiConcepts Hub</a></h1>
      <ul className="nav-links">
        <li><Link to="/ai-fields">AI Fields</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button className="login-button" onClick={handleLoginClick}>Login</button></li>
      </ul>
      <ul className={`nav-links-mobile ${isMobileOpen ? 'open' : ''}`}>
        <li><Link to="/ai-fields">AI Fields</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button className="login-button" onClick={handleLoginClick}>Login</button></li>
      </ul>
      <button 
        className={`mobile-menu-icon ${isMobileOpen ? 'open' : ''}`} 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? '' : ''}
      </button>
    </nav>
  );
}

export default Navbar;
