<template>
    <div>

        <v-overlay
            :opacity="1"
            color="#fff"
            :value="overlay"
        >
            <v-progress-circular indeterminate size="200" color="#39ae69">
                <img src="/img/gtk_image.png" height="160" width="160"/>
            </v-progress-circular>
        </v-overlay>
        <loading-bar></loading-bar>
        <full-page :options="options" ref="fullpage" id="fullpage" :skip-init="false" v-if="isMobile===false">
            <v-hududiy></v-hududiy>


            <div class="section" id="section0">

                <!--==========Logo area==========-->
                <div class="top_menu_space" style=" width: 100%;">


                </div>
                <!--==========End Logo area==========-->


                <!--==========Main Slider area==========-->
                <div class="main_slider_area" style="padding-top: 70px; width: 100%">

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


                        <p> {{ $t("Божхона органлари ягона дарча хизматлари") }} </p></router-link>
                    <div class="services-opens">
                        <!--                        <div>
                                                <a>Интерактив хизматлар</a>
                                                <a>Очиқ маълумотлар</a>
                                                <a>Фойдали ресурслар</a>
                                                <a>Мобил иловалар</a>
                                                </div>-->
                    </div>


                    <div class="slider_inner">

                        <div data-thumb="/img/custom/slider-9.png" data-src="/img/custom/077.jpg">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated" style="max-width: 54%; margin-left: auto;">
                                        {{ $t("Шаффофлик замирида иқтисодий хавфсизлик") }}</h3>
                                    <!-- <p class="fadeInUp animated">Божхона ахборот тизмиларига ҳужжатларингизни жойланг</p>
                                    <a class="s_readmore_btn fadeInUp animated" target="_blank"
                                       href="https://ed2.customs.uz/E_ARXIV/authentication">Хизматдан фойдаланиш</a>-->
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>
                        <v-dialog v-if="popupnews" v-model="popup" max-width="1000">
                            <v-card>
                                <v-toolbar class="text-h5 primary white--text">
                                    <v-toolbar-title>
                                        <v-icon large color="white">mdi-bell-ring</v-icon>
                                        <span class="pt-2">{{ $t('Эьлон!') }}</span></v-toolbar-title>
                                    <v-spacer/>
                                    <v-btn
                                        icon
                                        dark
                                        @click="popup = false"
                                    >
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text v-if="popupnews && typeof popupnews.description !=='undefined'"
                                             class="popup-news">
                                    <h3 class="primary-color font-weight-bold"
                                        v-if="popupnews && typeof popupnews.title !=='undefined'">{{
                                            popupnews.title
                                        }}</h3>
                                    <div class="py-10" v-html="popupnews.description"></div>
                                </v-card-text>
                            </v-card>

                        </v-dialog>

                        <div data-thumb="/img/custom/slider-9.png" data-src="/img/custom/logistics.jpg">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated">E-ARXIV</h3>
                                    <h4 class="fadeInLeft animated">{{ $t("Божхона ахборот тизими") }}</h4>
                                    <p class="fadeInUp animated">
                                        {{ $t("Божхона ахборот тизмиларига ҳужжатларингизни жойланг") }}</p>
                                    <a class="s_readmore_btn fadeInUp animated" target="_blank"
                                       href="https://ed2.customs.uz/E_ARXIV">{{ $t("Хизматдан фойдаланиш") }}</a>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>
                        <div data-thumb="/img/custom/slider-9.png" data-src="/img/custom/transit.jpg">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated">E-TRANZIT</h3>
                                    <h4 class="fadeInLeft animated">{{ $t("Божхона ахборот тизими") }}</h4>
                                    <p class="fadeInUp animated">
                                        {{ $t("Чегарадан юкларни электрон декларация қилинг") }}</p>
                                    <a class="s_readmore_btn fadeInUp animated" target="_blank"
                                       href="http://cargo.customs.uz">{{ $t("Хизматдан фойдаланиш") }}</a>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>


                        <div data-thumb="/img/custom/slider-5.jpg" data-src="/img/custom/slider-5.jpg">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated">{{ $t("Интеграциялашган таъриф") }}</h3>
                                    <h4 class="fadeInLeft animated">{{ $t("Божхона ахборот тизими") }}</h4>
                                    <p class="fadeInUp animated">{{ $t("Божхона тўловлари ҳисобини олинг") }}</p>
                                    <a class="s_readmore_btn fadeInUp animated" href="http://tarif.customs.uz"
                                       target="_blank">{{ $t("Хизматдан фойдаланиш") }}</a>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>


                        <div data-thumb="/img/main-slider/slide3.jpg" data-src="/img/main-slider/slide3.jpg">
                            <div class="container">
                                <div class="slider_text absolute_right">
                                    <h3 class="fadeInLeft animated">{{ $t("Ягона дарча") }}</h3>
                                    <h4 class="fadeInLeft animated">{{ $t("Божхона ахборот тизими") }}</h4>
                                    <p class="fadeInUp animated">
                                        {{
                                            $t("Чегарадан товарлар олиб ўтишда сертификат ва рухсатномаларни ушбу ахборот тизими ёрдамида олинг.")
                                        }}</p>
                                    <a class="s_readmore_btn fadeInUp animated" href="http://singlewindow.uz"
                                       target="_blank">{{ $t("Хизматдан фойдаланиш") }}</a>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>

                        <div data-thumb="/img/main-slider/slide4.jpg" data-src="/img/main-slider/slide4.jpg">
                            <div class="container">
                                <div class="slider_text absolute_left">
                                    <h3 class="fadeInLeft animated" style="width: 70%">
                                        {{ $t("Ишга кириш учун онлайн ариза бериш") }}</h3>
                                    <h4 class="fadeInLeft animated">{{ $t("Божхона ахборот тизими") }}</h4>
                                    <p class="fadeInUp animated">{{
                                            $t("Божхона хизмати органларидаги вакансиялар рўйхатини билиб олинг ҳамда ишга кириш учун онлайн ариза юборинг")
                                        }}</p>
                                    <router-link class="s_readmore_btn fadeInUp animated" to="/services/vacancy"
                                                 target="_blank">{{ $t("Хизматдан фойдаланиш") }}
                                    </router-link>
                                    <!--<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>-->
                                </div>
                                <div class="slider_image slider-2">

                                </div>
                            </div>
                        </div>
                        <!--                        <div data-thumb="/img/main-slider/slide2.jpg" data-src="/img/main-slider/slide2.jpg">
                                                    <div class="container">
                                                        <div class="slider_text absolute_left" style="top:315px">
                                                            <h3 class="fadeInLeft animated">Э-назорат</h3>
                                                            <h4 class="fadeInLeft animated">Божхона ахборот тизими</h4>
                                                            <p class="fadeInUp animated"></p>
                                                            <a class="s_readmore_btn fadeInUp animated" href="#">Хизматдан фойдаланиш</a>
                                                            &lt;!&ndash;<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>&ndash;&gt;
                                                        </div>
                                                        <div class="slider_image slider-2">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-thumb="/img/custom/slide-6.jpg" data-src="/img/custom/slider-6.jpg">
                                                    <div class="container">
                                                        <div class="slider_image">
                                                        </div>
                                                        <div class="slider_text absolute_right text-center">
                                                            <h3 class="fadeInLeft animated">Экспорт ва импорт</h3>
                                                            <h4 class="fadeInLeft animated">товарлар тўғрисидаги маълумотларни олиш</h4>
                                                            <p class="fadeInUp animated">Ўзбекистон Республикасидан эспорт қилинган ва импорт
                                                                қилинган
                                                                товарларнинг миқдори қиймати тўғрисида маълумотларни олинг.</p>
                                                            <a class="s_readmore_btn fadeInUp animated" href="#">Хизматдан фойдаланиш</a>
                                                            &lt;!&ndash;<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>&ndash;&gt;
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-thumb="/img/custom/dron.jpg" data-src="/img/custom/dron.jpg">
                                                    <div class="container">
                                                        <div class="slider_text">
                                                            <h3 class="fadeInLeft animated">Мурожаатлар</h3>
                                                            <h4 class="fadeInLeft animated">Фуқаролар ва ТИФ қатнашчилари мурожаатларини кўриб
                                                                чиқиш</h4>
                                                            <p class="fadeInUp animated">Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасига фуқаролар ва ТИФ қатнашчилари
                                                                томонидан <br>берилган мурожаатларни қабул қилиш, кўриб чиқиш, Рахбарият
                                                                қабуллари
                                                                тўғрисида маълумотларни шу ердан олинг </p>
                                                            <a class="s_readmore_btn fadeInUp animated" href="#">Хизматдан фойдаланиш</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-thumb="/img/custom/slider-8.jpg" data-src="/img/custom/slider-8.jpg">
                                                    <div class="container">
                                                        <div class="slider_text">
                                                            <h3 class="fadeInLeft animated">Е-Навбат</h3>
                                                            <h4 class="fadeInLeft animated">Чегарадан ўтиш учун электрон навбат олиш</h4>
                                                            <p class="fadeInUp animated">Автотранспорт воситасида чегара орқали ҳаракатланиш
                                                                учун
                                                                олдиндан навбат олиш хизматидан фойдаланинг </p>
                                                            <a class="s_readmore_btn fadeInUp animated" href="#">Хизматдан фойдаланиш</a>
                                                            &lt;!&ndash;<a class="s_contact_btn fadeInUp animated" href="#">Contact Us</a>&ndash;&gt;
                                                        </div>
                                                    </div>
                                                </div>-->

                    </div>
                </div>
                <!--==========End Main Slider area==========-->
                <component is="script" src="/js/theme.js"></component>
            </div>
            <div class="section">
                <div class="row"><h3 class="text-center section_title">{{ $t("Асосий маълумотлар") }}</h3></div>
                <div class="container-fluid">


                    <div class="row pb-8" style="margin: 24px!important; justify-content: center; row-gap: 35px;">
                        <router-link to="/page/jismoniy" class="card">
                            <div class="bolim_image"><img src="/img/service/user-icon.png"/></div>
                            <div class="bolim_title">{{ $t("Жисмоний шахслар учун") }}</div>
                            <div class="bolim_description">{{
                                    $t("Жисмоний шахслар учун керакли хизматлар ва маълумотларни билиб олинг")
                                }}
                            </div>
                        </router-link>
                        <router-link to="/page/yuridik-shahslar-tomonidan-avtotransport-vositalarni-olib-kirish-tartibi"
                                     class="card">
                            <div class="bolim_image">
                                <img src="/img/service/mask-group.png"/>
                            </div>
                            <div class="bolim_title">{{ $t("ТИФ иштирокчилари учун") }}</div>
                            <div class="bolim_description">
                                {{ $t("ТИФ иштирокчилари учун керакли хизматлар ва маълумотларни билиб олинг") }}
                            </div>
                        </router-link>
                        <router-link to="/services/appeals" class="card">
                            <div class="bolim_image"><img src="/img/service/appeal.png"/></div>
                            <div class="bolim_title">{{ $t("Мурожаатлар") }}</div>
                            <div class="bolim_description">
                                {{
                                    $t("Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги маълумотлар")
                                }}
                            </div>
                        </router-link>
                        <router-link to="/page/votes" class="card">
                            <div class="bolim_image"><img src="/img/service/sorovnoma.png"/></div>
                            <div class="bolim_title">{{ $t("Сўровнома") }}</div>
                            <div class="bolim_description">
                                {{ $t("Божхона Қўмитасининг очиқ маълумотларини кўчириб олишингиз мумкин") }}
                            </div>
                        </router-link><!--
                        <div class="card">
                            <div class="bolim_image"><img src="/img/service/opendata.png"></div>
                            <div class="bolim_title">Қизил ва яшил йўлак</div>
                            <div class="bolim_description">
                                Божхона постларида қизил ва яшил йўлаклар бўйича маълумотлар
                            </div>
                        </div>
                        <div class="card">
                            <div class="bolim_image">
                                <img src="/img/service/opendata.png">
                            </div>
                            <div class="bolim_title">Кузатув камералари</div>
                            <div class="bolim_description">Божхона қўмитаси кузатув камералари тўғрисидаги
                                маълумотлар
                            </div>
                        </div>
                        <div class="card">
                            <div class="bolim_image"><img src="/img/service/opendata.png"></div>
                            <div class="bolim_title">Коррупцияга қарши курашиш</div>
                            <div class="bolim_description">Божхона Қўмитасининг коррупцияга қарши курашиш борасидаги
                                ишлари
                            </div>
                        </div>-->
                        <a href="http://tarif.customs.uz/" target="_blank" class="card">
                            <div class="bolim_image"><img src="/img/service/time.png"/></div>
                            <div class="bolim_title">{{ $t("Тўловлар ва вақт") }}</div>
                            <div class="bolim_description">
                                {{
                                    $t("Товарлар учун дастлабки ҳисоб – китоблар асосида, сарфланадиган харажат ва вақт")
                                }}
                            </div>

                        </a>
                        <a href="http://service.customs.uz/autogtd_report/index.jsp?pc=7#" target="_blank" class="card">
                            <div class="bolim_image"><img src="/img/service/yuridik.png"/></div>
                            <div class="bolim_title">{{ $t("Юридик шахслар учун") }}</div>
                            <div class="bolim_description">{{
                                    $t("Тадбиркорларнинг экспорт ва импорт маълумотлари")
                                }}
                            </div>

                        </a>
                        <a href="https://axborot.customs.uz/Xabar/" target="_blank" class="card">
                            <div class="bolim_image"><img src="/img/service/corruption.png"/></div>
                            <div class="bolim_title">{{ $t("Коррупция тўғрисида хабар") }}</div>
                            <div class="bolim_description">{{ $t("Коррупция тўғрисида ариза юборинг") }}</div>

                        </a>
                        <a href="http://time.customs.uz/" target="_blank" class="card">
                            <div class="bolim_image"><img src="/img/service/monitor.png"/></div>
                            <div class="bolim_title">{{ $t("Мониторинг") }}</div>
                            <div class="bolim_description">
                                {{ $t("Товар ва транспорт воситаларини чиқиш вақтини тадқиқот ва мониторинг қилиш") }}
                            </div>

                        </a>
                    </div>


                </div>


            </div>

            <!--==========End Portfolio area==========-->

            <div class="section yangiliklar" id="section3">

                <news-in-home></news-in-home>
            </div>

            <div class="section asosiy_korsatkichlari2">
                <stat></stat>

            </div>

            <!--==========End Our partner area==========-->
            <div class="section">
                <div class="container-fluid contact_faq">
                    <div class="row">
                        <div class="col-md-6">
                            <homefaq2/>
                        </div>
                        <front-calendar></front-calendar>

                    </div>
                </div>
                <!--==========Footer area==========-->
                <div class="footer_link"></div>

                <myFooter/>
                <!--==========End Footer area==========-->
            </div>


        </full-page>
        <mobile v-else></mobile>


    </div>
