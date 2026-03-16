import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section ref={sectionRef} className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/home_page.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className={`hero-title white reveal-blur ${isVisible ? 'reveal-visible' : ''}`}>Experience Excellence In <br /><span className="highlight-gold">UPSC Preparation</span></h1>
          <p className={`hero-subtitle reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}>Leading with 40+ years of legacy and trusted by thousands of civil service aspirants. Join the most prestigious IAS Academy today.</p>
          <div className={`hero-btns reveal-up delay-400 ${isVisible ? 'reveal-visible' : ''}`}>
            <button className="btn-primary-large pulse">Start Your Journey</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

