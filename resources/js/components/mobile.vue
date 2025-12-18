<template>
    <div class="one-page">
        <loading-bar></loading-bar>

<!--        <hududiy></hududiy>-->


        <div class="section" id="section0">

            <!--==========Logo area==========-->
            <div class="top_menu_space" style=" width: 100%;">


            </div>
            <!--==========End Logo area==========-->


            <!--==========Main Slider area==========-->
            <div class="main_slider_area" style="width: 100%; padding-top: 70px">
                <router-link class="all_news" to="/singlewindow">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 490.667 490.667" style="enable-background:new 0 0 490.667 490.667;"
                         xml:space="preserve">
              <path style="fill:#009688;" d="M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333
              s245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z"/>
                        <path style="fill:#FAFAFA;" d="M290.133,104.533c-19.139-18.289-49.277-18.289-68.416,0c-18.893,18.881-18.902,49.503-0.021,68.395
              c0.007,0.007,0.014,0.014,0.021,0.021l19.2,19.2H117.333C87.878,192.149,64,216.027,64,245.483
              c0,29.455,23.878,53.333,53.333,53.333h123.584l-19.2,19.2c-17.522,20.175-15.371,50.734,4.804,68.257
              c18.259,15.858,45.423,15.799,63.612-0.139l118.251-118.251c12.492-12.496,12.492-32.752,0-45.248L290.133,104.533z"/>
            </svg>
                    <p>{{ $t("Божхона органлари ягона дарча хизматлари") }}</p>
                </router-link>
                <div class="services-opens">
                </div>
                <v-carousel cycle interval="5000" class="custom-carousel-overlay" style="height: 565px">
                    <v-carousel-item src="/img/main-slider/general_yoshlar.jpg">
                        <div class="container">
                            <div class="slider_text absolute_right">
                                <h3 class="fadeInLeft animated" style="color: white; margin-top: 100%">{{ $t("Генерал ва ёшлар учрашуви") }}</h3>
                                <h4 class="fadeInLeft animated d-none">{{ $t("Божхона ахборот тизими") }}</h4>
                                <p class="fadeInUp animated d-none">{{ $t("2024 йил 23-25 апрель, Тошкент шаҳри") }}</p>
                                <a class="fadeInUp animated mobile_carousel_button" target="_blank" style="text-align: right"
                                   href="/news/bozhhona-qomitasi-raisi-akmalhozha-mavlonovning-bozhhona-instituti-kursantlari-bilan-general-va-yoshlar-uchrashuvi-bolib-otdi">{{ $t("Батафсил") }}</a>
                            </div>
                            <div class="slider_image slider-2">
                            </div>
                        </div>
                    </v-carousel-item>
                    <v-carousel-item src="/img/main-slider/1U0A4415.jpg">
                        <div class="container">
                            <div class="slider_text absolute_right">
                                <h2 class="fadeInLeft animated" style="color: white; margin-top: 100%">{{ $t("Ватан учун, миллат учун, халқ учун!") }}</h2>
                                <h4 class="fadeInLeft animated d-none">{{ $t("Божхона ахборот тизими") }}</h4>
                                <p class="fadeInUp animated d-none">
                                    {{ $t("2024 йил 23-25 апрель, Тошкент шаҳри") }}</p>
                                <a class="s_readmore_btn fadeInUp animated mobile_carousel_button" target="_parent"
                                   href="/news/bozhhona-qomitasida-mamlakatimiz-mustaqilligining-34-yilligiga-bagishlangan-tantanali-tadbir-bolib-otdi">{{ $t("Батафсил") }}</a>
                            </div>
                            <div class="slider_image slider-2">
                            </div>
                        </div>
                    </v-carousel-item>
                    <v-carousel-item src="/img/custom/situatsion_yangi.jpg">
                        <div class="container">
                            <div class="slider_text absolute_right">
                                <h2 class="fadeInLeft animated" style="color: white; margin-top: 100%">{{ $t("Шаффофлик замирида иқтисодий хавфсизлик") }}</h2>
                                <h4 class="fadeInLeft animated d-none">{{ $t("Божхона ахборот тизими") }}</h4>
                                <p class="fadeInUp animated d-none">
                                    {{ $t("2024 йил 23-25 апрель, Тошкент шаҳри") }}</p>
                            </div>
                            <div class="slider_image slider-2">
                            </div>
                        </div>
                    </v-carousel-item>
                    <v-carousel-item src="/img/custom/logistics.jpg">
                        <div class="container">
                            <div class="slider_text absolute_right">
                                <h3 class="fadeInLeft animated" style="color: white; margin-top: 90%">E-ARXIV</h3>
                                <h4 class="fadeInLeft animated" style="color: white">{{ $t("Божхона ахборот тизими") }}</h4>
                                <p class="fadeInUp animated" style="color: white">
                                    {{ $t("Божхона ахборот тизмиларига ҳужжатларингизни жойланг") }}</p>
                                <a class="s_readmore_btn fadeInUp animated mobile_carousel_button" target="_blank"
                                   href="https://ed2.customs.uz/E_ARXIV">{{ $t("Хизматдан фойдаланиш") }}</a>
                            </div>
                            <div class="slider_image slider-2">
                            </div>
                        </div>
                    </v-carousel-item>
                    <v-carousel-item src="/img/custom/med_yangi.jpg">
                        <div class="container">
                            <div class="slider_text absolute_right">
                                <h4 class="fadeInLeft animated" style="margin-top: 100%; color: white">{{ $t("Масофавий электрон декларациялаш") }}</h4>
                                <h6 class="fadeInLeft animated" style="color: white;">{{ $t("Инсон омилисиз декларациялаш") }}</h6>
                                <a class="s_readmore_btn fadeInUp animated mobile_carousel_button" href="http://tarif.customs.uz"
                                   target="_blank">{{ $t("Хизматдан фойдаланиш") }}</a>
                            </div>
                            <div class="slider_image slider-2">
                            </div>
                        </div>
                    </v-carousel-item>
                    <v-carousel-item src="/img/custom/cyberroom.jpg">
                        <div class="container">
                            <div class="slider_text absolute_right" style="top: 350px !important;">
                                <h4 class="fadeInLeft animated" style="color: white; ">
                                    {{ $t("Ишга кириш учун онлайн ариза бериш") }} {{ $t("Божхона ахборот тизими") }}</h4>
                                <p class="fadeInUp animated" style="padding: 0 !important; color: white">{{
                                        $t("Божхона хизмати органларидаги вакансиялар рўйхатини билиб олинг ҳамда ишга кириш учун онлайн ариза юборинг")
                                    }}</p>
                                <router-link class="s_readmore_btn fadeInUp animated mobile_carousel_button" to="/services/vacancy"
                                             target="_blank">{{ $t("Хизматдан фойдаланиш") }}
                                </router-link>
                            </div>
                            <div class="slider_image slider-2">
                            </div>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </div>
            <!--==========End Main Slider area==========-->
            <component is="script" src="/js/theme.js"></component>
        </div>
        <div class="section" style="min-height: 0 !important; margin-top: -65px; background: rgb(250, 249, 249)">
            <div class="row"><h3 class="text-center section_title" style="width: 100%">{{ $t("Асосий маълумотлар") }}</h3></div>
            <div class="container-fluid">
                <div class="row" style="justify-content: center; row-gap: 35px; padding-bottom: 4em">
                    <v-carousel :show-arrows="false" class="main-info-carousel" style="height: 325px !important;">
                        <v-carousel-item>
                            <router-link to="/page/jismoniy" class="card">
                                <div class="bolim_image"><img src="/img/service/user-icon.png"/></div>
                                <div class="bolim_title">{{ $t("Жисмоний шахслар учун") }}</div>
                                <div class="bolim_description">
                                    {{ $t("Жисмоний шахслар учун керакли хизматлар ва маълумотларни билиб олинг") }}
                                </div>
                            </router-link>
                        </v-carousel-item>
                        <v-carousel-item>
                            <router-link to="/page/yuridik-shahslar-tomonidan-avtotransport-vositalarni-olib-kirish-tartibi" class="card">
                                <div class="bolim_image"><img src="/img/service/mask-group.png"/></div>
                                <div class="bolim_title">{{ $t("ТИФ иштирокчилари учун") }}</div>
                                <div class="bolim_description">
                                    {{ $t("ТИФ иштирокчилари учун керакли хизматлар ва маълумотларни билиб олинг") }}
                                </div>
                            </router-link>
                        </v-carousel-item>
                        <v-carousel-item>
                            <router-link to="/services/appeals" class="card">
                                <div class="bolim_image"><img src="/img/service/appeal.png"/></div>
                                <div class="bolim_title">{{ $t("Мурожаатлар") }}</div>
                                <div class="bolim_description">
                                    {{ $t("Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги маълумотлар") }}
                                </div>
                            </router-link>
                        </v-carousel-item>
                        <v-carousel-item>
                            <router-link to="/page/votes" class="card">
                                <div class="bolim_image"><img src="/img/service/sorovnoma.png"/></div>
                                <div class="bolim_title">{{ $t("Сўровнома") }}</div>
                                <div class="bolim_description">
                                    {{ $t("Қўмита фаолиятини баҳоланг") }}
                                </div>
                            </router-link>
                        </v-carousel-item>
                        <v-carousel-item>
                            <a :href="$t('http://tarif.customs.uz/')" target="_blank" class="card">
                                <div class="bolim_image"><img src="/img/service/time.png"/></div>
                                <div class="bolim_title">{{ $t("Тўловлар ва вақт") }}</div>
                                <div class="bolim_description">
                                    {{ $t("Товарлар учун дастлабки ҳисоб – китоблар асосида, сарфланадиган харажат ва вақт") }}
                                </div>
                            </a>
                        </v-carousel-item>
                        <v-carousel-item>
                            <a href="http://service.customs.uz/autogtd_report/index.jsp?pc=7#" target="_blank" class="card">
                                <div class="bolim_image"><img src="/img/service/yuridik.png"/></div>
                                <div class="bolim_title">{{ $t("Юридик шахслар учун") }}</div>
                                <div class="bolim_description">
                                    {{ $t("Тадбиркорларнинг экспорт ва импорт маълумотлари") }}
                                </div>
                            </a>
                        </v-carousel-item>
                        <v-carousel-item>
                            <a href="https://axborot.customs.uz/Xabar/" target="_blank" class="card">
                                <div class="bolim_image"><img src="/img/service/corruption.png"/></div>
                                <div class="bolim_title">{{ $t("Коррупция тўғрисида хабар") }}</div>
                                <div class="bolim_description">
                                    {{ $t("Коррупция тўғрисида ариза юборинг") }}
                                </div>
                            </a>
                        </v-carousel-item>
                        <v-carousel-item>
                            <a href="http://time.customs.uz/" target="_blank" class="card">
                                <div class="bolim_image"><img src="/img/service/monitor.png"/></div>
                                <div class="bolim_title">{{ $t("Мониторинг") }}</div>
                                <div class="bolim_description">
                                    {{ $t("Товар ва транспорт воситаларини чиқиш вақтини тадқиқот ва мониторинг қилиш") }}
                                </div>
                            </a>
                        </v-carousel-item>
                    </v-carousel>
                </div>
            </div>
        </div>
        <div class="section yangiliklar" id="section3" style="margin-top: -30px; min-height: 0!important;">
            <MobileNews />
        </div>

        <div class="section asosiy_korsatkichlari2" style="background: rgb(250, 249, 249); margin-top: -120px;">
            <MobileStatistics />
        </div>


        <!--==========End Our partner area==========-->
        <div class="section" style="margin-top: -100px">
            <div class="contact_faq" style="width: 100%; padding-left: 15px; padding-right: 15px; margin-top: 100px;">
                <div class="row">
                    <div class="col-md-6">
                        <MobileFaq />
                    </div>
                </div>
            </div>

        </div>
        <div class="section">
        <FrontCalendar />
        </div>


        <footer class="footer_area">
            <div class="footer_widget_area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="footer_widget_inner">
                                <div class="f_about_widget">
                                    <div class="logo"><img src="/img/gtk_image.png" alt="">{{ $t("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси") }}
                                    </div>

                                    <div class="f_navigation_widget">

