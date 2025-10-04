"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_news_news_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../src/services/apiService */ "./resources/js/src/services/apiService.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../i18n */ "./resources/js/i18n.js");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NewsShow',
  data: function data() {
    return {
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('Янгиликлар'),
        to: '/news/',
        disabled: false,
        exact: true
      }, {
        text: '',
        to: '/category/',
        disabled: false,
        exact: true
      }, {
        text: '',
        to: '/news/',
        disabled: true,
        exact: true
      }],

      /*id:this.$route.params.id,*/
      news: {},
      // currentUrl:"",
      fab: true,
      related_news: {},
      likes: [],
      dislikes: [],
      mdata: null
    };
  },
  watch: {
    $route: function $route(to, from) {
      this.initialize();
    }
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.initialize();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    currentUrl: function currentUrl() {
      if (window.location.href.indexOf(this.$route.fullPath) !== -1) return window.location.href.substr(0, window.location.href.indexOf(this.$route.fullPath)) + this.$route.fullPath;
      return window.location.href;
    }
  },
  methods: {
    close: function close() {
      this.$router.replace('/');
    },
    initialize: function initialize() {
      var _this3 = this;

      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readOneNews(_this3.$route.params.slug).then(function (response) {
                  _this3.news = response.data.data;
                  /*let dateParts = this.news.created_at.split("T");
                  if ((new Date(this.news.created_at)).getDate() === (new Date).getDate())
                      this.news.created_at = dateParts[1].substring(0, 5);
                  else this.news.created_at = dateParts[0];*/

                  /*let dateParts = this.news.created_at.split("T");
                  if ((new Date(this.news.created_at)).getDate() === (new Date).getDate())
                      this.news.created_at = dateParts[1].substring(0, 5);
                  else this.news.created_at = dateParts[0];*/
                  if (_this3.news.categories.length > 0) {
                    _this3.breadcrumb_items[2].text = _this3.news.categories[0].title;
                    _this3.breadcrumb_items[2].to = "/category/" + _this3.news.categories[0].slug;
                    _this3.breadcrumb_items[3].text = _this3.news.title;
                  } else {
                    _this3.breadcrumb_items[2].text = _this3.news.title;
                    _this3.breadcrumb_items[2].disabled = true;

                    _this3.breadcrumb_items.splice(3, 1);
                  }
                })["catch"](function (error) {
                  console.log(error);

                  _this3.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));
                  /*this.$router.replace("/").catch(() => {
                  });*/

                });

              case 2:
                _context2.next = 4;
                return _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readNews().then(function (response) {
                  _this3.related_news = response.data.data;
                  /* .map(function (i) {
                      let dateParts = i.created_at.split("T");
                      if ((new Date(i.created_at)).getDate() === (new Date).getDate())
                          i.created_at = dateParts[1].substring(0, 5);
                      else i.created_at = dateParts[0];
                      return i;
                  });*/
                })["catch"](function (error) {
                  console.log(error);

                  _this3.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u04381!"));
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    },
    vote: function vote(_vote) {
      var _this4 = this;

      var _this = this;

      _this.likes = this.$cookie.get('likes') ? JSON.parse(this.$cookie.get('likes')) : null;
      _this.dislikes = this.$cookie.get('dislikes') ? JSON.parse(this.$cookie.get('dislikes')) : null;
      /*            let likes=this.$cookie.get('likes') ? JSON.parse(this.$cookie.get('likes')) : null;
                  if(likes!==null && likes.include(this.news.id)) {
                    }else*/

      var discount = false;

      if (_vote === 1) {
        if (_this.likes !== null && _this.likes.includes(_this.news.id)) {
          this.$toast.warning(_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('Сиз аллақачон овоз бергансиз') + '!');
          return;
        } else {
          if (_this.dislikes !== null && _this.dislikes.includes(_this.news.id)) discount = true;

          if (_this.likes) {
            this.$cookie.set('likes', JSON.stringify(_this.likes.concat([_this.news.id])));
          } else this.$cookie.set('likes', JSON.stringify([_this.news.id]));
        }
      }

      if (_vote === 0) {
        if (_this.dislikes !== null && _this.dislikes.includes(_this.news.id)) {
          this.$toast.warning(_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].t('Сиз аллақачон овоз бергансиз') + '!');
          return;
        } else {
          if (_this.likes !== null && _this.likes.includes(_this.news.id)) discount = true;

          if (_this.dislikes) {
            this.$cookie.set('dislikes', JSON.stringify(_this.dislikes.concat([_this.news.id])));
          } else this.$cookie.set('dislikes', JSON.stringify([_this.news.id]));
        }
      }

      _this.mdata = {
        like: _vote
      };
      if (discount) _this.mdata['discount'] = 1;
      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.post('/api/v1/news/' + _this.news.id + '/vote', _this.mdata).then(function () {
                  if (_vote === 1) {
                    _this.news.like = _this.news.like + 1;

                    if (discount) {
                      var _this$dislikes;

                      _this.news.dislike = _this.news.dislike - 1;

                      if (((_this$dislikes = _this.dislikes) === null || _this$dislikes === void 0 ? void 0 : _this$dislikes.indexOf(_this.news.id)) !== -1) {
                        _this.dislikes = _this.dislikes.splice(_this.news.id, 1);

                        _this4.$cookie.set('dislikes', JSON.stringify(_this.dislikes));
                      }
                    }
                  }

                  if (_vote === 0) {
                    _this.news.dislike = _this.news.dislike + 1;

                    if (discount) {
                      var _this$likes;

                      _this.news.like = _this.news.like - 1;

                      if (((_this$likes = _this.likes) === null || _this$likes === void 0 ? void 0 : _this$likes.indexOf(_this.news.id)) !== -1) {
                        _this.likes = _this.likes.splice(_this.news.id, 1);

                        _this4.$cookie.set('likes', JSON.stringify(_this.likes));
                      }
                    }
                  }
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.news__img {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 60%;\r\n    overflow: hidden;\r\n    display: block;\r\n    margin-bottom: 12px;\n}\n.news__img img {\r\n    display: block;\r\n    transition: 1s ease;\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\n}\n.news-item .news__title {\r\n    color: #000;\n}\n.news-item {\r\n    margin-bottom: 20px;\n}\n.news-lenta {\r\n    padding-bottom: 18px;\r\n    border-bottom: 1px solid rgba(197, 197, 197, 0.8);\r\n    margin-bottom: 18px;\r\n    display: inline-block;\r\n    cursor: pointer;\n}\n.news-meta {\r\n    margin-bottom: 10px;\r\n    opacity: 0.8;\r\n    color: #000000;\r\n    font-size: 12px;\r\n    padding-left: 20px;\r\n    background: url(/img/calendar.svg) no-repeat center left;\r\n    background-size: contain;\n}\n.news-meta > span {\r\n    color: #8F8F8F;\r\n    font-weight: 300;\n}\n.news-lenta__title {\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    line-height: 21px;\r\n    color: #000000;\r\n    transition: .2s ease;\n}\n.widget_tittle {\r\n    padding-bottom: 35px;\r\n    border-bottom: 2px solid #39ae69;\n}\n.v-application .widget_tittle h3 {\r\n    color: #39ae69;\r\n    font-weight: bold;\r\n    font-size: 25px;\n}\n.left_sidebar_widget {\r\n    margin-top: 30px;\n}\n.single_layout-right {\r\n    margin-top: 40px;\n}\n.news-item.col.col-4:hover {\r\n    box-shadow: 0 0 9px -6px #000;\n}\n.single_blog_content img {\r\n    max-width: 100%;\n}\n.news-content-footer {\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./news.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/frontend/news/news.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/frontend/news/news.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _news_vue_vue_type_template_id_491e2311___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.vue?vue&type=template&id=491e2311& */ "./resources/js/views/frontend/news/news.vue?vue&type=template&id=491e2311&");
/* harmony import */ var _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/news/news.vue?vue&type=script&lang=js&");
/* harmony import */ var _news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/frontend/news/news.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _news_vue_vue_type_template_id_491e2311___WEBPACK_IMPORTED_MODULE_0__.render,
  _news_vue_vue_type_template_id_491e2311___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/news/news.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/news/news.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/frontend/news/news.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./news.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/news/news.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/frontend/news/news.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./news.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/frontend/news/news.vue?vue&type=template&id=491e2311&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/frontend/news/news.vue?vue&type=template&id=491e2311& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_template_id_491e2311___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_template_id_491e2311___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_news_vue_vue_type_template_id_491e2311___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./news.vue?vue&type=template&id=491e2311& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=template&id=491e2311&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=template&id=491e2311&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/news/news.vue?vue&type=template&id=491e2311& ***!
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
      _c(
        "v-container",
        { staticClass: "news-container" },
        [
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: 9 } }, [
                _c(
                  "div",
                  { staticClass: "single_blog_content" },
                  [
                    _c("div", { staticClass: "widget_tittle" }, [
                      _c("h3", [_vm._v(_vm._s(_vm.news.title))]),
                    ]),
                    _vm._v(" "),
                    _c("v-row", {
                      staticStyle: { height: "40px", width: "100%" },
                    }),
                    _vm._v(" "),
                    _c("v-row", [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-between align-items-center",
                          staticStyle: { "margin-top": "-40px" },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center justify-content-center mr-2",
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "primary-color cursor-pointer mr-1 ",
                                  staticStyle: { "font-size": "18px" },
                                },
                                [_vm._v("Улашинг")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-icon",
                                {
                                  staticClass: "mr-1 ",
                                  attrs: { color: "primary" },
                                  model: {
                                    value: _vm.fab,
                                    callback: function ($$v) {
                                      _vm.fab = $$v
                                    },
                                    expression: "fab",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                    mdi-share-variant\n                                "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "text-decoration-none mx-1",
                                  attrs: {
                                    href:
                                      "https://www.facebook.com/sharer/sharer.php?u=" +
                                      _vm.currentUrl,
                                  },
                                },
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticStyle: { "font-size": "28px" },
                                      attrs: { color: "#1b74e4" },
                                    },
                                    [_vm._v("mdi-facebook")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "text-decoration-none d-block mx-1",
                                  staticStyle: {
                                    width: "25px",
                                    height: "25px",
                                  },
                                  attrs: {
                                    href:
                                      "https://t.me/share/url?url=" +
                                      _vm.currentUrl,
                                  },
                                },
                                [
                                  _c("img", {
                                    staticClass: "w-100",
                                    attrs: {
                                      src: "/public/img/icons/telegram_icon.png",
                                    },
                                  }),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "ml-2" },
                            [
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v("mdi-calendar"),
                              ]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.news.created_at) +
                                  "\n                            "
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        domProps: { innerHTML: _vm._s(_vm.news.description) },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "news-content-footer d-flex justify-content-end align-items-center",
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-center align-items-center",
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "text-decoration-none mx-2",
                                  on: {
                                    click: function ($event) {
                                      return _vm.vote(1)
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { color: "primary" } },
                                    [_vm._v("mdi-thumb-up")]
                                  ),
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.news.like) +
                                      "\n                                "
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "text-decoration-none mx-2",
                                  on: {
                                    click: function ($event) {
                                      return _vm.vote(0)
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { color: "primary" } },
                                    [_vm._v("mdi-thumb-down")]
                                  ),
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.news.dislike) +
                                      "\n                                "
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "mx-2" },
                            [
                              _vm._v(
                                "\n                                Кўрилди\n                                "
                              ),
                              _c("v-icon", { attrs: { color: "primary" } }, [
                                _vm._v("mdi-eye-outline"),
                              ]),
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.news.viewed) +
                                  "\n                            "
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "3" } }, [
                _c("div", { staticClass: "left_sidebar_widget" }, [
                  _c("div", { staticClass: "widget_tittle" }, [
                    _c("h3", [_vm._v(_vm._s(_vm.$t("Сўнги янгиликлар")))]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "single_layout-right" },
                    _vm._l(_vm.related_news, function (related_item, index) {
                      return _c(
                        "router-link",
                        {
                          key: related_item.slug + index,
                          staticClass: "news-lenta",
                          attrs: { to: /news/ + related_item.slug },
                        },
                        [
                          _c("div", { staticClass: "news-meta" }, [
                            _c("span", [
                              _vm._v(_vm._s(related_item.created_at)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "news-lenta__title" }, [
                            _vm._v(_vm._s(related_item.title) + " "),
                          ]),
                        ]
                      )
                    }),
                    1
                  ),
                ]),
              ]),
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