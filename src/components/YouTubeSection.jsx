import React, { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const YouTubeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [sectionRef, isVisible] = useScrollReveal();

  const videos = [
    { 
      title: "LETS STARTED LEARNING SKILLS & UPGRADE YOUR LIFE", 
      subtitle: "ONLINE CLASS AND COURSE",
      desc: "NOW OPEN FOR FREE REGISTRATION",
      btnText: "ENROLL COURSE",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop",
      bgClass: "promo-slide"
    },
    { 
      title: "UPSC CSE 2024: COMPLETE SYLLABUS RESOURCES", 
      subtitle: "SRIRAM'S IAS • 2 MONTHS AGO",
      desc: "1.2M VIEWS - TOP RATED VIDEO",
      btnText: "WATCH VIDEO",
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop", 
      bgClass: "bg-blue-orange"
    },
    { 
      title: "UPSC CSE 2024 COMPLETE GUIDES & STRATEGY", 
      subtitle: "SRIRAM'S IAS • 1 MONTH AGO",
      desc: "890K VIEWS - ESSENTIAL STRATEGY",
      btnText: "WATCH VIDEO",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", 
      bgClass: "bg-blue"
    },
    { 
      title: "DAILY CURRENT AFFAIRS ANALYSIS", 
      subtitle: "SRIRAM'S IAS • 3 WEEKS AGO",
      desc: "560K VIEWS - STAY UPDATED",
      btnText: "WATCH VIDEO",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop", 
      bgClass: "bg-dark"
    },
    { 
      title: "TOPPER STRATEGY 2025 - HOW TO CRACK UPSC", 
      subtitle: "SRIRAM'S IAS • 5 MONTHS AGO",
      desc: "2.1M VIEWS - EXCLUSIVE INTERVIEW",
      btnText: "WATCH VIDEO",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", 
      bgClass: "bg-purple"
    }
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % videos.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, videos.length]);

  return (
    <section ref={sectionRef} className="yt-formal-section">
      <div className="container">
        
        <div className="yt-header-top">
          <h2 className={`yt-heading reveal-up ${isVisible ? 'reveal-visible' : ''}`}>Youtube <span>Videos</span></h2>
          <p className={`yt-desc reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`}>Our Videos Corner offers carefully curated lectures, strategy sessions, and concept-based discussions designed to make learning simple and effective.</p>
        </div>

        <div className={`yt-carousel-layout reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}>
          <button className="yt-nav-btn prev-btn" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div 
            className="yt-carousel-viewport"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="yt-carousel-track" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {videos.map((video, i) => (
                <div key={i} className={`yt-slide-formal ${video.bgClass}`}>
                  <div className="yt-promo-content">
                      <div className="yt-promo-text">
                          <h3>{video.title}</h3>
                          <h4>{video.subtitle}</h4>
                          <p className="promo-desc-highlight">{video.desc}</p>
                          <p className="promo-desc-sm">Lorem Ipsum is simply dummy text the printing and typesetting industry psum has been.</p>
                          <button className="btn-enroll">{video.btnText}</button>
                      </div>
                      <div className="yt-promo-img">
                          <img src={video.img} alt="Card Preview" />
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="yt-nav-btn next-btn" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className={`yt-dots reveal-up delay-300 ${isVisible ? 'reveal-visible' : ''}`}>
          {videos.map((_, i) => (
            <button 
              key={i} 
              className={`yt-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default YouTubeSection;
