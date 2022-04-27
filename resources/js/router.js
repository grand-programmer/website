import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/frontend/index";
import OnePage from "./views/frontend/one_page";
import HomePage from "./../js/components/index";
import Services from "./views/frontend/services";
import Applications from "./views/frontend/applications";
import MyApplicationsList from "./views/frontend/applications/list";
import ServicesAppealsCreate from "./views/frontend/services/appeal/create";
import ServicesDecisionsCreate from "./views/frontend/services/customs_value/create";
import ServiceVacancyList from "./views/frontend/services/vacancy/list";
import ServiceVacancyShow from "./views/frontend/services/vacancy/show";
import ServiceVacancyQuestions from "./views/frontend/services/vacancy/questions";
import ServiceVacancyDocuments from "./views/frontend/services/vacancy/documents";
import ServiceVacancyCreate from "./views/frontend/services/vacancy/create";
import ServiceVacancyResume from "./views/frontend/services/vacancy/resume";
import ServicesAppeals from "./views/frontend/services/appeal/main";
import ServicesPage from "./views/frontend/services/services";

const routes = [
    {
        path: '/map',
        component: () => import('./views/map/map'),
        meta: {
            //auth:true  komponentni qayerga ulagansiz deyapman
            auth: undefined
        },
    },
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
                        {
                            path: "decisions/",
                            component: () => import('./views/frontend/services/customs_value/index'),
                            children: [
                                {
                                    path: "",
                                    component: ServicesDecisionsCreate,
                                }
                            ]
                        },
                        {
                            path: "vacancy/",
                            component: () => import('./views/frontend/services/vacancy/index'),
                            children: [
                                {
                                    path: "",
                                    component: ServiceVacancyList,
                                },

                                {
                                    path: "create",
                                    component: ServiceVacancyCreate,
                                },
                                {
                                    path: ":id/resume",
                                    component: ServiceVacancyResume,

                                },
                                {
                                    path: "questions",
                                    component: ServiceVacancyQuestions,
                                },
                                {
                                    path: "documents",
                                    component: ServiceVacancyDocuments,
                                },
                                {
                                    path: ":id",
                                    component: ServiceVacancyShow,
                                },
                                {
                                    path: "*",
                                    redirect:"/services/vacancy"
                                }
                            ]
                        },
                    ]
                },
                {
                    path: 'applications',
                    component: Applications,
                    children: [
                        {
                            path: '',
                            component: MyApplicationsList
                        }
                    ]

                },

                {
                    path: 'category/:slug',
                    component: () => import('./views/frontend/news/category')
                },
                {
                    path: 'news',
                    component: () => import('./views/frontend/news/index')
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
                            path: 'votes/',
                            component: ()=>import("./views/frontend/pages/votes")
                        },
                        {
                            path: 'rahbariyat',
                            component: ()=>import("./views/frontend/pages/rahbariyat")
                        },
                        {
                            path: 'boshqarma/:id',
                            component: ()=>import("./views/frontend/pages/org")
                        },

                        {
                            path: ':id',
                            component: () => import('./views/frontend/pages/index'),

                        }
                    ]
                },
                {
                    name: 'login',
                    path: '/login',
                    //beforeEnter () { window.location.replace('https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/profile&scope=customs_uz&state=testState') },
                    component: () => import('./views/pages/Login'),
                    /*                    redirect: href => {
                                            // the function receives the target route as the argument
                                            // we return a redirect path/location here.
                                            return 'https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/services/vacancy/resume&scope=customs_uz&state=testState'
                                        },*/

                    meta: {
                        auth: false,
                        authRedirect: '/403',
                        notFoundRedirect: '/403',
                        forbiddenRedirect: '/403',
                        routeAuth: '/403'
                    }
                },
                {
                    name: 'social-login',
                    path: '/social-login',
                    beforeEnter() {
                        //window.location.replace('https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/profile&scope=customs_uz&state=testState')
                    },
                    //component: () => import('./views/pages/SocialLogin'),
                    /*                    redirect: href => {
                                            // the function receives the target route as the argument
                                            // we return a redirect path/location here.
                                            return 'https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/services/vacancy/resume&scope=customs_uz&state=testState'
                                        },*/

                    meta: {
                        auth: undefined,
                    }
                },
                {
                    name: 'logout',
                    path: '/logout',
                    //beforeEnter () { window.location.replace('https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/profile&scope=customs_uz&state=testState') },
                    component: () => import('./views/pages/Login'),
                    /*                    redirect: href => {
                                            // the function receives the target route as the argument
                                            // we return a redirect path/location here.
                                            return 'https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/services/vacancy/resume&scope=customs_uz&state=testState'
                                        },*/

                    meta: {
                        auth: true,
                        authRedirect: '/403',
                        notFoundRedirect: '/403',
                        forbiddenRedirect: '/403',
                        routeAuth: '/403'
                    }
                },
                /*                {
                                    name: 'logout',
                                    path: '/logout',
                                    beforeEnter () { this.$auth.logout({
                                        makeRequest: true,
                                        redirect: {name: 'login'},
                                    }) },
                                    //component: () => import('./views/pages/Login'),
                /!*                    redirect: href => {
                                        // the function receives the target route as the argument
                                        // we return a redirect path/location here.
                                        return 'https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/services/vacancy/resume&scope=customs_uz&state=testState'
                                    },*!/

                                    meta: {
                                        auth: true,
                                        authRedirect: '/403',
                                        notFoundRedirect: '/403',
                                        forbiddenRedirect: '/403',
                                        routeAuth: '/403'
                                    }
                                },*/

                {
                    name: 'MyProfile',
                    path: '/profile',
                    component: () => import('./views/pages/Profile'),
                    children:[
                        {
                            name: 'Profilea',
                            path: '/profile/:slug',
                            component: () => import('./views/pages/Profile'),
                        }
                    ]
                    /*                    meta: {
                                            auth: true,

                                        }*/
                },
                {
                    name: '403',
                    path: '/403',
                    component: () => import('./views/pages/403'),
                    meta: {
                        auth: undefined,

                    }
                }, {
                name: '404',
                path: '/404',
                component: () => import('./views/pages/404'),
                meta: {
                    auth: undefined,

                }
            },


            ],
    },


];
let adminRoute = {
    path: '/admin/',
    component: () => import('./views/dashboard/Index'),
    meta: {
        //auth:true
        auth: {roles: 2, redirect: {name: 'login',query:{request:'/admin'}}, forbiddenRedirect: '/403'}
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
        // Events
        {
            name: 'Ходисалар',
            path: 'events/',
            component: {
                template: '<router-view></router-view>',
                script: ' export default {}'
            },
            children:
                [
                    {
                        name: "Ходисалар",
                        path: '',
                        component: () => import('./views/dashboard/events/index'),

                    },
                    {
                        name: "Ходиса яратиш",
                        path: 'create',
                        component: () => import('./views/dashboard/events/create'),

                    },
                    {
                        name: "Ходиса тахрирлаш",
                        path: 'edit/:id',
                        component: () => import('./views/dashboard/events/edit'),

                    },
                    {
                        name: "Ходисалар",
                        path: 'view/:id',
                        component: () => import('./views/dashboard/events/view'),

                    },

                ]

        },
        // Organizations
        {
            name: 'Organisations',
            path: 'orgs/',
            component: {
                template: '<router-view></router-view>',
                script: ' export default {}'
            },
            children:
                [
                    {
                        name: "Бошқармалар",
                        path: '',
                        component: () => import('./views/dashboard/orgs/index'),

                    },
                    {
                        name: "Бошқарма яратиш",
                        path: 'create',
                        component: () => import('./views/dashboard/orgs/create'),

                    },
                    {
                        name: "Бошқармани тахрирлаш",
                        path: 'edit/:id',
                        component: () => import('./views/dashboard/orgs/edit'),

                    },
                    {
                        name: "Бошқарма",
                        path: 'view/:id',
                        component: () => import('./views/dashboard/orgs/view'),
                    },

                ]

        },        // Organizations
        {
            name: 'Марказий аппарат',
            path: 'apparat/',
            component: {
                template: '<router-view></router-view>',
                script: ' export default {}'
            },
            children:
                [
                    {
                        name: "Бошқармалар",
                        path: '',
                        component: () => import('./views/dashboard/apparat/index'),

                    },
                    {
                        name: "Бошқарма яратиш",
                        path: 'create',
                        component: () => import('./views/dashboard/apparat/create'),

                    },
                    {
                        name: "Бошқармани тахрирлаш",
                        path: 'edit/:id',
                        component: () => import('./views/dashboard/apparat/edit'),

                    },
                    {
                        name: "Бошқарма",
                        path: 'view/:id',
                        component: () => import('./views/dashboard/apparat/view'),
                    },

                ]

        },{
            name: 'Раҳбарият',
            path: 'rahbariyat/',
            component: {
                template: '<router-view></router-view>',
                script: ' export default {}'
            },
            children:
                [
                    {
                        name: "Рахбарият",
                        path: '',
                        component: () => import('./views/dashboard/rahbariyat/index'),

                    },
                    {
                        name: "Рахбарият яратиш",
                        path: 'create',
                        component: () => import('./views/dashboard/rahbariyat/create'),

                    },
                    {
                        name: "Тахрирлаш",
                        path: 'edit/:id',
                        component: () => import('./views/dashboard/rahbariyat/edit'),

                    },
                    {
                        name: "Рахбарият",
                        path: 'view/:id',
                        component: () => import('./views/dashboard/rahbariyat/view'),
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
                        name: "Менюни тахрирлаш",
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
};
if (location.host == '192.168.214.88') routes.push(adminRoute);
//console.log(location.host);
export default new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }

});



