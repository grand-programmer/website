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
import ServicesDecisionsEdit from "./views/frontend/services/customs_value/edit";
import ServicesDecisionsInfo from "./views/frontend/services/customs_value/info";
import ServicesIntellectualCreate from "./views/frontend/services/intellectual/create";
import ServicesIntellectualEdit from "./views/frontend/services/intellectual/edit";
import ServicesIntellectualInfo from "./views/frontend/services/intellectual/info";
import ServicesTftnCreate from "./views/frontend/services/tftn/create";
import ServicesTftnEdit from "./views/frontend/services/tftn/edit";
import ServicesTftnInfo from "./views/frontend/services/tftn/info";
import ServiceVacancyList from "./views/frontend/services/vacancy/list";
import ServiceVacancyShow from "./views/frontend/services/vacancy/show";
import ServiceVacancyQuestions from "./views/frontend/services/vacancy/questions";
import ServiceVacancyDocuments from "./views/frontend/services/vacancy/documents";
import ServiceVacancyCreate from "./views/frontend/services/vacancy/create";
import ServiceVacancyResume from "./views/frontend/services/vacancy/resume";
import ServicesAppeals from "./views/frontend/services/appeal/main";
import ServicesPage from "./views/frontend/services/services";
import i18n from './i18n';
import {Trans} from './plugins/Translation'
import Yagona_oyna from "./views/frontend/services/yagona_oyna";

