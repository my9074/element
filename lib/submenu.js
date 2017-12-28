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

	module.exports = __webpack_require__(300);


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

/***/ 12:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	function _broadcast(componentName, eventName, params) {
	  this.$children.forEach(function (child) {
	    var name = child.$options.componentName;

	    if (name === componentName) {
	      child.$emit.apply(child, [eventName].concat(params));
	    } else {
	      _broadcast.apply(child, [componentName, eventName].concat([params]));
	    }
	  });
	}
	exports.default = {
	  methods: {
	    dispatch: function dispatch(componentName, eventName, params) {
	      var parent = this.$parent || this.$root;
	      var name = parent.$options.componentName;

	      while (parent && (!name || name !== componentName)) {
	        parent = parent.$parent;

	        if (parent) {
	          name = parent.$options.componentName;
	        }
	      }
	      if (parent) {
	        parent.$emit.apply(parent, [eventName].concat(params));
	      }
	    },
	    broadcast: function broadcast(componentName, eventName, params) {
	      _broadcast.call(this, componentName, eventName, params);
	    }
	  }
	};

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getStyle = exports.once = exports.off = exports.on = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* istanbul ignore next */

	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.setStyle = setStyle;

	var _vue = __webpack_require__(17);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isServer = _vue2.default.prototype.$isServer;
	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;
	var ieVersion = isServer ? 0 : Number(document.documentMode);

	/* istanbul ignore next */
	var trim = function trim(string) {
	  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
	};
	/* istanbul ignore next */
	var camelCase = function camelCase(name) {
	  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
	    return offset ? letter.toUpperCase() : letter;
	  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
	};

	/* istanbul ignore next */
	var on = exports.on = function () {
	  if (!isServer && document.addEventListener) {
	    return function (element, event, handler) {
	      if (element && event && handler) {
	        element.addEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function (element, event, handler) {
	      if (element && event && handler) {
	        element.attachEvent('on' + event, handler);
	      }
	    };
	  }
	}();

	/* istanbul ignore next */
	var off = exports.off = function () {
	  if (!isServer && document.removeEventListener) {
	    return function (element, event, handler) {
	      if (element && event) {
	        element.removeEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function (element, event, handler) {
	      if (element && event) {
	        element.detachEvent('on' + event, handler);
	      }
	    };
	  }
	}();

	/* istanbul ignore next */
	var once = exports.once = function once(el, event, fn) {
	  var listener = function listener() {
	    if (fn) {
	      fn.apply(this, arguments);
	    }
	    off(el, event, listener);
	  };
	  on(el, event, listener);
	};

	/* istanbul ignore next */
	function hasClass(el, cls) {
	  if (!el || !cls) return false;
	  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
	  if (el.classList) {
	    return el.classList.contains(cls);
	  } else {
	    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	  }
	};

	/* istanbul ignore next */
	function addClass(el, cls) {
	  if (!el) return;
	  var curClass = el.className;
	  var classes = (cls || '').split(' ');

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.add(clsName);
	    } else {
	      if (!hasClass(el, clsName)) {
	        curClass += ' ' + clsName;
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = curClass;
	  }
	};

	/* istanbul ignore next */
	function removeClass(el, cls) {
	  if (!el || !cls) return;
	  var classes = cls.split(' ');
	  var curClass = ' ' + el.className + ' ';

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.remove(clsName);
	    } else {
	      if (hasClass(el, clsName)) {
	        curClass = curClass.replace(' ' + clsName + ' ', ' ');
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = trim(curClass);
	  }
	};

	/* istanbul ignore next */
	var getStyle = exports.getStyle = ieVersion < 9 ? function (element, styleName) {
	  if (isServer) return;
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'styleFloat';
	  }
	  try {
	    switch (styleName) {
	      case 'opacity':
	        try {
	          return element.filters.item('alpha').opacity / 100;
	        } catch (e) {
	          return 1.0;
	        }
	      default:
	        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
	    }
	  } catch (e) {
	    return element.style[styleName];
	  }
	} : function (element, styleName) {
	  if (isServer) return;
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'cssFloat';
	  }
	  try {
	    var computed = document.defaultView.getComputedStyle(element, '');
	    return element.style[styleName] || computed ? computed[styleName] : null;
	  } catch (e) {
	    return element.style[styleName];
	  }
	};

	/* istanbul ignore next */
	function setStyle(element, styleName, value) {
	  if (!element || !styleName) return;

	  if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
	    for (var prop in styleName) {
	      if (styleName.hasOwnProperty(prop)) {
	        setStyle(element, prop, styleName[prop]);
	      }
	    }
	  } else {
	    styleName = camelCase(styleName);
	    if (styleName === 'opacity' && ieVersion < 9) {
	      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
	    } else {
	      element.style[styleName] = value;
	    }
	  }
	};

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _dom = __webpack_require__(18);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = function () {
	  function Transition() {
	    _classCallCheck(this, Transition);
	  }

	  Transition.prototype.beforeEnter = function beforeEnter(el) {
	    (0, _dom.addClass)(el, 'collapse-transition');
	    if (!el.dataset) el.dataset = {};

	    el.dataset.oldPaddingTop = el.style.paddingTop;
	    el.dataset.oldPaddingBottom = el.style.paddingBottom;

	    el.style.height = '0';
	    el.style.paddingTop = 0;
	    el.style.paddingBottom = 0;
	  };

	  Transition.prototype.enter = function enter(el) {
	    el.dataset.oldOverflow = el.style.overflow;
	    if (el.scrollHeight !== 0) {
	      el.style.height = el.scrollHeight + 'px';
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    } else {
	      el.style.height = '';
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    }

	    el.style.overflow = 'hidden';
	  };

	  Transition.prototype.afterEnter = function afterEnter(el) {
	    // for safari: remove class then reset height is necessary
	    (0, _dom.removeClass)(el, 'collapse-transition');
	    el.style.height = '';
	    el.style.overflow = el.dataset.oldOverflow;
	  };

	  Transition.prototype.beforeLeave = function beforeLeave(el) {
	    if (!el.dataset) el.dataset = {};
	    el.dataset.oldPaddingTop = el.style.paddingTop;
	    el.dataset.oldPaddingBottom = el.style.paddingBottom;
	    el.dataset.oldOverflow = el.style.overflow;

	    el.style.height = el.scrollHeight + 'px';
	    el.style.overflow = 'hidden';
	  };

	  Transition.prototype.leave = function leave(el) {
	    if (el.scrollHeight !== 0) {
	      // for safari: add class after set height, or it will jump to zero height suddenly, weired
	      (0, _dom.addClass)(el, 'collapse-transition');
	      el.style.height = 0;
	      el.style.paddingTop = 0;
	      el.style.paddingBottom = 0;
	    }
	  };

	  Transition.prototype.afterLeave = function afterLeave(el) {
	    (0, _dom.removeClass)(el, 'collapse-transition');
	    el.style.height = '';
	    el.style.overflow = el.dataset.oldOverflow;
	    el.style.paddingTop = el.dataset.oldPaddingTop;
	    el.style.paddingBottom = el.dataset.oldPaddingBottom;
	  };

	  return Transition;
	}();

	exports.default = {
	  name: 'ElCollapseTransition',
	  functional: true,
	  render: function render(h, _ref) {
	    var children = _ref.children;

	    var data = {
	      on: new Transition()
	    };

	    return h('transition', data, children);
	  }
	};

/***/ },

