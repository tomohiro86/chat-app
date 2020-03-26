import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import signinJp from './namespace/ja/signin.json';

const resources = {
  ja: {
    translation: {
      signin: signinJp,
    },
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ja',
    fallbackLng: 'ja',
    debug: process.env.NODE_ENV === 'development',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
