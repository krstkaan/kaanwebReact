import '../styles/Experience.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experience.experiences', { returnObjects: true }) || [];
  const timelineItemsRef = useRef([]);

  // Set up refs array for timeline items
  useEffect(() => {
    timelineItemsRef.current = timelineItemsRef.current.slice(0, experiences.length);
  }, [experiences]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    timelineItemsRef.current.forEach(item => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      timelineItemsRef.current.forEach(item => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, [experiences]);

  return (
    <div className="experience-container" id='experiences'>
      <h2 className="section-title">{t('experience.title')}</h2>
      <div className="timeline">
        {Array.isArray(experiences) && experiences.map((exp, index) => (
          <div 
            className="timeline-item animate-item" 
            key={index}
            ref={el => timelineItemsRef.current[index] = el}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span>{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;