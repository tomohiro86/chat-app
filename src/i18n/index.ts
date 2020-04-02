import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import commonJp from './namespace/ja/common.json';
import commonEn from './namespace/en/common.json';
import signinJp from './namespace/ja/signin.json';
import signinEn from './namespace/en/signin.json';
import signupJp from './namespace/ja/signup.json';
import signupEn from './namespace/en/signup.json';

const resources = {
  ja: {
    translation: {
      common: commonJp,
      signin: signinJp,
      signup: signupJp,
    },
  },
  en: {
    translation: {
      common: commonEn,
      signin: signinEn,
      signup: signupEn,
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
