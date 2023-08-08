exports.ids = [0];
exports.modules = {

/***/ "3fB4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = supportsPassiveEvents;
/**
 * Used to detect browser support for adding an event listener with options
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners
 * @returns Boolean
 */
function supportsPassiveEvents() {
  var passiveSupported = false;
  try {
    var options = {
      get passive() {
        // This function will be called when the browser
        // attempts to access the passive property.
        passiveSupported = true;
        return false;
      }
    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}

/***/ }),

/***/ "Brh3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"layout":"layout__gpm4a","wrapper":"wrapper__b8TZG"});

/***/ }),

/***/ "D8Mr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "7b4dcc6c9c5416d191143444a708e159.svg");

/***/ }),

/***/ "E02R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "F56x":
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (_typeof(objA) !== "object" || !objA || _typeof(objB) !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ "KxYc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  var lastKnownScrollY = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var currentScrollY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var props = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var state = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var scrollDirection = currentScrollY >= lastKnownScrollY ? 'down' : 'up';
  var distanceScrolled = Math.abs(currentScrollY - lastKnownScrollY);

  // We're disabled
  if (props.disable) {
    return {
      action: 'none',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're pinned
    };
  } else if (props.pin) {
    return {
      action: state.state !== 'pinned' ? 'pin' : 'none',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're at the top and not fixed yet.
    };
  } else if (currentScrollY <= props.pinStart && state.state !== 'unfixed') {
    return {
      action: 'unfix',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're unfixed and headed down. Carry on.
    };
  } else if (currentScrollY <= state.height && scrollDirection === 'down' && state.state === 'unfixed') {
    return {
      action: 'none',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
    };
  } else if (currentScrollY > state.height + props.pinStart && scrollDirection === 'down' && state.state === 'unfixed') {
    return {
      action: 'unpin-snap',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're past the header and scrolling down.
      // We transition to "unpinned" if necessary.
    };
  } else if (scrollDirection === 'down' && ['pinned', 'unfixed'].indexOf(state.state) >= 0 && currentScrollY > state.height + props.pinStart && distanceScrolled > props.downTolerance) {
    return {
      action: 'unpin',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're scrolling up, we transition to "pinned"
    };
  } else if (scrollDirection === 'up' && distanceScrolled > props.upTolerance && ['pinned', 'unfixed'].indexOf(state.state) < 0) {
    return {
      action: 'pin',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're scrolling up, and inside the header.
      // We transition to pin regardless of upTolerance
    };
  } else if (scrollDirection === 'up' && currentScrollY <= state.height && ['pinned', 'unfixed'].indexOf(state.state) < 0) {
    return {
      action: 'pin',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
    };
  } else {
    return {
      action: 'none',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
    };
  }
};

/***/ }),

/***/ "Mjuc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "ae97326fc33d223a77591b360e857c45.webp");

/***/ }),

/***/ "NS33":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("E02R");
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  ;
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  ;
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "QyV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h, Fragment) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ox/y");
/* harmony import */ var preact_router_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_router_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_header_cdlogo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xvDY");
/* harmony import */ var _assets_cdimages_menucd_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("D8Mr");
/* harmony import */ var _assets_cdimages_closecd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("i3YD");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ySiU");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("T5Xo");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_headroom__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var scrollTowhat = function scrollTowhat() {
  var What = document.getElementById('What');
  if (What) {
    What.scrollIntoView();
  } else {
    window.location.href = '#What';
  }
};
var scrollToHow = function scrollToHow() {
  var How = document.getElementById('How');
  if (How) {
    How.scrollIntoView();
  } else {
    window.location.href = '#How';
  }
};
var scrollToWhy = function scrollToWhy() {
  var Why = document.getElementById('Why');
  if (Why) {
    Why.scrollIntoView();
  } else {
    window.location.href = '#Why';
  }
};

// eslint-disable-next-line react-hooks/rules-of-hooks

