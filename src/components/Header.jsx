import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-left">
          <div className="years-badge">
            <span className="count">40 +</span>
            <span className="text">Years</span>
          </div>
          <div className="header-divider"></div>
          <div className="logo-img-wrapper">
            <img src="/assets/logo.svg" alt="Sriram's IAS" className="logo-img" />
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="header-right desktop-only">
          <div className="header-top">
            <div className="top-links">
              <a href="#blog">BLOG</a>
              <div className="lang-selector">
                ENGLISH <span className="arrow-down">▼</span>
              </div>
              <span>+ 91 93456776547</span>
              <a href="#contact">CONTACT US</a>
            </div>
            <div className="header-actions">
              <button className="btn-book-demo">BOOK A DEMO</button>
              <button className="icon-btn" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
              <button className="icon-btn user-btn" aria-label="User Profile">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              </button>
            </div>
          </div>
          <div className="header-bottom">
            <nav className="desktop-nav">
              <a href="#courses">Courses</a>
              <a href="#test-series">Test Series</a>
              <a href="#free-resources">Free Resources</a>
              <a href="#current-affairs">Current Affairs</a>
              <a href="#about">About us</a>
              <a href="#books">Books</a>
              <a href="#toppers">Our Toppers</a>
            </nav>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

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
          <div className="mobile-divider"></div>
          <a href="#blog" onClick={() => setIsMenuOpen(false)}>BLOG</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT US</a>
        </nav>
        <div className="mobile-actions-bottom">
           <button className="btn-book-demo w-full">BOOK A DEMO</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
