import React, { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const YouTubeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [sectionRef, isVisible] = useScrollReveal();

  const videos = [
    { 
      title: "UPSC CSE 2024: Complete Syllabus & Resources", 
      channel: "Sriram's IAS",
      views: "1.2M views",
      time: "2 months ago",
      duration: "45:20",
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "UPSC CSE 2024: Complete Strategy & Guide", 
      channel: "Sriram's IAS",
      views: "890K views",
      time: "1 month ago",
      duration: "32:15",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "Daily Current Affairs Analysis - March 2026", 
      channel: "Sriram's IAS",
      views: "560K views",
      time: "3 weeks ago",
      duration: "28:40",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "Topper Strategy 2025 - How to Crack UPSC", 
      channel: "Sriram's IAS",
      views: "2.1M views",
      time: "5 months ago",
      duration: "1:02:30",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "Online Class & Course - Free Registration Open", 
      channel: "Sriram's IAS",
      views: "430K views",
      time: "2 weeks ago",
      duration: "18:55",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
    }
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % videos.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, videos.length]);

  const getPosition = (i) => {
    if (i === activeIndex) return 'yt-active';
    if (i === (activeIndex - 1 + videos.length) % videos.length) return 'yt-prev';
    if (i === (activeIndex + 1) % videos.length) return 'yt-next';
    return 'yt-hidden';
  };

  return (
    <section ref={sectionRef} className="yt-section">
      <div className="container">
        <h2 className={`yt-heading reveal-up ${isVisible ? 'reveal-visible' : ''}`}>Youtube <span>Videos</span></h2>
        <p className={`yt-desc reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`}>Our Videos Corner offers carefully curated lectures, strategy sessions, and concept-based discussions designed to make learning simple and effective.</p>

        <div 
          className={`yt-carousel-wrapper reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="yt-arrow yt-arrow-left" onClick={prevSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className="yt-carousel-track">
            {videos.map((video, i) => (
              <div key={i} className={`yt-slide ${getPosition(i)}`}>
                <div className="yt-thumbnail">
                  <img src={video.img} alt={video.title} />
                  <div className="yt-play-overlay">
                    <div className="yt-play-icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <span className="yt-duration">{video.duration}</span>
                </div>
                <div className="yt-slide-info">
                  <h4 className="yt-slide-title">{video.title}</h4>
                  <div className="yt-slide-meta">
                    <span className="yt-channel">{video.channel}</span>
                    <span className="yt-views">{video.views} • {video.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="yt-arrow yt-arrow-right" onClick={nextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
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

