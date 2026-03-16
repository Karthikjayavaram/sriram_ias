import React, { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const YouTubeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
      title: "PRELIMS 2024 EXCLUSIVE STRATEGY SESSION", 
      subtitle: "SRIRAM'S IAS • 2 WEEKS AGO",
      desc: "500K VIEWS - RECENT UPLOAD",
      btnText: "WATCH VIDEO",
      img: "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=800&auto=format&fit=crop", 
      bgClass: "promo-slide"
    },
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % videos.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);

  const getSlideClass = (i) => {
    if (i === activeIndex) return 'yt-slide-active';
    if (i === (activeIndex + 1) % videos.length) return 'yt-slide-next';
    return 'yt-slide-prev';
  };

  return (
    <section ref={sectionRef} className="yt-formal-section bg-white">
      <div className="container">
        
        <div className="yt-header-top">
          <h2 className={`yt-heading reveal-up ${isVisible ? 'reveal-visible' : ''}`}>Youtube <span>Videos</span></h2>
          <p className={`yt-desc reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`}>
            Our Videos Corner offers carefully curated lectures, strategy sessions, and concept-based discussions designed to make learning simple and effective.
          </p>
        </div>

        <div className={`yt-3d-container reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}>
          <div className="yt-3d-stage">
            {videos.map((video, i) => (
              <div key={i} className={`yt-3d-card ${getSlideClass(i)} ${video.bgClass}`}>
                <div className="card-content-grid">
                  <div className="card-text-side">
                    <h3>{video.title}</h3>
                    <h4>{video.subtitle}</h4>
                    <p className="highlight-tag">{video.desc}</p>
                    <p className="desc-text-faded">Lorem Ipsum is simply dummy text the printing and typesetting industry psum has been.</p>
                    <button className="btn-yellow-enroll">{video.btnText}</button>
                  </div>
                  <div className="card-media-side">
                    <div className="man-image-container">
                       <img src={video.img} alt="Presenter" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-nav-footer">
             <div className="yt-nav-arrows">
                <button className="nav-arrow-btn" onClick={prevSlide}>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <div className="yt-status-dots">
                   {videos.map((_, i) => (
                      <span key={i} className={`status-dot ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)}></span>
                   ))}
                </div>
                <button className="nav-arrow-btn" onClick={nextSlide}>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default YouTubeSection;
