/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue').default;
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

//import vuetify from './vuetify';
import VueMask from 'v-mask'

Vue.use(VueMask);

Vue.use(VueFullPage);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('top-v-menu', require('./components/layout/menu.vue').default);
Vue.component('v-header', require('./components/layout/header.vue').default);
Vue.component('v-hududiy', require('./components/layout/hududiy.vue').default);
Vue.component('index_scripts', require('./components/homepage/scripts.vue').default);
//Vue.component('news_section', require('./components/homepage/news.vue').default);
import router from './router';
import store from './store';
import i18n from './i18n'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './vuetify'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import './src/http-common'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    name: 'app',
    router,
    vuetify,
    store,
    i18n,
}).
$mount('#app');



