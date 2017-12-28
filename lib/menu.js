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

	module.exports = __webpack_require__(194);


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

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _menu = __webpack_require__(195);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_menu2.default.install = function (Vue) {
	  Vue.component(_menu2.default.name, _menu2.default);
	};

	exports.default = _menu2.default;

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(196),
	  /* template */
	  __webpack_require__(197),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(12);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _dom = __webpack_require__(18);

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

	exports.default = {
	  name: 'ElMenu',

	  componentName: 'ElMenu',

	  mixins: [_emitter2.default],

	  provide: function provide() {
	    return {
	      rootMenu: this
	    };
	  },


	  components: {
	    'el-menu-collapse-transition': {
	      functional: true,
	      render: function render(createElement, context) {
	        var data = {
	          props: {
	            mode: 'out-in'
	          },
	          on: {
	            beforeEnter: function beforeEnter(el) {
	              el.style.opacity = 0.2;
	            },
	            enter: function enter(el) {
	              (0, _dom.addClass)(el, 'el-opacity-transition');
	              el.style.opacity = 1;
	            },
	            afterEnter: function afterEnter(el) {
	              (0, _dom.removeClass)(el, 'el-opacity-transition');
	              el.style.opacity = '';
	            },
	            beforeLeave: function beforeLeave(el) {
	              if (!el.dataset) el.dataset = {};

	              if ((0, _dom.hasClass)(el, 'el-menu--collapse')) {
	                (0, _dom.removeClass)(el, 'el-menu--collapse');
	                el.dataset.oldOverflow = el.style.overflow;
	                el.dataset.scrollWidth = el.scrollWidth;
	                (0, _dom.addClass)(el, 'el-menu--collapse');
	              }

	              el.style.width = el.scrollWidth + 'px';
	              el.style.overflow = 'hidden';
	            },
	            leave: function leave(el) {
	              if (!(0, _dom.hasClass)(el, 'el-menu--collapse')) {
	                (0, _dom.addClass)(el, 'horizontal-collapse-transition');
	                el.style.width = '64px';
	              } else {
	                (0, _dom.addClass)(el, 'horizontal-collapse-transition');
	                el.style.width = el.dataset.scrollWidth + 'px';
	              }
	            },
	            afterLeave: function afterLeave(el) {
	              (0, _dom.removeClass)(el, 'horizontal-collapse-transition');
	              if ((0, _dom.hasClass)(el, 'el-menu--collapse')) {
	                el.style.width = el.dataset.scrollWidth + 'px';
	              } else {
	                el.style.width = '64px';
	              }
	              el.style.overflow = el.dataset.oldOverflow;
	            }
	          }
	        };
	        return createElement('transition', data, context.children);
	      }
	    }
	  },

	  props: {
	    mode: {
	      type: String,
	      default: 'vertical'
	    },
	    defaultActive: {
	      type: String,
	      default: ''
	    },
	    defaultOpeneds: Array,
	    theme: {
	      type: String,
	      default: 'light'
	    },
	    uniqueOpened: Boolean,
	    router: Boolean,
	    menuTrigger: {
	      type: String,
	      default: 'hover'
	    },
	    collapse: Boolean
	  },
	  data: function data() {
	    return {
	      activeIndex: this.defaultActive,
	      openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [],
	      items: {},
	      submenus: {}
	    };
	  },

	  watch: {
	    defaultActive: function defaultActive(value) {
	      var item = this.items[value];
	      if (item) {
	        this.activeIndex = item.index;
	        this.initOpenedMenu();
	      } else {
	        this.activeIndex = '';
	      }
	    },
	    defaultOpeneds: function defaultOpeneds(value) {
	      this.openedMenus = value;
	    },
	    collapse: function collapse(value) {
	      if (value) this.openedMenus = [];
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
	    openMenu: function openMenu(index, indexPath) {
	      var openedMenus = this.openedMenus;
	      if (openedMenus.indexOf(index) !== -1) return;
	      // 将不在该菜单路径下的其余菜单收起
	      if (this.uniqueOpened) {
	        this.openedMenus = openedMenus.filter(function (index) {
	          return indexPath.indexOf(index) !== -1;
	        });
	      }
	      this.openedMenus.push(index);
	    },
	    closeMenu: function closeMenu(index) {
	      var i = this.openedMenus.indexOf(index);
	      if (i !== -1) {
	        this.openedMenus.splice(i, 1);
	      }
	    },
	    handleSubmenuClick: function handleSubmenuClick(submenu) {
	      var index = submenu.index,
	          indexPath = submenu.indexPath;

	      var isOpened = this.openedMenus.indexOf(index) !== -1;

	      if (isOpened) {
	        this.closeMenu(index);
	        this.$emit('close', index, indexPath);
	      } else {
	        this.openMenu(index, indexPath);
	        this.$emit('open', index, indexPath);
	      }
	    },
	    handleItemClick: function handleItemClick(item) {
	      var index = item.index,
	          indexPath = item.indexPath;

	      this.activeIndex = item.index;
	      this.$emit('select', index, indexPath, item);

	      if (this.mode === 'horizontal' || this.collapse) {
	        this.openedMenus = [];
	      }

	      if (this.router) {
	        this.routeToItem(item);
	      }
	    },

	    // 初始化展开菜单
	    initOpenedMenu: function initOpenedMenu() {
	      var _this = this;

	      var index = this.activeIndex;
	      var activeItem = this.items[index];
	      if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

	      var indexPath = activeItem.indexPath;

	      // 展开该菜单项的路径上所有子菜单
	      indexPath.forEach(function (index) {
	        var submenu = _this.submenus[index];
	        submenu && _this.openMenu(index, submenu.indexPath);
	      });
	    },
	    routeToItem: function routeToItem(item) {
	      var route = item.route || item.index;
	      try {
	        this.$router.push(route);
	      } catch (e) {
	        console.error(e);
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.initOpenedMenu();
	    this.$on('item-click', this.handleItemClick);
	    this.$on('submenu-click', this.handleSubmenuClick);
	  }
	};

/***/ },

/***/ 197:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('el-menu-collapse-transition', [_c('ul', {
	    key: +_vm.collapse,
	    staticClass: "el-menu",
	    class: {
	      'el-menu--horizontal': _vm.mode === 'horizontal',
	        'el-menu--dark': _vm.theme === 'dark',
	        'el-menu--collapse': _vm.collapse
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }

/******/ });