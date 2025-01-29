import React from 'react';
import styles from './News.module.css';
import { useTranslation } from 'react-i18next'; // Хук для перевода

const News = () => {
  const { t } = useTranslation('translation');

  return (
    <section id="aboutUs" className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('news.title')}</h2>
          <p className={styles.text}>
            Компания Домус Фригус основана в апреле 2004 года и на сегодняшний
            день является генеральным дистрибьютором ведущих мировых
            производителей холодильной техники, компонентов, и сопутствующей
            продукции. Располагает одним из крупнейших складов в Украине,
            постоянное наличие гарантирует быстрые поставки оборудования и
            компонентов
          </p>
        </div>
        {/* <div className={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/400"
            alt="О нас"
            className={styles.image}
          />
        </div> */}
      </div>
    </section>
  );
};

export default News;