var CDHeader = function CDHeader() {
  var thankyouUrl = "undefined" != typeof window && "/thankyou/" === window.location.pathname || "/thankyou" === window.location.pathname || "/thankyou/email_verification/" === window.location.pathname || "/thankyou/email_verification" === window.location.pathname || "/thankyou/unsubscribe/" === window.location.pathname || "/thankyou/unsubscribe" === window.location.pathname;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])(!1),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setActive = _useState2[1],
    toggleClass = function toggleClass() {
      setActive(!isActive);
    };
  return h(react_headroom__WEBPACK_IMPORTED_MODULE_6___default.a, null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheader
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdcontainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheaderContent
  }, h(preact_router_match__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/lp/en/global/immigration/"
  }, h("img", {
    src: _assets_header_cdlogo_svg__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    alt: "logo",
    width: 100,
    height: 38
  })), !thankyouUrl ? h(Fragment, null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheaderRight
  }, h("ul", null, h("li", {
    onClick: scrollTowhat
  }, "What"), h("li", {
    onClick: scrollToHow
  }, "How"), h("li", {
    onClick: scrollToWhy
  }, "Why"))), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheaderRightToggle
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdToggleButton,
    onClick: toggleClass
  }, isActive ? h(Fragment, null, h("img", {
    src: _assets_cdimages_closecd_svg__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    alt: "close"
  })) : h(Fragment, null, h("img", {
    src: _assets_cdimages_menucd_svg__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    alt: "menu"
  }))), isActive ? h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].cdheaderRightItem
  }, h("ul", null, h("li", {
    onClick: scrollTowhat
  }, "What"), h("li", {
    onClick: scrollToHow
  }, "How"), h("li", {
    onClick: scrollToWhy
  }, "Why"))) : '')) : ''))));
};
/* harmony default export */ __webpack_exports__["a"] = (CDHeader);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"], __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "T5Xo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
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
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _react = __webpack_require__("l8WD");
var _react2 = _interopRequireDefault(_react);
var _propTypes = __webpack_require__("W0B4");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _shallowequal = __webpack_require__("F56x");
var _shallowequal2 = _interopRequireDefault(_shallowequal);
var _raf = __webpack_require__("rQBY");
var _raf2 = _interopRequireDefault(_raf);
var _shouldUpdate2 = __webpack_require__("KxYc");
var _shouldUpdate3 = _interopRequireDefault(_shouldUpdate2);
var _supportsPassiveEvents = __webpack_require__("3fB4");
var _supportsPassiveEvents2 = _interopRequireDefault(_supportsPassiveEvents);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // eslint-disable-line import/no-unresolved