</template>

<script>
import api from "./../src/services/apiService";
import index_scripts from '../components/homepage/scripts';
import NewsInHome from './homepage/news';
import FrontCalendar from './homepage/calendar';
import loadingBar from "../components/base/loadingbar.vue";
import mobile from "./mobile";
import stat from './homepage/statistics';
import myFooter from "../components/layout/footer";
import homefaq2 from "./homepage/faq2";
import PositionSidebar from "./custom/position-sidebar";

export default {


    name: "Index-Page",
    data() {
        return {
            stat_type: 1,
            popupnews: null,
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
            popup: false,
            year: 2022,
            firstStart: 1,
            years: [
                2018, 2019, 2020, 2021, 2022
            ],
            overlay: true,
            stat: false,
            //faqs: [],
            options: {
                lockAnchors: true,
                anchors: ['0', '1', '2', '3', '4', '5'],
                sectionsColor: ['#fff', '#faf9f9', '#fff', '#efefef', '#fff', '#fff'],
                //css3: true,
                menu: '.logo_area',
                fixedElements: 'body > .footer_links, .position-sidebar',
                lazyLoading: false,
                navigation: true,
                slideSelector: '.fslide',
                sectionSelector: '.section',
                normalScrollElements: '.select,.v-autocomplete__content, .submenu.dropdown-menu',
                scrollOverflow: false,
                scrollOverflowOptions: {
                    scrollbars: false,
                    mouseWheel: false,
                    hideScrollbars: true,
                    fadeScrollbars: true,
                    disableMouse: true,
                },
                //recordHistory:false,


                //events
                afterLoad: function (origin, destination, direction) {
                    //fullpage_api.init();

                    skipPages(origin, destination, direction);
                    $('body').on('click', 'a.logo_link', function () {
                        fullpage_api.moveTo(1);
                    })
                }
            },
            isMobile: false,

        }

    },
    mounted() {
        if (this.year == 2022) this.months.map(function (item) {
            if (item.value > 2) item.disabled = true;
            return item;
        })
        // hide the overlay when everything has loaded
        // you could choose some other event, e.g. if you're loading
        // data asynchronously, you could wait until that process returns
        setTimeout(() => {
            this.overlay = false
        }, 2500);
        if (this.$route.query.stat == 1)
            this.stat = true;
    },
    created() {
        // this.getPopupNews()
        //this.getFaqs();
        if (this.$route.query.stat == 1)
            this.stat = true;
        this.stat = true;
        if (this.mobileCheck() && this.getWidth() < 1100) {
            this.isMobile = true;
        }

        // this.clusteredColumn();
    },
    methods: {
        getPopupNews() {
            api.readOneNews('bozhhona-qomitasi-bilan-boglanish-telefoni-ozgardi').then((res) => {
                this.popupnews = res.data.data
            })
        },

        getWidth() {
            return Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.documentElement.clientWidth
            );
        },
        mobileCheck() {
            console.log()
            let check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        },
        getFaqs() {
            const _this = this;
            api.readFaqs().then(function (response) {
                if (response.status === 200) _this.faqs = response.data.data;

            });

        },


    },
    components: {
        PositionSidebar,
        homefaq2,
        index_scripts,
        NewsInHome,
        FrontCalendar,
        loadingBar,
        mobile,
        stat,
        myFooter
    }


};

