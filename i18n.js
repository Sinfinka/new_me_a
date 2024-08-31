import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Загрузка переводов с сервера
  .use(LanguageDetector) // Определение языка пользователя
  .use(initReactI18next) // Инициализация для React
  .init({
    fallbackLng: "ru", // Язык по умолчанию
    interpolation: {
      escapeValue: false, // Не нужно экранирование
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь к файлам с переводами
    },
  });

export default i18n;
