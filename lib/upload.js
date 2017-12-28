module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(363);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  injectStyles,
	  scopeId,
	  moduleIdentifier /* server only */
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  var hook
	  if (moduleIdentifier) { // server build
	    hook = function (context) {
	      // 2.3 injection
	      context = context || (this.$vnode && this.$vnode.ssrContext)
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
	    hook = injectStyles
	  }

	  if (hook) {
	    // inject component registration as beforeCreate hook
	    var existing = options.beforeCreate
	    options.beforeCreate = existing
	      ? [].concat(existing, hook)
	      : [hook]
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 29:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.hasOwn = hasOwn;
	exports.toObject = toObject;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	};

	function extend(to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to;
	};

	function toObject(arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res;
	};

	var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
	  prop = prop || '';
	  var paths = prop.split('.');
	  var current = object;
	  var result = null;
	  for (var i = 0, j = paths.length; i < j; i++) {
	    var path = paths[i];
	    if (!current) break;

	    if (i === j - 1) {
	      result = current[path];
	      break;
	    }
	    current = current[path];
	  }
	  return result;
	};

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _locale = __webpack_require__(76);

	exports.default = {
	  methods: {
	    t: function t() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _locale.t.apply(this, args);
	    }
	  }
	};

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.i18n = exports.use = exports.t = undefined;

	var _zhCN = __webpack_require__(77);

	var _zhCN2 = _interopRequireDefault(_zhCN);

	var _vue = __webpack_require__(17);

	var _vue2 = _interopRequireDefault(_vue);

	var _deepmerge = __webpack_require__(78);

	var _deepmerge2 = _interopRequireDefault(_deepmerge);

	var _format = __webpack_require__(79);

	var _format2 = _interopRequireDefault(_format);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var format = (0, _format2.default)(_vue2.default);
	var lang = _zhCN2.default;
	var merged = false;
	var i18nHandler = function i18nHandler() {
	  var vuei18n = Object.getPrototypeOf(this || _vue2.default).$t;
	  if (typeof vuei18n === 'function' && !!_vue2.default.locale) {
	    if (!merged) {
	      merged = true;
	      _vue2.default.locale(_vue2.default.config.lang, (0, _deepmerge2.default)(lang, _vue2.default.locale(_vue2.default.config.lang) || {}, { clone: true }));
	    }
	    return vuei18n.apply(this, arguments);
	  }
	};

	var t = exports.t = function t(path, options) {
	  var value = i18nHandler.apply(this, arguments);
	  if (value !== null && value !== undefined) return value;

	  var array = path.split('.');
	  var current = lang;

	  for (var i = 0, j = array.length; i < j; i++) {
	    var property = array[i];
	    value = current[property];
	    if (i === j - 1) return format(value, options);
	    if (!value) return '';
	    current = value;
	  }
	  return '';
	};

	var use = exports.use = function use(l) {
	  lang = l || lang;
	};

	var i18n = exports.i18n = function i18n(fn) {
	  i18nHandler = fn || i18nHandler;
	};

	exports.default = { use: use, t: t, i18n: i18n };

/***/ },

/***/ 77:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  el: {
	    colorpicker: {
	      confirm: '确定',
	      clear: '清空'
	    },
	    datepicker: {
	      now: '此刻',
	      today: '今天',
	      cancel: '取消',
	      clear: '清空',
	      confirm: '确定',
	      selectDate: '选择日期',
	      selectTime: '选择时间',
	      startDate: '开始日期',
	      startTime: '开始时间',
	      endDate: '结束日期',
	      endTime: '结束时间',
	      year: '年',
	      month1: '1 月',
	      month2: '2 月',
	      month3: '3 月',
	      month4: '4 月',
	      month5: '5 月',
	      month6: '6 月',
	      month7: '7 月',
	      month8: '8 月',
	      month9: '9 月',
	      month10: '10 月',
	      month11: '11 月',
	      month12: '12 月',
	      // week: '周次',
	      weeks: {
	        sun: '日',
	        mon: '一',
	        tue: '二',
	        wed: '三',
	        thu: '四',
	        fri: '五',
	        sat: '六'
	      },
	      months: {
	        jan: '一月',
	        feb: '二月',
	        mar: '三月',
	        apr: '四月',
	        may: '五月',
	        jun: '六月',
	        jul: '七月',
	        aug: '八月',
	        sep: '九月',
	        oct: '十月',
	        nov: '十一月',
	        dec: '十二月'
	      }
	    },
	    select: {
	      loading: '加载中',
	      noMatch: '无匹配数据',
	      noData: '无数据',
	      placeholder: '请选择'
	    },
	    cascader: {
	      noMatch: '无匹配数据',
	      loading: '加载中',
	      placeholder: '请选择'
	    },
	    pagination: {
	      goto: '前往',
	      pagesize: '条/页',
	      total: '共 {total} 条',
	      pageClassifier: '页'
	    },
	    messagebox: {
	      title: '提示',
	      confirm: '确定',
	      cancel: '取消',
	      error: '输入的数据不合法!'
	    },
	    upload: {
	      delete: '删除',
	      preview: '查看图片',
	      continue: '继续上传'
	    },
	    table: {
	      emptyText: '暂无数据',
	      confirmFilter: '筛选',
	      resetFilter: '重置',
	      clearFilter: '全部',
	      sumText: '合计'
	    },
	    tree: {
	      emptyText: '暂无数据'
	    },
	    transfer: {
	      noMatch: '无匹配数据',
	      noData: '无数据',
	      titles: ['列表 1', '列表 2'],
	      filterPlaceholder: '请输入搜索内容',
	      noCheckedFormat: '共 {total} 项',
	      hasCheckedFormat: '已选 {checked}/{total} 项'
	    }
	  }
	};

