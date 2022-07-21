<template>
    <div class="logo_area">

        <div class="header">
            <div class="header-main">
                <div class="container-fluid" style="padding-top: 6px;">
                    <div class="header-top">
                        <!--                        Logo area-->
                        <div class="header-logo">
                            <router-link to="/" class="header-logo">
                                <img src="/img/gtk_image.png" alt="">
                                <span>{{ $t("Ўзбекистон Республикаси Давлат божхона қўмитаси") }}  </span>

                            </router-link>

                        </div>
                        <!--                        end logo area-->
                        <!--                        menu area-->
                        <div class="header-menu">
                            <!--                            <a href="#" class="hamburger"><i class="fa fa-bars"></i></a>-->

                            <div class="new-navbar desktop-menu navbar-expand-lg navbar-collapse ">

                                <!--                                <top-v-menu></top-v-menu>-->
                                <ul class="nav navbar-nav" id="main-menu" style=" color : #000 !important;">
                                    <li class="dropdown nav-item" :class="($route.params.id==link.id) ? 'active' : '' "
                                        v-for="(link,index) in links" :key="index">

                                        <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                                     :to="link.url"
                                                     v-if="link.children && link.children[0]">
                                            <span class="menu_slider"></span>{{ link.title }}
                                        </router-link>

                                        <router-link class="nav-link" :to="link.url" v-else><span
                                            class="menu_slider"></span>{{ link.title }}
                                        </router-link>

                                        <ul class="dropdown-menu "
                                            v-if="(link.children && link.children[0])">
                                            <li v-for="(sublink,index) in link.children" :key="index"
                                                v-if="sublink && index<10">
                                                <router-link :to="sublink.url" class="dropdown-item"> {{
                                                        sublink.title
                                                    }}
                                                </router-link>
                                                <ul class="submenu dropdown-menu"
                                                    v-if="(sublink.children && sublink.children[0])">
                                                    <li v-for="(sublinkchildren,index) in sublink.children" :key="index"
                                                        v-if="sublinkchildren">
                                                        <router-link :to="sublinkchildren.url" class="dropdown-item">
                                                            {{ sublinkchildren.title }}
                                                        </router-link>
                                                        <ul class="submenu dropdown-menu"
                                                            v-if="(sublinkchildren.children && sublinkchildren.children[0])">
                                                            <li v-for="(slch,index) in sublinkchildren.children"
                                                                :key="index + slch.id "
                                                                v-if="slch">
                                                                <router-link :to="slch.url" class="dropdown-item">
                                                                    {{ slch.title }}
                                                                </router-link>

                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>


                                        </ul>

                                    </li>


                                </ul>
                            </div>

                            <!--                            Mobile menu -->


                            <!--                            End mobile menu-->

                        </div>
                        <!--                        end menu area-->

                        <div class="header-settings">
                            <div class="header-item header-mail">
                                <li class="hududiy_boshqarmalar">

                                    <a href=".hududiy.section" data-toggle="collapse" role="button"
                                       aria-expanded="false" class="d-inline">
                                        <i class="fas fa-map-marker-alt mr-1 "></i>
                                        <span class="tort">{{ $t("Ҳудудий бошқармалар") }}</span>
                                    </a>
                                    <!--                                <ul class="dropdown-menu">
                                                                        <li><a href="contact.html">Contact</a></li>
                                                                        <li><a href="contact-2.html">Contact - 02</a></li>
                                                                    </ul>-->
                                </li>
                                <!--Kabinetga kirish-->
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
                                                <v-icon size="x-large" color="#fff">mdi-account</v-icon>

                                            </v-btn>
                                            <p style="    width: min-content; font-size: 12px; text-align: center; margin: 0 10px; font-weight: 600;">
                                                {{ $auth.user().first_name }} {{ $auth.user().sur_name }}</p>
                                        </div>
                                    </template>
                                    <v-list><!--
                                    <v-list-item to="/services">Менинг аризаларим</v-list-item>-->
                                        <v-list-item to="/profile">{{ $t("Менинг профилим") }}</v-list-item>
                                        <v-list-item to="/applications">{{ $t("Менинг аризаларим") }}</v-list-item>
                                        <!--                      <v-list-item> <v-list-item-title>Settings</v-list-item-title></v-list-item>-->
                                        <v-list-item @click.prevent="$auth.logout({
                        makeRequest: true,
                        redirect: {name: 'login'},
                    })" href="#">{{ $t("Чиқиш") }}
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                                <router-link v-if="!$auth.check()" to="/login"><i
                                    class="fas fa-sign-in-alt"></i><span class="tort">{{
                                        $t("Кабинетга кириш")
                                    }}  </span>
                                </router-link>
                                <!--end kabinet area-->

                            </div>
                            <!--Language area-->
                            <language-dropdown class="header-lang"/>

                            <!--                            <div class="header-lang">

                                                            <span id="lang_selected" title="Tilni tanlang">ЎЗБ</span>

                                                            <div id="lang_selector" class="language-dropdown" :class="languageMenuOpen?'open':''" >
                                                                <label class="lang-flag lang-en" @click="languageMenuOpen=!languageMenuOpen"
                                                                       title="Tilni tanlang">
                                                                    <span class="flag"></span>
                                                                </label>
                                                                <ul class="lang-list">
                                                                    <li class="lang lang-en selected" title="ЎЗБ" @click="selectMenu">
                                                                        <span class="flag"></span>
                                                                    </li>
                                                                    <li class="lang lang-pt" title="РУС" @click="selectMenu">
                                                                        <span class="flag"></span>
                                                                    </li>
                                                                    <li class="lang lang-es" title="ENG" @click="selectMenu">
                                                                        <span class="flag"></span>
                                                                    </li>
                                                                </ul>

                                                            </div>


                                                        </div>-->

                            <!--End language area-->

                        </div>
                        <div class="menu-container">
                            <div class="menu-wrapper">
                                <div class="hamburger-menu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <!-- hamburger-menu -->
                            </div>
                            <!-- menu-wrapper -->
                            <ul class="menu-list accordion " style="margin-top: 25px">

                                <li id="main-menu11" class="toggle accordion-toggle"
                                    :class="($route.params.id==link.id) ? 'active' : '' "
                                    v-for="(link,index) in links" :key="index">
                                    <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                                 :to="link.url"
                                                 v-if="link.children && link.children[0]">
                                        <span class="menu_slider"></span>{{ link.title }}
                                    </router-link>

                                    <router-link class="nav-link" :to="link.url" v-else><span
                                        class="menu_slider"></span>{{ link.title }}
                                    </router-link>

                                    <ul class="dropdown-menu  "
                                        v-if="(link.children && link.children[0])">
                                        <li v-for="(sublink,index) in link.children" :key="index" v-if="sublink ">
                                            <router-link :to="sublink.url" class="dropdown-item"> {{
                                                    sublink.title
                                                }}
                                            </router-link>
                                            <ul class="submenu accordion-content"
                                                v-if="(sublink.children && sublink.children[0])">
                                                <li v-for="(sublinkchildren,index) in sublink.children" :key="index"
                                                    v-if="sublinkchildren">
                                                    <router-link :to="sublinkchildren.url" class="dropdown-item">
                                                        {{ sublinkchildren.title }}
                                                    </router-link>
                                                    <ul class="submenu dropdown-menu"
                                                        v-if="(sublinkchildren.children && sublinkchildren.children[0])">
                                                        <li v-for="(slch,index) in sublinkchildren.children"
                                                            :key="index + slch.id "
                                                            v-if="slch">
                                                            <router-link :to="slch.url" class="dropdown-item">
                                                                {{ slch.title }}
                                                            </router-link>

                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>


                                    </ul>


                                </li>


                                <div class="m-settings d-flex " style="display: block;
    margin-left: auto;
    margin-right: auto;">

                                    <div class="hududiy_boshqarmalar">

                                        <a href=".hududiy.section" data-toggle="collapse" role="button"
                                           aria-expanded="false" class="d-inline">
                                            <i class="fas fa-map-marker-alt mr-1 "></i>
                                            <span class="tort">{{ $t("Ҳудудий бошқармалар") }}</span>
                                        </a>
                                        <!--                                <ul class="dropdown-menu">
                                                                            <li><a href="contact.html">Contact</a></li>
                                                                            <li><a href="contact-2.html">Contact - 02</a></li>
                                                                        </ul>-->
                                    </div>
                                    <!--Kabinetga kirish-->
                                    <div class="d-flex">
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
                                                        {{ $auth.user().first_name }} {{ $auth.user().sur_name }}</p>
                                                </div>
                                            </template>
                                            <v-list><!--
                                    <v-list-item to="/services">Менинг аризаларим</v-list-item>-->
                                                <v-list-item to="/profile">{{ $t("Менинг профилим") }}</v-list-item>
                                                <v-list-item to="/applications">{{ $t("Менинг аризаларим") }}
                                                </v-list-item>
                                                <!--                      <v-list-item> <v-list-item-title>Settings</v-list-item-title></v-list-item>-->
                                                <v-list-item @click.prevent="$auth.logout({
                        makeRequest: true,
                        redirect: {name: 'login'},
                    })" href="#">{{ $t("Чиқиш") }}
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                        <router-link v-if="!$auth.check()" to="/login"><i
                                            class="fas fa-sign-in-alt"></i>
                                        </router-link>
                                    </div>
                                    <!--end kabinet area-->


                                    <!--Language area-->

                                    <language-dropdown class="mm-lang"/>
                                    <!--                                    <div class="mm-lang">


                                                                            <div id="lang_selector1" class="language-dropdown" :class="footerlanguageMenuOpen?'open':''" >
                                                                                <label class="lang-flag lang-en" @click="footerlanguageMenuOpen=!footerlanguageMenuOpen"
                                                                                       title="Tilni tanlang">
                                                                                    <span class="flag"></span>
                                                                                </label>
                                                                                <ul class="lang-list">
                                                                                    <li class="lang lang-en selected" title="ЎЗБ">
                                                                                        <span class="flag"></span>
                                                                                    </li>
                                                                                    <li class="lang lang-pt" title="РУС">
                                                                                        <span class="flag"></span>
                                                                                    </li>
                                                                                    <li class="lang lang-es" title="ENG">
                                                                                        <span class="flag"></span>
                                                                                    </li>
                                                                                </ul>

                                                                            </div>


                                                                        </div>-->

                                    <!--End language area-->

                                </div>
                            </ul>

                            <!-- menu-list accordion-->

                        </div>

                    </div>
                </div>
            </div>


        </div>


        <!--                =====   =====End Menu area==========-->

        <!--        <component is="script">
                    $(document).ready(function () {
                    $("select").msDropdown({roundedBorder: false});
                    });
                </component>-->


    </div>


