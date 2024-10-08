import React from 'react';
import './Footer.css'; // Created a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>SMRFT</h3>
          <ul>
            <li><a href="/aboutsmrft">About SMRFT</a></li>
            <li><a href="/objectives">Objectives</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/ourservices">Our Services</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Shanmuga hospitals</h3>
          <ul>
            <li><a href="/aboutshanmugahospitals">Shanmuga hospitals</a></li>
            <li><a href="/facilities">Facilities</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/reimbursement">Reimbursement</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Salem Cancer Institute</h3>
          <ul>
            <li><a href="/aboutsci">About SCI</a></li>
            <li><a href="/managingtrustee">Managing Trustee</a></li>
            <li><a href="/radiotherapy">Radiotherapy</a></li>
            <li><a href="/diagnostic">Diagnostic</a></li>
            <li><a href="/chemotherapy">Chemotherapy</a></li>
            <li><a href="/reimbursement">Reimbursement</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>SIMS</h3>
          <ul>
            <li><a href="/aboutsims">About SIMS</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/objectives">Objectives</a></li>
            <li><a href="/diagnostic">Diagnostic</a></li>
            <li><a href="/vision&mission">Vision & Mission</a></li>
            <li><a href="/hostel">Institutional Hostel</a></li>
            <li><a href="/library">Institutional library</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SIMS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;