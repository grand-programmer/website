"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_pages_org_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/org.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/org.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../src/services/apiService */ "./resources/js/src/services/apiService.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../i18n */ "./resources/js/i18n.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SingleOrganization',
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: '',
        to: '/page/',
        disabled: true,
        exact: true
      }],

      /*id:this.$route.params.id,*/
      organization: {},
      relates: {},
      search: '',
      news: [],
      headers: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Пост номи'),
        align: 'start',
        sortable: true,
        value: 'title',
        width: 300
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Пост ҳақида қисқача маълумот'),
        value: 'description'
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Манзили'),
        value: 'manzili'
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Боғланиш учун телефонлар'),
        value: 'telefon',
        width: 180
      }],
      posts: []
    };
  },
  watch: {
    $route: function $route(to, from) {
      this.initialize();
    }
  },
  created: function created() {
    this.initialize();
  },
  title: function title() {
    this.organization.title;
  },
  methods: {
    close: function close() {//this.$router.replace('/');
    },
    initialize: function initialize() {
      var _this2 = this;

      var _this = this;

      _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].readOrg(this.$route.params.id).then(function (response) {
        _this2.organization = response.data.data; //if(!this.organization.id) this.$router.replace('/404')

        _this2.breadcrumb_items[1].text = _this2.organization.title;
        _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].readNews({
          boshqarma: _this2.organization.id
        }).then(function (response) {
          _this.news = response.data; //if(!this.organization.id) this.$router.replace('/404')
        })["catch"](function (error) {//this.$router.replace('/404')

          /*this.$router.replace("/").catch(() => {
          });*/
        });
      })["catch"](function (error) {
        _this2.$router.replace('/404');

        _this2.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));
        /*this.$router.replace("/").catch(() => {
        });*/

      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/frontend/pages/org.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/frontend/pages/org.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _org_vue_vue_type_template_id_369eab9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./org.vue?vue&type=template&id=369eab9b& */ "./resources/js/views/frontend/pages/org.vue?vue&type=template&id=369eab9b&");
