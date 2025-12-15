<template>
    <div class="section">
        <div class="whitebreadcrumb breadcrumb-site">
            <v-container>
                <v-breadcrumbs :items="breadcrumb_items">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-container>
        </div>

        <v-container class="faqs">
            <faq2></faq2>

        </v-container>
    </div>
</template>
<script>
import i18n from "../../i18n";
import {ValidationObserver, ValidationProvider} from "vee-validate";
import faq2 from '../../components/homepage/faq2.vue'

export default {
    name: "Faq",
    data() {
        return {
            breadcrumb_items: [
                {
                    text: i18n.t('Асосий саҳифа'),
                    to: '/',
                    disabled: false,
                    exact: true,
                },
                {
                    text: i18n.t('Хизматлар'),
                    to: '/profile',
                    disabled: true,
                    exact: true,
                },
            ],
            selectedItem: 0,
            user_image:null,
            items: [
                {text: i18n.t('Профил'), icon: 'mdi-account', link: '/profile'},
                {text: i18n.t('Менинг аризаларим'), icon: 'mdi-history', link: '/applications'},
                {text: i18n.t('Хизматлар'), icon: 'mdi-star', link: '/services'},
                {text: i18n.t('Реестрлар'), icon: 'mdi-book-open-outline', link: '/services?page=3'},
            ],

        }
    },
    created() {


    },

    methods: {

    },
        components:{
          faq2,
            ValidationProvider,
            ValidationObserver,
        },
    metaInfo() {
        return {
            title: "Savol-javoblar (FAQ) - Bojxona qo'mitasi | Customs.uz",
            meta: [
                { name: 'description', content: "Ko'p so'raladigan savollar va javoblar. Bojxona xizmatlari, to'lovlar, hujjatlar haqida ma'lumot. Frequently Asked Questions - Customs Committee." },
                { property: 'og:title', content: "FAQ - Bojxona qo'mitasi | Customs.uz" },
                { property: 'og:description', content: "Ko'p so'raladigan savollar va javoblar" }
            ]
        }
    }

}
</script>
<style>
.profile-item span:last-child{
    margin-top: 35px;
}
</style>

