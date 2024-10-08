import React from 'react';
import './Faculty.css'; // Optional CSS for styling

const Faculty = () => {
  return (
    <div className="faculty-container">
      <div className="faculty-content">
        <h1>Faculty</h1>
        <p>
          The faculty of the college comprises of qualified and experienced Post Graduate teachers specialized in various subjects like:
        </p>
        <ul>
          <li>Medical Surgical Nursing</li>
          <li>Community Health Nursing</li>
          <li>Obstetrical and Gynaecological Nursing</li>
          <li>Paediatric Nursing</li>
          <li>Psychiatric Health Nursing</li>
        </ul>
        <p>
          In addition, Postgraduate teachers are available for all departments and subjects.
        </p>

      
      </div>
    </div>
  );
};

export default Faculty;
