import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const ToppersSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [sectionRef, isVisible] = useScrollReveal();

  const toppers = [
    { name: "Kotla Darshan", rank: "AIR 08", course: "GS Foundation Course", img: "/src/assets/topper_img.svg" },
    { name: "Aarav Sharma", rank: "AIR 12", course: "GS Foundation Course", img: "/src/assets/topper_img.svg" },
    { name: "Vihaan Gupta", rank: "AIR 24", course: "GS Foundation Course", img: "/src/assets/topper_img.svg" },
    { name: "Advik Singh", rank: "AIR 45", course: "GS Foundation Course", img: "/src/assets/topper_img.svg" },
    { name: "Reyansh Patel", rank: "AIR 56", course: "GS Foundation Course", img: "/src/assets/topper_img.svg" },
    { name: "Ayan Kumar", rank: "AIR 78", course: "GS Foundation Course", img: "/src/assets/topper_img.svg" },
    { name: "Aryan Reddy", rank: "AIR 89", course: "GS Foundation Course", img: "/src/assets/topper_img.svg" },
    { name: "Kabir Das", rank: "AIR 102", course: "GS Foundation Course", img: "/src/assets/topper_img.svg" },
  ];

  const duplicatedToppers = [...toppers, ...toppers];

  return (
    <section ref={sectionRef} id="toppers" className="toppers-section">
      <div className="container overflow-hidden" style={{ textAlign: 'center' }}>
        <h2 className={`section-title reveal-up ${isVisible ? 'reveal-visible' : ''}`}>Our <span>Toppers</span></h2>
        <div
          className={`toppers-track-wrapper reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`toppers-track-new ${isPaused ? 'paused' : ''}`}>
            {duplicatedToppers.map((topper, idx) => (
              <div key={idx} className="topper-card-new">
                {/* Stack wrapper: bg SVG + profile image both absolutely placed */}
                <div className="topper-stack">
                  <img src="/src/assets/topperCard_background.svg" className="topper-card-bg-svg" alt="Card BG" />
                  <img src={topper.img} alt={topper.name} className="topper-profile-centered" />
                </div>
                {/* Info below the stack */}
                <div className="topper-info-box">
                  <h4 className="topper-name-new">{topper.name}</h4>
                  <div className="topper-rank-pill">{topper.rank}</div>
                  <p className="topper-course-new">{topper.course}</p>
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

