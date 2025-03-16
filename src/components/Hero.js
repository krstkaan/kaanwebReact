import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaDownload } from 'react-icons/fa6';
import '../styles/Hero.css';
import KaanImage from '../assets/Kaan.jpg';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialsRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  // roles kısmını dil bazlı manuel olarak çekiyoruz
  const roles = i18n.language === 'tr'
    ? ['Bilgisayar Mühendisiyim', 'Web Geliştiriciyim', 'Mobil Geliştiriciyim']
    : ['Computer Engineer', 'Web Developer', 'Mobile Developer'];

  useEffect(() => {
    // Add animation class immediately to start the animation when component mounts
    if (titleRef.current) titleRef.current.classList.add('visible');
    
    // Staggered animation for other elements
    const elements = [nameRef, subtitleRef, socialsRef, buttonRef, imageRef];
    elements.forEach((ref, index) => {
      setTimeout(() => {
        if (ref.current) ref.current.classList.add('visible');
      }, 200 * (index + 1)); // Staggered delay
    });
  }, []);

  return (
    <div className="hero-section d-flex align-items-center justify-content-center" id="home">
      <Container>
        <Row className="align-items-center justify-content-center flex-column flex-md-row">
          <Col md={5} className="text-start mb-4 mb-md-0">
            <h1 className="hero-title animate-hero" ref={titleRef}>{t('hero.title')}</h1>
            <h2 className="hero-name animate-hero" ref={nameRef}>{t('hero.name')}</h2>
            <h4 className="hero-subtitle animate-hero" ref={subtitleRef}>
              {i18n.language === 'tr' ? 'Ben bir ' : "I'm a "}
              <span className="typewriter-text">
                <Typewriter
                  words={roles}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h4>
            <div className="social-icons mt-4 animate-hero" ref={socialsRef}>
              <a href="https://github.com/krstkaan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="https://linkedin.com/in/krstkaan" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://x.com/krstkaan_" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="icon" />
              </a>
              <a href="mailto:contact@kaanweb.com" rel="noopener noreferrer">
                <FaEnvelope className="icon" />
              </a>
            </div>
            <div className="mt-3 animate-hero" ref={buttonRef}>
              <a href="/assets/KursatKaanAkbulakCV_12_2024.pdf" download>
                <Button variant="primary">
                  <FaDownload className="me-2" />{i18n.language === 'tr' ? 'CV\'yi İndir' : 'Download CV'}
                </Button>
              </a>
            </div>
          </Col>

          <Col md={5} className="text-center">
            <div className="blob-wrapper animate-hero" ref={imageRef}>
              <Image src={KaanImage} alt="Kürşat Kaan Akbulak" fluid className="blob-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;