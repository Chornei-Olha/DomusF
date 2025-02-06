import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/images/logodomus.jpg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img
          src={logo}
          loading="lazy"
          alt="Logo"
          className={styles.logoImage}
        />
      </div>
    </footer>
  );
};

export default Footer;
