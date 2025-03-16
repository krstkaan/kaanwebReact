import '../styles/ExperienceSkills.css';
import Experience from './Experience';
import Skills from './Skills';
import { useEffect, useRef } from 'react';

const ExperienceSkills = () => {
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% of the element needs to be visible
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Cleanup function
    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
      
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="section" id="experience-skills">
      <div className="experience-skills-container">
        <div ref={experienceRef} className="animate-section">
          <Experience />
        </div>
        <div ref={skillsRef} className="animate-section">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSkills;