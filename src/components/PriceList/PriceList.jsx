import React from 'react';
import styles from './PriceList.module.css';
import { useTranslation } from 'react-i18next'; // Хук для перевода
import telephone from '../../assets/images/telephone.png';
import emailIcon from '../../assets/images/email.png';

// Импортируем файлы PDF
// import pdf1 from '../../assets/files/2025.01.21  BERLING CENNIK 2025__RU.pdf';
// import pdf2 from '../../assets/files/2025.01.21  BERLING CENNIK CO2__RU.pdf';

const PriceList = () => {
  const { t } = useTranslation('translation');

  return (
    <section id="priceList" className={styles.priceList}>
      <div className={styles.contacts}>
        <div className={styles.contactItem}>
          <img
            src={telephone}
            loading="lazy"
            alt="Телефон"
            className={styles.icon}
          />
          <a href="tel:+380443565620" className={styles.contactLink}>
            +38 (044) 356 56 20
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
            +38 (044) 356 56 30
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
            +38 (067) 650 20 36
          </a>
        </div>
        <div className={styles.contactItem}>
          <img
            src={emailIcon}
            loading="lazy"
            alt="email"
            className={styles.icon}
          />
          <a href="mailto:info@domus.biz.ua" className={styles.contactLink}>
            info@domus.biz.ua
          </a>
        </div>
      </div>
      <h2 className={styles.title}>{t('priceList.title')}</h2>
      <div className={styles.table}>
        <div className={styles.row}>
          <span className={styles.fileName}>Прейскурант 2025</span>
          {/* <a href={pdf1} download className={styles.downloadBtn}>
            Скачать
          </a> */}
        </div>
        <div className={styles.row}>
          <span className={styles.fileName}>Прейскурант</span>
          {/* <a href={pdf2} download className={styles.downloadBtn}>
            Скачать
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default PriceList;
