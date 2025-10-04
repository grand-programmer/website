"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_news_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../src/services/apiService */ "./resources/js/src/services/apiService.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../i18n */ "./resources/js/i18n.js");


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
        text: _i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: 'Янгиликлар',
        to: '/news',
        disabled: true,
        exact: true
      }],

      /*id:this.$route.params.id,*/
      categories: {},
      category: {},
      related_news: {},
      news: {},
      buttonLoading: false,
      currentPage: 1,
      pageMeta: {
        current_page: 1,
        last_page: 2
      }
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
    getAnotherNews: function getAnotherNews() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.buttonLoading = true;
                _context2.next = 3;
                return _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readNews({
                  page: _this2.currentPage + 1
                }).then(function (response) {
                  _this2.pageMeta = response.data.meta;
                  _this2.news = _this2.news.concat(response.data.data.map(function (i) {
                    var dateParts = i.created_at.split("T");

                    if (new Date(i.created_at).getDate() === new Date().getDate()) {
                      if (dateParts.length < 2 && typeof dateParts[0] !== 'undefined') {
                        i.created_at = dateParts[0].substring(0, 5);
                      } else i.created_at = dateParts[1].substring(0, 5);
                    } else i.created_at = dateParts[0];

                    return i;
                  }));
                  _this2.buttonLoading = false;
                })["catch"](function (error) {
                  console.log(error);

                  _this2.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));

                  _this2.buttonLoading = false;
                });

              case 3:
                _this2.currentPage = _this2.currentPage + 1;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    close: function close() {
      this.$router.replace('/');
    },
    initialize: function initialize() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readNews().then(function (response) {
                  _this3.pageMeta = response.data.meta;
                  _this3.related_news = _this3.news = response.data.data.map(function (i) {
                    var dateParts = i.created_at.split("T");

                    if (dateParts.length < 2 && typeof dateParts[0] !== 'undefined') {
                      i.created_at = dateParts[0].substring(0, 10);
                    } else {
                      i.created_at = dateParts[1].substring(0, 10);
                    }

                    return i;
                  });
                })["catch"](function (error) {
                  console.log(error);

                  _this3.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));
                });

              case 2:
                _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readCategoriesForSelect().then(function (response) {
                  _this3.categories = response.data;
                })["catch"](function (error) {
                  console.log(error);

                  _this3.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));
                });
                /*            api.readNews().then((response) => {
                                console.log()
                                this.related_news = response.data.data.map(function (i) {
                                    let dateParts = i.created_at.split("T");
                                    if ((new Date(i.created_at)).getDate() === (new Date).getDate())
                                        i.created_at = dateParts[1].substring(0, 5);
                                    else i.created_at = dateParts[0];
                                    return i;
                                });
                            }).catch((error) => {
                                console.log(error)
                                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`))
                            })*/

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.news__img {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 60%;\r\n    overflow: hidden;\r\n    display: block;\r\n    margin-bottom: 12px;\n}\n.news__img img {\r\n    display: block;\r\n    transition: 1s ease;\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\n}\n.news-item .news__title {\r\n    color: #000;\n}\n.news-item {\r\n    margin-bottom: 20px;\r\n    cursor:pointer;\n}\n.news-lenta {\r\n    padding-bottom: 18px;\r\n    border-bottom: 1px solid rgba(197, 197, 197, 0.8);\r\n    margin-bottom: 18px;\r\n    display: inline-block;\r\n    cursor: pointer;\n}\n.news-meta {\r\n    margin-bottom: 10px;\r\n    opacity: 0.8;\r\n    color: #000000;\r\n    font-size: 12px;\r\n    padding-left: 20px;\r\n    background: url(/img/calendar.svg) no-repeat center left;\r\n    background-size: contain;\n}\n.news-meta > span {\r\n    color: #8F8F8F;\r\n    font-weight: 300;\r\n    margin-left: 5px;\n}\n.news-lenta__title {\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    line-height: 21px;\r\n    color: #000000;\r\n    transition: .2s ease;\n}\n.v-application .single_blog_content .widget_tittle h3{\r\n    color: #39ae69;\r\n    font-weight: bold;\r\n    font-size: 25px;\n}\n.widget_tittle {\r\n    padding-bottom: 35px;\r\n    border-bottom: 2px solid #39ae69;\n}\n.left_sidebar_widget {\r\n    margin-top: 9px;\n}\n.single_layout-right {\r\n    margin-top: 40px;\n}\n.news-item.col.col-4:hover {\r\n    box-shadow: 0 0 9px -6px #000;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/news/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/frontend/news/index.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_c99afff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c99afff8& */ "./resources/js/views/frontend/news/index.vue?vue&type=template&id=c99afff8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/news/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/frontend/news/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c99afff8___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_c99afff8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/news/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/news/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/frontend/news/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/news/index.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/frontend/news/index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/frontend/news/index.vue?vue&type=template&id=c99afff8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/frontend/news/index.vue?vue&type=template&id=c99afff8& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c99afff8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c99afff8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c99afff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=c99afff8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=template&id=c99afff8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=template&id=c99afff8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/index.vue?vue&type=template&id=c99afff8& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                    _c(
                      "div",
                      {
                        staticClass: "widget_tittle",
                        staticStyle: { height: "75px" },
                      },
                      [_c("h3", [_vm._v(_vm._s(_vm.$t("Янгиликлар")))])]
                    ),
                    _vm._v(" "),
                    _vm.categories
                      ? _c(
                          "v-row",
                          {
                            staticClass: "mt-5 categories-chip",
                            staticStyle: {
                              "flex-direction": "row",
                              "justify-content": "start",
                            },
                          },
                          _vm._l(_vm.categories, function (category, key) {
                            return category
                              ? _c("v-hover", {
                                  key: "dsf" + key,
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var hover = ref.hover
                                          return [
                                            _c(
                                              "v-chip",
                                              {
                                                staticClass:
                                                  "text-decoration-none cursor-pointer my-1 mx-1",
                                                staticStyle: {
                                                  width: "max-content",
                                                },
                                                style: hover
                                                  ? "background-color:#08642e !important;"
                                                  : "",
                                                attrs: {
                                                  color: "primary",
                                                  to:
                                                    "/category/" +
                                                    category.slug,
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  " " + _vm._s(category.text)
                                                ),
                                              ]
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                })
                              : _vm._e()
                          }),
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("v-row", {
                      staticStyle: { height: "20px", width: "100%" },
                    }),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      _vm._l(_vm.news, function (news, index) {
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
                                _c("div", { staticClass: "news__img" }, [
                                  _c("img", {
                                    attrs: {
                                      src: "/storage/uploads/" + news.image,
                                    },
                                  }),
                                ]),
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
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              _vm.pageMeta.current_page !==
                              _vm.pageMeta.last_page,
                            expression:
                              "pageMeta.current_page!==pageMeta.last_page",
                          },
                        ],
                        staticClass: "justify-content-center mb-4",
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            staticStyle: { width: "max-content" },
                            attrs: {
                              text: "",
                              color: "primary",
                              loading: _vm.buttonLoading,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.getAnotherNews()
                              },
                            },
                          },
                          [
                            _vm._v(
                              " " +
                                _vm._s(_vm.$t("Яна кўриш")) +
                                "\n                        "
                            ),
                          ]
                        ),
                      ],
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
                    _c("h3", [_vm._v(_vm._s(_vm.$t("Кўп марта кўрилганлар")))]),
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