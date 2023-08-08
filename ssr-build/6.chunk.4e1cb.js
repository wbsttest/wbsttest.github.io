exports.ids = [6];
exports.modules = {

/***/ "99sY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _assets_home_cdbanner_1_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jJKy");
/* harmony import */ var _assets_cdimages_location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wlqu");
/* harmony import */ var _assets_cdimages_mapp_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Vt0k");
/* harmony import */ var _assets_cdimages_bgMob_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CDjr");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("EbY7");
/* harmony import */ var _styleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VPDT");






var CDBanner = function CDBanner() {
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bannerContent
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bannerContainer
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bannerContentContainer
  }, h("img", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].mapbg,
    src: _assets_cdimages_mapp_webp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    alt: "map",
    "aria-hidden": "true",
    rel: "preload",
    fetchpriority: "high"
  }), h("img", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].mapbg_mobile,
    src: _assets_cdimages_bgMob_png__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    alt: "map",
    "aria-hidden": "true",
    rel: "preload",
    fetchpriority: "high"
  }), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bannerContentLeft
  }, h("h2", null, "Immigrate", " ", h("span", null, "t", h("img", {
    src: _assets_cdimages_location_svg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "location"
  })), " ", "Canada"), h("p", null, "Check your visa options with a representative today."), h(_styleButton__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null)), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bannerContentRight
  }, h("img", {
    src: _assets_home_cdbanner_1_webp__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] // use normal <img> attributes as props
    ,
    alt: "banner",
    width: 717,
    height: 521
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (CDBanner);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "CDjr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "e778b59fc9059aec46820e63293978cf.png");

/***/ }),

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

/***/ "Vt0k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "795959341efb0ae6d4f797d96789137a.webp");

/***/ }),

/***/ "jJKy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "8c61acafa38d9cb2684731f7829fc17a.webp");

/***/ }),

/***/ "wlqu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "5b66e29b78c621d332f6bbfac18f27ac.svg");

/***/ })

};;
//# sourceMappingURL=6.chunk.4e1cb.js.map