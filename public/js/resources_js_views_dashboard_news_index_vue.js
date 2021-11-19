"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_news_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../src/services/apiService */ "./resources/js/src/services/apiService.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _locales_uz_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locales/uz.json */ "./resources/js/locales/uz.json");
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




Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__).forEach(function (rule) {
  (0,vee_validate__WEBPACK_IMPORTED_MODULE_3__.extend)(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[rule]), {}, {
    // copies rule configuration
    message: _locales_uz_json__WEBPACK_IMPORTED_MODULE_1__.messages[rule] // assign message

  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: 'ID',
        sortable: true,
        value: 'id',
        align: 'start'
      }, {
        text: 'Сарлавҳа',
        sortable: true,
        value: 'title',
        align: 'center',
        width: '30%'
      }, {
        text: 'Урл адреси',
        sortable: true,
        value: 'slug',
        width: '30%'
      },
      /*{text: 'Категорияси', sortable: true, value: 'categories'},*/
      {
        text: 'Амаллар',
        value: 'actions',
        sortable: false
      }],
      breadcrumb_items: [{
        text: 'Админ панел',
        to: '/admin',
        exact: true
      }, {
        text: 'Янгиликлар',
        to: '/admin/news',
        exact: true,
        disabled: true
      }],
      allNews: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        title: '',
        slug: '',
        category: 0,
        description: ''
      },
      defaultItem: {
        id: null,
        title: '',
        slug: '',
        category: 0,
        description: ''
      }
    };
  },
  mounted: function mounted() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].readNews().then(function (response) {
        _this.allNews = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.allNews.indexOf(item);
      this.editedItem = Object.assign({}, {
        'id': item
      });
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.allNews.indexOf(item);
      this.editedItem = Object.assign({}, {
        'id': item
      });
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this2 = this;

      _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].deleteNews(this.editedItem.id).then(function (response) {
        if (response.status == 200) {
          _this2.initialize();

          _this2.dialogDelete = false;

          _this2.$store.dispatch('setSnackbar', {
            color: 'default',
            text: 'Янгилик омадли тарзда ўчирилди!'
          });
        }
      })["catch"](function (error) {
        console.log(error);

        _this2.$store.dispatch('setSnackbar', {
          color: 'error',
          text: 'Хатолик юз берди!}!'
        });
      });
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this4 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/dashboard/news/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/dashboard/news/index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_638c0420___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=638c0420& */ "./resources/js/views/dashboard/news/index.vue?vue&type=template&id=638c0420&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/news/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_638c0420___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_638c0420___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/news/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/news/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/dashboard/news/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/news/index.vue?vue&type=template&id=638c0420&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/dashboard/news/index.vue?vue&type=template&id=638c0420& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_638c0420___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_638c0420___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_638c0420___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=638c0420& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/index.vue?vue&type=template&id=638c0420&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/index.vue?vue&type=template&id=638c0420&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/index.vue?vue&type=template&id=638c0420& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { staticClass: "page-main 11", attrs: { fluid: "", tag: "section" } },
    [
      _c(
        "div",
        { staticClass: "dashboardbreadcrumb" },
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
        "v-btn",
        {
          staticClass: "new_item",
          attrs: { color: "primary", dark: "", to: "news/create" },
        },
        [_vm._v("\n        Янги қўшиш\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "12" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "", md12: "", lg12: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: _vm.headers,
                          items: _vm.allNews,
                          "calculate-widths": "",
                          "footer-props": {
                            "items-per-page-text": "Сахифадаги элементлар сони",
                          },
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "top",
                            fn: function (ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: { "max-width": "500px" },
                                    model: {
                                      value: _vm.dialogDelete,
                                      callback: function ($$v) {
                                        _vm.dialogDelete = $$v
                                      },
                                      expression: "dialogDelete",
                                    },
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c(
                                          "v-card-title",
                                          { staticClass: "text-h5" },
                                          [
                                            _vm._v(
                                              "Сиз хақиқатдан ҳам ўчирмоқчимисиз?\n                                    "
                                            ),
                                          ]
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
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: "",
                                                },
                                                on: { click: _vm.closeDelete },
                                              },
                                              [_vm._v("Ёпиш")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: "",
                                                },
                                                on: {
                                                  click: _vm.deleteItemConfirm,
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            Тасдиқлайман\n                                        "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("v-spacer"),
                                          ],
                                          1
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
                          {
                            key: "item.categories",
                            fn: function (ref) {
                              var headers = ref.headers
                              var item = ref.item
                              return _vm._l(
                                item.categories,
                                function (category) {
                                  return _c("p", [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          category.title ? category.title : ""
                                        ) +
                                        "\n                            "
                                    ),
                                  ])
                                }
                              )
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
                                      to: "/admin/news/edit/" + item.id,
                                      color: "primary",
                                      small: "",
                                    },
                                  },
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        staticClass: "mr-2",
                                        attrs: { small: "" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    mdi-pencil\n                                "
                                        ),
                                      ]
                                    ),
                                    _vm._v(
                                      "\n                                Тахрирлаш\n                            "
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "secondary", small: "" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.deleteItem(item.id)
                                      },
                                    },
                                  },
                                  [
                                    _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v(
                                        "\n                                    mdi-delete\n                                "
                                      ),
                                    ]),
                                    _vm._v(
                                      "\n                                Ўчириш\n                            "
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                          {
                            key: "no-data",
                            fn: function () {
                              return [
                                _c("br"),
                                _vm._v(" "),
                                _c("h3", [_vm._v("Маълумотлар топилмади")]),
                                _c("br"),
                                _vm._v(" "),
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c("br"),
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
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);