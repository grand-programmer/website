<template>
    <footer class="footer_area">
        <div class="footer_widget_area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer_widget_inner">
                            <div class="f_about_widget">
                                <div class="logo"><img src="/img/gtk_image.png"
                                                       alt="">
                                    <span>{{ $t("Ўзбекистон Республикаси Давлат божхона қўмитаси") }}</span>
                                </div>
                                <p>{{
                                        $t("Сайтдан олинган ҳар қандай маълумотлардан фойдаланганда Ўзбекистон Республикаси ДБҚ сайтидан олинганлиги кўрсатиб ўтилиши шарт.")
                                    }}</p>
                                <p>
                                    {{ $t("ЎзМАА Интернет-ОАВ гувоҳномаси № 0902") }}
                                </p>
                                <p> © 2001-{{ currentYear }} {{ $t("Ўзбекистон Республикаси Давлат божхона қўмитаси") }}
                                </p>

                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="footer_widget_inner">
                            <div class="f_navigation_widget">

                                <ul v-if="footermenu">
                                    <li v-for="(link,index) in footermenu[0]" :key="index">
                                        <router-link :to="link.url"><i class="fa fa-angle-right"
                                                                       aria-hidden="true"></i>{{ link.title }}
                                        </router-link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="footer_widget_inner">
                            <div class="f_contact_widget">
                                <ul class="contact_lsit">
                                    <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>100003,
                                        {{ $t("Тошкент шаҳри,Ислом Каримов кўчаси 3 уй") }}</a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i>(+998-78)
                                        120-76-00</a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i>info@customs.uz</a>
                                    </li>
                                </ul>
                                <ul class="f_widget_social">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
                                    <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul><!--
                                <div class="counter-site mt-4">
                                <div class="mycounter1"></div>



                                </div>
                                <div>
                                  <a target="_blank" href="https://www.uz/ru/res/visitor/index?id=46694" > Фойдаланувчилар сони </a></div> -->
                            </div>
                        </div>
                    </div>
                    <v-col cols="2">
                       <div class="p-2 users_count"><h6><b>Сайтга кирувчилар:</b></h6>
                        <ul>

                            <table v-if="viewed && typeof viewed[0] !=='undefined'">
                                <tr><td>04.11.2022дан:</td><td><b>{{ viewed[0].year }}</b></td></tr>
                                <tr><td>Бугун:</td><td><b>{{ viewed[0].today }}</b></td></tr>
                                <tr><td>Кеча:</td><td><b>{{ viewed[0].yesterday }}</b></td></tr>
                                <tr><td>Ҳафта давомидан:</td><td><b>{{ viewed[0].week }}</b></td></tr>
                                <tr><td>Ой давомидан:</td><td><b>{{ viewed[0].month }}</b></td></tr>
                            </table>

<!--


                            <li>Йил бошидан: <b>110389</b></li>
                            <li>Бугун: <b>870</b></li>
                            <li>Кеча: <b>2977</b></li>
                            <li>Ҳафта давомидан: <b>10685</b></li>
                            <li>Ой давомидан: <b>8022</b></li>-->
                        </ul>
                       </div>
                    </v-col>
                </div>
            </div>
        </div>
        <position-sidebar/>

    </footer>
</template>

<script>
import {mapState} from 'vuex';
import PositionSidebar from "../custom/position-sidebar";
import api from "../../src/services/apiService";
export default {
    name: "myFooter",
    components: {PositionSidebar},
    data() {
        return {
            links:[],

            currentYear: (new Date()).getFullYear()
        }

    },
    computed: {
        ...mapState(['footermenu','viewed', 'loading'])
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            //console.log(JSON.parse(JSON.stringify(this.footermenu[0])))
            api.readFooterMenusFront().then((response) => {
                this.links = response.data.data;
                this.$store.dispatch('SET_FOOTER_MENU',JSON.parse(JSON.stringify( this.links)));
            }).catch((error) => {
                console.log(error)
            })
            axios.get("/api/v1/users-viewed").then((response)=>{
                this.$store.dispatch('SET_USER_VIEWED',JSON.parse(JSON.stringify( response.data.data)));

            })
        },

    }
}
</script>

<style scoped>

</style>