/***/ },

/***/ 78:
/***/ function(module, exports) {

	module.exports = require("deepmerge");

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (Vue) {

	  /**
	   * template
	   *
	   * @param {String} string
	   * @param {Array} ...args
	   * @return {String}
	   */

	  function template(string) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (args.length === 1 && _typeof(args[0]) === 'object') {
	      args = args[0];
	    }

	    if (!args || !args.hasOwnProperty) {
	      args = {};
	    }

	    return string.replace(RE_NARGS, function (match, prefix, i, index) {
	      var result = void 0;

	      if (string[index - 1] === '{' && string[index + match.length] === '}') {
	        return i;
	      } else {
	        result = (0, _util.hasOwn)(args, i) ? args[i] : null;
	        if (result === null || result === undefined) {
	          return '';
	        }

	        return result;
	      }
	    });
	  }

	  return template;
	};

	var _util = __webpack_require__(29);

	var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
	/**
	 *  String format template
	 *  - Inspired:
	 *    https://github.com/Matt-Esch/string-template/index.js
	 */

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _progress = __webpack_require__(260);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_progress2.default.install = function (Vue) {
	  Vue.component(_progress2.default.name, _progress2.default);
	};

	exports.default = _progress2.default;

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(261),
	  /* template */
	  __webpack_require__(262),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 261:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'ElProgress',
	  props: {
	    type: {
	      type: String,
	      default: 'line',
	      validator: function validator(val) {
	        return ['line', 'circle'].indexOf(val) > -1;
	      }
	    },
	    percentage: {
	      type: Number,
	      default: 0,
	      required: true,
	      validator: function validator(val) {
	        return val >= 0 && val <= 100;
	      }
	    },
	    status: {
	      type: String
	    },
	    strokeWidth: {
	      type: Number,
	      default: 6
	    },
	    textInside: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: Number,
	      default: 126
	    },
	    showText: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    barStyle: function barStyle() {
	      var style = {};
	      style.width = this.percentage + '%';
	      return style;
	    },
	    relativeStrokeWidth: function relativeStrokeWidth() {
	      return (this.strokeWidth / this.width * 100).toFixed(1);
	    },
	    trackPath: function trackPath() {
	      var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);

	      return 'M 50 50 m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 1 0 ' + radius * 2 + ' a ' + radius + ' ' + radius + ' 0 1 1 0 -' + radius * 2;
	    },
	    perimeter: function perimeter() {
	      var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
	      return 2 * Math.PI * radius;
	    },
	    circlePathStyle: function circlePathStyle() {
	      var perimeter = this.perimeter;
	      return {
	        strokeDasharray: perimeter + 'px,' + perimeter + 'px',
	        strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
	        transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
	      };
	    },
	    stroke: function stroke() {
	      var ret;
	      switch (this.status) {
	        case 'success':
	          ret = '#13ce66';
	          break;
	        case 'exception':
	          ret = '#ff4949';
	          break;
	        default:
	          ret = '#20a0ff';
	      }
	      return ret;
	    },
	    iconClass: function iconClass() {
	      if (this.type === 'line') {
	        return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-cross';
	      } else {
	        return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
	      }
	    },
	    progressTextSize: function progressTextSize() {
	      return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : this.width * 0.111111 + 2;
	    }
	  }
	};

