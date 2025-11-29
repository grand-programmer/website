(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_orgs_edit_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_adminApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../src/services/adminApi */ "./resources/js/src/services/adminApi.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _locales_oz_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../locales/oz.json */ "./resources/js/locales/oz.json");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");
/* harmony import */ var _components_form_myfield__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/form/myfield */ "./resources/js/components/form/myfield.vue");
/* harmony import */ var vue_cropperjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-cropperjs */ "./node_modules/vue-cropperjs/dist/VueCropper.js");
/* harmony import */ var cropperjs_dist_cropper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cropperjs/dist/cropper.css */ "./node_modules/cropperjs/dist/cropper.css");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "OrgUpdate",
  data: function data() {
    return {
      content: '<h1>Initial Content</h1>',
      breadcrumb_items: [{
        text: 'Админ панел',
        to: '/admin',
        exact: true
      }, {
        text: 'Бошқармалар',
        to: '/admin/orgs',
        exact: true
      }, {
        text: 'Бошқармани тахрирлаш',
        to: '#',
        exact: true,
        disabled: true
      }],
      organization: {
        title: ""
      },
      rahbariyat: {
        boshliq: {
          name: "",
          image: null,
          lavozimi: "Бошқарма бошлиғи",
          qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
          telefon: "(78) - 120-76-00",
          biografiyasi: ""
        },
        orinbosarlar: [{
          name: " ",
          image: null,
          lavozimi: "Бошқарма бошлиғи ўринбосари",
          qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
          telefon: "(78) - 120-76-00"
        }]
      },
      manzil: {
        manzil: "",
        avtobus: "",
        ytaksi: "",
        telefon: "",
        faks: "",
        email: "",
        map: "",
        image: null,
        translates: {
          oz: {
            manzil: null,
            ytaksi: null
          },
          ru: {
            manzil: null,
            ytaksi: null
          },
          en: {
            manzil: null,
            ytaksi: null
          }
        }
      },
      posts: [{
        title: '',
        description: '',
        manzili: '',
        telefon: '',
        translates: {
          oz: {
            title: null,
            description: null,
            manzili: null
          },
          ru: {
            title: null,
            description: null,
            manzili: null
          },
          en: {
            title: null,
            description: null,
            manzili: null
          }
        }
      }],
      panel: [],
      title: null,
      rahbariyat_boshliq_translates: {
        oz: {
          qabul: null,
          name: null,
          biografiyasi: null
        },
        ru: {
          qabul: null,
          name: null,
          biografiyasi: null
        },
        en: {
          qabul: null,
          name: null,
          biografiyasi: null
        }
      },
      rahbariyat_orinbosar_translates: [{
        oz: {
          lavozimi: null,
          qabul: null,
          name: null
        },
        ru: {
          lavozimi: null,
          name: null,
          qabul: null
        },
        en: {
          lavozimi: null,
          name: null,
          qabul: null
        }
      }],
      manzil_translates: {
        oz: {
          manzil: null,
          ytaksi: null
        },
        ru: {
          manzil: null,
          ytaksi: null
        },
        en: {
          manzil: null,
          ytaksi: null
        }
      },
      post_translates: [{
        oz: {
          title: null,
          manzil: null,
          description: null
        },
        ru: {
          title: null,
          manzil: null,
          description: null
        },
        en: {
          title: null,
          manzil: null,
          description: null
        }
      }],
      lang: 'uz',
      langtext: {
        oz: {
          title: null
        },
        ru: {
          title: null
        },
        en: {
          title: null
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
      cropImg: null,
      cropImgOrinbosar: [],
      imgSrc: null,
      imgSrcOrinbosar: [],
      rahbariyat_boshliq_image: null,
      images: [],
      orinbosarlar: []
    };
  },
  computed: {
    formTitle: function formTitle() {
      return 'Тахрирлаш';
    }
  },
  mounted: function mounted() {
    this.initialize();
  },
  methods: {
    getLang: function getLang() {
      var _this2 = this;

      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (code) {
        var language = this.languages.filter(function (language) {
          if (language.value === code) return language;
        });
        if (language) return language[0];
        return null;
      } else {
        var _language = this.languages.filter(function (language) {
          if (language.value === _this2.lang) return language;
        });

        if (_language) return _language[0];
        return null;
      }
    },
    cropImage: function cropImage() {
      var k = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var croppedimages = this.cropImgOrinbosar;
      this.cropImgOrinbosar = [];

      var _this = this;

      croppedimages.forEach(function (item, k) {
        _this.cropImgOrinbosar[k] = item;
      });

      if (k >= 0) {
        this.cropImgOrinbosar[k] = this.$refs['orinbosarCropper' + k][0].getCroppedCanvas().toDataURL();
        console.log("sdfsdf");
      } else this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    setImage: function setImage() {
      var _this3 = this;

      var k = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var e = arguments.length > 1 ? arguments[1] : undefined;
      var file = e;

      if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file');
        return;
      }

      if (typeof FileReader === 'function') {
        var reader = new FileReader();

        reader.onload = function (event) {
          // rebuild cropperjs with the updated source
          if (k >= 0) {
            _this3.$refs['orinbosarCropper' + k][0].replace(event.target.result); //console.log('asdasd')


            _this3.imgSrcOrinbosar[k] = event.target.result;
          } else {
            //console.log(k);
            _this3.$refs.cropper.replace(event.target.result);

            _this3.imgSrc = event.target.result;
          }
        };

        reader.readAsDataURL(file);
      } else {
        alert('Sorry, FileReader API not supported');
      }
    },
    initialize: function initialize() {
      var _this4 = this;

      var _this = this;

      _src_services_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].readOrg(this.$route.params.id).then(function (response) {
        _this.organization = response.data.data;
        _this.posts = _this.organization.posts;
        _this.manzil = _this.organization.manzil;
        _this.rahbariyat = _this.organization.rahbariyat;
        _this.rahbariyat.boshliq = _this.organization.rahbariyat.boshliq; //console.log(_this.rahbariyat)

        function isJsonString(str) {
          try {
            JSON.parse(str);
          } catch (e) {
            return false;
          }

          return true;
        }

        var title = isJsonString(_this.organization.title) ? JSON.parse(_this.organization.title) : "";

        if (typeof title.translates !== 'undefined' && title.translates !== 'undefined') {
          _this4.langtext = JSON.parse(title.translates);
          _this4.organization.title = JSON.parse(JSON.stringify(title.text));
        }

        if (typeof _this.organization.rahbariyat.boshliq.translates !== 'undefined') {
          _this4.rahbariyat_boshliq_translates = JSON.parse(_this.organization.rahbariyat.boshliq.translates);
        }

        if (typeof _this.organization.rahbariyat.orinbosar !== 'undefined') {
          _this.rahbariyat.orinbosar = _this.orinbosarlar = _this.organization.rahbariyat.orinbosar;
        } else _this.rahbariyat.orinbosar = _this.orinbosarlar = [];

        _this.cropImg = "/storage/uploads/boshqarmalar/boshliq/" + _this.organization.rahbariyat.boshliq.image;
        if (typeof _this4.rahbariyat.orinbosar !== 'undefined') _this.rahbariyat.orinbosar.forEach(function (item, k) {
          _this.cropImgOrinbosar[k] = "/storage/uploads/boshqarmalar/orinbosar/" + item.image; //_this.imgSrcOrinbosar[k] = "/storage/uploads/boshqarmalar/orinbosar/" + item.image;

          if (typeof _this.rahbariyat.orinbosar[k]['translates'] !== 'undefined' && _this.rahbariyat.orinbosar[k]['translates'] !== 'undefined' && _this.rahbariyat.orinbosar[k]['translates']) _this.rahbariyat_orinbosar_translates[k] = JSON.parse(_this.rahbariyat.orinbosar[k]['translates']);else _this.rahbariyat_orinbosar_translates[k] = JSON.parse(JSON.stringify(_this.rahbariyat_orinbosar_translates[0]));
        });else {
          _this.rahbariyat.orinbosar = _this.orinbosarlar = [];

          _this.rahbariyat.orinbosar.push({
            name: " ",
            image: null,
            lavozimi: "Бошқарма бошлиғи ўринбосари",
            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
            telefon: "(78) - 120-76-00",
            translates: _this.rahbariyat_orinbosar_translates[0]
          });

          _this.orinbosarlar.push({
            name: " ",
            image: null,
            lavozimi: "Бошқарма бошлиғи ўринбосари",
            qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
            telefon: "(78) - 120-76-00"
          });
        }
        if (_this.posts) _this.posts.forEach(function (item, k) {
          if (typeof item.translates !== 'undefined' && item.translates !== 'undefined') _this.post_translates[k] = JSON.parse(item.translates);else _this.post_translates[k] = JSON.parse(JSON.stringify(_this.post_translates[0]));
        });
      })["catch"](function (error) {
        _this4.$toast.error(_this.$t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));

        console.log(error);

        _this4.$router.replace("/admin/orgs")["catch"](function () {});
      }); //this.rahbariyat = _this.rahbariyat;
      //_this.$refs.cropper.replace();
      ///this.$refs.cropper.zoom(15)
    },
    close: function close() {
      this.$router.replace('/admin/orgs');
    },
    save: function save() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this, isValid, form;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this5;
                _context.next = 3;
                return _this5.$refs.organizationForm.validate();

              case 3:
                isValid = _context.sent;

                if (isValid) {
                  form = new FormData();
                  form.append('_method', 'PUT');
                  form.append('title[text]', _this5.organization.title);
                  form.append('title[translates]', JSON.stringify(_this.langtext));
                  form.append('manzil[manzil]', _this5.manzil.manzil);
                  form.append('manzil[avtobus]', _this5.manzil.avtobus);
                  form.append('manzil[ytaksi]', _this5.manzil.ytaksi);
                  form.append('manzil[telefon]', _this5.manzil.telefon);
                  form.append('manzil[faks]', _this5.manzil.faks);
                  form.append('manzil[email]', _this5.manzil.email);
                  form.append('manzil[map]', _this5.manzil.map);
                  form.append('manzil[image]', _this5.manzil.image);
                  form.append('manzil[translates]', JSON.stringify(_this.manzil_translates));
                  form.append('rahbariyat[boshliq][name]', _this5.rahbariyat.boshliq.name);
                  form.append('rahbariyat[boshliq][image]', _this5.rahbariyat.boshliq.image);
                  form.append('rahbariyat[boshliq][lavozimi]', _this5.rahbariyat.boshliq.lavozimi);
                  form.append('rahbariyat[boshliq][qabul]', _this5.rahbariyat.boshliq.qabul);
                  form.append('rahbariyat[boshliq][telefon]', _this5.rahbariyat.boshliq.telefon);
                  form.append('rahbariyat[boshliq][biografiyasi]', _this5.rahbariyat.boshliq.biografiyasi);
                  form.append('rahbariyat[boshliq][translates]', JSON.stringify(_this5.rahbariyat_boshliq_translates));
                  if (_this.imgSrc) _this5.$refs.cropper.getCroppedCanvas().toBlob(function (blob) {
                    form.append('rahbariyat[boshliq][image]', blob);
                  });

                  if (_this.imgSrcOrinbosar) {
                    console.log('111');
                    Object.entries(_this5.rahbariyat.orinbosar).forEach(function (_ref) {
                      var _ref2 = _slicedToArray(_ref, 2),
                          valkey = _ref2[0],
                          v = _ref2[1];

                      _this.rahbariyat.orinbosar[valkey]['translates'] = JSON.stringify(_this.rahbariyat_orinbosar_translates[valkey]);
                      if (typeof v.image === 'undefined') _this5.rahbariyat.orinbosar[valkey]['image'] = null;
                      Object.entries(v).forEach(function (_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                            itemkey = _ref4[0],
                            item = _ref4[1];

                        if (itemkey === 'image') {
                          console.log('asdasd');

                          if (_this.imgSrcOrinbosar[valkey]) {
                            console.log(_this.$refs['orinbosarCropper' + valkey]);
                            if (_this.$refs['orinbosarCropper' + valkey][0].getCroppedCanvas() !== null) _this.$refs['orinbosarCropper' + valkey][0].getCroppedCanvas().toBlob(function (blob1) {
                              form.append("rahbariyat[orinbosar][".concat(valkey, "][").concat(itemkey, "]"), blob1);
                            });
                          } else form.append("rahbariyat[orinbosar][".concat(valkey, "][").concat(itemkey, "]"), item);
                        } else form.append("rahbariyat[orinbosar][".concat(valkey, "][").concat(itemkey, "]"), "".concat(item));
                      }); ///form.append(`rahbariyat[orinbosar][${valkey}][translates]`, JSON.stringify(_this.rahbariyat_orinbosar_translates[valkey]))
                    });

                    if (_this5.posts) {
                      Object.entries(_this5.posts).forEach(function (_ref5) {
                        var _ref6 = _slicedToArray(_ref5, 2),
                            valkey = _ref6[0],
                            v = _ref6[1];

                        _this5.posts[valkey]['translates'] = JSON.stringify(_this.post_translates[valkey]);
                        Object.entries(v).forEach(function (_ref7) {
                          var _ref8 = _slicedToArray(_ref7, 2),
                              itemkey = _ref8[0],
                              item = _ref8[1];

                          form.append("posts[".concat(valkey, "][").concat(itemkey, "]"), "".concat(item));
                        }); //form.append(`posts[${valkey}][translates]`, JSON.stringify(_this.post_translates[valkey]))
                      });
                    }

                    setTimeout(function () {
                      _src_services_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].updateOrg(_this.organization.id, form).then(function (response) {
                        _this.$toast.success("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u043E\u043C\u0430\u0434\u043B\u0438 \u0442\u0430\u0440\u0437\u0434\u0430 \u044E\u043A\u043B\u0430\u043D\u0434\u0438!");
                      })["catch"](function (error) {
                        _this.$toast.error(_this.$t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));
                      });
                    }, 200);
                  } else {
                    // this.editedItem.sort_number=parseInt(this.editedItem.sort_number);
                    Object.entries(_this5.rahbariyat.orinbosar).forEach(function (_ref9) {
                      var _ref10 = _slicedToArray(_ref9, 2),
                          valkey = _ref10[0],
                          v = _ref10[1];

                      _this.rahbariyat.orinbosar[valkey]['translates'] = JSON.stringify(_this.rahbariyat_orinbosar_translates[valkey]);
                      Object.entries(v).forEach(function (_ref11) {
                        var _ref12 = _slicedToArray(_ref11, 2),
                            itemkey = _ref12[0],
                            item = _ref12[1];

                        if (itemkey === 'image') {
                          /*  if (_this.imgSrcOrinbosar[valkey]) {
                                console.log(_this.$refs['orinbosarCropper' + valkey]);
                                if (_this.$refs['orinbosarCropper' + valkey][0].getCroppedCanvas())
                                    _this.$refs['orinbosarCropper' + valkey][0].getCroppedCanvas().toBlob((blob1) => {
                                        form.append(`rahbariyat[orinbosar][${valkey}][${itemkey}]`, blob1);
                                    })
                            } else*/
                          form.append("rahbariyat[orinbosar][".concat(valkey, "][").concat(itemkey, "]"), item);
                        } else form.append("rahbariyat[orinbosar][".concat(valkey, "][").concat(itemkey, "]"), "".concat(item));
                      }); //form.append(`rahbariyat[orinbosar][${valkey}][translates]`, JSON.stringify(_this.rahbariyat_orinbosar_translates[valkey]))
                    });
                    if (_this5.posts) Object.entries(_this5.posts).forEach(function (_ref13) {
                      var _ref14 = _slicedToArray(_ref13, 2),
                          valkey = _ref14[0],
                          v = _ref14[1];

                      _this5.posts[valkey]['translates'] = JSON.stringify(_this.post_translates[valkey]);
                      Object.entries(v).forEach(function (_ref15) {
                        var _ref16 = _slicedToArray(_ref15, 2),
                            itemkey = _ref16[0],
                            item = _ref16[1];

                        form.append("posts[".concat(valkey, "][").concat(itemkey, "]"), "".concat(item));
                      });
                    });
                    setTimeout(function () {
                      _src_services_adminApi__WEBPACK_IMPORTED_MODULE_1__["default"].updateOrg(_this.organization.id, form).then(function (response) {
                        _this.$toast.success("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u043E\u043C\u0430\u0434\u043B\u0438 \u0442\u0430\u0440\u0437\u0434\u0430 \u044E\u043A\u043B\u0430\u043D\u0434\u0438!");
                      })["catch"](function (error) {
                        _this.$toast.error(_this.$t("\u041C\u0430\u044A\u043B\u0443\u043C\u043E\u0442\u043B\u0430\u0440\u043D\u0438 \u044E\u043A\u043B\u0430\u0448\u0434\u0430 \u0445\u0430\u0442\u043E\u043B\u0438\u043A \u0441\u043E\u0434\u0438\u0440 \u0431\u045E\u043B\u0434\u0438!"));
                      });
                    }, 200);
                  }
                  /*                Object.entries(_this.rahbariyat.orinbosar).forEach(([valkey, v]) => {
                                      console.log(valkey)
                                      })*/

                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteOrganization: function deleteOrganization(key) {
      //console.log(key)
      if (key >= 0) {
        this.posts.splice(key, 1);
      }
    },
    removeOrinbosar: function removeOrinbosar(orinbosar) {
      if (this.rahbariyat.orinbosar.indexOf(orinbosar) !== -1) {
        this.cropImgOrinbosar.splice(this.rahbariyat.orinbosar.indexOf(orinbosar), 1);
        this.rahbariyat.orinbosar.splice(this.rahbariyat.orinbosar.indexOf(orinbosar), 1);
      }
    },
    addPost: function addPost() {
      if (this.posts === null) this.posts = [];
      this.posts.push({
        title: null,
        manzili: null,
        telefon: null,
        description: null
      });
    },
    AddOrinbosar: function AddOrinbosar() {
      if (!this.rahbariyat.orinbosar) this.rahbariyat.orinbosar = this.orinbosarlar = [];
      /*      this.orinbosarlar.push({
              name: "",
              image: null,
              lavozimi: "Бошқарма бошлиғи ўринбосари",
              qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
              telefon: "(78) - 120-76-00"
            });*/

      var defaultOrinbosar = {
        name: "",
        image: null,
        lavozimi: "Бошқарма бошлиғи ўринбосари",
        qabul: "Фуқароларни қабул қилиш ҳар куни 09-00 дан 17-00 гача",
        telefon: "(78) - 120-76-00",
        translates: [{
          oz: {
            lavozimi: null,
            qabul: null,
            name: null
          },
          ru: {
            lavozimi: null,
            name: null,
            qabul: null
          },
          en: {
            lavozimi: null,
            name: null,
            qabul: null
          }
        }]
      };
      this.rahbariyat_orinbosar_translates.push({
        oz: {
          lavozimi: null,
          qabul: null,
          name: null
        },
        ru: {
          lavozimi: null,
          name: null,
          qabul: null
        },
        en: {
          lavozimi: null,
          name: null,
          qabul: null
        }
      });
      this.rahbariyat.orinbosar.push(defaultOrinbosar); //  this.images.push(null)
    }
  },
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__.ValidationObserver,
    MyField: _components_form_myfield__WEBPACK_IMPORTED_MODULE_6__["default"],
    VueCropper: vue_cropperjs__WEBPACK_IMPORTED_MODULE_7__["default"],
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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

