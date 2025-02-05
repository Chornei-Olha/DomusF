import React from 'react';
import styles from './Hero.module.css';
import img1 from '../../assets/images/hero.webp';

const Hero = () => {
  return (
    <section id="aboutUs" className={styles.hero}>
      <div className={styles.images}>
        <img src={img1} alt="Image 1" className={styles.image} />
      </div>
    </section>
  );
};

export default Hero;