/***/ },

/***/ 262:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-progress",
	    class: [
	      'el-progress--' + _vm.type,
	      _vm.status ? 'is-' + _vm.status : '', {
	        'el-progress--without-text': !_vm.showText,
	        'el-progress--text-inside': _vm.textInside,
	      }
	    ]
	  }, [(_vm.type === 'line') ? _c('div', {
	    staticClass: "el-progress-bar"
	  }, [_c('div', {
	    staticClass: "el-progress-bar__outer",
	    style: ({
	      height: _vm.strokeWidth + 'px'
	    })
	  }, [_c('div', {
	    staticClass: "el-progress-bar__inner",
	    style: (_vm.barStyle)
	  }, [(_vm.showText && _vm.textInside) ? _c('div', {
	    staticClass: "el-progress-bar__innerText"
	  }, [_vm._v(_vm._s(_vm.percentage) + "%")]) : _vm._e()])])]) : _c('div', {
	    staticClass: "el-progress-circle",
	    style: ({
	      height: _vm.width + 'px',
	      width: _vm.width + 'px'
	    })
	  }, [_c('svg', {
	    attrs: {
	      "viewBox": "0 0 100 100"
	    }
	  }, [_c('path', {
	    staticClass: "el-progress-circle__track",
	    attrs: {
	      "d": _vm.trackPath,
	      "stroke": "#e5e9f2",
	      "stroke-width": _vm.relativeStrokeWidth,
	      "fill": "none"
	    }
	  }), _c('path', {
	    staticClass: "el-progress-circle__path",
	    style: (_vm.circlePathStyle),
	    attrs: {
	      "d": _vm.trackPath,
	      "stroke-linecap": "round",
	      "stroke": _vm.stroke,
	      "stroke-width": _vm.relativeStrokeWidth,
	      "fill": "none"
	    }
	  })])]), (_vm.showText && !_vm.textInside) ? _c('div', {
	    staticClass: "el-progress__text",
	    style: ({
	      fontSize: _vm.progressTextSize + 'px'
	    })
	  }, [(!_vm.status) ? [_vm._v(_vm._s(_vm.percentage) + "%")] : _c('i', {
	    class: _vm.iconClass
	  })], 2) : _vm._e()])
	},staticRenderFns: []}

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _src = __webpack_require__(364);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_src2.default.install = function (Vue) {
	  Vue.component(_src2.default.name, _src2.default);
	};

	exports.default = _src2.default;

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(365),
	  /* template */
	  null,
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _uploadList = __webpack_require__(366);

	var _uploadList2 = _interopRequireDefault(_uploadList);

	var _upload = __webpack_require__(369);

	var _upload2 = _interopRequireDefault(_upload);

	var _iframeUpload = __webpack_require__(375);

	var _iframeUpload2 = _interopRequireDefault(_iframeUpload);

	var _progress = __webpack_require__(259);

	var _progress2 = _interopRequireDefault(_progress);

	var _migrating = __webpack_require__(377);

	var _migrating2 = _interopRequireDefault(_migrating);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}

	exports.default = {
	  name: 'ElUpload',

	  mixins: [_migrating2.default],

	  components: {
	    ElProgress: _progress2.default,
	    UploadList: _uploadList2.default,
	    Upload: _upload2.default,
	    IframeUpload: _iframeUpload2.default
	  },

	  provide: {
	    uploader: undefined
	  },

	  props: {
	    action: {
	      type: String,
	      required: true
	    },
	    headers: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    data: Object,
	    multiple: Boolean,
	    name: {
	      type: String,
	      default: 'file'
	    },
	    drag: Boolean,
	    dragger: Boolean,
	    withCredentials: Boolean,
	    showFileList: {
	      type: Boolean,
	      default: true
	    },
	    accept: String,
	    type: {
	      type: String,
	      default: 'select'
	    },
	    beforeUpload: Function,
	    onRemove: {
	      type: Function,
	      default: noop
	    },
	    onChange: {
	      type: Function,
	      default: noop
	    },
	    onPreview: {
	      type: Function
	    },
	    onSuccess: {
	      type: Function,
	      default: noop
	    },
	    onProgress: {
	      type: Function,
	      default: noop
	    },
	    onError: {
	      type: Function,
	      default: noop
	    },
	    fileList: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    autoUpload: {
	      type: Boolean,
	      default: true
	    },
	    listType: {
	      type: String,
	      default: 'text' // text,picture,picture-card
	    },
	    httpRequest: Function,
	    disabled: Boolean
	  },

	  data: function data() {
	    return {
	      uploadFiles: [],
	      dragOver: false,
	      draging: false,
	      tempIndex: 1
	    };
	  },


	  watch: {
	    fileList: {
	      immediate: true,
	      handler: function handler(fileList) {
	        var _this = this;

	        this.uploadFiles = fileList.map(function (item) {
	          item.uid = item.uid || Date.now() + _this.tempIndex++;
	          item.status = 'success';
	          return item;
	        });
	      }
	    }
	  },

	  methods: {
	    handleStart: function handleStart(rawFile) {
	      rawFile.uid = Date.now() + this.tempIndex++;
	      var file = {
	        status: 'ready',
	        name: rawFile.name,
	        size: rawFile.size,
	        percentage: 0,
	        uid: rawFile.uid,
	        raw: rawFile
	      };

	      try {
	        file.url = URL.createObjectURL(rawFile);
	      } catch (err) {
	        console.error(err);
	        return;
	      }

	      this.uploadFiles.push(file);
	      this.onChange(file, this.uploadFiles);
	    },
	    handleProgress: function handleProgress(ev, rawFile) {
	      var file = this.getFile(rawFile);
	      this.onProgress(ev, file, this.uploadFiles);
	      file.status = 'uploading';
	      file.percentage = ev.percent || 0;
	    },
	    handleSuccess: function handleSuccess(res, rawFile) {
	      var file = this.getFile(rawFile);

	      if (file) {
	        file.status = 'success';
	        file.response = res;

	        this.onSuccess(res, file, this.uploadFiles);
	        this.onChange(file, this.uploadFiles);
	      }
	    },
	    handleError: function handleError(err, rawFile) {
	      var file = this.getFile(rawFile);
	      var fileList = this.uploadFiles;

	      file.status = 'fail';

	      fileList.splice(fileList.indexOf(file), 1);

	      this.onError(err, file, this.uploadFiles);
	      this.onChange(file, this.uploadFiles);
	    },
	    handleRemove: function handleRemove(file, raw) {
	      if (raw) {
	        file = this.getFile(raw);
	      }
	      this.abort(file);
	      var fileList = this.uploadFiles;
	      fileList.splice(fileList.indexOf(file), 1);
	      this.onRemove(file, fileList);
	    },
	    getFile: function getFile(rawFile) {
	      var fileList = this.uploadFiles;
	      var target = void 0;
	      fileList.every(function (item) {
	        target = rawFile.uid === item.uid ? item : null;
	        return !target;
	      });
	      return target;
	    },
	    abort: function abort(file) {
	      this.$refs['upload-inner'].abort(file);
	    },
	    clearFiles: function clearFiles() {
	      this.uploadFiles = [];
	    },
	    submit: function submit() {
	      var _this2 = this;

	      this.uploadFiles.filter(function (file) {
	        return file.status === 'ready';
	      }).forEach(function (file) {
	        _this2.$refs['upload-inner'].upload(file.raw);
	      });
	    },
	    getMigratingConfig: function getMigratingConfig() {
	      return {
	        props: {
	          'default-file-list': 'default-file-list is renamed to file-list.',
	          'show-upload-list': 'show-upload-list is renamed to show-file-list.',
	          'thumbnail-mode': 'thumbnail-mode has been deprecated, you can implement the same effect according to this case: http://element.eleme.io/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan'
	        }
	      };
	    }
	  },

	  render: function render(h) {
	    var uploadList = void 0;

	    if (this.showFileList) {
	      uploadList = h(
	        _uploadList2.default,
	        {
	          attrs: {
	            disabled: this.disabled,
	            listType: this.listType,
	            files: this.uploadFiles,

	            handlePreview: this.onPreview },
	          on: {
	            'remove': this.handleRemove
	          }
	        },
	        []
	      );
	    }

	    var uploadData = {
	      props: {
	        type: this.type,
	        drag: this.drag,
	        action: this.action,
	        multiple: this.multiple,
	        'before-upload': this.beforeUpload,
	        'with-credentials': this.withCredentials,
	        headers: this.headers,
	        name: this.name,
	        data: this.data,
	        accept: this.accept,
	        fileList: this.uploadFiles,
	        autoUpload: this.autoUpload,
	        listType: this.listType,
	        disabled: this.disabled,
	        'on-start': this.handleStart,
	        'on-progress': this.handleProgress,
	        'on-success': this.handleSuccess,
	        'on-error': this.handleError,
	        'on-preview': this.onPreview,
	        'on-remove': this.handleRemove,
	        'http-request': this.httpRequest
	      },
	      ref: 'upload-inner'
	    };

	    var trigger = this.$slots.trigger || this.$slots.default;
	    var uploadComponent = typeof FormData !== 'undefined' || this.$isServer ? h(
	      'upload',
	      uploadData,
	      [trigger]
	    ) : h(
	      'iframeUpload',
	      uploadData,
	      [trigger]
	    );

	    return h(
	      'div',
	      null,
	      [this.listType === 'picture-card' ? uploadList : '', this.$slots.trigger ? [uploadComponent, this.$slots.default] : uploadComponent, this.$slots.tip, this.listType !== 'picture-card' ? uploadList : '']
	    );
	  }
	};

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(367),
	  /* template */
	  __webpack_require__(368),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _locale = __webpack_require__(75);

	var _locale2 = _interopRequireDefault(_locale);

	var _progress = __webpack_require__(259);

	var _progress2 = _interopRequireDefault(_progress);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  mixins: [_locale2.default],

	  components: { ElProgress: _progress2.default },

	  props: {
	    files: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    handlePreview: Function,
	    listType: String
	  },
	  methods: {
	    parsePercentage: function parsePercentage(val) {
	      return parseInt(val, 10);
	    },
	    handleClick: function handleClick(file) {
	      this.handlePreview && this.handlePreview(file);
	    }
	  }
	};

