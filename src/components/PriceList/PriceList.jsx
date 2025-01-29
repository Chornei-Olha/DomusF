import React from 'react';
import styles from './PriceList.module.css';
import { useTranslation } from 'react-i18next'; // Хук для перевода
import i18next from 'i18next';

// Импортируем файлы PDF
import pdf1 from '../../assets/files/2025.01.21  BERLING CENNIK 2025__RU.pdf';
import pdf2 from '../../assets/files/2025.01.21  BERLING CENNIK CO2__RU.pdf';

const PriceList = () => {
  const { t, i18n } = useTranslation('translation');

  return (
    <section id="priceList" className={styles.priceList}>
      <h2 className={styles.title}>{t("priceList.title")}</h2>
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
