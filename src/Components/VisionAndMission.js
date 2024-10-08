import React, { useState } from 'react';
import './VisionAndMission.css'; // Add any custom styles in this CSS file if needed.

const VisionMission = () => {
  const [selectedSection, setSelectedSection] = useState('vision'); // Default section

  const renderContent = () => {
    switch (selectedSection) {
      case 'vision':
        return (
          <div>
            <h1>Vision</h1>
            <ul>
              <li>To become a global leader in Medical Science Education.</li>
              <li>To provide quality Management in service and education.</li>
              <li>To work relentlessly to contribute.</li>
              <li>To global knowledge and skill.</li>
              <li>To impact knowledge and interact with organizations of similar interest to reach the unreachable with awareness and service to serve the underserved.</li>
            </ul>
            <h1>Mission</h1>
            <p>
              To impart futuristic and comprehensive medical education of global standards with high sense of discipline and social relevance in a serene and invigorating environment learner-centered medical education professionalism in education, Services and management meet regional and national needs strategic future-oriented planning inter-organizational linkage unique organizational culture.
            </p>
          </div>
        );
      case 'salient':
        return (
          <div>
            <h1>Salient Features</h1>
            <ul>
              <li>Well qualified internal and external lecturers.</li>
              <li>Extensive practical-oriented education and training.</li>
              <li>Weekly guest lecture programmes from specialized hospital medical professionals.</li>
              <li>Good interactions with major health services institutions.</li>
              <li>Central Government approved vocational apprenticeship training for vocational candidates.</li>
              <li>Highly sophisticated internet facilities for Global reference.</li>
              <li>Specialization in Cancer studies and Research.</li>
              <li>Complete training with all the 355 bedded patients in Shanmuga hospitals.</li>
              <li>Intensive critical care training.</li>
              <li>Subject and student-centered learning.</li>
            </ul>
          </div>
        );
      case 'quality':
        return (
          <div>
            <h1>Quality Policy</h1>
            <p>
              Shanmuga Institute is committed to providing quality education to students enabling them to excel in the field of science and medicine to cater to the changing and challenging needs of society.
            </p>
            <ul>
              <li>Contributing to the academic standing and overall knowledge development of the student.</li>
              <li>Maintaining state of the art infrastructure and congenial learning environment.</li>
              <li>Enhancing the competence of faculty to a very high level and making them adopt all modern and innovative methods.</li>
              <li>Inculcating moral and ethical values among students and staff.</li>
              <li>Collaborating with institutions and organizations.</li>
              <li>Promoting research and development programs for the growth of the economy.</li>
              <li>Disseminating technical knowledge in the region by continuing education programs.</li>
              <li>Ensuring continual improvement of the quality management system.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="vision-mission-container">
      <div className="vision-mission-buttons">
        <button onClick={() => setSelectedSection('vision')}>Vision & Mission</button>
        <button onClick={() => setSelectedSection('salient')}>Salient Features</button>
        <button onClick={() => setSelectedSection('quality')}>Quality Policy</button>
      </div>
      <div className="vision-mission-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default VisionMission;
