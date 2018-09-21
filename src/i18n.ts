import * as i18n from 'i18next';

import * as LanguageDetector from 'i18next-browser-languagedetector';

const instance = i18n.use(LanguageDetector).init({
    debug: true,
    defaultNS: 'translations',

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ','
    },

    keySeparator: false, // we use content as keys

    
    
    resources: {
        en: {
            translations: {
                'searchPlaceholder': 'Start Searching Here...',
                'selectLanguagePrompt': 'Lang:'
            }
        },
        ru: {
            translations: {
                'searchPlaceholder': 'Начните поиск здесь...',
                'selectLanguagePrompt': 'Язык:'
            }
        }
    },

    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    

    

    react: {
      wait: true
    }
}, (e) => {
    if (e) {
        // tslint:disable
        console.error(e);
    } else {
        console.log('no errors')
    }
})

export default instance;