import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next'; // Хук для перевода
import logo from '../../assets/images/logodomus.jpg';
import telephone from '../../assets/images/telephone.png';
import ukFlag from '../../assets/images/ukraine-flag.jpg';
import enFlag from '../../assets/images/england-flag.jpg';

const Footer = () => {
  const { t, i18n } = useTranslation('translation');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Смена языка
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        {/* <h3 className={styles.contactsTitle}>Контакты</h3> */}
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
        <div className={styles.doctorInfo}>
          <a
            href="https://g.co/kgs/tB2qtt9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonLink}
          >
            <button className={styles.consultationButton}>
              {t('footer.location')}
            </button>
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

      {/* Контейнер для кнопок переключения языков */}
      <div className={styles.languageSwitcherContainer}>
        <button
          onClick={() => changeLanguage('uk')}
          className={styles.languageButton}
        >
          <img src={ukFlag} alt="Українська" className={styles.flag} />
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={styles.languageButton}
        >
          <img src={enFlag} alt="English" className={styles.flag} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
