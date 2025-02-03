import React from 'react';
import styles from './Contacts.module.css';
import { useTranslation } from 'react-i18next'; // Хук для перевода

// Импортируем иконки для контактной информации
import telephoneIcon from '../../assets/images/telephone.png';
import emailIcon from '../../assets/images/email.png';
import locationIcon from '../../assets/images/location.png';
import facebookIcon from '../../assets/images/facebook.png';

const Contacts = () => {
  const { t } = useTranslation('translation');

  // Контактные данные
  const contactDetails = [
    {
      icon: telephoneIcon,
      title: t('contacts.phone'),
      value: '+38 (067) 6502036',
      link: 'tel:+380676502036',
    },
    {
      icon: emailIcon,
      title: t('contacts.email'),
      value: 'admin@domus.biz.ua',
      link: 'mailto:admin@domus.biz.ua',
    },
    {
      icon: facebookIcon,
      title: t('contacts.facebook'),
      value: 'DomusFrigus',
      link: 'https://www.facebook.com/DomusFrigus',
    },
    {
      icon: locationIcon,
      title: t('contacts.address'),
      value: t('contacts.street'),
      link: 'https://g.co/kgs/tB2qtt9',
    },
  ];

  return (
    <section id="contacts" className={styles.contacts}>
      <h2 className={styles.title}>{t('contacts.title')}</h2>
      <div className={styles.grid}>
        {contactDetails.map((contact, index) => (
          <div key={index} className={styles.card}>
            <img
              src={contact.icon}
              alt={contact.title}
              className={styles.icon}
            />
            <div className={styles.contactInfo}>
              <h3 className={styles.contactTitle}>{contact.title}</h3>
              <a href={contact.link} className={styles.contactLink}>
                {contact.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
