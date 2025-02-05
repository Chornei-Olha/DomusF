import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next'; // Хук для перевода
import logo from '../../assets/images/logodomus.jpg';
import telephone from '../../assets/images/telephone.png';

const Footer = () => {
  const { t } = useTranslation('translation');

  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <div className={styles.contactItem}>
          <img
            src={telephone}
            loading="lazy"
            alt="Telephone Logo"
            className={styles.icon}
          />
          <a href="tel:+380443565620" className={styles.contactLink}>
            +38 (044) 3565620
          </a>
        </div>

        <div className={styles.contactItem}>
          <img
            src={telephone}
            loading="lazy"
            alt="Telephone Logo"
            className={styles.icon}
          />
          <a href="tel:+380443565630" className={styles.contactLink}>
            +38 (044) 3565630
          </a>
        </div>

        <div className={styles.contactItem}>
          <img
            src={telephone}
            loading="lazy"
            alt="Telephone Logo"
            className={styles.icon}
          />
          <a href="tel:+380676502036" className={styles.contactLink}>
            +38 (067) 6502036
          </a>
        </div>
      </div>

      <div className={styles.logo}>
        <img
          src={logo}
          loading="lazy"
          alt="Logo"
          className={styles.logoImage}
        />
      </div>

      <div className={styles.doctorInfo}>
        <a
          href="https://maps.app.goo.gl/ivmba8TfCN44ongv9"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonLink}
        >
          <button className={styles.consultationButton}>
            {t('footer.location')}
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