var noop = function noop() {};
var Headroom = function (_Component) {
  _inherits(Headroom, _Component);
  _createClass(Headroom, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.disable && state.state !== 'unfixed') {
        return {
          translateY: 0,
          className: 'headroom headroom--unfixed headroom-disable-animation',
          animation: false,
          state: 'unfixed'
        };
      }
      return null;
    }
  }]);
  function Headroom(props) {
    _classCallCheck(this, Headroom);

    // Class variables.
    var _this = _possibleConstructorReturn(this, (Headroom.__proto__ || Object.getPrototypeOf(Headroom)).call(this, props));
    _this.setRef = function (ref) {
      return _this.inner = ref;
    };
    _this.setHeightOffset = function () {
      _this.setState({
        height: _this.inner ? _this.inner.offsetHeight : ''
      });
      _this.resizeTicking = false;
    };
    _this.getScrollY = function () {
      if (_this.props.parent().pageYOffset !== void 0) {
        return _this.props.parent().pageYOffset;
      } else if (_this.props.parent().scrollTop !== void 0) {
        return _this.props.parent().scrollTop;
      } else {
        return (document.documentElement || document.body.parentNode || document.body).scrollTop;
      }
    };
    _this.getViewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    _this.getDocumentHeight = function () {
      var body = document.body;
      var documentElement = document.documentElement;
      return Math.max(body.scrollHeight, documentElement.scrollHeight, body.offsetHeight, documentElement.offsetHeight, body.clientHeight, documentElement.clientHeight);
    };
    _this.getElementPhysicalHeight = function (elm) {
      return Math.max(elm.offsetHeight, elm.clientHeight);
    };
    _this.getElementHeight = function (elm) {
      return Math.max(elm.scrollHeight, elm.offsetHeight, elm.clientHeight);
    };
    _this.getScrollerPhysicalHeight = function () {
      var parent = _this.props.parent();
      return parent === window || parent === document.body ? _this.getViewportHeight() : _this.getElementPhysicalHeight(parent);
    };
    _this.getScrollerHeight = function () {
      var parent = _this.props.parent();
      return parent === window || parent === document.body ? _this.getDocumentHeight() : _this.getElementHeight(parent);
    };
    _this.isOutOfBound = function (currentScrollY) {
      var pastTop = currentScrollY < 0;
      var scrollerPhysicalHeight = _this.getScrollerPhysicalHeight();
      var scrollerHeight = _this.getScrollerHeight();
      var pastBottom = currentScrollY + scrollerPhysicalHeight > scrollerHeight;
      return pastTop || pastBottom;
    };
    _this.handleScroll = function () {
      if (!_this.scrollTicking) {
        _this.scrollTicking = true;
        (0, _raf2.default)(_this.update);
      }
    };
    _this.handleResize = function () {
      if (!_this.resizeTicking) {
        _this.resizeTicking = true;
        (0, _raf2.default)(_this.setHeightOffset);
      }
    };
    _this.unpin = function () {
      _this.props.onUnpin();
      _this.setState({
        translateY: '-100%',
        className: 'headroom headroom--unpinned',
        animation: true,
        state: 'unpinned'
      });
    };
    _this.unpinSnap = function () {
      _this.props.onUnpin();
      _this.setState({
        translateY: '-100%',
        className: 'headroom headroom--unpinned headroom-disable-animation',
        animation: false,
        state: 'unpinned'
      });
    };
    _this.pin = function () {
      _this.props.onPin();
      _this.setState({
        translateY: 0,
        className: 'headroom headroom--pinned',
        animation: true,
        state: 'pinned'
      });
    };
    _this.unfix = function () {
      _this.props.onUnfix();
      _this.setState({
        translateY: 0,
        className: 'headroom headroom--unfixed headroom-disable-animation',
        animation: false
      }, function () {
        setTimeout(function () {
          _this.setState({
            state: 'unfixed'
          });
        }, 0);
      });
    };
    _this.update = function () {
      _this.currentScrollY = _this.getScrollY();
      if (!_this.isOutOfBound(_this.currentScrollY)) {
        var _shouldUpdate = (0, _shouldUpdate3.default)(_this.lastKnownScrollY, _this.currentScrollY, _this.props, _this.state),
          action = _shouldUpdate.action;
        if (action === 'pin') {
          _this.pin();
        } else if (action === 'unpin') {
          _this.unpin();
        } else if (action === 'unpin-snap') {
          _this.unpinSnap();
        } else if (action === 'unfix') {
          _this.unfix();
        }
      }
      _this.lastKnownScrollY = _this.currentScrollY;
      _this.scrollTicking = false;
    };
    _this.currentScrollY = 0;
    _this.lastKnownScrollY = 0;
    _this.scrollTicking = false;
    _this.resizeTicking = false;
    _this.eventListenerOptions = false;
    _this.state = {
      state: 'unfixed',
      translateY: 0,
      className: 'headroom headroom--unfixed'
    };
    return _this;
  }
  _createClass(Headroom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setHeightOffset();
      this.eventListenerOptions = (0, _supportsPassiveEvents2.default)() ? {
        passive: true,
        capture: false
      } : false;
      if (!this.props.disable) {
        this.props.parent().addEventListener('scroll', this.handleScroll, this.eventListenerOptions);
        if (this.props.calcHeightOnResize) {
          this.props.parent().addEventListener('resize', this.handleResize, this.eventListenerOptions);
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // If children have changed, remeasure height.
      if (prevProps.children !== this.props.children) {
        this.setHeightOffset();
      }

      // Add/remove event listeners when re-enabled/disabled
      if (!prevProps.disable && this.props.disable) {
        this.props.parent().removeEventListener('scroll', this.handleScroll, this.eventListenerOptions);
        this.props.parent().removeEventListener('resize', this.handleResize, this.eventListenerOptions);
        if (prevState.state !== 'unfixed' && this.state.state === 'unfixed') {
          this.props.onUnfix();
        }
      } else if (prevProps.disable && !this.props.disable) {
        this.props.parent().addEventListener('scroll', this.handleScroll, this.eventListenerOptions);
        if (this.props.calcHeightOnResize) {
          this.props.parent().addEventListener('resize', this.handleResize, this.eventListenerOptions);
        }
      }
      if (prevProps.pin !== this.props.pin) {
        this.handleScroll();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.parent()) {
        this.props.parent().removeEventListener('scroll', this.handleScroll, this.eventListenerOptions);
        this.props.parent().removeEventListener('resize', this.handleResize, this.eventListenerOptions);
      }
      window.removeEventListener('scroll', this.handleScroll, this.eventListenerOptions);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
        userClassName = _props.className,
        Tag = _props.tag,
        divProps = _objectWithoutProperties(_props, ['className', 'tag']);
      delete divProps.onUnpin;
      delete divProps.onPin;
      delete divProps.onUnfix;
      delete divProps.disableInlineStyles;
      delete divProps.disable;
      delete divProps.pin;
      delete divProps.parent;
      delete divProps.children;
      delete divProps.upTolerance;
      delete divProps.downTolerance;
      delete divProps.pinStart;
      delete divProps.calcHeightOnResize;
      var style = divProps.style,
        wrapperStyle = divProps.wrapperStyle,
        rest = _objectWithoutProperties(divProps, ['style', 'wrapperStyle']);
      var innerStyle = {
        position: this.props.disable || this.state.state === 'unfixed' ? 'relative' : 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        WebkitTransform: 'translate3D(0, ' + this.state.translateY + ', 0)',
        MsTransform: 'translate3D(0, ' + this.state.translateY + ', 0)',
        transform: 'translate3D(0, ' + this.state.translateY + ', 0)'
      };
      var className = this.state.className;

      // Don't add css transitions until after we've done the initial
      // negative transform when transitioning from 'unfixed' to 'unpinned'.
      // If we don't do this, the header will flash into view temporarily
      // while it transitions from 0 — -100%.
      if (this.state.animation) {
        innerStyle = _extends({}, innerStyle, {
          WebkitTransition: 'all .2s ease-in-out',
          MozTransition: 'all .2s ease-in-out',
          OTransition: 'all .2s ease-in-out',
          transition: 'all .2s ease-in-out'
        });
        className += ' headroom--scrolled';
      }
      if (!this.props.disableInlineStyles) {
        innerStyle = _extends({}, innerStyle, style);
      } else {
        innerStyle = style;
      }
      var wrapperStyles = _extends({}, wrapperStyle, {
        height: this.state.height ? this.state.height : null
      });
      var wrapperClassName = userClassName ? userClassName + ' headroom-wrapper' : 'headroom-wrapper';
      return _react2.default.createElement(Tag, {
        style: wrapperStyles,
        className: wrapperClassName
      }, _react2.default.createElement('div', _extends({
        ref: this.setRef
      }, rest, {
        style: innerStyle,
        className: className
      }), this.props.children));
    }
  }]);
  return Headroom;
}(_react.Component);
Headroom.propTypes = {
  className: _propTypes2.default.string,
  parent: _propTypes2.default.func,
  children: _propTypes2.default.any.isRequired,
  disableInlineStyles: _propTypes2.default.bool,
  disable: _propTypes2.default.bool,
  pin: _propTypes2.default.bool,
  upTolerance: _propTypes2.default.number,
  downTolerance: _propTypes2.default.number,
  onPin: _propTypes2.default.func,
  onUnpin: _propTypes2.default.func,
  onUnfix: _propTypes2.default.func,
  wrapperStyle: _propTypes2.default.object,
  pinStart: _propTypes2.default.number,
  style: _propTypes2.default.object,
  calcHeightOnResize: _propTypes2.default.bool,
  tag: _propTypes2.default.string
};
Headroom.defaultProps = {
  parent: function parent() {
    return window;
  },
  disableInlineStyles: false,
  disable: false,
  pin: false,
  upTolerance: 5,
  downTolerance: 0,
  onPin: noop,
  onUnpin: noop,
  onUnfix: noop,
  wrapperStyle: {},
  pinStart: 0,
  calcHeightOnResize: true,
  tag: 'div'
};
exports.default = Headroom;

