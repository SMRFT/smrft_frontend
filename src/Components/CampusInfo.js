import React from 'react';
import './CampusInfo.css'; // Optional: Custom styling

const CampusInfo = () => {
  return (
    <div className="campus-info-container">
      <div className="campus-info-section">
        <h2>Sports</h2>
        <p>
          The sports facilities within the campus enable the students to engage in outdoor games such as volleyball, throw ball, tennis, basketball, high jump, long jump, etc. 
          Indoor games such as chess, and carom board are also provided in the hostel.
        </p>
      </div>
      
      <div className="campus-info-section">
        <h2>Scholarship</h2>
        <p>
          The reservation category students belonging to SC/ST/BC/MBC/DNC communities can approach the college for scholarships provided by the District Adi Dravida Tribal Welfare Department and the District Backward Classes & Minority Welfare Department. 
          The application for the same will be forwarded by the college to the authorities upon request. The same procedure is applicable for students seeking educational loans from nationalized banks.
        </p>
      </div>
      
      <div className="campus-info-section">
        <h2>Anti-Ragging Policies</h2>
        <p>
          As per the direction of the Honorable Supreme Court of India on ragging and the orders of various authorities, ragging in any form is strictly prohibited inside the campus.
        </p>
      </div>
    </div>
  );
};

export default CampusInfo;
