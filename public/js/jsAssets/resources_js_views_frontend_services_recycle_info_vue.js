"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_recycle_info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/recycle/info.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/recycle/info.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./resources/js/views/frontend/services/index.vue");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ServicePage: _index__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
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
      headerHighlight: 0,
      methodIdentificationsIn: [{
        text: "Қайта ишлаш учун олиб кирилаётган товарга муҳрлар қўйиш ва зарур бўлганда штамплар қўйиш, рақамли тарзда ва (ёки) бошқача тарзда тамғалаш",
        value: 1
      }, {
        text: "Қайта ишлаш учун олиб кирилаётган товарни батафсил тавсифлаш, уни фотосуратга тушириш ёки бошқа ўлчамда тасвирлаш",
        value: 2
      }, {
        text: "Қайта ишлаш учун олиб кирилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва унинг қайта ишланган маҳсулотини тадқиқ этиш натижаларини қиёслаш",
        value: 3
      }, {
        text: "Қайта ишлаш учун олиб кирилаётган товарнинг завод ва серия рақамлари тарзидаги мавжуд тамғаланишидан ёхуд бошқача тарздаги тамғаланишидан фойдаланиш",
        value: 4
      }, {
        text: "Бошқа усуллар",
        value: 5
      }],
      methodIdentificationsOut: [{
        text: "Қайта ишлаш учун олиб чиқилаётган товарга ваколатли шахс ва (ёки) божхона органи томонидан муҳрлар қўйиш ва, зарур бўлган ҳолларда, штамплар қўйиш, рақамли ва (ёки) бошқа турда тамғалаш",
        value: 1
      }, {
        text: "Қайта ишлаш учун олиб чиқилаётган товарни батафсил тавсифлаш, уни суратга тушириш ёки бошқа ўлчамларда тасвирлаш",
        value: 2
      }, {
        text: "қайта ишлаш учун олиб чиқилаётган товарнинг олдиндан олинган намуналарини ёки нусхаларини ва уни қайта ишлаш маҳсулотини тадқиқ этиш натижаларини қиёслаш",
        value: 3
      }, {
        text: "Қайта ишлаш учун олиб чиқилаётган товарнинг завод ва серия рақамлари тарзида мавжуд бўлган тамғалашдан ёхуд бошқача тамғалашдан фойдаланиш",
        value: 4
      }, {
        text: "Бошқа усуллар",
        value: 5
      }],
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(['loading'])),
  methods: {
    downloadPdf: function downloadPdf() {
      this.dialog = false;
      window.location.href = 'https://d-qaror.customs.uz/decisionPdfDownload?cmdtId=' + this.product.id;
    },
    getAppData: function getAppData() {
      var _this2 = this;

      var _this = this;

      setTimeout(function () {
        _this2.$store.commit('setLoading', true);

        axios.get("/api/v1/ex_api/recycle-get", {
          params: {
            app_id: _this.$route.params.id
          }
        }).then(function (response) {
          if (typeof response.data.data !== "undefined") {
            _this.app = response.data.data.data;

            _this.breadcrumb_items.push({
              text: "Қайта ишлаш учун рухсатнома бериш -" + _this.app.appNum,
              to: '/services/recycle/' + _this.app.appId,
              disabled: true,
              exact: true
            });

            setTimeout(function () {
              _this.$store.commit('setLoading', false);
            }, 1000);
          } else {
            _this.$store.commit('setLoading', false);

            _this.$toast.error("Маълумот топилмади!"); //_this.$router.push("/applications");

          }
        })["catch"](function (error) {
          _this.$store.commit('setLoading', false);

          _this.$toast.error("Маълумот топилмади!"); //_this.$router.push("/applications");

        });
      }, 500);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/frontend/services/recycle/info.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/frontend/services/recycle/info.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_vue_vue_type_template_id_e8bf5b86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=e8bf5b86& */ "./resources/js/views/frontend/services/recycle/info.vue?vue&type=template&id=e8bf5b86&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/recycle/info.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_e8bf5b86___WEBPACK_IMPORTED_MODULE_0__.render,
  _info_vue_vue_type_template_id_e8bf5b86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/recycle/info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/recycle/info.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/recycle/info.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/recycle/info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/recycle/info.vue?vue&type=template&id=e8bf5b86&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/recycle/info.vue?vue&type=template&id=e8bf5b86& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_e8bf5b86___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_e8bf5b86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_e8bf5b86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info.vue?vue&type=template&id=e8bf5b86& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/recycle/info.vue?vue&type=template&id=e8bf5b86&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/recycle/info.vue?vue&type=template&id=e8bf5b86&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/recycle/info.vue?vue&type=template&id=e8bf5b86& ***!
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
          [
            _c(
              "v-row",
              [
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c(
                    "h3",
                    {
                      staticClass: "lh-sm font-weight-bold primary-color",
                      attrs: { align: "center" },
                    },
                    [
                      _vm._v(
                        "\n                        Товарни\n                        "
                      ),
                      _vm.app.repubInOut === 100
                        ? [_vm._v("божхона ҳудудида")]
                        : [_vm._v("ҳудудидан ташқарида")],
                      _vm._v(
                        "\n                        қайта ишлаш учун рухсатнома бериш тўғрисида\n                        "
                      ),
                      _c("br"),
                    ],
                    2
                  ),
                ]),
              ],
              1
            ),
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
                          "\n                        " +
                            _vm._s(item.tab) +
                            "\n                    "
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
                            model: {
                              value: _vm.panel,
                              callback: function ($$v) {
                                _vm.panel = $$v
                              },
                              expression: "panel",
                            },
                          },
                          [
                             false
                              ? 0
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-expansion-panel",
                              [
                                _c("v-expansion-panel-header", [
                                  _vm._v(
                                    "\n                                    Ариза умумий маълумотлари\n                                "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-expansion-panel-content",
                                  [
                                    _c("v-simple-table", {
                                      scopedSlots: _vm._u([
                                        {
                                          key: "default",
                                          fn: function () {
                                            return [
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-left",
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    Ариза рақами\n                                                "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "text-left",
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                    " +
                                                        _vm._s(
                                                          typeof _vm.app
                                                            .appNum !==
                                                            "undefined"
                                                            ? _vm.app.appNum
                                                            : ""
                                                        ) +
                                                        "\n                                                "
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Ариза юборилган ҳудуд"
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      typeof _vm.app
                                                        .locationNm !==
                                                        "undefined"
                                                        ? _vm.app.locationNm
                                                        : null
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Идентификация усули"
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      typeof _vm.app
                                                        .methodIden !==
                                                        "undefined"
                                                        ? _vm.app.methodIden
                                                        : null
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Қайта ишлаш операцияларининг қиймати\n                                                "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      typeof _vm.app
                                                        .recycleCost !==
                                                        "undefined"
                                                        ? _vm.app.recycleCost
                                                        : null
                                                    ) +
                                                      "\n                                                    " +
                                                      _vm._s(
                                                        typeof _vm.app
                                                          .recycleCurrencyNm !==
                                                          "undefined"
                                                          ? _vm.app
                                                              .recycleCurrencyNm
                                                          : null
                                                      ) +
                                                      "\n                                                "
                                                  ),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Қайта ишлаш муддати"
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      typeof _vm.app
                                                        .recycleDeadlineDate !==
                                                        "undefined"
                                                        ? _vm.app
                                                            .recycleDeadlineDate
                                                        : null
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Шартнома идентификация рақами"
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _vm._l(
                                                      _vm.app.s03Contracts,
                                                      function (contract) {
                                                        return typeof _vm.app
                                                          .s03Contracts !==
                                                          "undefined"
                                                          ? [
                                                              _vm._v(
                                                                "\n                                                        " +
                                                                  _vm._s(
                                                                    typeof contract.contractIdenNumber !==
                                                                      "undefined"
                                                                      ? contract.contractIdenNumber
                                                                      : null
                                                                  ) +
                                                                  ",\n                                                    "
                                                              ),
                                                            ]
                                                          : _vm._e()
                                                      }
                                                    ),
                                                  ],
                                                  2
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Товар қайта ишланадиган жой манзили\n                                                "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      typeof _vm.app
                                                        .recycleAddress !==
                                                        "undefined"
                                                        ? _vm.app.recycleAddress
                                                        : null
                                                    ) +
                                                      "\n                                                "
                                                  ),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticStyle: {
                                                      "font-weight": "550",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Илова қилинган файллар"
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _vm._l(
                                                      _vm.app.docs,
                                                      function (doc) {
                                                        return typeof _vm.app
                                                          .docs !== "undefined"
                                                          ? [
                                                              _vm._v(
                                                                "\n                                                        " +
                                                                  _vm._s(
                                                                    typeof doc.docname !==
                                                                      "undefined"
                                                                      ? doc.docname +
                                                                          " - (" +
                                                                          doc.docTypeName +
                                                                          ")"
                                                                      : null
                                                                  ) +
                                                                  ",\n                                                    "
                                                              ),
                                                            ]
                                                          : _vm._e()
                                                      }
                                                    ),
                                                  ],
                                                  2
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              typeof _vm.app.orgPermission !==
                                                "undefined" &&
                                              _vm.app.orgPermission
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
                                                          "Ваколатли органлар рухсатномаси"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            typeof _vm.app
                                                              .orgPermission !==
                                                              "undefined"
                                                              ? _vm.app
                                                                  .orgPermission
                                                              : null
                                                          ) +
                                                          "\n                                                "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              typeof _vm.app.replProductNm !==
                                                "undefined" &&
                                              _vm.app.replProductNm
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
                                                          "Алмаштириладиган эквивалент товар"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("td", [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            typeof _vm.app
                                                              .replProductNm !==
                                                              "undefined"
                                                              ? _vm.app
                                                                  .replProductNm
                                                              : null
                                                          ) +
                                                          "\n                                                "
                                                      ),
                                                    ]),
                                                  ])
                                                : _vm._e(),
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
                            _vm._v(" "),
                            _c(
                              "v-expansion-panel",
                              [
                                _c("v-expansion-panel-header", [
                                  _vm._v(
                                    "\n                                    Товарлар тўғрисида маълумотлар\n                                "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-expansion-panel-content",
                                  [
                                    _vm._l(
                                      _vm.app.s03Commodities,
                                      function (product, key) {
                                        return [
                                          _c("v-col", [
                                            _c(
                                              "h5",
                                              {
                                                staticStyle: {
                                                  "font-weight": "bold",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(key + 1) +
                                                    " - товар номи\n                                            " +
                                                    _vm._s(product.cmdtNm)
                                                ),
                                              ]
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-simple-table", {
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function () {
                                                    return [
                                                      _c("tbody", [
                                                        typeof product.hsCode !==
                                                        "undefined"
                                                          ? _c("tr", [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    "font-weight":
                                                                      "550",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "ТИФ ТН коди"
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("td", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    typeof product.hsCode !==
                                                                      "undefined"
                                                                      ? product.hsCode
                                                                      : ""
                                                                  ) +
                                                                    " - " +
                                                                    _vm._s(
                                                                      typeof product.hsNm !==
                                                                        "undefined"
                                                                        ? product.hsNm
                                                                        : ""
                                                                    ) +
                                                                    "\n                                                    "
                                                                ),
                                                              ]),
                                                            ])
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        typeof product.cmdtNm !==
                                                        "undefined"
                                                          ? _c("tr", [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    "font-weight":
                                                                      "550",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Товар номи"
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("td", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    typeof product.cmdtNm !==
                                                                      "undefined"
                                                                      ? product.cmdtNm
                                                                      : ""
                                                                  ) +
                                                                    "\n                                                    "
                                                                ),
                                                              ]),
                                                            ])
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        typeof product.cmdtNetto !==
                                                        "undefined"
                                                          ? _c("tr", [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    "font-weight":
                                                                      "550",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Асосий ўлчов бирлигидаги миқдори\n                                                    "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("td", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    typeof product.cmdtNetto !==
                                                                      "undefined"
                                                                      ? product.cmdtNetto
                                                                      : ""
                                                                  ) +
                                                                    "\n                                                    "
                                                                ),
                                                              ]),
                                                            ])
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        typeof product.cmdtQty !==
                                                        "undefined"
                                                          ? _c("tr", [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    "font-weight":
                                                                      "550",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Қўшимча ўлчов бирлигидаги миқдори\n                                                    "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("td", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    typeof product.cmdtQty !==
                                                                      "undefined"
                                                                      ? product.cmdtQty
                                                                      : ""
                                                                  ) +
                                                                    "\n                                                    "
                                                                ),
                                                              ]),
                                                            ])
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        typeof product.cmdtCost !==
                                                        "undefined"
                                                          ? _c("tr", [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    "font-weight":
                                                                      "550",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Товар қиймати"
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("td", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    typeof product.cmdtCost !==
                                                                      "undefined"
                                                                      ? product.cmdtCost
                                                                      : ""
                                                                  ) +
                                                                    " " +
                                                                    _vm._s(
                                                                      typeof product.currencyNm !==
                                                                        "undefined"
                                                                        ? product.currencyNm
                                                                        : ""
                                                                    ) +
                                                                    "\n                                                    "
                                                                ),
                                                              ]),
                                                            ])
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        typeof product.cmdtStatusNm !==
                                                        "undefined"
                                                          ? _c("tr", [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    "font-weight":
                                                                      "550",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Товар мақоми"
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("td", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    typeof product.cmdtStatusNm !==
                                                                      "undefined"
                                                                      ? product.cmdtStatusNm
                                                                      : ""
                                                                  ) +
                                                                    "\n                                                    "
                                                                ),
                                                              ]),
                                                            ])
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        typeof product.cmdtStatus !==
                                                          "undefined" &&
                                                        product.cmdtStatus ===
                                                          "3" &&
                                                        product.s03CommodityDops
                                                          .length > 0
                                                          ? _c("tr", [
                                                              _c(
                                                                "td",
                                                                {
                                                                  staticStyle: {
                                                                    "font-weight":
                                                                      "550",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Қайта ишлаш махсулотларининг чиқиш\n                                                        нормаси\n                                                    "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "td",
                                                                [
                                                                  _c(
                                                                    "v-list",
                                                                    {
                                                                      attrs: {
                                                                        nav: "",
                                                                        dense:
                                                                          "",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-list-item-group",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              color:
                                                                                "primary",
                                                                            },
                                                                          model:
                                                                            {
                                                                              value:
                                                                                _vm.headerHighlight,
                                                                              callback:
                                                                                function (
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.headerHighlight =
                                                                                    $$v
                                                                                },
                                                                              expression:
                                                                                "headerHighlight",
                                                                            },
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-list-item",
                                                                            [
                                                                              _c(
                                                                                "v-list-item-content",
                                                                                [
                                                                                  _vm._v(
                                                                                    "Товар номи\n                                                                    "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "v-list-item-content",
                                                                                [
                                                                                  _vm._v(
                                                                                    "Товар миқдори\n                                                                    "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ],
                                                                            1
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _vm._l(
                                                                            product.s03CommodityDops,
                                                                            function (
                                                                              subProduct
                                                                            ) {
                                                                              return _c(
                                                                                "v-list-item",
                                                                                {
                                                                                  key: subProduct,
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "v-list-item-content",
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          subProduct.mainCmdtNm
                                                                                        ) +
                                                                                          "\n                                                                    "
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "v-list-item-content",
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._s(
                                                                                          subProduct.cmdtQty
                                                                                        ) +
                                                                                          "\n                                                                    "
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                ],
                                                                                1
                                                                              )
                                                                            }
                                                                          ),
                                                                        ],
                                                                        2
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                            ])
                                                          : _vm._e(),
                                                      ]),
                                                    ]
                                                  },
                                                  proxy: true,
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          }),
                                        ]
                                      }
                                    ),
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
                    _vm._v(" "),
                    _c(
                      "v-tab-item",
                      [
                        typeof _vm.app.history !== "undefined"
                          ? _c(
                              "v-timeline",
                              {
                                staticStyle: { margin: "40px" },
                                attrs: { dense: "", clipped: "" },
                              },
                              [
                                _vm._l(
                                  _vm.app.history,
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
                                                    { staticClass: "active" },
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
                                                  appstatus.status === "100"
                                                    ? _c(
                                                        "p",
                                                        {
                                                          staticStyle: {
                                                            "font-size": "15px",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "a",
                                                            {
                                                              attrs: {
                                                                href:
                                                                  "https://qaror.customs.uz/s03decisionPdfDownloadAppeal?stId=" +
                                                                  appstatus.id,
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                Ариза шаклини юклаб олинг! "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  appstatus.status === "600"
                                                    ? _c(
                                                        "p",
                                                        {
                                                          staticStyle: {
                                                            "font-size": "15px",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "a",
                                                            {
                                                              attrs: {
                                                                href:
                                                                  "https://qaror.customs.uz/s03decisionPdfDownloadAppeal?stId=" +
                                                                  appstatus.id,
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                Рухсатномани юклаб олинг! "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  appstatus.status === "201" &&
                                                  appstatus.comment.length > 0
                                                    ? _c(
                                                        "p",
                                                        {
                                                          staticStyle: {
                                                            "font-size": "15px",
                                                            "font-style":
                                                              "italic",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                " +
                                                              _vm._s(
                                                                appstatus.comment
                                                              ) +
                                                              "\n                                            "
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
                                      _vm._v(" "),
                                      key === _vm.app.history.length - 1 &&
                                      _vm.app.history[
                                        _vm.app.history.length - 1
                                      ].status !== "600"
                                        ? _c(
                                            "v-timeline-item",
                                            {
                                              staticClass: "mb-4",
                                              attrs: {
                                                color: "grey",
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
                                                      _c("h4", [
                                                        _vm._v(
                                                          " Якуний хулоса "
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("p"),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          )
                                        : _vm._e(),
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
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);