import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import project1 from '../assets/1work_poollift.jpg';
import project2 from '../assets/cbd.jpg';
import project3 from '../assets/liftartorg.png';
import project5 from '../assets/Muhasebem.png';
import project6 from '../assets/moon_1.png';
import project7 from '../assets/findyourrole.png';
import project8 from '../assets/space.jpg';
import project9 from '../assets/zombie.jpg';

const imageMap = {
  '1work_poollift.jpg': project1,
  'cbd.jpg': project2,
  'liftartorg.png': project3,
  'mhs.png': project5,
  'moon_1.png': project6,
  'sbb.png': project7,
  'space.jpg': project8,
  'zombie.jpg': project9,
};

const Projects = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  
  // Intersection Observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once animation is triggered, no need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle theme change animation
  useEffect(() => {
    // Listen for theme changes (this depends on how you implement theme switching)
    const handleThemeChange = () => {
      if (sectionRef.current) {
        sectionRef.current.classList.add('theme-transition');
        setTimeout(() => {
          sectionRef.current.classList.remove('theme-transition');
        }, 500);
      }
    };

    // Add event listener for theme toggle
    // This assumes you have a custom event for theme changes
    // Adjust this to match your theme implementation
    document.addEventListener('themeChanged', handleThemeChange);
    
    return () => {
      document.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);

  // Get project data from translations
  const content = t('projects', { returnObjects: true });
  
  // Find newly added projects (you could set this based on date added in your data)
  const isNewProject = (index) => {
    // Example: Mark the first project as new
    return index === 0;
  };

  return (
    <div className="section" id="projects" ref={sectionRef}>
      <h2 className="section-title">{content.title}</h2>
      <div className="projects-grid">
        {content.list.map((project, index) => (
          <div 
            className={`project-card ${isNewProject(index) ? 'new' : ''}`} 
            key={index}
          >
            <div className="project-image-container">
              <img
                src={imageMap[project.image] || project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                  {t('Details')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;