"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_News_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/News.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/News.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: 'Сарлавҳа',
        sortable: true,
        value: 'fio',
        align: 'start'
      }, {
        text: 'Урл адреси',
        sortable: true,
        value: 'appeal_type'
      }, {
        text: 'Категорияси',
        sortable: true,
        value: 'category'
      }, {
        text: 'Тексти',
        sortable: true,
        value: 'address'
      }, {
        text: 'Амаллар',
        value: 'actions',
        sortable: false
      }],
      news: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        title: '',
        slug: 0,
        category: 0,
        description: ''
      },
      defaultItem: {
        id: null,
        title: '',
        slug: 0,
        category: 0,
        description: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Янги' : 'Тахрирлаш';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].readnews().then(function (response) {
        _this.news = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.news.indexOf(item);
      this.editedItem = Object.assign({}, {
        'id': item
      });
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.news.indexOf(item);
      this.editedItem = Object.assign({}, {
        'id': item
      });
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this2 = this;

      //this.appeals.splice(this.editedIndex, 1)
      _src_services_apiService__WEBPACK_IMPORTED_MODULE_0__["default"].deleteNews(this.editedItem.id).then(function (response) {
        if (response.status == 200) {
          _this2.initialize();

          var index = _this2.news.findIndex(function (item) {
            return item.id === _this2.editedItem.id;
          }); // find the post index


          if (~index) // if the post exists in array
            _this2.news.splice(index, 1); //delete the post
        }
      })["catch"](function (error) {
        console.log(error);
      });
      this.closeDelete();
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
    },
    save: function save() {
      if (this.editedIndex > -1) {
        Object.assign(this.news[this.editedIndex], this.editedItem);
      } else {
        this.news.push(this.editedItem);
      }

      this.close();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/dashboard/News.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/dashboard/News.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _News_vue_vue_type_template_id_1ddd314d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./News.vue?vue&type=template&id=1ddd314d& */ "./resources/js/views/dashboard/News.vue?vue&type=template&id=1ddd314d&");
/* harmony import */ var _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/News.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _News_vue_vue_type_template_id_1ddd314d___WEBPACK_IMPORTED_MODULE_0__.render,
  _News_vue_vue_type_template_id_1ddd314d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/News.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/News.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/dashboard/News.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./News.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/News.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/News.vue?vue&type=template&id=1ddd314d&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/dashboard/News.vue?vue&type=template&id=1ddd314d& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_1ddd314d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_1ddd314d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_News_vue_vue_type_template_id_1ddd314d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./News.vue?vue&type=template&id=1ddd314d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/News.vue?vue&type=template&id=1ddd314d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/News.vue?vue&type=template&id=1ddd314d&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/News.vue?vue&type=template&id=1ddd314d& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { id: "service-appeal", fluid: "", tag: "section" } },
    [
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
                          items: _vm.appeals,
                          "footer-props": {
                            "items-per-page-text": "Сахифадаги элементлар сони"
                          }
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: { "max-width": "500px" },
                                    model: {
                                      value: _vm.dialog,
                                      callback: function($$v) {
                                        _vm.dialog = $$v
                                      },
                                      expression: "dialog"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-card-title", [
                                          _c(
                                            "span",
                                            { staticClass: "text-h5" },
                                            [_vm._v(_vm._s(_vm.formTitle))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-container",
                                              [
                                                _c(
                                                  "v-row",
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label:
                                                              "Ф.И.О. / Ташкилот"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .fio,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "fio",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.fio"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label:
                                                              "Мурожаат тури"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .appeal_type,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "appeal_type",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.appeal_type"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: "Адрес"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .address,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "address",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.address"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: "Email"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .email,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "email",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.email"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "6",
                                                          md: "4"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: "Телефон"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .phone,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "phone",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.phone"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
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
                                                  text: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.Ёпиш
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            Cancel\n                                        "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: ""
                                                },
                                                on: { click: _vm.save }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            Сақлаш\n                                        "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: { "max-width": "500px" },
                                    model: {
                                      value: _vm.dialogDelete,
                                      callback: function($$v) {
                                        _vm.dialogDelete = $$v
                                      },
                                      expression: "dialogDelete"
                                    }
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
                                              "Сиз хақиқатдан ҳам ўчирмоқчимисиз?"
                                            )
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
                                                  text: ""
                                                },
                                                on: { click: _vm.closeDelete }
                                              },
                                              [_vm._v("Ёпиш")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: ""
                                                },
                                                on: {
                                                  click: _vm.deleteItemConfirm
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "Тасдиқлайман\n                                        "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("v-spacer")
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteItem(item.id)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                mdi-delete\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "no-data",
                            fn: function() {
                              return [
                                _c("h3", [_vm._v("Маълумотлар топилмади")]),
                                _c("br"),
                                _vm._v(" "),
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary" },
                                    on: { click: _vm.initialize }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Янгилаш\n                            "
                                    )
                                  ]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);