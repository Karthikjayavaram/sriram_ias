import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const ToppersSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [sectionRef, isVisible] = useScrollReveal();

  const toppers = [
    { name: "Kotla Darshan", rank: "AIR 08", course: "GS Foundation Course", img: "/assets/topper_1.png" },
    { name: "Vihaan Gupta", rank: "AIR 24", course: "GS Foundation Course", img: "/assets/topper_2.png" },
    { name: "Aarav Sharma", rank: "AIR 12", course: "GS Foundation Course", img: "/assets/topper_1.png" },
    { name: "Advik Singh", rank: "AIR 45", course: "GS Foundation Course", img: "/assets/topper_2.png" },
    { name: "Reyansh Patel", rank: "AIR 56", course: "GS Foundation Course", img: "/assets/topper_1.png" },
    { name: "Ayan Kumar", rank: "AIR 78", course: "GS Foundation Course", img: "/assets/topper_2.png" },
    { name: "Aryan Reddy", rank: "AIR 89", course: "GS Foundation Course", img: "/assets/topper_1.png" },
    { name: "Kabir Das", rank: "AIR 102", course: "GS Foundation Course", img: "/assets/topper_2.png" },
  ];

  const duplicatedToppers = [...toppers, ...toppers];

  return (
    <section ref={sectionRef} id="toppers" className="toppers-section-visual">
      <div className="container overflow-hidden" style={{ textAlign: 'center' }}>
        <h2 className={`toppers-title-visual reveal-up ${isVisible ? 'reveal-visible' : ''}`}>Our <span>Toppers</span></h2>
        <p className={`toppers-subtitle-visual reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`}>Celebrating Our Toppers Success With You</p>
        
        <div
          className={`toppers-track-wrapper reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`toppers-track-visual ${isPaused ? 'paused' : ''}`}>
            {duplicatedToppers.map((topper, idx) => (
              <div key={idx} className="topper-card-visual">
                <div className="topper-wreath-wrapper">
                  <img src="/assets/topperCard_background.svg" className="wreath-bg" alt="Wreath" />
                  <div className="topper-inner-img">
                    <img src={topper.img} alt={topper.name} />
                  </div>
                </div>
                <div className="topper-info-visual">
                  <h4 className="topper-name-visual">{topper.name}</h4>
                  <div className="topper-rank-pill-visual">{topper.rank}</div>
                  <p className="topper-course-visual">{topper.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToppersSection;
