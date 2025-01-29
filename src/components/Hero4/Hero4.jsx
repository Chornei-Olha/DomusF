import React from 'react';
import styles from './Hero4.module.css';
import img1 from '../../assets/images/hero.jpg';
import { useTranslation } from 'react-i18next'; // Хук для перевода
import i18next from 'i18next';

const Hero4 = () => {
  const { t, i18n } = useTranslation('translation');

  return (
    <section id="aboutUs" className={styles.hero}>
      <div className={styles.images}>
        <img src={img1} alt="Image 1" className={styles.image} />
      </div>
      <div className={styles.textOverlay}>
        <h1 className={styles.title}>{t('hero4.title')}</h1>
      </div>
    </section>
  );
};

export default Hero4;
