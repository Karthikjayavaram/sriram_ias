import React, { useState, useEffect } from 'react';
import CoursesMegaMenu from './CoursesMegaMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="header-left">
          <div className="years-badge">
            <img src="/assets/logos-40-years.jpg.jpeg" alt="40 Years Excellence" className="forty-years-logo" />
          </div>
          <div className="header-divider"></div>
          <div className="logo-img-wrapper">
            <img src="/assets/logo.svg" alt="Sriram's IAS" className="logo-img" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="header-right desktop-only">
          <div className="header-top-minimal">
            <div className="top-links-dark">
              <a href="#blog">BLOG</a>
              <div className="header-divider-small"></div>
              <a href="#contact">CONTACT US</a>
            </div>
          </div>
          <nav className="desktop-nav-new">
            <button 
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)} 
              className={`nav-item-btn-dark ${isMegaMenuOpen ? 'active' : ''}`}
            >
              Courses
            </button>
            <a href="#test-series" className="nav-link-dark">Test Series</a>
            <a href="#free-resources" className="nav-link-dark">Free Resources</a>
            <a href="#current-affairs" className="nav-link-dark">Current Affairs</a>
            <a href="#about" className="nav-link-dark">About us</a>
            <a href="#books" className="nav-link-dark">Books</a>
            <a href="#toppers" className="nav-link-dark">Our Toppers</a>
            <button className="icon-btn search-icon-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
          </nav>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>

      <CoursesMegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#courses" onClick={() => setIsMenuOpen(false)}>Courses</a>
          <a href="#test-series" onClick={() => setIsMenuOpen(false)}>Test Series</a>
          <a href="#free-resources" onClick={() => setIsMenuOpen(false)}>Free Resources</a>
          <a href="#current-affairs" onClick={() => setIsMenuOpen(false)}>Current Affairs</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About us</a>
          <a href="#books" onClick={() => setIsMenuOpen(false)}>Books</a>
          <a href="#toppers" onClick={() => setIsMenuOpen(false)}>Our Toppers</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

