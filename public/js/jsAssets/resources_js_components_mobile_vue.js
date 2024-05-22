"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_mobile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/calendar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/calendar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../src/services/apiService */ "./resources/js/src/services/apiService.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CalendarInHomepage",
  data: function data() {
    return {
      months: null,
      activeMonth: 1
    };
  },
  mounted: function mounted() {
    this.initialize();
    this.activeMonth = new Date().getMonth() + 1;
  },
  methods: {
    initialize: function initialize() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;
                _context.next = 3;
                return _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readEventsForFront().then(function (response) {
                  _this2.months = response.data.data;

                  for (var _i = 0, _Object$entries = Object.entries(_this2.months); _i < _Object$entries.length; _i++) {
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                        key = _Object$entries$_i[0],
                        value = _Object$entries$_i[1];

                    _this2.months[key].month = _this.$t(value.month.substring(0, 1).toUpperCase() + value.month.substring(1));
                  }
                })["catch"](function (error) {
                  /*                this.$toast.error(i18n.t(`Маълумотларни юклашда хатолик содир бўлди!`)) */
                  _this2.$toast.error(_this.$t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));

                  console.log(error);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/news-in-homepage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/news-in-homepage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../src/services/apiService */ "./resources/js/src/services/apiService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "news-in-homepage",
  data: function data() {
    return {
      news: [],
      categories: []
    };
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].readNews().then(function (response) {
        _this.news = response.data.data.map(function (i) {
          i.title = i.title.substr(0, 100) + '  ...';
          return i;
        });
      })["catch"](function (error) {
        _this.$toast.error(_this.$t("Маълумотларни олишда хатолик содир бўлди!"));
      });
      _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].readCategories(8).then(function (response) {
        _this.categories = response.data;
      })["catch"](function (error) {
        _this.$toast.error(_this.$t("Маълумотларни юклашда хатолик содир бўлди!"));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/mobile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/mobile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homepage_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/scripts */ "./resources/js/components/homepage/scripts.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_base_loadingbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base/loadingbar.vue */ "./resources/js/components/base/loadingbar.vue");
/* harmony import */ var _homepage_news_in_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/news-in-homepage */ "./resources/js/components/homepage/news-in-homepage.vue");
/* harmony import */ var _homepage_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/calendar */ "./resources/js/components/homepage/calendar.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mobile',
  data: function data() {
    return {
      stat: true,
      links: [],
      show: false,
      stat_type: 1,
      month: 0,
      months: [{
        text: 'Барчаси',
        value: 0
      }, {
        text: 'Январ',
        value: 1
      }, {
        text: 'Феврал',
        value: 2
      }, {
        text: 'Март',
        value: 3
      }, {
        text: 'Апрел',
        value: 4
      }, {
        text: 'Май',
        value: 5
      }, {
        text: 'Июн',
        value: 6
      }, {
        text: 'Июл',
        value: 7
      }, {
        text: 'Август',
        value: 8
      }, {
        text: 'Сентябр',
        value: 9
      }, {
        text: 'Октябр',
        value: 10
      }, {
        text: 'Ноябр',
        value: 11
      }, {
        text: 'Декабр',
        value: 12
      }],
      year: 2022,
      firstStart: 1,
      years: [2018, 2019, 2020, 2021, 2022],
      overlay: true,
      faqs: []
    };
  },
  components: {
    index_scripts: _homepage_scripts__WEBPACK_IMPORTED_MODULE_0__["default"],
    NewsInHome: _homepage_news_in_homepage__WEBPACK_IMPORTED_MODULE_2__["default"],
    FrontCalendar: _homepage_calendar__WEBPACK_IMPORTED_MODULE_3__["default"],
    loadingBar: _components_base_loadingbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    showProgress: function showProgress(show) {
      this.show = show;
    },
    start: function start() {
      var _this = this;

      this.showProgress(true);
      this.percent = 0;
      _loadingInterval = setInterval(function () {
        _this.percent = _this.percent + 1;
      }, 500);
    },
    stop: function stop() {
      var _this2 = this;

      clearInterval(_loadingInterval);
      this.percent = 100;
      setTimeout(function () {
        _this2.showProgress(false);
      }, 500);
    }
  },
  watch: {
    loading: function loading(val, oldVal) {
      if (val) {
        this.start();
      } else {
        this.stop();
      }
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(['menu', 'loading']))
});

/***/ }),

/***/ "./resources/js/components/homepage/calendar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/homepage/calendar.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calendar_vue_vue_type_template_id_431643f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.vue?vue&type=template&id=431643f8& */ "./resources/js/components/homepage/calendar.vue?vue&type=template&id=431643f8&");
/* harmony import */ var _calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.vue?vue&type=script&lang=js& */ "./resources/js/components/homepage/calendar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _calendar_vue_vue_type_template_id_431643f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _calendar_vue_vue_type_template_id_431643f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/homepage/calendar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/homepage/news-in-homepage.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/homepage/news-in-homepage.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _news_in_homepage_vue_vue_type_template_id_7df8a53c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-in-homepage.vue?vue&type=template&id=7df8a53c& */ "./resources/js/components/homepage/news-in-homepage.vue?vue&type=template&id=7df8a53c&");
/* harmony import */ var _news_in_homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-in-homepage.vue?vue&type=script&lang=js& */ "./resources/js/components/homepage/news-in-homepage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _news_in_homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _news_in_homepage_vue_vue_type_template_id_7df8a53c___WEBPACK_IMPORTED_MODULE_0__.render,
  _news_in_homepage_vue_vue_type_template_id_7df8a53c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/homepage/news-in-homepage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/mobile.vue":
/*!********************************************!*\
  !*** ./resources/js/components/mobile.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mobile_vue_vue_type_template_id_f5797ca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile.vue?vue&type=template&id=f5797ca6& */ "./resources/js/components/mobile.vue?vue&type=template&id=f5797ca6&");
/* harmony import */ var _mobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile.vue?vue&type=script&lang=js& */ "./resources/js/components/mobile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mobile_vue_vue_type_template_id_f5797ca6___WEBPACK_IMPORTED_MODULE_0__.render,
  _mobile_vue_vue_type_template_id_f5797ca6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/mobile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/homepage/calendar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/homepage/calendar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/calendar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/homepage/news-in-homepage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/homepage/news-in-homepage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_in_homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./news-in-homepage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/news-in-homepage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_in_homepage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/mobile.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/mobile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mobile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/mobile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/homepage/calendar.vue?vue&type=template&id=431643f8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/homepage/calendar.vue?vue&type=template&id=431643f8& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_431643f8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_431643f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_431643f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./calendar.vue?vue&type=template&id=431643f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/calendar.vue?vue&type=template&id=431643f8&");


/***/ }),

/***/ "./resources/js/components/homepage/news-in-homepage.vue?vue&type=template&id=7df8a53c&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/homepage/news-in-homepage.vue?vue&type=template&id=7df8a53c& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_in_homepage_vue_vue_type_template_id_7df8a53c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_in_homepage_vue_vue_type_template_id_7df8a53c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_in_homepage_vue_vue_type_template_id_7df8a53c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./news-in-homepage.vue?vue&type=template&id=7df8a53c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/news-in-homepage.vue?vue&type=template&id=7df8a53c&");


/***/ }),

