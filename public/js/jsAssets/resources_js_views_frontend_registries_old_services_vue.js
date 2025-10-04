"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_registries_old_services_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../i18n */ "./resources/js/i18n.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "customvalue",
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: 'Хизматлар',
        to: '/services',
        disabled: false,
        exact: true
      }, {
        text: 'Божхона тўловлари бўйича дастлабки қарорлар реестри',
        to: '/registries/decisions',
        disabled: true,
        exact: true
      }],
      mydialog: false,
      selectedItem: 0,
      hfilters: {
        method: '',
        hsCode: '',
        datepicker: [],
        page: 1,
        tip_z: null,
        size: 10
      },
      services: [{
        text: 'Юкларни халқаро йўлларда ташиш китобчасидан фойдаланиш учун рухсатнома  (реестр рақами 0372)',
        value: 'L'
      }, {
        text: 'Божхона омборини таъсис этиш учун лицензия (реестр рақами 0373)',
        value: 'C'
      }, {
        text: 'Божхона режимида омборхона "Эркин омборхона" таъсис этиш учун лицензия (реестр рақами 0374)',
        value: 'E'
      }, {
        text: 'Бож олинмайдиган савдо фаолияти учун лицензия (реестр рақами 0375)',
        value: 'G'
      }],
      statuses: [{
        text: 'Янги',
        value: 0
      }, {
        text: 'Жараёнда',
        value: 1
      }, {
        text: 'Рухсат берилган',
        value: 2
      }, {
        text: 'Рухсат берилмаган',
        value: 3
      }, {
        text: 'Бекор қилинган',
        value: 4
      }, {
        text: 'Тўлов жараёнида',
        value: 6
      }, {
        text: 'Лицензия бериш',
        value: 7
      }],
      totalDesserts: 0,
      totalDecisions: 0,
      desserts: [],
      loading: true,
      options: {},
      mfilters: [{
        name: "Ариза рақами",
        value: "appNum"
      }, {
        name: "Етказиб бериш шарти",
        value: "terms"
      }, {
        name: "ТИФ ТН коди",
        value: "hsCode"
      }, {
        name: "Товарнинг номи",
        value: "tradName"
      }, {
        name: "Қарор рақами",
        value: "inDecNum"
      }, {
        name: "Қарор қабул қилинган сана",
        value: "StartDate"
      }, {
        name: "Қарор қабул қилинган сана",
        value: "EndDate"
      }, {
        name: "Аниқлаш усули",
        value: "method"
      }],
      mdata: ["appNum", "appDate", "personFio", "terms", "termsNm", "hsCode", "hsName", "tradeName", "method", "inDecNum", "inDecDate", "inDecEndDate", "inDecLocationNm", "methodNm", "statusNm", "commentEnded"],
      headers: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_1__["default"].t('Ариза рақами'),
        align: 'start',
        sortable: false,
        value: "num_z",
        width: '100px'
      }, {
        text: 'Давлат хизмати тури',
        value: "tip_z",
        sortable: false,
        width: '300px'
      }, {
        text: 'Ҳолати',
        value: "status",
        sortable: false,
        width: '200px'
      }, {
        text: 'Мурожаат қабул қилинган вақти',
        value: "instime",
        sortable: false,
        width: '150px'
      }, {
        text: 'Ижрочи',
        value: "user_ext",
        sortable: false,
        width: '150px'
      }, {
        text: 'Натижаси',
        value: "fabula",
        sortable: false,
        width: '300px'
      }],
      dec_date: "",
      menu_dec_date: false,
      datepicker: [],
      decisions: [],
      v_dec_date: []
    };
  },
  watch: {
    options: {
      handler: function handler() {
        console.log(this.hfilters.page);
        this.hfilters.page = this.options.page;
        this.hfilters.size = this.options.itemsPerPage;
        this.getDataFromApi();
      },
      deep: true
    },
    hfilters: {
      handler: function handler() {
        this.getDataFromApi();
      },
      deep: true
    }
  },
  methods: {
    openDialog: function openDialog(item) {
      if (typeof this.decisions[item] !== 'undefined' && typeof this.decisions[item]['appNum'] !== 'undefined') {
        this.selectedItem = item;
        this.mydialog = true;
      } else {
        this.$toast.error("Хатолик юз берди!");
      }
    },
    formatDateRange: function formatDateRange(dates) {
      if (dates.length > 1) {
        if (dates[1] < dates[0]) {
          var date = dates[1];
          dates[1] = dates[0];
          dates[0] = date;
        }
      }

      var date1 = "";
      var date0 = "";
      if (typeof dates[1] !== 'undefined') date1 = "-- " + dates[1] + " гача";else date1 = "";
      if (typeof dates[0] !== 'undefined') date0 = dates[0] + " дан";else dates[0] = "";
      return date0 + date1;
    },
    toggleAll: function toggleAll() {
      if (this.selected.length) this.selected = [];else this.selected = this.desserts.slice();
    },
    changeSort: function changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    getDataFromApi: function getDataFromApi() {
      this.loading = true;
      this.getReestr();
      this.loading = false;
    },
    getReestr: function getReestr() {
      var _this = this;

      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/v1/ex_api/services-registries', _this.hfilters).then(function (res) {
                  _this.decisions = res.data.data;
                  if (typeof res.data.data[0] !== 'undefined') _this.totalDecisions = parseInt(res.data.data[0].mycount);else _this.totalDecisions = 0;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    },
    getItemByValue: function getItemByValue(items, value) {
      var returnValue;
      items.forEach(function (service) {
        if (service.value == value) {
          returnValue = service;
          return true;
        }
      });

      if (returnValue) {
        //console.log(returnCountry)
        return returnValue;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-data-table .v-input {\r\n    font-size: 12px;\n}\n.v-data-table .v-data-table-header th span {\r\n    color: var(--mycolor);\r\n    font-weight: bold;\r\n    font-size: 15px;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_old_services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./old_services.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_old_services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_old_services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/registries/old_services.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/frontend/registries/old_services.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _old_services_vue_vue_type_template_id_21682228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./old_services.vue?vue&type=template&id=21682228& */ "./resources/js/views/frontend/registries/old_services.vue?vue&type=template&id=21682228&");
/* harmony import */ var _old_services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./old_services.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/registries/old_services.vue?vue&type=script&lang=js&");
/* harmony import */ var _old_services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./old_services.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/frontend/registries/old_services.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _old_services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _old_services_vue_vue_type_template_id_21682228___WEBPACK_IMPORTED_MODULE_0__.render,
  _old_services_vue_vue_type_template_id_21682228___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/registries/old_services.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/registries/old_services.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/frontend/registries/old_services.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_old_services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./old_services.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_old_services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/registries/old_services.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/frontend/registries/old_services.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_old_services_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./old_services.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/frontend/registries/old_services.vue?vue&type=template&id=21682228&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/frontend/registries/old_services.vue?vue&type=template&id=21682228& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_old_services_vue_vue_type_template_id_21682228___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_old_services_vue_vue_type_template_id_21682228___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_old_services_vue_vue_type_template_id_21682228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./old_services.vue?vue&type=template&id=21682228& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=template&id=21682228&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=template&id=21682228&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/registries/old_services.vue?vue&type=template&id=21682228& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "section" },
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
        "div",
        { staticClass: "page-content" },
        [
          _c(
            "v-container",
            [
              _c("v-row", [
                _c(
                  "h3",
                  {
                    staticClass: "primary-color m-2 text-center mb-10 fw-bold",
                  },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.$t("Давлат хизматлари бўйича мурожаатлар реестри")
                      )
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-data-table", {
                    staticClass: "elevation-1 p-0",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.decisions,
                      "fixed-header": "",
                      width: "50vw",
                      "calculate-widths": "",
                      options: _vm.options,
                      "server-items-length": _vm.totalDecisions,
                      loading: _vm.loading,
                      "no-data-text": _vm.$t("Маълумот топилмади"),
                      "footer-props": {
                        "items-per-page-text": _vm.$t(
                          "Сахифадаги элементлар сони"
                        ),
                        "items-per-page-all-text": _vm.$t("Барчаси"),
                      },
                      "loading-text": _vm.$t(
                        "Юкланмоқда... Илтимос кутиб туринг"
                      ),
                    },
                    on: {
                      "update:options": function ($event) {
                        _vm.options = $event
                      },
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "header.name",
                        fn: function (ref) {
                          var header = ref.header
                          return [
                            _c("span", { staticClass: "primary" }, [
                              _vm._v(" " + _vm._s(header.text.toUpperCase())),
                            ]),
                          ]
                        },
                      },
                      {
                        key: "header",
                        fn: function (ref) {
                          var props = ref.props
                          return [
                            _c(
                              "tr",
                              _vm._l(
                                props.headers,
                                function (header, headerKey) {
                                  return _c(
                                    "th",
                                    {
                                      key: header.text,
                                      staticStyle: {
                                        position: "sticky",
                                        top: "50px",
                                        "background-color": "#fff",
                                      },
                                      attrs: {
                                        role: "columnheader",
                                        scope: "col",
                                      },
                                    },
                                    [
                                      header.value === "user_ext" ||
                                      header.value === "instime" ||
                                      header.value === "fabula"
                                        ? void 0
                                        : header.value === "tip_z"
                                        ? [
                                            _c("v-autocomplete", {
                                              attrs: {
                                                dense: "",
                                                "hide-details": "",
                                                items: _vm.services,
                                                clearable: "",
                                                color: "primary",
                                              },
                                              model: {
                                                value: _vm.hfilters.tip_z,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.hfilters,
                                                    "tip_z",
                                                    $$v
                                                  )
                                                },
                                                expression: "hfilters.tip_z",
                                              },
                                            }),
                                          ]
                                        : header.value === "status"
                                        ? [
                                            _c("v-autocomplete", {
                                              attrs: {
                                                dense: "",
                                                "hide-details": "",
                                                items: _vm.statuses,
                                                clearable: "",
                                                color: "primary",
                                              },
                                              model: {
                                                value: _vm.hfilters.status,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.hfilters,
                                                    "status",
                                                    $$v
                                                  )
                                                },
                                                expression: "hfilters.status",
                                              },
                                            }),
                                          ]
                                        : [
                                            _c("v-text-field", {
                                              staticClass: "m-2",
                                              attrs: {
                                                color: "primary",
                                                name: header.value,
                                                clearable: "",
                                                dense: "",
                                                "hide-details": "",
                                              },
                                              model: {
                                                value:
                                                  _vm.hfilters[header.value],
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.hfilters,
                                                    header.value,
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "hfilters[header.value]",
                                              },
                                            }),
                                          ],
                                    ],
                                    2
                                  )
                                }
                              ),
                              0
                            ),
                          ]
                        },
                      },
                      {
                        key: "body",
                        fn: function (ref) {
                          var items = ref.items
                          return [
                            _c(
                              "tbody",
                              _vm._l(items, function (item, itemKey) {
                                return _c(
                                  "tr",
                                  { key: itemKey },
                                  _vm._l(_vm.headers, function (header) {
                                    return _c(
                                      "td",
                                      [
                                        header.value === "inDecNum"
                                          ? [
                                              new Date(item.inDecEndDate) <
                                              new Date()
                                                ? [
                                                    _c("span", {
                                                      staticStyle: {
                                                        "border-radius": "5px",
                                                        color: "#fff",
                                                        padding: "5px",
                                                        "background-color":
                                                          "red",
                                                      },
                                                    }),
                                                    _vm._v(
                                                      "\n                                        " +
                                                        _vm._s(item.inDecNum) +
                                                        "\n                                    "
                                                    ),
                                                  ]
                                                : [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "background-color":
                                                            "green",
                                                          "border-radius":
                                                            "5px",
                                                          color: "#fff",
                                                          padding: "5px",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                            " +
                                                            _vm._s(
                                                              item.inDecNum
                                                            ) +
                                                            "\n                                        "
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                            ]
                                          : header.value === "tip_z"
                                          ? [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.getItemByValue(
                                                    _vm.services,
                                                    item[header.value]
                                                  ).text
                                                )
                                              ),
                                            ]
                                          : header.value === "status"
                                          ? [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.getItemByValue(
                                                    _vm.statuses,
                                                    item[header.value]
                                                  ).text
                                                )
                                              ),
                                            ]
                                          : header.value === "fabula"
                                          ? [
                                              _c("textarea", {
                                                attrs: {
                                                  cols: "40",
                                                  rows: "4",
                                                },
                                                domProps: {
                                                  value: item[header.value]
                                                    .replaceAll("", "")
                                                    .replaceAll("", ""),
                                                },
                                              }),
                                            ]
                                          : [
                                              _vm._v(
                                                _vm._s(item[header.value])
                                              ),
                                            ],
                                      ],
                                      2
                                    )
                                  }),
                                  0
                                )
                              }),
                              0
                            ),
                          ]
                        },
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
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: typeof _vm.decisions[_vm.selectedItem] !== "undefined",
              expression: "typeof decisions[selectedItem] !=='undefined'",
            },
          ],
          attrs: { "max-width": "600" },
          model: {
            value: _vm.mydialog,
            callback: function ($$v) {
              _vm.mydialog = $$v
            },
            expression: "mydialog",
          },
        },
        [
          _c(
            "v-card",
            { attrs: { elevation: "2" } },
            [
              _c(
                "v-toolbar",
                {
                  staticStyle: { "font-size": "20px", color: "#fff" },
                  attrs: { color: "primary" },
                },
                [
                  _vm._v(
                    "Дастлабки қарор № " +
                      _vm._s(
                        typeof _vm.decisions[_vm.selectedItem] !== "undefined"
                          ? _vm.decisions[_vm.selectedItem].inDecNum
                          : ""
                      )
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                          _vm._v("Ариза рақами:"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem].appNum
                                : ""
                            )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                          _vm._v("Ариза санаси:"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem].appDate
                                : ""
                            )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                          _vm._v("ТИФ ТН коди :"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem].hsCode
                                : ""
                            ) +
                            " - " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem].hsName
                                : ""
                            )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                          _vm._v("Аризачи фамилияси, исми, шарифи :"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem].personFio
                                : ""
                            )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                          _vm._v("Товарни етказиб бериш усули :"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem].termsNm
                                : ""
                            )
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                typeof _vm.decisions[_vm.selectedItem] !==
                                  "undefined" &&
                                _vm.decisions[_vm.selectedItem]["tradeName"],
                              expression:
                                "typeof decisions[selectedItem] !=='undefined' && decisions[selectedItem]['tradeName'] ",
                            },
                          ],
                          attrs: { cols: "6" },
                        },
                        [
                          _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                            _vm._v("Товар тижорат номи:"),
                          ]),
                          _vm._v(
                            " " +
                              _vm._s(
                                typeof _vm.decisions[_vm.selectedItem] !==
                                  "undefined"
                                  ? _vm.decisions[_vm.selectedItem].tradeName
                                  : ""
                              )
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                          _vm._v("Божхона қийматини аниқлаш усули:"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem].methodNm
                                : ""
                            )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                          _vm._v("Кўриб чиққан бошқарма:"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem]
                                    .inDecLocationNm
                                : ""
                            )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                          _vm._v("Қарор кабул қилинган сана:"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem].inDecDate
                                : ""
                            )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "fw-bold w-100 d-block" }, [
                          _vm._v("Қарор амал қилиш муддати:"),
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(
                              typeof _vm.decisions[_vm.selectedItem] !==
                                "undefined"
                                ? _vm.decisions[_vm.selectedItem].inDecEndDate
                                : ""
                            )
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
                "v-card-actions",
                { staticClass: "d-flex justify-content-end" },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function ($event) {
                          _vm.mydialog = false
                        },
                      },
                    },
                    [_vm._v("Ёпиш")]
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