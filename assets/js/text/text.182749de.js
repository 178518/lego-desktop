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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(451);


/***/ },

/***/ 80:
/***/ function(module, exports) {

	module.exports = React;

/***/ },

/***/ 81:
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(96);

/***/ },

/***/ 96:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(80);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(95);

	var _style2 = _interopRequireDefault(_style);

	var _classnames = __webpack_require__(84);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(107);

	var Text = _react2['default'].createClass({
	  displayName: 'Text',

	  propTypes: {
	    numberOfLines: _react.PropTypes.number,
	    onPress: _react.PropTypes.func,
	    textString: _react.PropTypes.string.isRequired
	  },

	  handleClick: function handleClick(event) {
	    this.props.onPress && this.props.onPress(event);
	  },

	  render: function render() {
	    var textClass = (0, _classnames2['default'])({
	      'lego-text': true,
	      'lego-textTwoLine': this.props.numberOfLines === 2,
	      'lego-textThreeLine': this.props.numberOfLines === 3,
	      'lego-textFourLine': this.props.numberOfLines === 4
	    });

	    return typeof this.props.numberOfLines === 'undefined' || this.props.numberOfLines > 0 ? _react2['default'].createElement('div', { className: textClass, onClick: this.handleClick }, this.props.textString) : null;
	  }
	});

	exports['default'] = Text;
	module.exports = exports['default'];

/***/ },

/***/ 107:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(80);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(81);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _componentsText = __webpack_require__(106);

	var _componentsText2 = _interopRequireDefault(_componentsText);

	//import Text from 'rc-lego/text';

	var num = 2;
	function callback(event) {
	  console.log('AAA');
	}

	_reactDom2['default'].render(_react2['default'].createElement(_componentsText2['default'], { textString: '习近平参观中埃科技展 为百度等中企点赞,习近平参观中埃科技展 为百度等中企点赞,习近平参观中埃科技展 为百度等中企点赞,习近平参观中埃科技展 为百度等中企点赞,习近平参观中埃科技展 为百度等中企点赞',
	  numberOfLines: num, onPress: callback }), document.getElementById('myText'));

/***/ }

/******/ });