/***/ },

/***/ 368:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition-group', {
	    class: [
	      'el-upload-list',
	      'el-upload-list--' + _vm.listType, {
	        'is-disabled': _vm.disabled
	      }
	    ],
	    attrs: {
	      "tag": "ul",
	      "name": "el-list"
	    }
	  }, _vm._l((_vm.files), function(file, index) {
	    return _c('li', {
	      key: index,
	      class: ['el-upload-list__item', 'is-' + file.status]
	    }, [(file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(_vm.listType) > -1) ? _c('img', {
	      staticClass: "el-upload-list__item-thumbnail",
	      attrs: {
	        "src": file.url,
	        "alt": ""
	      }
	    }) : _vm._e(), _c('a', {
	      staticClass: "el-upload-list__item-name",
	      on: {
	        "click": function($event) {
	          _vm.handleClick(file)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "el-icon-document"
	    }), _vm._v(_vm._s(file.name) + "\n    ")]), _c('label', {
	      staticClass: "el-upload-list__item-status-label"
	    }, [_c('i', {
	      class: {
	        'el-icon-upload-success': true,
	        'el-icon-circle-check': _vm.listType === 'text',
	          'el-icon-check': ['picture-card', 'picture'].indexOf(_vm.listType) > -1
	      }
	    })]), (!_vm.disabled) ? _c('i', {
	      staticClass: "el-icon-close",
	      on: {
	        "click": function($event) {
	          _vm.$emit('remove', file)
	        }
	      }
	    }) : _vm._e(), (file.status === 'uploading') ? _c('el-progress', {
	      attrs: {
	        "type": _vm.listType === 'picture-card' ? 'circle' : 'line',
	        "stroke-width": _vm.listType === 'picture-card' ? 6 : 2,
	        "percentage": _vm.parsePercentage(file.percentage)
	      }
	    }) : _vm._e(), (_vm.listType === 'picture-card') ? _c('span', {
	      staticClass: "el-upload-list__item-actions"
	    }, [(_vm.handlePreview && _vm.listType === 'picture-card') ? _c('span', {
	      staticClass: "el-upload-list__item-preview",
	      on: {
	        "click": function($event) {
	          _vm.handlePreview(file)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "el-icon-view"
	    })]) : _vm._e(), (!_vm.disabled) ? _c('span', {
	      staticClass: "el-upload-list__item-delete",
	      on: {
	        "click": function($event) {
	          _vm.$emit('remove', file)
	        }
	      }
	    }, [_c('i', {
	      staticClass: "el-icon-delete2"
	    })]) : _vm._e()]) : _vm._e()], 1)
	  }))
	},staticRenderFns: []}

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(370),
	  /* template */
	  null,
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _ajax = __webpack_require__(371);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _uploadDragger = __webpack_require__(372);

	var _uploadDragger2 = _interopRequireDefault(_uploadDragger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  inject: ['uploader'],
	  components: {
	    UploadDragger: _uploadDragger2.default
	  },
	  props: {
	    type: String,
	    action: {
	      type: String,
	      required: true
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    data: Object,
	    headers: Object,
	    withCredentials: Boolean,
	    multiple: Boolean,
	    accept: String,
	    onStart: Function,
	    onProgress: Function,
	    onSuccess: Function,
	    onError: Function,
	    beforeUpload: Function,
	    drag: Boolean,
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    },
	    fileList: Array,
	    autoUpload: Boolean,
	    listType: String,
	    httpRequest: {
	      type: Function,
	      default: _ajax2.default
	    },
	    disabled: Boolean
	  },

	  data: function data() {
	    return {
	      mouseover: false,
	      reqs: {}
	    };
	  },


	  methods: {
	    isImage: function isImage(str) {
	      return str.indexOf('image') !== -1;
	    },
	    handleChange: function handleChange(ev) {
	      var files = ev.target.files;

	      if (!files) return;
	      this.uploadFiles(files);
	    },
	    uploadFiles: function uploadFiles(files) {
	      var _this = this;

	      var postFiles = Array.prototype.slice.call(files);
	      if (!this.multiple) {
	        postFiles = postFiles.slice(0, 1);
	      }

	      if (postFiles.length === 0) {
	        return;
	      }

	      postFiles.forEach(function (rawFile) {
	        _this.onStart(rawFile);
	        if (_this.autoUpload) _this.upload(rawFile);
	      });
	    },
	    upload: function upload(rawFile, file) {
	      var _this2 = this;

	      this.$refs.input.value = null;

	      if (!this.beforeUpload) {
	        return this.post(rawFile);
	      }

	      var before = this.beforeUpload(rawFile);
	      if (before && before.then) {
	        before.then(function (processedFile) {
	          if (Object.prototype.toString.call(processedFile) === '[object File]') {
	            _this2.post(processedFile);
	          } else {
	            _this2.post(rawFile);
	          }
	        }, function () {
	          _this2.onRemove(null, rawFile);
	        });
	      } else if (before !== false) {
	        this.post(rawFile);
	      } else {
	        this.onRemove(null, rawFile);
	      }
	    },
	    abort: function abort(file) {
	      var reqs = this.reqs;

	      if (file) {
	        var uid = file;
	        if (file.uid) uid = file.uid;
	        if (reqs[uid]) {
	          reqs[uid].abort();
	        }
	      } else {
	        Object.keys(reqs).forEach(function (uid) {
	          if (reqs[uid]) reqs[uid].abort();
	          delete reqs[uid];
	        });
	      }
	    },
	    post: function post(rawFile) {
	      var _this3 = this;

	      var uid = rawFile.uid;

	      var options = {
	        headers: this.headers,
	        withCredentials: this.withCredentials,
	        file: rawFile,
	        data: this.data,
	        filename: this.name,
	        action: this.action,
	        onProgress: function onProgress(e) {
	          _this3.onProgress(e, rawFile);
	        },
	        onSuccess: function onSuccess(res) {
	          _this3.onSuccess(res, rawFile);
	          delete _this3.reqs[uid];
	        },
	        onError: function onError(err) {
	          _this3.onError(err, rawFile);
	          delete _this3.reqs[uid];
	        }
	      };
	      var req = this.httpRequest(options);
	      this.reqs[uid] = req;
	      if (req && req.then) {
	        req.then(options.onSuccess, options.onError);
	      }
	    },
	    handleClick: function handleClick() {
	      if (!this.disabled) {
	        this.$refs.input.value = null;
	        this.$refs.input.click();
	      }
	    }
	  },

	  render: function render(h) {
	    var handleClick = this.handleClick,
	        drag = this.drag,
	        name = this.name,
	        handleChange = this.handleChange,
	        multiple = this.multiple,
	        accept = this.accept,
	        listType = this.listType,
	        uploadFiles = this.uploadFiles,
	        disabled = this.disabled;

	    var data = {
	      class: {
	        'el-upload': true
	      },
	      on: {
	        click: handleClick
	      }
	    };
	    data.class['el-upload--' + listType] = true;
	    return h(
	      'div',
	      data,
	      [drag ? h(
	        'upload-dragger',
	        {
	          attrs: { disabled: disabled },
	          on: {
	            'file': uploadFiles
	          }
	        },
	        [this.$slots.default]
	      ) : this.$slots.default, h(
	        'input',
	        { 'class': 'el-upload__input', attrs: { type: 'file', name: name, multiple: multiple, accept: accept },
	          ref: 'input', on: {
	            'change': handleChange
	          }
	        },
	        []
	      )]
	    );
	  }
	};