/***/ "./node_modules/cropperjs/dist/cropper.js":
/*!************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.js ***!
  \************************************************/
/***/ (function(module) {

/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
  // Inspired by the default width and height of a canvas element.

  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;

        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }

      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var ratioX = container.offsetWidth / containerData.width;
      var ratioY = container.offsetHeight / containerData.height;
      var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY; // Resize when width changed or height changed

      if (ratio !== 1) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "https://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        } // The third parameter is required for avoiding side-effect (#682)


        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

})));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/cropperjs/dist/cropper.css":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/cropperjs/dist/cropper.css ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Cropper.js v1.5.12\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2021-06-12T08:00:11.623Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.cropper-container img {\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: calc(100% / 3);\n  left: 0;\n  top: calc(100% / 3);\n  width: 100%;\n}\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: calc(100% / 3);\n  top: 0;\n  width: calc(100% / 3);\n}\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n.cropper-center::after {\n  background-color: #eee;\n  content: ' ';\n  display: block;\n  position: absolute;\n}\n\n.cropper-center::before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n\n.cropper-center::after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px;\n  }\n}\n\n.cropper-point.point-se::before {\n  background-color: #39f;\n  bottom: -50%;\n  content: ' ';\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.menu-main .v-data-table button.new_item {\r\n  margin-top: -77px;\n}\n.cropped-image .profile-icon-wrapper.boshliq {\r\n  width: 110px;\r\n  height: 110px;\n}\n.cropped-image .profile-icon-wrapper.boshliq .profile-icon {\r\n  width: 232px;\r\n  height: 255px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.css":
/*!*************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_cropper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./cropper.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/cropperjs/dist/cropper.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_cropper_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_cropper_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-cropperjs/dist/VueCropper.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue-cropperjs/dist/VueCropper.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _cropperjs = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");

var _cropperjs2 = _interopRequireDefault(_cropperjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var previewPropType = typeof window === 'undefined' ? [String, Array] : [String, Array, Element, NodeList];

exports["default"] = {
  render: function render(h) {
    var crossorigin = this.crossorigin || undefined;

    return h('div', { style: this.containerStyle }, [h('img', {
      ref: 'img',
      attrs: {
        src: this.src,
        alt: this.alt || 'image',
        style: 'max-width: 100%',
        crossorigin: crossorigin
      },
      on: this.$listeners,
      style: this.imgStyle
    })]);
  },

  props: {
    containerStyle: Object,
    src: {
      type: String,
      default: ''
    },
    alt: String,
    imgStyle: Object,

    viewMode: Number,
    dragMode: String,
    initialAspectRatio: Number,
    aspectRatio: Number,
    data: Object,
    preview: previewPropType,
    responsive: {
      type: Boolean,
      default: true
    },
    restore: {
      type: Boolean,
      default: true
    },
    checkCrossOrigin: {
      type: Boolean,
      default: true
    },
    checkOrientation: {
      type: Boolean,
      default: true
    },
    crossorigin: {
      type: String
    },
    modal: {
      type: Boolean,
      default: true
    },
    guides: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: true
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: Number,
    movable: {
      type: Boolean,
      default: true
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    scalable: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    zoomOnTouch: {
      type: Boolean,
      default: true
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    wheelZoomRatio: Number,
    cropBoxMovable: {
      type: Boolean,
      default: true
    },
    cropBoxResizable: {
      type: Boolean,
      default: true
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: true
    },

    minCanvasWidth: Number,
    minCanvasHeight: Number,
    minCropBoxWidth: Number,
    minCropBoxHeight: Number,
    minContainerWidth: Number,
    minContainerHeight: Number,

    ready: Function,
    cropstart: Function,
    cropmove: Function,
    cropend: Function,
    crop: Function,
    zoom: Function
  },
  mounted: function mounted() {
    var _$options$props = this.$options.props,
        containerStyle = _$options$props.containerStyle,
        src = _$options$props.src,
        alt = _$options$props.alt,
        imgStyle = _$options$props.imgStyle,
        data = _objectWithoutProperties(_$options$props, ['containerStyle', 'src', 'alt', 'imgStyle']);

    var props = {};

    for (var key in data) {
      if (this[key] !== undefined) {
        props[key] = this[key];
      }
    }

    this.cropper = new _cropperjs2.default(this.$refs.img, props);
  },

  methods: {
    reset: function reset() {
      return this.cropper.reset();
    },
    clear: function clear() {
      return this.cropper.clear();
    },
    initCrop: function initCrop() {
      return this.cropper.crop();
    },
    replace: function replace(url) {
      var onlyColorChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return this.cropper.replace(url, onlyColorChanged);
    },
    enable: function enable() {
      return this.cropper.enable();
    },
    disable: function disable() {
      return this.cropper.disable();
    },
    destroy: function destroy() {
      return this.cropper.destroy();
    },
    move: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    },
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

      return this.cropper.moveTo(x, y);
    },
    relativeZoom: function relativeZoom(ratio, _originalEvent) {
      return this.cropper.zoom(ratio, _originalEvent);
    },
    zoomTo: function zoomTo(ratio, _originalEvent) {
      return this.cropper.zoomTo(ratio, _originalEvent);
    },
    rotate: function rotate(degree) {
      return this.cropper.rotate(degree);
    },
    rotateTo: function rotateTo(degree) {
      return this.cropper.rotateTo(degree);
    },
    scaleX: function scaleX(_scaleX) {
      return this.cropper.scaleX(_scaleX);
    },
    scaleY: function scaleY(_scaleY) {
      return this.cropper.scaleY(_scaleY);
    },
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;

      return this.cropper.scale(scaleX, scaleY);
    },
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      return this.cropper.getData(rounded);
    },
    setData: function setData(data) {
      return this.cropper.setData(data);
    },
    getContainerData: function getContainerData() {
      return this.cropper.getContainerData();
    },
    getImageData: function getImageData() {
      return this.cropper.getImageData();
    },
    getCanvasData: function getCanvasData() {
      return this.cropper.getCanvasData();
    },
    setCanvasData: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
    },
    getCropBoxData: function getCropBoxData() {
      return this.cropper.getCropBoxData();
    },
    setCropBoxData: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
    },
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.cropper.getCroppedCanvas(options);
    },
    setAspectRatio: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
    },
    setDragMode: function setDragMode(mode) {
      return this.cropper.setDragMode(mode);
    }
  }
};

/***/ }),

