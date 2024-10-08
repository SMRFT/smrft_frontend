import React from 'react';
import './Library.css'; // Optional: Add CSS for custom styling
import LibraryImage from './Images/library.jpg'; // Path to the library image

const Library = () => {
  return (
    <div className="library-container">
      <div className="library-content">
        <h1>Library</h1>
        <p>
          The Library and learning resource center is an invaluable resource for students and faculties of Nursing education. It has the most complete collection with around 5000 text and reference books, audio and video material, Professional Journals, and magazines. 
        </p>
        <p>
          It is one of the most lively places in the college, providing a comfortable and reader-friendly environment that enables learning, the advancement of knowledge, and promotes scholarship. The learning resource center acts as a coordinating point between the faculty and students, supported by highly skilled and trained library and information professionals.
        </p>
        <ul>
          <li>Computerized library</li>
          <li>More than ten thousand books</li>
          <li>International and Indian Journals</li>
          <li>Research reports and presentations</li>
          <li>Audio-Visual Aids</li>
          <li>Multi-media library</li>
          <li>Internet facility</li>
          <li>Photo coping facility</li>
          <li>Cyclostyling facility</li>
          <li>Separate floor for reference books</li>
          <li>Double Story building separately for students and staff</li>
        </ul>
      </div>
      <div className="library-image">
        <img src={LibraryImage} alt="Library" />
      </div>
    </div>
  );
};

export default Library;
