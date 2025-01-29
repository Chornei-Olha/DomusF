import React from 'react';
import styles from './Assortment.module.css';
import { useTranslation } from 'react-i18next'; // Хук для перевода

// Импортируем изображения
import img1 from '../../assets/images/logo/danfoss.jpg';
import img2 from '../../assets/images/logo/WTK.jpg';
import img3 from '../../assets/images/logo/MKM.jpg';
import img4 from '../../assets/images/logo/Bitzer.jpg';
import img5 from '../../assets/images/logo/Leitenberger.jpg';

const Assortment = () => {
  const { t } = useTranslation('translation');

  // Массив изображений для плиток
  const items = [img1, img2, img3, img4, img5];

  return (
    <section id="assortment" className={styles.assortment}>
      <h2 className={styles.title}> {t('assortment.title')}</h2>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img
              src={item}
              alt={`Товар ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Assortment;
