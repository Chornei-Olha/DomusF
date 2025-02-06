import React, { useState } from 'react';
import styles from './News.module.css';
import { useTranslation } from 'react-i18next';
import pdf1 from '../../assets/files/Bitzer_FG_models.pdf';
import telephone from '../../assets/images/telephone.png';
import emailIcon from '../../assets/images/email.png';

const newsData = [
  {
    title: 'Bitzer повідомляє про нові моделі',
    content: `Bitzer повідомляє, що з цього моменту сім нових моделей горизонтальних ресиверів F_G доступні для продажу.
  
      Серія "G" включає моделі зі збільшеними вхідними та вихідними з'єднаннями для холодоагенту порівняно зі стандартними ресиверами серій F і FS. Ця особливість є особливо корисною при використанні холодоагентів, чутливих до перепаду тиску.
      Окрім існуючих горизонтальних моделей F302G, F562G, F1052G та F1602G, ми представляємо сім нових моделей. Вперше у цій лінійці з’явилися ресивери з діаметром корпусу 500 мм.`,
    pdfLink: pdf1,
  },
];

const News = () => {
  const { t } = useTranslation('translation');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleNews = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="news" className={styles.newsSection}>
      <div className={styles.container}>
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
        <h2 className={styles.title}>{t('news.title')}</h2>
        <ul className={styles.newsList}>
          {newsData.map((news, index) => (
            <li key={index} className={styles.newsItem}>
              <button
                className={styles.newsTitle}
                onClick={() => toggleNews(index)}
              >
                {news.title}
              </button>
              {openIndex === index && (
                <div className={styles.newsContent}>
                  <p>{news.content}</p>
                  <strong>Нижче наведено перелік нових моделей F_G</strong>
                  <br />
                  <a
                    href={news.pdfLink}
                    download
                    className={styles.downloadButton}
                  >
                    Завантажити
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
