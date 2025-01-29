import React from 'react';
import styles from './AboutUs.module.css';
import { useTranslation } from 'react-i18next'; // Хук для перевода

const AboutUs = () => {
  const { t } = useTranslation('translation');

  return (
    <section id="aboutUs" className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('aboutUs.title')}</h2>
          <p className={styles.text}>{t('aboutUs.p1')}</p>
          <p className={styles.text}>{t('aboutUs.p2')}</p>
          <p className={styles.text}>{t('aboutUs.p3')}</p>
        </div>
        {/* <div className={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/400"
            alt="О нас"
            className={styles.image}
          />
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