const routes = []
const allRoutes = {
    path: '*', redirect() {
        return '/uz';
    }
}
const userRoutes =
    {
        path: '/:locale?',
        component: {
            template: "<router-view></router-view>"
        },
        beforeEnter: Trans.routeMiddleware,/*(to, from, next) => {
        const locale = to.params.locale;
        const supported_locales = "en,ru,uz,oz".split(',')

        if (!supported_locales.includes(locale)) return next('uz');

        if (i18n.locale !== locale) {
            i18n.locale = locale;
        }
        return next();
    }*/
        children: [{

            path: '', component: Index, meta: {
                auth: undefined,
            }, children: [{
                path: "/", component: HomePage,
            },],
        },
            {

                path: '/', component: OnePage, children: [
                    {
                        path: "singlewindow/", component: Yagona_oyna, children: [{
                            path: "", component: Yagona_oyna,
                        }, {
                            path: "appeals/",
                            component: () => import('./views/frontend/services/appeal/index'),
                            children: [{
                                path: "", component: ServicesAppeals, query: {appeal_code: ''}
                            }, {
                                path: "create", component: ServicesAppealsCreate,
                            }, {
                                path: ":id", component: () => import('./views/frontend/services/appeal/info_view'),
                            }, {
                                path: ":id/:key", component: () => import('./views/frontend/services/appeal/info_view'),
                            }]
                        }, {
                            path: "decisions/",
                            component: () => import('./views/frontend/services/customs_value/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [{
                                path: "", component: ServicesDecisionsCreate,
                            }, {
                                path: "info", component: ServicesDecisionsInfo,
                            }, {
                                path: "edit/:id", component: ServicesDecisionsEdit,
                            }, {
                                path: ":id", component: ServicesDecisionsInfo,
                            }]
                        }, {
                            path: "intellectual/",
                            component: () => import('./views/frontend/services/intellectual/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [
                                {
                                    path: "", component: ServicesIntellectualCreate,
                                }, {
                                    path: ":id", component: ServicesIntellectualInfo,
                                }, {
                                    path: "info", component: ServicesIntellectualInfo,
                                }/*, {
                                path: "edit/:id", component: ServicesIntellectualEdit,
                            }*/
                            ]
                        }, {
                            path: "refund/",
                            component: () => import('./views/frontend/services/refund/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [
                                {
                                    path: "", component: () => import('./views/frontend/services/refund/create'),
                                }, {
                                    path: ":id", component: () => import('./views/frontend/services/refund/info'),
                                },
                            ]
                        }, {
                            path: "ppay/",
                            component: () => import('./views/frontend/services/ppay/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [
                                {
                                    path: "", component: () => import('./views/frontend/services/ppay/create'),
                                }, {
                                    path: ":id", component: () => import('./views/frontend/services/ppay/info'),
                                },
                            ]
                        }, {
                            path: "recycle/",
                            component: () => import('./views/frontend/services/recycle/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [{
                                path: "", component: () => import('./views/frontend/services/recycle/create'),
                            }, {
                                path: ":id", component: () => import('./views/frontend/services/recycle/info'),
                            }]
                        }, {
                            path: "tftn/", component: () => import('./views/frontend/services/tftn/index'), meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            }, children: [{
                                path: "", component: ServicesTftnCreate,
                            }, {
                                path: "info", component: ServicesTftnInfo,
                            }, {
                                path: "edit/:id", component: ServicesTftnEdit,
                            }, {
                                path: ":id", component: ServicesTftnInfo,
                            }]
                        }, {
                            path: "vacancy/",
                            component: () => import('./views/frontend/services/vacancy/index'),
                            children: [{
                                path: "", component: ServiceVacancyList,
                            },

                                {
                                    path: "create", component: ServiceVacancyCreate,
                                }, {
                                    path: "questions", component: ServiceVacancyQuestions,
                                }, {
                                    path: "documents", component: ServiceVacancyDocuments,
                                }, {
                                    path: ":id", component: ServiceVacancyShow,

                                }, {
                                    path: ":id/resume", component: ServiceVacancyResume,
                                }, {
                                    path: "*", redirect: "/services/vacancy"
                                }]
                        },]
                    },

                    {
                        path: "services/", component: Services, children: [{
                            path: "", component: ServicesPage,
                        }, {
                            path: "appeals/",
                            component: () => import('./views/frontend/services/appeal/index'),
                            children: [{
                                path: "", component: ServicesAppeals, query: {appeal_code: ''}
                            }, {
                                path: "create", component: ServicesAppealsCreate,
                            }, {
                                path: ":id", component: () => import('./views/frontend/services/appeal/info_view'),
                            }, {
                                path: ":id/:key", component: () => import('./views/frontend/services/appeal/info_view'),
                            }]
                        }, {
                            path: "decisions/",
                            component: () => import('./views/frontend/services/customs_value/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [{
                                path: "", component: ServicesDecisionsCreate,
                            }, {
                                path: "info", component: ServicesDecisionsInfo,
                            }, {
                                path: "edit/:id", component: ServicesDecisionsEdit,
                            }, {
                                path: ":id", component: ServicesDecisionsInfo,
                            }]
                        }, {
                            path: "intellectual/",
                            component: () => import('./views/frontend/services/intellectual/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [
                                {
                                    path: "", component: ServicesIntellectualCreate,
                                }, {
                                    path: ":id", component: ServicesIntellectualInfo,
                                }, {
                                    path: "info", component: ServicesIntellectualInfo,
                                }/*, {
                                path: "edit/:id", component: ServicesIntellectualEdit,
                            }*/
                            ]
                        }, {
                            path: "refund/",
                            component: () => import('./views/frontend/services/refund/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [
                                {
                                    path: "", component: () => import('./views/frontend/services/refund/create'),
                                }, {
                                    path: ":id", component: () => import('./views/frontend/services/refund/info'),
                                }, 
                            ]
                        },{
                            path: "ppay/",
                            component: () => import('./views/frontend/services/ppay/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [
                                {
                                    path: "", component: () => import('./views/frontend/services/ppay/create'),
                                }, {
                                    path: ":id", component: () => import('./views/frontend/services/ppay/info'),
                                },
                            ]
                        }, {
                            path: "recycle/",
                            component: () => import('./views/frontend/services/recycle/index'),
                            meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            },
                            children: [{
                                path: "", component: () => import('./views/frontend/services/recycle/create'),
                            }, {
                                path: ":id", component: () => import('./views/frontend/services/recycle/info'),
                            }]
                        }, {
                            path: "tftn/", component: () => import('./views/frontend/services/tftn/index'), meta: {
                                auth: true,
                                authRedirect: '/login',
                                notFoundRedirect: '/403',
                                forbiddenRedirect: '/403',
                                routeAuth: '/login'
                            }, children: [{
                                path: "", component: ServicesTftnCreate,
                            }, {
                                path: "info", component: ServicesTftnInfo,
                            }, {
                                path: "edit/:id", component: ServicesTftnEdit,
                            }, {
                                path: ":id", component: ServicesTftnInfo,
                            }]
                        }, {
                            path: "vacancy/",
                            component: () => import('./views/frontend/services/vacancy/index'),
                            children: [{
                                path: "", component: ServiceVacancyList,
                            },

                                {
                                    path: "create", component: ServiceVacancyCreate,
                                }, {
                                    path: "questions", component: ServiceVacancyQuestions,
                                }, {
                                    path: "documents", component: ServiceVacancyDocuments,
                                }, {
                                    path: ":id", component: ServiceVacancyShow,

                                }, {
                                    path: ":id/resume", component: ServiceVacancyResume,
                                }, {
                                    path: "*", redirect: "/services/vacancy"
                                }]
                        },]
                    },
                    {
                        name: '403', path: '403', component: () => import('./views/pages/403')
                    },
                    {
                        name: '404', path: '404', component: () => import('./views/pages/404')
                    },
                    {
                        name: 'test', path: 'test', component: () => import('./views/frontend/test')
                    },
                    {
                        path: 'applications', component: Applications, meta: {
                            auth: true,
                            authRedirect: '/login',
                            notFoundRedirect: '/403',
                            forbiddenRedirect: '/403',
                            routeAuth: '/login'
                        }, children: [{
                            path: '', component: MyApplicationsList
                        }]

                    }, {
                        path: "registries/", component: {
                            template: '<router-view></router-view>', script: ' export default {}'
                        }, children: [
                            {path: "decisions", component: () => import("./views/frontend/registries/customvalue")},
                            {path: "services", component: () => import("./views/frontend/registries/old_services")}
                        ]

                    }, {
                        path: 'category/:slug', component: () => import('./views/frontend/news/category')
                    }, {
                        path: 'news', component: () => import('./views/frontend/news/index')
                    }, {
                        path: 'news/:slug', component: () => import('./views/frontend/news/news')
                    }, {
                        path: 'page/',
                        component: {template: '<router-view></router-view>', script: ' export default {}'},
                        children: [
                            {path: 'votes/', component: () => import("./views/frontend/pages/votes")},
                            {path: 'rahbariyat', component: () => import("./views/frontend/pages/rahbariyat")},
                            {path: 'markaziy', component: () => import("./views/frontend/pages/markaziy")},
                            {path: 'structure', component: () => import("./views/frontend/pages/structure/markaziy")},
                            {path: 'jismoniy', component: () => import("./views/frontend/pages/jismoniy")},
                            {path: 'boshqarma/:id', component: () => import("./views/frontend/pages/org")},
                            {path: ':id', component: () => import('./views/frontend/pages/index'),}
                        ]
                    },
                    {
                        name: 'login',
                        path: 'login', //beforeEnter () { window.location.replace('https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/profile&scope=customs_uz&state=testState') },
                        component: () => import('./views/pages/Login'), /*                    redirect: href => {
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
                        name: 'social-login', path: '/social-login', beforeEnter() {
                            //window.location.replace('https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/profile&scope=customs_uz&state=testState')
                        }, //component: () => import('./views/pages/SocialLogin'),
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
                        path: 'logout', //beforeEnter () { window.location.replace('https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=customs_uz&redirect_uri=https://new.customs.uz/profile&scope=customs_uz&state=testState') },
                        component: () => import('./views/pages/Login'), /*                    redirect: href => {
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
                    }, /*                {
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
                        path: 'profile',
                        component: () => import('./views/pages/Profile'),
                        children: [{
                            name: 'Profilea', path: '/:slug', component: () => import('./views/pages/Profile'),
                        }]
                        /*                    meta: {
                                                auth: true,

                                            }*/
                    },


                ],
            },

        ]
    };

