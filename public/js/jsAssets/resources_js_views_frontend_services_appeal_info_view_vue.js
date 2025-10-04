(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_frontend_services_appeal_info_view_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _chenfengyuan_vue_qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chenfengyuan/vue-qrcode */ "./node_modules/@chenfengyuan/vue-qrcode/dist/vue-qrcode.js");
/* harmony import */ var _chenfengyuan_vue_qrcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_qrcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2pdf.js */ "./node_modules/html2pdf.js/dist/html2pdf.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../i18n */ "./resources/js/i18n.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      breadcrumb_items: [{
        text: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Асосий саҳифа'),
        to: '/',
        disabled: false,
        exact: true
      }, {
        text: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t('Менинг аризаларим'),
        to: '/applications',
        disabled: false,
        exact: true
      }],
      baseURL: window.location.href,
      appeal: [],
      tab: null,
      panel: 0,
      t_app: [],
      fileAnswer: null,
      fileQuestion: null,
      oferta: false,
      showed: false,
      dialog: false,
      // dialogResult: false,
      items: [{
        tab: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t("Аризачи умумий маълумотлари")
      }, {
        tab: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t("Ариза ҳолати")
      }],
      showPdf: false
    };
  },
  mounted: function mounted() {
    if (typeof this.$route.params.key != 'undefined' && this.$route.params.key.length > 0) {
      this.getAppData(this.$route.params.key);
    } else if (!this.$auth.user()) {
      this.$toast.success(_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t("Авторизациядан ўтишингиз талаб қилинади!"));
      this.$router.push('/login');
    } else this.getAppData();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)(['loading'])),
  methods: {
    getAppData: function getAppData() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var key, _this, params;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
                _this = _this2;
                params = null;

                if (!_this.$route.query.appNum) {
                  if (key && key.length > 0) params = {
                    appNum: _this.$route.params.id,
                    password: key
                  };else params = {
                    appNum: _this.$route.params.id
                  };
                } else {
                  params = {
                    appNum: _this.$route.query.appNum
                  };
                }

                _this2.$store.commit('setLoading', true);

                _context.next = 7;
                return axios.get("/api/v1/ex_api/appeal-check", {
                  params: params
                }).then(function (response) {
                  if (typeof response.data.data !== "undefined") {
                    if (typeof response.data.data.file != 'undefined' && typeof response.data.data.file[0] !== 'undefined' && response.data.data.file[0] !== null) {
                      _this.fileAnswer = response.data.data.file;
                    }

                    if (typeof response.data.data.fileQuestion != 'undefined' && response.data.data.fileQuestion != null && typeof response.data.data.fileQuestion['fileName'] !== 'undefined') {
                      _this.fileQuestion = response.data.data.fileQuestion;
                    }

                    if (typeof response.data.data.fileAnswer != 'undefined' && response.data.data.fileAnswer != null && typeof response.data.data.fileAnswer[0] !== 'undefined' && response.data.data.fileAnswer[0] !== null) {
                      _this.fileAnswer = response.data.data.fileAnswer;
                    }

                    _this.t_app = response.data.data.appeal;
                    _this.appeal = response.data.data.appeal;

                    if (typeof _this.$route.params.key != 'undefined') {
                      //_this.dialogResult = true;
                      _this.appeal.appNum = _this.$route.params.id;
                      _this.appeal.password = _this.$route.params.key;
                      _this.appeal.insTime = typeof response.data.data.appeal.insTime != 'undefined' ? response.data.data.appeal.insTime : null;
                      _this.appeal.firstName = typeof response.data.data.appeal.firstName != 'undefined' ? response.data.data.appeal.firstName : null;
                      _this.appeal.surName = typeof response.data.data.appeal.surName != 'undefined' ? response.data.data.appeal.surName : null;
                      _this.appeal.lastName = typeof response.data.data.appeal.lastName != 'undefined' ? response.data.data.appeal.lastName : null;
                      _this.appeal.address = typeof response.data.data.appeal.address != 'undefined' ? response.data.data.appeal.address : null;
                      _this.appeal.birthDate = typeof response.data.data.appeal.birthDate != 'undefined' ? response.data.data.appeal.birthDate : null;
                      _this.appeal.position = typeof response.data.data.appeal.position != 'undefined' ? response.data.data.appeal.position : null;
                      _this.appeal.positionNm = typeof response.data.data.appeal.positionNm != 'undefined' ? response.data.data.appeal.positionNm : null;
                      _this.appeal.phoneNumber = typeof response.data.data.appeal.phoneNumber != 'undefined' ? response.data.data.appeal.phoneNumber : null;
                      _this.appeal.email = typeof response.data.data.appeal.email != 'undefined' ? response.data.data.appeal.email : null;
                      _this.appeal.profession = typeof response.data.data.appeal.profession != 'undefined' ? response.data.data.appeal.profession : null;
                      _this.appeal.messageBody = typeof response.data.data.appeal.messageBody != 'undefined' ? response.data.data.appeal.messageBody : null;
                      _this.appeal.locationNm = typeof response.data.data.appeal.locationNm != 'undefined' ? response.data.data.appeal.locationNm : null;
                      _this.appeal.status = typeof response.data.data.appeal.status != 'undefined' ? response.data.data.appeal.status : null;
                      _this.appeal.statusNm = typeof response.data.data.appeal.statusNm != 'undefined' ? response.data.data.appeal.statusNm : null;
                      _this.appeal.appealAnswer = typeof response.data.data.appealAnswer != 'undefined' ? response.data.data.appealAnswer : null;
                      _this.appeal.fileAnswer = typeof response.data.data.fileAnswer != 'undefined' ? response.data.data.fileAnswer : null;
                      _this.appeal.fileQuestion = typeof response.data.data.fileQuestion != 'undefined' ? response.data.data.fileQuestion : null; //_this.generateReport()
                    }

                    _this.breadcrumb_items.push({
                      text: _i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t("Мурожаат -") + _this.t_app.appNum,
                      to: '/services/appeals/' + _this.t_app.appNum,
                      disabled: true,
                      exact: true
                    });

                    setTimeout(function () {
                      _this.$store.commit('setLoading', false);
                    }, 1000);
                  } else {
                    _this.$store.commit('setLoading', false);

                    _this.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t("Маълумот топилмади!"));

                    _this.$router.push("/applications");
                  }
                })["catch"](function (error) {
                  if (error) {
                    console.log(error);

                    _this.$store.commit('setLoading', false);

                    _this.$toast.error(_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].t("Маълумот топилмади!") + '.');

                    _this.$router.push("/applications");
                  }
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    generateReport: function generateReport() {
      var _this3 = this;

      setTimeout(function () {
        /*                this.showPdf=true;
                        html2pdf(this.$refs.html2Pdfaa, {
                            margin: 1,
                            filename: "murojaat.pdf",
                            //image: { type: "jpeg", quality: 0.98 },
                            html2canvas: { dpi: 192, letterRendering: true },
                            jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
                        });*/
        //this.showPdf=false;
        _this3.$refs.html2Pdfaa.generatePdf();
      }, 100); //this.$refs['html2Pdf'][0].generatePdf()
    }
  },
  components: {
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_2__["default"],
    Qrcode: (_chenfengyuan_vue_qrcode__WEBPACK_IMPORTED_MODULE_1___default())
  }
});

