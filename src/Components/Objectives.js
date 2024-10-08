import React from 'react';
import './Objectives.css'; // Add any custom styles in this CSS file if needed.
import Objective from './Images/objectives.jpg';

const Objectives = () => {
  return (
    <body>
    <div className="objectives-container">
      <div className="objectives-content">
        
        <h1>Objectives</h1>
        <ul>
          <li>To offer world class Under Graduate, Post Graduate and Doctoral programme in Medical Education.</li>
          <li>To prove enriching, stimulating and rewarding experience from practical world.</li>
          <li>To promote and Strengthen National and International linkage with Medical Institutes, Academics and society in general</li>
          <li>To carry out research and development activities useful to the society.</li>
          <li>To develop holistic personality with positive and creative attitudes.</li>
          <li>To offer modern and career oriented education.</li>
          <li>To give priority to the health professionals.</li>
          <li>To offer self employment and campus interview.</li>
          <li>To fertilize students intake ability.</li>
          <li>To deliver a complete practical oriented training from our multi speciality Shanmuga Hospital and Salem Cancer Institute.</li>
        </ul>

      </div>
      <div className="objectives-image">
        <img 
          src={Objective} 
          alt="objective" 
        />
      </div>
    </div>
    </body>
  );
};

export default Objectives;
