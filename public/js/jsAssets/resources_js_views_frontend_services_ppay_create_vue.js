"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_ppay_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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









Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__).forEach(function (rule) {
  (0,vee_validate__WEBPACK_IMPORTED_MODULE_9__.extend)(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__[rule]), {}, {
    // copies rule configuration
    message: _locales_oz_json__WEBPACK_IMPORTED_MODULE_2__.messages[rule] // assign message

  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InitialPiecePay",
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
        to: '/services/ppay',
        disabled: true,
        exact: true
      }],
      app: {
        bank_number: null,
        akt: [],
        region: null,
        comment: null,
        money: null,
        type: null,
        sugurta_number: null,
        sugurta_sana: null,
        sugurta_muddat: null,
        sugurta_doc: [],
        kafolat_doc: [],
        kafillik_doc: [],
        taminotsiz_doc: [],
        garov_doc: [],
        kafolat_bsana: null,
        kafolat_raqami: null,
        kafolat_miqdor: null,
        kafolat_sana: null,
        kafil_nomi: null,
        kafil_tin_pin: null,
        kafil_xati: null,
        kafil_miqdori: null,
        kafillik_bsana: null,
        kafillik_sana: null,
        garov_shart: null,
        garov_shart_sana: null,
        garov_qiymat: null,
        garov_sana: null,
        taminlov: null,
        taminotsiz: null,
        taminotsiz_sana: null,
        checkbox: false,
        file_error: ""
      },
      types: [{
        text: "Cуғурта полиси",
        value: 0
      }, {
        text: "Банк кафолати",
        value: 1
      }, {
        text: "Учинчи шахс кафиллиги",
        value: 2
      }, {
        text: "Гаров таъминоти",
        value: 3
      }, {
        text: "Депозитга пул маблағларини киритиш",
        value: 4
      }, {
        text: "Таъминотсиз",
        value: 5
      }],
      modal: false,
      dialog: false,
      checkbox: {
        first: false,
        second: false
      },
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
        appsDTO: {
          locationId: null,
          paySum: null,
          pinTin: null,
          fullOrLegalName: null,
          perAdr: null,
          email: null,
          phone: null,
          typePayments: null
        },
        guaranteeDTO: {
          guaranteeNumber: null,
          guaranteeDate: null,
          guaranteeSum: null,
          guaranteeEndDate: null
        },
        provisionDTO: {
          provisionNumber: null,
          provisionDate: null,
          provisionSum: null,
          provisionEndDate: null
        },
        policyDTO: {
          policyNumber: null,
          policyDate: null
        },
        depositDTO: {
          depositSum: null
        },
        warrantyDTO: {
          warrantyPinTin: null,
          warrantyFullOrLegalName: null,
          warrantyNumber: null,
          warrantyDate: null,
          warrantySum: null,
          warrantyEndDate: null
        },
        supplyDTO: {
          supplyNumber: null,
          supplyDate: null
        },
        earxivDTO: []
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
        value: 'Электрон почта'
      }, {
        key: 'pin',
        value: 'ЖШШИР'
      }, {
        key: 'tin',
        value: 'СТИР'
      }, {
        key: 'perAdr',
        value: 'Почта манзили'
      }, {
        key: 'phone',
        value: 'Телефон рақами'
      }, {
        key: 'locationId',
        value: 'Ҳудуд'
      }, {
        key: 'paySum',
        value: 'Тўлов муддати узайтириладиган сумма'
      }, {
        key: 'typePayments',
        value: 'Божхона тўловлари таъминлови тури'
      }, {
        key: 'pinTin',
        value: 'ЖШШИР'
      }, {
        key: 'policyNumber',
        value: 'Cуғурта полиси рақами'
      }, {
        key: 'policyDate',
        value: 'Cуғурта полиси санаси'
      }, {
        key: 'guaranteeNumber',
        value: 'Банк кафолати рақами'
      }, {
        key: 'guaranteeDate',
        value: 'Банк кафолати санаси'
      }, {
        key: 'guaranteeSum',
        value: 'Кафолат миқдори'
      }, {
        key: 'guaranteeEndDate',
        value: 'Банк кафолати амал қилиш санаси'
      }, {
        key: 'warrantyPinTin',
        value: 'Кафил берувчи номи'
      }, {
        key: 'warrantyFullOrLegalName',
        value: 'Кафил номи'
      }, {
        key: 'warrantyNumber',
        value: 'Кафиллик хати'
      }, {
        key: 'warrantyDate',
        value: 'Кафиллик хати берилган санаси'
      }, {
        key: 'warrantySum',
        value: 'Кафиллик миқдори'
      }, {
        key: 'warrantyEndDate',
        value: 'Кафиллик хати амал қилиш санаси'
      }, {
        key: 'provisionNumber',
        value: 'Гаров шартномаси'
      }, {
        key: 'provisionDate',
        value: 'Гаров шартномаси берилган санаси'
      }, {
        key: 'provisionSum',
        value: 'Гаров товар қиймати'
      }, {
        key: 'provisionEndDate',
        value: 'Гаров шартномаси амал қилиш санаси'
      }, {
        key: 'depositSum',
        value: 'Таъминлов суммаси'
      }, {
        key: 'supplyNumber',
        value: 'Қонун ҳужжати рақами'
      }, {
        key: 'supplyDate',
        value: 'Қонун ҳужжати санаси'
      }, {
        key: 'comment',
        value: 'Изоҳ'
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
        var _this, result, obj, errors, _i, _Object$entries, _Object$entries$_i, key, item, _i2, _Object$entries2, _Object$entries2$_i, valKey, val;

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
                _this.application['persons']['pin'] = _this.person.pin;
                _this.application['persons']['tin'] = _this.$auth.user().tin ? _this.$auth.user().tin : _this.person.organization_inn;
                _this.application['persons']['perAdr'] = _this.person.perAdr;
                if (typeof _this.person.phone !== 'undefined' && _this.person.phone) _this.application['persons']['phone'] = _this.person.phone.replaceAll(" ", "").replaceAll("+", "");
                _this.application['appsDTO']['locationId'] = _this.app.region;
                _this.application['appsDTO']['comment'] = _this.app.comment;

                if (typeof _this.app.money !== 'undefined' && _this.app.money && _this.app.money.length > 3) {
                  _this.application['appsDTO']['paySum'] = _this.app.money.replaceAll(" ", "");
                }

                _this.application['appsDTO']['pinTin'] = _this.person.type === 0 ? _this.person.organization_inn : _this.person.pin;
                _this.application['appsDTO']['fullOrLegalName'] = _this.person.fio;
                _this.application['appsDTO']['perAdr'] = _this.person.perAdr;
                _this.application['appsDTO']['email'] = _this.person.email;
                _this.application['appsDTO']['phone'] = _this.application['persons']['phone'];
                _this.application['appsDTO']['typePayments'] = _this.app.type !== null ? "0" + (_this.app.type + 1) : null;
                _this.application.earxivDTO = [];
                _context.t0 = _this.app.type;
                _context.next = _context.t0 === 0 ? 25 : _context.t0 === 1 ? 29 : _context.t0 === 2 ? 35 : _context.t0 === 3 ? 43 : _context.t0 === 4 ? 49 : _context.t0 === 5 ? 51 : 55;
                break;

              case 25:
                _this.application.policyDTO.policyNumber = _this.app.sugurta_number;
                _this.application.policyDTO.policyDate = _this.formatDate(_this.app.sugurta_sana);
                _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.sugurta_doc)));
                return _context.abrupt("break", 55);

              case 29:
                _this.application.guaranteeDTO.guaranteeNumber = _this.app.kafolat_raqami;
                _this.application.guaranteeDTO.guaranteeDate = _this.formatDate(_this.app.kafolat_bsana);
                _this.application.guaranteeDTO.guaranteeSum = _this.app.kafolat_miqdor;
                _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.kafolat_doc)));
                _this.application.guaranteeDTO.guaranteeEndDate = _this.formatDate(_this.app.kafolat_sana);
                return _context.abrupt("break", 55);

              case 35:
                _this.application.warrantyDTO.warrantyPinTin = _this.app.kafil_tin_pin;
                _this.application.warrantyDTO.warrantyFullOrLegalName = _this.app.kafil_nomi;
                _this.application.warrantyDTO.warrantyNumber = _this.app.kafil_xati;
                _this.application.warrantyDTO.warrantyDate = _this.formatDate(_this.app.kafillik_sana);
                _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.kafillik_doc)));
                _this.application.warrantyDTO.warrantySum = _this.app.kafil_miqdori;
                _this.application.warrantyDTO.warrantyEndDate = _this.formatDate(_this.app.kafillik_bsana);
                return _context.abrupt("break", 55);

              case 43:
                _this.application.provisionDTO.provisionNumber = _this.app.garov_shart;
                _this.application.provisionDTO.provisionDate = _this.formatDate(_this.app.garov_shart_sana);
                _this.application.provisionDTO.provisionSum = _this.app.garov_qiymat;
                _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.garov_doc)));
                _this.application.provisionDTO.provisionEndDate = _this.formatDate(_this.app.garov_sana);
                return _context.abrupt("break", 55);

              case 49:
                _this.application.depositDTO.depositSum = _this.app.taminlov;
                return _context.abrupt("break", 55);

              case 51:
                _this.application.supplyDTO.supplyNumber = _this.app.taminotsiz;
                _this.application.earxivDTO = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.taminotsiz_doc)));
                _this.application.supplyDTO.supplyDate = _this.formatDate(_this.app.taminotsiz_sana);
                return _context.abrupt("break", 55);

              case 55:
                /*
                if (_this.app.akt && _this.app.akt.length > 0) {
                    _this.application['earxivDTO'] = [];
                    _this.app.akt.forEach((item) => {
                        if (typeof item.id !== 'undefined' && item.id)
                            _this.application['earxivDTO'].push({
                                fileId: item.id
                            })
                     })
                }*/
                //_this.application['earxivDTO']=_this.app.akt;
                result = null;
                _context.prev = 56;
                obj = JSON.parse(JSON.stringify(_this.application));
                _context.next = 60;
                return axios.post('/api/v1/ex_api/ppay', obj).then(function (resultData) {
                  if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                    _this.application.id = resultData.data.data.apps.id; //console.log(resultData.data)
                    ///this.$cookie.delete('user');
                    //this.$cookie.delete('huquqegasi');

                    //console.log(resultData.data)
                    ///this.$cookie.delete('user');
                    //this.$cookie.delete('huquqegasi');
                    _this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");

                    setTimeout(function () {
                      _this.$router.push("/services/ppay/" + _this.application.id);
                    }, 100);
                  } else if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.message !== 'undefined') {
                    _this.$toast.error(resultData.data.message);
                  }
                });

              case 60:
                _this.loading.button = false;
                return _context.abrupt("return", result);

              case 64:
                _context.prev = 64;
                _context.t1 = _context["catch"](56);

                ///console.log(error.response.data.data);
                if (typeof _context.t1.response !== 'undefined' && typeof _context.t1.response.data !== 'undefined' && _context.t1.response.data.success === false && typeof _context.t1.response.data.data !== 'undefined') {
                  errors = []; //console.log(error.response.data.data);

                  for (_i = 0, _Object$entries = Object.entries(_context.t1.response.data.data); _i < _Object$entries.length; _i++) {
                    _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], item = _Object$entries$_i[1];

                    if (item && _typeof(item) === 'object') {
                      for (_i2 = 0, _Object$entries2 = Object.entries(item); _i2 < _Object$entries2.length; _i2++) {
                        _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), valKey = _Object$entries2$_i[0], val = _Object$entries2$_i[1];
                        errors[valKey] = val;
                      }
                    }
                  }

                  if (typeof _context.t1.response.data.data.earxivDTO !== 'undefined') {
                    _this.app.file_error = _context.t1.response.data.data.earxivDTO.earxivDTO;
                  }

                  if (errors) _this.setApplicationErrors(errors);else if (typeof _context.t1.response.data.data.errors == 'string') _this.$toast.error(_context.t1.response.data.data.errors);else {
                    _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг');
                  }

                  if (typeof _context.t1.response.data !== 'undefined' && typeof _context.t1.response.data.data !== 'undefined' && typeof _context.t1.response.data.data.message !== 'undefined') {
                    _this.$toast.error(_context.t1.response.data.data.message);
                  }
                } else {
                  _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг!');
                }

              case 67:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[56, 64]]);
      }))();
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

                if (_this.checkbox.first && _this.checkbox.second) {
                  _context4.next = 5;
                  break;
                }

                _this.$toast.error("Фойдаланиш шартларига розилик билдиришингиз лозим!");

                return _context4.abrupt("return");

              case 5:
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

              case 7:
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
            fileId: item.id
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
    /*        'app.checkbox':{
                if(val)
            }*/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/services/ppay/create.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/frontend/services/ppay/create.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_a9855f20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=a9855f20& */ "./resources/js/views/frontend/services/ppay/create.vue?vue&type=template&id=a9855f20&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/ppay/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/frontend/services/ppay/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_a9855f20___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_a9855f20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/ppay/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/ppay/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/ppay/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/ppay/create.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/ppay/create.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/frontend/services/ppay/create.vue?vue&type=template&id=a9855f20&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/ppay/create.vue?vue&type=template&id=a9855f20& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_a9855f20___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_a9855f20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_a9855f20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=a9855f20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=template&id=a9855f20&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=template&id=a9855f20&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/ppay/create.vue?vue&type=template&id=a9855f20& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
                        "\n                        ТИФ субъектининг божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлашга рухсат бериш\n                        "
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
                                    { attrs: { cols: "4" } },
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
                                : [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "4" } },
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
                                                        hint: "Жисмоний шахс СТИРи",
                                                        "persistent-hint": "",
                                                        name: "orgInn",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.$auth.user().tin,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.$auth.user(),
                                                            "tin",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "$auth.user().tin",
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
                                                          _vm._s(errors[0])
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
                                      { attrs: { cols: "4" } },
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
                                                        callback: function (
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
                                                          _vm._s(errors[0])
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
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
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
                                { attrs: { cols: "4" } },
                                [
                                  _c("text-field", {
                                    attrs: {
                                      title:
                                        "Тўлов муддати узайтириладиган сумма",
                                      required: "",
                                      "persistent-placeholder": "",
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
                                { attrs: { cols: "4" } },
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
                                { attrs: { cols: "4" } },
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
                                { attrs: { cols: "4" } },
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
                                { attrs: { cols: "4" } },
                                [
                                  _c("text-field", {
                                    attrs: {
                                      title: "Почта манзили",
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
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4" } },
                                [
                                  _c("ValidationProvider", {
                                    attrs: {
                                      name: "Божхона тўловлари таъминлови тури",
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
                                                  items: _vm.types,
                                                  "persistent-hint": "",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function () {
                                                        return [
                                                          _vm._v(
                                                            "Божхона тўловлари таъминлови тури "
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
                                                  value: _vm.app.type,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.app,
                                                      "type",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "app.type",
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
                              _vm.app.type === 0
                                ? [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "4" } },
                                      [
                                        _c("text-field", {
                                          attrs: {
                                            title: "Cуғурта полиси рақами",
                                          },
                                          model: {
                                            value: _vm.app.sugurta_number,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "sugurta_number",
                                                $$v
                                              )
                                            },
                                            expression: "app.sugurta_number",
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
                                        _c("text-field", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "##-##-####",
                                              expression: "'##-##-####'",
                                            },
                                          ],
                                          attrs: {
                                            title: "Cуғурта полиси санаси",
                                          },
                                          model: {
                                            value: _vm.app.sugurta_sana,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "sugurta_sana",
                                                $$v
                                              )
                                            },
                                            expression: "app.sugurta_sana",
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
                                        _c("e-arxiv-file", {
                                          attrs: {
                                            errors: _vm.app.file_error,
                                            label: "Суғурта файлини юкланг",
                                          },
                                          model: {
                                            value: _vm.app.sugurta_doc,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "sugurta_doc",
                                                $$v
                                              )
                                            },
                                            expression: "app.sugurta_doc",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.app.type === 1
                                ? [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "4" } },
                                      [
                                        _c("text-field", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "##-##-####",
                                              expression: "'##-##-####'",
                                            },
                                          ],
                                          attrs: {
                                            title: "Банк кафолати санаси",
                                          },
                                          model: {
                                            value: _vm.app.kafolat_bsana,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafolat_bsana",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafolat_bsana",
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
                                        _c("text-field", {
                                          attrs: {
                                            title: "Банк кафолати рақами",
                                          },
                                          model: {
                                            value: _vm.app.kafolat_raqami,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafolat_raqami",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafolat_raqami",
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
                                        _c("text-field", {
                                          attrs: { title: "Кафолат миқдори" },
                                          model: {
                                            value: _vm.app.kafolat_miqdor,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafolat_miqdor",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafolat_miqdor",
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
                                        _c("text-field", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "##-##-####",
                                              expression: "'##-##-####'",
                                            },
                                          ],
                                          attrs: {
                                            title:
                                              "Банк кафолати амал қилиш санаси",
                                          },
                                          model: {
                                            value: _vm.app.kafolat_sana,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafolat_sana",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafolat_sana",
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
                                        _c("e-arxiv-file", {
                                          attrs: {
                                            errors: _vm.app.file_error,
                                            label: "Кафолат файлини юкланг",
                                          },
                                          model: {
                                            value: _vm.app.kafolat_doc,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafolat_doc",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafolat_doc",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.app.type === 2
                                ? [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "4" } },
                                      [
                                        _c("text-field", {
                                          attrs: {
                                            title: "Кафил - СТИР/ЖШШИР",
                                          },
                                          model: {
                                            value: _vm.app.kafil_nomi,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafil_nomi",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafil_nomi",
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
                                        _c("text-field", {
                                          attrs: {
                                            title:
                                              "Кафил - Ташкилот номи/Ф.И.Ш",
                                          },
                                          model: {
                                            value: _vm.app.kafil_tin_pin,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafil_tin_pin",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafil_tin_pin",
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
                                        _c("text-field", {
                                          attrs: { title: "Кафиллик хати" },
                                          model: {
                                            value: _vm.app.kafil_xati,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafil_xati",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafil_xati",
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
                                        _c("text-field", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "##-##-####",
                                              expression: "'##-##-####'",
                                            },
                                          ],
                                          attrs: {
                                            title:
                                              "Кафиллик хати берилган санаси",
                                          },
                                          model: {
                                            value: _vm.app.kafillik_sana,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafillik_sana",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafillik_sana",
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
                                        _c("text-field", {
                                          attrs: {
                                            title: "Кафиллик миқдори",
                                            type: "number",
                                          },
                                          model: {
                                            value: _vm.app.kafil_miqdori,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafil_miqdori",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafil_miqdori",
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
                                        _c("text-field", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "##-##-####",
                                              expression: "'##-##-####'",
                                            },
                                          ],
                                          attrs: {
                                            title:
                                              "Кафиллик хати амал қилиш санаси",
                                          },
                                          model: {
                                            value: _vm.app.kafillik_sana,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafillik_sana",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafillik_sana",
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
                                        _c("e-arxiv-file", {
                                          attrs: {
                                            errors: _vm.app.file_error,
                                            label:
                                              "Кафиллик хати файл идни киритинг",
                                          },
                                          model: {
                                            value: _vm.app.kafillik_doc,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "kafillik_doc",
                                                $$v
                                              )
                                            },
                                            expression: "app.kafillik_doc",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.app.type === 3
                                ? [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "4" } },
                                      [
                                        _c("text-field", {
                                          attrs: {
                                            title: "Гаров шартномаси",
                                            hint: "Шартнома рақами",
                                          },
                                          model: {
                                            value: _vm.app.garov_shart,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "garov_shart",
                                                $$v
                                              )
                                            },
                                            expression: "app.garov_shart",
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
                                        _c("text-field", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "##-##-####",
                                              expression: "'##-##-####'",
                                            },
                                          ],
                                          attrs: {
                                            title:
                                              "Гаров шартномаси берилган санаси",
                                            hint: "Шартнома санаси",
                                          },
                                          model: {
                                            value: _vm.app.garov_shart_sana,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "garov_shart_sana",
                                                $$v
                                              )
                                            },
                                            expression: "app.garov_shart_sana",
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
                                        _c("text-field", {
                                          attrs: {
                                            title: "Гаров товар қиймати",
                                            type: "number",
                                          },
                                          model: {
                                            value: _vm.app.garov_qiymat,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "garov_qiymat",
                                                $$v
                                              )
                                            },
                                            expression: "app.garov_qiymat",
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
                                        _c("text-field", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "##-##-####",
                                              expression: "'##-##-####'",
                                            },
                                          ],
                                          attrs: {
                                            title:
                                              "Гаров шартномаси амал қилиш санаси",
                                            "persistent-hint": "",
                                          },
                                          model: {
                                            value: _vm.app.garov_sana,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "garov_sana",
                                                $$v
                                              )
                                            },
                                            expression: "app.garov_sana",
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
                                        _c("e-arxiv-file", {
                                          attrs: {
                                            errors: _vm.app.file_error,
                                            label:
                                              "Гаров шартномаси е-архив рақамини киритинг",
                                          },
                                          model: {
                                            value: _vm.app.garov_doc,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "garov_doc",
                                                $$v
                                              )
                                            },
                                            expression: "app.garov_doc",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.app.type === 4
                                ? [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "4" } },
                                      [
                                        _c("text-field", {
                                          attrs: {
                                            title: "Таъминлов суммаси",
                                            hint: "Суммани киритинг",
                                          },
                                          model: {
                                            value: _vm.app.taminlov,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.app, "taminlov", $$v)
                                            },
                                            expression: "app.taminlov",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.app.type === 5
                                ? [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "4" } },
                                      [
                                        _c("text-field", {
                                          attrs: {
                                            title: "Қонун ҳужжати рақами",
                                            hint: "Ҳужжат рақами ",
                                          },
                                          model: {
                                            value: _vm.app.taminotsiz,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "taminotsiz",
                                                $$v
                                              )
                                            },
                                            expression: "app.taminotsiz",
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
                                        _c("text-field", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "##-##-####",
                                              expression: "'##-##-####'",
                                            },
                                          ],
                                          attrs: {
                                            title: "Қонун ҳужжати санаси",
                                            hint: "Ҳужжат санаси",
                                          },
                                          model: {
                                            value: _vm.app.taminotsiz_sana,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "taminotsiz_sana",
                                                $$v
                                              )
                                            },
                                            expression: "app.taminotsiz_sana",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "8" } },
                                      [
                                        _c("e-arxiv-file", {
                                          attrs: { errors: _vm.app.file_error },
                                          model: {
                                            value: _vm.app.taminotsiz_doc,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.app,
                                                "taminotsiz_doc",
                                                $$v
                                              )
                                            },
                                            expression: "app.taminotsiz_doc",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("text-field", {
                                    attrs: {
                                      title: "Изоҳ",
                                      hint: "Қўшимча маълумотлар мавжуд бўлса киритинг",
                                      "persistent-placeholder": "",
                                    },
                                    model: {
                                      value: _vm.app.comment,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.app, "comment", $$v)
                                      },
                                      expression: "app.comment",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            2
                          ),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("v-row", [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "margin-bottom": "20px",
                        cursor: "pointer",
                      },
                      on: {
                        click: function ($event) {
                          _vm.dialog = true
                        },
                      },
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            padding: "3px 2px",
                            border: "1px solid rgb(21, 165, 51)",
                            "margin-right": "10px",
                            "margin-bottom": "-5px",
                            height: "23px",
                            width: "25px",
                            display: "inline-flex",
                          },
                        },
                        [
                          _c(
                            "v-icon",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    _vm.checkbox.first && _vm.checkbox.second,
                                  expression:
                                    "(checkbox.first && checkbox.second)",
                                },
                              ],
                            },
                            [_vm._v("mdi-check")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v("Фойдаланиш шартларига розилик билдираман"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "v-dialog",
                  {
                    attrs: { "max-width": "900" },
                    model: {
                      value: _vm.dialog,
                      callback: function ($$v) {
                        _vm.dialog = $$v
                      },
                      expression: "dialog",
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
                                "\n                                Фойдаланиш шартлари\n                                "
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-row",
                              [
                                _c("v-checkbox", {
                                  attrs: {
                                    "hide-details": "",
                                    dense: "",
                                    color: "primary",
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "label",
                                      fn: function () {
                                        return [
                                          _c("div", [
                                            _vm._v(
                                              "\n                                            Божхона тўловлари суммаларини ўз муддатида тўланишига кафолат берамиз.\n                                        "
                                            ),
                                          ]),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ]),
                                  model: {
                                    value: _vm.checkbox.first,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.checkbox, "first", $$v)
                                    },
                                    expression: "checkbox.first",
                                  },
                                }),
                                _vm._v(" "),
                                _c("v-checkbox", {
                                  staticClass:
                                    "d-flex justify-content-start align-items-start",
                                  attrs: {
                                    "hide-details": "",
                                    dense: "",
                                    color: "primary",
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "label",
                                      fn: function () {
                                        return [
                                          _c("div", [
                                            _vm._v(
                                              "\n                                            Божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш бўйича қонунчилик\n                                            ва унинг бузилишига нисбатан бўлган жавобгарлик билан танишганмиз ҳамда\n                                            мазкур мажбуриятга риоя қилинмаган тақдирда қонунчиликда белгиланган\n                                            жавобгарликга тортилишга розимиз.\n                                        "
                                            ),
                                          ]),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ]),
                                  model: {
                                    value: _vm.checkbox.second,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.checkbox, "second", $$v)
                                    },
                                    expression: "checkbox.second",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-row", [
                              _c("h4", [_vm._v("Эслатма:")]),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticStyle: {
                                    "list-style": "none",
                                    "padding-left": "30px !important",
                                    "font-style": "italic",
                                    display: "block",
                                    width: "100%",
                                  },
                                },
                                [
                                  _c("li", [
                                    _vm._v(
                                      "Божхона тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш имконияти умумий\n                                        тартибда божхона декларацияси қабул қилинган кундан эътиборан Божхона\n                                        кодекси 329-моддасига асосан олтмиш календарь кундан ҳамда қўшилган қиймат\n                                        солиғи Ўзбекистон Республикаси Вазирлар Маҳкамасининг 2020 йил 10 февралдаги\n                                        76-сон қарорига мувофиқ 120 кундан ошмаган даврга тақдим қилинади.\n                                    "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _vm._v(
                                      "Шунингдек, Божхона кодекси 329-моддаси ўн биринчи қисмига мувофиқ божхона\n                                        тўловларини кечиктириб ёки бўлиб-бўлиб тўлаш имконияти Ўзбекистон\n                                        Республикаси Президентининг ёхуд Ўзбекистон Республикаси Вазирлар\n                                        Маҳкамасининг қарорига биноан узоқроқ муддатларга берилиши мумкин.\n                                    "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _vm._v(
                                      "Агар Сизда, божхона тўловларини кечиктириб ёки бўлиб-бўлиб имкониятидан\n                                        қонунчиликга мувофиқ узоқроқ муддатларга фойдаланиш учун ҳуқуқий асослар\n                                        мавжуд бўлган тақдирда, мазкур асосларни ариза изоҳ қисмида кўрсатишингиз\n                                        лозим.\n                                    "
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
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
                                attrs: { color: "darken-1", text: "" },
                                on: {
                                  click: function ($event) {
                                    _vm.dialog = false
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                Қабул Қилмайман\n                            "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  color: "green darken-1",
                                  disabled: !(
                                    _vm.checkbox.first && _vm.checkbox.second
                                  ),
                                },
                                on: {
                                  click: function ($event) {
                                    _vm.dialog = false
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                Қабул қиламан\n                            "
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