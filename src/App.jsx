import React, { useState, useEffect } from 'react';

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-top">
          <div className="top-links">
            <a href="#blog">BLOG</a>
            <div className="lang-selector">
              ENGLISH <span className="arrow-down">▼</span>
            </div>
            <span>+ 91 93456776547</span>
            <a href="#contact">CONTACT US</a>
          </div>
          <div className="header-actions">
            <button className="btn-book-demo">BOOK A DEMO</button>
            <div className="search-icon">🔍</div>
            <div className="user-icon">👤</div>
          </div>
        </div>
        <div className="header-main">
          <div className="logo-section">
            <div className="years-badge">
              <span className="count">40 +</span>
              <span className="text">Years</span>
            </div>
            <div className="logo-img-wrapper">
              <img src="https://www.sriramsias.com/images/logo.png" alt="Sriram's IAS" className="logo-img" />
            </div>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
            <button className="mobile-close-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
            <a href="#courses" onClick={() => setIsMenuOpen(false)}>Courses</a>
            <a href="#test-series" onClick={() => setIsMenuOpen(false)}>Test Series</a>
            <a href="#free-resources" onClick={() => setIsMenuOpen(false)}>Free Resources</a>
            <a href="#current-affairs" onClick={() => setIsMenuOpen(false)}>Current Affairs</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About us</a>
            <a href="#books" onClick={() => setIsMenuOpen(false)}>Books</a>
            <a href="#toppers" onClick={() => setIsMenuOpen(false)}>Our Toppers</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="hero">
    <video className="hero-video" autoPlay muted loop playsInline>
      <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="hero-overlay"></div>
    <div className="container hero-content">
      <div className="hero-text">
        <h1 className="hero-title white">Experience Excellence In <br /><span className="highlight-gold">UPSC Preparation</span></h1>
        <p className="hero-subtitle">Leading with 40+ years of legacy and trusted by thousands of civil service aspirants. Join the most prestigious IAS Academy today.</p>
        <div className="hero-btns">
          <button className="btn-primary-large">Start Your Journey</button>
        </div>
      </div>
    </div>
  </section>
);

