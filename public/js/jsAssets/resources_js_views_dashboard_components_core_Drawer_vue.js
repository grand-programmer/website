"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_components_core_Drawer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Utilities

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DashboardCoreDrawer',
  props: {
    expandOnHover: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      items: [{
        icon: 'mdi-view-dashboard',
        title: 'dashboard',
        to: '/admin/#',
        role: [2, 3, 4]
      }, {
        icon: 'mdi-animation',
        title: 'Менюлар',
        to: '/admin/menu',
        role: [2, 3]
      }, {
        icon: 'mdi-animation',
        title: 'Қуйи қисмдаги менюлар',
        to: '/admin/footermenu',
        role: [2, 3]
      },
      /*            {
                      icon: 'mdi-animation',
                      title: 'Мурожаатлар',
                      to: '/admin/services/appeals',
                  },*/
      {
        icon: 'mdi-clipboard',
        title: 'Сахифалар',
        to: '/admin/pages',
        role: [2, 3]
        /*children:[
            {
                icon: 'mdi-clipboard',
                title: 'Сахифаlar',
                to: '/',
                link:'/admin/pages'
            },
            {
                icon: 'mdi-clipboard',
                title: 'Сахифа яратиш',
                to: '/create',
            },
        ]*/

      }, {
        title: 'Янгиликлар',
        icon: 'mdi-chart-bubble',
        to: '/admin/news',
        role: [2, 3]
      }, {
        title: 'Рубрикалар',
        icon: 'mdi-chart-bubble',
        to: '/admin/categories',
        role: [2, 3]
      }, {
        title: 'Файллар',
        icon: 'mdi-file-check',
        to: '/admin/files',
        role: [2, 3, 4]
      }, {
        title: 'Ходисалар',
        icon: 'mdi-calendar',
        to: '/admin/events',
        role: [2, 3]
      }, {
        title: 'Сўровномалар',
        icon: 'mdi-animation',
        to: '/admin/votes',
        role: [2, 3]
      }, {
        title: 'Савол ва жавоблар',
        icon: 'mdi-calendar-question',
        to: '/admin/faqs',
        role: [2, 3]
      }, {
        title: 'Рахбарият',
        icon: 'mdi-account',
        to: '/admin/rahbariyat',
        role: [2, 3]
      }, {
        title: 'Марказий аппарат бошқармалари',
        icon: 'mdi-account',
        to: '/admin/apparat',
        role: [2, 3]
      }, {
        title: 'Ҳудудий бошқармалар',
        icon: 'mdi-yurt',
        to: '/admin/orgs',
        role: [2, 3]
      }, {
        title: 'Ҳужжат категориялари',
        icon: 'mdi-account',
        to: '/admin/doccategories',
        role: [2, 4]
      }, {
        title: 'Ҳужжатлар',
        icon: 'mdi-yurt',
        to: '/admin/documents',
        role: [2, 4]
      }, {
        title: 'Таржималар',
        icon: 'mdi-poll',
        to: '/admin/translate',
        role: [2, 3]
      }, {
        title: 'Очиқ маълумотлар',
        icon: 'mdi-poll',
        to: '/admin/opendatas',
        role: [2, 3]
      }
      /*{
          icon: 'mdi-account',
          title: 'user',
          to: '/admin/pages/user',
      },
      {
          title: 'rtables',
          icon: 'mdi-clipboard-outline',
          to: '/admin/tables/regular-tables',
      },
      {
          title: 'typography',
          icon: 'mdi-format-font',
          to: '/admin/components/typography',
      },
       {
          title: 'google',
          icon: 'mdi-map-marker',
          to: '/admin/maps/google-maps',
      },
      {
          title: 'notifications',
          icon: 'mdi-bell',
          to: '/admin/components/notifications',
      },*/
      ]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['barColor', 'barImage'])), {}, {
    drawer: {
      get: function get() {
        return this.$store.state.drawer;
      },
      set: function set(val) {
        this.$store.commit('SET_DRAWER', val);
      }
    },
    computedItems: function computedItems() {
      return this.items.map(this.mapItem);
    },
    profile: function profile() {
      return {
        avatar: true,
        title: this.$t('avatar')
      };
    }
  }),
  methods: {
    mapItem: function mapItem(item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.$t(item.title)
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=style&index=0&lang=sass&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=style&index=0&lang=sass& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#core-navigation-drawer .v-list-group__header.v-list-item--active:before {\n  opacity: 0.24;\n}\n#core-navigation-drawer .v-list-item__icon--text, #core-navigation-drawer .v-list-item__icon:first-child {\n  justify-content: center;\n  text-align: center;\n  width: 20px;\n}\n.v-application--is-ltr #core-navigation-drawer .v-list-item__icon--text, .v-application--is-ltr #core-navigation-drawer .v-list-item__icon:first-child {\n  margin-right: 24px;\n  margin-left: 12px !important;\n}\n.v-application--is-rtl #core-navigation-drawer .v-list-item__icon--text, .v-application--is-rtl #core-navigation-drawer .v-list-item__icon:first-child {\n  margin-left: 24px;\n  margin-right: 12px !important;\n}\n#core-navigation-drawer .v-list--dense .v-list-item__icon--text, #core-navigation-drawer .v-list--dense .v-list-item__icon:first-child {\n  margin-top: 10px;\n}\n.v-application--is-ltr #core-navigation-drawer .v-list-group--sub-group .v-list-item {\n  padding-left: 8px;\n}\n.v-application--is-rtl #core-navigation-drawer .v-list-group--sub-group .v-list-item {\n  padding-right: 8px;\n}\n.v-application--is-ltr #core-navigation-drawer .v-list-group--sub-group .v-list-group__header {\n  padding-right: 0;\n}\n.v-application--is-rtl #core-navigation-drawer .v-list-group--sub-group .v-list-group__header {\n  padding-right: 0;\n}\n#core-navigation-drawer .v-list-group--sub-group .v-list-group__header .v-list-item__icon--text {\n  margin-top: 19px;\n  order: 0;\n}\n#core-navigation-drawer .v-list-group--sub-group .v-list-group__header .v-list-group__header__prepend-icon {\n  order: 2;\n}\n.v-application--is-ltr #core-navigation-drawer .v-list-group--sub-group .v-list-group__header .v-list-group__header__prepend-icon {\n  margin-right: 8px;\n}\n.v-application--is-rtl #core-navigation-drawer .v-list-group--sub-group .v-list-group__header .v-list-group__header__prepend-icon {\n  margin-left: 8px;\n}\n.v-list-item .v-list-item__title.display-1 {\n  line-height: 1.2;\n  overflow: visible;\n  white-space: normal;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=style&index=0&lang=sass&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=style&index=0&lang=sass& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drawer.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=style&index=0&lang=sass&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/dashboard/components/core/Drawer.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/dashboard/components/core/Drawer.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Drawer_vue_vue_type_template_id_645c9762___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer.vue?vue&type=template&id=645c9762& */ "./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=template&id=645c9762&");
/* harmony import */ var _Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drawer.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=script&lang=js&");
/* harmony import */ var _Drawer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer.vue?vue&type=style&index=0&lang=sass& */ "./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Drawer_vue_vue_type_template_id_645c9762___WEBPACK_IMPORTED_MODULE_0__.render,
  _Drawer_vue_vue_type_template_id_645c9762___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/components/core/Drawer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=style&index=0&lang=sass&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=style&index=0&lang=sass& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drawer.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=style&index=0&lang=sass&");


/***/ }),

