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


                            <div class="header-item header-lang active">
                                <!--                                <div class="selector">-->
                                <!--                                    <select name="countries" id="countries" style="width:300px;">-->
                                <!--                                        <option value='uz' data-image="/img/uz-flag.jpg" data-imagecss="flag uz"-->
                                <!--                                                data-title="Uzbek">Uzbek-->
                                <!--                                        </option>-->
                                <!--                                        <option value='en' data-image="/img/aus-flag.jpg" data-imagecss="flag yt"-->
                                <!--                                                data-title="English">English-->
                                <!--                                        </option>-->
                                <!--                                        <option value='ru' data-image="/img/ru_flag.png" data-imagecss="flag yt"-->
                                <!--                                                data-title="Русский">Русский-->
                                <!--                                        </option>-->
                                <!--                                    </select>-->
                                <!--                                </div>-->

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="header-menu">
                <div class="container">
                    <div class="header-menu__main">
                        <div class="menu">
                            <!--                            <a href="#" class="hamburger"><i class="fa fa-bars"></i></a>-->
                            <div class="new-navbar desktop-menu navbar-expand-lg navbar-collapse ">
                                <!--                                <top-v-menu></top-v-menu>-->
                                <ul class="nav navbar-nav" id="main-menu">
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

                            <div class="mobile-menu">
                                <a href="#dl-menu" class="openMenu1"><i class="fas fa-bars"></i></a>
                                <div id="dl-menu">
                        <span class="language-mobile">
                          <a href="#" class="item active-lang">Рус</a>
                          <a href="#" class="item ">O'z</a>
                            <a href="#" class="item ">En</a>
                        </span>
                                    <ul>
                                        <li class="nav-submenu">
                                            <a data-alias="#"
                                               class="nav-link no-link"
                                               href="#">О нас</a>
                                            <ul>
                                                <li class=""><a href="#">О компании</a></li>
                                                <li class=""><a href="#">Руководство</a></li>


                                            </ul>
                                        </li>


                                        <li class=""><a data-alias="contacts" class=""
                                                        href="#">Связаться</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!--                            End mobile menu-->

                        </div>

                        <!--                        <div class="mobile-phones">-->
                        <!--                            <a href="#" data-toggle="modal"-->
                        <!--                               data-target="#request" class="animate-element delay9 fadeInUp">ОФОРМИТЬ ЗАЯВКУ</a>-->
                        <!--                            &lt;!&ndash;                        <a href="#" class="vi-open"><i class="icons icon-eyeglass"></i></a>&ndash;&gt;-->


                        <!--                        </div>-->

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

// Mobile menu
function Util() {
}

Util.hasClass = function (el, className) {
    if (el.classList) return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};
