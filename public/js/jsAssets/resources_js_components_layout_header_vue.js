"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layout_header_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Language-dropdown",
  props: {
    items: {
      type: [Object, Array],
      "default": null
    }
  },
  data: function data() {
    return {
      languageMenuOpen: false,
      language: localStorage.getItem('language') || 'uz',
      languages: [{
        code: 'uz',
        title: 'ЎЗБ'
      }, {
        code: 'oz',
        title: 'UZB'
      }, {
        code: 'ru',
        title: 'РУС'
      }, {
        code: 'en',
        title: 'ENG'
      }]
    };
  },
  mounted: function mounted() {
    if (typeof this.value !== 'undefined' && this.value !== null) this.language = this.value;
  },
  methods: {
    getLanguage: function getLanguage(code) {
      var language = this.languages.filter(function (obj) {
        if (obj.code === code) return obj;
      });
      if (typeof language[0] != 'undefined') return language[0];
    },
    selectMenu: function selectMenu() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.language = el;
      this.languageMenuOpen = false; //this.$i18n.locale=el;

      localStorage.setItem('language', el);

      if (typeof this.$route.params.locale !== 'undefined') {
        var path = this.$route.fullPath.replace(this.$route.params.locale, el); //if(path.includes("/",path.length))
        ///  path=path.substring(0,path.length-1)

        window.location.href = path;
        /*this.$router.push({
            path,
            query:this.$route.query,
            redirect:true
        });*/
      } else {
        window.location.href = this.$route.fullPath;
        /*                this.$router.push({
                            path: this.$route.path,
                            query: this.$route.query,
                            redirect: true
                        });*/
      }

      console.log(this.$route); //console.log(this.$i18n.locale)
      //$(el).closest('.language-dropdown').toggleClass("open");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../src/services/apiService */ "./resources/js/src/services/apiService.js");
/* harmony import */ var _custom_language_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom/language-selector */ "./resources/js/components/custom/language-selector.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Header",
  components: {
    LanguageDropdown: _custom_language_selector__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      links: [],
      pushAccess: null
    };
  },
  created: function created() {
    this.initialize();
  },
  computed: {
    pushAccessComputed: function pushAccessComputed() {
      return this.pushAccess;
    }
  },
  methods: {
    setPushAccess: function setPushAccess() {
      var confirm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (confirm) {
        this.pushAccess = true;
        this.$cookie.set("push", true);
      } else {
        this.pushAccess = false;
        this.$cookie.set("push", false);
      }
    },
    getPushAccess: function getPushAccess() {
      if (this.$cookie.get('push') !== null) {
        if (this.$cookie.get('push')) this.pushAccess = true;else this.pushAccess = false;
      }
    },
    initialize: function initialize() {
      var _this = this;

      this.getPushAccess();
      _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].readMenusFront().then(function (response) {
        _this.links = response.data.data;

        _this.$store.dispatch('SET_MENU', _this.links);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});
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
      });
    });
    document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
      element.addEventListener('click', function (e) {
        var nextEl = this.nextElementSibling;

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
    });
  } // end if innerWidth

}); // language

$(document).click(function (e) {
  var container = $(".language-dropdown"); // if the target of the click isn't the container nor a descendant of the container

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".language-dropdown").removeClass("open");
  }
}); //end language

