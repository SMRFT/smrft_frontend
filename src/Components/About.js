import React from 'react';
import './About.css'; // Add any custom styles in this CSS file if needed.
import DRIMAGE from './Images/sims-dr.jpg'; // Path to the logo

const About = () => {
  return (
    <body>
    <div className="about-container">
      <div className="about-content">
        
        <h1>SHANMUGA GROUP OF INSTITUTIONS, SALEM</h1>
        <p>
        Shanmuga Institute of Post Graduate Medical Science was established in the year 1998 under the begin grace President ship of the chairman of Shanmuga Medical Research Foundation Trust, 
        Dr. P.S. Panneer Selvam,MS, MNAMS, FAIS, FICS, FIAGES., 
        Our Institution is a SELF Contained / Self Sufficient accompanied by 355 bed own / parent Shanmuga Hospitals and salem Cancer Institute.
        </p>
        <ul>
          <li>It is affiliated to the Tamil Nadu Dr. MGR Medical University</li>
          <li>
          Approved by government of Tamil Nadu, hence the College has its own autonomous structure in its activities. 
          Much emphasis is given for discipline, national culture and physical culture.
          </li>
          <li>Approved by Indian Nursing  Council</li>
          <li>Permanently approved by Tamil Nadu Nursing and Midwifery Council.</li>
        </ul>
        
      </div>
      <div className="about-image">
        <img 
          src={DRIMAGE} 
          alt="Chairman Dr.P.S.Panneer Selvam" 
        />
      </div>
    </div>
    </body>
  );
};

export default About;
