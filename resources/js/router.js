import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/frontend/index";
import Page from "./views/frontend/pages/index";
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
    path: '/any', redirect() {
        return '/oz';
    }
}
const servicesRoutes = [
    {
        path: "",
        component: () => import('./views/frontend/services/yagona_oyna'),
        meta: { title: "Onlayn xizmatlar - Bojxona qo'mitasi | Customs.uz" }
    }, {
        path: "appeals/",
        component: () => import('./views/frontend/services/appeal/index'),
        meta: { title: "Murojaatlar - Onlayn xizmatlar | Customs.uz" },
        children: [{
            path: "",
            component: () => import('./views/frontend/services/appeal/main'),
            query: {appeal_code: ''},
            meta: { title: "Murojaatlar - Onlayn xizmatlar | Customs.uz" }
        }, {
            path: "create",
            component: () => import('./views/frontend/services/appeal/create'),
            meta: { title: "Murojaat yaratish - Onlayn xizmatlar | Customs.uz" }
        }, {
            path: ":id",
            component: () => import('./views/frontend/services/appeal/info_view'),
            meta: { title: "Murojaat ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
        }, {
            path: ":id/:key",
            component: () => import('./views/frontend/services/appeal/info_view'),
            meta: { title: "Murojaat ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
        }]
    }, {
        path: "decisions/",
        component: () => import('./views/frontend/services/customs_value/index'),
        meta: {
            auth: true,
            authRedirect: '/login',
            notFoundRedirect: '/403',
            forbiddenRedirect: '/403',
            routeAuth: '/login',
            title: "Bojxona qiymati qarorlari - Onlayn xizmatlar | Customs.uz"
        },
        children: [{
            path: "",
            component: ServicesDecisionsCreate,
            meta: { title: "Bojxona qiymati yaratish - Onlayn xizmatlar | Customs.uz" }
        }, {
            path: "info",
            component: ServicesDecisionsInfo,
            meta: { title: "Bojxona qiymati ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
        }, {
            path: "edit/:id",
            component: ServicesDecisionsEdit,
            meta: { title: "Bojxona qiymati tahrirlash - Onlayn xizmatlar | Customs.uz" }
        }, {
            path: ":id", component:
            ServicesDecisionsInfo,
            meta: { title: "Bojxona qiymati ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
        }]
    }, {
        path: "intellectual/",
        component: () => import('./views/frontend/services/intellectual/index'),
        meta: {
            auth: true,
            authRedirect: '/login',
            notFoundRedirect: '/403',
            forbiddenRedirect: '/403',
            routeAuth: '/login',
            title: "Intellektual mulk - Onlayn xizmatlar | Customs.uz"
        },
        children: [
            {
                path: "",
                component: ServicesIntellectualCreate,
                meta: { title: "Intellektual mulk yaratish - Onlayn xizmatlar | Customs.uz" }
            }, {
                path: ":id",
                component: ServicesIntellectualInfo,
                meta: { title: "Intellektual mulk ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
            }, {
                path: "info",
                component: ServicesIntellectualInfo,
                meta: { title: "Intellektual mulk ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
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
            routeAuth: '/login',
            title: "Qaytarish - Onlayn xizmatlar | Customs.uz"
        },
        children: [
            {
                path: "",
                component: () => import('./views/frontend/services/refund/create'),
                meta: { title: "Qaytarish yaratish - Onlayn xizmatlar | Customs.uz" }
            }, {
                path: ":id",
                component: () => import('./views/frontend/services/refund/info'),
                meta: { title: "Qaytarish ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
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
            routeAuth: '/login',
            title: "To'lovlar - Onlayn xizmatlar | Customs.uz"
        },
        children: [
            {
                path: "",
                component: () => import('./views/frontend/services/ppay/create'),
                meta: { title: "To'lov yaratish - Onlayn xizmatlar | Customs.uz" }
            }, {
                path: ":id",
                component: () => import('./views/frontend/services/ppay/info'),
                meta: { title: "To'lov ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
            },
        ]
    }, {
        path: "stamp/",
        component: () => import('./views/frontend/services/stamp/index'),
        meta: {
            auth: true,
            authRedirect: '/login',
            notFoundRedirect: '/403',
            forbiddenRedirect: '/403',
            routeAuth: '/login',
            title: "Markalar - Onlayn xizmatlar | Customs.uz"
        },
        children: [
            {
                path: "",
                component: () => import('./views/frontend/services/stamp/create'),
                meta: { title: "Marka yaratish - Onlayn xizmatlar | Customs.uz" }
            }, {
                path: ":id",
                component: () => import('./views/frontend/services/stamp/info'),
                meta: { title: "Marka ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
            },
        ]
    }, {
        path: "bko/",
        component: () => import('./views/frontend/services/bko/index'),
        meta: { title: "BKO - Onlayn xizmatlar | Customs.uz" },
        children: [
            {
                path: "create",
                component: () => import('./views/frontend/services/bko/create'),
                meta: {
                    auth: true,
                    authRedirect: '/login',
                    notFoundRedirect: '/403',
                    forbiddenRedirect: '/403',
                    routeAuth: '/login',
                    title: "BKO yaratish - Onlayn xizmatlar | Customs.uz"
                },
            },
            {
                path: ":id",
                component: () => import('./views/frontend/services/bko/info'),
                meta: {
                    auth: true,
                    authRedirect: '/login',
                    notFoundRedirect: '/403',
                    forbiddenRedirect: '/403',
                    routeAuth: '/login',
                    title: "BKO ma'lumotlari - Onlayn xizmatlar | Customs.uz"
                },
            },
        ]
    }, {
        path: "vio",
        component: () => import('./views/frontend/services/vio/index'),
        meta: { title: "VIO - Onlayn xizmatlar | Customs.uz" },
        children: [
            {
                path: "create",
                component: () => import('./views/frontend/services/vio/create'),
                meta: {
                    auth: true,
                    authRedirect: '/login',
                    notFoundRedirect: '/403',
                    forbiddenRedirect: '/403',
                    routeAuth: '/login',
                    title: "VIO yaratish - Onlayn xizmatlar | Customs.uz"
                },
            },
            {
                path: ":id",
                component: () => import('./views/frontend/services/vio/info'),
                meta: {
                    auth: true,
                    authRedirect: '/login',
                    notFoundRedirect: '/403',
                    forbiddenRedirect: '/403',
                    routeAuth: '/login',
                    title: "VIO ma'lumotlari - Onlayn xizmatlar | Customs.uz"
                },
            },
        ]
    }, {
        path: "spt",
        component: () => import('./views/frontend/services/spt/index'),
        meta: { title: "SPT - Onlayn xizmatlar | Customs.uz" },
        children: [
            {
                path: ":id",
                component: () => import('./views/frontend/services/spt/create'),
                meta: {
                    auth: true,
                    authRedirect: '/login',
                    notFoundRedirect: '/403',
                    forbiddenRedirect: '/403',
                    routeAuth: '/login',
                    title: "SPT yaratish - Onlayn xizmatlar | Customs.uz"
                },
            },
            {
                path: ":id/info",
                component: () => import('./views/frontend/services/spt/info'),
                meta: {
                    auth: true,
                    authRedirect: '/login',
                    notFoundRedirect: '/403',
                    forbiddenRedirect: '/403',
                    routeAuth: '/login',
                    title: "SPT ma'lumotlari - Onlayn xizmatlar | Customs.uz"
                },
            },
        ]
    },

    {
        path: "recycle/",
        component: () => import('./views/frontend/services/recycle/index'),
        meta: {
            auth: true,
            authRedirect: '/login',
            notFoundRedirect: '/403',
            forbiddenRedirect: '/403',
            routeAuth: '/login',
            title: "Utilizatsiya - Onlayn xizmatlar | Customs.uz"
        },
        children: [
            {
                path: "",
                component: () => import('./views/frontend/services/recycle/create'),
                meta: { title: "Utilizatsiya yaratish - Onlayn xizmatlar | Customs.uz" }
            },
            {
                path: "new",
                component: () => import('./views/frontend/services/recycle1/create'),
                meta: { title: "Yangi utilizatsiya - Onlayn xizmatlar | Customs.uz" }
            },
            {
                path: ":id",
                component: () => import('./views/frontend/services/recycle/info'),
                meta: { title: "Utilizatsiya ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
            },
            {
                path: "new/:id",
                component: () => import('./views/frontend/services/recycle1/info'),
                meta: { title: "Yangi utilizatsiya ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
            }
        ]
    }, {
        path: "tftn/", component: () => import('./views/frontend/services/tftn/index'), meta: {
            auth: true,
            authRedirect: '/login',
            notFoundRedirect: '/403',
            forbiddenRedirect: '/403',
            routeAuth: '/login',
            title: "TFTN - Onlayn xizmatlar | Customs.uz"
        }, children: [{
            path: "",
            component: ServicesTftnCreate,
            meta: { title: "TFTN yaratish - Onlayn xizmatlar | Customs.uz" }
        }, {
            path: "info",
            component: ServicesTftnInfo,
            meta: { title: "TFTN ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
        }, {
            path: "edit/:id",
            component: ServicesTftnEdit,
            meta: { title: "TFTN tahrirlash - Onlayn xizmatlar | Customs.uz" }
        }, {
            path: ":id",
            component: ServicesTftnInfo,
            meta: { title: "TFTN ma'lumotlari - Onlayn xizmatlar | Customs.uz" }
        }]
    }, {
        path: "stat/",
        component: () => import('./views/frontend/services/stat/index'),
        meta: {title: "Statistika - Onlayn xizmatlar | Customs.uz"},
        children: [{
            path: ":id",
            component: () => import('./views/frontend/services/stat/create'),
            meta: {
                auth: true,
                authRedirect: '/login',
                notFoundRedirect: '/403',
                forbiddenRedirect: '/403',
                routeAuth: '/login',
                title: "Statistika yaratish - Onlayn xizmatlar | Customs.uz"
            }
        },{
            path: "info/:id",
            component: () => import('./views/frontend/services/stat/info'),
            meta: {
                auth: true,
                authRedirect: '/login',
                notFoundRedirect: '/403',
                forbiddenRedirect: '/403',
                routeAuth: '/login',
                title: "Statistika ma'lumotlari - Onlayn xizmatlar | Customs.uz"
            }
        }]
        /*, {
            path: ":id", component: () => import('./views/frontend/services/stat/info'),
            meta: {
                auth: true,
                authRedirect: '/login',
                notFoundRedirect: '/403',
                forbiddenRedirect: '/403',
                routeAuth: '/login'
            }
        }*/
    }, {
        path: "vacancy/",
        component: () => import('./views/frontend/services/vacancy/index'),
        meta: { title: "Bo'sh ish o'rinlari - Bojxona qo'mitasi | Customs.uz" },
        children: [
            {
                path: "",
                component: ServiceVacancyList,
                meta: { title: "Bo'sh ish o'rinlari - Bojxona qo'mitasi | Customs.uz" }
            },
            {
                path: "create",
                component: ServiceVacancyCreate,
                meta: { title: "Ariza topshirish - Bo'sh ish o'rinlari | Customs.uz"}
            },
            {
                path: "questions",
                component: ServiceVacancyQuestions,
                meta: { title: "Savollar - Bo'sh ish o'rinlari | Customs.uz" }
            },
            {
                path: "documents",
                component: ServiceVacancyDocuments,
                meta: { title: "Hujjatlar - Bo'sh ish o'rinlari | Customs.uz" }
            },
            {
                path: ":id",
                component: ServiceVacancyShow,
                meta: { title: "Vakansiya ma'lumotlari - Bo'sh ish o'rinlari | Customs.uz" }
            },
            {
                path: ":id/resume",
                component: ServiceVacancyResume,
                meta: { title: "Rezyume - Bo'sh ish o'rinlari | Customs.uz" }
            },
            {
                path: "*", redirect: "/services/vacancy"
            }]
    },]
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

            path: '', component: () => import('./views/frontend/index'), meta: {
                auth: undefined,
            }, children: [{
                path: "/", component: () => import('./../js/components/index'),
            },],
        },
            {
                path: '/',
                component: () => import('./views/frontend/one_page'),
                children: [
                    {
                        path: "singlewindow/",
                        component: () => import('./views/frontend/services/yagona_oyna'),
                        children: servicesRoutes

                    },
                    {
                        path: "services/",
                        component: Services,
                        meta: { title: "Onlayn xizmatlar - Bojxona qo'mitasi | Customs.uz" },
                        children: servicesRoutes
                    },
                    {
                        name: '403',
                        path: '403',
                        component: () => import('./views/pages/403'),
                        meta: { title: "Kirish taqiqlangan - 403 | Customs.uz" }
                    },
                    {
                        name: '404',
                        path: '404',
                        component: () => import('./views/pages/404'),
                        meta: { title: "Sahifa topilmadi - 404 | Customs.uz" }
                    },
                    {
                        name: 'test',
                        path: 'test',
                        component: () => import('./views/frontend/test')
                    },
                    {
                        path: 'applications',
                        component: () => import('./views/frontend/applications'),
                        meta: {
                            auth: true,
                            authRedirect: '/login',
                            notFoundRedirect: '/403',
                            forbiddenRedirect: '/403',
                            routeAuth: '/login',
                            title: "Mening arizalarim - Bojxona qo'mitasi | Customs.uz"
                        },
                        children: [{
                            path: '',
                            component: () => import('./views/frontend/applications/list')
                        }]
                    },
                    {
                        path: "registries/",
                        component: {
                            template: '<router-view></router-view>',
                            script: ' export default {}'
                        },
                        meta: { title: "Reestrlar - Bojxona qo'mitasi | Customs.uz" },
                        children: [
                            {
                                path: "decisions",
                                component: () => import("./views/frontend/registries/customvalue"),
                                meta: { title: "Bojxona qiymati qarorlari - Reestrlar | Customs.uz" }
                            },
                            {
                                path: "services",
                                component: () => import("./views/frontend/registries/old_services"),
                                meta: { title: "Xizmatlar - Reestrlar | Customs.uz" }
                            }
                        ]
                    },
                    {
                        path: 'category/:slug',
                        component: () => import('./views/frontend/news/category'),
                        meta: { title: "Turkum - Yangiliklar | Customs.uz" }
                    },
                    {
                        path: 'news',
                        component: () => import('./views/frontend/news/index'),
                        meta: { title: 'Yangiliklar - Bojxona qo\'mitasi | Customs.uz' }
                    },
                    {
                        path: 'news/:slug',
                        component: () => import('./views/frontend/news/news'),
                        meta: { title: 'Yangiliklar - Bojxona qo\'mitasi | Customs.uz' }
                    },
                    {
                        path: 'page',
                        name: 'Sahifalar',
                        component: {template: '<router-view></router-view>'},
                        children: [
                            {
                                path: 'search',name:'Qidirish',
                                component: () => import("./views/frontend/pages/search"),
                                meta:{title:"Qidiruv - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: 'faqs',name:'Faqs',
                                component: () => import("./views/pages/Faq"),
                                meta:{
                                    auth:undefined,
                                    title:"Savol-javoblar (FAQ) - Bojxona qo'mitasi | Customs.uz"
                                }
                            },
                            {
                                path: 'hududiy',
                                name:'Hududiy',
                                component: () => import("./components/layout/hududiy"),
                                meta:{title:"Hududiy bo'linmalar - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: 'votes/',
                                name:'Votes',
                                component: () => import("./views/frontend/pages/votes"),
                                meta:{title:"So'rovnomalar - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: 'opendata/',
                                name:'openData',
                                component: () => import("./views/frontend/pages/opendata"),
                                meta:{title:"Ochiq ma'lumotlar - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: 'rahbariyat/',
                                component: {template: '<router-view></router-view>', script: ' export default {}'},
                                meta: {title:"Rahbariyat - Bojxona qo'mitasi | Customs.uz"},
                                children: [
                                    {path: '', component: () => import("./views/frontend/pages/rahbariyat/rahbariyat"), meta:{title:"Rahbariyat - Bojxona qo'mitasi | Customs.uz"}},
                                    {
                                        path: 'institut/',
                                        name:'Institut',
                                        component: () => import("./views/frontend/pages/rahbariyat/institut"),
                                        meta:{title:"Institut - Rahbariyat | Customs.uz"}
                                    },
                                ]
                            },
                            {
                                path: 'markaziy',
                                component: {template: '<router-view></router-view>', script: ' export default {}'},
                                meta:{title:"Markaziy apparat - Bojxona qo'mitasi | Customs.uz"},
                                children: [
                                    {path: '', component: () => import("./views/frontend/pages/markaziy/markaziy"), meta:{title:"Markaziy apparat - Bojxona qo'mitasi | Customs.uz"}},
                                    {
                                        path: 'institut',
                                        name:'MarkaziyInstitut',
                                        component: () => import("./views/frontend/pages/markaziy/institut"),
                                        meta:{title:"Institut - Markaziy apparat | Customs.uz"}
                                    },
                                ]
                            },
                            {path: 'documents', component: () => import("./views/frontend/pages/documents/index"), meta:{title:"Hujjatlar - Bojxona qo'mitasi | Customs.uz"}},
                            {path: 'structure', component: () => import("./views/frontend/pages/structure/markaziy"), meta:{title:"Tuzilma - Bojxona qo'mitasi | Customs.uz"}},
                            {
                                path: 'structure/tashkiliy',
                                component: () => import("./views/frontend/pages/structure/tashkiliy"),
                                meta:{title:"Tashkiliy tuzilma - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: 'structure/institute',
                                component: () => import("./views/frontend/pages/structure/institut"),
                                meta:{title:"Institut - Tuzilma | Customs.uz"}
                            },
                            {
                                path: 'structure/hududiy',
                                component: () => import("./views/frontend/pages/structure/hududiy"),
                                meta:{title:"Hududiy tuzilma - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: 'structure/kinologiya',
                                component: () => import("./views/frontend/pages/structure/kinologiya"),
                                meta:{title:"Kinologiya - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: 'structure/labor',
                                component: () => import("./views/frontend/pages/structure/labor"),
                                meta:{title:"Laboratoriya - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: 'jismoniy',
                                component: () => import("./views/frontend/pages/jismoniy"),
                                meta:{title:"Jismoniy shaxslar - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: 'boshqarma/:id',
                                component: () => import("./views/frontend/pages/org"),
                                meta:{title:"Boshqarma - Bojxona qo'mitasi | Customs.uz"}
                            },
                            {
                                path: ':id',
                                component: Page,
                                meta:{title:"Sahifa - Bojxona qo'mitasi | Customs.uz"}
                            }
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
                            routeAuth: '/403',
                            title: "Kirish - Bojxona qo'mitasi | Customs.uz"
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
                            title: "Kirish - Bojxona qo'mitasi | Customs.uz"
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
                            routeAuth: '/403',
                            title: "Chiqish - Bojxona qo'mitasi | Customs.uz"
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
        auth: {roles: [4, 3, 2], redirect: {name: 'login', query: {request: '/admin'}}, forbiddenRedirect: '/403'}
    }, children: [// Dashboard
        {
            name: 'Dashboard', path: '', component: () => import('./views/dashboard/Dashboard'),
        }, // services
        {
            name: 'Мурожаатлар', path: 'services/appeals', component: () => import('./views/dashboard/services/Appeal'),
        }, // Pages
        {
            path: 'pages', component: { template: '<router-view></router-view>' },
            children: [{
                name: "Сахифалар рўйхати", path: '', component: () => import('./views/dashboard/pages/index'),

            }, {
                name: "Сахифа яратиш", path: 'create', component: () => import('./views/dashboard/pages/create'),

            }, {
                name: "Сахифани тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/pages/edit'),

            }]

        },// Files
        {
            path: 'files/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Файллар рўйхати", path: '', component: () => import('./views/dashboard/files/index'),

            }, {
                name: "Файл яратиш", path: 'create', component: () => import('./views/dashboard/files/create'),

            }, {
                name: "Файлни тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/files/edit'),

            }]

        }, // News
        {
            path: 'news/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Янгиликлар рўйхати", path: '', component: () => import('./views/dashboard/news/index'),

            }, {
                name: "Янгилик яратиш", path: 'create', component: () => import('./views/dashboard/news/create'),

            }, {
                name: "Янгиликни тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/news/edit'),

            },

            ]

        }, // Categories
        {
            path: 'categories/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Категориялар рўйхати", path: '', component: () => import('./views/dashboard/news/categories/index'),

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
            path: 'documents/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Документлар рўйхати", path: '', component: () => import('./views/dashboard/documents/index'),

            }, {
                name: "Документ яратиш", path: 'create', component: () => import('./views/dashboard/documents/create'),

            }, {
                name: "Документ тахрирлаш",
                path: 'edit/:id',
                component: () => import('./views/dashboard/documents/edit'),

            },

            ]

        },
        // Translates
        {
           path: 'translate/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Таржималар рўйхати", path: '', component: () => import('./views/dashboard/translate/index'),

            },

            ]

        },
        // Categories
        {
            path: 'doccategories/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Документ категориялари рўйхати",
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
            path: 'events/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Ходисалар рўйхати", path: '', component: () => import('./views/dashboard/events/index'),

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
           path: 'votes/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Сўровномалар рўйхати", path: '', component: () => import('./views/dashboard/votes/index'),

            }, {
                name: "Сўровнома яратиш", path: 'create', component: () => import('./views/dashboard/votes/create'),

            }, {
                name: "Сўровнома тахрирлаш", path: 'edit/:id', component: () => import('./views/dashboard/votes/edit'),

            }, {
                name: "Сўровнома", path: 'view/:id', component: () => import('./views/dashboard/votes/view'),

            },

            ]

        },// Opendatas
        {
            path: 'opendatas/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Очиқ маълумотлар рўйхати", path: '', component: () => import('./views/dashboard/opendatas/index'),

            }, {
                name: "Очиқ маълумот яратиш",
                path: 'create',
                component: () => import('./views/dashboard/opendatas/create'),

            }, {
                name: "Очиқ маълумот тахрирлаш",
                path: 'edit/:id',
                component: () => import('./views/dashboard/opendatas/edit'),

            }, {
                name: "Очиқ маълумот", path: 'view/:id', component: () => import('./views/dashboard/opendatas/view'),

            },

            ]

        },
        // Opendata files
        {
            path: 'opendata/:opendata/files', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Очиқ маълумот файллари рўйхати",
                path: '',
                component: () => import('./views/dashboard/opendatafiles/index'),

            }, {
                name: "Очиқ маълумот файлларини яратиш",
                path: 'create',
                component: () => import('./views/dashboard/opendatafiles/create'),

            }, {
                name: "Очиқ маълумот файлларини тахрирлаш",
                path: 'edit/:id',
                component: () => import('./views/dashboard/opendatafiles/edit'),

            }, {
                name: "Очиқ маълумот файлларини",
                path: 'view/:id',
                component: () => import('./views/dashboard/opendatafiles/view'),

            },

            ]

        },
        // Faqs
        {
            path: 'faqs/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Кўп бериладиган савол ва жавоблар рўйхати",
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
            path: 'orgs/', component: {
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
            path: 'apparat/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Бошқармалар рўйхати", path: '', component: () => import('./views/dashboard/apparat/index'),

            }, {
                name: "Бошқарма яратиш марказий", path: 'create', component: () => import('./views/dashboard/apparat/create'),

            }, {
                name: "Бошқармани тахрирлаш марказий",
                path: 'edit/:id',
                component: () => import('./views/dashboard/apparat/edit'),

            }, {
                name: "Бошқарма марказий", path: 'view/:id', component: () => import('./views/dashboard/apparat/view'),
            },

            ]

        }, {
           path: 'apporg/:org/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Бошқармалар худуд", path: '', component: () => import('./views/dashboard/apparat/index'),

            }, {
                name: "Бошқарма яратиш худуд", path: 'create', component: () => import('./views/dashboard/apparat/create'),

            }, {
                name: "Бошқармани тахрирлаш худуд",
                path: 'edit/:id',
                component: () => import('./views/dashboard/apparat/edit'),

            }, {
                name: "Бошқарма худуд", path: 'view/:id', component: () => import('./views/dashboard/apparat/view'),
            },

            ]

        },
        {
            path: 'rahbariyat/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Рахбарият рўйхати", path: '', component: () => import('./views/dashboard/rahbariyat/index'),

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

        },
        {
            path: 'rahbarorg/:org/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Рахбарият рўйхати худуд", path: '', component: () => import('./views/dashboard/rahbariyat/index'),

            }, {
                name: "Рахбарият яратиш худуд",
                path: 'create',
                component: () => import('./views/dashboard/rahbariyat/create'),

            }, {
                name: "Тахрирлаш худуд", path: 'edit/:id', component: () => import('./views/dashboard/rahbariyat/edit'),

            }, {
                name: "Рахбарият худуд", path: 'view/:id', component: () => import('./views/dashboard/rahbariyat/view'),
            },

            ]

        },
        // Menus
        {
            path: 'menu/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Менюлар рўйхати", path: '', component: () => import('./views/dashboard/menus/index'),

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
            path: 'footermenu/', component: {
                template: '<router-view></router-view>', script: ' export default {}'
            }, children: [{
                name: "Менюлар вниз рўйхати", path: '', component: () => import('./views/dashboard/footer-menus/index'),

            }, {
                name: "Меню яратиш вниз", path: 'create', component: () => import('./views/dashboard/footer-menus/create'),

            }, {
                name: "Менюни тахрирлаш вниз",
                path: 'edit/:id',
                component: () => import('./views/dashboard/footer-menus/edit'),

            }, {
                name: "Подменюлар вниз", path: 'view/:id', component: () => import('./views/dashboard/footer-menus/view'),

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

const router = new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

// Dynamic Title Update (SEO optimization)
router.beforeEach((to, from, next) => {
    // Default title
    const defaultTitle = "Bojxona qo'mitasi rasmiy veb sayti - Customs.uz";

    // Get title from route meta or use default
    const pageTitle = to.meta.title || defaultTitle;

    // Update document title
    document.title = pageTitle;

    next();
});

export default router;
