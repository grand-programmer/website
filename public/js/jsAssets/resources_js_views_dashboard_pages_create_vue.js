(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_pages_create_vue"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * vue-treeselect v0.4.0 | (c) 2017-2019 Riophae Lee
 * Released under the MIT License.
 * https://vue-treeselect.js.org/
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_317__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_317__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_317__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_317__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_317__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_317__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_317__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_317__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_317__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_317__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_317__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_317__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_317__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_317__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_317__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_317__(__nested_webpack_require_317__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! fuzzysearch */ "./node_modules/fuzzysearch/index.js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! watch-size */ "./node_modules/watch-size/index.es.mjs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! is-promise */ "./node_modules/is-promise/index.js");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/once */ "./node_modules/lodash/once.js");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/identity */ "./node_modules/lodash/identity.js");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/constant */ "./node_modules/lodash/constant.js");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! lodash/last */ "./node_modules/lodash/last.js");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_5479__) {

"use strict";
__nested_webpack_require_5479__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __nested_webpack_require_5479__(0);
var slicedToArray_default = /*#__PURE__*/__nested_webpack_require_5479__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __nested_webpack_require_5479__(1);
var toConsumableArray_default = /*#__PURE__*/__nested_webpack_require_5479__.n(toConsumableArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __nested_webpack_require_5479__(2);
var defineProperty_default = /*#__PURE__*/__nested_webpack_require_5479__.n(defineProperty_);

// EXTERNAL MODULE: external "fuzzysearch"
var external_fuzzysearch_ = __nested_webpack_require_5479__(3);
var external_fuzzysearch_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_fuzzysearch_);

// EXTERNAL MODULE: external "lodash/noop"
var noop_ = __nested_webpack_require_5479__(4);
var noop_default = /*#__PURE__*/__nested_webpack_require_5479__.n(noop_);

// CONCATENATED MODULE: ./src/utils/noop.js

// CONCATENATED MODULE: ./src/utils/warning.js


var warning_warning =  false ? 0 : function warning(checker, complainer) {
  if (!checker()) {
    var _console;

    var message = ['[Vue-Treeselect Warning]'].concat(complainer());

    (_console = console).error.apply(_console, toConsumableArray_default()(message));
  }
};
// CONCATENATED MODULE: ./src/utils/onLeftClick.js
function onLeftClick(mouseDownHandler) {
  return function onMouseDown(evt) {
    if (evt.type === 'mousedown' && evt.button === 0) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      mouseDownHandler.call.apply(mouseDownHandler, [this, evt].concat(args));
    }
  };
}
// CONCATENATED MODULE: ./src/utils/scrollIntoView.js
function scrollIntoView($scrollingEl, $focusedEl) {
  var scrollingReact = $scrollingEl.getBoundingClientRect();
  var focusedRect = $focusedEl.getBoundingClientRect();
  var overScroll = $focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > scrollingReact.bottom) {
    $scrollingEl.scrollTop = Math.min($focusedEl.offsetTop + $focusedEl.clientHeight - $scrollingEl.offsetHeight + overScroll, $scrollingEl.scrollHeight);
  } else if (focusedRect.top - overScroll < scrollingReact.top) {
    $scrollingEl.scrollTop = Math.max($focusedEl.offsetTop - overScroll, 0);
  }
}
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __nested_webpack_require_5479__(5);
var debounce_default = /*#__PURE__*/__nested_webpack_require_5479__.n(debounce_);

// CONCATENATED MODULE: ./src/utils/debounce.js

// EXTERNAL MODULE: external "watch-size"
var external_watch_size_ = __nested_webpack_require_5479__(6);
var external_watch_size_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_watch_size_);

// CONCATENATED MODULE: ./src/utils/removeFromArray.js
function removeFromArray(arr, elem) {
  var idx = arr.indexOf(elem);
  if (idx !== -1) arr.splice(idx, 1);
}
// CONCATENATED MODULE: ./src/utils/watchSize.js


var intervalId;
var registered = [];
var INTERVAL_DURATION = 100;

function run() {
  intervalId = setInterval(function () {
    registered.forEach(test);
  }, INTERVAL_DURATION);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function test(item) {
  var $el = item.$el,
      listener = item.listener,
      lastWidth = item.lastWidth,
      lastHeight = item.lastHeight;
  var width = $el.offsetWidth;
  var height = $el.offsetHeight;

  if (lastWidth !== width || lastHeight !== height) {
    item.lastWidth = width;
    item.lastHeight = height;
    listener({
      width: width,
      height: height
    });
  }
}

function watchSizeForIE9($el, listener) {
  var item = {
    $el: $el,
    listener: listener,
    lastWidth: null,
    lastHeight: null
  };

  var unwatch = function unwatch() {
    removeFromArray(registered, item);
    if (!registered.length) stop();
  };

  registered.push(item);
  test(item);
  run();
  return unwatch;
}

function watchSize($el, listener) {
  var isIE9 = document.documentMode === 9;
  var locked = true;

  var wrappedListener = function wrappedListener() {
    return locked || listener.apply(void 0, arguments);
  };

  var implementation = isIE9 ? watchSizeForIE9 : external_watch_size_default.a;
  var removeSizeWatcher = implementation($el, wrappedListener);
  locked = false;
  return removeSizeWatcher;
}
// CONCATENATED MODULE: ./src/utils/setupResizeAndScrollEventListeners.js
function findScrollParents($el) {
  var $scrollParents = [];
  var $parent = $el.parentNode;

  while ($parent && $parent.nodeName !== 'BODY' && $parent.nodeType === document.ELEMENT_NODE) {
    if (isScrollElment($parent)) $scrollParents.push($parent);
    $parent = $parent.parentNode;
  }

  $scrollParents.push(window);
  return $scrollParents;
}

function isScrollElment($el) {
  var _getComputedStyle = getComputedStyle($el),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /(auto|scroll|overlay)/.test(overflow + overflowY + overflowX);
}

function setupResizeAndScrollEventListeners($el, listener) {
  var $scrollParents = findScrollParents($el);
  window.addEventListener('resize', listener, {
    passive: true
  });
  $scrollParents.forEach(function (scrollParent) {
    scrollParent.addEventListener('scroll', listener, {
      passive: true
    });
  });
  return function removeEventListeners() {
    window.removeEventListener('resize', listener, {
      passive: true
    });
    $scrollParents.forEach(function ($scrollParent) {
      $scrollParent.removeEventListener('scroll', listener, {
        passive: true
      });
    });
  };
}
// CONCATENATED MODULE: ./src/utils/isNaN.js
function isNaN_isNaN(x) {
  return x !== x;
}
// EXTERNAL MODULE: external "is-promise"
var external_is_promise_ = __nested_webpack_require_5479__(7);
var external_is_promise_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_is_promise_);

// CONCATENATED MODULE: ./src/utils/isPromise.js

// EXTERNAL MODULE: external "lodash/once"
var once_ = __nested_webpack_require_5479__(8);
var once_default = /*#__PURE__*/__nested_webpack_require_5479__.n(once_);

// CONCATENATED MODULE: ./src/utils/once.js

// EXTERNAL MODULE: external "lodash/identity"
var identity_ = __nested_webpack_require_5479__(9);
var identity_default = /*#__PURE__*/__nested_webpack_require_5479__.n(identity_);

// CONCATENATED MODULE: ./src/utils/identity.js

// EXTERNAL MODULE: external "lodash/constant"
var constant_ = __nested_webpack_require_5479__(10);
var constant_default = /*#__PURE__*/__nested_webpack_require_5479__.n(constant_);

// CONCATENATED MODULE: ./src/utils/constant.js

// CONCATENATED MODULE: ./src/utils/createMap.js
var createMap = function createMap() {
  return Object.create(null);
};
// EXTERNAL MODULE: external "@babel/runtime/helpers/typeof"
var typeof_ = __nested_webpack_require_5479__(11);
var typeof_default = /*#__PURE__*/__nested_webpack_require_5479__.n(typeof_);

// CONCATENATED MODULE: ./src/utils/deepExtend.js


function isPlainObject(value) {
  if (value == null || typeof_default()(value) !== 'object') return false;
  return Object.getPrototypeOf(value) === Object.prototype;
}

function copy(obj, key, value) {
  if (isPlainObject(value)) {
    obj[key] || (obj[key] = {});
    deepExtend(obj[key], value);
  } else {
    obj[key] = value;
  }
}

function deepExtend(target, source) {
  if (isPlainObject(source)) {
    var keys = Object.keys(source);

    for (var i = 0, len = keys.length; i < len; i++) {
      copy(target, keys[i], source[keys[i]]);
    }
  }

  return target;
}
// EXTERNAL MODULE: external "lodash/last"
var last_ = __nested_webpack_require_5479__(12);
var last_default = /*#__PURE__*/__nested_webpack_require_5479__.n(last_);

// CONCATENATED MODULE: ./src/utils/last.js

// CONCATENATED MODULE: ./src/utils/includes.js
function includes(arrOrStr, elem) {
  return arrOrStr.indexOf(elem) !== -1;
}
// CONCATENATED MODULE: ./src/utils/find.js
function find(arr, predicate, ctx) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (predicate.call(ctx, arr[i], i, arr)) return arr[i];
  }

  return undefined;
}
// CONCATENATED MODULE: ./src/utils/quickDiff.js
function quickDiff(arrA, arrB) {
  if (arrA.length !== arrB.length) return true;

  for (var i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return true;
  }

  return false;
}
// CONCATENATED MODULE: ./src/utils/index.js



















// CONCATENATED MODULE: ./src/constants.js
var NO_PARENT_NODE = null;
var UNCHECKED = 0;
var INDETERMINATE = 1;
var CHECKED = 2;
var ALL_CHILDREN = 'ALL_CHILDREN';
var ALL_DESCENDANTS = 'ALL_DESCENDANTS';
var LEAF_CHILDREN = 'LEAF_CHILDREN';
var LEAF_DESCENDANTS = 'LEAF_DESCENDANTS';
var LOAD_ROOT_OPTIONS = 'LOAD_ROOT_OPTIONS';
var LOAD_CHILDREN_OPTIONS = 'LOAD_CHILDREN_OPTIONS';
var ASYNC_SEARCH = 'ASYNC_SEARCH';
var ALL = 'ALL';
var BRANCH_PRIORITY = 'BRANCH_PRIORITY';
var LEAF_PRIORITY = 'LEAF_PRIORITY';
var ALL_WITH_INDETERMINATE = 'ALL_WITH_INDETERMINATE';
var ORDER_SELECTED = 'ORDER_SELECTED';
var LEVEL = 'LEVEL';
var INDEX = 'INDEX';
var KEY_CODES = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
};
var INPUT_DEBOUNCE_DELAY =  false ? 0 : 200;
var MIN_INPUT_WIDTH = 5;
var MENU_BUFFER = 40;
// CONCATENATED MODULE: ./src/mixins/treeselectMixin.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function sortValueByIndex(a, b) {
  var i = 0;

  do {
    if (a.level < i) return -1;
    if (b.level < i) return 1;
    if (a.index[i] !== b.index[i]) return a.index[i] - b.index[i];
    i++;
  } while (true);
}

function sortValueByLevel(a, b) {
  return a.level === b.level ? sortValueByIndex(a, b) : a.level - b.level;
}

function createAsyncOptionsStates() {
  return {
    isLoaded: false,
    isLoading: false,
    loadingError: ''
  };
}

function stringifyOptionPropValue(value) {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' && !isNaN_isNaN(value)) return value + '';
  return '';
}

function match(enableFuzzyMatch, needle, haystack) {
  return enableFuzzyMatch ? external_fuzzysearch_default()(needle, haystack) : includes(haystack, needle);
}

function getErrorMessage(err) {
  return err.message || String(err);
}

