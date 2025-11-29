(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_bko_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/EditableDate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/EditableDate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EditableDate',
  // eslint-disable-next-line vue/require-prop-types
  // props: ['modelValue', 'label'],
  directives: {
    mymask: vue_the_mask__WEBPACK_IMPORTED_MODULE_0__.mask
  },
  props: {
    value: {
      type: String,
      "default": ''
    },
    label: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      menu: {
        date: null
      },
      datepicker: {
        date: null
      },
      activePicker: {
        date: null
      }
    };
  },
  computed: {
    modelValue: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        if (this.isValidDate(value) || value === null) {
          this.$emit('input', value);
          if (value) this.datepicker.date = value.length === 10 ? this.formatDate(value, true) : this.datepicker.date;
        }
      }
    }
  },
  methods: {
    formatDate: function formatDate(date) {
      var desc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!date) return null;

      var _date$split = date.split('-'),
          _date$split2 = _slicedToArray(_date$split, 3),
          year = _date$split2[0],
          month = _date$split2[1],
          day = _date$split2[2];

      if (desc) {
        return "".concat(day, "-").concat(month, "-").concat(year);
      } else {
        return "".concat(day, "-").concat(month, "-").concat(year);
      }
    },
    isValidDate: function isValidDate(dateStr) {
      if (!dateStr) return false;
      var s = dateStr.split('-');
      var d = new Date(s[2], s[1] - 1, s[0]);

      if (Object.prototype.toString.call(d) === '[object Date]') {
        if (!isNaN(d.getTime()) && d.getDate() === parseInt(s[0]) && d.getMonth() === s[1] - 1) {
          return true;
        }
      }

      return false;
    }
  },
  watch: {
    'menu.date': function menuDate(val) {
      var _this = this;

      val && setTimeout(function () {
        return _this.activePicker = 'YEAR';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _components_form_myfield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/form/myfield */ "./resources/js/components/form/myfield.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _locales_oz_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../locales/oz.json */ "./resources/js/locales/oz.json");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
/* harmony import */ var _components_form_textfield__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/form/textfield */ "./resources/js/components/form/textfield.vue");
/* harmony import */ var _components_form_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/form/autocomplete */ "./resources/js/components/form/autocomplete.vue");
/* harmony import */ var _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/form/e-arxiv-file */ "./resources/js/components/form/e-arxiv-file.vue");
/* harmony import */ var _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/form/dialog-chips */ "./resources/js/components/form/dialog-chips.vue");
/* harmony import */ var _components_custom_EditableDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/custom/EditableDate */ "./resources/js/components/custom/EditableDate.vue");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "InitialBkoCreate",
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('Хизматлар'),
        to: '/services',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('Божхона кирим ордерини шакллантириш'),
        to: '/services/bko',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_5__["default"].t('Ариза юбориш'),
        to: '/services/bko/create',
        disabled: true,
        exact: true
      }],
      app: {
        bank: null,
        mfo: null,
        type_avto: null,
        postType: null,
        moliya_bank: null,
        yigim_turi: null,
        file_error: "",
        region: null,
        post: null,
        files: []
      },
      application: {
        murojatEntityDto: {},
        docEntityDtos: {},
        payEntityDto: {}
      },
      person: {
        type: 1,
        /// 1- fiz 2- yur
        fio: "",
        pin: null,
        tin: null,
        organization_name: "Жисмоний шахс",
        organization_inn: null,
        personType: "01",
        position: "01",
        phone: null,
        email: null
      },
      loading: {
        tin: false,
        button: false,
        mfo: false
      },
      inns: [],
      search_inn: null,
      mfos: [],
      regions: [],
      images: [],
      hujjatType: [{
        value: 101,
        text: '101 - ЛИЦЕНЗИЯ'
      }, {
        value: 201,
        text: '201 - КРГ'
      }, {
        value: 202,
        text: '202 - СМР'
      }, {
        value: 203,
        text: '203 - КНСМ'
      }, {
        value: 204,
        text: '204 - TIR'
      }, {
        value: 205,
        text: '205 - АВИА'
      }, {
        value: 206,
        text: '206 - НКПЧТ'
      }, {
        value: 207,
        text: '207 - СМГС'
      }, {
        value: 208,
        text: '208 - ТТН'
      }, {
        value: 209,
        text: '209 - ПТС'
      }, {
        value: 220,
        text: '220 - ИНВ'
      }, {
        value: 221,
        text: '221 - ИНВПРФ'
      }, {
        value: 222,
        text: '222 - УПЛИСТ'
      }, {
        value: 223,
        text: '223 - ИНВ_ОТ'
      }, {
        value: 301,
        text: '301 - КНТ'
      }, {
        value: 302,
        text: '302 - ДОП'
      }, {
        value: 303,
        text: '303 - ДГАРНД'
      }, {
        value: 304,
        text: '304 - СПРРС'
      }, {
        value: 305,
        text: '305 - КНТ_ТР'
      }, {
        value: 306,
        text: '306 - IDN_ТР'
      }, {
        value: 402,
        text: '402 - АКТЭКСП'
      }, {
        value: 403,
        text: '403 - ВЗРМ'
      }, {
        value: 404,
        text: '404 - ВТРС'
      }, {
        value: 405,
        text: '405 - ВЧР'
      }, {
        value: 406,
        text: '406 - СЭЗ'
      }, {
        value: 407,
        text: '407 - ГКЭ_РСТ'
      }, {
        value: 408,
        text: '408 - ГКЭ_ЖВТ'
      }, {
        value: 409,
        text: '409 - CITES'
      }, {
        value: 410,
        text: '410 - КРНР'
      }, {
        value: 411,
        text: '411 - УЗЭКСП'
      }, {
        value: 412,
        text: '412 - ССПН'
      }, {
        value: 413,
        text: '413 - ОРВ'
      }, {
        value: 414,
        text: '414 - ПГХ'
      }, {
        value: 415,
        text: '415 - ПРФ'
      }, {
        value: 416,
        text: '416 - ПСР'
      }, {
        value: 417,
        text: '417 - ССТ'
      }, {
        value: 418,
        text: '418 - УЗСТ'
      }, {
        value: 419,
        text: '419 - ФТСС'
      }, {
        value: 420,
        text: '420 - ЭКО'
      }, {
        value: 421,
        text: '421 - ЗК_ТКСТ'
      }, {
        value: 422,
        text: '422 - ИЛАК'
      }, {
        value: 423,
        text: '423 - ИАФ'
      }, {
        value: 424,
        text: '424 - ОЭСР'
      }, {
        value: 425,
        text: '425 - КУР'
      }, {
        value: 426,
        text: '426 - ВТРР'
      }, {
        value: 427,
        text: '427 - ЭНО'
      }, {
        value: 428,
        text: '428 - МБР'
      }, {
        value: 429,
        text: '429 - ХХЮ'
      }, {
        value: 430,
        text: '430 - ТКР'
      }, {
        value: 431,
        text: '431 - БАД'
      }, {
        value: 432,
        text: '432 - НПП'
      }, {
        value: 433,
        text: '433 - ХБПП'
      }, {
        value: 434,
        text: '434 - НППС'
      }, {
        value: 435,
        text: '435 - КУРГ'
      }, {
        value: 436,
        text: '436 - КИЗ'
      }, {
        value: 437,
        text: '437 - СГТ'
      }, {
        value: 438,
        text: '438 - ЮСМ'
      }, {
        value: 501,
        text: '501 - РегМИВТ'
      }, {
        value: 502,
        text: '502 - СвИПБЮЛ'
      }, {
        value: 503,
        text: '503 - РегЦМЭП'
      }, {
        value: 6,
        text: '6 - X'
      } * {
        value: 701,
        text: '701 - СПТИМ'
      }, {
        value: 702,
        text: '702 - СПТЭК'
      }, {
        value: 703,
        text: '703 - УПТ'
      }, {
        value: 801,
        text: '801 - БГРН'
      }, {
        value: 802,
        text: '802 - СТРХПЛ'
      }, {
        value: 803,
        text: '803 - ОБЗПРЧ'
      }, {
        value: 804,
        text: '804 - ЭкГТД'
      }, {
        value: 805,
        text: '805 - ИмГТД'
      }, {
        value: 806,
        text: '806 - ГрнСН'
      }, {
        value: 807,
        text: '807 - ДЗЛГ'
      }, {
        value: 808,
        text: '808 - ДПР'
      }, {
        value: 809,
        text: '809 - ДХР'
      }, {
        value: 810,
        text: '810 - ДСВСК'
      }, {
        value: 811,
        text: '811 - ДОГ'
      }, {
        value: 812,
        text: '812 - ПСТ'
      }, {
        value: 813,
        text: '813 - ЭКСПЗК'
      }, {
        value: 814,
        text: '814 - ДЕФАКТ'
      }, {
        value: 815,
        text: '815 - ССК'
      }, {
        value: 816,
        text: '816 - ЗАЯВ74'
      }, {
        value: 817,
        text: '817 - АКТ75'
      }, {
        value: 818,
        text: '818 - АКТ76'
      }, {
        value: 819,
        text: '819 - ЗАЯВСП'
      }, {
        value: 820,
        text: '820 - АПИ'
      }, {
        value: 834,
        text: '834 - РАЗ51'
      }, {
        value: 835,
        text: '835 - РАЗ61'
      }, {
        value: 850,
        text: '850 - НТЗ'
      }, {
        value: 851,
        text: '851 - БССТ'
      }, {
        value: 852,
        text: '852 - ГПДС'
      }, {
        value: 854,
        text: '854 - БВС'
      }, {
        value: 855,
        text: '855 - БГС'
      }, {
        value: 856,
        text: '856 - БЭС'
      }, {
        value: 857,
        text: '857 - ЗМЭП'
      }, {
        value: 858,
        text: '858 - РП'
      }, {
        value: 859,
        text: '859 - РПХ'
      }, {
        value: 860,
        text: '860 - ПУГТК'
      }, {
        value: 861,
        text: '861 - ЗАМ'
      }, {
        value: 862,
        text: '862 - ДК'
      }, {
        value: 863,
        text: '863 - РЕФ'
      }, {
        value: 864,
        text: '864 - ПУК'
      }, {
        value: 865,
        text: '865 - ПСО'
      }, {
        value: 867,
        text: '867 - ТПОД'
      }, {
        value: 868,
        text: '868 - ДХИР'
      }, {
        value: 869,
        text: '869 - ПРТП'
      }, {
        value: 899,
        text: '899 - ДРГДОК'
      }, {
        value: 901,
        text: '901 - АТД'
      }, {
        value: 902,
        text: '902 - З1М'
      }, {
        value: 903,
        text: '903 - ЗРЦ'
      }, {
        value: 904,
        text: '904 - МЕТОД'
      }, {
        value: 905,
        text: '905 - ПХС'
      }, {
        value: 906,
        text: '906 - КНТП'
      }, {
        value: 907,
        text: '907 - ГТДО'
      }],
      tolovType: [{
        text: '40 - ' + this.$t('Эгаси божхона органи бўлган божхона омборида товарларни сақлаганлик учун божхона йиғими'),
        value: '40'
      }, {
        text: '41 - ' + this.$t('Транспорт воситасини божхона кузатиб бориши учун божхона йиғимлари'),
        value: '41'
      }, {
        text: '42 - ' + this.$t('Товарларни божхона ҳудудидан ташқарида қайта ишлашга, товарларни божхона ҳудудида қайта ишлашга рухсатнома берганлик учун божхона йиғимлари'),
        value: '42'
      }, {
        text: '43 - ' + this.$t('Декларант ёки у ишонч билдирган шахснинг мурожаатига асосан БЮДга ўзгартириш ва (ёки) қўшимча киритилганлик учун божхона йиғими'),
        value: '43'
      }, {
        text: '44 - ' + this.$t('Божхона назорати остида ташилаётган товар ва транспорт воситалари учун белгиланган етказиб бериш муддати ўтказиб юборилганлик учун божхона йиғими'),
        value: '44'
      }, {
        text: '45 - ' + this.$t('Белгиланган муддат тугагандан сўнг вақтинчалик олиб кирилган автотранспорт воситасини қайтариб олиб чиқиб кетилишини ёки тегишли божхона режимига расмийлаштирилишини таъминламаганлик учун божхона йиғими'),
        value: '45'
      }, {
        text: '46 - ' + this.$t('Ўзбекистон Республикаси қонунчилик ҳужжатлари билан назарда тутилган бошқа йиғимлар'),
        value: '46'
      }, {
        text: '50 - ' + this.$t('Товарларни ТИФ ТН код рақами аниқлаш юзасидан дастлабки қарор қабул қилганлик учун божхона йиғими'),
        value: '50'
      }, {
        text: '51 - ' + this.$t('Тўланиши лозим бўлган божхона тўловлари миқдорини аниқлаш юзасидан дастлабки қарор қабул қилганлик учун божхона йиғими'),
        value: '51'
      }, {
        text: '52 - ' + this.$t('Чегара божхона постида товарларни вақтинча сақлаганлик учун божхона йиғими'),
        value: '52'
      }],
      tolovMethod: [{
        text: this.$t('БН'),
        value: 'БН'
      }, {
        text: this.$t('КТ'),
        value: 'КТ'
      }],
      tolovlar: [],
      tolov: {
        type: null,
        asos: null,
        stavka: null,
        summa: null
      },
      dialogFile: false,
      dialogTolov: false,
      yigimlar: [{
        text: "Эгаси божхона органи бўлган божхона омборида товарларни сақлаганлик учун божхона йиғими",
        value: 40
      }, {
        text: "Транспорт воситасини божхона кузатиб бориши учун божхона йиғимлари",
        value: 41
      }, {
        text: "Товарларни божхона ҳудудидан ташқарида қайта ишлашга, товарларни божхона ҳудудида қайта ишлашга рухсатнома берганлик учун божхона йиғимлари",
        value: 42
      }, {
        text: "Декларант ёки у ишонч билдирган шахснинг мурожаатига асосан БЮДга ўзгартириш ва (ёки) қўшимча киритилганлик учун божхона йиғими",
        value: 43
      }, {
        text: "Божхона назорати остида ташилаётган товар ва транспорт воситалари учун белгиланган етказиб бериш муддати ўтказиб юборилганлик учун божхона йиғими",
        value: 44
      }, {
        text: "Белгиланган муддат тугагандан сўнг вақтинчалик олиб кирилган автотранспорт воситасини қайтариб олиб чиқиб кетилишини ёки тегишли божхона режимига расмийлаштирилишини таъминламаганлик учун божхона йиғими",
        value: 45
      }, {
        text: "Ўзбекистон Республикаси қонунчилик ҳужжатлари билан назарда тутилган бошқа йиғимлар",
        value: 46
      }, {
        text: "Товарларни ТИФ ТН код рақами аниқлаш юзасидан дастлабки қарор қабул қилганлик учун божхона йиғими",
        value: 50
      }, {
        text: "Тўланиши лозим бўлган божхона тўловлари миқдорини аниқлаш юзасидан дастлабки қарор қабул қилганлик учун божхона йиғими",
        value: 51
      }, {
        text: "Чегара божхона постида товарларни вақтинча сақлаганлик учун божхона йиғими",
        value: 52
      }],
      search_mfo: null,
      arxiv_errors: null,
      fields: [{
        key: 'legalName',
        value: 'Ташкилот номи'
      }, {
        key: 'firstName',
        value: 'ФИШ'
      }, {
        key: 'surName',
        value: 'ФИШ'
      }, {
        key: 'lastName',
        value: 'ФИШ'
      }, {
        key: 'fio',
        value: 'ФИШ'
      }, {
        key: 'email',
        value: 'Электрон почта'
      }, {
        key: 'pinfl',
        value: 'ЖШШИР'
      }, {
        key: 'tin',
        value: 'СТИР'
      }, {
        key: 'inn',
        value: 'СТИР'
      }, {
        key: 'g4adres',
        value: 'Манзили'
      }, {
        key: 'telNumber',
        value: 'Телефон рақами'
      }, {
        key: 'yigim_turi',
        value: 'Йиғим тури'
      }, {
        key: 'rs',
        value: 'Молия ва банк маълумотлари'
      }, {
        key: 'mfo',
        value: 'МФО'
      }, {
        key: 'bank',
        value: 'Банк номи'
      }, {
        key: 'postId',
        value: 'Таркибий тузилма'
      }, {
        key: 'postType',
        value: 'Таркибий тузилма тури'
      }, {
        key: 'mfo',
        value: 'МФО'
      }, {
        key: 'ugtkId',
        value: 'Ҳудуд'
      }, {
        key: 'postId',
        value: 'Пост'
      }],
      ilova_error: "",
      tolov_error: "",
      postloading: false,
      posts: [],
      confirmDialog: false,
      confirmDialogTolov: false,
      headers: [{
        text: this.$t('Ҳужжат тури'),
        align: 'start',
        sortable: false,
        value: 'type'
      }, {
        text: this.$t('Ҳужжат рақами'),
        value: 'number'
      }, {
        text: this.$t('Ҳужжат санаси'),
        value: 'date'
      }, {
        text: this.$t('Амаллар'),
        value: 'actions'
      }],
      headersTolov: [{
        text: this.$t('Тўлов тури'),
        align: 'start',
        sortable: false,
        value: 'type'
      }, {
        text: this.$t('Ҳисоблаш асоси'),
        value: 'asos'
      }, {
        text: this.$t('Ставка'),
        value: 'stavka'
      }, {
        text: this.$t('Сумма'),
        value: 'summa'
      }, {
        text: this.$t('Амаллар'),
        value: 'actions'
      }],
      hujjatlar: []
    };
  },
  methods: {
    deleteItem: function deleteItem(id) {
      this.hujjatlar = this.hujjatlar.filter(function (item) {
        return id !== item.id;
      });
    },
    deleteItemTolov: function deleteItemTolov(id) {
      this.tolovlar = this.tolovlar.filter(function (item) {
        return id !== item.id;
      });
    },
    addItemTolov: function addItemTolov() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this, isValid, highestId;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                highestId = function _highestId(_this) {
                  if (_this.tolovlar.length === 0) return 0;
                  return _this.tolovlar.reduce(function (a, b) {
                    return Number(a.id) > Number(b.id) ? a : b;
                  }).id;
                };

                _this = _this2;
                _context.next = 4;
                return _this2.$refs.tolovValidationServer.validate();

              case 4:
                isValid = _context.sent;

                if (isValid) {
                  // this.huquqbuzarlar.filter
                  _this2.tolovlar.push(_objectSpread({
                    id: highestId(_this) + 1
                  }, _this2.tolov));

                  _this2.clearTolov(true);

                  _this2.dialogTolov = false;
                } else {
                  _this.$toast.error(_this.$t('Майдонлар хато тўлдирилган. Қайта кўриб чиқиб қайтадан ҳаракат қилинг!'));
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    clearTolov: function clearTolov() {
      this.$refs.tolovValidationServer.reset();

      for (var _i = 0, _Object$entries = Object.entries(this.tolov); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        this.tolov[key] = null;
      }
    },
    getPosts: function getPosts(code) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.postloading = true;
                _this = _this3;
                _this3.posts = [];
                _context2.next = 5;
                return axios.get('/api/v1/ex_api/postsbyregion?code=' + code).then(function (result) {
                  if (typeof result.data.posts !== 'undefined') result.data.posts.forEach(function (item) {
                    _this.posts.push({
                      'value': item['code'],
                      'text': item['cdNm']
                    });
                  });
                });

              case 5:
                _this3.postloading = false;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getField: function getField(val) {
      return this.fields.filter(function (obj) {
        if (obj.key === val) return obj.value;
      });
    },
    filterObject: function filterObject(objects, element) {
      var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
      var object = objects.filter(function (item) {
        if (item && item[prop] === parseInt(element)) {
          return item;
        }
      });
      if (typeof object !== 'undefined') return object[0];else return null; //return (objects.find(object => { object[prop] === parseInt(element)}))
    },
    sendApplication: function sendApplication() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _this, result, obj, errors, _i2, _Object$entries2, _Object$entries2$_i, key, item, _i3, _Object$entries3, _Object$entries3$_i, valKey, val, _i4, _Object$entries4, _Object$entries4$_i, _key, value;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this = _this4;

                _this.resetVar(_this.application);

                _this.ilova_error = "";
                _this.application['murojatEntityDto']['pinfl'] = _this.person.pin;
                _this.application['murojatEntityDto']['inn'] = _this.$auth.user().tin ? _this.$auth.user().tin : _this.person.organization_inn;
                _this.application['murojatEntityDto']['fio'] = _this.$auth.user().sur_name + ' ' + _this.$auth.user().first_name + ' ' + _this.$auth.user().mid_name;
                _this.application['murojatEntityDto']['g4adres'] = _this.person.perAdr;
                _this.application['murojatEntityDto']['email'] = _this.person.email;
                if (typeof _this.person.phone !== 'undefined' && _this.person.phone) _this.application['murojatEntityDto']['telNumber'] = _this.person.phone.replaceAll(" ", "").replaceAll("+", "");
                _this.application['murojatEntityDto']['g19type'] = _this.app.yigim_turi;
                _this.application['murojatEntityDto']['rs'] = _this.app.moliya_bank;
                _this.application['murojatEntityDto']['mfo'] = _this.app.mfo;
                _this.application['murojatEntityDto']['bank'] = _this.app.bank;
                _this.application['murojatEntityDto']['ugtkId'] = _this.app.region;
                _this.application['murojatEntityDto']['postType'] = _this.app.postType;
                _this.application['murojatEntityDto']['postId'] = _this.app.postType === 12 ? '00000' : _this.app.post;
                _this.application.docEntityDtos = [];
                _this.application.docEntityDtos = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.files)));
                _this.application.payEntityDto = [];

                _this.tolovlar.forEach(function (tolov) {
                  if (typeof tolov.type !== 'undefined' && typeof tolov.asos !== 'undefined' && typeof tolov.stavka !== 'undefined' && typeof tolov.summa !== 'undefined' && typeof tolov.method !== 'undefined') {
                    _this.application.payEntityDto.push({
                      g19Type: tolov.type,
                      g19Base: tolov.asos,
                      stavka: tolov.stavka,
                      g19sum: tolov.summa,
                      g19sp: tolov.method
                    });
                  }
                });

                result = null;
                _context3.prev = 21;
                obj = JSON.parse(JSON.stringify(_this.application));
                _context3.next = 25;
                return axios.post('/api/v1/ex_api/tpo', obj).then(function (resultData) {
                  if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                    _this.application.id = resultData.data.data.murojatId;

                    _this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");

                    setTimeout(function () {
                      _this.$router.push("/services/bko/" + _this.application.id);
                    }, 100);
                  }
                });

              case 25:
                _this.loading.button = false;
                return _context3.abrupt("return", result);

              case 29:
                _context3.prev = 29;
                _context3.t0 = _context3["catch"](21);

                ///console.log(error.response.data.data);
                if (typeof _context3.t0.response !== 'undefined' && typeof _context3.t0.response.data !== 'undefined' && _context3.t0.response.data.success === false && typeof _context3.t0.response.data.data !== 'undefined') {
                  errors = []; //console.log(error.response.data.data);

                  for (_i2 = 0, _Object$entries2 = Object.entries(_context3.t0.response.data.data); _i2 < _Object$entries2.length; _i2++) {
                    _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), key = _Object$entries2$_i[0], item = _Object$entries2$_i[1];

                    if (item && _typeof(item) === 'object') {
                      for (_i3 = 0, _Object$entries3 = Object.entries(item); _i3 < _Object$entries3.length; _i3++) {
                        _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2), valKey = _Object$entries3$_i[0], val = _Object$entries3$_i[1];
                        errors[valKey] = val;
                      }
                    }
                  }

                  if (typeof _context3.t0.response.data.data.message !== 'undefined' && typeof _context3.t0.response.data.data.message.errorDoc !== 'undefined' && typeof _context3.t0.response.data.data.message.errorDoc.docEntityDtos !== 'undefined') {
                    _this.ilova_error = JSON.parse(JSON.stringify(_context3.t0.response.data.data.message.errorDoc.docEntityDtos));
                  }

                  if (typeof _context3.t0.response.data.data.message !== 'undefined' && typeof _context3.t0.response.data.data.message.errorPay !== 'undefined' && typeof _context3.t0.response.data.data.message.errorPay.payEntityDto !== 'undefined') {
                    _this.tolov_error = JSON.parse(JSON.stringify(_context3.t0.response.data.data.message.errorPay.payEntityDto));
                  }

                  if (errors) {
                    for (_i4 = 0, _Object$entries4 = Object.entries(errors); _i4 < _Object$entries4.length; _i4++) {
                      _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2), _key = _Object$entries4$_i[0], value = _Object$entries4$_i[1];

                      _this.setApplicationErrors(value);
                    }

                    _this.$toast.warning('Тўлдирилган майдонлардан бири хато тўлдирилди!');
                  } else if (typeof _context3.t0.response.data.data.errors == 'string') _this.$toast.error(_context3.t0.response.data.data.errors);else {
                    _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг');
                  }
                } else {
                  _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг!');
                }

              case 32:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[21, 29]]);
      }))();
    },
    getBoshqarmalar: function getBoshqarmalar() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this = _this5;
                _context4.next = 3;
                return _this5.$auth.plugins.http.get('/api/v1/ex_api/boshqarma').then(function (result) {
                  if (typeof result.data.data !== 'undefined') result.data.data.forEach(function (item) {
                    if (!['1790', '1791', '1701'].includes(item['kod_id'])) _this.regions.push({
                      'value': item['kod_id'],
                      'text': item['name'].replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "") //(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)

                    });
                  });
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    nextStep: function nextStep() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var isValid, _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                isValid = false;
                _this = _this6;
                _this.tolov_error = '';
                _this6.loading.button = true; //console.log(!this.validateField("create_customs_person_value"))

                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
                  var resultData;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this6.validateField("stepValidation1");

                        case 2:
                          isValid = _context5.sent;

                          if (!(isValid === true)) {
                            _context5.next = 12;
                            break;
                          }

                          _this6.person.lastName = _this6.$auth.user().mid_name;
                          _this6.person.firstName = _this6.$auth.user().first_name;
                          _this6.person.surName = _this6.$auth.user().sur_name;
                          _this6.person.locationId = _this6.person.region;
                          _context5.next = 10;
                          return _this6.sendApplication();

                        case 10:
                          resultData = _context5.sent;
                          _this6.loading.button = false;
                          /*                    if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && resultData.data.success === true) {
                                                  //console.log(resultData.data['data']['data']['id'])
                                                  this.person.person_id = resultData.data['data']['data']['id'];
                                                  //this.$cookie.delete('user');
                                                  this.$cookie.set('user', JSON.stringify(this.person), 1);
                                                  _this.$toast.success("Аризачи маълумотлари сақланди!");
                                                }*/
                          ///else this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");

                        case 12:
                          /*                        _this.stepper = 2;
                                                  _this.completedSteps.push(_this.stepper - 1);
                                                  _this.$toast.success("Аризачи маълумотлари сақланди!");*/
                          _this6.loading.button = false;

                        case 13:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    setApplicationErrors: function setApplicationErrors(errors) {
      var _this = this;

      if (errors) {
        // console.log(errors);
        var errorfield = [];
        Object.keys(errors).forEach(function (keyItem) {
          if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
            errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
          }
        }); ///console.log(_this.$refs['stepValidation2'])

        _this.$refs['stepValidation1'].setErrors(errorfield);
      }
    },
    validateField: function validateField(field) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var provider;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                provider = _this7.$refs[field];
                if (Array.isArray(provider)) provider = provider[0]; // Validate the field

                if (!provider) {
                  _context7.next = 6;
                  break;
                }

                _context7.next = 5;
                return provider.validate();

              case 5:
                return _context7.abrupt("return", _context7.sent);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    initialize: function initialize() {
      this.setPersonData(null); //this.getPersonId();

      this.getBoshqarmalar();
    },
    setPersonData: function setPersonData(data) {
      this.person.pin = this.$auth.user().pin;
      this.person.tin = this.$auth.user().tin;
      this.person.fio = this.$auth.user().sur_name + ' ' + this.$auth.user().first_name + ' ' + this.$auth.user().mid_name;
      this.person.perAdr = this.$auth.user().per_adr;
      this.person.email = this.$auth.user().email;
      this.person.type = this.$auth.user().type;

      if (this.person.type === 2) {
        var legal_info = JSON.parse(this.$auth.user().legal_info); //console.log(legal_info[0].le_name)

        if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].le_name !== 'undefined') {
          this.person.organization_name = legal_info[0].le_name;
        } else this.person.organization_name = "";

        if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].tin !== 'undefined') {
          this.person.organization_inn = legal_info[0].tin;
        } else this.person.organization_inn = "";
      }

      var personId = null;

      var _this = this;

      if (data) {
        this.person.phone = typeof data['phone'] !== 'undefined' ? data['phone'] : null;
        this.person.region = typeof data['region'] !== 'undefined' ? data['region'] : null; //this.person.person_id = (typeof data['person_id'] !== 'undefined') ? data['person_id'] : null;
      }
    },
    validatePersonData: function validatePersonData() {
      var _arguments = arguments,
          _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        var silent, isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                silent = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
                isValid = false;
                _context8.next = 4;
                return _this8.$refs['create_customs_person_value'].validate({
                  silent: silent
                });

              case 4:
                return _context8.abrupt("return", _context8.sent);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    formatDateRange: function formatDateRange(dates) {
      if (dates.length > 1) {
        if (dates[1] < dates[0]) {
          var date = dates[1];
          dates[1] = dates[0];
          dates[0] = date;
        }
      }

      return dates.join(' -- ');
    },
    formatDate: function formatDate(date) {
      if (!date) return;

      var _date$split = date.split("-"),
          _date$split2 = _slicedToArray(_date$split, 3),
          day = _date$split2[0],
          month = _date$split2[1],
          year = _date$split2[2];

      return year + "-" + month + "-" + day;
    },
    resetVar: function resetVar(myVar) {
      var _this = this;

      if (myVar === null) return null;

      if (_typeof(myVar) === 'object') {
        Object.entries(myVar).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];

          if (_typeof(value) === 'object') {
            if (_this.resetVar(value)) {
              myVar[key] = _this.resetVar(value);
            }
          } else {
            if (Array.isArray(value)) {
              value.forEach(function (arrayKey, arrayValue) {
                if (arrayValue) {
                  if (_this.resetVar(arrayValue)) {
                    myVar[key][arrayKey] = _this.resetVar(arrayValue);
                  } else {
                    myVar[key][arrayKey] = null;
                  }
                } else return myVar[key];
              });
            } else myVar[key] = null;
          }
        });
        return myVar;
      }

      return null;
    },
    arxivToApi: function arxivToApi(files) {
      var returnFiles = [];

      if (files && files.length > 0) {
        files.forEach(function (item) {
          if (typeof item.id !== 'undefined' && item.id) returnFiles.push({
            docid: parseInt(item.id),
            itemsno: parseInt(item.doc_type),
            docno: item.file_num,
            docdate: item.file_data
          });
        });
      }

      return JSON.parse(JSON.stringify(returnFiles));
    },
    issetVar: function issetVar(myVarString) {
      var _this = this;

      var varToString = function varToString(varObj) {
        return Object.keys(varObj)[0];
      };

      var myVar = "_this";
      var returnVar = true;
      myVarString.split('.').forEach(function (mVar, key) {
        var OldVar = JSON.parse(JSON.stringify(myVar));

        if (mVar.indexOf('[') !== -1) {
          myVar = myVar + mVar;
        } else {
          myVar = myVar + '.' + mVar;
        } //console.log(eval(OldVar));


        if (returnVar && (typeof eval(myVar) === 'undefined' || eval(myVar) === null || eval(OldVar) === null)) {
          returnVar = false;
          return false;
        } // console.log(myVar)

      }); // console.log(returnVar)

      return returnVar;
    }
  },
  computed: {
    checkbox1: function checkbox1() {
      return false;
    }
  },
  watch: {
    /*'app.region': {
        handler(value) {
            //console.log(value)
            if (typeof value !== 'undefined' && value && value.length > 3) {
                const region = value; // .substr(2, 2);
                //setTimeout(async () => {
                this.getPosts(region)
                // })
            }
          },
        immediate: true,
        deep: true,
        sync: true
    },*/
  },
  mounted: function mounted() {
    this.initialize();
  },
  filters: {
    reverse: function reverse(array) {
      return array.slice().reverse();
    }
  },
  components: {
    EditableDate: _components_custom_EditableDate__WEBPACK_IMPORTED_MODULE_10__["default"],
    Textfield: _components_form_textfield__WEBPACK_IMPORTED_MODULE_6__["default"],
    DialogChips: _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_9__["default"],
    EArxivFile: _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_8__["default"],
    AutocompleteField: _components_form_autocomplete__WEBPACK_IMPORTED_MODULE_7__["default"],
    TextField: _components_form_textfield__WEBPACK_IMPORTED_MODULE_6__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationObserver,
    Myfield: _components_form_myfield__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.yoriqnoma-text {\r\n    right: 40px;\r\n    font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/custom/EditableDate.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/custom/EditableDate.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditableDate_vue_vue_type_template_id_cde96f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableDate.vue?vue&type=template&id=cde96f96& */ "./resources/js/components/custom/EditableDate.vue?vue&type=template&id=cde96f96&");
/* harmony import */ var _EditableDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDate.vue?vue&type=script&lang=js& */ "./resources/js/components/custom/EditableDate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditableDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditableDate_vue_vue_type_template_id_cde96f96___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditableDate_vue_vue_type_template_id_cde96f96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/custom/EditableDate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/bko/create.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/frontend/services/bko/create.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_2c7442b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=2c7442b8& */ "./resources/js/views/frontend/services/bko/create.vue?vue&type=template&id=2c7442b8&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/bko/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/frontend/services/bko/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_2c7442b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_2c7442b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/bko/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/custom/EditableDate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/custom/EditableDate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditableDate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/EditableDate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/bko/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/bko/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/bko/create.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/bko/create.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/custom/EditableDate.vue?vue&type=template&id=cde96f96&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/custom/EditableDate.vue?vue&type=template&id=cde96f96& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_template_id_cde96f96___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_template_id_cde96f96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_template_id_cde96f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditableDate.vue?vue&type=template&id=cde96f96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/EditableDate.vue?vue&type=template&id=cde96f96&");


/***/ }),

