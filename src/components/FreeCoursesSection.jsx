import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const FreeCoursesSection = () => {
  const [sectionRef, isVisible] = useScrollReveal();
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
    <section ref={sectionRef} id="free-courses" className="access-free-courses-wrap">
      <div className={`reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'left', marginBottom: '3rem' }}>
        <p style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.25rem', color: '#0f172a' }}>Get</p>
        <h2 className="section-title-left" style={{ color: '#0ea5e9', fontSize: '2.5rem', margin: 0 }}>Access Free Courses</h2>
      </div>

      <div className="free-courses-blocks">
        {courses.map((course, idx) => (
          <div key={course.id} className={`free-course-block ${course.bgClass} reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
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

export default FreeCoursesSection;