</template>
<script>
import api from "./../../src/services/apiService";
import LanguageDropdown from "../custom/language-selector";

export default {
    name: "Header",
    components: {LanguageDropdown},
    data() {
        return {
            links: [],
        }

    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            api.readMenusFront().then((response) => {
                this.links = response.data;
                this.$store.dispatch('SET_MENU', this.links);
            }).catch((error) => {
                console.log(error)
            })
        },

    }
};
document.addEventListener("DOMContentLoaded", function () {
// make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
            element.addEventListener('click', function (e) {
                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
// end if innerWidth
});

// language

$(document).click(function (e) {
    let container = $(".language-dropdown");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".language-dropdown").removeClass("open");
    }
});

//end language
$(function () {
    function slideMenu() {
        var activeState = $(".menu-container .menu-list").hasClass("active");
        $(".menu-container .menu-list").animate(
            {left: activeState ? "0%" : "-100%"},
            400
        );
    }

    $("body").on("click", ".menu-wrapper .hamburger-menu", function (event) {
        event.stopPropagation();
        $(".hamburger-menu").toggleClass("open");
        $(".menu-container .menu-list").toggleClass("active");
        slideMenu();

        $("body").toggleClass("overflow-hidden");
    });

    $(".menu-list")
        .find(".accordion-toggle")
        .click(function () {
            $(this).next().toggleClass("open").slideToggle("fast");
            $(this)
                .toggleClass("active-tab")
                .find(".menu-link")
                .toggleClass("active");

            $(".menu-list .accordion-content")
                .not($(this).next())
                .slideUp("fast")
                .removeClass("open");
            $(".menu-list .accordion-toggle")
                .not(jQuery(this))
                .removeClass("active-tab")
                .find(".menu-link")
                .removeClass("active");
        });


}); // jQuery load


