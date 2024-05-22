(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_vio_create_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _components_form_myfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/form/myfield */ "./resources/js/components/form/myfield.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _locales_oz_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../locales/oz.json */ "./resources/js/locales/oz.json");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
/* harmony import */ var _components_form_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/form/textfield */ "./resources/js/components/form/textfield.vue");
/* harmony import */ var _components_form_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/form/autocomplete */ "./resources/js/components/form/autocomplete.vue");
/* harmony import */ var _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/form/e-arxiv-file */ "./resources/js/components/form/e-arxiv-file.vue");
/* harmony import */ var _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/form/dialog-chips */ "./resources/js/components/form/dialog-chips.vue");
/* harmony import */ var _components_custom_EditableDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/custom/EditableDate */ "./resources/js/components/custom/EditableDate.vue");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 //








Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_9__).forEach(function (rule) {
  (0,vee_validate__WEBPACK_IMPORTED_MODULE_10__.extend)(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_9__[rule]), {}, {
    // copies rule configuration
    message: _locales_oz_json__WEBPACK_IMPORTED_MODULE_2__.messages[rule] // assign message

  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VioCreate",
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
        text: _i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Ваколатли иқтисодий оператор реестрига кириш учун ариза топшириш'),
        to: '/services/vio',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Ариза юбориш '),
        to: '/services/vio/create',
        disabled: true,
        exact: true
      }],
      app: {
        id: null,
        phone: null,
        email: null,
        address: null,
        type: null,
        way: null,
        faoliyat: null,
        chief: {
          fio: null,
          passport: null,
          birthdate: null,
          pin: null
        },
        accountant: {
          fio: null,
          passport: null,
          birthdate: null,
          pin: null
        },
        founders: [],
        authPersons: [],
        brokers: [],
        shippings: [],
        owners: [],
        courses: [],
        flats: [],
        branches: []
      },
      a: {
        headers: [{
          text: this.$t('№'),
          value: 'id'
        }, {
          text: this.$t('Ф.И.О'),
          value: 'fio'
        }, {
          text: this.$t('ID-картаси (паспорт) маълумотлари'),
          value: 'passport',
          sortable: false
        }, {
          text: this.$t('Туғилган санаси'),
          value: 'birthdate',
          sortable: false
        }, {
          text: '',
          value: 'actions',
          sortable: false,
          width: 100
        }],
        headers2: [{
          text: this.$t('№'),
          value: 'id'
        }, {
          text: this.$t('Ташкилот номи'),
          value: 'org'
        }, {
          text: this.$t('Ташкилот СТИРИ'),
          value: 'tin',
          sortable: false
        }, {
          text: this.$t('Шартнома рақами'),
          value: 'contract',
          sortable: false
        }, {
          text: this.$t('Ф.И.О'),
          value: 'fio',
          sortable: false
        }, {
          text: this.$t('ID-карта (паспорт) маълумотлари'),
          value: 'passport',
          sortable: false
        }, {
          text: this.$t('Туғилган санаси'),
          value: 'birthdate',
          sortable: false
        }, {
          text: '',
          value: 'actions',
          sortable: false,
          width: 100
        }],
        headers3: [{
          text: this.$t('№'),
          value: 'id'
        }, {
          text: this.$t('Шартнома рақами'),
          value: 'contractNumber'
        }, {
          text: this.$t('Кадастр рақами'),
          value: 'cadastralNumber',
          sortable: false
        }, {
          text: this.$t('Омбор манзили'),
          value: 'address',
          sortable: false
        }, {
          text: '',
          value: 'actions',
          sortable: false,
          width: 100
        }],
        headers4: [{
          text: this.$t('№'),
          value: 'id'
        }, {
          text: this.$t('Ташкилот номи'),
          value: 'org'
        }, {
          text: this.$t('Ташкилот манзили'),
          value: 'address',
          sortable: false
        }, {
          text: '',
          value: 'actions',
          sortable: false,
          width: 100
        }],
        headers5: [{
          text: this.$t('№'),
          value: 'id'
        }, {
          text: this.$t('Сертификат рақами'),
          value: 'contractNumber'
        }, {
          text: this.$t('Сертификат санаси'),
          value: 'cadastralNumber',
          sortable: false
        }, {
          text: this.$t('Сертификат номи'),
          value: 'address',
          sortable: false
        }, {
          text: '',
          value: 'actions',
          sortable: false,
          width: 100
        }],
        person: {
          personType: 1,
          /// 1- fiz 0- yur
          firstName: "",
          surName: "",
          lastName: "",
          perAdr: "",
          pin: null,
          tin: null,
          legalName: "Жисмоний шахс",
          phone: '-',
          email: '-'
        }
      },
      stepper: 1,
      completedSteps: [],
      temp: {
        issetBranch: {
          broker: false,
          shipping: false,
          owner: false,
          course: false,
          flat: false
        },
        founder: {
          passport: null,
          fio: null,
          birthdate: null,
          pin: null
        },
        authPerson: {
          passport: null,
          fio: null,
          birthdate: null,
          pin: null
        },
        shipping: {
          org: null,
          address: null
        },
        owner: {
          org: null,
          address: null
        },
        broker: {
          org: null,
          tin: null,
          contract: null,
          passport: null,
          fio: null,
          birthdate: null,
          pin: null
        },
        flat: {
          contractNumber: null,
          fileId: [],
          cadastralNumber: null,
          address: null
        },
        course: {
          contractNumber: null,
          fileId: [],
          cadastralNumber: null,
          address: null
        },
        branch: {
          inn: null,
          name: null,
          address: null
        }
      },
      list: {
        types: [{
          value: 1,
          text: 'Божхона масалалари бўйича ваколатли иқтисодий оператор'
        }, {
          value: 2,
          text: 'Хавфсизлик масалалари бўйича ваколатли иқтисодий оператор'
        }, {
          value: 3,
          text: 'Божхона ва хавфсизлик масалалари бўйича ваколатли иқтисодий оператор'
        }],
        ways: [{
          value: 11,
          text: 'Божхона брокери'
        }, {
          value: 22,
          text: 'Божхона омбори эгаси'
        }, {
          value: 33,
          text: 'Ташувчи сифатида'
        }, {
          value: 44,
          text: 'Товарлар импорт ва (ёки) экспортини амалга ошириш'
        }]
      },
      loading: {
        yuborishLoading: false,
        founder: false,
        accountant: false,
        broker: false,
        shipping: false,
        owner: false,
        flat: false,
        authPerson: false
      },
      dialog: {
        founder: false,
        broker: false,
        shipping: false,
        owner: false,
        course: false,
        flat: false,
        authPerson: false
      }
    };
  },
  created: function created() {
    this.getPersonId();
  },
  methods: {
    deleteOwner: function deleteOwner(item) {
      if (this.app.owners.indexOf(item) !== -1) {
        this.app.owners.splice(this.app.owners.indexOf(item), 1);
        this.$toast.success(this.$t('Муваффаққиятли ўчирилди'));
      } else this.$toast.error(this.$t('Элемент топилмади'));
    },
    deleteFlat: function deleteFlat(item) {
      if (this.app.flats.indexOf(item) !== -1) {
        this.app.flats.splice(this.app.flats.indexOf(item), 1);
        this.$toast.success(this.$t('Муваффаққиятли ўчирилди'));
      } else this.$toast.error(this.$t('Элемент топилмади'));
    },
    deleteCourse: function deleteCourse(item) {
      if (this.app.courses.indexOf(item) !== -1) {
        this.app.courses.splice(this.app.courses.indexOf(item), 1);
        this.$toast.success(this.$t('Муваффаққиятли ўчирилди'));
      } else this.$toast.error(this.$t('Элемент топилмади'));
    },
    deleteFounder: function deleteFounder(item) {
      if (this.app.founders.indexOf(item) !== -1) {
        this.app.founders.splice(this.app.founders.indexOf(item), 1);
        this.$toast.success(this.$t('Таъсисчи муваффаққиятли ўчирилди'));
      } else this.$toast.error(this.$t('Таъсисчи топилмади'));
    },
    deleteAuthPerson: function deleteAuthPerson(item) {
      if (this.app.authPersons.indexOf(item) !== -1) {
        this.app.authPersons.splice(this.app.authPersons.indexOf(item), 1);
        this.$toast.success(this.$t('Ваколатли шахс муваффаққиятли ўчирилди'));
      } else this.$toast.error(this.$t('Ваколатли шахс топилмади'));
    },
    deleteBroker: function deleteBroker(item) {
      if (this.app.brokers.indexOf(item) !== -1) {
        this.app.brokers.splice(this.app.brokers.indexOf(item), 1);
        this.$toast.success(this.$t('Брокер муваффаққиятли ўчирилди'));
      } else this.$toast.error(this.$t('Брокер топилмади'));
    },
    deleteShipping: function deleteShipping(item) {
      if (this.app.shippings.indexOf(item) !== -1) {
        this.app.shippings.splice(this.app.shippings.indexOf(item), 1);
        this.$toast.success(this.$t('Етказиб берувчи муваффаққиятли ўчирилди'));
      } else this.$toast.error(this.$t('Етказиб берувчи топилмади'));
    },
    addFounder: function addFounder() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loading.founder = true;
                _this = _this2; //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)

                _context.next = 4;
                return axios.get('/api/v1/ex_api/getPData', {
                  params: {
                    pasnum: _this.temp.founder.passport,
                    pasdata: _this.temp.founder.birthdate
                  }
                }).then(function (response) {
                  _this.loading.founder = false;

                  if (response.status === 200 && typeof response.data.data.birth_date !== 'undefined') {
                    _this.dialog.founder = false;
                    _this.temp.founder.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                    _this.temp.founder.pin = response.data.data.pinpp;

                    _this.app.founders.push(JSON.parse(JSON.stringify(_this.temp.founder)));

                    Object.keys(_this.temp.founder).forEach(function (propertyItemKey) {
                      _this.temp.founder[propertyItemKey] = null;
                    });

                    _this.$toast.success('Таъсисчи омадли тарзда қўшилди');
                  } else _this.$toast.error('Маълумотларни текшириб қайтадан киринг');
                })["catch"](function (error) {
                  console.log(error);

                  _this.$toast.error('Маълумотларни текшириб қайтадан киринг.');

                  _this2.loading.founder = false;
                });

              case 4:
                _this2.loading.founder = false;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addShipping: function addShipping() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.loading.shipping = true;
                _this = _this3; //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)

                if (_this.temp.shipping.org && _this.temp.shipping.address) {
                  _this.app.shippings.push(JSON.parse(JSON.stringify(_this.temp.shipping)));

                  Object.keys(_this.temp.shipping).forEach(function (propertyItemKey) {
                    _this.temp.shipping[propertyItemKey] = null;
                  });
                  _this.dialog.shipping = false;
                  _this3.loading.shipping = false;

                  _this.$toast.success('Етказиб берувчи омадли тарзда қўшилди');
                } else {
                  _this3.loading.shipping = false;

                  _this.$toast.error('Маълумотларни текшириб қайтадан киритинг');
                }

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addOwner: function addOwner() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.loading.owner = true;
                _this = _this4; //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)

                if (_this.temp.owner.org && _this.temp.owner.address) {
                  _this.app.owners.push(JSON.parse(JSON.stringify(_this.temp.owner)));

                  Object.keys(_this.temp.owner).forEach(function (propertyItemKey) {
                    _this.temp.owner[propertyItemKey] = null;
                  });
                  _this.dialog.owner = false;
                  _this.loading.owner = false;

                  _this.$toast.success('Эгалик ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар омадли тарзда қўшилди');
                } else {
                  _this.loading.owner = false;

                  _this.$toast.error('Маълумотларни текшириб қайтадан киритинг');
                }

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    addFlat: function addFlat() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.loading.flat = true;
                _this = _this5;

                if (_this.temp.flat.contractNumber && _this.temp.flat.address) {
                  _this.app.flats.push(JSON.parse(JSON.stringify(_this.temp.flat)));

                  Object.keys(_this.temp.flat).forEach(function (propertyItemKey) {
                    _this.temp.flat[propertyItemKey] = null;
                  });
                  _this.dialog.flat = false;
                  _this.loading.flat = false;

                  _this.$toast.success('Ижара ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар омадли тарзда қўшилди');
                } else {
                  _this.loading.flat = false;

                  _this.$toast.error('Маълумотларни текшириб қайтадан киритинг');
                }

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    addCourse: function addCourse() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.loading.course = true;
                _this = _this6;

                if (_this.temp.course.contractNumber && _this.temp.course.address) {
                  _this.app.courses.push(JSON.parse(JSON.stringify(_this.temp.course)));

                  Object.keys(_this.temp.course).forEach(function (propertyItemKey) {
                    _this.temp.course[propertyItemKey] = null;
                  });
                  _this.dialog.course = false;
                  _this.loading.course = false;

                  _this.$toast.success('Ижара ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар омадли тарзда қўшилди');
                } else {
                  _this.loading.course = false;

                  _this.$toast.error('Маълумотларни текшириб қайтадан киритинг');
                }

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    addAuthPerson: function addAuthPerson() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.loading.authPerson = true;
                _this = _this7; //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)

                _context6.next = 4;
                return axios.get('/api/v1/ex_api/getPData', {
                  params: {
                    pasnum: _this.temp.authPerson.passport,
                    pasdata: _this.temp.authPerson.birthdate
                  }
                }).then(function (response) {
                  _this.loading.authPerson = false;

                  if (response.status === 200 && typeof response.data.data.birth_date !== 'undefined') {
                    _this.dialog.authPerson = false;
                    _this.temp.authPerson.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                    _this.temp.authPerson.pin = response.data.data.pinpp;

                    _this.app.authPersons.push(JSON.parse(JSON.stringify(_this.temp.authPerson)));

                    Object.keys(_this.temp.authPerson).forEach(function (propertyItemKey) {
                      _this.temp.authPerson[propertyItemKey] = null;
                    });

                    _this.$toast.success('Ваколатли шахс омадли тарзда қўшилди');
                  } else _this.$toast.error('Маълумотларни текшириб қайтадан киринг');
                })["catch"](function (error) {
                  console.log(error);

                  _this.$toast.error('Маълумотларни текшириб қайтадан киринг.');

                  _this7.loading.authPerson = false;
                });

              case 4:
                _this7.loading.authPerson = false;

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    addBroker: function addBroker() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var _this, isValid;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this8.loading.broker = true;
                _this = _this8;
                _context7.next = 4;
                return _this8.$refs.stepValidationBroker.validate();

              case 4:
                isValid = _context7.sent;

                if (!isValid) {
                  _context7.next = 10;
                  break;
                }

                _context7.next = 8;
                return axios.get('/api/v1/ex_api/getPData', {
                  params: {
                    pasnum: _this.temp.broker.passport,
                    pasdata: _this.temp.broker.birthdate
                  }
                }).then(function (response) {
                  _this.loading.broker = false;

                  if (response.status === 200 && typeof response.data.data.birth_date !== 'undefined') {
                    _this.dialog.broker = false;
                    _this.temp.broker.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                    _this.temp.broker.pin = response.data.data.pinpp;

                    _this.app.brokers.push(JSON.parse(JSON.stringify(_this.temp.broker)));

                    Object.keys(_this.temp.broker).forEach(function (propertyItemKey) {
                      _this.temp.broker[propertyItemKey] = null;
                    });

                    _this.$toast.success('Ваколатли шахс омадли тарзда қўшилди');
                  } else _this.$toast.error('Маълумотларни текшириб қайтадан киринг');
                })["catch"](function (error) {
                  console.log(error);

                  _this.$toast.error('Маълумотларни текшириб қайтадан киринг.');

                  _this8.loading.broker = false;
                });

              case 8:
                _context7.next = 11;
                break;

              case 10:
                _this.$toast.error(_this.$t('Маълумотларни тўлдириб қайтадан юборинг'));

              case 11:
                _this8.loading.broker = false;

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    addAccountant: function addAccountant() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this9.loading.accountant = true;
                _this = _this9; //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)

                _context8.next = 4;
                return axios.get('/api/v1/ex_api/getPData', {
                  params: {
                    pasnum: _this.app.accountant.passport,
                    pasdata: _this.app.accountant.birthdate
                  }
                }).then(function (response) {
                  _this.loading.accountant = false;

                  if (response.status === 200 && typeof response.data.data.birth_date !== 'undefined') {
                    _this.app.accountant.fio = response.data.data.surnamelatin + ' ' + response.data.data.namelatin + ' ' + response.data.data.patronymlatin;
                    _this.app.accountant.pin = response.data.data.pinpp;

                    _this.$toast.success('Бухгалтер омадли тарзда қўшилди');
                  } else _this.$toast.error('Маълумотларни текшириб қайтадан киринг');
                })["catch"](function (error) {
                  console.log(error);

                  _this.$toast.error('Маълумотларни текшириб қайтадан киринг.');

                  _this9.loading.accountant = false;
                });

              case 4:
                _this9.loading.accountant = false;

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getPasportData: function getPasportData() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this10.loading.yuborishLoading = true;
                _this = _this10; //let md=md5( this.passport.seriya + this.passport.number + "(:" + this.passport.date)

                _context9.next = 4;
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
                  } else _this.$toast.error('Маълумотларни текшириб қайтадан киринг');
                })["catch"](function () {
                  _this.$toast.error('Маълумотларни текшириб қайтадан киринг.');

                  _this10.loading.yuborishLoading = false;
                });

              case 4:
                _this10.loading.yuborishLoading = false;

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    getPersonId: function getPersonId() {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
        var _this, legal_info;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _this = _this11;
                _context10.prev = 1;
                _this11.a.person.firstName = _this11.$auth.user().first_name;
                _this11.a.person.surName = _this11.$auth.user().mid_name;
                _this11.a.person.lastName = _this11.$auth.user().sur_name;
                _this11.a.person.phone = _this11.$auth.user().phone;
                _this11.a.person.email = _this11.$auth.user().email;
                _this11.a.person.pin = _this11.$auth.user().pin;
                _this11.a.person.tin = _this11.$auth.user().tin;
                _this11.a.person.perAdr = _this11.$auth.user().per_adr;

                if (_this11.$auth.user().type !== 1) {
                  _this11.a.person.personType = 0;
                  legal_info = JSON.parse(_this11.$auth.user().legal_info);

                  if (typeof legal_info[0] !== 'undefined' && typeof legal_info[0].le_name !== 'undefined') {
                    _this11.a.person.legalName = legal_info[0].le_name;
                  } else _this11.a.person.legalName = "";
                }

                _context10.next = 13;
                return _this11.$auth.plugins.http.post('/api/v1/ex_api/vio-person', _this11.a.person).then(function (res) {
                  if (res.status === 200) {
                    _this.app.id = res.data.data.id;
                  } else {
                    _this.$toast.error(_this.$t('Сервер билан алоқа йўқ!'));
                  }
                });

              case 13:
                _context10.next = 19;
                break;

              case 15:
                _context10.prev = 15;
                _context10.t0 = _context10["catch"](1);

                _this.$toast.error(_this.$t('Сервер билан алоқа йўқ!'));

                console.log(_context10.t0);

              case 19:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[1, 15]]);
      }))();
    },
    nextStep: function nextStep() {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
        var isValid, _this, _requestData, _requestData2, requestData;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                isValid = false;
                _this = _this12;
                _context11.t0 = _this12.stepper;
                _context11.next = _context11.t0 === 1 ? 5 : _context11.t0 === 2 ? 10 : _context11.t0 === 3 ? 15 : 22;
                break;

              case 5:
                _context11.next = 7;
                return _this.$refs.stepValidation1.validate();

              case 7:
                isValid = _context11.sent;

                if (isValid) {
                  _requestData = {
                    id: _this.app.id,
                    step: 1,
                    s10AppsDTO1: {
                      pin: _this.$auth.user().pin,
                      phone: _this.$auth.user().phone,
                      tin: _this.$auth.user().tin,
                      legalName: _this.a.person.legalName,
                      legalAddress: _this.$auth.user().per_adr,
                      legalEmail: _this.$auth.user().email,
                      vioType: _this.app.type,

                      /* 1-1tur; 2-2tur, 3-3tur, 4-1va2tur */
                      lineOfWork: _this.app.way,
                      // /** yonalish */
                      workAbout: _this.app.faoliyat
                    },
                    personDTO1: [{
                      legalName: "",
                      legalAddress: "",
                      tin: "",
                      contractNum: "",
                      fullName: _this.app.chief.fio,
                      passport: _this.app.chief.passport,
                      birthDate: _this.app.chief.birthdate,
                      personType: 0
                    }]
                  }; // requestData.push

                  if (_this.app.founders && _this.app.founders.length > 0) _this.app.founders.forEach(function (founderItem) {
                    _requestData.personDTO1.push({
                      legalName: "",
                      legalAddress: "",
                      tin: "",
                      contractNum: "",
                      fullName: founderItem.fio,
                      passport: founderItem.passport,
                      birthDate: founderItem.birthdate,
                      personType: 1
                    });
                  });

                  _this.$auth.plugins.http.post('/api/v1/ex_api/vio-app', _requestData).then(function (res) {
                    if (res.status === 200) {
                      _this.stepper++;

                      _this.completedSteps.push(1);
                    } else {
                      _this.$toast.error(_this.$t('Хатолик юз берди. Қайта уриниб кўринг!'));
                    }
                  })["catch"](function (error) {
                    _this.$toast.error(_this.$t('Хатолик юз берди. Қайта уриниб кўринг!'));

                    console.log(error);
                  });
                }

                return _context11.abrupt("break", 22);

              case 10:
                _context11.next = 12;
                return _this.$refs.stepValidation2.validate();

              case 12:
                isValid = _context11.sent;

                if (isValid) {
                  _requestData2 = {
                    id: _this.app.id,
                    step: 2,
                    personDTO1: [{
                      legalName: "",
                      legalAddress: "",
                      tin: "",
                      contractNum: "",
                      fullName: _this.app.accountant.fio,
                      passport: _this.app.accountant.passport,
                      birthDate: _this.app.accountant.birthdate,
                      personType: 2
                    }]
                  }; // requestData.push

                  if (_this.app.authPersons && _this.app.authPersons.length > 0) _this.app.authPersons.forEach(function (item) {
                    _requestData2.personDTO1.push({
                      legalName: "",
                      legalAddress: "",
                      tin: "",
                      contractNum: "",
                      fullName: item.fio,
                      passport: item.passport,
                      birthDate: item.birthdate,
                      personType: 3
                    });
                  });
                  if (_this.app.brokers && _this.app.brokers.length > 0) _this.app.brokers.forEach(function (item) {
                    _requestData2.personDTO1.push({
                      legalName: item.org,
                      legalAddress: "",
                      tin: item.tin,
                      contractNum: item.contract,
                      fullName: item.fio,
                      passport: item.passport,
                      birthDate: item.birthdate,
                      personType: 4
                    });
                  });

                  _this.$auth.plugins.http.post('/api/v1/ex_api/vio-app', _requestData2).then(function (res) {
                    if (res.status === 200) {
                      _this.stepper++;

                      _this.completedSteps.push(2);
                    } else {
                      _this.$toast.error(_this.$t('Хатолик юз берди. Қайта уриниб кўринг'));
                    }
                  })["catch"](function (error) {
                    _this.$toast.error(_this.$t('Хатолик юз берди. Қайта уриниб кўринг!'));

                    console.log(error);
                  });
                }

                return _context11.abrupt("break", 22);

              case 15:
                requestData = {
                  id: _this.app.id,
                  step: 3,
                  personDTO1: [],
                  earxivDTO1: []
                }; // requestData.push

                if (_this.app.owners && _this.app.owners.length > 0) _this.app.owners.forEach(function (item) {
                  requestData.personDTO1.push({
                    legalName: item.org,
                    legalAddress: item.address,
                    tin: "",
                    contractNum: "",
                    fullName: "",
                    passport: "",
                    birthDate: "",
                    personType: 6
                  });
                });
                if (_this.app.shippings && _this.app.shippings.length > 0) _this.app.shippings.forEach(function (item) {
                  requestData.personDTO1.push({
                    legalName: item.org,
                    legalAddress: item.address,
                    tin: "",
                    contractNum: "",
                    fullName: "",
                    passport: "",
                    birthDate: "",
                    personType: 5
                  });
                });
                if (_this.app.flats && _this.app.flats.length > 0) _this.app.flats.forEach(function (item) {
                  requestData.earxivDTO1.push({
                    contractNumber: item.contractNumber,
                    fileId: item.fileId && item.fileId.length > 0 && item.fileId[0].id ? item.fileId[0].id : null,
                    cadastralNumber: item.cadastralNumber,
                    depotAddress: item.address,
                    docType: "1"
                  });
                });
                if (_this.app.courses && _this.app.courses.length > 0) _this.app.courses.forEach(function (item) {
                  requestData.earxivDTO1.push({
                    contractNumber: item.contractNumber,
                    fileId: item.fileId && item.fileId.length > 0 && item.fileId[0].id ? item.fileId[0].id : null,
                    cadastralNumber: item.cadastralNumber,
                    depotAddress: item.address,
                    docType: "2"
                  });
                });

                _this.$auth.plugins.http.post('/api/v1/ex_api/vio-app', requestData).then(function (res) {
                  if (res.status === 200) {
                    _this.$toast.success(_this.$t('Аризангиз қабул қилинди!'));

                    setTimeout(function () {
                      _this.$router.push("/services/vio/" + _this.app.id);
                    }, 500);
                  } else {
                    _this.$toast.error(_this.$t('Хатолик юз берди. Қайта уриниб кўринг'));
                  }
                })["catch"](function (error) {
                  _this.$toast.error(_this.$t('Хатолик юз берди. Қайта уриниб кўринг!'));

                  console.log(error);
                });

                return _context11.abrupt("break", 22);

              case 22:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
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
    EditableDate: _components_custom_EditableDate__WEBPACK_IMPORTED_MODULE_8__["default"],
    Textfield: _components_form_textfield__WEBPACK_IMPORTED_MODULE_4__["default"],
    DialogChips: _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_7__["default"],
    EArxivFile: _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_6__["default"],
    AutocompleteField: _components_form_autocomplete__WEBPACK_IMPORTED_MODULE_5__["default"],
    TextField: _components_form_textfield__WEBPACK_IMPORTED_MODULE_4__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_10__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_10__.ValidationObserver,
    Myfield: _components_form_myfield__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=style&index=0&lang=scss& ***!
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/views/frontend/services/vio/create.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/frontend/services/vio/create.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_167c13bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=167c13bc& */ "./resources/js/views/frontend/services/vio/create.vue?vue&type=template&id=167c13bc&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/vio/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/frontend/services/vio/create.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_167c13bc___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_167c13bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/vio/create.vue"
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

/***/ "./resources/js/views/frontend/services/vio/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/vio/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/vio/create.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/vio/create.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=style&index=0&lang=scss&");


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