Util.addClass = function (el, className) {
    var classList = className.split(" ");
    if (el.classList) el.classList.add(classList[0]);
    else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
    if (classList.length > 1) Util.addClass(el, classList.slice(1).join(" "));
};
Util.removeClass = function (el, className) {
    var classList = className.split(" ");
    if (el.classList) el.classList.remove(classList[0]);
    else if (Util.hasClass(el, classList[0])) {
        var reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
        el.className = el.className.replace(reg, " ");
    }
    if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(" "));
};
Util.toggleClass = function (el, className, bool) {
    if (bool) Util.addClass(el, className);
    else Util.removeClass(el, className);
};
Util.setAttributes = function (el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};
Util.getChildrenByClassName = function (el, className) {
    var children = el.children,
        childrenByClass = [];
    for (var i = 0; i < el.children.length; i++) {
        if (Util.hasClass(el.children[i], className))
            childrenByClass.push(el.children[i]);
    }
    return childrenByClass;
};
Util.is = function (elem, selector) {
    if (selector.nodeType) {
        return elem === selector;
    }
    var qa =
            typeof selector === "string"
                ? document.querySelectorAll(selector)
                : selector,
        length = qa.length,
        returnArr = [];
    while (length--) {
        if (qa[length] === elem) {
            return true;
        }
    }
    return false;
};
Util.setHeight = function (start, to, element, duration, cb) {
    var change = to - start,
        currentTime = null;
    var animateHeight = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        var val = parseInt((progress / duration) * change + start);
        element.style.height = val + "px";
        if (progress < duration) {
            window.requestAnimationFrame(animateHeight);
        } else {
            cb();
        }
    };
    element.style.height = start + "px";
    window.requestAnimationFrame(animateHeight);
};
Util.scrollTo = function (final, duration, cb) {
    var start = window.scrollY || document.documentElement.scrollTop,
        currentTime = null;
    var animateScroll = function (timestamp) {
        if (!currentTime) currentTime = timestamp;
        var progress = timestamp - currentTime;
        if (progress > duration) progress = duration;
        var val = Math.easeInOutQuad(progress, start, final - start, duration);
        window.scrollTo(0, val);
        if (progress < duration) {
            window.requestAnimationFrame(animateScroll);
        } else {
            cb && cb();
        }
    };
    window.requestAnimationFrame(animateScroll);
};
Util.moveFocus = function (element) {
    if (!element) element = document.getElementsByTagName("body")[0];
    element.focus();
    if (document.activeElement !== element) {
        element.setAttribute("tabindex", "-1");
        element.focus();
    }
};
Util.getIndexInArray = function (array, el) {
    return Array.prototype.indexOf.call(array, el);
};
Util.cssSupports = function (property, value) {
    if ("CSS" in window) {
        return CSS.supports(property, value);
    } else {
        var jsProperty = property.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
        });
        return jsProperty in document.body.style;
    }
};
Util.extend = function () {
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;
    if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
        deep = arguments[0];
        i++;
    }
    var merge = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                if (
                    deep &&
                    Object.prototype.toString.call(obj[prop]) === "[object Object]"
                ) {
                    extended[prop] = extend(true, extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };
    for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
    }
    return extended;
};
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}
if (typeof window.CustomEvent !== "function") {
    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(
            event,
            params.bubbles,
            params.cancelable,
            params.detail
        );
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
}
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
};
/**/
(function () {
    var LanguagePicker = function (element) {
        this.element = element;
        this.select = this.element.getElementsByTagName("select")[0];
        this.options = this.select.getElementsByTagName("option");
        this.selectedOption = getSelectedOptionText(this);
        this.pickerId = this.select.getAttribute("id");
        this.trigger = false;
        this.dropdown = false;
        this.firstLanguage = false;
        // dropdown arrow inside the button element
        this.svgPath =
            '<svg viewBox="0 0 16 16"><polygon points="3,5 8,11 13,5 "></polygon></svg>';
        initLanguagePicker(this);
        initLanguagePickerEvents(this);
    };

    function initLanguagePicker(picker) {
        // create the HTML for the custom dropdown element
        picker.element.insertAdjacentHTML(
            "beforeend",
            initButtonPicker(picker) + initListPicker(picker)
        );

        // save picker elements
        picker.dropdown = picker.element.getElementsByClassName(
            "language-picker__dropdown"
        )[0];
        picker.firstLanguage = picker.dropdown.getElementsByClassName(
            "language-picker__item"
        )[0];
        picker.trigger = picker.element.getElementsByClassName(
            "language-picker__button"
        )[0];
    }

    function initLanguagePickerEvents(picker) {
        // make sure to add the icon class to the arrow dropdown inside the button element
        Util.addClass(picker.trigger.getElementsByTagName("svg")[0], "icon");
        // language selection in dropdown
        // ⚠️ Important: you need to modify this function in production
        initLanguageSelection(picker);

        // click events
        picker.trigger.addEventListener("click", function () {
            toggleLanguagePicker(picker, false);
        });
    }

    function toggleLanguagePicker(picker, bool) {
        var ariaExpanded;
        if (bool) {
            ariaExpanded = bool;
        } else {
            ariaExpanded =
                picker.trigger.getAttribute("aria-expanded") == "true"
                    ? "false"
                    : "true";
        }
        picker.trigger.setAttribute("aria-expanded", ariaExpanded);
        if (ariaExpanded == "true") {
            picker.firstLanguage.focus(); // fallback if transition is not supported
            picker.dropdown.addEventListener("transitionend", function cb() {
                picker.firstLanguage.focus();
                picker.dropdown.removeEventListener("transitionend", cb);
            });
        }
    }

    function checkLanguagePickerClick(picker, target) {
        // if user clicks outside the language picker -> close it
        if (!picker.element.contains(target)) toggleLanguagePicker(picker, "false");
    }

    function moveFocusToPickerTrigger(picker) {
        if (picker.trigger.getAttribute("aria-expanded") == "false") return;
        if (
            document.activeElement.closest(".language-picker__dropdown") ==
            picker.dropdown
        )
            picker.trigger.focus();
    }

    function initButtonPicker(picker) {
        // create the button element -> picker trigger
        // check if we need to add custom classes to the button trigger
        var customClasses = picker.element.getAttribute("data-trigger-class")
            ? " " + picker.element.getAttribute("data-trigger-class")
            : "";

        var button =
            '<button class="language-picker__button' +
            customClasses +
            '" aria-label="' +
            picker.select.value +
            " " +
            picker.element.getElementsByTagName("label")[0].innerText +
            '" aria-expanded="false" aria-contols="' +
            picker.pickerId +
            '-dropdown">';
        button =
            button +
            '<span aria-hidden="true" class="language-picker__label language-picker__flag language-picker__flag--' +
            picker.select.value +
            '"><em>' +
            picker.selectedOption +
            "</em>";
        button = button + picker.svgPath + "</span>";
        return button + "</button>";
    }

    function initListPicker(picker) {
        // create language picker dropdown
        var list =
            '<div class="language-picker__dropdown" aria-describedby="' +
            picker.pickerId +
            '-description" id="' +
            picker.pickerId +
            '-dropdown">';
        list =
            list +
            '<p class="sr-only" id="' +
            picker.pickerId +
            '-description">' +
            picker.element.getElementsByTagName("label")[0].innerText +
            "</p>";
        list = list + '<ul class="language-picker__list" role="listbox">';
        for (var i = 0; i < picker.options.length; i++) {
            var selected = picker.options[i].hasAttribute("selected")
                    ? ' aria-selected="true"'
                    : "",
                language = picker.options[i].getAttribute("lang");
            list =
                list +
                '<li><a lang="' +
                language +
                '" hreflang="' +
                language +
                '" href="' +
                getLanguageUrl(picker.options[i]) +
                '"' +
                selected +
                ' role="option" data-value="' +
                picker.options[i].value +
                '" class="language-picker__item language-picker__flag language-picker__flag--' +
                picker.options[i].value +
                '"><span>' +
                picker.options[i].text +
                "</span></a></li>";
        }
        return list;
    }

    function getSelectedOptionText(picker) {
        // used to initialize the label of the picker trigger button
        var label = "";
        if ("selectedIndex" in picker.select) {
            label = picker.options[picker.select.selectedIndex].text;
        } else {
            label = picker.select.querySelector("option[selected]").text;
        }
        return label;
    }

    function getLanguageUrl(option) {
        // ⚠️ Important: You should replace this return value with the real link to your website in the selected language
        // option.value gives you the value of the language that you can use to create your real url (e.g, 'english' or 'italiano')
        return "#";
    }

    function initLanguageSelection(picker) {
        picker.element
            .getElementsByClassName("language-picker__list")[0]
            .addEventListener("click", function (event) {
                var language = event.target.closest(".language-picker__item");
                if (!language) return;

                if (
                    language.hasAttribute("aria-selected") &&
                    language.getAttribute("aria-selected") == "true"
                ) {
                    // selecting the same language
                    event.preventDefault();
                    picker.trigger.setAttribute("aria-expanded", "false"); // hide dropdown
                } else {
                    // ⚠️ Important: this 'else' code needs to be removed in production.
                    // The user has to be redirected to the new url -> nothing to do here
                    event.preventDefault();
                    picker.element
                        .getElementsByClassName("language-picker__list")[0]
                        .querySelector('[aria-selected="true"]')
                        .removeAttribute("aria-selected");
                    language.setAttribute("aria-selected", "true");
                    picker.trigger
                        .getElementsByClassName("language-picker__label")[0]
                        .setAttribute(
                            "class",
                            "language-picker__label language-picker__flag language-picker__flag--" +
                            language.getAttribute("data-value")
                        );
                    picker.trigger
                        .getElementsByClassName("language-picker__label")[0]
                        .getElementsByTagName("em")[0].innerText = language.innerText;
                    picker.trigger.setAttribute("aria-expanded", "false");
                }
            });
    }

    //initialize the LanguagePicker objects
    var languagePicker = document.getElementsByClassName("js-language-picker");
    if (languagePicker.length > 0) {
        var pickerArray = [];
        for (var i = 0; i < languagePicker.length; i++) {
            (function (i) {
                pickerArray.push(new LanguagePicker(languagePicker[i]));
            })(i);
        }

        // listen for key events
        window.addEventListener("keyup", function (event) {
            if (
                (event.keyCode && event.keyCode == 27) ||
                (event.key && event.key.toLowerCase() == "escape")
            ) {
                // close language picker on 'Esc'
                pickerArray.forEach(function (element) {
                    moveFocusToPickerTrigger(element); // if focus is within dropdown, move it to dropdown trigger
                    toggleLanguagePicker(element, "false"); // close dropdown
                });
            }
        });
        // close language picker when clicking outside it
        window.addEventListener("click", function (event) {
            pickerArray.forEach(function (element) {
                checkLanguagePickerClick(element, event.target);
            });
        });
    }
})();


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
    white-space: unset;
}


/* ============ small devices .end// ============ */
</style>
