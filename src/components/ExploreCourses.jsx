import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const ExploreCourses = () => {
  const [activeTab, setActiveTab] = useState('GS Foundation');
  const [sectionRef, isVisible] = useScrollReveal();
  const tabs = ['GS Foundation', 'Mentorship', 'Optional Foundation', 'Test Series', 'Others'];

  const allCourses = [
    { title: "1 Year General Studies Foundation Course", category: "GS Foundation", desc: "Join our GS Foundation Course now and start preparing to your career from now in SRI RAM ias to get better Future.", price: "Rs. 50,000 /-", img: "/assets/course_ias.png" },
    { title: "2 Year General Studies Foundation Course", category: "GS Foundation", desc: "Transform your civils journey by joining our GS Foundation Course ", price: "Rs. 80,000 /-", img: "/assets/course_ias.png" },
    { title: "Target UPSC 2026 Batch", category: "GS Foundation", desc: "Join our GS Foundation Course now and start preparing to your career", price: "Rs. 45,000 /-", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop" },
    { title: "Mentorship Program 2025", category: "Mentorship", desc: "Get one-on-one guidance from expert mentors to clear all your doubts and stay on track with your preparation.", price: "Rs. 20,000 /-", img: "https://images.unsplash.com/photo-1454165833767-0ef98925f44b?q=80&w=1470&auto=format&fit=crop" },
    { title: "Mentorship Program 2026", category: "Mentorship", desc: "Long term mentorship for the next year's attempt.", price: "Rs. 30,000 /-", img: "https://images.unsplash.com/photo-1454165833767-0ef98925f44b?q=80&w=1470&auto=format&fit=crop" },
    { title: "Sociology Optional Foundation", category: "Optional Foundation", desc: "Master Sociology with our comprehensive foundation course covering paper I and II.", price: "Rs. 35,000 /-", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470&auto=format&fit=crop" },
    { title: "Geography Optional Foundation", category: "Optional Foundation", desc: "Master Geography with our comprehensive foundation course.", price: "Rs. 35,000 /-", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470&auto=format&fit=crop" },
    { title: "Prelims Test Series 2025", category: "Test Series", desc: "Evaluate your preparation with our rigorous prelims test series.", price: "Rs. 8,000 /-", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop" },
    { title: "Mains Test Series 2025", category: "Test Series", desc: "Enhance your answer writing skills with detailed evaluation.", price: "Rs. 12,000 /-", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop" },
    { title: "CSAT Special Course", category: "Others", desc: "Dedicated course to tackle the CSAT paper with ease.", price: "Rs. 10,000 /-", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" },
  ];

  const displayedCourses = allCourses.filter(c => c.category === activeTab);

  return (
    <section ref={sectionRef} id="courses" className="explore-courses-new">
      <div className="container">
        <div className={`section-header-left reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="section-title-left">Explore Our Courses</h2>
          <p className="section-subtitle-left">Explore our comprehensive <span>UPSC courses</span> designed to cover Prelims, Mains, and Interview preparation with structured learning, expert guidance,</p>
        </div>

        <div className={`tabs-container-wrapper reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`}>
          <div className="tabs-container-new">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn-new ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className={`course-grid-3x2 reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}>
          {displayedCourses.length > 0 ? displayedCourses.map((course, idx) => (
            <div key={idx} className="course-card-image">
              <img src={course.img} alt={course.title} className="course-bg-img" />
              <div className="course-overlay-content">
                <h4 className="course-yellow-title">★ {course.title}</h4>
                <div className="course-divider"></div>
                <p className="course-desc-text">{course.desc}</p>
                <div className="course-hover-info">
                  <p className="course-price-yellow">{course.price}</p>
                  <button className="btn-know-more-yellow">Know More</button>
                </div>
              </div>
            </div>
          )) : (
            <p className="no-courses-msg">No courses currently available in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreCourses;