/***/ "./resources/js/views/dashboard/orgs/edit.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/dashboard/orgs/edit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_320fe7a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=320fe7a0& */ "./resources/js/views/dashboard/orgs/edit.vue?vue&type=template&id=320fe7a0&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/orgs/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/dashboard/orgs/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_320fe7a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_320fe7a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/orgs/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/orgs/edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/dashboard/orgs/edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/orgs/edit.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard/orgs/edit.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/dashboard/orgs/edit.vue?vue&type=template&id=320fe7a0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/orgs/edit.vue?vue&type=template&id=320fe7a0& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_320fe7a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_320fe7a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_320fe7a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=320fe7a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=template&id=320fe7a0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=template&id=320fe7a0&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/orgs/edit.vue?vue&type=template&id=320fe7a0& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "menu-main", attrs: { fluid: "", tag: "section" } },
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
          _vm.organization
            ? _c(
                "v-col",
                { attrs: { cols: "12", md: "12" } },
                [
                  _c(
                    "v-container",
                    [
                      _c("v-row", [
                        _c("h3", [
                          _vm._v(
                            _vm._s(
                              typeof _vm.organization.title["text"] !==
                                "undefined"
                                ? _vm.organization.title["text"]
                                : _vm.organization.title
                            )
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "d-block mt-3", attrs: { cols: "12" } },
                        _vm._l(_vm.languages, function (language) {
                          return _c(
                            "v-btn",
                            {
                              key: language.value,
                              attrs: {
                                color:
                                  _vm.lang === language.value ? "primary" : "",
                              },
                              on: {
                                click: function ($event) {
                                  _vm.lang = language.value
                                },
                              },
                            },
                            [_vm._v(_vm._s(language.text) + "\n          ")]
                          )
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm12: "", md12: "", lg12: "" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c("ValidationObserver", {
                            ref: "organizationForm",
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var invalid = ref.invalid
                                    return [
                                      _c(
                                        "v-form",
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
                                                                _vm.lang ===
                                                                "uz",
                                                              expression:
                                                                "lang==='uz'",
                                                            },
                                                          ],
                                                          attrs: {
                                                            cols: "6",
                                                            sm: "6",
                                                            md: "6",
                                                          },
                                                        },
                                                        [
                                                          _c("my-field", {
                                                            attrs: {
                                                              title:
                                                                "Бошқарма номи",
                                                              edit: "true",
                                                              name: "org_title",
                                                              rules:
                                                                "required|min:3",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.organization
                                                                  .title,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.organization,
                                                                    "title",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "organization.title",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.langtext,
                                                        function (
                                                          langItem,
                                                          langKey
                                                        ) {
                                                          return _c(
                                                            "v-col",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.lang ===
                                                                    langKey,
                                                                  expression:
                                                                    "lang===langKey",
                                                                },
                                                              ],
                                                              key:
                                                                "orgr" +
                                                                langKey,
                                                              attrs: {
                                                                cols: "6",
                                                                sm: "6",
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title:
                                                                    "Бошқарма номи " +
                                                                    _vm.getLang()[
                                                                      "text"
                                                                    ],
                                                                  edit: "true",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm
                                                                      .langtext[
                                                                      langKey
                                                                    ].title,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm
                                                                          .langtext[
                                                                          langKey
                                                                        ],
                                                                        "title",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "langtext[langKey].title",
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          )
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      _c("v-col", {
                                                        attrs: { cols: "12" },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "h4",
                                                        {
                                                          staticStyle: {
                                                            color: "#39ae69",
                                                            "font-weight":
                                                              "bold",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Бошқарма бошлиғи "
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("br"),
                                                      _vm._v(" "),
                                                      _c("v-col", {
                                                        attrs: { cols: "12" },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value:
                                                                _vm.lang ===
                                                                "uz",
                                                              expression:
                                                                "lang==='uz'",
                                                            },
                                                          ],
                                                          attrs: { cols: "3" },
                                                        },
                                                        [
                                                          _c("my-field", {
                                                            attrs: {
                                                              title:
                                                                "Бошқарма бошлиғи исми фамилияси исми шарифи",
                                                              edit: "true",
                                                              name: "boshliq_name",
                                                              rules:
                                                                "required|min:3",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.rahbariyat
                                                                  .boshliq.name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm
                                                                      .rahbariyat
                                                                      .boshliq,
                                                                    "name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "rahbariyat.boshliq.name",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.langtext,
                                                        function (
                                                          langItem,
                                                          langKey
                                                        ) {
                                                          return _c(
                                                            "v-col",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.lang ===
                                                                    langKey,
                                                                  expression:
                                                                    "lang===langKey",
                                                                },
                                                              ],
                                                              key:
                                                                "name" +
                                                                langKey,
                                                              attrs: {
                                                                cols: "3",
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title:
                                                                    "Бошқарма бошлиғи исми фамилияси исми шарифи " +
                                                                    _vm.getLang()[
                                                                      "text"
                                                                    ],
                                                                  edit: "true",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm
                                                                      .rahbariyat_boshliq_translates[
                                                                      langKey
                                                                    ].name,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm
                                                                          .rahbariyat_boshliq_translates[
                                                                          langKey
                                                                        ],
                                                                        "name",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "rahbariyat_boshliq_translates[langKey].name",
                                                                },
                                                              }),
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
                                                                _vm.lang ===
                                                                "uz",
                                                              expression:
                                                                "lang==='uz'",
                                                            },
                                                          ],
                                                          attrs: { cols: "3" },
                                                        },
                                                        [
                                                          _c("my-field", {
                                                            attrs: {
                                                              title:
                                                                "Бошқарма бошлиғи қабул кунлари",
                                                              edit: "true",
                                                              name: "boshliq_qabul",
                                                              rules:
                                                                "required|min:3",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.rahbariyat
                                                                  .boshliq
                                                                  .qabul,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm
                                                                      .rahbariyat
                                                                      .boshliq,
                                                                    "qabul",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "rahbariyat.boshliq.qabul",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.langtext,
                                                        function (
                                                          langItem,
                                                          langKey
                                                        ) {
                                                          return _c(
                                                            "v-col",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.lang ===
                                                                    langKey,
                                                                  expression:
                                                                    "lang===langKey",
                                                                },
                                                              ],
                                                              key:
                                                                "qabul" +
                                                                langKey,
                                                              attrs: {
                                                                cols: "3",
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title:
                                                                    "Бошқарма бошлиғи қабул кунлари " +
                                                                    _vm.getLang()[
                                                                      "text"
                                                                    ],
                                                                  edit: "true",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm
                                                                      .rahbariyat_boshliq_translates[
                                                                      langKey
                                                                    ].qabul,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm
                                                                          .rahbariyat_boshliq_translates[
                                                                          langKey
                                                                        ],
                                                                        "qabul",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "rahbariyat_boshliq_translates[langKey].qabul",
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          )
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "3" },
                                                        },
                                                        [
                                                          _c("my-field", {
                                                            attrs: {
                                                              title:
                                                                "Бошқарма бошлиғи телефон рақамлари",
                                                              edit: "true",
                                                              name: "boshliq_telefon",
                                                              rules:
                                                                "required|min:3",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.rahbariyat
                                                                  .boshliq
                                                                  .telefon,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm
                                                                      .rahbariyat
                                                                      .boshliq,
                                                                    "telefon",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "rahbariyat.boshliq.telefon",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "2" },
                                                        },
                                                        [
                                                          _c("v-file-input", {
                                                            attrs: {
                                                              label:
                                                                "Бошқарма бошлиғи расми",
                                                              name: "boshliq_image",
                                                              accept: "image/*",
                                                            },
                                                            on: {
                                                              change: function (
                                                                $event
                                                              ) {
                                                                return _vm.setImage(
                                                                  "cropper",
                                                                  _vm.rahbariyat_boshliq_image
                                                                )
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.rahbariyat_boshliq_image,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.rahbariyat_boshliq_image =
                                                                    $$v
                                                                },
                                                              expression:
                                                                "rahbariyat_boshliq_image",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "section",
                                                        {
                                                          staticClass:
                                                            "preview-area",
                                                        },
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
                                                                      directives:
                                                                        [
                                                                          {
                                                                            name: "show",
                                                                            rawName:
                                                                              "v-show",
                                                                            value:
                                                                              _vm.rahbariyat_boshliq_image,
                                                                            expression:
                                                                              "rahbariyat_boshliq_image",
                                                                          },
                                                                        ],
                                                                      attrs: {
                                                                        cols: "3",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "vue-cropper",
                                                                        {
                                                                          directives:
                                                                            [
                                                                              {
                                                                                name: "show",
                                                                                rawName:
                                                                                  "v-show",
                                                                                value:
                                                                                  _vm.rahbariyat_boshliq_image,
                                                                                expression:
                                                                                  "rahbariyat_boshliq_image",
                                                                              },
                                                                            ],
                                                                          ref: "cropper",
                                                                          staticStyle:
                                                                            {
                                                                              "max-width":
                                                                                "1000px",
                                                                            },
                                                                          attrs:
                                                                            {
                                                                              "aspect-ratio":
                                                                                10 /
                                                                                11,
                                                                              scalable: true,
                                                                              cropBoxResizable: false,
                                                                              src:
                                                                                "/storage/uploads/boshqarmalar/boshliq/" +
                                                                                _vm
                                                                                  .rahbariyat
                                                                                  .boshliq
                                                                                  .image,
                                                                              autoCrop: true,
                                                                            },
                                                                        }
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _vm.rahbariyat_boshliq_image
                                                                    ? _c(
                                                                        "v-col",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              cols: "2",
                                                                            },
                                                                        },
                                                                        [
                                                                          _vm.rahbariyat_boshliq_image
                                                                            ? _c(
                                                                                "v-btn",
                                                                                {
                                                                                  on: {
                                                                                    click:
                                                                                      function (
                                                                                        $event
                                                                                      ) {
                                                                                        $event.preventDefault()
                                                                                        return _vm.cropImage.apply(
                                                                                          null,
                                                                                          arguments
                                                                                        )
                                                                                      },
                                                                                  },
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "Кесиш\n                            "
                                                                                  ),
                                                                                ]
                                                                              )
                                                                            : _vm._e(),
                                                                        ],
                                                                        1
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-col",
                                                                    {
                                                                      attrs: {
                                                                        cols: "3",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "cropped-image",
                                                                        },
                                                                        [
                                                                          _vm.cropImg
                                                                            ? _c(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "profile-icon-wrapper boshliq",
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "div",
                                                                                    {
                                                                                      staticClass:
                                                                                        "profile-icon",
                                                                                      style:
                                                                                        "background-image: url(" +
                                                                                        _vm.cropImg +
                                                                                        ")",
                                                                                    }
                                                                                  ),
                                                                                ]
                                                                              )
                                                                            : _vm._e(),
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
                                                                _vm.lang ===
                                                                "uz",
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
                                                          _c(
                                                            "ValidationProvider",
                                                            {
                                                              attrs: {
                                                                name: "Бошқарма функция ва вазифалари",
                                                                rules:
                                                                  "required|min:3",
                                                              },
                                                              scopedSlots:
                                                                _vm._u(
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
                                                                            "label",
                                                                            [
                                                                              _vm._v(
                                                                                "Бошқарма функция ва вазифалари"
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "editor",
                                                                            {
                                                                              ref: "tinymce_editor",
                                                                              attrs:
                                                                                {
                                                                                  "api-key":
                                                                                    new Date().getDate() >
                                                                                    10
                                                                                      ? "mlze1ly1jutluw9qwbh2nyc62312lc07ubbl5nlgam845zro"
                                                                                      : "08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7",
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
                                                                                  },
                                                                                },
                                                                              model:
                                                                                {
                                                                                  value:
                                                                                    _vm
                                                                                      .rahbariyat
                                                                                      .boshliq
                                                                                      .biografiyasi,
                                                                                  callback:
                                                                                    function (
                                                                                      $$v
                                                                                    ) {
                                                                                      _vm.$set(
                                                                                        _vm
                                                                                          .rahbariyat
                                                                                          .boshliq,
                                                                                        "biografiyasi",
                                                                                        $$v
                                                                                      )
                                                                                    },
                                                                                  expression:
                                                                                    "rahbariyat.boshliq.biografiyasi",
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
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.langtext,
                                                        function (
                                                          langItem,
                                                          langKey
                                                        ) {
                                                          return _c(
                                                            "v-col",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.lang ===
                                                                    langKey,
                                                                  expression:
                                                                    "lang===langKey",
                                                                },
                                                              ],
                                                              key: langKey,
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
                                                                    name: "Бошқарма функция ва вазифалари",
                                                                  },
                                                                  scopedSlots:
                                                                    _vm._u(
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
                                                                                "label",
                                                                                [
                                                                                  _vm._v(
                                                                                    "Бошқарма функция ва вазифалари - " +
                                                                                      _vm._s(
                                                                                        _vm.getLang(
                                                                                          langKey
                                                                                        )[
                                                                                          "text"
                                                                                        ]
                                                                                      )
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "editor",
                                                                                {
                                                                                  ref: "tinymce_editor",
                                                                                  refInFor: true,
                                                                                  attrs:
                                                                                    {
                                                                                      "api-key":
                                                                                        new Date().getDate() >
                                                                                        10
                                                                                          ? "mlze1ly1jutluw9qwbh2nyc62312lc07ubbl5nlgam845zro"
                                                                                          : "08ldvnqyts0iiyqna15dlike72o7nw96ue2f7j0og0ydd4f7",
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
                                                                                      },
                                                                                    },
                                                                                  model:
                                                                                    {
                                                                                      value:
                                                                                        _vm
                                                                                          .rahbariyat_boshliq_translates[
                                                                                          langKey
                                                                                        ]
                                                                                          .biografiyasi,
                                                                                      callback:
                                                                                        function (
                                                                                          $$v
                                                                                        ) {
                                                                                          _vm.$set(
                                                                                            _vm
                                                                                              .rahbariyat_boshliq_translates[
                                                                                              langKey
                                                                                            ],
                                                                                            "biografiyasi",
                                                                                            $$v
                                                                                          )
                                                                                        },
                                                                                      expression:
                                                                                        "rahbariyat_boshliq_translates[langKey].biografiyasi",
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
                                                          attrs: { cols: "12" },
                                                        },
                                                        [_c("hr")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "h4",
                                                        {
                                                          staticStyle: {
                                                            color: "#39ae69",
                                                            "font-weight":
                                                              "bold",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Ўринбосарлар "
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("br"),
                                                      _vm._v(" "),
                                                      _c("v-col", {
                                                        attrs: { cols: "12" },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "12" },
                                                        },
                                                        [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "float-start mb-5",
                                                              attrs: {
                                                                color:
                                                                  "primary",
                                                              },
                                                              on: {
                                                                click:
                                                                  _vm.AddOrinbosar,
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                        Қўшиш\n                      "
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.orinbosarlar,
                                                        function (
                                                          orinbosarItem,
                                                          k
                                                        ) {
                                                          return _c(
                                                            "v-row",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.lang ===
                                                                    "uz",
                                                                  expression:
                                                                    "lang==='uz'",
                                                                },
                                                              ],
                                                              key: k,
                                                            },
                                                            [
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    cols: "2",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "my-field",
                                                                    {
                                                                      attrs: {
                                                                        title:
                                                                          "Исми фамилияси исми шарифи",
                                                                        edit: "true",
                                                                        name: "orinbosar_name[]",
                                                                        rules:
                                                                          "required|min:3",
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .rahbariyat
                                                                            .orinbosar[
                                                                            k
                                                                          ]
                                                                            .name,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .rahbariyat
                                                                                .orinbosar[
                                                                                k
                                                                              ],
                                                                              "name",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "rahbariyat.orinbosar[k].name",
                                                                      },
                                                                    }
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _vm._l(
                                                                _vm.langtext,
                                                                function (
                                                                  langItem,
                                                                  langKey
                                                                ) {
                                                                  return _c(
                                                                    "v-col",
                                                                    {
                                                                      directives:
                                                                        [
                                                                          {
                                                                            name: "show",
                                                                            rawName:
                                                                              "v-show",
                                                                            value:
                                                                              _vm.lang ===
                                                                              langKey,
                                                                            expression:
                                                                              "lang===langKey",
                                                                          },
                                                                        ],
                                                                      key:
                                                                        "orinbosarname" +
                                                                        langKey,
                                                                      attrs: {
                                                                        cols: "2",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "my-field",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              title:
                                                                                "Исми фамилияси исми шарифи " +
                                                                                _vm.getLang()[
                                                                                  "text"
                                                                                ],
                                                                            },
                                                                          model:
                                                                            {
                                                                              value:
                                                                                _vm
                                                                                  .rahbariyat_orinbosar_translates[
                                                                                  k
                                                                                ][
                                                                                  langKey
                                                                                ]
                                                                                  .name,
                                                                              callback:
                                                                                function (
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .rahbariyat_orinbosar_translates[
                                                                                      k
                                                                                    ][
                                                                                      langKey
                                                                                    ],
                                                                                    "name",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                              expression:
                                                                                "rahbariyat_orinbosar_translates[k][langKey].name",
                                                                            },
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
                                                                      rawName:
                                                                        "v-show",
                                                                      value:
                                                                        _vm.lang ===
                                                                        "uz",
                                                                      expression:
                                                                        "lang==='uz'",
                                                                    },
                                                                  ],
                                                                  attrs: {
                                                                    cols: "2",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "my-field",
                                                                    {
                                                                      attrs: {
                                                                        title:
                                                                          "Лавозими",
                                                                        edit: "true",
                                                                        name: "orinbosar_lavozimi[]",
                                                                        rules:
                                                                          "required|min:3",
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .rahbariyat
                                                                            .orinbosar[
                                                                            k
                                                                          ]
                                                                            .lavozimi,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .rahbariyat
                                                                                .orinbosar[
                                                                                k
                                                                              ],
                                                                              "lavozimi",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "rahbariyat.orinbosar[k].lavozimi",
                                                                      },
                                                                    }
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _vm._l(
                                                                _vm.langtext,
                                                                function (
                                                                  langItem,
                                                                  langKey
                                                                ) {
                                                                  return _c(
                                                                    "v-col",
                                                                    {
                                                                      directives:
                                                                        [
                                                                          {
                                                                            name: "show",
                                                                            rawName:
                                                                              "v-show",
                                                                            value:
                                                                              _vm.lang ===
                                                                              langKey,
                                                                            expression:
                                                                              "lang===langKey",
                                                                          },
                                                                        ],
                                                                      key:
                                                                        "lavozimi" +
                                                                        langKey,
                                                                      attrs: {
                                                                        cols: "2",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "my-field",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              title:
                                                                                "Лавозими " +
                                                                                _vm.getLang()[
                                                                                  "text"
                                                                                ],
                                                                            },
                                                                          model:
                                                                            {
                                                                              value:
                                                                                _vm
                                                                                  .rahbariyat_orinbosar_translates[
                                                                                  k
                                                                                ][
                                                                                  langKey
                                                                                ]
                                                                                  .lavozimi,
                                                                              callback:
                                                                                function (
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .rahbariyat_orinbosar_translates[
                                                                                      k
                                                                                    ][
                                                                                      langKey
                                                                                    ],
                                                                                    "lavozimi",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                              expression:
                                                                                "rahbariyat_orinbosar_translates[k][langKey].lavozimi",
                                                                            },
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
                                                                      rawName:
                                                                        "v-show",
                                                                      value:
                                                                        _vm.lang ===
                                                                        "uz",
                                                                      expression:
                                                                        "lang==='uz'",
                                                                    },
                                                                  ],
                                                                  attrs: {
                                                                    cols: "2",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "my-field",
                                                                    {
                                                                      attrs: {
                                                                        title:
                                                                          "Қабул кунлари",
                                                                        edit: "true",
                                                                        name: "orinbosar_qabul[]",
                                                                        rules:
                                                                          "required|min:3",
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .rahbariyat
                                                                            .orinbosar[
                                                                            k
                                                                          ]
                                                                            .qabul,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .rahbariyat
                                                                                .orinbosar[
                                                                                k
                                                                              ],
                                                                              "qabul",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "rahbariyat.orinbosar[k].qabul",
                                                                      },
                                                                    }
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _vm._l(
                                                                _vm.langtext,
                                                                function (
                                                                  langItem,
                                                                  langKey
                                                                ) {
                                                                  return _c(
                                                                    "v-col",
                                                                    {
                                                                      directives:
                                                                        [
                                                                          {
                                                                            name: "show",
                                                                            rawName:
                                                                              "v-show",
                                                                            value:
                                                                              _vm.lang ===
                                                                              langKey,
                                                                            expression:
                                                                              "lang===langKey",
                                                                          },
                                                                        ],
                                                                      key:
                                                                        "title" +
                                                                        langKey,
                                                                      attrs: {
                                                                        cols: "2",
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "my-field",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              title:
                                                                                "Қабул кунлари " +
                                                                                _vm.getLang()[
                                                                                  "text"
                                                                                ],
                                                                            },
                                                                          model:
                                                                            {
                                                                              value:
                                                                                _vm
                                                                                  .rahbariyat_orinbosar_translates[
                                                                                  k
                                                                                ][
                                                                                  langKey
                                                                                ]
                                                                                  .qabul,
                                                                              callback:
                                                                                function (
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .rahbariyat_orinbosar_translates[
                                                                                      k
                                                                                    ][
                                                                                      langKey
                                                                                    ],
                                                                                    "qabul",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                              expression:
                                                                                "rahbariyat_orinbosar_translates[k][langKey].qabul",
                                                                            },
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
                                                                    cols: "2",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "my-field",
                                                                    {
                                                                      attrs: {
                                                                        title:
                                                                          "Телефон рақамлари",
                                                                        edit: "true",
                                                                        name: "boshliq_telefon[]",
                                                                        rules:
                                                                          "required|min:3",
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .rahbariyat
                                                                            .orinbosar[
                                                                            k
                                                                          ]
                                                                            .telefon,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .rahbariyat
                                                                                .orinbosar[
                                                                                k
                                                                              ],
                                                                              "telefon",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "rahbariyat.orinbosar[k].telefon",
                                                                      },
                                                                    }
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    cols: "3",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-file-input",
                                                                    {
                                                                      attrs: {
                                                                        label:
                                                                          "Расми",
                                                                        name: "orinbosar_image[]",
                                                                        accept:
                                                                          "image/*",
                                                                      },
                                                                      on: {
                                                                        change:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            return _vm.setImage(
                                                                              k,
                                                                              _vm
                                                                                .images[
                                                                                k
                                                                              ]
                                                                            )
                                                                          },
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .images[
                                                                            k
                                                                          ],
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.images,
                                                                              k,
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "images[k]",
                                                                      },
                                                                    }
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    cols: "1",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        fab: "",
                                                                        "x-small":
                                                                          "",
                                                                        color:
                                                                          "primary",
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            return _vm.removeOrinbosar(
                                                                              _vm
                                                                                .rahbariyat
                                                                                .orinbosar[
                                                                                k
                                                                              ]
                                                                            )
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-close"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ],
                                                                    1
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "section",
                                                                {
                                                                  staticClass:
                                                                    "preview-area",
                                                                },
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
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "show",
                                                                                    rawName:
                                                                                      "v-show",
                                                                                    value:
                                                                                      _vm
                                                                                        .images[
                                                                                        k
                                                                                      ],
                                                                                    expression:
                                                                                      "images[k]",
                                                                                  },
                                                                                ],
                                                                              attrs:
                                                                                {
                                                                                  cols: "3",
                                                                                },
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "vue-cropper",
                                                                                {
                                                                                  directives:
                                                                                    [
                                                                                      {
                                                                                        name: "show",
                                                                                        rawName:
                                                                                          "v-show",
                                                                                        value:
                                                                                          _vm
                                                                                            .images[
                                                                                            k
                                                                                          ],
                                                                                        expression:
                                                                                          "images[k]",
                                                                                      },
                                                                                    ],
                                                                                  ref:
                                                                                    "orinbosarCropper" +
                                                                                    k,
                                                                                  refInFor: true,
                                                                                  staticStyle:
                                                                                    {
                                                                                      "max-width":
                                                                                        "1000px",
                                                                                    },
                                                                                  attrs:
                                                                                    {
                                                                                      "aspect-ratio":
                                                                                        10 /
                                                                                        11,
                                                                                      scalable: true,
                                                                                      cropBoxResizable: false,
                                                                                      src:
                                                                                        "/storage/uploads/boshqarmalar/orinbosar/" +
                                                                                        _vm
                                                                                          .rahbariyat
                                                                                          .orinbosar[
                                                                                          k
                                                                                        ]
                                                                                          .image,
                                                                                      autoCrop: true,
                                                                                    },
                                                                                }
                                                                              ),
                                                                            ],
                                                                            1
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-col",
                                                                            {
                                                                              directives:
                                                                                [
                                                                                  {
                                                                                    name: "show",
                                                                                    rawName:
                                                                                      "v-show",
                                                                                    value:
                                                                                      _vm
                                                                                        .images[
                                                                                        k
                                                                                      ],
                                                                                    expression:
                                                                                      "images[k]",
                                                                                  },
                                                                                ],
                                                                              attrs:
                                                                                {
                                                                                  cols: "2",
                                                                                },
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "v-btn",
                                                                                {
                                                                                  directives:
                                                                                    [
                                                                                      {
                                                                                        name: "show",
                                                                                        rawName:
                                                                                          "v-show",
                                                                                        value:
                                                                                          _vm
                                                                                            .images[
                                                                                            k
                                                                                          ],
                                                                                        expression:
                                                                                          "images[k]",
                                                                                      },
                                                                                    ],
                                                                                  on: {
                                                                                    click:
                                                                                      function (
                                                                                        $event
                                                                                      ) {
                                                                                        $event.preventDefault()
                                                                                        return _vm.cropImage(
                                                                                          k
                                                                                        )
                                                                                      },
                                                                                  },
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "Кесиш\n                              "
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ],
                                                                            1
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-col",
                                                                            {
                                                                              attrs:
                                                                                {
                                                                                  cols: "3",
                                                                                },
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "preview",
                                                                                }
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "cropped-image",
                                                                                },
                                                                                [
                                                                                  _vm
                                                                                    .cropImgOrinbosar[
                                                                                    k
                                                                                  ]
                                                                                    ? _c(
                                                                                        "div",
                                                                                        {
                                                                                          staticClass:
                                                                                            "profile-icon-wrapper orinbosar",
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "div",
                                                                                            {
                                                                                              staticClass:
                                                                                                "profile-icon",
                                                                                              style:
                                                                                                "background-image: url(" +
                                                                                                _vm
                                                                                                  .cropImgOrinbosar[
                                                                                                  k
                                                                                                ] +
                                                                                                ")",
                                                                                            }
                                                                                          ),
                                                                                        ]
                                                                                      )
                                                                                    : _vm._e(),
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
                                                              ),
                                                            ],
                                                            2
                                                          )
                                                        }
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "12" },
                                                        },
                                                        [_c("hr")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-row",
                                                        [
                                                          _c(
                                                            "h4",
                                                            {
                                                              staticStyle: {
                                                                color:
                                                                  "#39ae69",
                                                                "font-weight":
                                                                  "bold",
                                                              },
                                                            },
                                                            [_vm._v("Манзил ")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("br"),
                                                          _vm._v(" "),
                                                          _c("v-col", {
                                                            attrs: {
                                                              cols: "12",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-row",
                                                        [
                                                          _c(
                                                            "v-col",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.lang ===
                                                                    "uz",
                                                                  expression:
                                                                    "lang==='uz'",
                                                                },
                                                              ],
                                                              attrs: {
                                                                cols: "3",
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title:
                                                                    "Манзил",
                                                                  edit: "true",
                                                                  name: "boshqarma_manzil",
                                                                  rules:
                                                                    "required",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.manzil
                                                                      .manzil,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.manzil,
                                                                        "manzil",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "manzil.manzil",
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _vm._l(
                                                            _vm.langtext,
                                                            function (
                                                              langItem,
                                                              langKey
                                                            ) {
                                                              return _c(
                                                                "v-col",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name: "show",
                                                                      rawName:
                                                                        "v-show",
                                                                      value:
                                                                        _vm.lang ===
                                                                        langKey,
                                                                      expression:
                                                                        "lang===langKey",
                                                                    },
                                                                  ],
                                                                  key:
                                                                    "manzil" +
                                                                    langKey,
                                                                  attrs: {
                                                                    cols: "3",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "my-field",
                                                                    {
                                                                      attrs: {
                                                                        title:
                                                                          "Манзил " +
                                                                          _vm.getLang(
                                                                            langKey
                                                                          )
                                                                            .text,
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .manzil_translates[
                                                                            langKey
                                                                          ]
                                                                            .manzil,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .manzil_translates[
                                                                                langKey
                                                                              ],
                                                                              "manzil",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "manzil_translates[langKey].manzil",
                                                                      },
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
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title:
                                                                    "Автобуслар",
                                                                  edit: "true",
                                                                  name: "boshqarma_avtobus",
                                                                  rules:
                                                                    "required",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.manzil
                                                                      .avtobus,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.manzil,
                                                                        "avtobus",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "manzil.avtobus",
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-col",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.lang ===
                                                                    "uz",
                                                                  expression:
                                                                    "lang==='uz'",
                                                                },
                                                              ],
                                                              attrs: {
                                                                cols: "3",
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title:
                                                                    "Йўналишдаги такси",
                                                                  edit: "true",
                                                                  name: "boshqarma_ytaksi",
                                                                  rules:
                                                                    "required",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.manzil
                                                                      .ytaksi,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.manzil,
                                                                        "ytaksi",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "manzil.ytaksi",
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _vm._l(
                                                            _vm.langtext,
                                                            function (
                                                              langItem,
                                                              langKey
                                                            ) {
                                                              return _c(
                                                                "v-col",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name: "show",
                                                                      rawName:
                                                                        "v-show",
                                                                      value:
                                                                        _vm.lang ===
                                                                        langKey,
                                                                      expression:
                                                                        "lang===langKey",
                                                                    },
                                                                  ],
                                                                  key:
                                                                    "ytaksi" +
                                                                    langKey,
                                                                  attrs: {
                                                                    cols: "3",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "my-field",
                                                                    {
                                                                      attrs: {
                                                                        title:
                                                                          "Йўналишдаги такси " +
                                                                          _vm.getLang(
                                                                            langKey
                                                                          )
                                                                            .text,
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .manzil_translates[
                                                                            langKey
                                                                          ]
                                                                            .ytaksi,
                                                                        callback:
                                                                          function (
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm
                                                                                .manzil_translates[
                                                                                langKey
                                                                              ],
                                                                              "ytaksi",
                                                                              $$v
                                                                            )
                                                                          },
                                                                        expression:
                                                                          "manzil_translates[langKey].ytaksi",
                                                                      },
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
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title:
                                                                    "Телефон",
                                                                  edit: "true",
                                                                  name: "boshqarma_telefon",
                                                                  rules:
                                                                    "required",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.manzil
                                                                      .telefon,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.manzil,
                                                                        "telefon",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "manzil.telefon",
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
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title: "Факс",
                                                                  edit: "true",
                                                                  name: "boshqarma_faks",
                                                                  rules:
                                                                    "required",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.manzil
                                                                      .faks,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.manzil,
                                                                        "faks",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "manzil.faks",
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
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title:
                                                                    "Email",
                                                                  edit: "true",
                                                                  name: "boshqarma_email",
                                                                  rules:
                                                                    "required|email",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.manzil
                                                                      .email,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.manzil,
                                                                        "email",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "manzil.email",
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
                                                              },
                                                            },
                                                            [
                                                              _c("my-field", {
                                                                attrs: {
                                                                  title:
                                                                    "Яндекс карта html коди",
                                                                  edit: "true",
                                                                  name: "boshqarma_map",
                                                                  rules:
                                                                    "required",
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.manzil
                                                                      .map,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        _vm.manzil,
                                                                        "map",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "manzil.map",
                                                                },
                                                              }),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          !_vm.manzil.image
                                                            ? _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    cols: "3",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "ValidationProvider",
                                                                    {
                                                                      attrs: {
                                                                        rules:
                                                                          "required",
                                                                        name: "Бошқарма расми",
                                                                      },
                                                                      scopedSlots:
                                                                        _vm._u(
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
                                                                                    "v-file-input",
                                                                                    {
                                                                                      attrs:
                                                                                        {
                                                                                          label:
                                                                                            "Бошқарма расми",
                                                                                          name: "boshqarma_image",
                                                                                        },
                                                                                      model:
                                                                                        {
                                                                                          value:
                                                                                            _vm
                                                                                              .manzil
                                                                                              .image,
                                                                                          callback:
                                                                                            function (
                                                                                              $$v
                                                                                            ) {
                                                                                              _vm.$set(
                                                                                                _vm.manzil,
                                                                                                "image",
                                                                                                $$v
                                                                                              )
                                                                                            },
                                                                                          expression:
                                                                                            "manzil.image",
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
                                                                                        "red--text",
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
                                                            : _c(
                                                                "v-col",
                                                                {
                                                                  staticClass:
                                                                    "position-relative",
                                                                  attrs: {
                                                                    cols: "1",
                                                                  },
                                                                },
                                                                [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "position-absolute close-button",
                                                                      on: {
                                                                        click:
                                                                          function (
                                                                            $event
                                                                          ) {
                                                                            _vm.manzil.image =
                                                                              null
                                                                          },
                                                                      },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "+"
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("img", {
                                                                    attrs: {
                                                                      width:
                                                                        "100",
                                                                      src:
                                                                        "/storage/uploads/boshqarmalar/manzil/" +
                                                                        _vm
                                                                          .manzil
                                                                          .image,
                                                                    },
                                                                  }),
                                                                ]
                                                              ),
                                                        ],
                                                        2
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "12" },
                                                        },
                                                        [
                                                          _c("hr"),
                                                          _vm._v(" "),
                                                          _c(
                                                            "h4",
                                                            {
                                                              staticStyle: {
                                                                color:
                                                                  "#39ae69",
                                                                "font-weight":
                                                                  "bold",
                                                              },
                                                            },
                                                            [_vm._v("Постлар")]
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "float-end",
                                                              attrs: {
                                                                color:
                                                                  "primary",
                                                              },
                                                              on: {
                                                                click:
                                                                  _vm.addPost,
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                        Пост қўшиш\n                      "
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "v-expansion-panels",
                                                            {
                                                              attrs: {
                                                                multiple: "",
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.panel,
                                                                callback:
                                                                  function (
                                                                    $$v
                                                                  ) {
                                                                    _vm.panel =
                                                                      $$v
                                                                  },
                                                                expression:
                                                                  "panel",
                                                              },
                                                            },
                                                            _vm._l(
                                                              _vm.posts,
                                                              function (
                                                                section,
                                                                i
                                                              ) {
                                                                return _c(
                                                                  "v-expansion-panel",
                                                                  {
                                                                    key: i,
                                                                    staticClass:
                                                                      "my-2",
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-expansion-panel-header",
                                                                      [
                                                                        _c(
                                                                          "v-col",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                cols: "6",
                                                                                sm: "6",
                                                                                md: "6",
                                                                              },
                                                                          },
                                                                          [
                                                                            _vm
                                                                              .posts[
                                                                              i
                                                                            ]
                                                                              .title
                                                                              ? _c(
                                                                                  "p",
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        _vm
                                                                                          .posts[
                                                                                          i
                                                                                        ]
                                                                                          .title
                                                                                      )
                                                                                    ),
                                                                                  ]
                                                                                )
                                                                              : _c(
                                                                                  "p",
                                                                                  [
                                                                                    _vm._v(
                                                                                      " " +
                                                                                        _vm._s(
                                                                                          i +
                                                                                            1
                                                                                        ) +
                                                                                        " - пост"
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                          ]
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-expansion-panel-content",
                                                                      {
                                                                        attrs: {
                                                                          eager:
                                                                            "",
                                                                        },
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-row",
                                                                          [
                                                                            _vm
                                                                              .post_translates[
                                                                              i
                                                                            ]
                                                                              ? _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    directives:
                                                                                      [
                                                                                        {
                                                                                          name: "show",
                                                                                          rawName:
                                                                                            "v-show",
                                                                                          value:
                                                                                            _vm.lang ===
                                                                                            "uz",
                                                                                          expression:
                                                                                            "lang==='uz'",
                                                                                        },
                                                                                      ],
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "ValidationProvider",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            name: "Пост номи",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        scopedSlots:
                                                                                          _vm._u(
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
                                                                                                              "Пост номи",
                                                                                                            name: "title",
                                                                                                          },
                                                                                                        model:
                                                                                                          {
                                                                                                            value:
                                                                                                              _vm
                                                                                                                .posts[
                                                                                                                i
                                                                                                              ]
                                                                                                                .title,
                                                                                                            callback:
                                                                                                              function (
                                                                                                                $$v
                                                                                                              ) {
                                                                                                                _vm.$set(
                                                                                                                  _vm
                                                                                                                    .posts[
                                                                                                                    i
                                                                                                                  ],
                                                                                                                  "title",
                                                                                                                  $$v
                                                                                                                )
                                                                                                              },
                                                                                                            expression:
                                                                                                              "posts[i].title",
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
                                                                              : _vm._e(),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _vm._l(
                                                                              _vm.langtext,
                                                                              function (
                                                                                langItem,
                                                                                langKey
                                                                              ) {
                                                                                return _vm
                                                                                  .post_translates[
                                                                                  i
                                                                                ]
                                                                                  ? _c(
                                                                                      "v-col",
                                                                                      {
                                                                                        directives:
                                                                                          [
                                                                                            {
                                                                                              name: "show",
                                                                                              rawName:
                                                                                                "v-show",
                                                                                              value:
                                                                                                _vm.lang ===
                                                                                                langKey,
                                                                                              expression:
                                                                                                "lang===langKey",
                                                                                            },
                                                                                          ],
                                                                                        key:
                                                                                          "post_title" +
                                                                                          langKey,
                                                                                        attrs:
                                                                                          {
                                                                                            cols: "6",
                                                                                          },
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "v-text-field",
                                                                                          {
                                                                                            attrs:
                                                                                              {
                                                                                                label:
                                                                                                  "Пост номи " +
                                                                                                  _vm.getLang(
                                                                                                    langKey
                                                                                                  )
                                                                                                    .text,
                                                                                              },
                                                                                            model:
                                                                                              {
                                                                                                value:
                                                                                                  _vm
                                                                                                    .post_translates[
                                                                                                    i
                                                                                                  ][
                                                                                                    langKey
                                                                                                  ]
                                                                                                    .title,
                                                                                                callback:
                                                                                                  function (
                                                                                                    $$v
                                                                                                  ) {
                                                                                                    _vm.$set(
                                                                                                      _vm
                                                                                                        .post_translates[
                                                                                                        i
                                                                                                      ][
                                                                                                        langKey
                                                                                                      ],
                                                                                                      "title",
                                                                                                      $$v
                                                                                                    )
                                                                                                  },
                                                                                                expression:
                                                                                                  "post_translates[i][langKey].title",
                                                                                              },
                                                                                          }
                                                                                        ),
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  : _vm._e()
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _vm
                                                                              .post_translates[
                                                                              i
                                                                            ]
                                                                              ? _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    directives:
                                                                                      [
                                                                                        {
                                                                                          name: "show",
                                                                                          rawName:
                                                                                            "v-show",
                                                                                          value:
                                                                                            _vm.lang ===
                                                                                            "uz",
                                                                                          expression:
                                                                                            "lang==='uz'",
                                                                                        },
                                                                                      ],
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "ValidationProvider",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            name: "Пост манзили",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        scopedSlots:
                                                                                          _vm._u(
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
                                                                                                              "Пост манзили",
                                                                                                            name: "title",
                                                                                                          },
                                                                                                        model:
                                                                                                          {
                                                                                                            value:
                                                                                                              _vm
                                                                                                                .posts[
                                                                                                                i
                                                                                                              ]
                                                                                                                .manzili,
                                                                                                            callback:
                                                                                                              function (
                                                                                                                $$v
                                                                                                              ) {
                                                                                                                _vm.$set(
                                                                                                                  _vm
                                                                                                                    .posts[
                                                                                                                    i
                                                                                                                  ],
                                                                                                                  "manzili",
                                                                                                                  $$v
                                                                                                                )
                                                                                                              },
                                                                                                            expression:
                                                                                                              "posts[i].manzili",
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
                                                                              : _vm._e(),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _vm._l(
                                                                              _vm.langtext,
                                                                              function (
                                                                                langItem,
                                                                                langKey
                                                                              ) {
                                                                                return _vm
                                                                                  .post_translates[
                                                                                  i
                                                                                ]
                                                                                  ? _c(
                                                                                      "v-col",
                                                                                      {
                                                                                        directives:
                                                                                          [
                                                                                            {
                                                                                              name: "show",
                                                                                              rawName:
                                                                                                "v-show",
                                                                                              value:
                                                                                                _vm.lang ===
                                                                                                langKey,
                                                                                              expression:
                                                                                                "lang===langKey",
                                                                                            },
                                                                                          ],
                                                                                        key:
                                                                                          "post_mazili" +
                                                                                          langKey,
                                                                                        attrs:
                                                                                          {
                                                                                            cols: "6",
                                                                                          },
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "v-text-field",
                                                                                          {
                                                                                            attrs:
                                                                                              {
                                                                                                label:
                                                                                                  "Пост манзили " +
                                                                                                  _vm.getLang(
                                                                                                    langKey
                                                                                                  )
                                                                                                    .text,
                                                                                              },
                                                                                            model:
                                                                                              {
                                                                                                value:
                                                                                                  _vm
                                                                                                    .post_translates[
                                                                                                    i
                                                                                                  ][
                                                                                                    langKey
                                                                                                  ]
                                                                                                    .manzil,
                                                                                                callback:
                                                                                                  function (
                                                                                                    $$v
                                                                                                  ) {
                                                                                                    _vm.$set(
                                                                                                      _vm
                                                                                                        .post_translates[
                                                                                                        i
                                                                                                      ][
                                                                                                        langKey
                                                                                                      ],
                                                                                                      "manzil",
                                                                                                      $$v
                                                                                                    )
                                                                                                  },
                                                                                                expression:
                                                                                                  "post_translates[i][langKey].manzil",
                                                                                              },
                                                                                          }
                                                                                        ),
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  : _vm._e()
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _vm
                                                                              .post_translates[
                                                                              i
                                                                            ]
                                                                              ? _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "ValidationProvider",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            name: "Пост телефони",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        scopedSlots:
                                                                                          _vm._u(
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
                                                                                                              "Пост телефони",
                                                                                                            name: "title",
                                                                                                          },
                                                                                                        model:
                                                                                                          {
                                                                                                            value:
                                                                                                              _vm
                                                                                                                .posts[
                                                                                                                i
                                                                                                              ]
                                                                                                                .telefon,
                                                                                                            callback:
                                                                                                              function (
                                                                                                                $$v
                                                                                                              ) {
                                                                                                                _vm.$set(
                                                                                                                  _vm
                                                                                                                    .posts[
                                                                                                                    i
                                                                                                                  ],
                                                                                                                  "telefon",
                                                                                                                  $$v
                                                                                                                )
                                                                                                              },
                                                                                                            expression:
                                                                                                              "posts[i].telefon",
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
                                                                              : _vm._e(),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _vm
                                                                              .post_translates[
                                                                              i
                                                                            ]
                                                                              ? _c(
                                                                                  "v-col",
                                                                                  {
                                                                                    directives:
                                                                                      [
                                                                                        {
                                                                                          name: "show",
                                                                                          rawName:
                                                                                            "v-show",
                                                                                          value:
                                                                                            _vm.lang ===
                                                                                            "uz",
                                                                                          expression:
                                                                                            "lang==='uz'",
                                                                                        },
                                                                                      ],
                                                                                    attrs:
                                                                                      {
                                                                                        cols: "6",
                                                                                      },
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "ValidationProvider",
                                                                                      {
                                                                                        attrs:
                                                                                          {
                                                                                            name: "Пост ҳақида қисқача маълумот",
                                                                                            rules:
                                                                                              "required",
                                                                                          },
                                                                                        scopedSlots:
                                                                                          _vm._u(
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
                                                                                                      "label",
                                                                                                      [
                                                                                                        _vm._v(
                                                                                                          "Пост ҳақида қисқача маълумот"
                                                                                                        ),
                                                                                                      ]
                                                                                                    ),
                                                                                                    _vm._v(
                                                                                                      " "
                                                                                                    ),
                                                                                                    _c(
                                                                                                      "v-textarea",
                                                                                                      {
                                                                                                        attrs:
                                                                                                          {
                                                                                                            rows: "1",
                                                                                                          },
                                                                                                        model:
                                                                                                          {
                                                                                                            value:
                                                                                                              _vm
                                                                                                                .posts[
                                                                                                                i
                                                                                                              ]
                                                                                                                .description,
                                                                                                            callback:
                                                                                                              function (
                                                                                                                $$v
                                                                                                              ) {
                                                                                                                _vm.$set(
                                                                                                                  _vm
                                                                                                                    .posts[
                                                                                                                    i
                                                                                                                  ],
                                                                                                                  "description",
                                                                                                                  $$v
                                                                                                                )
                                                                                                              },
                                                                                                            expression:
                                                                                                              "posts[i].description",
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
                                                                              : _vm._e(),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _vm._l(
                                                                              _vm.langtext,
                                                                              function (
                                                                                langItem,
                                                                                langKey
                                                                              ) {
                                                                                return _vm
                                                                                  .post_translates[
                                                                                  i
                                                                                ]
                                                                                  ? _c(
                                                                                      "v-col",
                                                                                      {
                                                                                        directives:
                                                                                          [
                                                                                            {
                                                                                              name: "show",
                                                                                              rawName:
                                                                                                "v-show",
                                                                                              value:
                                                                                                _vm.lang ===
                                                                                                langKey,
                                                                                              expression:
                                                                                                "lang===langKey",
                                                                                            },
                                                                                          ],
                                                                                        key:
                                                                                          "post_description" +
                                                                                          langKey,
                                                                                        attrs:
                                                                                          {
                                                                                            cols: "6",
                                                                                          },
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "v-text-field",
                                                                                          {
                                                                                            attrs:
                                                                                              {
                                                                                                label:
                                                                                                  "Пост ҳақида қисқача маълумот " +
                                                                                                  _vm.getLang(
                                                                                                    langKey
                                                                                                  )
                                                                                                    .text,
                                                                                              },
                                                                                            model:
                                                                                              {
                                                                                                value:
                                                                                                  _vm
                                                                                                    .post_translates[
                                                                                                    i
                                                                                                  ][
                                                                                                    langKey
                                                                                                  ]
                                                                                                    .description,
                                                                                                callback:
                                                                                                  function (
                                                                                                    $$v
                                                                                                  ) {
                                                                                                    _vm.$set(
                                                                                                      _vm
                                                                                                        .post_translates[
                                                                                                        i
                                                                                                      ][
                                                                                                        langKey
                                                                                                      ],
                                                                                                      "description",
                                                                                                      $$v
                                                                                                    )
                                                                                                  },
                                                                                                expression:
                                                                                                  "post_translates[i][langKey].description",
                                                                                              },
                                                                                          }
                                                                                        ),
                                                                                      ],
                                                                                      1
                                                                                    )
                                                                                  : _vm._e()
                                                                              }
                                                                            ),
                                                                          ],
                                                                          2
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "v-btn",
                                                                          {
                                                                            staticClass:
                                                                              "float-end",
                                                                            attrs:
                                                                              {
                                                                                color:
                                                                                  "red",
                                                                              },
                                                                            on: {
                                                                              click:
                                                                                function (
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.deleteOrganization(
                                                                                    i
                                                                                  )
                                                                                },
                                                                            },
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Ўчириш\n                            "
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ],
                                                                  1
                                                                )
                                                              }
                                                            ),
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
                              ],
                              null,
                              false,
                              2029208628
                            ),
                          }),
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