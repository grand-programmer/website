"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_refund_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _components_form_myfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/form/myfield */ "./resources/js/components/form/myfield.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _locales_oz_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../locales/oz.json */ "./resources/js/locales/oz.json");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
/* harmony import */ var _components_form_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/form/textfield */ "./resources/js/components/form/textfield.vue");
/* harmony import */ var _components_form_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/form/autocomplete */ "./resources/js/components/form/autocomplete.vue");
/* harmony import */ var _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/form/e-arxiv-file */ "./resources/js/components/form/e-arxiv-file.vue");
/* harmony import */ var _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/form/dialog-chips */ "./resources/js/components/form/dialog-chips.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



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









Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__).forEach(function (rule) {
  (0,vee_validate__WEBPACK_IMPORTED_MODULE_9__.extend)(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__[rule]), {}, {
    // copies rule configuration
    message: _locales_oz_json__WEBPACK_IMPORTED_MODULE_2__.messages[rule] // assign message

  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InitialRefund",
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_3__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: 'Хизматлар',
        to: '/services',
        disabled: false,
        exact: true
      }, {
        text: 'Ҳисобварағидаги маблағларини қайтариш',
        to: '/services/refund',
        disabled: true,
        exact: true
      }],
      app: {
        bank_number: null,
        akt: []
      },
      modal: false,
      person: {
        type: 1,
        /// 1- fiz 2- yur
        fio: "",
        pin: null,
        tin: null,
        organization_name: "Жисмоний шахс",
        organization_inn: null,
        position: "01",
        phone: null,
        email: null
      },
      application: {
        persons: {
          personType: null,
          legalName: null,
          firstName: null,
          surName: null,
          lastName: null,
          email: null,
          pin: null,
          tin: null,
          perAdr: null,
          phone: null
        },
        s04AppsDTO: {
          locationId: null,
          moneyBack: null,
          accountNumber: null,
          mfo: null,
          personPinTin: null,
          personName: null,
          personAddress: null,
          personMail: null,
          personPhone: null
        },
        s04EarxivBodyList: []
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
      search_mfo: null,
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
        key: 'email',
        value: 'Электрон почта манзили'
      }, {
        key: 'pin',
        value: 'ЖШШИР'
      }, {
        key: 'tin',
        value: 'СТИР'
      }, {
        key: 'perAdr',
        value: 'Яшаш манзили'
      }, {
        key: 'phone',
        value: 'Телефон рақами'
      }, {
        key: 'locationId',
        value: 'Ҳудуд'
      }, {
        key: 'moneyBack',
        value: 'Қайтарилиши лозим бўлган сумма'
      }, {
        key: 'accountNumber',
        value: 'Банк ҳисоб рақами'
      }, {
        key: 'mfo',
        value: 'МФО'
      }, {
        key: 'personPinTin',
        value: 'ЖШШИР'
      }, {
        key: 'personName',
        value: typeof this.person !== 'undefined' && typeof this.person.type !== 'undefined' && this.person.type === 2 ? 'Ташкилот номи' : 'ФИШ'
      }, {
        key: 'personAddress',
        value: 'Яшаш манзили'
      }, {
        key: 'personMail',
        value: 'Электрон почта манзили'
      }, {
        key: 'personPhone',
        value: 'Телефон рақами'
      }],
      ilova_error: ""
    };
  },
  methods: {
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
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this, result, obj;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;

                _this.resetVar(_this.application);

                _this.application['persons']['personType'] = _this.person.type === 1 ? 0 : 1;
                _this.application['persons']['legalName'] = _this.person.organization_name;
                _this.application['persons']['firstName'] = _this.$auth.user().first_name;
                _this.application['persons']['surName'] = _this.$auth.user().sur_name;
                _this.application['persons']['lastName'] = _this.$auth.user().mid_name;
                _this.application['persons']['email'] = _this.person.email;
                _this.application['persons']['pin'] = _this.$auth.user().pin;
                _this.application['persons']['tin'] = _this.person.tin ? _this.person.tin : _this.person.organization_inn;
                _this.application['persons']['perAdr'] = _this.person.perAdr;
                if (typeof _this.person.phone !== 'undefined' && _this.person.phone) _this.application['persons']['phone'] = _this.person.phone.replaceAll(" ", "").replaceAll("+", "");
                _this.application['s04AppsDTO']['locationId'] = _this.app.region;

                if (typeof _this.app.bank_number !== 'undefined' && _this.app.bank_number && _this.app.bank_number.length > 3) {
                  _this.application['s04AppsDTO']['accountNumber'] = _this.app.bank_number.replaceAll(" ", "");
                }

                if (typeof _this.app.money !== 'undefined' && _this.app.money && _this.app.money.length > 3) {
                  _this.application['s04AppsDTO']['moneyBack'] = _this.app.money.replaceAll(" ", "");
                }

                if (typeof _this.app.mfo !== 'undefined' && typeof _this.app.mfo.cdId !== 'undefined' && _this.app.mfo.cdId && _this.app.mfo.cdId.length > 3) {
                  _this.application['s04AppsDTO']['mfo'] = _this.app.mfo.cdId;
                }

                _this.application['s04AppsDTO']['personPinTin'] = _this.person.pin;
                _this.application['s04AppsDTO']['personName'] = _this.person.fio;
                _this.application['s04AppsDTO']['personAddress'] = _this.person.perAdr;
                _this.application['s04AppsDTO']['personMail'] = _this.person.email;
                _this.application['s04AppsDTO']['personPhone'] = _this.application['persons']['phone'];

                if (_this.app.akt && _this.app.akt.length > 0) {
                  _this.application['s04EarxivBodyList'] = [];

                  _this.app.akt.forEach(function (item) {
                    if (typeof item.id !== 'undefined' && item.id) _this.application['s04EarxivBodyList'].push({
                      fileId: item.id
                    });
                  });
                } //_this.application['s04EarxivBodyList']=_this.app.akt;


                result = null;
                _context.prev = 23;
                obj = JSON.parse(JSON.stringify(_this.application));
                _context.next = 27;
                return axios.post('/api/v1/ex_api/refund', obj).then(function (resultData) {
                  if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                    console.log("resultData.data['data']");
                    console.log(resultData.data.data.data.id);
                    _this.application.id = resultData.data.data.data.id; //console.log(resultData.data)
                    ///this.$cookie.delete('user');
                    //this.$cookie.delete('huquqegasi');

                    //console.log(resultData.data)
                    ///this.$cookie.delete('user');
                    //this.$cookie.delete('huquqegasi');
                    _this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");

                    setTimeout(function () {
                      _this.$router.push("/services/refund/" + _this.application.id);
                    }, 100);
                  }
                });

              case 27:
                _this.loading.button = false;
                return _context.abrupt("return", result);

              case 31:
                _context.prev = 31;
                _context.t0 = _context["catch"](23);

                if (typeof _context.t0.response !== 'undefined' && typeof _context.t0.response.data !== 'undefined' && typeof _context.t0.response.data.data !== 'undefined' && typeof _context.t0.response.data.data.errors !== 'undefined') {
                  if (typeof _context.t0.response.data.data.errors.appsBody !== 'undefined') {
                    _this.showFirstError(_context.t0.response.data.data.errors);

                    _this.setApplicationErrors(_context.t0.response.data.data.errors.appsBody); //_this.$toast.error('Майдонларни тўлдиришда хатолик юз берди! Тўғрилаб юборинг!');

                  } else if (typeof _context.t0.response.data.data.errors === 'string') _this.$toast.error(_context.t0.response.data.data.errors);else {
                    _this.showFirstError(_context.t0.response.data.data.errors);
                  }
                } else {
                  _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг');

                  console.log(_context.t0);
                }

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[23, 31]]);
      }))();
    },
    showFirstError: function showFirstError(error) {
      var toast;

      function getkeyValue(myObject) {
        var ob = {
          key: null,
          value: null
        };

        if (_typeof(myObject) === 'object') {
          if (_typeof(Object.values(myObject)[0]) === 'object') ob = getkeyValue(Object.values(myObject)[0]);else {
            ob.value = Object.values(myObject)[0];
            ob.key = Object.keys(myObject)[0];
          }
        }

        return ob;
      }

      toast = getkeyValue(error);
      this.$toast.error('Майдонларни тўлдиришда хатолик юз берди! \n ' + toast.key + ' - ' + toast.value);
    },
    getBoshqarmalar: function getBoshqarmalar() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this3;
                _context2.next = 3;
                return axios.get('/api/v1/ex_api/boshqarma').then(function (result) {
                  if (typeof result.data.data !== 'undefined') result.data.data.forEach(function (item) {
                    if (!['1790', '1791', '1701'].includes(item['kod_id'])) _this.regions.push({
                      'value': item['kod_id'],
                      'text': item['name'].replace("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг ", "") //(item['name']).substring(("Ўзбекистон Республикаси Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитасининг").length)

                    });
                  });
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    nextStep: function nextStep() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var isValid, _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                isValid = false;
                _this = _this4;
                _this4.loading.button = true; //console.log(!this.validateField("create_customs_person_value"))
                //
                //  71-231-
                //  41-86
                //  41-87

                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
                  var resultData;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          isValid = true; // await this.validateField("stepValidation1");

                          if (!(isValid === true)) {
                            _context3.next = 10;
                            break;
                          }

                          _this4.person.lastName = _this4.$auth.user().mid_name;
                          _this4.person.firstName = _this4.$auth.user().first_name;
                          _this4.person.surName = _this4.$auth.user().sur_name;
                          _this4.person.locationId = _this4.person.region;
                          _context3.next = 8;
                          return _this4.sendApplication();

                        case 8:
                          resultData = _context3.sent;
                          _this4.loading.button = false;
                          /*                    if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && resultData.data.success === true) {
                                                  //console.log(resultData.data['data']['data']['id'])
                                                  this.person.person_id = resultData.data['data']['data']['id'];
                                                  //this.$cookie.delete('user');
                                                  this.$cookie.set('user', JSON.stringify(this.person), 1);
                                                  _this.$toast.success("Аризачи маълумотлари сақланди!");
                                               }*/
                          ///else this.$toast.error("Серверда хатолик юз берди. Кейинроқ уриниб кўринг!");

                        case 10:
                          /*                        _this.stepper = 2;
                                                  _this.completedSteps.push(_this.stepper - 1);
                                                  _this.$toast.success("Аризачи маълумотлари сақланди!");*/
                          _this4.loading.button = false;

                        case 11:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    setApplicationErrors: function setApplicationErrors(errors) {
      var _this = this;

      if (errors) {
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
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var provider;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                provider = _this5.$refs[field];
                if (Array.isArray(provider)) provider = provider[0]; // Validate the field

                if (!provider) {
                  _context5.next = 6;
                  break;
                }

                _context5.next = 5;
                return provider.validate();

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
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
          _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var silent, isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                silent = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
                isValid = false;
                _context6.next = 4;
                return _this6.$refs['create_customs_person_value'].validate({
                  silent: silent
                });

              case 4:
                return _context6.abrupt("return", _context6.sent);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
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
  watch: {
    search_mfo: {
      handler: function handler(val) {
        var _this7 = this;

        if (val === null || val && val.length > 6) return; //if (this.tftncodes.length > 0) return
        // Items have already been requested
        //if (this.loading.tftncode) return

        this.loading.mfo = true; // Lazily load input items

        fetch("https://new.customs.uz/api/v1/data/mfo?code=" + val).then(function (res) {
          return res.json();
        }).then(function (res) {
          if (typeof res.data !== 'undefined') {
            res.data.map(function (item) {
              item.name = item.code + " - " + item.cdNm;
              return item;
            });
            _this7.mfos = res.data;
          }
        })["catch"](function (err) {//console.log(err)
        })["finally"](function () {
          return _this7.loading.mfo = false;
        });
      },
      deep: false
    }
  },
  mounted: function mounted() {
    this.initialize();
  },
  computed: {
    /*        progress(val) {
                this.Initprogress(val)
            },
            isvalidDocument(tovar_id = null) {
                //tovar_id = this.tovarIndex;
                //if (tovar_id === null || isNaN(tovar_id)) tovar_id = this.tovarIndex;
                return !this.isValidDoc()
            }*/
  },
  filters: {
    reverse: function reverse(array) {
      return array.slice().reverse();
    }
  },
  components: {
    DialogChips: _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_7__["default"],
    EArxivFile: _components_form_e_arxiv_file__WEBPACK_IMPORTED_MODULE_6__["default"],
    AutocompleteField: _components_form_autocomplete__WEBPACK_IMPORTED_MODULE_5__["default"],
    TextField: _components_form_textfield__WEBPACK_IMPORTED_MODULE_4__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_9__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_9__.ValidationObserver,
    Myfield: _components_form_myfield__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.yoriqnoma-text {\n    right: 40px;\n    font-weight: bold;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/services/refund/create.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/frontend/services/refund/create.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_39b32df0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=39b32df0& */ "./resources/js/views/frontend/services/refund/create.vue?vue&type=template&id=39b32df0&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/refund/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/frontend/services/refund/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_39b32df0___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_39b32df0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/refund/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/refund/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/refund/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/refund/create.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/refund/create.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/frontend/services/refund/create.vue?vue&type=template&id=39b32df0&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/refund/create.vue?vue&type=template&id=39b32df0& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_39b32df0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_39b32df0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_39b32df0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=39b32df0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=template&id=39b32df0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=template&id=39b32df0&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/refund/create.vue?vue&type=template&id=39b32df0& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
                        "\n                        ТИФ субъектининг божхона органлари ғазна ҳисобварағидаги маблағларини қайтариш бўйича ариза\n                        "
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
              { staticClass: "mb-12 px-5 py-10 " },
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
                          " Ариза тўлдириш бўйича йўриқмани юклаб\n                    олинг!\n                "
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
                            { staticClass: "person_data mt-10" },
                            [
                              _vm.person.type === 2
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: { name: "СТИР" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "СТИР",
                                                      required: "",
                                                      disabled:
                                                        JSON.parse(
                                                          _vm.$auth.user()
                                                            .legal_info
                                                        )[0].tin.length > 0,
                                                      hint: "Корхона ёки ташкилот СТИРи",
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
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: { name: "ЖШШИР" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "ЖШШИР",
                                                      required: "",
                                                      disabled:
                                                        _vm.$auth.user().pin >
                                                        0,
                                                      hint: "Аризачи ЖШШРи",
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
                              !_vm.$auth.user().tin ||
                              (_vm.$auth.user().tin &&
                                _vm.$auth.user().tin.length < 9)
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: { name: "СТИР" },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("v-text-field", {
                                                    attrs: {
                                                      label: "СТИР",
                                                      required: "",
                                                      hint: "Аризачи СТИРи",
                                                      "persistent-hint": "",
                                                      name: "personInn",
                                                    },
                                                    model: {
                                                      value: _vm.person.tin,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.person,
                                                          "tin",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "person.tin",
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
                                { attrs: { cols: "6" } },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name:
                                        _vm.person.type === 2
                                          ? "Ташкилот номи"
                                          : "ФИШ",
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
                                                      ? "Ташкилот номи"
                                                      : "ФИШ",
                                                  required: "",
                                                  hint:
                                                    _vm.person.type === 2
                                                      ? "Юридик шахснинг тўлиқ номи"
                                                      : "Мурожаатчи фамилияси, исми, шарифи",
                                                  "persistent-placeholder": "",
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
                                                                  ? "Ташкилот номи"
                                                                  : "ФИШ"
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
                                                {
                                                  staticClass:
                                                    "red&#45;&#45;text",
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
                                { attrs: { cols: "6" } },
                                [
                                  _c("text-field", {
                                    directives: [
                                      {
                                        name: "mask",
                                        rawName: "v-mask",
                                        value: "#### #### #### #### ####",
                                        expression:
                                          "'#### #### #### #### ####'",
                                      },
                                    ],
                                    attrs: {
                                      title: "Банк ҳисоб рақами",
                                      required: "",
                                      "persistent-placeholder": "",
                                    },
                                    model: {
                                      value: _vm.app.bank_number,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.app, "bank_number", $$v)
                                      },
                                      expression: "app.bank_number",
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
                                  _c("ValidationProvider", {
                                    attrs: { name: "МФО", rules: "required" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function (ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("v-autocomplete", {
                                                attrs: {
                                                  label: "МФО*",
                                                  required: "",
                                                  "persistent-placeholder": "",
                                                  items: _vm.mfos,
                                                  "item-text": "name",
                                                  "item-value": "code",
                                                  name: "importInn",
                                                  "hide-no-data": "",
                                                  loading: _vm.loading.mfo,
                                                  "search-input":
                                                    _vm.search_mfo,
                                                  "return-object": "",
                                                },
                                                on: {
                                                  "update:searchInput":
                                                    function ($event) {
                                                      _vm.search_mfo = $event
                                                    },
                                                  "update:search-input":
                                                    function ($event) {
                                                      _vm.search_mfo = $event
                                                    },
                                                },
                                                model: {
                                                  value: _vm.app.mfo,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.app,
                                                      "mfo",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "app.mfo",
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
                                { attrs: { cols: "6" } },
                                [
                                  _c("text-field", {
                                    attrs: {
                                      title: "Қайтарилиши лозим бўлган сумма",
                                      type: "number",
                                      "persistent-placeholder": "",
                                      rules: "required",
                                    },
                                    model: {
                                      value: _vm.app.money,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.app, "money", $$v)
                                      },
                                      expression: "app.money",
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
                                  _c("ValidationProvider", {
                                    attrs: { name: "Ҳудуд", rules: "required" },
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
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function () {
                                                        return [
                                                          _vm._v(
                                                            "Ҳудудий божхона бошқармасини танланг "
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
                                { attrs: { cols: "6" } },
                                [
                                  _c("e-arxiv-file", {
                                    attrs: {
                                      label: "Файлни юкланг",
                                      norequired: "",
                                    },
                                    model: {
                                      value: _vm.app.akt,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.app, "akt", $$v)
                                      },
                                      expression: "app.akt",
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
                                                    rawName: "v-mask",
                                                    value: "+998 ## ### ## ##",
                                                    expression:
                                                      "'+998 ## ### ## ##'",
                                                  },
                                                ],
                                                attrs: {
                                                  label: "Телефон рақами",
                                                  required: "",
                                                  hint: "Аризачининг телефон рақами",
                                                  "persistent-placeholder": "",
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
                                                  "persistent-placeholder": "",
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
                                { attrs: { cols: "6" } },
                                [
                                  _c("text-field", {
                                    attrs: {
                                      title: "Яшаш манзили",
                                      rules: "required",
                                      hint: "Аризачининг яшаш манзили",
                                      "persistent-placeholder": "",
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
                            attrs: {
                              color: "primary",
                              size: "large",
                              loading: _vm.loading.button,
                            },
                            on: { click: _vm.nextStep },
                          },
                          [
                            _vm._v(
                              "\n                            Ариза юбориш\n                        "
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
                      " - майдонлари албатта тўлдирилиши шарт!\n                    "
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
        attrs: { target: "_blank", href: "https://t.me/dastlabkiqaror" },
      },
      [
        _c("img", { attrs: { src: "/public/images/telegram.png" } }),
        _vm._v(" "),
        _c("p", [
          _vm._v(" Саволларингизни йўлланг\n            "),
          _c("br"),
          _vm._v("\n            @dastlabkiqaror\n        "),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);