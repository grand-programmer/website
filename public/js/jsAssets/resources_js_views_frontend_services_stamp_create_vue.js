"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_stamp_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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










Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__).forEach(function (rule) {
  (0,vee_validate__WEBPACK_IMPORTED_MODULE_9__.extend)(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__[rule]), {}, {
    // copies rule configuration
    message: _locales_oz_json__WEBPACK_IMPORTED_MODULE_2__.messages[rule] // assign message

  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InitialStamp",
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
        text: 'Транспорт воситасига товарларни божхона пломбалари ва муҳрлари остида ташишга рухсат бериш',
        to: '/services/stamp',
        disabled: true,
        exact: true
      }],
      app: {
        type: 0,
        type_avto: null,
        file_error: "",
        mark: null,
        produced_date: null,
        gov_number: null,
        vin: null,
        texpasport: null,
        region: null,
        post: null,
        kon_number: null,
        kon_type: null,
        konWeight: null,
        kon_size: null,
        kon_xususiyat: null,
        files: []
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
        apps: {
          locationId: null,
          postId: null,
          pinTin: null,
          appealType: "1",
          transportType: "1"
        },
        auto: {
          trailerTypeNm: null,
          trailerBrend: null,
          productionDate: null,
          stateNumber: null,
          vinNumber: null,
          techPassportNumber: null
        },
        container: {
          containerNumber: null,
          containerType: null,
          containerVase: null,
          containerSize: null,
          containerFeature: null
        }
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
        key: 'postId',
        value: 'Пост'
      }, {
        key: 'trailerTypeNm',
        value: 'Автотранспорт воситаси тури'
      }, {
        key: 'trailerBrend',
        value: 'Русуми (маркаси)'
      }, {
        key: 'productionDate',
        value: 'Ишлаб чиқарилган санаси'
      }, {
        key: 'stateNumber',
        value: 'Давлат рақами белгиси'
      }, {
        key: 'vinNumber',
        value: 'Идентификация рақами (VIN)'
      }, {
        key: 'techPassportNumber',
        value: 'Гувоҳнома серия рақами'
      }, {
        key: 'containerNumber',
        value: 'Контейнер рақами'
      }, {
        key: 'containerType',
        value: 'Контенер тури'
      }, {
        key: 'containerVase',
        value: 'Тара вазни'
      }, {
        key: 'containerSize',
        value: 'Ташқи ўлчамлари'
      }, {
        key: 'containerFeature',
        value: 'Конструкциянинг асосий ҳусусиятлари'
      }, {
        key: 'pinTin',
        value: typeof this.person !== 'undefined' && typeof this.person.type !== 'undefined' && this.person.type === 2 ? 'СТИР' : 'ЖШШИР'
      }, {
        key: 'personName',
        value: typeof this.person !== 'undefined' && typeof this.person.type !== 'undefined' && this.person.type === 2 ? 'Ташкилот номи' : 'ФИШ'
      }],
      ilova_error: "",
      postloading: false,
      posts: []
    };
  },
  methods: {
    getPosts: function getPosts(code) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.postloading = true;
                _this = _this2;
                _this2.posts = [];
                _context.next = 5;
                return axios.get('/api/v1/ex_api/postsbyregion?code=' + code).then(function (result) {
                  if (typeof result.data.posts !== 'undefined') result.data.posts.forEach(function (item) {
                    _this.posts.push({
                      'value': item['code'],
                      'text': item['cdNm']
                    });
                  });
                });

              case 5:
                _this2.postloading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this, result, obj, errors, _i, _Object$entries, _Object$entries$_i, key, item, _i2, _Object$entries2, _Object$entries2$_i, valKey, val;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = _this3;

                _this.resetVar(_this.application);

                _this.ilova_error = "";
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
                _this.application['apps']['locationId'] = _this.app.region;
                _this.application['apps']['pinTin'] = _this.person.type === 0 ? _this.person.organization_inn : _this.person.pin;
                _this.application['apps']['appealType'] = "1";
                _this.application['apps']['postId'] = _this.app.post;
                _this.application['apps']['transportType'] = _this.app.type ? '2' : '1';
                _this.application.earxiv = [];
                _this.application.earxiv = _this.arxivToApi(JSON.parse(JSON.stringify(_this.app.files)));
                _context2.t0 = _this.app.type;
                _context2.next = _context2.t0 === 0 ? 23 : _context2.t0 === 1 ? 30 : 36;
                break;

              case 23:
                _this.application.auto.trailerTypeNm = _this.app.type_avto;
                _this.application.auto.trailerBrend = _this.app.mark;
                _this.application.auto.stateNumber = _this.app.gov_number;
                _this.application.auto.vinNumber = _this.app.vin;
                _this.application.auto.techPassportNumber = _this.app.texpasport;
                _this.application.auto.productionDate = _this.formatDate(_this.app.produced_date);
                return _context2.abrupt("break", 36);

              case 30:
                _this.application.container.containerNumber = _this.app.kon_number;
                _this.application.container.containerType = _this.app.kon_type;
                _this.application.container.containerVase = _this.app.konWeight;
                _this.application.container.containerSize = _this.app.kon_size;
                _this.application.container.containerFeature = _this.app.kon_xususiyat;
                return _context2.abrupt("break", 36);

              case 36:
                result = null;
                _context2.prev = 37;
                obj = JSON.parse(JSON.stringify(_this.application));
                _context2.next = 41;
                return axios.post('/api/v1/ex_api/stamp', obj).then(function (resultData) {
                  if (typeof resultData !== 'undefined' && typeof resultData.data !== 'undefined' && typeof resultData.data.success !== 'undefined' && resultData.data.success === true) {
                    _this.application.id = resultData.data.data.apps.id; //console.log(resultData.data)
                    ///this.$cookie.delete('user');
                    //this.$cookie.delete('huquqegasi');

                    //console.log(resultData.data)
                    ///this.$cookie.delete('user');
                    //this.$cookie.delete('huquqegasi');
                    _this.$toast.success("Сизнинг аризангиз омадли тарзда юборилди!");

                    setTimeout(function () {
                      _this.$router.push("/services/stamp/" + _this.application.id);
                    }, 100);
                  }
                });

              case 41:
                _this.loading.button = false;
                return _context2.abrupt("return", result);

              case 45:
                _context2.prev = 45;
                _context2.t1 = _context2["catch"](37);

                ///console.log(error.response.data.data);
                if (typeof _context2.t1.response !== 'undefined' && typeof _context2.t1.response.data !== 'undefined' && _context2.t1.response.data.success === false && typeof _context2.t1.response.data.data !== 'undefined') {
                  errors = []; //console.log(error.response.data.data);

                  for (_i = 0, _Object$entries = Object.entries(_context2.t1.response.data.data); _i < _Object$entries.length; _i++) {
                    _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], item = _Object$entries$_i[1];

                    if (item && _typeof(item) === 'object') {
                      for (_i2 = 0, _Object$entries2 = Object.entries(item); _i2 < _Object$entries2.length; _i2++) {
                        _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), valKey = _Object$entries2$_i[0], val = _Object$entries2$_i[1];
                        errors[valKey] = val;
                      }
                    }
                  }

                  if (typeof _context2.t1.response.data.data.earxiv !== 'undefined') {
                    _this.ilova_error = JSON.parse(JSON.stringify(_context2.t1.response.data.data.earxiv.earxiv));
                  }

                  if (errors) {
                    _this.setApplicationErrors(errors);

                    _this.$toast.warning('Тўлдирилган майдонлардан бири хато тўлдирилди!');
                  } else if (typeof _context2.t1.response.data.data.errors == 'string') _this.$toast.error(_context2.t1.response.data.data.errors);else {
                    _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг');
                  }
                } else {
                  _this.$toast.error('Серверда хатолик юз берди! Кейинроқ уриниб кўринг!');
                }

              case 48:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[37, 45]]);
      }))();
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
                _context3.next = 3;
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
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    nextStep: function nextStep() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var isValid, _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                isValid = false;
                _this = _this5;
                _this5.loading.button = true; //console.log(!this.validateField("create_customs_person_value"))

                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
                  var resultData;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          isValid = true; // await this.validateField("stepValidation1");

                          if (!(isValid === true)) {
                            _context4.next = 10;
                            break;
                          }

                          _this5.person.lastName = _this5.$auth.user().mid_name;
                          _this5.person.firstName = _this5.$auth.user().first_name;
                          _this5.person.surName = _this5.$auth.user().sur_name;
                          _this5.person.locationId = _this5.person.region;
                          _context4.next = 8;
                          return _this5.sendApplication();

                        case 8:
                          resultData = _context4.sent;
                          _this5.loading.button = false;
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
                          _this5.loading.button = false;

                        case 11:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                })));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
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
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var provider;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                provider = _this6.$refs[field];
                if (Array.isArray(provider)) provider = provider[0]; // Validate the field

                if (!provider) {
                  _context6.next = 6;
                  break;
                }

                _context6.next = 5;
                return provider.validate();

              case 5:
                return _context6.abrupt("return", _context6.sent);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
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
          _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var silent, isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                silent = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
                isValid = false;
                _context7.next = 4;
                return _this7.$refs['create_customs_person_value'].validate({
                  silent: silent
                });

              case 4:
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
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
    'app.region': {
      handler: function handler(value) {
        //console.log(value)
        if (typeof value !== 'undefined' && value && value.length > 3) {
          var region = value; // .substr(2, 2);
          //setTimeout(async () => {

          this.getPosts(region); // })
        }
      },
      immediate: true,
      deep: true,
      sync: true
    }
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
    Textfield: _components_form_textfield__WEBPACK_IMPORTED_MODULE_4__["default"],
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/services/stamp/create.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/frontend/services/stamp/create.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_562bb95b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=562bb95b& */ "./resources/js/views/frontend/services/stamp/create.vue?vue&type=template&id=562bb95b&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/stamp/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/frontend/services/stamp/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_562bb95b___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_562bb95b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/stamp/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/stamp/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stamp/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/stamp/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stamp/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/frontend/services/stamp/create.vue?vue&type=template&id=562bb95b&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stamp/create.vue?vue&type=template&id=562bb95b& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_562bb95b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_562bb95b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_562bb95b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=562bb95b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=template&id=562bb95b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=template&id=562bb95b&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/create.vue?vue&type=template&id=562bb95b& ***!
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
                        "\n                        Транспорт воситасига товарларни божхона пломбалари ва муҳрлари остида ташишга рухсат бериш\n                        "
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
                                    { attrs: { cols: "4", sm: "12" } },
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
                                    { attrs: { cols: "12", md: "4" } },
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
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "4" } },
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
                                { attrs: { cols: "12", md: "4" } },
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
                                { attrs: { cols: "12", md: "4" } },
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
                                { attrs: { cols: "12", md: "4" } },
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
                                { attrs: { cols: "12", md: "4" } },
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
                                { attrs: { cols: "12", md: "6" } },
                                [
                                  _c("ValidationProvider", {
                                    attrs: { name: "Пост", rules: "required" },
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
                                                  hint: "Божхона постини танланг",
                                                  items: _vm.posts,
                                                  "persistent-placeholder": "",
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "label",
                                                      fn: function () {
                                                        return [
                                                          _vm._v(
                                                            "Божхона постини танланг "
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "p-0",
                                      attrs: { cols: "12", md: "2" },
                                    },
                                    [
                                      _c("h5", { staticClass: "mb-2" }, [
                                        _vm._v("Транспорт воситаси тури"),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn-toggle",
                                        {
                                          model: {
                                            value: _vm.app.type,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.app, "type", $$v)
                                            },
                                            expression: "app.type",
                                          },
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "border-0",
                                              attrs: {
                                                color:
                                                  _vm.app.type !== 1
                                                    ? "primary"
                                                    : "",
                                                small: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Автотранспорт воситаси\n                                    "
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "border-0",
                                              attrs: {
                                                color:
                                                  _vm.app.type === 1
                                                    ? "primary"
                                                    : "",
                                                small: "",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        Контейнер\n                                    "
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
                          _vm.app.type !== 1
                            ? _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          name: "Автотранспорт воситаси тури",
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
                                                      items: [
                                                        {
                                                          text: "Тиркама",
                                                          value: "Тиркама",
                                                        },
                                                        {
                                                          text: "Ярим тиркама",
                                                          value: "Ярим тиркама",
                                                        },
                                                        {
                                                          text: "Юк тортгич",
                                                          value: "Юк тортгич",
                                                        },
                                                        {
                                                          text: "Бошқа",
                                                          value: "Бошқа",
                                                        },
                                                      ],
                                                      label:
                                                        "Автотранспорт воситаси тури*",
                                                      "persistent-placeholder":
                                                        "",
                                                    },
                                                    model: {
                                                      value: _vm.app.type_avto,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.app,
                                                          "type_avto",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "app.type_avto",
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
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("textfield", {
                                        attrs: {
                                          title: "Русуми (маркаси)",
                                          rules: "required",
                                        },
                                        model: {
                                          value: _vm.app.mark,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.app, "mark", $$v)
                                          },
                                          expression: "app.mark",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("textfield", {
                                        directives: [
                                          {
                                            name: "mask",
                                            rawName: "v-mask",
                                            value: "##-##-####",
                                            expression: "'##-##-####'",
                                          },
                                        ],
                                        attrs: {
                                          title: "Ишлаб чиқарилган санаси",
                                          rules: "required",
                                        },
                                        model: {
                                          value: _vm.app.produced_date,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.app,
                                              "produced_date",
                                              $$v
                                            )
                                          },
                                          expression: "app.produced_date",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("textfield", {
                                        attrs: {
                                          title: "Давлат рақами белгиси",
                                          rules: "required",
                                        },
                                        model: {
                                          value: _vm.app.gov_number,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.app, "gov_number", $$v)
                                          },
                                          expression: "app.gov_number",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("textfield", {
                                        attrs: {
                                          title: "Идентификация рақами (VIN)",
                                          rules: "required",
                                        },
                                        model: {
                                          value: _vm.app.vin,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.app, "vin", $$v)
                                          },
                                          expression: "app.vin",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("textfield", {
                                        attrs: {
                                          title: "Гувоҳнома серия рақами",
                                          hint: "Автотранспорт воситаси рўйхатдан ўтказилганлиги тўғрисида гувоҳнома (техпаспорт) серия рақами",
                                          rules: "required",
                                        },
                                        model: {
                                          value: _vm.app.texpasport,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.app, "texpasport", $$v)
                                          },
                                          expression: "app.texpasport",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.app.type === 1
                            ? _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("textfield", {
                                        attrs: {
                                          title: "Контейнер рақами",
                                          rules: "required",
                                        },
                                        model: {
                                          value: _vm.app.kon_number,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.app, "kon_number", $$v)
                                          },
                                          expression: "app.kon_number",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("textfield", {
                                        attrs: {
                                          title: "Контенер тури",
                                          rules: "required",
                                        },
                                        model: {
                                          value: _vm.app.kon_type,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.app, "kon_type", $$v)
                                          },
                                          expression: "app.kon_type",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("ValidationProvider", {
                                        attrs: {
                                          name: "Тара вазни",
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
                                                                "Тара вазни "
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
                                                      value: _vm.app.konWeight,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.app,
                                                          "konWeight",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "app.konWeight",
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
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("textfield", {
                                        attrs: {
                                          title: "Ташқи ўлчамлари",
                                          rules: "required",
                                          hint: "смда, Мисол: 1289,5*235*239,2",
                                        },
                                        model: {
                                          value: _vm.app.kon_size,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.app, "kon_size", $$v)
                                          },
                                          expression: "app.kon_size",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "4" } },
                                    [
                                      _c("textfield", {
                                        attrs: {
                                          title:
                                            "Конструкциянинг асосий ҳусусиятлари",
                                          rules: "required",
                                          hint: "материал типи, конструкция тури ва бошқа. Мисол: Темирдан ясалган, йиғилмайдиган ",
                                        },
                                        model: {
                                          value: _vm.app.kon_xususiyat,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.app,
                                              "kon_xususiyat",
                                              $$v
                                            )
                                          },
                                          expression: "app.kon_xususiyat",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("e-arxiv-file", {
                                    attrs: {
                                      multiple: "",
                                      label: "Транспорт воситаси расмлари",
                                      errors: _vm.ilova_error,
                                      hint: "Транспорт воситасининг чап тарафи, Транспорт воситасининг ўнг тарафи, Транспорт воситасининг олди, Транспорт воситасининг орқаси, Пломбалар ва муҳрлар қўйиладиган жой",
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
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12" } }),
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
                      "row mb-3 position-absolute position-relative-sm bottom-0 end-0",
                  },
                  [
                    _c(
                      "v-col",
                      { staticClass: "d-flex tab_action_buttons" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "width-100-sm",
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