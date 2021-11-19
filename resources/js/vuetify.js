import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import '../sass/overrides.sass'
import i18n from './i18n'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify)


export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#39ae69',
                secondary: '#696969',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
})