/*$(document).on("click", ".lang-flag", function () {
    //$(".language-dropdown").toggleClass("open");
});*/

/*
$(document).on("click", "ul.lang-list li", function () {
    $("ul.lang-list li").removeClass("selected");
    $(this).addClass("selected");
    if ($(this).hasClass('lang-en')) {
        $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-es").removeClass("lang-pt");
        $("#lang_selected").html("<span>ЎЗБ</span>")
    } else if ($(this).hasClass('lang-pt')) {
        $(".language-dropdown").find(".lang-flag").addClass("lang-pt").removeClass("lang-es").removeClass("lang-en");
        $("#lang_selected").html("<span>РУС</span>")
    } else {
        $(".language-dropdown").find(".lang-flag").addClass("lang-es").removeClass("lang-en").removeClass("lang-pt");
        $("#lang_selected").html("<span>ENG</span>")
    }
    $(".language-dropdown").removeClass("open");
});*/

</script>
<style>
@media all and (min-width: 992px) {
    .dropdown-menu li {
        position: relative;
    }

    .nav-item .submenu {
        display: none;
        position: absolute;
        left: 100%;
        top: -7px;
    }

    .nav-item .submenu-left {
        right: 100%;
        left: auto;
    }

    .dropdown-menu > li:hover {
        background-color: #f1f1f1
    }

    .dropdown-menu > li:hover > .submenu {
        display: block;
    }
}

