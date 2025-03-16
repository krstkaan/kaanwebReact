import '../styles/Skills.css';
import { useTranslation } from 'react-i18next';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaDatabase, FaUnity } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiMysql, SiLaravel, SiKotlin  } from 'react-icons/si';

const Skills = () => {
  const { t } = useTranslation();

  // Define skills based on your profile information
  const skills = [
    {
      name: "React",
      level: 90,
      icon: <FaReact className="skill-icon-svg" style={{ color: "#61DAFB" }} />
    },
    {
      name: "Next.js",
      level: 70,
      icon: <SiNextdotjs className="skill-icon-svg" style={{ color: "#000000" }} />
    },
    {
      name: "JavaScript",
      level: 85,
      icon: <FaJs className="skill-icon-svg" style={{ color: "#F7DF1E" }} />
    },
    {
      name: "PHP",
      level: 85,
      icon: <FaPhp className="skill-icon-svg" style={{ color: "#777BB4" }} />
    },
    {
      name: "Laravel",
      level: 75,
      icon: <SiLaravel className="skill-icon-svg" style={{ color: "#FF2D20" }} />
    },
    {
      name: "Node.js",
      level: 80,
      icon: <FaNodeJs className="skill-icon-svg" style={{ color: "#68A063" }} />
    },
    {
      name: "MySQL",
      level: 80,
      icon: <SiMysql className="skill-icon-svg" style={{ color: "#4479A1" }} />
    },
    {
      name: "PostgreSQL",
      level: 70,
      icon: <SiPostgresql className="skill-icon-svg" style={{ color: "#336791" }} />
    },
    {
      name: "MsSQL",
      level: 65,
      icon: <FaDatabase className="skill-icon-svg" style={{ color: "#CC2927" }} />
    },
    {
      name: "Unity",
      level: 65,
      icon: <FaUnity className="skill-icon-svg" style={{ color: "#000000" }} />
    },
    {
      name: "Kotlin",
      level: 60,
      icon: <SiKotlin className="skill-icon-svg" style={{ color: "#0095D5" }} />
    },
    {
      name: "React Native",
      level: 60,
      icon: <FaReact className="skill-icon-svg" style={{ color: "#61DAFB" }} />
    }
    
  ];

  return (
    <div className="skills-container" id='skills'>
      <h2 className="section-title">{t('Skills.title')}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">
              {skill.icon}
            </div>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              {/* <div className="skill-level">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;