var instanceId = 0;
/* harmony default export */ var treeselectMixin = ({
  provide: function provide() {
    return {
      instance: this
    };
  },
  props: {
    allowClearingDisabled: {
      type: Boolean,
      default: false
    },
    allowSelectingDisabledDescendants: {
      type: Boolean,
      default: false
    },
    alwaysOpen: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    async: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    autoLoadRootOptions: {
      type: Boolean,
      default: true
    },
    autoDeselectAncestors: {
      type: Boolean,
      default: false
    },
    autoDeselectDescendants: {
      type: Boolean,
      default: false
    },
    autoSelectAncestors: {
      type: Boolean,
      default: false
    },
    autoSelectDescendants: {
      type: Boolean,
      default: false
    },
    backspaceRemoves: {
      type: Boolean,
      default: true
    },
    beforeClearAll: {
      type: Function,
      default: constant_default()(true)
    },
    branchNodesFirst: {
      type: Boolean,
      default: false
    },
    cacheOptions: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    clearAllText: {
      type: String,
      default: 'Clear all'
    },
    clearOnSelect: {
      type: Boolean,
      default: false
    },
    clearValueText: {
      type: String,
      default: 'Clear value'
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    defaultOptions: {
      default: false
    },
    deleteRemoves: {
      type: Boolean,
      default: true
    },
    delimiter: {
      type: String,
      default: ','
    },
    flattenSearchResults: {
      type: Boolean,
      default: false
    },
    disableBranchNodes: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disableFuzzyMatching: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    instanceId: {
      default: function _default() {
        return "".concat(instanceId++, "$$");
      },
      type: [String, Number]
    },
    joinValues: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: Infinity
    },
    limitText: {
      type: Function,
      default: function limitTextDefault(count) {
        return "and ".concat(count, " more");
      }
    },
    loadingText: {
      type: String,
      default: 'Loading...'
    },
    loadOptions: {
      type: Function
    },
    matchKeys: {
      type: Array,
      default: constant_default()(['label'])
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    noChildrenText: {
      type: String,
      default: 'No sub-options.'
    },
    noOptionsText: {
      type: String,
      default: 'No options available.'
    },
    noResultsText: {
      type: String,
      default: 'No results found...'
    },
    normalizer: {
      type: Function,
      default: identity_default.a
    },
    openDirection: {
      type: String,
      default: 'auto',
      validator: function validator(value) {
        var acceptableValues = ['auto', 'top', 'bottom', 'above', 'below'];
        return includes(acceptableValues, value);
      }
    },
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array
    },
    placeholder: {
      type: String,
      default: 'Select...'
    },
    required: {
      type: Boolean,
      default: false
    },
    retryText: {
      type: String,
      default: 'Retry?'
    },
    retryTitle: {
      type: String,
      default: 'Click to retry'
    },
    searchable: {
      type: Boolean,
      default: true
    },
    searchNested: {
      type: Boolean,
      default: false
    },
    searchPromptText: {
      type: String,
      default: 'Type to search...'
    },
    showCount: {
      type: Boolean,
      default: false
    },
    showCountOf: {
      type: String,
      default: ALL_CHILDREN,
      validator: function validator(value) {
        var acceptableValues = [ALL_CHILDREN, ALL_DESCENDANTS, LEAF_CHILDREN, LEAF_DESCENDANTS];
        return includes(acceptableValues, value);
      }
    },
    showCountOnSearch: null,
    sortValueBy: {
      type: String,
      default: ORDER_SELECTED,
      validator: function validator(value) {
        var acceptableValues = [ORDER_SELECTED, LEVEL, INDEX];
        return includes(acceptableValues, value);
      }
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    value: null,
    valueConsistsOf: {
      type: String,
      default: BRANCH_PRIORITY,
      validator: function validator(value) {
        var acceptableValues = [ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE];
        return includes(acceptableValues, value);
      }
    },
    valueFormat: {
      type: String,
      default: 'id'
    },
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  data: function data() {
    return {
      trigger: {
        isFocused: false,
        searchQuery: ''
      },
      menu: {
        isOpen: false,
        current: null,
        lastScrollPosition: 0,
        placement: 'bottom'
      },
      forest: {
        normalizedOptions: [],
        nodeMap: createMap(),
        checkedStateMap: createMap(),
        selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
        selectedNodeMap: createMap()
      },
      rootOptionsStates: createAsyncOptionsStates(),
      localSearch: {
        active: false,
        noResults: true,
        countMap: createMap()
      },
      remoteSearch: createMap()
    };
  },
  computed: {
    selectedNodes: function selectedNodes() {
      return this.forest.selectedNodeIds.map(this.getNode);
    },
    internalValue: function internalValue() {
      var _this = this;

      var internalValue;

      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
        internalValue = this.forest.selectedNodeIds.slice();
      } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);

          if (node.isRootNode) return true;
          return !_this.isSelected(node.parentNode);
        });
      } else if (this.valueConsistsOf === LEAF_PRIORITY) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);

          if (node.isLeaf) return true;
          return node.children.length === 0;
        });
      } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
        var _internalValue;

        var indeterminateNodeIds = [];
        internalValue = this.forest.selectedNodeIds.slice();
        this.selectedNodes.forEach(function (selectedNode) {
          selectedNode.ancestors.forEach(function (ancestor) {
            if (includes(indeterminateNodeIds, ancestor.id)) return;
            if (includes(internalValue, ancestor.id)) return;
            indeterminateNodeIds.push(ancestor.id);
          });
        });

        (_internalValue = internalValue).push.apply(_internalValue, indeterminateNodeIds);
      }

      if (this.sortValueBy === LEVEL) {
        internalValue.sort(function (a, b) {
          return sortValueByLevel(_this.getNode(a), _this.getNode(b));
        });
      } else if (this.sortValueBy === INDEX) {
        internalValue.sort(function (a, b) {
          return sortValueByIndex(_this.getNode(a), _this.getNode(b));
        });
      }

      return internalValue;
    },
    hasValue: function hasValue() {
      return this.internalValue.length > 0;
    },
    single: function single() {
      return !this.multiple;
    },
    visibleOptionIds: function visibleOptionIds() {
      var _this2 = this;

      var visibleOptionIds = [];
      this.traverseAllNodesByIndex(function (node) {
        if (!_this2.localSearch.active || _this2.shouldOptionBeIncludedInSearchResult(node)) {
          visibleOptionIds.push(node.id);
        }

        if (node.isBranch && !_this2.shouldExpand(node)) {
          return false;
        }
      });
      return visibleOptionIds;
    },
    hasVisibleOptions: function hasVisibleOptions() {
      return this.visibleOptionIds.length !== 0;
    },
    showCountOnSearchComputed: function showCountOnSearchComputed() {
      return typeof this.showCountOnSearch === 'boolean' ? this.showCountOnSearch : this.showCount;
    },
    hasBranchNodes: function hasBranchNodes() {
      return this.forest.normalizedOptions.some(function (rootNode) {
        return rootNode.isBranch;
      });
    },
    shouldFlattenOptions: function shouldFlattenOptions() {
      return this.localSearch.active && this.flattenSearchResults;
    }
  },
  watch: {
    alwaysOpen: function alwaysOpen(newValue) {
      if (newValue) this.openMenu();else this.closeMenu();
    },
    branchNodesFirst: function branchNodesFirst() {
      this.initialize();
    },
    disabled: function disabled(newValue) {
      if (newValue && this.menu.isOpen) this.closeMenu();else if (!newValue && !this.menu.isOpen && this.alwaysOpen) this.openMenu();
    },
    flat: function flat() {
      this.initialize();
    },
    internalValue: function internalValue(newValue, oldValue) {
      var hasChanged = quickDiff(newValue, oldValue);
      if (hasChanged) this.$emit('input', this.getValue(), this.getInstanceId());
    },
    matchKeys: function matchKeys() {
      this.initialize();
    },
    multiple: function multiple(newValue) {
      if (newValue) this.buildForestState();
    },
    options: {
      handler: function handler() {
        if (this.async) return;
        this.initialize();
        this.rootOptionsStates.isLoaded = Array.isArray(this.options);
      },
      deep: true,
      immediate: true
    },
    'trigger.searchQuery': function triggerSearchQuery() {
      if (this.async) {
        this.handleRemoteSearch();
      } else {
        this.handleLocalSearch();
      }

      this.$emit('search-change', this.trigger.searchQuery, this.getInstanceId());
    },
    value: function value() {
      var nodeIdsFromValue = this.extractCheckedNodeIdsFromValue();
      var hasChanged = quickDiff(nodeIdsFromValue, this.internalValue);
      if (hasChanged) this.fixSelectedNodeIds(nodeIdsFromValue);
    }
  },
  methods: {
    verifyProps: function verifyProps() {
      var _this3 = this;

      warning_warning(function () {
        return _this3.async ? _this3.searchable : true;
      }, function () {
        return 'For async search mode, the value of "searchable" prop must be true.';
      });

      if (this.options == null && !this.loadOptions) {
        warning_warning(function () {
          return false;
        }, function () {
          return 'Are you meant to dynamically load options? You need to use "loadOptions" prop.';
        });
      }

      if (this.flat) {
        warning_warning(function () {
          return _this3.multiple;
        }, function () {
          return 'You are using flat mode. But you forgot to add "multiple=true"?';
        });
      }

      if (!this.flat) {
        var propNames = ['autoSelectAncestors', 'autoSelectDescendants', 'autoDeselectAncestors', 'autoDeselectDescendants'];
        propNames.forEach(function (propName) {
          warning_warning(function () {
            return !_this3[propName];
          }, function () {
            return "\"".concat(propName, "\" only applies to flat mode.");
          });
        });
      }
    },
    resetFlags: function resetFlags() {
      this._blurOnSelect = false;
    },
    initialize: function initialize() {
      var options = this.async ? this.getRemoteSearchEntry().options : this.options;

      if (Array.isArray(options)) {
        var prevNodeMap = this.forest.nodeMap;
        this.forest.nodeMap = createMap();
        this.keepDataOfSelectedNodes(prevNodeMap);
        this.forest.normalizedOptions = this.normalize(NO_PARENT_NODE, options, prevNodeMap);
        this.fixSelectedNodeIds(this.internalValue);
      } else {
        this.forest.normalizedOptions = [];
      }
    },
    getInstanceId: function getInstanceId() {
      return this.instanceId == null ? this.id : this.instanceId;
    },
    getValue: function getValue() {
      var _this4 = this;

      if (this.valueFormat === 'id') {
        return this.multiple ? this.internalValue.slice() : this.internalValue[0];
      }

      var rawNodes = this.internalValue.map(function (id) {
        return _this4.getNode(id).raw;
      });
      return this.multiple ? rawNodes : rawNodes[0];
    },
    getNode: function getNode(nodeId) {
      warning_warning(function () {
        return nodeId != null;
      }, function () {
        return "Invalid node id: ".concat(nodeId);
      });
      if (nodeId == null) return null;
      return nodeId in this.forest.nodeMap ? this.forest.nodeMap[nodeId] : this.createFallbackNode(nodeId);
    },
    createFallbackNode: function createFallbackNode(id) {
      var raw = this.extractNodeFromValue(id);
      var label = this.enhancedNormalizer(raw).label || "".concat(id, " (unknown)");
      var fallbackNode = {
        id: id,
        label: label,
        ancestors: [],
        parentNode: NO_PARENT_NODE,
        isFallbackNode: true,
        isRootNode: true,
        isLeaf: true,
        isBranch: false,
        isDisabled: false,
        isNew: false,
        index: [-1],
        level: 0,
        raw: raw
      };
      return this.$set(this.forest.nodeMap, id, fallbackNode);
    },
    extractCheckedNodeIdsFromValue: function extractCheckedNodeIdsFromValue() {
      var _this5 = this;

      if (this.value == null) return [];

      if (this.valueFormat === 'id') {
        return this.multiple ? this.value.slice() : [this.value];
      }

      return (this.multiple ? this.value : [this.value]).map(function (node) {
        return _this5.enhancedNormalizer(node);
      }).map(function (node) {
        return node.id;
      });
    },
    extractNodeFromValue: function extractNodeFromValue(id) {
      var _this6 = this;

      var defaultNode = {
        id: id
      };

      if (this.valueFormat === 'id') {
        return defaultNode;
      }

      var valueArray = this.multiple ? Array.isArray(this.value) ? this.value : [] : this.value ? [this.value] : [];
      var matched = find(valueArray, function (node) {
        return node && _this6.enhancedNormalizer(node).id === id;
      });
      return matched || defaultNode;
    },
    fixSelectedNodeIds: function fixSelectedNodeIds(nodeIdListOfPrevValue) {
      var _this7 = this;

      var nextSelectedNodeIds = [];

      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
        nextSelectedNodeIds = nodeIdListOfPrevValue;
      } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
        nodeIdListOfPrevValue.forEach(function (nodeId) {
          nextSelectedNodeIds.push(nodeId);

          var node = _this7.getNode(nodeId);

          if (node.isBranch) _this7.traverseDescendantsBFS(node, function (descendant) {
            nextSelectedNodeIds.push(descendant.id);
          });
        });
      } else if (this.valueConsistsOf === LEAF_PRIORITY) {
        var map = createMap();
        var queue = nodeIdListOfPrevValue.slice();

        while (queue.length) {
          var nodeId = queue.shift();
          var node = this.getNode(nodeId);
          nextSelectedNodeIds.push(nodeId);
          if (node.isRootNode) continue;
          if (!(node.parentNode.id in map)) map[node.parentNode.id] = node.parentNode.children.length;
          if (--map[node.parentNode.id] === 0) queue.push(node.parentNode.id);
        }
      } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
        var _map = createMap();

        var _queue = nodeIdListOfPrevValue.filter(function (nodeId) {
          var node = _this7.getNode(nodeId);

          return node.isLeaf || node.children.length === 0;
        });

        while (_queue.length) {
          var _nodeId = _queue.shift();

          var _node = this.getNode(_nodeId);

          nextSelectedNodeIds.push(_nodeId);
          if (_node.isRootNode) continue;
          if (!(_node.parentNode.id in _map)) _map[_node.parentNode.id] = _node.parentNode.children.length;
          if (--_map[_node.parentNode.id] === 0) _queue.push(_node.parentNode.id);
        }
      }

      var hasChanged = quickDiff(this.forest.selectedNodeIds, nextSelectedNodeIds);
      if (hasChanged) this.forest.selectedNodeIds = nextSelectedNodeIds;
      this.buildForestState();
    },
    keepDataOfSelectedNodes: function keepDataOfSelectedNodes(prevNodeMap) {
      var _this8 = this;

      this.forest.selectedNodeIds.forEach(function (id) {
        if (!prevNodeMap[id]) return;

        var node = _objectSpread({}, prevNodeMap[id], {
          isFallbackNode: true
        });

        _this8.$set(_this8.forest.nodeMap, id, node);
      });
    },
    isSelected: function isSelected(node) {
      return this.forest.selectedNodeMap[node.id] === true;
    },
    traverseDescendantsBFS: function traverseDescendantsBFS(parentNode, callback) {
      if (!parentNode.isBranch) return;
      var queue = parentNode.children.slice();

      while (queue.length) {
        var currNode = queue[0];
        if (currNode.isBranch) queue.push.apply(queue, toConsumableArray_default()(currNode.children));
        callback(currNode);
        queue.shift();
      }
    },
    traverseDescendantsDFS: function traverseDescendantsDFS(parentNode, callback) {
      var _this9 = this;

      if (!parentNode.isBranch) return;
      parentNode.children.forEach(function (child) {
        _this9.traverseDescendantsDFS(child, callback);

        callback(child);
      });
    },
    traverseAllNodesDFS: function traverseAllNodesDFS(callback) {
      var _this10 = this;

      this.forest.normalizedOptions.forEach(function (rootNode) {
        _this10.traverseDescendantsDFS(rootNode, callback);

        callback(rootNode);
      });
    },
    traverseAllNodesByIndex: function traverseAllNodesByIndex(callback) {
      var walk = function walk(parentNode) {
        parentNode.children.forEach(function (child) {
          if (callback(child) !== false && child.isBranch) {
            walk(child);
          }
        });
      };

      walk({
        children: this.forest.normalizedOptions
      });
    },
    toggleClickOutsideEvent: function toggleClickOutsideEvent(enabled) {
      if (enabled) {
        document.addEventListener('mousedown', this.handleClickOutside, false);
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
      }
    },
    getValueContainer: function getValueContainer() {
      return this.$refs.control.$refs['value-container'];
    },
    getInput: function getInput() {
      return this.getValueContainer().$refs.input;
    },
    focusInput: function focusInput() {
      this.getInput().focus();
    },
    blurInput: function blurInput() {
      this.getInput().blur();
    },
    handleMouseDown: onLeftClick(function handleMouseDown(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (this.disabled) return;
      var isClickedOnValueContainer = this.getValueContainer().$el.contains(evt.target);

      if (isClickedOnValueContainer && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused)) {
        this.openMenu();
      }

      if (this._blurOnSelect) {
        this.blurInput();
      } else {
        this.focusInput();
      }

      this.resetFlags();
    }),
    handleClickOutside: function handleClickOutside(evt) {
      if (this.$refs.wrapper && !this.$refs.wrapper.contains(evt.target)) {
        this.blurInput();
        this.closeMenu();
      }
    },
    handleLocalSearch: function handleLocalSearch() {
      var _this11 = this;

      var searchQuery = this.trigger.searchQuery;

      var done = function done() {
        return _this11.resetHighlightedOptionWhenNecessary(true);
      };

      if (!searchQuery) {
        this.localSearch.active = false;
        return done();
      }

      this.localSearch.active = true;
      this.localSearch.noResults = true;
      this.traverseAllNodesDFS(function (node) {
        if (node.isBranch) {
          var _this11$$set;

          node.isExpandedOnSearch = false;
          node.showAllChildrenOnSearch = false;
          node.isMatched = false;
          node.hasMatchedDescendants = false;

          _this11.$set(_this11.localSearch.countMap, node.id, (_this11$$set = {}, defineProperty_default()(_this11$$set, ALL_CHILDREN, 0), defineProperty_default()(_this11$$set, ALL_DESCENDANTS, 0), defineProperty_default()(_this11$$set, LEAF_CHILDREN, 0), defineProperty_default()(_this11$$set, LEAF_DESCENDANTS, 0), _this11$$set));
        }
      });
      var lowerCasedSearchQuery = searchQuery.trim().toLocaleLowerCase();
      var splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, ' ').split(' ');
      this.traverseAllNodesDFS(function (node) {
        if (_this11.searchNested && splitSearchQuery.length > 1) {
          node.isMatched = splitSearchQuery.every(function (filterValue) {
            return match(false, filterValue, node.nestedSearchLabel);
          });
        } else {
          node.isMatched = _this11.matchKeys.some(function (matchKey) {
            return match(!_this11.disableFuzzyMatching, lowerCasedSearchQuery, node.lowerCased[matchKey]);
          });
        }

        if (node.isMatched) {
          _this11.localSearch.noResults = false;
          node.ancestors.forEach(function (ancestor) {
            return _this11.localSearch.countMap[ancestor.id][ALL_DESCENDANTS]++;
          });
          if (node.isLeaf) node.ancestors.forEach(function (ancestor) {
            return _this11.localSearch.countMap[ancestor.id][LEAF_DESCENDANTS]++;
          });

          if (node.parentNode !== NO_PARENT_NODE) {
            _this11.localSearch.countMap[node.parentNode.id][ALL_CHILDREN] += 1;
            if (node.isLeaf) _this11.localSearch.countMap[node.parentNode.id][LEAF_CHILDREN] += 1;
          }
        }

        if ((node.isMatched || node.isBranch && node.isExpandedOnSearch) && node.parentNode !== NO_PARENT_NODE) {
          node.parentNode.isExpandedOnSearch = true;
          node.parentNode.hasMatchedDescendants = true;
        }
      });
      done();
    },
    handleRemoteSearch: function handleRemoteSearch() {
      var _this12 = this;

      var searchQuery = this.trigger.searchQuery;
      var entry = this.getRemoteSearchEntry();

      var done = function done() {
        _this12.initialize();

        _this12.resetHighlightedOptionWhenNecessary(true);
      };

      if ((searchQuery === '' || this.cacheOptions) && entry.isLoaded) {
        return done();
      }

      this.callLoadOptionsProp({
        action: ASYNC_SEARCH,
        args: {
          searchQuery: searchQuery
        },
        isPending: function isPending() {
          return entry.isLoading;
        },
        start: function start() {
          entry.isLoading = true;
          entry.isLoaded = false;
          entry.loadingError = '';
        },
        succeed: function succeed(options) {
          entry.isLoaded = true;
          entry.options = options;
          if (_this12.trigger.searchQuery === searchQuery) done();
        },
        fail: function fail(err) {
          entry.loadingError = getErrorMessage(err);
        },
        end: function end() {
          entry.isLoading = false;
        }
      });
    },
    getRemoteSearchEntry: function getRemoteSearchEntry() {
      var _this13 = this;

      var searchQuery = this.trigger.searchQuery;

      var entry = this.remoteSearch[searchQuery] || _objectSpread({}, createAsyncOptionsStates(), {
        options: []
      });

      this.$watch(function () {
        return entry.options;
      }, function () {
        if (_this13.trigger.searchQuery === searchQuery) _this13.initialize();
      }, {
        deep: true
      });

      if (searchQuery === '') {
        if (Array.isArray(this.defaultOptions)) {
          entry.options = this.defaultOptions;
          entry.isLoaded = true;
          return entry;
        } else if (this.defaultOptions !== true) {
          entry.isLoaded = true;
          return entry;
        }
      }

      if (!this.remoteSearch[searchQuery]) {
        this.$set(this.remoteSearch, searchQuery, entry);
      }

      return entry;
    },
    shouldExpand: function shouldExpand(node) {
      return this.localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
    },
    shouldOptionBeIncludedInSearchResult: function shouldOptionBeIncludedInSearchResult(node) {
      if (node.isMatched) return true;
      if (node.isBranch && node.hasMatchedDescendants && !this.flattenSearchResults) return true;
      if (!node.isRootNode && node.parentNode.showAllChildrenOnSearch) return true;
      return false;
    },
    shouldShowOptionInMenu: function shouldShowOptionInMenu(node) {
      if (this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(node)) {
        return false;
      }

      return true;
    },
    getControl: function getControl() {
      return this.$refs.control.$el;
    },
    getMenu: function getMenu() {
      var ref = this.appendToBody ? this.$refs.portal.portalTarget : this;
      var $menu = ref.$refs.menu.$refs.menu;
      return $menu && $menu.nodeName !== '#comment' ? $menu : null;
    },
    setCurrentHighlightedOption: function setCurrentHighlightedOption(node) {
      var _this14 = this;

      var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var prev = this.menu.current;

      if (prev != null && prev in this.forest.nodeMap) {
        this.forest.nodeMap[prev].isHighlighted = false;
      }

      this.menu.current = node.id;
      node.isHighlighted = true;

      if (this.menu.isOpen && scroll) {
        var scrollToOption = function scrollToOption() {
          var $menu = _this14.getMenu();

          var $option = $menu.querySelector(".vue-treeselect__option[data-id=\"".concat(node.id, "\"]"));
          if ($option) scrollIntoView($menu, $option);
        };

        if (this.getMenu()) {
          scrollToOption();
        } else {
          this.$nextTick(scrollToOption);
        }
      }
    },
    resetHighlightedOptionWhenNecessary: function resetHighlightedOptionWhenNecessary() {
      var forceReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var current = this.menu.current;

      if (forceReset || current == null || !(current in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(current))) {
        this.highlightFirstOption();
      }
    },
    highlightFirstOption: function highlightFirstOption() {
      if (!this.hasVisibleOptions) return;
      var first = this.visibleOptionIds[0];
      this.setCurrentHighlightedOption(this.getNode(first));
    },
    highlightPrevOption: function highlightPrevOption() {
      if (!this.hasVisibleOptions) return;
      var prev = this.visibleOptionIds.indexOf(this.menu.current) - 1;
      if (prev === -1) return this.highlightLastOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[prev]));
    },
    highlightNextOption: function highlightNextOption() {
      if (!this.hasVisibleOptions) return;
      var next = this.visibleOptionIds.indexOf(this.menu.current) + 1;
      if (next === this.visibleOptionIds.length) return this.highlightFirstOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[next]));
    },
    highlightLastOption: function highlightLastOption() {
      if (!this.hasVisibleOptions) return;
      var last = last_default()(this.visibleOptionIds);
      this.setCurrentHighlightedOption(this.getNode(last));
    },
    resetSearchQuery: function resetSearchQuery() {
      this.trigger.searchQuery = '';
    },
    closeMenu: function closeMenu() {
      if (!this.menu.isOpen || !this.disabled && this.alwaysOpen) return;
      this.saveMenuScrollPosition();
      this.menu.isOpen = false;
      this.toggleClickOutsideEvent(false);
      this.resetSearchQuery();
      this.$emit('close', this.getValue(), this.getInstanceId());
    },
    openMenu: function openMenu() {
      if (this.disabled || this.menu.isOpen) return;
      this.menu.isOpen = true;
      this.$nextTick(this.resetHighlightedOptionWhenNecessary);
      this.$nextTick(this.restoreMenuScrollPosition);
      if (!this.options && !this.async) this.loadRootOptions();
      this.toggleClickOutsideEvent(true);
      this.$emit('open', this.getInstanceId());
    },
    toggleMenu: function toggleMenu() {
      if (this.menu.isOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    toggleExpanded: function toggleExpanded(node) {
      var nextState;

      if (this.localSearch.active) {
        nextState = node.isExpandedOnSearch = !node.isExpandedOnSearch;
        if (nextState) node.showAllChildrenOnSearch = true;
      } else {
        nextState = node.isExpanded = !node.isExpanded;
      }

      if (nextState && !node.childrenStates.isLoaded) {
        this.loadChildrenOptions(node);
      }
    },
    buildForestState: function buildForestState() {
      var _this15 = this;

      var selectedNodeMap = createMap();
      this.forest.selectedNodeIds.forEach(function (selectedNodeId) {
        selectedNodeMap[selectedNodeId] = true;
      });
      this.forest.selectedNodeMap = selectedNodeMap;
      var checkedStateMap = createMap();

      if (this.multiple) {
        this.traverseAllNodesByIndex(function (node) {
          checkedStateMap[node.id] = UNCHECKED;
        });
        this.selectedNodes.forEach(function (selectedNode) {
          checkedStateMap[selectedNode.id] = CHECKED;

          if (!_this15.flat && !_this15.disableBranchNodes) {
            selectedNode.ancestors.forEach(function (ancestorNode) {
              if (!_this15.isSelected(ancestorNode)) {
                checkedStateMap[ancestorNode.id] = INDETERMINATE;
              }
            });
          }
        });
      }

      this.forest.checkedStateMap = checkedStateMap;
    },
    enhancedNormalizer: function enhancedNormalizer(raw) {
      return _objectSpread({}, raw, {}, this.normalizer(raw, this.getInstanceId()));
    },
    normalize: function normalize(parentNode, nodes, prevNodeMap) {
      var _this16 = this;

      var normalizedOptions = nodes.map(function (node) {
        return [_this16.enhancedNormalizer(node), node];
      }).map(function (_ref, index) {
        var _ref2 = slicedToArray_default()(_ref, 2),
            node = _ref2[0],
            raw = _ref2[1];

        _this16.checkDuplication(node);

        _this16.verifyNodeShape(node);

        var id = node.id,
            label = node.label,
            children = node.children,
            isDefaultExpanded = node.isDefaultExpanded;
        var isRootNode = parentNode === NO_PARENT_NODE;
        var level = isRootNode ? 0 : parentNode.level + 1;
        var isBranch = Array.isArray(children) || children === null;
        var isLeaf = !isBranch;
        var isDisabled = !!node.isDisabled || !_this16.flat && !isRootNode && parentNode.isDisabled;
        var isNew = !!node.isNew;

        var lowerCased = _this16.matchKeys.reduce(function (prev, key) {
          return _objectSpread({}, prev, defineProperty_default()({}, key, stringifyOptionPropValue(node[key]).toLocaleLowerCase()));
        }, {});

        var nestedSearchLabel = isRootNode ? lowerCased.label : parentNode.nestedSearchLabel + ' ' + lowerCased.label;

        var normalized = _this16.$set(_this16.forest.nodeMap, id, createMap());

        _this16.$set(normalized, 'id', id);

        _this16.$set(normalized, 'label', label);

        _this16.$set(normalized, 'level', level);

        _this16.$set(normalized, 'ancestors', isRootNode ? [] : [parentNode].concat(parentNode.ancestors));

        _this16.$set(normalized, 'index', (isRootNode ? [] : parentNode.index).concat(index));

        _this16.$set(normalized, 'parentNode', parentNode);

        _this16.$set(normalized, 'lowerCased', lowerCased);

        _this16.$set(normalized, 'nestedSearchLabel', nestedSearchLabel);

        _this16.$set(normalized, 'isDisabled', isDisabled);

        _this16.$set(normalized, 'isNew', isNew);

        _this16.$set(normalized, 'isMatched', false);

        _this16.$set(normalized, 'isHighlighted', false);

        _this16.$set(normalized, 'isBranch', isBranch);

        _this16.$set(normalized, 'isLeaf', isLeaf);

        _this16.$set(normalized, 'isRootNode', isRootNode);

        _this16.$set(normalized, 'raw', raw);

        if (isBranch) {
          var _this16$$set;

          var isLoaded = Array.isArray(children);

          _this16.$set(normalized, 'childrenStates', _objectSpread({}, createAsyncOptionsStates(), {
            isLoaded: isLoaded
          }));

          _this16.$set(normalized, 'isExpanded', typeof isDefaultExpanded === 'boolean' ? isDefaultExpanded : level < _this16.defaultExpandLevel);

          _this16.$set(normalized, 'hasMatchedDescendants', false);

          _this16.$set(normalized, 'hasDisabledDescendants', false);

          _this16.$set(normalized, 'isExpandedOnSearch', false);

          _this16.$set(normalized, 'showAllChildrenOnSearch', false);

          _this16.$set(normalized, 'count', (_this16$$set = {}, defineProperty_default()(_this16$$set, ALL_CHILDREN, 0), defineProperty_default()(_this16$$set, ALL_DESCENDANTS, 0), defineProperty_default()(_this16$$set, LEAF_CHILDREN, 0), defineProperty_default()(_this16$$set, LEAF_DESCENDANTS, 0), _this16$$set));

          _this16.$set(normalized, 'children', isLoaded ? _this16.normalize(normalized, children, prevNodeMap) : []);

          if (isDefaultExpanded === true) normalized.ancestors.forEach(function (ancestor) {
            ancestor.isExpanded = true;
          });

          if (!isLoaded && typeof _this16.loadOptions !== 'function') {
            warning_warning(function () {
              return false;
            }, function () {
              return 'Unloaded branch node detected. "loadOptions" prop is required to load its children.';
            });
          } else if (!isLoaded && normalized.isExpanded) {
            _this16.loadChildrenOptions(normalized);
          }
        }

        normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[ALL_DESCENDANTS]++;
        });
        if (isLeaf) normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[LEAF_DESCENDANTS]++;
        });

        if (!isRootNode) {
          parentNode.count[ALL_CHILDREN] += 1;
          if (isLeaf) parentNode.count[LEAF_CHILDREN] += 1;
          if (isDisabled) parentNode.hasDisabledDescendants = true;
        }

        if (prevNodeMap && prevNodeMap[id]) {
          var prev = prevNodeMap[id];
          normalized.isMatched = prev.isMatched;
          normalized.showAllChildrenOnSearch = prev.showAllChildrenOnSearch;
          normalized.isHighlighted = prev.isHighlighted;

          if (prev.isBranch && normalized.isBranch) {
            normalized.isExpanded = prev.isExpanded;
            normalized.isExpandedOnSearch = prev.isExpandedOnSearch;

            if (prev.childrenStates.isLoaded && !normalized.childrenStates.isLoaded) {
              normalized.isExpanded = false;
            } else {
              normalized.childrenStates = _objectSpread({}, prev.childrenStates);
            }
          }
        }

        return normalized;
      });

      if (this.branchNodesFirst) {
        var branchNodes = normalizedOptions.filter(function (option) {
          return option.isBranch;
        });
        var leafNodes = normalizedOptions.filter(function (option) {
          return option.isLeaf;
        });
        normalizedOptions = branchNodes.concat(leafNodes);
      }

      return normalizedOptions;
    },
    loadRootOptions: function loadRootOptions() {
      var _this17 = this;

      this.callLoadOptionsProp({
        action: LOAD_ROOT_OPTIONS,
        isPending: function isPending() {
          return _this17.rootOptionsStates.isLoading;
        },
        start: function start() {
          _this17.rootOptionsStates.isLoading = true;
          _this17.rootOptionsStates.loadingError = '';
        },
        succeed: function succeed() {
          _this17.rootOptionsStates.isLoaded = true;

          _this17.$nextTick(function () {
            _this17.resetHighlightedOptionWhenNecessary(true);
          });
        },
        fail: function fail(err) {
          _this17.rootOptionsStates.loadingError = getErrorMessage(err);
        },
        end: function end() {
          _this17.rootOptionsStates.isLoading = false;
        }
      });
    },
    loadChildrenOptions: function loadChildrenOptions(parentNode) {
      var _this18 = this;

      var id = parentNode.id,
          raw = parentNode.raw;
      this.callLoadOptionsProp({
        action: LOAD_CHILDREN_OPTIONS,
        args: {
          parentNode: raw
        },
        isPending: function isPending() {
          return _this18.getNode(id).childrenStates.isLoading;
        },
        start: function start() {
          _this18.getNode(id).childrenStates.isLoading = true;
          _this18.getNode(id).childrenStates.loadingError = '';
        },
        succeed: function succeed() {
          _this18.getNode(id).childrenStates.isLoaded = true;
        },
        fail: function fail(err) {
          _this18.getNode(id).childrenStates.loadingError = getErrorMessage(err);
        },
        end: function end() {
          _this18.getNode(id).childrenStates.isLoading = false;
        }
      });
    },
    callLoadOptionsProp: function callLoadOptionsProp(_ref3) {
      var action = _ref3.action,
          args = _ref3.args,
          isPending = _ref3.isPending,
          start = _ref3.start,
          succeed = _ref3.succeed,
          fail = _ref3.fail,
          end = _ref3.end;

      if (!this.loadOptions || isPending()) {
        return;
      }

      start();
      var callback = once_default()(function (err, result) {
        if (err) {
          fail(err);
        } else {
          succeed(result);
        }

        end();
      });
      var result = this.loadOptions(_objectSpread({
        id: this.getInstanceId(),
        instanceId: this.getInstanceId(),
        action: action
      }, args, {
        callback: callback
      }));

      if (external_is_promise_default()(result)) {
        result.then(function () {
          callback();
        }, function (err) {
          callback(err);
        }).catch(function (err) {
          console.error(err);
        });
      }
    },
    checkDuplication: function checkDuplication(node) {
      var _this19 = this;

      warning_warning(function () {
        return !(node.id in _this19.forest.nodeMap && !_this19.forest.nodeMap[node.id].isFallbackNode);
      }, function () {
        return "Detected duplicate presence of node id ".concat(JSON.stringify(node.id), ". ") + "Their labels are \"".concat(_this19.forest.nodeMap[node.id].label, "\" and \"").concat(node.label, "\" respectively.");
      });
    },
    verifyNodeShape: function verifyNodeShape(node) {
      warning_warning(function () {
        return !(node.children === undefined && node.isBranch === true);
      }, function () {
        return 'Are you meant to declare an unloaded branch node? ' + '`isBranch: true` is no longer supported, please use `children: null` instead.';
      });
    },
    select: function select(node) {
      if (this.disabled || node.isDisabled) {
        return;
      }

      if (this.single) {
        this.clear();
      }

      var nextState = this.multiple && !this.flat ? this.forest.checkedStateMap[node.id] === UNCHECKED : !this.isSelected(node);

      if (nextState) {
        this._selectNode(node);
      } else {
        this._deselectNode(node);
      }

      this.buildForestState();

      if (nextState) {
        this.$emit('select', node.raw, this.getInstanceId());
      } else {
        this.$emit('deselect', node.raw, this.getInstanceId());
      }

      if (this.localSearch.active && nextState && (this.single || this.clearOnSelect)) {
        this.resetSearchQuery();
      }

      if (this.single && this.closeOnSelect) {
        this.closeMenu();

        if (this.searchable) {
          this._blurOnSelect = true;
        }
      }
    },
    clear: function clear() {
      var _this20 = this;

      if (this.hasValue) {
        if (this.single || this.allowClearingDisabled) {
          this.forest.selectedNodeIds = [];
        } else {
            this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(function (nodeId) {
              return _this20.getNode(nodeId).isDisabled;
            });
          }

        this.buildForestState();
      }
    },
    _selectNode: function _selectNode(node) {
      var _this21 = this;

      if (this.single || this.disableBranchNodes) {
        return this.addValue(node);
      }

      if (this.flat) {
        this.addValue(node);

        if (this.autoSelectAncestors) {
          node.ancestors.forEach(function (ancestor) {
            if (!_this21.isSelected(ancestor) && !ancestor.isDisabled) _this21.addValue(ancestor);
          });
        } else if (this.autoSelectDescendants) {
          this.traverseDescendantsBFS(node, function (descendant) {
            if (!_this21.isSelected(descendant) && !descendant.isDisabled) _this21.addValue(descendant);
          });
        }

        return;
      }

      var isFullyChecked = node.isLeaf || !node.hasDisabledDescendants || this.allowSelectingDisabledDescendants;

      if (isFullyChecked) {
        this.addValue(node);
      }

      if (node.isBranch) {
        this.traverseDescendantsBFS(node, function (descendant) {
          if (!descendant.isDisabled || _this21.allowSelectingDisabledDescendants) {
            _this21.addValue(descendant);
          }
        });
      }

      if (isFullyChecked) {
        var curr = node;

        while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
          if (curr.children.every(this.isSelected)) this.addValue(curr);else break;
        }
      }
    },
    _deselectNode: function _deselectNode(node) {
      var _this22 = this;

      if (this.disableBranchNodes) {
        return this.removeValue(node);
      }

      if (this.flat) {
        this.removeValue(node);

        if (this.autoDeselectAncestors) {
          node.ancestors.forEach(function (ancestor) {
            if (_this22.isSelected(ancestor) && !ancestor.isDisabled) _this22.removeValue(ancestor);
          });
        } else if (this.autoDeselectDescendants) {
          this.traverseDescendantsBFS(node, function (descendant) {
            if (_this22.isSelected(descendant) && !descendant.isDisabled) _this22.removeValue(descendant);
          });
        }

        return;
      }

      var hasUncheckedSomeDescendants = false;

      if (node.isBranch) {
        this.traverseDescendantsDFS(node, function (descendant) {
          if (!descendant.isDisabled || _this22.allowSelectingDisabledDescendants) {
            _this22.removeValue(descendant);

            hasUncheckedSomeDescendants = true;
          }
        });
      }

      if (node.isLeaf || hasUncheckedSomeDescendants || node.children.length === 0) {
        this.removeValue(node);
        var curr = node;

        while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
          if (this.isSelected(curr)) this.removeValue(curr);else break;
        }
      }
    },
    addValue: function addValue(node) {
      this.forest.selectedNodeIds.push(node.id);
      this.forest.selectedNodeMap[node.id] = true;
    },
    removeValue: function removeValue(node) {
      removeFromArray(this.forest.selectedNodeIds, node.id);
      delete this.forest.selectedNodeMap[node.id];
    },
    removeLastValue: function removeLastValue() {
      if (!this.hasValue) return;
      if (this.single) return this.clear();
      var lastValue = last_default()(this.internalValue);
      var lastSelectedNode = this.getNode(lastValue);
      this.select(lastSelectedNode);
    },
    saveMenuScrollPosition: function saveMenuScrollPosition() {
      var $menu = this.getMenu();
      if ($menu) this.menu.lastScrollPosition = $menu.scrollTop;
    },
    restoreMenuScrollPosition: function restoreMenuScrollPosition() {
      var $menu = this.getMenu();
      if ($menu) $menu.scrollTop = this.menu.lastScrollPosition;
    }
  },
  created: function created() {
    this.verifyProps();
    this.resetFlags();
  },
  mounted: function mounted() {
    if (this.autoFocus) this.focusInput();
    if (!this.options && !this.async && this.autoLoadRootOptions) this.loadRootOptions();
    if (this.alwaysOpen) this.openMenu();
    if (this.async && this.defaultOptions) this.handleRemoteSearch();
  },
  destroyed: function destroyed() {
    this.toggleClickOutsideEvent(false);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HiddenFields.vue?vue&type=script&lang=js&


function stringifyValue(value) {
  if (typeof value === 'string') return value;
  if (value != null && !isNaN_isNaN(value)) return JSON.stringify(value);
  return '';
}

/* harmony default export */ var HiddenFieldsvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--hidden-fields',
  inject: ['instance'],
  functional: true,
  render: function render(_, context) {
    var h = arguments[0];
    var instance = context.injections.instance;
    if (!instance.name || instance.disabled || !instance.hasValue) return null;
    var stringifiedValues = instance.internalValue.map(stringifyValue);
    if (instance.multiple && instance.joinValues) stringifiedValues = [stringifiedValues.join(instance.delimiter)];
    return stringifiedValues.map(function (stringifiedValue, i) {
      return h("input", {
        attrs: {
          type: "hidden",
          name: instance.name
        },
        domProps: {
          "value": stringifiedValue
        },
        key: 'hidden-field-' + i
      });
    });
  }
});
// CONCATENATED MODULE: ./src/components/HiddenFields.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HiddenFieldsvue_type_script_lang_js_ = (HiddenFieldsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/HiddenFields.vue
var HiddenFields_render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  components_HiddenFieldsvue_type_script_lang_js_,
  HiddenFields_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/HiddenFields.vue"
