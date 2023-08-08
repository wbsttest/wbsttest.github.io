exports.ids = [1];
exports.modules = {

/***/ "8yPs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "16854d8b06e0a86608ffe8fe3651d0ec.svg");

/***/ }),

/***/ "9jMb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _assets_thankyou_cdthankyou_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GKof");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("okHz");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PP9n");
/* harmony import */ var _alert_errorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bLYV");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var CDThankYou = function CDThankYou() {
  var urlParams = new URLSearchParams(window.location.search);
  var leadId = urlParams.get('lid');
  var pathNames = typeof window !== 'undefined' && window.location.pathname;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])(),
    _useState2 = _slicedToArray(_useState, 2),
    message = _useState2[0],
    setShowMessage = _useState2[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== '/result/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }, []);
  var unsubscribeLead = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (leadId) {
      try {
        var responseData;
        yield fetch("https://service.canadadistrict.com/forms/unsubscribeLead", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            leadId: leadId
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          return responseData = data;
        });
        var _responseData = responseData,
          status = _responseData.status;
        if (status === 200) {}
      } catch (err) {
        setShowMessage(err.response.data.msg || err.response.data.message || 'Something went wrong');
      }
    });
    return function unsubscribeLead(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    if (leadId) {
      unsubscribeLead(leadId);
    }
  }, [leadId]);
  var closeAction = function closeAction() {
    setShowMessage('');
  };
  return h(_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].thankyou
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].container
  }, h("img", {
    src: _assets_thankyou_cdthankyou_svg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "thankyou"
  }), h("h2", null, "Thank You!"), h("p", null, pathNames === '/thank-you/email_verification/' || pathNames === '/thank-you/email_verification' ? "Your email is confirmed." : pathNames === '/thank-you/unsubscribe/' || pathNames === '/thank-you/unsubscribe' ? "You were successfully removed from our mailing list." : "An immigration professional will contact you shortly to complete\n              your profile evaluation and discuss the next steps."))), message !== '' && message ? h(_alert_errorMessage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    message: message,
    closeAction: closeAction
  }) : null);
};
/* harmony default export */ __webpack_exports__["default"] = (CDThankYou);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "GKof":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "17b30ceb931de43f89f96367eab1912b.svg");

/***/ }),

/***/ "PP9n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"thankyou":"thankyou__swI9+","container":"container__8auha"});

/***/ }),

/***/ "TR5t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"errortoast":"errortoast__ne9ep","errortoastgrid":"errortoastgrid__mhsRp","errortoasticon":"errortoasticon__3Q0lk","errortoastcontent":"errortoastcontent__4dMEL","errortoastclose":"errortoastclose__BMc5p"});

/***/ }),

/***/ "bLYV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bPE1");
/* harmony import */ var _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8yPs");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TR5t");



var ErrorMessage = function ErrorMessage(_ref) {
  var message = _ref.message,
    closeAction = _ref.closeAction;
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoast
  }, h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoastgrid
  }, h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoasticon
  }, h("img", {
    src: _assets_icons_close_svg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "icon"
  })), h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoastcontent
  }, h("p", null, message))), h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].errortoastclose,
    onClick: closeAction,
    role: "presentation"
  }, h("img", {
    src: _assets_icons_cross_svg__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    alt: "icon"
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (ErrorMessage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "bPE1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "00850586a6b565e9aabd0c72e02ab5ea.svg");

/***/ })

};;
//# sourceMappingURL=1.chunk.20833.js.map