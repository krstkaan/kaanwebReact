import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useTheme } from '../hooks/useTheme';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';
import { useState } from 'react';

const CustomNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setExpanded(false);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg={theme === 'dark' ? 'dark' : 'light'}
      variant={theme === 'dark' ? 'dark' : 'light'}
      expand="lg"
      sticky="top"
      className="custom-navbar shadow-sm"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-text" onClick={closeNavbar}>
          KaanWeb
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about" className="nav-link-custom" onClick={closeNavbar}>
              {t('navbar.about')}
            </Nav.Link>
            <Nav.Link href="#experiences" className="nav-link-custom" onClick={closeNavbar}>
              {t('navbar.experience')}
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom" onClick={closeNavbar}>
              {t('navbar.skills')}
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom" onClick={closeNavbar}>
              {t('navbar.projects')}
            </Nav.Link>
            <Nav.Link href="/quiz" className="nav-link-custom" onClick={closeNavbar}>
              {t('navbar.quiz')}
            </Nav.Link>

            <Button
              variant="outline-none"
              className="icon-btn ms-2"
              onClick={() => {
                toggleTheme();
                closeNavbar();
              }}
            >
              {theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
            </Button>

            <Button
              variant="outline-none"
              className={`icon-btn ms-2 ${i18n.language === 'tr' ? 'active-lang' : ''}`}
              onClick={() => changeLanguage('tr')}
            >
              TR
            </Button>
            <Button
              variant="outline-none"
              className={`icon-btn ms-2 ${i18n.language === 'en' ? 'active-lang' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;