import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const QuotesSection = () => {
  const [sectionRef, isVisible] = useScrollReveal();
  const quotes = [
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", featured: true },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" }
  ];

  // Duplicate for seamless infinite loop (the animation shifts -50%)
  const doubledQuotes = [...quotes, ...quotes];

  return (
    <section ref={sectionRef} className="quotes-section">
      <div className="container">
        <div className={`section-header-left reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '2.8rem', color: '#0ea5e9' }}>Daily Motivational <span style={{ color: '#38bdf8' }}>Quotes</span></h2>
          <p className="section-subtitle">Fuel your preparation with inspiration from the greats.</p>
        </div>
      </div>
      <div className={`quotes-slider-container reveal-up delay-200 ${isVisible ? 'reveal-visible' : ''}`}>
        <div className="quotes-slider-track">
          {doubledQuotes.map((quote, idx) => (
            <div key={idx} className={`quote-card ${quote.featured ? 'quote-featured' : ''}`}>
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
                </svg>
              </div>
              <p className="quote-text">"{quote.text}"</p>
              <div className="quote-author">{quote.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;

