import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../language/en/translation.json";
import ru from "../language/ru/translation.json";
import uz from "../language/uz/translation.json";
import { Interpolation } from "@react-spring/web";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
  },

  fallbackLng: "en",
  Interpolation: {
    escapeValue: false
  },
});

export default i18next;