/* ============ desktop view .end// ============ */
/* ============ small devices ============ */
@media (max-width: 991px) {
    .dropdown-menu .dropdown-menu {
        margin-left: 0.7rem;
        margin-right: 0.7rem;
        margin-bottom: .5rem;
    }
}

.navbar-nav .dropdown-menu {
    position: absolute;
    max-width: 15vw;
    width: max-content;
}

.navbar-nav .dropdown-menu > li > a {
    white-space: unset !important;
}


/*mobile*/
.menu-wrapper {
    overflow: hidden;
    max-width: 100%;
    cursor: pointer;
}


.menu-wrapper .hamburger-menu {
    position: relative;
    width: 25px;
    height: 20px;
    margin-top: 19px;
}

.menu-wrapper .hamburger-menu span {
    opacity: 1;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    color: black;
    background-color: #000;
    position: absolute;
    transform: rotate(0deg);
    transition: .4s ease-in-out;
}

.menu-wrapper .hamburger-menu span:nth-child(1) {
    top: 0;
}

.menu-wrapper .hamburger-menu span:nth-child(2) {
    top: 9px;
}

.menu-wrapper .hamburger-menu span:nth-child(3) {
    top: 18px;
}

.menu-wrapper .hamburger-menu.open span:nth-child(1) {
    transform: translateY(9px) rotate(135deg);
}

.menu-wrapper .hamburger-menu.open span:nth-child(2) {
    opacity: 0;
    transform: translateX(-60px);
}

.menu-wrapper .hamburger-menu.open span:nth-child(3) {
    transform: translateY(-9px) rotate(-135deg);
}

/*.menu-container .menu-list .menu-submenu {*/
/*    white-space: unset;*/
/*    padding: 20px !important;*/
/*    left: 10%;*/
/*}*/

.menu-container .menu-list {
    padding-left: 0;
    display: block;
    position: absolute;
    width: 100%;
    max-width: 450px;
    height: 1024px;
    background: white;
    box-shadow: rgba(100, 100, 100, 0.2) 6px 2px 10px;
    z-index: 999;
    overflow-y: auto;
    overflow-x: hidden;
    left: -100%;
}

.menu-container .menu-list li.accordion-toggle, .menu-container .menu-list .menu-login {
    font-size: 16px;
    text-align: center;
    padding: 20px;
    text-transform: uppercase;
    border-top: 1px solid #dbdcd2;
}

.menu-container .menu-list li:first-of-type {
    border-top: 0;
}

.accordion-toggle, .accordion-content {
    cursor: pointer;
    font-size: 16px;
    position: relative;
    letter-spacing: 1px;
}

.accordion-content {
    display: none;
}

/*.accordion-toggle a:before, .accordion-toggle a:after {*/
/*    content: '';*/
/*    display: block;*/
/*    position: absolute;*/
/*    top: 50%;*/
/*    right: 30px;*/
/*    width: 15px;*/
/*    height: 2px;*/
/*    margin-top: -1px;*/
/*    background-color: #5a5858;*/
/*    transform-origin: 50% 50%;*/
/*    transition: all 0.3s ease-out;*/
/*}*/

/*.accordion-toggle a:before {*/
/*    transform: rotate(-90deg);*/
/*    opacity: 1;*/
/*    z-index: 2;*/
/*}*/

.accordion-toggle.active-tab {
    background: #000;

    transition: all 0.3s ease;
}

.accordion-toggle a.active:before {
    transform: rotate(0deg);
    background: #fff !important;
}

.accordion-toggle a.active:after {
    transform: rotate(180deg);
    background: #fff !important;
    opacity: 0;
}

.menu-wrapper {
    display: none !important;
}

.menu-container .menu-list.accordion {
    display: none;
}


@media (max-width: 1480px) {
    .menu-wrapper {
        display: block !important;
    }

    .menu-container .menu-list.accordion {
        display: block !important;
    }

}

@media (max-width: 576px) {
    .menu-wrapper .hamburger-menu {
        position: absolute;
        margin-top: -38px;
        left: 83%;
    }

    .menu-list {
        margin-top: 5px !important;
    }


}

/* ============ small devices .end// ============ */
</style>
