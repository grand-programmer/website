(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_stat_info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/EditableDate.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/EditableDate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        if (this.isValidDate(value)) {
          this.$emit('input', value);
          this.datepicker.date = value.length === 10 ? this.formatDate(value, true) : this.datepicker.date;
        }
      }
    },
    minValue: function minValue() {
      return this.$attrs.min ? this.getFormattedDate(this.$attrs.min) : '01-01-1950';
    },
    maxValue: function maxValue() {
      return this.$attrs.max ? this.getFormattedDate(this.$attrs.max) : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
    }
  },
  watch: {
    handle: function handle(val, oldVal) {// console.log(val)
    },
    deep: true
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
    getFormattedDate: function getFormattedDate(cDay) {
      // Get current date
      var currentDate = new Date();
      if (cDay === -1) return undefined; // Add 5 days

      currentDate.setDate(currentDate.getDate() + cDay); // Format the date as "d-m-Y"

      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1; // Months are zero-based

      var year = currentDate.getFullYear(); // Pad day and month with leading zeros if needed

      if (day < 10) {
        day = '0' + day;
      }

      if (month < 10) {
        month = '0' + month;
      } // Format the date string as "d-m-Y"


      return year + '-' + month + '-' + day;
    },
    isValidDate: function isValidDate(dateStr) {
      var s = dateStr.split('-');
      var d = new Date(s[2], s[1] - 1, s[0]);

      if (Object.prototype.toString.call(d) === '[object Date]') {
        if (!isNaN(d.getTime()) && d.getDate() === parseInt(s[0]) && d.getMonth() === s[1] - 1) {
          return true;
        }
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _locales_oz_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../locales/oz.json */ "./resources/js/locales/oz.json");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
/* harmony import */ var _components_form_EditableDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/form/EditableDate */ "./resources/js/components/form/EditableDate.vue");
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/services/apiService */ "./resources/js/src/services/apiService.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_5__).forEach(function (rule) {
  (0,vee_validate__WEBPACK_IMPORTED_MODULE_6__.extend)(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_5__[rule]), {}, {
    // copies rule configuration
    message: _locales_oz_json__WEBPACK_IMPORTED_MODULE_1__.messages[rule] // assign message

  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InitialStat",
  data: function data() {
    return {
      stepper: 1,
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: 'Хизматлар',
        to: '/services',
        disabled: false,
        exact: true
      }, {
        text: 'Расмийлаштирилган божхона юк декларациялари тўғрисидаги маълумотларни олиш',
        to: '/services/stat',
        disabled: false,
        exact: true
      }, {
        text: 'Ариза юбориш',
        to: '/services/stat/create',
        disabled: true,
        exact: true
      }],
      application: {
        id: null,
        serviceType: null,
        rejim: null,
        region: null,
        post: null,
        org: null,
        tftn: null,
        shartnoma: null,
        country: null,
        byud: null,
        sanadan: null,
        sanagacha: null,
        grafalar: []
      },
      list: {
        countries: [],
        posts: [],
        regions: [],
        regimes: [{
          title: 'ЭК 10',
          value: 'ЭК10'
        }, {
          title: 'ЭК 11',
          value: 'ЭК11'
        }, {
          title: 'ЭК 12',
          value: 'ЭК12'
        }, {
          title: 'ИМ 40',
          value: 'ИМ40'
        }, {
          title: 'ИМ 41',
          value: 'ИМ41'
        }, {
          title: 'ИМ 42',
          value: 'ИМ42'
        }, {
          title: 'ИМ 51',
          value: 'ИМ51'
        }, {
          title: 'ЭК 61',
          value: 'ЭК61'
        }, {
          title: 'ИМ 70',
          value: 'ИМ70'
        }, {
          title: 'ИМ 71',
          value: 'ИМ71'
        }, {
          title: 'ЭК 71',
          value: 'ЭК71'
        }, {
          title: 'ИМ 72',
          value: 'ИМ72'
        }, {
          title: 'ЭК 73',
          value: 'ЭК73'
        }, {
          title: 'ИМ 74',
          value: 'ИМ74'
        }, {
          title: 'ИМ 75',
          value: 'ИМ75'
        }, {
          title: 'ИМ 76',
          value: 'ИМ76'
        }, {
          title: 'ТР 80',
          value: 'ТР80'
        }, {
          title: 'ПЕ 40',
          value: 'ПЕ40'
        }, {
          title: 'ПР 40',
          value: 'ПР40'
        }, {
          title: 'ЭК 72',
          value: 'ЭК72'
        }, {
          title: 'ВД 40',
          value: 'ВД40'
        }, {
          title: 'ИМ 73',
          value: 'ИМ73'
        }, {
          title: 'ЭК 74',
          value: 'ЭК74'
        }, {
          title: 'ПЕ 72',
          value: 'ПЕ72'
        }, {
          title: 'ВД 10',
          value: 'ВД10'
        }, {
          title: 'НД 40',
          value: 'НД40'
        }],
        netOrgs: [200242936, 200460222, 200523356, 200541438, 200541754, 200542744, 200547444, 200547792, 200548371, 200548507, 200555349, 200626188, 200626805, 200628564, 200628589, 200637561, 200637696, 200638710, 200794677, 200794867, 200825794, 200827404, 200829053, 200833707, 200836354, 200837914, 200848172, 200849203, 200896691, 200897144, 200898285, 200933985, 200934644, 200934675, 200935112, 200935548, 200935974, 200936110, 200936214, 200936561, 200936593, 200981397, 200984194, 200986825, 201042345, 201051421, 201051699, 201051951, 201053774, 201053901, 201053918, 201055090, 201055108, 201059022, 201059473, 201099116, 201122696, 201122744, 201122775, 201122808, 201122919, 201122941, 201123125, 201124242, 201124281, 201155766, 201162995, 201178469, 201190645, 201204514, 201221770, 201221898, 201222058, 201272843, 201283204, 201389395, 201589828, 201590962, 201675942, 201685882, 201794794, 201794810, 201862006, 201960034, 201981049, 202076247, 202167236, 202184026, 202288236, 202328794, 202328944, 202858483, 202880854, 202883501, 202990646, 203071206, 203556638, 203621367, 203644820, 203709707, 203940968, 204815109, 205471782, 206276564, 206916313, 206942764, 207018693, 207086151, 207127843, 207168405, 207215726, 207243390, 207246047, 207250605, 207254433, 207254654, 207255503, 207257279, 207258024, 207262226, 207269209, 207270540, 207271524, 207273386, 207274052, 207275011, 207277776, 207290120, 207291167, 207291293, 207293307, 207297973, 207318613, 207323290, 207324986, 207327024, 207327665, 302762364, 303489171, 304413384, 304457511, 304457693, 304952767, 305105101, 305166715, 305188309, 305410292, 305601481, 305636074, 306045611, 306135831, 306142966, 306303488, 306347741, 306349304, 306350099, 306605769, 306628114, 306646884, 306649190, 306705224, 308425864, 308450922, 309016201, 309319117, 309339432]
      },
      loading: {
        country: false,
        post: false,
        org: false
      },
      serviceTypes: [{
        id: 0,
        title: 'Божхона юк декларацияларини юклаб олиш'
      }, {
        id: 1,
        title: 'Ташқи иқтисодий фаолият иштирокчиларининг ўзи томонидан расмийлаштирилган товарлар тўғрисида маълумот (жадвал кўринишида)'
      }, {
        id: 2,
        title: 'Республикага импорт қилинган ҳамда ундан экспорт қилинган товарлар тўғрисида маълумот (жадвал кўринишида)'
      }, {
        id: 3,
        title: 'Иқтисодиёт тармоқлари таркибидаги ташкилотлар импорти ва экспорти тўғрисида маълумот (жадвал кўринишида)'
      }],
      additionFields: [this.$t('101 - Лицензия'), this.$t('202 - CMR'), this.$t('203 - Коносамент'), this.$t('204 - ТИР-карнет'), this.$t('205 - Авиа-юк хати'), this.$t('206 - Почта юк хати'), this.$t('207 - СМГС шаклидаги темир йўл юк хати'), this.$t('220 - Инвойси (ҳисоб, ҳисоб-фактура)'), this.$t('222 - Ўров варағи'), this.$t('406 - Санитария-эпидемиология хулосаси'), this.$t('410 - Карантин рухсатномаси'), this.$t('417 - Мувофиқлик сертификати'), this.$t('418 - Ўзстандарт агентлигининг хати'), this.$t('419 - Фитосанитария сертификати'), this.$t('420 - Экология сертификати'), this.$t('701 - Товарларнинг келиб чиқиш сертификати (импортда)'), this.$t('804 - Экспорт БЮДси')],
      additionalFields2: [this.$t('11-графа - Савдо қилинаётган мамлакат'), this.$t('13-графа - АҚШ доллари курси'), this.$t('14-графа - Декларант/божхона брокери'), this.$t('18-графа - Жўнатиш/етказиб бериш вақтидаги транспорт воситаси'), this.$t('20-графа - Етказиб бериш шартлари'), this.$t('21-графа - Чегарадаги транспорт воситаси'), this.$t('23-графа - Валюта курси'), this.$t('24-графа - Битим хусусияти'), this.$t('28-графа - Молия ва банк маълумотлари'), this.$t('29-графа - Чегарадаги божхона'), this.$t('34-графа - Келиб чиқиш мамлакати коди'), this.$t('35-графа - Брутто вазн (кг)'), this.$t('37-графа – Процедура'), this.$t('40-графа - Умумий декларация/аввалги ҳужжат'), this.$t('43-графа – Товар олиб ўтиш мақсади (ўз эҳтиёжи/тижорат)'), this.$t('44-графа – Тақдим этилаётган ҳужжатлар (620, 627, 629 - бандлар)'), this.$t('47-графа - Божхона тўловларининг ҳисоби'), this.$t('50-графа - Ишонч билдирган шахс'), this.$t('54-графа - Жой ва сана')],
      results: [{
        label: 'БЮД сони',
        value: '',
        type: 1
      }, {
        label: 'Илова хужжатлар тури',
        value: '',
        type: 1
      }, {
        label: 'Қатор (товар) сони',
        value: '',
        type: 2
      }, {
        label: 'Қўшимча белгиланган графалар',
        value: '',
        type: 2
      }, {
        label: 'Хизмат нархи',
        value: '',
        type: 3
      }],
      person: {
        type: 1,
        /// 1- fiz 0- yur
        fio: "",
        post: null,
        pin: null,
        tin: null,
        organization_name: "Жисмоний шахс",
        position: "0",
        phone: null,
        email: null,
        region: null
      },
      app: {
        apps: [],
        docs: [],
        commodities: [],
        id: null
      },
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      modal: false,
      completedSteps: [],
      loadingButton: {
        first: false,
        second: false,
        third: false,
        four: false
      },
      postloading: false,
      noRequiredTab: false,
      agreed: false,
      dialog: false,
      fields: [{
        key: 'tradeName',
        value: 'Товарнинг тижорат номи'
      }, {
        key: 'tradeMark',
        value: 'Товар маркаси'
      }, {
        key: 'model',
        value: 'Товар модели',
        tab: 1
      }, {
        key: 'basicQty',
        value: 'Намуналар сони',
        tab: 1
      }, {
        key: 'extraUnits',
        value: 'Ўлчов бирлиги'
      }, {
        key: 'comment',
        value: 'Қўшимча маълумотлар ва изоҳлар'
      }, {
        key: 'email',
        value: 'Электрон почта'
      }],
      "float": ['^[-+][0-9]+\\.[0-9]+[eE][-+]?[0-9]+$']
    };
  },
  methods: {
    agree: function agree() {
      var _this2 = this;

      axios.post('/api/v1/statservice/agree', {
        agree: true
      }).then(function (res) {
        _this2.getStatServices();
      });
    },
    getByud: function getByud() {
      axios.get('/api/v1/statservice/export', {
        responseType: 'blob'
      }).then(function (res) {
        console.log(res);
        var FILE = window.URL.createObjectURL(new Blob([res.data]));
        var docUrl = document.createElement('a');
        docUrl.href = FILE;
        docUrl.setAttribute('download', 'example.xlsx');
        document.body.appendChild(docUrl);
        docUrl.click();
      });
    },
    findElementInlist: function findElementInlist() {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var search = arguments.length > 1 ? arguments[1] : undefined;
      var searchKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'single';
      if (_typeof(list) !== 'object') return null;
      var element = list.filter(function (valueItem, keyItem) {
        if (search === valueItem[searchKey]) return valueItem;
      });

      if (type === 'single') {
        if (element && typeof element[0] !== 'undefined') return element[0];
      } else return element;
    },
    getStatServices: function getStatServices() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this3;

                _this3.$store.commit('setLoading', true);

                _context2.next = 4;
                return axios.get('/api/v1/statservice', {
                  params: {
                    id: _this.$route.params.id
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(res) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(res.status === 200)) {
                              _context.next = 52;
                              break;
                            }

                            if (!(typeof res.data.data.id !== 'undefined')) {
                              _context.next = 52;
                              break;
                            }

                            _this.application.id = res.data.data.id;
                            _this.stepper = res.data.data.step;
                            _this.application.status = res.data.data.status;
                            _context.t0 = res.data.data.step;
                            _context.next = _context.t0 === 1 ? 8 : _context.t0 === 2 ? 11 : _context.t0 === 3 ? 16 : _context.t0 === 4 ? 23 : _context.t0 === 5 ? 37 : 52;
                            break;

                          case 8:
                            _this.setPersonData(res.data.data);

                            _this.completedSteps.push(1);

                            return _context.abrupt("break", 52);

                          case 11:
                            _this.setPersonData(res.data.data);

                            _this.application.serviceType = parseInt(res.data.data.servicetype);

                            _this.completedSteps.push(1);

                            _this.completedSteps.push(2);

                            return _context.abrupt("break", 52);

                          case 16:
                            _this.setPersonData(res.data.data);

                            _this.application.serviceType = parseInt(res.data.data.servicetype);

                            _this.setThirdStep(res.data.data);

                            _this.completedSteps.push(1);

                            _this.completedSteps.push(2);

                            _this.completedSteps.push(3);

                            return _context.abrupt("break", 52);

                          case 23:
                            _this.setPersonData(res.data.data);

                            _this.application.serviceType = parseInt(res.data.data.servicetype);

                            _this.setThirdStep(res.data.data);

                            _this.application.grafalar = res.data.data.grafalar;

                            _this.completedSteps.push(1);

                            _this.completedSteps.push(2);

                            _this.completedSteps.push(3);

                            _this.completedSteps.push(4);

                            _this.results.forEach(function (item, itemKey) {
                              _this.results[itemKey].value = '';
                            });

                            _this.results[0].value = res.data.data.count;
                            _this.results[2].value = res.data.data.count;
                            _this.results[4].value = res.data.data.price + ' ' + _this.$t('сўм');

                            _this.application.grafalar.forEach(function (item, itemKey) {
                              if (_this.application.serviceType === 0) {
                                if (_this.results[1].value.length > 0) {
                                  _this.results[1].value = _this.results[1].value + ', ' + _this.additionFields[item];
                                  _this.results[3].value = _this.results[3].value + ', ' + _this.additionFields[item];
                                } else {
                                  _this.results[1].value = _this.additionFields[item];
                                  _this.results[3].value = _this.additionFields[item];
                                }
                              } else {
                                if (_this.results[1].value.length > 0) {
                                  _this.results[1].value = _this.results[1].value + ', ' + _this.additionalFields2[item];
                                  _this.results[3].value = _this.results[3].value + ', ' + _this.additionalFields2[item];
                                } else {
                                  _this.results[1].value = _this.additionalFields2[item];
                                  _this.results[3].value = _this.additionalFields2[item];
                                }
                              }
                            });

                            return _context.abrupt("break", 52);

                          case 37:
                            _this.setPersonData(res.data.data);

                            _this.application.serviceType = parseInt(res.data.data.servicetype);

                            _this.setThirdStep(res.data.data);

                            _this.application.grafalar = res.data.data.grafalar;

                            _this.completedSteps.push(1);

                            _this.completedSteps.push(2);

                            _this.completedSteps.push(3);

                            _this.completedSteps.push(4);

                            _this.results.forEach(function (item, itemKey) {
                              _this.results[itemKey].value = '';
                            });

                            _this.results[0].value = res.data.data.count;
                            _this.results[2].value = res.data.data.count;
                            _this.results[4].value = res.data.data.price + ' ' + _this.$t('сўм');

                            _this.application.grafalar.forEach(function (item, itemKey) {
                              if (_this.application.serviceType === 0) {
                                if (_this.results[1].value.length > 0) {
                                  _this.results[1].value = _this.results[1].value + ', ' + _this.additionFields[item];
                                  _this.results[3].value = _this.results[3].value + ', ' + _this.additionFields[item];
                                } else {
                                  _this.results[1].value = _this.additionFields[item];
                                  _this.results[3].value = _this.additionFields[item];
                                }
                              } else {
                                if (_this.results[1].value.length > 0) {
                                  _this.results[1].value = _this.results[1].value + ', ' + _this.additionalFields2[item];
                                  _this.results[3].value = _this.results[3].value + ', ' + _this.additionalFields2[item];
                                } else {
                                  _this.results[1].value = _this.additionalFields2[item];
                                  _this.results[3].value = _this.additionalFields2[item];
                                }
                              }
                            });

                            _this.stepper = 5;
                            return _context.abrupt("break", 52);

                          case 52:
                            if (res.status === 404) {
                              _this.$router.push('/applications');
                            }

                            setTimeout(function () {
                              _this3.$store.commit('setLoading', false);
                            }, 200);

                          case 54:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }())["catch"](function (e) {
                  //if(e.response.status===404){
                  _this.$router.push('/applications'); //}


                  //}
                  console.log(e);
                  setTimeout(function () {
                    _this3.$store.commit('setLoading', false);
                  }, 200);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setThirdStep: function setThirdStep(data) {
      this.application.region = typeof data['boshqarma'] !== 'undefined' ? data['boshqarma'] : null;
      this.application.post = typeof data['post'] !== 'undefined' ? data['post'] : null;
      this.application.rejim = typeof data['rejim'] !== 'undefined' ? data['rejim'] : null;
      this.application.tftn = typeof data['tftn'] !== 'undefined' ? data['tftn'] : null;
      this.application.shartnoma = typeof data['shartnoma'] !== 'undefined' ? data['shartnoma'] : null;
      this.application.country = typeof data['country'] !== 'undefined' ? data['country'] : null;
      this.application.tftn = typeof data['tftn'] !== 'undefined' ? data['tftn'] : null;
      this.application.byud = typeof data['byud'] !== 'undefined' ? data['byud'] : null;
      this.application.sanadan = typeof data['byudsanadan'] !== 'undefined' ? data['byudsanadan'] : null;
      this.application.sanagacha = typeof data['byudsanagacha'] !== 'undefined' ? data['byudsanagacha'] : null;
    },
    getPosts: function getPosts(code) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.loading.post = true;
                _this = _this4;
                _this4.list.posts = [];
                _context3.next = 5;
                return axios.get('/api/v1/ex_api/postsbyregion?code=' + code).then(function (result) {
                  if (typeof result.data.posts !== 'undefined') result.data.posts.forEach(function (item) {
                    _this.list.posts.push({
                      'value': item['code'],
                      'text': item['cdNm']
                    });
                  });
                })["catch"](function (e) {
                  console.log(e);

                  _this.$toast.error(_this.$t('Пост маълумотларини олишда хатолик юз берди'));
                });

              case 5:
                _this4.loading.post = false;

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getCountries: function getCountries() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var root;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                root = _this5;
                _context4.next = 3;
                return axios.get('/api/v1/data/country?lang=uz').then(function (result) {
                  var countries = [];
                  result.data.forEach(function (item) {
                    countries.push({
                      'value': item['CODE'],
                      'text': item['CODE'] + '-' + item['CD_NM'],
                      'code': item['CD_ID_L']
                    });
                  });
                  root.list.countries = countries;
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getField: function getField(val) {
      return this.fields.filter(function (obj) {
        if (obj.key === val) return obj.value;
      });
    },
    setProductErrors: function setProductErrors(tovar_id, errors) {
      var _this = this;

      if (errors) {
        var errorfield = [];
        Object.keys(errors).forEach(function (keyItem) {
          if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
            errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
          }
        }); // this.application.tovarlar.forEach((tovar) => {

        _this.$refs['stepValidation2Product' + tovar_id][0].setErrors(errorfield); // })

      }
    },
    setCommonErrors: function setCommonErrors(errors) {
      var _this = this;

      if (errors) {
        var errorfield = [];
        Object.keys(errors).forEach(function (keyItem) {
          if (typeof _this.getField(keyItem)[0] !== 'undefined' && typeof _this.getField(keyItem)[0].value !== 'undefined') {
            errorfield[_this.getField(keyItem)[0].value] = [errors[keyItem]];
          }
        }); // this.application.tovarlar.forEach((tovar) => {

        _this.$refs['stepValidation1'].setErrors(errorfield); // })

      }
    },
    isCompletedStep: function isCompletedStep(step) {
      return this.completedSteps.includes(step);
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
    nextStep: function nextStep() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var isValid, _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                isValid = false;
                _this = _this6;
                _context9.t0 = _this6.stepper;
                _context9.next = _context9.t0 === 1 ? 5 : _context9.t0 === 2 ? 8 : _context9.t0 === 3 ? 12 : _context9.t0 === 4 ? 16 : 20;
                break;

              case 5:
                _this6.loadingButton.first = true; //console.log(!this.validateField("create_customs_person_value"))

                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this6.validateField("stepValidation1");

                        case 2:
                          isValid = _context5.sent;

                          if (!(isValid === true)) {
                            _context5.next = 6;
                            break;
                          }

                          _context5.next = 6;
                          return axios.post('/api/v1/statservice', {
                            step: _this.stepper,
                            org_name: _this.person.organization_name,
                            tin: _this.person.tin,
                            address: _this.person.perAdr,
                            phone: _this.person.phone,
                            email: _this.person.email
                          }).then(function (res) {
                            _this.getStatServices();

                            _this.completedSteps.push(_this.stepper);

                            _this.stepper++;

                            _this.$toast.success(_this.$t('Аризачи маълумотлари сақланди'));
                          })["catch"](function (e) {
                            console.log(e);

                            _this.$toast.error(_this.$t('Аризачи маълумотларини сақлашда хатолик юз берди'));
                          });

                        case 6:
                          _this6.loadingButton.first = false;

                        case 7:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));
                return _context9.abrupt("break", 23);

              case 8:
                _this6.loadingButton.second = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          if (!(_this.application.serviceType !== null)) {
                            _context6.next = 5;
                            break;
                          }

                          _context6.next = 3;
                          return axios.post('/api/v1/statservice', {
                            step: _this.stepper,
                            id: _this.application.id,
                            servicetype: _this.application.serviceType
                          }).then(function (res) {
                            _this.completedSteps.push(_this.stepper);

                            _this.stepper++;

                            _this.$toast.success(_this.$t('Хизмат тури сақланди'));

                            _this.loadingButton.second = false;
                          })["catch"](function (e) {
                            console.log(e);

                            _this.$toast.error(_this.$t('Аризачи маълумотларини сақлашда хатолик юз берди'));
                          });

                        case 3:
                          _context6.next = 6;
                          break;

                        case 5:
                          _this.$toast.warning(_this.$t('Илтимос хизмат турини танланг!'));

                        case 6:
                          _this6.loadingButton.second = false;

                        case 7:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                })));
                _this6.loadingButton.second = false;
                return _context9.abrupt("break", 23);

              case 12:
                _this6.loadingButton.third = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return _this6.validateField("stepValidation3");

                        case 2:
                          isValid = _context7.sent;

                          if (!(isValid === true)) {
                            _context7.next = 6;
                            break;
                          }

                          _context7.next = 6;
                          return axios.post('/api/v1/statservice', {
                            step: _this.stepper,
                            id: _this.application.id,
                            boshqarma: _this.application.boshqarma ? _this.application.boshqarma : null,
                            post: _this.application.post ? _this.application.post : null,
                            rejim: _this.application.rejim ? _this.application.rejim : null,
                            tftn: _this.application.tftn ? _this.application.tftn : null,
                            shartnoma: _this.application.shartnoma ? _this.application.shartnoma : null,
                            country: _this.application.country ? _this.application.country : null,
                            byud: _this.application.byud ? _this.application.byud : null,
                            byudsanadan: _this.application.sanadan ? _this.application.sanadan : null,
                            byudsanagacha: _this.application.sanagacha ? _this.application.sanagacha : null
                          }).then(function (res) {
                            _this.getStatServices();

                            _this.completedSteps.push(_this.stepper);

                            _this.stepper++;
                            _this.loadingButton.third = false;

                            _this.$toast.success(_this.$t('Аризачи маълумотлари сақланди'));
                          })["catch"](function (e) {
                            console.log(e);

                            _this.$toast.error(_this.$t('Аризачи маълумотларини сақлашда хатолик юз берди'));
                          });

                        case 6:
                          _this6.loadingButton.third = false;

                        case 7:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })));
                _this6.loadingButton.third = false;
                return _context9.abrupt("break", 23);

              case 16:
                _this6.loadingButton.four = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return axios.post('/api/v1/statservice', {
                            step: _this.stepper,
                            id: _this.application.id,
                            grafalar: _this.application.grafalar ? _this.application.grafalar : null
                          }).then(function (res) {
                            // _this.getStatServices();
                            _this.completedSteps.push(_this.stepper);

                            _this.stepper++;
                            _this.loadingButton.four = false;

                            _this.$toast.success(_this.$t('Қўшимча маълумотлар сақланди'));
                          })["catch"](function (e) {
                            console.log(e);

                            _this.$toast.error(_this.$t('Қўшимча маълумотларни сақлашда хатолик юз берди'));
                          });

                        case 2:
                          _this6.loadingButton.four = false;

                        case 3:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                })));
                _this6.loadingButton.four = false;
                return _context9.abrupt("break", 23);

              case 20:
                _this6.completedSteps.push(_this6.stepper);

                _this6.stepper++;
                return _context9.abrupt("break", 23);

              case 23:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    prevStep: function prevStep() {
      switch (this.stepper) {
        case 1:
          this.stepper = 1;
          break;

        case 2:
          this.stepper = 1;
          break;

        default:
          this.stepper = this.stepper - 1;
          break;
      }
    },
    goStep: function goStep() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if ((this.completedSteps.includes(step - 1) || this.completedSteps.includes(step)) && !this.isCompletedStep(4)) {
        this.stepper = step;
      }
    },
    isCompleted: function isCompleted(step) {
      if (this.completedSteps.includes(step)) {
        //console.log(step);
        return true;
      } else return false;
    },
    validateField: function validateField(field) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
        var provider;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                provider = _this7.$refs[field];
                if (Array.isArray(provider)) provider = provider[0]; // Validate the field

                if (!provider) {
                  _context10.next = 6;
                  break;
                }

                _context10.next = 5;
                return provider.validate();

              case 5:
                return _context10.abrupt("return", _context10.sent);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    getBoshqarmalar: function getBoshqarmalar() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _this = _this8;
                _context11.next = 3;
                return axios.get('/api/v1/ex_api/boshqarma').then(function (result) {
                  if (typeof result.data.data !== 'undefined') result.data.data.forEach(function (item) {
                    if (!['1790', '1791', '1701'].includes(item['kod_id'])) _this.list.regions.push({
                      'value': item['kod_id'],
                      'text': item['name'].replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "") //(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)

                    });
                  });
                });

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    initialize: function initialize() {
      this.getBoshqarmalar();
      this.setPersonData();
    },
    setPersonData: function setPersonData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.person.type = this.$auth.user().type === 1 ? 1 : 0;

      if (data) {
        this.person.pin = typeof data['pin'] !== 'undefined' ? data['pin'] : this.$auth.user().pin;
        this.person.tin = typeof data['tin'] !== 'undefined' ? data['tin'] : this.$auth.user().tin;
        this.person.perAdr = typeof data['address'] !== 'undefined' ? data['address'] : this.$auth.user().per_adr;
        this.person.email = typeof data['email'] !== 'undefined' ? data['email'] : this.$auth.user().email;
        this.person.phone = typeof data['phone'] !== 'undefined' ? data['phone'] : this.$auth.user().phone;

        if (typeof data['org_name'] !== 'undefined') {
          this.person.organization_name = data['org_name'];
        } else {
          if (this.person.type === 0) {
            var legal_info = JSON.parse(this.$auth.user().legal_info); //console.log(legal_info[0].le_name)

            if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].le_name !== 'undefined') {
              this.person.organization_name = legal_info[0].le_name;
            } else this.person.organization_name = "";
          }
        }
      } else {
        this.person.pin = this.$auth.user().pin;
        this.person.tin = this.$auth.user().tin;
        this.person.fio = this.$auth.user().sur_name + ' ' + this.$auth.user().first_name + ' ' + this.$auth.user().mid_name;
        this.person.perAdr = this.$auth.user().per_adr;
        this.person.email = this.$auth.user().email;
        this.person.phone = this.$auth.user().phone;

        if (this.person.type === 0) {
          var _legal_info = JSON.parse(this.$auth.user().legal_info); //console.log(legal_info[0].le_name)


          if (typeof _legal_info[0] !== 'undefined' && typeof _legal_info[0].le_name !== 'undefined') {
            this.person.organization_name = _legal_info[0].le_name;
          } else this.person.organization_name = "";
        }
      }
    }
  },
  watch: {
    'application.region': {
      handler: function handler(value) {
        //console.log(value)
        if (typeof value !== 'undefined' && value && value.length > 3) {
          // const region = value.substr(2, 2);
          //setTimeout(async () => {
          this.getPosts(value); // })
        }
      },
      immediate: true,
      deep: true,
      sync: true
    }
  },
  created: function created() {
    this.getStatServices();
    this.getCountries();
  },
  mounted: function mounted() {
    this.initialize();
  },
  computed: {
    completedData: function completedData() {
      return [{
        label: 'ТИФ иштирокчиси номи',
        value: this.person.organization_name
      }, {
        label: 'СТИР',
        value: this.person.tin
      }, {
        label: 'Манзили',
        value: this.person.perAdr
      }, {
        label: 'Телефон рақами',
        value: this.person.phone
      }, {
        label: 'Электрон почта манзили',
        value: this.person.email
      }, {
        label: 'Хизмат тури',
        value: this.application.serviceType !== null && this.serviceTypes[this.application.serviceType] ? this.serviceTypes[this.application.serviceType].title : ''
      }, {
        label: 'Ҳудудий божхона бошқармаси',
        value: this.application.region !== null && this.findElementInlist(this.list.regions, this.application.region, 'value') ? this.findElementInlist(this.list.regions, this.application.region, 'value').title : ''
      }, {
        label: 'Пост',
        value: this.application.post !== null && this.findElementInlist(this.list.posts, this.application.post, 'value') ? this.findElementInlist(this.list.posts, this.application.post, 'value').title : ''
      }, {
        label: 'Божхона режими',
        value: this.application.rejim !== null && this.findElementInlist(this.list.regimes, this.application.rejim, 'value') ? this.findElementInlist(this.list.regimes, this.application.rejim, 'value').title : ''
      }, {
        label: 'ТИФ ТН код',
        value: this.application.tftn
      }, {
        label: 'Шартноманинг ТСО ЯЭАТдаги идентификация рақами',
        value: this.application.shartnoma
      }, {
        label: 'Давлат',
        value: this.application.country !== null && this.findElementInlist(this.list.countries, this.application.country, 'value') ? this.findElementInlist(this.list.countries, this.application.country, 'value').title : ''
      }, {
        label: 'БЮДнинг тартиб рақами',
        value: this.application.byud
      }, {
        label: 'БЮД тақдим этилган санадан',
        value: this.application.sanadan
      }, {
        label: 'БЮД тақдим этилган санагача',
        value: this.application.sanagacha
      }];
    }
  },
  filters: {
    reverse: function reverse(array) {
      return array.slice().reverse();
    }
  },
  components: {
    EditableDate: _components_form_EditableDate__WEBPACK_IMPORTED_MODULE_3__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_6__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_6__.ValidationObserver
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".price-block[data-v-936534f4] {\n  padding: 30px;\n  border: 1px solid var(--mycolor);\n  margin-top: 25px;\n  border-radius: 10px;\n}\n.price-block h4[data-v-936534f4] {\n  color: var(--mycolor);\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n}\n.price-block h5[data-v-936534f4] {\n  color: var(--mycolor);\n  font-size: 14px;\n  margin: 10px 5px;\n}\n.price-block p[data-v-936534f4] {\n  font-size: 14px;\n  line-height: 24px;\n}\n.resultTable td[data-v-936534f4] {\n  border: 1px solid #ccc;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_936534f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_936534f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_936534f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/form/EditableDate.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/form/EditableDate.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditableDate_vue_vue_type_template_id_f44fa2fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableDate.vue?vue&type=template&id=f44fa2fc& */ "./resources/js/components/form/EditableDate.vue?vue&type=template&id=f44fa2fc&");
/* harmony import */ var _EditableDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDate.vue?vue&type=script&lang=js& */ "./resources/js/components/form/EditableDate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditableDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditableDate_vue_vue_type_template_id_f44fa2fc___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditableDate_vue_vue_type_template_id_f44fa2fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/EditableDate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/stat/info.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/info.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_vue_vue_type_template_id_936534f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=936534f4&scoped=true& */ "./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js&");
/* harmony import */ var _info_vue_vue_type_style_index_0_id_936534f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss& */ "./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_936534f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _info_vue_vue_type_template_id_936534f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "936534f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/stat/info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/EditableDate.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/form/EditableDate.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditableDate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/EditableDate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_936534f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/components/form/EditableDate.vue?vue&type=template&id=f44fa2fc&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/form/EditableDate.vue?vue&type=template&id=f44fa2fc& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_template_id_f44fa2fc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_template_id_f44fa2fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditableDate_vue_vue_type_template_id_f44fa2fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditableDate.vue?vue&type=template&id=f44fa2fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/EditableDate.vue?vue&type=template&id=f44fa2fc&");


/***/ }),

