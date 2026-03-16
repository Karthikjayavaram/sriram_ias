import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Footer = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <footer ref={sectionRef} className="footer-redesign">
      <div className="container footer-container">
        <div className={`footer-left-content reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
          <div className="booking-cta">
            <div className="booking-cta-text">
              <p className="cta-label">Need More Clarity?</p>
              <p className="cta-main">Book a FREE Demo Class</p>
            </div>
            <button className="btn-book-footer">BOOK A DEMO</button>
          </div>

          <div className="footer-columns-grid">
            <div className="f-col">
              <h4>Website Links</h4>
              <ul>
                <li><a href="#home"><span className="link-arrow">›</span> Home</a></li>
                <li><a href="#about"><span className="link-arrow">›</span> About Us</a></li>
                <li><a href="#director"><span className="link-arrow">›</span> Director's Messages</a></li>
                <li><a href="#why"><span className="link-arrow">›</span> Why Choose Us</a></li>
                <li><a href="#contact"><span className="link-arrow">›</span> Contact Us</a></li>
                <li><a href="#branches"><span className="link-arrow">›</span> Our Branches</a></li>
                <li><a href="#referral"><span className="link-arrow">›</span> Referral Policy</a></li>
                <li><a href="#articles"><span className="link-arrow">›</span> UPSC Articles</a></li>
                <li><a href="#blogs"><span className="link-arrow">›</span> UPSC Blogs</a></li>
                <li><a href="#exploration"><span className="link-arrow">›</span> Exploration</a></li>
                <li><a href="#quizzes"><span className="link-arrow">›</span> Daily Quizzes</a></li>
                <li><a href="#faqs"><span className="link-arrow">›</span> FAQ's</a></li>
                <li><a href="#career"><span className="link-arrow">›</span> Career</a></li>
                <li><a href="#login"><span className="link-arrow">›</span> Student Login</a></li>
                <li><a href="#enroll"><span className="link-arrow">›</span> Enroll Now</a></li>
              </ul>
            </div>
            <div className="f-col">
              <h4>Courses Details</h4>
              <ul>
                <li><a href="#all"><span className="link-arrow">›</span> All Courses</a></li>
                <li><a href="#psir-m"><span className="link-arrow">›</span> PSIR Test Series and Mentorship</a></li>
                <li><a href="#psir-o"><span className="link-arrow">›</span> PSIR Optional Courses</a></li>
                <li><a href="#geo"><span className="link-arrow">›</span> Geography Optional Foundation Courses</a></li>
                <li><a href="#mains-e"><span className="link-arrow">›</span> Mains Enrichment Program 2025</a></li>
                <li><a href="#mains-t"><span className="link-arrow">›</span> Mains Test Series CSE 2025</a></li>
                <li><a href="#essay"><span className="link-arrow">›</span> Essay Test Series 2025</a></li>
                <li><a href="#mains-t2"><span className="link-arrow">›</span> Mains Test Series CSE 2025</a></li>
              </ul>
              <div className="f-address">
                <h4>Address :</h4>
                <p>SRIRAM'S IAS Tower's , 10-B, Pusa Road Bada Bazaar Marg Road Old Rajindra Nagar New Delhi - 110060</p>
              </div>
              <div className="f-contact-info">
                <p>📞 <strong>Contact Us :</strong> 011-42430722</p>
                <p>✉ <strong>Email Id :</strong> sriramsias@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>© 2026 Sriram's IAS. All Rights Reserved.</p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={`footer-right-accent reveal-right ${isVisible ? 'reveal-visible' : ''}`}>
          <div className="vertical-logo-text">
            <span className="vt-col vt-sm">IAS COURSES</span>
            <span className="vt-col vt-md">IAS COURSES</span>
            <span className="vt-col vt-lg">IAS COURSES</span>
            <span className="vt-col vt-xl">IAS COURSES</span>
            <span className="vt-col vt-lg">IAS COURSES</span>
            <span className="vt-col vt-md">IAS COURSES</span>
            <span className="vt-col vt-sm">IAS COURSES</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

