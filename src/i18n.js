import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../src/helper/Translations/en/translation.json'
import es from '../src/helper/Translations/es/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;

  