/***/ "./resources/js/views/frontend/services/vio/create.vue?vue&type=template&id=167c13bc&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/vio/create.vue?vue&type=template&id=167c13bc& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_167c13bc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_167c13bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_167c13bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=167c13bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=template&id=167c13bc&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=template&id=167c13bc&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/vio/create.vue?vue&type=template&id=167c13bc& ***!
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
                            _vm.$t(
                              "Ваколатли иқтисодий оператор реестрига кириш учун ариза топшириш"
                            )
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
                          "\n                        " +
                            _vm._s(_vm.$t("Умумий маълумотлар")) +
                            "\n                    "
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
                          "\n                        " +
                            _vm._s(_vm.$t("Қўшимча маълумотлар")) +
                            "\n                    "
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
                          "\n                        " +
                            _vm._s(_vm.$t("Омбор маълумоти")) +
                            "\n                    "
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
                                      href: "/storage/files/dastlabki-user.pptx",
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
                                        "\n                            "
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
                                      _c("v-row", { staticClass: "mt-2" }),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "4" } },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "vio_card" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "vio_card_title",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                Корхона рахбари\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "field" },
                                                    [
                                                      _c("text-field", {
                                                        staticClass: "w-100",
                                                        attrs: {
                                                          title: _vm.$t(
                                                            "ID-карта (паспорт) маълумотлари"
                                                          ),
                                                          rules: "required",
                                                          dense: "",
                                                          outlined: "",
                                                          "persistent-placeholder":
                                                            "",
                                                          "hide-details": "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.app.chief
                                                              .passport,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.app.chief,
                                                              "passport",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "app.chief.passport",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "field" },
                                                    [
                                                      _c("editable-date", {
                                                        staticClass: "w-100",
                                                        attrs: {
                                                          dense: "",
                                                          outlined: "",
                                                          "persistent-placeholder":
                                                            "",
                                                          "hide-details": "",
                                                          label:
                                                            _vm.$t(
                                                              "Туғилган санаси"
                                                            ),
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.app.chief
                                                              .birthdate,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.app.chief,
                                                              "birthdate",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "app.chief.birthdate",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticStyle: {
                                                            "margin-left":
                                                              "10px",
                                                            "margin-top":
                                                              "-3px",
                                                            height: "40px",
                                                          },
                                                          attrs: {
                                                            color: "primary",
                                                            loading:
                                                              _vm.loading
                                                                .yuborishLoading,
                                                            "x-small": "",
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.getPasportData,
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              attrs: {
                                                                color: "white",
                                                                size: "40",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "mdi-magnify"
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
                                                    "div",
                                                    { staticClass: "field" },
                                                    [
                                                      _c("text-field", {
                                                        staticClass: "w-100",
                                                        attrs: {
                                                          title:
                                                            _vm.$t("Ф.И.О"),
                                                          rules: "required",
                                                          dense: "",
                                                          outlined: "",
                                                          "persistent-placeholder":
                                                            "",
                                                          "hide-details": "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.app.chief.fio,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.app.chief,
                                                              "fio",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "app.chief.fio",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "4" } },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "vio_card" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "vio_card_title",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                Юридик шахс манзили, боғланиш маълумотлари\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "field" },
                                                    [
                                                      _c("text-field", {
                                                        directives: [
                                                          {
                                                            name: "mask",
                                                            rawName: "v-mask",
                                                            value:
                                                              "(##) ### - ## - ##",
                                                            expression:
                                                              "'(##) ### - ## - ##'",
                                                          },
                                                        ],
                                                        staticClass: "w-100",
                                                        attrs: {
                                                          title:
                                                            _vm.$t("Телефон"),
                                                          rules: "required",
                                                          dense: "",
                                                          outlined: "",
                                                          "persistent-placeholder":
                                                            "",
                                                          "hide-details": "",
                                                        },
                                                        model: {
                                                          value: _vm.app.phone,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.app,
                                                              "phone",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "app.phone",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "field" },
                                                    [
                                                      _c("text-field", {
                                                        staticClass: "w-100",
                                                        attrs: {
                                                          title:
                                                            _vm.$t(
                                                              "Электрон почта"
                                                            ),
                                                          rules: "required",
                                                          dense: "",
                                                          outlined: "",
                                                          "persistent-placeholder":
                                                            "",
                                                          "hide-details": "",
                                                        },
                                                        model: {
                                                          value: _vm.app.email,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.app,
                                                              "email",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "app.email",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "field" },
                                                    [
                                                      _c("text-field", {
                                                        staticClass: "w-100",
                                                        attrs: {
                                                          title:
                                                            _vm.$t(
                                                              "Ташкилот манзили"
                                                            ),
                                                          rules: "required",
                                                          dense: "",
                                                          outlined: "",
                                                          "persistent-placeholder":
                                                            "",
                                                          "hide-details": "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.app.address,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.app,
                                                              "address",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "app.address",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "4" } },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "vio_card" },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "vio_card_title",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                Ариза тури ва юридик шахснинг асосий фаолияти\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    staticClass: "field",
                                                    attrs: {
                                                      name: "Ариза тури",
                                                      rules: "required",
                                                      tag: "div",
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
                                                                  staticClass:
                                                                    "w-100",
                                                                  attrs: {
                                                                    title:
                                                                      _vm.$t(
                                                                        "Ариза турини танланг"
                                                                      ),
                                                                    dense: "",
                                                                    outlined:
                                                                      "",
                                                                    "persistent-placeholder":
                                                                      "",
                                                                    "hide-details":
                                                                      "",
                                                                    items:
                                                                      _vm.list
                                                                        .types,
                                                                    "error-messages":
                                                                      errors,
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm.app
                                                                        .type,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.app,
                                                                          "type",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "app.type",
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
                                                  _vm._v(" "),
                                                  _c("ValidationProvider", {
                                                    staticClass: "field",
                                                    attrs: {
                                                      name: "Ариза тури",
                                                      rules: "required",
                                                      tag: "div",
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
                                                                  staticClass:
                                                                    "w-100",
                                                                  attrs: {
                                                                    title:
                                                                      _vm.$t(
                                                                        "Фаолият йўналишини танланг"
                                                                      ),
                                                                    dense: "",
                                                                    outlined:
                                                                      "",
                                                                    "persistent-placeholder":
                                                                      "",
                                                                    "hide-details":
                                                                      "",
                                                                    items:
                                                                      _vm.list
                                                                        .ways,
                                                                    "error-messages":
                                                                      errors,
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm.app
                                                                        .way,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.app,
                                                                          "way",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "app.way",
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
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "field" },
                                                    [
                                                      _c("text-field", {
                                                        staticClass: "w-100",
                                                        attrs: {
                                                          title:
                                                            _vm.$t(
                                                              "Фаолият ҳақида"
                                                            ),
                                                          rules: "required",
                                                          dense: "",
                                                          outlined: "",
                                                          "persistent-placeholder":
                                                            "",
                                                          "hide-details": "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.app.faoliyat,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.app,
                                                              "faoliyat",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "app.faoliyat",
                                                        },
                                                      }),
                                                    ],
                                                    1
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
                                        { staticClass: "mt-10 outlined-row" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "row-title" },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "Корхона таъсисчилари"
                                                    )
                                                  )
                                                ),
                                              ]),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-end w-100 mb-2 ",
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    small: "",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.dialog.founder = true
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "white" },
                                                    },
                                                    [_vm._v("mdi-plus")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(_vm.$t("Қўшиш"))
                                                    ),
                                                  ]),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-dialog",
                                            {
                                              attrs: { "max-width": "600" },
                                              model: {
                                                value: _vm.dialog.founder,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.dialog,
                                                    "founder",
                                                    $$v
                                                  )
                                                },
                                                expression: "dialog.founder",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-card",
                                                { attrs: { elevation: "2" } },
                                                [
                                                  _c(
                                                    "v-toolbar",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "20px",
                                                        color: "#fff",
                                                      },
                                                      attrs: {
                                                        color: "primary",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "Янги таъсисчи қўшиш"
                                                            )
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-text",
                                                    [
                                                      _c(
                                                        "v-row",
                                                        {
                                                          staticClass:
                                                            "px-4 pt-4",
                                                        },
                                                        [
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "6",
                                                              },
                                                            },
                                                            [
                                                              _c("text-field", {
                                                                attrs: {
                                                                  title:
                                                                    "ID-картаси (паспорт) маълумотлари",
                                                                  "persistent-placeholder":
                                                                    "",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.temp
                                                                      .founder
                                                                      .passport,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.temp
                                                                          .founder,
                                                                        "passport",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "temp.founder.passport",
                                                                },
                                                              }),
                                                            ],
                                                            1
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
                                                              _c(
                                                                "editable-date",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Туғилган санаси",
                                                                    "persistent-placeholder":
                                                                      "",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm.temp
                                                                        .founder
                                                                        .birthdate,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm
                                                                            .temp
                                                                            .founder,
                                                                          "birthdate",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "temp.founder.birthdate",
                                                                  },
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
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-actions",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-end",
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            color: "primary",
                                                            text: "",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              _vm.dialog.founder = false
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Ёпиш\n                                                "
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            color: "primary",
                                                            text: "",
                                                            loading:
                                                              _vm.loading
                                                                .founder,
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.addFounder,
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Сақлаш\n                                                "
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
                                          _c(
                                            "div",
                                            { staticClass: "px-4 d-block" },
                                            [
                                              _c("v-data-table", {
                                                staticClass: "elevation-1",
                                                attrs: {
                                                  headers: _vm.a.headers,
                                                  items: _vm.app.founders,
                                                  "items-per-page": 2,
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "item.id",
                                                      fn: function (ref) {
                                                        var item = ref.item
                                                        return [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.app.founders.indexOf(
                                                                  item
                                                                ) + 1
                                                              ) +
                                                              "\n                                            "
                                                          ),
                                                        ]
                                                      },
                                                    },
                                                    {
                                                      key: "item.actions",
                                                      fn: function (ref) {
                                                        var item = ref.item
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                text: "",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.deleteFounder(
                                                                      item
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "danger",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "mdi-delete"
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
                                              "\n                                            " +
                                                _vm._s(_vm.$t("Орқага")) +
                                                "\n                                        "
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
                                              "\n                                            " +
                                                _vm._s(_vm.$t("Давом этиш")) +
                                                "\n                                        "
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
                                      href: "/storage/files/dastlabki-user.pptx",
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
                                        "\n                            "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("ValidationObserver", {
                              ref: "stepValidation2",
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
                                        { staticClass: "mt-10 outlined-row" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "row-title" },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("Корхона бухгалтери")
                                                  )
                                                ),
                                              ]),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "px-4 pt-10 d-block",
                                            },
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "4" } },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "field",
                                                        },
                                                        [
                                                          _c("text-field", {
                                                            staticClass:
                                                              "w-100",
                                                            attrs: {
                                                              title: _vm.$t(
                                                                "ID-карта (паспорт) маълумотлари"
                                                              ),
                                                              rules: "required",
                                                              dense: "",
                                                              outlined: "",
                                                              "persistent-placeholder":
                                                                "",
                                                              "hide-details":
                                                                "",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app
                                                                  .accountant
                                                                  .passport,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .accountant,
                                                                    "passport",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.accountant.passport",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "4" } },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "field",
                                                        },
                                                        [
                                                          _c("editable-date", {
                                                            staticClass:
                                                              "w-100",
                                                            attrs: {
                                                              dense: "",
                                                              outlined: "",
                                                              "persistent-placeholder":
                                                                "",
                                                              "hide-details":
                                                                "",
                                                              label:
                                                                _vm.$t(
                                                                  "Туғилган санаси"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app
                                                                  .accountant
                                                                  .birthdate,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .accountant,
                                                                    "birthdate",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.accountant.birthdate",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticStyle: {
                                                                "margin-left":
                                                                  "10px",
                                                                "margin-top":
                                                                  "-3px",
                                                                height: "40px",
                                                              },
                                                              attrs: {
                                                                loading:
                                                                  _vm.loading
                                                                    .accountant,
                                                                color:
                                                                  "primary",
                                                                "x-small": "",
                                                              },
                                                              on: {
                                                                click:
                                                                  _vm.addAccountant,
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "white",
                                                                    size: "40",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "mdi-magnify"
                                                                  ),
                                                                ]
                                                              ),
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
                                                    "v-col",
                                                    { attrs: { cols: "4" } },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass: "field",
                                                        },
                                                        [
                                                          _c("text-field", {
                                                            staticClass:
                                                              "w-100",
                                                            attrs: {
                                                              title:
                                                                _vm.$t("Ф.И.О"),
                                                              rules: "required",
                                                              dense: "",
                                                              outlined: "",
                                                              "persistent-placeholder":
                                                                "",
                                                              "hide-details":
                                                                "",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.app
                                                                  .accountant
                                                                  .fio,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.app
                                                                      .accountant,
                                                                    "fio",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "app.accountant.fio",
                                                            },
                                                          }),
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
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { staticClass: "mt-10 outlined-row" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "row-title" },
                                            [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("Ваколатли шахслар")
                                                  )
                                                ),
                                              ]),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-end w-100 mb-2 ",
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    small: "",
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      _vm.dialog.authPerson = true
                                                    },
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      attrs: { color: "white" },
                                                    },
                                                    [_vm._v("mdi-plus")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(_vm.$t("Қўшиш"))
                                                    ),
                                                  ]),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-dialog",
                                            {
                                              attrs: { "max-width": "600" },
                                              model: {
                                                value: _vm.dialog.authPerson,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.dialog,
                                                    "authPerson",
                                                    $$v
                                                  )
                                                },
                                                expression: "dialog.authPerson",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-card",
                                                { attrs: { elevation: "2" } },
                                                [
                                                  _c(
                                                    "v-toolbar",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "20px",
                                                        color: "#fff",
                                                      },
                                                      attrs: {
                                                        color: "primary",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "Янги ваколатли шахс қўшиш"
                                                            )
                                                          ) +
                                                          "\n                                            "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-text",
                                                    [
                                                      _c(
                                                        "v-row",
                                                        {
                                                          staticClass:
                                                            "px-4 pt-4",
                                                        },
                                                        [
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "6",
                                                              },
                                                            },
                                                            [
                                                              _c("text-field", {
                                                                attrs: {
                                                                  title:
                                                                    "ID-картаси (паспорт) маълумотлари",
                                                                  "persistent-placeholder":
                                                                    "",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.temp
                                                                      .authPerson
                                                                      .passport,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.temp
                                                                          .authPerson,
                                                                        "passport",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "temp.authPerson.passport",
                                                                },
                                                              }),
                                                            ],
                                                            1
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
                                                              _c(
                                                                "editable-date",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Туғилган санаси",
                                                                    "persistent-placeholder":
                                                                      "",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm.temp
                                                                        .authPerson
                                                                        .birthdate,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm
                                                                            .temp
                                                                            .authPerson,
                                                                          "birthdate",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "temp.authPerson.birthdate",
                                                                  },
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
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-actions",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-end",
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            color: "primary",
                                                            text: "",
                                                          },
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              _vm.dialog.authPerson = false
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Ёпиш\n                                                "
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            color: "primary",
                                                            text: "",
                                                            loading:
                                                              _vm.loading
                                                                .authPerson,
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.addAuthPerson,
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Сақлаш\n                                                "
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
                                          _c(
                                            "div",
                                            { staticClass: "px-4 d-block" },
                                            [
                                              _c("v-data-table", {
                                                staticClass: "elevation-1",
                                                attrs: {
                                                  headers: _vm.a.headers,
                                                  items: _vm.app.authPersons,
                                                  "items-per-page": 2,
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "item.id",
                                                      fn: function (ref) {
                                                        var item = ref.item
                                                        return [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                _vm.app.authPersons.indexOf(
                                                                  item
                                                                ) + 1
                                                              ) +
                                                              "\n                                            "
                                                          ),
                                                        ]
                                                      },
                                                    },
                                                    {
                                                      key: "item.actions",
                                                      fn: function (ref) {
                                                        var item = ref.item
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              attrs: {
                                                                text: "",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.deleteAuthPerson(
                                                                      item
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "v-icon",
                                                                {
                                                                  attrs: {
                                                                    color:
                                                                      "danger",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "mdi-delete"
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
                                        { staticClass: "mt-10 outlined-row" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "row-title" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "d-flex align-center justify-space-between py-0",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "Корхона шартнома асосида брокерлик фирмалари хизматларидан фойдаланиладими ?"
                                                      )
                                                    ) +
                                                      "\n                                        "
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-center align-center",
                                                    },
                                                    [
                                                      _vm._v("Йўқ "),
                                                      _c("v-switch", {
                                                        staticClass:
                                                          "ml-6 mr-2 my-2",
                                                        attrs: {
                                                          "hide-details": "",
                                                          inset: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.temp.issetBranch
                                                              .broker,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.temp
                                                                .issetBranch,
                                                              "broker",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "temp.issetBranch.broker",
                                                        },
                                                      }),
                                                      _vm._v(" Ҳа"),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.temp.issetBranch.broker
                                            ? [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-end w-100 mb-2 ",
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                          small: "",
                                                        },
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            _vm.dialog.broker = true
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "white",
                                                            },
                                                          },
                                                          [_vm._v("mdi-plus")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t("Қўшиш")
                                                            )
                                                          ),
                                                        ]),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-dialog",
                                                  {
                                                    attrs: {
                                                      "max-width": "600",
                                                    },
                                                    model: {
                                                      value: _vm.dialog.broker,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.dialog,
                                                          "broker",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "dialog.broker",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "v-card",
                                                      {
                                                        attrs: {
                                                          elevation: "2",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-toolbar",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "20px",
                                                              color: "#fff",
                                                            },
                                                            attrs: {
                                                              color: "primary",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Янги брокерлик фирмани қўшиш"
                                                                  )
                                                                ) +
                                                                "\n                                                "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-card-text",
                                                          [
                                                            _c(
                                                              "validation-observer",
                                                              {
                                                                ref: "stepValidationBroker",
                                                                attrs: {
                                                                  disabled: "",
                                                                },
                                                                scopedSlots:
                                                                  _vm._u(
                                                                    [
                                                                      {
                                                                        key: "default",
                                                                        fn: function (
                                                                          ref
                                                                        ) {
                                                                          var invalid =
                                                                            ref.invalid
                                                                          return [
                                                                            _c(
                                                                              "v-row",
                                                                              {
                                                                                staticClass:
                                                                                  "px-4 pt-4",
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Ташкилот номи",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .broker
                                                                                                .org,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .broker,
                                                                                                  "org",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.broker.org",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Ташкилот СТИРи",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .broker
                                                                                                .tin,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .broker,
                                                                                                  "tin",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.broker.tin",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Шартнома рақами",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .broker
                                                                                                .contract,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .broker,
                                                                                                  "contract",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.broker.contract",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "ID-картаси (паспорт) маълумотлари",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .broker
                                                                                                .passport,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .broker,
                                                                                                  "passport",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.broker.passport",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "editable-date",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            label:
                                                                                              "Туғилган санаси",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .broker
                                                                                                .birthdate,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .broker,
                                                                                                  "birthdate",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.broker.birthdate",
                                                                                          },
                                                                                      }
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
                                                          "v-card-actions",
                                                          {
                                                            staticClass:
                                                              "d-flex justify-content-end",
                                                          },
                                                          [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      _vm.dialog.broker = false
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Ёпиш\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                  loading:
                                                                    _vm.loading
                                                                      .broker,
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.addBroker,
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Сақлаш\n                                                    "
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
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "px-4 d-block",
                                                  },
                                                  [
                                                    _c("v-data-table", {
                                                      staticClass:
                                                        "elevation-1",
                                                      attrs: {
                                                        headers: _vm.a.headers2,
                                                        items: _vm.app.brokers,
                                                        "items-per-page": 2,
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "item.id",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _vm._v(
                                                                  "\n                                                    " +
                                                                    _vm._s(
                                                                      _vm.app.brokers.indexOf(
                                                                        item
                                                                      ) + 1
                                                                    ) +
                                                                    "\n                                                "
                                                                ),
                                                              ]
                                                            },
                                                          },
                                                          {
                                                            key: "item.actions",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      text: "",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          return _vm.deleteBroker(
                                                                            item
                                                                          )
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "danger",
                                                                        },
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-delete"
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
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            : _vm._e(),
                                        ],
                                        2
                                      ),
                                    ]
                                  },
                                },
                              ]),
                            }),
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
                                              "\n                                            " +
                                                _vm._s(_vm.$t("Орқага")) +
                                                "\n                                        "
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
                                              "\n                                            " +
                                                _vm._s(_vm.$t("Давом этиш")) +
                                                "\n                                        "
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
                                      href: "/storage/files/dastlabki-user.pptx",
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
                                        "\n                            "
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
                                    return [
                                      _c("v-row"),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { staticClass: "mt-10 outlined-row" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "row-title" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "d-flex align-center justify-space-between py-0",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "Ташкилотингиз доимий бир турдаги етказиб берувчилар хизматидан фойдаланадими?"
                                                      )
                                                    ) +
                                                      "\n                                        "
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-center align-center",
                                                    },
                                                    [
                                                      _vm._v("Йўқ "),
                                                      _c("v-switch", {
                                                        staticClass:
                                                          "ml-6 mr-2 my-2",
                                                        attrs: {
                                                          "hide-details": "",
                                                          inset: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.temp.issetBranch
                                                              .shipping,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.temp
                                                                .issetBranch,
                                                              "shipping",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "temp.issetBranch.shipping",
                                                        },
                                                      }),
                                                      _vm._v(" Ҳа"),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.temp.issetBranch.shipping
                                            ? [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-end w-100 mb-2 ",
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                          small: "",
                                                        },
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            _vm.dialog.shipping = true
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "white",
                                                            },
                                                          },
                                                          [_vm._v("mdi-plus")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t("Қўшиш")
                                                            )
                                                          ),
                                                        ]),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-dialog",
                                                  {
                                                    attrs: {
                                                      "max-width": "600",
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.dialog.shipping,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.dialog,
                                                          "shipping",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "dialog.shipping",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "v-card",
                                                      {
                                                        attrs: {
                                                          elevation: "2",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-toolbar",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "20px",
                                                              color: "#fff",
                                                            },
                                                            attrs: {
                                                              color: "primary",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Янги етказиб берувчини қўшиш"
                                                                  )
                                                                ) +
                                                                "\n                                                "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-card-text",
                                                          [
                                                            _c(
                                                              "v-row",
                                                              {
                                                                staticClass:
                                                                  "px-4 pt-4",
                                                              },
                                                              [
                                                                _c(
                                                                  "v-col",
                                                                  {
                                                                    attrs: {
                                                                      cols: "6",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "text-field",
                                                                      {
                                                                        attrs: {
                                                                          title:
                                                                            "Ташкилот номи",
                                                                          "persistent-placeholder":
                                                                            "",
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .temp
                                                                              .shipping
                                                                              .org,
                                                                          callback:
                                                                            function (
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm
                                                                                  .temp
                                                                                  .shipping,
                                                                                "org",
                                                                                $$v
                                                                              )
                                                                            },
                                                                          expression:
                                                                            "temp.shipping.org",
                                                                        },
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
                                                                      cols: "6",
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "text-field",
                                                                      {
                                                                        attrs: {
                                                                          title:
                                                                            "Ташкилот манзили",
                                                                          "persistent-placeholder":
                                                                            "",
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .temp
                                                                              .shipping
                                                                              .address,
                                                                          callback:
                                                                            function (
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                _vm
                                                                                  .temp
                                                                                  .shipping,
                                                                                "address",
                                                                                $$v
                                                                              )
                                                                            },
                                                                          expression:
                                                                            "temp.shipping.address",
                                                                        },
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
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-card-actions",
                                                          {
                                                            staticClass:
                                                              "d-flex justify-content-end",
                                                          },
                                                          [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      _vm.dialog.shipping = false
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Ёпиш\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                  loading:
                                                                    _vm.loading
                                                                      .shipping,
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.addShipping,
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Сақлаш\n                                                    "
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
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "px-4 d-block",
                                                  },
                                                  [
                                                    _c("v-data-table", {
                                                      staticClass:
                                                        "elevation-1",
                                                      attrs: {
                                                        headers: _vm.a.headers4,
                                                        items:
                                                          _vm.app.shippings,
                                                        "items-per-page": 2,
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "item.id",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _vm._v(
                                                                  "\n                                                    " +
                                                                    _vm._s(
                                                                      _vm.app.shippings.indexOf(
                                                                        item
                                                                      ) + 1
                                                                    ) +
                                                                    "\n                                                "
                                                                ),
                                                              ]
                                                            },
                                                          },
                                                          {
                                                            key: "item.actions",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      text: "",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          return _vm.deleteShipping(
                                                                            item
                                                                          )
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "danger",
                                                                        },
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-delete"
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
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            : _vm._e(),
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { staticClass: "mt-10 outlined-row" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "row-title" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "d-flex align-center justify-space-between py-0",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "Эгалик ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончаларга эгамисиз?"
                                                      )
                                                    ) +
                                                      "\n                                        "
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-center align-center",
                                                    },
                                                    [
                                                      _vm._v("Йўқ "),
                                                      _c("v-switch", {
                                                        staticClass:
                                                          "ml-6 mr-2 my-2",
                                                        attrs: {
                                                          "hide-details": "",
                                                          inset: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.temp.issetBranch
                                                              .owner,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.temp
                                                                .issetBranch,
                                                              "owner",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "temp.issetBranch.owner",
                                                        },
                                                      }),
                                                      _vm._v(" Ҳа"),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.temp.issetBranch.owner
                                            ? [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-end w-100 mb-2 ",
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                          small: "",
                                                        },
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            _vm.dialog.owner = true
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "white",
                                                            },
                                                          },
                                                          [_vm._v("mdi-plus")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t("Қўшиш")
                                                            )
                                                          ),
                                                        ]),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-dialog",
                                                  {
                                                    attrs: {
                                                      "max-width": "600",
                                                    },
                                                    model: {
                                                      value: _vm.dialog.owner,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.dialog,
                                                          "owner",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "dialog.owner",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "v-card",
                                                      {
                                                        attrs: {
                                                          elevation: "2",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-toolbar",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "20px",
                                                              color: "#fff",
                                                            },
                                                            attrs: {
                                                              color: "primary",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Янги эгалик ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончаларни қўшиш"
                                                                  )
                                                                ) +
                                                                "\n                                                "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-card-text",
                                                          [
                                                            _c(
                                                              "validation-observer",
                                                              {
                                                                ref: "stepValidationOwner",
                                                                attrs: {
                                                                  disabled: "",
                                                                },
                                                                scopedSlots:
                                                                  _vm._u(
                                                                    [
                                                                      {
                                                                        key: "default",
                                                                        fn: function (
                                                                          ref
                                                                        ) {
                                                                          var invalid =
                                                                            ref.invalid
                                                                          return [
                                                                            _c(
                                                                              "v-row",
                                                                              {
                                                                                staticClass:
                                                                                  "px-4 pt-4",
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Ташкилот номи",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .owner
                                                                                                .org,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .owner,
                                                                                                  "org",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.owner.org",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Ташкилот СТИРи",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .owner
                                                                                                .address,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .owner,
                                                                                                  "address",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.owner.address",
                                                                                          },
                                                                                      }
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
                                                          "v-card-actions",
                                                          {
                                                            staticClass:
                                                              "d-flex justify-content-end",
                                                          },
                                                          [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      _vm.dialog.owner = false
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Ёпиш\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                  loading:
                                                                    _vm.loading
                                                                      .owner,
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.addOwner,
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Сақлаш\n                                                    "
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
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "px-4 d-block",
                                                  },
                                                  [
                                                    _c("v-data-table", {
                                                      staticClass:
                                                        "elevation-1",
                                                      attrs: {
                                                        headers: _vm.a.headers2,
                                                        items: _vm.app.owners,
                                                        "items-per-page": 2,
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "item.id",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _vm._v(
                                                                  "\n                                                    " +
                                                                    _vm._s(
                                                                      _vm.app.owners.indexOf(
                                                                        item
                                                                      ) + 1
                                                                    ) +
                                                                    "\n                                                "
                                                                ),
                                                              ]
                                                            },
                                                          },
                                                          {
                                                            key: "item.actions",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      text: "",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          return _vm.deleteOwner(
                                                                            item
                                                                          )
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "danger",
                                                                        },
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-delete"
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
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            : _vm._e(),
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { staticClass: "mt-10 outlined-row" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "row-title" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "d-flex align-center justify-space-between py-0",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "Ижара шартномаси асосида иншоотлар, бинолар ва очиқ майдончаларга эгамисиз?"
                                                      )
                                                    ) +
                                                      "\n                                        "
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-center align-center",
                                                    },
                                                    [
                                                      _vm._v("Йўқ "),
                                                      _c("v-switch", {
                                                        staticClass:
                                                          "ml-6 mr-2 my-2",
                                                        attrs: {
                                                          "hide-details": "",
                                                          inset: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.temp.issetBranch
                                                              .flat,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.temp
                                                                .issetBranch,
                                                              "flat",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "temp.issetBranch.flat",
                                                        },
                                                      }),
                                                      _vm._v(" Ҳа"),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.temp.issetBranch.flat
                                            ? [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-end w-100 mb-2 ",
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                          small: "",
                                                        },
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            _vm.dialog.flat = true
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "white",
                                                            },
                                                          },
                                                          [_vm._v("mdi-plus")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t("Қўшиш")
                                                            )
                                                          ),
                                                        ]),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-dialog",
                                                  {
                                                    attrs: {
                                                      "max-width": "900",
                                                    },
                                                    model: {
                                                      value: _vm.dialog.flat,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.dialog,
                                                          "flat",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "dialog.flat",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "v-card",
                                                      {
                                                        attrs: {
                                                          elevation: "2",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-toolbar",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "20px",
                                                              color: "#fff",
                                                            },
                                                            attrs: {
                                                              color: "primary",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Янги ижара шартномаси асосида иншоотлар, бинолар ва очиқ майдончаларни қўшиш"
                                                                  )
                                                                ) +
                                                                "\n                                                "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-card-text",
                                                          [
                                                            _c(
                                                              "validation-observer",
                                                              {
                                                                ref: "stepValidationOwner",
                                                                attrs: {
                                                                  disabled: "",
                                                                },
                                                                scopedSlots:
                                                                  _vm._u(
                                                                    [
                                                                      {
                                                                        key: "default",
                                                                        fn: function (
                                                                          ref
                                                                        ) {
                                                                          var invalid =
                                                                            ref.invalid
                                                                          return [
                                                                            _c(
                                                                              "v-row",
                                                                              {
                                                                                staticClass:
                                                                                  "px-4 pt-4",
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Шартнома рақами",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .flat
                                                                                                .contractNumber,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .flat,
                                                                                                  "contractNumber",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.flat.contractNumber",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "e-arxiv-file",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            label:
                                                                                              "Шартнома нусхаси",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .flat
                                                                                                .fileId,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .flat,
                                                                                                  "fileId",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.flat.fileId",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Кадастр рақами",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .flat
                                                                                                .cadastralNumber,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .flat,
                                                                                                  "cadastralNumber",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.flat.cadastralNumber",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Омбор манзили",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .flat
                                                                                                .address,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .flat,
                                                                                                  "address",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.flat.address",
                                                                                          },
                                                                                      }
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
                                                          "v-card-actions",
                                                          {
                                                            staticClass:
                                                              "d-flex justify-content-end",
                                                          },
                                                          [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      _vm.dialog.flat = false
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Ёпиш\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                  loading:
                                                                    _vm.loading
                                                                      .flat,
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.addFlat,
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Сақлаш\n                                                    "
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
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "px-4 d-block",
                                                  },
                                                  [
                                                    _c("v-data-table", {
                                                      staticClass:
                                                        "elevation-1",
                                                      attrs: {
                                                        headers: _vm.a.headers3,
                                                        items: _vm.app.flats,
                                                        "items-per-page": 2,
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "item.id",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _vm._v(
                                                                  "\n                                                    " +
                                                                    _vm._s(
                                                                      _vm.app.flats.indexOf(
                                                                        item
                                                                      ) + 1
                                                                    ) +
                                                                    "\n                                                "
                                                                ),
                                                              ]
                                                            },
                                                          },
                                                          {
                                                            key: "item.actions",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      text: "",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          return _vm.deleteFlat(
                                                                            item
                                                                          )
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "danger",
                                                                        },
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-delete"
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
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            : _vm._e(),
                                        ],
                                        2
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-row",
                                        { staticClass: "mt-10 outlined-row" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "row-title" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "d-flex align-center justify-space-between py-0",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "Ўқув курслари ўқиб тугатганлиги тўғрисидаги сертификатларга эгамисиз?"
                                                      )
                                                    ) +
                                                      "\n                                        "
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-center align-center",
                                                    },
                                                    [
                                                      _vm._v("Йўқ "),
                                                      _c("v-switch", {
                                                        staticClass:
                                                          "ml-6 mr-2 my-2",
                                                        attrs: {
                                                          "hide-details": "",
                                                          inset: "",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.temp.issetBranch
                                                              .course,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.temp
                                                                .issetBranch,
                                                              "course",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "temp.issetBranch.course",
                                                        },
                                                      }),
                                                      _vm._v(" Ҳа"),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.temp.issetBranch.course
                                            ? [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-end w-100 mb-2 ",
                                                  },
                                                  [
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                          small: "",
                                                        },
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            _vm.dialog.course = true
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              color: "white",
                                                            },
                                                          },
                                                          [_vm._v("mdi-plus")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t("Қўшиш")
                                                            )
                                                          ),
                                                        ]),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-dialog",
                                                  {
                                                    attrs: {
                                                      "max-width": "900",
                                                    },
                                                    model: {
                                                      value: _vm.dialog.course,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.dialog,
                                                          "course",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "dialog.course",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "v-card",
                                                      {
                                                        attrs: {
                                                          elevation: "2",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "v-toolbar",
                                                          {
                                                            staticStyle: {
                                                              "font-size":
                                                                "20px",
                                                              color: "#fff",
                                                            },
                                                            attrs: {
                                                              color: "primary",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "Янги сертификат қўшиш"
                                                                  )
                                                                ) +
                                                                "\n                                                "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-card-text",
                                                          [
                                                            _c(
                                                              "validation-observer",
                                                              {
                                                                ref: "stepValidationSertifikat",
                                                                attrs: {
                                                                  disabled: "",
                                                                },
                                                                scopedSlots:
                                                                  _vm._u(
                                                                    [
                                                                      {
                                                                        key: "default",
                                                                        fn: function (
                                                                          ref
                                                                        ) {
                                                                          var invalid =
                                                                            ref.invalid
                                                                          return [
                                                                            _c(
                                                                              "v-row",
                                                                              {
                                                                                staticClass:
                                                                                  "px-4 pt-4",
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Сертификат рақами",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .course
                                                                                                .contractNumber,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .course,
                                                                                                  "contractNumber",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.course.contractNumber",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "e-arxiv-file",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            label:
                                                                                              "Сертификат нусхаси",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .course
                                                                                                .fileId,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .course,
                                                                                                  "fileId",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.course.fileId",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "editable-date",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Сертификат санаси",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .course
                                                                                                .cadastralNumber,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .course,
                                                                                                  "cadastralNumber",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.course.cadastralNumber",
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
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "text-field",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            title:
                                                                                              "Сертификат номи",
                                                                                            "persistent-placeholder":
                                                                                              "",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        model:
                                                                                          {
                                                                                            value:
                                                                                              _vm
                                                                                                .temp
                                                                                                .course
                                                                                                .address,
                                                                                            callback:
                                                                                              function (
                                                                                                $$v
                                                                                              ) {
                                                                                                _vm.$set(
                                                                                                  _vm
                                                                                                    .temp
                                                                                                    .course,
                                                                                                  "address",
                                                                                                  $$v
                                                                                                )
                                                                                              },
                                                                                            expression:
                                                                                              "temp.course.address",
                                                                                          },
                                                                                      }
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
                                                          "v-card-actions",
                                                          {
                                                            staticClass:
                                                              "d-flex justify-content-end",
                                                          },
                                                          [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      _vm.dialog.course = false
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Ёпиш\n                                                    "
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  text: "",
                                                                  loading:
                                                                    _vm.loading
                                                                      .course,
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.addCourse,
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Сақлаш\n                                                    "
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
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "px-4 d-block",
                                                  },
                                                  [
                                                    _c("v-data-table", {
                                                      staticClass:
                                                        "elevation-1",
                                                      attrs: {
                                                        headers: _vm.a.headers5,
                                                        items: _vm.app.courses,
                                                        "items-per-page": 2,
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "item.id",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _vm._v(
                                                                  "\n                                                    " +
                                                                    _vm._s(
                                                                      _vm.app.courses.indexOf(
                                                                        item
                                                                      ) + 1
                                                                    ) +
                                                                    "\n                                                "
                                                                ),
                                                              ]
                                                            },
                                                          },
                                                          {
                                                            key: "item.actions",
                                                            fn: function (ref) {
                                                              var item =
                                                                ref.item
                                                              return [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      text: "",
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          return _vm.deleteCourse(
                                                                            item
                                                                          )
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "danger",
                                                                        },
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "mdi-delete"
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
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            : _vm._e(),
                                        ],
                                        2
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
                                              "\n                                            " +
                                                _vm._s(_vm.$t("Орқага")) +
                                                "\n                                        "
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
                                              "\n                                            " +
                                                _vm._s(_vm.$t("Давом этиш")) +
                                                "\n                                        "
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