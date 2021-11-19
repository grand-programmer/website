"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_news_category_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../src/services/apiService */ "./resources/js/src/services/apiService.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Category',
  data: function data() {
    return {
      breadcrumb_items: [{
        text: 'Асосий саҳифа',
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: '',
        to: '/category/',
        disabled: true,
        exact: true
      }],

      /*id:this.$route.params.id,*/
      categories: {},
      category: {},
      related_news: {}
    };
  },
  watch: {
    $route: function $route(to, from) {
      this.initialize();
    }
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.initialize();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    close: function close() {
      this.$router.replace('/');
    },
    initialize: function initialize() {
      var _this2 = this;

      _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readCategory(this.$route.params.slug, true).then(function (response) {
        _this2.category = response.data;

        _this2.category.news.map(function (i) {
          var dateParts = i.created_at.split("T");
          if (new Date(i.created_at).getDate() === new Date().getDate()) i.created_at = dateParts[1].substring(0, 5);else i.created_at = dateParts[0];
          return i;
        });

        _this2.breadcrumb_items[1].text = _this2.category.title;
      })["catch"](function (error) {
        _this2.$store.dispatch('setSnackbar', {
          color: 'error',
          text: 'Маълумотларни юклашда хатолик содир бўлди!'
        });

        _this2.$router.replace("/")["catch"](function () {});
      });
      _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readNews().then(function (response) {
        _this2.related_news = response.data.map(function (i) {
          var dateParts = i.created_at.split("T");
          if (new Date(i.created_at).getDate() === new Date().getDate()) i.created_at = dateParts[1].substring(0, 5);else i.created_at = dateParts[0];
          return i;
        });
      })["catch"](function (error) {
        _this2.$store.dispatch('setSnackbar', {
          color: 'error',
          text: 'Маълумотларни юклашда хатолик содир бўлди!'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.news__img {\n    position: relative;\n    width: 100%;\n    padding-bottom: 60%;\n    overflow: hidden;\n    display: block;\n    margin-bottom: 12px;\n}\n.news__img img {\n    display: block;\n    transition: 1s ease;\n    -o-object-fit: cover;\n    object-fit: cover;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n.news-item .news__title {\n    color: #000;\n}\n.news-item {\n    margin-bottom: 20px;\n}\n.news-lenta {\n    padding-bottom: 18px;\n    border-bottom: 1px solid rgba(197, 197, 197, 0.8);\n    margin-bottom: 18px;\n    display: inline-block;\n    cursor: pointer;\n}\n.news-meta {\n    margin-bottom: 10px;\n    opacity: 0.8;\n    color: #000000;\n    font-size: 12px;\n    padding-left: 20px;\n    background: url(/img/calendar.svg) no-repeat center left;\n    background-size: contain;\n}\n.news-meta > span {\n    color: #8F8F8F;\n    font-weight: 300;\n}\n.news-lenta__title {\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 21px;\n    color: #000000;\n    transition: .2s ease;\n}\n.widget_tittle {\n    padding-bottom: 35px;\n    border-bottom: 2px solid #39ae69;\n}\n.left_sidebar_widget {\n    margin-top: 30px;\n}\n.single_layout-right {\n    margin-top: 40px;\n}\n.news-item.col.col-4:hover {\n    box-shadow: 0 0 9px -6px #000;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/news/category.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/frontend/news/category.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _category_vue_vue_type_template_id_fb437688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=fb437688& */ "./resources/js/views/frontend/news/category.vue?vue&type=template&id=fb437688&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/news/category.vue?vue&type=script&lang=js&");
/* harmony import */ var _category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/frontend/news/category.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_fb437688___WEBPACK_IMPORTED_MODULE_0__.render,
  _category_vue_vue_type_template_id_fb437688___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/news/category.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/news/category.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/frontend/news/category.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/news/category.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/frontend/news/category.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/frontend/news/category.vue?vue&type=template&id=fb437688&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/frontend/news/category.vue?vue&type=template&id=fb437688& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_fb437688___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_fb437688___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_fb437688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=template&id=fb437688& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=template&id=fb437688&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=template&id=fb437688&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/category.vue?vue&type=template&id=fb437688& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "section page-container" },
    [
      _c(
        "div",
        { staticClass: "whitebreadcrumb breadcrumb-site" },
        [
          _c(
            "v-container",
            [
              _c("v-breadcrumbs", {
                attrs: { items: _vm.breadcrumb_items },
                scopedSlots: _vm._u([
                  {
                    key: "divider",
                    fn: function () {
                      return [_c("v-icon", [_vm._v("mdi-chevron-right")])]
                    },
                    proxy: true,
                  },
                ]),
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: 9 } }, [
                _c(
                  "div",
                  { staticClass: "single_blog_content" },
                  [
                    _c("div", { staticClass: "widget_tittle" }, [
                      _c("h3", [_vm._v(_vm._s(_vm.category.title))]),
                    ]),
                    _vm._v(" "),
                    _c("v-row", {
                      staticStyle: { height: "40px", width: "100%" },
                    }),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      _vm._l(_vm.category.news, function (news, index) {
                        return _c(
                          "v-col",
                          {
                            key: news.slug + index,
                            staticClass: "news-item",
                            attrs: { cols: "4" },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "news-item-content" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "news__img",
                                    attrs: { to: "/news/" + news.slug },
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: "/storage/uploads/" + news.image,
                                      },
                                    }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "news-meta" }, [
                                  _c("span", [_vm._v(_vm._s(news.created_at))]),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "news__title",
                                    attrs: { to: "/news/" + news.slug },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(news.title) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        )
                      }),
                      1
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "3" } }, [
                _c("div", { staticClass: "left_sidebar_widget" }, [
                  _c("div", { staticClass: "widget_tittle" }, [
                    _c("h3", [_vm._v("Сўнги янгиликлар")]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "single_layout-right" },
                    _vm._l(_vm.related_news, function (related_item, index) {
                      return _c(
                        "router-link",
                        {
                          key: related_item.slug + index,
                          staticClass: "news-lenta",
                          attrs: { to: /news/ + related_item.slug },
                        },
                        [
                          _c("div", { staticClass: "news-meta" }, [
                            _c("span", [
                              _vm._v(_vm._s(related_item.created_at)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "news-lenta__title" }, [
                            _vm._v(_vm._s(related_item.title) + " "),
                          ]),
                        ]
                      )
                    }),
                    1
                  ),
                ]),
              ]),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);