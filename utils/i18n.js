import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import localesResource from '../src/assets/locales/index'
i18n
    // .use(detector)
    // .use(backend)
    .use(initReactI18next) // passes i18n down to react-i18next
// // .init({
// //     fallbackLng: 'en',
// //     lng: 'vi',
// //     ns: ['translations'],
// //     defaultNS: 'translations',
// //     resources: localesResource,
// //     debug: true,
// //     react: {
// //         wait: true,
// //     },
// });

export default i18n;