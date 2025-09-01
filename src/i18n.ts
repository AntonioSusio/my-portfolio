import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './i18n/en.json';
import translationIT from './i18n/it.json';

const resources = {
  en: { translation: translationEN },
  it: { translation: translationIT }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

