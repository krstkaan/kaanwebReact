import '../styles/Global.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="section about-section animate-section" id="about" ref={sectionRef}>
      <h2 className="section-title animate-item" ref={titleRef}>{t('about.title')}</h2>
      <p className="section-text animate-item" ref={textRef}>{t('about.description')}</p>
    </div>
  );
};

export default About;