/***/ },

/***/ 371:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = upload;
	function getError(action, option, xhr) {
	  var msg = void 0;
	  if (xhr.response) {
	    msg = xhr.status + ' ' + (xhr.response.error || xhr.response);
	  } else if (xhr.responseText) {
	    msg = xhr.status + ' ' + xhr.responseText;
	  } else {
	    msg = 'fail to post ' + action + ' ' + xhr.status;
	  }

	  var err = new Error(msg);
	  err.status = xhr.status;
	  err.method = 'post';
	  err.url = action;
	  return err;
	}

	function getBody(xhr) {
	  var text = xhr.responseText || xhr.response;
	  if (!text) {
	    return text;
	  }

	  try {
	    return JSON.parse(text);
	  } catch (e) {
	    return text;
	  }
	}

	function upload(option) {
	  if (typeof XMLHttpRequest === 'undefined') {
	    return;
	  }

	  var xhr = new XMLHttpRequest();
	  var action = option.action;

	  if (xhr.upload) {
	    xhr.upload.onprogress = function progress(e) {
	      if (e.total > 0) {
	        e.percent = e.loaded / e.total * 100;
	      }
	      option.onProgress(e);
	    };
	  }

	  var formData = new FormData();

	  if (option.data) {
	    Object.keys(option.data).forEach(function (key) {
	      formData.append(key, option.data[key]);
	    });
	  }

	  formData.append(option.filename, option.file);

	  xhr.onerror = function error(e) {
	    option.onError(e);
	  };

	  xhr.onload = function onload() {
	    if (xhr.status < 200 || xhr.status >= 300) {
	      return option.onError(getError(action, option, xhr));
	    }

	    option.onSuccess(getBody(xhr));
	  };

	  xhr.open('post', action, true);

	  if (option.withCredentials && 'withCredentials' in xhr) {
	    xhr.withCredentials = true;
	  }

	  var headers = option.headers || {};

	  for (var item in headers) {
	    if (headers.hasOwnProperty(item) && headers[item] !== null) {
	      xhr.setRequestHeader(item, headers[item]);
	    }
	  }
	  xhr.send(formData);
	  return xhr;
	}

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(373),
	  /* template */
	  __webpack_require__(374),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 373:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'ElUploadDrag',
	  props: {
	    disabled: Boolean
	  },
	  data: function data() {
	    return {
	      dragover: false
	    };
	  },

	  methods: {
	    onDragover: function onDragover() {
	      if (!this.disabled) {
	        this.dragover = true;
	      }
	    },
	    onDrop: function onDrop(e) {
	      if (!this.disabled) {
	        this.dragover = false;
	        this.$emit('file', e.dataTransfer.files);
	      }
	    }
	  }
	};