/***/ "./resources/js/views/frontend/services/bko/create.vue?vue&type=template&id=2c7442b8&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/bko/create.vue?vue&type=template&id=2c7442b8& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2c7442b8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2c7442b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2c7442b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=2c7442b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=template&id=2c7442b8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/EditableDate.vue?vue&type=template&id=cde96f96&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/custom/EditableDate.vue?vue&type=template&id=cde96f96& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    "v-text-field",
    _vm._b(
      {
        directives: [
          {
            name: "mymask",
            rawName: "v-mymask",
            value: "##-##-####",
            expression: "'##-##-####'",
          },
        ],
        attrs: { label: _vm.$props["label"] ? _vm.$props["label"] : "" },
        scopedSlots: _vm._u([
          {
            key: "append",
            fn: function () {
              return [
                _c(
                  "v-menu",
                  {
                    ref: "date_menu",
                    attrs: {
                      "close-on-content-click": false,
                      transition: "scale-transition",
                      "offset-y": "",
                      "min-width": "auto",
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "activator",
                        fn: function (ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "div",
                              [
                                _vm.$attrs["disabled"] === true
                                  ? _c(
                                      "v-icon",
                                      _vm._b(
                                        { attrs: { color: "default" } },
                                        "v-icon",
                                        attrs,
                                        false
                                      ),
                                      [
                                        _vm._v(
                                          "\n            mdi-calendar-range\n          "
                                        ),
                                      ]
                                    )
                                  : _c(
                                      "v-icon",
                                      _vm._g(
                                        _vm._b(
                                          { attrs: { color: "primary" } },
                                          "v-icon",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _vm._v(
                                          "\n            mdi-calendar-range\n          "
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
                    model: {
                      value: _vm.menu.date,
                      callback: function ($$v) {
                        _vm.$set(_vm.menu, "date", $$v)
                      },
                      expression: "menu.date",
                    },
                  },
                  [
                    _vm._v(" "),
                    _c("v-date-picker", {
                      attrs: {
                        locale: _vm.$i18n.locale === "en" ? "en-US" : "ru-RU",
                        "active-picker": _vm.activePicker.date,
                        max: new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substr(0, 10),
                        min: "01-01-1950",
                      },
                      on: {
                        "update:activePicker": function ($event) {
                          return _vm.$set(_vm.activePicker, "date", $event)
                        },
                        "update:active-picker": function ($event) {
                          return _vm.$set(_vm.activePicker, "date", $event)
                        },
                        change: function ($event) {
                          _vm.modelValue = JSON.parse(
                            JSON.stringify(_vm.formatDate(_vm.datepicker.date))
                          )
                        },
                      },
                      model: {
                        value: _vm.datepicker.date,
                        callback: function ($$v) {
                          _vm.$set(_vm.datepicker, "date", $$v)
                        },
                        expression: "datepicker.date",
                      },
                    }),
                  ],
                  1
                ),
              ]
            },
            proxy: true,
          },
        ]),
        model: {
          value: _vm.modelValue,
          callback: function ($$v) {
            _vm.modelValue = $$v
          },
          expression: "modelValue",
        },
      },
      "v-text-field",
      _vm.$attrs,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=template&id=2c7442b8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/bko/create.vue?vue&type=template&id=2c7442b8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "section customs-value-section" }, [
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
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c(
                    "h3",
                    {
                      staticClass: "lh-sm font-weight-bold primary-color my-5",
                      attrs: { align: "center" },
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.$t("Божхона кирим ордерини шакллантириш")
                          ) +
                          "\n                        "
                      ),
                      _c("br"),
                    ]
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-card",
              { staticClass: "mb-12 px-5 py-10" },
              [
                _c(
                  "div",
                  { staticClass: "row position-absolute yoriqnoma-text" },
                  [
                    _c(
                      "a",
                      { attrs: { href: "/storage/files/dastlabki-user.pptx" } },
                      [
                        _vm._v(
                          " " +
                            _vm._s(
                              _vm.$t(
                                "Ариза тўлдириш бўйича йўриқмани юклаб олинг!"
                              )
                            ) +
                            "\n                "
                        ),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("ValidationObserver", {
                  ref: "stepValidation1",
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var invalid = ref.invalid
                        return [
                          _c("v-row"),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { staticClass: "person_data mt-10 " },
                            [
                              _vm.person.type === 2
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: { name: _vm.$t("СТИР") },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: _vm.$t("СТИР"),
                                                      required: "",
                                                      disabled:
                                                        JSON.parse(
                                                          _vm.$auth.user()
                                                            .legal_info
                                                        )[0].tin.length > 0,
                                                      hint: _vm.$t(
                                                        "Корхона ёки ташкилот СТИРи"
                                                      ),
                                                      "persistent-hint": "",
                                                      name: "orgInn",
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.person
                                                          .organization_inn,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.person,
                                                          "organization_inn",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "person.organization_inn",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass: "red--text",
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: { name: _vm.$t("ЖШШИР") },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: _vm.$t("ЖШШИР"),
                                                      required: "",
                                                      disabled:
                                                        _vm.$auth.user().pin >
                                                        0,
                                                      hint: _vm.$t(
                                                        "Аризачи ЖШШРи"
                                                      ),
                                                      "persistent-hint": "",
                                                      name: "personInn",
                                                    },
                                                    model: {
                                                      value: _vm.person.pin,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.person,
                                                          "pin",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "person.pin",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass: "red--text",
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name:
                                        _vm.person.type === 2
                                          ? _vm.$t("Ташкилот номи")
                                          : _vm.$t("ФИШ"),
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("v-text-field", {
                                                attrs: {
                                                  counter: 200,
                                                  label:
                                                    _vm.person.type === 2
                                                      ? _vm.$t("Ташкилот номи")
                                                      : _vm.$t("ФИШ"),
                                                  required: "",
                                                  hint:
                                                    _vm.person.type === 2
                                                      ? _vm.$t(
                                                          "Юридик шахснинг тўлиқ номи"
                                                        )
                                                      : _vm.$t(
                                                          "Мурожаатчи фамилияси, исми, шарифи"
                                                        ),
                                                  "persistent-hint": "",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function () {
                                                        return [
                                                          _vm._v(
                                                            "\n                                        " +
                                                              _vm._s(
                                                                _vm.person
                                                                  .type === 2
                                                                  ? _vm.$t(
                                                                      "Ташкилот номи"
                                                                    )
                                                                  : _vm.$t(
                                                                      "ФИШ"
                                                                    )
                                                              )
                                                          ),
                                                          _c("sup", [
                                                            _vm._v("*"),
                                                          ]),
                                                        ]
                                                      },
                                                      proxy: true,
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                                model: {
                                                  value:
                                                    _vm.person.type === 2
                                                      ? _vm.person
                                                          .organization_name
                                                      : _vm.person.fio,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.person.type === 2
                                                        ? _vm.person
                                                            .organization_name
                                                        : _vm.person,
                                                      "fio",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "person.type===2?person.organization_name:person.fio",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: _vm.$t("Телефон рақами"),
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("v-text-field", {
                                                directives: [
                                                  {
                                                    name: "mask",
                                                    rawName: "v-mask",
                                                    value: "+998 ## ### ## ##",
                                                    expression:
                                                      "'+998 ## ### ## ##'",
                                                  },
                                                ],
                                                attrs: {
                                                  label:
                                                    _vm.$t("Телефон рақами"),
                                                  required: "",
                                                  hint: _vm.$t(
                                                    "Аризачининг телефон рақами"
                                                  ),
                                                  "persistent-hint": "",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function () {
                                                        return [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "Телефон рақами"
                                                              )
                                                            ) + " "
                                                          ),
                                                          _c("sup", [
                                                            _vm._v("*"),
                                                          ]),
                                                        ]
                                                      },
                                                      proxy: true,
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                                model: {
                                                  value: _vm.person.phone,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.person,
                                                      "phone",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "person.phone",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: _vm.$t("Электрон почта"),
                                      rules: "required|email",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("v-text-field", {
                                                attrs: {
                                                  counter: 200,
                                                  label:
                                                    "Электрон почта манзили",
                                                  required: "",
                                                  hint: _vm.$t(
                                                    "Аризачининг электрон почтаси"
                                                  ),
                                                  "persistent-hint": "",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function () {
                                                        return [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "Электрон почта манзили"
                                                              )
                                                            ) + " "
                                                          ),
                                                          _c("sup", [
                                                            _vm._v("*"),
                                                          ]),
                                                        ]
                                                      },
                                                      proxy: true,
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                                model: {
                                                  value: _vm.person.email,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.person,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "person.email",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("text-field", {
                                    attrs: {
                                      title: _vm.$t("Манзили"),
                                      rules: "required",
                                      hint: _vm.$t("Аризачининг яшаш манзили"),
                                      "persistent-hint": "",
                                    },
                                    model: {
                                      value: _vm.person.perAdr,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.person, "perAdr", $$v)
                                      },
                                      expression: "person.perAdr",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: _vm.$t("Ҳудуд"),
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("v-autocomplete", {
                                                attrs: {
                                                  required: "",
                                                  items: _vm.regions,
                                                  "persistent-hint": "",
                                                },
                                                on: { change: _vm.getPosts },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function () {
                                                        return [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "Ҳудудий божхона бошқармасини танланг"
                                                              )
                                                            ) +
                                                              "\n                                        "
                                                          ),
                                                          _c("sup", [
                                                            _vm._v("*"),
                                                          ]),
                                                        ]
                                                      },
                                                      proxy: true,
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                                model: {
                                                  value: _vm.app.region,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.app,
                                                      "region",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "app.region",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: _vm.$t("Таркибий тузилма тури"),
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("v-autocomplete", {
                                                attrs: {
                                                  required: "",
                                                  hint: _vm.$t(
                                                    "БКО юборилиши мўлжалланган таркибий тузилма тури"
                                                  ),
                                                  items: [
                                                    {
                                                      value: 13,
                                                      text: _vm.$t(
                                                        "Божхона пости"
                                                      ),
                                                    },
                                                    {
                                                      value: 12,
                                                      text: _vm.$t(
                                                        "Тўловлар бўлими"
                                                      ),
                                                    },
                                                  ],
                                                  "persistent-hint": "",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function () {
                                                        return [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "Таркибий тузилма турини танланг"
                                                              )
                                                            ) + " "
                                                          ),
                                                          _c("sup", [
                                                            _vm._v("*"),
                                                          ]),
                                                        ]
                                                      },
                                                      proxy: true,
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                                model: {
                                                  value: _vm.app.postType,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.app,
                                                      "postType",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "app.postType",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.app.postType === 13
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "4" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          name: _vm.$t("Таркибий тузилма"),
                                          rules: "required",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("v-autocomplete", {
                                                    attrs: {
                                                      loading: _vm.postloading,
                                                      required: "",
                                                      disabled: _vm.postloading,
                                                      hint: _vm.$t(
                                                        "БКО юборилиши мўлжалланган таркибий тузилма"
                                                      ),
                                                      items: _vm.posts,
                                                      "persistent-hint": "",
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "label",
                                                          fn: function () {
                                                            return [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Таркибий тузилмани танланг"
                                                                  )
                                                                ) + " "
                                                              ),
                                                              _c("sup", [
                                                                _vm._v("*"),
                                                              ]),
                                                            ]
                                                          },
                                                          proxy: true,
                                                        },
                                                      ],
                                                      null,
                                                      true
                                                    ),
                                                    model: {
                                                      value: _vm.app.post,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.app,
                                                          "post",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "app.post",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass: "red--text",
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  ),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: _vm.$t("Йиғим тури"),
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("v-autocomplete", {
                                                attrs: {
                                                  required: "",
                                                  items: _vm.yigimlar,
                                                  "persistent-hint": "",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function () {
                                                        return [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "Йиғим турини танланг"
                                                              )
                                                            ) + " "
                                                          ),
                                                          _c("sup", [
                                                            _vm._v("*"),
                                                          ]),
                                                        ]
                                                      },
                                                      proxy: true,
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                                model: {
                                                  value: _vm.app.yigim_turi,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.app,
                                                      "yigim_turi",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "app.yigim_turi",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [_vm._v(_vm._s(errors[0]))]
                                              ),
                                            ]
                                          },
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("text-field", {
                                    directives: [
                                      {
                                        name: "mask",
                                        rawName: "v-mask",
                                        value: "###########################",
                                        expression:
                                          "'###########################'",
                                      },
                                    ],
                                    attrs: {
                                      title: _vm.$t(
                                        "Молия ва банк маълумотлари"
                                      ),
                                      rules: "required",
                                      type: "number",
                                      size: "27",
                                      counter: "",
                                      hint: _vm.$t(
                                        "Тўловчининг ҳисоб-варақ рақами"
                                      ),
                                      "persistent-hint": "",
                                    },
                                    model: {
                                      value: _vm.app.moliya_bank,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.app, "moliya_bank", $$v)
                                      },
                                      expression: "app.moliya_bank",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { staticClass: "mb-10" },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          _c("text-field", {
                                            directives: [
                                              {
                                                name: "mask",
                                                rawName: "v-mask",
                                                value: "#####",
                                                expression: "'#####'",
                                              },
                                            ],
                                            attrs: {
                                              title: _vm.$t("МФО"),
                                              rules: "required",
                                              type: "number",
                                              count: "5",
                                              hint: _vm.$t(
                                                "Тўловни қабул қилиб олган банкнинг МФО рақами"
                                              ),
                                              "persistent-hint": "",
                                            },
                                            model: {
                                              value: _vm.app.mfo,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.app, "mfo", $$v)
                                              },
                                              expression: "app.mfo",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          _c("text-field", {
                                            attrs: {
                                              title: _vm.$t("Банк номи"),
                                              rules: "required",
                                              hint: _vm.$t(
                                                "Тўловни қабул қилиб олган банкнинг номи"
                                              ),
                                              "persistent-hint": "",
                                            },
                                            model: {
                                              value: _vm.app.bank,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.app, "bank", $$v)
                                              },
                                              expression: "app.bank",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "mt-10",
                                          attrs: { cols: "12" },
                                        },
                                        [
                                          _c("e-arxiv-file", {
                                            attrs: {
                                              title:
                                                "Тақдим этиладиган ҳужжатлар/қўшимча маълумотлар",
                                              multiple: "",
                                              norequired: "",
                                              errors: _vm.arxiv_errors,
                                            },
                                            model: {
                                              value: _vm.app.files,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.app, "files", $$v)
                                              },
                                              expression: "app.files",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c(
                                    "v-card",
                                    [
                                      _c(
                                        "v-card-title",
                                        { staticClass: "darken-4" },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(
                                                _vm.$t(
                                                  "Божхона тўловларининг ҳисоби"
                                                )
                                              ) +
                                              "\n\n                                    "
                                          ),
                                          _c("v-spacer"),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "text--primary mt-2",
                                              attrs: { rounded: "", text: "" },
                                              on: {
                                                click: function ($event) {
                                                  _vm.dialogTolov = true
                                                },
                                              },
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { color: "primary" } },
                                                [_vm._v("mdi-plus")]
                                              ),
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(_vm.$t("Қўшиш")) +
                                                  "\n                                    "
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm.tolov_error.length > 0
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "red--text w-100 px-10 py-1 position-relative d-block",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        " +
                                                      _vm._s(_vm.tolov_error) +
                                                      "\n                                    "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "v-dialog",
                                            {
                                              attrs: {
                                                persistent: "",
                                                "max-width": "800px",
                                              },
                                              model: {
                                                value: _vm.dialogTolov,
                                                callback: function ($$v) {
                                                  _vm.dialogTolov = $$v
                                                },
                                                expression: "dialogTolov",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-card",
                                                [
                                                  _c("v-card-title", [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "text-h5",
                                                      },
                                                      [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              _vm.$t(
                                                                "Божхона тўловларининг ҳисоби"
                                                              )
                                                            )
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-text",
                                                    [
                                                      _c(
                                                        "v-container",
                                                        [
                                                          _c(
                                                            "ValidationObserver",
                                                            {
                                                              ref: "tolovValidationServer",
                                                              attrs: {
                                                                disabled: "",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "v-row",
                                                                [
                                                                  _c(
                                                                    "v-col",
                                                                    {
                                                                      attrs: {
                                                                        cols: "4",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "validation-provider",
                                                                        {
                                                                          staticClass:
                                                                            "w-100",
                                                                          attrs:
                                                                            {
                                                                              tag: "div",
                                                                              name: _vm.$t(
                                                                                "Тўлов тури"
                                                                              ),
                                                                              rules:
                                                                                "required",
                                                                            },
                                                                          scopedSlots:
                                                                            _vm._u(
                                                                              [
                                                                                {
                                                                                  key: "default",
                                                                                  fn: function (
                                                                                    ref
                                                                                  ) {
                                                                                    var errors =
                                                                                      ref.errors
                                                                                    return [
                                                                                      _c(
                                                                                        "v-autocomplete",
                                                                                        {
                                                                                          attrs:
                                                                                            {
                                                                                              label:
                                                                                                _vm.$t(
                                                                                                  "Тўлов тури"
                                                                                                ),
                                                                                              "persistent-placeholder":
                                                                                                "",
                                                                                              items:
                                                                                                _vm.tolovType,
                                                                                            },
                                                                                          model:
                                                                                            {
                                                                                              value:
                                                                                                _vm
                                                                                                  .tolov
                                                                                                  .type,
                                                                                              callback:
                                                                                                function (
                                                                                                  $$v
                                                                                                ) {
                                                                                                  _vm.$set(
                                                                                                    _vm.tolov,
                                                                                                    "type",
                                                                                                    $$v
                                                                                                  )
                                                                                                },
                                                                                              expression:
                                                                                                "tolov.type",
                                                                                            },
                                                                                        }
                                                                                      ),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "red--text",
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            _vm._s(
                                                                                              errors[0]
                                                                                            )
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
                                                                        }
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-col",
                                                                    {
                                                                      attrs: {
                                                                        cols: "4",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "validation-provider",
                                                                        {
                                                                          staticClass:
                                                                            "w-100",
                                                                          attrs:
                                                                            {
                                                                              tag: "div",
                                                                              name: _vm.$t(
                                                                                "Ҳисоблаш асоси"
                                                                              ),
                                                                              rules:
                                                                                "required",
                                                                            },
                                                                          scopedSlots:
                                                                            _vm._u(
                                                                              [
                                                                                {
                                                                                  key: "default",
                                                                                  fn: function (
                                                                                    ref
                                                                                  ) {
                                                                                    var errors =
                                                                                      ref.errors
                                                                                    return [
                                                                                      _c(
                                                                                        "v-text-field",
                                                                                        {
                                                                                          attrs:
                                                                                            {
                                                                                              label:
                                                                                                _vm.$t(
                                                                                                  "Ҳисоблаш асоси"
                                                                                                ),
                                                                                              "persistent-placeholder":
                                                                                                "",
                                                                                            },
                                                                                          model:
                                                                                            {
                                                                                              value:
                                                                                                _vm
                                                                                                  .tolov
                                                                                                  .asos,
                                                                                              callback:
                                                                                                function (
                                                                                                  $$v
                                                                                                ) {
                                                                                                  _vm.$set(
                                                                                                    _vm.tolov,
                                                                                                    "asos",
                                                                                                    $$v
                                                                                                  )
                                                                                                },
                                                                                              expression:
                                                                                                "tolov.asos",
                                                                                            },
                                                                                        }
                                                                                      ),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "red--text",
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            _vm._s(
                                                                                              errors[0]
                                                                                            )
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
                                                                        }
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-col",
                                                                    {
                                                                      attrs: {
                                                                        cols: "4",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "validation-provider",
                                                                        {
                                                                          staticClass:
                                                                            "w-100",
                                                                          attrs:
                                                                            {
                                                                              tag: "div",
                                                                              name: _vm.$t(
                                                                                "Ставка"
                                                                              ),
                                                                              rules:
                                                                                "required",
                                                                            },
                                                                          scopedSlots:
                                                                            _vm._u(
                                                                              [
                                                                                {
                                                                                  key: "default",
                                                                                  fn: function (
                                                                                    ref
                                                                                  ) {
                                                                                    var errors =
                                                                                      ref.errors
                                                                                    return [
                                                                                      _c(
                                                                                        "v-text-field",
                                                                                        {
                                                                                          attrs:
                                                                                            {
                                                                                              label:
                                                                                                _vm.$t(
                                                                                                  "Ставка"
                                                                                                ),
                                                                                              "persistent-placeholder":
                                                                                                "",
                                                                                              type: "number",
                                                                                            },
                                                                                          model:
                                                                                            {
                                                                                              value:
                                                                                                _vm
                                                                                                  .tolov
                                                                                                  .stavka,
                                                                                              callback:
                                                                                                function (
                                                                                                  $$v
                                                                                                ) {
                                                                                                  _vm.$set(
                                                                                                    _vm.tolov,
                                                                                                    "stavka",
                                                                                                    $$v
                                                                                                  )
                                                                                                },
                                                                                              expression:
                                                                                                "tolov.stavka",
                                                                                            },
                                                                                        }
                                                                                      ),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "red--text",
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            _vm._s(
                                                                                              errors[0]
                                                                                            )
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
                                                                        }
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-col",
                                                                    {
                                                                      attrs: {
                                                                        cols: "4",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "validation-provider",
                                                                        {
                                                                          staticClass:
                                                                            "w-100",
                                                                          attrs:
                                                                            {
                                                                              tag: "div",
                                                                              name: _vm.$t(
                                                                                "Сумма"
                                                                              ),
                                                                              rules:
                                                                                "required",
                                                                            },
                                                                          scopedSlots:
                                                                            _vm._u(
                                                                              [
                                                                                {
                                                                                  key: "default",
                                                                                  fn: function (
                                                                                    ref
                                                                                  ) {
                                                                                    var errors =
                                                                                      ref.errors
                                                                                    return [
                                                                                      _c(
                                                                                        "v-text-field",
                                                                                        {
                                                                                          attrs:
                                                                                            {
                                                                                              label:
                                                                                                _vm.$t(
                                                                                                  "Сумма"
                                                                                                ),
                                                                                              "persistent-placeholder":
                                                                                                "",
                                                                                              type: "number",
                                                                                            },
                                                                                          model:
                                                                                            {
                                                                                              value:
                                                                                                _vm
                                                                                                  .tolov
                                                                                                  .summa,
                                                                                              callback:
                                                                                                function (
                                                                                                  $$v
                                                                                                ) {
                                                                                                  _vm.$set(
                                                                                                    _vm.tolov,
                                                                                                    "summa",
                                                                                                    $$v
                                                                                                  )
                                                                                                },
                                                                                              expression:
                                                                                                "tolov.summa",
                                                                                            },
                                                                                        }
                                                                                      ),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "red--text",
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            _vm._s(
                                                                                              errors[0]
                                                                                            )
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
                                                                        }
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-col",
                                                                    {
                                                                      attrs: {
                                                                        cols: "4",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "validation-provider",
                                                                        {
                                                                          staticClass:
                                                                            "w-100",
                                                                          attrs:
                                                                            {
                                                                              tag: "div",
                                                                              name: _vm.$t(
                                                                                "Тўлов усули"
                                                                              ),
                                                                              rules:
                                                                                "required",
                                                                            },
                                                                          scopedSlots:
                                                                            _vm._u(
                                                                              [
                                                                                {
                                                                                  key: "default",
                                                                                  fn: function (
                                                                                    ref
                                                                                  ) {
                                                                                    var errors =
                                                                                      ref.errors
                                                                                    return [
                                                                                      _c(
                                                                                        "v-autocomplete",
                                                                                        {
                                                                                          attrs:
                                                                                            {
                                                                                              label:
                                                                                                _vm.$t(
                                                                                                  "Тўлов усули"
                                                                                                ),
                                                                                              "persistent-placeholder":
                                                                                                "",
                                                                                              items:
                                                                                                _vm.tolovMethod,
                                                                                            },
                                                                                          model:
                                                                                            {
                                                                                              value:
                                                                                                _vm
                                                                                                  .tolov
                                                                                                  .method,
                                                                                              callback:
                                                                                                function (
                                                                                                  $$v
                                                                                                ) {
                                                                                                  _vm.$set(
                                                                                                    _vm.tolov,
                                                                                                    "method",
                                                                                                    $$v
                                                                                                  )
                                                                                                },
                                                                                              expression:
                                                                                                "tolov.method",
                                                                                            },
                                                                                        }
                                                                                      ),
                                                                                      _vm._v(
                                                                                        " "
                                                                                      ),
                                                                                      _c(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "red--text",
                                                                                        },
                                                                                        [
                                                                                          _vm._v(
                                                                                            _vm._s(
                                                                                              errors[0]
                                                                                            )
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
                                                                        }
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
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-actions",
                                                    [
                                                      _c("v-spacer"),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            color:
                                                              "blue darken-1",
                                                            text: "",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              _vm.dialogTolov = false
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "Бекор қилиш"
                                                                )
                                                              ) +
                                                              "\n                                                "
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            color:
                                                              "blue darken-1",
                                                            text: "",
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.addItemTolov,
                                                          },
                                                        },
                                                        [
                                                          _c("v-icon", [
                                                            _vm._v("mdi-plus"),
                                                          ]),
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                _vm.$t("Қўшиш")
                                                              ) +
                                                              "\n                                                "
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
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-divider"),
                                      _vm._v(" "),
                                      _c("v-data-table", {
                                        staticClass: "elevation-1",
                                        attrs: {
                                          headers: _vm.headersTolov,
                                          items: _vm.tolovlar,
                                          "items-per-page": 5,
                                          "no-data-text":
                                            _vm.$t("Маълумот топилмади"),
                                          "footer-props": {
                                            "items-per-page-text": _vm.$t(
                                              "Сахифадаги элементлар сони"
                                            ),
                                            "items-per-page-all-text":
                                              _vm.$t("Барчаси"),
                                          },
                                          "loading-text": _vm.$t(
                                            "Юкланмоқда... Илтимос кутиб туринг"
                                          ),
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "item.actions",
                                              fn: function (ref) {
                                                var item = ref.item
                                                return undefined
                                              },
                                            },
                                          ],
                                          null,
                                          true
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "row mb-3 position-absolute bottom-0 end-0" },
                  [
                    _c(
                      "v-col",
                      { staticClass: "d-flex tab_action_buttons" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticStyle: { width: "max-content" },
                            attrs: {
                              color: "primary",
                              size: "large",
                              loading: _vm.loading.button,
                            },
                            on: { click: _vm.nextStep },
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.$t("Ариза юбориш")) +
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
                _vm._v(" "),
                _c("v-row", { staticClass: "bottom-required-info" }, [
                  _c("i", { staticStyle: { "font-size": "12px" } }, [
                    _c("sub", { staticStyle: { "font-size": "20px" } }, [
                      _vm._v("*"),
                    ]),
                    _vm._v(
                      " - " +
                        _vm._s(_vm.$t("майдонлари албатта тўлдирилиши шарт")) +
                        "!\n                    "
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
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "all_news service",
        attrs: { target: "_blank", href: "https://t.me/dastlabkiqaror" },
      },
      [
        _c("img", { attrs: { src: "/public/images/telegram.png" } }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            " " + _vm._s(_vm.$t("Саволларингизни йўлланг")) + "\n            "
          ),
          _c("br"),
          _vm._v("\n            @dastlabkiqaror\n        "),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-the-mask/dist/vue-the-mask.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-the-mask/dist/vue-the-mask.js ***!
  \********************************************************/
/***/ (function(module) {

(function(e,t){ true?module.exports=t():0})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,n){"use strict";function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var a=n(2),o=n(0),i=n.n(o);t.a=function(e,t){var o=t.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);e=u[0]}e.oninput=function(t){if(t.isTrusted){var i=e.selectionEnd,u=e.value[i-1];for(e.value=n.i(a.a)(e.value,o.mask,!0,o.tokens);i<e.value.length&&e.value.charAt(i-1)!==u;)i++;e===document.activeElement&&(e.setSelectionRange(i,i),setTimeout(function(){e.setSelectionRange(i,i)},0)),e.dispatchEvent(r("input"))}};var s=n.i(a.a)(e.value,o.mask,!0,o.tokens);s!==e.value&&(e.value=s,e.dispatchEvent(r("input")))}},function(e,t,n){"use strict";var r=n(6),a=n(5);t.a=function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(t)?n.i(a.a)(r.a,t,i)(e,t,o,i):n.i(r.a)(e,t,o,i)}},function(e,t,n){"use strict";function r(e){e.component(s.a.name,s.a),e.directive("mask",i.a)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(t,"TheMask",function(){return s.a}),n.d(t,"mask",function(){return i.a}),n.d(t,"tokens",function(){return o.a}),n.d(t,"version",function(){return c});var c="0.11.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;var e=n.i(i.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,n){"use strict";function r(e,t,n){return t=t.sort(function(e,t){return e.length-t.length}),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<t.length;){var u=t[i];i++;var s=t[i];if(!(s&&e(r,s,!0,n).length>u.length))return e(r,u,o,n)}return""}}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];e=e||"",t=t||"";for(var a=0,o=0,i="";a<t.length&&o<e.length;){var u=t[a],s=r[u],c=e[o];s&&!s.escape?(s.pattern.test(c)&&(i+=s.transform?s.transform(c):c,a++),o++):(s&&s.escape&&(a++,u=t[a]),n&&(i+=u),c===u&&o++,a++)}for(var f="";a<t.length&&n;){var u=t[a];if(r[u]){f="";break}f+=u,a++}return i+f}t.a=r},function(e,t,n){var r=n(8)(n(4),n(9),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var a,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:a,exports:o,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});

/***/ })

}]);