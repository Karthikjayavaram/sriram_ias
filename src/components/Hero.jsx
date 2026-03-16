import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section ref={sectionRef} className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className={`hero-text reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
          <h1 className="hero-title white">Experience Excellence In <br /><span className="highlight-gold">UPSC Preparation</span></h1>
          <p className="hero-subtitle">Leading with 40+ years of legacy and trusted by thousands of civil service aspirants. Join the most prestigious IAS Academy today.</p>
          <div className="hero-btns">
            <button className="btn-primary-large">Start Your Journey</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

