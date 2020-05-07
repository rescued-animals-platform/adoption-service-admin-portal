import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import spanishMessages from 'ra-language-spanish';
import spanishDomainMessages from './es.js';


const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'es') {
        return { ...spanishMessages, ...spanishDomainMessages }
    }
    if (locale === 'en') {
        return import('./en.js').then(({englishDomainMessages}) =>  {
          return { ...englishMessages, ...englishDomainMessages.default }
        });
    }
}, 'es');

export default i18nProvider;
