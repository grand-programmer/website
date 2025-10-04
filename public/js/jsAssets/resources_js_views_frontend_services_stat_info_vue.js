"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_stat_info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "StatInfo",
  data: function data() {
    return {
      bhm: null,
      paymeurl: null,
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
        byudsanadan: null,
        byudsanagacha: null,
        statusName: null,
        appNum: null,
        payment: null,
        grafalar: [],
        token: null
      },
      person: {
        type: 1,
        /// 1- fiz 0- yur
        fio: "",
        post: null,
        pin: null,
        tin: null,
        organization_name: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Жисмоний шахс"),
        position: "0",
        phone: null,
        email: null,
        region: null
      },
      application_types: [],
      list: {
        regions: [],
        posts: [],
        regimes: [],
        tftn: [],
        fields: [],
        countries: [],
        prices: []
      },
      tab: null,
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Менинг аризаларим'),
        to: '/applications',
        disabled: false,
        exact: true
      }],
      panel: [0, 1],
      loading: {
        country: false,
        post: false,
        fields: false,
        org: false,
        calculate: false
      },
      items: [{
        tab: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Ариза хақида умумий маълумот")
      }, {
        tab: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("Ариза ҳолати")
      }]
    };
  },
  methods: {
    openPayme: function openPayme() {
      window.location.href = "https://checkout.paycom.uz/" + this.paymeurl;
    },
    openResult: function openResult() {
      window.location.href = "https://servicepdf.customs.uz/" + this.application.id + "/download?token=" + this.application.token + "&inn=" + (this.person.type === 0 ? this.person.tin : this.person.pin);
    },
    getPrice: function getPrice() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;
                _context.next = 3;
                return axios.get('/api/v1/statservice/price/' + _this2.$route.params.id).then(function (res) {
                  if (res.data.data) _this.list.prices = res.data.data;
                  if (res.data.bhm) _this.bhm = res.data.bhm;
                  if (res.data.payme) _this.paymeurl = res.data.payme;
                })["catch"](function (e) {
                  if (e.response && e.response.data && e.response.data.status) _this.application.status = e.response.data.status;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
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
    getAppData: function getAppData() {
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
                return axios.get('/api/v1/statservice/' + _this3.$route.params.id, {
                  params: {
                    completed: 1
                  }
                }).then(function (res) {
                  if (res.status === 200) {
                    _this.application = res.data.data;

                    _this.setPersonData(res.data.data);

                    _this.application.region.forEach(function (item) {
                      _this3.getPosts(item);
                    });

                    _this3.breadcrumb_items.push({
                      text: _this.$t("Экспорт ва импорт бўйича маълумотларни олиш") + " " + (res.data.data.appNum ? "- " + res.data.data.appNum : ""),
                      to: '/services/stat/info/' + res.data.data.id,
                      disabled: true,
                      exact: true
                    });
                  }

                  setTimeout(function () {
                    _this3.$store.commit('setLoading', false);
                  }, 200);
                })["catch"](function (e) {
                  _this3.$toast.error(_this3.$t('Хатолик юз берди'));

                  _this3.$router.push('/applications');

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
                return axios.get('/api/v1/data/post?code=' + code).then(function (result) {
                  if (typeof result.data !== 'undefined') _this.list.posts = result.data.posts;
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
    getRegimes: function getRegimes() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.loading.regime = true;
                _this = _this5;
                _this5.list.regimes = [];
                _context4.next = 5;
                return axios.get('/api/v1/data/' + _this5.$route.params.id + '/regime').then(function (result) {
                  if (typeof result.data !== 'undefined') _this.list.regimes = result.data;
                  _this.loading.regime = false;
                })["catch"](function (e) {
                  _this.loading.regime = false;
                  console.log(e);

                  _this.$toast.error(_this.$t('Режим маълумотларини олишда хатолик юз берди'));
                });

              case 5:
                _this5.loading.regime = false;

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getFields: function getFields() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var grafalar, _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.loading.fields = true;
                grafalar = JSON.parse(JSON.stringify(_this6.application.grafalar));
                _this = _this6;
                _this6.list.fields = [];
                _context5.next = 6;
                return axios.get('/api/v1/data/' + _this6.$route.params.id + '/fields').then(function (result) {
                  if (typeof result.data !== 'undefined') _this.list.fields = result.data.data;
                  _this.list.primaryFields = result.data.secondary;
                  _this.application.grafalar = grafalar.length > 0 ? JSON.parse(JSON.stringify(grafalar)) : _this.application.grafalar;
                })["catch"](function (e) {
                  console.log(e);

                  _this.$toast.error(_this.$t('Режим маълумотларини олишда хатолик юз берди'));
                });

              case 6:
                _this6.loading.fields = false;

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    getBoshqarmalar: function getBoshqarmalar() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this = _this7;
                _context6.next = 3;
                return _this7.$auth.plugins.http.get('/api/v1/data/region').then(function (result) {
                  _this.list.regions = result.data;
                });

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getCountries: function getCountries() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var root;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                root = _this8;
                _context7.next = 3;
                return _this8.$auth.plugins.http.get('/api/v1/data/country').then(function (result) {
                  root.list.countries = result.data;
                });

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    getApplicationTypes: function getApplicationTypes() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios.get('/api/v1/data/statservicetype').then(function (res) {
                  console.log(res);
                  _this9.application_types = res.data;
                });

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getApplicationTarmoq: function getApplicationTarmoq() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return axios.get('/api/v1/data/statservice/' + _this10.$route.params.id + '/tarmoq').then(function (res) {
                  _this10.list.netOrgs = res.data;
                });

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    }
  },
  mounted: function mounted() {
    var _this11 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _this11.getAppData();

            case 2:
              _context10.next = 4;
              return _this11.getBoshqarmalar();

            case 4:
              _context10.next = 6;
              return _this11.getRegimes();

            case 6:
              _context10.next = 8;
              return _this11.getFields();

            case 8:
              _context10.next = 10;
              return _this11.getCountries();

            case 10:
              _context10.next = 12;
              return _this11.getApplicationTypes();

            case 12:
              _context10.next = 14;
              return _this11.getApplicationTarmoq();

            case 14:
              if (!_this11.application.id) {
                _context10.next = 17;
                break;
              }

              _context10.next = 17;
              return _this11.getPrice();

            case 17:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }))();
  },
  computed: {
    additions: function additions() {
      if (!this.list.fields) return [];
      if (this.application.application_type === 0) return Object.values(this.list.fields);else return Object.values(this.list.fields);
    },
    completedData: function completedData() {
      var _this = this;

      return [{
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Ариза рақами'),
        value: _this.application.appNum
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('ТИФ иштирокчиси'),
        value: _this.application.org_name
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('СТИР'),
        value: _this.person.tin
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Манзили'),
        value: _this.person.perAdr
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Телефон рақами'),
        value: _this.person.phone
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Электрон почта манзили'),
        value: _this.person.email
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Хизмат тури'),
        value: _this.application.application_type !== null && _this.application_types[_this.application.application_type] ? _this.application_types[_this.application.application_type].name : ''
      }, {
        label: _this.application.application_type !== 0 ? _this.$t('Илова хужжатлар тури') : _this.$t('Қўшимча белгиланган графалар'),
        value: _this.application.grafalar && _this.application.grafalar.length > 0 ? _this.additions.filter(function (fieldItem) {
          return _this.application.grafalar.includes(fieldItem.code);
        }).map(function (grafaItem) {
          return grafaItem.name;
        }).join(', ') : null
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Ҳудудий божхона бошқармаси'),
        value: _this.application.region && _this.application.region.length > 0 ? _this.list.regions.filter(function (item) {
          return _this.application.region.includes(item.value);
        }).map(function (el) {
          return el.text;
        }).join(', ') : null
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Пост'),
        value: _this.application.post && _this.application.post.length > 0 ? _this.list.posts.filter(function (item) {
          return _this.application.post.includes(item.code);
        }).map(function (el) {
          return el.name;
        }).join(', ') : ''
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Божхона режими'),
        value: _this.application.rejim && _this.application.rejim.length > 0 ? _this.list.regimes.filter(function (item) {
          return _this.application.rejim.includes(item.id);
        }).map(function (el) {
          return el.name;
        }).join(', ') : ''
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('ТИФ ТН код'),
        value: _this.application.tftn && _this.application.tftn.length > 0 ? _this.application.tftn.join(',') : null
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Шартноманинг ТСО ЯЭАТдаги идентификация рақами'),
        value: _this.application.shartnoma && _this.application.shartnoma.length > 0 ? _this.application.shartnoma.join(',') : null
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Давлат'),
        value: _this.application.country !== null && _this.findElementInlist(_this.list.countries, _this.application.country, 'value') ? _this.findElementInlist(_this.list.countries, _this.application.country, 'value').title : ''
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('БЮДнинг тартиб рақами'),
        value: _this.application.byud && _this.application.byud.length > 0 ? _this.application.byud.join(',') : null
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Статус'),
        value: _this.application.statusName,
        type: 'result'
      }, {
        label: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Тўлов'),
        value: _this.application.payment ? this.$t('Тўлов килинган') : this.$t('Тўлов килинмаган'),
        type: 'payment'
      }, {
        label: this.application.application_type !== 2 && this.application.isCreatedDate ? this.$t('БЮД тақдим этилган санадан') : this.$t('БЮД расмийлаштирилган санадан'),
        value: this.application.byudsanadan
      }, {
        label: this.application.application_type !== 2 && this.application.isCreatedDate ? this.$t('БЮД тақдим этилган санагача') : this.$t('БЮД расмийлаштирилган санагача'),
        value: this.application.byudsanagacha
      }];
    }
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".page-content div.row .fixed-color-tabs .v-expansion-panel-header[data-v-936534f4] {\n  background-color: #dee8e2;\n  font-weight: bold;\n}\n.price-block[data-v-936534f4] {\n  padding: 30px;\n  border: 1px solid var(--mycolor);\n  margin-top: 25px;\n  border-radius: 10px;\n}\n.price-block h4[data-v-936534f4] {\n  color: var(--mycolor);\n  font-size: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 30px;\n}\n.price-block h5[data-v-936534f4] {\n  color: var(--mycolor);\n  font-size: 14px;\n  margin: 10px 5px;\n}\n.price-block p[data-v-936534f4] {\n  font-size: 14px;\n  line-height: 24px;\n}\n.resultTable td[data-v-936534f4] {\n  border: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/views/frontend/services/stat/info.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/info.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/info.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_936534f4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=style&index=0&id=936534f4&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_936534f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_936534f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_936534f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=template&id=936534f4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stat/info.vue?vue&type=template&id=936534f4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
                      staticClass: "lh-sm  m-3 font-weight-bold primary-color",
                      attrs: { align: "center" },
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            _vm.$t(
                              "Экспорт ва импорт бўйича маълумотларни олиш"
                            )
                          ) +
                          "\n          "
                      ),
                    ]
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
          "v-container",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-expansion-panels",
                  {
                    staticClass: "mb-10 fixed-color-tabs",
                    attrs: { multiple: "" },
                    model: {
                      value: _vm.panel,
                      callback: function ($$v) {
                        _vm.panel = $$v
                      },
                      expression: "panel",
                    },
                  },
                  [
                    _c(
                      "v-expansion-panel",
                      [
                        _c("v-expansion-panel-header", [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("Ариза умумий маълумотлари")) +
                              "\n            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-expansion-panel-content",
                          [
                            _vm.completedData
                              ? _c("v-simple-table", {
                                  staticClass: "py-2 resultTable",
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
                                                                width: "80%",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "d-flex justify-content-between",
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "d-flex align-items-center justify-content-center",
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
                                                                  _vm._v(" "),
                                                                  item.type &&
                                                                  item.type ===
                                                                    "payment" &&
                                                                  _vm.paymeurl &&
                                                                  !_vm
                                                                    .application
                                                                    .payment
                                                                    ? _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "pa-4",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "b",
                                                                            [
                                                                              _vm._v(
                                                                                "Тўлов қилиш:"
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "img",
                                                                            {
                                                                              staticStyle:
                                                                                {
                                                                                  height:
                                                                                    "30px",
                                                                                  cursor:
                                                                                    "pointer",
                                                                                },
                                                                              attrs:
                                                                                {
                                                                                  src: "https://cdn.payme.uz/payme-logos/logo/horizontal.svg",
                                                                                },
                                                                              on: {
                                                                                click:
                                                                                  _vm.openPayme,
                                                                              },
                                                                            }
                                                                          ),
                                                                        ]
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  item.type &&
                                                                  item.type ===
                                                                    "result" &&
                                                                  _vm
                                                                    .application
                                                                    .token
                                                                    ? _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "pa-4",
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "b",
                                                                            [
                                                                              _vm._v(
                                                                                "Натижа:"
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              staticStyle:
                                                                                {
                                                                                  "font-weight":
                                                                                    "bold",
                                                                                  padding:
                                                                                    "0 5px !important",
                                                                                },
                                                                              attrs:
                                                                                {
                                                                                  color:
                                                                                    "primary",
                                                                                  text: "",
                                                                                  size: "x-small",
                                                                                },
                                                                              on: {
                                                                                click:
                                                                                  _vm.openResult,
                                                                              },
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                " Юклаб олиш "
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      )
                                                                    : _vm._e(),
                                                                ]
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
                                    ],
                                    null,
                                    false,
                                    3539631545
                                  ),
                                })
                              : _vm._e(),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-expansion-panel",
                      [
                        _c("v-expansion-panel-header", [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("Маълумот ҳажми ва нарх")) +
                              "\n            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-expansion-panel-content",
                          [
                            ![1, 2, 8].includes(_vm.application.status) &&
                            _vm.list.prices &&
                            _vm.list.prices.reduce(function (sum, item) {
                              return sum + parseFloat(item.price)
                            }, 0) > 0
                              ? [
                                  _c("v-simple-table", {
                                    staticClass: "py-2 pt-1 resultTable",
                                    staticStyle: { "text-align": "center" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function () {
                                            return [
                                              _c(
                                                "thead",
                                                {
                                                  staticStyle: {
                                                    "border-bottom":
                                                      "1px solid #ccc",
                                                  },
                                                },
                                                [
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
                                                        _vm._s(_vm.$t("Миқдор"))
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
                                                ]
                                              ),
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
                                                              "\n                        " +
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
                                                                "\n                      "
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
                                                                  _vm.$t("сўм")
                                                                ) +
                                                                "\n                      "
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
                                                                          "\n                            " +
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
                                                                            "\n                          "
                                                                        ),
                                                                      ]
                                                                    : [
                                                                        _vm._v(
                                                                          "\n                            " +
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
                                                                            ")\n                          "
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
                                                          "max-width": "20%",
                                                          "font-weight": "bold",
                                                        },
                                                        attrs: { colspan: "2" },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(_vm.$t("Жами"))
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
                                                              "\n\n                        " +
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
                                                                  _vm.$t("сўм")
                                                                ) +
                                                                "\n\n\n                      "
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
                                      3330639309
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
                                      _c(
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
                                            "\n                    " +
                                              _vm._s(
                                                _vm.list.prices.length > 0
                                                  ? _vm.$t(
                                                      "Ушбу ариза бўйича маълумот топилмади"
                                                    )
                                                  : ""
                                              )
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ],
                          ],
                          2
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
        attrs: { target: "_blank", href: "https://t.me/HsCodeDecisions" },
      },
      [
        _c("img", { attrs: { src: "/public/images/telegram.png" } }),
        _vm._v(" "),
        _c("p", [
          _vm._v(" " + _vm._s(_vm.$t("Саволларингизни йўлланг")) + "\n      "),
          _c("br"),
          _vm._v("\n      @HsCodeDecisions\n    "),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);