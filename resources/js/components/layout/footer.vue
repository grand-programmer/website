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
                                    <span>{{ $t("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси") }}</span>
                                </div>
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


                    <div class="col-md-4">
                        <div class="footer_widget_inner">
                            <div class="f_navigation_widget">

                                <ul v-if="footermenu">
                                    <li @click="dialog=true"><a>{{ $t('Сайт харитаси') }}</a></li>
                                    <li v-for="(link,index) in footermenu[0]" :key="index">
                                        <router-link :to="link.url"><i class="fa fa-angle-right"
                                                                       aria-hidden="true"></i>{{ link.title }}
                                        </router-link>
                                    </li>

                                </ul>
                                <v-dialog v-model="dialog" max-width="1200"  max-height="500" style="max-height:60% !important;">
                                    <v-card>
                                        <v-card-title>{{ $t("Сайт харитаси") }}</v-card-title>
                                        <v-card-text>
                                        <v-row class="d-flex justify-content-evenly">
                                            <v-col v-for="(mklink,index) in menu[0]" :key="mklink.url + index">
                                                <router-link :to="mklink.url">{{ mklink.title }}
                                                </router-link>
                                                <ul v-if="mklink.children && mklink.children[0]" class="ml-1">
                                                    <li v-for="(subchildren,sindex) in mklink.children" :key="subchildren.url + sindex">
                                                        <router-link :to="subchildren.url"><v-icon>mdi-chevron-right</v-icon> {{ subchildren.title }}</router-link>
                                                        <ul v-if="subchildren.children && subchildren.children[0]" class="ml-4">
                                                            <li v-for="(slink,ssindex) in subchildren.children" :key="slink.url + ssindex">
                                                                <router-link :to="slink.url"><v-icon>mdi-chevron-right</v-icon> {{ slink.title }}</router-link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </v-col>
                                        </v-row>
                                        </v-card-text>
                                    </v-card>

                                </v-dialog>

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
<!--                                    <li><a href="https://www.youtube.com/@BojxonaqomitasiAxborotxi-hf6od"  target="_blank"><i class="fab fa-youtube"></i></a></li>-->
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
                       <div class="p-2 users_count"><h6><b>{{ $t('Сайтга кирувчилар') }}:</b></h6>
                        <ul>

                            <table v-if="viewed && typeof viewed[0] !=='undefined'">
                                <tr><td>{{ $t('04.11.2022дан',{msg:'04.11.2022'}) }}:</td><td><b>{{ viewed[0].year }}</b></td></tr>
                                <tr><td>{{ $t('Бугун') }}.:</td><td><b>{{ viewed[0].today }}</b></td></tr>
                                <tr><td>{{ $t('Кеча') }}:</td><td><b>{{ viewed[0].yesterday }}</b></td></tr>
                                <tr><td>{{ $t('Ҳафта давомида') }}:</td><td><b>{{ viewed[0].week }}</b></td></tr>
                                <tr><td>{{ $t('Ой давомида') }}:</td><td><b>{{ viewed[0].month }}</b></td></tr>
                                <tr><td>

                                </td></tr>
                            </table>

<!--


                            <li>Йил бошидан: <b>110389</b></li>
                            <li>Бугун: <b>870</b></li>
                            <li>Кеча: <b>2977</b></li>
                            <li>Ҳафта давомидан: <b>10685</b></li>
                            <li>Ой давомидан: <b>8022</b></li>-->
                        </ul>
                       </div>
                        <img height="30" src="https://cnt0.www.uz/counter/collect?id=46694&pg=http%3A//uzinfocom.uz&col=340F6E&t=ffffff&p=BD6F6F" border=0 style="    position: absolute; bottom: 25px; right: 5px;" />
                    </v-col>
                </div>
            </div>
        </div>

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
            dialog:false,

            currentYear: (new Date()).getFullYear()
        }

    },
    computed: {
        ...mapState(['footermenu','menu','viewed', 'loading'])
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