<!--                                        <ul>
                                            <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Қўмита
                                                ҳақида</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Фаолият</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right"
                                                               aria-hidden="true"></i>Ҳужжатлар</a></li>
                                            <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Очиқ
                                                қўмита</a>
                                            </li>
                                            <li><a href="https://charts.customs.uz"><i class="fa fa-angle-right"
                                                                                       aria-hidden="true"></i>Статистика</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Оав учун</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Боғланиш</a>
                                            </li>
                                        </ul>-->
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="footer_widget_inner">
                                <div class="f_about_widget">
                                  <p>{{
                                      $t("Сайтдан олинган ҳар қандай маълумотлардан фойдаланганда Ўзбекистон Республикаси ДБҚ сайтидан олинганлиги кўрсатиб ўтилиши шарт.")
                                    }}</p>
                                  <p>
                                    {{ $t("ЎзМАА Интернет-ОАВ гувоҳномаси № 0902") }}
                                  </p>
                                  <p> © 2001-{{ currentYear }} {{ $t("Божхона қўмитаси") }} ({{ $t('сайт талқини') }}: 20.5)
                                  </p>


                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="footer_widget_inner">
                                <div class="f_contact_widget">
                                    <ul class="contact_lsit">
                                        <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>100003,
                                          {{ $t("Тошкент шаҳри,Ислом Каримов кўчаси 3 уй") }}</a></li>
                                        <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>(+998-55)
                                            502-76-00</a>
                                        </li>
                                        <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>info@customs.uz</a>
                                        </li>
                                    </ul>
                                    <ul class="f_widget_social">
                                        <li class="d-none"><a href="#"  target="_blank"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://t.me/customschannel"  target="_blank"><i class="fab fa-telegram-plane"></i></a></li>
                                        <li class="d-none"><a href="#"  target="_blank"><i class="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="https://www.instagram.com/bojxona.official/"  target="_blank"><i class="fab fa-instagram-square"></i></a></li>
                                        <!--                                        <li><a href="https://www.youtube.com/@BojxonaqomitasiAxborotxi-hf6od"  target="_blank"><i class="fab fa-youtube"></i></a></li>-->
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
              <p>{{ $t('Oʼzbekiston Respublikasi Milliy huquqiy internet portali') }}</p>
            </a>
            <a class="footer_link" href="//president.uz">
              <div class="image"></div>
              <p>{{ $t('O`zbekiston Respublikasi Prezidentining rasmiy veb sayti') }}</p>
            </a>

            <a class="footer_link" href="//gov.uz">
              <div class="image"></div>
              <p>{{ $t('Oʼzbekiston Respublikasi Hukumat portali') }}</p>
            </a>

            <a class="footer_link" href="//prokuratura.uz">
              <div class="image"></div>
              <p>{{ $t('Oʼzbekiston Respublikasi Bosh prokuraturasi') }}</p>
            </a>
            <a class="footer_link" href="//iiv.uz">
              <div class="image"></div>
              <p>{{ $t('Oʼzbekiston Respublikasi Ichki ishlar vazirligi') }}</p>
            </a>

            <a class="footer_link" href="//soliq.uz">
              <div class="image"></div>
              <p>{{ $t('Oʼzbekiston Respublikasi Davlat soliq qo`mitasi') }}</p>
            </a>
            <a class="footer_link" href="//my.gov.uz">
              <div class="image"></div>
              <p>{{ $t('Yagona interaktiv davlat xizmatlari portali') }}</p>
            </a>

            <a class="footer_link" href="//data.gov.uz">
              <div class="image"></div>
              <p>{{ $t('Oʼzbekiston Respublikasi Ochiq ma`lumotlar portali') }}</p>
            </a>
            <a class="footer_link" href="//bojxona-service.uz">
              <div class="image"></div>
              <p>{{ $t('Bojxona qo\'mitasi huzuridagi “Bojxona-servis” davlat muassasasi') }}</p>
            </a>

            <a class="footer_link" href="//uzbi.uz">
              <div class="image"></div>
              <p>{{ $t('Bojxona instituti') }}</p>
            </a>

          </div>
        </div>

    </div>
