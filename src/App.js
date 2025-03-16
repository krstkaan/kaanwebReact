import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceSkills from './components/ExperienceSkills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';
import './styles/Hero.css';

function App() {
  return (
    <>
      <CustomNavbar />
      <Hero />
      <About />
      <ExperienceSkills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;