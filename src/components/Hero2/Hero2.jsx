import React from 'react';
import styles from './Hero2.module.css';
import img1 from '../../assets/images/hero.jpg';
import { useTranslation } from 'react-i18next'; // Хук для перевода
// import i18next from 'i18next';

const Hero2 = () => {
  const { t } = useTranslation('translation');

  return (
    <section id="aboutUs" className={styles.hero}>
      <div className={styles.images}>
        <img src={img1} alt="hero" className={styles.image} />
      </div>
      <div className={styles.textOverlay}>
        <h1 className={styles.title}>{t('hero2.title')}</h1>
      </div>
    </section>
  );
};

export default Hero2;
