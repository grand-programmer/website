"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_stamp_info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/info.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/info.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: 'Менинг аризаларим',
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
        tab: "Ариза хақида умумиy маълумот"
      }, {
        tab: 'Ариза ҳолати'
      }]
    };
  },
  mounted: function mounted() {
    /*        setTimeout(() => {
                this.$store.commit('setLoading', true)
             }, 2000)*/
    this.getAppData();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['loading'])),
  methods: {
    getAppData: function getAppData() {
      var _this2 = this;

      var _this = this;

      setTimeout(function () {
        _this2.$store.commit('setLoading', true);

        axios.get("/api/v1/ex_api/stamp-get", {
          params: {
            app_id: _this.$route.params.id
          }
        }).then(function (response) {
          if (typeof response.data.data !== "undefined") {
            //console.log(response.data.data)
            _this.app = response.data.data.data;

            _this.breadcrumb_items.push({
              text: "Транспорт воситасига товарларни божхона пломбалари ва муҳрлари остида ташишга рухсат бериш -" + _this.app.appNum,
              to: '/services/stamp/' + _this.app.id,
              disabled: true,
              exact: true
            });

            setTimeout(function () {
              _this.$store.commit('setLoading', false);
            }, 1000);
          } else {
            _this.$store.commit('setLoading', false);

            _this.$toast.error("Маълумот топилмади!");

            _this.$router.push("/applications");
          }
        })["catch"](function (error) {
          console.log(error);

          _this.$store.commit('setLoading', false);

          _this.$toast.error("Маълумот топилмади!");

          _this.$router.push("/applications");
        });
      }, 500);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/frontend/services/stamp/info.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/frontend/services/stamp/info.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_vue_vue_type_template_id_042699cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=042699cd& */ "./resources/js/views/frontend/services/stamp/info.vue?vue&type=template&id=042699cd&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/stamp/info.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_042699cd___WEBPACK_IMPORTED_MODULE_0__.render,
  _info_vue_vue_type_template_id_042699cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/stamp/info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/stamp/info.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stamp/info.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/stamp/info.vue?vue&type=template&id=042699cd&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/stamp/info.vue?vue&type=template&id=042699cd& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_042699cd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_042699cd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_042699cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=template&id=042699cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/info.vue?vue&type=template&id=042699cd&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/info.vue?vue&type=template&id=042699cd&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/stamp/info.vue?vue&type=template&id=042699cd& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
              [
                _c("v-row", [
                  _c("h3", { staticClass: "pb-5" }, [
                    _c("b", [_vm._v("Ариза рақами: ")]),
                    _vm._v(_vm._s(_vm.app.appNum)),
                  ]),
                  _vm._v(" "),
                  _c("br"),
                ]),
                _vm._v(" "),
                _c(
                  "v-row",
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
                            _vm.app
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
                                                    staticClass: "text-left",
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        Ариза рақами\n                                                    "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "th",
                                                  {
                                                    staticClass: "text-left",
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .appNum !==
                                                            "undefined"
                                                            ? _vm.app.appNum
                                                            : ""
                                                        ) +
                                                        "\n                                                    "
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tbody", [
                                              typeof _vm.app
                                                .personFullOrLegalName !==
                                              "undefined"
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [_vm._v("Аризачи")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .personFullOrLegalName !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .personFullOrLegalName
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.personPhone !==
                                                "undefined" &&
                                              _vm.app.personPhone
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Аризачи телефон рақами"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .personPhone !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .personPhone
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.personEmail !==
                                                "undefined" &&
                                              _vm.app.personEmail
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Аризачининг эмаил манзили"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .personEmail !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .personEmail
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.personAddress !==
                                                "undefined" &&
                                              _vm.app.personAddress
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Аризачининг манзили"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .personAddress !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .personAddress
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.personPinOrTin !==
                                                "undefined" &&
                                              _vm.app.personPinOrTin
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Аризачининг ЖШШИР/ СТИРи"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .personPinOrTin !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .personPinOrTin
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.locationName !==
                                                "undefined" &&
                                              _vm.app.locationName
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Танланган божхона бошқармаси"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .locationName !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .locationName
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.trailerTypeNm !==
                                                "undefined" &&
                                              _vm.app.trailerTypeNm
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Автотранспорт воситаси тури"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .trailerTypeNm !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .trailerTypeNm
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.trailerBrend !==
                                                "undefined" &&
                                              _vm.app.trailerBrend
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Автотранспорт русуми (маркаси)"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .trailerBrend !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .trailerBrend
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.productionDate !==
                                                "undefined" &&
                                              _vm.app.productionDate
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Ишлаб чиқарилган санаси"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .productionDate !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .productionDate
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.stateNumber !==
                                                "undefined" &&
                                              _vm.app.stateNumber
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Давлат рақами белгиси"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .stateNumber !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .stateNumber
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.vinNumber !==
                                                "undefined" && _vm.app.vinNumber
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Идентификация рақами (VIN)"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .vinNumber !==
                                                            "undefined"
                                                            ? _vm.app.vinNumber
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app
                                                .techPassportNumber !==
                                                "undefined" &&
                                              _vm.app.techPassportNumber
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Гувоҳнома серия рақами"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .techPassportNumber !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .techPassportNumber
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.containerNumber !==
                                                "undefined" &&
                                              _vm.app.containerNumber
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Контейнер рақами"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .containerNumber !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .containerNumber
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.containerType !==
                                                "undefined" &&
                                              _vm.app.containerType
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [_vm._v("Контейнер тури")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .containerType !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .containerType
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.containerVase !==
                                                "undefined" &&
                                              _vm.app.containerVase
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [_vm._v("Тара вазни")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .containerVase !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .containerVase
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.containerSize !==
                                                "undefined" &&
                                              _vm.app.containerSize
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Ташқи ўлчамлари"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .containerSize !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .containerSize
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app
                                                .containerFeature !==
                                                "undefined" &&
                                              _vm.app.containerFeature
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Конструкциянинг асосий ҳусусиятлари"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .containerFeature !==
                                                            "undefined"
                                                            ? _vm.app
                                                                .containerFeature
                                                            : null
                                                        ) +
                                                          "\n                                                    "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.s09EarxivList !==
                                                "undefined" &&
                                              _vm.app.s09EarxivList
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Юкланган файллар"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _vm._l(
                                                          _vm.app.s09EarxivList,
                                                          function (
                                                            file,
                                                            index
                                                          ) {
                                                            return file
                                                              ? [
                                                                  _vm._v(
                                                                    "\n                                                            " +
                                                                      _vm._s(
                                                                        index >
                                                                          0
                                                                          ? ", "
                                                                          : ""
                                                                      ) +
                                                                      " " +
                                                                      _vm._s(
                                                                        file.docTypeName
                                                                      ) +
                                                                      " - " +
                                                                      _vm._s(
                                                                        file.docname
                                                                      ) +
                                                                      "\n                                                        "
                                                                  ),
                                                                ]
                                                              : _vm._e()
                                                          }
                                                        ),
                                                      ],
                                                      2
                                                    ),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.statusNm !==
                                                "undefined" && _vm.app.statusNm
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticStyle: {
                                                          "font-weight": "550",
                                                        },
                                                      },
                                                      [_vm._v("Ариза ҳолати")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .statusNm !==
                                                            "undefined"
                                                            ? _vm.app.statusNm
                                                            : null
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
                                    1520365153
                                  ),
                                })
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-tab-item",
                          [
                            typeof _vm.app.s09StatusHList !== "undefined"
                              ? _c(
                                  "v-timeline",
                                  {
                                    staticStyle: { margin: "40px" },
                                    attrs: { dense: "", clipped: "" },
                                  },
                                  [
                                    _vm._l(
                                      _vm.app.s09StatusHList,
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
                                                                appstatus.statusNm
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
                                                                    " Рухсатномани юклаб олинг! "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      appstatus.status ===
                                                        "201" ||
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
                                                                    " Аризангиз жавоб хатини юклаб олинг! "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _c("br"),
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