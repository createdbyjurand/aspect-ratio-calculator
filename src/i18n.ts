import { DeJson, EnJson, PlJson } from '@io/translations';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

/**
 * https://locize.com/blog/react-i18next/
 */
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // passes i18n down to react-i18next
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: ['pl', 'en', 'de'],
    interpolation: {
      // not needed for react as it escapes by default
      // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      escapeValue: false,
    },
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      pl: {
        translation: PlJson,
      },
      en: {
        translation: EnJson,
      },
      de: {
        translation: DeJson,
      },
    },
  });

export default i18n;
