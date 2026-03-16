import React, { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const StorySection = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  const AnimatedNumber = ({ value, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, [isVisible, value, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} className="story-section-new">
      <div className="container">
        <h2 className={`section-title-left reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ color: '#38bdf8', marginBottom: '2rem' }}>
          Our <span style={{ color: '#0ea5e9' }}>Story</span>
        </h2>
        <div className="story-grid-new">
          <div className={`story-img-wrapper-new reveal-left ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop" alt="Our Story Sriram IAS" className="story-main-img" />
            <div className="story-badge-glass">
              <h4 className="badge-year">Since 1985</h4>
              <p className="badge-text">Serving the nation in civil services like IAS , IPS</p>
            </div>
          </div>

          <div className="story-content-side">
            <div className="stats-row top-row">
              <div className={`stat-card-new reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <div className="stat-header">
                  <div className="icon-wrapper pink-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                  </div>
                  <span className="stat-num pink-text"><AnimatedNumber value={300} duration={6000} suffix=" +" /></span>
                </div>
                <p className="stat-label">Selections in UPSC CSE 2026</p>
              </div>

              <div className={`stat-card-new reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
                <div className="stat-header">
                  <div className="icon-wrapper blue-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <span className="stat-num blue-text"><AnimatedNumber value={3500} duration={6000} suffix=" +" /></span>
                </div>
                <p className="stat-label">Selections in UPSC</p>
              </div>

              <div className={`stat-card-new reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                <div className="stat-header">
                  <div className="icon-wrapper green-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span className="stat-num green-text"><AnimatedNumber value={40} duration={6000} suffix=" +" /></span>
                </div>
                <p className="stat-label">Years of Excellence</p>
              </div>
            </div>

            <div className="stats-row bottom-row">
              <div className={`stat-card-new reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
                <div className="stat-header">
                  <div className="icon-wrapper purple-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                  </div>
                  <span className="stat-num purple-text"><AnimatedNumber value={3500} duration={6000} suffix=" +" /></span>
                </div>
                <p className="stat-label">Selections in UPSC</p>
              </div>

              <div className={`stat-card-new reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.8s' }}>
                <div className="stat-header">
                  <div className="icon-wrapper olive-bg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <span className="stat-num olive-text"><AnimatedNumber value={3} duration={6000} /></span>
                </div>
                <p className="stat-label">Centers Over all India</p>
              </div>
            </div>

            <div className={`story-text-container reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.9s' }}>
              <p className="story-paragraph">
                Founded in 1985 in New Delhi, Sriram's IAS Academy was born from a singular belief: that India's civil services demand not just knowledge, but character.
              </p>
              <div className="story-quote-block">
                "The examination tests your understanding of India. We teach you to understand India."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

