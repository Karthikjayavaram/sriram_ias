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
