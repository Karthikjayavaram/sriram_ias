import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuotesSection from './components/QuotesSection';
import ExploreCourses from './components/ExploreCourses';
import ToppersSection from './components/ToppersSection';
import FreeCoursesSection from './components/FreeCoursesSection';
import BooksSection from './components/BooksSection';
import StorySection from './components/StorySection';
import AppSection from './components/AppSection';
import YouTubeSection from './components/YouTubeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      <div className="bg-tint">
        <QuotesSection />
      </div>
      <div className="bg-white">
        <ExploreCourses />
      </div>
      <div className="bg-tint">
        <ToppersSection />
      </div>
      <div className="bg-white">
        <FreeCoursesSection />
      </div>
      <div className="bg-tint">
        <BooksSection />
      </div>
      <div className="bg-white">
        <StorySection />
      </div>
      <div className="bg-tint">
        <AppSection />
      </div>
      <div className="bg-white">
        <YouTubeSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
