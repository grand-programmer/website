(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_stat_create_vue"],{

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
      return this.$attrs.min ? this.$attrs.min : '1950-01-01';
    },
    maxValue: function maxValue() {
      return this.$attrs.max ? this.$attrs.max : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString();
    }
  },
  watch: {
    handle: function handle(val, oldVal) {// console.log(val)
    },
    deep: true
  },
  methods: {
    save: function save(datepicker) {
      this.modelValue = JSON.parse(JSON.stringify(this.formatDate(datepicker.date)));
      this.$refs.date_menu.save(datepicker.date);
    },
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


      var dateString = year + '-' + month + '-' + day;
      console.log(dateString);
      var date = new Date(dateString).toISOString();
      return date;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _locales_oz_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../locales/oz.json */ "./resources/js/locales/oz.json");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
/* harmony import */ var _components_form_EditableDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/form/EditableDate */ "./resources/js/components/form/EditableDate.vue");
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/services/apiService */ "./resources/js/src/services/apiService.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "InitialStat",
  data: function data() {
    return {
      dialog: {
        primaryFields: false
      },
      threeYearsAgo: this.getThreeYearsAgo(),
      stepper: 1,
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Хизматлар'),
        to: '/services',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Экспорт ва импорт бўйича маълумотларни олиш'),
        to: '/services/stat',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Ариза юбориш'),
        to: '/services/stat/create',
        disabled: true,
        exact: true
      }],
      temp: {
        tftn: null,
        byud: null,
        shartnoma: null
      },
      application: {
        id: null,
        application_type: null,
        status: null,
        rejim: null,
        region: null,
        post: null,
        org: null,
        org_name: null,
        tftn: [],
        shartnoma: [],
        country: null,
        byud: [],
        isCreatedDate: true,
        isRejim: true,
        is_tsa: true,
        sanadan: null,
        sanagacha: null,
        grafalar: []
      },
      list: {
        tarifs: null,
        countries: [],
        prices: [],
        posts: [],
        regions: [],
        regimes: [],
        fields: [],
        primaryFields: [],
        netOrgs: []
      },
      loading: {
        country: false,
        post: false,
        fields: false,
        org: false,
        calculate: false
      },
      application_types: [],
      results: [{
        label: 'БЮД сони',
        value: '',
        type: 1
      }, {
        label: 'Илова хужжатлар тури',
        value: '',
        type: 1
      }, {
        label: 'Қўшимча белгиланган графалар',
        value: '',
        type: 2
      }, {
        label: 'Қатор (товар) сони',
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
      fields: [{
        key: 'tradeName',
        value: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Товарнинг тижорат номи')
      }, {
        key: 'tradeMark',
        value: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Товар маркаси')
      }, {
        key: 'model',
        value: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Товар модели'),
        tab: 1
      }, {
        key: 'basicQty',
        value: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Намуналар сони'),
        tab: 1
      }, {
        key: 'extraUnits',
        value: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Ўлчов бирлиги')
      }, {
        key: 'comment',
        value: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Қўшимча маълумотлар ва изоҳлар')
      }, {
        key: 'email',
        value: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Электрон почта')
      }],
      "float": ['^[-+][0-9]+\\.[0-9]+[eE][-+]?[0-9]+$'],
      interval: [],
      bhm: null
    };
  },
  methods: {
    getThreeYearsAgo: function getThreeYearsAgo() {
      var date = new Date();
      date.setFullYear(date.getFullYear() - 3);
      date.setDate('01');
      date.setMonth('00');
      return date.toISOString().split('T')[0]; // YYYY-MM-DD
    },
    getTariffs: function getTariffs() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/v1/data/tariffs').then(function (res) {
                  _this2.list.tarifs = res.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getPrice: function getPrice() {
      var _arguments = arguments,
          _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var calculate, _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                calculate = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
                _this = _this3;

                if (!calculate) {
                  _context2.next = 14;
                  break;
                }

                _context2.prev = 3;
                _this3.loading.calculate = true;
                _context2.next = 7;
                return axios.get('/api/v1/statservice/price/' + _this3.$route.params.id, {
                  params: {
                    calculate: true
                  }
                }).then(function (res) {
                  _this.loading.calculate = false;
                  if (res.data.data) _this.list.prices = res.data.data;else _this.list.prices = [];
                  if (res.data.status) _this.application.status = res.data.status;
                  if (res.data.error) _this3.$toast.info(res.data.error);
                })["catch"](function (e) {
                  if (e.response && e.response.data && e.response.data.error) _this.$toast.info(e.response.data.error);
                  if (e.response && e.response.data && e.response.data.status) _this.application.status = e.response.data.status;
                  _this.loading.calculate = false;
                });

              case 7:
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](3);
                _this.loading.calculate = false;

              case 12:
                _context2.next = 16;
                break;

              case 14:
                _context2.next = 16;
                return axios.get('/api/v1/statservice/price/' + _this3.$route.params.id).then(function (res) {
                  _this.loading.calculate = false;
                  if (res.data.data) _this.list.prices = res.data.data;
                  if (res.data.bhm) _this.bhm = res.data.bhm;
                  if (res.data.status) _this.application.status = res.data.status;
                })["catch"](function (e) {
                  if (e.response && e.response.data && e.response.data.status) _this.application.status = e.response.data.status;
                  _this.loading.calculate = false;
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 9]]);
      }))();
    },
    removeItem: function removeItem() {
      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tftn';
      var item = arguments.length > 1 ? arguments[1] : undefined;
      var field = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (field) {
        this.application[code] = this.application[code].filter(function (filterItem) {
          return filterItem[field] !== item;
        });
      } else {
        this.application[code] = this.application[code].filter(function (filterItem) {
          return filterItem !== item;
        });
      }
    },
    addData: function addData() {
      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tftn';
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      if (!this.temp[code] || this.temp[code].length < length) {
        this.$toast.error(this.$t('Сиз {length} тадан кўп ракам киритишингиз керак', {
          length: length - 1
        }));
        return;
      }

      if (this.application[code].indexOf(this.temp[code]) < 0) this.application[code].push(this.temp[code]);
      this.temp[code] = null;
    },
    getApplicationTypes: function getApplicationTypes() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get('/api/v1/data/statservicetype').then(function (res) {
                  console.log(res);
                  _this4.application_types = res.data;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getApplicationTarmoq: function getApplicationTarmoq() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get('/api/v1/data/statservice/' + _this5.$route.params.id + '/tarmoq').then(function (res) {
                  _this5.list.netOrgs = res.data;
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    formatDate: function formatDate(date) {
      if (!date) return null;

      var _date$split = date.split('-'),
          _date$split2 = _slicedToArray(_date$split, 3),
          year = _date$split2[0],
          month = _date$split2[1],
          day = _date$split2[2];

      return "".concat(day, "-").concat(month, "-").concat(year);
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
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this = _this6;

                _this6.$store.commit('setLoading', true);

                _context5.next = 4;
                return axios.get('/api/v1/statservice/' + _this6.$route.params.id, {
                  params: {
                    pin: _this6.$auth.user().pin,
                    tin: _this6.$auth.user().tin
                  }
                }).then(function (res) {
                  if (res.status === 200) {
                    if (typeof res.data.data.id !== 'undefined') {
                      _this.application.id = res.data.data.id;
                      _this.application.status = res.data.data.status;

                      if (res.data.data.step) {
                        _this.stepper = parseInt(res.data.data.step);
                      } else {
                        _this6.stepper = 1;

                        _this6.$store.commit('setLoading', false);

                        return;
                      }

                      switch (_this.stepper) {
                        case 1:
                          _this.setPersonData(res.data.data);

                          _this.completedSteps.push(1);

                          break;

                        case 2:
                          _this.setPersonData(res.data.data);

                          _this.application.application_type = parseInt(res.data.data.application_type);

                          _this.completedSteps.push(1);

                          _this.completedSteps.push(2);

                          break;

                        case 3:
                          _this.setPersonData(res.data.data);

                          _this.application.application_type = parseInt(res.data.data.application_type);

                          _this.setThirdStep(res.data.data);

                          _this.completedSteps.push(1);

                          _this.completedSteps.push(2);

                          _this.completedSteps.push(3);

                          break;

                        case 4:
                          _this.setPersonData(res.data.data);

                          _this.application.application_type = parseInt(res.data.data.application_type);

                          _this.setThirdStep(res.data.data);

                          _this.application.grafalar = JSON.parse(JSON.stringify(res.data.data.grafalar));

                          _this.completedSteps.push(1);

                          _this.completedSteps.push(2);

                          _this.completedSteps.push(3);

                          _this.completedSteps.push(4);

                          break;

                        case 5:
                          _this.setPersonData(res.data.data);

                          _this.application.application_type = parseInt(res.data.data.application_type);

                          _this.setThirdStep(res.data.data);

                          _this.application.grafalar = JSON.parse(JSON.stringify(res.data.data.grafalar));

                          _this.completedSteps.push(1);

                          _this.completedSteps.push(2);

                          _this.completedSteps.push(3);

                          _this.completedSteps.push(4);

                          _this.stepper = 5;
                          break;
                      }
                    }
                  }

                  setTimeout(function () {
                    _this6.$store.commit('setLoading', false);
                  }, 200);
                })["catch"](function (e) {
                  console.log(e);

                  _this6.$toast.error(_this6.$t('Хатолик юз берди'));

                  _this6.$router.push('/services/stat');

                  setTimeout(function () {
                    _this6.$store.commit('setLoading', false);
                  }, 200);
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    setThirdStep: function setThirdStep(data) {
      this.application.region = typeof data['region'] !== 'undefined' ? data['region'] : null;
      this.application.post = typeof data['post'] !== 'undefined' ? data['post'] : null;
      this.application.org = typeof data['org'] !== 'undefined' ? data['org'] : null;
      this.application.rejim = typeof data['rejim'] !== 'undefined' ? data['rejim'] : null;
      this.application.isRejim = typeof data['is_tsa'] !== 'undefined' ? !data['is_tsa'] : true;
      this.application.tftn = typeof data['tftn'] !== 'undefined' ? data['tftn'] : [];
      this.application.shartnoma = typeof data['shartnoma'] !== 'undefined' ? data['shartnoma'] : [];
      this.application.country = typeof data['country'] !== 'undefined' ? data['country'] : null;
      this.application.tftn = typeof data['tftn'] !== 'undefined' ? data['tftn'] : [];
      this.application.org_name = typeof data['org_name'] !== 'undefined' ? data['org_name'] : null;
      this.application.byud = typeof data['byud'] !== 'undefined' ? data['byud'] : [];
      this.application.sanadan = typeof data['byudsanadan'] !== 'undefined' ? data['byudsanadan'] : null;
      this.application.sanagacha = typeof data['byudsanagacha'] !== 'undefined' ? data['byudsanagacha'] : null;
      this.application.isCreatedDate = typeof data['isCreatedDate'] !== 'undefined' ? data['isCreatedDate'] : false;
    },
    getPosts: function getPosts(code) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.loading.post = true;
                _this = _this7;
                _this7.list.posts = [];
                _context6.next = 5;
                return axios.get('/api/v1/data/post?code=' + code).then(function (result) {
                  if (typeof result.data !== 'undefined') _this.list.posts = result.data.posts;
                })["catch"](function (e) {
                  console.log(e);

                  _this.$toast.error(_this.$t('Пост маълумотларини олишда хатолик юз берди'));
                });

              case 5:
                _this7.loading.post = false;

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getRegimes: function getRegimes() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this8.loading.regime = true;
                _this = _this8;
                _this8.list.regimes = [];
                _context7.next = 5;
                return axios.get('/api/v1/data/' + _this8.$route.params.id + '/regime').then(function (result) {
                  if (typeof result.data !== 'undefined') _this.list.regimes = result.data;
                  _this.loading.regime = false;
                })["catch"](function (e) {
                  _this.loading.regime = false;
                  console.log(e);

                  _this.$toast.error(_this.$t('Режим маълумотларини олишда хатолик юз берди'));
                });

              case 5:
                _this8.loading.regime = false;

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    getFields: function getFields() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        var grafalar, _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this9.loading.fields = true;
                grafalar = JSON.parse(JSON.stringify(_this9.application.grafalar));
                _this = _this9;
                _this9.list.fields = [];
                _context8.next = 6;
                return axios.get('/api/v1/data/' + _this9.$route.params.id + '/fields').then(function (result) {
                  if (typeof result.data !== 'undefined') _this.list.fields = result.data.data;
                  _this.list.primaryFields = result.data.secondary;
                  _this.application.grafalar = grafalar.length > 0 ? JSON.parse(JSON.stringify(grafalar)) : _this.application.grafalar;
                })["catch"](function (e) {
                  console.log(e);

                  _this.$toast.error(_this.$t('Режим маълумотларини олишда хатолик юз берди'));
                });

              case 6:
                _this9.loading.fields = false;

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getCountries: function getCountries() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var root;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                root = _this10;
                _context9.next = 3;
                return _this10.$auth.plugins.http.get('/api/v1/data/country').then(function (result) {
                  root.list.countries = result.data;
                });

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    getField: function getField(val) {
      return this.fields.filter(function (obj) {
        if (obj.key === val) return obj.value;
      });
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
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee18() {
        var isValid, _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                isValid = false;
                _this = _this11;
                _context18.t0 = _this11.stepper;
                _context18.next = _context18.t0 === 1 ? 5 : _context18.t0 === 2 ? 8 : _context18.t0 === 3 ? 12 : _context18.t0 === 4 ? 16 : _context18.t0 === 5 ? 20 : 24;
                break;

              case 5:
                _this11.loadingButton.first = true; //console.log(!this.validateField("create_customs_person_value"))

                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.next = 2;
                          return _this11.validateField("stepValidation1");

                        case 2:
                          isValid = _context11.sent;

                          if (!(isValid === true)) {
                            _context11.next = 7;
                            break;
                          }

                          _this11.$store.commit('setLoading', true);

                          _context11.next = 7;
                          return axios.post('/api/v1/statservice/' + _this11.$route.params.id, {
                            step: _this.stepper,
                            org_name: _this11.person.type == 0 ? _this.person.organization_name : _this11.person.fio,
                            address: _this11.person.perAdr,
                            phone: _this11.person.phone,
                            email: _this11.person.email
                          }).then( /*#__PURE__*/function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10(res) {
                              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
                                while (1) {
                                  switch (_context10.prev = _context10.next) {
                                    case 0:
                                      _context10.next = 2;
                                      return _this.getStatServices();

                                    case 2:
                                      _this.completedSteps.push(_this.stepper);

                                      _this.stepper = 2;

                                      _this.$toast.success(_this.$t('Аризачи маълумотлари сақланди'));

                                    case 5:
                                    case "end":
                                      return _context10.stop();
                                  }
                                }
                              }, _callee10);
                            }));

                            return function (_x) {
                              return _ref2.apply(this, arguments);
                            };
                          }())["catch"](function (e) {
                            console.log(e.response.data);

                            _this.$toast.error(_this.$t('Аризачи маълумотларини сақлашда хатолик юз берди'));
                          });

                        case 7:
                          _this11.$store.commit('setLoading', false);

                          _this11.loadingButton.first = false;

                        case 9:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                })));
                return _context18.abrupt("break", 27);

              case 8:
                _this11.loadingButton.second = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          if (!(_this.application.application_type !== null)) {
                            _context12.next = 6;
                            break;
                          }

                          _this11.$store.commit('setLoading', true);

                          _context12.next = 4;
                          return axios.post('/api/v1/statservice/' + _this11.$route.params.id, {
                            step: _this.stepper,
                            application_type: _this.application.application_type
                          }).then(function (res) {
                            _this.completedSteps.push(_this.stepper);

                            _this.stepper = 3;

                            _this.$toast.success(_this.$t('Хизмат тури сақланди'));

                            _this.loadingButton.second = false;
                          })["catch"](function (e) {
                            console.log(e);

                            _this.$toast.error(_this.$t('Хизмат тури маълумотларини сақлашда хатолик юз берди'));
                          });

                        case 4:
                          _context12.next = 7;
                          break;

                        case 6:
                          _this.$toast.warning(_this.$t('Илтимос хизмат турини танланг!'));

                        case 7:
                          _this11.$store.commit('setLoading', false);

                          _this11.loadingButton.second = false;

                        case 9:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12);
                })));
                _this11.loadingButton.second = false;
                return _context18.abrupt("break", 27);

              case 12:
                _this11.loadingButton.third = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          _context14.next = 2;
                          return _this11.validateField("stepValidation3");

                        case 2:
                          isValid = _context14.sent;

                          if (!(isValid === true)) {
                            _context14.next = 8;
                            break;
                          }

                          _this11.$store.commit('setLoading', true);

                          _context14.next = 7;
                          return axios.post('/api/v1/statservice/' + _this11.$route.params.id, {
                            pin: _this.$auth.user().pin,
                            tin: _this.$auth.user().tin,
                            step: _this.stepper,
                            id: _this.application.id,
                            region: _this.application.region ? _this.application.region : [],
                            post: _this.application.post ? _this.application.post : null,
                            org: _this.application.org ? _this.application.org : null,
                            rejim: _this.application.rejim ? _this.application.rejim : null,
                            is_tsa: !_this.application.isRejim,
                            tftn: _this.application.tftn ? _this.application.tftn : [],
                            shartnoma: _this.application.shartnoma ? _this.application.shartnoma : [],
                            country: _this.application.country ? _this.application.country : null,
                            byud: _this.application.byud ? _this.application.byud : [],
                            byudsanadan: _this.application.sanadan ? _this.application.sanadan : null,
                            byudsanagacha: _this.application.sanagacha ? _this.application.sanagacha : null,
                            isCreatedDate: _this.application.isCreatedDate ? _this.application.isCreatedDate : null
                          }).then( /*#__PURE__*/function () {
                            var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13(res) {
                              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
                                while (1) {
                                  switch (_context13.prev = _context13.next) {
                                    case 0:
                                      _context13.next = 2;
                                      return _this.getStatServices();

                                    case 2:
                                      _this.completedSteps.push(_this.stepper); // _this.stepper++


                                      // _this.stepper++
                                      _this.loadingButton.third = false;

                                      _this.$toast.success(_this.$t('Асосий маълумотлар сақланди'));

                                    case 5:
                                    case "end":
                                      return _context13.stop();
                                  }
                                }
                              }, _callee13);
                            }));

                            return function (_x2) {
                              return _ref5.apply(this, arguments);
                            };
                          }())["catch"](function (e) {
                            console.log(e);

                            _this.$toast.error(_this.$t('Асосий маълумотларни сақлашда хатолик юз берди'));
                          });

                        case 7:
                          _this11.$store.commit('setLoading', false);

                        case 8:
                          _this11.loadingButton.third = false;

                        case 9:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14);
                })));
                _this11.loadingButton.third = false;
                return _context18.abrupt("break", 27);

              case 16:
                _this11.loadingButton.four = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee16() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee16$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          _this11.$store.commit('setLoading', true);

                          _context16.next = 3;
                          return axios.post('/api/v1/statservice/' + _this11.$route.params.id, {
                            pin: _this.$auth.user().pin,
                            tin: _this.$auth.user().tin,
                            step: _this.stepper,
                            id: _this.application.id,
                            grafalar: _this.application.grafalar ? _this.application.grafalar : null
                          }).then( /*#__PURE__*/function () {
                            var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee15(res) {
                              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee15$(_context15) {
                                while (1) {
                                  switch (_context15.prev = _context15.next) {
                                    case 0:
                                      // _this.getStatServices();
                                      _this.completedSteps.push(_this.stepper);

                                      _context15.next = 3;
                                      return _this.getStatServices();

                                    case 3:
                                      _this.loadingButton.four = false;

                                      _this.$toast.success(_this.$t('Қўшимча маълумотлар сақланди'));

                                    case 5:
                                    case "end":
                                      return _context15.stop();
                                  }
                                }
                              }, _callee15);
                            }));

                            return function (_x3) {
                              return _ref7.apply(this, arguments);
                            };
                          }())["catch"](function (e) {
                            console.log(e);

                            _this.$toast.error(_this.$t('Қўшимча маълумотларни сақлашда хатолик юз берди'));
                          });

                        case 3:
                          _this11.$store.commit('setLoading', false);

                          _this11.loadingButton.four = false;

                        case 5:
                        case "end":
                          return _context16.stop();
                      }
                    }
                  }, _callee16);
                })));
                _this11.loadingButton.four = false;
                return _context18.abrupt("break", 27);

              case 20:
                _this11.loadingButton.five = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee17() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee17$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          _this11.$store.commit('setLoading', true);

                          _context17.next = 3;
                          return axios.post('/api/v1/statservice/' + _this11.$route.params.id, {
                            step: _this.stepper,
                            id: _this.application.id
                          }).then(function (res) {
                            // _this.getStatServices();
                            _this.$router.push('/services/stat/info/' + _this.application.id);

                            _this.loadingButton.five = false;

                            _this.$toast.success(_this.$t('Ариза юборилди'));
                          })["catch"](function (e) {
                            console.log(e);

                            _this.$toast.error(_this.$t('Аризани сақлашда хатолик юз берди'));
                          });

                        case 3:
                          _this.loadingButton.five = false;

                          _this11.$store.commit('setLoading', false);

                        case 5:
                        case "end":
                          return _context17.stop();
                      }
                    }
                  }, _callee17);
                })));
                _this.loadingButton.five = false;
                return _context18.abrupt("break", 27);

              case 24:
                _this11.completedSteps.push(_this11.stepper);

                _this11.stepper++;
                return _context18.abrupt("break", 27);

              case 27:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }))();
    },
    prevStep: function prevStep() {
      if (this.application.status === 2) return;

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
      if (this.application.status === 2) return;

      if (this.completedSteps.includes(step)) {
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
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee19() {
        var provider;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                provider = _this12.$refs[field];
                if (Array.isArray(provider)) provider = provider[0]; // Validate the field

                if (!provider) {
                  _context19.next = 6;
                  break;
                }

                _context19.next = 5;
                return provider.validate();

              case 5:
                return _context19.abrupt("return", _context19.sent);

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }))();
    },
    getBoshqarmalar: function getBoshqarmalar() {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee20() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _this = _this13;
                _context20.next = 3;
                return _this13.$auth.plugins.http.get('/api/v1/data/region').then(function (result) {
                  _this.list.regions = result.data;
                });

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }))();
    },
    initialize: function initialize() {
      this.getBoshqarmalar();
      this.setPersonData();
    },
    setPersonData: function setPersonData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.person.type = this.$auth.user().type !== 2 ? 1 : 0;

      if (data) {
        this.person.pin =
        /*(typeof data['pin'] !== 'undefined') ? data['pin'] : */
        this.$auth.user().pin;
        this.person.tin =
        /*(typeof data['tin'] !== 'undefined') ? data['tin'] : */
        this.$auth.user().tin;
        this.person.perAdr = typeof data['address'] !== 'undefined' && data['address'] ? data['address'] : this.$auth.user().per_adr;
        this.person.email = typeof data['email'] !== 'undefined' && data['email'] ? data['email'] : this.$auth.user().email;
        this.person.phone = typeof data['phone'] !== 'undefined' && data['phone'] ? data['phone'] : this.$auth.user().phone;
        /*if (typeof data['org_name'] !== 'undefined' ) {
          this.person.organization_name = data['org_name']
        } else*/

        {
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
    'application.application_type': {
      handler: function handler(value, oldValue) {
        if (value !== oldValue && value) {
          this.completedSteps = [1, 2];
        }
      },
      immediate: true,
      deep: true,
      sync: true
    },
    'application.region': {
      handler: function handler(value) {
        //console.log(value)
        if (typeof value !== 'undefined' && value) {
          // const region = value.substr(2, 2);
          //setTimeout(async () => {
          this.getPosts(value); // })
        }
      },
      immediate: true,
      deep: true,
      sync: true
    },
    'application.status': {
      handler: function handler(value) {
        var _this14 = this;

        if (typeof value !== 'undefined' && value) {
          // const region = value.substr(2, 2);
          //setTimeout(async () => {
          if (value === 2 && this.interval.length < 1) {
            var interval = setInterval(function () {
              _this14.getPrice();
            }, 5000);
            this.interval.push(interval);
          }

          if ([3, 8].includes(value) && this.interval.length > 0) {
            this.interval.forEach(function (intervalItem) {
              clearInterval(intervalItem);
            });
            this.interval = [];
          } // })

        }
      },
      immediate: true,
      deep: true,
      sync: true
    },
    'application.isRejim': {
      handler: function handler(value, oldValue) {
        if (value !== oldValue) {
          if (!value && this.application.application_type === 3) {
            this.application.isCreatedDate = false;
          }

          this.application.rejim = [];
        }
      },
      immediate: true,
      deep: true,
      sync: true
    },
    'stepper': {
      handler: function handler(value) {
        var _this15 = this;

        return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee21() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  if (!(typeof value !== 'undefined' && [3, 4, 5].includes(value))) {
                    _context21.next = 3;
                    break;
                  }

                  _context21.next = 3;
                  return _this15.getRegimes();

                case 3:
                  if (!(typeof value !== 'undefined' && [4, 5].includes(value))) {
                    _context21.next = 6;
                    break;
                  }

                  _context21.next = 6;
                  return _this15.getFields();

                case 6:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21);
        }))();
      },
      immediate: true,
      deep: true,
      sync: true
    }
  },
  created: function created() {
    var _this16 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee22() {
      var interval;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              _context22.next = 2;
              return _this16.getApplicationTarmoq();

            case 2:
              _context22.next = 4;
              return _this16.getStatServices();

            case 4:
              if (_this16.application.status === 2) {
                interval = setInterval(function () {
                  _this16.getPrice();
                }, 5000);

                _this16.interval.push(interval);
              }

              _context22.next = 7;
              return _this16.getCountries();

            case 7:
              _context22.next = 9;
              return _this16.getTariffs();

            case 9:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22);
    }))();
  },
  mounted: function mounted() {
    var _this17 = this;

    this.getRegimes();
    /*
    this.getFields();*/

    this.getApplicationTypes();
    setTimeout(function () {
      _this17.$store.commit('setLoading', true);
    });
    this.initialize();
    this.$store.commit('setLoading', false);
    this.getPrice();
  },
  beforeUnmount: function beforeUnmount() {
    this.interval.forEach(function (intervalItem) {
      clearInterval(intervalItem);
    });
  },
  computed: {
    maxDate: function maxDate() {
      if (![2, 3].includes(this.application.application_type)) {
        return new Date().toISOString().split('T')[0];
      }

      if (this.application.application_type === 3 && this.application.isRejim) return new Date().toISOString().split('T')[0];
      var now = new Date();
      var lastDay = new Date(now.getFullYear(), now.getMonth(), 1);
      return lastDay.toISOString().split("T")[0];
    },
    myAppComputed: function myAppComputed() {
      return this.application;
    },
    loadingComputed: function loadingComputed() {
      return this.loading;
    },
    completedData: function completedData() {
      var _this18 = this;

      var _this = this;

      return [{
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('ТИФ иштирокчиси'),
        value: this.application.org_name
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('СТИР'),
        value: this.person.tin
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Манзили'),
        value: this.person.perAdr
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Телефон рақами'),
        value: this.person.phone
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Электрон почта манзили'),
        value: this.person.email
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Хизмат тури'),
        value: this.application.application_type !== null && this.application_types[this.application.application_type] ? this.application_types[this.application.application_type].name : ''
      }, {
        label: this.application.application_type !== 0 ? this.$t('Илова хужжатлар тури') : this.$t('Қўшимча белгиланган графалар'),
        value: this.application.grafalar && this.application.grafalar.length > 0 ? this.additions.filter(function (fieldItem) {
          return _this18.application.grafalar.includes(fieldItem.code);
        }).map(function (grafaItem) {
          return grafaItem.name;
        }).join(', ') : null
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Ҳудудий божхона бошқармаси'),
        value: this.application.region && this.application.region.length > 0 ? this.list.regions.filter(function (item) {
          return _this18.application.region.includes(item.value);
        }).map(function (el) {
          return el.text;
        }).join(', ') : null
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Пост'),
        value: this.application.post && this.application.post.length > 0 ? this.list.posts.filter(function (item) {
          return _this18.application.post.includes(item.code);
        }).map(function (el) {
          return el.name;
        }).join(', ') : ''
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Тармоқ корхоналар'),
        value: this.application.org && this.application.org.length > 0 ? this.list.netOrgs.filter(function (item) {
          return _this18.application.org.includes(item.value);
        }).map(function (el) {
          return el.text;
        }).join(', ') : ''
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Божхона режими'),
        value: this.application.rejim && this.application.rejim.length > 0 ? this.list.regimes.filter(function (item) {
          return _this18.application.rejim.includes(item.id);
        }).map(function (el) {
          return el.name;
        }).join(', ') : ''
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('ТИФ ТН код'),
        value: this.application.tftn && this.application.tftn.length > 0 ? this.application.tftn.join(',') : null
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Шартноманинг ТСО ЯЭАТдаги идентификация рақами'),
        value: this.application.shartnoma && this.application.shartnoma.length > 0 ? this.application.shartnoma.join(',') : null
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Давлат'),
        value: this.application.country !== null && this.findElementInlist(this.list.countries, this.application.country, 'value') ? this.findElementInlist(this.list.countries, this.application.country, 'value').title : ''
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('БЮДнинг тартиб рақами'),
        value: this.application.byud && this.application.byud.length > 0 ? this.application.byud.join(',') : null
      }, {
        label: this.application.application_type !== 2 && this.application.isCreatedDate ? this.$t('БЮД тақдим этилган санадан') : this.$t('БЮД расмийлаштирилган санадан'),
        value: this.application.sanadan
      }, {
        label: this.application.application_type !== 2 && this.application.isCreatedDate ? this.$t('БЮД тақдим этилган санагача') : this.$t('БЮД расмийлаштирилган санагача'),
        value: this.application.sanagacha
      }];
    },
    additions: function additions() {
      if (this.application.application_type === 0) return Object.values(this.list.fields);else return Object.values(this.list.fields);
    },
    primaryFields: function primaryFields() {
      return this.list.primaryFields;
    },
    app_type: function app_type() {
      return this.application.application_type;
    },
    listTarifs: function listTarifs() {
      return this.list.tarifs;
    },
    comp_rejimes: function comp_rejimes() {
      if (this.application.application_type === 2) return this.list.regimes;
      if (this.application.isRejim || [0, 1].includes(this.application.application_type)) return this.list.regimes.filter(function (item) {
        return item.type === 'umumiy';
      });
      return this.list.regimes.filter(function (item) {
        return item.type === 'tsa';
      });
    }
  },
  filters: {
    reverse: function reverse(array) {
      return array.slice().reverse();
    }
  },
  components: {
    EditableDate: _components_form_EditableDate__WEBPACK_IMPORTED_MODULE_5__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationObserver
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".price-block[data-v-19ce7ad4] {\n  padding: 30px;\n  border: 1px solid var(--mycolor);\n  margin-top: 25px;\n  border-radius: 10px;\n  min-height: 330px;\n}\n.price-block h4[data-v-19ce7ad4] {\n  color: var(--mycolor);\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n}\n.price-block h5[data-v-19ce7ad4] {\n  color: var(--mycolor);\n  font-size: 14px;\n  margin: 10px 5px;\n}\n.price-block p[data-v-19ce7ad4] {\n  font-size: 14px;\n  line-height: 24px;\n}\n.resultTable td[data-v-19ce7ad4] {\n  border: 1px solid #ccc;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".isCreatedDate label {\n  top: 3px !important;\n}\n.v-chip:not(.v-chip--no-color).primary-close button.v-chip__close {\n  color: #39ae69;\n}\n.section.customs-value-section .switch .v-label {\n  top: 2px;\n}\n.section.customs-value-section .v-label {\n  font-weight: bolder;\n  color: #565656 !important;\n  top: -5px;\n}\n.section.customs-value-section .v-label.v-label--active {\n  font-size: 20px;\n}\n.additionalfields .v-expansion-panel-content__wrap {\n  max-height: 15rem;\n  min-height: 15rem;\n  overflow: scroll;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_19ce7ad4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_19ce7ad4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_19ce7ad4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=1&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=1&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=1&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/views/frontend/services/stat/create.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/create.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_19ce7ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=19ce7ad4&scoped=true& */ "./resources/js/views/frontend/services/stat/create.vue?vue&type=template&id=19ce7ad4&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/stat/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_id_19ce7ad4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss& */ "./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss&");
/* harmony import */ var _create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_19ce7ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_19ce7ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "19ce7ad4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/stat/create.vue"
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

/***/ "./resources/js/views/frontend/services/stat/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_19ce7ad4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=0&id=19ce7ad4&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=1&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=1&lang=scss& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=style&index=1&lang=scss&");


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

/***/ "./resources/js/views/frontend/services/stat/create.vue?vue&type=template&id=19ce7ad4&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/create.vue?vue&type=template&id=19ce7ad4&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_19ce7ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_19ce7ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_19ce7ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=19ce7ad4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=template&id=19ce7ad4&scoped=true&");


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
                          locale: _vm.$i18n.locale === "en" ? "en-US" : "ru-RU",
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
                            return _vm.save(_vm.datepicker)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=template&id=19ce7ad4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/create.vue?vue&type=template&id=19ce7ad4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
                        "\n              " +
                          _vm._s(
                            _vm.$t(
                              "Экспорт ва импорт бўйича маълумотларни олиш"
                            )
                          ) +
                          "\n            "
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
                          "\n              " +
                            _vm._s(_vm.$t("Аризачи маълумотлари")) +
                            "\n            "
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
                          "\n              " +
                            _vm._s(_vm.$t("Хизмат тури")) +
                            "\n            "
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
                          "\n              " +
                            _vm._s(_vm.$t("Асосий маълумотлар")) +
                            "\n            "
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
                          "\n              " +
                            _vm._s(_vm.$t("Қўшимча маълумотлар")) +
                            "\n            "
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
                          "\n              " +
                            _vm._s(_vm.$t("Якуний")) +
                            "\n            "
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
                                      " " +
                                        _vm._s(
                                          _vm.$t(
                                            "Ариза тўлдириш бўйича йўриқмани юклаб олинг"
                                          )
                                        ) +
                                        "!\n                "
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
                                          _vm.person.type === 0
                                            ? _c(
                                                "v-col",
                                                { attrs: { cols: "6" } },
                                                [
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: _vm.$t(
                                                        "ТИФ иштирокчиси номи"
                                                      ),
                                                      rules: "required",
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function (ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    counter: 200,
                                                                    label:
                                                                      _vm.$t(
                                                                        "Ташкилот номи"
                                                                      ),
                                                                    required:
                                                                      "",
                                                                    disabled:
                                                                      "",
                                                                    "persistent-placeholder":
                                                                      "",
                                                                    "error-messages":
                                                                      errors[0],
                                                                  },
                                                                  scopedSlots:
                                                                    _vm._u(
                                                                      [
                                                                        {
                                                                          key: "label",
                                                                          fn: function () {
                                                                            return [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm
                                                                                    .person
                                                                                    .type ===
                                                                                    0
                                                                                    ? "Ташкилот номи"
                                                                                    : "Жисмоний шахс Ф.И.О"
                                                                                ) +
                                                                                  "\n                            "
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
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.person,
                                                                          "organization_name",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "person.organization_name",
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
                                              )
                                            : _c(
                                                "v-col",
                                                { attrs: { cols: "6" } },
                                                [
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: _vm.$t(
                                                        "ТИФ иштирокчиси номи"
                                                      ),
                                                      rules: "required",
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function (ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    counter: 200,
                                                                    label:
                                                                      _vm.person
                                                                        .type ===
                                                                      0
                                                                        ? _vm.$t(
                                                                            "Ташкилот номи"
                                                                          )
                                                                        : _vm.$t(
                                                                            "Жисмоний шахс Ф.И.О"
                                                                          ),
                                                                    required:
                                                                      "",
                                                                    disabled:
                                                                      "",
                                                                    "persistent-placeholder":
                                                                      "",
                                                                    "error-messages":
                                                                      errors[0],
                                                                  },
                                                                  scopedSlots:
                                                                    _vm._u(
                                                                      [
                                                                        {
                                                                          key: "label",
                                                                          fn: function () {
                                                                            return [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm
                                                                                    .person
                                                                                    .type ===
                                                                                    0
                                                                                    ? _vm.$t(
                                                                                        "Ташкилот номи"
                                                                                      )
                                                                                    : _vm.$t(
                                                                                        "Жисмоний шахс Ф.И.О"
                                                                                      )
                                                                                ) +
                                                                                  "\n                            "
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
                                                                        .fio,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.person,
                                                                          "fio",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "person.fio",
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
                                          _vm.person.type === 0
                                            ? _c(
                                                "v-col",
                                                { attrs: { cols: "6" } },
                                                [
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: _vm.$t("СТИР"),
                                                      rules: "required",
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function (ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    counter: 9,
                                                                    label:
                                                                      _vm.$t(
                                                                        "СТИР"
                                                                      ),
                                                                    type: "number",
                                                                    required:
                                                                      "",
                                                                    disabled:
                                                                      "",
                                                                    hint: _vm.$t(
                                                                      "Солиқ тўловчининг идентификацион рақами"
                                                                    ),
                                                                    "persistent-hint":
                                                                      "",
                                                                    "error-messages":
                                                                      errors[0],
                                                                  },
                                                                  scopedSlots:
                                                                    _vm._u(
                                                                      [
                                                                        {
                                                                          key: "label",
                                                                          fn: function () {
                                                                            return [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm.$t(
                                                                                    "СТИР"
                                                                                  )
                                                                                ) +
                                                                                  " "
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
                                                                        .tin,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.person,
                                                                          "tin",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "person.tin",
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
                                              )
                                            : _c(
                                                "v-col",
                                                { attrs: { cols: "6" } },
                                                [
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: _vm.$t("ЖШШИР"),
                                                      rules: "required",
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function (ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    counter: 14,
                                                                    label:
                                                                      _vm.$t(
                                                                        "ЖШШИР"
                                                                      ),
                                                                    type: "number",
                                                                    required:
                                                                      "",
                                                                    disabled:
                                                                      "",
                                                                    hint: _vm.$t(
                                                                      "Жисмоний шахснинг шахсий идентификацион рақами"
                                                                    ),
                                                                    "persistent-hint":
                                                                      "",
                                                                    "error-messages":
                                                                      errors[0],
                                                                  },
                                                                  scopedSlots:
                                                                    _vm._u(
                                                                      [
                                                                        {
                                                                          key: "label",
                                                                          fn: function () {
                                                                            return [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm.$t(
                                                                                    "ЖШШИР"
                                                                                  )
                                                                                ) +
                                                                                  " "
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
                                                                        .pin,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.person,
                                                                          "pin",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "person.pin",
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
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t("Манзили"),
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
                                                                  ? _vm.$t(
                                                                      "Аризачининг манзили"
                                                                    )
                                                                  : _vm.$t(
                                                                      "Юридик шахснинг манзили"
                                                                    ),
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
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "Манзили"
                                                                          )
                                                                        ) + " "
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
                                                  name: _vm.$t(
                                                    "Телефон рақами"
                                                  ),
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
                                                                _vm.$t(
                                                                  "Телефон рақами"
                                                                ),
                                                              required: "",
                                                              hint: _vm.$t(
                                                                "Аризачининг телефон рақами"
                                                              ),
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
                                                  name: _vm.$t(
                                                    "Электрон почта"
                                                  ),
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
                                                              label: _vm.$t(
                                                                "Электрон почта манзили"
                                                              ),
                                                              required: "",
                                                              hint: _vm.$t(
                                                                "Аризачининг электрон почтаси"
                                                              ),
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
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "Электрон почта манзили"
                                                                          )
                                                                        ) + " "
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
                                          "\n                      " +
                                            _vm._s(_vm.$t("Орқага")) +
                                            "\n                    "
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
                                          "\n                      " +
                                            _vm._s(_vm.$t("Давом этиш")) +
                                            "\n                    "
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
                                      " - " +
                                        _vm._s(
                                          _vm.$t(
                                            "майдонлари албатта тўлдирилиши шарт"
                                          )
                                        ) +
                                        "!\n                  "
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
                                "\n                  " +
                                  _vm._s(_vm.$t("Хизмат турини танланг"))
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
                                                _vm.application
                                                  .application_type,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.application,
                                                  "application_type",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "application.application_type",
                                            },
                                          },
                                          _vm._l(
                                            _vm.application_types,
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
                                                    _vm.list.netOrgs.length <
                                                      1 &&
                                                    serviceItem.code === "4",
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
                                                                    "\n                                " +
                                                                      _vm._s(
                                                                        serviceItem.name
                                                                      ) +
                                                                      "\n                              "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              serviceItem.code ===
                                                              "4"
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
                                                                        "\n                                " +
                                                                          _vm._s(
                                                                            _vm.$t(
                                                                              "Фақат хўжалик бошқаруви органлари учун"
                                                                            )
                                                                          ) +
                                                                          "\n                              "
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
                                  _vm.list.tarifs && _vm.list.tarifs[1]
                                    ? _c(
                                        "div",
                                        { staticClass: "price-block" },
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
                                          _vm.myAppComputed.application_type ===
                                          0
                                            ? [
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
                                                        _vm.list.tarifs[1][0]
                                                          .name
                                                      ) +
                                                      " - " +
                                                      _vm._s(
                                                        _vm.$t("БҲМ {value}%", {
                                                          value:
                                                            _vm.list
                                                              .tarifs[1][0]
                                                              .value,
                                                        })
                                                      ) +
                                                      ";"
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("p", [
                                                  _vm._v(
                                                    "- " +
                                                      _vm._s(
                                                        _vm.list.tarifs[2][0]
                                                          .name
                                                      ) +
                                                      " - " +
                                                      _vm._s(
                                                        _vm.$t("БҲМ {value}%", {
                                                          value:
                                                            _vm.list
                                                              .tarifs[2][0]
                                                              .value,
                                                        })
                                                      )
                                                  ),
                                                ]),
                                              ]
                                            : _vm._e(),
                                          _vm._v(" "),
                                          [1, 3].includes(
                                            _vm.myAppComputed.application_type
                                          )
                                            ? [
                                                _c(
                                                  "v-row",
                                                  [
                                                    _c(
                                                      "v-col",
                                                      { attrs: { cols: "6" } },
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                      { attrs: { cols: "6" } },
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
                                                                      _vm.list
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
                                              ]
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.myAppComputed.application_type ===
                                          2
                                            ? [
                                                _c(
                                                  "v-row",
                                                  [
                                                    _c(
                                                      "v-col",
                                                      { attrs: { cols: "6" } },
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                      { attrs: { cols: "6" } },
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                                                      _vm.list
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
                                              ]
                                            : _vm._e(),
                                        ],
                                        2
                                      )
                                    : _vm._e(),
                                ]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              {
                                staticClass:
                                  "row mb-3 position-absolute bottom-2 start-0",
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "ml-10 font-weight-bold ",
                                    attrs: {
                                      href: "https://t.me/eximcustomsproducts",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "Савол ва таклифлар учун телеграм гуруҳга ёзинг"
                                        )
                                      )
                                    ),
                                  ]
                                ),
                              ]
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
                                          "\n                      " +
                                            _vm._s(_vm.$t("Орқага")) +
                                            "\n                    "
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
                                          "\n                      " +
                                            _vm._s(_vm.$t("Давом этиш")) +
                                            "\n                    "
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
                                                      .application_type !== 2,
                                                  expression:
                                                    "application.application_type!==2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t("Ҳудуд"),
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
                                                              label: _vm.$t(
                                                                "Ҳудудий божхона бошқармаси"
                                                              ),
                                                              required: "",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Барча ҳудудий бошқармалар"
                                                                ),
                                                              hint:
                                                                _vm.application
                                                                  .region &&
                                                                _vm.application
                                                                  .region
                                                                  .count > 0
                                                                  ? _vm.$t(
                                                                      "Танланган ҳудудий бошқармалар"
                                                                    )
                                                                  : _vm.$t(
                                                                      "Барча ҳудудий бошқармалар"
                                                                    ),
                                                              items:
                                                                _vm.list
                                                                  .regions,
                                                              "item-text":
                                                                function (
                                                                  item
                                                                ) {
                                                                  return (
                                                                    item.value +
                                                                    "-" +
                                                                    item.text
                                                                  )
                                                                },
                                                              "persistent-placeholder":
                                                                "",
                                                              multiple: "",
                                                              clearable: "",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "selection",
                                                                  fn: function (
                                                                    data
                                                                  ) {
                                                                    return [
                                                                      _c(
                                                                        "v-chip",
                                                                        _vm._b(
                                                                          {
                                                                            staticClass:
                                                                              "primary-close",
                                                                            staticStyle:
                                                                              {
                                                                                "font-size":
                                                                                  "14px",
                                                                              },
                                                                            attrs:
                                                                              {
                                                                                "input-value":
                                                                                  data.selected,
                                                                                close:
                                                                                  "",
                                                                                color:
                                                                                  "#e7f5ed",
                                                                              },
                                                                            on: {
                                                                              click:
                                                                                data.select,
                                                                              "click:close":
                                                                                function (
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.removeItem(
                                                                                    "region",
                                                                                    data
                                                                                      .item
                                                                                      .value
                                                                                  )
                                                                                },
                                                                            },
                                                                          },
                                                                          "v-chip",
                                                                          data.attrs,
                                                                          false
                                                                        ),
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticStyle:
                                                                                {
                                                                                  "font-size":
                                                                                    "14px",
                                                                                },
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  data
                                                                                    .item
                                                                                    .text
                                                                                )
                                                                              ),
                                                                            ]
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
                                                      .application_type !== 2,
                                                  expression:
                                                    "application.application_type!==2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: { name: _vm.$t("Пост") },
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
                                                              hint: _vm.$t(
                                                                "Божхона постини танланг"
                                                              ),
                                                              items:
                                                                _vm.list.posts,
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Барча божхона постлари"
                                                                ),
                                                              "item-text":
                                                                function (
                                                                  item
                                                                ) {
                                                                  return (
                                                                    item.code +
                                                                    "-" +
                                                                    item.name
                                                                  )
                                                                },
                                                              "item-value":
                                                                "code",
                                                              "persistent-placeholder":
                                                                "",
                                                              multiple: "",
                                                              label: _vm.$t(
                                                                "Божхона постини танланг"
                                                              ),
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "selection",
                                                                  fn: function (
                                                                    data
                                                                  ) {
                                                                    return [
                                                                      _c(
                                                                        "v-chip",
                                                                        _vm._b(
                                                                          {
                                                                            staticClass:
                                                                              "primary-close",
                                                                            staticStyle:
                                                                              {
                                                                                "font-size":
                                                                                  "14px",
                                                                              },
                                                                            attrs:
                                                                              {
                                                                                "input-value":
                                                                                  data.selected,
                                                                                close:
                                                                                  "",
                                                                                color:
                                                                                  "#e7f5ed",
                                                                              },
                                                                            on: {
                                                                              click:
                                                                                data.select,
                                                                              "click:close":
                                                                                function (
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.removeItem(
                                                                                    "post",
                                                                                    data
                                                                                      .item
                                                                                      .code
                                                                                  )
                                                                                },
                                                                            },
                                                                          },
                                                                          "v-chip",
                                                                          data.attrs,
                                                                          false
                                                                        ),
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticStyle:
                                                                                {
                                                                                  "font-size":
                                                                                    "14px",
                                                                                },
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  data
                                                                                    .item
                                                                                    .name
                                                                                )
                                                                              ),
                                                                            ]
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
                                              _vm.application.application_type >
                                              2
                                                ? _c(
                                                    "v-radio-group",
                                                    {
                                                      staticClass:
                                                        "isCreatedDate",
                                                      attrs: {
                                                        row: "",
                                                        mandatory: "",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.application
                                                            .isRejim,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.application,
                                                            "isRejim",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "application.isRejim",
                                                      },
                                                    },
                                                    [
                                                      _c("v-radio", {
                                                        attrs: {
                                                          label: _vm.$t(
                                                            "Ташқи савдо айланмаси бўйича"
                                                          ),
                                                          value: false,
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c("v-radio", {
                                                        attrs: {
                                                          label: _vm.$t(
                                                            "Божхона режимлари бўйича"
                                                          ),
                                                          value: true,
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Божхона режими"
                                                  ),
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
                                                              loading:
                                                                _vm.loading
                                                                  .regime,
                                                              required: "",
                                                              hint: _vm.$t(
                                                                "Божхона режимини танланг"
                                                              ),
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Барча божхона режимлари"
                                                                ),
                                                              items:
                                                                _vm.comp_rejimes,
                                                              "persistent-placeholder":
                                                                "",
                                                              "item-text":
                                                                function (
                                                                  item
                                                                ) {
                                                                  return (
                                                                    item.code1 +
                                                                    item.code2 +
                                                                    "-" +
                                                                    item.name
                                                                  )
                                                                },
                                                              "item-value":
                                                                "id",
                                                              multiple: "",
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "selection",
                                                                  fn: function (
                                                                    data
                                                                  ) {
                                                                    return [
                                                                      _c(
                                                                        "v-chip",
                                                                        _vm._b(
                                                                          {
                                                                            staticClass:
                                                                              "primary-close",
                                                                            staticStyle:
                                                                              {
                                                                                "font-size":
                                                                                  "14px",
                                                                              },
                                                                            attrs:
                                                                              {
                                                                                "input-value":
                                                                                  data.selected,
                                                                                close:
                                                                                  "",
                                                                                color:
                                                                                  "#e7f5ed",
                                                                              },
                                                                            on: {
                                                                              click:
                                                                                data.select,
                                                                              "click:close":
                                                                                function (
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.removeItem(
                                                                                    "rejim",
                                                                                    data
                                                                                      .item
                                                                                      .id
                                                                                  )
                                                                                },
                                                                            },
                                                                          },
                                                                          "v-chip",
                                                                          data.attrs,
                                                                          false
                                                                        ),
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticStyle:
                                                                                {
                                                                                  "font-size":
                                                                                    "14px",
                                                                                },
                                                                            },
                                                                            [
                                                                              _vm
                                                                                .application
                                                                                .application_type ===
                                                                                2 ||
                                                                              (_vm
                                                                                .application
                                                                                .application_type ===
                                                                                3 &&
                                                                                !_vm
                                                                                  .application
                                                                                  .isRejim)
                                                                                ? [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        data
                                                                                          .item
                                                                                          .code1
                                                                                      )
                                                                                    ),
                                                                                  ]
                                                                                : [
                                                                                    _vm._v(
                                                                                      "\n                                  " +
                                                                                        _vm._s(
                                                                                          data
                                                                                            .item
                                                                                            .code1
                                                                                        ) +
                                                                                        "-" +
                                                                                        _vm._s(
                                                                                          data
                                                                                            .item
                                                                                            .code2
                                                                                        ) +
                                                                                        "\n                              "
                                                                                    ),
                                                                                  ],
                                                                            ],
                                                                            2
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  },
                                                                },
                                                                {
                                                                  key: "label",
                                                                  fn: function () {
                                                                    return [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "Божхона режими"
                                                                          )
                                                                        )
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
                                                staticClass:
                                                  "d-flex align-items-center",
                                                staticStyle: {
                                                  "padding-top": "7px",
                                                },
                                                attrs: {
                                                  name: _vm.$t("ТИФ ТН код"),
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
                                                                  "##########",
                                                                expression:
                                                                  "'##########'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "mr-10",
                                                            attrs: {
                                                              "persistent-placeholder":
                                                                "",
                                                              label:
                                                                _vm.$t(
                                                                  "ТИФ ТН код"
                                                                ) +
                                                                (_vm.application
                                                                  .application_type ===
                                                                2
                                                                  ? "*"
                                                                  : ""),
                                                              placeholder:
                                                                (_vm.application
                                                                  .tftn &&
                                                                  _vm
                                                                    .application
                                                                    .tftn
                                                                    .length >
                                                                    0) ||
                                                                _vm.application
                                                                  .application_type ===
                                                                  2
                                                                  ? ""
                                                                  : _vm.$t(
                                                                      "Барча товарлар"
                                                                    ),
                                                              "error-messages":
                                                                errors[0],
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.temp.tftn,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.temp,
                                                                    "tftn",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "temp.tftn",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                small: "",
                                                                color:
                                                                  "primary",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    _vm.addData(
                                                                      "tftn",
                                                                      _vm
                                                                        .application
                                                                        .application_type ===
                                                                        2
                                                                        ? 4
                                                                        : 2
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-plus"
                                                                ),
                                                              ]),
                                                              _vm._v(
                                                                "\n                          " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "Қўшиш"
                                                                    )
                                                                  ) +
                                                                  "\n                        "
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
                                              }),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                staticStyle: {
                                                  "margin-bottom": "-20px",
                                                },
                                                attrs: {
                                                  name: _vm.$t("ТИФ ТН код"),
                                                  rules:
                                                    _vm.application
                                                      .application_type === 2
                                                      ? "required"
                                                      : "",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("v-text-field", {
                                                            staticClass:
                                                              "d-none",
                                                            attrs: {
                                                              type: "hidden",
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
                                                          _vm._v(" "),
                                                          _vm.application
                                                            .application_type ===
                                                          2
                                                            ? _c(
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
                                                              )
                                                            : _vm._e(),
                                                        ]
                                                      },
                                                    },
                                                  ],
                                                  null,
                                                  true
                                                ),
                                              }),
                                              _vm._v(" "),
                                              _vm.application.tftn
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "selected-chips-content w-100",
                                                    },
                                                    _vm._l(
                                                      _vm.application.tftn,
                                                      function (
                                                        appItem,
                                                        appItemKey
                                                      ) {
                                                        return _c(
                                                          "v-chip",
                                                          {
                                                            key: appItemKey,
                                                            staticClass:
                                                              "primary-close",
                                                            staticStyle: {
                                                              "font-size":
                                                                "14px",
                                                              margin: "2px 5px",
                                                            },
                                                            attrs: {
                                                              close: "",
                                                              color: "#e7f5ed",
                                                            },
                                                            on: {
                                                              "click:close":
                                                                function (
                                                                  $event
                                                                ) {
                                                                  return _vm.removeItem(
                                                                    "tftn",
                                                                    appItem
                                                                  )
                                                                },
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  "font-size":
                                                                    "14px",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    appItem
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  )
                                                : _vm._e(),
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
                                                      .application_type !== 2,
                                                  expression:
                                                    "application.application_type!==2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c("ValidationProvider", {
                                                staticClass:
                                                  "d-flex align-items-center",
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Шартноманинг ТСО ЯЭАТдаги идентификация рақами"
                                                  ),
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
                                                            staticClass:
                                                              "mr-10",
                                                            attrs: {
                                                              label: _vm.$t(
                                                                "Шартноманинг ТСО ЯЭАТдаги идентификация рақами"
                                                              ),
                                                              "error-messages":
                                                                errors[0],
                                                              placeholder:
                                                                _vm.application
                                                                  .shartnoma &&
                                                                _vm.application
                                                                  .shartnoma
                                                                  .length > 0
                                                                  ? ""
                                                                  : _vm.$t(
                                                                      "Барча шартномалар"
                                                                    ),
                                                              "persistent-placeholder":
                                                                "",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.temp
                                                                  .shartnoma,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.temp,
                                                                    "shartnoma",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "temp.shartnoma",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                small: "",
                                                                color:
                                                                  "primary",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.addData(
                                                                      "shartnoma",
                                                                      27
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-plus"
                                                                ),
                                                              ]),
                                                              _vm._v(
                                                                "\n                          " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "Қўшиш"
                                                                    )
                                                                  ) +
                                                                  "\n                        "
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
                                              }),
                                              _vm._v(" "),
                                              _vm.application.shartnoma
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "selected-chips-content w-100",
                                                    },
                                                    _vm._l(
                                                      _vm.application.shartnoma,
                                                      function (
                                                        appItem,
                                                        appItemKey
                                                      ) {
                                                        return _c(
                                                          "v-chip",
                                                          {
                                                            key:
                                                              "shartnoma" +
                                                              appItemKey,
                                                            staticClass:
                                                              "primary-close",
                                                            staticStyle: {
                                                              "font-size":
                                                                "14px",
                                                              margin: "2px 5px",
                                                            },
                                                            attrs: {
                                                              close: "",
                                                              color: "#e7f5ed",
                                                            },
                                                            on: {
                                                              "click:close":
                                                                function (
                                                                  $event
                                                                ) {
                                                                  return _vm.removeItem(
                                                                    "shartnoma",
                                                                    appItem
                                                                  )
                                                                },
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  "font-size":
                                                                    "14px",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    appItem
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  )
                                                : _vm._e(),
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
                                                  name: _vm.$t("Давлат"),
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
                                                                _vm.$t(
                                                                  "Давлат"
                                                                ),
                                                              loading:
                                                                _vm.loading
                                                                  .country,
                                                              required: "",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Барча давлатлар"
                                                                ),
                                                              "item-text":
                                                                function (
                                                                  item
                                                                ) {
                                                                  return (
                                                                    item.CODE +
                                                                    " - " +
                                                                    item.CD_NM
                                                                  )
                                                                },
                                                              "item-value":
                                                                "CODE",
                                                              items:
                                                                _vm.list
                                                                  .countries,
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors[0],
                                                              multiple: "",
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "selection",
                                                                  fn: function (
                                                                    data
                                                                  ) {
                                                                    return [
                                                                      _c(
                                                                        "v-chip",
                                                                        _vm._b(
                                                                          {
                                                                            staticClass:
                                                                              "primary-close",
                                                                            staticStyle:
                                                                              {
                                                                                "font-size":
                                                                                  "14px",
                                                                              },
                                                                            attrs:
                                                                              {
                                                                                "input-value":
                                                                                  data.selected,
                                                                                close:
                                                                                  "",
                                                                                color:
                                                                                  "#e7f5ed",
                                                                              },
                                                                            on: {
                                                                              click:
                                                                                data.select,
                                                                              "click:close":
                                                                                function (
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.removeItem(
                                                                                    "country",
                                                                                    data
                                                                                      .item
                                                                                      .CODE
                                                                                  )
                                                                                },
                                                                            },
                                                                          },
                                                                          "v-chip",
                                                                          data.attrs,
                                                                          false
                                                                        ),
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticStyle:
                                                                                {
                                                                                  "font-size":
                                                                                    "14px",
                                                                                },
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  data
                                                                                    .item
                                                                                    .CODE
                                                                                ) +
                                                                                  "-" +
                                                                                  _vm._s(
                                                                                    data
                                                                                      .item
                                                                                      .CD_NM
                                                                                  )
                                                                              ),
                                                                            ]
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
                                          _vm.application.application_type === 3
                                            ? _c(
                                                "v-col",
                                                { attrs: { cols: "6" } },
                                                [
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name: _vm.$t(
                                                        "Тармоқ таркибидаги ташкилотлар"
                                                      ),
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function (ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c(
                                                                "v-autocomplete",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      _vm.$t(
                                                                        "Тармоқ таркибидаги ташкилотлар"
                                                                      ),
                                                                    loading:
                                                                      _vm
                                                                        .loading
                                                                        .org,
                                                                    multiple:
                                                                      "",
                                                                    required:
                                                                      "",
                                                                    placeholder:
                                                                      _vm.$t(
                                                                        "Барча ташкилотлар"
                                                                      ),
                                                                    items:
                                                                      _vm.list
                                                                        .netOrgs,
                                                                    "persistent-placeholder":
                                                                      "",
                                                                    "error-messages":
                                                                      errors[0],
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .application
                                                                        .org,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.application,
                                                                          "org",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "application.org",
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
                                              )
                                            : _vm._e(),
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
                                                      .application_type !== 2,
                                                  expression:
                                                    "application.application_type!==2",
                                                },
                                              ],
                                              attrs: { cols: "6" },
                                            },
                                            [
                                              _c("ValidationProvider", {
                                                staticClass:
                                                  "d-flex align-items-center",
                                                attrs: {
                                                  name: _vm.$t(
                                                    "БЮДнинг тартиб рақами"
                                                  ),
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
                                                            staticClass:
                                                              "mr-10",
                                                            attrs: {
                                                              "error-messages":
                                                                errors[0],
                                                              "persistent-placeholder":
                                                                "",
                                                              placeholder:
                                                                _vm.application
                                                                  .byud &&
                                                                _vm.application
                                                                  .byud.length >
                                                                  0
                                                                  ? ""
                                                                  : _vm.$t(
                                                                      "Барча БЮДлар"
                                                                    ),
                                                              label: _vm.$t(
                                                                "БЮДнинг тартиб рақами"
                                                              ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.temp.byud,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.temp,
                                                                    "byud",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "temp.byud",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                small: "",
                                                                color:
                                                                  "primary",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.addData(
                                                                      "byud",
                                                                      24
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-plus"
                                                                ),
                                                              ]),
                                                              _vm._v(
                                                                "\n                          " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "Қўшиш"
                                                                    )
                                                                  ) +
                                                                  "\n                        "
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
                                              }),
                                              _vm._v(" "),
                                              _vm.application.byud
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "selected-chips-content w-100",
                                                    },
                                                    _vm._l(
                                                      _vm.application.byud,
                                                      function (
                                                        appItem,
                                                        appItemKey
                                                      ) {
                                                        return _c(
                                                          "v-chip",
                                                          {
                                                            key:
                                                              "byud" +
                                                              appItemKey,
                                                            staticClass:
                                                              "primary-close",
                                                            staticStyle: {
                                                              "font-size":
                                                                "14px",
                                                              margin: "2px 5px",
                                                            },
                                                            attrs: {
                                                              close: "",
                                                              color: "#e7f5ed",
                                                            },
                                                            on: {
                                                              "click:close":
                                                                function (
                                                                  $event
                                                                ) {
                                                                  return _vm.removeItem(
                                                                    "byud",
                                                                    appItem
                                                                  )
                                                                },
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  "font-size":
                                                                    "14px",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    appItem
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    1
                                                  )
                                                : _vm._e(),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _vm.application
                                                    .application_type !== 2
                                                    ? _c(
                                                        "v-radio-group",
                                                        {
                                                          staticClass:
                                                            "isCreatedDate",
                                                          attrs: { row: "" },
                                                          model: {
                                                            value:
                                                              _vm.application
                                                                .isCreatedDate,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.application,
                                                                "isCreatedDate",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "application.isCreatedDate",
                                                          },
                                                        },
                                                        [
                                                          _c("v-radio", {
                                                            attrs: {
                                                              label: _vm.$t(
                                                                "БЮД тақдим этилган сана"
                                                              ),
                                                              value: true,
                                                              disabled:
                                                                _vm.application
                                                                  .application_type ===
                                                                  3 &&
                                                                !_vm.application
                                                                  .isRejim,
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c("v-radio", {
                                                            attrs: {
                                                              label: _vm.$t(
                                                                "БЮД расмийлаштирилган сана"
                                                              ),
                                                              value: false,
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticStyle: {
                                                        "margin-top": "-15px",
                                                        "margin-bottom":
                                                          "-30px",
                                                      },
                                                      attrs: { cols: "12" },
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticStyle: {
                                                            "font-weight":
                                                              "bold",
                                                            color: "#565656",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.application
                                                                .application_type !==
                                                                2
                                                                ? _vm.$t("Сана")
                                                                : _vm.$t(
                                                                    "БЮД расмийлаштирилган сана"
                                                                  )
                                                            ) + "*"
                                                          ),
                                                        ]
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
                                                          name: _vm.$t(
                                                            "Cанадан"
                                                          ),
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
                                                                          _vm.$t(
                                                                            "дан"
                                                                          ),
                                                                        min: _vm.threeYearsAgo,
                                                                        max: _vm.maxDate,
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
                                                          name: _vm.$t(
                                                            "Cанагача"
                                                          ),
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
                                                                          _vm.$t(
                                                                            "гача"
                                                                          ),
                                                                        min: _vm.threeYearsAgo,
                                                                        max: _vm.maxDate,
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
                                          "\n                      " +
                                            _vm._s(_vm.$t("Орқага")) +
                                            "\n                    "
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
                                          "\n                      " +
                                            _vm._s(_vm.$t("Давом этиш")) +
                                            "\n                    "
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
                                      " - " +
                                        _vm._s(
                                          _vm.$t(
                                            "майдонлари албатта тўлдирилиши шарт"
                                          )
                                        ) +
                                        "!\n                  "
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
                                _c(
                                  "h5",
                                  { staticClass: "mb-6" },
                                  [
                                    _vm.app_type === 0
                                      ? [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(
                                                _vm.$t(
                                                  "Қўшимча қайси илова ҳужжатларидан нусха олишни хохлайсиз?"
                                                )
                                              ) +
                                              "\n                    "
                                          ),
                                        ]
                                      : [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "Қўшимча қайси графаларни юклаб олишни хохлайсиз?"
                                              )
                                            ) + " "
                                          ),
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                color: "var(--mycolor)",
                                                cursor: "pointer",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  _vm.dialog.primaryFields = true
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "Асосий графаларни кўриш"
                                                  )
                                                )
                                              ),
                                            ]
                                          ),
                                        ],
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: { "max-width": "900" },
                                    model: {
                                      value: _vm.dialog.primaryFields,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.dialog,
                                          "primaryFields",
                                          $$v
                                        )
                                      },
                                      expression: "dialog.primaryFields",
                                    },
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c(
                                          "v-toolbar",
                                          {
                                            staticClass:
                                              "text-center white--text ",
                                            attrs: {
                                              color: "primary",
                                              dark: "",
                                            },
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-between w-100 align-items-center",
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  { staticClass: "text-h5" },
                                                  [
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          _vm.$t(
                                                            "Асосий графалар"
                                                          )
                                                        ) +
                                                        "\n                                    "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      icon: "",
                                                      dark: "",
                                                    },
                                                    on: {
                                                      click: function ($event) {
                                                        _vm.dialog.primaryFields = false
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v("mdi-close"),
                                                    ]),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list",
                                          {
                                            staticClass: "pa-4",
                                            attrs: { flat: "" },
                                          },
                                          [
                                            _c(
                                              "v-list-item-group",
                                              {
                                                staticClass: "d-flex flex-wrap",
                                              },
                                              _vm._l(
                                                _vm.primaryFields,
                                                function (
                                                  additionField,
                                                  additionFieldKey
                                                ) {
                                                  return _c("v-list-item", {
                                                    key:
                                                      "asdadasda" +
                                                      additionFieldKey,
                                                    staticStyle: {
                                                      "flex-basis": "50%",
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function (ref) {
                                                            var active =
                                                              ref.active
                                                            return [
                                                              _c(
                                                                "v-list-item-content",
                                                                {
                                                                  staticClass:
                                                                    "p-0",
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-list-item-title",
                                                                    {
                                                                      staticClass:
                                                                        "text-wrap",
                                                                      staticStyle:
                                                                        {
                                                                          "line-height":
                                                                            "22px",
                                                                          "font-size":
                                                                            "16px",
                                                                        },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                  " +
                                                                          _vm._s(
                                                                            additionFieldKey +
                                                                              1
                                                                          ) +
                                                                          ". " +
                                                                          _vm._s(
                                                                            additionField.name
                                                                          ) +
                                                                          "\n                                "
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
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.additions && _vm.application.grafalar
                                  ? _c(
                                      "v-list",
                                      {
                                        staticClass: "pa-4",
                                        attrs: { flat: "" },
                                      },
                                      [
                                        _c(
                                          "v-list-item-group",
                                          {
                                            staticClass: "d-flex flex-wrap",
                                            attrs: { multiple: "" },
                                            model: {
                                              value: _vm.application.grafalar,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.application,
                                                  "grafalar",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "application.grafalar",
                                            },
                                          },
                                          [
                                            _vm.app_type === 0
                                              ? _c(
                                                  "v-expansion-panels",
                                                  {
                                                    staticClass:
                                                      "additionalfields",
                                                    attrs: { multiple: "" },
                                                  },
                                                  _vm._l(
                                                    _vm.additions,
                                                    function (
                                                      additionItem,
                                                      additionItemKey
                                                    ) {
                                                      return _c(
                                                        "v-col",
                                                        {
                                                          key: additionItemKey,
                                                          attrs: { cols: "6" },
                                                        },
                                                        [
                                                          additionItem[0]
                                                            ? _c(
                                                                "v-expansion-panel",
                                                                [
                                                                  _c(
                                                                    "v-expansion-panel-header",
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          additionItem[0]
                                                                            .group_name
                                                                        )
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-expansion-panel-content",
                                                                    _vm._l(
                                                                      additionItem,
                                                                      function (
                                                                        additionField,
                                                                        additionFieldKey
                                                                      ) {
                                                                        return _c(
                                                                          "v-list-item",
                                                                          {
                                                                            staticStyle:
                                                                              {
                                                                                "flex-basis":
                                                                                  "50%",
                                                                              },
                                                                            attrs:
                                                                              {
                                                                                value:
                                                                                  additionField.code,
                                                                              },
                                                                            scopedSlots:
                                                                              _vm._u(
                                                                                [
                                                                                  {
                                                                                    key: "default",
                                                                                    fn: function (
                                                                                      ref
                                                                                    ) {
                                                                                      var active =
                                                                                        ref.active
                                                                                      return [
                                                                                        _c(
                                                                                          "v-list-item-action",
                                                                                          {
                                                                                            staticClass:
                                                                                              "my-0",
                                                                                          },
                                                                                          [
                                                                                            _c(
                                                                                              "v-checkbox",
                                                                                              {
                                                                                                attrs:
                                                                                                  {
                                                                                                    "input-value":
                                                                                                      active,
                                                                                                  },
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                          1
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        _c(
                                                                                          "v-list-item-content",
                                                                                          {
                                                                                            staticClass:
                                                                                              "p-0",
                                                                                          },
                                                                                          [
                                                                                            _c(
                                                                                              "v-list-item-title",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "text-wrap",
                                                                                                staticStyle:
                                                                                                  {
                                                                                                    "line-height":
                                                                                                      "22px",
                                                                                                    "font-size":
                                                                                                      "16px",
                                                                                                  },
                                                                                              },
                                                                                              [
                                                                                                _vm._v(
                                                                                                  "\n                                      " +
                                                                                                    _vm._s(
                                                                                                      additionField.code
                                                                                                    ) +
                                                                                                    " -\n                                      " +
                                                                                                    _vm._s(
                                                                                                      additionField.name
                                                                                                    ) +
                                                                                                    "\n                                    "
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
                                                                          }
                                                                        )
                                                                      }
                                                                    ),
                                                                    1
                                                                  ),
                                                                ],
                                                                1
                                                              )
                                                            : _vm._e(),
                                                        ],
                                                        1
                                                      )
                                                    }
                                                  ),
                                                  1
                                                )
                                              : _vm._l(
                                                  _vm.additions,
                                                  function (
                                                    additionField,
                                                    additionFieldKey
                                                  ) {
                                                    return _c("v-list-item", {
                                                      key:
                                                        "asdad" +
                                                        additionFieldKey,
                                                      staticStyle: {
                                                        "flex-basis": "50%",
                                                      },
                                                      attrs: {
                                                        value:
                                                          additionField.code,
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function (ref) {
                                                              var active =
                                                                ref.active
                                                              return [
                                                                _c(
                                                                  "v-list-item-action",
                                                                  {
                                                                    staticClass:
                                                                      "my-0",
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-checkbox",
                                                                      {
                                                                        attrs: {
                                                                          "input-value":
                                                                            active,
                                                                        },
                                                                      }
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-list-item-content",
                                                                  {
                                                                    staticClass:
                                                                      "p-0",
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      {
                                                                        staticClass:
                                                                          "text-wrap",
                                                                        staticStyle:
                                                                          {
                                                                            "line-height":
                                                                              "22px",
                                                                            "font-size":
                                                                              "16px",
                                                                          },
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                              " +
                                                                            _vm._s(
                                                                              additionField.name
                                                                            ) +
                                                                            "\n                            "
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
                                          ],
                                          2
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
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
                                          "\n                      " +
                                            _vm._s(_vm.$t("Орқага")) +
                                            "\n                    "
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
                                          "\n                      " +
                                            _vm._s(_vm.$t("Давом этиш")) +
                                            "\n                    "
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
                                _vm.completedData
                                  ? _c("v-simple-table", {
                                      staticClass: "pa-15 resultTable",
                                      scopedSlots: _vm._u(
                                        [
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
                                                                    _vm._s(
                                                                      item.label
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    width:
                                                                      "80%",
                                                                  },
                                                                },
                                                                [
                                                                  item.value
                                                                    ? [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            item.value
                                                                          )
                                                                        ),
                                                                      ]
                                                                    : [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            _vm.$t(
                                                                              "Филтр киритилмаган"
                                                                            )
                                                                          )
                                                                        ),
                                                                      ],
                                                                ],
                                                                2
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
                                        ],
                                        null,
                                        false,
                                        2931038703
                                      ),
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.list.prices.length > 0 &&
                                ![1, 2, 8].includes(_vm.application.status)
                                  ? _c("h5", { staticClass: "text-center" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "Аниқланган маълумот хажми ва нархи"
                                          )
                                        )
                                      ),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                ![1, 2, 8].includes(_vm.application.status) &&
                                _vm.list.prices &&
                                _vm.list.prices.reduce(function (sum, item) {
                                  return sum + parseFloat(item.price)
                                }, 0) > 0
                                  ? [
                                      _c("v-simple-table", {
                                        staticClass: "pa-15 pt-1 resultTable",
                                        staticStyle: { "text-align": "center" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function () {
                                                return [
                                                  _c("thead", [
                                                    _c("tr", [
                                                      _c(
                                                        "td",
                                                        {
                                                          staticStyle: {
                                                            width: "200px",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "Таъриф номи"
                                                              )
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("Миқдор")
                                                          )
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(_vm.$t("Нарх"))
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "Таъриф ҳисоб - китоби"
                                                            )
                                                          )
                                                        ),
                                                      ]),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "tbody",
                                                    [
                                                      _vm._l(
                                                        _vm.list.prices,
                                                        function (listItem) {
                                                          return _c("tr", [
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
                                                                  "\n                            " +
                                                                    _vm._s(
                                                                      listItem.tarif
                                                                        ? listItem
                                                                            .tarif[
                                                                            "name_" +
                                                                              _vm
                                                                                .$i18n
                                                                                .locale
                                                                          ]
                                                                        : _vm.$t(
                                                                            "Аниқланмади"
                                                                          )
                                                                    ) +
                                                                    "\n                          "
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              {
                                                                staticStyle: {
                                                                  width: "20%",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    listItem.meta
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              {
                                                                staticStyle: {
                                                                  width: "20%",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    new Intl.NumberFormat(
                                                                      "en-US",
                                                                      {
                                                                        style:
                                                                          "currency",
                                                                        currency:
                                                                          "USD",
                                                                      }
                                                                    )
                                                                      .format(
                                                                        listItem.price
                                                                      )
                                                                      .replace(
                                                                        "$",
                                                                        ""
                                                                      )
                                                                  ) +
                                                                    " " +
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "сўм"
                                                                      )
                                                                    ) +
                                                                    "\n                          "
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "td",
                                                              [
                                                                listItem.tarif
                                                                  ? [
                                                                      listItem.tariff_id ===
                                                                      "7"
                                                                        ? [
                                                                            _vm._v(
                                                                              "\n                                " +
                                                                                _vm._s(
                                                                                  _vm.$t(
                                                                                    "хизмат тарифининг {value}%",
                                                                                    {
                                                                                      value:
                                                                                        listItem
                                                                                          .tarif
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                ) +
                                                                                "\n                              "
                                                                            ),
                                                                          ]
                                                                        : [
                                                                            _vm._v(
                                                                              "\n                                " +
                                                                                _vm._s(
                                                                                  _vm.$t(
                                                                                    "БҲМ {value}%",
                                                                                    {
                                                                                      value:
                                                                                        listItem
                                                                                          .tarif
                                                                                          .value,
                                                                                    }
                                                                                  )
                                                                                ) +
                                                                                " (" +
                                                                                _vm._s(
                                                                                  _vm.$t(
                                                                                    "БҲМ миқдори:"
                                                                                  )
                                                                                ) +
                                                                                _vm._s(
                                                                                  new Intl.NumberFormat(
                                                                                    "en-US",
                                                                                    {
                                                                                      style:
                                                                                        "currency",
                                                                                      currency:
                                                                                        "USD",
                                                                                    }
                                                                                  )
                                                                                    .format(
                                                                                      _vm.bhm
                                                                                    )
                                                                                    .replace(
                                                                                      "$",
                                                                                      ""
                                                                                    )
                                                                                ) +
                                                                                " " +
                                                                                _vm._s(
                                                                                  _vm.$t(
                                                                                    "сўм"
                                                                                  )
                                                                                ) +
                                                                                ")\n                              "
                                                                            ),
                                                                          ],
                                                                    ]
                                                                  : _vm._e(),
                                                              ],
                                                              2
                                                            ),
                                                          ])
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            staticStyle: {
                                                              "max-width":
                                                                "20%",
                                                              "font-weight":
                                                                "bold",
                                                            },
                                                            attrs: {
                                                              colspan: "2",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.$t("Жами")
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _vm.list.prices
                                                          ? _c(
                                                              "td",
                                                              {
                                                                staticStyle: {
                                                                  width: "20%",
                                                                  "font-weight":
                                                                    "bold",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n\n                            " +
                                                                    _vm._s(
                                                                      new Intl.NumberFormat(
                                                                        "en-US",
                                                                        {
                                                                          style:
                                                                            "currency",
                                                                          currency:
                                                                            "USD",
                                                                        }
                                                                      )
                                                                        .format(
                                                                          _vm.list.prices.reduce(
                                                                            function (
                                                                              sum,
                                                                              item
                                                                            ) {
                                                                              return (
                                                                                sum +
                                                                                parseFloat(
                                                                                  item.price
                                                                                )
                                                                              )
                                                                            },
                                                                            0
                                                                          )
                                                                        )
                                                                        .replace(
                                                                          "$",
                                                                          ""
                                                                        )
                                                                    ) +
                                                                    " " +
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "сўм"
                                                                      )
                                                                    ) +
                                                                    "\n\n\n                          "
                                                                ),
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _c("td"),
                                                      ]),
                                                    ],
                                                    2
                                                  ),
                                                ]
                                              },
                                              proxy: true,
                                            },
                                          ],
                                          null,
                                          false,
                                          2711622020
                                        ),
                                      }),
                                    ]
                                  : [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex flex-column align-items-center justify-content-center",
                                        },
                                        [
                                          [1, 8].includes(
                                            _vm.myAppComputed.status
                                          )
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mx-0",
                                                  attrs: {
                                                    color: "info",
                                                    loading:
                                                      _vm.loadingComputed
                                                        .calculate,
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.getPrice(true)
                                                    },
                                                  },
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-refresh"),
                                                  ]),
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "Маълумот хажми ва нархини Ҳисоблаш"
                                                        )
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          !_vm.list.prices.length
                                            ? _c("v-btn", {
                                                attrs: {
                                                  color: "primary",
                                                  text: "",
                                                  loading:
                                                    _vm.application.status ===
                                                      2 &&
                                                    _vm.list.prices.length < 1,
                                                },
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.myAppComputed.status === 2
                                            ? _c(
                                                "h6",
                                                {
                                                  staticClass:
                                                    "pa-10 text-center font-weight-bold text",
                                                  staticStyle: {
                                                    color: "var(--mycolor)",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "Маълумотлар қидирилмоқда. Бу бир нечта дақиқа олиши мумкин. Илтимос, кутинг!"
                                                        )
                                                      )
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          ![1, 2].includes(
                                            _vm.application.status
                                          )
                                            ? _c(
                                                "h6",
                                                {
                                                  staticClass:
                                                    "pa-10 text-center font-weight-bold text",
                                                  staticStyle: {
                                                    color: "var(--mycolor)",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        _vm.list.prices.length >
                                                          0
                                                          ? _vm.$t(
                                                              "Ушбу ариза бўйича маълумот топилмади"
                                                            )
                                                          : ""
                                                      )
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ],
                                        1
                                      ),
                                    ],
                              ],
                              2
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
                                          "\n                      " +
                                            _vm._s(_vm.$t("Орқага")) +
                                            "\n                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          disabled:
                                            _vm.myAppComputed.status !== 3 &&
                                            !_vm.list.prices.reduce(function (
                                              sum,
                                              item
                                            ) {
                                              return (
                                                sum + parseFloat(item.price)
                                              )
                                            },
                                            0) > 0,
                                          color: "primary",
                                          size: "large",
                                          loading: _vm.loadingButton.five,
                                        },
                                        on: { click: _vm.nextStep },
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(_vm.$t("Ариза юбориш")) +
                                            "\n                    "
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
      "a",
      {
        staticClass: "all_news service",
        attrs: { target: "_blank", href: "https://t.me/eximcustomsproducts" },
      },
      [
        _c("img", { attrs: { src: "/public/images/telegram.png" } }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            " " + _vm._s(_vm.$t("Саволларингизни йўлланг")) + "\n        "
          ),
          _c("br"),
          _vm._v("\n        @eximcustomsproducts\n      "),
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