/***/ "./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=template&id=645c9762&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=template&id=645c9762& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_template_id_645c9762___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_template_id_645c9762___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_template_id_645c9762___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drawer.vue?vue&type=template&id=645c9762& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=template&id=645c9762&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=template&id=645c9762&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/components/core/Drawer.vue?vue&type=template&id=645c9762& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-navigation-drawer",
    _vm._b(
      {
        attrs: {
          id: "core-navigation-drawer",
          dark:
            _vm.barColor !== "rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)",
          "expand-on-hover": _vm.expandOnHover,
          right: _vm.$vuetify.rtl,
          src: _vm.barImage,
          "mobile-breakpoint": "960",
          app: "",
          width: "260",
        },
        scopedSlots: _vm._u([
          {
            key: "img",
            fn: function (props) {
              return [
                _c(
                  "v-img",
                  _vm._b(
                    { attrs: { gradient: "to bottom, " + _vm.barColor } },
                    "v-img",
                    props,
                    false
                  )
                ),
              ]
            },
          },
        ]),
        model: {
          value: _vm.drawer,
          callback: function ($$v) {
            _vm.drawer = $$v
          },
          expression: "drawer",
        },
      },
      "v-navigation-drawer",
      _vm.$attrs,
      false
    ),
    [
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { dense: "", nav: "" } },
        [
          _c(
            "v-list-item",
            { attrs: { to: "/admin" } },
            [
              _c("v-img", {
                attrs: {
                  to: "/",
                  src: "/img/gtk_image.png",
                  "max-height": "100",
                  contain: "contain",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider", { staticClass: "mb-2" }),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { expand: "", nav: "" } },
        [
          _c("div"),
          _vm._v(" "),
          _vm._l(_vm.computedItems, function (item, i) {
            return [
              item.role.includes(_vm.$auth.user().role)
                ? [
                    item.children
                      ? _c("base-item-group", {
                          key: "group-" + i,
                          attrs: { item: item },
                        })
                      : _c("base-item", {
                          key: "item-" + i,
                          attrs: { item: item },
                        }),
                  ]
                : _vm._e(),
            ]
          }),
          _vm._v(" "),
          _c("div"),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);