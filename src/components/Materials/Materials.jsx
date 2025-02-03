import React, { useRef } from 'react';
import { ReactComponent as FaChevronLeft } from '../../assets/images/chevron-left-solid.svg';
import { ReactComponent as FaChevronRight } from '../../assets/images/chevron-right-solid.svg';
import styles from './Materials.module.css';
import picture1 from '../../assets/images/foto.jpg';
import picture2 from '../../assets/images/foto2.png';
import picture3 from '../../assets/images/foto3.jpg';
import picture4 from '../../assets/images/foto4.png';

const materials = [
  {
    id: 1,
    image: picture1,
    // link: '/consultation',
  },
  {
    id: 2,
    image: picture2,
    // link: '/rules',
  },
  {
    id: 3,
    image: picture3,
    // link: '/bloodTest',
  },
  {
    id: 4,
    image: picture4,
    // link: '/bloodDiabetes',
  },
];

const Materials = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    const cardWidth = calculateCardWidth();
    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    const cardWidth = calculateCardWidth();
    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: 'smooth',
    });
  };

  const calculateCardWidth = () => {
    const card = sliderRef.current.querySelector(`.${styles.card}`);
    const gap =
      parseInt(window.getComputedStyle(sliderRef.current).gap, 10) || 0;
    return card.offsetWidth + gap;
  };

  return (
    <section id="blog" className={styles.materialsSection}>
      <div className={styles.header}>
        {/* <h2 className={styles.title}>Корисні матеріали</h2> */}
        <div className={styles.arrows}>
          <button
            className={styles.arrow}
            onClick={scrollLeft}
            aria-label="Preview"
          >
            <FaChevronLeft />
          </button>
          <button
            className={styles.arrow}
            onClick={scrollRight}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className={styles.slider} ref={sliderRef}>
        {materials.map((material) => (
          <div key={material.id} className={styles.card}>
            <img
              src={material.image}
              loading="lazy"
              alt={material.title}
              className={styles.image}
            />
            {/* <div className={styles.category}>{material.category}</div> */}
            <div className={styles.date}>{material.date}</div>
            <h3 className={styles.cardTitle}>{material.title}</h3>
            {/* <a href={material.link} className={styles.detailsLink}>
              Детальніше
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Materials;
