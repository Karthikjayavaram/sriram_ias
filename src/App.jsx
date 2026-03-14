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
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson"
  ];

  return (
    <section className="quotes-section">
      <div className="container">
        <div className="quotes-track">
          {quotes.map((quote, idx) => (
            <div key={idx} className="quote-item">
              <p>"{quote}"</p>
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
  
  const courses = [
    { title: "GS Foundation Course (Prelims + Mains)", label: "Premium", price: "Rs. 50,000 /-", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" },
    { title: "1 Year General Studies Foundation Course", label: "Best Seller", price: "Rs. 50,000 /-", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1471&auto=format&fit=crop" },
    { title: "Target UPSC 2026 Batch", label: "New Batch", price: "Rs. 45,000 /-", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470&auto=format&fit=crop" },
    { title: "Mains Answer Writing Module", label: "Intensive", price: "Rs. 25,000 /-", img: "https://images.unsplash.com/photo-1454165833767-0ef98925f44b?q=80&w=1470&auto=format&fit=crop" },
    { title: "Ethics, Integrity and Aptitude", label: "Special", price: "Rs. 15,000 /-", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470&auto=format&fit=crop" },
    { title: "Comprehensive CSAT Course", label: "Essential", price: "Rs. 10,000 /-", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop" },
  ];

  return (
    <section id="courses" className="explore-courses">
      <div className="container">
        <div className="section-header-left">
          <h2 className="section-title-left">Explore Our <span>Courses</span></h2>
          <p className="section-subtitle-left">Explore our comprehensive UPSC courses designed to cover Prelims, Mains, and Interview preparation with structured learning, expert guidance.</p>
        </div>
        
        <div className="tabs-container-left">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`tab-btn-pill ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="course-grid-3x2">
          {courses.map((course, idx) => (
            <div key={idx} className="course-card-refined">
              <div className="img-container">
                <img src={course.img} alt={course.title} />
                <span className="course-label">{course.label}</span>
              </div>
              <div className="course-card-body">
                <h4>{course.title}</h4>
                <div className="price-row">
                  <span className="price">{course.price}</span>
                  <button className="btn-know-more-small">Know More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToppersSection = () => {
  const toppers = [
    { name: "Kotla Darshan", air: "08", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop" },
    { name: "Kotla Darshan", air: "08", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop" },
    { name: "Kotla Darshan", air: "08", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop" },
    { name: "Kotla Darshan", air: "08", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop" },
    { name: "Kotla Darshan", air: "08", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop" },
    { name: "Kotla Darshan", air: "08", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop" },
  ];

  return (
    <section id="toppers" className="toppers-section">
      <div className="container overflow-hidden">
        <h2 className="section-title">Our <span>Toppers</span></h2>
        <p className="section-subtitle">Celebrating Our Toppers Success With You</p>
        <div className="toppers-track-wrapper">
          <div className="toppers-track">
            {[...toppers, ...toppers].map((topper, idx) => (
              <div key={idx} className="topper-card-refined">
                 <div className="topper-avatar">
                    <img src={topper.img} alt={topper.name} />
                 </div>
                 <h3>{topper.name}</h3>
                 <div className="air-badge">AIR {topper.air}</div>
                 <p className="course-info">GS Foundation Course</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Reuse but update Top offset for Sticky
const FreeCourseCard = ({ id, title, titleAccent, content, bgColor, illustration, accentColor }) => (
  <div className="card-sticky-wrapper" style={{ top: `${150 + (id * 40)}px` }}>
    <div className="course-card" style={{ backgroundColor: bgColor }}>
      <div className="card-text-side">
        <h3 className="card-title">
          {title} <span style={{ color: accentColor }}>{titleAccent}</span>
        </h3>
        <p className="card-content">{content}</p>
        <button className="btn-card-explore">Explore</button>
      </div>
      <div className="card-illustration-side">
        <div className="illustration-placeholder">{illustration}</div>
      </div>
    </div>
  </div>
);

const FreeCoursesSection = () => {
  const courses = [
    {
      id: 0,
      title: "Daily",
      titleAccent: "Quizzes",
      content: "Participate in our daily quizzes to test your knowledge, strengthen your understanding of key concepts, and stay consistent with your learning journey.",
      bgColor: "var(--card-quiz)",
      accentColor: "#F87171",
      illustration: "📝"
    },
    {
      id: 1,
      title: "Daily",
      titleAccent: "Current Affairs",
      content: "Engage with our daily current affairs designed to help you stay updated with key national and international events while improving your analytical understanding for competitive exams.",
      bgColor: "var(--card-current)",
      accentColor: "#FBBF24",
      illustration: "📅"
    },
    {
      id: 2,
      title: "Daily",
      titleAccent: "Mains Question",
      content: "Solve our Daily Mains Questions to improve your answer-writing skills, build strong arguments, and stay consistent with your UPSC Mains preparation.",
      bgColor: "var(--card-mains)",
      accentColor: "#FCD34D",
      illustration: "✍️"
    },
    {
      id: 3,
      title: "Blogs",
      titleAccent: "",
      content: "Explore our blogs for insightful articles, expert opinions, and the latest updates on UPSC preparation to stay informed and motivated throughout your journey.",
      bgColor: "var(--card-blogs)",
      accentColor: "#FFFFFF",
      illustration: "💻"
    }
  ];

  return (
    <section className="free-courses-stack">
      <div className="container">
        <h2 className="section-title">Access Our <span>Free Courses</span></h2>
        <div className="stacked-cards-container">
          {courses.map((course) => (
            <FreeCourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BooksSection = () => {
  const books = [
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop" },
    { title: "UPSC Book sciences -1", price: "Rs.10,000/-", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop" },
  ];

  return (
    <section id="books" className="books-section">
      <div className="container white-bg-card">
        <h2 className="section-title">Buy Our <span>Books</span></h2>
        <p className="section-desc">Explore our collection of expertly curated books designed to simplify complex topics and strengthen your exam preparation. Each book is carefully structured with clear explanations, important concepts, and practice questions to help you build a strong foundation and improve your understanding of every subject.</p>
        <div className="books-slider-wrapper">
          <div className="books-track">
            {/* Double the array for seamless infinite-feeling scroll if desired, or just simple scroll */}
            {[...books, ...books].map((book, idx) => (
              <div key={idx} className="book-card">
                <div className="book-img">
                   <img src={book.img} alt={book.title} />
                </div>
                <h4>{book.title}</h4>
                <p className="price">{book.price}</p>
                <div className="book-btns">
                  <button className="btn-buy">Buy Now</button>
                  <button className="btn-cart">Add To cart</button>
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
  <section className="story-section">
    <div className="container">
      <h2 className="section-title">Our <span>Story</span></h2>
      <div className="story-grid">
        <div className="story-img-side">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop" alt="Our Story" />
           <div className="since-badge">
              <h4>Since 1985</h4>
              <p>Serving the nation in civil services like IAS, IPS</p>
           </div>
        </div>
        <div className="story-stats-side">
           <div className="stats-grid">
              <div className="stat-box">
                 <span className="number">300 +</span>
                 <p>Selections in UPSC CSE 2026</p>
              </div>
              <div className="stat-box">
                 <span className="number">3500 +</span>
                 <p>Selections in UPSC</p>
              </div>
              <div className="stat-box">
                 <span className="number">40 +</span>
                 <p>Years of Excellence</p>
              </div>
              <div className="stat-box">
                 <span className="number">3</span>
                 <p>Centers Over all India</p>
              </div>
           </div>
           <div className="story-text-card">
              <p>Founded in 1985 in New Delhi, Sriram's IAS Academy was born from a singular belief: that India's civil services demand not just knowledge, but character., that India's civil services demand not just knowledge, but character.</p>
              <blockquote className="quote-accent">
                 "The examination tests your understanding of India. We teach you to understand India."
              </blockquote>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const AppSection = () => (
   <section className="app-section-refined">
      <div className="container app-refined-container">
         <div className="app-left-content">
            <h2 className="section-title-app">Download Our <span>App</span></h2>
            <p className="app-desc">Download our app to access high-quality learning resources, daily quizzes, current affairs updates, and expert guidance anytime, anywhere. Prepare smarter and stay connected with your learning journey.</p>
            
            <div className="qr-section">
               <div className="qr-code-wrapper">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://sriramsias.com" alt="QR Code" />
               </div>
               <span className="qr-label">Scan To Get App</span>
            </div>

            <div className="app-store-btns">
              <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store-apple.svg" alt="App Store" className="store-badge" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="store-badge" />
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
  const videos = [
     { title: "UPSC CSE 2024: COMPLETE SYLLABUS", img: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
     { title: "LET'S START LEARNING SKILLS", img: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" },
     { title: "TOPPER STRATEGY 2025", img: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" },
     { title: "DAILY CURRENT AFFAIRS ANALYSIS", img: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" },
  ];

  return (
    <section className="youtube-carousel-section">
       <div className="container">
          <h2 className="section-title">Youtube <span>Videos</span></h2>
          <p className="section-subtitle">Our Videos Corner offers carefully curated lectures, strategy sessions, and concept-based discussions.</p>
          
          <div className="youtube-carousel-wrapper">
             <div className="youtube-track">
                {videos.map((vid, idx) => (
                   <div key={idx} className="video-card">
                      <div className="video-thumb">
                         <img src={vid.img} alt={vid.title} />
                         <div className="play-btn">▶</div>
                      </div>
                      <div className="video-info">
                         <h4>{vid.title}</h4>
                      </div>
                   </div>
                ))}
             </div>
          </div>
          
          <div className="carousel-nav-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
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
          <p>Need More Clarity Book a FREE Demo Class - a form on Display</p>
          <button className="btn-book-footer">BOOK A DEMO</button>
        </div>
        
        <div className="footer-columns-grid">
          <div className="f-col">
            <h4>Website Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#director">Director's Messages</a></li>
              <li><a href="#why">Why Choose Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#branches">Our Branches</a></li>
              <li><a href="#referral">Referral Policy</a></li>
              <li><a href="#articles">UPSC Articles</a></li>
              <li><a href="#blogs">UPSC Blogs</a></li>
              <li><a href="#exploration">Exploration</a></li>
              <li><a href="#quizzes">Daily Quizzes</a></li>
              <li><a href="#faqs">FAQ's</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#login">Student Login</a></li>
              <li><a href="#enroll">Enroll Now</a></li>
            </ul>
          </div>
          <div className="f-col">
            <h4>Courses Details</h4>
            <ul>
              <li><a href="#all">All Courses</a></li>
              <li><a href="#psir-m">PSIR Test Series and Mentorship</a></li>
              <li><a href="#psir-o">PSIR Optional Courses</a></li>
              <li><a href="#geo">Geography Optional Foundation Courses</a></li>
              <li><a href="#mains-e">Mains Enrichment Program 2025</a></li>
              <li><a href="#mains-t">Mains Test Series CSE 2025</a></li>
              <li><a href="#essay">Essay Test Series 2025</a></li>
              <li><a href="#mains-t2">Mains Test Series CSE 2025</a></li>
            </ul>
            <div className="f-address">
              <h4>Address :</h4>
              <p>SRIRAM’S IAS Tower’s , 10-B, Pusa Road Bada Bazaar Marg Road Old Rajindra Nagar New Delhi - 110060</p>
            </div>
            <div className="f-contact-info">
              <p>📞 Contact Us : 011-42430722</p>
              <p>✉ Email Id : sriramsias@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-right-accent">
         <div className="vertical-logo-text">
            IA COURS ES <br />
            IAS RJJR S FS <br />
            IS CO US ES <br />
            IAS COURSES <br />
            AS CO IIS FS <br />
            IAS ODIIDS EC <br />
            IA COIID ES
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
