import React from 'react';
import styles from './Hero3.module.css';
import img1 from '../../assets/images/hero.webp';
import { useTranslation } from 'react-i18next'; // Хук для перевода

const Hero3 = () => {
  const { t } = useTranslation('translation');

  return (
    <section id="aboutUs" className={styles.hero}>
      <div className={styles.images}>
        <img src={img1} alt="hero" className={styles.image} />
        <div className={styles.textOverlay}>
          <h1 className={styles.title}>{t('hero3.title')}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
