import React, { useState } from 'react';
import { ReactComponent as FaChevronLeft } from '../../assets/images/etc/chevron-left-solid.svg';
import { ReactComponent as FaChevronRight } from '../../assets/images/etc/chevron-right-solid.svg';

import styles from './Foto.module.css';
import certificate1 from '../../assets/images/сertificates/01.webp';
import certificate2 from '../../assets/images/сertificates/02.webp';
import certificate3 from '../../assets/images/сertificates/03.webp';
import certificate4 from '../../assets/images/сertificates/04.webp';
import certificate5 from '../../assets/images/сertificates/05.webp';
import certificate6 from '../../assets/images/сertificates/06.webp';

const Сertificates = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const сertificates = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
    certificate6,
  ];

  const handleScroll = (direction) => {
    const container = document.querySelector(
      `.${styles.certificatesContainer}`
    );
    const scrollAmount = container.offsetWidth;

    const newScrollPosition =
      direction === 'left'
        ? Math.max(scrollPosition - scrollAmount, 0)
        : Math.min(
            scrollPosition + scrollAmount,
            container.scrollWidth - container.offsetWidth
          );

    container.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    setScrollPosition(newScrollPosition);
  };

  return (
    <div className={styles.allSection}>
      <div className={styles.certificatesHeader}>
        <div className={styles.arrows}>
          <div
            className={`${styles.arrow} ${styles.left}`}
            onClick={() => handleScroll('left')}
          >
            <FaChevronLeft />
          </div>
          <div
            className={`${styles.arrow} ${styles.right}`}
            onClick={() => handleScroll('right')}
          >
            <FaChevronRight />
          </div>
        </div>
      </div>
      <div className={styles.certificatesContainer}>
        {сertificates.map((certificate, index) => (
          <div key={index} className={styles.certificate}>
            <img src={certificate} loading="lazy" alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Сertificates;