/* harmony import */ var _org_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./org.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/pages/org.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _org_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _org_vue_vue_type_template_id_369eab9b___WEBPACK_IMPORTED_MODULE_0__.render,
  _org_vue_vue_type_template_id_369eab9b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/pages/org.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/pages/org.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/frontend/pages/org.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_org_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./org.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/org.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_org_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/pages/org.vue?vue&type=template&id=369eab9b&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/frontend/pages/org.vue?vue&type=template&id=369eab9b& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_org_vue_vue_type_template_id_369eab9b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_org_vue_vue_type_template_id_369eab9b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_org_vue_vue_type_template_id_369eab9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./org.vue?vue&type=template&id=369eab9b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/org.vue?vue&type=template&id=369eab9b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/org.vue?vue&type=template&id=369eab9b&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/org.vue?vue&type=template&id=369eab9b& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "section page-container" },
    [
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
      _vm.organization
        ? _c(
            "v-container",
            { staticClass: "boshqarma-page" },
            [
              _c(
                "v-row",
                [
                  typeof _vm.organization.rahbariyat !== "undefined"
                    ? _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "boshqarma-section-title",
                                  attrs: { cols: "12" },
                                },
                                [
                                  _c("h3", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.organization.title) +
                                        "\n                        "
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "rais", attrs: { cols: "12" } },
                            [
                              _c("div", { staticClass: "wrapper" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-2",
                                      style:
                                        _vm.organization.id === 20
                                          ? "background:none; border:none"
                                          : "",
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "profile-icon-wrapper" },
                                        [
                                          _c("div", {
                                            staticClass: "profile-icon",
                                            style:
                                              "background-image: url(/storage/uploads/boshqarmalar/boshliq/" +
                                              _vm.organization.rahbariyat
                                                .boshliq.image +
                                              ");",
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-9" }, [
                                    _c("div", [
                                      _c("div", { staticClass: "text-row" }, [
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.organization.rahbariyat
                                                .boshliq.name
                                            )
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "text-row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "far fa-user" },
                                          [_vm._v(" ")]
                                        ),
                                        _vm._v(" "),
                                        _vm.organization.id === 20
                                          ? _c("p", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("Институт бошлиғи")
                                                )
                                              ),
                                            ])
                                          : _vm.organization.id !== 16
                                          ? _c("p", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("Бошқарма бошлиғи")
                                                )
                                              ),
                                            ])
                                          : _c("p", [
                                              _vm._v(
                                                _vm._s(_vm.$t("Директор"))
                                              ),
                                            ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "text-row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "far fa-clock" },
                                          [_vm._v(" ")]
                                        ),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.organization.rahbariyat
                                                .boshliq.qabul
                                            )
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "text-row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "fas fa-phone-alt" },
                                          [_vm._v(" ")]
                                        ),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.organization.rahbariyat
                                                .boshliq.telefon
                                            )
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-12 orinbosarlar ",
                              staticStyle: { "/* margin": "20px auto" },
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "h3",
                                  { staticStyle: { "text-align": "center" } },
                                  [_vm._v(" ")]
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "row justify-content-center" },
                                _vm._l(
                                  _vm.organization.rahbariyat.orinbosar,
                                  function (orinbosar, keyOrinbosar) {
                                    return _c(
                                      "div",
                                      { staticClass: "orinbosar col-3" },
                                      [
                                        _c("div", { staticClass: "row" }, [
                                          _c("div", { staticClass: "col-12" }, [
                                            _c("div", [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "orinbosar-header",
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "profile-icon-wrapper",
                                                    },
                                                    [
                                                      _c("div", {
                                                        staticClass:
                                                          "profile-icon",
                                                        style:
                                                          "background-image: url(/storage/uploads/boshqarmalar/orinbosar/" +
                                                          orinbosar.image +
                                                          ");",
                                                      }),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("p", [
                                                    _vm._v(
                                                      _vm._s(orinbosar.name)
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "orinbosar-info",
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "text-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "far fa-user",
                                                        },
                                                        [_vm._v(" ")]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm.organization.id === 20
                                                        ? _c(
                                                            "p",
                                                            [
                                                              keyOrinbosar === 0
                                                                ? [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Бошлиқнинг ўқув ва илмий ишлар бўйича биринчи ўринбосари"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              keyOrinbosar === 1
                                                                ? [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Бошлиқнинг тарбиявий ишлар ва ҳарбий тайёргарлик бўйича ўринбосари"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                : _vm._e(),
                                                              _vm._v(" "),
                                                              keyOrinbosar === 2
                                                                ? [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "Бошлиқнинг молия-иқтисод ва хўжалик ишлари бўйича ўринбосари"
                                                                        )
                                                                      )
                                                                    ),
                                                                  ]
                                                                : _vm._e(),
                                                            ],
                                                            2
                                                          )
                                                        : _c("p", [
                                                            _vm._v(
                                                              _vm._s(
                                                                orinbosar.lavozimi
                                                              )
                                                            ),
                                                          ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "text-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "far fa-clock",
                                                        },
                                                        [_vm._v(" ")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("p", [
                                                        _vm._v(
                                                          _vm._s(
                                                            orinbosar.qabul
                                                          )
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "text-row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "fas fa-phone-alt",
                                                        },
                                                        [_vm._v(" ")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("p", [
                                                        _vm._v(
                                                          _vm._s(
                                                            orinbosar.telefon
                                                          )
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ]),
                                        ]),
                                      ]
                                    )
                                  }
                                ),
                                0
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  typeof _vm.organization.rahbariyat.boshliq.biografiyasi !==
                    "undefined" &&
                  _vm.organization.rahbariyat.boshliq.biografiyasi.length > 10
                    ? _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "boshqarma-section-title",
                                  attrs: { cols: "12" },
                                },
                                [
                                  _c("h3", [
                                    _c("h3", [
                                      _vm._v(
                                        _vm._s(_vm.organization.title) +
                                          " " +
                                          _vm._s(
                                            _vm.$t("функция ва вазифалари")
                                          )
                                      ),
                                    ]),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "mt-10 pb-10" },
                            [
                              _c("v-row", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    _vm.organization.rahbariyat.boshliq
                                      .biografiyasi
                                  ),
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
                  typeof _vm.organization.manzil !== "undefined"
                    ? _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "boshqarma-section-title",
                                  attrs: { cols: "12" },
                                },
                                [
                                  _c("h3", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(_vm.$t("Манзил")) +
                                        "\n                        "
                                    ),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            { staticClass: "mt-10 pb-10" },
                            [
                              _c(
                                "v-row",
                                [
                                  _c("v-col", { attrs: { cols: "6" } }, [
                                    _c("img", {
                                      staticClass: "w-100",
                                      attrs: {
                                        src:
                                          "/storage/uploads/boshqarmalar/manzil/" +
                                          _vm.organization.manzil.image,
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c(
                                        "v-row",
                                        { staticClass: "boshqarma-manzil" },
                                        [
                                          _c("table", [
                                            _c("tbody", [
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "th " },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                        },
                                                      },
                                                      [_vm._v("mdi-map-marker")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.$t("Манзил")
                                                        ) +
                                                        ":\n                                        "
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c("p", [
                                                    _c("span", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.organization
                                                            .manzil.manzil
                                                        )
                                                      ),
                                                    ]),
                                                    _c("br"),
                                                  ]),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "th" },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                        },
                                                      },
                                                      [_vm._v("mdi-navigation")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.$t("Автобуслар")
                                                        ) +
                                                        ":\n                                        "
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.organization.manzil
                                                        .avtobus
                                                    )
                                                  ),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "th" },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                        },
                                                      },
                                                      [_vm._v("mdi-navigation")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.$t(
                                                            "Йўналишдаги такси"
                                                          )
                                                        ) +
                                                        ":\n                                        "
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.organization.manzil
                                                        .ytaksi
                                                    )
                                                  ),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "th" },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                        },
                                                      },
                                                      [_vm._v("mdi-phone")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.$t("Телефон")
                                                        ) +
                                                        ":\n                                        "
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "12pt",
                                                        "line-height": "107%",
                                                        "font-family":
                                                          "'Times New Roman', 'serif'",
                                                        "background-image":
                                                          "initial",
                                                        "background-position":
                                                          "initial",
                                                        "background-size":
                                                          "initial",
                                                        "background-repeat":
                                                          "initial",
                                                        "background-attachment":
                                                          "initial",
                                                        "background-origin":
                                                          "initial",
                                                        "background-clip":
                                                          "initial",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.organization
                                                            .manzil.telefon
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _c("br"),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "th" },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                        },
                                                      },
                                                      [_vm._v("mdi-phone")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(_vm.$t("Факс")) +
                                                        ":\n                                        "
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "12pt",
                                                        "line-height": "107%",
                                                        "font-family":
                                                          "'Times New Roman', 'serif'",
                                                        "background-image":
                                                          "initial",
                                                        "background-position":
                                                          "initial",
                                                        "background-size":
                                                          "initial",
                                                        "background-repeat":
                                                          "initial",
                                                        "background-attachment":
                                                          "initial",
                                                        "background-origin":
                                                          "initial",
                                                        "background-clip":
                                                          "initial",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.organization
                                                            .manzil.faks
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _c("br"),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "th" },
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      {
                                                        attrs: {
                                                          color: "primary",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "mdi-email-open-outline"
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(
                                                      "\n                                            E-mail:\n                                        "
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.organization.manzil
                                                        .email
                                                    )
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("v-row", {
                                        staticClass: "yandex-map",
                                        staticStyle: { height: "150px" },
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.organization.manzil.map
                                          ),
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
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  typeof _vm.organization.posts !== "undefined" &&
                  _vm.organization.posts &&
                  _vm.organization.posts.length > 0
                    ? _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "boshqarma-section-title",
                                  attrs: { cols: "12" },
                                },
                                [_c("h3", [_vm._v(" Божхона постлари")])]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4", offset: "8" } },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      "append-icon": "mdi-magnify",
                                      label: "Қидириш",
                                      "single-line": "",
                                      "hide-details": "",
                                    },
                                    model: {
                                      value: _vm.search,
                                      callback: function ($$v) {
                                        _vm.search = $$v
                                      },
                                      expression: "search",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-data-table", {
                            staticClass: "boshqarma-postlar",
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.organization.posts,
                              search: _vm.search,
                              "no-data-text": _vm.$t("Маълумот топилмади"),
                            },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.news.length > 0
                    ? _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "boshqarma-section-title",
                                  attrs: { cols: "12" },
                                },
                                [
                                  _c("h3", [
                                    _vm._v(" Бошқармага оид янгиликлар"),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _c(
                              "div",
                              { staticClass: "single_blog_content" },
                              [
                                _c("v-row", [_c("v-col")], 1),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  _vm._l(_vm.news, function (news, index) {
                                    return _c(
                                      "v-col",
                                      {
                                        key: news.slug + index,
                                        staticClass: "news-item",
                                        attrs: { cols: "4" },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "news-item-content" },
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass: "news__img",
                                                attrs: {
                                                  to: "/news/" + news.slug,
                                                },
                                              },
                                              [
                                                _c("img", {
                                                  staticClass: "w-100",
                                                  staticStyle: {
                                                    height: "250px",
                                                  },
                                                  attrs: {
                                                    src:
                                                      "/storage/uploads/" +
                                                      news.image,
                                                  },
                                                }),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "news-meta" },
                                              [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(news.created_at)
                                                  ),
                                                ]),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "router-link",
                                              {
                                                staticClass: "news__title",
                                                attrs: {
                                                  to: "/news/" + news.slug,
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(news.title) +
                                                    "\n                                    "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    )
                                  }),
                                  1
                                ),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);