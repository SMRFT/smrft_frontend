import React from 'react';
import './Laboratory.css'; // Optional: Custom styling

const Laboratory = () => {
  return (
    <div className="laboratory-container">
      <div className="laboratory-content">
        <h1>Laboratory</h1>
        <p>
          Our College of Nursing is the training ground for B.Sc(N) and DGNM students to develop their professional and technical skills in Nursing before stepping into ward practice. 
          The laboratories are well furnished and equipped with dummies, manikins, specimens, models, puppets, charts, posters, instruments, bones, linen, trays, advanced equipment, and other related articles to practice nursing procedures efficiently. Students gain sufficient exposure to the basics of nursing service and enjoy individual hands-on experience on various practical procedures.
        </p>
        <ul>
          <li>Nursing Foundation Laboratory</li>
          <li>Nutrition Laboratory</li>
          <li>Medical Surgical Nursing Laboratory</li>
          <li>Community Health Nursing Laboratory</li>
          <li>MCH Laboratory</li>
          <li>Computer Laboratory</li>
          <li>A.V. Aids Laboratory</li>
          <li>Anatomy Physiology Laboratory</li>
          <li>ACN Laboratory</li>
          <li>Psychiatric Laboratory</li>
          <li>Microbiology & Pathology Laboratory</li>
        </ul>
      </div>
    </div>
  );
};

export default Laboratory;
