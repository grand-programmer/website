import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from 'vuetify/lib/locale/en'
import ru from 'vuetify/lib/locale/ru'

Vue.use(VueI18n)

const messages = {
  en: {
    ...require('./locales/en.json'),
    $vuetify: en,
      ...require('./locales/dynamic/en.json'),
  },
  ru: {
    ...require('./locales/ru.json'),
    $vuetify: ru,
      ...require('./locales/dynamic/ru.json'),
  },
  oz: {
      ...require('./locales/oz.json'),
      ...require('./locales/dynamic/oz.json'),
  },
  uz: {
    ...require('./locales/uz.json'),
    ...require('./locales/dynamic/uz.json'),
  },
}
function loadLocaleMessages () {
    //const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const locales = require.context('./locales', true, /\.json$/)
    const messages = {}
    locales.keys().forEach(key => {
        //console.log(key)
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}
//console.log(loadLocaleMessages())
export default new VueI18n({
  locale: localStorage.getItem('language') || 'oz',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'oz',
    messages: messages,
    silentTranslationWarn:true,
})
