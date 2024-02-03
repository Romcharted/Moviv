import { createI18n } from "vue-i18n";
import enMessages from "@/locales/en.json";
import frMessages from "@/locales/fr.json";

const userLocale = window.navigator.language.toLowerCase();
const defaultLocale = userLocale.startsWith("fr") ? "fr" : "en";

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: "fr",
    messages: {
        en: enMessages,
        fr: frMessages,
    },
});

export default i18n;