let adminRoute = {
    path: '/admin/', component: () => import('./views/dashboard/Index'), meta: {
        //auth:true
        auth: {roles: 2, redirect: {name: 'login', query: {request: '/admin'}}, forbiddenRedirect: '/403'}
    }, children: [// Dashboard
        {
            name: 'Dashboard', path: '', component: () => import('./views/dashboard/Dashboard'),
        }, // services
        {
            name: 'Мурожаатлар', path: 'services/appeals', component: () => import('./views/dashboard/services/Appeal'),
        }, // Pages
        {
            name: 'Сахифалар', path: 'pages/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Сахифалар", path: '', component: () => import('./views/dashboard/pages/index'),

            }, {
                name: "Сахифа яратиш", path: 'create', component: () => import('./views/dashboard/pages/create'),

            }, {
                name: "Сахифани тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/pages/edit'),

            }]

        }, // News
        {
            name: 'Янгиликлар', path: 'news/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Янгиликлар", path: '', component: () => import('./views/dashboard/news/index'),

            }, {
                name: "Янгилик яратиш", path: 'create', component: () => import('./views/dashboard/news/create'),

            }, {
                name: "Янгиликни тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/news/edit'),

            },

            ]

        }, // Categories
        {
            name: 'Категориялар', path: 'categories/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Категориялар", path: '', component: () => import('./views/dashboard/news/categories/index'),

            }, {
                name: "Категория яратиш",
                path: 'create',
                component: () => import('./views/dashboard/news/categories/create'),

            }, {
                name: "Категорияни тахрирлаш",
                path: 'edit/:id',
                component: () => import('./views/dashboard/news/categories/edit'),

            },

            ]

        },
        // Documents
        {
            name: 'Документлар', path: 'documents/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Документлар", path: '', component: () => import('./views/dashboard/documents/index'),

            }, {
                name: "Документ яратиш", path: 'create', component: () => import('./views/dashboard/documents/create'),

            }, {
                name: "Документ тахрирлаш",
                path: 'edit/:id',
                component: () => import('./views/dashboard/documents/edit'),

            },

            ]

        }, // Categories
        {
            name: 'Документ категориялар', path: 'doccategories/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Документ категориялари",
                path: '',
                component: () => import('./views/dashboard/documents/categories/index'),

            }, {
                name: "Документ категориясини яратиш",
                path: 'create',
                component: () => import('./views/dashboard/documents/categories/create'),

            }, {
                name: "Документ категориясини тахрирлаш",
                path: 'edit/:id',
                component: () => import('./views/dashboard/documents/categories/edit'),

            },

            ]

        }, // Events
        {
            name: 'Ходисалар', path: 'events/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Ходисалар", path: '', component: () => import('./views/dashboard/events/index'),

            }, {
                name: "Ходиса яратиш", path: 'create', component: () => import('./views/dashboard/events/create'),

            }, {
                name: "Ходиса тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/events/edit'),

            }, {
                name: "Ходисалар", path: 'view/:id', component: () => import('./views/dashboard/events/view'),

            },

            ]

        }, // Votes
        {
            name: 'Сўровнома', path: 'votes/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Сўровномалар", path: '', component: () => import('./views/dashboard/votes/index'),

            }, {
                name: "Сўровнома яратиш", path: 'create', component: () => import('./views/dashboard/votes/create'),

            }, {
                name: "Сўровнома тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/votes/edit'),

            }, {
                name: "Сўровнома", path: 'view/:id', component: () => import('./views/dashboard/votes/view'),

            },

            ]

        }, // Faqs
        {
            name: 'Кўп бериладиган саволлар', path: 'faqs/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Кўп бериладиган савол ва жавоблар",
                path: '',
                component: () => import('./views/dashboard/faqs/index'),
            }, {
                name: "Кўп бериладиган савол ва жавоб яратиш",
                path: 'create',
                component: () => import('./views/dashboard/faqs/create'),
            }, {
                name: "Кўп бериладиган савол ва жавоб тахрирлаш",
                path: 'edit/:id',
                component: () => import('./views/dashboard/faqs/edit'),
            }, {
                name: "Кўп бериладиган савол ва жавоблар",
                path: 'view/:id',
                component: () => import('./views/dashboard/faqs/view'),
            },

            ]

        }, // Organizations
        {
            name: 'Organisations', path: 'orgs/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Бошқармалар", path: '', component: () => import('./views/dashboard/orgs/index'),

            }, {
                name: "Бошқарма яратиш", path: 'create', component: () => import('./views/dashboard/orgs/create'),

            }, {
                name: "Бошқармани тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/orgs/edit'),

            }, {
                name: "Бошқарма", path: 'view/:id', component: () => import('./views/dashboard/orgs/view'),
            },

            ]

        },        // Organizations
        {
            name: 'Марказий аппарат', path: 'apparat/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Бошқармалар", path: '', component: () => import('./views/dashboard/apparat/index'),

            }, {
                name: "Бошқарма яратиш", path: 'create', component: () => import('./views/dashboard/apparat/create'),

            }, {
                name: "Бошқармани тахрирлаш",
                path: 'edit/:id',
                component: () => import('./views/dashboard/apparat/edit'),

            }, {
                name: "Бошқарма", path: 'view/:id', component: () => import('./views/dashboard/apparat/view'),
            },

            ]

        }, {
            name: 'Раҳбарият', path: 'rahbariyat/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Рахбарият", path: '', component: () => import('./views/dashboard/rahbariyat/index'),

            }, {
                name: "Рахбарият яратиш",
                path: 'create',
                component: () => import('./views/dashboard/rahbariyat/create'),

            }, {
                name: "Тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/rahbariyat/edit'),

            }, {
                name: "Рахбарият", path: 'view/:id', component: () => import('./views/dashboard/rahbariyat/view'),
            },

            ]

        }, // Menus
        {
            name: 'Менюлар', path: 'menu/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Менюлар", path: '', component: () => import('./views/dashboard/menus/index'),

            }, {
                name: "Меню яратиш", path: 'create', component: () => import('./views/dashboard/menus/create'),

            }, {
                name: "Менюни тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/menus/edit'),

            }, {
                name: "Подменюлар", path: 'view/:id', component: () => import('./views/dashboard/menus/view'),

            },

            ]

        },// Footer Menus
        {
            name: 'Менюлар', path: 'footermenu/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Менюлар", path: '', component: () => import('./views/dashboard/footer-menus/index'),

            }, {
                name: "Меню яратиш", path: 'create', component: () => import('./views/dashboard/footer-menus/create'),

            }, {
                name: "Менюни тахрирлаш",
                path: 'edit/:id',
                component: () => import('./views/dashboard/footer-menus/edit'),

            }, {
                name: "Подменюлар", path: 'view/:id', component: () => import('./views/dashboard/footer-menus/view'),

            },

            ]

        }, {
            name: 'Notifications',
            path: 'components/notifications',
            component: () => import('./views/dashboard/component/Notifications'),
        },
    ]
};
if (location.host === '192.168.214.88') routes.push(adminRoute);
routes.push(userRoutes);
routes.push(allRoutes);
//console.log(location.host);
export default new vueRouter({
    mode: 'history', base: process.env.BASE_URL, routes: routes, scrollBehavior() {
        return {x: 0, y: 0}
    }

});



