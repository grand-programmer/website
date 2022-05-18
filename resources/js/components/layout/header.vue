<template>
    <div class="logo_area">

        <div class="header">
            <div class="header-main">
                <div class="container mt-0">
                    <div class="header-top">
                        <div class="header-logo">
                            <router-link to="/" class="header-logo">
                                <img src="/img/gtk_image.png" alt="">
                                <span>Ўзбекистон Республикаси <br> Давлат божхона қўмитаси</span>

                            </router-link>

                        </div>

                        <div class="header-settings">
                            <div class="header-item header-mail">
                                <li class="hududiy_boshqarmalar">

                                    <a href=".hududiy.section" data-toggle="collapse" role="button"
                                       aria-expanded="false" class="d-inline">
                                        <i class="fas fa-map-marker-alt mr-1 "></i>
                                        <span>Ҳудудий бошқармалар</span>
                                    </a>
                                    <!--                                <ul class="dropdown-menu">
                                                                        <li><a href="contact.html">Contact</a></li>
                                                                        <li><a href="contact-2.html">Contact - 02</a></li>
                                                                    </ul>-->
                                </li>

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
                                <router-link v-if="!$auth.check()" to="/login"><i
                                    class="fas fa-sign-in-alt"></i><span>Кабинетга кириш</span>
                                </router-link>


                            </div>
                            <!--Language area-->
                            <div class="header-lang">

                                <span id="lang_selected" title="Tilni tanlang">ЎЗБ</span>

                                <div id="lang_selector" class="language-dropdown">
                                    <label for="toggle" class="lang-flag lang-en"
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


                            </div>

                            <!--End language area-->

                        </div>
                    </div>
                </div>
            </div>
            <div class="header-menu">
                <div class="container">
                    <div class="header-menu__main">
                        <div class="menu">
                            <!--                            <a href="#" class="hamburger"><i class="fa fa-bars"></i></a>-->
                            <div role="navigation">
                                <div id="menuToggle">
                                    <input type="checkbox"/>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <ul id="menu">
                                        <li class="dropdown nav-item"
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

                                            <ul class="dropdown-menu "
                                                v-if="(link.children && link.children[0])">
                                                <li v-for="(sublink,index) in link.children" :key="index"
                                                    v-if="sublink ">
                                                    <router-link :to="sublink.url" class="dropdown-item"> {{
                                                            sublink.title
                                                        }}
                                                    </router-link>
                                                    <ul class="submenu dropdown-menu"
                                                        v-if="(sublink.children && sublink.children[0])">
                                                        <li v-for="(sublinkchildren,index) in sublink.children"
                                                            :key="index"
                                                            v-if="sublinkchildren">
                                                            <router-link :to="sublinkchildren.url"
                                                                         class="dropdown-item">
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
                            </div>
                            <div class="new-navbar desktop-menu navbar-expand-lg navbar-collapse ">
                                <!--                                <top-v-menu></top-v-menu>-->
                                <ul class="nav navbar-nav" id="main-menu" style=" white-space: unset !important;">
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
                                            <li v-for="(sublink,index) in link.children" :key="index" v-if="sublink ">
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

                        <div class="mobile-phones">

                            <!--                                                    <a href="#" data-toggle="modal"-->
                            <!--                                                       data-target="#request" class="animate-element delay9 fadeInUp">ОФОРМИТЬ ЗАЯВКУ</a>-->
                            <!--                        <a href="#" class="vi-open"><i class="icons icon-eyeglass"></i></a>-->


                        </div>

                        <div class="header-search">
                            <a href="#" class="header-search-button  search-toggle"><i
                                class="fa fa-search" style="color: #fff!important;"></i></a>
                            <div class="thim-widget-courses-searching thim-widget-courses-searching-base">
                                <div class="thim-course-search-overlay">
                                    <div class="courses-searching layout-overlay vi-nopart">
                                        <div class="search-popup-bg"></div>
                                        <form action="#" method="get" accept-charset="utf-8">
                                            <input type="text" value="" name="word" placeholder="Излаш"
                                                   class="thim-s form-control courses-search-input vi-nopart"
                                                   autocomplete="off">
                                            <button type="submit" class="vi-nopart"><i
                                                class="fa fa-search vi-nopart"></i>
                                            </button>
                                            <span class="widget-search-close vi-nopart"></span>
                                        </form>
                                        <ul class="courses-list-search list-unstyled search-visible"></ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>


        <!--                =====   =====End Menu area==========-->

        <component is="script">
            $(document).ready(function () {
            $("select").msDropdown({roundedBorder: false});
            });
        </component>


    </div>


</template>
<script>
import api from "./../../src/services/apiService";

export default {
    name: "Header",
    data() {
        return {
            links: []
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

$(document).ready(function () {
    $(".lang-flag").click(function () {
        $(".language-dropdown").toggleClass("open");
    });
    $("ul.lang-list li").click(function () {
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
    });
})
//end language


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


#menuToggle {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 3px;
    left: 10px;
    z-index: 99999;
    -webkit-user-select: none;
    user-select: none;
}

#menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
}

#menuToggle span {
    display: flex;
    width: 29px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: #ffffff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
    transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383f;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}

#menu {
    left: 20px;
    position: absolute;
    width: 360px;
    height: 400px;
    box-shadow: 0 0 10px #85888c;
    margin: -40px 0 0 -50px;
    padding-top: 50px;

    background-color: #73a83e;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    white-space: unset !important;
    text-align: center;
}

#menu li {
    white-space: unset !important;
    padding: 10px 50px;
    transition-delay: 2s;
}

#menuToggle input:checked ~ ul {
    transform: none;
    white-space: unset !important;
}

#menu .dropdown-menu > li > a {
    white-space: unset !important;

}








/* ============ small devices .end// ============ */
</style>