/***/ }),

/***/ "TGEZ":
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(this);

/***/ }),

/***/ "VI+w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "9743e0fa3d340d16a1b6bb3f115fce23.png");

/***/ }),

/***/ "W0B4":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("NS33")();
}

/***/ }),

/***/ "i3YD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "705400e4837a3a1e29c5110366fd8555.svg");

/***/ }),

/***/ "okHz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Brh3");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QyV/");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qinx");




var CDLayout = function CDLayout(_ref) {
  var children = _ref.children;
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    // Add Google Tag Manager script
    var noscript = document.createElement('noscript');
    noscript.setAttribute('id', 'gtmMTX');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-MTXGV3F';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    var isAlreadyAdded = document.getElementById('gtmMTX');
    if (!isAlreadyAdded) document.body.prepend(noscript);
  }, []);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== '/result/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      window.addEventListener('load', function () {
        window.dataLayer.push({
          event: 'page_view',
          page_location: window.location.href
        });
        // Track page view with Google Analytics
        if (window.gtag) {
          window.gtag({
            event: 'page_view',
            page_path: window.location.pathname
          });
        }
      });
      return function () {
        window.removeEventListener('load', function () {});
      };
    }
  }, []);
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].layout
  }, h(_header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].wrapper
  }, children), h(_footer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (CDLayout);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "ox/y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.Match = undefined;
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
var _preact = __webpack_require__("HteQ");
var _preactRouter = __webpack_require__("Y3FI");
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Match = exports.Match = function (_Component) {
  _inherits(Match, _Component);
  function Match() {
    var _temp, _this, _ret;
    _classCallCheck(this, Match);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
      _this.nextUrl = url;
      _this.setState({});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Match.prototype.componentDidMount = function componentDidMount() {
    _preactRouter.subscribers.push(this.update);
  };
  Match.prototype.componentWillUnmount = function componentWillUnmount() {
    _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
  };
  Match.prototype.render = function render(props) {
    var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
      path = url.replace(/\?.+$/, '');
    this.nextUrl = null;
    return props.children({
      url: url,
      path: path,
      matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
    });
  };
  return Match;
}(_preact.Component);
var Link = function Link(_ref) {
  var activeClassName = _ref.activeClassName,
    path = _ref.path,
    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);
  return (0, _preact.h)(Match, {
    path: path || props.href
  }, function (_ref2) {
    var matches = _ref2.matches;
    return (0, _preact.h)(_preactRouter.Link, _extends({}, props, {
      'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ')
    }));
  });
};
exports.Link = Link;
exports.default = Match;
Match.Link = Link;

