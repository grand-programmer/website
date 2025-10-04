"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_pages_markaziy_markaziy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../src/services/apiService */ "./resources/js/src/services/apiService.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");
/* harmony import */ var _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/form/dialog-chips */ "./resources/js/components/form/dialog-chips.vue");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "rahbariyat",
  components: {
    DialogChips: _components_form_dialog_chips__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси марказий аппарати'),
        to: '/page/rahbariyat',
        disabled: true,
        exact: true
      }],
      rahbariyat: null,
      boshqarmalar: [],
      rais: null,
      birinchi_orinbosar: null,
      orinbosarlar: [],
      aktiv_rahbar: 4,
      aktiv_content: 1,
      dialog_image: false,
      image: null
    };
  },
  methods: {
    leftbarClick: function leftbarClick(id, key) {
      this.aktiv_rahbar = id;
      this.aktiv_content = 'rahbar' + (key + 1);
    },
    initialize: function initialize() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this2;
                _context.next = 3;
                return _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readMarkaziy(0).then(function (response) {
                  var mydata = response.data.data;
                  Object.entries(response.data.data).forEach(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        valkey = _ref2[0],
                        v = _ref2[1];

                    valkey = parseInt(valkey);
                    if (valkey === 0) _this.rahbariyat = v;else _this.boshqarmalar[valkey] = v;
                    /*if(v.lavozimi==='1') _this.rais=v;
                    else if(v.lavozimi==='2') _this.birinchi_orinbosar=v;
                    else _this.orinbosarlar.push(v);*/
                  });
                })["catch"](function (error) {
                  _this2.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!")); //this.$router.replace("/").catch(() => {
                  //});

                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.initialize();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vazifalar p {\n  line-height: 30px;\n  text-align: justify;\n}\n.section.page-container.markaziy .single_blog_content {\n  padding: 0 20px;\n  margin: 0 auto;\n}\n.section.page-container.markaziy .single_blog_content p {\n  font-size: 14px;\n}\n.section.page-container.markaziy .single_blog_content .widget_tittle {\n  margin: 20px 20px 0;\n  border: none;\n  padding-bottom: 35px;\n}\n.section.page-container.markaziy .single_blog_content .widget_tittle h3 {\n  color: #39ae69;\n  font-weight: 600;\n  text-align: center;\n  border-bottom: 4px solid #39ae69;\n  padding-bottom: 15px;\n  font-size: 22px;\n}\n.section.page-container.markaziy .single_blog_content .my-card .my-card-info {\n  padding-bottom: 0;\n}\n.section.page-container.markaziy .single_blog_content .my-card .my-card-info .text-row:last-child .column-text strong {\n  height: 40px;\n  display: block;\n  overflow: hidden;\n}\n\n/*.section.page-container.markaziy .single_blog_content .my-card .my-card-header p:nth-of-type(1) {\n    width: 97%;\n    min-height: 65px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}*/\n.section.page-container.markaziy .single_blog_content .my-card .text-row > div.far {\n  margin-top: 12px;\n}\n.left-bar {\n  flex: 0 0 25%;\n}\n.left-bar .rahbar-items .rahbar-item {\n  border-bottom: 2px solid #39ae69;\n  margin-bottom: 40px;\n  padding-bottom: 10px;\n  cursor: pointer;\n  transition: 0.5s ease top;\n}\n.left-bar .rahbar-items .rahbar-item p {\n  /* font-family: Lato !important; */\n  /* font-family: Lato !important; */\n  font-weight: bolder;\n  font-size: 16px !important;\n  line-height: 35px !important;\n  padding: 0px 0 !important;\n  text-align: left;\n}\n.left-bar .rahbar-items .rahbar-item p:nth-of-type(2) {\n  font-weight: 600 !important;\n  font-size: 18px !important;\n}\n.left-bar .rahbar-items .rahbar-item:hover p, .left-bar .rahbar-items .rahbar-item.active p {\n  color: #39ae69 !important;\n}\n.left-bar .rahbar-items .rahbar-item:hover p:nth-of-type(2), .left-bar .rahbar-items .rahbar-item.active p:nth-of-type(2) {\n  color: #1b7a42 !important;\n}\n.left-bar .rahbar-items .rahbar-item.active {\n  border-width: 4px;\n}\n.content-bar {\n  display: flex;\n  flex: 0 0 75%;\n}\n.content-bar .rectangle {\n  border: 4px solid #39ae69;\n  width: 100%;\n  border-radius: 10px;\n  position: relative;\n}\n.content-bar .rectangle .triangle {\n  position: absolute;\n  content: \"\";\n  border-radius: 4px;\n  top: calc(100% / 10 - 14px);\n  height: 47px;\n  background-color: #fff;\n  z-index: 26;\n  left: -4px;\n  width: 5px;\n  transition: 0.5s ease;\n}\n.content-bar .rectangle .triangle.rahbar1 {\n  top: 20px;\n}\n.content-bar .rectangle .triangle.rahbar2 {\n  top: 175px;\n}\n.content-bar .rectangle .triangle.rahbar3 {\n  top: 350px;\n}\n.content-bar .rectangle .triangle.rahbar4 {\n  top: 530px;\n}\n.content-bar .rectangle .triangle.rahbar5 {\n  top: 685px;\n}\n.content-bar .rectangle .triangle:before {\n  transform: rotate(315deg);\n  left: auto;\n  content: \"\";\n  display: block;\n  height: 35px;\n  width: 4px;\n  background-color: #39ae69;\n  margin-left: -12px;\n  margin-top: 18px;\n}\n.content-bar .rectangle .triangle:after {\n  transform: rotate(45deg);\n  left: auto;\n  content: \"\";\n  display: block;\n  height: 35px;\n  width: 4px;\n  background-color: #39ae69;\n  margin-left: -12px;\n  margin-top: -59px;\n}\n.content-bar .rectangle .content {\n  padding: 30px 45px;\n}\n.content-bar .rectangle .content .my-card {\n  padding: 12px 25px;\n}\n.content-bar .rectangle .content .my-card .row {\n  margin: 0 -7px;\n  border: 2px solid #39ae69;\n  /* border-bottom: 9px solid #9d9217; */\n  border-radius: 10px;\n}\n.content-bar .rectangle .content .my-card .row .my-card-header {\n  display: flex;\n  align-items: center;\n  margin: 10px 0 -5px 10px;\n  /* border-bottom: 1px solid #ccc; */\n  padding-bottom: 5px;\n  flex-direction: column;\n  overflow: hidden;\n}\n.content-bar .rectangle .content .my-card .row .my-card-header p {\n  width: 97%;\n  min-height: 77px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content-bar .rectangle .content .my-card .row .my-card-header .my-card-header-wrapper {\n  display: flex;\n  margin-top: 15px;\n  align-items: center;\n  justify-content: space-around;\n}\n.content-bar .rectangle .content .my-card .row .my-card-header .my-card-header-wrapper .profile-icon-wrapper {\n  padding: 9px 3px;\n  width: 120px;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  border: 1px solid #39ae69;\n  border-radius: 100%;\n  background-color: #fff;\n  margin-right: 24px;\n}\n.content-bar .rectangle .content .my-card .row .my-card-header .my-card-header-wrapper .profile-icon-wrapper .profile-icon {\n  /* width: 85px; */\n  /* height: 85px; */\n  display: inline-block;\n  float: left;\n  /* margin: 22px 15px; */\n  background-position: top;\n  background-size: cover;\n  border-radius: 100%;\n  /* border: 1px solid #ccc; */\n  padding: 0;\n  margin-left: 0px;\n  background-image: url(\"/images/business-man.png\");\n}\n.content-bar .rectangle .content .my-card .row .my-card-header .my-card-header-wrapper p {\n  background-color: #39ae69;\n  border-radius: 10px;\n  min-height: 40px;\n  padding: 10px;\n  margin-right: -25px;\n  color: #fff;\n}\n.content-bar .rectangle .content .my-card .row .my-card-info .text-row {\n  display: flex;\n  align-items: flex-start;\n  margin: 7px 0;\n}\n.content-bar .rectangle .content .my-card .row .my-card-info .text-row .column-text {\n  margin-top: -6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.content-bar .rectangle .content .my-card .row .my-card-info .text-row .column-text strong {\n  height: 20px !important;\n  width: 140px;\n}\n.content-bar .rectangle .content .my-card .row .my-card-info .text-row .column-text p {\n  margin-right: 10px;\n}\n.content-bar .rectangle .content .my-card .row .my-card-info .text-row p {\n  padding: 0;\n}\n.content-bar .rectangle .content .my-card .row .my-card-info .text-row div.far {\n  margin-top: inherit;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_markaziy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./markaziy.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_markaziy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_markaziy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/pages/markaziy/markaziy.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/frontend/pages/markaziy/markaziy.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _markaziy_vue_vue_type_template_id_20407a34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markaziy.vue?vue&type=template&id=20407a34& */ "./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=template&id=20407a34&");
/* harmony import */ var _markaziy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markaziy.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=script&lang=js&");
/* harmony import */ var _markaziy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markaziy.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _markaziy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _markaziy_vue_vue_type_template_id_20407a34___WEBPACK_IMPORTED_MODULE_0__.render,
  _markaziy_vue_vue_type_template_id_20407a34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/pages/markaziy/markaziy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_markaziy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./markaziy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_markaziy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_16_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_markaziy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./markaziy.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-16[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=template&id=20407a34&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=template&id=20407a34& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_markaziy_vue_vue_type_template_id_20407a34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_markaziy_vue_vue_type_template_id_20407a34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_markaziy_vue_vue_type_template_id_20407a34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./markaziy.vue?vue&type=template&id=20407a34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=template&id=20407a34&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=template&id=20407a34&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/pages/markaziy/markaziy.vue?vue&type=template&id=20407a34& ***!
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
    { staticClass: "section page-container markaziy" },
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
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col col-12" }, [
            _c("div", { staticClass: "single_blog_content" }, [
              _c("div", { staticClass: "widget_tittle" }, [
                _c("h3", { staticClass: "w-100" }, [
                  _vm._v(
                    _vm._s(
                      _vm.$t(
                        "Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси Марказий аппарати тузилмаси"
                      )
                    )
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "container-fluid" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "left-bar" }, [
                      _c(
                        "div",
                        { staticClass: "rahbar-items" },
                        _vm._l(
                          _vm.rahbariyat.filter(function (item) {
                            return ["1", "2", "3"].includes(item.lavozimi)
                          }),
                          function (rahbar, key) {
                            return _c(
                              "div",
                              {
                                key: "aa" + 1 + key,
                                staticClass: "rahbar-item",
                                class:
                                  _vm.aktiv_rahbar === rahbar.id
                                    ? "active"
                                    : "",
                                on: {
                                  click: function ($event) {
                                    return _vm.leftbarClick(rahbar.id, key)
                                  },
                                },
                              },
                              [
                                _c(
                                  "p",
                                  [
                                    rahbar.lavozimi === "1"
                                      ? [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раиси"
                                              )
                                            )
                                          ),
                                        ]
                                      : rahbar.lavozimi === "2"
                                      ? [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раисининг биринчи ўринбосари"
                                              )
                                            )
                                          ),
                                        ]
                                      : [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "Иқтисодиёт ва молия вазирлиги ҳузуридаги Божхона қўмитаси раисининг ўринбосари"
                                              )
                                            )
                                          ),
                                        ],
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "fw-bold" }, [
                                  _vm._v(_vm._s(rahbar.fio ? rahbar.fio : "")),
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "мутасаддилигидаги таркибий тузилмалар"
                                      )
                                    )
                                  ),
                                ]),
                              ]
                            )
                          }
                        ),
                        0
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "content-bar" }, [
                      _c("div", { staticClass: "rectangle" }, [
                        _c("span", {
                          staticClass: " triangle",
                          class: _vm.aktiv_content,
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "content row" },
                          [
                            _vm._l(_vm.rahbariyat, function (rahbar) {
                              return _vm._l(
                                _vm.boshqarmalar[rahbar.id],
                                function (boshqarma, bk) {
                                  return _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.aktiv_rahbar === rahbar.id,
                                          expression:
                                            "aktiv_rahbar===rahbar.id",
                                        },
                                      ],
                                      key: rahbar.id + "11" + bk,
                                      staticClass: "my-card col-4",
                                    },
                                    [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-12 p-0" },
                                          [
                                            _c("div", [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "my-card-header",
                                                },
                                                [
                                                  _c("p", [
                                                    _vm._v(
                                                      _vm._s(boshqarma.org_name)
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "my-card-header-wrapper",
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "profile-icon-wrapper",
                                                          style: [
                                                            12, 22,
                                                          ].includes(
                                                            boshqarma.id
                                                          )
                                                            ? "border: none !important"
                                                            : "",
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "profile-icon",
                                                              style:
                                                                "background-image: url(/storage/uploads/markaziy/" +
                                                                boshqarma.image,
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    _vm.dialog_image = true
                                                                    _vm.image =
                                                                      "/storage/uploads/markaziy/" +
                                                                      boshqarma.image
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                                     \n                                                                                "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("p", [
                                                        _vm._v(
                                                          _vm._s(boshqarma.fio)
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "my-card-info" },
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
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "column-text",
                                                        },
                                                        [
                                                          _c("p", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "Бошқарма бошлиғи"
                                                                )
                                                              )
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
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
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "column-text",
                                                        },
                                                        [
                                                          _c("p", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "Хизмат телефони"
                                                                )
                                                              )
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("strong", [
                                                            _vm._v(
                                                              _vm._s(
                                                                boshqarma.phone
                                                              )
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
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
                                                            "far fa-envelope",
                                                        },
                                                        [_vm._v(" ")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("p", [
                                                        _vm._v(
                                                          _vm._s(
                                                            boshqarma.email
                                                          )
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "text-row d-none",
                                                    },
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
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "column-text",
                                                        },
                                                        [
                                                          _c("p", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "Ҳодимлар"
                                                                )
                                                              ) + ":"
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("strong", [
                                                            _vm._v(
                                                              _vm._s(
                                                                boshqarma.add_phone
                                                              )
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    { staticClass: "text-row" },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mr-3",
                                                          staticStyle: {
                                                            "margin-left":
                                                              "-5px",
                                                          },
                                                          attrs: {
                                                            color: "black",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "mdi-arrow-right"
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "column-text",
                                                        },
                                                        [
                                                          _c(
                                                            "v-dialog",
                                                            {
                                                              attrs: {
                                                                "max-width":
                                                                  "900",
                                                                scrollable: "",
                                                              },
                                                              scopedSlots:
                                                                _vm._u(
                                                                  [
                                                                    {
                                                                      key: "activator",
                                                                      fn: function (
                                                                        ref
                                                                      ) {
                                                                        var on =
                                                                          ref.on
                                                                        var attrs =
                                                                          ref.attrs
                                                                        return [
                                                                          _c(
                                                                            "p",
                                                                            _vm._g(
                                                                              _vm._b(
                                                                                {
                                                                                  staticClass:
                                                                                    "text-decoration-underline",
                                                                                },
                                                                                "p",
                                                                                attrs,
                                                                                false
                                                                              ),
                                                                              on
                                                                            ),
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm.$t(
                                                                                    "Бошқарма вазифалари"
                                                                                  )
                                                                                )
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ]
                                                                      },
                                                                    },
                                                                  ],
                                                                  null,
                                                                  true
                                                                ),
                                                            },
                                                            [
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-card",
                                                                [
                                                                  _c(
                                                                    "v-card-title",
                                                                    {
                                                                      staticClass:
                                                                        "text-h5 primary white--text bold pb-2",
                                                                      staticStyle:
                                                                        {
                                                                          "word-break":
                                                                            "break-word",
                                                                        },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                                            " +
                                                                          _vm._s(
                                                                            boshqarma.org_name
                                                                          ) +
                                                                          "  " +
                                                                          _vm._s(
                                                                            _vm.$t(
                                                                              "вазифалари"
                                                                            )
                                                                          ) +
                                                                          "\n                                                                                        "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-card-text",
                                                                    {
                                                                      staticClass:
                                                                        "vazifalar",
                                                                      staticStyle:
                                                                        {
                                                                          height:
                                                                            "400px",
                                                                        },
                                                                      attrs: {
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      domProps:
                                                                        {
                                                                          innerHTML:
                                                                            _vm._s(
                                                                              boshqarma.biografiyasi
                                                                            ),
                                                                        },
                                                                    }
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
                                                ]
                                              ),
                                            ]),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  )
                                }
                              )
                            }),
                          ],
                          2
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.image,
              expression: "image",
            },
          ],
          attrs: { "content-class": "my_dialog" },
          model: {
            value: _vm.dialog_image,
            callback: function ($$v) {
              _vm.dialog_image = $$v
            },
            expression: "dialog_image",
          },
        },
        [
          _c(
            "v-btn",
            {
              attrs: { icon: "", dark: "" },
              on: {
                click: function ($event) {
                  _vm.dialog_image = false
                },
              },
            },
            [_c("v-icon", [_vm._v("mdi-close")])],
            1
          ),
          _vm._v(" "),
          _c("img", {
            staticStyle: { "max-width": "100%", width: "initial" },
            attrs: { src: _vm.image },
          }),
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