/* harmony default export */ var HiddenFields = (component.exports);
// EXTERNAL MODULE: external "babel-helper-vue-jsx-merge-props"
var external_babel_helper_vue_jsx_merge_props_ = __nested_webpack_require_5479__(13);
var external_babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_babel_helper_vue_jsx_merge_props_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Input.vue?vue&type=script&lang=js&



var keysThatRequireMenuBeingOpen = [KEY_CODES.ENTER, KEY_CODES.END, KEY_CODES.HOME, KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_UP, KEY_CODES.ARROW_RIGHT, KEY_CODES.ARROW_DOWN];
/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--input',
  inject: ['instance'],
  data: function data() {
    return {
      inputWidth: MIN_INPUT_WIDTH,
      value: ''
    };
  },
  computed: {
    needAutoSize: function needAutoSize() {
      var instance = this.instance;
      return instance.searchable && !instance.disabled && instance.multiple;
    },
    inputStyle: function inputStyle() {
      return {
        width: this.needAutoSize ? "".concat(this.inputWidth, "px") : null
      };
    }
  },
  watch: {
    'instance.trigger.searchQuery': function instanceTriggerSearchQuery(newValue) {
      this.value = newValue;
    },
    value: function value() {
      if (this.needAutoSize) this.$nextTick(this.updateInputWidth);
    }
  },
  created: function created() {
    this.debouncedCallback = debounce_default()(this.updateSearchQuery, INPUT_DEBOUNCE_DELAY, {
      leading: true,
      trailing: true
    });
  },
  methods: {
    clear: function clear() {
      this.onInput({
        target: {
          value: ''
        }
      });
    },
    focus: function focus() {
      var instance = this.instance;

      if (!instance.disabled) {
        this.$refs.input && this.$refs.input.focus();
      }
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus: function onFocus() {
      var instance = this.instance;
      instance.trigger.isFocused = true;
      if (instance.openOnFocus) instance.openMenu();
    },
    onBlur: function onBlur() {
      var instance = this.instance;
      var menu = instance.getMenu();

      if (menu && document.activeElement === menu) {
        return this.focus();
      }

      instance.trigger.isFocused = false;
      instance.closeMenu();
    },
    onInput: function onInput(evt) {
      var value = evt.target.value;
      this.value = value;

      if (value) {
        this.debouncedCallback();
      } else {
        this.debouncedCallback.cancel();
        this.updateSearchQuery();
      }
    },
    onKeyDown: function onKeyDown(evt) {
      var instance = this.instance;
      var key = 'which' in evt ? evt.which : evt.keyCode;
      if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) return;

      if (!instance.menu.isOpen && includes(keysThatRequireMenuBeingOpen, key)) {
        evt.preventDefault();
        return instance.openMenu();
      }

      switch (key) {
        case KEY_CODES.BACKSPACE:
          {
            if (instance.backspaceRemoves && !this.value.length) {
              instance.removeLastValue();
            }

            break;
          }

        case KEY_CODES.ENTER:
          {
            evt.preventDefault();
            if (instance.menu.current === null) return;
            var current = instance.getNode(instance.menu.current);
            if (current.isBranch && instance.disableBranchNodes) return;
            instance.select(current);
            break;
          }

        case KEY_CODES.ESCAPE:
          {
            if (this.value.length) {
              this.clear();
            } else if (instance.menu.isOpen) {
              instance.closeMenu();
            }

            break;
          }

        case KEY_CODES.END:
          {
            evt.preventDefault();
            instance.highlightLastOption();
            break;
          }

        case KEY_CODES.HOME:
          {
            evt.preventDefault();
            instance.highlightFirstOption();
            break;
          }

        case KEY_CODES.ARROW_LEFT:
          {
            var _current = instance.getNode(instance.menu.current);

            if (_current.isBranch && instance.shouldExpand(_current)) {
              evt.preventDefault();
              instance.toggleExpanded(_current);
            } else if (!_current.isRootNode && (_current.isLeaf || _current.isBranch && !instance.shouldExpand(_current))) {
              evt.preventDefault();
              instance.setCurrentHighlightedOption(_current.parentNode);
            }

            break;
          }

        case KEY_CODES.ARROW_UP:
          {
            evt.preventDefault();
            instance.highlightPrevOption();
            break;
          }

        case KEY_CODES.ARROW_RIGHT:
          {
            var _current2 = instance.getNode(instance.menu.current);

            if (_current2.isBranch && !instance.shouldExpand(_current2)) {
              evt.preventDefault();
              instance.toggleExpanded(_current2);
            }

            break;
          }

        case KEY_CODES.ARROW_DOWN:
          {
            evt.preventDefault();
            instance.highlightNextOption();
            break;
          }

        case KEY_CODES.DELETE:
          {
            if (instance.deleteRemoves && !this.value.length) {
              instance.removeLastValue();
            }

            break;
          }

        default:
          {
            instance.openMenu();
          }
      }
    },
    onMouseDown: function onMouseDown(evt) {
      if (this.value.length) {
        evt.stopPropagation();
      }
    },
    renderInputContainer: function renderInputContainer() {
      var h = this.$createElement;
      var instance = this.instance;
      var props = {};
      var children = [];

      if (instance.searchable && !instance.disabled) {
        children.push(this.renderInput());
        if (this.needAutoSize) children.push(this.renderSizer());
      }

      if (!instance.searchable) {
        deepExtend(props, {
          on: {
            focus: this.onFocus,
            blur: this.onBlur,
            keydown: this.onKeyDown
          },
          ref: 'input'
        });
      }

      if (!instance.searchable && !instance.disabled) {
        deepExtend(props, {
          attrs: {
            tabIndex: instance.tabIndex
          }
        });
      }

      return h("div", external_babel_helper_vue_jsx_merge_props_default()([{
        "class": "vue-treeselect__input-container"
      }, props]), [children]);
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var instance = this.instance;
      return h("input", {
        ref: "input",
        "class": "vue-treeselect__input",
        attrs: {
          type: "text",
          autocomplete: "off",
          tabIndex: instance.tabIndex,
          required: instance.required && !instance.hasValue
        },
        domProps: {
          "value": this.value
        },
        style: this.inputStyle,
        on: {
          "focus": this.onFocus,
          "input": this.onInput,
          "blur": this.onBlur,
          "keydown": this.onKeyDown,
          "mousedown": this.onMouseDown
        }
      });
    },
    renderSizer: function renderSizer() {
      var h = this.$createElement;
      return h("div", {
        ref: "sizer",
        "class": "vue-treeselect__sizer"
      }, [this.value]);
    },
    updateInputWidth: function updateInputWidth() {
      this.inputWidth = Math.max(MIN_INPUT_WIDTH, this.$refs.sizer.scrollWidth + 15);
    },
    updateSearchQuery: function updateSearchQuery() {
      var instance = this.instance;
      instance.trigger.searchQuery = this.value;
    }
  },
  render: function render() {
    return this.renderInputContainer();
  }
});
// CONCATENATED MODULE: ./src/components/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Input.vue
var Input_render, Input_staticRenderFns




/* normalize component */

var Input_component = normalizeComponent(
  components_Inputvue_type_script_lang_js_,
  Input_render,
  Input_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Input_api; }
Input_component.options.__file = "src/components/Input.vue"
/* harmony default export */ var Input = (Input_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Placeholder.vue?vue&type=script&lang=js&
/* harmony default export */ var Placeholdervue_type_script_lang_js_ = ({
  name: 'vue-treeselect--placeholder',
  inject: ['instance'],
  render: function render() {
    var h = arguments[0];
    var instance = this.instance;
    var placeholderClass = {
      'vue-treeselect__placeholder': true,
      'vue-treeselect-helper-zoom-effect-off': true,
      'vue-treeselect-helper-hide': instance.hasValue || instance.trigger.searchQuery
    };
    return h("div", {
      "class": placeholderClass
    }, [instance.placeholder]);
  }
});
// CONCATENATED MODULE: ./src/components/Placeholder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Placeholdervue_type_script_lang_js_ = (Placeholdervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Placeholder.vue
var Placeholder_render, Placeholder_staticRenderFns




/* normalize component */

var Placeholder_component = normalizeComponent(
  components_Placeholdervue_type_script_lang_js_,
  Placeholder_render,
  Placeholder_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Placeholder_api; }
Placeholder_component.options.__file = "src/components/Placeholder.vue"
/* harmony default export */ var Placeholder = (Placeholder_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SingleValue.vue?vue&type=script&lang=js&


/* harmony default export */ var SingleValuevue_type_script_lang_js_ = ({
  name: 'vue-treeselect--single-value',
  inject: ['instance'],
  methods: {
    renderSingleValueLabel: function renderSingleValueLabel() {
      var instance = this.instance;
      var node = instance.selectedNodes[0];
      var customValueLabelRenderer = instance.$scopedSlots['value-label'];
      return customValueLabelRenderer ? customValueLabelRenderer({
        node: node
      }) : node.label;
    }
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance,
        renderValueContainer = this.$parent.renderValueContainer;
    var shouldShowValue = instance.hasValue && !instance.trigger.searchQuery;
    return renderValueContainer([shouldShowValue && h("div", {
      "class": "vue-treeselect__single-value"
    }, [this.renderSingleValueLabel()]), h(Placeholder), h(Input, {
      ref: "input"
    })]);
  }
});
// CONCATENATED MODULE: ./src/components/SingleValue.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SingleValuevue_type_script_lang_js_ = (SingleValuevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/SingleValue.vue
var SingleValue_render, SingleValue_staticRenderFns




/* normalize component */

var SingleValue_component = normalizeComponent(
  components_SingleValuevue_type_script_lang_js_,
  SingleValue_render,
  SingleValue_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var SingleValue_api; }
SingleValue_component.options.__file = "src/components/SingleValue.vue"
/* harmony default export */ var SingleValue = (SingleValue_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Delete.vue?vue&type=template&id=364b6320&
var Deletevue_type_template_id_364b6320_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 348.333 348.333"
      }
    },
    [
      _c("path", {
        attrs: {
          d:
            "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
        }
      })
    ]
  )
}
var Deletevue_type_template_id_364b6320_staticRenderFns = []
Deletevue_type_template_id_364b6320_render._withStripped = true


// CONCATENATED MODULE: ./src/components/icons/Delete.vue?vue&type=template&id=364b6320&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Delete.vue?vue&type=script&lang=js&
/* harmony default export */ var Deletevue_type_script_lang_js_ = ({
  name: 'vue-treeselect--x'
});
// CONCATENATED MODULE: ./src/components/icons/Delete.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_Deletevue_type_script_lang_js_ = (Deletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/Delete.vue





/* normalize component */

var Delete_component = normalizeComponent(
  icons_Deletevue_type_script_lang_js_,
  Deletevue_type_template_id_364b6320_render,
  Deletevue_type_template_id_364b6320_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Delete_api; }
Delete_component.options.__file = "src/components/icons/Delete.vue"
/* harmony default export */ var Delete = (Delete_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MultiValueItem.vue?vue&type=script&lang=js&


/* harmony default export */ var MultiValueItemvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--multi-value-item',
  inject: ['instance'],
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleMouseDown: onLeftClick(function handleMouseDown() {
      var instance = this.instance,
          node = this.node;
      instance.select(node);
    })
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance,
        node = this.node;
    var itemClass = {
      'vue-treeselect__multi-value-item': true,
      'vue-treeselect__multi-value-item-disabled': node.isDisabled,
      'vue-treeselect__multi-value-item-new': node.isNew
    };
    var customValueLabelRenderer = instance.$scopedSlots['value-label'];
    var labelRenderer = customValueLabelRenderer ? customValueLabelRenderer({
      node: node
    }) : node.label;
    return h("div", {
      "class": "vue-treeselect__multi-value-item-container"
    }, [h("div", {
      "class": itemClass,
      on: {
        "mousedown": this.handleMouseDown
      }
    }, [h("span", {
      "class": "vue-treeselect__multi-value-label"
    }, [labelRenderer]), h("span", {
      "class": "vue-treeselect__icon vue-treeselect__value-remove"
    }, [h(Delete)])])]);
  }
});
// CONCATENATED MODULE: ./src/components/MultiValueItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MultiValueItemvue_type_script_lang_js_ = (MultiValueItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MultiValueItem.vue
var MultiValueItem_render, MultiValueItem_staticRenderFns




/* normalize component */

var MultiValueItem_component = normalizeComponent(
  components_MultiValueItemvue_type_script_lang_js_,
  MultiValueItem_render,
  MultiValueItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MultiValueItem_api; }
MultiValueItem_component.options.__file = "src/components/MultiValueItem.vue"
/* harmony default export */ var MultiValueItem = (MultiValueItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MultiValue.vue?vue&type=script&lang=js&




/* harmony default export */ var MultiValuevue_type_script_lang_js_ = ({
  name: 'vue-treeselect--multi-value',
  inject: ['instance'],
  methods: {
    renderMultiValueItems: function renderMultiValueItems() {
      var h = this.$createElement;
      var instance = this.instance;
      return instance.internalValue.slice(0, instance.limit).map(instance.getNode).map(function (node) {
        return h(MultiValueItem, {
          key: "multi-value-item-".concat(node.id),
          attrs: {
            node: node
          }
        });
      });
    },
    renderExceedLimitTip: function renderExceedLimitTip() {
      var h = this.$createElement;
      var instance = this.instance;
      var count = instance.internalValue.length - instance.limit;
      if (count <= 0) return null;
      return h("div", {
        "class": "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
        key: "exceed-limit-tip"
      }, [h("span", {
        "class": "vue-treeselect__limit-tip-text"
      }, [instance.limitText(count)])]);
    }
  },
  render: function render() {
    var h = arguments[0];
    var renderValueContainer = this.$parent.renderValueContainer;
    var transitionGroupProps = {
      props: {
        tag: 'div',
        name: 'vue-treeselect__multi-value-item--transition',
        appear: true
      }
    };
    return renderValueContainer(h("transition-group", external_babel_helper_vue_jsx_merge_props_default()([{
      "class": "vue-treeselect__multi-value"
    }, transitionGroupProps]), [this.renderMultiValueItems(), this.renderExceedLimitTip(), h(Placeholder, {
      key: "placeholder"
    }), h(Input, {
      ref: "input",
      key: "input"
    })]));
  }
});
// CONCATENATED MODULE: ./src/components/MultiValue.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MultiValuevue_type_script_lang_js_ = (MultiValuevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MultiValue.vue
var MultiValue_render, MultiValue_staticRenderFns




/* normalize component */

var MultiValue_component = normalizeComponent(
  components_MultiValuevue_type_script_lang_js_,
  MultiValue_render,
  MultiValue_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MultiValue_api; }
MultiValue_component.options.__file = "src/components/MultiValue.vue"
/* harmony default export */ var MultiValue = (MultiValue_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Arrow.vue?vue&type=template&id=11186cd4&
var Arrowvue_type_template_id_11186cd4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 292.362 292.362"
      }
    },
    [
      _c("path", {
        attrs: {
          d:
            "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
        }
      })
    ]
  )
}
var Arrowvue_type_template_id_11186cd4_staticRenderFns = []
Arrowvue_type_template_id_11186cd4_render._withStripped = true


// CONCATENATED MODULE: ./src/components/icons/Arrow.vue?vue&type=template&id=11186cd4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icons/Arrow.vue?vue&type=script&lang=js&
/* harmony default export */ var Arrowvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--arrow'
});
// CONCATENATED MODULE: ./src/components/icons/Arrow.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_Arrowvue_type_script_lang_js_ = (Arrowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/Arrow.vue





/* normalize component */

var Arrow_component = normalizeComponent(
  icons_Arrowvue_type_script_lang_js_,
  Arrowvue_type_template_id_11186cd4_render,
  Arrowvue_type_template_id_11186cd4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Arrow_api; }
Arrow_component.options.__file = "src/components/icons/Arrow.vue"
/* harmony default export */ var Arrow = (Arrow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Control.vue?vue&type=script&lang=js&





/* harmony default export */ var Controlvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--control',
  inject: ['instance'],
  computed: {
    shouldShowX: function shouldShowX() {
      var instance = this.instance;
      return instance.clearable && !instance.disabled && instance.hasValue && (this.hasUndisabledValue || instance.allowClearingDisabled);
    },
    shouldShowArrow: function shouldShowArrow() {
      var instance = this.instance;
      if (!instance.alwaysOpen) return true;
      return !instance.menu.isOpen;
    },
    hasUndisabledValue: function hasUndisabledValue() {
      var instance = this.instance;
      return instance.hasValue && instance.internalValue.some(function (id) {
        return !instance.getNode(id).isDisabled;
      });
    }
  },
  methods: {
    renderX: function renderX() {
      var h = this.$createElement;
      var instance = this.instance;
      var title = instance.multiple ? instance.clearAllText : instance.clearValueText;
      if (!this.shouldShowX) return null;
      return h("div", {
        "class": "vue-treeselect__x-container",
        attrs: {
          title: title
        },
        on: {
          "mousedown": this.handleMouseDownOnX
        }
      }, [h(Delete, {
        "class": "vue-treeselect__x"
      })]);
    },
    renderArrow: function renderArrow() {
      var h = this.$createElement;
      var instance = this.instance;
      var arrowClass = {
        'vue-treeselect__control-arrow': true,
        'vue-treeselect__control-arrow--rotated': instance.menu.isOpen
      };
      if (!this.shouldShowArrow) return null;
      return h("div", {
        "class": "vue-treeselect__control-arrow-container",
        on: {
          "mousedown": this.handleMouseDownOnArrow
        }
      }, [h(Arrow, {
        "class": arrowClass
      })]);
    },
    handleMouseDownOnX: onLeftClick(function handleMouseDownOnX(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var instance = this.instance;
      var result = instance.beforeClearAll();

      var handler = function handler(shouldClear) {
        if (shouldClear) instance.clear();
      };

      if (external_is_promise_default()(result)) {
        result.then(handler);
      } else {
        setTimeout(function () {
          return handler(result);
        }, 0);
      }
    }),
    handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnArrow(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var instance = this.instance;
      instance.focusInput();
      instance.toggleMenu();
    }),
    renderValueContainer: function renderValueContainer(children) {
      var h = this.$createElement;
      return h("div", {
        "class": "vue-treeselect__value-container"
      }, [children]);
    }
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance;
    var ValueContainer = instance.single ? SingleValue : MultiValue;
    return h("div", {
      "class": "vue-treeselect__control",
      on: {
        "mousedown": instance.handleMouseDown
      }
    }, [h(ValueContainer, {
      ref: "value-container"
    }), this.renderX(), this.renderArrow()]);
  }
});
// CONCATENATED MODULE: ./src/components/Control.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Controlvue_type_script_lang_js_ = (Controlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Control.vue
var Control_render, Control_staticRenderFns




/* normalize component */

var Control_component = normalizeComponent(
  components_Controlvue_type_script_lang_js_,
  Control_render,
  Control_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Control_api; }
Control_component.options.__file = "src/components/Control.vue"
/* harmony default export */ var Control = (Control_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tip.vue?vue&type=script&lang=js&
/* harmony default export */ var Tipvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--tip',
  functional: true,
  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  render: function render(_, context) {
    var h = arguments[0];
    var props = context.props,
        children = context.children;
    return h("div", {
      "class": "vue-treeselect__tip vue-treeselect__".concat(props.type, "-tip")
    }, [h("div", {
      "class": "vue-treeselect__icon-container"
    }, [h("span", {
      "class": "vue-treeselect__icon-".concat(props.icon)
    })]), h("span", {
      "class": "vue-treeselect__tip-text vue-treeselect__".concat(props.type, "-tip-text")
    }, [children])]);
  }
});
// CONCATENATED MODULE: ./src/components/Tip.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tipvue_type_script_lang_js_ = (Tipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tip.vue
var Tip_render, Tip_staticRenderFns




/* normalize component */

var Tip_component = normalizeComponent(
  components_Tipvue_type_script_lang_js_,
  Tip_render,
  Tip_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Tip_api; }
