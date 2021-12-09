import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/frontend/index";
import OnePage from "./views/frontend/one_page";
import HomePage from "./../js/components/index";
import Services from "./views/frontend/services";
import ServicesAppealsCreate from "./views/frontend/services/appeal/create";
import ServicesAppeals from "./views/frontend/services/appeal/main";
import ServicesPage from "./views/frontend/services/services";

const routes = [
    {

        path: '',
        component: Index,
        meta: {
            auth: undefined,
        },
        children:
            [
                {
                    path: "/",
                    component: HomePage,
                },
            ],
    },
    {

        path: '/',
        component: OnePage,
        meta: {
            auth: undefined,
        },
        children:
            [
                {
                    path: "services/",
                    component: Services,
                    children: [
                        {
                            path: "",
                            component: ServicesPage,
                        },
                        {
                            path: "appeals/",
                            component: () => import('./views/frontend/services/appeal/index'),
                            children: [
                                {
                                    path: "",
                                    component: ServicesAppeals,
                                    query: {appeal_code: ''}
                                },
                                {
                                    path: "create",
                                    component: ServicesAppealsCreate,
                                }
                            ]
                        },
                    ]
                },
                {
                    path: 'category/:slug',
                    component: () => import('./views/frontend/news/category')
                },
                {
                    path: 'news/:slug',
                    component: () => import('./views/frontend/news/news')
                },
                {
                    path: 'page/',
                    component: {
                        template: '<router-view></router-view>',
                        script: ' export default {}'

                    },
                    children: [
                        {
                            path: ':id',
                            component: () => import('./views/frontend/pages/index'),

                        }
                    ]
                },
                {
                    name: 'login',
                    path: '/login',
                    component: () => import('./views/pages/Login'),
                    meta: {
                        auth: false,
                        authRedirect: '/403',
                        notFoundRedirect: '/403',
                        forbiddenRedirect: '/403',
                        routeAuth:'/403'
                    }
                },
                {
                    name: '403',
                    path: '/403',
                    component: () => import('./views/pages/403'),
                    meta: {
                        auth: undefined,

                    }
                },                {
                    name: '404',
                    path: '/404',
                    component: () => import('./views/pages/404'),
                    meta: {
                        auth: undefined,

                    }
                },



            ],
    },

    {
        path: '/admin/',
        component: () => import('./views/dashboard/Index'),
        meta: {
            //auth:true
            auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        },
        children: [
            // Dashboard
            {
                name: 'Dashboard',
                path: '',
                component: () => import('./views/dashboard/Dashboard'),
            },
            // services
            {
                name: 'Мурожаатлар',
                path: 'services/appeals',
                component: () => import('./views/dashboard/services/Appeal'),
            },
            // Pages
            {
                name: 'Сахифалар',
                path: 'pages/',
                component: {
                    template: '<router-view></router-view>',
                    script: ' export default {}'
                },
                children:
                    [
                        {
                            name: "Сахифалар",
                            path: '',
                            component: () => import('./views/dashboard/pages/index'),

                        },
                        {
                            name: "Сахифа яратиш",
                            path: 'create',
                            component: () => import('./views/dashboard/pages/create'),

                        },
                        {
                            name: "Сахифани тахрирлаш",
                            path: 'edit/:id',
                            component: () => import('./views/dashboard/pages/edit'),

                        }
                    ]

            },
            // News
            {
                name: 'Янгиликлар',
                path: 'news/',
                component: {
                    template: '<router-view></router-view>',
                    script: ' export default {}'
                },
                children:
                    [
                        {
                            name: "Янгиликлар",
                            path: '',
                            component: () => import('./views/dashboard/news/index'),

                        },
                        {
                            name: "Янгилик яратиш",
                            path: 'create',
                            component: () => import('./views/dashboard/news/create'),

                        },
                        {
                            name: "Янгиликни тахрирлаш",
                            path: 'edit/:id',
                            component: () => import('./views/dashboard/news/edit'),

                        },

                    ]

            },
            // Categories
            {
                name: 'Категориялар',
                path: 'categories/',
                component: {
                    template: '<router-view></router-view>',
                    script: ' export default {}'
                },
                children:
                    [
                        {
                            name: "Категориялар",
                            path: '',
                            component: () => import('./views/dashboard/news/categories/index'),

                        },
                        {
                            name: "Категория яратиш",
                            path: 'create',
                            component: () => import('./views/dashboard/news/categories/create'),

                        },
                        {
                            name: "Категорияни тахрирлаш",
                            path: 'edit/:id',
                            component: () => import('./views/dashboard/news/categories/edit'),

                        },

                    ]

            },
            // Menus
            {
                name: 'Менюлар',
                path: 'menu/',
                component: {
                    template: '<router-view></router-view>',
                    script: ' export default {}'
                },
                children:
                    [
                        {
                            name: "Менюлар",
                            path: '',
                            component: () => import('./views/dashboard/menus/index'),

                        },
                        {
                            name: "Меню яратиш",
                            path: 'create',
                            component: () => import('./views/dashboard/menus/create'),

                        },
                        {
                            name: "Меню тахрирлаш",
                            path: 'edit/:id',
                            component: () => import('./views/dashboard/menus/edit'),

                        },
                        {
                            name: "Подменюлар",
                            path: 'view/:id',
                            component: () => import('./views/dashboard/menus/view'),

                        },

                    ]

            },
// News
            /*            {
                            name: 'Янгиликлар',
                            path: 'news/',
                            component: () => import('./views/dashboard/News'),
                        },*/
            /*{
                name: 'User Profile',
                path: 'pages/user',
                component: () => import('./views/dashboard/pages/UserProfile'),
            },*/
            {
                name: 'Notifications',
                path: 'components/notifications',
                component: () => import('./views/dashboard/component/Notifications'),
            },

            {
                path: '*',
                redirect: '/'
            }
        ]
    },

];


export default new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});


