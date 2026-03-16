import React, { useState } from 'react';

const CoursesMegaMenu = ({ isOpen, onClose }) => {
  const [activeCity, setActiveCity] = useState('Delhi');

  const courseData = {
    Delhi: [
      "Prelims Test Series 2026",
      "PSIR Optional foundational courses",
      "Geography Optional Courses",
      "Mains Enrichment Program 2025",
      "PSIR Value Enrichment Course 2025",
      "Second year general studies foundation courses",
      "Stride Mentorship program 2026",
      "Crash course of cse mains 2025",
      "PSIR Test Series and mentorship - Target 2025",
      "Essay Test Series 2025"
    ],
    Hyderabad: [
      "TSPSC Group 1 Foundation",
      "IAS 1 Year Batch Hyderabad",
      "Economy Special Classes",
      "Anthropology Optional",
      "Ethics & Integrity Module"
    ],
    Pune: [
      "MPSC Integration Batch",
      "History Optional Foundation",
      "CSAT Weekly Workshop",
      "Current Affairs Pune Hub",
      "Polity Masterclass"
    ]
  };

  if (!isOpen) return null;

  return (
    <div className="mega-menu-overlay" onClick={onClose}>
      <div className="mega-menu-container" onClick={(e) => e.stopPropagation()}>
        <div className="mega-sidebar">
          <h3 className="mega-title">COURSES</h3>
          <div className="city-list">
            {Object.keys(courseData).map((city) => (
              <button
                key={city}
                className={`city-btn ${activeCity === city ? 'active' : ''}`}
                onClick={() => setActiveCity(city)}
              >
                <div className="city-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <span>{city}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mega-content">
          <div className="active-city-header">{activeCity}</div>
          <div className="course-links-grid">
            {courseData[activeCity].map((course, idx) => (
              <a key={idx} href={`#${course.toLowerCase().replace(/\s+/g, '-')}`} className="mega-course-item">
                <div className="mega-course-icon">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 14H6V7h12v10z"/>
                   </svg>
                </div>
                <span>{course}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesMegaMenu;