/***/ }),

/***/ "./node_modules/html2pdf.js/dist/html2pdf.js":
/*!***************************************************!*\
  !*** ./node_modules/html2pdf.js/dist/html2pdf.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * html2pdf.js v0.9.1
 * Copyright (c) 2018 Erik Koopmans
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(/*! es6-promise/auto */ "./node_modules/es6-promise/auto.js"), __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js"), __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js")) :
	0;
}(this, (function (auto,jsPDF,html2canvas) { 'use strict';

jsPDF = jsPDF && jsPDF.hasOwnProperty('default') ? jsPDF['default'] : jsPDF;
html2canvas = html2canvas && html2canvas.hasOwnProperty('default') ? html2canvas['default'] : html2canvas;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

// Determine the type of a variable/object.
var objType = function objType(obj) {
  var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  if (type === 'undefined') return 'undefined';else if (type === 'string' || obj instanceof String) return 'string';else if (type === 'number' || obj instanceof Number) return 'number';else if (type === 'function' || obj instanceof Function) return 'function';else if (!!obj && obj.constructor === Array) return 'array';else if (obj && obj.nodeType === 1) return 'element';else if (type === 'object') return 'object';else return 'unknown';
};

// Create an HTML element with optional className, innerHTML, and style.
var createElement = function createElement(tagName, opt) {
  var el = document.createElement(tagName);
  if (opt.className) el.className = opt.className;
  if (opt.innerHTML) {
    el.innerHTML = opt.innerHTML;
    var scripts = el.getElementsByTagName('script');
    for (var i = scripts.length; i-- > 0; null) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
  }
  for (var key in opt.style) {
    el.style[key] = opt.style[key];
  }
  return el;
};

// Deep-clone a node and preserve contents/properties.
var cloneNode = function cloneNode(node, javascriptEnabled) {
  // Recursively clone the node.
  var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);
  for (var child = node.firstChild; child; child = child.nextSibling) {
    if (javascriptEnabled === true || child.nodeType !== 1 || child.nodeName !== 'SCRIPT') {
      clone.appendChild(cloneNode(child, javascriptEnabled));
    }
  }

  if (node.nodeType === 1) {
    // Preserve contents/properties of special nodes.
    if (node.nodeName === 'CANVAS') {
      clone.width = node.width;
      clone.height = node.height;
      clone.getContext('2d').drawImage(node, 0, 0);
    } else if (node.nodeName === 'TEXTAREA' || node.nodeName === 'SELECT') {
      clone.value = node.value;
    }

    // Preserve the node's scroll position when it loads.
    clone.addEventListener('load', function () {
      clone.scrollTop = node.scrollTop;
      clone.scrollLeft = node.scrollLeft;
    }, true);
  }

  // Return the cloned node.
  return clone;
};

// Convert units from px using the conversion value 'k' from jsPDF.
var unitConvert = function unitConvert(obj, k) {
  if (objType(obj) === 'number') {
    return obj * 72 / 96 / k;
  } else {
    var newObj = {};
    for (var key in obj) {
      newObj[key] = obj[key] * 72 / 96 / k;
    }
    return newObj;
  }
};

// Convert units to px using the conversion value 'k' from jsPDF.
var toPx = function toPx(val, k) {
  return Math.floor(val * k / 72 * 96);
};

/* ----- CONSTRUCTOR ----- */

var Worker = function Worker(opt) {
  // Create the root parent for the proto chain, and the starting Worker.
  var root = _extends(Worker.convert(Promise.resolve()), JSON.parse(JSON.stringify(Worker.template)));
  var self = Worker.convert(Promise.resolve(), root);

  // Set progress, optional settings, and return.
  self = self.setProgress(1, Worker, 1, [Worker]);
  self = self.set(opt);
  return self;
};

// Boilerplate for subclassing Promise.
Worker.prototype = Object.create(Promise.prototype);
Worker.prototype.constructor = Worker;

// Converts/casts promises into Workers.
Worker.convert = function convert(promise, inherit) {
  // Uses prototypal inheritance to receive changes made to ancestors' properties.
  promise.__proto__ = inherit || Worker.prototype;
  return promise;
};

Worker.template = {
  prop: {
    src: null,
    container: null,
    overlay: null,
    canvas: null,
    img: null,
    pdf: null,
    pageSize: null
  },
  progress: {
    val: 0,
    state: null,
    n: 0,
    stack: []
  },
  opt: {
    filename: 'file.pdf',
    margin: [0, 0, 0, 0],
    image: { type: 'jpeg', quality: 0.95 },
    enableLinks: true,
    html2canvas: {},
    jsPDF: {}
  }
};

/* ----- FROM / TO ----- */

Worker.prototype.from = function from(src, type) {
  function getType(src) {
    switch (objType(src)) {
      case 'string':
        return 'string';
      case 'element':
        return src.nodeName.toLowerCase === 'canvas' ? 'canvas' : 'element';
      default:
        return 'unknown';
    }
  }

  return this.then(function from_main() {
    type = type || getType(src);
    switch (type) {
      case 'string':
        return this.set({ src: createElement('div', { innerHTML: src }) });
      case 'element':
        return this.set({ src: src });
      case 'canvas':
        return this.set({ canvas: src });
      case 'img':
        return this.set({ img: src });
      default:
        return this.error('Unknown source type.');
    }
  });
};

Worker.prototype.to = function to(target) {
  // Route the 'to' request to the appropriate method.
  switch (target) {
    case 'container':
      return this.toContainer();
    case 'canvas':
      return this.toCanvas();
    case 'img':
      return this.toImg();
    case 'pdf':
      return this.toPdf();
    default:
      return this.error('Invalid target.');
  }
};

Worker.prototype.toContainer = function toContainer() {
  // Set up function prerequisites.
  var prereqs = [function checkSrc() {
    return this.prop.src || this.error('Cannot duplicate - no source HTML.');
  }, function checkPageSize() {
    return this.prop.pageSize || this.setPageSize();
  }];

  return this.thenList(prereqs).then(function toContainer_main() {
    // Define the CSS styles for the container and its overlay parent.
    var overlayCSS = {
      position: 'fixed', overflow: 'hidden', zIndex: 1000,
      left: 0, right: 0, bottom: 0, top: 0,
      backgroundColor: 'rgba(0,0,0,0.8)'
    };
    var containerCSS = {
      position: 'absolute', width: this.prop.pageSize.inner.width + this.prop.pageSize.unit,
      left: 0, right: 0, top: 0, height: 'auto', margin: 'auto',
      backgroundColor: 'white'
    };

    // Set the overlay to hidden (could be changed in the future to provide a print preview).
    overlayCSS.opacity = 0;

    // Create and attach the elements.
    var source = cloneNode(this.prop.src, this.opt.html2canvas.javascriptEnabled);
    this.prop.overlay = createElement('div', { className: 'html2pdf__overlay', style: overlayCSS });
    this.prop.container = createElement('div', { className: 'html2pdf__container', style: containerCSS });
    this.prop.container.appendChild(source);
    this.prop.overlay.appendChild(this.prop.container);
    document.body.appendChild(this.prop.overlay);
  });
};

Worker.prototype.toCanvas = function toCanvas() {
  // Set up function prerequisites.
  var prereqs = [function checkContainer() {
    return document.body.contains(this.prop.container) || this.toContainer();
  }];

  // Fulfill prereqs then create the canvas.
  return this.thenList(prereqs).then(function toCanvas_main() {
    // Handle old-fashioned 'onrendered' argument.
    var options = _extends({}, this.opt.html2canvas);
    delete options.onrendered;

    return html2canvas(this.prop.container, options);
  }).then(function toCanvas_post(canvas) {
    // Handle old-fashioned 'onrendered' argument.
    var onRendered = this.opt.html2canvas.onrendered || function () {};
    onRendered(canvas);

    this.prop.canvas = canvas;
    document.body.removeChild(this.prop.overlay);
  });
};

Worker.prototype.toImg = function toImg() {
  // Set up function prerequisites.
  var prereqs = [function checkCanvas() {
    return this.prop.canvas || this.toCanvas();
  }];

  // Fulfill prereqs then create the image.
  return this.thenList(prereqs).then(function toImg_main() {
    var imgData = this.prop.canvas.toDataURL('image/' + this.opt.image.type, this.opt.image.quality);
    this.prop.img = document.createElement('img');
    this.prop.img.src = imgData;
  });
};

Worker.prototype.toPdf = function toPdf() {
  // Set up function prerequisites.
  var prereqs = [function checkCanvas() {
    return this.prop.canvas || this.toCanvas();
  }];

  // Fulfill prereqs then create the image.
  return this.thenList(prereqs).then(function toPdf_main() {
    // Create local copies of frequently used properties.
    var canvas = this.prop.canvas;
    var opt = this.opt;

    // Calculate the number of pages.
    var ctx = canvas.getContext('2d');
    var pxFullHeight = canvas.height;
    var pxPageHeight = Math.floor(canvas.width * this.prop.pageSize.inner.ratio);
    var nPages = Math.ceil(pxFullHeight / pxPageHeight);

    // Define pageHeight separately so it can be trimmed on the final page.
    var pageHeight = this.prop.pageSize.inner.height;

    // Create a one-page canvas to split up the full image.
    var pageCanvas = document.createElement('canvas');
    var pageCtx = pageCanvas.getContext('2d');
    pageCanvas.width = canvas.width;
    pageCanvas.height = pxPageHeight;

    // Initialize the PDF.
    this.prop.pdf = this.prop.pdf || new jsPDF(opt.jsPDF);

    for (var page = 0; page < nPages; page++) {
      // Trim the final page to reduce file size.
      if (page === nPages - 1) {
        pageCanvas.height = pxFullHeight % pxPageHeight;
        pageHeight = pageCanvas.height * this.prop.pageSize.inner.width / pageCanvas.width;
      }

      // Display the page.
      var w = pageCanvas.width;
      var h = pageCanvas.height;
      pageCtx.fillStyle = 'white';
      pageCtx.fillRect(0, 0, w, h);
      pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);

      // Add the page to the PDF.
      if (page) this.prop.pdf.addPage();
      var imgData = pageCanvas.toDataURL('image/' + opt.image.type, opt.image.quality);
      this.prop.pdf.addImage(imgData, opt.image.type, opt.margin[1], opt.margin[0], this.prop.pageSize.inner.width, pageHeight);
    }
  });
};

/* ----- OUTPUT / SAVE ----- */

Worker.prototype.output = function output(type, options, src) {
  // Redirect requests to the correct function (outputPdf / outputImg).
  src = src || 'pdf';
  if (src.toLowerCase() === 'img' || src.toLowerCase() === 'image') {
    return this.outputImg(type, options);
  } else {
    return this.outputPdf(type, options);
  }
};

Worker.prototype.outputPdf = function outputPdf(type, options) {
  // Set up function prerequisites.
  var prereqs = [function checkPdf() {
    return this.prop.pdf || this.toPdf();
  }];

  // Fulfill prereqs then perform the appropriate output.
  return this.thenList(prereqs).then(function outputPdf_main() {
    /* Currently implemented output types:
     *    https://rawgit.com/MrRio/jsPDF/master/docs/jspdf.js.html#line992
     *  save(options), arraybuffer, blob, bloburi/bloburl,
     *  datauristring/dataurlstring, dataurlnewwindow, datauri/dataurl
     */
    return this.prop.pdf.output(type, options);
  });
};

Worker.prototype.outputImg = function outputImg(type, options) {
  // Set up function prerequisites.
  var prereqs = [function checkImg() {
    return this.prop.img || this.toImg();
  }];

  // Fulfill prereqs then perform the appropriate output.
  return this.thenList(prereqs).then(function outputImg_main() {
    switch (type) {
      case undefined:
      case 'img':
        return this.prop.img;
      case 'datauristring':
      case 'dataurlstring':
        return this.prop.img.src;
      case 'datauri':
      case 'dataurl':
        return document.location.href = this.prop.img.src;
      default:
        throw 'Image output type "' + type + '" is not supported.';
    }
  });
};

Worker.prototype.save = function save(filename) {
  // Set up function prerequisites.
  var prereqs = [function checkPdf() {
    return this.prop.pdf || this.toPdf();
  }];

  // Fulfill prereqs, update the filename (if provided), and save the PDF.
  return this.thenList(prereqs).set(filename ? { filename: filename } : null).then(function save_main() {
    this.prop.pdf.save(this.opt.filename);
  });
};

/* ----- SET / GET ----- */

Worker.prototype.set = function set$$1(opt) {
  // TODO: Implement ordered pairs?

  // Silently ignore invalid or empty input.
  if (objType(opt) !== 'object') {
    return this;
  }

  // Build an array of setter functions to queue.
  var fns = Object.keys(opt || {}).map(function (key) {
    if (key in Worker.template.prop) {
      // Set pre-defined properties.
      return function set_prop() {
        this.prop[key] = opt[key];
      };
    } else {
      switch (key) {
        case 'margin':
          return this.setMargin.bind(this, opt.margin);
        case 'jsPDF':
          return function set_jsPDF() {
            this.opt.jsPDF = opt.jsPDF;return this.setPageSize();
          };
        case 'pageSize':
          return this.setPageSize.bind(this, opt.pageSize);
        default:
          // Set any other properties in opt.
          return function set_opt() {
            this.opt[key] = opt[key];
          };
      }
    }
  }, this);

  // Set properties within the promise chain.
  return this.then(function set_main() {
    return this.thenList(fns);
  });
};

Worker.prototype.get = function get$$1(key, cbk) {
  return this.then(function get_main() {
    // Fetch the requested property, either as a predefined prop or in opt.
    var val = key in Worker.template.prop ? this.prop[key] : this.opt[key];
    return cbk ? cbk(val) : val;
  });
};

Worker.prototype.setMargin = function setMargin(margin) {
  return this.then(function setMargin_main() {
    // Parse the margin property: [top, left, bottom, right].
    switch (objType(margin)) {
      case 'number':
        margin = [margin, margin, margin, margin];
      case 'array':
        if (margin.length === 2) {
          margin = [margin[0], margin[1], margin[0], margin[1]];
        }
        if (margin.length === 4) {
          break;
        }
      default:
        return this.error('Invalid margin array.');
    }

    // Set the margin property, then update pageSize.
    this.opt.margin = margin;
  }).then(this.setPageSize);
};

Worker.prototype.setPageSize = function setPageSize(pageSize) {
  return this.then(function setPageSize_main() {
    // Retrieve page-size based on jsPDF settings, if not explicitly provided.
    pageSize = pageSize || jsPDF.getPageSize(this.opt.jsPDF);

    // Add 'inner' field if not present.
    if (!pageSize.hasOwnProperty('inner')) {
      pageSize.inner = {
        width: pageSize.width - this.opt.margin[1] - this.opt.margin[3],
        height: pageSize.height - this.opt.margin[0] - this.opt.margin[2]
      };
      pageSize.inner.px = {
        width: toPx(pageSize.inner.width, pageSize.k),
        height: toPx(pageSize.inner.height, pageSize.k)
      };
      pageSize.inner.ratio = pageSize.inner.height / pageSize.inner.width;
    }

    // Attach pageSize to this.
    this.prop.pageSize = pageSize;
  });
};

Worker.prototype.setProgress = function setProgress(val, state, n, stack) {
  // Immediately update all progress values.
  if (val != null) this.progress.val = val;
  if (state != null) this.progress.state = state;
  if (n != null) this.progress.n = n;
  if (stack != null) this.progress.stack = stack;
  this.progress.ratio = this.progress.val / this.progress.state;

  // Return this for command chaining.
  return this;
};

Worker.prototype.updateProgress = function updateProgress(val, state, n, stack) {
  // Immediately update all progress values, using setProgress.
  return this.setProgress(val ? this.progress.val + val : null, state ? state : null, n ? this.progress.n + n : null, stack ? this.progress.stack.concat(stack) : null);
};

/* ----- PROMISE MAPPING ----- */

Worker.prototype.then = function then(onFulfilled, onRejected) {
  // Wrap `this` for encapsulation.
  var self = this;

  return this.thenCore(onFulfilled, onRejected, function then_main(onFulfilled, onRejected) {
    // Update progress while queuing, calling, and resolving `then`.
    self.updateProgress(null, null, 1, [onFulfilled]);
    return Promise.prototype.then.call(this, function then_pre(val) {
      self.updateProgress(null, onFulfilled);
      return val;
    }).then(onFulfilled, onRejected).then(function then_post(val) {
      self.updateProgress(1);
      return val;
    });
  });
};

Worker.prototype.thenCore = function thenCore(onFulfilled, onRejected, thenBase) {
  // Handle optional thenBase parameter.
  thenBase = thenBase || Promise.prototype.then;

  // Wrap `this` for encapsulation and bind it to the promise handlers.
  var self = this;
  if (onFulfilled) {
    onFulfilled = onFulfilled.bind(self);
  }
  if (onRejected) {
    onRejected = onRejected.bind(self);
  }

  // Cast self into a Promise to avoid polyfills recursively defining `then`.
  var isNative = Promise.toString().indexOf('[native code]') !== -1 && Promise.name === 'Promise';
  var selfPromise = isNative ? self : Worker.convert(_extends({}, self), Promise.prototype);

  // Return the promise, after casting it into a Worker and preserving props.
  var returnVal = thenBase.call(selfPromise, onFulfilled, onRejected);
  return Worker.convert(returnVal, self.__proto__);
};

Worker.prototype.thenExternal = function thenExternal(onFulfilled, onRejected) {
  // Call `then` and return a standard promise (exits the Worker chain).
  return Promise.prototype.then.call(this, onFulfilled, onRejected);
};

Worker.prototype.thenList = function thenList(fns) {
  // Queue a series of promise 'factories' into the promise chain.
  var self = this;
  fns.forEach(function thenList_forEach(fn) {
    self = self.thenCore(fn);
  });
  return self;
};

Worker.prototype['catch'] = function (onRejected) {
  // Bind `this` to the promise handler, call `catch`, and return a Worker.
  if (onRejected) {
    onRejected = onRejected.bind(this);
  }
  var returnVal = Promise.prototype['catch'].call(this, onRejected);
  return Worker.convert(returnVal, this);
};

Worker.prototype.catchExternal = function catchExternal(onRejected) {
  // Call `catch` and return a standard promise (exits the Worker chain).
  return Promise.prototype['catch'].call(this, onRejected);
};

Worker.prototype.error = function error(msg) {
  // Throw the error in the Promise chain.
  return this.then(function error_main() {
    throw new Error(msg);
  });
};

/* ----- ALIASES ----- */

Worker.prototype.using = Worker.prototype.set;
Worker.prototype.saveAs = Worker.prototype.save;
Worker.prototype.export = Worker.prototype.output;
Worker.prototype.run = Worker.prototype.then;

// Import dependencies.
// Get dimensions of a PDF page, as determined by jsPDF.
jsPDF.getPageSize = function (orientation, unit, format) {
  // Decode options object
  if ((typeof orientation === 'undefined' ? 'undefined' : _typeof(orientation)) === 'object') {
    var options = orientation;
    orientation = options.orientation;
    unit = options.unit || unit;
    format = options.format || format;
  }

  // Default options
  unit = unit || 'mm';
  format = format || 'a4';
  orientation = ('' + (orientation || 'P')).toLowerCase();
  var format_as_string = ('' + format).toLowerCase();

  // Size in pt of various paper formats
  var pageFormats = {
    'a0': [2383.94, 3370.39], 'a1': [1683.78, 2383.94],
    'a2': [1190.55, 1683.78], 'a3': [841.89, 1190.55],
    'a4': [595.28, 841.89], 'a5': [419.53, 595.28],
    'a6': [297.64, 419.53], 'a7': [209.76, 297.64],
    'a8': [147.40, 209.76], 'a9': [104.88, 147.40],
    'a10': [73.70, 104.88], 'b0': [2834.65, 4008.19],
    'b1': [2004.09, 2834.65], 'b2': [1417.32, 2004.09],
    'b3': [1000.63, 1417.32], 'b4': [708.66, 1000.63],
    'b5': [498.90, 708.66], 'b6': [354.33, 498.90],
    'b7': [249.45, 354.33], 'b8': [175.75, 249.45],
    'b9': [124.72, 175.75], 'b10': [87.87, 124.72],
    'c0': [2599.37, 3676.54], 'c1': [1836.85, 2599.37],
    'c2': [1298.27, 1836.85], 'c3': [918.43, 1298.27],
    'c4': [649.13, 918.43], 'c5': [459.21, 649.13],
    'c6': [323.15, 459.21], 'c7': [229.61, 323.15],
    'c8': [161.57, 229.61], 'c9': [113.39, 161.57],
    'c10': [79.37, 113.39], 'dl': [311.81, 623.62],
    'letter': [612, 792],
    'government-letter': [576, 756],
    'legal': [612, 1008],
    'junior-legal': [576, 360],
    'ledger': [1224, 792],
    'tabloid': [792, 1224],
    'credit-card': [153, 243]
  };

  // Unit conversion
  switch (unit) {
    case 'pt':
      var k = 1;break;
    case 'mm':
      var k = 72 / 25.4;break;
    case 'cm':
      var k = 72 / 2.54;break;
    case 'in':
      var k = 72;break;
    case 'px':
      var k = 72 / 96;break;
    case 'pc':
      var k = 12;break;
    case 'em':
      var k = 12;break;
    case 'ex':
      var k = 6;break;
    default:
      throw 'Invalid unit: ' + unit;
  }

  // Dimensions are stored as user units and converted to points on output
  if (pageFormats.hasOwnProperty(format_as_string)) {
    var pageHeight = pageFormats[format_as_string][1] / k;
    var pageWidth = pageFormats[format_as_string][0] / k;
  } else {
    try {
      var pageHeight = format[1];
      var pageWidth = format[0];
    } catch (err) {
      throw new Error('Invalid format: ' + format);
    }
  }

  // Handle page orientation
  if (orientation === 'p' || orientation === 'portrait') {
    orientation = 'p';
    if (pageWidth > pageHeight) {
      var tmp = pageWidth;
      pageWidth = pageHeight;
      pageHeight = tmp;
    }
  } else if (orientation === 'l' || orientation === 'landscape') {
    orientation = 'l';
    if (pageHeight > pageWidth) {
      var tmp = pageWidth;
      pageWidth = pageHeight;
      pageHeight = tmp;
    }
  } else {
    throw 'Invalid orientation: ' + orientation;
  }

  // Return information (k is the unit conversion ratio from pts)
  var info = { 'width': pageWidth, 'height': pageHeight, 'unit': unit, 'k': k };
  return info;
};

/* Pagebreak plugin:

    Adds page-break functionality to the html2pdf library. Page-breaks can be
    enabled by CSS styles, set on individual elements using selectors, or
    avoided from breaking inside all elements.

    Options on the `opt.pagebreak` object:

    mode:   String or array of strings: 'avoid-all', 'css', and/or 'legacy'
            Default: ['css', 'legacy']

    before: String or array of CSS selectors for which to add page-breaks
            before each element. Can be a specific element with an ID
            ('#myID'), all elements of a type (e.g. 'img'), all of a class
            ('.myClass'), or even '*' to match every element.

    after:  Like 'before', but adds a page-break immediately after the element.

    avoid:  Like 'before', but avoids page-breaks on these elements. You can
            enable this feature on every element using the 'avoid-all' mode.
*/

// Refs to original functions.
var orig = {
  toContainer: Worker.prototype.toContainer
};

// Add pagebreak default options to the Worker template.
Worker.template.opt.pagebreak = {
  mode: ['css', 'legacy'],
  before: [],
  after: [],
  avoid: []
};

Worker.prototype.toContainer = function toContainer() {
  return orig.toContainer.call(this).then(function toContainer_pagebreak() {
    // Setup root element and inner page height.
    var root = this.prop.container;
    var pxPageHeight = this.prop.pageSize.inner.px.height;

    // Check all requested modes.
    var modeSrc = [].concat(this.opt.pagebreak.mode);
    var mode = {
      avoidAll: modeSrc.indexOf('avoid-all') !== -1,
      css: modeSrc.indexOf('css') !== -1,
      legacy: modeSrc.indexOf('legacy') !== -1
    };

    // Get arrays of all explicitly requested elements.
    var select = {};
    var self = this;
    ['before', 'after', 'avoid'].forEach(function (key) {
      var all = mode.avoidAll && key === 'avoid';
      select[key] = all ? [] : [].concat(self.opt.pagebreak[key] || []);
      if (select[key].length > 0) {
        select[key] = Array.prototype.slice.call(root.querySelectorAll(select[key].join(', ')));
      }
    });

    // Get all legacy page-break elements.
    var legacyEls = root.querySelectorAll('.html2pdf__page-break');
    legacyEls = Array.prototype.slice.call(legacyEls);

    // Loop through all elements.
    var els = root.querySelectorAll('*');
    Array.prototype.forEach.call(els, function pagebreak_loop(el) {
      // Setup pagebreak rules based on legacy and avoidAll modes.
      var rules = {
        before: false,
        after: mode.legacy && legacyEls.indexOf(el) !== -1,
        avoid: mode.avoidAll
      };

      // Add rules for css mode.
      if (mode.css) {
        // TODO: Check if this is valid with iFrames.
        var style = window.getComputedStyle(el);
        // TODO: Handle 'left' and 'right' correctly.
        // TODO: Add support for 'avoid' on breakBefore/After.
        var breakOpt = ['always', 'page', 'left', 'right'];
        var avoidOpt = ['avoid', 'avoid-page'];
        rules = {
          before: rules.before || breakOpt.indexOf(style.breakBefore || style.pageBreakBefore) !== -1,
          after: rules.after || breakOpt.indexOf(style.breakAfter || style.pageBreakAfter) !== -1,
          avoid: rules.avoid || avoidOpt.indexOf(style.breakInside || style.pageBreakInside) !== -1
        };
      }

      // Add rules for explicit requests.
      Object.keys(rules).forEach(function (key) {
        rules[key] = rules[key] || select[key].indexOf(el) !== -1;
      });

      // Get element position on the screen.
      // TODO: Subtract the top of the container from clientRect.top/bottom?
      var clientRect = el.getBoundingClientRect();

      // Avoid: Check if a break happens mid-element.
      if (rules.avoid && !rules.before) {
        var startPage = Math.floor(clientRect.top / pxPageHeight);
        var endPage = Math.floor(clientRect.bottom / pxPageHeight);
        var nPages = Math.abs(clientRect.bottom - clientRect.top) / pxPageHeight;

        // Turn on rules.before if the el is broken and is at most one page long.
        if (endPage !== startPage && nPages <= 1) {
          rules.before = true;
        }
      }

      // Before: Create a padding div to push the element to the next page.
      if (rules.before) {
        var pad = createElement('div', { style: {
            display: 'block',
            height: pxPageHeight - clientRect.top % pxPageHeight + 'px'
          } });
        el.parentNode.insertBefore(pad, el);
      }

      // After: Create a padding div to fill the remaining page.
      if (rules.after) {
        var pad = createElement('div', { style: {
            display: 'block',
            height: pxPageHeight - clientRect.bottom % pxPageHeight + 'px'
          } });
        el.parentNode.insertBefore(pad, el.nextSibling);
      }
    });
  });
};

// Add hyperlink functionality to the PDF creation.

// Main link array, and refs to original functions.
var linkInfo = [];
var orig$1 = {
  toContainer: Worker.prototype.toContainer,
  toPdf: Worker.prototype.toPdf
};

Worker.prototype.toContainer = function toContainer() {
  return orig$1.toContainer.call(this).then(function toContainer_hyperlink() {
    // Retrieve hyperlink info if the option is enabled.
    if (this.opt.enableLinks) {
      // Find all anchor tags and get the container's bounds for reference.
      var container = this.prop.container;
      var links = container.querySelectorAll('a');
      var containerRect = unitConvert(container.getBoundingClientRect(), this.prop.pageSize.k);
      linkInfo = [];

      // Loop through each anchor tag.
      Array.prototype.forEach.call(links, function (link) {
        // Treat each client rect as a separate link (for text-wrapping).
        var clientRects = link.getClientRects();
        for (var i = 0; i < clientRects.length; i++) {
          var clientRect = unitConvert(clientRects[i], this.prop.pageSize.k);
          clientRect.left -= containerRect.left;
          clientRect.top -= containerRect.top;

          var page = Math.floor(clientRect.top / this.prop.pageSize.inner.height) + 1;
          var top = this.opt.margin[0] + clientRect.top % this.prop.pageSize.inner.height;
          var left = this.opt.margin[1] + clientRect.left;

          linkInfo.push({ page: page, top: top, left: left, clientRect: clientRect, link: link });
        }
      }, this);
    }
  });
};

Worker.prototype.toPdf = function toPdf() {
  return orig$1.toPdf.call(this).then(function toPdf_hyperlink() {
    // Add hyperlinks if the option is enabled.
    if (this.opt.enableLinks) {
      // Attach each anchor tag based on info from toContainer().
      linkInfo.forEach(function (l) {
        this.prop.pdf.setPage(l.page);
        this.prop.pdf.link(l.left, l.top, l.clientRect.width, l.clientRect.height, { url: l.link.href });
      }, this);

      // Reset the active page of the PDF to the final page.
      var nPages = this.prop.pdf.internal.getNumberOfPages();
      this.prop.pdf.setPage(nPages);
    }
  });
};

/**
 * Generate a PDF from an HTML element or string using html2canvas and jsPDF.
 *
 * @param {Element|string} source The source element or HTML string.
 * @param {Object=} opt An object of optional settings: 'margin', 'filename',
 *    'image' ('type' and 'quality'), and 'html2canvas' / 'jspdf', which are
 *    sent as settings to their corresponding functions.
 */
var html2pdf = function html2pdf(src, opt) {
  // Create a new worker with the given options.
  var worker = new html2pdf.Worker(opt);

  if (src) {
    // If src is specified, perform the traditional 'simple' operation.
    return worker.from(src).save();
  } else {
    // Otherwise, return the worker for new Promise-based operation.
    return worker;
  }
};
html2pdf.Worker = Worker;

return html2pdf;

})));


