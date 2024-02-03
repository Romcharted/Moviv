import { createI18n } from "vue-i18n";
import enMessages from "@/locales/en.json";
import frMessages from "@/locales/fr.json";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "fr",
    messages: {
        en: enMessages,
        fr: frMessages,
    },
});

export default i18n;
