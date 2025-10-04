"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_spt_info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/info.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/info.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Менинг аризаларим'),
        to: '/applications',
        disabled: false,
        exact: true
      }],
      tab: null,
      panel: 0,
      app: [],
      oferta: false,
      showed: false,
      dialog: false,
      items: [{
        tab: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Ариза хақида умумий маълумот")
      }, {
        tab: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Ариза ҳолати")
      }]
    };
  },
  mounted: function mounted() {
    /*        setTimeout(() => {
                this.$store.commit('setLoading', true)
              }, 2000)*/
    this.getAppData();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['loading'])), {}, {
    korxonaRahbari: function korxonaRahbari() {
      return this.app.s10CompanyPersons.filter(function (item) {
        return item.personType === 0;
      });
    },
    korxonaBuxgalter: function korxonaBuxgalter() {
      return this.app.s10CompanyPersons.filter(function (item) {
        return item.personType === 2;
      });
    },
    tasischilar: function tasischilar() {
      return this.app.s10CompanyPersons.filter(function (item) {
        return item.personType === 1;
      });
    },
    vakolatlishaxslar: function vakolatlishaxslar() {
      return this.app.s10CompanyPersons.filter(function (item) {
        return item.personType === 3;
      });
    },
    brokerlar: function brokerlar() {
      return this.app.s10CompanyPersons.filter(function (item) {
        return item.personType === 4;
      });
    },
    shippings: function shippings() {
      return this.app.s10CompanyPersons.filter(function (item) {
        return item.personType === 5;
      });
    },
    owners: function owners() {
      return this.app.s10CompanyPersons.filter(function (item) {
        return item.personType === 6;
      });
    },
    flats: function flats() {
      return this.app.s10Earxivs.filter(function (item) {
        return item.docType === '1';
      });
    },
    courses: function courses() {
      return this.app.s10Earxivs.filter(function (item) {
        return item.docType === '2';
      });
    }
  }),
  methods: {
    getAppData: function getAppData() {
      var _this2 = this;

      var _this = this;

      setTimeout(function () {
        _this2.$store.commit('setLoading', true);

        axios.get("/api/v1/ex_api/vio-get", {
          params: {
            app_id: _this.$route.params.id
          }
        }).then(function (response) {
          if (typeof response.data.data !== "undefined") {
            // console.log(response.data.data)
            //console.log(response.data.data)
            _this.app = response.data.data[0];

            _this.breadcrumb_items.push({
              text: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Ваколатли иқтисодий оператор реестрига киришга ариза бериш -") + _this.app.appNum,
              to: '/services/vio/' + _this.app.id,
              disabled: true,
              exact: true
            });

            setTimeout(function () {
              _this.$store.commit('setLoading', false); //  _this.$router.push("/applications");

            }, 1000);
          } else {
            _this.$store.commit('setLoading', false);

            _this.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Маълумот топилмади!"));

            _this.$router.push("/applications");
          }
        })["catch"](function (error) {
          console.log(error);

          _this.$store.commit('setLoading', false);

          _this.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Маълумот топилмади!")); // _this.$router.push("/applications");

        });
      }, 500);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/info.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/info.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_vue_vue_type_template_id_1f7e8519___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=1f7e8519& */ "./resources/js/views/frontend/services/spt/info.vue?vue&type=template&id=1f7e8519&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/spt/info.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_1f7e8519___WEBPACK_IMPORTED_MODULE_0__.render,
  _info_vue_vue_type_template_id_1f7e8519___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/spt/info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/info.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/info.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/info.vue?vue&type=template&id=1f7e8519&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/info.vue?vue&type=template&id=1f7e8519& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_1f7e8519___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_1f7e8519___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_1f7e8519___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=template&id=1f7e8519& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/info.vue?vue&type=template&id=1f7e8519&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/info.vue?vue&type=template&id=1f7e8519&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/info.vue?vue&type=template&id=1f7e8519& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _vm.app
      ? _c(
          "div",
          { staticClass: "page-content" },
          [
            _c(
              "v-container",
              { staticClass: "pb-6" },
              [
                _c("v-row", [
                  _c("h3", { staticClass: "pb-5" }, [
                    _c("b", [_vm._v(_vm._s(_vm.$t("Ариза рақами:")))]),
                    _vm._v(_vm._s(_vm.app.appNum ? _vm.app.appNum : null)),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                ]),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticClass: "pb-10" },
                  [
                    _c(
                      "v-tabs",
                      {
                        staticClass: "fixed-color-tabs",
                        attrs: { left: "" },
                        model: {
                          value: _vm.tab,
                          callback: function ($$v) {
                            _vm.tab = $$v
                          },
                          expression: "tab",
                        },
                      },
                      _vm._l(_vm.items, function (item) {
                        return _c(
                          "v-tab",
                          { key: item.tab, staticStyle: { width: "400px" } },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(item.tab) +
                                "\n                        "
                            ),
                          ]
                        )
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-tabs-items",
                      {
                        staticClass: "fixed-color-tabs",
                        model: {
                          value: _vm.tab,
                          callback: function ($$v) {
                            _vm.tab = $$v
                          },
                          expression: "tab",
                        },
                      },
                      [
                        _c(
                          "v-tab-item",
                          [
                            _c(
                              "v-expansion-panels",
                              {
                                attrs: { accordion: "" },
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
                                  { key: 1, staticClass: "my-2" },
                                  [
                                    _c(
                                      "v-expansion-panel-header",
                                      {
                                        staticStyle: { color: "#fff" },
                                        attrs: { color: "primary" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.$t("Умумий маълумотлар")
                                            ) +
                                            "\n                                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-expansion-panel-content",
                                      [
                                        _vm.app &&
                                        typeof _vm.app.s10CompanyPersons !==
                                          "undefined" &&
                                        _vm.korxonaRahbari &&
                                        _vm.korxonaRahbari[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Корхона рахбари"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tbody", [
                                                          typeof _vm.app
                                                            .s10CompanyPersons !==
                                                            "undefined" &&
                                                          _vm.korxonaRahbari &&
                                                          _vm.korxonaRahbari[0]
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Ф.И.О"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm
                                                                        .korxonaRahbari[0]
                                                                        .fullName
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          typeof _vm.app
                                                            .s10CompanyPersons !==
                                                            "undefined" &&
                                                          _vm.korxonaRahbari &&
                                                          _vm.korxonaRahbari[0]
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "ID-карта (паспорт) маълумотлари"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm
                                                                        .korxonaRahbari[0]
                                                                        .passport
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                        ]),
                                                      ]
                                                    },
                                                    proxy: true,
                                                  },
                                                ],
                                                null,
                                                false,
                                                3022783635
                                              ),
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.app &&
                                        typeof _vm.app.s10CompanyPersons !==
                                          "undefined" &&
                                        _vm.korxonaRahbari &&
                                        _vm.korxonaRahbari[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Юридик шахс СТИРи, номи ва манзили"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tbody", [
                                                          typeof _vm.app
                                                            .legalName !==
                                                          "undefined"
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Ташкилот номи"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.app
                                                                        .legalName
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          typeof _vm.app.tin !==
                                                          "undefined"
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Ташкилот СТИРИ"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.app
                                                                        .tin
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          typeof _vm.app
                                                            .address !==
                                                          "undefined"
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Ташкилот манзили"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.app
                                                                        .address
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          typeof _vm.app
                                                            .vioType !==
                                                          "undefined"
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Ариза тури"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.app
                                                                        .vioType
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          typeof _vm.app
                                                            .lineOfWork !==
                                                          "undefined"
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Ариза йўналиши"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.app
                                                                        .lineOfWork
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          typeof _vm.app
                                                            .workAbout !==
                                                          "undefined"
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Фаолият ҳақида"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.app
                                                                        .workAbout
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                        ]),
                                                      ]
                                                    },
                                                    proxy: true,
                                                  },
                                                ],
                                                null,
                                                false,
                                                1151130759
                                              ),
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.app &&
                                        typeof _vm.app.s10CompanyPersons !==
                                          "undefined" &&
                                        _vm.tasischilar &&
                                        _vm.tasischilar[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Корхона таъсисчилари"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.tasischilar,
                                                            function (
                                                              tasischiItem
                                                            ) {
                                                              return _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.tasischilar.indexOf(
                                                                          tasischiItem
                                                                        ) + 1
                                                                      ) +
                                                                        " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "- таъсисчи"
                                                                          )
                                                                        )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      tasischiItem.fullName
                                                                    ) +
                                                                      " (" +
                                                                      _vm._s(
                                                                        tasischiItem.passport
                                                                      ) +
                                                                      ")"
                                                                  ),
                                                                ]),
                                                              ])
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
                                                2501627797
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
                                  { key: 2, staticClass: "my-2" },
                                  [
                                    _c(
                                      "v-expansion-panel-header",
                                      {
                                        staticStyle: { color: "#fff" },
                                        attrs: { color: "primary" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(
                                              _vm.$t("Қўшимча маълумотлар")
                                            ) +
                                            "\n                                    "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-expansion-panel-content",
                                      [
                                        _vm.app &&
                                        typeof _vm.app.s10CompanyPersons !==
                                          "undefined" &&
                                        _vm.korxonaBuxgalter &&
                                        _vm.korxonaBuxgalter[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Корхона бухгалтери"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("tbody", [
                                                          typeof _vm.app
                                                            .s10CompanyPersons !==
                                                            "undefined" &&
                                                          _vm.korxonaBuxgalter &&
                                                          _vm
                                                            .korxonaBuxgalter[0]
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Ф.И.О"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm
                                                                        .korxonaBuxgalter[0]
                                                                        .fullName
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          typeof _vm.app
                                                            .s10CompanyPersons !==
                                                            "undefined" &&
                                                          _vm.korxonaBuxgalter &&
                                                          _vm
                                                            .korxonaBuxgalter[0]
                                                            ? _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "ID-карта (паспорт) маълумотлари"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm
                                                                        .korxonaBuxgalter[0]
                                                                        .passport
                                                                    ) +
                                                                      "\n                                                    "
                                                                  ),
                                                                ]),
                                                              ])
                                                            : _vm._e(),
                                                        ]),
                                                      ]
                                                    },
                                                    proxy: true,
                                                  },
                                                ],
                                                null,
                                                false,
                                                57052255
                                              ),
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.app &&
                                        typeof _vm.app.s10CompanyPersons !==
                                          "undefined" &&
                                        _vm.vakolatlishaxslar &&
                                        _vm.vakolatlishaxslar[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Ваколатли шахслар"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.vakolatlishaxslar,
                                                            function (
                                                              vakolatliItem
                                                            ) {
                                                              return _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.vakolatlishaxslar.indexOf(
                                                                          vakolatliItem
                                                                        ) + 1
                                                                      ) +
                                                                        " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "- ваколатли шахс"
                                                                          )
                                                                        )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      vakolatliItem.fullName
                                                                    ) +
                                                                      " (" +
                                                                      _vm._s(
                                                                        vakolatliItem.passport
                                                                      ) +
                                                                      ")"
                                                                  ),
                                                                ]),
                                                              ])
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
                                                2087342047
                                              ),
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.app &&
                                        typeof _vm.app.s10CompanyPersons !==
                                          "undefined" &&
                                        _vm.brokerlar &&
                                        _vm.brokerlar[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Брокерлар"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.brokerlar,
                                                            function (
                                                              brokerItem
                                                            ) {
                                                              return _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.brokerlar.indexOf(
                                                                          brokerItem
                                                                        ) + 1
                                                                      ) +
                                                                        " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "- брокер"
                                                                          )
                                                                        )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      brokerItem.fullName
                                                                    ) +
                                                                      " (" +
                                                                      _vm._s(
                                                                        brokerItem.passport
                                                                      ) +
                                                                      ")"
                                                                  ),
                                                                ]),
                                                              ])
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
                                                1359310367
                                              ),
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.app &&
                                        typeof _vm.app.s10CompanyPersons !==
                                          "undefined" &&
                                        _vm.shippings &&
                                        _vm.shippings[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Бир турдаги етказиб берувчилар"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.shippings,
                                                            function (
                                                              shippingItem
                                                            ) {
                                                              return _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.shippings.indexOf(
                                                                          shippingItem
                                                                        ) + 1
                                                                      ) +
                                                                        " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "- етказиб бурувчи"
                                                                          )
                                                                        )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      shippingItem.legalName
                                                                    ) +
                                                                      " (" +
                                                                      _vm._s(
                                                                        shippingItem.legalAddress
                                                                      ) +
                                                                      ")"
                                                                  ),
                                                                ]),
                                                              ])
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
                                                3366781379
                                              ),
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.app &&
                                        typeof _vm.app.s10CompanyPersons !==
                                          "undefined" &&
                                        _vm.owners &&
                                        _vm.owners[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Эгалик ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.owners,
                                                            function (
                                                              ownerItem
                                                            ) {
                                                              return _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.owners.indexOf(
                                                                          ownerItem
                                                                        ) + 1
                                                                      ) +
                                                                        " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "- бино, иншоот ва майдонча"
                                                                          )
                                                                        )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      ownerItem.legalName
                                                                    ) +
                                                                      " (" +
                                                                      _vm._s(
                                                                        ownerItem.legalAddress
                                                                      ) +
                                                                      ")"
                                                                  ),
                                                                ]),
                                                              ])
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
                                                2395178246
                                              ),
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.app &&
                                        typeof _vm.app.s10Earxivs !==
                                          "undefined" &&
                                        _vm.flats &&
                                        _vm.flats[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Ижара ҳуқуқи асосида иншоотлар, бинолар ва очиқ майдончалар"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.flats,
                                                            function (
                                                              ownerItem
                                                            ) {
                                                              return _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.flats.indexOf(
                                                                          ownerItem
                                                                        ) + 1
                                                                      ) +
                                                                        " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "- бино, иншоот ва майдонча"
                                                                          )
                                                                        )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      ownerItem.contractNumber
                                                                    ) +
                                                                      " (" +
                                                                      _vm._s(
                                                                        ownerItem.cadastralNumber
                                                                      ) +
                                                                      ") / (" +
                                                                      _vm._s(
                                                                        ownerItem.depotAddress
                                                                      ) +
                                                                      ")"
                                                                  ),
                                                                ]),
                                                              ])
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
                                                593396358
                                              ),
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.app &&
                                        typeof _vm.app.s10Earxivs !==
                                          "undefined" &&
                                        _vm.courses &&
                                        _vm.courses[0]
                                          ? _c("v-simple-table", {
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function () {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left",
                                                                staticStyle: {
                                                                  "font-weight":
                                                                    "550",
                                                                },
                                                              },
                                                              [
                                                                _c(
                                                                  "h4",
                                                                  {
                                                                    staticClass:
                                                                      "py-4 font-weight-bold",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Сертификатлари"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left",
                                                              staticStyle: {
                                                                "font-weight":
                                                                  "550",
                                                              },
                                                            }),
                                                          ]),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.courses,
                                                            function (
                                                              ownerItem
                                                            ) {
                                                              return _c("tr", [
                                                                _c(
                                                                  "td",
                                                                  {
                                                                    staticStyle:
                                                                      {
                                                                        "font-weight":
                                                                          "550",
                                                                      },
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.flats.indexOf(
                                                                          ownerItem
                                                                        ) + 1
                                                                      ) +
                                                                        " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "- сертификат"
                                                                          )
                                                                        )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("td", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      ownerItem.contractNumber
                                                                    ) +
                                                                      " (" +
                                                                      _vm._s(
                                                                        ownerItem.cadastralNumber
                                                                      ) +
                                                                      ") / (" +
                                                                      _vm._s(
                                                                        ownerItem.depotAddress
                                                                      ) +
                                                                      ")"
                                                                  ),
                                                                ]),
                                                              ])
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
                                                2933039057
                                              ),
                                            })
                                          : _vm._e(),
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
                          "v-tab-item",
                          [
                            typeof _vm.app.s10StatusH !== "undefined"
                              ? _c(
                                  "v-timeline",
                                  {
                                    staticStyle: { margin: "40px" },
                                    attrs: { dense: "", clipped: "" },
                                  },
                                  [
                                    _vm._l(
                                      _vm.app.s10StatusH,
                                      function (appstatus, key, index) {
                                        return [
                                          _c(
                                            "v-timeline-item",
                                            {
                                              staticClass: "mb-4",
                                              attrs: {
                                                color: "primary",
                                                "icon-color": "primary",
                                                small: "",
                                              },
                                            },
                                            [
                                              _c(
                                                "v-row",
                                                { attrs: { justify: "start" } },
                                                [
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "10" } },
                                                    [
                                                      _c(
                                                        "h4",
                                                        {
                                                          staticClass: "active",
                                                        },
                                                        [
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  appstatus.statusNm
                                                                )
                                                              )
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("br"),
                                                      _vm._v(" "),
                                                      _c("p", [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              new Date(
                                                                appstatus.insTime
                                                              ).toLocaleString()
                                                            )
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("br"),
                                                      _vm._v(" "),
                                                      appstatus.status === "400"
                                                        ? _c(
                                                            "p",
                                                            {
                                                              staticStyle: {
                                                                "font-size":
                                                                  "15px",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    href:
                                                                      "http://192.168.214.152:7070/DECAPP/s10decisionPdfDownloadAppeal/?appId=" +
                                                                      _vm.app
                                                                        .id,
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                    " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Қарорни юклаб олинг!"
                                                                        )
                                                                      ) +
                                                                      " "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                       false
                                                        ? 0
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      ( false) ||
                                                      appstatus.status === "600"
                                                        ? _c(
                                                            "p",
                                                            {
                                                              staticStyle: {
                                                                "font-size":
                                                                  "15px",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    href:
                                                                      "https://qaror.customs.uz/s09decisionPdfDownloadAppeal?stId=" +
                                                                      appstatus.id,
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Аризангиз жавоб хатини юклаб олинг!"
                                                                        )
                                                                      ) +
                                                                      " "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c("br"),
                                                      _vm._v(" "),
                                                      _c("p", [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              appstatus.comment
                                                            ) +
                                                            " "
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
                                        ]
                                      }
                                    ),
                                  ],
                                  2
                                )
                              : _vm._e(),
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
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);