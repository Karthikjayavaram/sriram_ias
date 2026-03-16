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
      img1: "/assets/free_quiz.png",
      img2: "/assets/free_blog.png"
    },
    {
      id: "current-affairs",
      type: "Daily ",
      highlight: "Current Affairs",
      titleColor: "#fdba74",
      text: "Engage with our daily current affairs designed to help you stay updated with key national and international events while improving your analytical understanding for competitive exams.",
      bgClass: "bg-emerald",
      img1: "/assets/free_ca.png",
      img2: "/assets/free_quiz.png"
    },
    {
      id: "mains-question",
      type: "Daily ",
      highlight: "Mains Question",
      titleColor: "#fcd34d",
      text: "Solve our Daily Mains Questions to improve your answer-writing skills, build strong arguments, and stay consistent with your UPSC Mains preparation.",
      bgClass: "bg-blue",
      img1: "/assets/free_mains.png",
      img2: "/assets/free_ca.png"
    },
    {
      id: "blogs",
      type: "",
      highlight: "Blogs",
      titleColor: "#93c5fd",
      text: "Explore our blogs for insightful articles, expert opinions, and the latest updates on UPSC preparation to stay informed and motivated throughout your journey.",
      bgClass: "bg-purple",
      img1: "/assets/free_blog.png",
      img2: "/assets/free_mains.png"
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