/***/ 201:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  computed: {
	    indexPath: function indexPath() {
	      var path = [this.index];
	      var parent = this.$parent;
	      while (parent.$options.componentName !== 'ElMenu') {
	        if (parent.index) {
	          path.unshift(parent.index);
	        }
	        parent = parent.$parent;
	      }
	      return path;
	    },
	    rootMenu: function rootMenu() {
	      var parent = this.$parent;
	      while (parent && parent.$options.componentName !== 'ElMenu') {
	        parent = parent.$parent;
	      }
	      return parent;
	    },
	    parentMenu: function parentMenu() {
	      var parent = this.$parent;
	      while (parent && ['ElMenu', 'ElSubmenu'].indexOf(parent.$options.componentName) === -1) {
	        parent = parent.$parent;
	      }
	      return parent;
	    },
	    paddingStyle: function paddingStyle() {
	      if (this.rootMenu.mode !== 'vertical') return {};

	      var padding = 20;
	      var parent = this.$parent;

	      if (this.rootMenu.collapse) {
	        padding = 20;
	      } else {
	        while (parent && parent.$options.componentName !== 'ElMenu') {
	          if (parent.$options.componentName === 'ElSubmenu') {
	            padding += 20;
	          }
	          parent = parent.$parent;
	        }
	      }
	      return { paddingLeft: padding + 'px' };
	    }
	  }
	};

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _submenu = __webpack_require__(301);

	var _submenu2 = _interopRequireDefault(_submenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_submenu2.default.install = function (Vue) {
	  Vue.component(_submenu2.default.name, _submenu2.default);
	};

	exports.default = _submenu2.default;

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(302),
	  /* template */
	  __webpack_require__(303),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _collapseTransition = __webpack_require__(103);

	var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

	var _menuMixin = __webpack_require__(201);

	var _menuMixin2 = _interopRequireDefault(_menuMixin);

	var _emitter = __webpack_require__(12);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSubmenu',

	  componentName: 'ElSubmenu',

	  mixins: [_menuMixin2.default, _emitter2.default],

	  components: { ElCollapseTransition: _collapseTransition2.default },

	  props: {
	    index: {
	      type: String,
	      required: true
	    }
	  },

	  data: function data() {
	    return {
	      timeout: null,
	      items: {},
	      submenus: {}
	    };
	  },

	  computed: {
	    menuTransitionName: function menuTransitionName() {
	      return this.rootMenu.collapse ? 'el-zoom-in-left' : 'el-zoom-in-top';
	    },
	    opened: function opened() {
	      return this.rootMenu.openedMenus.indexOf(this.index) > -1;
	    },

	    active: {
	      cache: false,
	      get: function get() {
	        var isActive = false;
	        var submenus = this.submenus;
	        var items = this.items;

	        Object.keys(items).forEach(function (index) {
	          if (items[index].active) {
	            isActive = true;
	          }
	        });

	        Object.keys(submenus).forEach(function (index) {
	          if (submenus[index].active) {
	            isActive = true;
	          }
	        });

	        return isActive;
	      }
	    }
	  },
	  methods: {
	    addItem: function addItem(item) {
	      this.$set(this.items, item.index, item);
	    },
	    removeItem: function removeItem(item) {
	      delete this.items[item.index];
	    },
	    addSubmenu: function addSubmenu(item) {
	      this.$set(this.submenus, item.index, item);
	    },
	    removeSubmenu: function removeSubmenu(item) {
	      delete this.submenus[item.index];
	    },
	    handleClick: function handleClick() {
	      var rootMenu = this.rootMenu;

	      if (rootMenu.menuTrigger === 'hover' && rootMenu.mode === 'horizontal' || rootMenu.collapse && rootMenu.mode === 'vertical') {
	        return;
	      }
	      this.dispatch('ElMenu', 'submenu-click', this);
	    },
	    handleMouseenter: function handleMouseenter() {
	      var _this = this;

	      var rootMenu = this.rootMenu;

	      if (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal' || !rootMenu.collapse && rootMenu.mode === 'vertical') {
	        return;
	      }
	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this.rootMenu.openMenu(_this.index, _this.indexPath);
	      }, 300);
	    },
	    handleMouseleave: function handleMouseleave() {
	      var _this2 = this;

	      var rootMenu = this.rootMenu;

	      if (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal' || !rootMenu.collapse && rootMenu.mode === 'vertical') {
	        return;
	      }
	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this2.rootMenu.closeMenu(_this2.index);
	      }, 300);
	    }
	  },
	  created: function created() {
	    this.parentMenu.addSubmenu(this);
	    this.rootMenu.addSubmenu(this);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.parentMenu.removeSubmenu(this);
	    this.rootMenu.removeSubmenu(this);
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 303:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: {
	      'el-submenu': true,
	      'is-active': _vm.active,
	      'is-opened': _vm.opened
	    },
	    on: {
	      "mouseenter": _vm.handleMouseenter,
	      "mouseleave": _vm.handleMouseleave
	    }
	  }, [_c('div', {
	    ref: "submenu-title",
	    staticClass: "el-submenu__title",
	    style: (_vm.paddingStyle),
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [_vm._t("title"), _c('i', {
	    class: {
	      'el-submenu__icon-arrow': true,
	      'el-icon-caret-bottom': _vm.rootMenu.mode === 'horizontal',
	        'el-icon-arrow-down': _vm.rootMenu.mode === 'vertical' && !_vm.rootMenu.collapse,
	        'el-icon-caret-right': _vm.rootMenu.mode === 'vertical' && _vm.rootMenu.collapse
	    }
	  })], 2), (_vm.rootMenu.mode === 'horizontal' || (_vm.rootMenu.mode === 'vertical' && _vm.rootMenu.collapse)) ? [_c('transition', {
	    attrs: {
	      "name": _vm.menuTransitionName
	    }
	  }, [_c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.opened),
	      expression: "opened"
	    }],
	    staticClass: "el-menu"
	  }, [_vm._t("default")], 2)])] : _c('el-collapse-transition', [_c('ul', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.opened),
	      expression: "opened"
	    }],
	    staticClass: "el-menu"
	  }, [_vm._t("default")], 2)])], 2)
	},staticRenderFns: []}

/***/ }

/******/ });