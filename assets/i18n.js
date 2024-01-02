import { createI18n } from 'vue-i18n';
import EN from './locale/en.json';
import FR from './locale/fr.json';

const i18n = createI18n({
    locale: localStorage.getItem('arvodia|locale') || 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        en: EN,
        fr: FR,
    }
});

export {i18n};