import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import {TranslationFr} from "./TranslationFr/index"; 

import {TranslationEn} from "./TranslationEn/index"; 


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: TranslationEn },
    fr: { translation: TranslationFr },
  },

  lng: "fr",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
