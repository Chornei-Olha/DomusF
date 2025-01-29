import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Хук для перевода

import logo from '../../assets/images/logodomus.jpg';
import logoMobile from '../../assets/images/logodomus.jpg';

const Header = () => {
  const { t } = useTranslation('translation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип с переходом на главную */}
        <Link to="/">
          <img src={logo} loading="lazy" alt="Logo" className={styles.logo} />
          <img
            src={logoMobile}
            loading="lazy"
            alt="Logo"
            className={styles.logo2}
          />
        </Link>

        {/* Кнопка-бургер для меню */}
        <button className={styles.burger} onClick={toggleMenu}>
          ☰
        </button>

        {/* Навигация */}
        <nav
          className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}
        >
          <ul>
            {/* Используем NavLink для маршрутов */}
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
                onClick={toggleMenu}
              >
                {t('header.company')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/assortment"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
                onClick={toggleMenu}
              >
                {t('header.assortment')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/priceList"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
                onClick={toggleMenu}
              >
                {t('header.priceList')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
                onClick={toggleMenu}
              >
                {t('header.contacts')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
                onClick={toggleMenu}
              >
                {t('header.news')}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