</template>
<script>
import index_scripts from "./homepage/scripts";


import {mapState} from 'vuex';
import loadingBar from "../components/base/loadingbar.vue";
import NewsInHome from "./homepage/news-in-homepage";
import FrontCalendar from "./homepage/calendar";
import MobileFaq from "./homepage/mobile-faq.vue";
import MobileNews from "./homepage/mobile-news.vue";
import MobileStatistics from "./homepage/mobile-statistics.vue";
export default {
    name: 'mobile',
    data() {
        return {
            stat: true,
            links: [],
            show: false,
            stat_type: 1,
            month: 0,
            months: [
                {
                    text: 'Барчаси',
                    value: 0
                }, {
                    text: 'Январ',
                    value: 1
                },
                {
                    text: 'Феврал',
                    value: 2
                },
                {
                    text: 'Март',
                    value: 3
                },
                {
                    text: 'Апрел',
                    value: 4
                },
                {
                    text: 'Май',
                    value: 5
                },
                {
                    text: 'Июн',
                    value: 6
                },
                {
                    text: 'Июл',
                    value: 7
                },
                {
                    text: 'Август',
                    value: 8
                },
                {
                    text: 'Сентябр',
                    value: 9
                },
                {
                    text: 'Октябр',
                    value: 10
                },
                {
                    text: 'Ноябр',
                    value: 11
                },
                {
                    text: 'Декабр',
                    value: 12
                }
            ],
            year: 2022,
            firstStart: 1,
            years: [
                2018, 2019, 2020, 2021, 2022
            ],
            overlay: true,
            faqs: [],
        }

    },
    components: {
        index_scripts,
        NewsInHome,
        FrontCalendar,
        loadingBar,
        MobileFaq,
        MobileNews,
        MobileStatistics
    },
    methods: {
        showProgress(show) {
            this.show = show;
        },
        start() {
            this.showProgress(true);
            this.percent = 0;

            const _loadingInterval  = setInterval(() => {
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
.v-carousel__item {
    height: 565px !important;
}
.v-window.custom-carousel-overlay .v-image__image {
    filter: brightness(0.6);
}
.mobile_carousel_button {
    background: #26a65b;
    border-radius: 3px;
    color: #fff!important;
    display: inline-block;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 35px;
    margin-right: 15px;
    margin-top: 10px;
    padding: 0 25px;
    transition: all .4s
    linear 0s;
}
.kiruvchilar li{
    display: flex;
    margin-top: 10px;
}

.kiruvchilar h3 {
    font-size: 12px;
}

.stat_btn {
    height: max-content;
    margin-top: 10px;
}

.statfilterRow {
    display: flex;
    justify-content: end;
    margin-top: 30px;
    margin-right: 15px;

    .regimeButtons {
        margin-right: 30px;
        font-weight: bold;
    }

    .date_rangers {
        display: flex;
        align-items: center;

        .begin_date {
            margin-right: 5px;
            box-shadow: 0 3px 8px 2px #C9D9E8;
            border-radius: 6px;
            padding: 5px 10px;
            background-color: #F1F5F9;
            color: #39ae69;

            i {
                border-left: 1px dashed #ccc;
                margin-left: 5px;
                padding-left: 7px;
            }
        }

        .end_date {
            box-shadow: 0 3px 8px 2px #C9D9E8;
            border-radius: 6px;
            padding: 2px 10px;
            background-color: #F1F5F9;
            color: #39ae69;
            font-size: 17px;
            margin-left: 10px;

            i {
                border-left: 1px dashed #ccc;
                margin-left: 5px;
                padding-left: 7px;
            }
        }
    }
}

.tab {
    font-size: 14px;
    color: #b0b0b0;
    cursor: pointer;
}

.tab.active {
    font-weight: bold;
    color: black;
}

.stat_ul {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    list-style-type: none;
    display: flex;
    font-size: 11px;
    padding: 0;
    border-bottom: 1px solid #39ae69;
}

.stat_ul::-webkit-scrollbar {
    height: 2px;
    display: none;
}

/*Custom carousel*/

.v-window.custom-carousel-overlay .v-image__image {
    filter: brightness(0.6);
}

.v-window.custom-carousel-overlay .v-window-item:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}

.v-window.custom-carousel-overlay .v-carousel__controls {
    background: 0;
}

/*Custom carousel end*/

/*Main info carousel*/

.v-window.main-info-carousel .v-carousel__controls {
    background: 0;
    width: 95% !important;
}

.v-window.main-info-carousel .v-window__prev {
    display: none;
}

.v-window.main-info-carousel .v-window__next {
    display: none;
}

.v-window.main-info-carousel .v-carousel__controls .v-item-group .v-btn--icon {
    color: #97A7C1;
}

.v-window.main-info-carousel .v-carousel__controls .v-item-group .v-item--active {
    color: #39ae69;
}

/*Main info carousel end*/

/*News carousel*/

.v-window.news-carousel .v-carousel__controls {
    background: 0;
}

.v-window.news-carousel .v-carousel__controls .v-item-group .v-btn--icon {
    color: #97A7C1;
}

.v-window.news-carousel .v-carousel__controls .v-item-group .v-item--active {
    color: #39ae69;
}

/*.v-window.news-carousel .v-window-item:before {
  content: "";
  position: absolute;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 42, 108, 0.2) 60.06%, #000e08 114.94%);
}*/

.v-window.news-carousel .v-window__prev {
    display: none;
}

.v-window.news-carousel .v-window__next {
    display: none;
}

/*News carousel end*/

/*Stat country carousel*/

.v-window.stat_country_carousel {
    height: 250px !important;
}

.v-window.stat_country_carousel .v-carousel__controls {
    display: none;
}

.v-window.stat_country_carousel .v-window__prev {
    background-color: white;
}

.v-window.stat_country_carousel .v-window__prev .v-btn__content {
    color: #39ae69;
}

.v-window.stat_country_carousel .v-window__next {
    background-color: white;
}

.v-window.stat_country_carousel .v-window__next .v-btn__content {
    color: #39ae69;
}

/*Stat country carousel end*/

.stat_a {
    display: block;
    color: black !important;
    text-align: center;
    padding: 16px;
    font-size: 14px;
    text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
}

@media (max-width: 590px) {
    .section .container-fluid .card {
        width: 95%;
        height: 48%;
        margin-left: 10px;
    }
}
</style>
<style scoped>
.slider_text {
    top: inherit;
    bottom: 80px;
    position: absolute;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

}
</style>