Tip_component.options.__file = "src/components/Tip.vue"
/* harmony default export */ var Tip = (Tip_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Option.vue?vue&type=script&lang=js&





var arrowPlaceholder, checkMark, minusMark;
var Option = {
  name: 'vue-treeselect--option',
  inject: ['instance'],
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  computed: {
    shouldExpand: function shouldExpand() {
      var instance = this.instance,
          node = this.node;
      return node.isBranch && instance.shouldExpand(node);
    },
    shouldShow: function shouldShow() {
      var instance = this.instance,
          node = this.node;
      return instance.shouldShowOptionInMenu(node);
    }
  },
  methods: {
    renderOption: function renderOption() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      var optionClass = {
        'vue-treeselect__option': true,
        'vue-treeselect__option--disabled': node.isDisabled,
        'vue-treeselect__option--selected': instance.isSelected(node),
        'vue-treeselect__option--highlight': node.isHighlighted,
        'vue-treeselect__option--matched': instance.localSearch.active && node.isMatched,
        'vue-treeselect__option--hide': !this.shouldShow
      };
      return h("div", {
        "class": optionClass,
        on: {
          "mouseenter": this.handleMouseEnterOption
        },
        attrs: {
          "data-id": node.id
        }
      }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
    },
    renderSubOptionsList: function renderSubOptionsList() {
      var h = this.$createElement;
      if (!this.shouldExpand) return null;
      return h("div", {
        "class": "vue-treeselect__list"
      }, [this.renderSubOptions(), this.renderNoChildrenTip(), this.renderLoadingChildrenTip(), this.renderLoadingChildrenErrorTip()]);
    },
    renderArrow: function renderArrow() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (instance.shouldFlattenOptions && this.shouldShow) return null;

      if (node.isBranch) {
        var transitionProps = {
          props: {
            name: 'vue-treeselect__option-arrow--prepare',
            appear: true
          }
        };
        var arrowClass = {
          'vue-treeselect__option-arrow': true,
          'vue-treeselect__option-arrow--rotated': this.shouldExpand
        };
        return h("div", {
          "class": "vue-treeselect__option-arrow-container",
          on: {
            "mousedown": this.handleMouseDownOnArrow
          }
        }, [h("transition", transitionProps, [h(Arrow, {
          "class": arrowClass
        })])]);
      }

      if (instance.hasBranchNodes) {
        if (!arrowPlaceholder) arrowPlaceholder = h("div", {
          "class": "vue-treeselect__option-arrow-placeholder"
        }, ["\xA0"]);
        return arrowPlaceholder;
      }

      return null;
    },
    renderLabelContainer: function renderLabelContainer(children) {
      var h = this.$createElement;
      return h("div", {
        "class": "vue-treeselect__label-container",
        on: {
          "mousedown": this.handleMouseDownOnLabelContainer
        }
      }, [children]);
    },
    renderCheckboxContainer: function renderCheckboxContainer(children) {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (instance.single) return null;
      if (instance.disableBranchNodes && node.isBranch) return null;
      return h("div", {
        "class": "vue-treeselect__checkbox-container"
      }, [children]);
    },
    renderCheckbox: function renderCheckbox() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      var checkedState = instance.forest.checkedStateMap[node.id];
      var checkboxClass = {
        'vue-treeselect__checkbox': true,
        'vue-treeselect__checkbox--checked': checkedState === CHECKED,
        'vue-treeselect__checkbox--indeterminate': checkedState === INDETERMINATE,
        'vue-treeselect__checkbox--unchecked': checkedState === UNCHECKED,
        'vue-treeselect__checkbox--disabled': node.isDisabled
      };
      if (!checkMark) checkMark = h("span", {
        "class": "vue-treeselect__check-mark"
      });
      if (!minusMark) minusMark = h("span", {
        "class": "vue-treeselect__minus-mark"
      });
      return h("span", {
        "class": checkboxClass
      }, [checkMark, minusMark]);
    },
    renderLabel: function renderLabel() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      var shouldShowCount = node.isBranch && (instance.localSearch.active ? instance.showCountOnSearchComputed : instance.showCount);
      var count = shouldShowCount ? instance.localSearch.active ? instance.localSearch.countMap[node.id][instance.showCountOf] : node.count[instance.showCountOf] : NaN;
      var labelClassName = 'vue-treeselect__label';
      var countClassName = 'vue-treeselect__count';
      var customLabelRenderer = instance.$scopedSlots['option-label'];
      if (customLabelRenderer) return customLabelRenderer({
        node: node,
        shouldShowCount: shouldShowCount,
        count: count,
        labelClassName: labelClassName,
        countClassName: countClassName
      });
      return h("label", {
        "class": labelClassName
      }, [node.label, shouldShowCount && h("span", {
        "class": countClassName
      }, ["(", count, ")"])]);
    },
    renderSubOptions: function renderSubOptions() {
      var h = this.$createElement;
      var node = this.node;
      if (!node.childrenStates.isLoaded) return null;
      return node.children.map(function (childNode) {
        return h(Option, {
          attrs: {
            node: childNode
          },
          key: childNode.id
        });
      });
    },
    renderNoChildrenTip: function renderNoChildrenTip() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (!node.childrenStates.isLoaded || node.children.length) return null;
      return h(Tip, {
        attrs: {
          type: "no-children",
          icon: "warning"
        }
      }, [instance.noChildrenText]);
    },
    renderLoadingChildrenTip: function renderLoadingChildrenTip() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (!node.childrenStates.isLoading) return null;
      return h(Tip, {
        attrs: {
          type: "loading",
          icon: "loader"
        }
      }, [instance.loadingText]);
    },
    renderLoadingChildrenErrorTip: function renderLoadingChildrenErrorTip() {
      var h = this.$createElement;
      var instance = this.instance,
          node = this.node;
      if (!node.childrenStates.loadingError) return null;
      return h(Tip, {
        attrs: {
          type: "error",
          icon: "error"
        }
      }, [node.childrenStates.loadingError, h("a", {
        "class": "vue-treeselect__retry",
        attrs: {
          title: instance.retryTitle
        },
        on: {
          "mousedown": this.handleMouseDownOnRetry
        }
      }, [instance.retryText])]);
    },
    handleMouseEnterOption: function handleMouseEnterOption(evt) {
      var instance = this.instance,
          node = this.node;
      if (evt.target !== evt.currentTarget) return;
      instance.setCurrentHighlightedOption(node, false);
    },
    handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnOptionArrow() {
      var instance = this.instance,
          node = this.node;
      instance.toggleExpanded(node);
    }),
    handleMouseDownOnLabelContainer: onLeftClick(function handleMouseDownOnLabelContainer() {
      var instance = this.instance,
          node = this.node;

      if (node.isBranch && instance.disableBranchNodes) {
        instance.toggleExpanded(node);
      } else {
        instance.select(node);
      }
    }),
    handleMouseDownOnRetry: onLeftClick(function handleMouseDownOnRetry() {
      var instance = this.instance,
          node = this.node;
      instance.loadChildrenOptions(node);
    })
  },
  render: function render() {
    var h = arguments[0];
    var node = this.node;
    var indentLevel = this.instance.shouldFlattenOptions ? 0 : node.level;

    var listItemClass = defineProperty_default()({
      'vue-treeselect__list-item': true
    }, "vue-treeselect__indent-level-".concat(indentLevel), true);

    var transitionProps = {
      props: {
        name: 'vue-treeselect__list--transition'
      }
    };
    return h("div", {
      "class": listItemClass
    }, [this.renderOption(), node.isBranch && h("transition", transitionProps, [this.renderSubOptionsList()])]);
  }
};
/* harmony default export */ var Optionvue_type_script_lang_js_ = (Option);
// CONCATENATED MODULE: ./src/components/Option.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Optionvue_type_script_lang_js_ = (Optionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Option.vue
var Option_render, Option_staticRenderFns




/* normalize component */

var Option_component = normalizeComponent(
  components_Optionvue_type_script_lang_js_,
  Option_render,
  Option_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Option_api; }
Option_component.options.__file = "src/components/Option.vue"
/* harmony default export */ var components_Option = (Option_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu.vue?vue&type=script&lang=js&




var directionMap = {
  top: 'top',
  bottom: 'bottom',
  above: 'top',
  below: 'bottom'
};
/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--menu',
  inject: ['instance'],
  computed: {
    menuStyle: function menuStyle() {
      var instance = this.instance;
      return {
        maxHeight: instance.maxHeight + 'px'
      };
    },
    menuContainerStyle: function menuContainerStyle() {
      var instance = this.instance;
      return {
        zIndex: instance.appendToBody ? null : instance.zIndex
      };
    }
  },
  watch: {
    'instance.menu.isOpen': function instanceMenuIsOpen(newValue) {
      if (newValue) {
        this.$nextTick(this.onMenuOpen);
      } else {
        this.onMenuClose();
      }
    }
  },
  created: function created() {
    this.menuSizeWatcher = null;
    this.menuResizeAndScrollEventListeners = null;
  },
  mounted: function mounted() {
    var instance = this.instance;
    if (instance.menu.isOpen) this.$nextTick(this.onMenuOpen);
  },
  destroyed: function destroyed() {
    this.onMenuClose();
  },
  methods: {
    renderMenu: function renderMenu() {
      var h = this.$createElement;
      var instance = this.instance;
      if (!instance.menu.isOpen) return null;
      return h("div", {
        ref: "menu",
        "class": "vue-treeselect__menu",
        on: {
          "mousedown": instance.handleMouseDown
        },
        style: this.menuStyle
      }, [this.renderBeforeList(), instance.async ? this.renderAsyncSearchMenuInner() : instance.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(), this.renderAfterList()]);
    },
    renderBeforeList: function renderBeforeList() {
      var instance = this.instance;
      var beforeListRenderer = instance.$scopedSlots['before-list'];
      return beforeListRenderer ? beforeListRenderer() : null;
    },
    renderAfterList: function renderAfterList() {
      var instance = this.instance;
      var afterListRenderer = instance.$scopedSlots['after-list'];
      return afterListRenderer ? afterListRenderer() : null;
    },
    renderNormalMenuInner: function renderNormalMenuInner() {
      var instance = this.instance;

      if (instance.rootOptionsStates.isLoading) {
        return this.renderLoadingOptionsTip();
      } else if (instance.rootOptionsStates.loadingError) {
        return this.renderLoadingRootOptionsErrorTip();
      } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
        return this.renderNoAvailableOptionsTip();
      } else {
        return this.renderOptionList();
      }
    },
    renderLocalSearchMenuInner: function renderLocalSearchMenuInner() {
      var instance = this.instance;

      if (instance.rootOptionsStates.isLoading) {
        return this.renderLoadingOptionsTip();
      } else if (instance.rootOptionsStates.loadingError) {
        return this.renderLoadingRootOptionsErrorTip();
      } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
        return this.renderNoAvailableOptionsTip();
      } else if (instance.localSearch.noResults) {
        return this.renderNoResultsTip();
      } else {
        return this.renderOptionList();
      }
    },
    renderAsyncSearchMenuInner: function renderAsyncSearchMenuInner() {
      var instance = this.instance;
      var entry = instance.getRemoteSearchEntry();
      var shouldShowSearchPromptTip = instance.trigger.searchQuery === '' && !instance.defaultOptions;
      var shouldShowNoResultsTip = shouldShowSearchPromptTip ? false : entry.isLoaded && entry.options.length === 0;

      if (shouldShowSearchPromptTip) {
        return this.renderSearchPromptTip();
      } else if (entry.isLoading) {
        return this.renderLoadingOptionsTip();
      } else if (entry.loadingError) {
        return this.renderAsyncSearchLoadingErrorTip();
      } else if (shouldShowNoResultsTip) {
        return this.renderNoResultsTip();
      } else {
        return this.renderOptionList();
      }
    },
    renderOptionList: function renderOptionList() {
      var h = this.$createElement;
      var instance = this.instance;
      return h("div", {
        "class": "vue-treeselect__list"
      }, [instance.forest.normalizedOptions.map(function (rootNode) {
        return h(components_Option, {
          attrs: {
            node: rootNode
          },
          key: rootNode.id
        });
      })]);
    },
    renderSearchPromptTip: function renderSearchPromptTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "search-prompt",
          icon: "warning"
        }
      }, [instance.searchPromptText]);
    },
    renderLoadingOptionsTip: function renderLoadingOptionsTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "loading",
          icon: "loader"
        }
      }, [instance.loadingText]);
    },
    renderLoadingRootOptionsErrorTip: function renderLoadingRootOptionsErrorTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "error",
          icon: "error"
        }
      }, [instance.rootOptionsStates.loadingError, h("a", {
        "class": "vue-treeselect__retry",
        on: {
          "click": instance.loadRootOptions
        },
        attrs: {
          title: instance.retryTitle
        }
      }, [instance.retryText])]);
    },
    renderAsyncSearchLoadingErrorTip: function renderAsyncSearchLoadingErrorTip() {
      var h = this.$createElement;
      var instance = this.instance;
      var entry = instance.getRemoteSearchEntry();
      return h(Tip, {
        attrs: {
          type: "error",
          icon: "error"
        }
      }, [entry.loadingError, h("a", {
        "class": "vue-treeselect__retry",
        on: {
          "click": instance.handleRemoteSearch
        },
        attrs: {
          title: instance.retryTitle
        }
      }, [instance.retryText])]);
    },
    renderNoAvailableOptionsTip: function renderNoAvailableOptionsTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "no-options",
          icon: "warning"
        }
      }, [instance.noOptionsText]);
    },
    renderNoResultsTip: function renderNoResultsTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return h(Tip, {
        attrs: {
          type: "no-results",
          icon: "warning"
        }
      }, [instance.noResultsText]);
    },
    onMenuOpen: function onMenuOpen() {
      this.adjustMenuOpenDirection();
      this.setupMenuSizeWatcher();
      this.setupMenuResizeAndScrollEventListeners();
    },
    onMenuClose: function onMenuClose() {
      this.removeMenuSizeWatcher();
      this.removeMenuResizeAndScrollEventListeners();
    },
    adjustMenuOpenDirection: function adjustMenuOpenDirection() {
      var instance = this.instance;
      if (!instance.menu.isOpen) return;
      var $menu = instance.getMenu();
      var $control = instance.getControl();
      var menuRect = $menu.getBoundingClientRect();
      var controlRect = $control.getBoundingClientRect();
      var menuHeight = menuRect.height;
      var viewportHeight = window.innerHeight;
      var spaceAbove = controlRect.top;
      var spaceBelow = window.innerHeight - controlRect.bottom;
      var isControlInViewport = controlRect.top >= 0 && controlRect.top <= viewportHeight || controlRect.top < 0 && controlRect.bottom > 0;
      var hasEnoughSpaceBelow = spaceBelow > menuHeight + MENU_BUFFER;
      var hasEnoughSpaceAbove = spaceAbove > menuHeight + MENU_BUFFER;

      if (!isControlInViewport) {
        instance.closeMenu();
      } else if (instance.openDirection !== 'auto') {
        instance.menu.placement = directionMap[instance.openDirection];
      } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
        instance.menu.placement = 'bottom';
      } else {
        instance.menu.placement = 'top';
      }
    },
    setupMenuSizeWatcher: function setupMenuSizeWatcher() {
      var instance = this.instance;
      var $menu = instance.getMenu();
      if (this.menuSizeWatcher) return;
      this.menuSizeWatcher = {
        remove: watchSize($menu, this.adjustMenuOpenDirection)
      };
    },
    setupMenuResizeAndScrollEventListeners: function setupMenuResizeAndScrollEventListeners() {
      var instance = this.instance;
      var $control = instance.getControl();
      if (this.menuResizeAndScrollEventListeners) return;
      this.menuResizeAndScrollEventListeners = {
        remove: setupResizeAndScrollEventListeners($control, this.adjustMenuOpenDirection)
      };
    },
    removeMenuSizeWatcher: function removeMenuSizeWatcher() {
      if (!this.menuSizeWatcher) return;
      this.menuSizeWatcher.remove();
      this.menuSizeWatcher = null;
    },
    removeMenuResizeAndScrollEventListeners: function removeMenuResizeAndScrollEventListeners() {
      if (!this.menuResizeAndScrollEventListeners) return;
      this.menuResizeAndScrollEventListeners.remove();
      this.menuResizeAndScrollEventListeners = null;
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      ref: "menu-container",
      "class": "vue-treeselect__menu-container",
      style: this.menuContainerStyle
    }, [h("transition", {
      attrs: {
        name: "vue-treeselect__menu--transition"
      }
    }, [this.renderMenu()])]);
  }
});
// CONCATENATED MODULE: ./src/components/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Menu.vue
var Menu_render, Menu_staticRenderFns




/* normalize component */

var Menu_component = normalizeComponent(
  components_Menuvue_type_script_lang_js_,
  Menu_render,
  Menu_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Menu_api; }
Menu_component.options.__file = "src/components/Menu.vue"
/* harmony default export */ var Menu = (Menu_component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __nested_webpack_require_5479__(14);
var external_vue_default = /*#__PURE__*/__nested_webpack_require_5479__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuPortal.vue?vue&type=script&lang=js&


function MenuPortalvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MenuPortalvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MenuPortalvue_type_script_lang_js_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MenuPortalvue_type_script_lang_js_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var PortalTarget = {
  name: 'vue-treeselect--portal-target',
  inject: ['instance'],
  watch: {
    'instance.menu.isOpen': function instanceMenuIsOpen(newValue) {
      if (newValue) {
        this.setupHandlers();
      } else {
        this.removeHandlers();
      }
    },
    'instance.menu.placement': function instanceMenuPlacement() {
      this.updateMenuContainerOffset();
    }
  },
  created: function created() {
    this.controlResizeAndScrollEventListeners = null;
    this.controlSizeWatcher = null;
  },
  mounted: function mounted() {
    var instance = this.instance;
    if (instance.menu.isOpen) this.setupHandlers();
  },
  methods: {
    setupHandlers: function setupHandlers() {
      this.updateWidth();
      this.updateMenuContainerOffset();
      this.setupControlResizeAndScrollEventListeners();
      this.setupControlSizeWatcher();
    },
    removeHandlers: function removeHandlers() {
      this.removeControlResizeAndScrollEventListeners();
      this.removeControlSizeWatcher();
    },
    setupControlResizeAndScrollEventListeners: function setupControlResizeAndScrollEventListeners() {
      var instance = this.instance;
      var $control = instance.getControl();
      if (this.controlResizeAndScrollEventListeners) return;
      this.controlResizeAndScrollEventListeners = {
        remove: setupResizeAndScrollEventListeners($control, this.updateMenuContainerOffset)
      };
    },
    setupControlSizeWatcher: function setupControlSizeWatcher() {
      var _this = this;

      var instance = this.instance;
      var $control = instance.getControl();
      if (this.controlSizeWatcher) return;
      this.controlSizeWatcher = {
        remove: watchSize($control, function () {
          _this.updateWidth();

          _this.updateMenuContainerOffset();
        })
      };
    },
    removeControlResizeAndScrollEventListeners: function removeControlResizeAndScrollEventListeners() {
      if (!this.controlResizeAndScrollEventListeners) return;
      this.controlResizeAndScrollEventListeners.remove();
      this.controlResizeAndScrollEventListeners = null;
    },
    removeControlSizeWatcher: function removeControlSizeWatcher() {
      if (!this.controlSizeWatcher) return;
      this.controlSizeWatcher.remove();
      this.controlSizeWatcher = null;
    },
    updateWidth: function updateWidth() {
      var instance = this.instance;
      var $portalTarget = this.$el;
      var $control = instance.getControl();
      var controlRect = $control.getBoundingClientRect();
      $portalTarget.style.width = controlRect.width + 'px';
    },
    updateMenuContainerOffset: function updateMenuContainerOffset() {
      var instance = this.instance;
      var $control = instance.getControl();
      var $portalTarget = this.$el;
      var controlRect = $control.getBoundingClientRect();
      var portalTargetRect = $portalTarget.getBoundingClientRect();
      var offsetY = instance.menu.placement === 'bottom' ? controlRect.height : 0;
      var left = Math.round(controlRect.left - portalTargetRect.left) + 'px';
      var top = Math.round(controlRect.top - portalTargetRect.top + offsetY) + 'px';
      var menuContainerStyle = this.$refs.menu.$refs['menu-container'].style;
      var transformVariations = ['transform', 'webkitTransform', 'MozTransform', 'msTransform'];
      var transform = find(transformVariations, function (t) {
        return t in document.body.style;
      });
      menuContainerStyle[transform] = "translate(".concat(left, ", ").concat(top, ")");
    }
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance;
    var portalTargetClass = ['vue-treeselect__portal-target', instance.wrapperClass];
    var portalTargetStyle = {
      zIndex: instance.zIndex
    };
    return h("div", {
      "class": portalTargetClass,
      style: portalTargetStyle,
      attrs: {
        "data-instance-id": instance.getInstanceId()
      }
    }, [h(Menu, {
      ref: "menu"
    })]);
  },
  destroyed: function destroyed() {
    this.removeHandlers();
  }
};
var placeholder;
/* harmony default export */ var MenuPortalvue_type_script_lang_js_ = ({
  name: 'vue-treeselect--menu-portal',
  created: function created() {
    this.portalTarget = null;
  },
  mounted: function mounted() {
    this.setup();
  },
  destroyed: function destroyed() {
    this.teardown();
  },
  methods: {
    setup: function setup() {
      var el = document.createElement('div');
      document.body.appendChild(el);
      this.portalTarget = new external_vue_default.a(MenuPortalvue_type_script_lang_js_objectSpread({
        el: el,
        parent: this
      }, PortalTarget));
    },
    teardown: function teardown() {
      document.body.removeChild(this.portalTarget.$el);
      this.portalTarget.$el.innerHTML = '';
      this.portalTarget.$destroy();
      this.portalTarget = null;
    }
  },
  render: function render() {
    var h = arguments[0];
    if (!placeholder) placeholder = h("div", {
      "class": "vue-treeselect__menu-placeholder"
    });
    return placeholder;
  }
});
// CONCATENATED MODULE: ./src/components/MenuPortal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MenuPortalvue_type_script_lang_js_ = (MenuPortalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MenuPortal.vue
var MenuPortal_render, MenuPortal_staticRenderFns




/* normalize component */

var MenuPortal_component = normalizeComponent(
  components_MenuPortalvue_type_script_lang_js_,
  MenuPortal_render,
  MenuPortal_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MenuPortal_api; }
MenuPortal_component.options.__file = "src/components/MenuPortal.vue"
/* harmony default export */ var MenuPortal = (MenuPortal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Treeselect.vue?vue&type=script&lang=js&





/* harmony default export */ var Treeselectvue_type_script_lang_js_ = ({
  name: 'vue-treeselect',
  mixins: [treeselectMixin],
  computed: {
    wrapperClass: function wrapperClass() {
      return {
        'vue-treeselect': true,
        'vue-treeselect--single': this.single,
        'vue-treeselect--multi': this.multiple,
        'vue-treeselect--searchable': this.searchable,
        'vue-treeselect--disabled': this.disabled,
        'vue-treeselect--focused': this.trigger.isFocused,
        'vue-treeselect--has-value': this.hasValue,
        'vue-treeselect--open': this.menu.isOpen,
        'vue-treeselect--open-above': this.menu.placement === 'top',
        'vue-treeselect--open-below': this.menu.placement === 'bottom',
        'vue-treeselect--branch-nodes-disabled': this.disableBranchNodes,
        'vue-treeselect--append-to-body': this.appendToBody
      };
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      ref: "wrapper",
      "class": this.wrapperClass
    }, [h(HiddenFields), h(Control, {
      ref: "control"
    }), this.appendToBody ? h(MenuPortal, {
      ref: "portal"
    }) : h(Menu, {
      ref: "menu"
    })]);
  }
});
// CONCATENATED MODULE: ./src/components/Treeselect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Treeselectvue_type_script_lang_js_ = (Treeselectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Treeselect.vue
var Treeselect_render, Treeselect_staticRenderFns




/* normalize component */

var Treeselect_component = normalizeComponent(
  components_Treeselectvue_type_script_lang_js_,
  Treeselect_render,
  Treeselect_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Treeselect_api; }
Treeselect_component.options.__file = "src/components/Treeselect.vue"
/* harmony default export */ var Treeselect = (Treeselect_component.exports);
// EXTERNAL MODULE: ./src/style.less
var style = __nested_webpack_require_5479__(15);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __nested_webpack_require_5479__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* concated harmony reexport Treeselect */__nested_webpack_require_5479__.d(__webpack_exports__, "Treeselect", function() { return Treeselect; });
/* concated harmony reexport treeselectMixin */__nested_webpack_require_5479__.d(__webpack_exports__, "treeselectMixin", function() { return treeselectMixin; });
/* concated harmony reexport LOAD_ROOT_OPTIONS */__nested_webpack_require_5479__.d(__webpack_exports__, "LOAD_ROOT_OPTIONS", function() { return LOAD_ROOT_OPTIONS; });
/* concated harmony reexport LOAD_CHILDREN_OPTIONS */__nested_webpack_require_5479__.d(__webpack_exports__, "LOAD_CHILDREN_OPTIONS", function() { return LOAD_CHILDREN_OPTIONS; });
/* concated harmony reexport ASYNC_SEARCH */__nested_webpack_require_5479__.d(__webpack_exports__, "ASYNC_SEARCH", function() { return ASYNC_SEARCH; });



/* harmony default export */ var src = __webpack_exports__["default"] = (Treeselect);


var VERSION = "0.4.0";

/***/ })
/******/ ]);
//# sourceMappingURL=vue-treeselect.cjs.js.map

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptLoader": () => (/* binding */ ScriptLoader)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () {
    return {
        listeners: [],
        scriptId: (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.uuid)('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTinymce": () => (/* binding */ getTinymce)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindHandlers": () => (/* binding */ bindHandlers),
/* harmony export */   "bindModelHandlers": () => (/* binding */ bindModelHandlers),
/* harmony export */   "initEditor": () => (/* binding */ initEditor),
/* harmony export */   "isValidKey": () => (/* binding */ isValidKey),
/* harmony export */   "uuid": () => (/* binding */ uuid),
/* harmony export */   "isTextarea": () => (/* binding */ isTextarea),
/* harmony export */   "mergePlugins": () => (/* binding */ mergePlugins),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1; };
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || (ctx.initialized ? ctx.cache : initialValue));
    // Always bind the value listener in case users use :value instead of v-model
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
            editor.setContent(val);
        }
    });
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
    ctx.initialized = true;
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) { return value === null || value === undefined; };



/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScriptLoader */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js");
/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TinyMCE */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js");
/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditorPropTypes */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.mergePlugins)(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.initEditor)(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isTextarea)(ctx.element)) {
        ctx.element.style.visibility = '';
        ctx.element.style.display = '';
    }
    (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().init(finalInit);
}; };
var Editor = {
    props: _EditorPropTypes__WEBPACK_IMPORTED_MODULE_3__.editorProps,
    created: function () {
        this.elementId = this.$props.id || (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.uuid)('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
        this.initialized = false;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            var scriptSrc = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isNullOrUndefined)(this.$props.tinymceScriptSrc) ?
                "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                this.$props.tinymceScriptSrc;
            _ScriptLoader__WEBPACK_IMPORTED_MODULE_0__.ScriptLoader.load(this.element.ownerDocument, scriptSrc, initialise(this));
        }
    },
    beforeDestroy: function () {
        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)() !== null) {
            (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)().remove(this.editor);
        }
    },
    deactivated: function () {
        var _a;
        if (!this.inlineEditor) {
            this.cache = this.editor.getContent();
            (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_1__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.remove(this.editor);
        }
    },
    activated: function () {
        if (!this.inlineEditor && this.initialized) {
            initialise(this)();
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editorProps": () => (/* binding */ editorProps)
/* harmony export */ });
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};


