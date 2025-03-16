import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <p>&copy; {year} KaanWeb. {t('footer.rights')}</p>
    </footer>
  );
};

export default Footer;