$(function () {
  function slideMenu() {
    var activeState = $(".menu-container .menu-list").hasClass("active");
    $(".menu-container .menu-list").animate({
      left: activeState ? "0%" : "-100%"
    }, 400);
  }

  $("body").on("click", ".menu-wrapper .hamburger-menu", function (event) {
    event.stopPropagation();
    $(".hamburger-menu").toggleClass("open");
    $(".menu-container .menu-list").toggleClass("active");
    slideMenu();
    $("body").toggleClass("overflow-hidden");
  });
  $(".menu-list").find(".accordion-toggle").click(function () {
    $(this).next().toggleClass("open").slideToggle("fast");
    $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
    $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
    $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.language-dropdown label {\n    border: 1px solid var(--mycolor);\n    justify-content: center;\n}\n.language-dropdown ul.lang-list li{\n    padding: 4px 6px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.subscribe-notification{\n    position: absolute;\n    top: 10px;\n    left: 75px;\n    width: 400px;\n    background-color: #ffff;\n    padding: 10px 25px;\n    z-index: 11;\n    border-radius: 10px;\n    font-family: Roboto;\n    color: #000;\n    border: 1px solid var(--mycolor);\n}\n.subscribe-notification .btn-primary {\n    color: #fff;\n    background: var(--mycolor);\n    border-color: var(--mycolor);\n    padding: 0 10px;\n}\n@media all and (min-width: 992px) {\n.dropdown-menu li {\n        position: relative;\n}\n.nav-item .submenu {\n        display: none;\n        position: absolute;\n        left: 100%;\n        top: -7px;\n}\n.nav-item .submenu-left {\n        right: 100%;\n        left: auto;\n}\n.dropdown-menu > li:hover {\n        background-color: #f1f1f1\n}\n.dropdown-menu > li:hover > .submenu {\n        display: block;\n}\n}\n\n/* ============ desktop view .end// ============ */\n/* ============ small devices ============ */\n@media (max-width: 991px) {\n.dropdown-menu .dropdown-menu {\n        margin-left: 0.7rem;\n        margin-right: 0.7rem;\n        margin-bottom: .5rem;\n}\n}\n.navbar-nav .dropdown-menu {\n    position: absolute;\n    max-width: 15vw;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n}\n.navbar-nav .dropdown-menu > li > a {\n    white-space: unset !important;\n}\n\n\n/*mobile*/\n.menu-wrapper {\n    overflow: hidden;\n    max-width: 100%;\n    cursor: pointer;\n}\n.menu-wrapper .hamburger-menu {\n    position: relative;\n    width: 25px;\n    height: 20px;\n    margin-top: 19px;\n}\n.menu-wrapper .hamburger-menu span {\n    opacity: 1;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 2px;\n    border-radius: 10px;\n    color: black;\n    background-color: #000;\n    position: absolute;\n    transform: rotate(0deg);\n    transition: .4s ease-in-out;\n}\n.menu-wrapper .hamburger-menu span:nth-child(1) {\n    top: 0;\n}\n.menu-wrapper .hamburger-menu span:nth-child(2) {\n    top: 9px;\n}\n.menu-wrapper .hamburger-menu span:nth-child(3) {\n    top: 18px;\n}\n.menu-wrapper .hamburger-menu.open span:nth-child(1) {\n    transform: translateY(9px) rotate(135deg);\n}\n.menu-wrapper .hamburger-menu.open span:nth-child(2) {\n    opacity: 0;\n    transform: translateX(-60px);\n}\n.menu-wrapper .hamburger-menu.open span:nth-child(3) {\n    transform: translateY(-9px) rotate(-135deg);\n}\n\n/*.menu-container .menu-list .menu-submenu {*/\n/*    white-space: unset;*/\n/*    padding: 20px !important;*/\n/*    left: 10%;*/\n/*}*/\n.menu-container .menu-list {\n    padding-left: 0;\n    display: block;\n    position: absolute;\n    width: 100%;\n    max-width: 450px;\n    height: 1024px;\n    background: white;\n    box-shadow: rgba(100, 100, 100, 0.2) 6px 2px 10px;\n    z-index: 999;\n    overflow-y: auto;\n    overflow-x: hidden;\n    left: -100%;\n}\n.menu-container .menu-list li.accordion-toggle, .menu-container .menu-list .menu-login {\n    font-size: 16px;\n    text-align: center;\n    padding: 20px;\n    text-transform: uppercase;\n    border-top: 1px solid #dbdcd2;\n}\n.menu-container .menu-list li:first-of-type {\n    border-top: 0;\n}\n.accordion-toggle, .accordion-content {\n    cursor: pointer;\n    font-size: 16px;\n    position: relative;\n    letter-spacing: 1px;\n}\n.accordion-content {\n    display: none;\n}\n\n/*.accordion-toggle a:before, .accordion-toggle a:after {*/\n/*    content: '';*/\n/*    display: block;*/\n/*    position: absolute;*/\n/*    top: 50%;*/\n/*    right: 30px;*/\n/*    width: 15px;*/\n/*    height: 2px;*/\n/*    margin-top: -1px;*/\n/*    background-color: #5a5858;*/\n/*    transform-origin: 50% 50%;*/\n/*    transition: all 0.3s ease-out;*/\n/*}*/\n\n/*.accordion-toggle a:before {*/\n/*    transform: rotate(-90deg);*/\n/*    opacity: 1;*/\n/*    z-index: 2;*/\n/*}*/\n.accordion-toggle.active-tab {\n    background: #000;\n\n    transition: all 0.3s ease;\n}\n.accordion-toggle a.active:before {\n    transform: rotate(0deg);\n    background: #fff !important;\n}\n.accordion-toggle a.active:after {\n    transform: rotate(180deg);\n    background: #fff !important;\n    opacity: 0;\n}\n.menu-wrapper {\n    display: none !important;\n}\n.menu-container .menu-list.accordion {\n    display: none;\n}\n@media (max-width: 1480px) {\n.menu-wrapper {\n        display: block !important;\n}\n.menu-container .menu-list.accordion {\n        display: block !important;\n}\n}\n@media (max-width: 576px) {\n.menu-wrapper .hamburger-menu {\n        position: absolute;\n        margin-top: -38px;\n        left: 83%;\n}\n.menu-list {\n        margin-top: 5px !important;\n}\n}\n\n/* ============ small devices .end// ============ */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_language_selector_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./language-selector.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_language_selector_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_language_selector_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/custom/language-selector.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/custom/language-selector.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _language_selector_vue_vue_type_template_id_e46e483e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language-selector.vue?vue&type=template&id=e46e483e& */ "./resources/js/components/custom/language-selector.vue?vue&type=template&id=e46e483e&");
/* harmony import */ var _language_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language-selector.vue?vue&type=script&lang=js& */ "./resources/js/components/custom/language-selector.vue?vue&type=script&lang=js&");
/* harmony import */ var _language_selector_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language-selector.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/custom/language-selector.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _language_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _language_selector_vue_vue_type_template_id_e46e483e___WEBPACK_IMPORTED_MODULE_0__.render,
  _language_selector_vue_vue_type_template_id_e46e483e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/custom/language-selector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/header.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/layout/header.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue_vue_type_template_id_37f0c7d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=37f0c7d7& */ "./resources/js/components/layout/header.vue?vue&type=template&id=37f0c7d7&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/header.vue?vue&type=script&lang=js&");
/* harmony import */ var _header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/layout/header.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_37f0c7d7___WEBPACK_IMPORTED_MODULE_0__.render,
  _header_vue_vue_type_template_id_37f0c7d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/custom/language-selector.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/custom/language-selector.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_language_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./language-selector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_language_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/header.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/layout/header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/custom/language-selector.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/custom/language-selector.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_language_selector_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./language-selector.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/layout/header.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/layout/header.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/custom/language-selector.vue?vue&type=template&id=e46e483e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/custom/language-selector.vue?vue&type=template&id=e46e483e& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_language_selector_vue_vue_type_template_id_e46e483e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_language_selector_vue_vue_type_template_id_e46e483e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_language_selector_vue_vue_type_template_id_e46e483e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./language-selector.vue?vue&type=template&id=e46e483e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=template&id=e46e483e&");


/***/ }),

/***/ "./resources/js/components/layout/header.vue?vue&type=template&id=37f0c7d7&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layout/header.vue?vue&type=template&id=37f0c7d7& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_37f0c7d7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_37f0c7d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_37f0c7d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=template&id=37f0c7d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=template&id=37f0c7d7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=template&id=e46e483e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/language-selector.vue?vue&type=template&id=e46e483e& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "span",
      {
        staticClass: "d-none",
        attrs: { id: "lang_selected", title: "Tilni tanlang" },
      },
      [_vm._v(_vm._s(_vm.getLanguage(_vm.language).title))]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "language-dropdown",
        class: _vm.languageMenuOpen ? "open" : "",
        attrs: { id: "lang_selector" },
      },
      [
        _c(
          "label",
          {
            staticClass: "lang-flag d-flex align-items-center fw-normal m-0",
            attrs: { title: "Tilni tanlang" },
            on: {
              click: function ($event) {
                _vm.languageMenuOpen = !_vm.languageMenuOpen
              },
            },
          },
          [
            _c("span", { staticClass: "flag1111" }, [
              _vm._v(_vm._s(_vm.getLanguage(_vm.language).title)),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "lang-list" },
          _vm._l(_vm.languages, function (lang) {
            return _c(
              "li",
              {
                staticClass: "lang",
                class:
                  lang.code === _vm.language
                    ? "lang-" + lang.code + " selected"
                    : "lang-" + lang.code,
                attrs: { title: lang.title },
                on: {
                  click: function ($event) {
                    return _vm.selectMenu(lang.code)
                  },
                },
              },
              [
                _c("span", { staticClass: "flag111" }, [
                  _vm._v(_vm._s(lang.title)),
                ]),
              ]
            )
          }),
          0
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=template&id=37f0c7d7&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/header.vue?vue&type=template&id=37f0c7d7& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "logo_area" }, [
    _c("div", { staticClass: "header" }, [
      _c("div", { staticClass: "header-main" }, [
        _c(
          "div",
          {
            staticClass: "container-fluid",
            staticStyle: { "padding-top": "6px" },
          },
          [
            _c("div", { staticClass: "header-top" }, [
              _c(
                "div",
                { staticClass: "header-logo" },
                [
                  _c(
                    "router-link",
                    { staticClass: "header-logo", attrs: { to: "/" } },
                    [
                      _c("img", {
                        attrs: { src: "/img/gtk_image.png", alt: "" },
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            _vm.$t(
                              "Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси"
                            )
                          ) + "  "
                        ),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "header-menu" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "new-navbar desktop-menu navbar-expand-lg navbar-collapse ",
                  },
                  [
                    _c(
                      "ul",
                      {
                        staticClass: "nav navbar-nav",
                        staticStyle: { color: "#000 !important" },
                        attrs: { id: "main-menu" },
                      },
                      _vm._l(_vm.links, function (link, index) {
                        return _c(
                          "li",
                          {
                            key: index,
                            staticClass: "dropdown nav-item",
                            class:
                              _vm.$route.params.id == link.id ? "active" : "",
                          },
                          [
                            link.children && link.children[0]
                              ? _c(
                                  "router-link",
                                  {
                                    staticClass: "nav-link",
                                    attrs: { to: link.url },
                                  },
                                  [
                                    _c("span", { staticClass: "menu_slider" }),
                                    _vm._v(
                                      _vm._s(link.title) +
                                        "\n                                    "
                                    ),
                                  ]
                                )
                              : _c(
                                  "router-link",
                                  {
                                    staticClass: "nav-link",
                                    attrs: { to: link.url },
                                  },
                                  [
                                    _c("span", { staticClass: "menu_slider" }),
                                    _vm._v(
                                      _vm._s(link.title) +
                                        "\n                                    "
                                    ),
                                  ]
                                ),
                            _vm._v(" "),
                            link.children && link.children[0]
                              ? _c(
                                  "ul",
                                  { staticClass: "dropdown-menu " },
                                  _vm._l(
                                    link.children,
                                    function (sublink, index) {
                                      return sublink && index < 10
                                        ? _c(
                                            "li",
                                            { key: index },
                                            [
                                              !sublink.url.includes("http")
                                                ? _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        to: sublink.url,
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            sublink.title
                                                          ) +
                                                          " "
                                                      ),
                                                      sublink.children &&
                                                      sublink.children[0]
                                                        ? _c(
                                                            "span",
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-chevron-down"
                                                                ),
                                                              ]),
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  )
                                                : _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        target: "_blank",
                                                        href: sublink.url,
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(sublink.title) +
                                                          " "
                                                      ),
                                                      sublink.children &&
                                                      sublink.children[0]
                                                        ? _c(
                                                            "span",
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-chevron-down"
                                                                ),
                                                              ]),
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  ),
                                              _vm._v(" "),
                                              sublink.children &&
                                              sublink.children[0]
                                                ? _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "submenu dropdown-menu",
                                                    },
                                                    _vm._l(
                                                      sublink.children,
                                                      function (
                                                        sublinkchildren,
                                                        index
                                                      ) {
                                                        return sublinkchildren
                                                          ? _c(
                                                              "li",
                                                              { key: index },
                                                              [
                                                                _c(
                                                                  "router-link",
                                                                  {
                                                                    staticClass:
                                                                      "dropdown-item",
                                                                    attrs: {
                                                                      to: sublinkchildren.url,
                                                                    },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                        " +
                                                                        _vm._s(
                                                                          sublinkchildren.title
                                                                        ) +
                                                                        "\n                                                    "
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                sublinkchildren.children &&
                                                                sublinkchildren
                                                                  .children[0]
                                                                  ? _c(
                                                                      "ul",
                                                                      {
                                                                        staticClass:
                                                                          "submenu dropdown-menu",
                                                                      },
                                                                      _vm._l(
                                                                        sublinkchildren.children,
                                                                        function (
                                                                          slch,
                                                                          index
                                                                        ) {
                                                                          return slch
                                                                            ? _c(
                                                                                "li",
                                                                                {
                                                                                  key:
                                                                                    index +
                                                                                    slch.id,
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "router-link",
                                                                                    {
                                                                                      staticClass:
                                                                                        "dropdown-item",
                                                                                      attrs:
                                                                                        {
                                                                                          to: slch.url,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "\n                                                                " +
                                                                                          _vm._s(
                                                                                            slch.title
                                                                                          ) +
                                                                                          "\n                                                            "
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                ],
                                                                                1
                                                                              )
                                                                            : _vm._e()
                                                                        }
                                                                      ),
                                                                      0
                                                                    )
                                                                  : _vm._e(),
                                                              ],
                                                              1
                                                            )
                                                          : _vm._e()
                                                      }
                                                    ),
                                                    0
                                                  )
                                                : _vm._e(),
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    }
                                  ),
                                  0
                                )
                              : _vm._e(),
                          ],
                          1
                        )
                      }),
                      0
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "header-settings" },
                [
                  _c(
                    "div",
                    { staticClass: "header-item header-mail" },
                    [
                      _c("li", { staticClass: "hududiy_boshqarmalar" }, [
                        _c(
                          "a",
                          {
                            staticClass: "d-inline",
                            attrs: { href: ".hududiy.section" },
                          },
                          [
                            _c("i", {
                              staticClass:
                                "tortlink fas fa-map-marker-alt mr-1 ",
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "tort" }, [
                              _vm._v(_vm._s(_vm.$t("Ҳудудий бошқармалар"))),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _vm.$auth.check()
                        ? _c(
                            "v-menu",
                            {
                              attrs: { "offset-y": "", left: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function (ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "div",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass:
                                                  "d-flex align-items-center",
                                              },
                                              "div",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mr-1",
                                                attrs: {
                                                  elevation: "0",
                                                  "x-small": "",
                                                  fab: "",
                                                  color: "primary",
                                                },
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    attrs: {
                                                      size: "x-large",
                                                      color: "#fff",
                                                    },
                                                  },
                                                  [_vm._v("mdi-account")]
                                                ),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticStyle: {
                                                  width: "min-content",
                                                  "font-size": "12px",
                                                  "text-align": "center",
                                                  margin: "0 10px",
                                                  "font-weight": "600",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.$auth.user()
                                                        .first_name
                                                    ) +
                                                    " " +
                                                    _vm._s(
                                                      _vm.$auth.user().sur_name
                                                    )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                false,
                                3103376607
                              ),
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-list",
                                [
                                  _c(
                                    "v-list-item",
                                    { attrs: { to: "/profile" } },
                                    [_vm._v("Менинг профилим")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item",
                                    { attrs: { to: "/applications" } },
                                    [_vm._v("Менинг аризаларим")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function ($event) {
                                          $event.preventDefault()
                                          return _vm.$auth.logout({
                                            makeRequest: true,
                                            redirect: { name: "login" },
                                          })
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("Чиқиш")) +
                                          "\n                                    "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$auth.check()
                        ? _c(
                            "router-link",
                            {
                              staticStyle: {
                                width: "min-content",
                                "line-height": "16px",
                              },
                              attrs: { to: "/login" },
                            },
                            [
                              _c("i", { staticClass: "fas fa-sign-in-alt" }),
                              _c("span", { staticClass: "tort" }, [
                                _vm._v(" " + _vm._s(_vm.$t("Кабинетга кириш"))),
                              ]),
                            ]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("language-dropdown", { staticClass: "header-lang" }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "menu-container" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "menu-list accordion ",
                    staticStyle: { "margin-top": "25px" },
                  },
                  [
                    _vm._l(_vm.links, function (link, index) {
                      return _c(
                        "li",
                        {
                          key: index,
                          staticClass: "toggle accordion-toggle",
                          class:
                            _vm.$route.params.id == link.id ? "active" : "",
                          attrs: { id: "main-menu11" },
                        },
                        [
                          link.children && link.children[0]
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "nav-link dropdown-toggle",
                                  attrs: {
                                    "data-bs-toggle": "dropdown",
                                    to: link.url,
                                  },
                                },
                                [
                                  _c("span", { staticClass: "menu_slider" }),
                                  _vm._v(
                                    _vm._s(link.title) +
                                      "\n                                "
                                  ),
                                ]
                              )
                            : _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: link.url },
                                },
                                [
                                  _c("span", { staticClass: "menu_slider" }),
                                  _vm._v(
                                    _vm._s(link.title) +
                                      "\n                                "
                                  ),
                                ]
                              ),
                          _vm._v(" "),
                          link.children && link.children[0]
                            ? _c(
                                "ul",
                                { staticClass: "dropdown-menu  " },
                                _vm._l(
                                  link.children,
                                  function (sublink, index) {
                                    return sublink
                                      ? _c(
                                          "li",
                                          { key: index },
                                          [
                                            !sublink.url.includes("http")
                                              ? _c(
                                                  "router-link",
                                                  {
                                                    staticClass:
                                                      "dropdown-item",
                                                    attrs: { to: sublink.url },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(sublink.title) +
                                                        "\n                                        "
                                                    ),
                                                  ]
                                                )
                                              : _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "dropdown-item",
                                                    attrs: {
                                                      href: sublink.url,
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(sublink.title)
                                                    ),
                                                  ]
                                                ),
                                            _vm._v(" "),
                                            sublink.children &&
                                            sublink.children[0]
                                              ? _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "submenu accordion-content",
                                                  },
                                                  _vm._l(
                                                    sublink.children,
                                                    function (
                                                      sublinkchildren,
                                                      index
                                                    ) {
                                                      return sublinkchildren
                                                        ? _c(
                                                            "li",
                                                            { key: index },
                                                            [
                                                              !sublinkchildren.url.includes(
                                                                "http"
                                                              )
                                                                ? _c(
                                                                    "router-link",
                                                                    {
                                                                      staticClass:
                                                                        "dropdown-item",
                                                                      attrs: {
                                                                        to: sublinkchildren.url,
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                    " +
                                                                          _vm._s(
                                                                            sublinkchildren.title
                                                                          ) +
                                                                          "\n                                                "
                                                                      ),
                                                                    ]
                                                                  )
                                                                : _c(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "dropdown-item",
                                                                      attrs: {
                                                                        href: sublinkchildren.url,
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          sublinkchildren.title
                                                                        )
                                                                      ),
                                                                    ]
                                                                  ),
                                                              _vm._v(" "),
                                                              sublinkchildren.children &&
                                                              sublinkchildren
                                                                .children[0]
                                                                ? _c(
                                                                    "ul",
                                                                    {
                                                                      staticClass:
                                                                        "submenu dropdown-menu",
                                                                    },
                                                                    _vm._l(
                                                                      sublinkchildren.children,
                                                                      function (
                                                                        slch,
                                                                        index
                                                                      ) {
                                                                        return slch
                                                                          ? _c(
                                                                              "li",
                                                                              {
                                                                                key:
                                                                                  index +
                                                                                  slch.id,
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "router-link",
                                                                                  {
                                                                                    staticClass:
                                                                                      "dropdown-item",
                                                                                    attrs:
                                                                                      {
                                                                                        to: slch.url,
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      "\n                                                            " +
                                                                                        _vm._s(
                                                                                          slch.title
                                                                                        ) +
                                                                                        "\n                                                        "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ],
                                                                              1
                                                                            )
                                                                          : _vm._e()
                                                                      }
                                                                    ),
                                                                    0
                                                                  )
                                                                : _vm._e(),
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e()
                                                    }
                                                  ),
                                                  0
                                                )
                                              : _vm._e(),
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  }
                                ),
                                0
                              )
                            : _vm._e(),
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "m-settings",
                        staticStyle: {
                          display: "block",
                          "margin-left": "auto",
                          "margin-right": "auto",
                        },
                      },
                      [
                        _c("div", { staticClass: "hududiy_boshqarmalar2" }, [
                          _c(
                            "a",
                            {
                              staticClass: "d-inline",
                              attrs: {
                                href: ".hududiy.section",
                                "data-toggle": "collapse",
                                role: "button",
                                "aria-expanded": "false",
                              },
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-map-marker-alt mr-1 ",
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "tort" }, [
                                _vm._v(_vm._s(_vm.$t("Ҳудудий бошқармалар"))),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex" },
                          [
                            _vm.$auth.check()
                              ? _c(
                                  "v-menu",
                                  {
                                    attrs: { "offset-y": "", left: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function (ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "div",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      staticClass:
                                                        "d-flex align-items-center",
                                                    },
                                                    "div",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      staticClass: "mr-1",
                                                      attrs: {
                                                        elevation: "0",
                                                        "x-small": "",
                                                        fab: "",
                                                        color: "primary",
                                                      },
                                                    },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-account"),
                                                      ]),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticStyle: {
                                                        width: "min-content",
                                                        "font-size": "12px",
                                                        "text-align": "center",
                                                        margin: "0 10px",
                                                        "font-weight": "600",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            _vm.$auth.user()
                                                              .first_name
                                                          ) +
                                                          " " +
                                                          _vm._s(
                                                            _vm.$auth.user()
                                                              .sur_name
                                                          )
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      false,
                                      1951186320
                                    ),
                                  },
                                  [
                                    _vm._v(" "),
                                    _c(
                                      "v-list",
                                      [
                                        _c(
                                          "v-list-item",
                                          { attrs: { to: "/profile" } },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("Менинг профилим"))
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item",
                                          { attrs: { to: "/applications" } },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("Менинг аризаларим")
                                              ) +
                                                "\n                                            "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item",
                                          { attrs: { to: "/services?page=3" } },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("Реестрлар")) +
                                                "\n                                            "
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item",
                                          {
                                            attrs: { href: "#" },
                                            on: {
                                              click: function ($event) {
                                                $event.preventDefault()
                                                return _vm.$auth.logout({
                                                  makeRequest: true,
                                                  redirect: { name: "login" },
                                                })
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("Чиқиш")) +
                                                "\n                                            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.$auth.check()
                              ? _c("router-link", { attrs: { to: "/login" } }, [
                                  _c("i", {
                                    staticClass: "fas fa-sign-in-alt",
                                  }),
                                ])
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("language-dropdown", { staticClass: "mm-lang" }),
                      ],
                      1
                    ),
                  ],
                  2
                ),
              ]),
            ]),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm.pushAccessComputed === null
      ? _c("div", { staticClass: "subscribe-notification" }, [
          _vm._v(
            "\n        Энг муҳим янгиликларни биринчи бўлиб олишни xоҳлайсизми? Билдиришномаларга обуна бўлинг!    "
          ),
          _c("br"),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: " btn btn-primary subscribe",
              on: {
                click: function ($event) {
                  return _vm.setPushAccess(true)
                },
              },
            },
            [_vm._v("Обуна бўлиш")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: " btn btn-primary reject ",
              on: {
                click: function ($event) {
                  return _vm.setPushAccess(false)
                },
              },
            },
            [_vm._v("Бекор қилиш")]
          ),
          _vm._v(" "),
          _c("br"),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "menu-wrapper" }, [
      _c("div", { staticClass: "hamburger-menu" }, [
        _c("span"),
        _vm._v(" "),
        _c("span"),
        _vm._v(" "),
        _c("span"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);