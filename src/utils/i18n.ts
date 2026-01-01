import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en/translation.json";
import id from "../locales/id/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    id: { translation: id },
  },
  fallbackLng: "id",
  supportedLngs: ["en", "id"],
  lng:
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "id"
      : "id",
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});

export default i18n;