/***/ }),

/***/ "qinx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _assets_cdimages_visacd_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Mjuc");
/* harmony import */ var _assets_cdimages_mastercd_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VI+w");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rS5q");



var CDFooter = function CDFooter() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].cdfooter
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].cdcontainer
  }, h("p", null, "Canada District is a private immigration company that specializes in helping people make a fresh start in Canada. We provide a range of services to support immigrants as they navigate their new lives in Canada. We will help you improve your language skills, search for jobs, fill out paperwork and guide you until you successfully complete your process."), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].cdfooterDetail
  }, h("span", null, "1-778-807-9840"), h("span", null, "support@canadadistrict.com")), h("p", null), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].cdfooterPay
  }, h("img", {
    src: _assets_cdimages_visacd_webp__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    alt: "card",
    width: 40,
    height: 40
  }), h("img", {
    src: _assets_cdimages_mastercd_png__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "card",
    width: 40,
    height: 40
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (CDFooter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "rQBY":
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__("TGEZ"),
  root = typeof window === 'undefined' ? global : window,
  vendors = ['moz', 'webkit'],
  suffix = 'AnimationFrame',
  raf = root['request' + suffix],
  caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
    id = 0,
    queue = [],
    frameDuration = 1000 / 60;
  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
        next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        var _loop = function _loop() {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        };
        for (var i = 0; i < cp.length; i++) {
          _loop();
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };
  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}
module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

/***/ }),

/***/ "rS5q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"cdfooter":"cdfooter__EBLfo","cdcontainer":"cdcontainer__-9RG0","cdfooterPay":"cdfooterPay__RBUfu","cdfooterDetail":"cdfooterDetail__9JRqO"});

/***/ }),

/***/ "xvDY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "bcd7773dd0a6127216de9e8af9b36b75.svg");

/***/ }),

/***/ "ySiU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"cdheader":"cdheader__hm6vP","cdcontainer":"cdcontainer__KB1RZ","cdheaderContent":"cdheaderContent__QLUYF","cdheaderRight":"cdheaderRight__QIue9","cdheaderRightToggle":"cdheaderRightToggle__ds1m+","cdToggleButton":"cdToggleButton__Lo+G-","cdheaderRightItem":"cdheaderRightItem__VXcfR"});

/***/ })

};;
//# sourceMappingURL=0.chunk.900a8.js.map