/***/ }),

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js");
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_Editor__WEBPACK_IMPORTED_MODULE_0__.Editor);


/***/ }),

/***/ "./node_modules/babel-helper-vue-jsx-merge-props/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-helper-vue-jsx-merge-props/index.js ***!
  \****************************************************************/
/***/ ((module) => {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_adminApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../src/services/adminApi */ "./resources/js/src/services/adminApi.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _locales_oz_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../locales/oz.json */ "./resources/js/locales/oz.json");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @riophae/vue-treeselect */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.cjs.js");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @riophae/vue-treeselect/dist/vue-treeselect.css */ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 // import the component

 // import the styles


Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_6__).forEach(function (rule) {
  (0,vee_validate__WEBPACK_IMPORTED_MODULE_7__.extend)(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_6__[rule]), {}, {
    // copies rule configuration
    message: _locales_oz_json__WEBPACK_IMPORTED_MODULE_2__.messages[rule] // assign message

  }));
});

function menuTree(menu) {
  if (menu.children) return {
    id: menu.id,
    label: menu.title,
    children: menu.children.map(function (child) {
      return menuTree(child);
    })
  };else return {
    id: menu.id,
    label: menu.title
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PageCreate",
  data: function data() {
    return {
      breadcrumb_items: [{
        text: 'Админ панел',
        to: '/admin',
        exact: true
      }, {
        text: 'Сахифалар',
        to: '/admin/pages',
        exact: true
      }, {
        text: 'Сахифа яратиш',
        to: '#',
        exact: true,
        disabled: true
      }],
      pages: [],
      menu: false,
      menus: [],
      lang: 'uz',
      langtext: {
        oz: {
          title: null,
          description: null
        },
        ru: {
          title: null,
          description: null
        },
        en: {
          title: null,
          description: null
        }
      },
      languages: [{
        text: 'Ўзбекча',
        value: 'uz'
      }, {
        text: 'Русча',
        value: 'ru'
      }, {
        text: 'Инглизча',
        value: 'en'
      }, {
        text: 'Ozbekcha',
        value: 'oz'
      }],
      editedIndex: -1,
      editedItem: {
        id: null,
        title: '',
        slug: '',
        menu: null,
        description: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return 'Янги';
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    getLang: function getLang() {
      var _this = this;

      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (code) {
        var language = this.languages.filter(function (language) {
          if (language.value === code) return language;
        });
        if (language) return language[0];
        return null;
      } else {
        var _language = this.languages.filter(function (language) {
          if (language.value === _this.lang) return language;
        });

        if (_language) return _language[0];
        return null;
      }
    },
    initialize: function initialize() {
      var _this2 = this;

      _src_services_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].readPages().then(function (response) {
        _this2.pages = response.data;
      })["catch"](function (error) {
        _this2.$toast.error(i18n.t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));

        console.log(error);
      });
      _src_services_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].readMenusFront().then(function (response) {
        _this2.menus = response.data.map(function (menu) {
          if (menu.children) return {
            id: menu.id,
            label: menu.title,
            children: menu.children.map(function (child) {
              return menuTree(child);
            })
          };else return {
            id: menu.id,
            label: menu.title
          };
        });
        console.log(_this2.menus);
      })["catch"](function (error) {
        _this2.$toast.error(i18n.t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));

        console.log(error);
      });
    },

    /*
    handleUploadImage(event, insertImage, files) {
      // Get the files and upload them to the file server, then insert the corresponding content into the editor
      // Here is just an example
      insertImage({
          url:
              'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
          desc: 'desc',
          // width: 'auto',
          // height: 'auto',
      });
    },*/
    close: function close() {
      this.$router.replace("/admin/pages")["catch"](function () {});
    },
    save: function save() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this3.editedIndex > -1)) {
                  _context.next = 4;
                  break;
                }

                Object.assign(_this3.pages[_this3.editedIndex], _this3.editedItem);
                _context.next = 14;
                break;

              case 4:
                _context.next = 6;
                return _this3.$refs.pageForm.validate();

              case 6:
                isValid = _context.sent;

                if (!isValid) {
                  _context.next = 14;
                  break;
                }

                if (!(_this3.menu && !(_this3.editedItem.menu > 0))) {
                  _context.next = 11;
                  break;
                }

                _this3.$toast.warning("\u0421\u0438\u0437 \u044E\u049B\u043E\u0440\u0438 \u0434\u0430\u0440\u0430\u0436\u0430 \u043C\u0435\u043D\u044E\u043D\u0438 \u0442\u0430\u043D\u043B\u0430\u043C\u0430\u0434\u0438\u043D\u0433\u0438\u0437!");

                return _context.abrupt("return", false);

              case 11:
                _this3.editedItem.inMenu = _this3.menu;
                _this3.editedItem.translates = _this3.langtext;
                _src_services_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].addPage(_this3.editedItem).then(function (response) {
                  _this3.$toast.success("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u043E\u043C\u0430\u0434\u043B\u0438 \u0442\u0430\u0440\u0437\u0434\u0430 \u044E\u043A\u043B\u0430\u043D\u0434\u0438!");

                  _this3.close();
                })["catch"](function (error) {
                  _this3.$toast.error(i18n.t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));

                  console.log(error);
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    file_browser_callback: function file_browser_callback(field_name, url, type, win) {
      var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
      var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
      var cmsURL = '/laravel-filemanager?field_name=' + field_name;

      if (type === 'image') {
        cmsURL = cmsURL + "&type=Images";
      } else {
        cmsURL = cmsURL + "&type=Files";
      }

      this.$refs.tinymce_editor.editor.windowManager.open({
        file: cmsURL,
        title: 'Filemanager',
        width: x * 0.8,
        height: y * 0.8,
        resizable: "yes",
        close_previous: "no"
      });
    },
    onUpdate: function onUpdate(_ref) {
      var getJSON = _ref.getJSON,
          getHTML = _ref.getHTML;
      this.json = getJSON();
      this.html = getHTML();
      console.log('html', this.html);
    }
  },
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_7__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_7__.ValidationObserver,
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Treeselect: (_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_4___default())
  }
});

/***/ }),

