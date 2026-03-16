import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const AppSection = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section ref={sectionRef} className="app-section-new">
      <div className="container app-refined-container">
        {/* LEFT: text + QR + store badges */}
        <div className={`app-left-content reveal-left ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="app-title-new">Download Our App</h2>
          <p className="app-desc-new">
            Download our app to access high-quality learning resources, daily quizzes,
            current affairs updates, and expert guidance anytime, anywhere.
            Prepare smarter and stay connected with your learning journey.
          </p>

          <div className={`qr-box-container reveal-up delay-100 ${isVisible ? 'reveal-visible' : ''}`}>
            <div className="qr-box-border">
              <div className="qr-code-wrapper">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://sriramsias.com" alt="QR Code" />
              </div>
            </div>
            <span className="qr-label-new">Scan To Get App</span>
          </div>

          <div className={`app-store-btns reveal-up delay-300 ${isVisible ? 'reveal-visible' : ''}`}>
             <img src="/assets/playstore.svg" alt="Play Store" className="store-badge" />
             <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="store-badge" />
          </div>

        </div>

        {/* RIGHT: animated rings + phone.svg */}
        <div className={`app-right-mockup reveal-right ${isVisible ? 'reveal-visible' : ''}`}>
          <div className="app-rings-wrapper">
            <div className="app-ring app-ring-1"></div>
            <div className="app-ring app-ring-2"></div>
            <div className="app-ring app-ring-3"></div>
            <div className={`phone-mockup-wrapper floating ${isVisible ? 'reveal-visible' : ''}`}>
              <img src="/assets/phone.svg" alt="Sriram IAS App" className="phone-m" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;

