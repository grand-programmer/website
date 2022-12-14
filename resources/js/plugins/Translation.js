import axios from 'axios'
import i18n from '../i18n'

const Trans = {
    get defaultLocale() {
        return localStorage.getItem('language') || 'uz'
    },
    get supportedLocales() {
        return "en,ru,uz,oz".split(',')
    },
    get currentLocale() {
        return i18n.locale
    },
    set currentLocale(locale) {
        i18n.locale = locale
    },
    getUserSupportedLocale() {

        //i18n.locale = localStorage.getItem('language') || 'uz'

        /*const userPreferredLocale = Trans.getUserLocale()

        if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
            return userPreferredLocale.locale
        }

        if (Trans.isLocaleSupported(userPreferredLocale.localeNoISO)) {
            return userPreferredLocale.localeNoISO
        }*/
        return localStorage.getItem('language') || Trans.defaultLocale
    },
    getUserLocale() {
        const locale = Trans.defaultLocale //window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale
        return {
            locale: locale,
            localeNoISO: locale.split('-')[0]
        }
    },
    setI18nLocaleInServices(locale) {
        Trans.currentLocale = locale;
        localStorage.setItem('language', locale);
        i18n.locale=locale;
        //axios.defaults.headers.get['Accept-Language'] = "lang=" + locale
        //axios.defaults.params['lang'] = locale
        //document.querySelector('html').setAttribute('lang', locale)
        return locale
    },
    changeLocale(locale) {

        //if (!Trans.isLocaleSupported(locale)) return Promise.reject(new Error('Locale not supported'))
        //if (i18n.locale === locale) return Promise.resolve(locale)
        return Trans.loadLocaleFile(locale).then(msgs => {
            //i18n.setLocaleMessage(locale, msgs.default || msgs)
            //i18n.setLocaleMessage(locale, i18n.messages)
            return Trans.setI18nLocaleInServices(locale)
        })
    },
    loadLocaleFile(locale) {
        //console.log(import(`./../locales/${locale}.json`));
        return import(`./../locales/${locale}.json`)
    },
    isLocaleSupported(locale) {
        return Trans.supportedLocales.includes(locale)
    },
    routeMiddleware(to, from, next) {
        const locale = to.params.locale

     if(locale==='admin' || to.params.slug==='admin') {
           // console.log(to)
            return next();
        }
/*        if(typeof to.redirectedFrom!=='undefined' && to.redirectedFrom==="/profile/admin") {

            return next({
                path:"/" + i18n.locale + "/profile",
                params: {locale: i18n.locale,slug:'admin' },
                replace: true,
                query:to.query
            });
        }*/
        if(typeof to.redirectedFrom!=='undefined' && to.redirectedFrom.includes("public")) {
            return next({
                path:to.redirectedFrom.replace("/public",""),
                //params: {locale: i18n.locale },
                replace: true
            });
        }
        if(typeof to.params.locale ==='undefined') {

            i18n.locale = localStorage.getItem('language') || 'uz'

            return next({
                path:"/" + i18n.locale + to.path,
                params: {locale: i18n.locale },
                replace: true,
                query:to.query
            });
        }

        if (!Trans.isLocaleSupported(locale)) {

            return next({
                path: "/"+ Trans.getUserSupportedLocale() + to.path,
                params: {locale: Trans.getUserSupportedLocale()},
                query: to.query,
                replace: true
            });
        } else {
           // console.log('to.pat11h' + to.path)
           /// console.log('locale' + locale)
            Trans.changeLocale(locale).then(() => {
                return next();
            })
        }
/*        Trans.changeLocale(locale).then(() => {
            next()
        })*/


    },
    i18nRoute(to) {
        return {
            ...to,
            params: {
                locale: this.currentLocale,
                ...to.params
            }
        }
    }
}

export {
    Trans
}
