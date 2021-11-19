"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_news_edit_vue"],{

/***/ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../src/services/apiService */ "./resources/js/src/services/apiService.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _locales_uz_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../locales/uz.json */ "./resources/js/locales/uz.json");
/* harmony import */ var _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinymce/tinymce-vue */ "./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js");


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




/*import Editor from '../../../components/form/tinyeditor';*/


Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__).forEach(function (rule) {
  (0,vee_validate__WEBPACK_IMPORTED_MODULE_5__.extend)(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_4__[rule]), {}, {
    // copies rule configuration
    message: _locales_uz_json__WEBPACK_IMPORTED_MODULE_2__.messages[rule] // assign message

  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NewsEdit",
  data: function data() {
    return {
      news: [],
      preview: '',
      categories: [],
      breadcrumb_items: [{
        text: 'Админ панел',
        to: '/admin',
        exact: true
      }, {
        text: 'Янгиликлар',
        to: '/admin/news',
        exact: true
      }, {
        text: 'Янгилик яратиш',
        to: '/admin/news/create',
        exact: true
      }]
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Янги' : 'Тахрирлаш';
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readOneNews(this.$route.params.id).then(function (response) {
        _this.news = response.data;
        _this.preview = "/storage/uploads/" + _this.news.image;
        _this.news.image = null; //"/storage/uploads/"+this.news.image;

        delete _this.news.image; //"/storage/uploads/"+this.news.image;
      })["catch"](function (error) {
        _this.$router.replace("/admin/news")["catch"](function () {});
      });
      _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].readCategoriesForSelect().then(function (response) {
        _this.categories = response.data;
      })["catch"](function (error) {
        _this.$store.dispatch('setSnackbar', {
          color: 'error'
        });

        console.log(error);
      });
    },
    previewImage: function previewImage(input) {
      var _this2 = this;

      if (input) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.preview = e.target.result;
        };

        this.news.image = input;
        reader.readAsDataURL(input);
      }
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
    close: function close() {
      this.$router.replace('/admin/news');
    },
    save: function save() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var isValid, data, key, category;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this3.$refs.newsForm.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  data = new FormData();

                  for (key in _this3.news) {
                    if (Array.isArray(_this3.news[key]) || key === 'cats') {
                      for (category in _this3.news[key]) {
                        data.append(key + '[]', _this3.news[key][category]);
                      }
                    } else data.append(key, _this3.news[key]);
                  }

                  data.append("_method", "put");
                  _src_services_apiService__WEBPACK_IMPORTED_MODULE_1__["default"].updateNews(_this3.news.id, data).then(function (response) {
                    _this3.$store.dispatch('setSnackbar', {
                      color: 'success',
                      text: 'Маълумотлар омадли тарзда юкланди!'
                    });
                  })["catch"](function (error) {
                    _this3.$store.dispatch('setSnackbar', {
                      color: 'error',
                      text: 'Маълумотларни юклашда хатолик юз берди!'
                    });

                    console.log(error);
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onUpdate: function onUpdate(_ref) {
      var getJSON = _ref.getJSON,
          getHTML = _ref.getHTML;
      this.json = getJSON();
      this.html = getHTML();
    }
  },
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_5__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_5__.ValidationObserver,
    Editor: _tinymce_tinymce_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.news-main .v-data-table button.new_item {\n    margin-top: -77px;\n}\n.news-main .v-card.v-sheet {\n    margin-top: 50px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/dashboard/news/edit.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/dashboard/news/edit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edit_vue_vue_type_template_id_2dd2a75c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=2dd2a75c& */ "./resources/js/views/dashboard/news/edit.vue?vue&type=template&id=2dd2a75c&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/news/edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/dashboard/news/edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_2dd2a75c___WEBPACK_IMPORTED_MODULE_0__.render,
  _edit_vue_vue_type_template_id_2dd2a75c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/news/edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/news/edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/dashboard/news/edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/news/edit.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard/news/edit.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/dashboard/news/edit.vue?vue&type=template&id=2dd2a75c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/news/edit.vue?vue&type=template&id=2dd2a75c& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_2dd2a75c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_2dd2a75c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_2dd2a75c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./edit.vue?vue&type=template&id=2dd2a75c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=template&id=2dd2a75c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=template&id=2dd2a75c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/news/edit.vue?vue&type=template&id=2dd2a75c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { staticClass: "news-main", attrs: { fluid: "", tag: "section" } },
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
                                  {
                                    ref: "newsForm",
                                    attrs: { enctype: "multipart/form-data" },
                                  },
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
                                                    attrs: {
                                                      cols: "6",
                                                      sm: "6",
                                                      md: "6",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "v-row",
                                                      [
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
                                                              "ValidationProvider",
                                                              {
                                                                attrs: {
                                                                  name: "Сарлавха",
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
                                                                              "v-text-field",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    label:
                                                                                      "Сарлавха",
                                                                                    name: "title",
                                                                                  },
                                                                                model:
                                                                                  {
                                                                                    value:
                                                                                      _vm
                                                                                        .news
                                                                                        .title,
                                                                                    callback:
                                                                                      function (
                                                                                        $$v
                                                                                      ) {
                                                                                        _vm.$set(
                                                                                          _vm.news,
                                                                                          "title",
                                                                                          $$v
                                                                                        )
                                                                                      },
                                                                                    expression:
                                                                                      "news.title",
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
                                                                  name: "Категория",
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
                                                                              "v-autocomplete",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    label:
                                                                                      "Категория",
                                                                                    items:
                                                                                      _vm.categories,
                                                                                    "auto-select-first":
                                                                                      "",
                                                                                    chips:
                                                                                      "",
                                                                                    "deletable-chips":
                                                                                      "",
                                                                                    multiple:
                                                                                      "",
                                                                                    "small-chips":
                                                                                      "",
                                                                                    "hide-selected":
                                                                                      "",
                                                                                    "no-data-text":
                                                                                      "Бошқа категориялар топилмади",
                                                                                  },
                                                                                model:
                                                                                  {
                                                                                    value:
                                                                                      _vm
                                                                                        .news
                                                                                        .cats,
                                                                                    callback:
                                                                                      function (
                                                                                        $$v
                                                                                      ) {
                                                                                        _vm.$set(
                                                                                          _vm.news,
                                                                                          "cats",
                                                                                          $$v
                                                                                        )
                                                                                      },
                                                                                    expression:
                                                                                      "news.cats",
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
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-row",
                                                      [
                                                        _c(
                                                          "v-col",
                                                          [
                                                            _c("v-switch", {
                                                              attrs: {
                                                                inset: "",
                                                                name: "home",
                                                                label: _vm.news
                                                                  .home
                                                                  ? "Бош сахифада чиқарилсин"
                                                                  : "Бош сахифада чиқарилмасин",
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.news.home,
                                                                callback:
                                                                  function (
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.news,
                                                                      "home",
                                                                      $$v
                                                                    )
                                                                  },
                                                                expression:
                                                                  "news.home",
                                                              },
                                                            }),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-row",
                                                      [
                                                        _c(
                                                          "v-col",
                                                          [
                                                            _c("v-file-input", {
                                                              attrs: {
                                                                color:
                                                                  "deep-purple accent-4",
                                                                label:
                                                                  "Асосий расм",
                                                                placeholder:
                                                                  "Select your files",
                                                                "prepend-icon":
                                                                  "mdi-paperclip",
                                                                accept:
                                                                  "image/*",
                                                                name: "image",
                                                              },
                                                              on: {
                                                                change:
                                                                  _vm.previewImage,
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.news
                                                                    .image,
                                                                callback:
                                                                  function (
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.news,
                                                                      "image",
                                                                      $$v
                                                                    )
                                                                  },
                                                                expression:
                                                                  "news.image",
                                                              },
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
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "6",
                                                      sm: "6",
                                                      md: "6",
                                                    },
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "row justify-content-center",
                                                      },
                                                      [
                                                        _vm.preview
                                                          ? [
                                                              _c(
                                                                "h3",
                                                                {
                                                                  staticClass:
                                                                    "text-center",
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Юкланган расм "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("img", {
                                                                staticClass:
                                                                  "img-400 p4",
                                                                attrs: {
                                                                  src: _vm.preview,
                                                                },
                                                              }),
                                                            ]
                                                          : _vm._e(),
                                                      ],
                                                      2
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
                                                    _c("ValidationProvider", {
                                                      attrs: {
                                                        name: "Қисқача мазмуни",
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
                                                                _c("label", [
                                                                  _vm._v(
                                                                    "Қисқача"
                                                                  ),
                                                                ]),
                                                                _vm._v(" "),
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
                                                                      _vm.news
                                                                        .short,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.news,
                                                                          "short",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "news.short",
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
                                                                _c("label", [
                                                                  _vm._v(
                                                                    "Тўлиқ тексти"
                                                                  ),
                                                                ]),
                                                                _vm._v(" "),
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
                                                                      _vm.news
                                                                        .description,
                                                                    callback:
                                                                      function (
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.news,
                                                                          "description",
                                                                          $$v
                                                                        )
                                                                      },
                                                                    expression:
                                                                      "news.description",
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