import i18nCustom from "i18next";
import { initReactI18next } from "react-i18next";

// Importing the translation files
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

const resources = {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
}

const getInitialLanguage = () => {
    const pathLang = window.location.pathname.split('/')[1];
    const browerLang = navigator.language.split('-')[0];
    const validLangs = ['en', 'es', 'fr'];

    if (validLangs.includes(pathLang)) return pathLang;
    if (validLangs.includes(browerLang)) return browerLang;
    return 'es';
}

i18nCustom
    .use(initReactI18next)
    .init({
        resources,
        lng: getInitialLanguage(),
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18nCustom;