function skipPages(origin, destination, direction) {
    if (destination.index == 1) {
        $('#fp-nav ul li span').css('background', '#fff');
    } else $('#fp-nav ul li span').css('background', '#000')
    if (origin.index === 0 && destination.index === 1 && pageloaded == 0) {
        fullpage_api.moveTo('2', 2);
    }
    if (origin.index === 1 && destination.index === 0 && pageloaded == 1) {
        fullpage_api.moveTo('1', 1);
    }
    if (destination.item.classList.contains('skip')) {
        if (destination.index === 0 && pageloaded == 0) {
            pageloaded = 1;
            fullpage_api.moveTo(destination.index + 1);
        }
    } else {
        if (destination.index != 0 && pageloaded == 0) {

            $('.hududiy.section').addClass('skip');
            $('.hududiy.section').css("display", "none !important;");
            fullpage_api.silentMoveTo(destination.index - 1);
            pageloaded = pageloaded + 1;
        }
    }
}

$(document).ready(function () {

    var height = $("#carouselExampleDark").outerHeight();
    var width = $("#carouselExampleDark").outerWidth() / 2;
    $(".carousel-item img").css("min-height", height + "px");
    $(".carousel-item img").css("max-width", width + "px");


    jQuery('.slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
    });

});

</script>

<style>
.v-application .popup-news p {
    font-size: 18px;
    line-height: 32px;
}

</style>
<style scoped>

.v-application {
    font-family: "Montserrat", sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
}

</style>