/***/ },

/***/ 374:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-upload-dragger",
	    class: {
	      'is-dragover': _vm.dragover
	    },
	    on: {
	      "drop": function($event) {
	        $event.preventDefault();
	        _vm.onDrop($event)
	      },
	      "dragover": function($event) {
	        $event.preventDefault();
	        _vm.onDragover($event)
	      },
	      "dragleave": function($event) {
	        $event.preventDefault();
	        _vm.dragover = false
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(376),
	  /* template */
	  null,
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _uploadDragger = __webpack_require__(372);

	var _uploadDragger2 = _interopRequireDefault(_uploadDragger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    UploadDragger: _uploadDragger2.default
	  },
	  props: {
	    type: String,
	    data: {},
	    action: {
	      type: String,
	      required: true
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    withCredentials: Boolean,
	    accept: String,
	    onStart: Function,
	    onProgress: Function,
	    onSuccess: Function,
	    onError: Function,
	    beforeUpload: Function,
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    },
	    drag: Boolean,
	    listType: String,
	    disabled: Boolean
	  },

	  data: function data() {
	    return {
	      mouseover: false,
	      domain: '',
	      file: null,
	      submitting: false
	    };
	  },


	  methods: {
	    isImage: function isImage(str) {
	      return str.indexOf('image') !== -1;
	    },
	    handleClick: function handleClick() {
	      if (!this.disabled) {
	        this.$refs.input.click();
	      }
	    },
	    handleChange: function handleChange(ev) {
	      var file = ev.target.value;
	      if (file) {
	        this.uploadFiles(file);
	      }
	    },
	    uploadFiles: function uploadFiles(file) {
	      if (this.submitting) return;
	      this.submitting = true;
	      this.file = file;
	      this.onStart(file);

	      var formNode = this.getFormNode();
	      var dataSpan = this.getFormDataNode();
	      var data = this.data;
	      if (typeof data === 'function') {
	        data = data(file);
	      }
	      var inputs = [];
	      for (var key in data) {
	        if (data.hasOwnProperty(key)) {
	          inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
	        }
	      }
	      dataSpan.innerHTML = inputs.join('');
	      formNode.submit();
	      dataSpan.innerHTML = '';
	    },
	    getFormNode: function getFormNode() {
	      return this.$refs.form;
	    },
	    getFormDataNode: function getFormDataNode() {
	      return this.$refs.data;
	    }
	  },

	  created: function created() {
	    this.frameName = 'frame-' + Date.now();
	  },
	  mounted: function mounted() {
	    var self = this;
	    !this.$isServer && window.addEventListener('message', function (event) {
	      if (!self.file) return;
	      var targetOrigin = new URL(self.action).origin;
	      if (event.origin !== targetOrigin) return;
	      var response = event.data;
	      if (response.result === 'success') {
	        self.onSuccess(response, self.file);
	      } else if (response.result === 'failed') {
	        self.onError(response, self.file);
	      }
	      self.submitting = false;
	      self.file = null;
	    }, false);
	  },
	  render: function render(h) {
	    var drag = this.drag,
	        uploadFiles = this.uploadFiles,
	        listType = this.listType,
	        frameName = this.frameName,
	        disabled = this.disabled;

	    var oClass = { 'el-upload': true };
	    oClass['el-upload--' + listType] = true;

	    return h(
	      'div',
	      {
	        'class': oClass,
	        on: {
	          'click': this.handleClick
	        },
	        nativeOn: {
	          'drop': this.onDrop,
	          'dragover': this.handleDragover,
	          'dragleave': this.handleDragleave
	        }
	      },
	      [h(
	        'iframe',
	        {
	          on: {
	            'load': this.onload
	          },

	          ref: 'iframe',
	          attrs: { name: frameName
	          }
	        },
	        []
	      ), h(
	        'form',
	        { ref: 'form', attrs: { action: this.action, target: frameName, enctype: 'multipart/form-data', method: 'POST' }
	        },
	        [h(
	          'input',
	          {
	            'class': 'el-upload__input',
	            attrs: { type: 'file',

	              name: 'file',

	              accept: this.accept },
	            ref: 'input', on: {
	              'change': this.handleChange
	            }
	          },
	          []
	        ), h(
	          'input',
	          {
	            attrs: { type: 'hidden', name: 'documentDomain', value: this.$isServer ? '' : document.domain }
	          },
	          []
	        ), h(
	          'span',
	          { ref: 'data' },
	          []
	        )]
	      ), drag ? h(
	        'upload-dragger',
	        {
	          on: {
	            'file': uploadFiles
	          },
	          attrs: { disabled: disabled }
	        },
	        [this.$slots.default]
	      ) : this.$slots.default]
	    );
	  }
	};

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	/**
	 * Show migrating guide in browser console.
	 *
	 * Usage:
	 * import Migrating from 'element-ui/src/mixins/migrating';
	 *
	 * mixins: [Migrating]
	 *
	 * add getMigratingConfig method for your component.
	 *  getMigratingConfig() {
	 *    return {
	 *      props: {
	 *        'allow-no-selection': 'allow-no-selection is removed.',
	 *        'selection-mode': 'selection-mode is removed.'
	 *      },
	 *      events: {
	 *        selectionchange: 'selectionchange is renamed to selection-change.'
	 *      }
	 *    };
	 *  },
	 */
	exports.default = {
	  mounted: function mounted() {
	    if (true) return;
	    if (!this.$vnode) return;

	    var _getMigratingConfig = this.getMigratingConfig(),
	        props = _getMigratingConfig.props,
	        events = _getMigratingConfig.events;

	    var _$vnode = this.$vnode,
	        data = _$vnode.data,
	        componentOptions = _$vnode.componentOptions;

	    var definedProps = data.attrs || {};
	    var definedEvents = componentOptions.listeners || {};

	    for (var propName in definedProps) {
	      if (definedProps.hasOwnProperty(propName) && props[propName]) {
	        console.warn('[Element Migrating][Attribute]: ' + props[propName]);
	      }
	    }

	    for (var eventName in definedEvents) {
	      if (definedEvents.hasOwnProperty(eventName) && events[eventName]) {
	        console.warn('[Element Migrating][Event]: ' + events[eventName]);
	      }
	    }
	  },

	  methods: {
	    getMigratingConfig: function getMigratingConfig() {
	      return {
	        props: {},
	        events: {}
	      };
	    }
	  }
	};

/***/ }

/******/ });