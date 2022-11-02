<template>
    <div class="one-page">
        <v-overlay
            :opacity="1"
            color="#fff"
            :value="show" z-index="5000"
        >
            <v-progress-circular indeterminate size="200" color="#39ae69">
                <img src="/img/gtk_image.png" height="160" width="160"/>
            </v-progress-circular>
        </v-overlay>

        <v-header></v-header>
        <v-hududiy></v-hududiy>

        <router-view>

        </router-view>

        <my-footer/>
        <div class="footer_links">
            <div class="footer_links_arrow"><i class="fas fa-chevron-down"></i></div>
            <div class="slide_links">
                <a class="footer_link" href="//huquqiyportal.uz">
                    <div class="image"></div>
                    <p>{{ $t("Oʼzbekiston Respublikasi Milliy huquqiy internet portali") }}</p>
                </a>
                <a class="footer_link" href="//president.uz">
                    <div class="image"></div>
                    <p>{{ $t("O'zbekiston Respublikasi Prezidentining rasmiy veb sayti") }}</p>
                </a>

                <a class="footer_link" href="//gov.uz">
                    <div class="image"></div>
                    <p>{{ $t("Oʼzbekiston Respublikasi Hukumat portali") }}</p>
                </a>

                <a class="footer_link" href="//prokuratura.uz">
                    <div class="image"></div>
                    <p>{{ $t("Oʼzbekiston Respublikasi Bosh prokuraturasi") }}</p>
                </a>
                <a class="footer_link" href="//iiv.uz">
                    <div class="image"></div>
                    <p>{{ $t("Oʼzbekiston Respublikasi Ichki ishlar vazirligi") }}</p>
                </a>

                <a class="footer_link" href="//soliq.uz">
                    <div class="image"></div>
                    <p>{{ $t("Oʼzbekiston Respublikasi Davlat soliq qo'mitasi") }}</p>
                </a>
                <a class="footer_link" href="//my.gov.uz">
                    <div class="image"></div>
                    <p>{{ $t("Yagona interaktiv davlat xizmatlari portali") }}</p>
                </a>

                <a class="footer_link" href="//data.gov.uz">
                    <div class="image"></div>
                    <p>{{ $t("Oʼzbekiston Respublikasi Ochiq ma'lumotlar portali") }}</p>
                </a>
                <a class="footer_link" href="//pm.gov.uz">
                    <div class="image"></div>
                    <p>{{ ("Oʼzbekiston Respublikasi Prezidenti Virtual qabulxonasi") }}</p>
                </a>

                <a class="footer_link" href="//uzbi.uz">
                    <div class="image"></div>
                    <p>{{ $t("Bojxona instituti") }}</p>
                </a>

            </div>
        </div>

    </div>
</template>
<script>
import myFooter from "../../components/layout/footer";

let _loadingInterval = 0;
import {mapState} from 'vuex';
import loadingBar from "../../components/base/loadingbar.vue";
import PositionSidebar from "../../components/custom/position-sidebar";

export default {
    name: 'Onepage',
    data() {
        return {
            links: [],
            show: false
        }

    },
    components: {
        PositionSidebar,
        loadingBar,
        myFooter,
        MySnack: () => import('../../views/dashboard/component/snack'),
    },
    created() {
        this.$store.commit('setLoading', true);
        setTimeout(()=>{
            this.$store.commit('setLoading', false);
        },500)
    },
    methods: {
        showProgress(show) {
            this.show = show;
        },
        start() {
            this.showProgress(true);
            this.percent = 0;

            _loadingInterval = setInterval(() => {
                this.percent = this.percent + 1;
            }, 500)
        },
        stop() {
            clearInterval(_loadingInterval);
            this.percent = 100;

            setTimeout(() => {
                this.showProgress(false);
            }, 500);
        }
    },

    watch: {
        loading: function (val, oldVal) {
            if (val) {
                this.start();
            } else {
                this.stop();
            }
        }
    },
    computed: {
        ...mapState(['menu', 'loading'])
    },
}
</script>
<style>
html {
    overflow: visible !important;
}

.v-snack:not(.v-snack--absolute) {
    top: 100px;
}
.v-application--wrap{
    overflow: hidden;
}
</style>
