import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";



i18n
  .use(LanguageDetector)
  .use(Backend) 
  .use(initReactI18next)
  .init({
    debug: true,
    load: "languageOnly",
    nonExplicitSupportedLngs: true, //support language variation
    lng: localStorage.getItem("i18nextLng") || window.navigator.language,
    fallbackLng: {
      "ko-KR": "ko",
      "en-US": "en",
      "ja-JP": "ja",
    } || window.navigator.languages,
    ns: "translation",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    saveMissing: true,
    react: {
      useSuspense: false,
    },
  });
