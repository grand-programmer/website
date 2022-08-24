<template>
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
                                <p> © 2001-{{ currentYear }}  Ўзбекистон Республикаси Давлат божхона қўмитаси.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-5">
                        <div class="footer_widget_inner">
                            <div class="f_navigation_widget">

                                <ul v-if="menu">
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
                                    <li><a href="#"><i class="fab fa-telegram-plane"></i></a></li>
                                    <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: "myFooter",
    data(){
        return {
            currentYear:(new Date()).getFullYear()
    }

    },
    computed: {
        ...mapState(['menu', 'loading'])
    },
}
</script>

<style scoped>

</style>
