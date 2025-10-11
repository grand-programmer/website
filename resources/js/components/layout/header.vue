<template>
    <div class="logo_area">
        <!--      <div class="icons_mobile" style="float: right">-->
        <!--        <v-icon-->
        <!--            class="hududiy_boshqarmalar"-->
        <!--            style="display: inline !important; color: #39ae69">tortlink fas fa-map-marker-alt mr-1-->
        <!--        </v-icon>-->
        <!--        <language-dropdown class="header-lang" style="display: inline !important;"/>-->
        <!--      </div>-->
        <!--      <div>-->
        <!--        <button @click="sideOpenClose">click</button>-->
        <!--        <div class="side"><button @click="sideOpenClose">click</button><br />whoami</div>-->
        <!--      </div>-->
        <div class="header mx-auto">
            <div>
                <div class="container-fluid" style="padding-top: 6px;">
                    <div class="header-top">
                        <!--Logo area-->
                        <div class="header-logo">
                            <router-link to="/" class="header-logo">
                                <img src="/img/gtk_image.png" alt="logo customs">
                                <img src="/img/flag01.svg" alt="logo customs" style="margin-right: 10px!important">
                                <div>
                                    <span style="display: block;">{{ $t("Ўзбекистон Республикаси") }}</span>
                                    <span style="display: block;">{{ $t("Иқтисодиёт ва молия вазирлиги") }}</span>
                                    <span style="display: block;">{{ $t("ҳузуридаги Божхона қўмитаси") }}</span>
                                </div>
                            </router-link>
                        </div>
                        <!--end logo area-->
                        <!--menu area-->
                        <div class="header-menu">
                            <div class="new-navbar desktop-menu navbar-expand-lg navbar-collapse ">
                                <ul class="nav navbar-nav" id="main-menu" style=" color : #000 !important;">
                                    <li class="dropdown nav-item" :class="($route.params.id==link.id) ? 'active' : '' "
                                        v-for="(link,index) in links" :key="index">
                                        <router-link class="nav-link"
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
                                                <router-link v-if="!sublink.url.includes('http')" :to="sublink.url" class="dropdown-item">
                                                    {{ sublink.title }} <span v-if="(sublink.children && sublink.children[0])"><v-icon>mdi-chevron-down</v-icon></span>
                                                </router-link>
                                                <a v-else  class="dropdown-item" target="_blank" :href="sublink.url" >{{ sublink.title }} <span v-if="(sublink.children && sublink.children[0])"><v-icon>mdi-chevron-down</v-icon></span></a>
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
                        </div>
                        <!--end menu area-->
                        <div class="header-settings">
                            <div class="header-item header-mail">
                                <li class="hududiy_boshqarmalar">
                                    <a href=".hududiy.section" class="d-inline">
                                        <i class="tortlink fas fa-map-marker-alt mr-1 "></i>
                                        <span class="tort" style="text-transform: initial; font-size: 16px!important;">{{ $t("Ҳудудий бошқармалар") }}</span>
                                    </a>
                                </li>
                                <router-link v-if="!$auth.check()" to="/login" style="width: min-content; line-height: 16px"><i
                                    class="fas fa-sign-in-alt"></i><span style="text-transform: initial; font-size: 16px!important;"   > {{
                                        $t("Кабинетга кириш")
                                    }}</span>
                                </router-link>

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
                                                <v-icon size="x-large" color="#fff">mdi-account</v-icon>
                                            </v-btn>
                                            <p style="width: min-content; font-size: 12px; text-align: center; margin: 0 10px; font-weight: 600;">
                                                {{ $auth.user().first_name }} {{ $auth.user().sur_name }}</p>
                                        </div>
                                    </template>
                                    <v-list>
                                        <v-list-item to="/profile">{{ $t('Менинг профилим') }}</v-list-item>
                                        <v-list-item to="/applications">{{ $t('Менинг аризаларим') }}</v-list-item>
                                        <v-list-item @click.prevent="$auth.logout({
                          makeRequest: true,
                          redirect: {name: 'login'},
                      })" href="#">{{ $t("Чиқиш") }}
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                                <!--end kabinet area-->
                            </div>
                            <language-dropdown class="header-lang"/>
                        </div>
                        <div class="menu-container">
                            <div class="menu-wrapper">
                                <div class="hamburger-menu" style="float: right; width: 20px; margin-left: 10px; z-index: auto !important; margin-top: -40px">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <!-- hamburger-menu -->
                            </div>
                            <v-card
                                class="mx-auto menu-list"
                                style="margin-top: -16% !important;"
                            >
                                <v-card class="menu-header">
                                    <div style="display: flex; justify-content: space-between;">
                                        <router-link v-if="!$auth.check()" to="/login" class="mt-4 ml-4" style="display: flex; align-items: center"><i
                                            class="fas fa-sign-in-alt" style="font-size: 25px"></i><span style="text-transform: initial; font-size: 16px!important; color: black; margin-left: 5px">
                                            {{ $t("Кабинетга кириш") }}</span>
                                        </router-link>
                                        <div style="align-self: center; margin-right: 1rem;" class="hamburger-menu-close">
                                            <v-icon class="menu-header-icon" color="primary">mdi-close</v-icon>
                                        </div>
                                    </div>
                                    <v-card class="menu-header-line"></v-card>
                                </v-card
                                >
                                <v-list
                                    id="main-menu"
                                    :value="true"
                                    class="link-list"
                                    :class="($route.params.id==link.id) ? 'active' : ''"
                                    v-for="(link,index) in links"
                                    :key="index"
                                >
                                    <v-list-group
                                        v-if="link.children && link.children[0]"
                                    >
                                        <template v-slot:activator>
                                            <v-list-item-title
                                                :to="link.url"
                                                class="link_title"
                                            >
                                                {{ link.title }}
                                            </v-list-item-title>
                                        </template>
                                        <v-list
                                            v-for="(sublink,index) in link.children"
                                            :key="index"
                                            class="link-list"
                                        >
                                            <v-list-group v-if="sublink.children && sublink.children[0]">
                                                <template v-slot:activator>
                                                    <v-list-item-title
                                                        v-if="!sublink.url.includes('http')"
                                                        :to="sublink.url"
                                                        class="sublink_title"
                                                    >
                                                        {{ sublink.title }}
                                                    </v-list-item-title>
                                                </template>
                                                <v-list
                                                    v-for="(sublinkchildren,index) in sublink.children"
                                                    :key="index"
                                                    class="link-list"
                                                >
                                                    <v-list-item
                                                        link
                                                        :to="sublinkchildren.url"
                                                        :href="sublinkchildren.url"
                                                    >
                                                        <v-list-item-title class="sublinkchildren_title">{{ sublinkchildren.title }}</v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-list-group>
                                            <v-list-item
                                                v-else
                                                link
                                                :to="sublink.url"
                                                :href="sublink.url"
                                            >
                                                <v-list-item-title
                                                    class="sublink_title"
                                                >
                                                    {{ sublink.title }}
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-list-group>
                                    <v-list-item
                                        v-else
                                        link
                                        :to="link.url"
                                        :href="link.url"
                                    >
                                        <v-list-item-title
                                            class="link_title"
                                        >
                                            {{ link.title }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                <v-list-item>
                                    <v-list-item-title class="link_title">{{ $t("Ҳудудий бошқармалар") }}</v-list-item-title>
                                </v-list-item>
                                <language-dropdown/>
                                <div class="single-window" style="padding: 20px 10px">
                                    <a href="/singlewindow" style="color: #f7f7f7; background-color: #39ae69; padding: 10px; border-radius: 5px">{{ $t("Божхона органлари ягона дарча хизматлари") }}</a>
                                </div>
                            </v-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            model: 0,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
            admins: [
                ['Management', 'mdi-account-multiple-outline'],
                ['Settings', 'mdi-cog-outline'],
            ],
            cruds: [
                ['Create', 'mdi-plus-outline'],
                ['Read', 'mdi-file-outline'],
                ['Update', 'mdi-update'],
                ['Delete', 'mdi-delete'],
            ],
            links: [],
            pushAccess: null,
            openDropdownIndex: null // Ochiq menyuni saqlash uchun
        }

    },
    created() {
        this.initialize();
    },
    computed: {
        /*pushAccessComputed(){
            return this.pushAccess

        }*/
    },
    methods: {
        // sideOpenClose() {
        //   document.querySelector('.side').classList.toggle('show');
        // },
        setPushAccess(confirm = false) {

            if (confirm) {
                this.pushAccess = true
                this.$cookie.set("push", true)
            } else {
                this.pushAccess = false
                this.$cookie.set("push", false)
            }
        },
        getPushAccess() {
            if (this.$cookie.get('push') !== null) {
                if (this.$cookie.get('push')) this.pushAccess = true; else this.pushAccess = false
            }
        },
        initialize() {
            /*this.getPushAccess();*/

            api.readMenusFront().then((response) => {
                this.links = response.data.data;
                this.$store.dispatch('SET_MENU', this.links);
            }).catch((error) => {
                console.log(error)
            })
        },
        toggleDropdown(index) {
            if (this.openDropdownIndex === index) {
                // Agar shu menyu ochiq bo'lsa, uni yopamiz
                this.openDropdownIndex = null;
            } else {
                // Boshqa menyuni ochamiz va avvalgisini yopamiz
                this.openDropdownIndex = index;
            }
        },
        isDropdownOpen(index) {
            // Faqat ochiq menyuni ko'rsatamiz
            return this.openDropdownIndex === index;
        }
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
            200
        );
    }

    $("body").on("click", ".menu-wrapper .hamburger-menu", function (event) {
        event.stopPropagation();
        $(".hamburger-menu").toggleClass("open");
        $(".menu-container .menu-list").toggleClass("active");
        slideMenu();

        $("body").toggleClass("overflow-hidden");
    });
    $("body").on("click", ".hamburger-menu-close", function (event) {
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
/*.side {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: silver;
  margin-left: -100vw;
  transition: all .2s ease-in-out;
}
.side.show {
  margin-left: 0px;
} */
.subscribe-notification{
    position: absolute;
    top: 10px;
    left: 75px;
    width: 400px;
    background-color: #ffff;
    padding: 10px 25px;
    z-index: 11;
    border-radius: 10px;
    font-family: Roboto;
    color: #000;
    border: 1px solid var(--mycolor);

}
.subscribe-notification .btn-primary {
    color: #fff;
    background: var(--mycolor);
    border-color: var(--mycolor);
    padding: 0 10px;
}
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
    z-index: 900;
}

.menu-wrapper .hamburger-menu span {
    opacity: 1;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    color: #118E1B;
    background-color: #118E1B;
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

.cabinet {
    text-transform: uppercase;
    border-radius: 15px;
    display: block !important;
    border: 1px solid #118E1B;
    padding: 10px;
    color: #118E1B !important;
    white-space: nowrap;
    font-size: 14px !important;
}

.tort {
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 14px !important;
    font-weight: 400 !important;
}

.cabinet:hover {

    background: #118E1B !important;
    color: #fff !important;
    transition: background 0.3s ease, transform 0.3s ease;
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
    background: #F2F4F8;
    box-shadow: rgba(100, 100, 100, 0.2) 6px 2px 10px;
    z-index: 800;
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

    .mm-lang {
        width: max-content;
        margin-left: 75%;
        margin-top: -40px;
    }

    .mm-lang .language-dropdown {
        text-decoration: underline;
    }

    .language-dropdown label {
        border-color: white;
        justify-content: center;
    }

    .menu-wrapper .hamburger-menu {
        position: absolute;
        margin-top: -35px;
        left: 88vw;
    }

    .menu-container .menu-list {
        margin-top: -13% !important;
    }
}

.link_title {
    font-size: 18px !important;
}

.sublink_title {
    margin-left: 15px;
    font-size: 16px !important;
}

.sublinkchildren_title {
    margin-left: 30px;
    font-size: 14px !important;
}

ul#icons li {
    display: inline;
}

@media (min-width: 700px) {
    .mm-lang {
        display: none;
    }
}

.menu-header {
    display: contents;
}

.menu-header-icon {
    margin-top: 20px;
    margin-left: 15px;
}

.menu-header-title {
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 50px;
    margin-top: -20px;
    display: flex;
    width: max-content;
    color: #000000;
}

.menu-header .menu-header-line {
    width: 90%;
    height: 2px;
    background-color: #97A7C1;
    margin-top: 20px;
    margin-left: 18px;
}

.menu-list .link-list {
    background-color: #F2F4F8;
}
/* ============ small devices .end// ============ */
</style>
