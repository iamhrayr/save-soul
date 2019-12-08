import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// translations
import en from './en.json';
import am from './am.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      am: { translation: am },
    },
    fallbackLng: 'en',
    debug: true,
    keySeparator: false, // we use content as keys
    react: {
      wait: true,
    },
  });

export default i18n;