/***/ "./resources/js/components/mobile.vue?vue&type=template&id=f5797ca6&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/mobile.vue?vue&type=template&id=f5797ca6& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_vue_vue_type_template_id_f5797ca6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_vue_vue_type_template_id_f5797ca6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mobile_vue_vue_type_template_id_f5797ca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mobile.vue?vue&type=template&id=f5797ca6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/mobile.vue?vue&type=template&id=f5797ca6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/calendar.vue?vue&type=template&id=431643f8&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/calendar.vue?vue&type=template&id=431643f8& ***!
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
  return _c("div", { staticClass: "col-md-6 last_page_right" }, [
    _c("div", { staticClass: "section_tittle" }, [
      _c("h2", [_vm._v(_vm._s(_vm.$t("Божхонага доир муҳим саналар")))]),
    ]),
    _vm._v(" "),
    _vm.months
      ? _c("div", { staticClass: "calendar_wrapper" }, [
          _c(
            "div",
            { staticClass: "top-months" },
            _vm._l(_vm.months, function (month, index) {
              return index <= 6
                ? _c(
                    "div",
                    {
                      staticClass: "month-item",
                      class: index == _vm.activeMonth ? "active" : "",
                      on: {
                        click: function ($event) {
                          _vm.activeMonth = index
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "month-text" }, [
                        _vm._v(_vm._s(_vm.$t(month.month))),
                      ]),
                    ]
                  )
                : _vm._e()
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "calendar_content" },
            _vm._l(_vm.months[_vm.activeMonth]["items"], function (item, key) {
              return _vm.months[_vm.activeMonth]["items"] && key < 4
                ? _c("div", { staticClass: "calendar_content-item" }, [
                    _c("span", [_vm._v(_vm._s(item.day) + " ")]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(item.title))]),
                  ])
                : _vm._e()
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "footer-months" },
            _vm._l(_vm.months, function (month, index) {
              return index > 6
                ? _c(
                    "div",
                    {
                      staticClass: "month-item",
                      class: index == _vm.activeMonth ? "active" : "",
                      on: {
                        click: function ($event) {
                          _vm.activeMonth = index
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "month-text" }, [
                        _vm._v(_vm._s(_vm.$t(month.month))),
                      ]),
                    ]
                  )
                : _vm._e()
            }),
            0
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/news-in-homepage.vue?vue&type=template&id=7df8a53c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/news-in-homepage.vue?vue&type=template&id=7df8a53c& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "news in-style" },
    [
      _c(
        "router-link",
        { staticClass: "all_news d-none", attrs: { to: "/news" } },
        [
          _c(
            "svg",
            {
              staticStyle: { "enable-background": "new 0 0 490.667 490.667" },
              attrs: {
                version: "1.1",
                id: "Capa_1",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 490.667 490.667",
                "xml:space": "preserve",
              },
            },
            [
              _c("path", {
                attrs: {
                  d: "M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333\n\ts245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z",
                },
              }),
              _vm._v(" "),
              _c("path", {
                staticStyle: { fill: "#FAFAFA" },
                attrs: {
                  d: "M290.133,104.533c-19.139-18.289-49.277-18.289-68.416,0c-18.893,18.881-18.902,49.503-0.021,68.395\n\tc0.007,0.007,0.014,0.014,0.021,0.021l19.2,19.2H117.333C87.878,192.149,64,216.027,64,245.483\n\tc0,29.455,23.878,53.333,53.333,53.333h123.584l-19.2,19.2c-17.522,20.175-15.371,50.734,4.804,68.257\n\tc18.259,15.858,45.423,15.799,63.612-0.139l118.251-118.251c12.492-12.496,12.492-32.752,0-45.248L290.133,104.533z",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _c("p", [_vm._v(" " + _vm._s(_vm.$t("Барча янгиликлар")) + " ")]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "news-head" },
          [
            _c("div", { staticClass: "news-title" }, [
              _vm._v(_vm._s(_vm.$t("Янгиликлар"))),
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "all-news_link", attrs: { to: "/news" } },
              [
                _vm._v(
                  " " +
                    _vm._s(_vm.$t("Барча янгиликлар")) +
                    "\n                    "
                ),
                _c(
                  "svg",
                  {
                    staticStyle: {
                      "enable-background": "new 0 0 490.667 490.667",
                    },
                    attrs: {
                      version: "1.1",
                      id: "Capa_1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 490.667 490.667",
                      "xml:space": "preserve",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M290.133,104.533c-19.139-18.289-49.277-18.289-68.416,0c-18.893,18.881-18.902,49.503-0.021,68.395\n\tc0.007,0.007,0.014,0.014,0.021,0.021l19.2,19.2H117.333C87.878,192.149,64,216.027,64,245.483\n\tc0,29.455,23.878,53.333,53.333,53.333h123.584l-19.2,19.2c-17.522,20.175-15.371,50.734,4.804,68.257\n\tc18.259,15.858,45.423,15.799,63.612-0.139l118.251-118.251c12.492-12.496,12.492-32.752,0-45.248L290.133,104.533z",
                      },
                    }),
                  ]
                ),
              ]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "news-content" }, [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.news, function (newsItem, key) {
              return _c(
                "div",
                {
                  staticClass: "col-lg-4 col-md-6 col-sm-6",
                  attrs: { id: "yangi" },
                },
                [
                  _c("div", { staticClass: "news-item" }, [
                    _c("div", { staticClass: "news-box" }, [
                      _c("div", { staticClass: "box-img" }, [
                        _c("img", {
                          attrs: { src: "/storage/uploads/" + newsItem.image },
                        }),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "box-content" },
                        [
                          _c("div", { staticClass: "box-content-top" }, [
                            _c("div", { staticClass: "box-date" }, [
                              _c("div", { staticClass: "box-time" }, [
                                _vm._v(
                                  "\n                                                " +
                                    _vm._s(newsItem.created_at.split(" ")[1]) +
                                    "\n                                            "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "box-date-cal" }, [
                                _vm._v(
                                  "\n                                                " +
                                    _vm._s(newsItem.created_at.split(" ")[0]) +
                                    "\n                                            "
                                ),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "news-item-cats" },
                            _vm._l(
                              newsItem.categories,
                              function (categoryItem, key) {
                                return key === 0
                                  ? _c("li", [
                                      _c(
                                        "a",
                                        {
                                          attrs: {
                                            href:
                                              "category/" + categoryItem.slug,
                                          },
                                        },
                                        [_vm._v(_vm._s(categoryItem.title))]
                                      ),
                                    ])
                                  : _vm._e()
                              }
                            ),
                            0
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "box-text",
                              attrs: { to: "news/" + newsItem.slug },
                            },
                            [_vm._v(_vm._s(newsItem.title))]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]
              )
            }),
            0
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/mobile.vue?vue&type=template&id=f5797ca6&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/mobile.vue?vue&type=template&id=f5797ca6& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "one-page" },
    [
      _c("loading-bar"),
      _vm._v(" "),
      _c("hududiy"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "section", attrs: { id: "section0" } },
        [
          _c("div", {
            staticClass: "top_menu_space",
            staticStyle: { width: "100%" },
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "main_slider_area",
              staticStyle: { "padding-top": "70px", width: "100%" },
            },
            [
              _c(
                "router-link",
                { staticClass: "all_news", attrs: { to: "/services" } },
                [
                  _c(
                    "svg",
                    {
                      staticStyle: {
                        "enable-background": "new 0 0 490.667 490.667",
                      },
                      attrs: {
                        version: "1.1",
                        id: "Capa_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 490.667 490.667",
                        "xml:space": "preserve",
                      },
                    },
                    [
                      _c("path", {
                        staticStyle: { fill: "#009688" },
                        attrs: {
                          d: "M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333\n\ts245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z",
                        },
                      }),
                      _vm._v(" "),
                      _c("path", {
                        staticStyle: { fill: "#FAFAFA" },
                        attrs: {
                          d: "M290.133,104.533c-19.139-18.289-49.277-18.289-68.416,0c-18.893,18.881-18.902,49.503-0.021,68.395\n\tc0.007,0.007,0.014,0.014,0.021,0.021l19.2,19.2H117.333C87.878,192.149,64,216.027,64,245.483\n\tc0,29.455,23.878,53.333,53.333,53.333h123.584l-19.2,19.2c-17.522,20.175-15.371,50.734,4.804,68.257\n\tc18.259,15.858,45.423,15.799,63.612-0.139l118.251-118.251c12.492-12.496,12.492-32.752,0-45.248L290.133,104.533z",
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(" " + _vm._s(_vm.$t("Барча хизматлар")) + " "),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "slider_inner" }, [
                _c(
                  "div",
                  {
                    attrs: {
                      "data-thumb": "/img/custom/slider-9.png",
                      "data-src": "/img/custom/077.jpg",
                    },
                  },
                  [
                    _c("div", { staticClass: "container" }, [
                      _c("div", { staticClass: "slider_text absolute_right" }, [
                        _c(
                          "h3",
                          {
                            staticClass: "fadeInLeft animated",
                            staticStyle: {
                              "max-width": "63%",
                              "margin-left": "auto",
                            },
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  _vm.$t(
                                    "Шаффофлик замирида иқтисодий хавфсизлик"
                                  )
                                )
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "slider_image slider-2" }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    attrs: {
                      "data-thumb": "/img/custom/slider-9.png",
                      "data-src": "/img/custom/logistics.jpg",
                    },
                  },
                  [
                    _c("div", { staticClass: "container" }, [
                      _c("div", { staticClass: "slider_text absolute_right" }, [
                        _c("h3", { staticClass: "fadeInLeft animated" }, [
                          _vm._v("E-ARHIV"),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "fadeInLeft animated" }, [
                          _vm._v(_vm._s(_vm.$t("Божхона ахборот тизими"))),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "fadeInUp animated" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm.$t(
                                  "Божхона ахборот тизмиларига ҳужжатларингизни жойланг"
                                )
                              )
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "s_readmore_btn fadeInUp animated",
                            attrs: {
                              target: "_blank",
                              href: "https://ed2.customs.uz/E_ARXIV",
                            },
                          },
                          [_vm._v(_vm._s(_vm.$t("Хизматдан фойдаланиш")))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "slider_image slider-2" }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    attrs: {
                      "data-thumb": "/img/custom/slider-9.png",
                      "data-src": "/img/custom/transit.jpg",
                    },
                  },
                  [
                    _c("div", { staticClass: "container" }, [
                      _c("div", { staticClass: "slider_text absolute_right" }, [
                        _c("h3", { staticClass: "fadeInLeft animated" }, [
                          _vm._v("E-TRANZIT"),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "fadeInLeft animated" }, [
                          _vm._v(_vm._s(_vm.$t("Божхона ахборот тизими"))),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "fadeInUp animated" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm.$t(
                                  "Чегарадан юкларни электрон декларация қилинг"
                                )
                              )
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "s_readmore_btn fadeInUp animated",
                            attrs: {
                              target: "_blank",
                              href: "http://cargo.customs.uz",
                            },
                          },
                          [_vm._v(_vm._s(_vm.$t("Хизматдан фойдаланиш")))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "slider_image slider-2" }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    attrs: {
                      "data-thumb": "/img/custom/slider-5.jpg",
                      "data-src": "/img/custom/slider-5.jpg",
                    },
                  },
                  [
                    _c("div", { staticClass: "container" }, [
                      _c("div", { staticClass: "slider_text absolute_right" }, [
                        _c("h3", { staticClass: "fadeInLeft animated" }, [
                          _vm._v(_vm._s(_vm.$t("Интеграциялашган таъриф"))),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "fadeInLeft animated" }, [
                          _vm._v(_vm._s(_vm.$t("Божхона ахборот тизими"))),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "fadeInUp animated" }, [
                          _vm._v(
                            _vm._s(_vm.$t("Божхона тўловлари ҳисобини олинг"))
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "s_readmore_btn fadeInUp animated",
                            attrs: {
                              href: "http://tarif.customs.uz",
                              target: "_blank",
                            },
                          },
                          [_vm._v(_vm._s(_vm.$t("Хизматдан фойдаланиш")))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "slider_image slider-2" }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    attrs: {
                      "data-thumb": "/img/main-slider/slide3.jpg",
                      "data-src": "/img/main-slider/slide3.jpg",
                    },
                  },
                  [
                    _c("div", { staticClass: "container" }, [
                      _c("div", { staticClass: "slider_text absolute_right" }, [
                        _c("h3", { staticClass: "fadeInLeft animated" }, [
                          _vm._v(_vm._s(_vm.$t("Ягона дарча"))),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "fadeInLeft animated" }, [
                          _vm._v(_vm._s(_vm.$t("Божхона ахборот тизими"))),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "fadeInUp animated" }, [
                          _vm._v(
                            "\n                                    " +
                              _vm._s(
                                _vm.$t(
                                  "Чегарадан товарлар олиб ўтишда сертификат ва рухсатномаларни ушбу ахборот тизими ёрдамида олинг."
                                )
                              )
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "s_readmore_btn fadeInUp animated",
                            attrs: {
                              href: "http://singlewindow.uz",
                              target: "_blank",
                            },
                          },
                          [_vm._v(_vm._s(_vm.$t("Хизматдан фойдаланиш")))]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "slider_image slider-2" }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    attrs: {
                      "data-thumb": "/img/main-slider/slide4.jpg",
                      "data-src": "/img/main-slider/slide4.jpg",
                    },
                  },
                  [
                    _c("div", { staticClass: "container" }, [
                      _c(
                        "div",
                        { staticClass: "slider_text absolute_left" },
                        [
                          _c("h3", { staticClass: "fadeInLeft animated" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t("Ишга кириш учун онлайн ариза бериш")
                              )
                            ),
                          ]),
                          _vm._v(" "),
                          _c("h4", { staticClass: "fadeInLeft animated" }, [
                            _vm._v(_vm._s(_vm.$t("Божхона ахборот тизими"))),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "fadeInUp animated" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t(
                                  "Божхона хизмати органларидаги вакансиялар рўйхатини билиб олинг ҳамда ишга кириш учун онлайн ариза юборинг"
                                )
                              )
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "s_readmore_btn fadeInUp animated",
                              attrs: {
                                to: "/services/vacancy",
                                target: "_blank",
                              },
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("Хизматдан фойдаланиш")) +
                                  "\n                                "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "slider_image slider-2" }),
                    ]),
                  ]
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("script", { tag: "component", attrs: { src: "/js/theme.js" } }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "section " }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "container-fluid" }, [
          _c(
            "div",
            {
              staticClass: "row pb-8",
              staticStyle: {
                margin: "24px!important",
                "justify-content": "center",
              },
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "bolim_image" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        height: "496pt",
                        viewBox: "0 0 496 496",
                        width: "496pt",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      _c("path", {
                        attrs: {
                          d: "m496 208h-17.976562l-26.792969 14.097656c-3.015625-1.664062-6.152344-3.074218-9.535157-3.921875l-33.703124-8.433593v-3.832032c14.910156-10.40625 24.007812-27.597656 24.007812-45.910156v-13.984375c0-31.078125-24.351562-57.085937-54.28125-57.992187-1.519531-.039063-3.015625.015624-4.519531.089843l8.738281-20.457031-42.363281-42.351562-24.972657 16.253906c-9.488281-5.34375-19.523437-9.503906-29.945312-12.421875l-6.167969-29.136719h-60.96875l-6.167969 29.144531c-10.421874 2.917969-20.464843 7.078125-29.945312 12.421875l-24.972656-16.253906-42.328125 42.328125 8.589843 20.472656c-.328124-.015625-.640624-.074219-.96875-.082031-15.320312-.445312-29.75 5.144531-40.710937 15.785156-10.976563 10.632813-17.015625 24.902344-17.015625 40.183594v16c0 18.3125 9.089844 35.496094 24 45.902344v3.839844l-21.984375 5.496093-39.847656-23.238281h-26.167969v165.769531l78.703125 26.230469h15.328125l1.914062-6.703125 24.125 14.480469c.394532 13.117187 10.914063 23.671875 24.019532 24.132812.460937 13.050782 10.949218 23.539063 24 24 .460937 13.050782 10.949218 23.539063 24 24 .476562 13.355469 11.414062 24.089844 24.878906 24.089844 5 0 9.902344-1.558594 14.023438-4.335938l7.085937 6.257813c4.441406 3.910156 10.160156 6.078125 16.097656 6.078125h1.480469c13.3125 0 24.144531-10.761719 24.3125-24.03125 13.167969-.167969 23.832031-10.832031 24-24 13.175781-.167969 23.847656-10.847656 24-24.023438 13.296875-.3125 24.03125-11.175781 24.03125-24.546874 0-.804688-.039062-1.597657-.121094-2.398438l144.121094-72.054688zm-80-61.984375v13.984375c0 14.199219-7.671875 27.464844-20.023438 34.617188l-4 2.3125.03125 25.316406 39.96875 9.984375-87.976562 46.304687v-21.550781c0-10.753906-4.34375-20.601563-11.457031-27.878906l27.457031-6.859375v-25.335938l-3.992188-2.308594c-12.34375-7.136718-20.007812-20.402343-20.007812-34.601562v-16c0-10.910156 4.3125-21.113281 12.152344-28.710938 7.832031-7.59375 18.222656-11.6875 29.085937-11.265624 21.371094.640624 38.761719 19.480468 38.761719 41.992187zm-155.9375 126.230469-36.214844-11.574219c-16.503906-5.289063-34.367187-6.078125-51.261718-2.335937l-4.585938 1.015624v-2.367187c0-11.03125 7.480469-20.609375 18.175781-23.289063l45.824219-11.449218v-25.335938l-3.992188-2.308594c-12.34375-7.136718-20.007812-20.402343-20.007812-34.601562v-16c0-10.910156 4.3125-21.113281 12.152344-28.710938 7.832031-7.59375 18.289062-11.6875 29.085937-11.265624 21.371094.640624 38.761719 19.480468 38.761719 41.992187v13.984375c0 14.199219-7.671875 27.464844-20.023438 34.617188l-4 2.3125.03125 25.316406 45.816407 11.449218c10.695312 2.679688 18.175781 12.257813 18.175781 23.289063v29.976563l-1.976562 1.039062h-4.902344l-49.183594-14.054688c-3.875-1.097656-7.867188-1.546874-11.875-1.699218zm-90.269531-152.511719c15.023437-29.109375 45.261719-47.734375 78.207031-47.734375 32.632812 0 62.742188 18.375 77.878906 47.089844-3.808594 7.636718-5.878906 16.09375-5.878906 24.910156v16c0 18.3125 9.089844 35.496094 24 45.902344v3.839844l-32 8.011718-32.007812-8.011718v-3.832032c14.910156-10.40625 24.007812-27.597656 24.007812-45.910156v-13.984375c0-31.078125-24.351562-57.085937-54.28125-57.992187-15.3125-.449219-29.75 5.144531-40.710938 15.785156-10.96875 10.640625-17.007812 24.910156-17.007812 40.191406v16c0 18.3125 9.089844 35.496094 24 45.902344v3.839844l-32 8.011718-32.007812-8.011718v-3.832032c14.910156-10.40625 24.007812-27.597656 24.007812-45.910156v-13.984375c0-9.414063-2.265625-18.351563-6.207031-26.28125zm-36.792969-48.382813 25.558594-25.558593 22.496094 14.640625 4.304687-2.640625c10.785156-6.609375 22.441406-11.449219 34.640625-14.367188l4.921875-1.179687 5.566406-26.246094h35.03125l5.550781 26.238281 4.921876 1.175781c12.199218 2.921876 23.855468 7.761719 34.640624 14.371094l4.304688 2.640625 22.496094-14.640625 25.527344 25.535156-9.074219 21.246094c-6.175781 2.65625-11.902344 6.394532-16.886719 11.226563-.328125.320312-.609375.664062-.929688.992187-18.847656-29.960937-52.167968-48.785156-88.070312-48.785156-36.160156 0-69.574219 19-88.375 49.265625-5.03125-5.265625-11.015625-9.53125-17.648438-12.511719zm-29 150.894532v-25.335938l-3.992188-2.308594c-12.34375-7.136718-20.007812-20.402343-20.007812-34.601562v-16c0-10.910156 4.3125-21.113281 12.152344-28.710938 7.832031-7.59375 18.246094-11.6875 29.085937-11.265624 21.371094.640624 38.761719 19.480468 38.761719 41.992187v13.984375c0 14.199219-7.671875 27.464844-20.023438 34.617188l-4 2.3125.03125 25.316406 27.449219 6.859375c-7.113281 7.277343-11.457031 17.125-11.457031 27.878906v5.925781l-24.953125 5.546875.648437-2.265625.304688-14.785156-42.191406-24.613281zm-88-14.246094h5.832031l57.535157 33.558594-29.03125 116.121094-34.335938-11.449219zm65.296875 160-15.746094-5.246094 28.203125-112.800781 18.246094 10.640625v2.285156l-30.03125 105.121094zm54.703125 23.03125c0-2.359375.953125-4.671875 2.625-6.34375l14.0625-14.0625c1.671875-1.671875 3.984375-2.625 6.34375-2.625 4.945312 0 8.96875 4.023438 8.96875 8.96875 0 2.359375-.953125 4.671875-2.625 6.34375l-14.0625 14.0625c-1.671875 1.671875-3.984375 2.625-6.34375 2.625-4.945312 0-8.96875-4.023438-8.96875-8.96875zm24 24c0-2.359375.953125-4.671875 2.625-6.34375l14.0625-14.0625c1.671875-1.671875 3.984375-2.625 6.34375-2.625 4.945312 0 8.96875 4.023438 8.96875 8.96875 0 2.359375-.953125 4.671875-2.625 6.34375l-14.0625 14.0625c-1.671875 1.671875-3.984375 2.625-6.34375 2.625-4.945312 0-8.96875-4.023438-8.96875-8.96875zm24 24c0-2.359375.953125-4.671875 2.625-6.34375l14.0625-14.0625c1.671875-1.671875 3.984375-2.625 6.34375-2.625 4.945312 0 8.96875 4.023438 8.96875 8.96875 0 2.359375-.953125 4.671875-2.625 6.34375l-14.0625 14.0625c-1.671875 1.671875-3.984375 2.625-6.34375 2.625-4.945312 0-8.96875-4.023438-8.96875-8.96875zm32.96875 32.96875c-4.945312 0-8.96875-4.023438-8.96875-8.96875 0-2.359375.953125-4.671875 2.625-6.34375l14.0625-14.0625c1.671875-1.671875 3.984375-2.625 6.34375-2.625 4.945312 0 8.96875 4.023438 8.96875 8.96875 0 2.359375-.953125 4.671875-2.625 6.34375l-14.0625 14.0625c-1.671875 1.671875-3.984375 2.625-6.34375 2.625zm38.6875 8h-1.480469c-2.039062 0-3.992187-.742188-5.511719-2.089844l-5.984374-5.277344 6.007812-6.007812c2.144531-2.144531 3.808594-4.695312 5.039062-7.433594l7.273438 6.054688c1.902344 1.585937 3 3.921875 3 6.410156 0 4.601562-3.742188 8.34375-8.34375 8.34375zm71.742188-72h-1.382813c-2.007813 0-3.96875-.710938-5.503906-2l-43.382813-36.152344-10.25 12.296875 42.128906 35.101563c1.894532 1.585937 2.992188 3.921875 2.992188 6.410156 0 4.601562-3.742188 8.34375-8.34375 8.34375h-1.746094c-1.941406 0-3.839844-.6875-5.335937-1.9375l-43.453125-36.207031-10.25 12.296875 42.128906 35.105468c1.902344 1.574219 3 3.910157 3 6.398438 0 4.601562-3.742188 8.34375-8.34375 8.34375-3.070312 0-6.0625-1.089844-8.417969-3.046875l-17.855469-14.882813c-3.933593-8.039062-12.015624-13.644531-21.480468-13.980468-.460938-13.050782-10.949219-23.539063-24-24-.460938-13.050782-10.949219-23.539063-24-24-.46875-13.355469-11.40625-24.089844-24.871094-24.089844-6.574219 0-13.007812 2.664062-17.65625 7.3125l-14.0625 14.0625c-.839844.839844-1.535156 1.792969-2.242188 2.738281l-24.574218-14.746093 21.542968-75.398438 54.007813-12.007812c14.167969-3.167969 29.105469-2.480469 42.921875 1.941406l11.785156 3.769531-39.953125 19.976563c-9.128906 4.574218-14.800781 13.757812-14.800781 23.96875v1.582031c0 14.777343 12.023438 26.800781 26.800781 26.800781 4.855469 0 9.632813-1.320312 13.785157-3.824219l29.789062-17.863281c5.984375-3.585938 14.015625-2.800781 19.183594 1.847656l67.59375 60.832032c1.808594 1.640624 2.847656 3.96875 2.847656 6.40625 0 4.746093-3.855469 8.601562-8.601562 8.601562zm152.601562-92.945312-134.777344 67.394531c-.4375-.464844-.894531-.90625-1.375-1.335938l-67.582031-60.832031c-5.921875-5.34375-13.578125-8.28125-21.554687-8.28125-5.832032 0-11.558594 1.585938-16.574219 4.59375l-29.800781 17.871094c-1.671876 1.007812-3.582032 1.535156-5.535157 1.535156-5.960937 0-10.800781-4.839844-10.800781-10.800781v-1.582031c0-4.121094 2.289062-7.816407 5.96875-9.65625l44.625-22.3125c7.636719-3.824219 16.703125-4.679688 24.933594-2.3125l50.273437 14.359374 12.175781.304688 150.023438-78.960938zm0 0",
                        },
                      }),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "bolim_title" }, [
                  _vm._v("ТИФ иштирокчилари учун"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "bolim_description" }, [
                  _vm._v(
                    "ТИФ иштирокчилари учун керакли хизматлар ва маълумотларни\n                            билиб\n                            олинг\n                        "
                  ),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _vm._m(8),
              _vm._v(" "),
              _vm._m(9),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "section yangiliklar", attrs: { id: "section3" } },
        [_c("news-in-home")],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "section asosiy_korsatkichlari2" }, [
        _c("div", { staticClass: "row content" }, [
          _c("div", { staticClass: "col-3" }, [
            _c("div", { staticClass: "stat_menu" }, [
              _c("h3", [_vm._v(" Божхона статистикаси")]),
              _vm._v(" "),
              _c("ul", [
                _c("li", [
                  _c(
                    "a",
                    {
                      staticClass: "active",
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          _vm.stat_type = 1
                        },
                      },
                    },
                    [
                      _vm._v(
                        "Ўзбекистон\n                                Республикаси товарлар импорти ва экспорти ҳудудлар кесимида"
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      class: _vm.stat_type == 2 ? "active" : "",
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          _vm.stat_type = 2
                        },
                      },
                    },
                    [
                      _vm._v(
                        "Божхона\n                                чегараларидан ўтган автомобиллар сони "
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      class: _vm.stat_type == 3 ? "active" : "",
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          _vm.stat_type = 3
                        },
                      },
                    },
                    [
                      _vm._v(
                        "Ўзбекистон\n                                Республикасида кунлик товарлар импорти ва экспорти"
                      ),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(10),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-9", attrs: { id: "reyt" } }, [
            _c("h3", [
              _vm._v(
                "Ўзбекистон Республикаси товарлар импорти ва экспорти ҳудудлар кесимида"
              ),
            ]),
            _vm._v(" "),
            _c("div", {
              ref: "clusteredColumn",
              staticClass: "chart",
              attrs: { id: "columnchart1" },
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "filter row" },
              [
                _c(
                  "v-col",
                  { attrs: { cols: "3" } },
                  [
                    _c("v-autocomplete", {
                      ref: "auto",
                      attrs: {
                        label: "Ойлар бўйича",
                        items: _vm.months,
                        "auto-select-first": "",
                      },
                      model: {
                        value: _vm.month,
                        callback: function ($$v) {
                          _vm.month = $$v
                        },
                        expression: "month",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "3" } },
                  [
                    _c("v-autocomplete", {
                      ref: "auto1",
                      attrs: {
                        label: "Йиллар бўйича",
                        items: _vm.years,
                        "hide-selected": "",
                        "auto-select-first": "",
                      },
                      model: {
                        value: _vm.year,
                        callback: function ($$v) {
                          _vm.year = $$v
                        },
                        expression: "year",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _vm.stat_type == 2
            ? _c("div", { staticClass: "col-9" }, [
                _c("h3", [
                  _vm._v(
                    "Ўзбекистон Республикаси кунлик товарлар импорти ва экспорти"
                  ),
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "chart",
                  attrs: { id: "columnchart2" },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "filter row" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "3" } },
                      [
                        _c("v-autocomplete", {
                          ref: "auto",
                          attrs: {
                            label: "Ойлар бўйича",
                            items: _vm.months,
                            "auto-select-first": "",
                          },
                          model: {
                            value: _vm.month,
                            callback: function ($$v) {
                              _vm.month = $$v
                            },
                            expression: "month",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "3" } },
                      [
                        _c("v-autocomplete", {
                          ref: "auto1",
                          attrs: {
                            label: "Йиллар бўйича",
                            items: _vm.years,
                            "hide-selected": "",
                            "auto-select-first": "",
                          },
                          model: {
                            value: _vm.year,
                            callback: function ($$v) {
                              _vm.year = $$v
                            },
                            expression: "year",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.stat_type == 3
            ? _c("div", { staticClass: "col-9" }, [
                _c("h3", [
                  _vm._v(
                    "Ўзбекистон Республикаси кунлик товарлар импорти ва экспорти"
                  ),
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "chart",
                  attrs: { id: "columnchart3" },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "filter row" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "3" } },
                      [
                        _c("v-autocomplete", {
                          ref: "auto",
                          attrs: { label: "Ойлар бўйича", items: _vm.months },
                          model: {
                            value: _vm.month,
                            callback: function ($$v) {
                              _vm.month = $$v
                            },
                            expression: "month",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "3" } },
                      [
                        _c("v-autocomplete", {
                          ref: "auto1",
                          attrs: {
                            label: "Йиллар бўйича",
                            items: _vm.years,
                            "hide-selected": "",
                            "auto-select-first": "",
                          },
                          model: {
                            value: _vm.year,
                            callback: function ($$v) {
                              _vm.year = $$v
                            },
                            expression: "year",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "section" }, [
        _c("div", { staticClass: "container-fluid contact_faq" }, [
          _c(
            "div",
            { staticClass: "row" },
            [_vm._m(11), _vm._v(" "), _c("front-calendar")],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(12),
      _vm._v(" "),
      _vm._m(13),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("h3", { staticClass: "text-center section_title" }, [
        _vm._v("БЎЛИМЛАР"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-m" }, [
      _c("a", { staticClass: "card1", attrs: { href: "#" } }, [
        _c("h3", [_vm._v("Жисмоний шахслар учун")]),
        _vm._v(" "),
        _c("div", { staticClass: "go-corner", attrs: { href: "#" } }, [
          _c("div", { staticClass: "go-arrow" }, [
            _vm._v(
              "\n                                    →\n                                "
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "card1", attrs: { href: "#" } }, [
        _c("h3", [_vm._v("ТИФ иштирокчилари учун")]),
        _vm._v(" "),
        _c("div", { staticClass: "go-corner", attrs: { href: "#" } }, [
          _c("div", { staticClass: "go-arrow" }, [
            _vm._v(
              "\n                                    →\n                                "
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "card1", attrs: { href: "#" } }, [
        _c("h3", [_vm._v("Мурожаатлар")]),
        _vm._v(" "),
        _c("div", { staticClass: "go-corner", attrs: { href: "#" } }, [
          _c("div", { staticClass: "go-arrow" }, [
            _vm._v(
              "\n                                    →\n                                "
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "card1", attrs: { href: "#" } }, [
        _c("h3", [_vm._v("Сўровнома")]),
        _vm._v(" "),
        _c("div", { staticClass: "go-corner", attrs: { href: "#" } }, [
          _c("div", { staticClass: "go-arrow" }, [
            _vm._v(
              "\n                                    →\n                                "
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "card1", attrs: { href: "#" } }, [
        _c("h3", [_vm._v("Тўловлар ва вақт")]),
        _vm._v(" "),
        _c("div", { staticClass: "go-corner", attrs: { href: "#" } }, [
          _c("div", { staticClass: "go-arrow" }, [
            _vm._v(
              "\n                                    →\n                                "
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "card1", attrs: { href: "#" } }, [
        _c("h3", [_vm._v("Тадбиркорлар учун зарур маълумотлар")]),
        _vm._v(" "),
        _c("div", { staticClass: "go-corner", attrs: { href: "#" } }, [
          _c("div", { staticClass: "go-arrow" }, [
            _vm._v(
              "\n                                    →\n                                "
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "card1", attrs: { href: "#" } }, [
        _c("h3", [_vm._v("Коррупция тўғрисида хабар")]),
        _vm._v(" "),
        _c("div", { staticClass: "go-corner", attrs: { href: "#" } }, [
          _c("div", { staticClass: "go-arrow" }, [
            _vm._v(
              "\n                                    →\n                                "
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "bolim_image" }, [
        _c("img", { attrs: { src: "/img/service/user-icon.png" } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_title" }, [
        _vm._v("Жисмоний шахслар учун"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_description" }, [
        _vm._v(
          "Жисмоний шахслар учун керакли хизматлар ва маълумотларни\n                            билиб\n                            олинг\n                        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "bolim_image" }, [
        _c("img", { attrs: { src: "/img/service/opendata.png" } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_title" }, [_vm._v("Мурожаатлар")]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_description" }, [
        _vm._v(
          "\n                            Божхона қўмитасига мурожаатлар юбориш, кўриб чиқилиши тўғрисидаги маълумотлар\n                        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "bolim_image" }, [
        _c("img", { attrs: { src: "/img/service/opendata.png" } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_title" }, [_vm._v("Сўровнома")]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_description" }, [
        _vm._v(
          "Божхона Қўмитасининг очиқ маълумотларини кўчириб\n                            олишингиз\n                            мумкин\n                        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "bolim_image" }, [
        _c("img", { attrs: { src: "/img/service/opendata.png" } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_title" }, [
        _vm._v("Қизил ва яшил йўлак"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_description" }, [
        _vm._v(
          "\n                            Божхона постларида қизил ва яшил йўлаклар бўйича маълумотлар\n                        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "bolim_image" }, [
        _c("img", { attrs: { src: "/img/service/opendata.png" } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_title" }, [_vm._v("Кузатув камералари")]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_description" }, [
        _vm._v(
          "Божхона қўмитаси кузатув камералари тўғрисидаги\n                            маълумотлар\n                        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "bolim_image" }, [
        _c("img", { attrs: { src: "/img/service/opendata.png" } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_title" }, [
        _vm._v("Коррупцияга қарши курашиш"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_description" }, [
        _vm._v(
          "Божхона Қўмитасининг коррупцияга қарши курашиш борасидаги\n                            ишлари\n                        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "bolim_image" }, [
        _c("img", { attrs: { src: "/img/service/opendata.png" } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_title" }, [
        _vm._v("Интеллектуал мулк объектлари"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_description" }, [
        _vm._v("Интеллектуал мулк объектлари божхона реестри"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "bolim_image" }, [
        _c("img", { attrs: { src: "/img/service/opendata.png" } }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_title" }, [_vm._v("ТИФ номенклатураси")]),
      _vm._v(" "),
      _c("div", { staticClass: "bolim_description" }, [
        _vm._v("Интеллектуал мулк объектлари божхона реестри"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "all_stats",
        attrs: { href: "https://charts.customs.uz", target: "_blank" },
      },
      [
        _vm._v("\n                            Барча статистика "),
        _c("i", { staticClass: "fa fa-arrow-right" }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "chose_inner_area" }, [
        _c("div", { staticClass: "section_tittle" }, [
          _c("h2", [_vm._v("Кўп бериладиган саволлар")]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "panel-group",
            attrs: {
              id: "accordion",
              role: "tablist",
              "aria-multiselectable": "false",
            },
          },
          [
            _c("div", { staticClass: "panel panel-default" }, [
              _c(
                "div",
                {
                  staticClass: "panel-heading",
                  attrs: { role: "tab", id: "headingThree" },
                },
                [
                  _c("h4", { staticClass: "panel-title" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          role: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-parent": "#accordion",
                          href: "#chose3",
                          "aria-expanded": "true",
                          "aria-controls": "chose3",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                                Тариф преференциялари қайси қонун ҳужжатларига мувофиқ қай тартибда\n                                                қўлланилади?\n                                                "
                        ),
                        _c("span", [
                          _c("i", {
                            staticClass: "fa fa-plus",
                            attrs: { "aria-hidden": "false" },
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "fa fa-minus",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse  in show",
                  attrs: {
                    id: "chose3",
                    role: "tabpanel",
                    "aria-labelledby": "headingThree",
                  },
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _vm._v(
                      "\n                                            Ўзбекистон Республикаси Божхона кодексининг 300-моддасига мувофиқ\n                                            тартибга\n                                            солиниб, тариф преференсиялари божхона божларини тўлашдан озод етиш,\n                                            божхона\n                                            божлари ставкаларини камайтириш ёки муайян давлатларда ишлаб чиқарилган\n                                            товарларни божхона ҳудудига преференсиал олиб кириш ёки ушбу ҳудуддан\n                                            преференсиал олиб чиқишда квоталар белгилаш тарзида берилади.\n                                        "
                    ),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _c(
                "div",
                {
                  staticClass: "panel-heading",
                  attrs: { role: "tab", id: "headingOne" },
                },
                [
                  _c("h4", { staticClass: "panel-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed",
                        attrs: {
                          role: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-parent": "#accordion",
                          href: "#chose1",
                          "aria-expanded": "false",
                          "aria-controls": "chose1",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                                Қандай қилиб ҳудудий божхона бошқармалари билан солиштирма\n                                                далолатнома\n                                                тузиш мумкин?\n                                                "
                        ),
                        _c("span", [
                          _c("i", {
                            staticClass: "fa fa-plus",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "fa fa-minus",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "chose1",
                    role: "tabpanel",
                    "aria-labelledby": "headingOne",
                  },
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _vm._v(
                      "\n                                            Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг расмий веб сайти “Електрон хизматлар”\n                                            рукнида\n                                            “Тадбиркорнинг шахсий кабинети” (http://ed1.customs.uz/PersonCabinet)\n                                            орқали\n                                            олиш мумкин.\n                                        "
                    ),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _c(
                "div",
                {
                  staticClass: "panel-heading",
                  attrs: { role: "tab", id: "headingTwo" },
                },
                [
                  _c("h4", { staticClass: "panel-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed",
                        attrs: {
                          role: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-parent": "#accordion",
                          href: "#chose2",
                          "aria-expanded": "false",
                          "aria-controls": "chose2",
                        },
                      },
                      [
                        _vm._v(
                          "\n\n                                                Божхона тўловларини бўлиб-бўлиб ёки кечиктириб тўлаш тўғрисида\n                                                маълумот\n                                                берсангиз?\n                                                "
                        ),
                        _c("span", [
                          _c("i", {
                            staticClass: "fa fa-plus",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "fa fa-minus",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "chose2",
                    role: "tabpanel",
                    "aria-labelledby": "headingTwo",
                  },
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _vm._v(
                      "\n                                            Божхона кодексининг 329, 330, 331-моддаларига мувофиқ божхона\n                                            тўловларини\n                                            кечиктириб ёки бўлиб-бўлиб тўлаш божхона декларацияси қабул қилинган\n                                            кундан\n                                            еътиборан олтмиш календар кундан ошмаслиги лозим. Божхона тўловларини\n                                            кечиктириб ёки бўлиб-бўлиб тўлаш имконияти Ўзбекистон Республикаси\n                                            Президентининг ёхуд Ўзбекистон Республикаси Вазирлар Маҳкамасининг\n                                            қарорига\n                                            биноан узоқроқ муддатларга ва божхона тўловлари тўланиши таъминланмаган\n                                            ҳолда берилиши мумкин.\n\n                                            Божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш имкониятини олиш\n                                            учун\n                                            тўловчи божхона органига божхона тўловлари суммаларини тўлаш бўйича ёзма\n                                            мажбуриятни ўз ичига олган аризани ва жхона тўловлари тўланиши\n                                            таъминланганлигини тасдиқловчи ҳужжатни тақдим етади.\n\n                                            Божхона тўловлари тўланишини таъминлаш тўловчининг танловига кўра\n                                            исталган –\n                                            пул маблағларини божхона органининг шахсий ғазна ҳисобварағига киритиш,\n                                            товарларни гаровга қўйиш, банк кафолатини тақдим етиш, божхона\n                                            тўловларини\n                                            тўлаш мажбуриятини суғурталаш ёки кафиллик орқали амалга оширилади.\n                                        "
                    ),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _c(
                "div",
                {
                  staticClass: "panel-heading",
                  attrs: { role: "tab", id: "headingFive" },
                },
                [
                  _c("h4", { staticClass: "panel-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed",
                        attrs: {
                          role: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-parent": "#accordion",
                          href: "#chose5",
                          "aria-expanded": "false",
                          "aria-controls": "chose5",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                                Енг кўп қулайлик бериш режимини белгиланган давлатлар ҳамда тариф\n                                                ставкалари қандай?\n                                                "
                        ),
                        _c("span", [
                          _c("i", {
                            staticClass: "fa fa-plus",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "fa fa-minus",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "chose5",
                    role: "tabpanel",
                    "aria-labelledby": "headingFive",
                  },
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _vm._v(
                      "\n                                            Ўзбекистон Республикаси билан енг кўп қулайлик бериш режимини\n                                            белгиланган\n                                            давлатлар (рўйхат рақами 3267, 30.06.2020й.) сони 47 та бўлиб,\n                                            Ўзбекистон\n                                            Республикаси савдо-иқтисодий муносабатларда енг кўп қулайлик бериш\n                                            режимини\n                                            қўллаётган мамлакатларда ишлаб чиқарилган товарларга нисбатан, товарни\n                                            жўнатувчи ва експорт қилувчи мамлакатдан қатъи назар бож тарифи билан\n                                            белгиланган ставкалар (бир баровар) миқдоридаги божхона божлари\n                                            қўлланилади.\n                                        "
                    ),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _c(
                "div",
                {
                  staticClass: "panel-heading",
                  attrs: { role: "tab", id: "headingSix" },
                },
                [
                  _c("h4", { staticClass: "panel-title" }, [
                    _c(
                      "a",
                      {
                        staticClass: "collapsed",
                        attrs: {
                          role: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-parent": "#accordion",
                          href: "#chose6",
                          "aria-expanded": "false",
                          "aria-controls": "chose6",
                        },
                      },
                      [
                        _vm._v(
                          "\n                                                Товарни муайян мамлактда ишлаб чиқарилганлигини тасдиқловчи ҳужжат\n                                                нима\n                                                ва унинг турлари?\n                                                "
                        ),
                        _c("span", [
                          _c("i", {
                            staticClass: "fa fa-plus",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass: "fa fa-minus",
                            attrs: { "aria-hidden": "true" },
                          }),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "chose6",
                    role: "tabpanel",
                    "aria-labelledby": "headingFive",
                  },
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _vm._v(
                      "\n                                            Божхона кодекси 363-моддасида, товарнинг муайян мамлакатда ишлаб\n                                            чиқарилганлиги, експорт ёки реекспорт қилувчи мамлакатда белгиланган\n                                            тартиб\n                                            ва шаклга мувофиқ ваколатли орган томонидан берилган, шу жумладан\n                                            електрон\n                                            шаклда берилган товарнинг келиб чиқиши тўғрисидаги сертификат билан\n                                            тасдиқланади.\n                                        "
                    ),
                  ]),
                ]
              ),
            ]),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer_area" }, [
      _c("div", { staticClass: "footer_widget_area" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "footer_widget_inner" }, [
                _c("div", { staticClass: "f_about_widget" }, [
                  _c("div", { staticClass: "logo" }, [
                    _c("img", {
                      attrs: { src: "/img/gtk_image.png", alt: "" },
                    }),
                    _vm._v(
                      "Ўзбекистон\n                                        Республикаси\n                                        Давлат\n                                        божхона қўмитаси\n                                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "f_navigation_widget" }, [
                    _c("ul", [
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", {
                            staticClass: "fa fa-angle-right",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v(
                            "Қўмита\n                                                ҳақида"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", {
                            staticClass: "fa fa-angle-right",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v("Фаолият"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", {
                            staticClass: "fa fa-angle-right",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v("Ҳужжатлар"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", {
                            staticClass: "fa fa-angle-right",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v(
                            "Очиқ\n                                                қўмита"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          { attrs: { href: "https://charts.customs.uz" } },
                          [
                            _c("i", {
                              staticClass: "fa fa-angle-right",
                              attrs: { "aria-hidden": "true" },
                            }),
                            _vm._v("Статистика"),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", {
                            staticClass: "fa fa-angle-right",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v("Оав учун"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", {
                            staticClass: "fa fa-angle-right",
                            attrs: { "aria-hidden": "true" },
                          }),
                          _vm._v("Боғланиш"),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-5" }, [
              _c("div", { staticClass: "footer_widget_inner" }, [
                _c("div", { staticClass: "f_about_widget" }, [
                  _c("p", [
                    _vm._v(
                      "Сайтдан олинган ҳар қандай\n                                        маълумотлардан фойдаланганда\n                                        Ўзбекистон Республикаси ДБҚ сайтидан\n                                        олинганлиги кўрсатиб ўтилиши шарт."
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                                        ЎзМАА Интернет-ОАВ гувоҳномаси № 0902\n                                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      " © 2001-2022 Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси.\n                                    "
                    ),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "footer_widget_inner" }, [
                _c("div", { staticClass: "f_contact_widget" }, [
                  _c("ul", { staticClass: "contact_lsit" }, [
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa fa-map-marker",
                          attrs: { "aria-hidden": "true" },
                        }),
                        _vm._v(
                          "100003,\n                                            Тошкент шаҳри,Ислом Каримов кўчаси 3 уй"
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa fa-phone",
                          attrs: { "aria-hidden": "true" },
                        }),
                        _vm._v(
                          "(+998-55)\n                                            502-76-00"
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("i", {
                          staticClass: "fa fa-envelope",
                          attrs: { "aria-hidden": "true" },
                        }),
                        _vm._v("info@customs.uz"),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "f_widget_social" }, [
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://www.facebook.com/UZDBQ/",
                            target: "_blank",
                          },
                        },
                        [_c("i", { staticClass: "fab fa-facebook-f" })]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "d-none" }, [
                      _c("a", { attrs: { href: "#", target: "_blank" } }, [
                        _c("i", { staticClass: "fab fa-twitter" }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://t.me/customschannel",
                            target: "_blank",
                          },
                        },
                        [_c("i", { staticClass: "fab fa-telegram-plane" })]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "d-none" }, [
                      _c("a", { attrs: { href: "#", target: "_blank" } }, [
                        _c("i", { staticClass: "fab fa-google-plus-g" }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://www.instagram.com/bojxona.official/",
                            target: "_blank",
                          },
                        },
                        [_c("i", { staticClass: "fab fa-instagram-square" })]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://www.youtube.com/@BojxonaqomitasiAxborotxi-hf6od",
                            target: "_blank",
                          },
                        },
                        [_c("i", { staticClass: "fab fa-youtube" })]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer_links" }, [
      _c("div", { staticClass: "footer_links_arrow" }, [
        _c("i", { staticClass: "fas fa-chevron-down" }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "slide_links" }, [
        _c(
          "a",
          { staticClass: "footer_link", attrs: { href: "//huquqiyportal.uz" } },
          [
            _c("div", { staticClass: "image" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Oʼzbekiston Respublikasi Milliy huquqiy internet portali"
              ),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "footer_link", attrs: { href: "//president.uz" } },
          [
            _c("div", { staticClass: "image" }),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "O'zbekiston Respublikasi Prezidentining rasmiy veb sayti"
              ),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("a", { staticClass: "footer_link", attrs: { href: "//gov.uz" } }, [
          _c("div", { staticClass: "image" }),
          _vm._v(" "),
          _c("p", [_vm._v("Oʼzbekiston Respublikasi Hukumat portali")]),
        ]),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "footer_link", attrs: { href: "//prokuratura.uz" } },
          [
            _c("div", { staticClass: "image" }),
            _vm._v(" "),
            _c("p", [_vm._v("Oʼzbekiston Respublikasi Bosh prokuraturasi")]),
          ]
        ),
        _vm._v(" "),
        _c("a", { staticClass: "footer_link", attrs: { href: "//iiv.uz" } }, [
          _c("div", { staticClass: "image" }),
          _vm._v(" "),
          _c("p", [_vm._v("Oʼzbekiston Respublikasi Ichki ishlar vazirligi")]),
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "footer_link", attrs: { href: "//soliq.uz" } }, [
          _c("div", { staticClass: "image" }),
          _vm._v(" "),
          _c("p", [_vm._v("Oʼzbekiston Respublikasi Davlat soliq qo'mitasi")]),
        ]),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "footer_link", attrs: { href: "//my.gov.uz" } },
          [
            _c("div", { staticClass: "image" }),
            _vm._v(" "),
            _c("p", [_vm._v("Yagona interaktiv davlat xizmatlari portali")]),
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "footer_link", attrs: { href: "//data.gov.uz" } },
          [
            _c("div", { staticClass: "image" }),
            _vm._v(" "),
            _c("p", [
              _vm._v("Oʼzbekiston Respublikasi Ochiq ma'lumotlar portali"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "footer_link", attrs: { href: "//pm.gov.uz" } },
          [
            _c("div", { staticClass: "image" }),
            _vm._v(" "),
            _c("p", [
              _vm._v("Oʼzbekiston Respublikasi Prezidenti Virtual qabulxonasi"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("a", { staticClass: "footer_link", attrs: { href: "//uzbi.uz" } }, [
          _c("div", { staticClass: "image" }),
          _vm._v(" "),
          _c("p", [_vm._v("Bojxona instituti")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);