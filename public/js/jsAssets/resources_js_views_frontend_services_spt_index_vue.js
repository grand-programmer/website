"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_spt_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SptMain",
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Хизматлар'),
        to: '/services',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Товарнинг келиб чиқиш мамлакатиы'),
        to: '/services/spt',
        disabled: true,
        exact: true
      }],
      panel: [0, 1],
      emailsSubscriptionChart: {
        data: {
          labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function labelInterpolationFnc(value) {
              return value[0];
            }
          }
        }]]
      },
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50,
          // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      panels: [{
        title: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Бу қандай ишлайди ?"),
        content: [_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Аризачи ЯИДХПда рўйхатдан ўтади, ариза шаклини тўлдиради ва ваколатли органга юборади"), this.$t("Божхона органи томонидан ариза кўриб чиқилиб, ариза юзасидан қарор қабул қилинади.")]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Хизмат билан боғлиқ саволлар юзасидан боғланиш"),
        content: [this.$t("Тел: 55-502-76-00, Почта: info@customs.uz, телеграмм: t.me/OriginCountryDecisions")]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Хизматдан фойдаланувчилар"),
        content: [_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Жисмоний шахс ва Юридик шахслар')]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Хизматни кўрсатиш учун керак бўладиган ҳужжатлар"),
        content: [_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('товарнинг фотосуратлари, чизмалари ёки паспорти'), _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('ишлаб чиқарувчи ташкилот томонидан тақдим қилинган товарга тегишли бўлган ҳужжатлар'), _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('товарни ишлаб чиқаришда икки ёки ундан ортиқ мамлакат иштирок этган бўлса, товарни етарли даражада қайта ишлаш мезонларига мувофиқлигини тасдиқловчи ҳужжатлар'), _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('товарлар ишлаб чиқарилган давлатдаги экспертиза ташкилотларнинг экспертиза хулосалари ҳамда келиб чиқиш сертификати (агар мавжуд бўлса)'), _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('ташқи савдо шартномаси (мавжуд бўлса)'), _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('товарнинг келиб чиқиш сертификати (агар мавжуд бўлса)'), _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('ваколатли шахснинг ваколатини тасдиқловчи ҳужжатлар (агар ваколатли шахс томонидан мурожаат қилинадиган бўлса)'), _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('товарнинг келиб чиқишини аниқлаш учун муҳим бўлган қўшимча ҳужжатлар')]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Хизматни кўрсатиш муддати"),
        content: [_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Ариза божхона органига келиб тушган кундан бошлаб ўн иш куни ичида кўриб чиқилади')]
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Хизматни кўрсатишнинг ҳуқуқий асоси"),
        content: ['<a href="https://lex.uz/uz/docs/6845307">' + _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарорни қабул қилиш тартиби ҳақидаги низомни тасдиқлаш тўғрисида') + '</a>']
      }, {
        title: _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("Хизмат нархи"),
        content: [_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Божхона органлари томонидан товар бўйича дастлабки қарорни қабул қилганлик учун БҲМнинг 75 фоизи')]
      }]
    };
  },
  methods: {
    openService: function openService() {
      var _this = this;

      if (this.$auth.check()) {
        this.$auth.plugins.http.post('/api/v1/response/route_spt/person', {
          "firstName": this.$auth.user().first_name,
          "surName": this.$auth.user().sur_name,
          "lastName": this.$auth.user().mid_name,
          "email": this.$auth.user().email,
          "pin": this.$auth.user().pin,
          "tin": this.$auth.user().tin,
          "perAdr": this.$auth.user().per_adr,
          "phone": this.$auth.user().phone,
          "personType": this.$auth.user().type === 1 ? 0 : 1,
          "legalName": this.$auth.user().legal_info && JSON.parse(this.$auth.user().legal_info) ? JSON.parse(this.$auth.user().legal_info)[0].le_name : ''
        }).then(function (res) {
          if (res.data.data && res.data.data.appId) {
            _this.$router.push('/services/spt/' + res.data.data.appId);
          } else _this.$toast.error(_this.$t('Сервердан маълумот олишда хатолик юз берди!'));
        })["catch"](function (e) {
          if (e.response.data && e.response.data.data.errors && e.response.data.data.errors[0] && e.response.data.data.errors[0].message) {
            _this.$toast.error(e.response.data.data.errors[0].field + ' -' + e.response.data.data.errors[0].message);

            return false;
          } else {
            _this.$toast.error(e.response.statusText);
          }
        }); //this.$router.push('/services/spt/create')
      } else {
        this.$toast.warning($t('Авторизациядан ўтиш талаб этилади'));
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_596747f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=596747f7& */ "./resources/js/views/frontend/services/spt/index.vue?vue&type=template&id=596747f7&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/spt/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_596747f7___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_596747f7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/spt/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/spt/index.vue?vue&type=template&id=596747f7&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/spt/index.vue?vue&type=template&id=596747f7& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_596747f7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_596747f7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_596747f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=596747f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/index.vue?vue&type=template&id=596747f7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/index.vue?vue&type=template&id=596747f7&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/spt/index.vue?vue&type=template&id=596747f7& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm.$route.path.indexOf("services/spt/") !== -1
    ? _c("router-view")
    : _c("div", [
        _c("div", { staticClass: "section customs-value-section" }, [
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
                      _c("v-col", { attrs: { cols: "8" } }, [
                        _c(
                          "div",
                          { staticClass: "d-flex my-5  align-items-center" },
                          [
                            _c("img", {
                              staticStyle: { height: "50px" },
                              attrs: { src: "/img/icons/patent.png" },
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex flex-column justify-content-between ml-5",
                              },
                              [
                                _c("h3", { staticClass: "mb-2" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "Товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарор олиш"
                                      )
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-2" }, [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.$t(
                                          "Ўзбекистон Республикасининг божхона чегараси орқали олиб ўтилаётган ва Ўзбекистон Республикаси божхона ҳудудида қайта ишлаш жараёнида ҳосил бўлган товарнинг келиб чиқиш мамлакати тўғрисидаги дастлабки қарорни олиш учун ариза бериш"
                                        )
                                      )
                                  ),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "3", offset: "1" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "my-5 ",
                              staticStyle: { width: "100%" },
                              attrs: { large: "", color: "primary" },
                              on: { click: _vm.openService },
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.$t("Хизматдан фойдаланиш")) +
                                  "\n            "
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
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "8" } },
                        [
                          _c(
                            "v-expansion-panels",
                            {
                              staticClass: "mb-5",
                              attrs: { multiple: "" },
                              model: {
                                value: _vm.panel,
                                callback: function ($$v) {
                                  _vm.panel = $$v
                                },
                                expression: "panel",
                              },
                            },
                            _vm._l(_vm.panels, function (expPanel, key) {
                              return _c(
                                "v-expansion-panel",
                                { key: key, staticClass: "my-2" },
                                [
                                  _c("v-expansion-panel-header", [
                                    _c("b", [_vm._v(_vm._s(expPanel.title))]),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-expansion-panel-content",
                                    [
                                      _vm._l(
                                        expPanel.content,
                                        function (exp_content, expKey) {
                                          return [
                                            _c("p", {
                                              staticClass: "lh-lg",
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  (expPanel.content.length > 1
                                                    ? expKey + 1 + "."
                                                    : "") +
                                                    " " +
                                                    exp_content
                                                ),
                                              },
                                            }),
                                          ]
                                        }
                                      ),
                                    ],
                                    2
                                  ),
                                ],
                                1
                              )
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "service_main_right_sidebar",
                          attrs: { cols: "4" },
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "video_link",
                              attrs: {
                                href:
                                  _vm.$i18n.locale === "ru"
                                    ? "/storage/files/vio_ru.pptx"
                                    : "/storage/files/vio_uz.pptx",
                              },
                            },
                            [
                              _c("img", {
                                attrs: { src: "/img/services/bg-services.png" },
                              }),
                              _vm._v(" "),
                              _c("div", [
                                _c("img", {
                                  attrs: { src: "/img/icons/play.svg" },
                                }),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(_vm._s(_vm.$t("Йўриқнома"))),
                                ]),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "base-material-chart-card",
                            {
                              attrs: {
                                data: _vm.dailySalesChart.data,
                                options: _vm.dailySalesChart.options,
                                color: "success",
                                "hover-reveal": "",
                                type: "Line",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "reveal-actions",
                                  fn: function () {
                                    return [
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function (ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            color: "info",
                                                            icon: "",
                                                          },
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: {
                                                            color: "info",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                        mdi-refresh\n                      "
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
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Refresh")]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { bottom: "" },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function (ref) {
                                                var attrs = ref.attrs
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            light: "",
                                                            icon: "",
                                                          },
                                                        },
                                                        "v-btn",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    ),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-pencil"),
                                                      ]),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              },
                                            },
                                          ]),
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Change Date")]),
                                        ]
                                      ),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ]),
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "d-flex justify-content-between",
                                },
                                [
                                  _c(
                                    "h4",
                                    {
                                      staticClass:
                                        "card-title font-weight-light mt-2 ml-2",
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            _vm.$t("Хизматдан фойдаланганлар")
                                          ) +
                                          "\n                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "green--text card-title font-weight-light mt-2 ml-2",
                                    },
                                    [_vm._v(_vm._s(_vm.$t("14500 та")) + " ")]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "d-inline-flex font-weight-light ml-2 mt-1",
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.$t("Бугун ")) +
                                      "\n                "
                                  ),
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "font-weight-bold ml-1",
                                      attrs: { color: "green", small: "" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  mdi-arrow-up\n                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "green--text font-weight-bold",
                                    },
                                    [_vm._v(" 55%")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "green--text mx-1" },
                                    [_vm._v(_vm._s(_vm.$t("(155 та)")) + " ")]
                                  ),
                                  _vm._v(
                                    "\n\n                " +
                                      _vm._s(
                                        _vm.$t("ўртача кунлик кўрсаткич")
                                      ) +
                                      " "
                                  ),
                                  _c("span", { staticClass: "green--text" }, [
                                    _vm._v(_vm._s(_vm.$t("(120 та)"))),
                                  ]),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.$t("дан ")) +
                                      "\n              "
                                  ),
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
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);