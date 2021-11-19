"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_pages_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../src/services/apiService */ "./resources/js/src/services/apiService.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Page',
  data: function data() {
    return {
      breadcrumb_items: [{
        text: 'Асосий саҳифа',
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
      page: {},
      relates: {}
    };
  },
  watch: {
    $route: function $route(to, from) {
      this.initialize();
    }
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.initialize();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  title: function title() {
    this.page.title;
  },
  methods: {
    close: function close() {
      this.$router.replace('/');
    },
    initialize: function initialize() {
      var _this2 = this;

      _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readPage(this.$route.params.id).then(function (response) {
        _this2.page = response.data.data;
        if (!_this2.page.id) _this2.$router.replace('/404');
        _this2.breadcrumb_items[1].text = _this2.page.title;
      })["catch"](function (error) {
        _this2.$store.dispatch('setSnackbar', {
          color: 'error',
          text: 'Маълумотларни юклашда хатолик содир бўлди!'
        });

        _this2.$router.replace("/")["catch"](function () {});
      });
      _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readRelated(this.$route.params.id).then(function (response) {
        _this2.relates = response.data;
      })["catch"](function (error) {
        _this2.$store.dispatch('setSnackbar', {
          color: 'error',
          text: 'Маълумотларни юклашда хатолик содир бўлди!'
        });

        _this2.$router.replace("/")["catch"](function () {});
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/frontend/pages/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/frontend/pages/index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_a0b21a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a0b21a6e& */ "./resources/js/views/frontend/pages/index.vue?vue&type=template&id=a0b21a6e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/pages/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a0b21a6e___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_a0b21a6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/pages/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/pages/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/frontend/pages/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/pages/index.vue?vue&type=template&id=a0b21a6e&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/frontend/pages/index.vue?vue&type=template&id=a0b21a6e& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0b21a6e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0b21a6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0b21a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=a0b21a6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/index.vue?vue&type=template&id=a0b21a6e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/index.vue?vue&type=template&id=a0b21a6e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/index.vue?vue&type=template&id=a0b21a6e& ***!
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
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _vm.relates.length > 0
                ? _c("v-col", { attrs: { cols: "3" } }, [
                    _c("div", { staticClass: "left_sidebar_widget" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "single_widget categori_widget wow fadeInUp",
                          staticStyle: {
                            visibility: "visible",
                            "animation-name": "fadeInUp",
                          },
                        },
                        [
                          _c(
                            "ul",
                            _vm._l(_vm.relates, function (related_item) {
                              return _c(
                                "li",
                                {
                                  class:
                                    (related_item != null &&
                                      _vm.$route.params.id ==
                                        parseInt(related_item.id)) ||
                                    _vm.$route.params.id ==
                                      related_item.url.substr(6)
                                      ? "active"
                                      : "",
                                },
                                [
                                  related_item
                                    ? _c(
                                        "router-link",
                                        { attrs: { to: related_item.url } },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-caret-right",
                                            attrs: { "aria-hidden": "true" },
                                          }),
                                          _vm._v(_vm._s(related_item.title)),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    _vm._l(
                                      related_item.children,
                                      function (childRelated) {
                                        return _c(
                                          "li",
                                          {
                                            class:
                                              (childRelated != null &&
                                                _vm.$route.params.id ==
                                                  parseInt(childRelated.id)) ||
                                              _vm.$route.params.id ==
                                                childRelated.url.substr(6)
                                                ? "active"
                                                : "",
                                          },
                                          [
                                            childRelated
                                              ? _c(
                                                  "router-link",
                                                  {
                                                    attrs: {
                                                      to: childRelated.url,
                                                    },
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fa fa-caret-right",
                                                      attrs: {
                                                        "aria-hidden": "true",
                                                      },
                                                    }),
                                                    _vm._v(
                                                      _vm._s(childRelated.title)
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ],
                                          1
                                        )
                                      }
                                    ),
                                    0
                                  ),
                                ],
                                1
                              )
                            }),
                            0
                          ),
                        ]
                      ),
                    ]),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: _vm.relates.length > 0 ? 9 : 12 } },
                [
                  _c("div", { staticClass: "single_blog_content" }, [
                    _c("div", { staticClass: "widget_tittle" }, [
                      _c("h3", [_vm._v(_vm._s(_vm.page.title))]),
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      domProps: { innerHTML: _vm._s(_vm.page.description) },
                    }),
                  ]),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);