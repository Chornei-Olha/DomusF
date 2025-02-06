import React from 'react';
import styles from './PriceList.module.css';
import { useTranslation } from 'react-i18next'; // Хук для перевода
import telephone from '../../assets/images/telephone.png';

// Импортируем файлы PDF
import pdf1 from '../../assets/files/2025.01.21  BERLING CENNIK 2025__RU.pdf';
import pdf2 from '../../assets/files/2025.01.21  BERLING CENNIK CO2__RU.pdf';

const PriceList = () => {
  const { t } = useTranslation('translation');

  return (
    <section id="priceList" className={styles.priceList}>
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
      <h2 className={styles.title}>{t('priceList.title')}</h2>
      <div className={styles.table}>
        <div className={styles.row}>
          <span className={styles.fileName}>
            Прейскурант складское оснащение 2025
          </span>
          <a href={pdf1} download className={styles.downloadBtn}>
            Скачать
          </a>
        </div>
        <div className={styles.row}>
          <span className={styles.fileName}>
            Прейскурант складское оснащение CO2
          </span>
          <a href={pdf2} download className={styles.downloadBtn}>
            Скачать
          </a>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
