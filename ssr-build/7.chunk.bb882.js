exports.ids = [7];
exports.modules = {

/***/ "EbY7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"bannerContentLeft":"bannerContentLeft__6JbCy","bannerContent":"bannerContent__BUWuO","bannerContainer":"bannerContainer__DQgkz","formContainer":"formContainer__StU8y","serviceContentContainer":"serviceContentContainer__VK9nE","bannerContentContainer":"bannerContentContainer__ZLG1e","mapbg":"mapbg__KE87P","formFieldGrid":"formFieldGrid__MwPXX","flagSelect":"flagSelect__SGtLj","mapbg_mobile":"mapbg_mobile__a+m6P","bannerContentRight":"bannerContentRight__vDui2","formSelectContents":"formSelectContents__cBQF9","countryOption":"countryOption__qbUzp","serviceContentLeft":"serviceContentLeft__LiKBQ","bannerVersionContent":"bannerVersionContent__c5Hg3","bannerContentversion":"bannerContentversion__Pvkzt","serviceContentBoxItem":"serviceContentBoxItem__6rYCG","serviceContent":"serviceContent__FdotR","serviceContentRight":"serviceContentRight__gf5mV","formText":"formText__2ZcwX","serviceContentBox":"serviceContentBox__iQ3NE","formBg":"formBg__yMUgX","formBgversion":"formBgversion__XEblB","formContent":"formContent__O0u1j","formContents":"formContents__zCoOe","formCd":"formCd__-TOH6","formMainContent":"formMainContent__nQ96K","formSelectContent":"formSelectContent__eYKyZ","formFieldTel":"formFieldTel__AvCbh","reviewProfileTop":"reviewProfileTop__psC0P","reviewSliderMainContent":"reviewSliderMainContent__gctbw","react-select__indicator-separator":"react-select__indicator-separator__QTE+x","react-select__indicator":"react-select__indicator__f81cl","react-select__dropdown-indicator":"react-select__dropdown-indicator__3wkwl","reviewSlider":"reviewSlider__clJbl","reviewSliderContainer":"reviewSliderContainer__ooBEu","reviewSliderContent":"reviewSliderContent__73uE0","reviewSlide":"reviewSlide__fsmyZ","cd-button":"cd-button__L1Wib","reviewSlideHead":"reviewSlideHead__a+XUZ","reviewProfile":"reviewProfile__2PpKK","reviewProfileDesc":"reviewProfileDesc__E4f2h","reviewHead":"reviewHead__51GbD","reviewStars":"reviewStars__icUlx","reviewSliderBtn":"reviewSliderBtn__HZryO","cdButton":"cdButton__LTy7F","formField":"formField__XcU8V","errorMsg":"errorMsg__t-yhv"});

/***/ }),

/***/ "VPDT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EbY7");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CDStyleButton = function CDStyleButton(_ref) {
  var props = _ref.props;
  var txt = "Check Your Eligibility";
  var getText = function getText() {
    return txt.split("").map(function (t, i) {
      return h("span", {
        key: i
      }, t);
    });
  };
  var ScrollToEligibilitySection = function ScrollToEligibilitySection() {
    var Why = document.getElementById('How');
    if (Why) {
      Why.scrollIntoView();
    } else {
      window.location.href = '#How';
    }
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].cdStyleContent
  }, h("button", _extends({}, props, {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].cdButton,
    type: "submit",
    onClick: ScrollToEligibilitySection
  }), h("div", null, getText())));
};
/* harmony default export */ __webpack_exports__["a"] = (CDStyleButton);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "WyvK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _assets_cdimages_cdbg_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rdxK");
/* harmony import */ var _assets_cdimages_mobile_bg_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jHG6");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EbY7");
/* harmony import */ var _styleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VPDT");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var CDBannerVersion = function CDBannerVersion() {
  var initialScreen = window.innerWidth;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "l"])(initialScreen),
    _useState2 = _slicedToArray(_useState, 2),
    screenSize = _useState2[0],
    setScreenSize = _useState2[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"])(function () {
    setScreenSize(initialScreen);
  }, [initialScreen]);
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].bannerVersionContent
  }, screenSize >= 767 ? h("img", {
    src: _assets_cdimages_cdbg_webp__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "banner"
  }) : h("img", {
    src: _assets_cdimages_mobile_bg_webp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    alt: "mobilebanner"
  }), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].bannerContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].bannerversionContentContainer
  }, h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]["bannerContentLeft"], " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]["bannerContentversion"])
  }, h("h2", null, "Immigrate to Canada"), h("p", null, "Check your visa options with a representative today."), h(_styleButton__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)))));
};
/* harmony default export */ __webpack_exports__["default"] = (CDBannerVersion);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "jHG6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "ef9885d5a5a2131934ead7338daa5744.webp");

/***/ }),

/***/ "rdxK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "e100d1323ffb07185d24c12336f64ac4.webp");

/***/ })

};;
//# sourceMappingURL=7.chunk.bb882.js.map