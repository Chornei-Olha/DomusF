import React, { useState } from 'react';
import styles from './AboutUs.module.css';
import { useTranslation } from 'react-i18next';
import telephone from '../../assets/images/telephone.png';

const images = [
  require('../../assets/images/class.webp'),
  require('../../assets/images/foto.jpg'),
  require('../../assets/images/foto2.png'),
  require('../../assets/images/foto3.jpg'),
  require('../../assets/images/foto4.png'),
];

const AboutUs = () => {
  const { t } = useTranslation('translation');
  const [imageOrder, setImageOrder] = useState(images);

  // Прокрутка влево: берем последнее фото и ставим в начало
  const scrollLeft = () => {
    setImageOrder((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
  };

  // Прокрутка вправо: берем первое фото и ставим в конец
  const scrollRight = () => {
    setImageOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  return (
    <section id="aboutUs" className={styles.aboutUs}>
      <div className={styles.contacts}>
        <div className={styles.contactItem}>
          <img
            src={telephone}
            loading="lazy"
            alt="Телефон"
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
            alt="Телефон"
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
            alt="Телефон"
            className={styles.icon}
          />
          <a href="tel:+380676502036" className={styles.contactLink}>
            +38 (067) 6502036
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('aboutUs.title')}</h2>
          <p className={styles.text}>{t('aboutUs.p1')}</p>
          <p className={styles.text}>{t('aboutUs.p2')}</p>
          <p className={styles.text}>{t('aboutUs.p3')}</p>
        </div>

        {/* Галерея */}
        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={scrollLeft}>
            <svg width="30" height="30" viewBox="0 0 24 24">
              <path
                d="M15 18l-6-6 6-6"
                stroke="black"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={styles.imageContainer}>
            {imageOrder.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Apparat ${index + 1}`}
                className={`${styles.image} ${index === 0 ? styles.active : ''}`}
              />
            ))}
          </div>
          <button className={styles.arrow} onClick={scrollRight}>
            <svg width="30" height="30" viewBox="0 0 24 24">
              <path
                d="M9 18l6-6-6-6"
                stroke="black"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
