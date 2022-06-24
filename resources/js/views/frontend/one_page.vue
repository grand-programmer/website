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
        <footer class="footer_area">
            <div class="footer_widget_area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="footer_widget_inner">
                                <div class="f_about_widget">
                                    <div class="logo"><img src="/img/gtk_image.png" alt="">Ўзбекистон
                                        Республикаси
                                        Давлат
                                        божхона қўмитаси
                                    </div>
                                    <p>Сайтдан олинган ҳар қандай
                                        маълумотлардан фойдаланганда
                                        Ўзбекистон Республикаси ДБҚ сайтидан
                                        олинганлиги кўрсатиб ўтилиши шарт.</p>
                                    <p>
                                        ЎзМАА Интернет-ОАВ гувоҳномаси № 0902
                                    </p>
                                    <p> © 2001-2022 Ўзбекистон Республикаси Давлат божхона қўмитаси.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="footer_widget_inner">
                                <div class="f_navigation_widget">
                                    <ul>
                                        <li v-for="(link,index) in menu[0]" :key="index">
                                            <router-link :to="link.url"><i class="fa fa-angle-right"
                                                                           aria-hidden="true"></i>{{ link.title }}
                                            </router-link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="footer_widget_inner">
                                <div class="f_contact_widget">
                                    <ul class="contact_lsit">
                                        <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>100003,
                                            Тошкент шаҳри,Ислом Каримов кўчаси 3 уй</a></li>
                                        <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>(+998-78)
                                            120-76-00</a>
                                        </li>
                                        <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>info@customs.uz</a>
                                        </li>
                                    </ul>
                                    <ul class="f_widget_social">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
        <div class="footer_links">
            <div class="footer_links_arrow"><i class="fas fa-chevron-down"></i></div>
            <div class="slide_links">
                <a class="footer_link" href="//huquqiyportal.uz">
                    <div class="image"></div>
                    <p>Oʼzbekiston Respublikasi Milliy huquqiy internet portali</p>
                </a>
                <a class="footer_link" href="//president.uz">
                    <div class="image"></div>
                    <p>O'zbekiston Respublikasi Prezidentining rasmiy veb sayti</p>
                </a>

                <a class="footer_link" href="//gov.uz">
                    <div class="image"></div>
                    <p>Oʼzbekiston Respublikasi Hukumat portali</p>
                </a>

                <a class="footer_link" href="//prokuratura.uz">
                    <div class="image"></div>
                    <p>Oʼzbekiston Respublikasi Bosh prokuraturasi</p>
                </a>
                <a class="footer_link" href="//iiv.uz">
                    <div class="image"></div>
                    <p>Oʼzbekiston Respublikasi Ichki ishlar vazirligi</p>
                </a>

                <a class="footer_link" href="//soliq.uz">
                    <div class="image"></div>
                    <p>Oʼzbekiston Respublikasi Davlat soliq qo'mitasi</p>
                </a>
                <a class="footer_link" href="//my.gov.uz">
                    <div class="image"></div>
                    <p>Yagona interaktiv davlat xizmatlari portali</p>
                </a>

                <a class="footer_link" href="//data.gov.uz">
                    <div class="image"></div>
                    <p>Oʼzbekiston Respublikasi Ochiq ma'lumotlar portali</p>
                </a>
                <a class="footer_link" href="//pm.gov.uz">
                    <div class="image"></div>
                    <p>Oʼzbekiston Respublikasi Prezidenti Virtual qabulxonasi</p>
                </a>

                <a class="footer_link" href="//uzbi.uz">
                    <div class="image"></div>
                    <p>Bojxona instituti</p>
                </a>

            </div>
        </div>

    </div>
</template>
<script>
let _loadingInterval = 0;
import {mapState} from 'vuex';
import loadingBar from "../../components/base/loadingbar.vue";

export default {
    name: 'Onepage',
    data() {
        return {
            links: [],
            show: false
        }

    },
    components: {
        loadingBar,
        MySnack: () => import('../../views/dashboard/component/snack'),
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
</style>