/***/ "./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_936534f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_936534f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_936534f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=template&id=936534f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/EditableDate.vue?vue&type=template&id=f44fa2fc&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/EditableDate.vue?vue&type=template&id=f44fa2fc& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        scopedSlots: _vm._u(
          [
            {
              key: "prepend-inner",
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
                                            {
                                              attrs: {
                                                color: _vm.$attrs["color"]
                                                  ? _vm.$attrs["color"]
                                                  : "",
                                              },
                                            },
                                            "v-icon",
                                            _vm.$attrs,
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
                          "active-picker": _vm.activePicker.date,
                          max: _vm.maxValue,
                          min: _vm.minValue,
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
                              JSON.stringify(
                                _vm.formatDate(_vm.datepicker.date)
                              )
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
            {
              key: "append-outer",
              fn: function () {
                return [_vm._t("append-outer")]
              },
              proxy: true,
            },
          ],
          null,
          true
        ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
                      staticClass: "lh-sm  m-3 font-weight-bold primary-color",
                      attrs: { align: "center" },
                    },
                    [
                      _vm._v(
                        "\n                        Расмийлаштирилган божхона юк декларациялари тўғрисидаги маълумотларни олиш\n                    "
                      ),
                    ]
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-stepper",
              {
                attrs: { color: "none" },
                model: {
                  value: _vm.stepper,
                  callback: function ($$v) {
                    _vm.stepper = $$v
                  },
                  expression: "stepper",
                },
              },
              [
                _c(
                  "v-stepper-header",
                  [
                    _c(
                      "v-stepper-step",
                      {
                        attrs: { complete: _vm.isCompleted(1), step: "1" },
                        on: {
                          click: function ($event) {
                            return _vm.goStep(1)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        Аризачи маълумотлари\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-stepper-step",
                      {
                        attrs: { step: "2", complete: _vm.isCompleted(2) },
                        on: {
                          click: function ($event) {
                            return _vm.goStep(2)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        Хизмат тури\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-stepper-step",
                      {
                        attrs: { step: "3", complete: _vm.isCompleted(3) },
                        on: {
                          click: function ($event) {
                            return _vm.goStep(3)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        Асосий маълумотлар\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-stepper-step",
                      {
                        attrs: { step: "4", complete: _vm.isCompleted(4) },
                        on: {
                          click: function ($event) {
                            return _vm.goStep(4)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        Қўшимча маълумотлар\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-divider"),
                    _vm._v(" "),
                    _c(
                      "v-stepper-step",
                      {
                        attrs: { step: "5", complete: _vm.isCompleted(5) },
                        on: {
                          click: function ($event) {
                            return _vm.goStep(5)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        Якуний\n                    "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-stepper-items",
                  [
                    _c(
                      "v-stepper-content",
                      { attrs: { step: "1" } },
                      [
                        _c(
                          "v-card",
                          { staticClass: "mb-12" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "row position-absolute yoriqnoma-text",
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/storage/files/hscode_guide.pptx",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      " Ариза тўлдириш бўйича йўриқмани юклаб\n                                олинг!\n                            "
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
                                      _c(
                                        "v-row",
                                        { staticClass: "person_data" },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "ТИФ иштирокчиси номи",
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
                                                                "Ташкилот номи",
                                                              required: "",
                                                              hint: "Юридик шахснинг тўлиқ номи",
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "label",
                                                                  fn: function () {
                                                                    return [
                                                                      _vm._v(
                                                                        "Ташкилот номи "
                                                                      ),
                                                                      _c(
                                                                        "sup",
                                                                        [
                                                                          _vm._v(
                                                                            "*"
                                                                          ),
                                                                        ]
                                                                      ),
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
                                                                _vm.person
                                                                  .organization_name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.person,
                                                                    "organization_name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "person.organization_name",
                                                            },
                                                          }),
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
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "СТИР",
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
                                                              counter: 9,
                                                              label: "СТИР",
                                                              type: "number",
                                                              required: "",
                                                              hint: "Солиқ тўловчининг идентификацион рақами",
                                                              "persistent-hint":
                                                                "",
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "label",
                                                                  fn: function () {
                                                                    return [
                                                                      _vm._v(
                                                                        "СТИР "
                                                                      ),
                                                                      _c(
                                                                        "sup",
                                                                        [
                                                                          _vm._v(
                                                                            "*"
                                                                          ),
                                                                        ]
                                                                      ),
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
                                                                _vm.person.tin,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.person,
                                                                    "tin",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "person.tin",
                                                            },
                                                          }),
                                                          _vm._v(" "),
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
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "Манзили",
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
                                                              required: "",
                                                              hint:
                                                                _vm.person
                                                                  .type == 1
                                                                  ? "Аризачининг манзили"
                                                                  : "Юридик шахснинг манзили",
                                                              "persistent-placeholder":
                                                                "",
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "label",
                                                                  fn: function () {
                                                                    return [
                                                                      _vm._v(
                                                                        "Манзили "
                                                                      ),
                                                                      _c(
                                                                        "sup",
                                                                        [
                                                                          _vm._v(
                                                                            "*"
                                                                          ),
                                                                        ]
                                                                      ),
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
                                                                _vm.person
                                                                  .perAdr,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.person,
                                                                    "perAdr",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "person.perAdr",
                                                            },
                                                          }),
                                                          _vm._v(" "),
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
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "Телефон рақами",
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
                                                                rawName:
                                                                  "v-mask",
                                                                value:
                                                                  "+998 ## ### ## ##",
                                                                expression:
                                                                  "'+998 ## ### ## ##'",
                                                              },
                                                            ],
                                                            attrs: {
                                                              label:
                                                                "Телефон рақами",
                                                              required: "",
                                                              hint: "Аризачининг телефон рақами",
                                                              "persistent-placeholder":
                                                                "",
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "label",
                                                                  fn: function () {
                                                                    return [
                                                                      _vm._v(
                                                                        "Телефон рақами "
                                                                      ),
                                                                      _c(
                                                                        "sup",
                                                                        [
                                                                          _vm._v(
                                                                            "*"
                                                                          ),
                                                                        ]
                                                                      ),
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
                                                                _vm.person
                                                                  .phone,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.person,
                                                                    "phone",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "person.phone",
                                                            },
                                                          }),
                                                          _vm._v(" "),
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
                                              }),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "Электрон почта",
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
                                                              hint: "Аризачининг электрон почтаси",
                                                              "persistent-placeholder":
                                                                "",
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "label",
                                                                  fn: function () {
                                                                    return [
                                                                      _vm._v(
                                                                        "Электрон почта манзили "
                                                                      ),
                                                                      _c(
                                                                        "sup",
                                                                        [
                                                                          _vm._v(
                                                                            "*"
                                                                          ),
                                                                        ]
                                                                      ),
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
                                                                _vm.person
                                                                  .email,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.person,
                                                                    "email",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "person.email",
                                                            },
                                                          }),
                                                          _vm._v(" "),
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
                                              }),
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
                              {
                                staticClass:
                                  "row mb-3 position-absolute bottom-0 end-0",
                              },
                              [
                                _c(
                                  "v-col",
                                  { staticClass: "d-flex tab_action_buttons" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { text: "" },
                                        on: { click: _vm.prevStep },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Орқага\n                                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "primary",
                                          size: "large",
                                          loading: _vm.loadingButton.first,
                                        },
                                        on: { click: _vm.nextStep },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Давом этиш\n                                    "
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
                              { staticClass: "bottom-required-info" },
                              [
                                _c(
                                  "i",
                                  { staticStyle: { "font-size": "12px" } },
                                  [
                                    _c(
                                      "sub",
                                      { staticStyle: { "font-size": "20px" } },
                                      [_vm._v("*")]
                                    ),
                                    _vm._v(
                                      " - майдонлари албатта тўлдирилиши шарт!\n                                "
                                    ),
                                  ]
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
                      "v-stepper-content",
                      { attrs: { step: "2" } },
                      [
                        _c(
                          "v-card",
                          { staticClass: "mb-12" },
                          [
                            _c("h5", { staticClass: "text-center mb-4" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.$t(
                                      "Импорт ва экспорт қилинган товарлар тўғрисида маълумот олиш"
                                    )
                                  )
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              { staticClass: "px-4" },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "6" } },
                                  [
                                    _c(
                                      "v-list",
                                      { attrs: { flat: "" } },
                                      [
                                        _c(
                                          "v-list-item-group",
                                          {
                                            attrs: { "active-class": "" },
                                            model: {
                                              value:
                                                _vm.application.serviceType,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.application,
                                                  "serviceType",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "application.serviceType",
                                            },
                                          },
                                          _vm._l(
                                            _vm.serviceTypes,
                                            function (
                                              serviceItem,
                                              serviceItemKey
                                            ) {
                                              return _c("v-list-item", {
                                                staticClass: "my-4",
                                                staticStyle: {
                                                  "box-shadow":
                                                    "0 5px 15px 1px #ccc",
                                                  "border-radius": "10px",
                                                },
                                                attrs: {
                                                  "two-line": "",
                                                  disabled:
                                                    !_vm.list.netOrgs.includes(
                                                      _vm.$auth.user().tin
                                                    ) && serviceItemKey === 2,
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (ref) {
                                                        var active = ref.active
                                                        return [
                                                          _c(
                                                            "v-list-item-action",
                                                            [
                                                              _c("v-checkbox", {
                                                                attrs: {
                                                                  "input-value":
                                                                    active,
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-content",
                                                            [
                                                              _c(
                                                                "v-list-item-title",
                                                                {
                                                                  staticClass:
                                                                    "text-wrap",
                                                                  staticStyle: {
                                                                    "line-height":
                                                                      "22px",
                                                                    "font-size":
                                                                      "16px",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        serviceItem.title
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              serviceItemKey ===
                                                              2
                                                                ? _c(
                                                                    "v-list-item-subtitle",
                                                                    {
                                                                      staticStyle:
                                                                        {
                                                                          color:
                                                                            "var(--mycolor)",
                                                                          "font-size":
                                                                            "12px",
                                                                        },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                            Фақат тармоқ корхоналари учун\n                                                        "
                                                                      ),
                                                                    ]
                                                                  )
                                                                : _vm._e(),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      },
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                              })
                                            }
                                          ),
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-col", { attrs: { cols: "6" } }, [
                                  _c(
                                    "div",
                                    { staticClass: "price-block" },
                                    [
                                      _c("h4", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("Хизматдан фойдаланиш нархи")
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
                                              _vm.$t(
                                                "битта божхона юк декларациясини юклаб олиш БҲМ 1 %"
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
                                              _vm.$t(
                                                "божхона юк декларациясига илова қилинган ҳар бир хужжат турини юклаб олиш БҲМ 1 %"
                                              )
                                            ) +
                                            ";"
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("h5", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.$t(
                                                "Жадвал кўринишидаги маълумотларни юклаб олиш учун хизмат нархи:"
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
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("p", [
                                                _vm._v(
                                                  "- 100 та қаторгача (товар) - БҲМ 5%;"
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  "- 500 та қаторгача (товар) - БҲМ 10%;"
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  "- 1 000 та қаторгача (товар) - БҲМ 20%;"
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  "- 5 000 та қаторгача (товар) - БҲМ 50%;"
                                                ),
                                              ]),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("p", [
                                                _vm._v(
                                                  "- 10 000 та қаторгача (товар) - 1 БҲМ;"
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  "- 50 000 та қаторгача (товар) - 2 БҲМ;"
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  "- 100 000 та қаторгача (товар) - 3 БҲМ;"
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  "- Қўшимча хар бир графа учун- БҲМ 5%."
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              {
                                staticClass:
                                  "row mb-3 position-absolute bottom-0 end-0",
                              },
                              [
                                _c(
                                  "v-col",
                                  { staticClass: "d-flex tab_action_buttons" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { text: "" },
                                        on: { click: _vm.prevStep },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Орқага\n                                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "primary",
                                          size: "large",
                                          loading: _vm.loadingButton.first,
                                        },
                                        on: { click: _vm.nextStep },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Давом этиш\n                                    "
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
                    _vm._v(" "),
                    _c(
                      "v-stepper-content",
                      { attrs: { step: "3" } },
                      [
                        _c(
                          "v-card",
                          { staticClass: "mb-12" },
                          [
                            _c("validation-observer", {
                              ref: "stepValidation3",
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var invalid = ref.invalid
                                    return [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.application
                                                      .serviceType !== 2,
                                                  expression:
                                                    "application.serviceType!==2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: { name: "Ҳудуд" },
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
                                                              hint: "Ҳудудий божхона бошқармаси",
                                                              items:
                                                                _vm.list
                                                                  .regions,
                                                              "persistent-hint":
                                                                "",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "label",
                                                                  fn: function () {
                                                                    return [
                                                                      _vm._v(
                                                                        "Ҳудудий божхона бошқармаси "
                                                                      ),
                                                                      _c(
                                                                        "sup",
                                                                        [
                                                                          _vm._v(
                                                                            "*"
                                                                          ),
                                                                        ]
                                                                      ),
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
                                                                _vm.application
                                                                  .region,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.application,
                                                                    "region",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "application.region",
                                                            },
                                                          }),
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
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.application
                                                      .serviceType !== 2,
                                                  expression:
                                                    "application.serviceType!==2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: { name: "Пост" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("v-autocomplete", {
                                                            attrs: {
                                                              loading:
                                                                _vm.loading
                                                                  .post,
                                                              required: "",
                                                              hint: "Божхона постини танланг",
                                                              items:
                                                                _vm.list.posts,
                                                              "persistent-hint":
                                                                "",
                                                              label:
                                                                "Божхона постини танланг",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.application
                                                                  .post,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.application,
                                                                    "post",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "application.post",
                                                            },
                                                          }),
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
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "Божхона режими",
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
                                                              hint: "Божхона режимини танланг",
                                                              items:
                                                                _vm.list
                                                                  .regimes,
                                                              "persistent-hint":
                                                                "",
                                                              "item-text":
                                                                "title",
                                                              "item-value":
                                                                "value",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "label",
                                                                  fn: function () {
                                                                    return [
                                                                      _vm._v(
                                                                        "Божхона режими"
                                                                      ),
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
                                                                _vm.application
                                                                  .rejim,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.application,
                                                                    "rejim",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "application.rejim",
                                                            },
                                                          }),
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
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: { name: "ТИФ ТН код" },
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
                                                                rawName:
                                                                  "v-mask",
                                                                value:
                                                                  "##########",
                                                                expression:
                                                                  "'##########'",
                                                              },
                                                            ],
                                                            attrs: {
                                                              "persistent-hint":
                                                                "",
                                                              label:
                                                                "ТИФ ТН код",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.application
                                                                  .tftn,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.application,
                                                                    "tftn",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "application.tftn",
                                                            },
                                                          }),
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
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.application
                                                      .serviceType !== 2,
                                                  expression:
                                                    "application.serviceType!==2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "Шартноманинг ТСО ЯЭАТдаги идентификация рақами",
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
                                                                rawName:
                                                                  "v-mask",
                                                                value:
                                                                  "###########################",
                                                                expression:
                                                                  "'###########################'",
                                                              },
                                                            ],
                                                            attrs: {
                                                              "persistent-hint":
                                                                "",
                                                              label:
                                                                "Шартноманинг ТСО ЯЭАТдаги идентификация рақами",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.application
                                                                  .shartnoma,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.application,
                                                                    "shartnoma",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "application.shartnoma",
                                                            },
                                                          }),
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
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: { name: "Давлат" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("v-autocomplete", {
                                                            attrs: {
                                                              label: "Давлат",
                                                              loading:
                                                                _vm.loading
                                                                  .country,
                                                              required: "",
                                                              items:
                                                                _vm.list
                                                                  .countries,
                                                              "persistent-hint":
                                                                "",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.application
                                                                  .country,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.application,
                                                                    "country",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "application.country",
                                                            },
                                                          }),
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
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.application
                                                      .serviceType === 2 &&
                                                    1 === 2,
                                                  expression:
                                                    "application.serviceType===2 && 1===2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "Тармоқ таркибидаги ташкилотлар",
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
                                                              label:
                                                                "Тармоқ таркибидаги ташкилотлар",
                                                              loading:
                                                                _vm.loading.org,
                                                              required: "",
                                                              items:
                                                                _vm.list.orgs,
                                                              "persistent-hint":
                                                                "",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.application
                                                                  .org,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.application,
                                                                    "org",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "application.org",
                                                            },
                                                          }),
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
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.application
                                                      .serviceType !== 2,
                                                  expression:
                                                    "application.serviceType!==2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: "БЮДнинг тартиб рақами",
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
                                                                rawName:
                                                                  "v-mask",
                                                                value:
                                                                  "#####/##.##.####/#######",
                                                                expression:
                                                                  "'#####/##.##.####/#######'",
                                                              },
                                                            ],
                                                            attrs: {
                                                              "error-messages":
                                                                errors[0],
                                                              "persistent-placeholder":
                                                                "",
                                                              label:
                                                                "БЮДнинг тартиб рақами",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.application
                                                                  .byud,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.application,
                                                                    "byud",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "application.byud",
                                                            },
                                                          }),
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
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.application
                                                      .serviceType !== 2,
                                                  expression:
                                                    "application.serviceType!==2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "margin-top": "-15px",
                                                        "margin-bottom":
                                                          "-45px",
                                                      },
                                                      attrs: { cols: "12" },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "БЮД тақдим этилган сана"
                                                            )
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "5" } },
                                                    [
                                                      _c("ValidationProvider", {
                                                        attrs: {
                                                          name: "БЮД тақдим этилган санадан",
                                                          rules: "required",
                                                        },
                                                        scopedSlots: _vm._u(
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
                                                                    "editable-date",
                                                                    {
                                                                      attrs: {
                                                                        suffix:
                                                                          "дан",
                                                                        hint: "Мисол: 01-01-2023",
                                                                        "error-messages":
                                                                          errors[0],
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .application
                                                                            .sanadan,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.application,
                                                                              "sanadan",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "application.sanadan",
                                                                      },
                                                                    }
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
                                                    { attrs: { cols: "5" } },
                                                    [
                                                      _c("ValidationProvider", {
                                                        attrs: {
                                                          name: "БЮД тақдим этилган санагача",
                                                          rules: "required",
                                                        },
                                                        scopedSlots: _vm._u(
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
                                                                    "editable-date",
                                                                    {
                                                                      attrs: {
                                                                        suffix:
                                                                          "гача",
                                                                        hint: "Мисол: 01-01-2023",
                                                                        "error-messages":
                                                                          errors[0],
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .application
                                                                            .sanagacha,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.application,
                                                                              "sanagacha",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "application.sanagacha",
                                                                      },
                                                                    }
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
                              {
                                staticClass:
                                  "row mb-3 position-absolute bottom-0 end-0",
                              },
                              [
                                _c(
                                  "v-col",
                                  { staticClass: "d-flex tab_action_buttons" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { text: "" },
                                        on: { click: _vm.prevStep },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Орқага\n                                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "primary",
                                          size: "large",
                                          loading: _vm.loadingButton.first,
                                        },
                                        on: { click: _vm.nextStep },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Давом этиш\n                                    "
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
                              { staticClass: "bottom-required-info" },
                              [
                                _c(
                                  "i",
                                  { staticStyle: { "font-size": "12px" } },
                                  [
                                    _c(
                                      "sub",
                                      { staticStyle: { "font-size": "20px" } },
                                      [_vm._v("*")]
                                    ),
                                    _vm._v(
                                      " - майдонлари албатта тўлдирилиши шарт!\n                                "
                                    ),
                                  ]
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
                      "v-stepper-content",
                      { attrs: { step: "4" } },
                      [
                        _c(
                          "v-card",
                          { staticClass: "mb-12" },
                          [
                            _c(
                              "v-row",
                              [
                                _c("h5", { staticClass: "mb-6" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "Қўшимча қайси илова ҳужжатларидан нусха олишни хохлайсиз?"
                                      )
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-list",
                                  { staticClass: "pa-4", attrs: { flat: "" } },
                                  [
                                    _c(
                                      "v-list-item-group",
                                      {
                                        staticClass: "d-flex flex-wrap",
                                        attrs: {
                                          "active-class": "",
                                          multiple: "",
                                        },
                                        model: {
                                          value: _vm.application.grafalar,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.application,
                                              "grafalar",
                                              $$v
                                            )
                                          },
                                          expression: "application.grafalar",
                                        },
                                      },
                                      _vm._l(
                                        _vm.additionFields,
                                        function (additionField) {
                                          return _c("v-list-item", {
                                            staticStyle: {
                                              "flex-basis": "50%",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var active = ref.active
                                                    return [
                                                      _c(
                                                        "v-list-item-action",
                                                        { staticClass: "my-0" },
                                                        [
                                                          _c("v-checkbox", {
                                                            attrs: {
                                                              "input-value":
                                                                active,
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-content",
                                                        { staticClass: "p-0" },
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            {
                                                              staticClass:
                                                                "text-wrap",
                                                              staticStyle: {
                                                                "line-height":
                                                                  "22px",
                                                                "font-size":
                                                                  "16px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                        " +
                                                                  _vm._s(
                                                                    additionField
                                                                  ) +
                                                                  "\n                                                    "
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
                                              true
                                            ),
                                          })
                                        }
                                      ),
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
                              "v-row",
                              {
                                staticClass:
                                  "row mb-3 position-absolute bottom-0 end-0",
                              },
                              [
                                _c(
                                  "v-col",
                                  { staticClass: "d-flex tab_action_buttons" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { text: "" },
                                        on: { click: _vm.prevStep },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Орқага\n                                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "primary",
                                          size: "large",
                                          loading: _vm.loadingButton.first,
                                        },
                                        on: { click: _vm.nextStep },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Давом этиш\n                                    "
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
                    _vm._v(" "),
                    _c(
                      "v-stepper-content",
                      { attrs: { step: "5" } },
                      [
                        _c(
                          "v-card",
                          { staticClass: "mb-12" },
                          [
                            _c(
                              "v-row",
                              [
                                _c("h5", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(_vm.$t("Ариза маълумотлари"))),
                                ]),
                                _vm._v(" "),
                                _c("v-simple-table", {
                                  staticClass: "pa-15 resultTable",
                                  scopedSlots: _vm._u([
                                    {
                                      key: "default",
                                      fn: function () {
                                        return [
                                          _c(
                                            "tbody",
                                            _vm._l(
                                              _vm.completedData,
                                              function (item) {
                                                return item.value
                                                  ? _c(
                                                      "tr",
                                                      { key: item.label },
                                                      [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticStyle: {
                                                              "max-width":
                                                                "20%",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(item.label)
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            staticStyle: {
                                                              width: "80%",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(item.value)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  : _vm._e()
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ]),
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "Аниқланган маълумот хажми ва нархи"
                                      )
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("v-simple-table", {
                                  staticClass: "pa-15 resultTable",
                                  scopedSlots: _vm._u([
                                    {
                                      key: "default",
                                      fn: function () {
                                        return [
                                          _c(
                                            "tbody",
                                            [
                                              _vm._l(
                                                _vm.results,
                                                function (item, itemKey) {
                                                  return (_vm.application
                                                    .serviceType === 0 &&
                                                    item.type === 1) ||
                                                    (_vm.application
                                                      .serviceType !== 0 &&
                                                      item.type === 2) ||
                                                    item.type === 3
                                                    ? _c(
                                                        "tr",
                                                        { key: item.label },
                                                        [
                                                          _c(
                                                            "td",
                                                            {
                                                              staticStyle: {
                                                                "max-width":
                                                                  "20%",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.label
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          itemKey === 4
                                                            ? _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    width:
                                                                      "80%",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      item.value
                                                                    ) +
                                                                      "\n                                                "
                                                                  ),
                                                                  _vm
                                                                    .application
                                                                    .status ===
                                                                  1
                                                                    ? _c(
                                                                        "v-dialog",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              width:
                                                                                "900",
                                                                            },
                                                                          scopedSlots:
                                                                            _vm._u(
                                                                              [
                                                                                {
                                                                                  key: "activator",
                                                                                  fn: function (
                                                                                    ref
                                                                                  ) {
                                                                                    var on =
                                                                                      ref.on
                                                                                    var attrs =
                                                                                      ref.attrs
                                                                                    return [
                                                                                      _c(
                                                                                        "v-btn",
                                                                                        _vm._g(
                                                                                          _vm._b(
                                                                                            {
                                                                                              staticClass:
                                                                                                "ml-4",
                                                                                              attrs:
                                                                                                {
                                                                                                  color:
                                                                                                    "success",
                                                                                                  small:
                                                                                                    "",
                                                                                                  dark: "",
                                                                                                },
                                                                                            },
                                                                                            "v-btn",
                                                                                            attrs,
                                                                                            false
                                                                                          ),
                                                                                          on
                                                                                        ),
                                                                                        [
                                                                                          _vm._v(
                                                                                            "\n                                                        " +
                                                                                              _vm._s(
                                                                                                _vm.$t(
                                                                                                  "Тўлаш"
                                                                                                )
                                                                                              ) +
                                                                                              "\n                                                    "
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
                                                                          model:
                                                                            {
                                                                              value:
                                                                                _vm.dialog,
                                                                              callback:
                                                                                function (
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.dialog =
                                                                                    $$v
                                                                                },
                                                                              expression:
                                                                                "dialog",
                                                                            },
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-card",
                                                                            [
                                                                              _c(
                                                                                "v-card-title",
                                                                                {
                                                                                  staticClass:
                                                                                    "text-h5 py-2 white--text",
                                                                                  staticStyle:
                                                                                    {
                                                                                      "background-color":
                                                                                        "var(--mycolor)",
                                                                                    },
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "\n                                                        Оферта\n                                                    "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "v-card-text",
                                                                                [
                                                                                  _vm._v(
                                                                                    "\n                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n                                                    "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "v-divider"
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "v-card-actions",
                                                                                [
                                                                                  _c(
                                                                                    "v-spacer"
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "v-btn",
                                                                                    {
                                                                                      attrs:
                                                                                        {
                                                                                          text: "",
                                                                                          color:
                                                                                            "primary",
                                                                                        },
                                                                                      on: {
                                                                                        click:
                                                                                          function (
                                                                                            $event
                                                                                          ) {
                                                                                            return _vm.agree()
                                                                                          },
                                                                                      },
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "\n                                                            " +
                                                                                          _vm._s(
                                                                                            _vm.$t(
                                                                                              "Розиман"
                                                                                            )
                                                                                          ) +
                                                                                          "\n                                                        "
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "v-btn",
                                                                                    {
                                                                                      attrs:
                                                                                        {
                                                                                          color:
                                                                                            "primary",
                                                                                          text: "",
                                                                                        },
                                                                                      on: {
                                                                                        click:
                                                                                          function (
                                                                                            $event
                                                                                          ) {
                                                                                            _vm.dialog = false
                                                                                          },
                                                                                      },
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "\n                                                            Ёпиш\n                                                        "
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
                                                                      )
                                                                    : _vm._e(),
                                                                ],
                                                                1
                                                              )
                                                            : _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    width:
                                                                      "80%",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      item.value
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                        ]
                                                      )
                                                    : _vm._e()
                                                }
                                              ),
                                              _vm._v(" "),
                                              _vm.application.status === 2
                                                ? _c("tr", [
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "Тўлов ҳолатини текшириш"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.application
                                                                .status === 3
                                                                ? _vm.$t(
                                                                    "Тўланган"
                                                                  )
                                                                : _vm.$t(
                                                                    "Тўланмаган"
                                                                  )
                                                            )
                                                          ),
                                                        ]),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            staticClass: "ml-4",
                                                            attrs: {
                                                              color: "success",
                                                              small: "",
                                                            },
                                                          },
                                                          [_vm._v("Текшириш")]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c("td", [_vm._v("Натижа")]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "span",
                                                    {
                                                      on: {
                                                        click: _vm.getByud,
                                                      },
                                                    },
                                                    [_vm._v("Юклаб олиш")]
                                                  ),
                                                ]),
                                              ]),
                                            ],
                                            2
                                          ),
                                        ]
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
    _vm._m(0),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "all_news service",
        attrs: { target: "_blank", href: "https://t.me/HsCodeDecisions" },
      },
      [
        _c("img", { attrs: { src: "/public/images/telegram.png" } }),
        _vm._v(" "),
        _c("p", [
          _vm._v(" Саволларингизни йўлланг\n            "),
          _c("br"),
          _vm._v("\n            @HsCodeDecisions\n        "),
        ]),
      ]
    )
  },
]
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