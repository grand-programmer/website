<template>
    <div class="logo_area">
        <div class="container-fluid">
            <router-link to="/" class="logo_link">
                <div class="pull-left logo_neno">
                    <img src="/img/gtk_image.png" alt="">
                    <img class="christmas" src="/img/icons/ChristmasTree.svg" alt="">

                    <p>Ўзбекистон Республикаси Давлат божхона қўмитаси</p>
                </div>
            </router-link>
            <!--==========Menu area==========-->
            <div class="main_menu_area">
                <nav class="navbar navbar-default">
                    <div class="menu_container">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <top-v-menu></top-v-menu>
                            <ul class="nav navbar-nav">
                                <li class="hududiy_boshqarmalar"><i class="fas fa-map-marker-alt"></i>

                                    <a href=".hududiy.section"  data-toggle="collapse" role="button"
                                       aria-expanded="false">Ҳудудий бошқармалар</a>
                                    <!--                                <ul class="dropdown-menu">
                                                                        <li><a href="contact.html">Contact</a></li>
                                                                        <li><a href="contact-2.html">Contact - 02</a></li>
                                                                    </ul>-->
                                </li>
                            </ul>
                            <ul class="search_menu">
                                <li class="dropdown search_bar">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true" aria-expanded="false"><span class="menu_slider"></span><i
                                        class="fa fa-search"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><input type="text" placeholder="Search for..."></li>
                                    </ul>
                                </li>
                            </ul>
                        </div><!-- /.navbar-collapse -->
                    </div><!-- /.container-fluid -->
                </nav>
            </div>
            <!--==========End Menu area==========-->
            <div class="pull-right contact_details_area">
                <div class="container">
                    <div class="pull-right header_language">
                        <div class="header_social mr-5">
                            <v-menu offset-y left v-if="$auth.check()">
                                <template v-slot:activator="{ on, attrs }">
                                    <div
                                        v-bind="attrs"
                                        v-on="on"
                                        class="d-flex align-items-center"
                                    >
                                        <v-btn
                                            class="mr-1"
                                            elevation="0"
                                            x-small
                                            fab
                                            color="primary"
                                        >
<!--                                            <v-img :src="'/public/images/users/'+ $auth.user().id +'.jpg'"></v-img>-->
                                            <v-icon>mdi-account</v-icon>

                                        </v-btn>
                                        <p style="    width: min-content; font-size: 12px; text-align: center; margin: 0 10px; font-weight: 600;">
                                            {{$auth.user().first_name}} {{$auth.user().sur_name}}</p>
                                    </div>
                                </template>
                                <v-list><!--
                                    <v-list-item to="/services">Менинг аризаларим</v-list-item>-->
                                    <v-list-item to="/profile">Менинг профилим</v-list-item>
                                    <v-list-item to="/applications">Менинг аризаларим</v-list-item>
                                    <!--                      <v-list-item> <v-list-item-title>Settings</v-list-item-title></v-list-item>-->
                                    <v-list-item @click.prevent="$auth.logout({
                        makeRequest: true,
                        redirect: {name: 'login'},
                    })" href="#">Чиқиш
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <router-link v-if="!$auth.check()" to="/login" ><v-icon>mdi-enter</v-icon>Кабинетга кириш</router-link>
                        </div>
                        <div class="selector">
                            <select name="countries" id="countries" style="width:300px;">
                                <option value='uz' data-image="/img/uz-flag.jpg" data-imagecss="flag uz"
                                        data-title="Uzbek">Uzbek
                                </option>
                                <option value='en' data-image="/img/aus-flag.jpg" data-imagecss="flag yt"
                                        data-title="English">English
                                </option>
                                <option value='ru' data-image="/img/ru_flag.png" data-imagecss="flag yt"
                                        data-title="Русский">Русский
                                </option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <component is="script">
            $(document).ready(function () {
            $("select").msDropdown({roundedBorder: false});
            });
        </component>
    </div>

</template>
<script>
export default {
    name: "Header"

}

</script>
