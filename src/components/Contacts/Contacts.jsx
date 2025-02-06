import React from 'react';
import styles from './Contacts.module.css';
import { useTranslation } from 'react-i18next';

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
      values: [
        '+38 (044) 356 56 20',
        '+38 (044) 356 56 30',
        '+38 (067) 650 20 36',
      ],
      links: ['tel:+380443565620', 'tel:+380443565630', 'tel:+380676502036'],
    },
    {
      icon: emailIcon,
      title: t('contacts.email'),
      value: 'info@domus.biz.ua',
      link: 'mailto:info@domus.biz.ua',
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
      link: 'https://maps.app.goo.gl/ivmba8TfCN44ongv9',
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

              {/* Если у контакта массив значений (например, телефоны) */}
              {contact.values ? (
                <div className={styles.multiContact}>
                  {contact.values.map((phone, i) => (
                    <a
                      key={i}
                      href={contact.links[i]}
                      className={styles.contactLink}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              ) : (
                <a href={contact.link} className={styles.contactLink}>
                  {contact.value}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
