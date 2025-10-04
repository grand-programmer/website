"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_stat_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "StatMain",
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Хизматлар'),
        to: '/services',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Экспорт ва импорт бўйича маълумотларни олиш'),
        to: '/services/stat',
        disabled: true,
        exact: true
      }],
      panel: [0, 1],
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function labelInterpolationFnc(value) {
              return value[0];
            }
          }
        }]]
      },
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50,
          // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      panels: [{
        title: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Бу қандай ишлайди ?"),
        content: [_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Аризачи ЯИДХПда рўйхатдан ўтади, ариза шаклини тўлдиради ва ваколатли органга юборади"), this.$t("Тизим томонидан ариза кўриб чиқилиб, тўлов қилинган бўлса натижаси кўрсатилади.")]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Хизмат билан боғлиқ саволлар юзасидан боғланиш"),
        content: [this.$t("Тел: 55-502-76-00 (ички:75-16), Почта: info@customs.uz")]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Хизматдан фойдаланувчилар"),
        content: [_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Жисмоний ва Юридик шахслар')]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Хизматни кўрсатиш учун керак бўладиган ҳужжатлар"),
        content: [_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Талаб этилмайди')]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Хизматни кўрсатиш муддати"),
        content: [_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Автоматик тарзда')]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Хизматни кўрсатишнинг ҳуқуқий асоси"),
        content: ['<a href="https://lex.uz/docs/3844549">' + _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Ўзбекистон Республикаси Вазирлар Маҳкамасининг "Товарларни божхонада электрон шаклда декларациялаш тартибини янада такомиллаштириш тўғрисида" 31.07.2018 йилдаги 605-сонли қарори') + '</a>']
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Хизмат нархи"),
        content: 'narx'
      }],
      list: {
        tarifs: []
      }
    };
  },
  methods: {
    getTariffs: function getTariffs() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/v1/data/tariffs').then(function (res) {
                  _this.list.tarifs = JSON.parse(JSON.stringify(res.data));
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    gotoService: function gotoService(value) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.$auth.check()) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return axios.post('/api/v1/statservice', {
                  tin: _this2.$auth.user().tin,
                  pin: _this2.$auth.user().pin
                }).then(function (res) {
                  console.log(res);

                  if (res.data.data.id) {
                    _this2.$router.push('/services/stat/' + res.data.data.id);
                  }
                })["catch"](function (e) {
                  console.log(e.response);

                  _this2.$toast.error(_this2.$t('Ариза яратишда хатолик содир бўлди'));
                });

              case 3:
                _context2.next = 6;
                break;

              case 5:
                _this2.$toast.warning(_this2.$t('Авторизациядан ўтиш талаб этилади'));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    this.getTariffs();
  },
  computed: {
    tarifs: function tarifs() {
      return this.list.tarifs;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".price-block h5 {\n  color: var(--mycolor);\n  font-size: 14px;\n  margin: 10px 5px;\n}\n.price-block p {\n  font-size: 14px;\n  line-height: 24px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/services/stat/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_c71715ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c71715ac& */ "./resources/js/views/frontend/services/stat/index.vue?vue&type=template&id=c71715ac&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/stat/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/frontend/services/stat/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c71715ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_c71715ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/stat/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/stat/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/stat/index.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/views/frontend/services/stat/index.vue?vue&type=template&id=c71715ac&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/index.vue?vue&type=template&id=c71715ac& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c71715ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c71715ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c71715ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=c71715ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=template&id=c71715ac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=template&id=c71715ac&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/index.vue?vue&type=template&id=c71715ac& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _vm.$route.path.indexOf("services/stat/") !== -1
    ? _c("router-view")
    : _c("div", [
        _c("div", { staticClass: "section customs-value-section" }, [
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
            "div",
            { staticClass: "page-content" },
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "8" } }, [
                        _c(
                          "div",
                          { staticClass: "d-flex my-5  align-items-center" },
                          [
                            _c("img", {
                              staticStyle: { height: "50px" },
                              attrs: { src: "/img/icons/patent.png" },
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex flex-column justify-content-between ml-5",
                              },
                              [
                                _c("h3", { staticClass: "mb-2" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "Экспорт ва импорт бўйича маълумотларни олиш"
                                      )
                                    )
                                  ),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "3", offset: "1" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "my-5 ",
                              staticStyle: { width: "100%" },
                              attrs: { large: "", color: "primary" },
                              on: { click: _vm.gotoService },
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.$t("Хизматдан фойдаланиш")) +
                                  "\n            "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "8" } },
                        [
                          _c(
                            "v-expansion-panels",
                            {
                              staticClass: "mb-5",
                              attrs: { multiple: "" },
                              model: {
                                value: _vm.panel,
                                callback: function ($$v) {
                                  _vm.panel = $$v
                                },
                                expression: "panel",
                              },
                            },
                            _vm._l(_vm.panels, function (expPanel, key) {
                              return _c(
                                "v-expansion-panel",
                                { key: key, staticClass: "my-2" },
                                [
                                  _c("v-expansion-panel-header", [
                                    _c("b", [_vm._v(_vm._s(expPanel.title))]),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-expansion-panel-content",
                                    [
                                      expPanel.content === "narx"
                                        ? [
                                            _vm.list.tarifs &&
                                            _vm.list.tarifs[1]
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "price-block",
                                                  },
                                                  [
                                                    _c("h4", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "Хизматдан фойдаланиш нархи"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("h5", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "Божхона юк декларацияси ва илова ҳужжатларини юклаб олиш нархи:"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("p", [
                                                      _vm._v(
                                                        "- " +
                                                          _vm._s(
                                                            _vm.list
                                                              .tarifs[1][0].name
                                                          ) +
                                                          " - " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "БҲМ {value}%",
                                                              {
                                                                value:
                                                                  _vm.list
                                                                    .tarifs[1][0]
                                                                    .value,
                                                              }
                                                            )
                                                          ) +
                                                          ";"
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("p", [
                                                      _vm._v(
                                                        "- " +
                                                          _vm._s(
                                                            _vm.list
                                                              .tarifs[2][0].name
                                                          ) +
                                                          " - " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "БҲМ {value}%",
                                                              {
                                                                value:
                                                                  _vm.list
                                                                    .tarifs[2][0]
                                                                    .value,
                                                              }
                                                            )
                                                          )
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("h5", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "Иккинчи ва тўртинчи хизматлар нархлари:"
                                                            )
                                                          )
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-row",
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "6",
                                                            },
                                                          },
                                                          [
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[3][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[3][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[4][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[4][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[5][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[5][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[6][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[6][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "6",
                                                            },
                                                          },
                                                          [
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[7][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "хизмат тарифининг {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[7][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("h5", [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "Учинчи хизмат нархлари:"
                                                            )
                                                          )
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-row",
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "6",
                                                            },
                                                          },
                                                          [
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[8][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[8][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[9][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[9][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[10][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[10][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[11][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[11][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[12][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[12][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "6",
                                                            },
                                                          },
                                                          [
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[13][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[13][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[14][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[14][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[15][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[15][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[16][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "БҲМ {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[16][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("p", [
                                                              _vm._v(
                                                                "- " +
                                                                  _vm._s(
                                                                    _vm.list
                                                                      .tarifs[7][0]
                                                                      .name
                                                                  ) +
                                                                  " -\n                            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "хизмат тарифининг {value}%",
                                                                      {
                                                                        value:
                                                                          _vm
                                                                            .list
                                                                            .tarifs[7][0]
                                                                            .value,
                                                                      }
                                                                    )
                                                                  ) +
                                                                  ";"
                                                              ),
                                                            ]),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                          ]
                                        : _vm._l(
                                            expPanel.content,
                                            function (exp_content, expKey) {
                                              return [
                                                _c("p", {
                                                  staticClass: "lh-lg",
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      (expPanel.content.length >
                                                      1
                                                        ? expKey + 1 + "."
                                                        : "") +
                                                        " " +
                                                        exp_content
                                                    ),
                                                  },
                                                }),
                                              ]
                                            }
                                          ),
                                    ],
                                    2
                                  ),
                                ],
                                1
                              )
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "service_main_right_sidebar",
                          attrs: { cols: "4" },
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "video_link",
                              attrs: { href: "/storage/files/statexim.mp4" },
                            },
                            [
                              _c("img", {
                                attrs: { src: "/img/services/bg-services.png" },
                              }),
                              _vm._v(" "),
                              _c("div", [
                                _c("img", {
                                  attrs: { src: "/img/icons/play.svg" },
                                }),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(_vm._s(_vm.$t("Йўриқнома"))),
                                ]),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "base-material-chart-card",
                            {
                              attrs: {
                                data: _vm.dailySalesChart.data,
                                options: _vm.dailySalesChart.options,
                                color: "success",
                                "hover-reveal": "",
                                type: "Line",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "reveal-actions",
                                  fn: function () {
                                    return [
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function (ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "info",
                                                            icon: "",
                                                          },
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            color: "info",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                        mdi-refresh\n                      "
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ]),
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Refresh")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function (ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            light: "",
                                                            icon: "",
                                                          },
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-pencil"),
                                                      ]),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ]),
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [
                                            _vm._v(
                                              _vm._s(_vm.$t("Change Date"))
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ]),
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex justify-content-between",
                                },
                                [
                                  _c(
                                    "h4",
                                    {
                                      staticClass:
                                        "card-title font-weight-light mt-2 ml-2",
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            _vm.$t("Хизматдан фойдаланганлар")
                                          ) +
                                          "\n                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "green--text card-title font-weight-light mt-2 ml-2",
                                    },
                                    [
                                      _vm._v(
                                        "14500 " + _vm._s(_vm.$t("та")) + " "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "d-inline-flex font-weight-light ml-2 mt-1",
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.$t("Бугун")) +
                                      "\n                "
                                  ),
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "font-weight-bold ml-1",
                                      attrs: { color: "green", small: "" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  mdi-arrow-up\n                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "green--text font-weight-bold",
                                    },
                                    [_vm._v(" 55%")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "green--text mx-1" },
                                    [
                                      _vm._v(
                                        "(155 " + _vm._s(_vm.$t("та")) + ") "
                                      ),
                                    ]
                                  ),
                                  _vm._v(
                                    "\n\n                " +
                                      _vm._s(
                                        _vm.$t("ўртача кунлик кўрсаткич")
                                      ) +
                                      " ("
                                  ),
                                  _c("span", { staticClass: "green--text" }, [
                                    _vm._v("120 " + _vm._s(_vm.$t("та"))),
                                  ]),
                                  _vm._v(
                                    ") " +
                                      _vm._s(_vm.$t("дан")) +
                                      "\n              "
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);