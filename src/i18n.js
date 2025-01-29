import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Загрузка перевода с помощью HTTP
  .use(LanguageDetector) // Детектор языка
  .use(initReactI18next) // Подключаем React
  .init({
    fallbackLng: 'en', // Язык по умолчанию
    supportedLngs: ['en', 'uk'], // Поддерживаемые языки
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Путь к файлам переводов
    },
    ns: ['translation'], // Пространства имен
    defaultNS: 'translation',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: [],
    },
    debug: true,
  });

export default i18n;