/***/ "./resources/js/src/services/adminApi.js":
/*!***********************************************!*\
  !*** ./resources/js/src/services/adminApi.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
var _apiClient;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiUrl = "/api/v1/admin/";
var multipartformdata = {
  headers: {
    'content-type': 'multipart/form-data'
  }
};
var apiClient = (_apiClient = {
  addAppeals: function addAppeals(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get(apiUrl + "appeal", requestData);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  readAppeals: function readAppeals() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get(apiUrl + "appeal");

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  checkAppeal: function checkAppeal(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.post(apiUrl + "appeal/checkAppeal", requestData);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  deleteAppeal: function deleteAppeal(appealId) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios["delete"](apiUrl + "appeal/" + appealId);

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  readPages: function readPages() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios.get(apiUrl + "page");

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  addPage: function addPage(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios.post(apiUrl + "page", requestData);

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  updatePage: function updatePage(id, requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return axios.put(apiUrl + "page/" + id, requestData);

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  },
  readPage: function readPage(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return axios.get(apiUrl + "page/" + id);

            case 2:
              return _context8.abrupt("return", _context8.sent);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  },
  readRelated: function readRelated(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return axios.post(apiUrl + "page/related/" + id);

            case 2:
              return _context9.abrupt("return", _context9.sent);

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  },
  deletePage: function deletePage(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return axios["delete"](apiUrl + "page/" + id);

            case 2:
              return _context10.abrupt("return", _context10.sent);

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }))();
  },
  ///////// Files
  readFiles: function readFiles(Request) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return axios.get(apiUrl + "file", {
                params: Request
              });

            case 2:
              return _context11.abrupt("return", _context11.sent);

            case 3:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }))();
  },
  addFile: function addFile(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return axios.post(apiUrl + "file", requestData, multipartformdata);

            case 2:
              return _context12.abrupt("return", _context12.sent);

            case 3:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }))();
  },
  updateFile: function updateFile(id, requestData, header) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return axios.post(apiUrl + "file/" + id, requestData, header !== null ? header : multipartformdata);

            case 2:
              return _context13.abrupt("return", _context13.sent);

            case 3:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }))();
  },
  readFile: function readFile(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return axios.get(apiUrl + "file/" + id);

            case 2:
              return _context14.abrupt("return", _context14.sent);

            case 3:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }))();
  },
  deleteFile: function deleteFile(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee15() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return axios["delete"](apiUrl + "file/" + id);

            case 2:
              return _context15.abrupt("return", _context15.sent);

            case 3:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }))();
  },
  //////////////////////// Categories Begin/////////////////////////////
  readCategories: function readCategories() {
    var _arguments = arguments;
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee16() {
      var limit;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              limit = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;

              if (!(limit > 0)) {
                _context16.next = 7;
                break;
              }

              _context16.next = 4;
              return axios.get(apiUrl + "categories?limit=" + limit);

            case 4:
              return _context16.abrupt("return", _context16.sent);

            case 7:
              _context16.next = 9;
              return axios.get(apiUrl + "categories");

            case 9:
              return _context16.abrupt("return", _context16.sent);

            case 10:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }))();
  },
  readCategoriesForSelect: function readCategoriesForSelect() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee17() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return axios.get(apiUrl + "categories/select");

            case 2:
              return _context17.abrupt("return", _context17.sent);

            case 3:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }))();
  },
  addCategory: function addCategory(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee18() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return axios.post(apiUrl + "categories", requestData);

            case 2:
              return _context18.abrupt("return", _context18.sent);

            case 3:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }))();
  },
  updateCategory: function updateCategory(id, requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee19() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return axios.put(apiUrl + "categories/" + id, requestData);

            case 2:
              return _context19.abrupt("return", _context19.sent);

            case 3:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }))();
  },
  readCategory: function readCategory(slug) {
    var _arguments2 = arguments;
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee20() {
      var withNews;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              withNews = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : false;

              if (!withNews) {
                _context20.next = 7;
                break;
              }

              _context20.next = 4;
              return axios.get(apiUrl + "categories/" + slug + "?withnews=1");

            case 4:
              return _context20.abrupt("return", _context20.sent);

            case 7:
              _context20.next = 9;
              return axios.get(apiUrl + "categories/" + slug);

            case 9:
              return _context20.abrupt("return", _context20.sent);

            case 10:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    }))();
  },
  deleteCategory: function deleteCategory(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee21() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _context21.next = 2;
              return axios["delete"](apiUrl + "categories/" + id);

            case 2:
              return _context21.abrupt("return", _context21.sent);

            case 3:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21);
    }))();
  },
  //////////////////////// Categories End /////////////////////////////
  //////////////////////// News Begin/////////////////////////////
  readNews: function readNews(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee22() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              _context22.next = 2;
              return axios.get(apiUrl + "news", {
                params: requestData
              });

            case 2:
              return _context22.abrupt("return", _context22.sent);

            case 3:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22);
    }))();
  },
  readRelatedNews: function readRelatedNews() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee23() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee23$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return axios.get(apiUrl + "news/related");

            case 2:
              return _context23.abrupt("return", _context23.sent);

            case 3:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee23);
    }))();
  },
  addNews: function addNews(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee24() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee24$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return axios.post(apiUrl + "news", requestData, multipartformdata);

            case 2:
              return _context24.abrupt("return", _context24.sent);

            case 3:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee24);
    }))();
  },
  updateNews: function updateNews(id, requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee25() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              _context25.next = 2;
              return axios.post(apiUrl + "news/" + id, requestData, multipartformdata);

            case 2:
              return _context25.abrupt("return", _context25.sent);

            case 3:
            case "end":
              return _context25.stop();
          }
        }
      }, _callee25);
    }))();
  },
  readOneNews: function readOneNews(slug) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee26() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              _context26.next = 2;
              return axios.get(apiUrl + "news/" + slug);

            case 2:
              return _context26.abrupt("return", _context26.sent);

            case 3:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26);
    }))();
  },
  deleteNews: function deleteNews(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee27() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              _context27.next = 2;
              return axios["delete"](apiUrl + "news/" + id);

            case 2:
              return _context27.abrupt("return", _context27.sent);

            case 3:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27);
    }))();
  },
  //////////////////////// News End /////////////////////////////
  //////////////////////// Menus Begin/////////////////////////////
  readMenusForSelect: function readMenusForSelect() {
    var _arguments3 = arguments;
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee28() {
      var idMenu;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              idMenu = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : 0;
              _context28.next = 3;
              return axios.get(apiUrl + "menu/select");

            case 3:
              return _context28.abrupt("return", _context28.sent);

            case 4:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28);
    }))();
  },
  readMenusFront: function readMenusFront() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee29() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              _context29.next = 2;
              return axios.get(apiUrl + "menu/front");

            case 2:
              return _context29.abrupt("return", _context29.sent);

            case 3:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29);
    }))();
  },
  readMenus: function readMenus() {
    var _arguments4 = arguments;
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee30() {
      var parent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              parent = _arguments4.length > 0 && _arguments4[0] !== undefined ? _arguments4[0] : null;

              if (!(parent == null)) {
                _context30.next = 7;
                break;
              }

              _context30.next = 4;
              return axios.get(apiUrl + "menu");

            case 4:
              return _context30.abrupt("return", _context30.sent);

            case 7:
              _context30.next = 9;
              return axios.get(apiUrl + "menu?parent=" + parent);

            case 9:
              return _context30.abrupt("return", _context30.sent);

            case 10:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30);
    }))();
  },
  addMenu: function addMenu(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee31() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              _context31.next = 2;
              return axios.post(apiUrl + "menu", requestData);

            case 2:
              return _context31.abrupt("return", _context31.sent);

            case 3:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31);
    }))();
  },
  updateMenu: function updateMenu(id, requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee32() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              _context32.next = 2;
              return axios.put(apiUrl + "menu/" + id, requestData);

            case 2:
              return _context32.abrupt("return", _context32.sent);

            case 3:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32);
    }))();
  },
  readOneMenu: function readOneMenu(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee33() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee33$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              _context33.next = 2;
              return axios.get(apiUrl + "menu/" + id);

            case 2:
              return _context33.abrupt("return", _context33.sent);

            case 3:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee33);
    }))();
  },
  deleteMenu: function deleteMenu(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee34() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee34$(_context34) {
        while (1) {
          switch (_context34.prev = _context34.next) {
            case 0:
              _context34.next = 2;
              return axios["delete"](apiUrl + "menu/" + id);

            case 2:
              return _context34.abrupt("return", _context34.sent);

            case 3:
            case "end":
              return _context34.stop();
          }
        }
      }, _callee34);
    }))();
  },
  //////////////////////// Menus End /////////////////////////////
  //////////////////////// Footer Menus Begin/////////////////////////////
  readFooterMenusForSelect: function readFooterMenusForSelect() {
    var _arguments5 = arguments;
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee35() {
      var idMenu;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee35$(_context35) {
        while (1) {
          switch (_context35.prev = _context35.next) {
            case 0:
              idMenu = _arguments5.length > 0 && _arguments5[0] !== undefined ? _arguments5[0] : 0;
              _context35.next = 3;
              return axios.get(apiUrl + "footermenu/select");

            case 3:
              return _context35.abrupt("return", _context35.sent);

            case 4:
            case "end":
              return _context35.stop();
          }
        }
      }, _callee35);
    }))();
  },
  readFooterMenusFront: function readFooterMenusFront() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee36() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee36$(_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              _context36.next = 2;
              return axios.get(apiUrl + "footermenu/front");

            case 2:
              return _context36.abrupt("return", _context36.sent);

            case 3:
            case "end":
              return _context36.stop();
          }
        }
      }, _callee36);
    }))();
  },
  readFooterMenus: function readFooterMenus() {
    var _arguments6 = arguments;
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee37() {
      var parent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee37$(_context37) {
        while (1) {
          switch (_context37.prev = _context37.next) {
            case 0:
              parent = _arguments6.length > 0 && _arguments6[0] !== undefined ? _arguments6[0] : null;

              if (!(parent == null)) {
                _context37.next = 7;
                break;
              }

              _context37.next = 4;
              return axios.get(apiUrl + "footermenu");

            case 4:
              return _context37.abrupt("return", _context37.sent);

            case 7:
              _context37.next = 9;
              return axios.get(apiUrl + "footermenu?parent=" + parent);

            case 9:
              return _context37.abrupt("return", _context37.sent);

            case 10:
            case "end":
              return _context37.stop();
          }
        }
      }, _callee37);
    }))();
  },
  addFooterMenu: function addFooterMenu(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee38() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee38$(_context38) {
        while (1) {
          switch (_context38.prev = _context38.next) {
            case 0:
              _context38.next = 2;
              return axios.post(apiUrl + "footermenu", requestData);

            case 2:
              return _context38.abrupt("return", _context38.sent);

            case 3:
            case "end":
              return _context38.stop();
          }
        }
      }, _callee38);
    }))();
  },
  updateFooterMenu: function updateFooterMenu(id, requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee39() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee39$(_context39) {
        while (1) {
          switch (_context39.prev = _context39.next) {
            case 0:
              _context39.next = 2;
              return axios.put(apiUrl + "footermenu/" + id, requestData);

            case 2:
              return _context39.abrupt("return", _context39.sent);

            case 3:
            case "end":
              return _context39.stop();
          }
        }
      }, _callee39);
    }))();
  },
  readFooterOneMenu: function readFooterOneMenu(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee40() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee40$(_context40) {
        while (1) {
          switch (_context40.prev = _context40.next) {
            case 0:
              _context40.next = 2;
              return axios.get(apiUrl + "footermenu/" + id);

            case 2:
              return _context40.abrupt("return", _context40.sent);

            case 3:
            case "end":
              return _context40.stop();
          }
        }
      }, _callee40);
    }))();
  },
  deleteFooterMenu: function deleteFooterMenu(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee41() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee41$(_context41) {
        while (1) {
          switch (_context41.prev = _context41.next) {
            case 0:
              _context41.next = 2;
              return axios["delete"](apiUrl + "footermenu/" + id);

            case 2:
              return _context41.abrupt("return", _context41.sent);

            case 3:
            case "end":
              return _context41.stop();
          }
        }
      }, _callee41);
    }))();
  },
  //////////////////////// Footer Menus End /////////////////////////////
  //////////////////////// DocumentCategories Begin/////////////////////////////
  readDocumentCategories: function readDocumentCategories(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee42() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee42$(_context42) {
        while (1) {
          switch (_context42.prev = _context42.next) {
            case 0:
              _context42.next = 2;
              return axios.get(apiUrl + "doccategories", {
                params: requestData
              });

            case 2:
              return _context42.abrupt("return", _context42.sent);

            case 3:
            case "end":
              return _context42.stop();
          }
        }
      }, _callee42);
    }))();
  },
  readDocumentCategoriesForSelect: function readDocumentCategoriesForSelect() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee43() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee43$(_context43) {
        while (1) {
          switch (_context43.prev = _context43.next) {
            case 0:
              _context43.next = 2;
              return axios.get(apiUrl + "doccategories/select");

            case 2:
              return _context43.abrupt("return", _context43.sent);

            case 3:
            case "end":
              return _context43.stop();
          }
        }
      }, _callee43);
    }))();
  },
  addDocumentCategory: function addDocumentCategory(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee44() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee44$(_context44) {
        while (1) {
          switch (_context44.prev = _context44.next) {
            case 0:
              _context44.next = 2;
              return axios.post(apiUrl + "doccategories", requestData);

            case 2:
              return _context44.abrupt("return", _context44.sent);

            case 3:
            case "end":
              return _context44.stop();
          }
        }
      }, _callee44);
    }))();
  },
  updateDocumentCategory: function updateDocumentCategory(id, requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee45() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee45$(_context45) {
        while (1) {
          switch (_context45.prev = _context45.next) {
            case 0:
              _context45.next = 2;
              return axios.put(apiUrl + "doccategories/" + id, requestData);

            case 2:
              return _context45.abrupt("return", _context45.sent);

            case 3:
            case "end":
              return _context45.stop();
          }
        }
      }, _callee45);
    }))();
  },
  readDocumentCategory: function readDocumentCategory(slug) {
    var _arguments7 = arguments;
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee46() {
      var withNews;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee46$(_context46) {
        while (1) {
          switch (_context46.prev = _context46.next) {
            case 0:
              withNews = _arguments7.length > 1 && _arguments7[1] !== undefined ? _arguments7[1] : false;

              if (!withNews) {
                _context46.next = 7;
                break;
              }

              _context46.next = 4;
              return axios.get(apiUrl + "doccategories/" + slug + "?withnews=1");

            case 4:
              return _context46.abrupt("return", _context46.sent);

            case 7:
              _context46.next = 9;
              return axios.get(apiUrl + "doccategories/" + slug);

            case 9:
              return _context46.abrupt("return", _context46.sent);

            case 10:
            case "end":
              return _context46.stop();
          }
        }
      }, _callee46);
    }))();
  },
  deleteDocumentCategory: function deleteDocumentCategory(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee47() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee47$(_context47) {
        while (1) {
          switch (_context47.prev = _context47.next) {
            case 0:
              _context47.next = 2;
              return axios["delete"](apiUrl + "doccategories/" + id);

            case 2:
              return _context47.abrupt("return", _context47.sent);

            case 3:
            case "end":
              return _context47.stop();
          }
        }
      }, _callee47);
    }))();
  },
  //////////////////////// DocumentCategories End /////////////////////////////
  //////////////////////// Document Begin/////////////////////////////
  readDocuments: function readDocuments(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee48() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee48$(_context48) {
        while (1) {
          switch (_context48.prev = _context48.next) {
            case 0:
              _context48.next = 2;
              return axios.get(apiUrl + "documents", {
                params: requestData
              });

            case 2:
              return _context48.abrupt("return", _context48.sent);

            case 3:
            case "end":
              return _context48.stop();
          }
        }
      }, _callee48);
    }))();
  },
  addDocument: function addDocument(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee49() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee49$(_context49) {
        while (1) {
          switch (_context49.prev = _context49.next) {
            case 0:
              _context49.next = 2;
              return axios.post(apiUrl + "documents", requestData, multipartformdata);

            case 2:
              return _context49.abrupt("return", _context49.sent);

            case 3:
            case "end":
              return _context49.stop();
          }
        }
      }, _callee49);
    }))();
  },
  updateDocument: function updateDocument(id, requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee50() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee50$(_context50) {
        while (1) {
          switch (_context50.prev = _context50.next) {
            case 0:
              _context50.next = 2;
              return axios.put(apiUrl + "documents/" + id, requestData);

            case 2:
              return _context50.abrupt("return", _context50.sent);

            case 3:
            case "end":
              return _context50.stop();
          }
        }
      }, _callee50);
    }))();
  },
  readOneDocument: function readOneDocument(slug) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee51() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee51$(_context51) {
        while (1) {
          switch (_context51.prev = _context51.next) {
            case 0:
              _context51.next = 2;
              return axios.get(apiUrl + "documents/" + slug);

            case 2:
              return _context51.abrupt("return", _context51.sent);

            case 3:
            case "end":
              return _context51.stop();
          }
        }
      }, _callee51);
    }))();
  },
  deleteDocument: function deleteDocument(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee52() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee52$(_context52) {
        while (1) {
          switch (_context52.prev = _context52.next) {
            case 0:
              _context52.next = 2;
              return axios["delete"](apiUrl + "documents/" + id);

            case 2:
              return _context52.abrupt("return", _context52.sent);

            case 3:
            case "end":
              return _context52.stop();
          }
        }
      }, _callee52);
    }))();
  },
  //////////////////////// Document End /////////////////////////////
  //////////////////////// My Events Begin/////////////////////////////
  readEvents: function readEvents() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee53() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee53$(_context53) {
        while (1) {
          switch (_context53.prev = _context53.next) {
            case 0:
              _context53.next = 2;
              return axios.get(apiUrl + "events");

            case 2:
              return _context53.abrupt("return", _context53.sent);

            case 3:
            case "end":
              return _context53.stop();
          }
        }
      }, _callee53);
    }))();
  },
  readEventsForFront: function readEventsForFront() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee54() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee54$(_context54) {
        while (1) {
          switch (_context54.prev = _context54.next) {
            case 0:
              _context54.next = 2;
              return axios.get(apiUrl + "front/events");

            case 2:
              return _context54.abrupt("return", _context54.sent);

            case 3:
            case "end":
              return _context54.stop();
          }
        }
      }, _callee54);
    }))();
  },
  addEvent: function addEvent(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee55() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee55$(_context55) {
        while (1) {
          switch (_context55.prev = _context55.next) {
            case 0:
              _context55.next = 2;
              return axios.post(apiUrl + "events", requestData);

            case 2:
              return _context55.abrupt("return", _context55.sent);

            case 3:
            case "end":
              return _context55.stop();
          }
        }
      }, _callee55);
    }))();
  },
  updateEvent: function updateEvent(id, requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee56() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee56$(_context56) {
        while (1) {
          switch (_context56.prev = _context56.next) {
            case 0:
              _context56.next = 2;
              return axios.put(apiUrl + "events/" + id, requestData);

            case 2:
              return _context56.abrupt("return", _context56.sent);

            case 3:
            case "end":
              return _context56.stop();
          }
        }
      }, _callee56);
    }))();
  },
  readEvent: function readEvent(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee57() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee57$(_context57) {
        while (1) {
          switch (_context57.prev = _context57.next) {
            case 0:
              _context57.next = 2;
              return axios.get(apiUrl + "events/" + id);

            case 2:
              return _context57.abrupt("return", _context57.sent);

            case 3:
            case "end":
              return _context57.stop();
          }
        }
      }, _callee57);
    }))();
  },
  deleteEvent: function deleteEvent(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee58() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee58$(_context58) {
        while (1) {
          switch (_context58.prev = _context58.next) {
            case 0:
              _context58.next = 2;
              return axios["delete"](apiUrl + "events/" + id);

            case 2:
              return _context58.abrupt("return", _context58.sent);

            case 3:
            case "end":
              return _context58.stop();
          }
        }
      }, _callee58);
    }))();
  },
  //////////////////////// My Events End /////////////////////////////
  //////////////////////// My Votes Begin/////////////////////////////
  readVotes: function readVotes() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee59() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee59$(_context59) {
        while (1) {
          switch (_context59.prev = _context59.next) {
            case 0:
              _context59.next = 2;
              return axios.get(apiUrl + "votes");

            case 2:
              return _context59.abrupt("return", _context59.sent);

            case 3:
            case "end":
              return _context59.stop();
          }
        }
      }, _callee59);
    }))();
  },
  readVotesForFront: function readVotesForFront() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee60() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee60$(_context60) {
        while (1) {
          switch (_context60.prev = _context60.next) {
            case 0:
              _context60.next = 2;
              return axios.get(apiUrl + "front/votes");

            case 2:
              return _context60.abrupt("return", _context60.sent);

            case 3:
            case "end":
              return _context60.stop();
          }
        }
      }, _callee60);
    }))();
  },
  addVote: function addVote(requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee61() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee61$(_context61) {
        while (1) {
          switch (_context61.prev = _context61.next) {
            case 0:
              _context61.next = 2;
              return axios.post(apiUrl + "votes", requestData);

            case 2:
              return _context61.abrupt("return", _context61.sent);

            case 3:
            case "end":
              return _context61.stop();
          }
        }
      }, _callee61);
    }))();
  },
  updateVote: function updateVote(id, requestData) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee62() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee62$(_context62) {
        while (1) {
          switch (_context62.prev = _context62.next) {
            case 0:
              _context62.next = 2;
              return axios.put(apiUrl + "votes/" + id, requestData);

            case 2:
              return _context62.abrupt("return", _context62.sent);

            case 3:
            case "end":
              return _context62.stop();
          }
        }
      }, _callee62);
    }))();
  },
  readVote: function readVote(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee63() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee63$(_context63) {
        while (1) {
          switch (_context63.prev = _context63.next) {
            case 0:
              _context63.next = 2;
              return axios.get(apiUrl + "votes/" + id);

            case 2:
              return _context63.abrupt("return", _context63.sent);

            case 3:
            case "end":
              return _context63.stop();
          }
        }
      }, _callee63);
    }))();
  },
  deleteVote: function deleteVote(id) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee64() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee64$(_context64) {
        while (1) {
          switch (_context64.prev = _context64.next) {
            case 0:
              _context64.next = 2;
              return axios["delete"](apiUrl + "votes/" + id);

            case 2:
              return _context64.abrupt("return", _context64.sent);

            case 3:
            case "end":
              return _context64.stop();
          }
        }
      }, _callee64);
    }))();
  }
}, _defineProperty(_apiClient, "readVotes", function readVotes() {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee65() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee65$(_context65) {
      while (1) {
        switch (_context65.prev = _context65.next) {
          case 0:
            _context65.next = 2;
            return axios.get(apiUrl + "votes");

          case 2:
            return _context65.abrupt("return", _context65.sent);

          case 3:
          case "end":
            return _context65.stop();
        }
      }
    }, _callee65);
  }))();
}), _defineProperty(_apiClient, "readVotesForFront", function readVotesForFront() {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee66() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee66$(_context66) {
      while (1) {
        switch (_context66.prev = _context66.next) {
          case 0:
            _context66.next = 2;
            return axios.get(apiUrl + "front/votes");

          case 2:
            return _context66.abrupt("return", _context66.sent);

          case 3:
          case "end":
            return _context66.stop();
        }
      }
    }, _callee66);
  }))();
}), _defineProperty(_apiClient, "addVote", function addVote(requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee67() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee67$(_context67) {
      while (1) {
        switch (_context67.prev = _context67.next) {
          case 0:
            _context67.next = 2;
            return axios.post(apiUrl + "votes", requestData);

          case 2:
            return _context67.abrupt("return", _context67.sent);

          case 3:
          case "end":
            return _context67.stop();
        }
      }
    }, _callee67);
  }))();
}), _defineProperty(_apiClient, "updateVote", function updateVote(id, requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee68() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee68$(_context68) {
      while (1) {
        switch (_context68.prev = _context68.next) {
          case 0:
            _context68.next = 2;
            return axios.put(apiUrl + "votes/" + id, requestData);

          case 2:
            return _context68.abrupt("return", _context68.sent);

          case 3:
          case "end":
            return _context68.stop();
        }
      }
    }, _callee68);
  }))();
}), _defineProperty(_apiClient, "readVote", function readVote(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee69() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee69$(_context69) {
      while (1) {
        switch (_context69.prev = _context69.next) {
          case 0:
            _context69.next = 2;
            return axios.get(apiUrl + "votes/" + id);

          case 2:
            return _context69.abrupt("return", _context69.sent);

          case 3:
          case "end":
            return _context69.stop();
        }
      }
    }, _callee69);
  }))();
}), _defineProperty(_apiClient, "deleteVote", function deleteVote(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee70() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee70$(_context70) {
      while (1) {
        switch (_context70.prev = _context70.next) {
          case 0:
            _context70.next = 2;
            return axios["delete"](apiUrl + "votes/" + id);

          case 2:
            return _context70.abrupt("return", _context70.sent);

          case 3:
          case "end":
            return _context70.stop();
        }
      }
    }, _callee70);
  }))();
}), _defineProperty(_apiClient, "readOpenDatas", function readOpenDatas() {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee71() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee71$(_context71) {
      while (1) {
        switch (_context71.prev = _context71.next) {
          case 0:
            _context71.next = 2;
            return axios.get(apiUrl + "opendatas");

          case 2:
            return _context71.abrupt("return", _context71.sent);

          case 3:
          case "end":
            return _context71.stop();
        }
      }
    }, _callee71);
  }))();
}), _defineProperty(_apiClient, "readOpenDatasForFront", function readOpenDatasForFront() {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee72() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee72$(_context72) {
      while (1) {
        switch (_context72.prev = _context72.next) {
          case 0:
            _context72.next = 2;
            return axios.get(apiUrl + "front/opendatas");

          case 2:
            return _context72.abrupt("return", _context72.sent);

          case 3:
          case "end":
            return _context72.stop();
        }
      }
    }, _callee72);
  }))();
}), _defineProperty(_apiClient, "addOpenData", function addOpenData(requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee73() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee73$(_context73) {
      while (1) {
        switch (_context73.prev = _context73.next) {
          case 0:
            _context73.next = 2;
            return axios.post(apiUrl + "opendatas", requestData);

          case 2:
            return _context73.abrupt("return", _context73.sent);

          case 3:
          case "end":
            return _context73.stop();
        }
      }
    }, _callee73);
  }))();
}), _defineProperty(_apiClient, "updateOpenData", function updateOpenData(id, requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee74() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee74$(_context74) {
      while (1) {
        switch (_context74.prev = _context74.next) {
          case 0:
            _context74.next = 2;
            return axios.put(apiUrl + "opendatas/" + id, requestData);

          case 2:
            return _context74.abrupt("return", _context74.sent);

          case 3:
          case "end":
            return _context74.stop();
        }
      }
    }, _callee74);
  }))();
}), _defineProperty(_apiClient, "readOpenData", function readOpenData(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee75() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee75$(_context75) {
      while (1) {
        switch (_context75.prev = _context75.next) {
          case 0:
            _context75.next = 2;
            return axios.get(apiUrl + "opendatas/" + id);

          case 2:
            return _context75.abrupt("return", _context75.sent);

          case 3:
          case "end":
            return _context75.stop();
        }
      }
    }, _callee75);
  }))();
}), _defineProperty(_apiClient, "deleteOpenData", function deleteOpenData(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee76() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee76$(_context76) {
      while (1) {
        switch (_context76.prev = _context76.next) {
          case 0:
            _context76.next = 2;
            return axios["delete"](apiUrl + "opendatas/" + id);

          case 2:
            return _context76.abrupt("return", _context76.sent);

          case 3:
          case "end":
            return _context76.stop();
        }
      }
    }, _callee76);
  }))();
}), _defineProperty(_apiClient, "readOpenDataFiles", function readOpenDataFiles(opendata) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee77() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee77$(_context77) {
      while (1) {
        switch (_context77.prev = _context77.next) {
          case 0:
            _context77.next = 2;
            return axios.get(apiUrl + "opendata/" + opendata + "/files");

          case 2:
            return _context77.abrupt("return", _context77.sent);

          case 3:
          case "end":
            return _context77.stop();
        }
      }
    }, _callee77);
  }))();
}), _defineProperty(_apiClient, "addOpenDataFile", function addOpenDataFile(opendata, requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee78() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee78$(_context78) {
      while (1) {
        switch (_context78.prev = _context78.next) {
          case 0:
            _context78.next = 2;
            return axios.post(apiUrl + "opendata/" + opendata + "/files", requestData);

          case 2:
            return _context78.abrupt("return", _context78.sent);

          case 3:
          case "end":
            return _context78.stop();
        }
      }
    }, _callee78);
  }))();
}), _defineProperty(_apiClient, "updateOpenDataFile", function updateOpenDataFile(opendata, id, requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee79() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee79$(_context79) {
      while (1) {
        switch (_context79.prev = _context79.next) {
          case 0:
            _context79.next = 2;
            return axios.put(apiUrl + "opendata/" + opendata + "/files/" + id, requestData);

          case 2:
            return _context79.abrupt("return", _context79.sent);

          case 3:
          case "end":
            return _context79.stop();
        }
      }
    }, _callee79);
  }))();
}), _defineProperty(_apiClient, "readOpenDataFile", function readOpenDataFile(opendata, id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee80() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee80$(_context80) {
      while (1) {
        switch (_context80.prev = _context80.next) {
          case 0:
            _context80.next = 2;
            return axios.get(apiUrl + "opendata/" + opendata + "/files/" + id);

          case 2:
            return _context80.abrupt("return", _context80.sent);

          case 3:
          case "end":
            return _context80.stop();
        }
      }
    }, _callee80);
  }))();
}), _defineProperty(_apiClient, "deleteOpenDataFile", function deleteOpenDataFile(opendata, id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee81() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee81$(_context81) {
      while (1) {
        switch (_context81.prev = _context81.next) {
          case 0:
            _context81.next = 2;
            return axios["delete"](apiUrl + "opendata/" + opendata + "/files/" + id);

          case 2:
            return _context81.abrupt("return", _context81.sent);

          case 3:
          case "end":
            return _context81.stop();
        }
      }
    }, _callee81);
  }))();
}), _defineProperty(_apiClient, "readFaqs", function readFaqs() {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee82() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee82$(_context82) {
      while (1) {
        switch (_context82.prev = _context82.next) {
          case 0:
            _context82.next = 2;
            return axios.get(apiUrl + "faqs");

          case 2:
            return _context82.abrupt("return", _context82.sent);

          case 3:
          case "end":
            return _context82.stop();
        }
      }
    }, _callee82);
  }))();
}), _defineProperty(_apiClient, "readFaqsForFront", function readFaqsForFront() {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee83() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee83$(_context83) {
      while (1) {
        switch (_context83.prev = _context83.next) {
          case 0:
            _context83.next = 2;
            return axios.get(apiUrl + "front/faqs");

          case 2:
            return _context83.abrupt("return", _context83.sent);

          case 3:
          case "end":
            return _context83.stop();
        }
      }
    }, _callee83);
  }))();
}), _defineProperty(_apiClient, "addFaq", function addFaq(requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee84() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee84$(_context84) {
      while (1) {
        switch (_context84.prev = _context84.next) {
          case 0:
            _context84.next = 2;
            return axios.post(apiUrl + "faqs", requestData);

          case 2:
            return _context84.abrupt("return", _context84.sent);

          case 3:
          case "end":
            return _context84.stop();
        }
      }
    }, _callee84);
  }))();
}), _defineProperty(_apiClient, "updateFaq", function updateFaq(id, requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee85() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee85$(_context85) {
      while (1) {
        switch (_context85.prev = _context85.next) {
          case 0:
            _context85.next = 2;
            return axios.put(apiUrl + "faqs/" + id, requestData);

          case 2:
            return _context85.abrupt("return", _context85.sent);

          case 3:
          case "end":
            return _context85.stop();
        }
      }
    }, _callee85);
  }))();
}), _defineProperty(_apiClient, "readFaq", function readFaq(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee86() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee86$(_context86) {
      while (1) {
        switch (_context86.prev = _context86.next) {
          case 0:
            _context86.next = 2;
            return axios.get(apiUrl + "faqs/" + id);

          case 2:
            return _context86.abrupt("return", _context86.sent);

          case 3:
          case "end":
            return _context86.stop();
        }
      }
    }, _callee86);
  }))();
}), _defineProperty(_apiClient, "deleteFaq", function deleteFaq(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee87() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee87$(_context87) {
      while (1) {
        switch (_context87.prev = _context87.next) {
          case 0:
            _context87.next = 2;
            return axios["delete"](apiUrl + "faqs/" + id);

          case 2:
            return _context87.abrupt("return", _context87.sent);

          case 3:
          case "end":
            return _context87.stop();
        }
      }
    }, _callee87);
  }))();
}), _defineProperty(_apiClient, "readOrgs", function readOrgs(requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee88() {
    var str;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee88$(_context88) {
      while (1) {
        switch (_context88.prev = _context88.next) {
          case 0:
            str = "";
            if (requestData) str = "?" + Object.entries(requestData).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  val = _ref2[1];

              return "".concat(key, "=").concat(val);
            }).join('&');
            _context88.next = 4;
            return axios.get(apiUrl + "organizations" + str);

          case 4:
            return _context88.abrupt("return", _context88.sent);

          case 5:
          case "end":
            return _context88.stop();
        }
      }
    }, _callee88);
  }))();
}), _defineProperty(_apiClient, "addOrg", function addOrg(requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee89() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee89$(_context89) {
      while (1) {
        switch (_context89.prev = _context89.next) {
          case 0:
            _context89.next = 2;
            return axios.post(apiUrl + "organizations", requestData);

          case 2:
            return _context89.abrupt("return", _context89.sent);

          case 3:
          case "end":
            return _context89.stop();
        }
      }
    }, _callee89);
  }))();
}), _defineProperty(_apiClient, "updateOrg", function updateOrg(id, requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee90() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee90$(_context90) {
      while (1) {
        switch (_context90.prev = _context90.next) {
          case 0:
            _context90.next = 2;
            return axios.post(apiUrl + "organizations/" + id, requestData);

          case 2:
            return _context90.abrupt("return", _context90.sent);

          case 3:
          case "end":
            return _context90.stop();
        }
      }
    }, _callee90);
  }))();
}), _defineProperty(_apiClient, "readOrg", function readOrg(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee91() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee91$(_context91) {
      while (1) {
        switch (_context91.prev = _context91.next) {
          case 0:
            _context91.next = 2;
            return axios.get(apiUrl + "organizations/" + id);

          case 2:
            return _context91.abrupt("return", _context91.sent);

          case 3:
          case "end":
            return _context91.stop();
        }
      }
    }, _callee91);
  }))();
}), _defineProperty(_apiClient, "deleteOrg", function deleteOrg(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee92() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee92$(_context92) {
      while (1) {
        switch (_context92.prev = _context92.next) {
          case 0:
            _context92.next = 2;
            return axios["delete"](apiUrl + "organizations/" + id);

          case 2:
            return _context92.abrupt("return", _context92.sent);

          case 3:
          case "end":
            return _context92.stop();
        }
      }
    }, _callee92);
  }))();
}), _defineProperty(_apiClient, "readApparats", function readApparats(requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee93() {
    var str;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee93$(_context93) {
      while (1) {
        switch (_context93.prev = _context93.next) {
          case 0:
            str = "";
            if (requestData) str = "?" + Object.entries(requestData).map(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  key = _ref4[0],
                  val = _ref4[1];

              return "".concat(key, "=").concat(val);
            }).join('&');
            _context93.next = 4;
            return axios.get(apiUrl + "apparat/" + str);

          case 4:
            return _context93.abrupt("return", _context93.sent);

          case 5:
          case "end":
            return _context93.stop();
        }
      }
    }, _callee93);
  }))();
}), _defineProperty(_apiClient, "addApparat", function addApparat(requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee94() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee94$(_context94) {
      while (1) {
        switch (_context94.prev = _context94.next) {
          case 0:
            _context94.next = 2;
            return axios.post(apiUrl + "apparat", requestData);

          case 2:
            return _context94.abrupt("return", _context94.sent);

          case 3:
          case "end":
            return _context94.stop();
        }
      }
    }, _callee94);
  }))();
}), _defineProperty(_apiClient, "updateApparat", function updateApparat(id, requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee95() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee95$(_context95) {
      while (1) {
        switch (_context95.prev = _context95.next) {
          case 0:
            _context95.next = 2;
            return axios.post(apiUrl + "apparat/" + id, requestData);

          case 2:
            return _context95.abrupt("return", _context95.sent);

          case 3:
          case "end":
            return _context95.stop();
        }
      }
    }, _callee95);
  }))();
}), _defineProperty(_apiClient, "readApparat", function readApparat(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee96() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee96$(_context96) {
      while (1) {
        switch (_context96.prev = _context96.next) {
          case 0:
            _context96.next = 2;
            return axios.get(apiUrl + "apparat/" + id);

          case 2:
            return _context96.abrupt("return", _context96.sent);

          case 3:
          case "end":
            return _context96.stop();
        }
      }
    }, _callee96);
  }))();
}), _defineProperty(_apiClient, "deleteApparat", function deleteApparat(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee97() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee97$(_context97) {
      while (1) {
        switch (_context97.prev = _context97.next) {
          case 0:
            _context97.next = 2;
            return axios["delete"](apiUrl + "apparat/" + id);

          case 2:
            return _context97.abrupt("return", _context97.sent);

          case 3:
          case "end":
            return _context97.stop();
        }
      }
    }, _callee97);
  }))();
}), _defineProperty(_apiClient, "readMarkaziy", function readMarkaziy() {
  var _arguments8 = arguments;
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee98() {
    var org, str;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee98$(_context98) {
      while (1) {
        switch (_context98.prev = _context98.next) {
          case 0:
            org = _arguments8.length > 0 && _arguments8[0] !== undefined ? _arguments8[0] : null;
            str = "?markaziy=0" + org ? "&org=" + org : 0;
            _context98.next = 4;
            return axios.get(apiUrl + "apparat" + str);

          case 4:
            return _context98.abrupt("return", _context98.sent);

          case 5:
          case "end":
            return _context98.stop();
        }
      }
    }, _callee98);
  }))();
}), _defineProperty(_apiClient, "readRahbariyats", function readRahbariyats() {
  var _arguments9 = arguments;
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee99() {
    var org, str;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee99$(_context99) {
      while (1) {
        switch (_context99.prev = _context99.next) {
          case 0:
            org = _arguments9.length > 0 && _arguments9[0] !== undefined ? _arguments9[0] : null;
            str = "?rahbar=0" + (org ? "&org=" + org : "");
            _context99.next = 4;
            return axios.get(apiUrl + "apparat" + str);

          case 4:
            return _context99.abrupt("return", _context99.sent);

          case 5:
          case "end":
            return _context99.stop();
        }
      }
    }, _callee99);
  }))();
}), _defineProperty(_apiClient, "addRahbariyat", function addRahbariyat(requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee100() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee100$(_context100) {
      while (1) {
        switch (_context100.prev = _context100.next) {
          case 0:
            _context100.next = 2;
            return axios.post(apiUrl + "apparat", requestData);

          case 2:
            return _context100.abrupt("return", _context100.sent);

          case 3:
          case "end":
            return _context100.stop();
        }
      }
    }, _callee100);
  }))();
}), _defineProperty(_apiClient, "updateRahbariyat", function updateRahbariyat(id, requestData) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee101() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee101$(_context101) {
      while (1) {
        switch (_context101.prev = _context101.next) {
          case 0:
            _context101.next = 2;
            return axios.post(apiUrl + "apparat/" + id, requestData);

          case 2:
            return _context101.abrupt("return", _context101.sent);

          case 3:
          case "end":
            return _context101.stop();
        }
      }
    }, _callee101);
  }))();
}), _defineProperty(_apiClient, "readRahbariyat", function readRahbariyat(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee102() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee102$(_context102) {
      while (1) {
        switch (_context102.prev = _context102.next) {
          case 0:
            _context102.next = 2;
            return axios.get(apiUrl + "apparat/" + id + "?rahbar=0");

          case 2:
            return _context102.abrupt("return", _context102.sent);

          case 3:
          case "end":
            return _context102.stop();
        }
      }
    }, _callee102);
  }))();
}), _defineProperty(_apiClient, "deleteRahbariyat", function deleteRahbariyat(id) {
  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee103() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee103$(_context103) {
      while (1) {
        switch (_context103.prev = _context103.next) {
          case 0:
            _context103.next = 2;
            return axios["delete"](apiUrl + "apparat/" + id);

          case 2:
            return _context103.abrupt("return", _context103.sent);

          case 3:
          case "end":
            return _context103.stop();
        }
      }
    }, _callee103);
  }))();
}), _apiClient);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiClient);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * vue-treeselect v0.4.0 | (c) 2017-2019 Riophae Lee\n * Released under the MIT License.\n * https://vue-treeselect.js.org/\n */\n/**\n * Dependencies\n */\n/**\n * Variables\n */\n/**\n * Mixins\n */\n/**\n * Helpers\n */\n.vue-treeselect-helper-hide {\n  display: none;\n}\n.vue-treeselect-helper-zoom-effect-off {\n  transform: none !important;\n}\n/**\n * Animations\n */\n@-webkit-keyframes vue-treeselect-animation-fade-in {\n  0% {\n    opacity: 0;\n  }\n}\n@keyframes vue-treeselect-animation-fade-in {\n  0% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes vue-treeselect-animation-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n@keyframes vue-treeselect-animation-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes vue-treeselect-animation-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes vue-treeselect-animation-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/**\n * Transitions\n */\n.vue-treeselect__multi-value-item--transition-enter-active,\n.vue-treeselect__multi-value-item--transition-leave-active {\n  transition-duration: 200ms;\n  transition-property: transform, opacity;\n}\n.vue-treeselect__multi-value-item--transition-enter-active {\n  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.vue-treeselect__multi-value-item--transition-leave-active {\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  position: absolute;\n}\n.vue-treeselect__multi-value-item--transition-enter,\n.vue-treeselect__multi-value-item--transition-leave-to {\n  transform: scale(0.7);\n  opacity: 0;\n}\n.vue-treeselect__multi-value-item--transition-move {\n  transition: 200ms transform cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n/**\n * Namespace\n */\n.vue-treeselect {\n  position: relative;\n  text-align: left;\n}\n[dir=\"rtl\"] .vue-treeselect {\n  text-align: right;\n}\n.vue-treeselect div,\n.vue-treeselect span {\n  box-sizing: border-box;\n}\n.vue-treeselect svg {\n  fill: currentColor;\n}\n/**\n * Control\n */\n.vue-treeselect__control {\n  padding-left: 5px;\n  padding-right: 5px;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  height: 36px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  background: #fff;\n  transition-duration: 200ms;\n  transition-property: border-color, box-shadow, width, height, background-color, opacity;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.vue-treeselect:not(.vue-treeselect--disabled):not(.vue-treeselect--focused) .vue-treeselect__control:hover {\n  border-color: #cfcfcf;\n}\n.vue-treeselect--focused:not(.vue-treeselect--open) .vue-treeselect__control {\n  border-color: #039be5;\n  box-shadow: 0 0 0 3px rgba(3, 155, 229, 0.1);\n}\n.vue-treeselect--disabled .vue-treeselect__control {\n  background-color: #f9f9f9;\n}\n.vue-treeselect--open .vue-treeselect__control {\n  border-color: #cfcfcf;\n}\n.vue-treeselect--open.vue-treeselect--open-below .vue-treeselect__control {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.vue-treeselect--open.vue-treeselect--open-above .vue-treeselect__control {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.vue-treeselect__value-container,\n.vue-treeselect__multi-value {\n  width: 100%;\n  vertical-align: middle;\n}\n.vue-treeselect__value-container {\n  display: table-cell;\n  position: relative;\n}\n.vue-treeselect--searchable:not(.vue-treeselect--disabled) .vue-treeselect__value-container {\n  cursor: text;\n}\n.vue-treeselect__multi-value {\n  display: inline-block;\n}\n.vue-treeselect--has-value .vue-treeselect__multi-value {\n  margin-bottom: 5px;\n}\n.vue-treeselect__placeholder,\n.vue-treeselect__single-value {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 5px;\n  padding-right: 5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  line-height: 34px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n.vue-treeselect__placeholder {\n  color: #bdbdbd;\n}\n.vue-treeselect__single-value {\n  color: #333;\n}\n.vue-treeselect--focused.vue-treeselect--searchable .vue-treeselect__single-value {\n  color: #bdbdbd;\n}\n.vue-treeselect--disabled .vue-treeselect__single-value {\n  position: static;\n}\n.vue-treeselect__multi-value-item-container {\n  display: inline-block;\n  padding-top: 5px;\n  padding-right: 5px;\n  vertical-align: top;\n}\n[dir=\"rtl\"] .vue-treeselect__multi-value-item-container {\n  padding-right: 0;\n  padding-left: 5px;\n}\n.vue-treeselect__multi-value-item {\n  cursor: pointer;\n  display: inline-table;\n  background: #e3f2fd;\n  padding: 2px 0;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  color: #039be5;\n  font-size: 12px;\n  vertical-align: top;\n}\n.vue-treeselect:not(.vue-treeselect--disabled) .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-disabled):hover .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new) .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new):hover {\n  cursor: pointer;\n  background: #e3f2fd;\n  color: #039be5;\n}\n.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-disabled {\n  cursor: default;\n  background: #f5f5f5;\n  color: #757575;\n}\n.vue-treeselect--disabled .vue-treeselect__multi-value-item {\n  cursor: default;\n  background: #fff;\n  border-color: #e5e5e5;\n  color: #555;\n}\n.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new {\n  background: #e8f5e9;\n}\n.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new:hover {\n  background: #e8f5e9;\n}\n.vue-treeselect__value-remove,\n.vue-treeselect__multi-value-label {\n  display: table-cell;\n  padding: 0 5px;\n  vertical-align: middle;\n}\n.vue-treeselect__value-remove {\n  color: #039be5;\n  padding-left: 5px;\n  border-left: 1px solid #fff;\n  line-height: 0;\n}\n[dir=\"rtl\"] .vue-treeselect__value-remove {\n  border-left: 0 none;\n  border-right: 1px solid #fff;\n}\n.vue-treeselect__multi-value-item:hover .vue-treeselect__value-remove {\n  color: #e53935;\n}\n.vue-treeselect--disabled .vue-treeselect__value-remove,\n.vue-treeselect__multi-value-item-disabled .vue-treeselect__value-remove {\n  display: none;\n}\n.vue-treeselect__value-remove > svg {\n  width: 6px;\n  height: 6px;\n}\n.vue-treeselect__multi-value-label {\n  padding-right: 5px;\n  white-space: pre-line;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vue-treeselect__limit-tip {\n  display: inline-block;\n  padding-top: 5px;\n  padding-right: 5px;\n  vertical-align: top;\n}\n[dir=\"rtl\"] .vue-treeselect__limit-tip {\n  padding-right: 0;\n  padding-left: 5px;\n}\n.vue-treeselect__limit-tip-text {\n  cursor: default;\n  display: block;\n  margin: 2px 0;\n  padding: 1px 0;\n  color: #bdbdbd;\n  font-size: 12px;\n  font-weight: 600;\n}\n.vue-treeselect__input-container {\n  display: block;\n  max-width: 100%;\n  outline: none;\n}\n.vue-treeselect--single .vue-treeselect__input-container {\n  font-size: inherit;\n  height: 100%;\n}\n.vue-treeselect--multi .vue-treeselect__input-container {\n  display: inline-block;\n  font-size: 12px;\n  vertical-align: top;\n}\n.vue-treeselect--searchable .vue-treeselect__input-container {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value .vue-treeselect__input-container {\n  padding-top: 5px;\n  padding-left: 0;\n}\n[dir=\"rtl\"] .vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value .vue-treeselect__input-container {\n  padding-left: 5px;\n  padding-right: 0;\n}\n.vue-treeselect--disabled .vue-treeselect__input-container {\n  display: none;\n}\n.vue-treeselect__input,\n.vue-treeselect__sizer {\n  margin: 0;\n  line-height: inherit;\n  font-family: inherit;\n  font-size: inherit;\n}\n.vue-treeselect__input {\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n  box-sizing: content-box;\n  box-shadow: none;\n  background: none transparent;\n  line-height: 1;\n  vertical-align: middle;\n}\n.vue-treeselect__input::-ms-clear {\n  display: none;\n}\n.vue-treeselect--single .vue-treeselect__input {\n  width: 100%;\n  height: 100%;\n}\n.vue-treeselect--multi .vue-treeselect__input {\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n.vue-treeselect--has-value .vue-treeselect__input {\n  line-height: inherit;\n  vertical-align: top;\n}\n.vue-treeselect__sizer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  height: 0;\n  overflow: scroll;\n  white-space: pre;\n}\n.vue-treeselect__x-container {\n  display: table-cell;\n  vertical-align: middle;\n  width: 20px;\n  text-align: center;\n  line-height: 0;\n  cursor: pointer;\n  color: #ccc;\n  -webkit-animation: 200ms vue-treeselect-animation-fade-in cubic-bezier(0.075, 0.82, 0.165, 1);\n          animation: 200ms vue-treeselect-animation-fade-in cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.vue-treeselect__x-container:hover {\n  color: #e53935;\n}\n.vue-treeselect__x {\n  width: 8px;\n  height: 8px;\n}\n.vue-treeselect__control-arrow-container {\n  display: table-cell;\n  vertical-align: middle;\n  width: 20px;\n  text-align: center;\n  line-height: 0;\n  cursor: pointer;\n}\n.vue-treeselect--disabled .vue-treeselect__control-arrow-container {\n  cursor: default;\n}\n.vue-treeselect__control-arrow {\n  width: 9px;\n  height: 9px;\n  color: #ccc;\n}\n.vue-treeselect:not(.vue-treeselect--disabled) .vue-treeselect__control-arrow-container:hover .vue-treeselect__control-arrow {\n  color: #616161;\n}\n.vue-treeselect--disabled .vue-treeselect__control-arrow {\n  opacity: 0.35;\n}\n.vue-treeselect__control-arrow--rotated {\n  transform: rotateZ(180deg);\n}\n/**\n * Menu\n */\n.vue-treeselect__menu-container {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  overflow: visible;\n  transition: 0s;\n}\n.vue-treeselect--open-below:not(.vue-treeselect--append-to-body) .vue-treeselect__menu-container {\n  top: 100%;\n}\n.vue-treeselect--open-above:not(.vue-treeselect--append-to-body) .vue-treeselect__menu-container {\n  bottom: 100%;\n}\n.vue-treeselect__menu {\n  cursor: default;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  display: block;\n  position: absolute;\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: auto;\n  border: 1px solid #cfcfcf;\n  background: #fff;\n  line-height: 180%;\n  -webkit-overflow-scrolling: touch;\n}\n.vue-treeselect--open-below .vue-treeselect__menu {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  top: 0;\n  margin-top: -1px;\n  border-top-color: #f2f2f2;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.vue-treeselect--open-above .vue-treeselect__menu {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  bottom: 0;\n  margin-bottom: -1px;\n  border-bottom-color: #f2f2f2;\n}\n.vue-treeselect__indent-level-0 .vue-treeselect__option {\n  padding-left: 5px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-0 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.vue-treeselect__indent-level-0 .vue-treeselect__tip {\n  padding-left: 25px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-0 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 25px;\n}\n.vue-treeselect__indent-level-1 .vue-treeselect__option {\n  padding-left: 25px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-1 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 25px;\n}\n.vue-treeselect__indent-level-1 .vue-treeselect__tip {\n  padding-left: 45px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-1 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 45px;\n}\n.vue-treeselect__indent-level-2 .vue-treeselect__option {\n  padding-left: 45px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-2 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 45px;\n}\n.vue-treeselect__indent-level-2 .vue-treeselect__tip {\n  padding-left: 65px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-2 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 65px;\n}\n.vue-treeselect__indent-level-3 .vue-treeselect__option {\n  padding-left: 65px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-3 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 65px;\n}\n.vue-treeselect__indent-level-3 .vue-treeselect__tip {\n  padding-left: 85px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-3 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 85px;\n}\n.vue-treeselect__indent-level-4 .vue-treeselect__option {\n  padding-left: 85px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-4 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 85px;\n}\n.vue-treeselect__indent-level-4 .vue-treeselect__tip {\n  padding-left: 105px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-4 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 105px;\n}\n.vue-treeselect__indent-level-5 .vue-treeselect__option {\n  padding-left: 105px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-5 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 105px;\n}\n.vue-treeselect__indent-level-5 .vue-treeselect__tip {\n  padding-left: 125px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-5 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 125px;\n}\n.vue-treeselect__indent-level-6 .vue-treeselect__option {\n  padding-left: 125px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-6 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 125px;\n}\n.vue-treeselect__indent-level-6 .vue-treeselect__tip {\n  padding-left: 145px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-6 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 145px;\n}\n.vue-treeselect__indent-level-7 .vue-treeselect__option {\n  padding-left: 145px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-7 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 145px;\n}\n.vue-treeselect__indent-level-7 .vue-treeselect__tip {\n  padding-left: 165px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-7 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 165px;\n}\n.vue-treeselect__indent-level-8 .vue-treeselect__option {\n  padding-left: 165px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-8 .vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 165px;\n}\n.vue-treeselect__indent-level-8 .vue-treeselect__tip {\n  padding-left: 185px;\n}\n[dir=\"rtl\"] .vue-treeselect__indent-level-8 .vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 185px;\n}\n.vue-treeselect__option {\n  padding-left: 5px;\n  padding-right: 5px;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n.vue-treeselect__option--highlight {\n  background: #f5f5f5;\n}\n.vue-treeselect--single .vue-treeselect__option--selected {\n  background: #e3f2fd;\n  font-weight: 600;\n}\n.vue-treeselect--single .vue-treeselect__option--selected:hover {\n  background: #e3f2fd;\n}\n.vue-treeselect__option--hide {\n  display: none;\n}\n.vue-treeselect__option-arrow-container,\n.vue-treeselect__option-arrow-placeholder {\n  display: table-cell;\n  vertical-align: middle;\n  width: 20px;\n  text-align: center;\n  line-height: 0;\n}\n.vue-treeselect__option-arrow-container {\n  cursor: pointer;\n}\n.vue-treeselect__option-arrow {\n  display: inline-block;\n  width: 9px;\n  height: 9px;\n  color: #ccc;\n  vertical-align: middle;\n  transition: 200ms transform cubic-bezier(0.19, 1, 0.22, 1);\n  transform: rotateZ(-90deg);\n}\n[dir=\"rtl\"] .vue-treeselect__option-arrow {\n  transform: rotateZ(90deg);\n}\n.vue-treeselect__option-arrow-container:hover .vue-treeselect__option-arrow,\n.vue-treeselect--branch-nodes-disabled .vue-treeselect__option:hover .vue-treeselect__option-arrow {\n  color: #616161;\n}\n.vue-treeselect__option-arrow--rotated {\n  transform: rotateZ(0);\n}\n[dir=\"rtl\"] .vue-treeselect__option-arrow--rotated {\n  transform: rotateZ(0);\n}\n.vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter {\n  transform: rotateZ(-90deg) !important;\n}\n[dir=\"rtl\"] .vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter {\n  transform: rotateZ(90deg) !important;\n}\n.vue-treeselect__label-container {\n  display: table-cell;\n  vertical-align: middle;\n  cursor: pointer;\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  color: inherit;\n}\n.vue-treeselect__option--disabled .vue-treeselect__label-container {\n  cursor: not-allowed;\n  color: rgba(0, 0, 0, 0.25);\n}\n.vue-treeselect__checkbox-container {\n  display: table-cell;\n  width: 20px;\n  min-width: 20px;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n}\n.vue-treeselect__checkbox {\n  display: block;\n  margin: auto;\n  width: 12px;\n  height: 12px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  position: relative;\n  transition: 200ms all cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.vue-treeselect__check-mark,\n.vue-treeselect__minus-mark {\n  display: block;\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: 200ms all ease;\n}\n.vue-treeselect__minus-mark {\n  width: 8px;\n  height: 8px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAD///////9zeKVjAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=);\n  background-size: 8px 8px;\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n  .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {\n  .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==);\n  }\n}\n.vue-treeselect__checkbox--indeterminate > .vue-treeselect__minus-mark {\n  opacity: 1;\n}\n.vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAADi4uLh4eHOxeSRAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=);\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAADh4eHg4ODNzc3h4eEYfw2wAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==);\n  }\n}\n.vue-treeselect__check-mark {\n  width: 8px;\n  height: 8px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA8u24NxILB+Tawb6jiH1zRz0xIQIIP3GUAAAAMklEQVQI1y3FtQEAMQDDQD+EGbz/qkEVOpyEOP6PudKjZNSXn4Jm2CKRdBKzSLsFWl8fMG0Bl6Jk1rMAAAAASUVORK5CYII=);\n  background-size: 8px 8px;\n  transform: scaleY(0.125);\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n  .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {\n  .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMA/PiJhGNI9XlEHJB/b2ldV08+Oibk49vPp6QhAYgGBuwAAACCSURBVCjPrdHdDoIwDAXgTWAqCigo/+f9X5OwnoUwtis4V92XNWladUl+rzQPeQJAN2EHxoOnsPn7/oYk8fxBv08Rr/deOH/aZ2Nm8ZJ+s573QGfWKnNuZGzWm3+lv2V3pcU1XQ385/yjmBoM3Z+dXvlbYLLD3ujhTaOM3KaIXvNkFkuSEvYy1LqOAAAAAElFTkSuQmCC);\n  }\n}\n.vue-treeselect__checkbox--checked > .vue-treeselect__check-mark {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUAAADj4+Pf39/h4eHh4eHh4eHk5OTh4eHg4ODi4uLh4eHh4eHg4ODh4eHh4eHg4ODh4eHh4eHp6en////h4eFqcyvUAAAAFHRSTlMAOQfy7bgS5NrBvqOIfXNHMSELAgQ/iFsAAAA2SURBVAjXY4AANjYIzcjMAaVFuBkY+RkEWERYmRjYRXjANAOfiIgIFxNIAa8IpxBEi6AwiAQAK2MBd7xY8csAAAAASUVORK5CYII=);\n}\n@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==);\n  }\n}\n@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {\n  .vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEUAAADh4eHh4eHh4eHh4eHi4uLi4uLh4eHh4eHh4eHf39/j4+Ph4eHh4eHh4eHg4ODi4uLh4eHh4eHi4uLh4eHh4eHh4eHh4eHh4eH////h4eF3FMFTAAAAGnRSTlMA+/eJhGhfSHE9JBzz5KaQf3pXT0Xbz0I5AYDw8F0AAAB+SURBVCjPrdHbDoMgEEVRKAii1dZe9fz/hxplTiKIT7qfYCWTEEZdUvOwbckNAD2WHeh3brHW5f5EzGQ+iN+b1Gt6KPvtv16Dn6JX9M9ya3/A1yfu5dlyduL6Hec7mXY6ddXLPP2lpABGZ8PWXfYLTJxZekVhhl7eTX24zZPNKXoRC7zQLjUAAAAASUVORK5CYII=);\n  }\n}\n.vue-treeselect__checkbox--unchecked {\n  border-color: #e0e0e0;\n  background: #fff;\n}\n.vue-treeselect__label-container:hover .vue-treeselect__checkbox--unchecked {\n  border-color: #039be5;\n  background: #fff;\n}\n.vue-treeselect__checkbox--indeterminate {\n  border-color: #039be5;\n  background: #039be5;\n}\n.vue-treeselect__label-container:hover .vue-treeselect__checkbox--indeterminate {\n  border-color: #039be5;\n  background: #039be5;\n}\n.vue-treeselect__checkbox--checked {\n  border-color: #039be5;\n  background: #039be5;\n}\n.vue-treeselect__label-container:hover .vue-treeselect__checkbox--checked {\n  border-color: #039be5;\n  background: #039be5;\n}\n.vue-treeselect__checkbox--disabled {\n  border-color: #e0e0e0;\n  background-color: #f7f7f7;\n}\n.vue-treeselect__label-container:hover .vue-treeselect__checkbox--disabled {\n  border-color: #e0e0e0;\n  background-color: #f7f7f7;\n}\n.vue-treeselect__label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: table-cell;\n  padding-left: 5px;\n  max-width: 100%;\n  vertical-align: middle;\n  cursor: inherit;\n}\n[dir=\"rtl\"] .vue-treeselect__label {\n  padding-left: 0;\n  padding-right: 5px;\n}\n.vue-treeselect__count {\n  margin-left: 5px;\n  font-weight: 400;\n  opacity: 0.6;\n}\n[dir=\"rtl\"] .vue-treeselect__count {\n  margin-left: 0;\n  margin-right: 5px;\n}\n.vue-treeselect__tip {\n  padding-left: 5px;\n  padding-right: 5px;\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  color: #757575;\n}\n.vue-treeselect__tip-text {\n  display: table-cell;\n  vertical-align: middle;\n  padding-left: 5px;\n  padding-right: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  font-size: 12px;\n}\n.vue-treeselect__error-tip .vue-treeselect__retry {\n  cursor: pointer;\n  margin-left: 5px;\n  font-style: normal;\n  font-weight: 600;\n  text-decoration: none;\n  color: #039be5;\n}\n[dir=\"rtl\"] .vue-treeselect__error-tip .vue-treeselect__retry {\n  margin-left: 0;\n  margin-right: 5px;\n}\n.vue-treeselect__icon-container {\n  display: table-cell;\n  vertical-align: middle;\n  width: 20px;\n  text-align: center;\n  line-height: 0;\n}\n.vue-treeselect--single .vue-treeselect__icon-container {\n  padding-left: 5px;\n}\n[dir=\"rtl\"] .vue-treeselect--single .vue-treeselect__icon-container {\n  padding-left: 0;\n  padding-right: 5px;\n}\n.vue-treeselect__icon-warning {\n  display: block;\n  margin: auto;\n  border-radius: 50%;\n  position: relative;\n  width: 12px;\n  height: 12px;\n  background: #fb8c00;\n}\n.vue-treeselect__icon-warning::after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: 5px;\n  top: 2.5px;\n  width: 2px;\n  height: 1px;\n  border: 0 solid #fff;\n  border-top-width: 5px;\n  border-bottom-width: 1px;\n}\n.vue-treeselect__icon-error {\n  display: block;\n  margin: auto;\n  border-radius: 50%;\n  position: relative;\n  width: 12px;\n  height: 12px;\n  background: #e53935;\n}\n.vue-treeselect__icon-error::before,\n.vue-treeselect__icon-error::after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  background: #fff;\n  transform: rotate(45deg);\n}\n.vue-treeselect__icon-error::before {\n  width: 6px;\n  height: 2px;\n  left: 3px;\n  top: 5px;\n}\n.vue-treeselect__icon-error::after {\n  width: 2px;\n  height: 6px;\n  left: 5px;\n  top: 3px;\n}\n.vue-treeselect__icon-loader {\n  display: block;\n  margin: auto;\n  position: relative;\n  width: 12px;\n  height: 12px;\n  text-align: center;\n  -webkit-animation: 1.6s vue-treeselect-animation-rotate linear infinite;\n          animation: 1.6s vue-treeselect-animation-rotate linear infinite;\n}\n.vue-treeselect__icon-loader::before,\n.vue-treeselect__icon-loader::after {\n  border-radius: 50%;\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  -webkit-animation: 1.6s vue-treeselect-animation-bounce ease-in-out infinite;\n          animation: 1.6s vue-treeselect-animation-bounce ease-in-out infinite;\n}\n.vue-treeselect__icon-loader::before {\n  background: #039be5;\n}\n.vue-treeselect__icon-loader::after {\n  background: #b3e5fc;\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n/**\n * Menu Portal\n */\n.vue-treeselect__menu-placeholder {\n  display: none;\n}\n.vue-treeselect__portal-target {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  height: 0;\n  width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  overflow: visible;\n  box-sizing: border-box;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-main .v-data-table button.new_item {\n    margin-top: -77px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/fuzzysearch/index.js":
/*!*******************************************!*\
  !*** ./node_modules/fuzzysearch/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;


/***/ }),

/***/ "./node_modules/is-promise/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-promise/index.js ***!
  \******************************************/
/***/ ((module) => {

module.exports = isPromise;
module.exports["default"] = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/before.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/before.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/***/ ((module) => {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/once.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/once.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var before = __webpack_require__(/*! ./before */ "./node_modules/lodash/before.js");

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css":
/*!**********************************************************************!*\
  !*** ./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./vue-treeselect.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/@riophae/vue-treeselect/dist/vue-treeselect.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_vue_treeselect_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/dashboard/pages/create.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/dashboard/pages/create.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_07e937fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=07e937fe& */ "./resources/js/views/dashboard/pages/create.vue?vue&type=template&id=07e937fe&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/pages/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/dashboard/pages/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_07e937fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_07e937fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/pages/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/pages/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/dashboard/pages/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/pages/create.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/pages/create.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/dashboard/pages/create.vue?vue&type=template&id=07e937fe&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/dashboard/pages/create.vue?vue&type=template&id=07e937fe& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_07e937fe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_07e937fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_07e937fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=07e937fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=template&id=07e937fe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=template&id=07e937fe&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/pages/create.vue?vue&type=template&id=07e937fe& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-container",
    { staticClass: "page-main", attrs: { fluid: "", tag: "section" } },
    [
      _c(
        "v-row",
        { attrs: { justify: "center" } },
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
            "v-col",
            { attrs: { cols: "12", md: "12" } },
            [
              _vm._l(_vm.languages, function (language) {
                return _c(
                  "v-btn",
                  {
                    key: language.value,
                    attrs: {
                      color: _vm.lang === language.value ? "primary" : "",
                    },
                    on: {
                      click: function ($event) {
                        _vm.lang = language.value
                      },
                    },
                  },
                  [_vm._v(_vm._s(language.text) + "\n            ")]
                )
              }),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "", md12: "", lg12: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("ValidationObserver", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var invalid = ref.invalid
                              return [
                                _c(
                                  "v-form",
                                  { ref: "pageForm" },
                                  [
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
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value:
                                                          _vm.lang === "uz",
                                                        expression:
                                                          "lang==='uz'",
                                                      },
                                                    ],
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "12",
                                                      md: "12",
                                                    },
                                                  },
                                                  [
                                                    _c("ValidationProvider", {
                                                      attrs: {
                                                        name: "Сарлавха",
                                                        rules: "required|min:3",
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function (ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Сарлавха",
                                                                      name: "title",
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .title,
                                                                      callback:
                                                                        function (
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.editedItem,
                                                                            "title",
                                                                            $$v
                                                                          )
                                                                        },
                                                                      expression:
                                                                        "editedItem.title",
                                                                    },
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "error--text",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
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
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  _vm.langtext,
                                                  function (langItem, langKey) {
                                                    return _c(
                                                      "v-col",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value:
                                                              _vm.lang ===
                                                              langKey,
                                                            expression:
                                                              "lang===langKey",
                                                          },
                                                        ],
                                                        key: "title" + langKey,
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "ValidationProvider",
                                                          {
                                                            attrs: {
                                                              name: "Сарлавха",
                                                              rules:
                                                                "required|min:3",
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "default",
                                                                  fn: function (
                                                                    ref
                                                                  ) {
                                                                    var errors =
                                                                      ref.errors
                                                                    return [
                                                                      _c(
                                                                        "v-text-field",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              label:
                                                                                "Сарлавха - " +
                                                                                _vm.getLang()[
                                                                                  "text"
                                                                                ],
                                                                              name: "title",
                                                                            },
                                                                          model:
                                                                            {
                                                                              value:
                                                                                _vm
                                                                                  .langtext[
                                                                                  _vm
                                                                                    .lang
                                                                                ]
                                                                                  .title,
                                                                              callback:
                                                                                function (
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .langtext[
                                                                                      _vm
                                                                                        .lang
                                                                                    ],
                                                                                    "title",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                              expression:
                                                                                "langtext[lang].title",
                                                                            },
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "error--text",
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              errors[0]
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
                                                          }
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  }
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value:
                                                          _vm.lang === "uz",
                                                        expression:
                                                          "lang==='uz'",
                                                      },
                                                    ],
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "12",
                                                      md: "12",
                                                    },
                                                  },
                                                  [
                                                    _c("ValidationProvider", {
                                                      attrs: {
                                                        name: "Сахифа тексти",
                                                        rules: "required|min:3",
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function (ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c("editor", {
                                                                  ref: "tinymce_editor",
                                                                  attrs: {
                                                                    "api-key":
                                                                      "08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7",
                                                                    init: {
                                                                      selector:
                                                                        "textarea",
                                                                      height: 500,
                                                                      plugins:
                                                                        "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
                                                                      imagetools_cors_hosts:
                                                                        [
                                                                          "picsum.photos",
                                                                        ],
                                                                      menubar:
                                                                        "file edit view insert format tools table help",
                                                                      toolbar:
                                                                        "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
                                                                      toolbar_sticky: true,
                                                                      autosave_ask_before_unload: true,
                                                                      autosave_interval:
                                                                        "30s",
                                                                      autosave_prefix:
                                                                        "{path}{query}-{id}-",
                                                                      valid_elements:
                                                                        "a[accesskey|charset|class|coords|dir<ltr?rtl|href|hreflang|id|lang|name" +
                                                                        "|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rel|rev" +
                                                                        "|shape<circle?default?poly?rect|style|tabindex|title|target|type]," +
                                                                        "abbr[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "acronym[class|dir<ltr?rtl|id|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "address[class|align|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|style|title]," +
                                                                        "applet[align<bottom?left?middle?right?top|alt|archive|class|code|codebase" +
                                                                        "|height|hspace|id|name|object|style|title|vspace|width]," +
                                                                        "area[accesskey|alt|class|coords|dir<ltr?rtl|href|id|lang|nohref<nohref" +
                                                                        "|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup" +
                                                                        "|shape<circle?default?poly?rect|style|tabindex|title|target]," +
                                                                        "base[href|target]," +
                                                                        "basefont[color|face|id|size]," +
                                                                        "bdo[class|dir<ltr?rtl|id|lang|style|title]," +
                                                                        "big[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "blockquote[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick" +
                                                                        "|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
                                                                        "|onmouseover|onmouseup|style|title]," +
                                                                        "body[alink|background|bgcolor|class|dir<ltr?rtl|id|lang|link|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|onunload|style|title|text|vlink]," +
                                                                        "br[class|clear<all?left?none?right|id|style|title]," +
                                                                        "button[accesskey|class|dir<ltr?rtl|disabled<disabled|id|lang|name|onblur" +
                                                                        "|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                        "|onmousemove|onmouseout|onmouseover|onmouseup|style|tabindex|title|type" +
                                                                        "|value]," +
                                                                        "caption[align<bottom?left?right?top|class|dir<ltr?rtl|id|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "center[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "cite[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "code[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "col[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id" +
                                                                        "|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                        "|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title" +
                                                                        "|valign<baseline?bottom?middle?top|width]," +
                                                                        "colgroup[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl" +
                                                                        "|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                        "|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title" +
                                                                        "|valign<baseline?bottom?middle?top|width]," +
                                                                        "dd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "del[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|style|title]," +
                                                                        "dfn[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "dir[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|style|title]," +
                                                                        "div[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "dl[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|style|title]," +
                                                                        "dt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "em/i[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "fieldset[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "font[class|color|dir<ltr?rtl|face|id|lang|size|style|title]," +
                                                                        "form[accept|accept-charset|action|class|dir<ltr?rtl|enctype|id|lang" +
                                                                        "|method<get?post|name|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onreset|onsubmit" +
                                                                        "|style|title|target]," +
                                                                        "frame[class|frameborder|id|longdesc|marginheight|marginwidth|name" +
                                                                        "|noresize<noresize|scrolling<auto?no?yes|src|style|title]," +
                                                                        "frameset[class|cols|id|onload|onunload|rows|style|title]," +
                                                                        "h1[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "h2[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "h3[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "h4[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "h5[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "h6[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "head[dir<ltr?rtl|lang|profile]," +
                                                                        "hr[align<center?left?right|class|dir<ltr?rtl|id|lang|noshade<noshade|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|size|style|title|width]," +
                                                                        "html[dir<ltr?rtl|lang|version]," +
                                                                        "iframe[align<bottom?left?middle?right?top|class|frameborder|height|id" +
                                                                        "|longdesc|marginheight|marginwidth|name|scrolling<auto?no?yes|src|style" +
                                                                        "|title|width]," +
                                                                        "img[align<bottom?left?middle?right?top|alt|border|class|dir<ltr?rtl|height" +
                                                                        "|hspace|id|ismap<ismap|lang|longdesc|name|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|src|style|title|usemap|vspace|width]," +
                                                                        "input[accept|accesskey|align<bottom?left?middle?right?top|alt" +
                                                                        "|checked<checked|class|dir<ltr?rtl|disabled<disabled|id|ismap<ismap|lang" +
                                                                        "|maxlength|name|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect" +
                                                                        "|readonly<readonly|size|src|style|tabindex|title" +
                                                                        "|type<button?checkbox?file?hidden?image?password?radio?reset?submit?text" +
                                                                        "|usemap|value]," +
                                                                        "ins[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|style|title]," +
                                                                        "isindex[class|dir<ltr?rtl|id|lang|prompt|style|title]," +
                                                                        "kbd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "label[accesskey|class|dir<ltr?rtl|for|id|lang|onblur|onclick|ondblclick" +
                                                                        "|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
                                                                        "|onmouseover|onmouseup|style|title]," +
                                                                        "legend[align<bottom?left?right?top|accesskey|class|dir<ltr?rtl|id|lang" +
                                                                        "|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "li[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|type" +
                                                                        "|value]," +
                                                                        "link[charset|class|dir<ltr?rtl|href|hreflang|id|lang|media|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|rel|rev|style|title|target|type]," +
                                                                        "map[class|dir<ltr?rtl|id|lang|name|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "menu[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|style|title]," +
                                                                        "meta[content|dir<ltr?rtl|http-equiv|lang|name|scheme]," +
                                                                        "noframes[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "noscript[class|dir<ltr?rtl|id|lang|style|title]," +
                                                                        "object[align<bottom?left?middle?right?top|archive|border|class|classid" +
                                                                        "|codebase|codetype|data|declare|dir<ltr?rtl|height|hspace|id|lang|name" +
                                                                        "|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|standby|style|tabindex|title|type|usemap" +
                                                                        "|vspace|width]," +
                                                                        "ol[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|start|style|title|type]," +
                                                                        "optgroup[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "option[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick|ondblclick" +
                                                                        "|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
                                                                        "|onmouseover|onmouseup|selected<selected|style|title|value]," +
                                                                        "p[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "param[id|name|type|value|valuetype<DATA?OBJECT?REF]," +
                                                                        "pre/listing/plaintext/xmp[align|class|dir<ltr?rtl|id|lang|onclick|ondblclick" +
                                                                        "|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
                                                                        "|onmouseover|onmouseup|style|title|width]," +
                                                                        "q[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "s[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "samp[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "script[charset|defer|language|src|type]," +
                                                                        "select[class|dir<ltr?rtl|disabled<disabled|id|lang|multiple<multiple|name" +
                                                                        "|onblur|onchange|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|size|style" +
                                                                        "|tabindex|title]," +
                                                                        "small[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "span[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|style|title]," +
                                                                        "strike[class|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|style|title]," +
                                                                        "strong/b[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "style[dir<ltr?rtl|lang|media|title|type]," +
                                                                        "sub[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "sup[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]," +
                                                                        "table[align<center?left?right|bgcolor|border|cellpadding|cellspacing|class" +
                                                                        "|dir<ltr?rtl|frame|height|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rules" +
                                                                        "|style|summary|title|width]," +
                                                                        "tbody[align<center?char?justify?left?right|char|class|charoff|dir<ltr?rtl|id" +
                                                                        "|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                        "|onmousemove|onmouseout|onmouseover|onmouseup|style|title" +
                                                                        "|valign<baseline?bottom?middle?top]," +
                                                                        "td[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class" +
                                                                        "|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup" +
                                                                        "|style|title|valign<baseline?bottom?middle?top|width]," +
                                                                        "textarea[accesskey|class|cols|dir<ltr?rtl|disabled<disabled|id|lang|name" +
                                                                        "|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect" +
                                                                        "|readonly<readonly|rows|style|tabindex|title]," +
                                                                        "tfoot[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id" +
                                                                        "|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                        "|onmousemove|onmouseout|onmouseover|onmouseup|style|title" +
                                                                        "|valign<baseline?bottom?middle?top]," +
                                                                        "th[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class" +
                                                                        "|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick" +
                                                                        "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                        "|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup" +
                                                                        "|style|title|valign<baseline?bottom?middle?top|width]," +
                                                                        "thead[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id" +
                                                                        "|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                        "|onmousemove|onmouseout|onmouseover|onmouseup|style|title" +
                                                                        "|valign<baseline?bottom?middle?top]," +
                                                                        "title[dir<ltr?rtl|lang]," +
                                                                        "tr[abbr|align<center?char?justify?left?right|bgcolor|char|charoff|class" +
                                                                        "|rowspan|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title|valign<baseline?bottom?middle?top]," +
                                                                        "tt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "u[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                        "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                        "ul[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                        "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                        "|onmouseup|style|title|type]," +
                                                                        "var[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                        "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                        "|title]",
                                                                      autosave_restore_when_empty: false,
                                                                      autosave_retention:
                                                                        "2m",
                                                                      image_advtab: true,
                                                                      importcss_append: true,
                                                                      image_caption: true,
                                                                      quickbars_selection_toolbar:
                                                                        "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                                                                      noneditable_noneditable_class:
                                                                        "mceNonEditable",
                                                                      toolbar_mode:
                                                                        "sliding",
                                                                      contextmenu:
                                                                        "link image imagetools table",
                                                                      content_style:
                                                                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                                                      file_browser_callback:
                                                                        _vm.file_browser_callback,
                                                                    },
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm
                                                                        .editedItem
                                                                        .description,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "description",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "editedItem.description",
                                                                  },
                                                                }),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "error--text",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
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
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _vm._l(
                                                  _vm.langtext,
                                                  function (langItem, langKey) {
                                                    return _c(
                                                      "v-col",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value:
                                                              _vm.lang ===
                                                              langKey,
                                                            expression:
                                                              "lang===langKey",
                                                          },
                                                        ],
                                                        key: "lang" + langKey,
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12",
                                                        },
                                                      },
                                                      [
                                                        _c(
                                                          "ValidationProvider",
                                                          {
                                                            attrs: {
                                                              name: "Сахифа тексти",
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key: "default",
                                                                  fn: function (
                                                                    ref
                                                                  ) {
                                                                    var errors =
                                                                      ref.errors
                                                                    return [
                                                                      _c(
                                                                        "editor",
                                                                        {
                                                                          ref: "tinymce_editor",
                                                                          refInFor: true,
                                                                          attrs:
                                                                            {
                                                                              "api-key":
                                                                                "08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7",
                                                                              init: {
                                                                                selector:
                                                                                  "textarea",
                                                                                height: 500,
                                                                                plugins:
                                                                                  "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
                                                                                imagetools_cors_hosts:
                                                                                  [
                                                                                    "picsum.photos",
                                                                                  ],
                                                                                menubar:
                                                                                  "file edit view insert format tools table help",
                                                                                toolbar:
                                                                                  "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
                                                                                toolbar_sticky: true,
                                                                                autosave_ask_before_unload: true,
                                                                                autosave_interval:
                                                                                  "30s",
                                                                                autosave_prefix:
                                                                                  "{path}{query}-{id}-",
                                                                                valid_elements:
                                                                                  "a[accesskey|charset|class|coords|dir<ltr?rtl|href|hreflang|id|lang|name" +
                                                                                  "|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rel|rev" +
                                                                                  "|shape<circle?default?poly?rect|style|tabindex|title|target|type]," +
                                                                                  "abbr[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "acronym[class|dir<ltr?rtl|id|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "address[class|align|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|style|title]," +
                                                                                  "applet[align<bottom?left?middle?right?top|alt|archive|class|code|codebase" +
                                                                                  "|height|hspace|id|name|object|style|title|vspace|width]," +
                                                                                  "area[accesskey|alt|class|coords|dir<ltr?rtl|href|id|lang|nohref<nohref" +
                                                                                  "|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup" +
                                                                                  "|shape<circle?default?poly?rect|style|tabindex|title|target]," +
                                                                                  "base[href|target]," +
                                                                                  "basefont[color|face|id|size]," +
                                                                                  "bdo[class|dir<ltr?rtl|id|lang|style|title]," +
                                                                                  "big[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "blockquote[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick" +
                                                                                  "|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
                                                                                  "|onmouseover|onmouseup|style|title]," +
                                                                                  "body[alink|background|bgcolor|class|dir<ltr?rtl|id|lang|link|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|onunload|style|title|text|vlink]," +
                                                                                  "br[class|clear<all?left?none?right|id|style|title]," +
                                                                                  "button[accesskey|class|dir<ltr?rtl|disabled<disabled|id|lang|name|onblur" +
                                                                                  "|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                                  "|onmousemove|onmouseout|onmouseover|onmouseup|style|tabindex|title|type" +
                                                                                  "|value]," +
                                                                                  "caption[align<bottom?left?right?top|class|dir<ltr?rtl|id|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "center[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "cite[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "code[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "col[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id" +
                                                                                  "|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                                  "|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title" +
                                                                                  "|valign<baseline?bottom?middle?top|width]," +
                                                                                  "colgroup[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl" +
                                                                                  "|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                                  "|onmousemove|onmouseout|onmouseover|onmouseup|span|style|title" +
                                                                                  "|valign<baseline?bottom?middle?top|width]," +
                                                                                  "dd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "del[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|style|title]," +
                                                                                  "dfn[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "dir[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|style|title]," +
                                                                                  "div[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "dl[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|style|title]," +
                                                                                  "dt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "em/i[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "fieldset[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "font[class|color|dir<ltr?rtl|face|id|lang|size|style|title]," +
                                                                                  "form[accept|accept-charset|action|class|dir<ltr?rtl|enctype|id|lang" +
                                                                                  "|method<get?post|name|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onreset|onsubmit" +
                                                                                  "|style|title|target]," +
                                                                                  "frame[class|frameborder|id|longdesc|marginheight|marginwidth|name" +
                                                                                  "|noresize<noresize|scrolling<auto?no?yes|src|style|title]," +
                                                                                  "frameset[class|cols|id|onload|onunload|rows|style|title]," +
                                                                                  "h1[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "h2[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "h3[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "h4[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "h5[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "h6[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "head[dir<ltr?rtl|lang|profile]," +
                                                                                  "hr[align<center?left?right|class|dir<ltr?rtl|id|lang|noshade<noshade|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|size|style|title|width]," +
                                                                                  "html[dir<ltr?rtl|lang|version]," +
                                                                                  "iframe[align<bottom?left?middle?right?top|class|frameborder|height|id" +
                                                                                  "|longdesc|marginheight|marginwidth|name|scrolling<auto?no?yes|src|style" +
                                                                                  "|title|width]," +
                                                                                  "img[align<bottom?left?middle?right?top|alt|border|class|dir<ltr?rtl|height" +
                                                                                  "|hspace|id|ismap<ismap|lang|longdesc|name|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|src|style|title|usemap|vspace|width]," +
                                                                                  "input[accept|accesskey|align<bottom?left?middle?right?top|alt" +
                                                                                  "|checked<checked|class|dir<ltr?rtl|disabled<disabled|id|ismap<ismap|lang" +
                                                                                  "|maxlength|name|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect" +
                                                                                  "|readonly<readonly|size|src|style|tabindex|title" +
                                                                                  "|type<button?checkbox?file?hidden?image?password?radio?reset?submit?text" +
                                                                                  "|usemap|value]," +
                                                                                  "ins[cite|class|datetime|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|style|title]," +
                                                                                  "isindex[class|dir<ltr?rtl|id|lang|prompt|style|title]," +
                                                                                  "kbd[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "label[accesskey|class|dir<ltr?rtl|for|id|lang|onblur|onclick|ondblclick" +
                                                                                  "|onfocus|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
                                                                                  "|onmouseover|onmouseup|style|title]," +
                                                                                  "legend[align<bottom?left?right?top|accesskey|class|dir<ltr?rtl|id|lang" +
                                                                                  "|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "li[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title|type" +
                                                                                  "|value]," +
                                                                                  "link[charset|class|dir<ltr?rtl|href|hreflang|id|lang|media|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|rel|rev|style|title|target|type]," +
                                                                                  "map[class|dir<ltr?rtl|id|lang|name|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "menu[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|style|title]," +
                                                                                  "meta[content|dir<ltr?rtl|http-equiv|lang|name|scheme]," +
                                                                                  "noframes[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "noscript[class|dir<ltr?rtl|id|lang|style|title]," +
                                                                                  "object[align<bottom?left?middle?right?top|archive|border|class|classid" +
                                                                                  "|codebase|codetype|data|declare|dir<ltr?rtl|height|hspace|id|lang|name" +
                                                                                  "|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|standby|style|tabindex|title|type|usemap" +
                                                                                  "|vspace|width]," +
                                                                                  "ol[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|start|style|title|type]," +
                                                                                  "optgroup[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "option[class|dir<ltr?rtl|disabled<disabled|id|label|lang|onclick|ondblclick" +
                                                                                  "|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
                                                                                  "|onmouseover|onmouseup|selected<selected|style|title|value]," +
                                                                                  "p[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "param[id|name|type|value|valuetype<DATA?OBJECT?REF]," +
                                                                                  "pre/listing/plaintext/xmp[align|class|dir<ltr?rtl|id|lang|onclick|ondblclick" +
                                                                                  "|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
                                                                                  "|onmouseover|onmouseup|style|title|width]," +
                                                                                  "q[cite|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "s[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "samp[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "script[charset|defer|language|src|type]," +
                                                                                  "select[class|dir<ltr?rtl|disabled<disabled|id|lang|multiple<multiple|name" +
                                                                                  "|onblur|onchange|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|size|style" +
                                                                                  "|tabindex|title]," +
                                                                                  "small[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "span[align<center?justify?left?right|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|style|title]," +
                                                                                  "strike[class|class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|style|title]," +
                                                                                  "strong/b[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "style[dir<ltr?rtl|lang|media|title|type]," +
                                                                                  "sub[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "sup[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]," +
                                                                                  "table[align<center?left?right|bgcolor|border|cellpadding|cellspacing|class" +
                                                                                  "|dir<ltr?rtl|frame|height|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|rules" +
                                                                                  "|style|summary|title|width]," +
                                                                                  "tbody[align<center?char?justify?left?right|char|class|charoff|dir<ltr?rtl|id" +
                                                                                  "|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                                  "|onmousemove|onmouseout|onmouseover|onmouseup|style|title" +
                                                                                  "|valign<baseline?bottom?middle?top]," +
                                                                                  "td[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class" +
                                                                                  "|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup" +
                                                                                  "|style|title|valign<baseline?bottom?middle?top|width]," +
                                                                                  "textarea[accesskey|class|cols|dir<ltr?rtl|disabled<disabled|id|lang|name" +
                                                                                  "|onblur|onclick|ondblclick|onfocus|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onselect" +
                                                                                  "|readonly<readonly|rows|style|tabindex|title]," +
                                                                                  "tfoot[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id" +
                                                                                  "|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                                  "|onmousemove|onmouseout|onmouseover|onmouseup|style|title" +
                                                                                  "|valign<baseline?bottom?middle?top]," +
                                                                                  "th[abbr|align<center?char?justify?left?right|axis|bgcolor|char|charoff|class" +
                                                                                  "|colspan|dir<ltr?rtl|headers|height|id|lang|nowrap<nowrap|onclick" +
                                                                                  "|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove" +
                                                                                  "|onmouseout|onmouseover|onmouseup|rowspan|scope<col?colgroup?row?rowgroup" +
                                                                                  "|style|title|valign<baseline?bottom?middle?top|width]," +
                                                                                  "thead[align<center?char?justify?left?right|char|charoff|class|dir<ltr?rtl|id" +
                                                                                  "|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown" +
                                                                                  "|onmousemove|onmouseout|onmouseover|onmouseup|style|title" +
                                                                                  "|valign<baseline?bottom?middle?top]," +
                                                                                  "title[dir<ltr?rtl|lang]," +
                                                                                  "tr[abbr|align<center?char?justify?left?right|bgcolor|char|charoff|class" +
                                                                                  "|rowspan|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title|valign<baseline?bottom?middle?top]," +
                                                                                  "tt[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "u[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress|onkeyup" +
                                                                                  "|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style|title]," +
                                                                                  "ul[class|compact<compact|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown" +
                                                                                  "|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover" +
                                                                                  "|onmouseup|style|title|type]," +
                                                                                  "var[class|dir<ltr?rtl|id|lang|onclick|ondblclick|onkeydown|onkeypress" +
                                                                                  "|onkeyup|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|style" +
                                                                                  "|title]",
                                                                                autosave_restore_when_empty: false,
                                                                                autosave_retention:
                                                                                  "2m",
                                                                                image_advtab: true,
                                                                                importcss_append: true,
                                                                                image_caption: true,
                                                                                quickbars_selection_toolbar:
                                                                                  "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                                                                                noneditable_noneditable_class:
                                                                                  "mceNonEditable",
                                                                                toolbar_mode:
                                                                                  "sliding",
                                                                                contextmenu:
                                                                                  "link image imagetools table",
                                                                                content_style:
                                                                                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                                                                file_browser_callback:
                                                                                  _vm.file_browser_callback,
                                                                              },
                                                                            },
                                                                          model:
                                                                            {
                                                                              value:
                                                                                _vm
                                                                                  .langtext[
                                                                                  langKey
                                                                                ]
                                                                                  .description,
                                                                              callback:
                                                                                function (
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .langtext[
                                                                                      langKey
                                                                                    ],
                                                                                    "description",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                              expression:
                                                                                "langtext[langKey].description",
                                                                            },
                                                                        }
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "error--text",
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              errors[0]
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
                                                          }
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  }
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "3",
                                                      sm: "3",
                                                      md: "3",
                                                    },
                                                  },
                                                  [
                                                    _c("v-switch", {
                                                      attrs: {
                                                        label:
                                                          "Фойдаланувчиларга кўрсатиш",
                                                        name: "publish",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .publish,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "publish",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.publish",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "3",
                                                      sm: "3",
                                                      md: "3",
                                                    },
                                                  },
                                                  [
                                                    _c("v-switch", {
                                                      attrs: {
                                                        inset: "",
                                                        label: _vm.menu
                                                          ? "Бош сахифада чиқарилсин"
                                                          : "Бош сахифада чиқарилмасин",
                                                      },
                                                      model: {
                                                        value: _vm.menu,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.menu = $$v
                                                        },
                                                        expression: "menu",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _vm.menu
                                                  ? _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "3",
                                                          sm: "3",
                                                          md: "3",
                                                        },
                                                      },
                                                      [
                                                        _c("treeselect", {
                                                          staticStyle: {
                                                            "margin-top":
                                                              "10px",
                                                          },
                                                          attrs: {
                                                            options: _vm.menus,
                                                            noChildrenText:
                                                              "Қуйи даража менюлар топилмади",
                                                            placeholder:
                                                              "Юкори даража менюни танланг",
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .menu,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "menu",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.menu",
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e(),
                                              ],
                                              2
                                            ),
                                          ],
                                          1
                                        ),
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
                                              text: "",
                                            },
                                            on: { click: _vm.close },
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
                                            on: { click: _vm.save },
                                          },
                                          [_vm._v("Сақлаш")]
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
                        ]),
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            2
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



/***/ }),

/***/ "./node_modules/watch-size/index.es.mjs":
/*!**********************************************!*\
  !*** ./node_modules/watch-size/index.es.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var index = (function (element, listener) {
	var expand = document.createElement('_');
	var shrink = expand.appendChild(document.createElement('_'));
	var expandChild = expand.appendChild(document.createElement('_'));
	var shrinkChild = shrink.appendChild(document.createElement('_'));

	var lastWidth = void 0,
	    lastHeight = void 0;

	shrink.style.cssText = expand.style.cssText = 'height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1';
	shrinkChild.style.cssText = expandChild.style.cssText = 'display:block;height:100%;transition:0s;width:100%';
	shrinkChild.style.width = shrinkChild.style.height = '200%';

	element.appendChild(expand);

	test();

	return stop;

	function test() {
		unbind();

		var width = element.offsetWidth;
		var height = element.offsetHeight;

		if (width !== lastWidth || height !== lastHeight) {
			lastWidth = width;
			lastHeight = height;

			expandChild.style.width = width * 2 + 'px';
			expandChild.style.height = height * 2 + 'px';

			expand.scrollLeft = expand.scrollWidth;
			expand.scrollTop = expand.scrollHeight;
			shrink.scrollLeft = shrink.scrollWidth;
			shrink.scrollTop = shrink.scrollHeight;

			listener({ width: width, height: height });
		}

		shrink.addEventListener('scroll', test);
		expand.addEventListener('scroll', test);
	}

	function unbind() {
		shrink.removeEventListener('scroll', test);
		expand.removeEventListener('scroll', test);
	}

	function stop() {
		unbind();

		element.removeChild(expand);
	}
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ })

}]);