/***/ }),

/***/ "./resources/js/views/frontend/services/appeal/info_view.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/frontend/services/appeal/info_view.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _info_view_vue_vue_type_template_id_46075729___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info_view.vue?vue&type=template&id=46075729& */ "./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=template&id=46075729&");
/* harmony import */ var _info_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info_view.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _info_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_view_vue_vue_type_template_id_46075729___WEBPACK_IMPORTED_MODULE_0__.render,
  _info_view_vue_vue_type_template_id_46075729___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/services/appeal/info_view.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info_view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_info_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=template&id=46075729&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=template&id=46075729& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_view_vue_vue_type_template_id_46075729___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_view_vue_vue_type_template_id_46075729___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_info_view_vue_vue_type_template_id_46075729___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./info_view.vue?vue&type=template&id=46075729& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=template&id=46075729&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=template&id=46075729&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/frontend/services/appeal/info_view.vue?vue&type=template&id=46075729& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "section customs-value-section" }, [
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
    typeof _vm.t_app !== "undefined" &&
    _vm.t_app &&
    typeof _vm.t_app.appNum !== "undefined"
      ? _c(
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
                      staticClass: "pb-5 mt-5 primary-color",
                      staticStyle: { "font-weight": "bold" },
                    },
                    [_vm._v(_vm._s(_vm.$t("Божхона органларига мурожаат")))]
                  ),
                  _vm._v(" "),
                  _c("h5", [
                    _c("b", [_vm._v(_vm._s(_vm.$t("Ариза рақами:")) + " ")]),
                    _vm._v(_vm._s(_vm.t_app.appNum)),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    typeof _vm.t_app.appNum !== "undefined"
                      ? _c("v-simple-table", {
                          staticStyle: {
                            padding: "40px",
                            "margin-top": "20px",
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function () {
                                  return [
                                    _c("tbody", [
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "font-weight": "550",
                                            },
                                          },
                                          [_vm._v(_vm._s(_vm.$t("ЖШШИР")))]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              typeof _vm.t_app.personPin !==
                                                "undefined"
                                                ? _vm.t_app.personPin
                                                : null
                                            ) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "font-weight": "550",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "Фамилияси, исми, шарифи"
                                                )
                                              )
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              typeof _vm.t_app.firstName !==
                                                "undefined"
                                                ? _vm.t_app.firstName
                                                : null
                                            ) +
                                              " " +
                                              _vm._s(
                                                typeof _vm.t_app.lastName !==
                                                  "undefined"
                                                  ? _vm.t_app.lastName
                                                  : null
                                              ) +
                                              " " +
                                              _vm._s(
                                                typeof _vm.t_app.surName !==
                                                  "undefined"
                                                  ? _vm.t_app.surName
                                                  : null
                                              ) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "font-weight": "550",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("Танланган бошқарма")
                                              )
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              typeof _vm.t_app.locationNm !==
                                                "undefined"
                                                ? _vm.t_app.locationNm
                                                : null
                                            ) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "font-weight": "550",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("Такрорий ариза"))
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              typeof _vm.t_app.appealType !==
                                                "undefined" &&
                                                _vm.t_app.appealType === 2
                                                ? _vm.$t("ХА")
                                                : _vm.$t("ЙЎҚ")
                                            ) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "font-weight": "550",
                                            },
                                          },
                                          [_vm._v(_vm._s(_vm.$t("Манзили")))]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              typeof _vm.t_app.address !==
                                                "undefined"
                                                ? _vm.t_app.address
                                                : null
                                            ) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "font-weight": "550",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("Телефон рақами"))
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              typeof _vm.t_app.phoneNumber !==
                                                "undefined"
                                                ? _vm.t_app.phoneNumber
                                                : null
                                            ) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticStyle: {
                                              "font-weight": "550",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("Электрон манзили"))
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              typeof _vm.t_app.email !==
                                                "undefined"
                                                ? _vm.t_app.email
                                                : null
                                            ) +
                                              "\n                                "
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      typeof _vm.t_app.profession !==
                                      "undefined"
                                        ? _c("tr", [
                                            _c(
                                              "td",
                                              {
                                                staticStyle: {
                                                  "font-weight": "550",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("Иш жойи"))
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  typeof _vm.t_app
                                                    .profession !== "undefined"
                                                    ? _vm.t_app.profession
                                                    : null
                                                ) +
                                                  "\n                                "
                                              ),
                                            ]),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      typeof _vm.fileQuestion !== "undefined" &&
                                      _vm.fileQuestion
                                        ? _c("tr", [
                                            _c(
                                              "td",
                                              {
                                                staticStyle: {
                                                  "font-weight": "550",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "Илова қилинган файл"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    href:
                                                      "data:" +
                                                      _vm.fileQuestion
                                                        .file_format +
                                                      ";base64," +
                                                      _vm.fileQuestion.data,
                                                    download:
                                                      _vm.fileQuestion
                                                        .fileNameEx,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("Юклаб олиш!")
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      typeof _vm.fileAnswer !== "undefined" &&
                                      _vm.fileAnswer &&
                                      _vm.fileAnswer.length > 0
                                        ? _c("tr", [
                                            _c(
                                              "td",
                                              {
                                                staticStyle: {
                                                  "font-weight": "550",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("Жавоб хати"))
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    href:
                                                      "data:" +
                                                      _vm.fileAnswer[0]
                                                        .file_format +
                                                      ";base64," +
                                                      _vm.fileAnswer[0].data,
                                                    download:
                                                      _vm.fileAnswer[0]
                                                        .fileNameEx,
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Юклаб олиш"))
                                                  ),
                                                ]
                                              ),
                                            ]),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      typeof _vm.t_app.statusNm !== "undefined"
                                        ? _c("tr", [
                                            _c(
                                              "td",
                                              {
                                                staticStyle: {
                                                  "font-weight": "550",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("Ариза ҳолати"))
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  typeof _vm.t_app.statusNm !==
                                                    "undefined"
                                                    ? _vm.t_app.statusNm
                                                    : null
                                                ) +
                                                  "\n                                "
                                              ),
                                            ]),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      typeof _vm.$route.params.key !==
                                        "undefined" && 1 === 2
                                        ? 0
                                        : _vm._e(),
                                      _vm._v(" "),
                                      typeof _vm.t_app.messageBody !==
                                      "undefined"
                                        ? _c("tr", [
                                            _c(
                                              "td",
                                              {
                                                staticStyle: {
                                                  "font-weight": "550",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("Мурожаат мазмуни")
                                                  )
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  typeof _vm.t_app
                                                    .messageBody !== "undefined"
                                                    ? _vm.t_app.messageBody
                                                    : null
                                                ) +
                                                  "\n                                "
                                              ),
                                            ]),
                                          ])
                                        : _vm._e(),
                                    ]),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            false,
                            3237167298
                          ),
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "vue-html2pdf",
                      {
                        ref: "html2Pdfaa",
                        attrs: {
                          "show-layout": false,
                          "float-layout": true,
                          "enable-download": true,
                          "preview-modal": false,
                          filename: "murojaat",
                          "pdf-quality": 2,
                          "pdf-format": "a4",
                          "pdf-orientation": "portrait",
                          "pdf-content-width": "800px",
                          "manual-pagination": true,
                        },
                      },
                      [
                        _c(
                          "section",
                          {
                            attrs: { slot: "pdf-content" },
                            slot: "pdf-content",
                          },
                          [
                            _c("section", { staticClass: "pdf-item" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "container print_dialog",
                                  staticStyle: { "background-color": "#fff" },
                                },
                                [
                                  _c("div", [
                                    _c(
                                      "div",
                                      { staticClass: "dialog_header" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            width: "40",
                                            height: "40",
                                            src: "/img/gtk_image.png",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("Божхона органларига")
                                            ) + " "
                                          ),
                                          _c("span", [
                                            _vm._v(_vm._s(_vm.$t("мурожаат"))),
                                          ]),
                                        ]),
                                        _vm._v(" "),
                                        _c("qrcode", {
                                          attrs: {
                                            value: _vm.baseURL,
                                            options: { width: 80 },
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "dialog_content" },
                                      [
                                        _c("table", [
                                          _c("tr", [
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "Мурожаат тартиб рақами"
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(_vm.appeal.appNum)),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          typeof _vm.appeal.password !==
                                          "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "Мурожаат текшириш коди"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.appeal.password)
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          typeof _vm.appeal.insTime !==
                                          "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "Мурожаат тушган сана ва вақт"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.appeal.insTime)
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          typeof _vm.appeal.lastName !==
                                            "undefined" ||
                                          typeof _vm.appeal.surName !==
                                            "undefined" ||
                                          typeof _vm.appeal.firstName !==
                                            "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "Мурожаат муаллифи Ф.И.О"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.appeal.firstName
                                                        ? _vm.appeal.firstName
                                                        : ""
                                                    ) +
                                                      " " +
                                                      _vm._s(
                                                        _vm.appeal.lastName
                                                          ? _vm.appeal.lastName
                                                          : ""
                                                      ) +
                                                      " " +
                                                      _vm._s(
                                                        _vm.appeal.surName
                                                          ? _vm.appeal.surName
                                                          : ""
                                                      )
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          typeof _vm.appeal.address !==
                                          "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "Жисмоний ёки юридик шахснинг манзили"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.appeal.address)
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          typeof _vm.appeal.birthDate !==
                                          "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("Туғилган йили")
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.appeal.birthDate)
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          typeof _vm.appeal.profession !==
                                          "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Иш жойи"))
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.appeal.profession
                                                    )
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          typeof _vm.appeal.position !==
                                            "undefined" &&
                                          _vm.appeal.position === "01" &&
                                          typeof _vm.appeal.positionNm !==
                                            "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("Юридик шахс номи")
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.appeal.positionNm
                                                    )
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          typeof _vm.appeal.phoneNumber !==
                                          "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("Телефон рақами")
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.appeal.phoneNumber
                                                    )
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          typeof _vm.appeal.email !==
                                          "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("Электрон манзили")
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.appeal.email)
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          typeof _vm.appeal.status !==
                                            "undefined" &&
                                          typeof _vm.appeal.statusNm !==
                                            "undefined"
                                            ? _c("tr", [
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("Ариза ҳолати")
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(_vm.appeal.statusNm)
                                                  ),
                                                ]),
                                              ])
                                            : _vm._e(),
                                        ]),
                                        _vm._v(" "),
                                        typeof _vm.appeal.messageBody !==
                                        "undefined"
                                          ? _c("table", [
                                              _c("tr", [
                                                _c("td", [
                                                  _c("p", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("Мурожаат матни")
                                                      ) + " "
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("p", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.appeal.messageBody
                                                      )
                                                    ),
                                                  ]),
                                                ]),
                                              ]),
                                            ])
                                          : _vm._e(),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]
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
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);