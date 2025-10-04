(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_spt_create_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
/* harmony import */ var _components_form_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/form/textfield */ "./resources/js/components/form/textfield.vue");
/* harmony import */ var _components_form_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/form/autocomplete */ "./resources/js/components/form/autocomplete.vue");
/* harmony import */ var _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/form/e-arxiv-file */ "./resources/js/components/form/e-arxiv-file.vue");
/* harmony import */ var _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/form/dialog-chips */ "./resources/js/components/form/dialog-chips.vue");
/* harmony import */ var _components_custom_EditableDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/custom/EditableDate */ "./resources/js/components/custom/EditableDate.vue");
/* harmony import */ var _components_form_e_arxiv_file_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/form/e-arxiv-file-input */ "./resources/js/components/form/e-arxiv-file-input.vue");
/* harmony import */ var _sptCommodity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sptCommodity */ "./resources/js/views/frontend/services/spt/sptCommodity.vue");
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











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SptCreate",
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Хизматлар'),
        to: '/services',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарор олиш'),
        to: '/services/spt',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Ариза юбориш'),
        to: '/services/spt/create',
        disabled: true,
        exact: true
      }],
      lists: {
        regions: [],
        regtype: [{
          value: '101',
          text: 'To‘liq shirkat'
        }]
      },
      app: {
        step1: {
          personType: 1,
          name: null,
          identify: null,
          address: null,
          email: null,
          regdate: null,
          regnum: null,
          location: null,
          regtype: null
        },
        isCompetent: false,
        competent: {
          identify: null,
          passport: null,
          regnum: null,
          regdate: null,
          fileId: []
        }
      },
      fields: [{
        key: 'name',
        value: 'Товар эгасининг номи'
      }, {
        key: 'identify',
        value: 'СТИР рақами'
      }, {
        key: 'regtype',
        value: 'Ташкилий-ҳуқуқий шакли'
      }, {
        key: 'location',
        value: 'Ҳудудий бошқарма'
      }, {
        key: 'address',
        value: 'Манзил ва почта индекси'
      }, {
        key: 'regnum',
        value: 'Давлат рўйхатидан ўтган рақами'
      }, {
        key: 'regdate',
        value: 'Давлат рўйхатидан ўтган санаси'
      }, {
        key: 'email',
        value: 'Электрон почта манзили'
      }, {
        key: 'fileId',
        value: 'Тасдиқловчи ҳужжат иловаси'
      }, {
        key: 'competent',
        value: 'Ваколатли шахс'
      }],
      stepper: 1,
      completedSteps: [],
      loading: {
        nextStep: false
      },
      dialog: {}
    };
  },

  /*
  watch:{
  'app.step1.identify':{
   handler(val){
     const identify = (this.app.step1.personType===1)?this.$auth.user().tin:this.$auth.user().pin
     if(val!==identify) this.app.isCompetent = true
   },
   deep:true
  }
  },*/
  computed: {
    isCompetent: function isCompetent() {
      var identify = this.app.step1.personType === 1 ? this.$auth.user().tin : this.$auth.user().pin;

      if (this.app.step1.identify !== identify) {
        this.app.competent.identify = this.$auth.user().pin;
        this.app.competent.passport = this.$auth.user().pport_no;
      } else {
        this.app.competent.identify = null;
        this.app.competent.passport = null;
      }

      return this.app.step1.identify != identify;
    }
  },
  created: function created() {
    this.getFirstStep();
    this.getBoshqarmalar();
  },
  methods: {
    getFirstStep: function getFirstStep() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$auth.plugins.http.get('/api/v1/response/route_spt/app/' + _this2.$route.params.id).then(function (res) {
                  if (res.data.data && res.data.data.appId) {
                    Object.keys(res.data.data).forEach(function (itemKey) {
                      switch (itemKey) {
                        case 'personType':
                          _this2.app.step1[itemKey] = parseInt(res.data.data[itemKey]);
                          break;

                        case 'fileId':
                          _this2.app.competent[itemKey] = [parseInt(res.data.data[itemKey])];
                          break;

                        case 'competent':
                          var competent = res.data.data[itemKey].split('/');
                          _this2.app.competent.identify = competent[0] && competent[0] != 'null' ? competent[0] : null;
                          _this2.app.competent.passport = competent[1] && competent[1] != 'null' ? competent[1] : null;
                          _this2.app.competent.regnum = competent[2] && competent[2] != 'null' ? competent[2] : null;
                          _this2.app.competent.regdate = competent[3] && competent[3] != 'null' ? competent[3] : null;
                          break;

                        case 'regdate':
                          _this2.app.step1[itemKey] = _this2.formatDate(res.data.data[itemKey], 2);
                          break;

                        default:
                          _this2.app.step1[itemKey] = res.data.data[itemKey];
                          break;
                      }
                    });
                  } else {
                    _this2.$toast.error(_this2.$t('Ариза маълумотларини олишда хатолик юз берди!'));
                  }
                })["catch"](function (e) {
                  console.log(e.response);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveFirstStep: function saveFirstStep() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this, returnData;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this3;
                returnData = false;
                _this3.loading.nextStep = true;
                _context2.next = 5;
                return _this3.$auth.plugins.http.post('/api/v1/response/route_spt/app', {
                  "appId": _this3.$route.params.id,
                  "personType": _this3.app.step1.personType,
                  "name": _this3.app.step1.name,
                  "identify": _this3.app.step1.identify,
                  "address": _this3.app.step1.address,
                  "email": _this3.app.step1.email,
                  "regnum": _this3.app.step1.regnum,
                  "regdate": _this3.formatDate(_this3.app.step1.regdate, 2),
                  "regtype": _this3.app.step1.regtype,
                  "location": _this3.app.step1.location,
                  "competent": _this3.app.competent.identify + '/' + _this3.app.competent.passport + '/' + _this3.app.competent.regnum + '/' + _this3.app.competent.regdate,
                  "fileId": _this3.app.competent.fileId && _this3.app.competent.fileId[0] ? _this3.app.competent.fileId[0].id : null
                }).then(function (res) {
                  if (res.data.data.appId) {
                    returnData = true;
                  } else _this3.$toast.error(_this3.$t('Маълумотларни сақлашда хатолик содир бўлди!'));

                  _this3.loading.nextStep = false;
                })["catch"](function (error) {
                  returnData = false;
                  _this3.loading.nextStep = false;

                  if (typeof error.response !== 'undefined' && typeof error.response.data !== 'undefined' && error.response.data.success === false && typeof error.response.data.data !== 'undefined' && typeof error.response.data.data.errors !== 'undefined') {
                    var errors = []; //console.log(error.response.data.data);

                    //console.log(error.response.data.data);
                    for (var _i = 0, _Object$entries = Object.entries(error.response.data.data.errors); _i < _Object$entries.length; _i++) {
                      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                          key = _Object$entries$_i[0],
                          item = _Object$entries$_i[1];

                      if (item && _typeof(item) === 'object') {
                        errors[item.field] = item.message;
                        /*              for (const [valKey, val] of Object.entries(item)) {
                                        errors[val.field] = val.message;
                                      }*/
                      }
                    }

                    if (errors) _this.setApplicationErrors(errors);
                  }

                  if (error.response.data && error.response.data.data && error.response.data.data.errors && error.response.data.data.errors[0] && error.response.data.data.errors[0].message) {
                    _this3.$toast.error(error.response.data.data.errors[0].field + ' -' + error.response.data.data.errors[0].message);

                    return false;
                  } else {
                    _this3.$toast.error(error.response.statusText);
                  }
                });

              case 5:
                return _context2.abrupt("return", returnData);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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

        console.log(errorfield);

        _this.$refs['stepValidation1'].setErrors(errorfield);
      }
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
    getBoshqarmalar: function getBoshqarmalar() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this = _this4;
                _this.lists.regions = [];
                _context3.next = 4;
                return _this4.$auth.plugins.http.get('/api/v1/ex_api/boshqarma').then(function (result) {
                  result.data.data.forEach(function (item) {
                    if (!['1790', '1791', '1701'].includes(item['kod_id'])) _this.lists.regions.push({
                      'value': item['kod_id'],
                      'text': item['name'].replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "") //(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)

                    });
                  });
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    formatDate: function formatDate(date) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (!date) return null;

      var _date$split = date.split('-'),
          _date$split2 = _slicedToArray(_date$split, 3),
          year = _date$split2[0],
          month = _date$split2[1],
          day = _date$split2[2];

      if (type === 2) return "".concat(day, "-").concat(month, "-").concat(year);
      if (type === 1) return "".concat(day, ".").concat(month, ".").concat(year);else return "".concat(year, "-").concat(day, "-").concat(month);
    },
    getPasportData: function getPasportData() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.loading.yuborishLoading = true;
                _this = _this5; //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)

                _context4.next = 4;
                return axios.get('/api/v1/ex_api/getPData', {
                  params: {
                    pasnum: _this.app.chief.passport,
                    pasdata: _this.app.chief.birthdate
                  }
                }).then(function (response) {
                  _this.loading.yuborishLoading = false;

                  if (typeof response.data.data.birth_date !== 'undefined') {
                    _this.app.chief.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                    _this.app.chief.pin = response.data.data.pinpp;
                  } else _this.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t("Маълумотларни текшириб қайтадан киринг"));
                })["catch"](function () {
                  _this.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t("Маълумотларни текшириб қайтадан киринг."));

                  _this5.loading.yuborishLoading = false;
                });

              case 4:
                _this5.loading.yuborishLoading = false;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    nextStep: function nextStep() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var isValid, _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                isValid = false;
                _this = _this6;
                _context5.next = 4;
                return _this6.saveFirstStep();

              case 4:
                if (!_context5.sent) {
                  _context5.next = 6;
                  break;
                }

                _this6.stepper++;

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
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

        case 3:
          this.stepper = 2;
          break;
      }
    },
    goStep: function goStep() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if ((this.completedSteps.includes(step - 1) || this.completedSteps.includes(step)) && !this.isCompletedStep(3)) {
        this.stepper = step;
      }
    },
    isCompleted: function isCompleted(step) {
      if (this.completedSteps.includes(step)) {
        //console.log(step);
        return true;
      } else return false;
    }
  },
  components: {
    SptCommodity: _sptCommodity__WEBPACK_IMPORTED_MODULE_10__["default"],
    EditableDate: _components_custom_EditableDate__WEBPACK_IMPORTED_MODULE_8__["default"],
    Textfield: _components_form_textfield__WEBPACK_IMPORTED_MODULE_4__["default"],
    DialogChips: _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_7__["default"],
    EArxivFile: _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_6__["default"],
    AutocompleteField: _components_form_autocomplete__WEBPACK_IMPORTED_MODULE_5__["default"],
    TextField: _components_form_textfield__WEBPACK_IMPORTED_MODULE_4__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationObserver,
    Myfield: _components_form_myfield__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _sptCommodityContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sptCommodityContent */ "./resources/js/views/frontend/services/spt/sptCommodityContent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "sptCommodity",
  data: function data() {
    return {
      application: {
        products: [{
          id: 0
        }]
      },
      tovarIndex: 0
    };
  },
  created: function created() {
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      this.$auth.plugins.http.get('/api/v1/response/route_spt/commodity/' + this.$route.params.id).then(function (res) {
        _this.application.products = res.data.data;
        _this.tovarIndex = _this.application.products[0].id;
      })["catch"](function (e) {
        console.log(e);
      });
    },
    AddProduct: function AddProduct() {},
    selectTabTovar: function selectTabTovar() {}
  },
  components: {
    SptCommodityContent: _sptCommodityContent__WEBPACK_IMPORTED_MODULE_1__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_0__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__.ValidationObserver
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _components_form_EditableDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/form/EditableDate */ "./resources/js/components/form/EditableDate.vue");
/* harmony import */ var _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/form/e-arxiv-file */ "./resources/js/components/form/e-arxiv-file.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "sptCommodityContent",
  props: {
    value: {
      cmdtId: null,
      tradeCountry: null,
      tradeOrg: null,
      madeInCountry: null,
      madeInOrg: null,
      deliveryTerms: null,
      deliveryCountry: null,
      deliveryCity: null,
      cmdtPrice: null,
      currency: null,
      hsName: null,
      website: null,
      madeInAdr: null,
      grossWeight: null,
      netWeight: null,
      cmdtAmount: null,
      unitCode: null,
      hcCode: null,
      exDecisionDate: null,
      exDecisionNum: null,
      exDecisionComment: null,
      declNum: null,
      comment: null,
      fileIdList: null
    }
  },
  data: function data() {
    return {
      loading: {
        tftncode: false,
        save: false
      },
      dialog: {
        productOrigin: false,
        inkoterms: false,
        additional: false
      },
      spr: {
        inkoterms: [{
          value: '01',
          text: 'EXW'
        }, {
          value: '02',
          text: 'FCA'
        }, {
          value: '03',
          text: 'FAS'
        }, {
          value: '04',
          text: 'FOB'
        }, {
          value: '05',
          text: 'CFR'
        }, {
          value: '06',
          text: 'CIF'
        }, {
          value: '07',
          text: 'CPT'
        }, {
          value: '08',
          text: 'CIP'
        }, {
          value: '09',
          text: 'DAF'
        }, {
          value: '10',
          text: 'DES'
        }, {
          value: '11',
          text: 'DEQ'
        }, {
          value: '12',
          text: 'DDU'
        }, {
          value: '13',
          text: 'DDP'
        }, {
          value: '14',
          text: 'DAР'
        }, {
          value: '15',
          text: 'DAT'
        }, {
          value: '99',
          text: '…*'
        }],
        tftncodes: []
      },
      productOrigin: {
        tradeCountry: null,
        tradeOrg: null,
        madeInCountry: null,
        madeInOrg: null,
        senderCountry: null,
        senderOrg: null,
        deliveryCountry: null,
        deliveryTerms: null
      },
      productDelivery: {
        deliveryTerms: null,
        deliveryCountry: null,
        cmdtPrice: null,
        deliveryCity: null,
        currency: null
      },
      productAdditional: {
        website: null,
        madeInAdr: null,
        grossWeight: null,
        netWeight: null,
        cmdtAmount: null,
        unitCode: null
      },
      search_tftn: null,
      enabled: {
        dq: false,
        br: false
      }
    };
  },
  watch: {
    search_tftn: {
      handler: function handler(val) {
        var _this = this;

        if (val === this.$props.value.hcCode.id) return;
        if (val.length > 10) return; //if (this.tftncodes.length > 0) return
        // Items have already been requested
        //if (this.loading.tftncode) return

        this.loading.tftncode = true; // Lazily load input items

        fetch("/api/v1/data/tftn?code=" + val).then(function (res) {
          return res.json();
        }).then(function (res) {
          res.map(function (item) {
            item.name = item.id + " - " + item.name;
            return item;
          });
          _this.spr.tftncodes = res;
        })["catch"](function (err) {//console.log(err)
        })["finally"](function () {
          return _this.loading.tftncode = false;
        });
      },
      deep: true
    },
    dialog: {
      handler: function handler(val, oldVal) {
        var _this2 = this;

        if (val.productOrigin) {
          Object.keys(this.productOrigin).forEach(function (itemKey) {
            _this2.productOrigin[itemKey] = _this2.value[itemKey] ? _this2.value[itemKey] : null;
          });
        }

        if (val.additional) {
          Object.keys(this.productAdditional).forEach(function (itemKey) {
            _this2.productAdditional[itemKey] = _this2.value[itemKey] ? _this2.value[itemKey] : null;
          });
        }

        if (val.inkoterms) {
          Object.keys(this.productDelivery).forEach(function (itemKey) {
            _this2.productDelivery[itemKey] = _this2.value[itemKey] ? _this2.value[itemKey] : null;
          });
        }
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.$store.commit('setCountry');
    this.$store.commit('setCurrency');
    this.$store.commit('setUnit');
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)({
    countries: function countries(state) {
      return state.lists.country;
    },
    currencies: function currencies(state) {
      return state.lists.currency;
    },
    units: function units(state) {
      return state.lists.unit;
    }
  })), {}, {
    modelValue: function modelValue() {
      var _this$modelValue$hcCo;

      if (this.modelValue.hcCode && this.search_tftn !== this.modelValue.hcCode) this.search_tftn = (_this$modelValue$hcCo = this.modelValue.hcCode) !== null && _this$modelValue$hcCo !== void 0 ? _this$modelValue$hcCo : null;
      return this.value;
    }
  }),
  methods: {
    saveProduct: function saveProduct() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.loading.save = true;
                data = _objectSpread({
                  appId: _this3.$route.params.id
                }, _this3.$props.value);
                data['hcCode'] = _this3.$props.value.hcCode.id;
                data['fileIdList'] = _this3.$props.value.fileIdList.map(function (item) {
                  return {
                    fileId: item.id
                  };
                });
                _context.next = 6;
                return _this3.$auth.plugins.http.post('/api/v1/response/route_spt/commodity', data).then(function (res) {
                  console.log(res);
                  _this3.loading.save = false;
                })["catch"](function (e) {
                  console.log(e.response);
                  _this3.loading.save = false;
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveCountryOrigin: function saveCountryOrigin() {
      var _this4 = this;

      var product = this.$props.value;
      product.tradeCountry = JSON.parse(JSON.stringify(this.productOrigin.tradeCountry)), product.tradeOrg = JSON.parse(JSON.stringify(this.productOrigin.tradeOrg)), product.madeInCountry = JSON.parse(JSON.stringify(this.productOrigin.madeInCountry)), product.madeInOrg = JSON.parse(JSON.stringify(this.productOrigin.madeInOrg)), product.senderCountry = JSON.parse(JSON.stringify(this.productOrigin.senderCountry)), product.senderOrg = JSON.parse(JSON.stringify(this.productOrigin.senderOrg)), product.deliveryCountry = JSON.parse(JSON.stringify(this.productOrigin.deliveryCountry)), product.deliveryTerms = JSON.parse(JSON.stringify(this.productOrigin.deliveryTerms));
      this.$emit('input', product);
      Object.keys(this.productOrigin).forEach(function (item) {
        _this4.productOrigin[item] = null;
      });
      this.dialog.productOrigin = false;
    },
    saveInkoterms: function saveInkoterms() {
      var _this5 = this;

      var product = this.$props.value;
      product.deliveryTerms = JSON.parse(JSON.stringify(this.productDelivery.deliveryTerms));
      product.deliveryCountry = JSON.parse(JSON.stringify(this.productDelivery.deliveryCountry));
      product.cmdtPrice = JSON.parse(JSON.stringify(this.productDelivery.cmdtPrice));
      product.deliveryCity = JSON.parse(JSON.stringify(this.productDelivery.deliveryCity));
      product.currency = JSON.parse(JSON.stringify(this.productDelivery.currency));
      this.$emit('input', product);
      Object.keys(this.productDelivery).forEach(function (item) {
        _this5.productDelivery[item] = null;
      });
      this.dialog.inkoterms = false;
    },
    saveAdditional: function saveAdditional() {
      var _this6 = this;

      var product = this.$props.value;
      product.website = JSON.parse(JSON.stringify(this.productAdditional.website));
      product.madeInAdr = JSON.parse(JSON.stringify(this.productAdditional.madeInAdr));
      product.grossWeight = JSON.parse(JSON.stringify(this.productAdditional.grossWeight));
      product.netWeight = JSON.parse(JSON.stringify(this.productAdditional.netWeight));
      product.cmdtAmount = JSON.parse(JSON.stringify(this.productAdditional.cmdtAmount));
      product.unitCode = JSON.parse(JSON.stringify(this.productAdditional.unitCode));
      this.$emit('input', product);
      Object.keys(this.productAdditional).forEach(function (item) {
        _this6.productAdditional[item] = null;
      });
      this.dialog.additional = false;
    }
  },
  components: {
    EditableDate: _components_form_EditableDate__WEBPACK_IMPORTED_MODULE_2__["default"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationObserver,
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationProvider,
    EArxivFile: _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".yoriqnoma-text {\n  right: 40px;\n  font-weight: bold;\n}\n.outlined-row {\n  position: relative;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding-bottom: 20px;\n}\n.outlined-row .row-title {\n  width: 100%;\n  padding: 10px 20px;\n}\n.outlined-row .row-title > span {\n  padding: 10px 0;\n  width: 100%;\n  display: block;\n  text-transform: uppercase;\n  font-weight: bolder;\n  border-bottom: 1px solid #ccc;\n}\n.outlined-row .field {\n  display: flex;\n  align-items: start;\n}\n.vio_card {\n  padding: 10px 30px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding-bottom: 0;\n}\n.vio_card .vio_card_title {\n  padding: 10px 0 10px;\n  border-bottom: 1px solid #ccc;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.vio_card .field {\n  display: flex;\n  align-items: start;\n  margin: 40px 0;\n}\n.v-text-field.v-input--dense .v-label {\n  top: 5px;\n  background-color: #fff;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".cardboxshadow[data-v-317d2048] {\n  box-shadow: 0 0 3px 1px #39ae69;\n  padding: 5px 10px;\n}\n.border-solid[data-v-317d2048] {\n  border: 1px solid #ebebeb;\n  padding: 10px 10px 0 10px;\n}\n.columntitle[data-v-317d2048] {\n  display: block;\n  color: var(--mycolor);\n  margin-right: 60px;\n}\n.sptCommodityContent[data-v-317d2048] ::-moz-placeholder {\n  font-size: 13px;\n  line-height: 14px;\n  margin-top: 10px;\n  padding-top: 10px;\n}\n.sptCommodityContent[data-v-317d2048] :-ms-input-placeholder {\n  font-size: 13px;\n  line-height: 14px;\n  margin-top: 10px;\n  padding-top: 10px;\n}\n.sptCommodityContent[data-v-317d2048] ::placeholder {\n  font-size: 13px;\n  line-height: 14px;\n  margin-top: 10px;\n  padding-top: 10px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodityContent_vue_vue_type_style_index_0_id_317d2048_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodityContent_vue_vue_type_style_index_0_id_317d2048_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodityContent_vue_vue_type_style_index_0_id_317d2048_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/views/frontend/services/spt/create.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/create.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_0993fcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=0993fcb2& */ "./resources/js/views/frontend/services/spt/create.vue?vue&type=template&id=0993fcb2&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/spt/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/frontend/services/spt/create.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_0993fcb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_0993fcb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/spt/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/sptCommodity.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/sptCommodity.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sptCommodity_vue_vue_type_template_id_c735debe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sptCommodity.vue?vue&type=template&id=c735debe& */ "./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=template&id=c735debe&");
/* harmony import */ var _sptCommodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sptCommodity.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sptCommodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sptCommodity_vue_vue_type_template_id_c735debe___WEBPACK_IMPORTED_MODULE_0__.render,
  _sptCommodity_vue_vue_type_template_id_c735debe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/spt/sptCommodity.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/sptCommodityContent.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/sptCommodityContent.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sptCommodityContent_vue_vue_type_template_id_317d2048_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sptCommodityContent.vue?vue&type=template&id=317d2048&scoped=true& */ "./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=template&id=317d2048&scoped=true&");
/* harmony import */ var _sptCommodityContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sptCommodityContent.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=script&lang=js&");
/* harmony import */ var _sptCommodityContent_vue_vue_type_style_index_0_id_317d2048_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss& */ "./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sptCommodityContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sptCommodityContent_vue_vue_type_template_id_317d2048_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _sptCommodityContent_vue_vue_type_template_id_317d2048_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "317d2048",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/spt/sptCommodityContent.vue"
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

/***/ "./resources/js/views/frontend/services/spt/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sptCommodity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodityContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sptCommodityContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodityContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/create.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/create.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodityContent_vue_vue_type_style_index_0_id_317d2048_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=style&index=0&id=317d2048&scoped=true&lang=scss&");


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

/***/ "./resources/js/views/frontend/services/spt/create.vue?vue&type=template&id=0993fcb2&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/create.vue?vue&type=template&id=0993fcb2& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_0993fcb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_0993fcb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_0993fcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=0993fcb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=template&id=0993fcb2&");


/***/ }),

