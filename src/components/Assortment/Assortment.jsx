import React from 'react';
import styles from './Assortment.module.css';
import { useTranslation } from 'react-i18next';
import telephone from '../../assets/images/telephone.png';
import emailIcon from '../../assets/images/email.png';

// Импортируем изображения
import img1 from '../../assets/images/logo/BITZER.gif';
import img2 from '../../assets/images/logo/CALORFLEX.png';
import img3 from '../../assets/images/logo/Conex.jpg';
import img4 from '../../assets/images/logo/danfoss.jpg';
import img5 from '../../assets/images/logo/Deka.png';
import img6 from '../../assets/images/logo/FELDER.png';
import img7 from '../../assets/images/logo/gokceler_refricomp.png';
import img8 from '../../assets/images/logo/Guntner.png';
import img9 from '../../assets/images/logo/higel.png';
import img10 from '../../assets/images/logo/HME Copper.png';
import img11 from '../../assets/images/logo/HTS .svg';
import img12 from '../../assets/images/logo/KME Mansfeld GmbH.jpg';
import img13 from '../../assets/images/logo/KRIWAN .jpg';
import img14 from '../../assets/images/logo/Leitenberger .jpg';
import img16 from '../../assets/images/logo/MKM GmbH.jpg';
import img18 from '../../assets/images/logo/SANHA.png';
import img19 from '../../assets/images/logo/Sopormetal .png';
import img20 from '../../assets/images/logo/WEIGUANG.png';
import img21 from '../../assets/images/logo/Wieland - Werke AG.png';
import img22 from '../../assets/images/logo/witt.png';
import img23 from '../../assets/images/logo/wtk-logoR.png';
import img24 from '../../assets/images/logo/ziehl-abegg.svg';
import img25 from '../../assets/images/logo/4coils.png';
import img26 from '../../assets/images/logo/Castel.png';
import img27 from '../../assets/images/logo/fuchs-lubricants.png';

const Assortment = () => {
  const { t } = useTranslation('translation');

  // Массив изображений для плиток
  const items = [
    img1,
    img8,
    img24,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img16,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img25,
    img26,
    img27,
  ];

  return (
    <section id="assortment" className={styles.assortment}>
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
