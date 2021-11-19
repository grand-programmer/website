"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_component_snack_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/component/snack.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/component/snack.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    timeout: {
      "default": 5 * 1000
    },
    color: ''
  },
  data: function data() {
    return {
      currentTime: 0,
      timeInterval: null,
      style: ''
    };
  },
  methods: {
    startProgress: function startProgress() {
      var _this = this;

      console.log('asd');
      this.timeInterval = setInterval(function () {
        _this.currentTime += 150;
      }, 150);
      this.$emit("input", false);
    }
  },
  beforeCreate: function beforeCreate() {
    $('.v-snack').remove();
  },
  computed: {},
  mounted: function mounted() {
    this.startProgress();
  }
});

/***/ }),

/***/ "./resources/js/views/dashboard/component/snack.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/dashboard/component/snack.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _snack_vue_vue_type_template_id_00063ed2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snack.vue?vue&type=template&id=00063ed2& */ "./resources/js/views/dashboard/component/snack.vue?vue&type=template&id=00063ed2&");
/* harmony import */ var _snack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snack.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/component/snack.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _snack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _snack_vue_vue_type_template_id_00063ed2___WEBPACK_IMPORTED_MODULE_0__.render,
  _snack_vue_vue_type_template_id_00063ed2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/component/snack.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/component/snack.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/component/snack.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_snack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./snack.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/component/snack.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_snack_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/component/snack.vue?vue&type=template&id=00063ed2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/component/snack.vue?vue&type=template&id=00063ed2& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_snack_vue_vue_type_template_id_00063ed2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_snack_vue_vue_type_template_id_00063ed2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_snack_vue_vue_type_template_id_00063ed2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./snack.vue?vue&type=template&id=00063ed2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/component/snack.vue?vue&type=template&id=00063ed2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/component/snack.vue?vue&type=template&id=00063ed2&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/component/snack.vue?vue&type=template&id=00063ed2& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "v-snackbar",
    {
      style: _vm.style,
      attrs: {
        width: "30%",
        light: "",
        value: true,
        color: "default",
        transition: "scroll-y-reverse-transition",
        top: "",
        right: "",
      },
      scopedSlots: _vm._u([
        {
          key: "action",
          fn: function (ref) {
            var attrs = ref.attrs
            return [
              _c(
                "v-icon",
                _vm._b(
                  {
                    attrs: { color: "indigo", right: "" },
                    on: {
                      click: function ($event) {
                        _vm.snackbar.showing = false
                      },
                    },
                  },
                  "v-icon",
                  attrs,
                  false
                ),
                [_vm._v("mdi-close\n        ")]
              ),
            ]
          },
        },
      ]),
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm._v(" "),
      _c("v-progress-linear", {
        attrs: {
          absolute: "",
          bottom: "",
          right: "",
          value: Math.floor(100 * (_vm.currentTime / _vm.timeout)),
        },
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);