const QuotesSection = () => {
  const quotes = [
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" }
  ];

  return (
    <section className="quotes-section">
      <div className="quotes-track-wrapper">
        <div className="quotes-track">
          {[...quotes, ...quotes].map((quote, idx) => (
            <div key={idx} className="quote-item">
              <p>"{quote.text}" - <span className="quote-author">{quote.author}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExploreCourses = () => {
  const [activeTab, setActiveTab] = useState('GS Foundation');
  const tabs = ['GS Foundation', 'Mentorship', 'Optional Foundation', 'Test Series', 'Others'];

  const allCourses = [
    { title: "1 Year General Studies Foundation Course", category: "GS Foundation", desc: "Join our GS Foundation Course now and start preparing to your career from now in SRI RAM ias to get better Future.", price: "Rs. 50,000 /-", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1471&auto=format&fit=crop" },
    { title: "2 Year General Studies Foundation Course", category: "GS Foundation", desc: "Transform your civils journey by joining our GS Foundation Course ", price: "Rs. 80,000 /-", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1471&auto=format&fit=crop" },
    { title: "Target UPSC 2026 Batch", category: "GS Foundation", desc: "Join our GS Foundation Course now and start preparing to your career", price: "Rs. 45,000 /-", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop" },
    { title: "Mentorship Program 2025", category: "Mentorship", desc: "Get one-on-one guidance from expert mentors to clear all your doubts and stay on track with your preparation.", price: "Rs. 20,000 /-", img: "https://images.unsplash.com/photo-1454165833767-0ef98925f44b?q=80&w=1470&auto=format&fit=crop" },
    { title: "Mentorship Program 2026", category: "Mentorship", desc: "Long term mentorship for the next year's attempt.", price: "Rs. 30,000 /-", img: "https://images.unsplash.com/photo-1454165833767-0ef98925f44b?q=80&w=1470&auto=format&fit=crop" },
    { title: "Sociology Optional Foundation", category: "Optional Foundation", desc: "Master Sociology with our comprehensive foundation course covering paper I and II.", price: "Rs. 35,000 /-", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470&auto=format&fit=crop" },
    { title: "Geography Optional Foundation", category: "Optional Foundation", desc: "Master Geography with our comprehensive foundation course.", price: "Rs. 35,000 /-", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470&auto=format&fit=crop" },
    { title: "Prelims Test Series 2025", category: "Test Series", desc: "Evaluate your preparation with our rigorous prelims test series.", price: "Rs. 8,000 /-", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop" },
    { title: "Mains Test Series 2025", category: "Test Series", desc: "Enhance your answer writing skills with detailed evaluation.", price: "Rs. 12,000 /-", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop" },
    { title: "CSAT Special Course", category: "Others", desc: "Dedicated course to tackle the CSAT paper with ease.", price: "Rs. 10,000 /-", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" },
  ];

  const displayedCourses = allCourses.filter(c => c.category === activeTab);

  return (
    <section id="courses" className="explore-courses-new">
      <div className="container">
        <div className="section-header-left">
          <h2 className="section-title-left" style={{ color: '#0ea5e9', fontWeight: 700 }}>Explore Our Courses</h2>
          <p className="section-subtitle-left">Explore our comprehensive <span style={{ color: '#38bdf8' }}>UPSC courses</span> designed to cover Prelims, Mains, and Interview preparation with structured learning, expert guidance,</p>
        </div>

        <div className="tabs-container-wrapper">
          <div className="tabs-container-new">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn-new ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="course-grid-3x2">
          {displayedCourses.length > 0 ? displayedCourses.map((course, idx) => (
            <div key={idx} className="course-card-image">
              <img src={course.img} alt={course.title} className="course-bg-img" />
              <div className="course-overlay-content">
                <h4 className="course-yellow-title">★ {course.title}</h4>
                <div className="course-divider"></div>
                <p className="course-desc-text">{course.desc}</p>
                <div className="course-hover-info">
                  <p className="course-price-yellow">{course.price}</p>
                  <button className="btn-know-more-yellow">Know More</button>
                </div>
              </div>
            </div>
          )) : (
            <p className="no-courses-msg">No courses currently available in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

const ToppersSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const toppers = [
    { name: "Kotla Darshan", rank: "AIR 08", course: "GS Foundation Course", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop" },
    { name: "Aarav Sharma", rank: "AIR 12", course: "GS Foundation Course", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop" },
    { name: "Vihaan Gupta", rank: "AIR 24", course: "GS Foundation Course", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop" },
    { name: "Advik Singh", rank: "AIR 45", course: "GS Foundation Course", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop" },
    { name: "Reyansh Patel", rank: "AIR 56", course: "GS Foundation Course", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop" },
    { name: "Ayan Kumar", rank: "AIR 78", course: "GS Foundation Course", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop" },
    { name: "Aryan Reddy", rank: "AIR 89", course: "GS Foundation Course", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop" },
    { name: "Kabir Das", rank: "AIR 102", course: "GS Foundation Course", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop" },
  ];

  const duplicatedToppers = [...toppers, ...toppers];

  return (
    <section id="toppers" className="toppers-section">
      <div className="container overflow-hidden" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Our <span>Toppers</span></h2>
        <div
          className="toppers-track-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`toppers-track-new ${isPaused ? 'paused' : ''}`}>
            {duplicatedToppers.map((topper, idx) => (
              <div key={idx} className="topper-card-new">
                <div className="topper-image-container">
                  <div className="wreath-bg"></div>
                  <img src={topper.img} alt={topper.name} className="topper-profile" />
                </div>
                <h4 className="topper-name-new">{topper.name}</h4>
                <div className="topper-rank-pill">{topper.rank}</div>
                <p className="topper-course-new">{topper.course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FreeCoursesSection = () => {
  const courses = [
    {
      id: "quizzes",
      type: "Daily ",
      highlight: "Quizzes",
      titleColor: "#fca5a5",
      text: "Participate in our daily quizzes to test your knowledge, strengthen your understanding of key concepts, and stay consistent with your learning journey.",
      bgClass: "bg-slate-dark",
      img1: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      img2: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "current-affairs",
      type: "Daily ",
      highlight: "Current Affairs",
      titleColor: "#fdba74",
      text: "Engage with our daily current affairs designed to help you stay updated with key national and international events while improving your analytical understanding for competitive exams.",
      bgClass: "bg-emerald",
      img1: "https://images.unsplash.com/photo-1584697964190-7cb8b8dd71a1?q=80&w=600&auto=format&fit=crop",
      img2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "mains-question",
      type: "Daily ",
      highlight: "Mains Question",
      titleColor: "#fcd34d",
      text: "Solve our Daily Mains Questions to improve your answer-writing skills, build strong arguments, and stay consistent with your UPSC Mains preparation.",
      bgClass: "bg-blue",
      img1: "https://images.unsplash.com/photo-1454165833767-0ef98925f44b?q=80&w=600&auto=format&fit=crop",
      img2: "https://images.unsplash.com/photo-1542315147-380daca8bca0?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "blogs",
      type: "",
      highlight: "Blogs",
      titleColor: "#93c5fd",
      text: "Explore our blogs for insightful articles, expert opinions, and the latest updates on UPSC preparation to stay informed and motivated throughout your journey.",
      bgClass: "bg-purple",
      img1: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop",
      img2: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="free-courses" className="access-free-courses-wrap">
      <div className="container" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <p style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.25rem' }}>Get</p>
        <h2 className="section-title-left" style={{ color: '#0ea5e9' }}>Access Free Courses</h2>
      </div>

      <div className="free-courses-blocks">
        {courses.map((course) => (
          <div key={course.id} className={`free-course-block ${course.bgClass}`}>
            <div className="container flex-block-container">
              <div className="block-text-side">
                <h3 className="block-title">
                  {course.type}<span style={{ color: course.titleColor }}>{course.highlight}</span>
                </h3>
                <p className="block-desc">{course.text}</p>
                <button className="btn-block-explore">Explore</button>
              </div>
              <div className="block-image-side">
                <img src={course.img1} alt="Illustration 1" className="block-img-back" />
                <img src={course.img2} alt="Illustration 2" className="block-img-front" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const BooksSection = () => {
  const books = [
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=300&q=80" },
  ];

  return (
    <section id="books" className="books-section">
      <div className="container books-container">
        <h2 className="books-title">Buy Our Books</h2>
        <p className="books-desc">Explore our collection of expertly curated books designed to simplify complex topics and strengthen your exam preparation. Each book is carefully structured with clear explanations, important concepts, and practice questions to help you build a strong foundation and improve your understanding of every subject.</p>

        <div className="books-carousel-wrapper"
          onMouseEnter={(e) => e.currentTarget.querySelector('.books-track').classList.add('paused')}
          onMouseLeave={(e) => e.currentTarget.querySelector('.books-track').classList.remove('paused')}>
          <div className="books-track">
            {/* Tripling the array for seamless infinite-feeling scroll */}
            {[...books, ...books, ...books].map((book, idx) => (
              <div key={idx} className="book-card-new">
                <div className="book-img-wrapper">
                  <img src={book.img} alt={book.title} />
                </div>
                <h4 className="book-title-new">{book.title}</h4>
                <p className="book-price-new">{book.price}</p>
                <div className="book-btns-new">
                  <button className="btn-buy-new">Buy Now</button>
                  <button className="btn-cart-new">Add To cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StorySection = () => (
  <section className="story-section-new">
    <div className="container">
      <h2 className="section-title-left" style={{ color: '#38bdf8', marginBottom: '2rem' }}>Our <span style={{ color: '#0ea5e9' }}>Story</span></h2>
      <div className="story-grid-new">
        {/* Left Side: Image with dark glass badge */}
        <div className="story-img-wrapper-new">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop" alt="Our Story Sriram IAS" className="story-main-img" />
          <div className="story-badge-glass">
            <h4 className="badge-year">Since 1985</h4>
            <p className="badge-text">Serving the nation in civil services like IAS , IPS</p>
          </div>
        </div>

        {/* Right Side: Staggered Stats Grid & Quote Card */}
        <div className="story-content-side">
          {/* Top Row: 3 cards */}
          <div className="stats-row top-row">
            <div className="stat-card-new">
              <div className="stat-header">
                <div className="icon-wrapper pink-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                </div>
                <span className="stat-num pink-text">300 +</span>
              </div>
              <p className="stat-label">Selections in UPSC CSE 2026</p>
            </div>

            <div className="stat-card-new">
              <div className="stat-header">
                <div className="icon-wrapper blue-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <span className="stat-num blue-text">3500 +</span>
              </div>
              <p className="stat-label">Selections in UPSC</p>
            </div>

            <div className="stat-card-new">
              <div className="stat-header">
                <div className="icon-wrapper green-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <span className="stat-num green-text">40 +</span>
              </div>
              <p className="stat-label">Years of Excellence</p>
            </div>
          </div>

          {/* Bottom Row: 2 cards wrapped */}
          <div className="stats-row bottom-row">
            <div className="stat-card-new">
              <div className="stat-header">
                <div className="icon-wrapper purple-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                </div>
                <span className="stat-num purple-text">3500 +</span>
              </div>
              <p className="stat-label">Selections in UPSC</p>
            </div>

            <div className="stat-card-new">
              <div className="stat-header">
                <div className="icon-wrapper olive-bg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span className="stat-num olive-text">3</span>
              </div>
              <p className="stat-label">Centers Over all India</p>
            </div>
          </div>

          <div className="story-text-container">
            <p className="story-paragraph">
              Founded in 1985 in New Delhi, Sriram's IAS Academy was born from a singular belief: that India's civil services demand not just knowledge, but character., that India's civil services demand not just knowledge, but character.
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

const AppSection = () => (
  <section className="app-section-new">
    <div className="app-glow left-glow"></div>
    <div className="app-glow right-glow"></div>
    
    <div className="container app-refined-container">
      <div className="app-left-content">
        <h2 className="app-title-new">Download Our App</h2>
        <p className="app-desc-new">Download our app to access high-quality learning resources, daily quizzes, current affairs updates, and expert guidance anytime, anywhere. Prepare smarter and stay connected with your learning journey.</p>

        <div className="qr-box-container">
          <div className="qr-box-border">
            <div className="qr-code-wrapper">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://sriramsias.com" alt="QR Code" />
            </div>
          </div>
          <span className="qr-label-new">Scan To Get App</span>
        </div>

        <div className="app-store-btns">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/8f/Google_Play_Store_badge_EN.svg" alt="Play Store" className="store-badge" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="store-badge" />
        </div>
      </div>
      <div className="app-right-mockup">
        <div className="phone-mockup-wrapper">
          <img src="https://www.freeiconspng.com/uploads/iphone-x-png-8.png" alt="Phone Mockup" className="phone-m" />
          <div className="phone-screen-overlay">
            {/* Mock content or image */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const YouTubeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const getPosition = (i) => {
    if (i === activeIndex) return 'yt-active';
    if (i === (activeIndex - 1 + videos.length) % videos.length) return 'yt-prev';
    if (i === (activeIndex + 1) % videos.length) return 'yt-next';
    return 'yt-hidden';
  };

  return (
    <section className="yt-section">
      <div className="container">
        <h2 className="yt-heading">Youtube <span>Videos</span></h2>
        <p className="yt-desc">Our Videos Corner offers carefully curated lectures, strategy sessions, and concept-based discussions designed to make learning simple and effective.</p>

        <div className="yt-carousel-wrapper">
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

        <div className="yt-dots">
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

const Footer = () => (
  <footer className="footer-redesign">
    <div className="container footer-container">
      <div className="footer-left-content">
        <div className="booking-cta">
          <div className="booking-cta-text">
            <p className="cta-label">Need More Clarity?</p>
            <p className="cta-main">Book a FREE Demo Class</p>
          </div>
          <button className="btn-book-footer">BOOK A DEMO</button>
        </div>

        <div className="footer-columns-grid">
          <div className="f-col">
            <h4>Website Links</h4>
            <ul>
              <li><a href="#home"><span className="link-arrow">›</span> Home</a></li>
              <li><a href="#about"><span className="link-arrow">›</span> About Us</a></li>
              <li><a href="#director"><span className="link-arrow">›</span> Director's Messages</a></li>
              <li><a href="#why"><span className="link-arrow">›</span> Why Choose Us</a></li>
              <li><a href="#contact"><span className="link-arrow">›</span> Contact Us</a></li>
              <li><a href="#branches"><span className="link-arrow">›</span> Our Branches</a></li>
              <li><a href="#referral"><span className="link-arrow">›</span> Referral Policy</a></li>
              <li><a href="#articles"><span className="link-arrow">›</span> UPSC Articles</a></li>
              <li><a href="#blogs"><span className="link-arrow">›</span> UPSC Blogs</a></li>
              <li><a href="#exploration"><span className="link-arrow">›</span> Exploration</a></li>
              <li><a href="#quizzes"><span className="link-arrow">›</span> Daily Quizzes</a></li>
              <li><a href="#faqs"><span className="link-arrow">›</span> FAQ's</a></li>
              <li><a href="#career"><span className="link-arrow">›</span> Career</a></li>
              <li><a href="#login"><span className="link-arrow">›</span> Student Login</a></li>
              <li><a href="#enroll"><span className="link-arrow">›</span> Enroll Now</a></li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Courses Details</h4>
            <ul>
              <li><a href="#all"><span className="link-arrow">›</span> All Courses</a></li>
              <li><a href="#psir-m"><span className="link-arrow">›</span> PSIR Test Series and Mentorship</a></li>
              <li><a href="#psir-o"><span className="link-arrow">›</span> PSIR Optional Courses</a></li>
              <li><a href="#geo"><span className="link-arrow">›</span> Geography Optional Foundation Courses</a></li>
              <li><a href="#mains-e"><span className="link-arrow">›</span> Mains Enrichment Program 2025</a></li>
              <li><a href="#mains-t"><span className="link-arrow">›</span> Mains Test Series CSE 2025</a></li>
              <li><a href="#essay"><span className="link-arrow">›</span> Essay Test Series 2025</a></li>
              <li><a href="#mains-t2"><span className="link-arrow">›</span> Mains Test Series CSE 2025</a></li>
            </ul>
            <div className="f-address">
              <h4>Address :</h4>
              <p>SRIRAM'S IAS Tower's , 10-B, Pusa Road Bada Bazaar Marg Road Old Rajindra Nagar New Delhi - 110060</p>
            </div>
            <div className="f-contact-info">
              <p>📞 <strong>Contact Us :</strong> 011-42430722</p>
              <p>✉ <strong>Email Id :</strong> sriramsias@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© 2026 Sriram's IAS. All Rights Reserved.</p>
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-right-accent">
        <div className="vertical-logo-text">
          <span className="vt-col vt-sm">IAS COURSES</span>
          <span className="vt-col vt-md">IAS COURSES</span>
          <span className="vt-col vt-lg">IAS COURSES</span>
          <span className="vt-col vt-xl">IAS COURSES</span>
          <span className="vt-col vt-lg">IAS COURSES</span>
          <span className="vt-col vt-md">IAS COURSES</span>
          <span className="vt-col vt-sm">IAS COURSES</span>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      <QuotesSection />
      <ExploreCourses />
      <ToppersSection />
      <FreeCoursesSection />
      <BooksSection />
      <StorySection />
      <AppSection />
      <YouTubeSection />
      <Footer />
    </div>
  );
}

export default App;
