"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_homepage_faq_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/faq.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/faq.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/services/apiService */ "./resources/js/src/services/apiService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Homefaq",
  data: function data() {
    return {
      faqs: []
    };
  },
  created: function created() {
    this.getFaqs();
  },
  methods: {
    getFaqs: function getFaqs() {
      var _this = this;

      _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].readFaqs().then(function (response) {
        if (response.status === 200) _this.faqs = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/homepage/faq.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/homepage/faq.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _faq_vue_vue_type_template_id_431b0280_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.vue?vue&type=template&id=431b0280&scoped=true& */ "./resources/js/components/homepage/faq.vue?vue&type=template&id=431b0280&scoped=true&");
/* harmony import */ var _faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.vue?vue&type=script&lang=js& */ "./resources/js/components/homepage/faq.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _faq_vue_vue_type_template_id_431b0280_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _faq_vue_vue_type_template_id_431b0280_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "431b0280",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/homepage/faq.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/homepage/faq.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/homepage/faq.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./faq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/faq.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/homepage/faq.vue?vue&type=template&id=431b0280&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/homepage/faq.vue?vue&type=template&id=431b0280&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_template_id_431b0280_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_template_id_431b0280_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faq_vue_vue_type_template_id_431b0280_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./faq.vue?vue&type=template&id=431b0280&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/faq.vue?vue&type=template&id=431b0280&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/faq.vue?vue&type=template&id=431b0280&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/homepage/faq.vue?vue&type=template&id=431b0280&scoped=true& ***!
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
  return _c("div", { staticClass: "chose_inner_area" }, [
    _c("div", { staticClass: "section_tittle" }, [
      _c("h2", [_vm._v(_vm._s(_vm.$t("Кўп бериладиган саволлар")))]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "panel-group",
        attrs: {
          "aria-multiselectable": "true",
          role: "tablist",
          id: "accordion",
        },
      },
      _vm._l(_vm.faqs, function (faq, fkey) {
        return fkey < 5
          ? _c("div", { key: fkey, staticClass: "panel panel-default" }, [
              _c(
                "div",
                {
                  staticClass: "panel-heading",
                  attrs: { id: "headingThree" + fkey },
                },
                [
                  _c("h4", { staticClass: "panel-title" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          role: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-parent": "#accordion",
                          href: "#chose" + fkey,
                          "aria-expanded": "true",
                          "aria-controls": "chose3",
                        },
                      },
                      [
                        _vm._v(
                          _vm._s(
                            typeof faq.question !== "undefined"
                              ? faq.question
                              : ""
                          )
                        ),
                        _vm._m(0, true),
                      ]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse ",
                  class: fkey === 0 ? " in show" : "",
                  attrs: {
                    id: "chose" + fkey,
                    "aria-labelledby": "headingThree",
                  },
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          typeof faq.answer !== "undefined" ? faq.answer : ""
                        ) +
                        "\n                "
                    ),
                  ]),
                ]
              ),
            ])
          : _vm._e()
      }),
      0
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fa fa-plus", attrs: { "aria-hidden": "false" } }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-minus", attrs: { "aria-hidden": "true" } }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);