import React from 'react';
import smrftlogo from '../Images/smrft-logo.png'; // Path to the logo
import './Header.css'; // Importing the CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={smrftlogo} alt="SMRFT Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">SMRFT</a></li>
          <li><a href="#">Shanmuga Hospitals</a></li>
          <li><a href="#">Salem Cancer Institute</a></li>
          <li><a href="About">SIMS</a></li>
          <li><a href="#">Doctors</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
