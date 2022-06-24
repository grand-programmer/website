/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
/*global.axios = require('axios');
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}
else {
    console.log('token not found!');
}*/


require('./bootstrap');
import 'es6-promise/auto'
import axios from 'axios'
import Vue from 'vue'
//import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage);
import VueRouter from 'vue-router'
//import Index from './Index'
import authConfig from './auth'
import router from './router'

window.Vue = require('vue').default;
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true


//import vuetify from './vuetify';
import VueMask from 'v-mask'

Vue.use(VueMask);


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
import store from './store';
import i18n from './i18n'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './vuetify'

Vue.router = router
Vue.use(VueRouter)

//axios
/*import axios from 'axios'
import VueAxios from 'vue-axios'*/

Vue.use(VueAxios, axios)
/*axios.defaults.baseURL = '/api/v1'*/

import auth from '@websanova/vue-auth/dist/v2/vue-auth.esm.js';


//Vue.use(auth, authConfig);

import driverAuthBearer from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
import driverOAuth2Google from '@websanova/vue-auth/dist/drivers/oauth2/google.esm.js';
import driverOAuth2Facebook from '@websanova/vue-auth/dist/drivers/oauth2/facebook.esm.js';

driverOAuth2Google.params.client_id = '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com';
driverOAuth2Facebook.params.client_id = '196729390739201';

Vue.use(auth, {
    plugins: {
        http: Vue.axios, // Axios
        // http: Vue.http, // Vue Resource
        router: Vue.router,
    },
    drivers: {
        auth: driverAuthBearer,
        http: driverHttpAxios,
        router: driverRouterVueRouter,
        /*        oauth2: {
                    google: driverOAuth2Google,
                    facebook: driverOAuth2Facebook,
                }*/
    },
    options: {
        rolesKey: 'role',
        tokenDefaultName: 'laravel-jwt-auth',
        tokenStore: ['localStorage'],
        loginData: {url: '/api/v1/auth/login', method: 'POST', fetchUser: true, redirect: '/admin' },
        registerData: {url: '/api/v1/auth/register', method: 'POST', fetchUser: true},
        fetchData: { url: '/api/v1/auth/user', method: 'GET',enabled: true},
        refreshData: { url: '/api/v1/auth/refresh', method: 'GET',enabled: true,interval: 30},
        logoutData: { url: 'api/v1/auth/logout', method: 'POST', redirect: '/login', makeRequest: true},
    }
});

import './src/http-common'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 *//*



import auth                  from '@websanova/vue-auth/dist/v2/vue-auth.esm.js';
import driverAuthBearer      from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios       from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
import driverOAuth2Google    from '@websanova/vue-auth/dist/drivers/oauth2/google.esm.js';
import driverOAuth2Facebook  from '@websanova/vue-auth/dist/drivers/oauth2/facebook.esm.js';
driverOAuth2Google.params.client_id = '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com';
driverOAuth2Facebook.params.client_id = '196729390739201';

Vue.use(auth, {
    plugins: {
        http: Vue.axios, // Axios
        // http: Vue.http, // Vue Resource
        router: Vue.router,
    },
    drivers: {
        auth: driverAuthBearer,
        http: driverHttpAxios,
        router: driverRouterVueRouter,
       /!* oauth2: {
            google: driverOAuth2Google,
            facebook: driverOAuth2Facebook,
        }*!/
    },
/!*    options: {
        rolesKey: 'type',
        notFoundRedirect: {name: 'user-account'},
    }*!/
});*/

/*Vue.use(require('@websanova/vue-auth/dist/v2/vue-auth.esm.js'), {
    auth: require('@websanova/vue-auth/dist/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/dist/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js'),

    /!** optional (if you want to use role)
     rolesVar: 'role',
     /!**

     /!** optional
     If you want to chage auth route manually.
     As a default vue-auth will user 'auth' prefix
     for example 'auth/login' will be for user login.

     loginData: {url: 'auth/login/user',method: 'POST', fetchUser: true},
     registerData: {url: 'auth/register/user',method: 'POST', fetchUser: true},

     *!/

});*/
/*import {createApp}           from 'vue';
import {createRouter}        from 'vue-router';
import VueAuth from '@websanova/vue-auth/dist/v2/vue-auth.esm.js';
//import {createAuth}          from '@websanova/vue-auth';
import driverAuthBearer      from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios       from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
import driverOAuth2Google    from '@websanova/vue-auth/dist/drivers/oauth2/google.esm.js';
import driverOAuth2Facebook  from '@websanova/vue-auth/dist/drivers/oauth2/facebook.esm.js';*/
//import auth from '@websanova/vue-auth/dist/v2/vue-auth.esm.js';
//import auth1 from './auth';
/*


var auth= VueAuth({
    plugins: {
        http: Vue.axios,
        router: router
    },
    drivers: {
        http: driverHttpAxios,
        auth: driverAuthBearer,
        router: driverRouterVueRouter,
/!*        oauth2: {
            google: driverOAuth2Google,
            facebook: driverOAuth2Facebook,
        }*!/
    },
    options: {
        rolesKey: 'type',
        notFoundRedirect: {name: 'user-account'},
    }
});
*/
/*
Vue.router = router
Vue.use(VueRouter)
Vue.use(VueAuth, auth)
*/

const app = new Vue({
    el: '#app',
    name: 'app',
    router,
    vuetify,
    store,
    i18n,
}).$mount('#app');
router.beforeEach((to, from, next) => {
    app.$store.commit('setLoading', true)

    // Simulate request
    setTimeout(() => {
        next();
    }, 1000)

});

router.afterEach(() => {
    app.$store.commit('setLoading', false)
});