/***/ "./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=template&id=c735debe&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=template&id=c735debe& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodity_vue_vue_type_template_id_c735debe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodity_vue_vue_type_template_id_c735debe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodity_vue_vue_type_template_id_c735debe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sptCommodity.vue?vue&type=template&id=c735debe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=template&id=c735debe&");


/***/ }),

/***/ "./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=template&id=317d2048&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=template&id=317d2048&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodityContent_vue_vue_type_template_id_317d2048_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodityContent_vue_vue_type_template_id_317d2048_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sptCommodityContent_vue_vue_type_template_id_317d2048_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sptCommodityContent.vue?vue&type=template&id=317d2048&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=template&id=317d2048&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=template&id=0993fcb2&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/create.vue?vue&type=template&id=0993fcb2& ***!
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
                        "\n            " +
                          _vm._s(
                            _vm.$t(
                              "Товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарор олиш"
                            )
                          ) +
                          "\n            "
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
                          "\n            " +
                            _vm._s(_vm.$t("Аризачи тўғрисида маълумот")) +
                            "\n          "
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
                          "\n            " +
                            _vm._s(_vm.$t("Қўшимча маълумотлар")) +
                            "\n          "
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
                          "\n            " +
                            _vm._s(_vm.$t("Омбор маълумоти")) +
                            "\n          "
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
                          { staticClass: "mb-15 px-10 py-10" },
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
                                      href:
                                        _vm.$i18n.locale === "ru"
                                          ? "/storage/files/vio_ru.pptx"
                                          : "/storage/files/vio_uz.pptx",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.$t(
                                            "Ариза тўлдириш бўйича йўриқмани юклаб олинг!"
                                          )
                                        ) +
                                        "\n              "
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
                                        { staticClass: "mt-2" },
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "d-flex" },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        small: "",
                                                        color:
                                                          _vm.app.step1
                                                            .personType === 1
                                                            ? "primary"
                                                            : "default",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          _vm.app.step1.personType = 1
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "Юридик шахс"
                                                            )
                                                          ) +
                                                          "\n                      "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        small: "",
                                                        color:
                                                          _vm.app.step1
                                                            .personType === 0
                                                            ? "primary"
                                                            : "default",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          _vm.app.step1.personType = 0
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "Жисмоний шахс"
                                                            )
                                                          ) +
                                                          "\n                      "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "4" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Товар эгасининг номи"
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
                                                            attrs: {
                                                              label: _vm.$t(
                                                                "Товар эгасининг номи"
                                                              ),
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app.step1
                                                                  .name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .step1,
                                                                    "name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.step1.name",
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
                                            { attrs: { cols: "2" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name:
                                                    _vm.app.step1.personType ===
                                                    1
                                                      ? _vm.$t("СТИР рақами")
                                                      : _vm.$t("ЖШШИР рақами"),
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
                                                                  _vm.app.step1
                                                                    .personType ===
                                                                  1
                                                                    ? "#########"
                                                                    : "##############",
                                                                expression:
                                                                  "app.step1.personType===1?'#########':'##############'",
                                                              },
                                                            ],
                                                            attrs: {
                                                              label:
                                                                _vm.app.step1
                                                                  .personType ===
                                                                1
                                                                  ? _vm.$t(
                                                                      "СТИР рақами"
                                                                    )
                                                                  : _vm.$t(
                                                                      "ЖШШИР рақами"
                                                                    ),
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors,
                                                              counter: !!(
                                                                _vm.app.step1
                                                                  .identify &&
                                                                _vm.app.step1
                                                                  .identify
                                                                  .length
                                                              ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app.step1
                                                                  .identify,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .step1,
                                                                    "identify",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.step1.identify",
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
                                            { attrs: { cols: "3" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Ташкилий-ҳуқуқий шакли"
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
                                                              label: _vm.$t(
                                                                "Ташкилий-ҳуқуқий шакли"
                                                              ),
                                                              "persistent-placeholder":
                                                                "",
                                                              items:
                                                                _vm.lists
                                                                  .regtype,
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app.step1
                                                                  .regtype,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .step1,
                                                                    "regtype",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.step1.regtype",
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
                                            { attrs: { cols: "3" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Ҳудудий бошқарма"
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
                                                              label:
                                                                _vm.$t(
                                                                  "Ҳудудий бошқарма"
                                                                ),
                                                              "persistent-placeholder":
                                                                "",
                                                              items:
                                                                _vm.lists
                                                                  .regions,
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app.step1
                                                                  .location,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .step1,
                                                                    "location",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.step1.location",
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
                                            { attrs: { cols: "4" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Манзил ва почта индекси"
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
                                                            attrs: {
                                                              label:
                                                                "Манзил ва почта индекси",
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app.step1
                                                                  .address,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .step1,
                                                                    "address",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.step1.address",
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
                                            { attrs: { cols: "2" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Давлат рўйхатидан ўтган рақами"
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
                                                            attrs: {
                                                              label:
                                                                "Давлат рўйхатидан ўтган рақами",
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app.step1
                                                                  .regnum,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .step1,
                                                                    "regnum",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.step1.regnum",
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
                                            { attrs: { cols: "2" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Давлат рўйхатидан ўтган санаси"
                                                  ),
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("editable-date", {
                                                            attrs: {
                                                              label:
                                                                "Давлат рўйхатидан ўтган санаси",
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app.step1
                                                                  .regdate,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .step1,
                                                                    "regdate",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.step1.regdate",
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
                                            { attrs: { cols: "2" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Электрон почта манзили"
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
                                                            attrs: {
                                                              label:
                                                                "Электрон почта манзили",
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app.step1
                                                                  .email,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .step1,
                                                                    "email",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.step1.email",
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
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.isCompetent,
                                              expression: "isCompetent",
                                            },
                                          ],
                                          staticStyle: {
                                            border: "1px dashed var(--mycolor)",
                                            padding: "20px 10px",
                                            position: "relative",
                                            "margin-top": "12px",
                                          },
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                position: "absolute",
                                                top: "-10px",
                                                "background-color": "#fff",
                                                width: "max-content",
                                                color: "var(--mycolor)",
                                                "font-weight": "600",
                                                "font-size": "14px",
                                                "text-transform": "uppercase",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "Товар эгаси номидан тўлдираётган ваколатли шахс ҳақида маълумотлар"
                                                  )
                                                )
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "3" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t("ЖШШИР"),
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
                                                                  "##############",
                                                                expression:
                                                                  "'##############'",
                                                              },
                                                            ],
                                                            attrs: {
                                                              label:
                                                                _vm.$t("ЖШШИР"),
                                                              "persistent-placeholder":
                                                                "",
                                                              disabled: "",
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app
                                                                  .competent
                                                                  .identify,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .competent,
                                                                    "identify",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.competent.identify",
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
                                            { attrs: { cols: "3" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Паспорт маълумотлари"
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
                                                            attrs: {
                                                              label: _vm.$t(
                                                                "Паспорт маълумотлари"
                                                              ),
                                                              "persistent-placeholder":
                                                                "",
                                                              disabled: "",
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app
                                                                  .competent
                                                                  .passport,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .competent,
                                                                    "passport",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.competent.passport",
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
                                            { attrs: { cols: "2" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Тасдиқловчи ҳужжат рақами"
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
                                                            attrs: {
                                                              label: _vm.$t(
                                                                "Тасдиқловчи ҳужжат рақами"
                                                              ),
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app
                                                                  .competent
                                                                  .regnum,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .competent,
                                                                    "regnum",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.competent.regnum",
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
                                            { attrs: { cols: "2" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t("Ҳужжат санаси"),
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("editable-date", {
                                                            attrs: {
                                                              label:
                                                                _vm.$t(
                                                                  "Ҳужжат санаси"
                                                                ),
                                                              "persistent-placeholder":
                                                                "",
                                                              "error-messages":
                                                                errors,
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app
                                                                  .competent
                                                                  .regdate,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .competent,
                                                                    "regdate",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.competent.regdate",
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
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("ValidationProvider", {
                                                attrs: {
                                                  name: _vm.$t(
                                                    "Тасдиқловчи ҳужжат иловаси"
                                                  ),
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "default",
                                                      fn: function (ref) {
                                                        var errors = ref.errors
                                                        return [
                                                          _c("e-arxiv-file", {
                                                            attrs: {
                                                              label: _vm.$t(
                                                                "Тасдиқловчи ҳужжат иловаси"
                                                              ),
                                                              errors:
                                                                errors[0] ||
                                                                "aa",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app
                                                                  .competent
                                                                  .fileId,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .competent,
                                                                    "fileId",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.competent.fileId",
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
                              "div",
                              { staticClass: "mt-10" },
                              [
                                _c(
                                  "v-row",
                                  {
                                    staticClass:
                                      "row mt-3 mb-3 position-absolute bottom-0 end-0",
                                  },
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        staticClass:
                                          "d-flex tab_action_buttons",
                                      },
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
                                              loading: _vm.loading.nextStep,
                                              size: "large",
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
                          { staticClass: "mb-15 px-10 py-10" },
                          [
                            _c("spt-commodity"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-15" },
                              [
                                _c(
                                  "v-row",
                                  {
                                    staticClass:
                                      "row mt-3 mb-3 position-absolute bottom-0 end-0",
                                  },
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        staticClass:
                                          "d-flex tab_action_buttons",
                                      },
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
                          { staticClass: "mb-15 px-10 py-10" },
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
                                      href:
                                        _vm.$i18n.locale === "ru"
                                          ? "/storage/files/vio_ru.pptx"
                                          : "/storage/files/vio_uz.pptx",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.$t(
                                            "Ариза тўлдириш бўйича йўриқмани юклаб олинг!"
                                          )
                                        ) +
                                        "\n              "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("ValidationObserver", {
                              ref: "stepValidation3",
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var invalid = ref.invalid
                                    return [_c("v-row")]
                                  },
                                },
                              ]),
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "mt-10" },
                              [
                                _c(
                                  "v-row",
                                  {
                                    staticClass:
                                      "row mt-3 mb-3 position-absolute bottom-0 end-0",
                                  },
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        staticClass:
                                          "d-flex tab_action_buttons",
                                      },
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
        attrs: { target: "_blank", href: "https://t.me/dastlabkiqaror" },
      },
      [
        _c("img", { attrs: { src: "/public/images/telegram.png" } }),
        _vm._v(" "),
        _c("p", [
          _vm._v(" " + _vm._s(_vm.$t("Саволларингизни йўлланг")) + "\n      "),
          _c("br"),
          _vm._v("\n      @dastlabkiqaror\n    "),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=template&id=c735debe&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodity.vue?vue&type=template&id=c735debe& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "p-1 d-flex align-items-start" }, [
    _c(
      "div",
      {
        staticClass: "nav flex-column nav-pills me-3 col-1 product_parts",
        attrs: {
          id: "v-pills-tab",
          role: "tablist",
          "aria-orientation": "vertical",
        },
      },
      [
        _c(
          "button",
          { staticClass: "nav-link create", on: { click: _vm.AddProduct } },
          [
            _vm._v(_vm._s(_vm.$t("Қўшиш")) + "\n      "),
            _c("v-icon", [_vm._v("mdi-plus-circle-outline")]),
          ],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.application.products, function (product, key) {
          return _c(
            "button",
            {
              staticClass: "nav-link",
              class:
                _vm.application.products[key].id === _vm.tovarIndex
                  ? "active"
                  : "",
              attrs: {
                id: "v-pills-profile-tab" + product.id,
                "data-id": product.id,
                "data-bs-toggle": "pill",
                "data-bs-target": "#v-pills-profile" + product.id,
                type: "button",
                role: "tab",
                "aria-controls": "#v-pills-profile" + product.id,
                "aria-selected": "true",
              },
              on: {
                click: function ($event) {
                  return _vm.selectTabTovar(product.id)
                },
              },
            },
            [
              _vm._v(
                _vm._s(_vm.$t("Товар")) +
                  "\n      " +
                  _vm._s(key + 1) +
                  "\n      "
              ),
              _c(
                "div",
                { staticClass: "close-icon" },
                [
                  _c(
                    "v-icon",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.RemoveProduct(product.id)
                        },
                      },
                    },
                    [_vm._v("\n          mdi-close-circle-outline\n        ")]
                  ),
                ],
                1
              ),
            ]
          )
        }),
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "tab-content w-100", attrs: { id: "v-pills-tabContent" } },
      _vm._l(_vm.application.products, function (product, key) {
        return _c(
          "div",
          {
            key: key,
            staticClass: "tab-pane fadeInUp",
            class:
              product.id === _vm.tovarIndex
                ? "list-enter-active active"
                : "list-move",
            attrs: {
              id: "v-pills-profile" + product.id,
              role: "tabpanel",
              "aria-labelledby": "v-pills-home-tab",
            },
          },
          [
            _c(
              "v-card",
              { staticClass: "mb-0 pt-4 pb-2" },
              [
                _c("h5", { staticClass: "primary-color" }, [
                  _vm._v(_vm._s(_vm.$t("Товар тўғрисидаги маълумотлар"))),
                ]),
                _vm._v(" "),
                _c(
                  "v-tabs-items",
                  { staticClass: "product_info_tab" },
                  [
                    _c(
                      "v-row",
                      { staticClass: "p-2 my-2 mx-1", attrs: { flat: "" } },
                      [
                        _c("spt-commodity-content", {
                          attrs: { value: product },
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
        )
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=template&id=317d2048&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/sptCommodityContent.vue?vue&type=template&id=317d2048&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("ValidationObserver", {
    ref: "stepValidationProduct",
    staticClass: "sptCommodityContent",
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function (ref) {
          var invalid = ref.invalid
          return [
            _c(
              "v-row",
              [
                _c("v-col", { attrs: { cols: "4" } }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "cardboxshadow d-flex flex-column position-relative",
                    },
                    [
                      _c("span", { staticClass: "columntitle" }, [
                        _vm._v("1. Товарнинг келиб чиқиш мамлакати тўғрисида "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          staticStyle: { position: "absolute", right: "5px" },
                          attrs: { color: "primary" },
                          on: {
                            click: function ($event) {
                              _vm.dialog.productOrigin = true
                            },
                          },
                        },
                        [_vm._v("\n            mdi-pencil\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "900", persistent: "" },
                          model: {
                            value: _vm.dialog.productOrigin,
                            callback: function ($$v) {
                              _vm.$set(_vm.dialog, "productOrigin", $$v)
                            },
                            expression: "dialog.productOrigin",
                          },
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-toolbar",
                                {
                                  staticClass: "text-center white--text",
                                  attrs: { color: "primary", dark: "" },
                                },
                                [
                                  _c("span", { staticClass: "text-h5" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.$t(
                                            "Товарнинг келиб чиқиш мамлакати тўғрисида"
                                          )
                                        ) +
                                        "\n                                    "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "", color: "white" },
                                      on: {
                                        click: function ($event) {
                                          _vm.dialog.productOrigin = false
                                        },
                                      },
                                    },
                                    [
                                      _c("v-icon", { attrs: { large: "" } }, [
                                        _vm._v("mdi-close"),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          _c("v-autocomplete", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Савдо қилувчи мамлакат"
                                              ),
                                              items: _vm.countries,
                                              "item-value": "CODE",
                                              "item-text": function (item) {
                                                return (
                                                  item.CODE + "-" + item.CD_NM
                                                )
                                              },
                                            },
                                            model: {
                                              value:
                                                _vm.productOrigin.tradeCountry,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productOrigin,
                                                  "tradeCountry",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productOrigin.tradeCountry",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t("Юкни сотувчи"),
                                            },
                                            model: {
                                              value: _vm.productOrigin.tradeOrg,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productOrigin,
                                                  "tradeOrg",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productOrigin.tradeOrg",
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
                                          _c("v-autocomplete", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Юк жўнатувчи мамлакат"
                                              ),
                                              items: _vm.countries,
                                              "item-value": "CODE",
                                              "item-text": function (item) {
                                                return (
                                                  item.CODE + "-" + item.CD_NM
                                                )
                                              },
                                            },
                                            model: {
                                              value:
                                                _vm.productOrigin.senderCountry,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productOrigin,
                                                  "senderCountry",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productOrigin.senderCountry",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t("Юкни жўнатувчи"),
                                            },
                                            model: {
                                              value:
                                                _vm.productOrigin.senderOrg,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productOrigin,
                                                  "senderOrg",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productOrigin.senderOrg",
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
                                          _c("v-autocomplete", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Келиб чиқиш мамлакати"
                                              ),
                                              items: _vm.countries,
                                              "item-value": "CODE",
                                              "item-text": function (item) {
                                                return (
                                                  item.CODE + "-" + item.CD_NM
                                                )
                                              },
                                            },
                                            model: {
                                              value:
                                                _vm.productOrigin.madeInCountry,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productOrigin,
                                                  "madeInCountry",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productOrigin.madeInCountry",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Товар ишлаб чиқарувчи"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.productOrigin.madeInOrg,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productOrigin,
                                                  "madeInOrg",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productOrigin.madeInOrg",
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
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "green darken-1" },
                                      on: { click: _vm.saveCountryOrigin },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(_vm.$t("Сақлаш")) +
                                          "\n                "
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
                      _vm._v(" "),
                      _vm.modelValue.tradeCountry && _vm.modelValue.tradeOrg
                        ? [
                            _c("span", [
                              _vm._v(_vm._s(_vm.$t("Савдо қилувчи")) + ":"),
                            ]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm.modelValue.tradeCountry &&
                                    _vm.countries.filter(function (item) {
                                      return (
                                        item.code ===
                                        _vm.modelValue.tradeCountry
                                      )
                                    }) &&
                                    _vm.countries.filter(function (item) {
                                      return (
                                        item.CODE ===
                                        _vm.modelValue.tradeCountry
                                      )
                                    })[0]
                                    ? _vm.countries.filter(function (item) {
                                        return (
                                          item.CODE ===
                                          _vm.modelValue.tradeCountry
                                        )
                                      })[0].CD_NM
                                    : ""
                                ) +
                                  ", " +
                                  _vm._s(_vm.modelValue.tradeOrg)
                              ),
                            ]),
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.modelValue.senderCountry && _vm.modelValue.senderOrg
                        ? [
                            _c("span", [
                              _vm._v(_vm._s(_vm.$t("Юк жўнатувчи")) + ":"),
                            ]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm.modelValue.senderCountry &&
                                    _vm.countries.filter(function (item) {
                                      return (
                                        item.code ===
                                        _vm.modelValue.senderCountry
                                      )
                                    }) &&
                                    _vm.countries.filter(function (item) {
                                      return (
                                        item.CODE ===
                                        _vm.modelValue.senderCountry
                                      )
                                    })[0]
                                    ? _vm.countries.filter(function (item) {
                                        return (
                                          item.CODE ===
                                          _vm.modelValue.senderCountry
                                        )
                                      })[0].CD_NM
                                    : ""
                                ) +
                                  ", " +
                                  _vm._s(_vm.modelValue.senderOrg)
                              ),
                            ]),
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.modelValue.madeInCountry && _vm.modelValue.madeInOrg
                        ? [
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.$t("Келиб чиқиш мамлакати")) + ":"
                              ),
                            ]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm.modelValue.madeInCountry &&
                                    _vm.countries.filter(function (item) {
                                      return (
                                        item.code ===
                                        _vm.modelValue.madeInCountry
                                      )
                                    }) &&
                                    _vm.countries.filter(function (item) {
                                      return (
                                        item.CODE ===
                                        _vm.modelValue.madeInCountry
                                      )
                                    })[0]
                                    ? _vm.countries.filter(function (item) {
                                        return (
                                          item.CODE ===
                                          _vm.modelValue.madeInCountry
                                        )
                                      })[0].CD_NM
                                    : ""
                                ) +
                                  ", " +
                                  _vm._s(_vm.modelValue.madeInOrg)
                              ),
                            ]),
                          ]
                        : _vm._e(),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "4" } }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "cardboxshadow d-flex flex-column position-relative",
                    },
                    [
                      _c("span", { staticClass: "columntitle" }, [
                        _vm._v(
                          "2. " + _vm._s(_vm.$t("Етказиб бериш шарти ва нархи"))
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          staticStyle: { position: "absolute", right: "5px" },
                          attrs: { color: "primary" },
                          on: {
                            click: function ($event) {
                              _vm.dialog.inkoterms = true
                            },
                          },
                        },
                        [_vm._v("mdi-pencil\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "900", persistent: "" },
                          model: {
                            value: _vm.dialog.inkoterms,
                            callback: function ($$v) {
                              _vm.$set(_vm.dialog, "inkoterms", $$v)
                            },
                            expression: "dialog.inkoterms",
                          },
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-toolbar",
                                {
                                  staticClass: "text-center white--text",
                                  attrs: { color: "primary", dark: "" },
                                },
                                [
                                  _c("span", { staticClass: "text-h5" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.$t("Етказиб бериш шарти ва нархи")
                                        ) +
                                        "\n                                    "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "", color: "white" },
                                      on: {
                                        click: function ($event) {
                                          _vm.dialog.inkoterms = false
                                        },
                                      },
                                    },
                                    [
                                      _c("v-icon", { attrs: { large: "" } }, [
                                        _vm._v("mdi-close"),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          _c("v-autocomplete", {
                                            attrs: {
                                              items: _vm.spr.inkoterms,
                                              "item-text": function (item) {
                                                return (
                                                  item.value + "-" + item.text
                                                )
                                              },
                                              label: _vm.$t(
                                                "Етказиб бериш шарти"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.productDelivery
                                                  .deliveryTerms,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productDelivery,
                                                  "deliveryTerms",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productDelivery.deliveryTerms",
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
                                          _c("v-autocomplete", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Етказиб бериш мамлакати"
                                              ),
                                              items: _vm.countries,
                                              "item-value": "CODE",
                                              "item-text": function (item) {
                                                return (
                                                  item.CODE + "-" + item.CD_NM
                                                )
                                              },
                                            },
                                            model: {
                                              value:
                                                _vm.productDelivery
                                                  .deliveryCountry,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productDelivery,
                                                  "deliveryCountry",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productDelivery.deliveryCountry",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t("Товарнинг нарҳи"),
                                            },
                                            model: {
                                              value:
                                                _vm.productDelivery.cmdtPrice,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productDelivery,
                                                  "cmdtPrice",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productDelivery.cmdtPrice",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Етказиб бериш шаҳри"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.productDelivery
                                                  .deliveryCity,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productDelivery,
                                                  "deliveryCity",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productDelivery.deliveryCity",
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
                                          _c("v-autocomplete", {
                                            attrs: {
                                              label: _vm.$t("Валюта"),
                                              items: _vm.currencies,
                                              "item-value": "CODE",
                                              "item-text": function (item) {
                                                return (
                                                  item.CODE + "-" + item.CD_NM
                                                )
                                              },
                                            },
                                            model: {
                                              value:
                                                _vm.productDelivery.currency,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productDelivery,
                                                  "currency",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productDelivery.currency",
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
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "green darken-1" },
                                      on: { click: _vm.saveInkoterms },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(_vm.$t("Сақлаш")) +
                                          "\n                "
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
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s("EXW") + ", Греция, Аргос")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("5000 Евро")]),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "4" } }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "cardboxshadow d-flex flex-column position-relative",
                    },
                    [
                      _c("span", { staticClass: "columntitle" }, [
                        _vm._v("3. Товар ҳақида қўшимча маълумотлар "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          staticStyle: { position: "absolute", right: "5px" },
                          attrs: { color: "primary" },
                          on: {
                            click: function ($event) {
                              _vm.dialog.additional = true
                            },
                          },
                        },
                        [_vm._v("mdi-pencil\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "900", persistent: "" },
                          model: {
                            value: _vm.dialog.additional,
                            callback: function ($$v) {
                              _vm.$set(_vm.dialog, "additional", $$v)
                            },
                            expression: "dialog.additional",
                          },
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-toolbar",
                                {
                                  staticClass: "text-center white--text",
                                  attrs: { color: "primary", dark: "" },
                                },
                                [
                                  _c("span", { staticClass: "text-h5" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.$t(
                                            "Товар ҳақида қўшимча маълумотлар"
                                          )
                                        ) +
                                        "\n                                    "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "", color: "white" },
                                      on: {
                                        click: function ($event) {
                                          _vm.dialog.additional = false
                                        },
                                      },
                                    },
                                    [
                                      _c("v-icon", { attrs: { large: "" } }, [
                                        _vm._v("mdi-close"),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Ишлаб чиқарувчининг расмий веб-сайти"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.productAdditional.website,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productAdditional,
                                                  "website",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productAdditional.website",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Товар ишлаб чиқарувчининг манзили"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.productAdditional.madeInAdr,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productAdditional,
                                                  "madeInAdr",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productAdditional.madeInAdr",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Товар брутто оғирлиги (кг)"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.productAdditional
                                                  .grossWeight,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productAdditional,
                                                  "grossWeight",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productAdditional.grossWeight",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t(
                                                "Товар нетто оғирлиги (кг)"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.productAdditional.netWeight,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productAdditional,
                                                  "netWeight",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productAdditional.netWeight",
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: _vm.$t("Товар миқдори"),
                                            },
                                            model: {
                                              value:
                                                _vm.productAdditional
                                                  .cmdtAmount,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productAdditional,
                                                  "cmdtAmount",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productAdditional.cmdtAmount",
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
                                          _c("v-autocomplete", {
                                            attrs: {
                                              label: _vm.$t("Ўлчов бирлиги"),
                                              items: _vm.units,
                                              "item-value": "code",
                                              "item-text": "cd_nm",
                                            },
                                            model: {
                                              value:
                                                _vm.productAdditional.unitCode,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.productAdditional,
                                                  "unitCode",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "productAdditional.unitCode",
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
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "green darken-1" },
                                      on: { click: _vm.saveAdditional },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(_vm.$t("Сақлаш")) +
                                          "\n                "
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
                      _vm._v(" "),
                      _c("span", [_vm._v("Брутто: 5200")]),
                      _vm._v(" "),
                      _c("span", [_vm._v("Нетто: 4800")]),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c(
                    "div",
                    { staticClass: "full-width" },
                    [
                      _c("span", { staticClass: "columntitle" }, [
                        _vm._v("4. Товар тавсифлари"),
                      ]),
                      _vm._v(" "),
                      _c("v-textarea", {
                        staticClass: "my-0 py-0",
                        attrs: {
                          placeholder:
                            "Товарларнинг савдо, тижорат номи ва тўлиқ тавсифи,  асосий техник-тижорат тавсифлари (маркаси, модели, артикули, модификацияси), нави, стандартлари, бажарадиган функциялари, техник ва тижорат хусусиятларини кўрсатинг!",
                        },
                        model: {
                          value: _vm.value.hsName,
                          callback: function ($$v) {
                            _vm.$set(_vm.value, "hsName", $$v)
                          },
                          expression: "value.hsName",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "full-width" },
                    [
                      _c("span", { staticClass: "columntitle" }, [
                        _vm._v("5. ТИФ ТНга мувофиқ товарнинг коди"),
                      ]),
                      _vm._v(" "),
                      _c("v-autocomplete", {
                        staticClass: "my-0 py-0",
                        attrs: {
                          items: _vm.spr.tftncodes,
                          "item-text": "name",
                          "item-value": "id",
                          name: "tftncode",
                          hint: _vm.$t("Товарнинг ТИФ ТН коди"),
                          "persistent-placeholder": "",
                          "hide-no-data": "",
                          loading: _vm.loading.tftncode,
                          "search-input": _vm.search_tftn,
                          "return-object": "",
                        },
                        on: {
                          "update:searchInput": function ($event) {
                            _vm.search_tftn = $event
                          },
                          "update:search-input": function ($event) {
                            _vm.search_tftn = $event
                          },
                        },
                        model: {
                          value: _vm.value.hcCode,
                          callback: function ($$v) {
                            _vm.$set(_vm.value, "hcCode", $$v)
                          },
                          expression: "value.hcCode",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "full-width" },
                    [
                      _c("span", { staticClass: "columntitle" }, [
                        _vm._v(
                          "6. Товарнинг келиб чиқишини аниқлаш учун муҳим\nбўлган қўшимча маълумотлар:"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "my-0 py-0",
                        model: {
                          value: _vm.value.comment,
                          callback: function ($$v) {
                            _vm.$set(_vm.value, "comment", $$v)
                          },
                          expression: "value.comment",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c(
                    "div",
                    {
                      staticClass: "full-width position-relative border-solid",
                      staticStyle: { "padding-bottom": "30px" },
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            position: "absolute",
                            right: "0",
                            top: "0",
                          },
                        },
                        [
                          _c("v-switch", {
                            staticClass: "p-0 m-0",
                            attrs: { color: "primary", "hide-details": "" },
                            model: {
                              value: _vm.enabled.dq,
                              callback: function ($$v) {
                                _vm.$set(_vm.enabled, "dq", $$v)
                              },
                              expression: "enabled.dq",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "columntitle" }, [
                        _vm._v(
                          "7. Бир хил ёки ўхшаш товарларга нисбатан қабул қилинган дастлабки қарор ҳақида сизга маълум бўлган фактлар?"
                        ),
                      ]),
                      _vm._v(" "),
                      _vm.enabled.dq
                        ? _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "6" } },
                                [
                                  _c("editable-date", {
                                    attrs: {
                                      label: "Дастлабки қарор санаси",
                                      "hide-details": "",
                                    },
                                    model: {
                                      value: _vm.value.exDecisionDate,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.value,
                                          "exDecisionDate",
                                          $$v
                                        )
                                      },
                                      expression: "value.exDecisionDate",
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
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Дастлабки қарор рақами",
                                      "hide-details": "",
                                    },
                                    model: {
                                      value: _vm.value.exDecisionNum,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.value,
                                          "exDecisionNum",
                                          $$v
                                        )
                                      },
                                      expression: "value.exDecisionNum",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "my-0 py-0 mt-4",
                                  attrs: { cols: "12" },
                                },
                                [
                                  _c("v-textarea", {
                                    staticClass: "py-0 my-0",
                                    attrs: { label: "Изоҳ", rows: "2" },
                                    model: {
                                      value: _vm.value.exDecisionComment,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.value,
                                          "exDecisionComment",
                                          $$v
                                        )
                                      },
                                      expression: "value.exDecisionComment",
                                    },
                                  }),
                                ],
                                1
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
                    "div",
                    {
                      staticClass:
                        "full-width mt-7 position-relative border-solid",
                      staticStyle: { "min-height": "60px" },
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            position: "absolute",
                            right: "0",
                            top: "0",
                          },
                        },
                        [
                          _c("v-switch", {
                            staticClass: "p-0 m-0",
                            attrs: { color: "primary", "hide-details": "" },
                            model: {
                              value: _vm.enabled.br,
                              callback: function ($$v) {
                                _vm.$set(_vm.enabled, "br", $$v)
                              },
                              expression: "enabled.br",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "columntitle" }, [
                        _vm._v("8. Товар божхона режимига жойлаштирилганми?"),
                      ]),
                      _vm._v(" "),
                      _vm.enabled.br
                        ? _c("v-text-field", {
                            attrs: {
                              label: "Божхона юк декларацияси рўйхат рақами",
                            },
                            model: {
                              value: _vm.value.declNum,
                              callback: function ($$v) {
                                _vm.$set(_vm.value, "declNum", $$v)
                              },
                              expression: "value.declNum",
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "12" } },
                  [
                    _c("e-arxiv-file", {
                      attrs: {
                        multiple: "",
                        "id-column": "fileId",
                        hint: _vm.$t(
                          "Товарнинг фотосуратлари, Ишлаб чиқарувчи ташкилотнинг товарга тегишли бўлган ҳужжатлари, Келиб чиқиш сертификати, Товарнинг чизмалари, Товарни етарли даражада қайта ишлаш мезонларига мувофиқлигини тасдиқловчи ҳужжатлари, Товарнинг келиб чиқишини аниқлаш учун муҳим бўлган қўшимча маълумотлар, Товарнинг паспорти, Товар ишлаб чиқарилган давлат экспертиза хулосаси"
                        ),
                      },
                      model: {
                        value: _vm.value.fileIdList,
                        callback: function ($$v) {
                          _vm.$set(_vm.value, "fileIdList", $$v)
                        },
                        expression: "value.fileIdList",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("v-row", [
              _c(
                "div",
                { staticClass: "d-flex justify-end mt-4 pb-2" },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "right",
                      attrs: { color: "primary", loading: _vm.loading.save },
                      on: { click: _vm.saveProduct },
                    },
                    [_vm._v(_vm._s(_vm.$t("Товарни сақлаш")) + "\n        ")]
                  ),
                ],
                1
              ),
            ]),
          ]
        },
      },
    ]),
  })
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