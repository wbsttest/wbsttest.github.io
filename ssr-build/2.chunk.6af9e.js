exports.ids = [2];
exports.modules = {

/***/ "+3YS":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+IV6":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+Sw5":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "+bRE":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "0qAl":
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "5WRv":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("iNmH");
var iterableToArray = __webpack_require__("Qatm");
var unsupportedIterableToArray = __webpack_require__("Zhxd");
var nonIterableSpread = __webpack_require__("kluZ");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "6OLs":
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
module.exports = function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
  }
  return r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
      return e[t];
    }.bind(null, a));
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 9);
}([function (e, t) {
  e.exports = __webpack_require__("l8WD");
}, function (e, t, r) {
  var n;
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  !function () {
    "use strict";

    var r = {}.hasOwnProperty;
    function a() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        if (n) {
          var o = _typeof(n);
          if ("string" === o || "number" === o) e.push(n);else if (Array.isArray(n) && n.length) {
            var i = a.apply(null, n);
            i && e.push(i);
          } else if ("object" === o) for (var u in n) r.call(n, u) && n[u] && e.push(u);
        }
      }
      return e.join(" ");
    }
    e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function () {
      return a;
    }.apply(t, [])) || (e.exports = n);
  }();
}, function (e, t, r) {
  (function (t) {
    var r = /^\s+|\s+$/g,
      n = /^[-+]0x[0-9a-f]+$/i,
      a = /^0b[01]+$/i,
      o = /^0o[0-7]+$/i,
      i = parseInt,
      u = "object" == _typeof(t) && t && t.Object === Object && t,
      c = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      s = u || c || Function("return this")(),
      l = Object.prototype.toString,
      f = s.Symbol,
      d = f ? f.prototype : void 0,
      p = d ? d.toString : void 0;
    function h(e) {
      if ("string" == typeof e) return e;
      if (y(e)) return p ? p.call(e) : "";
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    function m(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    function y(e) {
      return "symbol" == _typeof(e) || function (e) {
        return !!e && "object" == _typeof(e);
      }(e) && "[object Symbol]" == l.call(e);
    }
    function b(e) {
      return e ? (e = function (e) {
        if ("number" == typeof e) return e;
        if (y(e)) return NaN;
        if (m(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = m(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(r, "");
        var u = a.test(e);
        return u || o.test(e) ? i(e.slice(2), u ? 2 : 8) : n.test(e) ? NaN : +e;
      }(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0;
    }
    e.exports = function (e, t, r) {
      var n, a, o, i;
      return e = null == (n = e) ? "" : h(n), a = function (e) {
        var t = b(e),
          r = t % 1;
        return t == t ? r ? t - r : t : 0;
      }(r), o = 0, i = e.length, a == a && (void 0 !== i && (a = a <= i ? a : i), void 0 !== o && (a = a >= o ? a : o)), r = a, t = h(t), e.slice(r, r + t.length) == t;
    };
  }).call(this, r(3));
}, function (e, t) {
  var r;
  r = function () {
    return this;
  }();
  try {
    r = r || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
  }
  e.exports = r;
}, function (e, t, r) {
  (function (t) {
    var r = /^\[object .+?Constructor\]$/,
      n = "object" == _typeof(t) && t && t.Object === Object && t,
      a = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      o = n || a || Function("return this")();
    var i,
      u = Array.prototype,
      c = Function.prototype,
      s = Object.prototype,
      l = o["__core-js_shared__"],
      f = (i = /[^.]+$/.exec(l && l.keys && l.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
      d = c.toString,
      p = s.hasOwnProperty,
      h = s.toString,
      m = RegExp("^" + d.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      y = u.splice,
      b = x(o, "Map"),
      g = x(Object, "create");
    function v(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function C(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function _(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function w(e, t) {
      for (var r, n, a = e.length; a--;) if ((r = e[a][0]) === (n = t) || r != r && n != n) return a;
      return -1;
    }
    function S(e) {
      return !(!O(e) || (t = e, f && f in t)) && (function (e) {
        var t = O(e) ? h.call(e) : "";
        return "[object Function]" == t || "[object GeneratorFunction]" == t;
      }(e) || function (e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString) try {
          t = !!(e + "");
        } catch (e) {}
        return t;
      }(e) ? m : r).test(function (e) {
        if (null != e) {
          try {
            return d.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }(e));
      var t;
    }
    function j(e, t) {
      var r,
        n,
        a = e.__data__;
      return ("string" == (n = _typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? a["string" == typeof t ? "string" : "hash"] : a.map;
    }
    function x(e, t) {
      var r = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return S(r) ? r : void 0;
    }
    function N(e, t) {
      if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
      var r = function r() {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return r.cache = o.set(a, i), i;
      };
      return r.cache = new (N.Cache || _)(), r;
    }
    function O(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    v.prototype.clear = function () {
      this.__data__ = g ? g(null) : {};
    }, v.prototype.delete = function (e) {
      return this.has(e) && delete this.__data__[e];
    }, v.prototype.get = function (e) {
      var t = this.__data__;
      if (g) {
        var r = t[e];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return p.call(t, e) ? t[e] : void 0;
    }, v.prototype.has = function (e) {
      var t = this.__data__;
      return g ? void 0 !== t[e] : p.call(t, e);
    }, v.prototype.set = function (e, t) {
      return this.__data__[e] = g && void 0 === t ? "__lodash_hash_undefined__" : t, this;
    }, C.prototype.clear = function () {
      this.__data__ = [];
    }, C.prototype.delete = function (e) {
      var t = this.__data__,
        r = w(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : y.call(t, r, 1), !0);
    }, C.prototype.get = function (e) {
      var t = this.__data__,
        r = w(t, e);
      return r < 0 ? void 0 : t[r][1];
    }, C.prototype.has = function (e) {
      return w(this.__data__, e) > -1;
    }, C.prototype.set = function (e, t) {
      var r = this.__data__,
        n = w(r, e);
      return n < 0 ? r.push([e, t]) : r[n][1] = t, this;
    }, _.prototype.clear = function () {
      this.__data__ = {
        hash: new v(),
        map: new (b || C)(),
        string: new v()
      };
    }, _.prototype.delete = function (e) {
      return j(this, e).delete(e);
    }, _.prototype.get = function (e) {
      return j(this, e).get(e);
    }, _.prototype.has = function (e) {
      return j(this, e).has(e);
    }, _.prototype.set = function (e, t) {
      return j(this, e).set(e, t), this;
    }, N.Cache = _, e.exports = N;
  }).call(this, r(3));
}, function (e, t, r) {
  (function (t) {
    var r = /^\s+|\s+$/g,
      n = /^[-+]0x[0-9a-f]+$/i,
      a = /^0b[01]+$/i,
      o = /^0o[0-7]+$/i,
      i = parseInt,
      u = "object" == _typeof(t) && t && t.Object === Object && t,
      c = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      s = u || c || Function("return this")(),
      l = Object.prototype.toString,
      f = Math.max,
      d = Math.min,
      p = function p() {
        return s.Date.now();
      };
    function h(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    function m(e) {
      if ("number" == typeof e) return e;
      if (function (e) {
        return "symbol" == _typeof(e) || function (e) {
          return !!e && "object" == _typeof(e);
        }(e) && "[object Symbol]" == l.call(e);
      }(e)) return NaN;
      if (h(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = h(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(r, "");
      var u = a.test(e);
      return u || o.test(e) ? i(e.slice(2), u ? 2 : 8) : n.test(e) ? NaN : +e;
    }
    e.exports = function (e, t, r) {
      var n,
        a,
        o,
        i,
        u,
        c,
        s = 0,
        l = !1,
        y = !1,
        b = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function g(t) {
        var r = n,
          o = a;
        return n = a = void 0, s = t, i = e.apply(o, r);
      }
      function v(e) {
        return s = e, u = setTimeout(_, t), l ? g(e) : i;
      }
      function C(e) {
        var r = e - c;
        return void 0 === c || r >= t || r < 0 || y && e - s >= o;
      }
      function _() {
        var e = p();
        if (C(e)) return w(e);
        u = setTimeout(_, function (e) {
          var r = t - (e - c);
          return y ? d(r, o - (e - s)) : r;
        }(e));
      }
      function w(e) {
        return u = void 0, b && n ? g(e) : (n = a = void 0, i);
      }
      function S() {
        var e = p(),
          r = C(e);
        if (n = arguments, a = this, c = e, r) {
          if (void 0 === u) return v(c);
          if (y) return u = setTimeout(_, t), g(c);
        }
        return void 0 === u && (u = setTimeout(_, t)), i;
      }
      return t = m(t) || 0, h(r) && (l = !!r.leading, o = (y = "maxWait" in r) ? f(m(r.maxWait) || 0, t) : o, b = "trailing" in r ? !!r.trailing : b), S.cancel = function () {
        void 0 !== u && clearTimeout(u), s = 0, n = c = a = u = void 0;
      }, S.flush = function () {
        return void 0 === u ? i : w(p());
      }, S;
    };
  }).call(this, r(3));
}, function (e, t, r) {
  (function (e, r) {
    var n = "[object Arguments]",
      a = "[object Map]",
      o = "[object Object]",
      i = "[object Set]",
      u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      c = /^\w*$/,
      s = /^\./,
      l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      f = /\\(\\)?/g,
      d = /^\[object .+?Constructor\]$/,
      p = /^(?:0|[1-9]\d*)$/,
      h = {};
    h["[object Float32Array]"] = h["[object Float64Array]"] = h["[object Int8Array]"] = h["[object Int16Array]"] = h["[object Int32Array]"] = h["[object Uint8Array]"] = h["[object Uint8ClampedArray]"] = h["[object Uint16Array]"] = h["[object Uint32Array]"] = !0, h[n] = h["[object Array]"] = h["[object ArrayBuffer]"] = h["[object Boolean]"] = h["[object DataView]"] = h["[object Date]"] = h["[object Error]"] = h["[object Function]"] = h[a] = h["[object Number]"] = h[o] = h["[object RegExp]"] = h[i] = h["[object String]"] = h["[object WeakMap]"] = !1;
    var m = "object" == _typeof(e) && e && e.Object === Object && e,
      y = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      b = m || y || Function("return this")(),
      g = t && !t.nodeType && t,
      v = g && "object" == _typeof(r) && r && !r.nodeType && r,
      C = v && v.exports === g && m.process,
      _ = function () {
        try {
          return C && C.binding("util");
        } catch (e) {}
      }(),
      w = _ && _.isTypedArray;
    function S(e, t, r, n) {
      var a = -1,
        o = e ? e.length : 0;
      for (n && o && (r = e[++a]); ++a < o;) r = t(r, e[a], a, e);
      return r;
    }
    function j(e, t) {
      for (var r = -1, n = e ? e.length : 0; ++r < n;) if (t(e[r], r, e)) return !0;
      return !1;
    }
    function x(e, t, r, n, a) {
      return a(e, function (e, a, o) {
        r = n ? (n = !1, e) : t(r, e, a, o);
      }), r;
    }
    function N(e) {
      var t = !1;
      if (null != e && "function" != typeof e.toString) try {
        t = !!(e + "");
      } catch (e) {}
      return t;
    }
    function O(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (e, n) {
        r[++t] = [n, e];
      }), r;
    }
    function k(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (e) {
        r[++t] = e;
      }), r;
    }
    var E,
      T,
      I,
      A = Array.prototype,
      D = Function.prototype,
      P = Object.prototype,
      F = b["__core-js_shared__"],
      M = (E = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + E : "",
      R = D.toString,
      L = P.hasOwnProperty,
      z = P.toString,
      B = RegExp("^" + R.call(L).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      G = b.Symbol,
      $ = b.Uint8Array,
      V = P.propertyIsEnumerable,
      K = A.splice,
      U = (T = Object.keys, I = Object, function (e) {
        return T(I(e));
      }),
      q = Ne(b, "DataView"),
      H = Ne(b, "Map"),
      W = Ne(b, "Promise"),
      J = Ne(b, "Set"),
      Z = Ne(b, "WeakMap"),
      Q = Ne(Object, "create"),
      Y = Pe(q),
      X = Pe(H),
      ee = Pe(W),
      te = Pe(J),
      re = Pe(Z),
      ne = G ? G.prototype : void 0,
      ae = ne ? ne.valueOf : void 0,
      oe = ne ? ne.toString : void 0;
    function ie(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function ue(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function ce(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    function se(e) {
      var t = -1,
        r = e ? e.length : 0;
      for (this.__data__ = new ce(); ++t < r;) this.add(e[t]);
    }
    function le(e) {
      this.__data__ = new ue(e);
    }
    function fe(e, t) {
      var r = Le(e) || Re(e) ? function (e, t) {
          for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
          return n;
        }(e.length, String) : [],
        n = r.length,
        a = !!n;
      for (var o in e) !t && !L.call(e, o) || a && ("length" == o || ke(o, n)) || r.push(o);
      return r;
    }
    function de(e, t) {
      for (var r = e.length; r--;) if (Me(e[r][0], t)) return r;
      return -1;
    }
    ie.prototype.clear = function () {
      this.__data__ = Q ? Q(null) : {};
    }, ie.prototype.delete = function (e) {
      return this.has(e) && delete this.__data__[e];
    }, ie.prototype.get = function (e) {
      var t = this.__data__;
      if (Q) {
        var r = t[e];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return L.call(t, e) ? t[e] : void 0;
    }, ie.prototype.has = function (e) {
      var t = this.__data__;
      return Q ? void 0 !== t[e] : L.call(t, e);
    }, ie.prototype.set = function (e, t) {
      return this.__data__[e] = Q && void 0 === t ? "__lodash_hash_undefined__" : t, this;
    }, ue.prototype.clear = function () {
      this.__data__ = [];
    }, ue.prototype.delete = function (e) {
      var t = this.__data__,
        r = de(t, e);
      return !(r < 0) && (r == t.length - 1 ? t.pop() : K.call(t, r, 1), !0);
    }, ue.prototype.get = function (e) {
      var t = this.__data__,
        r = de(t, e);
      return r < 0 ? void 0 : t[r][1];
    }, ue.prototype.has = function (e) {
      return de(this.__data__, e) > -1;
    }, ue.prototype.set = function (e, t) {
      var r = this.__data__,
        n = de(r, e);
      return n < 0 ? r.push([e, t]) : r[n][1] = t, this;
    }, ce.prototype.clear = function () {
      this.__data__ = {
        hash: new ie(),
        map: new (H || ue)(),
        string: new ie()
      };
    }, ce.prototype.delete = function (e) {
      return xe(this, e).delete(e);
    }, ce.prototype.get = function (e) {
      return xe(this, e).get(e);
    }, ce.prototype.has = function (e) {
      return xe(this, e).has(e);
    }, ce.prototype.set = function (e, t) {
      return xe(this, e).set(e, t), this;
    }, se.prototype.add = se.prototype.push = function (e) {
      return this.__data__.set(e, "__lodash_hash_undefined__"), this;
    }, se.prototype.has = function (e) {
      return this.__data__.has(e);
    }, le.prototype.clear = function () {
      this.__data__ = new ue();
    }, le.prototype.delete = function (e) {
      return this.__data__.delete(e);
    }, le.prototype.get = function (e) {
      return this.__data__.get(e);
    }, le.prototype.has = function (e) {
      return this.__data__.has(e);
    }, le.prototype.set = function (e, t) {
      var r = this.__data__;
      if (r instanceof ue) {
        var n = r.__data__;
        if (!H || n.length < 199) return n.push([e, t]), this;
        r = this.__data__ = new ce(n);
      }
      return r.set(e, t), this;
    };
    var pe,
      he,
      me = (pe = function pe(e, t) {
        return e && ye(e, t, qe);
      }, function (e, t) {
        if (null == e) return e;
        if (!ze(e)) return pe(e, t);
        for (var r = e.length, n = he ? r : -1, a = Object(e); (he ? n-- : ++n < r) && !1 !== t(a[n], n, a););
        return e;
      }),
      ye = function (e) {
        return function (t, r, n) {
          for (var a = -1, o = Object(t), i = n(t), u = i.length; u--;) {
            var c = i[e ? u : ++a];
            if (!1 === r(o[c], c, o)) break;
          }
          return t;
        };
      }();
    function be(e, t) {
      for (var r = 0, n = (t = Ee(t, e) ? [t] : Se(t)).length; null != e && r < n;) e = e[De(t[r++])];
      return r && r == n ? e : void 0;
    }
    function ge(e, t) {
      return null != e && t in Object(e);
    }
    function ve(e, t, r, u, c) {
      return e === t || (null == e || null == t || !$e(e) && !Ve(t) ? e != e && t != t : function (e, t, r, u, c, s) {
        var l = Le(e),
          f = Le(t),
          d = "[object Array]",
          p = "[object Array]";
        l || (d = (d = Oe(e)) == n ? o : d);
        f || (p = (p = Oe(t)) == n ? o : p);
        var h = d == o && !N(e),
          m = p == o && !N(t),
          y = d == p;
        if (y && !h) return s || (s = new le()), l || Ue(e) ? je(e, t, r, u, c, s) : function (e, t, r, n, o, u, c) {
          switch (r) {
            case "[object DataView]":
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              e = e.buffer, t = t.buffer;
            case "[object ArrayBuffer]":
              return !(e.byteLength != t.byteLength || !n(new $(e), new $(t)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return Me(+e, +t);
            case "[object Error]":
              return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
              return e == t + "";
            case a:
              var s = O;
            case i:
              var l = 2 & u;
              if (s || (s = k), e.size != t.size && !l) return !1;
              var f = c.get(e);
              if (f) return f == t;
              u |= 1, c.set(e, t);
              var d = je(s(e), s(t), n, o, u, c);
              return c.delete(e), d;
            case "[object Symbol]":
              if (ae) return ae.call(e) == ae.call(t);
          }
          return !1;
        }(e, t, d, r, u, c, s);
        if (!(2 & c)) {
          var b = h && L.call(e, "__wrapped__"),
            g = m && L.call(t, "__wrapped__");
          if (b || g) {
            var v = b ? e.value() : e,
              C = g ? t.value() : t;
            return s || (s = new le()), r(v, C, u, c, s);
          }
        }
        if (!y) return !1;
        return s || (s = new le()), function (e, t, r, n, a, o) {
          var i = 2 & a,
            u = qe(e),
            c = u.length,
            s = qe(t).length;
          if (c != s && !i) return !1;
          var l = c;
          for (; l--;) {
            var f = u[l];
            if (!(i ? f in t : L.call(t, f))) return !1;
          }
          var d = o.get(e);
          if (d && o.get(t)) return d == t;
          var p = !0;
          o.set(e, t), o.set(t, e);
          var h = i;
          for (; ++l < c;) {
            f = u[l];
            var m = e[f],
              y = t[f];
            if (n) var b = i ? n(y, m, f, t, e, o) : n(m, y, f, e, t, o);
            if (!(void 0 === b ? m === y || r(m, y, n, a, o) : b)) {
              p = !1;
              break;
            }
            h || (h = "constructor" == f);
          }
          if (p && !h) {
            var g = e.constructor,
              v = t.constructor;
            g == v || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof v && v instanceof v || (p = !1);
          }
          return o.delete(e), o.delete(t), p;
        }(e, t, r, u, c, s);
      }(e, t, ve, r, u, c));
    }
    function Ce(e) {
      return !(!$e(e) || function (e) {
        return !!M && M in e;
      }(e)) && (Be(e) || N(e) ? B : d).test(Pe(e));
    }
    function _e(e) {
      return "function" == typeof e ? e : null == e ? He : "object" == _typeof(e) ? Le(e) ? function (e, t) {
        if (Ee(e) && Te(t)) return Ie(De(e), t);
        return function (r) {
          var n = function (e, t, r) {
            var n = null == e ? void 0 : be(e, t);
            return void 0 === n ? r : n;
          }(r, e);
          return void 0 === n && n === t ? function (e, t) {
            return null != e && function (e, t, r) {
              t = Ee(t, e) ? [t] : Se(t);
              var n,
                a = -1,
                o = t.length;
              for (; ++a < o;) {
                var i = De(t[a]);
                if (!(n = null != e && r(e, i))) break;
                e = e[i];
              }
              if (n) return n;
              return !!(o = e ? e.length : 0) && Ge(o) && ke(i, o) && (Le(e) || Re(e));
            }(e, t, ge);
          }(r, e) : ve(t, n, void 0, 3);
        };
      }(e[0], e[1]) : function (e) {
        var t = function (e) {
          var t = qe(e),
            r = t.length;
          for (; r--;) {
            var n = t[r],
              a = e[n];
            t[r] = [n, a, Te(a)];
          }
          return t;
        }(e);
        if (1 == t.length && t[0][2]) return Ie(t[0][0], t[0][1]);
        return function (r) {
          return r === e || function (e, t, r, n) {
            var a = r.length,
              o = a,
              i = !n;
            if (null == e) return !o;
            for (e = Object(e); a--;) {
              var u = r[a];
              if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
            }
            for (; ++a < o;) {
              var c = (u = r[a])[0],
                s = e[c],
                l = u[1];
              if (i && u[2]) {
                if (void 0 === s && !(c in e)) return !1;
              } else {
                var f = new le();
                if (n) var d = n(s, l, c, e, t, f);
                if (!(void 0 === d ? ve(l, s, n, 3, f) : d)) return !1;
              }
            }
            return !0;
          }(r, e, t);
        };
      }(e) : Ee(t = e) ? (r = De(t), function (e) {
        return null == e ? void 0 : e[r];
      }) : function (e) {
        return function (t) {
          return be(t, e);
        };
      }(t);
      var t, r;
    }
    function we(e) {
      if (r = (t = e) && t.constructor, n = "function" == typeof r && r.prototype || P, t !== n) return U(e);
      var t,
        r,
        n,
        a = [];
      for (var o in Object(e)) L.call(e, o) && "constructor" != o && a.push(o);
      return a;
    }
    function Se(e) {
      return Le(e) ? e : Ae(e);
    }
    function je(e, t, r, n, a, o) {
      var i = 2 & a,
        u = e.length,
        c = t.length;
      if (u != c && !(i && c > u)) return !1;
      var s = o.get(e);
      if (s && o.get(t)) return s == t;
      var l = -1,
        f = !0,
        d = 1 & a ? new se() : void 0;
      for (o.set(e, t), o.set(t, e); ++l < u;) {
        var p = e[l],
          h = t[l];
        if (n) var m = i ? n(h, p, l, t, e, o) : n(p, h, l, e, t, o);
        if (void 0 !== m) {
          if (m) continue;
          f = !1;
          break;
        }
        if (d) {
          if (!j(t, function (e, t) {
            if (!d.has(t) && (p === e || r(p, e, n, a, o))) return d.add(t);
          })) {
            f = !1;
            break;
          }
        } else if (p !== h && !r(p, h, n, a, o)) {
          f = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), f;
    }
    function xe(e, t) {
      var r,
        n,
        a = e.__data__;
      return ("string" == (n = _typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? a["string" == typeof t ? "string" : "hash"] : a.map;
    }
    function Ne(e, t) {
      var r = function (e, t) {
        return null == e ? void 0 : e[t];
      }(e, t);
      return Ce(r) ? r : void 0;
    }
    var Oe = function Oe(e) {
      return z.call(e);
    };
    function ke(e, t) {
      return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || p.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function Ee(e, t) {
      if (Le(e)) return !1;
      var r = _typeof(e);
      return !("number" != r && "symbol" != r && "boolean" != r && null != e && !Ke(e)) || c.test(e) || !u.test(e) || null != t && e in Object(t);
    }
    function Te(e) {
      return e == e && !$e(e);
    }
    function Ie(e, t) {
      return function (r) {
        return null != r && r[e] === t && (void 0 !== t || e in Object(r));
      };
    }
    (q && "[object DataView]" != Oe(new q(new ArrayBuffer(1))) || H && Oe(new H()) != a || W && "[object Promise]" != Oe(W.resolve()) || J && Oe(new J()) != i || Z && "[object WeakMap]" != Oe(new Z())) && (Oe = function Oe(e) {
      var t = z.call(e),
        r = t == o ? e.constructor : void 0,
        n = r ? Pe(r) : void 0;
      if (n) switch (n) {
        case Y:
          return "[object DataView]";
        case X:
          return a;
        case ee:
          return "[object Promise]";
        case te:
          return i;
        case re:
          return "[object WeakMap]";
      }
      return t;
    });
    var Ae = Fe(function (e) {
      var t;
      e = null == (t = e) ? "" : function (e) {
        if ("string" == typeof e) return e;
        if (Ke(e)) return oe ? oe.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      }(t);
      var r = [];
      return s.test(e) && r.push(""), e.replace(l, function (e, t, n, a) {
        r.push(n ? a.replace(f, "$1") : t || e);
      }), r;
    });
    function De(e) {
      if ("string" == typeof e || Ke(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    function Pe(e) {
      if (null != e) {
        try {
          return R.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    }
    function Fe(e, t) {
      if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
      var r = function r() {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return r.cache = o.set(a, i), i;
      };
      return r.cache = new (Fe.Cache || ce)(), r;
    }
    function Me(e, t) {
      return e === t || e != e && t != t;
    }
    function Re(e) {
      return function (e) {
        return Ve(e) && ze(e);
      }(e) && L.call(e, "callee") && (!V.call(e, "callee") || z.call(e) == n);
    }
    Fe.Cache = ce;
    var Le = Array.isArray;
    function ze(e) {
      return null != e && Ge(e.length) && !Be(e);
    }
    function Be(e) {
      var t = $e(e) ? z.call(e) : "";
      return "[object Function]" == t || "[object GeneratorFunction]" == t;
    }
    function Ge(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    }
    function $e(e) {
      var t = _typeof(e);
      return !!e && ("object" == t || "function" == t);
    }
    function Ve(e) {
      return !!e && "object" == _typeof(e);
    }
    function Ke(e) {
      return "symbol" == _typeof(e) || Ve(e) && "[object Symbol]" == z.call(e);
    }
    var Ue = w ? function (e) {
      return function (t) {
        return e(t);
      };
    }(w) : function (e) {
      return Ve(e) && Ge(e.length) && !!h[z.call(e)];
    };
    function qe(e) {
      return ze(e) ? fe(e) : we(e);
    }
    function He(e) {
      return e;
    }
    r.exports = function (e, t, r) {
      var n = Le(e) ? S : x,
        a = arguments.length < 3;
      return n(e, _e(t), r, a, me);
    };
  }).call(this, r(3), r(7)(e));
}, function (e, t) {
  e.exports = function (e) {
    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function get() {
        return e.l;
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function get() {
        return e.i;
      }
    }), e.webpackPolyfill = 1), e;
  };
}, function (e, t) {
  String.prototype.padEnd || (String.prototype.padEnd = function (e, t) {
    return e >>= 0, t = String(void 0 !== t ? t : " "), this.length > e ? String(this) : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)), String(this) + t.slice(0, e));
  });
}, function (e, t, r) {
  "use strict";

  function n(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  function a(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
  }
  function o(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
      }
    }(e) || a(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }
  function i(e) {
    if (Array.isArray(e)) return e;
  }
  function u() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function c(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function s(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function l(e) {
    return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }
  function f(e) {
    return (f = "function" == typeof Symbol && "symbol" === l(Symbol.iterator) ? function (e) {
      return l(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : l(e);
    })(e);
  }
  function d(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function p(e) {
    return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function h(e, t) {
    return (h = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }
  r.r(t);
  var m = r(0),
    y = r.n(m),
    b = r(5),
    g = r.n(b),
    v = r(4),
    C = r.n(v),
    _ = r(6),
    w = r.n(_),
    S = r(2),
    j = r.n(S),
    x = r(1),
    N = r.n(x);
  r(8);
  function O(e, t) {
    return i(e) || function (e, t) {
      var r = [],
        n = !0,
        a = !1,
        o = void 0;
      try {
        for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
      } catch (e) {
        a = !0, o = e;
      } finally {
        try {
          n || null == u.return || u.return();
        } finally {
          if (a) throw o;
        }
      }
      return r;
    }(e, t) || u();
  }
  var k = [["Afghanistan", ["asia"], "af", "93"], ["Albania", ["europe"], "al", "355"], ["Algeria", ["africa", "north-africa"], "dz", "213"], ["Andorra", ["europe"], "ad", "376"], ["Angola", ["africa"], "ao", "244"], ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"], ["Argentina", ["america", "south-america"], "ar", "54", "(..) ........", 0, ["11", "221", "223", "261", "264", "2652", "280", "2905", "291", "2920", "2966", "299", "341", "342", "343", "351", "376", "379", "381", "3833", "385", "387", "388"]], ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"], ["Aruba", ["america", "carribean"], "aw", "297"], ["Australia", ["oceania"], "au", "61", "(..) .... ....", 0, ["2", "3", "4", "7", "8", "02", "03", "04", "07", "08"]], ["Austria", ["europe", "eu-union"], "at", "43"], ["Azerbaijan", ["asia", "ex-ussr"], "az", "994", "(..) ... .. .."], ["Bahamas", ["america", "carribean"], "bs", "1242"], ["Bahrain", ["middle-east"], "bh", "973"], ["Bangladesh", ["asia"], "bd", "880"], ["Barbados", ["america", "carribean"], "bb", "1246"], ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."], ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."], ["Belize", ["america", "central-america"], "bz", "501"], ["Benin", ["africa"], "bj", "229"], ["Bhutan", ["asia"], "bt", "975"], ["Bolivia", ["america", "south-america"], "bo", "591"], ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"], ["Botswana", ["africa"], "bw", "267"], ["Brazil", ["america", "south-america"], "br", "55", "(..) ........."], ["British Indian Ocean Territory", ["asia"], "io", "246"], ["Brunei", ["asia"], "bn", "673"], ["Bulgaria", ["europe", "eu-union"], "bg", "359"], ["Burkina Faso", ["africa"], "bf", "226"], ["Burundi", ["africa"], "bi", "257"], ["Cambodia", ["asia"], "kh", "855"], ["Cameroon", ["africa"], "cm", "237"], ["Canada", ["america", "north-america"], "ca", "1", "(...) ...-....", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", ["africa"], "cv", "238"], ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1], ["Central African Republic", ["africa"], "cf", "236"], ["Chad", ["africa"], "td", "235"], ["Chile", ["america", "south-america"], "cl", "56"], ["China", ["asia"], "cn", "86", "..-........."], ["Colombia", ["america", "south-america"], "co", "57", "... ... ...."], ["Comoros", ["africa"], "km", "269"], ["Congo", ["africa"], "cd", "243"], ["Congo", ["africa"], "cg", "242"], ["Costa Rica", ["america", "central-america"], "cr", "506", "....-...."], ["Côte d’Ivoire", ["africa"], "ci", "225", ".. .. .. .."], ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"], ["Cuba", ["america", "carribean"], "cu", "53"], ["Curaçao", ["america", "carribean"], "cw", "599", "", 0], ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"], ["Czech Republic", ["europe", "eu-union"], "cz", "420", "... ... ..."], ["Denmark", ["europe", "eu-union", "baltic"], "dk", "45", ".. .. .. .."], ["Djibouti", ["africa"], "dj", "253"], ["Dominica", ["america", "carribean"], "dm", "1767"], ["Dominican Republic", ["america", "carribean"], "do", "1", "", 2, ["809", "829", "849"]], ["Ecuador", ["america", "south-america"], "ec", "593"], ["Egypt", ["africa", "north-africa"], "eg", "20"], ["El Salvador", ["america", "central-america"], "sv", "503", "....-...."], ["Equatorial Guinea", ["africa"], "gq", "240"], ["Eritrea", ["africa"], "er", "291"], ["Estonia", ["europe", "eu-union", "ex-ussr", "baltic"], "ee", "372", ".... ......"], ["Ethiopia", ["africa"], "et", "251"], ["Fiji", ["oceania"], "fj", "679"], ["Finland", ["europe", "eu-union", "baltic"], "fi", "358", ".. ... .. .."], ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."], ["French Guiana", ["america", "south-america"], "gf", "594"], ["French Polynesia", ["oceania"], "pf", "689"], ["Gabon", ["africa"], "ga", "241"], ["Gambia", ["africa"], "gm", "220"], ["Georgia", ["asia", "ex-ussr"], "ge", "995"], ["Germany", ["europe", "eu-union", "baltic"], "de", "49", ".... ........"], ["Ghana", ["africa"], "gh", "233"], ["Greece", ["europe", "eu-union"], "gr", "30"], ["Grenada", ["america", "carribean"], "gd", "1473"], ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0], ["Guam", ["oceania"], "gu", "1671"], ["Guatemala", ["america", "central-america"], "gt", "502", "....-...."], ["Guinea", ["africa"], "gn", "224"], ["Guinea-Bissau", ["africa"], "gw", "245"], ["Guyana", ["america", "south-america"], "gy", "592"], ["Haiti", ["america", "carribean"], "ht", "509", "....-...."], ["Honduras", ["america", "central-america"], "hn", "504"], ["Hong Kong", ["asia"], "hk", "852", ".... ...."], ["Hungary", ["europe", "eu-union"], "hu", "36"], ["Iceland", ["europe"], "is", "354", "... ...."], ["India", ["asia"], "in", "91", ".....-....."], ["Indonesia", ["asia"], "id", "62"], ["Iran", ["middle-east"], "ir", "98", "... ... ...."], ["Iraq", ["middle-east"], "iq", "964"], ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."], ["Israel", ["middle-east"], "il", "972", "... ... ...."], ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0], ["Jamaica", ["america", "carribean"], "jm", "1876"], ["Japan", ["asia"], "jp", "81", ".. .... ...."], ["Jordan", ["middle-east"], "jo", "962"], ["Kazakhstan", ["asia", "ex-ussr"], "kz", "7", "... ...-..-..", 1, ["310", "311", "312", "313", "315", "318", "321", "324", "325", "326", "327", "336", "7172", "73622"]], ["Kenya", ["africa"], "ke", "254"], ["Kiribati", ["oceania"], "ki", "686"], ["Kosovo", ["europe", "ex-yugos"], "xk", "383"], ["Kuwait", ["middle-east"], "kw", "965"], ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."], ["Laos", ["asia"], "la", "856"], ["Latvia", ["europe", "eu-union", "ex-ussr", "baltic"], "lv", "371", ".. ... ..."], ["Lebanon", ["middle-east"], "lb", "961"], ["Lesotho", ["africa"], "ls", "266"], ["Liberia", ["africa"], "lr", "231"], ["Libya", ["africa", "north-africa"], "ly", "218"], ["Liechtenstein", ["europe"], "li", "423"], ["Lithuania", ["europe", "eu-union", "ex-ussr", "baltic"], "lt", "370"], ["Luxembourg", ["europe", "eu-union"], "lu", "352"], ["Macau", ["asia"], "mo", "853"], ["Macedonia", ["europe", "ex-yugos"], "mk", "389"], ["Madagascar", ["africa"], "mg", "261"], ["Malawi", ["africa"], "mw", "265"], ["Malaysia", ["asia"], "my", "60", "..-....-...."], ["Maldives", ["asia"], "mv", "960"], ["Mali", ["africa"], "ml", "223"], ["Malta", ["europe", "eu-union"], "mt", "356"], ["Marshall Islands", ["oceania"], "mh", "692"], ["Martinique", ["america", "carribean"], "mq", "596"], ["Mauritania", ["africa"], "mr", "222"], ["Mauritius", ["africa"], "mu", "230"], ["Mexico", ["america", "central-america"], "mx", "52", "... ... ....", 0, ["55", "81", "33", "656", "664", "998", "774", "229"]], ["Micronesia", ["oceania"], "fm", "691"], ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."], ["Monaco", ["europe"], "mc", "377"], ["Mongolia", ["asia"], "mn", "976"], ["Montenegro", ["europe", "ex-yugos"], "me", "382"], ["Morocco", ["africa", "north-africa"], "ma", "212"], ["Mozambique", ["africa"], "mz", "258"], ["Myanmar", ["asia"], "mm", "95"], ["Namibia", ["africa"], "na", "264"], ["Nauru", ["africa"], "nr", "674"], ["Nepal", ["asia"], "np", "977"], ["Netherlands", ["europe", "eu-union"], "nl", "31", ".. ........"], ["New Caledonia", ["oceania"], "nc", "687"], ["New Zealand", ["oceania"], "nz", "64", "...-...-...."], ["Nicaragua", ["america", "central-america"], "ni", "505"], ["Niger", ["africa"], "ne", "227"], ["Nigeria", ["africa"], "ng", "234"], ["North Korea", ["asia"], "kp", "850"], ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."], ["Oman", ["middle-east"], "om", "968"], ["Pakistan", ["asia"], "pk", "92", "...-......."], ["Palau", ["oceania"], "pw", "680"], ["Palestine", ["middle-east"], "ps", "970"], ["Panama", ["america", "central-america"], "pa", "507"], ["Papua New Guinea", ["oceania"], "pg", "675"], ["Paraguay", ["america", "south-america"], "py", "595"], ["Peru", ["america", "south-america"], "pe", "51"], ["Philippines", ["asia"], "ph", "63", ".... ......."], ["Poland", ["europe", "eu-union", "baltic"], "pl", "48", "...-...-..."], ["Portugal", ["europe", "eu-union"], "pt", "351"], ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]], ["Qatar", ["middle-east"], "qa", "974"], ["Réunion", ["africa"], "re", "262"], ["Romania", ["europe", "eu-union"], "ro", "40"], ["Russia", ["europe", "asia", "ex-ussr", "baltic"], "ru", "7", "(...) ...-..-..", 0], ["Rwanda", ["africa"], "rw", "250"], ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"], ["Saint Lucia", ["america", "carribean"], "lc", "1758"], ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"], ["Samoa", ["oceania"], "ws", "685"], ["San Marino", ["europe"], "sm", "378"], ["São Tomé and Príncipe", ["africa"], "st", "239"], ["Saudi Arabia", ["middle-east"], "sa", "966"], ["Senegal", ["africa"], "sn", "221"], ["Serbia", ["europe", "ex-yugos"], "rs", "381"], ["Seychelles", ["africa"], "sc", "248"], ["Sierra Leone", ["africa"], "sl", "232"], ["Singapore", ["asia"], "sg", "65", "....-...."], ["Slovakia", ["europe", "eu-union"], "sk", "421"], ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"], ["Solomon Islands", ["oceania"], "sb", "677"], ["Somalia", ["africa"], "so", "252"], ["South Africa", ["africa"], "za", "27"], ["South Korea", ["asia"], "kr", "82", "... .... ...."], ["South Sudan", ["africa", "north-africa"], "ss", "211"], ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."], ["Sri Lanka", ["asia"], "lk", "94"], ["Sudan", ["africa"], "sd", "249"], ["Suriname", ["america", "south-america"], "sr", "597"], ["Swaziland", ["africa"], "sz", "268"], ["Sweden", ["europe", "eu-union", "baltic"], "se", "46", "(...) ...-..."], ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."], ["Syria", ["middle-east"], "sy", "963"], ["Taiwan", ["asia"], "tw", "886"], ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"], ["Tanzania", ["africa"], "tz", "255"], ["Thailand", ["asia"], "th", "66"], ["Timor-Leste", ["asia"], "tl", "670"], ["Togo", ["africa"], "tg", "228"], ["Tonga", ["oceania"], "to", "676"], ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"], ["Tunisia", ["africa", "north-africa"], "tn", "216"], ["Turkey", ["europe"], "tr", "90", "... ... .. .."], ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"], ["Tuvalu", ["asia"], "tv", "688"], ["Uganda", ["africa"], "ug", "256"], ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."], ["United Arab Emirates", ["middle-east"], "ae", "971"], ["United Kingdom", ["europe", "eu-union"], "gb", "44", ".... ......"], ["United States", ["america", "north-america"], "us", "1", "(...) ...-....", 0, ["907", "205", "251", "256", "334", "479", "501", "870", "480", "520", "602", "623", "928", "209", "213", "310", "323", "408", "415", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "303", "719", "970", "203", "860", "202", "302", "239", "305", "321", "352", "386", "407", "561", "727", "772", "813", "850", "863", "904", "941", "954", "229", "404", "478", "706", "770", "912", "808", "319", "515", "563", "641", "712", "208", "217", "309", "312", "618", "630", "708", "773", "815", "847", "219", "260", "317", "574", "765", "812", "316", "620", "785", "913", "270", "502", "606", "859", "225", "318", "337", "504", "985", "413", "508", "617", "781", "978", "301", "410", "207", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "989", "218", "320", "507", "612", "651", "763", "952", "314", "417", "573", "636", "660", "816", "228", "601", "662", "406", "252", "336", "704", "828", "910", "919", "701", "308", "402", "603", "201", "609", "732", "856", "908", "973", "505", "575", "702", "775", "212", "315", "516", "518", "585", "607", "631", "716", "718", "845", "914", "216", "330", "419", "440", "513", "614", "740", "937", "405", "580", "918", "503", "541", "215", "412", "570", "610", "717", "724", "814", "401", "803", "843", "864", "605", "423", "615", "731", "865", "901", "931", "210", "214", "254", "281", "325", "361", "409", "432", "512", "713", "806", "817", "830", "903", "915", "936", "940", "956", "972", "979", "435", "801", "276", "434", "540", "703", "757", "804", "802", "206", "253", "360", "425", "509", "262", "414", "608", "715", "920", "304", "307"]], ["Uruguay", ["america", "south-america"], "uy", "598"], ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."], ["Vanuatu", ["oceania"], "vu", "678"], ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1], ["Venezuela", ["america", "south-america"], "ve", "58"], ["Vietnam", ["asia"], "vn", "84"], ["Yemen", ["middle-east"], "ye", "967"], ["Zambia", ["africa"], "zm", "260"], ["Zimbabwe", ["africa"], "zw", "263"]],
    E = [["American Samoa", ["oceania"], "as", "1684"], ["Anguilla", ["america", "carribean"], "ai", "1264"], ["Bermuda", ["america", "north-america"], "bm", "1441"], ["British Virgin Islands", ["america", "carribean"], "vg", "1284"], ["Cayman Islands", ["america", "carribean"], "ky", "1345"], ["Cook Islands", ["oceania"], "ck", "682"], ["Falkland Islands", ["america", "south-america"], "fk", "500"], ["Faroe Islands", ["europe"], "fo", "298"], ["Gibraltar", ["europe"], "gi", "350"], ["Greenland", ["america"], "gl", "299"], ["Jersey", ["europe", "eu-union"], "je", "44", ".... ......"], ["Montserrat", ["america", "carribean"], "ms", "1664"], ["Niue", ["asia"], "nu", "683"], ["Norfolk Island", ["oceania"], "nf", "672"], ["Northern Mariana Islands", ["oceania"], "mp", "1670"], ["Saint Barthélemy", ["america", "carribean"], "bl", "590", "", 1], ["Saint Helena", ["africa"], "sh", "290"], ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2], ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"], ["Sint Maarten", ["america", "carribean"], "sx", "1721"], ["Tokelau", ["oceania"], "tk", "690"], ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"], ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"], ["Wallis and Futuna", ["oceania"], "wf", "681"]];
  function T(e, t, r, n, a) {
    return !r || a ? e + "".padEnd(t.length, ".") + " " + n : e + "".padEnd(t.length, ".") + " " + r;
  }
  function I(e, t, r, a, i) {
    var u,
      c,
      s = [];
    return c = !0 === t, [(u = []).concat.apply(u, o(e.map(function (e) {
      var o = {
          name: e[0],
          regions: e[1],
          iso2: e[2],
          countryCode: e[3],
          dialCode: e[3],
          format: T(r, e[3], e[4], a, i),
          priority: e[5] || 0
        },
        u = [];
      return e[6] && e[6].map(function (t) {
        var r = function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            }))), a.forEach(function (t) {
              n(e, t, r[t]);
            });
          }
          return e;
        }({}, o);
        r.dialCode = e[3] + t, r.isAreaCode = !0, r.areaCodeLength = t.length, u.push(r);
      }), u.length > 0 ? (o.mainCode = !0, c || "Array" === t.constructor.name && t.includes(e[2]) ? (o.hasAreaCodes = !0, [o].concat(u)) : (s = s.concat(u), [o])) : [o];
    }))), s];
  }
  function A(e, t, r, n) {
    if (null !== r) {
      var a = Object.keys(r),
        o = Object.values(r);
      a.forEach(function (r, a) {
        if (n) return e.push([r, o[a]]);
        var i = e.findIndex(function (e) {
          return e[0] === r;
        });
        if (-1 === i) {
          var u = [r];
          u[t] = o[a], e.push(u);
        } else e[i][t] = o[a];
      });
    }
  }
  function D(e, t) {
    return 0 === t.length ? e : e.map(function (e) {
      var r = t.findIndex(function (t) {
        return t[0] === e[2];
      });
      if (-1 === r) return e;
      var n = t[r];
      return n[1] && (e[4] = n[1]), n[3] && (e[5] = n[3]), n[2] && (e[6] = n[2]), e;
    });
  }
  var P = function e(t, r, n, a, i, u, s, l, f, d, p, h, m, y) {
      c(this, e), this.filterRegions = function (e, t) {
        if ("string" == typeof e) {
          var r = e;
          return t.filter(function (e) {
            return e.regions.some(function (e) {
              return e === r;
            });
          });
        }
        return t.filter(function (t) {
          return e.map(function (e) {
            return t.regions.some(function (t) {
              return t === e;
            });
          }).some(function (e) {
            return e;
          });
        });
      }, this.sortTerritories = function (e, t) {
        var r = [].concat(o(e), o(t));
        return r.sort(function (e, t) {
          return e.name < t.name ? -1 : e.name > t.name ? 1 : 0;
        }), r;
      }, this.getFilteredCountryList = function (e, t, r) {
        return 0 === e.length ? t : r ? e.map(function (e) {
          var r = t.find(function (t) {
            return t.iso2 === e;
          });
          if (r) return r;
        }).filter(function (e) {
          return e;
        }) : t.filter(function (t) {
          return e.some(function (e) {
            return e === t.iso2;
          });
        });
      }, this.localizeCountries = function (e, t, r) {
        for (var n = 0; n < e.length; n++) void 0 !== t[e[n].iso2] ? e[n].localName = t[e[n].iso2] : void 0 !== t[e[n].name] && (e[n].localName = t[e[n].name]);
        return r || e.sort(function (e, t) {
          return e.localName < t.localName ? -1 : e.localName > t.localName ? 1 : 0;
        }), e;
      }, this.getCustomAreas = function (e, t) {
        for (var r = [], n = 0; n < t.length; n++) {
          var a = JSON.parse(JSON.stringify(e));
          a.dialCode += t[n], r.push(a);
        }
        return r;
      }, this.excludeCountries = function (e, t) {
        return 0 === t.length ? e : e.filter(function (e) {
          return !t.includes(e.iso2);
        });
      };
      var b = function (e, t, r) {
          var n = [];
          return A(n, 1, e, !0), A(n, 3, t), A(n, 2, r), n;
        }(l, f, d),
        g = D(JSON.parse(JSON.stringify(k)), b),
        v = D(JSON.parse(JSON.stringify(E)), b),
        C = O(I(g, t, h, m, y), 2),
        _ = C[0],
        w = C[1];
      if (r) {
        var S = O(I(v, t, h, m, y), 2),
          j = S[0];
        S[1];
        _ = this.sortTerritories(j, _);
      }
      n && (_ = this.filterRegions(n, _)), this.onlyCountries = this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(a, _, s.includes("onlyCountries")), u), p, s.includes("onlyCountries")), this.preferredCountries = 0 === i.length ? [] : this.localizeCountries(this.getFilteredCountryList(i, _, s.includes("preferredCountries")), p, s.includes("preferredCountries")), this.hiddenAreaCodes = this.excludeCountries(this.getFilteredCountryList(a, w), u);
    },
    F = function (e) {
      function t(e) {
        var r;
        c(this, t), (r = function (e, t) {
          return !t || "object" !== f(t) && "function" != typeof t ? d(e) : t;
        }(this, p(t).call(this, e))).getProbableCandidate = C()(function (e) {
          return e && 0 !== e.length ? r.state.onlyCountries.filter(function (t) {
            return j()(t.name.toLowerCase(), e.toLowerCase());
          }, d(d(r)))[0] : null;
        }), r.guessSelectedCountry = C()(function (e, t, n, a) {
          var o;
          if (!1 === r.props.enableAreaCodes && (a.some(function (t) {
            if (j()(e, t.dialCode)) return n.some(function (e) {
              if (t.iso2 === e.iso2 && e.mainCode) return o = e, !0;
            }), !0;
          }), o)) return o;
          var i = n.find(function (e) {
            return e.iso2 == t;
          });
          if ("" === e.trim()) return i;
          var u = n.reduce(function (t, r) {
            if (j()(e, r.dialCode)) {
              if (r.dialCode.length > t.dialCode.length) return r;
              if (r.dialCode.length === t.dialCode.length && r.priority < t.priority) return r;
            }
            return t;
          }, {
            dialCode: "",
            priority: 10001
          }, d(d(r)));
          return u.name ? u : i;
        }), r.updateCountry = function (e) {
          var t,
            n = r.state.onlyCountries;
          (t = e.indexOf(0) >= "0" && e.indexOf(0) <= "9" ? n.find(function (t) {
            return t.dialCode == +e;
          }) : n.find(function (t) {
            return t.iso2 == e;
          })) && t.dialCode && r.setState({
            selectedCountry: t,
            formattedNumber: r.props.disableCountryCode ? "" : r.formatNumber(t.dialCode, t)
          });
        }, r.scrollTo = function (e, t) {
          if (e) {
            var n = r.dropdownRef;
            if (n && document.body) {
              var a = n.offsetHeight,
                o = n.getBoundingClientRect().top + document.body.scrollTop,
                i = o + a,
                u = e,
                c = u.getBoundingClientRect(),
                s = u.offsetHeight,
                l = c.top + document.body.scrollTop,
                f = l + s,
                d = l - o + n.scrollTop,
                p = a / 2 - s / 2;
              if (r.props.enableSearch ? l < o + 32 : l < o) t && (d -= p), n.scrollTop = d;else if (f > i) {
                t && (d += p);
                var h = a - s;
                n.scrollTop = d - h;
              }
            }
          }
        }, r.scrollToTop = function () {
          var e = r.dropdownRef;
          e && document.body && (e.scrollTop = 0);
        }, r.formatNumber = function (e, t) {
          if (!t) return e;
          var n,
            o = t.format,
            c = r.props,
            s = c.disableCountryCode,
            l = c.enableAreaCodeStretch,
            f = c.enableLongNumbers,
            d = c.autoFormat;
          if (s ? ((n = o.split(" ")).shift(), n = n.join(" ")) : l && t.isAreaCode ? ((n = o.split(" "))[1] = n[1].replace(/\.+/, "".padEnd(t.areaCodeLength, ".")), n = n.join(" ")) : n = o, !e || 0 === e.length) return s ? "" : r.props.prefix;
          if (e && e.length < 2 || !n || !d) return s ? e : r.props.prefix + e;
          var p,
            h = w()(n, function (e, t) {
              if (0 === e.remainingText.length) return e;
              if ("." !== t) return {
                formattedText: e.formattedText + t,
                remainingText: e.remainingText
              };
              var r,
                n = i(r = e.remainingText) || a(r) || u(),
                o = n[0],
                c = n.slice(1);
              return {
                formattedText: e.formattedText + o,
                remainingText: c
              };
            }, {
              formattedText: "",
              remainingText: e.split("")
            });
          return (p = f ? h.formattedText + h.remainingText.join("") : h.formattedText).includes("(") && !p.includes(")") && (p += ")"), p;
        }, r.cursorToEnd = function () {
          var e = r.numberInputRef;
          if (document.activeElement === e) {
            e.focus();
            var t = e.value.length;
            ")" === e.value.charAt(t - 1) && (t -= 1), e.setSelectionRange(t, t);
          }
        }, r.getElement = function (e) {
          return r["flag_no_".concat(e)];
        }, r.getCountryData = function () {
          return r.state.selectedCountry ? {
            name: r.state.selectedCountry.name || "",
            dialCode: r.state.selectedCountry.dialCode || "",
            countryCode: r.state.selectedCountry.iso2 || "",
            format: r.state.selectedCountry.format || ""
          } : {};
        }, r.handleFlagDropdownClick = function (e) {
          if (e.preventDefault(), r.state.showDropdown || !r.props.disabled) {
            var t = r.state,
              n = t.preferredCountries,
              a = t.onlyCountries,
              o = t.selectedCountry,
              i = r.concatPreferredCountries(n, a).findIndex(function (e) {
                return e.dialCode === o.dialCode && e.iso2 === o.iso2;
              });
            r.setState({
              showDropdown: !r.state.showDropdown,
              highlightCountryIndex: i
            }, function () {
              r.state.showDropdown && r.scrollTo(r.getElement(r.state.highlightCountryIndex));
            });
          }
        }, r.handleInput = function (e) {
          var t = e.target.value,
            n = r.props,
            a = n.prefix,
            o = n.onChange,
            i = r.props.disableCountryCode ? "" : a,
            u = r.state.selectedCountry,
            c = r.state.freezeSelection;
          if (!r.props.countryCodeEditable) {
            var s = a + (u.hasAreaCodes ? r.state.onlyCountries.find(function (e) {
              return e.iso2 === u.iso2 && e.mainCode;
            }).dialCode : u.dialCode);
            if (t.slice(0, s.length) !== s) return;
          }
          if (t === a) return o && o("", r.getCountryData(), e, ""), r.setState({
            formattedNumber: ""
          });
          if (t.replace(/\D/g, "").length > 15) {
            if (!1 === r.props.enableLongNumbers) return;
            if ("number" == typeof r.props.enableLongNumbers && t.replace(/\D/g, "").length > r.props.enableLongNumbers) return;
          }
          if (t !== r.state.formattedNumber) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var l = r.props.country,
              f = r.state,
              d = f.onlyCountries,
              p = f.selectedCountry,
              h = f.hiddenAreaCodes;
            if (o && e.persist(), t.length > 0) {
              var m = t.replace(/\D/g, "");
              (!r.state.freezeSelection || p && p.dialCode.length > m.length) && (u = r.props.disableCountryGuess ? p : r.guessSelectedCountry(m.substring(0, 6), l, d, h) || p, c = !1), i = r.formatNumber(m, u), u = u.dialCode ? u : p;
            }
            var y = e.target.selectionStart,
              b = e.target.selectionStart,
              g = r.state.formattedNumber,
              v = i.length - g.length;
            r.setState({
              formattedNumber: i,
              freezeSelection: c,
              selectedCountry: u
            }, function () {
              v > 0 && (b -= v), ")" == i.charAt(i.length - 1) ? r.numberInputRef.setSelectionRange(i.length - 1, i.length - 1) : b > 0 && g.length >= i.length ? r.numberInputRef.setSelectionRange(b, b) : y < g.length && r.numberInputRef.setSelectionRange(y, y), o && o(i.replace(/[^0-9]+/g, ""), r.getCountryData(), e, i);
            });
          }
        }, r.handleInputClick = function (e) {
          r.setState({
            showDropdown: !1
          }), r.props.onClick && r.props.onClick(e, r.getCountryData());
        }, r.handleDoubleClick = function (e) {
          var t = e.target.value.length;
          e.target.setSelectionRange(0, t);
        }, r.handleFlagItemClick = function (e, t) {
          var n = r.state.selectedCountry,
            a = r.state.onlyCountries.find(function (t) {
              return t == e;
            });
          if (a) {
            var o = r.state.formattedNumber.replace(" ", "").replace("(", "").replace(")", "").replace("-", ""),
              i = o.length > 1 ? o.replace(n.dialCode, a.dialCode) : a.dialCode,
              u = r.formatNumber(i.replace(/\D/g, ""), a);
            r.setState({
              showDropdown: !1,
              selectedCountry: a,
              freezeSelection: !0,
              formattedNumber: u,
              searchValue: ""
            }, function () {
              r.cursorToEnd(), r.props.onChange && r.props.onChange(u.replace(/[^0-9]+/g, ""), r.getCountryData(), t, u);
            });
          }
        }, r.handleInputFocus = function (e) {
          r.numberInputRef && r.numberInputRef.value === r.props.prefix && r.state.selectedCountry && !r.props.disableCountryCode && r.setState({
            formattedNumber: r.props.prefix + r.state.selectedCountry.dialCode
          }, function () {
            r.props.jumpCursorToEnd && setTimeout(r.cursorToEnd, 0);
          }), r.setState({
            placeholder: ""
          }), r.props.onFocus && r.props.onFocus(e, r.getCountryData()), r.props.jumpCursorToEnd && setTimeout(r.cursorToEnd, 0);
        }, r.handleInputBlur = function (e) {
          e.target.value || r.setState({
            placeholder: r.props.placeholder
          }), r.props.onBlur && r.props.onBlur(e, r.getCountryData());
        }, r.handleInputCopy = function (e) {
          if (r.props.copyNumbersOnly) {
            var t = window.getSelection().toString().replace(/[^0-9]+/g, "");
            e.clipboardData.setData("text/plain", t), e.preventDefault();
          }
        }, r.getHighlightCountryIndex = function (e) {
          var t = r.state.highlightCountryIndex + e;
          return t < 0 || t >= r.state.onlyCountries.length + r.state.preferredCountries.length ? t - e : r.props.enableSearch && t > r.getSearchFilteredCountries().length ? 0 : t;
        }, r.searchCountry = function () {
          var e = r.getProbableCandidate(r.state.queryString) || r.state.onlyCountries[0],
            t = r.state.onlyCountries.findIndex(function (t) {
              return t == e;
            }) + r.state.preferredCountries.length;
          r.scrollTo(r.getElement(t), !0), r.setState({
            queryString: "",
            highlightCountryIndex: t
          });
        }, r.handleKeydown = function (e) {
          var t = r.props.keys,
            n = e.target.className;
          if (n.includes("selected-flag") && e.which === t.ENTER && !r.state.showDropdown) return r.handleFlagDropdownClick(e);
          if (n.includes("form-control") && (e.which === t.ENTER || e.which === t.ESC)) return e.target.blur();
          if (r.state.showDropdown && !r.props.disabled && (!n.includes("search-box") || e.which === t.UP || e.which === t.DOWN || e.which === t.ENTER || e.which === t.ESC && "" === e.target.value)) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var a = function a(e) {
              r.setState({
                highlightCountryIndex: r.getHighlightCountryIndex(e)
              }, function () {
                r.scrollTo(r.getElement(r.state.highlightCountryIndex), !0);
              });
            };
            switch (e.which) {
              case t.DOWN:
                a(1);
                break;
              case t.UP:
                a(-1);
                break;
              case t.ENTER:
                r.props.enableSearch ? r.handleFlagItemClick(r.getSearchFilteredCountries()[r.state.highlightCountryIndex] || r.getSearchFilteredCountries()[0], e) : r.handleFlagItemClick([].concat(o(r.state.preferredCountries), o(r.state.onlyCountries))[r.state.highlightCountryIndex], e);
                break;
              case t.ESC:
              case t.TAB:
                r.setState({
                  showDropdown: !1
                }, r.cursorToEnd);
                break;
              default:
                (e.which >= t.A && e.which <= t.Z || e.which === t.SPACE) && r.setState({
                  queryString: r.state.queryString + String.fromCharCode(e.which)
                }, r.state.debouncedQueryStingSearcher);
            }
          }
        }, r.handleInputKeyDown = function (e) {
          var t = r.props,
            n = t.keys,
            a = t.onEnterKeyPress,
            o = t.onKeyDown;
          e.which === n.ENTER && a && a(e), o && o(e);
        }, r.handleClickOutside = function (e) {
          r.dropdownRef && !r.dropdownContainerRef.contains(e.target) && r.state.showDropdown && r.setState({
            showDropdown: !1
          });
        }, r.handleSearchChange = function (e) {
          var t = e.currentTarget.value,
            n = r.state,
            a = n.preferredCountries,
            o = n.selectedCountry,
            i = 0;
          if ("" === t && o) {
            var u = r.state.onlyCountries;
            i = r.concatPreferredCountries(a, u).findIndex(function (e) {
              return e == o;
            }), setTimeout(function () {
              return r.scrollTo(r.getElement(i));
            }, 100);
          }
          r.setState({
            searchValue: t,
            highlightCountryIndex: i
          });
        }, r.concatPreferredCountries = function (e, t) {
          return e.length > 0 ? o(new Set(e.concat(t))) : t;
        }, r.getDropdownCountryName = function (e) {
          return e.localName || e.name;
        }, r.getSearchFilteredCountries = function () {
          var e = r.state,
            t = e.preferredCountries,
            n = e.onlyCountries,
            a = e.searchValue,
            i = r.props.enableSearch,
            u = r.concatPreferredCountries(t, n),
            c = a.trim().toLowerCase().replace("+", "");
          if (i && c) {
            if (/^\d+$/.test(c)) return u.filter(function (e) {
              var t = e.dialCode;
              return ["".concat(t)].some(function (e) {
                return e.toLowerCase().includes(c);
              });
            });
            var s = u.filter(function (e) {
                var t = e.iso2;
                return ["".concat(t)].some(function (e) {
                  return e.toLowerCase().includes(c);
                });
              }),
              l = u.filter(function (e) {
                var t = e.name,
                  r = e.localName;
                e.iso2;
                return ["".concat(t), "".concat(r || "")].some(function (e) {
                  return e.toLowerCase().includes(c);
                });
              });
            return r.scrollToTop(), o(new Set([].concat(s, l)));
          }
          return u;
        }, r.getCountryDropdownList = function () {
          var e = r.state,
            t = e.preferredCountries,
            a = e.highlightCountryIndex,
            o = e.showDropdown,
            i = e.searchValue,
            u = r.props,
            c = u.disableDropdown,
            s = u.prefix,
            l = r.props,
            f = l.enableSearch,
            d = l.searchNotFound,
            p = l.disableSearchIcon,
            h = l.searchClass,
            m = l.searchStyle,
            b = l.searchPlaceholder,
            g = l.autocompleteSearch,
            v = r.getSearchFilteredCountries().map(function (e, t) {
              var n = a === t,
                o = N()({
                  country: !0,
                  preferred: "us" === e.iso2 || "gb" === e.iso2,
                  active: "us" === e.iso2,
                  highlight: n
                }),
                i = "flag ".concat(e.iso2);
              return y.a.createElement("li", _extends({
                ref: function ref(e) {
                  return r["flag_no_".concat(t)] = e;
                },
                key: "flag_no_".concat(t),
                "data-flag-key": "flag_no_".concat(t),
                className: o,
                "data-dial-code": "1",
                tabIndex: c ? "-1" : "0",
                "data-country-code": e.iso2,
                onClick: function onClick(t) {
                  return r.handleFlagItemClick(e, t);
                },
                role: "option"
              }, n ? {
                "aria-selected": !0
              } : {}), y.a.createElement("div", {
                className: i
              }), y.a.createElement("span", {
                className: "country-name"
              }, r.getDropdownCountryName(e)), y.a.createElement("span", {
                className: "dial-code"
              }, e.format ? r.formatNumber(e.dialCode, e) : s + e.dialCode));
            }),
            C = y.a.createElement("li", {
              key: "dashes",
              className: "divider"
            });
          t.length > 0 && (!f || f && !i.trim()) && v.splice(t.length, 0, C);
          var _ = N()(n({
            "country-list": !0,
            hide: !o
          }, r.props.dropdownClass, !0));
          return y.a.createElement("ul", {
            ref: function ref(e) {
              return !f && e && e.focus(), r.dropdownRef = e;
            },
            className: _,
            style: r.props.dropdownStyle,
            role: "listbox",
            tabIndex: "0"
          }, f && y.a.createElement("li", {
            className: N()(n({
              search: !0
            }, h, h))
          }, !p && y.a.createElement("span", {
            className: N()(n({
              "search-emoji": !0
            }, "".concat(h, "-emoji"), h)),
            role: "img",
            "aria-label": "Magnifying glass"
          }, "🔎"), y.a.createElement("input", {
            className: N()(n({
              "search-box": !0
            }, "".concat(h, "-box"), h)),
            style: m,
            type: "search",
            placeholder: b,
            autoFocus: !0,
            autoComplete: g ? "on" : "off",
            value: i,
            onChange: r.handleSearchChange
          })), v.length > 0 ? v : y.a.createElement("li", {
            className: "no-entries-message"
          }, y.a.createElement("span", null, d)));
        };
        var s,
          l = new P(e.enableAreaCodes, e.enableTerritories, e.regions, e.onlyCountries, e.preferredCountries, e.excludeCountries, e.preserveOrder, e.masks, e.priority, e.areaCodes, e.localization, e.prefix, e.defaultMask, e.alwaysDefaultMask),
          h = l.onlyCountries,
          m = l.preferredCountries,
          b = l.hiddenAreaCodes,
          v = e.value ? e.value.replace(/\D/g, "") : "";
        s = e.disableInitialCountryGuess ? 0 : v.length > 1 ? r.guessSelectedCountry(v.substring(0, 6), e.country, h, b) || 0 : e.country && h.find(function (t) {
          return t.iso2 == e.country;
        }) || 0;
        var _,
          S = v.length < 2 && s && !j()(v, s.dialCode) ? s.dialCode : "";
        _ = "" === v && 0 === s ? "" : r.formatNumber((e.disableCountryCode ? "" : S) + v, s.name ? s : void 0);
        var x = h.findIndex(function (e) {
          return e == s;
        });
        return r.state = {
          showDropdown: e.showDropdown,
          formattedNumber: _,
          onlyCountries: h,
          preferredCountries: m,
          hiddenAreaCodes: b,
          selectedCountry: s,
          highlightCountryIndex: x,
          queryString: "",
          freezeSelection: !1,
          debouncedQueryStingSearcher: g()(r.searchCountry, 250),
          searchValue: ""
        }, r;
      }
      var r, l, m;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && h(e, t);
      }(t, e), r = t, (l = [{
        key: "componentDidMount",
        value: function value() {
          document.addEventListener && this.props.enableClickOutside && document.addEventListener("mousedown", this.handleClickOutside), this.props.onMount && this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g, ""), this.getCountryData(), this.state.formattedNumber);
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          document.removeEventListener && this.props.enableClickOutside && document.removeEventListener("mousedown", this.handleClickOutside);
        }
      }, {
        key: "componentDidUpdate",
        value: function value(e, t, r) {
          e.country !== this.props.country ? this.updateCountry(this.props.country) : e.value !== this.props.value && this.updateFormattedNumber(this.props.value);
        }
      }, {
        key: "updateFormattedNumber",
        value: function value(e) {
          if (null === e) return this.setState({
            selectedCountry: 0,
            formattedNumber: ""
          });
          var t = this.state,
            r = t.onlyCountries,
            n = t.selectedCountry,
            a = t.hiddenAreaCodes,
            o = this.props,
            i = o.country,
            u = o.prefix;
          if ("" === e) return this.setState({
            selectedCountry: n,
            formattedNumber: ""
          });
          var c,
            s,
            l = e.replace(/\D/g, "");
          if (n && j()(e, u + n.dialCode)) s = this.formatNumber(l, n), this.setState({
            formattedNumber: s
          });else {
            var f = (c = this.props.disableCountryGuess ? n : this.guessSelectedCountry(l.substring(0, 6), i, r, a) || n) && j()(l, u + c.dialCode) ? c.dialCode : "";
            s = this.formatNumber((this.props.disableCountryCode ? "" : f) + l, c || void 0), this.setState({
              selectedCountry: c,
              formattedNumber: s
            });
          }
        }
      }, {
        key: "render",
        value: function value() {
          var e,
            t,
            r,
            a = this,
            o = this.state,
            i = o.onlyCountries,
            u = o.selectedCountry,
            c = o.showDropdown,
            s = o.formattedNumber,
            l = o.hiddenAreaCodes,
            f = this.props,
            d = f.disableDropdown,
            p = f.renderStringAsFlag,
            h = f.isValid,
            m = f.defaultErrorMessage,
            b = f.specialLabel;
          if ("boolean" == typeof h) t = h;else {
            var g = h(s.replace(/\D/g, ""), u, i, l);
            "boolean" == typeof g ? !1 === (t = g) && (r = m) : (t = !1, r = g);
          }
          var v = N()((n(e = {}, this.props.containerClass, !0), n(e, "react-tel-input", !0), e)),
            C = N()({
              arrow: !0,
              up: c
            }),
            _ = N()(n({
              "form-control": !0,
              "invalid-number": !t,
              open: c
            }, this.props.inputClass, !0)),
            w = N()({
              "selected-flag": !0,
              open: c
            }),
            S = N()(n({
              "flag-dropdown": !0,
              "invalid-number": !t,
              open: c
            }, this.props.buttonClass, !0)),
            j = "flag ".concat(u && u.iso2);
          return y.a.createElement("div", {
            className: "".concat(v, " ").concat(this.props.className),
            style: this.props.style || this.props.containerStyle,
            onKeyDown: this.handleKeydown
          }, b && y.a.createElement("div", {
            className: "special-label"
          }, b), r && y.a.createElement("div", {
            className: "invalid-number-message"
          }, r), y.a.createElement("input", _extends({
            className: _,
            style: this.props.inputStyle,
            onChange: this.handleInput,
            onClick: this.handleInputClick,
            onDoubleClick: this.handleDoubleClick,
            onFocus: this.handleInputFocus,
            onBlur: this.handleInputBlur,
            onCopy: this.handleInputCopy,
            value: s,
            onKeyDown: this.handleInputKeyDown,
            placeholder: this.props.placeholder,
            disabled: this.props.disabled,
            type: "tel"
          }, this.props.inputProps, {
            ref: function ref(e) {
              a.numberInputRef = e, "function" == typeof a.props.inputProps.ref ? a.props.inputProps.ref(e) : "object" == _typeof(a.props.inputProps.ref) && (a.props.inputProps.ref.current = e);
            }
          })), y.a.createElement("div", {
            className: S,
            style: this.props.buttonStyle,
            ref: function ref(e) {
              return a.dropdownContainerRef = e;
            }
          }, p ? y.a.createElement("div", {
            className: w
          }, p) : y.a.createElement("div", {
            onClick: d ? void 0 : this.handleFlagDropdownClick,
            className: w,
            title: u ? "".concat(u.localName || u.name, ": + ").concat(u.dialCode) : "",
            tabIndex: d ? "-1" : "0",
            role: "button",
            "aria-haspopup": "listbox",
            "aria-expanded": !!c || void 0
          }, y.a.createElement("div", {
            className: j
          }, !d && y.a.createElement("div", {
            className: C
          }))), c && this.getCountryDropdownList()));
        }
      }]) && s(r.prototype, l), m && s(r, m), t;
    }(y.a.Component);
  F.defaultProps = {
    country: "",
    value: "",
    onlyCountries: [],
    preferredCountries: [],
    excludeCountries: [],
    placeholder: "1 (702) 123-4567",
    searchPlaceholder: "search",
    searchNotFound: "No entries to show",
    flagsImagePath: "./flags.png",
    disabled: !1,
    containerStyle: {},
    inputStyle: {},
    buttonStyle: {},
    dropdownStyle: {},
    searchStyle: {},
    containerClass: "",
    inputClass: "",
    buttonClass: "",
    dropdownClass: "",
    searchClass: "",
    className: "",
    autoFormat: !0,
    enableAreaCodes: !1,
    enableTerritories: !1,
    disableCountryCode: !1,
    disableDropdown: !1,
    enableLongNumbers: !1,
    countryCodeEditable: !0,
    enableSearch: !1,
    disableSearchIcon: !1,
    disableInitialCountryGuess: !1,
    disableCountryGuess: !1,
    regions: "",
    inputProps: {},
    localization: {},
    masks: null,
    priority: null,
    areaCodes: null,
    preserveOrder: [],
    defaultMask: "... ... ... ... ..",
    alwaysDefaultMask: !1,
    prefix: "+",
    copyNumbersOnly: !0,
    renderStringAsFlag: "",
    autocompleteSearch: !1,
    jumpCursorToEnd: !0,
    enableAreaCodeStretch: !1,
    enableClickOutside: !0,
    showDropdown: !1,
    isValid: !0,
    defaultErrorMessage: "",
    specialLabel: "Phone",
    onEnterKeyPress: null,
    keys: {
      UP: 38,
      DOWN: 40,
      RIGHT: 39,
      LEFT: 37,
      ENTER: 13,
      ESC: 27,
      PLUS: 43,
      A: 65,
      Z: 90,
      SPACE: 32,
      TAB: 9
    }
  };
  t.default = F;
}]);

/***/ }),

/***/ "8VmE":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "8yPs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "16854d8b06e0a86608ffe8fe3651d0ec.svg");

/***/ }),

/***/ "9K2m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var b = "function" === typeof Symbol && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  n = b ? Symbol.for("react.forward_ref") : 60112,
  p = b ? Symbol.for("react.suspense") : 60113,
  q = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;
exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
exports.isConcurrentMode = A;
exports.isContextConsumer = function (a) {
  return z(a) === k;
};
exports.isContextProvider = function (a) {
  return z(a) === h;
};
exports.isElement = function (a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};
exports.isForwardRef = function (a) {
  return z(a) === n;
};
exports.isFragment = function (a) {
  return z(a) === e;
};
exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};
exports.isPortal = function (a) {
  return z(a) === d;
};
exports.isProfiler = function (a) {
  return z(a) === g;
};
exports.isStrictMode = function (a) {
  return z(a) === f;
};
exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
exports.typeOf = z;

/***/ }),

/***/ "9WSe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "803f24369a085e35482e874050e62261.gif");

/***/ }),

/***/ "EbY7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"bannerContentLeft":"bannerContentLeft__6JbCy","bannerContent":"bannerContent__BUWuO","bannerContainer":"bannerContainer__DQgkz","formContainer":"formContainer__StU8y","serviceContentContainer":"serviceContentContainer__VK9nE","bannerContentContainer":"bannerContentContainer__ZLG1e","mapbg":"mapbg__KE87P","formFieldGrid":"formFieldGrid__MwPXX","flagSelect":"flagSelect__SGtLj","mapbg_mobile":"mapbg_mobile__a+m6P","bannerContentRight":"bannerContentRight__vDui2","formSelectContents":"formSelectContents__cBQF9","countryOption":"countryOption__qbUzp","serviceContentLeft":"serviceContentLeft__LiKBQ","bannerVersionContent":"bannerVersionContent__c5Hg3","bannerContentversion":"bannerContentversion__Pvkzt","serviceContentBoxItem":"serviceContentBoxItem__6rYCG","serviceContent":"serviceContent__FdotR","serviceContentRight":"serviceContentRight__gf5mV","formText":"formText__2ZcwX","serviceContentBox":"serviceContentBox__iQ3NE","formBg":"formBg__yMUgX","formBgversion":"formBgversion__XEblB","formContent":"formContent__O0u1j","formContents":"formContents__zCoOe","formCd":"formCd__-TOH6","formMainContent":"formMainContent__nQ96K","formSelectContent":"formSelectContent__eYKyZ","formFieldTel":"formFieldTel__AvCbh","reviewProfileTop":"reviewProfileTop__psC0P","reviewSliderMainContent":"reviewSliderMainContent__gctbw","react-select__indicator-separator":"react-select__indicator-separator__QTE+x","react-select__indicator":"react-select__indicator__f81cl","react-select__dropdown-indicator":"react-select__dropdown-indicator__3wkwl","reviewSlider":"reviewSlider__clJbl","reviewSliderContainer":"reviewSliderContainer__ooBEu","reviewSliderContent":"reviewSliderContent__73uE0","reviewSlide":"reviewSlide__fsmyZ","cd-button":"cd-button__L1Wib","reviewSlideHead":"reviewSlideHead__a+XUZ","reviewProfile":"reviewProfile__2PpKK","reviewProfileDesc":"reviewProfileDesc__E4f2h","reviewHead":"reviewHead__51GbD","reviewStars":"reviewStars__icUlx","reviewSliderBtn":"reviewSliderBtn__HZryO","cdButton":"cdButton__LTy7F","formField":"formField__XcU8V","errorMsg":"errorMsg__t-yhv"});

/***/ }),

/***/ "GeWT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__("xVO4");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }
  return targetComponent;
}
module.exports = hoistNonReactStatics;

/***/ }),

/***/ "J64F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6OLs");
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UpPA");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EbY7");
/* harmony import */ var _alert_errorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bLYV");
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Q25a");
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ofxU");
/* harmony import */ var _cdFormButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("h031");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


//import { route } from "preact-router";



// import loader from "../../../assets/header/loader.gif";



// import CDStyleButton from "./styleButton";

var checkOnBlur = {};
var CDForm = function CDForm() {
  var customStyles = {
    option: function option(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: "#fff",
        color: "#9B9B9B",
        fontWeight: "400",
        fontSize: "16px",
        padding: "4px 10px",
        lineHeight: "24px",
        cursor: "pointer",
        ":hover": {
          background: "#F1EEFB",
          borderRadius: 8
        }
      });
    },
    menu: function menu(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: "#ffffff",
        padding: "15px",
        zIndex: "9"
      });
    },
    control: function control() {
      return {
        background: "#ffffff",
        border: "2px solid #DCDCDC",
        borderRadius: "6px",
        padding: "0px 10px",
        color: "#9B9B9B",
        display: "flex",
        alignItem: "center",
        height: "40px",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px"
      };
    },
    singleValue: function singleValue(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "#333",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px"
      });
    },
    errorStyle: function errorStyle(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        border: "2px solid red"
      });
    }
  };
  var flagCustomStyles = {
    option: function option(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: "#fff",
        color: "#9B9B9B",
        fontWeight: "400",
        fontSize: "16px",
        padding: "4px 10px",
        lineHeight: "24px",
        cursor: "pointer",
        ":hover": {
          background: "#F1EEFB",
          borderRadius: 8
        }
      });
    },
    menu: function menu(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        background: "#ffffff",
        padding: "15px"
      });
    },
    control: function control() {
      return {
        background: "#ffffff",
        border: "2px solid #DCDCDC",
        borderRadius: "6px",
        padding: "0px 0px 0px 10px",
        color: "#9B9B9B",
        display: "flex",
        alignItem: "center",
        height: "40px",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px"
      };
    },
    singleValue: function singleValue(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: "#333",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px"
      });
    },
    errorStyle: function errorStyle(provided) {
      return _objectSpread(_objectSpread({}, provided), {}, {
        border: "2px solid red"
      });
    }
  };
  var checkUrl = typeof window !== "undefined" && window.location.pathname === "/lp/en/global/immigration-2/";
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formContent
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formContainer
  }, h("div", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formSection, " ").concat(checkUrl ? _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formBgversion : _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formBg)
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formContents
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formText
  }, h("h4", null, "Immigrate to Canada in a few ", h("span", null, "easy steps")), h("p", null, "Fill out the form to make sure you meet the Canadian government requirements.")), h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formCd
  }, h(Form, {
    customStyles: customStyles,
    flagCustomStyles: flagCustomStyles
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (CDForm);
var Form = function Form(_ref) {
  var customStyles = _ref.customStyles,
    flagCustomStyles = _ref.flagCustomStyles;
  var queryParams = new URLSearchParams(window.location.search);
  var _useContext = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useContext */ "b"])(_context_userContext__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]),
    userGeoLocation = _useContext.userGeoLocation;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "l"])({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      age: "",
      income: "",
      engLevel: "",
      country: "",
      check: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "l"])(),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "l"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "l"])(),
    _useState8 = _slicedToArray(_useState7, 2),
    message = _useState8[0],
    setShowMessage = _useState8[1];
  var _useState9 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "l"])([]),
    _useState10 = _slicedToArray(_useState9, 2),
    countries = _useState10[0],
    setCountries = _useState10[1];

  // const [selected, setSelected] = useState("");

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    if (name === "check") {
      return setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, e.target.checked)));
    }
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
    setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "")));
  };
  var checkEmail = /^[A-Za-z0-9.+]{2,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,10}$/;
  var handleOnblur = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (e) {
      var _e$target2 = e.target,
        name = _e$target2.name,
        value = _e$target2.value,
        placeholder = _e$target2.placeholder;
      if (value === "") {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "".concat(placeholder, " is required"))));
      } else if (name === "email" && !checkEmail.test(value)) {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "Email not valid")));
      } else {
        setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, "")));
      }
    });
    return function handleOnblur(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSelectBlur = function handleSelectBlur(val, name, erName) {
    setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, name, !checkOnBlur[name] ? "".concat(erName, " is required") : "")));
  };
  var handleSelectChange = function handleSelectChange(val, name) {
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, val.value)));
    checkOnBlur[name] = val.value;
  };
  var getCountries = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      var countryDetail = [];
      try {
        if ((_utils_countries__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"] === null || _utils_countries__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"] === void 0 ? void 0 : _utils_countries__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].length) > 0) {
          _utils_countries__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"] === null || _utils_countries__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"] === void 0 ? void 0 : _utils_countries__WEBPACK_IMPORTED_MODULE_6__[/* data */ "a"].forEach(function (el) {
            countryDetail.push({
              countryCode: el.alpha2Code,
              name: el.name
            });
            setCountries(countryDetail);
          });
        }
      } catch (err) {}
    });
    return function getCountries() {
      return _ref3.apply(this, arguments);
    };
  }();
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useEffect */ "d"])(function () {
    getCountries();
  }, []);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        if (values.firstName === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            firstName: "First Name is required"
          }));
        } else if (values.lastName === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            lastName: "Last Name is required"
          }));
        } else if (values.email === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            email: "Email is required"
          }));
        } else if (values.phoneNumber === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            phoneNumber: "Phone number is required"
          }));
        } else if (values.age === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            age: "Age is required"
          }));
        } else if (values.income === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            income: "Income is required"
          }));
        } else if (values.engLevel === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            engLevel: "English level is required"
          }));
        } else if (values.country === "") {
          return setErrors(_objectSpread(_objectSpread({}, errors), {}, {
            country: "Country is required"
          }));
        }
        setLoading(true);
        var payload = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          Age_score__c: values.age,
          Income_score__c: values.income,
          Level_of_English_score__c: values.engLevel,
          Passport_Holder_score__c: values.country,
          ip: (userGeoLocation === null || userGeoLocation === void 0 ? void 0 : userGeoLocation.IPv4) || (userGeoLocation === null || userGeoLocation === void 0 ? void 0 : userGeoLocation.ip),
          countryCode: userGeoLocation === null || userGeoLocation === void 0 ? void 0 : userGeoLocation.country_code,
          checkEligibilityForWHV: false,
          Promo__c: queryParams.get("Promo"),
          Visa_Type__c: queryParams.get("Visa_Type"),
          Campaign_Source__c: queryParams.get("Campaign_source") || queryParams.get("utm_source"),
          GCLID__c: queryParams.get("gclid") || queryParams.get("ob_click_id"),
          Partner_ID__c: queryParams.get("utm_campaign"),
          UTM1__c: queryParams.get("UTM1"),
          UTM2__c: queryParams.get("UTM2"),
          UTM3__c: queryParams.get("UTM3"),
          UTM4__c: queryParams.get("UTM4"),
          UTM5__c: queryParams.get("UTM5"),
          UTM6__c: queryParams.get("UTM6"),
          UTM7__c: queryParams.get("UTM7"),
          UTM8__c: queryParams.get("UTM8"),
          UTM9__c: queryParams.get("UTM9"),
          UTM10__c: queryParams.get("UTM10"),
          UTM11__c: queryParams.get("UTM11"),
          UTM12__c: queryParams.get("UTM12")
        };
        var response = yield fetch("https://service.canadadistrict.com/forms/consult", {
          method: "POST",
          // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
        var status = response.status;
        if (status === 200) {
          checkOnBlur = {};
          setLoading(false);
          window.location.href = "/thank-you";
          // route(`/thank-you`);
        }
      } catch (err) {
        var _err$response, _err$response2;
        setLoading(false);
        setShowMessage((err === null || err === void 0 || (_err$response = err.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.msg) || (err === null || err === void 0 || (_err$response2 = err.response) === null || _err$response2 === void 0 || (_err$response2 = _err$response2.data) === null || _err$response2 === void 0 ? void 0 : _err$response2.message) || "Something went wrong");
      }
    });
    return function handleSubmit(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var closeAction = function closeAction() {
    setShowMessage("");
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formMainContent,
    id: "How"
  }, h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formFieldGrid
  }, h("form", {
    onSubmit: handleSubmit
  }, h("label", {
    for: "firstName"
  }), h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formField, " ").concat(errors !== null && errors !== void 0 && errors.firstName ? _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].errorMsg : ""),
    type: "text",
    id: "firstName",
    name: "firstName",
    placeholder: "First Name",
    autoComplete: "off",
    value: values === null || values === void 0 ? void 0 : values.firstName,
    onChange: handleChange,
    onBlur: handleOnblur
  }), (errors === null || errors === void 0 ? void 0 : errors.firstName) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.firstName), h("label", {
    for: "lastName"
  }), h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formField, " ").concat(errors !== null && errors !== void 0 && errors.lastName ? _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].errorMsg : ""),
    type: "text",
    name: "lastName",
    id: "lastName",
    autoComplete: "off",
    value: values === null || values === void 0 ? void 0 : values.lastName,
    placeholder: "Last Name",
    onChange: handleChange,
    onBlur: handleOnblur
  }), (errors === null || errors === void 0 ? void 0 : errors.lastName) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.lastName), h("label", {
    for: "email"
  }), h("input", {
    class: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formField, " ").concat(errors !== null && errors !== void 0 && errors.email ? _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].errorMsg : ""),
    type: "text",
    name: "email",
    id: "email",
    value: values === null || values === void 0 ? void 0 : values.email,
    placeholder: "Email Address",
    autoComplete: "off",
    onChange: handleChange,
    onBlur: handleOnblur
  }), (errors === null || errors === void 0 ? void 0 : errors.email) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.email), h("label", {
    for: "PhoneNumber"
  }), h(react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default.a, {
    country: "de",
    value: values === null || values === void 0 ? void 0 : values.phone,
    placeholder: "Phone Number",
    id: "PhoneNumber",
    inputProps: {
      name: "phoneNumber",
      autoComplete: "off",
      required: true,
      autoFocus: false,
      className: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formField, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formFieldTel, " ").concat(errors !== null && errors !== void 0 && errors.phoneNumber ? _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].errorMsg : "")
    },
    onChange: function onChange(e) {
      return handleChange({
        target: {
          name: "phoneNumber",
          value: "+".concat(e)
        }
      });
    }
  }), (errors === null || errors === void 0 ? void 0 : errors.phoneNumber) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.phoneNumber), h(SelectAge, {
    customStyles: customStyles,
    handleSelectChange: handleSelectChange,
    onBlur: handleSelectBlur,
    errors: errors
  }), h(SelectIncome, {
    customStyles: customStyles,
    handleSelectChange: handleSelectChange,
    onBlur: handleSelectBlur,
    errors: errors
  }), h(SelectLevel, {
    customStyles: customStyles,
    handleSelectChange: handleSelectChange,
    onBlur: handleSelectBlur,
    errors: errors
  }), h(SelectCountry
  // customStyles={customStyles}
  , {
    flagCustomStyles: flagCustomStyles,
    countries: countries,
    handleSelectChange: handleSelectChange,
    onBlur: handleSelectBlur,
    errors: errors
  }), h(_cdFormButton__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    loading: loading
  }), h("label", null, h("input", {
    type: "checkbox",
    name: "check",
    defaultChecked: true,
    value: values === null || values === void 0 ? void 0 : values.check,
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), h("p", null, "By clicking on 'Check Your Eligibility\u2019, you are agreeing to our", " ", h("a", {
    href: "https://canadadistrict.com/termconditions",
    target: "_blank",
    rel: "noreferrer"
  }, "T&C"), " ", "and", " ", h("a", {
    href: "https://canadadistrict.com/privacypolicy",
    target: "_blank",
    rel: "noreferrer"
  }, "Privacy Policy"), ".")))), message !== "" && message ? h(_alert_errorMessage__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    message: message,
    closeAction: closeAction
  }) : null);
};
var SelectAge = function SelectAge(_ref5) {
  var customStyles = _ref5.customStyles,
    handleSelectChange = _ref5.handleSelectChange,
    _onBlur = _ref5.onBlur,
    errors = _ref5.errors;
  var options = [];
  for (var i = 18; i <= 70; i++) {
    var _i2, _i3;
    options.push({
      label: (_i2 = i) === null || _i2 === void 0 ? void 0 : _i2.toString(),
      value: (_i3 = i) === null || _i3 === void 0 ? void 0 : _i3.toString()
    });
  }
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formSelectContent
  }, h("label", {
    htmlFor: "your_age"
  }, h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    options: options,
    placeholder: "Your age",
    styles: customStyles,
    onChange: function onChange(e) {
      return handleSelectChange(e, "age");
    },
    onBlur: function onBlur(e) {
      return _onBlur(e, "age", "Age");
    },
    classNamePrefix: "react-select",
    className: "react-select-container ".concat(errors !== null && errors !== void 0 && errors.age ? "error-msg" : ""),
    inputId: "your_age",
    inputProps: {
      autoComplete: "off" // Set the autocomplete attribute to "off"
    }
  })), (errors === null || errors === void 0 ? void 0 : errors.age) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.age));
};
var SelectIncome = function SelectIncome(_ref6) {
  var customStyles = _ref6.customStyles,
    handleSelectChange = _ref6.handleSelectChange,
    _onBlur2 = _ref6.onBlur,
    errors = _ref6.errors;
  var options = [{
    value: "0-1500",
    label: "0-1500"
  }, {
    value: "1500-3000",
    label: "1500-3000"
  }, {
    value: "3000-5000",
    label: "3000-5000"
  }, {
    value: "5000-10000",
    label: "5000-10000"
  }, {
    value: "10000+",
    label: "10000+"
  }];
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formSelectContent
  }, h("label", {
    htmlFor: "monthly_income"
  }, h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    options: options,
    placeholder: "Your Monthly income ($)",
    styles: customStyles,
    onChange: function onChange(e) {
      return handleSelectChange(e, "income");
    },
    onBlur: function onBlur(e) {
      return _onBlur2(e, "income", "Income");
    },
    classNamePrefix: "react-select",
    className: "react-select-container ".concat(errors !== null && errors !== void 0 && errors.income ? "error-msg" : ""),
    inputId: "monthly_income",
    inputProps: {
      autoComplete: "off" // Set the autocomplete attribute to "off"
    }
  })), (errors === null || errors === void 0 ? void 0 : errors.income) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.income));
};
var SelectLevel = function SelectLevel(_ref7) {
  var customStyles = _ref7.customStyles,
    handleSelectChange = _ref7.handleSelectChange,
    _onBlur3 = _ref7.onBlur,
    errors = _ref7.errors;
  var options = [{
    value: "Fluent",
    label: "Fluent"
  }, {
    value: "Very high",
    label: "Very high"
  }, {
    value: "High",
    label: "High"
  }, {
    value: "Basic",
    label: "Basic"
  }, {
    value: "Low",
    label: "Low"
  }, {
    value: "Not at all",
    label: "Not at all"
  }];
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formSelectContent
  }, h("label", {
    htmlFor: "english_level"
  }, h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    options: options,
    placeholder: "English level",
    styles: customStyles,
    onChange: function onChange(e) {
      return handleSelectChange(e, "engLevel");
    },
    onBlur: function onBlur(e) {
      return _onBlur3(e, "engLevel", "English level");
    },
    classNamePrefix: "react-select",
    className: "react-select-container ".concat(errors !== null && errors !== void 0 && errors.engLevel ? "error-msg" : ""),
    inputId: "english_level",
    inputProps: {
      autoComplete: "off" // Set the autocomplete attribute to "off"
    }
  })), (errors === null || errors === void 0 ? void 0 : errors.engLevel) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.engLevel));
};
var SelectCountry = function SelectCountry(_ref8) {
  var flagCustomStyles = _ref8.flagCustomStyles,
    countries = _ref8.countries,
    handleSelectChange = _ref8.handleSelectChange,
    _onBlur4 = _ref8.onBlur,
    errors = _ref8.errors;
  var options = [];
  if (countries.length > 0) {
    countries.forEach(function (el) {
      var _el$countryCode;
      options.push({
        value: el.name,
        label: el.name,
        image: "https://flagcdn.com/48x36/".concat(el === null || el === void 0 || (_el$countryCode = el.countryCode) === null || _el$countryCode === void 0 ? void 0 : _el$countryCode.toLowerCase(), ".png")
      });
    });
  }
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].formSelectContents
  }, h("img", {
    src: "https://flagcdn.com/48x36/de.png",
    alt: "flag"
  }), h("label", {
    htmlFor: "country_flag"
  }, h(react_select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    options: options,
    inputId: "country_flag",
    placeholder: "Passport Holder",
    styles: flagCustomStyles,
    onChange: function onChange(e) {
      return handleSelectChange(e, "country");
    },
    onBlur: function onBlur(e) {
      return _onBlur4(e, "country", "Country");
    },
    classNamePrefix: "react-select",
    className: "react-select-container ".concat(errors !== null && errors !== void 0 && errors.country ? "error-msg" : ""),
    formatOptionLabel: function formatOptionLabel(country) {
      return h("div", {
        class: _style_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].countryOption
      }, h("img", {
        src: country.image,
        alt: "country-image"
      }), h("span", null, country.label));
    },
    inputProps: {
      autoComplete: "off" // Set the autocomplete attribute to "off"
    }
  })), (errors === null || errors === void 0 ? void 0 : errors.country) && h("span", null, errors === null || errors === void 0 ? void 0 : errors.country));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "K4DB":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP")["default"];
var assertThisInitialized = __webpack_require__("T1e2");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "NToG":
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__("nOXW");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "OvAC":
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__("nOXW");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "PE9J":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "Pe5x":
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__("+IV6");
var isNativeReflectConstruct = __webpack_require__("0qAl");
var possibleConstructorReturn = __webpack_require__("K4DB");
function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return possibleConstructorReturn(this, result);
  };
}
module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "Qatm":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "RiSW":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("PE9J");
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "S411":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "SDJZ":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "T1e2":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "TR5t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"errortoast":"errortoast__ne9ep","errortoastgrid":"errortoastgrid__mhsRp","errortoasticon":"errortoasticon__3Q0lk","errortoastcontent":"errortoastcontent__4dMEL","errortoastclose":"errortoastclose__BMc5p"});

/***/ }),

/***/ "UpPA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ StateManagedSelect$1; });

// UNUSED EXPORTS: useStateManager, createFilter, defaultTheme, mergeStyles, components, NonceProvider

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function objectSpread2_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
// EXTERNAL MODULE: ../node_modules/preact/compat/dist/compat.module.js
var compat_module = __webpack_require__("l8WD");

// CONCATENATED MODULE: ../node_modules/react-select/dist/useStateManager-7e1e8489.esm.js




var _excluded = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref) {
  var _ref$defaultInputValu = _ref.defaultInputValue,
    defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
    _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
    defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
    propsInputValue = _ref.inputValue,
    propsMenuIsOpen = _ref.menuIsOpen,
    propsOnChange = _ref.onChange,
    propsOnInputChange = _ref.onInputChange,
    propsOnMenuClose = _ref.onMenuClose,
    propsOnMenuOpen = _ref.onMenuOpen,
    propsValue = _ref.value,
    restSelectProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = Object(compat_module["useState"])(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
    _useState2 = _slicedToArray(_useState, 2),
    stateInputValue = _useState2[0],
    setStateInputValue = _useState2[1];
  var _useState3 = Object(compat_module["useState"])(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
    _useState4 = _slicedToArray(_useState3, 2),
    stateMenuIsOpen = _useState4[0],
    setStateMenuIsOpen = _useState4[1];
  var _useState5 = Object(compat_module["useState"])(propsValue !== undefined ? propsValue : defaultValue),
    _useState6 = _slicedToArray(_useState5, 2),
    stateValue = _useState6[0],
    setStateValue = _useState6[1];
  var onChange = Object(compat_module["useCallback"])(function (value, actionMeta) {
    if (typeof propsOnChange === 'function') {
      propsOnChange(value, actionMeta);
    }
    setStateValue(value);
  }, [propsOnChange]);
  var onInputChange = Object(compat_module["useCallback"])(function (value, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === 'function') {
      newValue = propsOnInputChange(value, actionMeta);
    }
    setStateInputValue(newValue !== undefined ? newValue : value);
  }, [propsOnInputChange]);
  var onMenuOpen = Object(compat_module["useCallback"])(function () {
    if (typeof propsOnMenuOpen === 'function') {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = Object(compat_module["useCallback"])(function () {
    if (typeof propsOnMenuClose === 'function') {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== undefined ? propsValue : stateValue;
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restSelectProps), {}, {
    inputValue: inputValue,
    menuIsOpen: menuIsOpen,
    onChange: onChange,
    onInputChange: onInputChange,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen,
    value: value
  });
}

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ../node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */

  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);
  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }
  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}
var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;
    this._insertTag = function (tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (false) { var isImportRule; }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    if (false) {}
  };
  return StyleSheet;
}();

// CONCATENATED MODULE: ../node_modules/stylis/dist/stylis.mjs
var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var stylis_n = "comm";
var c = "rule";
var s = "decl";
var t = "@page";
var u = "@media";
var stylis_i = "@import";
var f = "@charset";
var stylis_o = "@viewport";
var l = "@supports";
var v = "@document";
var p = "@namespace";
var h = "@keyframes";
var b = "@font-face";
var w = "@counter-style";
var stylis_d = "@font-feature-values";
var stylis_$ = "@layer";
var g = Math.abs;
var k = String.fromCharCode;
var m = Object.assign;
function stylis_x(e, r) {
  return O(e, 0) ^ 45 ? (((r << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3) : 0;
}
function stylis_y(e) {
  return e.trim();
}
function j(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function z(e, r, a) {
  return e.replace(r, a);
}
function C(e, r) {
  return e.indexOf(r);
}
function O(e, r) {
  return e.charCodeAt(r) | 0;
}
function A(e, r, a) {
  return e.slice(r, a);
}
function M(e) {
  return e.length;
}
function S(e) {
  return e.length;
}
function q(e, r) {
  return r.push(e), e;
}
function B(e, r) {
  return e.map(r).join("");
}
var D = 1;
var E = 1;
var F = 0;
var G = 0;
var H = 0;
var I = "";
function J(e, r, a, n, c, s, t) {
  return {
    value: e,
    root: r,
    parent: a,
    type: n,
    props: c,
    children: s,
    line: D,
    column: E,
    length: t,
    return: ""
  };
}
function K(e, r) {
  return m(J("", null, null, "", null, null, 0), e, {
    length: -e.length
  }, r);
}
function L() {
  return H;
}
function N() {
  H = G > 0 ? O(I, --G) : 0;
  if (E--, H === 10) E = 1, D--;
  return H;
}
function P() {
  H = G < F ? O(I, G++) : 0;
  if (E++, H === 10) E = 1, D++;
  return H;
}
function Q() {
  return O(I, G);
}
function R() {
  return G;
}
function T(e, r) {
  return A(I, e, r);
}
function U(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function V(e) {
  return D = E = 1, F = M(I = e), G = 0, [];
}
function W(e) {
  return I = "", e;
}
function X(e) {
  return stylis_y(T(G - 1, re(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Y(e) {
  return W(_(V(e)));
}
function Z(e) {
  while (H = Q()) if (H < 33) P();else break;
  return U(e) > 2 || U(H) > 3 ? "" : " ";
}
function _(e) {
  while (P()) switch (U(H)) {
    case 0:
      q(ne(G - 1), e);
      break;
    case 2:
      q(X(H), e);
      break;
    default:
      q(k(H), e);
  }
  return e;
}
function ee(e, r) {
  while (--r && P()) if (H < 48 || H > 102 || H > 57 && H < 65 || H > 70 && H < 97) break;
  return T(e, R() + (r < 6 && Q() == 32 && P() == 32));
}
function re(e) {
  while (P()) switch (H) {
    case e:
      return G;
    case 34:
    case 39:
      if (e !== 34 && e !== 39) re(H);
      break;
    case 40:
      if (e === 41) re(e);
      break;
    case 92:
      P();
      break;
  }
  return G;
}
function ae(e, r) {
  while (P()) if (e + H === 47 + 10) break;else if (e + H === 42 + 42 && Q() === 47) break;
  return "/*" + T(r, G - 1) + "*" + k(e === 47 ? e : P());
}
function ne(e) {
  while (!U(Q())) P();
  return T(e, G);
}
function ce(e) {
  return W(se("", null, null, null, [""], e = V(e), 0, [0], e));
}
function se(e, r, a, n, c, s, t, u, i) {
  var f = 0;
  var o = 0;
  var l = t;
  var v = 0;
  var p = 0;
  var h = 0;
  var b = 1;
  var w = 1;
  var d = 1;
  var $ = 0;
  var g = "";
  var m = c;
  var x = s;
  var y = n;
  var j = g;
  while (w) switch (h = $, $ = P()) {
    case 40:
      if (h != 108 && O(j, l - 1) == 58) {
        if (C(j += z(X($), "&", "&\f"), "&\f") != -1) d = -1;
        break;
      }
    case 34:
    case 39:
    case 91:
      j += X($);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      j += Z(h);
      break;
    case 92:
      j += ee(R() - 1, 7);
      continue;
    case 47:
      switch (Q()) {
        case 42:
        case 47:
          q(ue(ae(P(), R()), r, a), i);
          break;
        default:
          j += "/";
      }
      break;
    case 123 * b:
      u[f++] = M(j) * d;
    case 125 * b:
    case 59:
    case 0:
      switch ($) {
        case 0:
        case 125:
          w = 0;
        case 59 + o:
          if (d == -1) j = z(j, /\f/g, "");
          if (p > 0 && M(j) - l) q(p > 32 ? ie(j + ";", n, a, l - 1) : ie(z(j, " ", "") + ";", n, a, l - 2), i);
          break;
        case 59:
          j += ";";
        default:
          q(y = te(j, r, a, f, o, c, u, g, m = [], x = [], l), s);
          if ($ === 123) if (o === 0) se(j, r, y, y, m, s, l, u, x);else switch (v === 99 && O(j, 3) === 110 ? 100 : v) {
            case 100:
            case 108:
            case 109:
            case 115:
              se(e, y, y, n && q(te(e, y, y, 0, 0, c, u, g, c, m = [], l), x), c, x, l, u, n ? m : x);
              break;
            default:
              se(j, y, y, y, [""], x, 0, u, x);
          }
      }
      f = o = p = 0, b = d = 1, g = j = "", l = t;
      break;
    case 58:
      l = 1 + M(j), p = h;
    default:
      if (b < 1) if ($ == 123) --b;else if ($ == 125 && b++ == 0 && N() == 125) continue;
      switch (j += k($), $ * b) {
        case 38:
          d = o > 0 ? 1 : (j += "\f", -1);
          break;
        case 44:
          u[f++] = (M(j) - 1) * d, d = 1;
          break;
        case 64:
          if (Q() === 45) j += X(P());
          v = Q(), o = l = M(g = j += ne(R())), $++;
          break;
        case 45:
          if (h === 45 && M(j) == 2) b = 0;
      }
  }
  return s;
}
function te(e, r, a, n, s, t, u, i, f, o, l) {
  var v = s - 1;
  var p = s === 0 ? t : [""];
  var h = S(p);
  for (var b = 0, w = 0, d = 0; b < n; ++b) for (var $ = 0, k = A(e, v + 1, v = g(w = u[b])), m = e; $ < h; ++$) if (m = stylis_y(w > 0 ? p[$] + " " + k : z(k, /&\f/g, p[$]))) f[d++] = m;
  return J(e, r, a, s === 0 ? c : i, f, o, l);
}
function ue(e, r, a) {
  return J(e, r, a, stylis_n, k(L()), A(e, 2, -2), 0);
}
function ie(e, r, a, n) {
  return J(e, r, a, s, A(e, 0, n), A(e, n + 1, -1), n);
}
function fe(n, c, s) {
  switch (stylis_x(n, c)) {
    case 5103:
      return a + "print-" + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + n + n;
    case 4789:
      return r + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + n + r + n + e + n + n;
    case 5936:
      switch (O(n, c + 11)) {
        case 114:
          return a + n + e + z(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return a + n + e + z(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return a + n + e + z(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    case 6828:
    case 4268:
    case 2903:
      return a + n + e + n + n;
    case 6165:
      return a + n + e + "flex-" + n + n;
    case 5187:
      return a + n + z(n, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + n;
    case 5443:
      return a + n + e + "flex-item-" + z(n, /flex-|-self/g, "") + (!j(n, /flex-|baseline/) ? e + "grid-row-" + z(n, /flex-|-self/g, "") : "") + n;
    case 4675:
      return a + n + e + "flex-line-pack" + z(n, /align-content|flex-|-self/g, "") + n;
    case 5548:
      return a + n + e + z(n, "shrink", "negative") + n;
    case 5292:
      return a + n + e + z(n, "basis", "preferred-size") + n;
    case 6060:
      return a + "box-" + z(n, "-grow", "") + a + n + e + z(n, "grow", "positive") + n;
    case 4554:
      return a + z(n, /([^-])(transform)/g, "$1" + a + "$2") + n;
    case 6187:
      return z(z(z(n, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), n, "") + n;
    case 5495:
    case 3959:
      return z(n, /(image-set\([^]*)/, a + "$1" + "$`$1");
    case 4968:
      return z(z(n, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + n + n;
    case 4200:
      if (!j(n, /flex-|baseline/)) return e + "grid-column-align" + A(n, c) + n;
      break;
    case 2592:
    case 3360:
      return e + z(n, "template-", "") + n;
    case 4384:
    case 3616:
      if (s && s.some(function (e, r) {
        return c = r, j(e.props, /grid-\w+-end/);
      })) {
        return ~C(n + (s = s[c].value), "span") ? n : e + z(n, "-start", "") + n + e + "grid-row-span:" + (~C(s, "span") ? j(s, /\d+/) : +j(s, /\d+/) - +j(n, /\d+/)) + ";";
      }
      return e + z(n, "-start", "") + n;
    case 4896:
    case 4128:
      return s && s.some(function (e) {
        return j(e.props, /grid-\w+-start/);
      }) ? n : e + z(z(n, "-end", "-span"), "span ", "") + n;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return z(n, /(.+)-inline(.+)/, a + "$1$2") + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (M(n) - 1 - c > 6) switch (O(n, c + 1)) {
        case 109:
          if (O(n, c + 4) !== 45) break;
        case 102:
          return z(n, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3" + "$1" + r + (O(n, c + 3) == 108 ? "$3" : "$2-$3")) + n;
        case 115:
          return ~C(n, "stretch") ? fe(z(n, "stretch", "fill-available"), c, s) + n : n;
      }
      break;
    case 5152:
    case 5920:
      return z(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (r, a, c, s, t, u, i) {
        return e + a + ":" + c + i + (s ? e + a + "-span:" + (t ? u : +u - +c) + i : "") + n;
      });
    case 4949:
      if (O(n, c + 6) === 121) return z(n, ":", ":" + a) + n;
      break;
    case 6444:
      switch (O(n, O(n, 14) === 45 ? 18 : 11)) {
        case 120:
          return z(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + a + (O(n, 14) === 45 ? "inline-" : "") + "box$3" + "$1" + a + "$2$3" + "$1" + e + "$2box$3") + n;
        case 100:
          return z(n, ":", ":" + e) + n;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return z(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function oe(e, r) {
  var a = "";
  var n = S(e);
  for (var c = 0; c < n; c++) a += r(e[c], c, e, r) || "";
  return a;
}
function le(e, r, a, t) {
  switch (e.type) {
    case stylis_$:
      if (e.children.length) break;
    case stylis_i:
    case s:
      return e.return = e.return || e.value;
    case stylis_n:
      return "";
    case h:
      return e.return = e.value + "{" + oe(e.children, t) + "}";
    case c:
      e.value = e.props.join(",");
  }
  return M(a = oe(e.children, t)) ? e.return = e.value + "{" + a + "}" : "";
}
function ve(e) {
  var r = S(e);
  return function (a, n, c, s) {
    var t = "";
    for (var u = 0; u < r; u++) t += e[u](a, n, c, s) || "";
    return t;
  };
}
function pe(e) {
  return function (r) {
    if (!r.root) if (r = r.return) e(r);
  };
}
function he(n, t, u, i) {
  if (n.length > -1) if (!n.return) switch (n.type) {
    case s:
      n.return = fe(n.value, n.length, u);
      return;
    case h:
      return oe([K(n, {
        value: z(n.value, "@", "@" + a)
      })], i);
    case c:
      if (n.length) return B(n.props, function (c) {
        switch (j(c, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return oe([K(n, {
              props: [z(c, /:(read-\w+)/, ":" + r + "$1")]
            })], i);
          case "::placeholder":
            return oe([K(n, {
              props: [z(c, /:(plac\w+)/, ":" + a + "input-$1")]
            }), K(n, {
              props: [z(c, /:(plac\w+)/, ":" + r + "$1")]
            }), K(n, {
              props: [z(c, /:(plac\w+)/, e + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}
function be(e) {
  switch (e.type) {
    case c:
      e.props = e.props.map(function (r) {
        return B(Y(r), function (r, a, n) {
          switch (O(r, 0)) {
            case 12:
              return A(r, 1, M(r));
            case 0:
            case 40:
            case 43:
            case 62:
            case 126:
              return r;
            case 58:
              if (n[++a] === "global") n[a] = "", n[++a] = "\f" + A(n[a], a = 1, -1);
            case 32:
              return a === 1 ? "" : r;
            default:
              switch (a) {
                case 0:
                  e = r;
                  return S(n) > 1 ? "" : r;
                case a = S(n) - 1:
                case 2:
                  return a === 2 ? r + e + e : r + e;
                default:
                  return r;
              }
          }
        });
      });
  }
}

// CONCATENATED MODULE: ../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

// CONCATENATED MODULE: ../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// CONCATENATED MODULE: ../node_modules/@emotion/cache/dist/emotion-cache.esm.js




var emotion_cache_esm_identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = Q(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (U(character)) {
      break;
    }
    P();
  }
  return T(begin, G);
};
var emotion_cache_esm_toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;
  do {
    switch (U(character)) {
      case 0:
        // &\f
        if (character === 38 && Q() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }
        parsed[index] += emotion_cache_esm_identifierWithPointTracking(G - 1, points, index);
        break;
      case 2:
        parsed[index] += X(character);
        break;
      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = Q() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += k(character);
    }
  } while (character = P());
  return parsed;
};
var emotion_cache_esm_getRules = function getRules(value, points) {
  return W(emotion_cache_esm_toRules(V(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent ||
  // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value,
    parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case

  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */ && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = emotion_cache_esm_getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;
    if (
    // charcode for l
    value.charCodeAt(0) === 108 &&
    // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? element.parent.children :
      // global rule at the root level
      children;
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];
        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version

        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};
var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user

var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (stylis_x(value, length)) {
    // color-adjust
    case 5103:
      return a + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + value + r + value + e + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return a + value + e + value + value;
    // order

    case 6165:
      return a + value + e + 'flex-' + value + value;
    // align-items

    case 5187:
      return a + value + z(value, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return a + value + e + 'flex-item-' + z(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return a + value + e + 'flex-line-pack' + z(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return a + value + e + z(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return a + value + e + z(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return a + 'box-' + z(value, '-grow', '') + a + value + e + z(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return a + z(value, /([^-])(transform)/g, '$1' + a + '$2') + value;
    // cursor

    case 6187:
      return z(z(z(value, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return z(value, /(image-set\([^]*)/, a + '$1' + '$`$1');
    // justify-content

    case 4968:
      return z(z(value, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + a + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return z(value, /(.+)-inline(.+)/, a + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (M(value) - 1 - length > 6) switch (O(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (O(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return z(value, /(.+:)(.+)-([^]+)/, '$1' + a + '$2-$3' + '$1' + r + (O(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~C(value, 'stretch') ? prefix(z(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (O(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (O(value, M(value) - 3 - (~C(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return z(value, ':', ':' + a) + value;
        // (inline-)?fl(e)x

        case 101:
          return z(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + a + (O(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + a + '$2$3' + '$1' + e + '$2box$3') + value;
      }
      break;
    // writing-mode

    case 5936:
      switch (O(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return a + value + e + z(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return a + value + e + z(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return a + value + e + z(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }
      return a + value + e + value + value;
  }
  return value;
}
var emotion_cache_esm_prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case s:
      element["return"] = prefix(element.value, element.length);
      break;
    case h:
      return oe([K(element, {
        value: z(element.value, '@', '@' + a)
      })], callback);
    case c:
      if (element.length) return B(element.props, function (value) {
        switch (j(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return oe([K(element, {
              props: [z(value, /:(read-\w+)/, ':' + r + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return oe([K(element, {
              props: [z(value, /:(plac\w+)/, ':' + a + 'input-$1')]
            }), K(element, {
              props: [z(value, /:(plac\w+)/, ':' + r + '$1')]
            }), K(element, {
              props: [z(value, /:(plac\w+)/, e + 'input-$1')]
            })], callback);
        }
        return '';
      });
  }
};
var isBrowser = typeof document !== 'undefined';
var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
  return memoize(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [emotion_cache_esm_prefixer];
var emotion_cache_esm_createCache = function createCache(options) {
  var key = options.key;
  if (false) {}
  if (isBrowser && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');
      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (false) {}
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (false) {}
  if (isBrowser) {
    var currentSheet;
    var finalizingPlugins = [le,  false ? undefined : pe(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = ve(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis(styles) {
      return oe(ce(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (false) {}
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [le];
    var _serializer = ve(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis(styles) {
      return oe(ce(styles), _serializer);
    }; // $FlowFixMe

    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);
      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        if (
        // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        false) {}
        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__("GeWT");
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ../node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var emotion_react_isolated_hnrs_esm_hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent) {
  return hoist_non_react_statics_cjs_default()(targetComponent, sourceComponent);
};

// CONCATENATED MODULE: ../node_modules/@emotion/utils/dist/emotion-utils.esm.js
var emotion_utils_esm_isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if (
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false ||
  // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  emotion_utils_esm_isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
      if (!emotion_utils_esm_isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== undefined);
    if (!emotion_utils_esm_isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

// CONCATENATED MODULE: ../node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
    i = 0,
    len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array

  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.

  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

// CONCATENATED MODULE: ../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// CONCATENATED MODULE: ../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
function emotion_serialize_esm_typeof(obj) { "@babel/helpers - typeof"; return emotion_serialize_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, emotion_serialize_esm_typeof(obj); }



var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var emotion_serialize_esm_processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }
var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}
    return interpolation;
  }
  switch (emotion_serialize_esm_typeof(interpolation)) {
    case 'boolean':
      {
        return '';
      }
    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== undefined) {
          var next = interpolation.next;
          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles = interpolation.styles + ";";
          if (false) {}
          return styles;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (false) {}
        break;
      }
    case 'string':
      if (false) { var replaced, matched; }
      break;
  } // finalize string values (regular strings and functions interpolated into css calls)

  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (emotion_serialize_esm_typeof(value) !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + emotion_serialize_esm_processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + emotion_serialize_esm_processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
            default:
              {
                if (false) {}
                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
var emotion_serialize_esm_serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && emotion_serialize_esm_typeof(args[0]) === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];
  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (false) {}
    styles += strings[0];
  } // we start at 1 since we've already handled the first arg

  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      if (false) {}
      styles += strings[i];
    }
  }
  var sourceMap;
  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time

  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' +
    // $FlowFixMe we know it's not null
    match[1];
  }
  var name = murmur2(styles) + identifierName;
  if (false) {}
  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

// CONCATENATED MODULE: ../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js

var emotion_use_insertion_effect_with_fallbacks_esm_isBrowser = typeof document !== 'undefined';
var syncFallback = function syncFallback(create) {
  return create();
};
var useInsertionEffect = compat_module['useInsertion' + 'Effect'] ? compat_module['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = !emotion_use_insertion_effect_with_fallbacks_esm_isBrowser ? syncFallback : useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || compat_module["useLayoutEffect"];

// CONCATENATED MODULE: ../node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js
function emotion_element_6bdfffb2_esm_typeof(obj) { "@babel/helpers - typeof"; return emotion_element_6bdfffb2_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, emotion_element_6bdfffb2_esm_typeof(obj); }









var emotion_element_6bdfffb2_esm_isBrowser = typeof document !== 'undefined';
var emotion_element_6bdfffb2_esm_hasOwnProperty = {}.hasOwnProperty;
var EmotionCacheContext = /* #__PURE__ */compat_module["createContext"](
// we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */emotion_cache_esm_createCache({
  key: 'css'
}) : null);
if (false) {}
var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return Object(compat_module["useContext"])(EmotionCacheContext);
};
var emotion_element_6bdfffb2_esm_withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/Object(compat_module["forwardRef"])(function (props, ref) {
    // the cache will never be null in the browser
    var cache = Object(compat_module["useContext"])(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
if (!emotion_element_6bdfffb2_esm_isBrowser) {
  emotion_element_6bdfffb2_esm_withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = Object(compat_module["useContext"])(EmotionCacheContext);
      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = emotion_cache_esm_createCache({
          key: 'css'
        });
        return /*#__PURE__*/compat_module["createElement"](EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}
var ThemeContext = /* #__PURE__ */compat_module["createContext"]({});
if (false) {}
var emotion_element_6bdfffb2_esm_useTheme = function useTheme() {
  return compat_module["useContext"](ThemeContext);
};
var emotion_element_6bdfffb2_esm_getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);
    if (false) {}
    return mergedTheme;
  }
  if (false) {}
  return _extends({}, outerTheme, theme);
};
var createCacheWithTheme = /* #__PURE__ */weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return emotion_element_6bdfffb2_esm_getTheme(outerTheme, theme);
  });
});
var emotion_element_6bdfffb2_esm_ThemeProvider = function ThemeProvider(props) {
  var theme = compat_module["useContext"](ThemeContext);
  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }
  return /*#__PURE__*/compat_module["createElement"](ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';
  var render = function render(props, ref) {
    var theme = compat_module["useContext"](ThemeContext);
    return /*#__PURE__*/compat_module["createElement"](Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe

  var WithTheme = /*#__PURE__*/compat_module["forwardRef"](render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return emotion_react_isolated_hnrs_esm_hoistNonReactStatics(WithTheme, Component);
}
var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};
var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};
var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }
  return undefined;
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}
  var newProps = {};
  for (var key in props) {
    if (emotion_element_6bdfffb2_esm_hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if (false) { var label; }
  return newProps;
};
var emotion_element_6bdfffb2_esm_Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
    serialized = _ref.serialized,
    isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!emotion_element_6bdfffb2_esm_isBrowser && rules !== undefined) {
    var _ref2;
    var serializedNames = serialized.name;
    var next = serialized.next;
    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }
    return /*#__PURE__*/compat_module["createElement"]("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var Emotion = /* #__PURE__ */emotion_element_6bdfffb2_esm_withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';
  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }
  var serialized = emotion_serialize_esm_serializeStyles(registeredStyles, undefined, compat_module["useContext"](ThemeContext));
  if (false) { var labelFromStack; }
  className += cache.key + "-" + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (emotion_element_6bdfffb2_esm_hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || false)) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/compat_module["createElement"](compat_module["Fragment"], null, /*#__PURE__*/compat_module["createElement"](emotion_element_6bdfffb2_esm_Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/compat_module["createElement"](WrappedComponent, newProps));
});
if (false) {}
var Emotion$1 = Emotion;

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("8VmE");

// CONCATENATED MODULE: ../node_modules/@emotion/react/dist/emotion-react.esm.js
function emotion_react_esm_typeof(obj) { "@babel/helpers - typeof"; return emotion_react_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, emotion_react_esm_typeof(obj); }











var pkg = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        "default": "./dist/emotion-react.esm.js"
      },
      "import": "./dist/emotion-react.cjs.mjs",
      "default": "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        "import": "./macro.d.mts",
        "default": "./macro.d.ts"
      },
      "default": "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.*"],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"],
    umdName: "emotionReact",
    exports: {
      envConditions: ["browser", "worker"],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            "import": "./macro.d.mts",
            "default": "./macro.d.ts"
          },
          "default": "./macro.js"
        }
      }
    }
  }
};
var emotion_react_esm_jsx = function jsx(type, props) {
  var args = arguments;
  if (props == null || !emotion_element_6bdfffb2_esm_hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return compat_module["createElement"].apply(undefined, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe

  return compat_module["createElement"].apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */emotion_element_6bdfffb2_esm_withEmotionCache(function (props, cache) {
  if (false) {}
  var styles = props.styles;
  var serialized = emotion_serialize_esm_serializeStyles([styles], undefined, compat_module["useContext"](ThemeContext));
  if (!emotion_element_6bdfffb2_esm_isBrowser) {
    var _ref;
    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;
    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }
    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);
    if (shouldCache) {
      return null;
    }
    return /*#__PURE__*/compat_module["createElement"]("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything

  var sheetRef = compat_module["useRef"]();
  useInsertionEffectWithLayoutFallback(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
      rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
if (false) {}
function emotion_react_esm_css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return emotion_serialize_esm_serializeStyles(args);
}
var keyframes = function keyframes() {
  var insertable = emotion_react_esm_css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (emotion_react_esm_typeof(arg)) {
      case 'boolean':
        break;
      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (false) {}
            toAdd = '';
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }
          break;
        }
      default:
        {
          toAdd = arg;
        }
    }
    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}
var emotion_react_esm_Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
    serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    var rules = '';
    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles(cache, serializedArr[i], false);
      if (!emotion_element_6bdfffb2_esm_isBrowser && res !== undefined) {
        rules += res;
      }
    }
    if (!emotion_element_6bdfffb2_esm_isBrowser) {
      return rules;
    }
  });
  if (!emotion_element_6bdfffb2_esm_isBrowser && rules.length !== 0) {
    var _ref2;
    return /*#__PURE__*/compat_module["createElement"]("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function (serialized) {
      return serialized.name;
    }).join(' '), _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var ClassNames = /* #__PURE__ */emotion_element_6bdfffb2_esm_withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css = function css() {
    if (hasRendered && "production" !== 'production') {
      throw new Error('css can only be used during render');
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = emotion_serialize_esm_serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };
  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {
      throw new Error('cx can only be used during render');
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css, classnames(args));
  };
  var content = {
    css: css,
    cx: cx,
    theme: compat_module["useContext"](ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/compat_module["createElement"](compat_module["Fragment"], null, /*#__PURE__*/compat_module["createElement"](emotion_react_esm_Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});
if (false) {}
if (false) { var globalKey, globalContext, isTestEnv, emotion_react_esm_isBrowser; }

// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
// CONCATENATED MODULE: ../node_modules/@floating-ui/utils/dist/floating-ui.utils.esm.js
function floating_ui_utils_esm_typeof(obj) { "@babel/helpers - typeof"; return floating_ui_utils_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, floating_ui_utils_esm_typeof(obj); }
function floating_ui_utils_esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? floating_ui_utils_esm_ownKeys(Object(source), !0).forEach(function (key) { floating_ui_utils_esm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : floating_ui_utils_esm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function floating_ui_utils_esm_defineProperty(obj, key, value) { key = floating_ui_utils_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function floating_ui_utils_esm_toPropertyKey(arg) { var key = floating_ui_utils_esm_toPrimitive(arg, "string"); return floating_ui_utils_esm_typeof(key) === "symbol" ? key : String(key); }
function floating_ui_utils_esm_toPrimitive(input, hint) { if (floating_ui_utils_esm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (floating_ui_utils_esm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var sides = ['top', 'right', 'bottom', 'left'];
var alignments = ['start', 'end'];
var floating_ui_utils_esm_placements = /*#__PURE__*/sides.reduce(function (acc, side) {
  return acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]);
}, []);
var min = Math.min;
var floating_ui_utils_esm_max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = function createCoords(v) {
  return {
    x: v,
    y: v
  };
};
var oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
var oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return floating_ui_utils_esm_max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  var alignment = getAlignment(placement);
  var alignmentAxis = getAlignmentAxis(placement);
  var length = getAxisLength(alignmentAxis);
  var mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, function (alignment) {
    return oppositeAlignmentMap[alignment];
  });
}
function getSideList(side, isStart, rtl) {
  var lr = ['left', 'right'];
  var rl = ['right', 'left'];
  var tb = ['top', 'bottom'];
  var bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  var alignment = getAlignment(placement);
  var list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(function (side) {
      return side + "-" + alignment;
    });
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (side) {
    return oppositeSideMap[side];
  });
}
function expandPaddingObject(padding) {
  return _objectSpread({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return _objectSpread(_objectSpread({}, rect), {}, {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// CONCATENATED MODULE: ../node_modules/@floating-ui/core/dist/floating-ui.core.esm.js
var floating_ui_core_esm_excluded = ["crossAxis", "alignment", "allowedPlacements", "autoAlignment"],
  _excluded2 = ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"],
  _excluded3 = ["strategy"],
  _excluded4 = ["mainAxis", "crossAxis", "limiter"],
  _excluded5 = ["apply"];
function floating_ui_core_esm_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = floating_ui_core_esm_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function floating_ui_core_esm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function floating_ui_core_esm_toConsumableArray(arr) { return floating_ui_core_esm_arrayWithoutHoles(arr) || floating_ui_core_esm_iterableToArray(arr) || floating_ui_core_esm_unsupportedIterableToArray(arr) || floating_ui_core_esm_nonIterableSpread(); }
function floating_ui_core_esm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function floating_ui_core_esm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return floating_ui_core_esm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return floating_ui_core_esm_arrayLikeToArray(o, minLen); }
function floating_ui_core_esm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function floating_ui_core_esm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return floating_ui_core_esm_arrayLikeToArray(arr); }
function floating_ui_core_esm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function floating_ui_core_esm_typeof(obj) { "@babel/helpers - typeof"; return floating_ui_core_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, floating_ui_core_esm_typeof(obj); }
function floating_ui_core_esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function floating_ui_core_esm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? floating_ui_core_esm_ownKeys(Object(source), !0).forEach(function (key) { floating_ui_core_esm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : floating_ui_core_esm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function floating_ui_core_esm_defineProperty(obj, key, value) { key = floating_ui_core_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function floating_ui_core_esm_toPropertyKey(arg) { var key = floating_ui_core_esm_toPrimitive(arg, "string"); return floating_ui_core_esm_typeof(key) === "symbol" ? key : String(key); }
function floating_ui_core_esm_toPrimitive(input, hint) { if (floating_ui_core_esm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (floating_ui_core_esm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function computeCoordsFromPlacement(_ref, placement, rtl) {
  var reference = _ref.reference,
    floating = _ref.floating;
  var sideAxis = getSideAxis(placement);
  var alignmentAxis = getAlignmentAxis(placement);
  var alignLength = getAxisLength(alignmentAxis);
  var side = getSide(placement);
  var isVertical = sideAxis === 'y';
  var commonX = reference.x + reference.width / 2 - floating.width / 2;
  var commonY = reference.y + reference.height / 2 - floating.height / 2;
  var commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  var coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
var floating_ui_core_esm_computePosition = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (reference, floating, config) {
    var _config$placement = config.placement,
      placement = _config$placement === void 0 ? 'bottom' : _config$placement,
      _config$strategy = config.strategy,
      strategy = _config$strategy === void 0 ? 'absolute' : _config$strategy,
      _config$middleware = config.middleware,
      middleware = _config$middleware === void 0 ? [] : _config$middleware,
      platform = config.platform;
    var validMiddleware = middleware.filter(Boolean);
    var rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(floating);
    var rects = yield platform.getElementRects({
      reference: reference,
      floating: floating,
      strategy: strategy
    });
    var _computeCoordsFromPla = computeCoordsFromPlacement(rects, placement, rtl),
      x = _computeCoordsFromPla.x,
      y = _computeCoordsFromPla.y;
    var statefulPlacement = placement;
    var middlewareData = {};
    var resetCount = 0;
    for (var i = 0; i < validMiddleware.length; i++) {
      var _validMiddleware$i = validMiddleware[i],
        name = _validMiddleware$i.name,
        fn = _validMiddleware$i.fn;
      var _yield$fn = yield fn({
          x: x,
          y: y,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy: strategy,
          middlewareData: middlewareData,
          rects: rects,
          platform: platform,
          elements: {
            reference: reference,
            floating: floating
          }
        }),
        nextX = _yield$fn.x,
        nextY = _yield$fn.y,
        data = _yield$fn.data,
        reset = _yield$fn.reset;
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = floating_ui_core_esm_objectSpread(floating_ui_core_esm_objectSpread({}, middlewareData), {}, floating_ui_core_esm_defineProperty({}, name, floating_ui_core_esm_objectSpread(floating_ui_core_esm_objectSpread({}, middlewareData[name]), data)));
      if (reset && resetCount <= 50) {
        resetCount++;
        if (floating_ui_core_esm_typeof(reset) === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? yield platform.getElementRects({
              reference: reference,
              floating: floating,
              strategy: strategy
            }) : reset.rects;
          }
          var _computeCoordsFromPla2 = computeCoordsFromPlacement(rects, statefulPlacement, rtl);
          x = _computeCoordsFromPla2.x;
          y = _computeCoordsFromPla2.y;
        }
        i = -1;
        continue;
      }
    }
    return {
      x: x,
      y: y,
      placement: statefulPlacement,
      strategy: strategy,
      middlewareData: middlewareData
    };
  });
  return function computePosition(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
function detectOverflow(_x4, _x5) {
  return _detectOverflow.apply(this, arguments);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
function _detectOverflow() {
  _detectOverflow = _asyncToGenerator(function* (state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    var x = state.x,
      y = state.y,
      platform = state.platform,
      rects = state.rects,
      elements = state.elements,
      strategy = state.strategy;
    var _evaluate8 = evaluate(options, state),
      _evaluate8$boundary = _evaluate8.boundary,
      boundary = _evaluate8$boundary === void 0 ? 'clippingAncestors' : _evaluate8$boundary,
      _evaluate8$rootBounda = _evaluate8.rootBoundary,
      rootBoundary = _evaluate8$rootBounda === void 0 ? 'viewport' : _evaluate8$rootBounda,
      _evaluate8$elementCon = _evaluate8.elementContext,
      elementContext = _evaluate8$elementCon === void 0 ? 'floating' : _evaluate8$elementCon,
      _evaluate8$altBoundar = _evaluate8.altBoundary,
      altBoundary = _evaluate8$altBoundar === void 0 ? false : _evaluate8$altBoundar,
      _evaluate8$padding = _evaluate8.padding,
      padding = _evaluate8$padding === void 0 ? 0 : _evaluate8$padding;
    var paddingObject = getPaddingObject(padding);
    var altContext = elementContext === 'floating' ? 'reference' : 'floating';
    var element = elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = rectToClientRect(yield platform.getClippingRect({
      element: ((_await$platform$isEle = yield platform.isElement == null ? void 0 : platform.isElement(element)) != null ? _await$platform$isEle : true) ? element : element.contextElement || (yield platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
      boundary: boundary,
      rootBoundary: rootBoundary,
      strategy: strategy
    }));
    var rect = elementContext === 'floating' ? floating_ui_core_esm_objectSpread(floating_ui_core_esm_objectSpread({}, rects.floating), {}, {
      x: x,
      y: y
    }) : rects.reference;
    var offsetParent = yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating);
    var offsetScale = (yield platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? (yield platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    var elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? yield platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect: rect,
      offsetParent: offsetParent,
      strategy: strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  });
  return _detectOverflow.apply(this, arguments);
}
var floating_ui_core_esm_arrow = function arrow(options) {
  return {
    name: 'arrow',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator(function* () {
        var _data, _ref4;
        var x = state.x,
          y = state.y,
          placement = state.placement,
          rects = state.rects,
          platform = state.platform,
          elements = state.elements;
        // Since `element` is required, we don't Partial<> the type.
        var _ref3 = evaluate(options, state) || {},
          element = _ref3.element,
          _ref3$padding = _ref3.padding,
          padding = _ref3$padding === void 0 ? 0 : _ref3$padding;
        if (element == null) {
          return {};
        }
        var paddingObject = getPaddingObject(padding);
        var coords = {
          x: x,
          y: y
        };
        var axis = getAlignmentAxis(placement);
        var length = getAxisLength(axis);
        var arrowDimensions = yield platform.getDimensions(element);
        var isYAxis = axis === 'y';
        var minProp = isYAxis ? 'top' : 'left';
        var maxProp = isYAxis ? 'bottom' : 'right';
        var clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
        var endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        var startDiff = coords[axis] - rects.reference[axis];
        var arrowOffsetParent = yield platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element);
        var clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

        // DOM platform can return `window` as the `offsetParent`.
        if (!clientSize || !(yield platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
          clientSize = elements.floating[clientProp] || rects.floating[length];
        }
        var centerToReference = endDiff / 2 - startDiff / 2;

        // If the padding is large enough that it causes the arrow to no longer be
        // centered, modify the padding so that it is centered.
        var largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
        var minPadding = min(paddingObject[minProp], largestPossiblePadding);
        var maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

        // Make sure the arrow doesn't overflow the floating element if the center
        // point is outside the floating element's bounds.
        var min$1 = minPadding;
        var max = clientSize - arrowDimensions[length] - maxPadding;
        var center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        var offset = clamp(min$1, center, max);

        // If the reference is small enough that the arrow's padding causes it to
        // to point to nothing for an aligned placement, adjust the offset of the
        // floating element itself. This stops `shift()` from taking action, but can
        // be worked around by calling it again after the `arrow()` if desired.
        var shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
        var alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max - center : 0;
        return _ref4 = {}, floating_ui_core_esm_defineProperty(_ref4, axis, coords[axis] - alignmentOffset), floating_ui_core_esm_defineProperty(_ref4, "data", (_data = {}, floating_ui_core_esm_defineProperty(_data, axis, offset), floating_ui_core_esm_defineProperty(_data, "centerOffset", center - offset + alignmentOffset), _data)), _ref4;
      })();
    }
  };
};
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  var allowedPlacementsSortedByAlignment = alignment ? [].concat(floating_ui_core_esm_toConsumableArray(allowedPlacements.filter(function (placement) {
    return getAlignment(placement) === alignment;
  })), floating_ui_core_esm_toConsumableArray(allowedPlacements.filter(function (placement) {
    return getAlignment(placement) !== alignment;
  }))) : allowedPlacements.filter(function (placement) {
    return getSide(placement) === placement;
  });
  return allowedPlacementsSortedByAlignment.filter(function (placement) {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
var floating_ui_core_esm_autoPlacement = function autoPlacement(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator(function* () {
        var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
        var rects = state.rects,
          middlewareData = state.middlewareData,
          placement = state.placement,
          platform = state.platform,
          elements = state.elements;
        var _evaluate = evaluate(options, state),
          _evaluate$crossAxis = _evaluate.crossAxis,
          crossAxis = _evaluate$crossAxis === void 0 ? false : _evaluate$crossAxis,
          alignment = _evaluate.alignment,
          _evaluate$allowedPlac = _evaluate.allowedPlacements,
          allowedPlacements = _evaluate$allowedPlac === void 0 ? floating_ui_utils_esm_placements : _evaluate$allowedPlac,
          _evaluate$autoAlignme = _evaluate.autoAlignment,
          autoAlignment = _evaluate$autoAlignme === void 0 ? true : _evaluate$autoAlignme,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_evaluate, floating_ui_core_esm_excluded);
        var placements$1 = alignment !== undefined || allowedPlacements === floating_ui_utils_esm_placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
        var overflow = yield detectOverflow(state, detectOverflowOptions);
        var currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
        var currentPlacement = placements$1[currentIndex];
        if (currentPlacement == null) {
          return {};
        }
        var alignmentSides = getAlignmentSides(currentPlacement, rects, yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));

        // Make `computeCoords` start from the right place.
        if (placement !== currentPlacement) {
          return {
            reset: {
              placement: placements$1[0]
            }
          };
        }
        var currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
        var allOverflows = [].concat(floating_ui_core_esm_toConsumableArray(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), [{
          placement: currentPlacement,
          overflows: currentOverflows
        }]);
        var nextPlacement = placements$1[currentIndex + 1];

        // There are more placements to check.
        if (nextPlacement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        var placementsSortedByMostSpace = allOverflows.map(function (d) {
          var alignment = getAlignment(d.placement);
          return [d.placement, alignment && crossAxis ?
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce(function (acc, v) {
            return acc + v;
          }, 0) :
          // Check only the mainAxis.
          d.overflows[0], d.overflows];
        }).sort(function (a, b) {
          return a[1] - b[1];
        });
        var placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(function (d) {
          return d[2].slice(0,
          // Aligned placements should not check their opposite crossAxis
          // side.
          getAlignment(d[0]) ? 2 : 3).every(function (v) {
            return v <= 0;
          });
        });
        var resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
        if (resetPlacement !== placement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: resetPlacement
            }
          };
        }
        return {};
      })();
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
var floating_ui_core_esm_flip = function flip(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator(function* () {
        var _middlewareData$flip;
        var placement = state.placement,
          middlewareData = state.middlewareData,
          rects = state.rects,
          initialPlacement = state.initialPlacement,
          platform = state.platform,
          elements = state.elements;
        var _evaluate2 = evaluate(options, state),
          _evaluate2$mainAxis = _evaluate2.mainAxis,
          checkMainAxis = _evaluate2$mainAxis === void 0 ? true : _evaluate2$mainAxis,
          _evaluate2$crossAxis = _evaluate2.crossAxis,
          checkCrossAxis = _evaluate2$crossAxis === void 0 ? true : _evaluate2$crossAxis,
          specifiedFallbackPlacements = _evaluate2.fallbackPlacements,
          _evaluate2$fallbackSt = _evaluate2.fallbackStrategy,
          fallbackStrategy = _evaluate2$fallbackSt === void 0 ? 'bestFit' : _evaluate2$fallbackSt,
          _evaluate2$fallbackAx = _evaluate2.fallbackAxisSideDirection,
          fallbackAxisSideDirection = _evaluate2$fallbackAx === void 0 ? 'none' : _evaluate2$fallbackAx,
          _evaluate2$flipAlignm = _evaluate2.flipAlignment,
          flipAlignment = _evaluate2$flipAlignm === void 0 ? true : _evaluate2$flipAlignm,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_evaluate2, _excluded2);
        var side = getSide(placement);
        var isBasePlacement = getSide(initialPlacement) === initialPlacement;
        var rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push.apply(fallbackPlacements, floating_ui_core_esm_toConsumableArray(getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl)));
        }
        var placements = [initialPlacement].concat(floating_ui_core_esm_toConsumableArray(fallbackPlacements));
        var overflow = yield detectOverflow(state, detectOverflowOptions);
        var overflows = [];
        var overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          var _sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[_sides[0]], overflow[_sides[1]]);
        }
        overflowsData = [].concat(floating_ui_core_esm_toConsumableArray(overflowsData), [{
          placement: placement,
          overflows: overflows
        }]);

        // One or more sides is overflowing.
        if (!overflows.every(function (side) {
          return side <= 0;
        })) {
          var _middlewareData$flip2, _overflowsData$filter;
          var nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          var nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          var resetPlacement = (_overflowsData$filter = overflowsData.filter(function (d) {
            return d.overflows[0] <= 0;
          }).sort(function (a, b) {
            return a.overflows[1] - b.overflows[1];
          })[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
                {
                  var _overflowsData$map$so;
                  var _placement = (_overflowsData$map$so = overflowsData.map(function (d) {
                    return [d.placement, d.overflows.filter(function (overflow) {
                      return overflow > 0;
                    }).reduce(function (acc, overflow) {
                      return acc + overflow;
                    }, 0)];
                  }).sort(function (a, b) {
                    return a[1] - b[1];
                  })[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (_placement) {
                    resetPlacement = _placement;
                  }
                  break;
                }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      })();
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(function (side) {
    return overflow[side] >= 0;
  });
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
var floating_ui_core_esm_hide = function hide(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator(function* () {
        var rects = state.rects;
        var _evaluate3 = evaluate(options, state),
          _evaluate3$strategy = _evaluate3.strategy,
          strategy = _evaluate3$strategy === void 0 ? 'referenceHidden' : _evaluate3$strategy,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_evaluate3, _excluded3);
        switch (strategy) {
          case 'referenceHidden':
            {
              var overflow = yield detectOverflow(state, floating_ui_core_esm_objectSpread(floating_ui_core_esm_objectSpread({}, detectOverflowOptions), {}, {
                elementContext: 'reference'
              }));
              var offsets = getSideOffsets(overflow, rects.reference);
              return {
                data: {
                  referenceHiddenOffsets: offsets,
                  referenceHidden: isAnySideFullyClipped(offsets)
                }
              };
            }
          case 'escaped':
            {
              var _overflow = yield detectOverflow(state, floating_ui_core_esm_objectSpread(floating_ui_core_esm_objectSpread({}, detectOverflowOptions), {}, {
                altBoundary: true
              }));
              var _offsets = getSideOffsets(_overflow, rects.floating);
              return {
                data: {
                  escapedOffsets: _offsets,
                  escaped: isAnySideFullyClipped(_offsets)
                }
              };
            }
          default:
            {
              return {};
            }
        }
      })();
    }
  };
};
function getBoundingRect(rects) {
  var minX = min.apply(void 0, floating_ui_core_esm_toConsumableArray(rects.map(function (rect) {
    return rect.left;
  })));
  var minY = min.apply(void 0, floating_ui_core_esm_toConsumableArray(rects.map(function (rect) {
    return rect.top;
  })));
  var maxX = floating_ui_utils_esm_max.apply(void 0, floating_ui_core_esm_toConsumableArray(rects.map(function (rect) {
    return rect.right;
  })));
  var maxY = floating_ui_utils_esm_max.apply(void 0, floating_ui_core_esm_toConsumableArray(rects.map(function (rect) {
    return rect.bottom;
  })));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  var sortedRects = rects.slice().sort(function (a, b) {
    return a.y - b.y;
  });
  var groups = [];
  var prevRect = null;
  for (var i = 0; i < sortedRects.length; i++) {
    var rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(function (rect) {
    return rectToClientRect(getBoundingRect(rect));
  });
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
var floating_ui_core_esm_inline = function inline(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator(function* () {
        var placement = state.placement,
          elements = state.elements,
          rects = state.rects,
          platform = state.platform,
          strategy = state.strategy;
        // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
        // ClientRect's bounds, despite the event listener being triggered. A
        // padding of 2 seems to handle this issue.
        var _evaluate4 = evaluate(options, state),
          _evaluate4$padding = _evaluate4.padding,
          padding = _evaluate4$padding === void 0 ? 2 : _evaluate4$padding,
          x = _evaluate4.x,
          y = _evaluate4.y;
        var nativeClientRects = Array.from((yield platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
        var clientRects = getRectsByLine(nativeClientRects);
        var fallback = rectToClientRect(getBoundingRect(nativeClientRects));
        var paddingObject = getPaddingObject(padding);
        function getBoundingClientRect() {
          // There are two rects and they are disjoined.
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            // Find the first rect in which the point is fully inside.
            return clientRects.find(function (rect) {
              return x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom;
            }) || fallback;
          }

          // There are 2 or more connected rects.
          if (clientRects.length >= 2) {
            if (getSideAxis(placement) === 'y') {
              var firstRect = clientRects[0];
              var lastRect = clientRects[clientRects.length - 1];
              var isTop = getSide(placement) === 'top';
              var _top = firstRect.top;
              var _bottom = lastRect.bottom;
              var _left = isTop ? firstRect.left : lastRect.left;
              var _right = isTop ? firstRect.right : lastRect.right;
              var _width = _right - _left;
              var _height = _bottom - _top;
              return {
                top: _top,
                bottom: _bottom,
                left: _left,
                right: _right,
                width: _width,
                height: _height,
                x: _left,
                y: _top
              };
            }
            var isLeftSide = getSide(placement) === 'left';
            var maxRight = floating_ui_utils_esm_max.apply(void 0, floating_ui_core_esm_toConsumableArray(clientRects.map(function (rect) {
              return rect.right;
            })));
            var minLeft = min.apply(void 0, floating_ui_core_esm_toConsumableArray(clientRects.map(function (rect) {
              return rect.left;
            })));
            var measureRects = clientRects.filter(function (rect) {
              return isLeftSide ? rect.left === minLeft : rect.right === maxRight;
            });
            var top = measureRects[0].top;
            var bottom = measureRects[measureRects.length - 1].bottom;
            var left = minLeft;
            var right = maxRight;
            var width = right - left;
            var height = bottom - top;
            return {
              top: top,
              bottom: bottom,
              left: left,
              right: right,
              width: width,
              height: height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        var resetRects = yield platform.getElementRects({
          reference: {
            getBoundingClientRect: getBoundingClientRect
          },
          floating: elements.floating,
          strategy: strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      })();
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
function convertValueToCoords(_x6, _x7) {
  return _convertValueToCoords.apply(this, arguments);
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
function _convertValueToCoords() {
  _convertValueToCoords = _asyncToGenerator(function* (state, options) {
    var placement = state.placement,
      platform = state.platform,
      elements = state.elements;
    var rtl = yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating);
    var side = getSide(placement);
    var alignment = getAlignment(placement);
    var isVertical = getSideAxis(placement) === 'y';
    var mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    var crossAxisMulti = rtl && isVertical ? -1 : 1;
    var rawValue = evaluate(options, state);

    // eslint-disable-next-line prefer-const
    var _ref6 = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
      } : floating_ui_core_esm_objectSpread({
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null
      }, rawValue),
      mainAxis = _ref6.mainAxis,
      crossAxis = _ref6.crossAxis,
      alignmentAxis = _ref6.alignmentAxis;
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  });
  return _convertValueToCoords.apply(this, arguments);
}
var floating_ui_core_esm_offset = function offset(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator(function* () {
        var x = state.x,
          y = state.y;
        var diffCoords = yield convertValueToCoords(state, options);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      })();
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
var floating_ui_core_esm_shift = function shift(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator(function* () {
        var _objectSpread3;
        var x = state.x,
          y = state.y,
          placement = state.placement;
        var _evaluate5 = evaluate(options, state),
          _evaluate5$mainAxis = _evaluate5.mainAxis,
          checkMainAxis = _evaluate5$mainAxis === void 0 ? true : _evaluate5$mainAxis,
          _evaluate5$crossAxis = _evaluate5.crossAxis,
          checkCrossAxis = _evaluate5$crossAxis === void 0 ? false : _evaluate5$crossAxis,
          _evaluate5$limiter = _evaluate5.limiter,
          limiter = _evaluate5$limiter === void 0 ? {
            fn: function fn(_ref) {
              var x = _ref.x,
                y = _ref.y;
              return {
                x: x,
                y: y
              };
            }
          } : _evaluate5$limiter,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_evaluate5, _excluded4);
        var coords = {
          x: x,
          y: y
        };
        var overflow = yield detectOverflow(state, detectOverflowOptions);
        var crossAxis = getSideAxis(getSide(placement));
        var mainAxis = getOppositeAxis(crossAxis);
        var mainAxisCoord = coords[mainAxis];
        var crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          var minSide = mainAxis === 'y' ? 'top' : 'left';
          var maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          var _min = mainAxisCoord + overflow[minSide];
          var _max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(_min, mainAxisCoord, _max);
        }
        if (checkCrossAxis) {
          var _minSide = crossAxis === 'y' ? 'top' : 'left';
          var _maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          var _min2 = crossAxisCoord + overflow[_minSide];
          var _max2 = crossAxisCoord - overflow[_maxSide];
          crossAxisCoord = clamp(_min2, crossAxisCoord, _max2);
        }
        var limitedCoords = limiter.fn(floating_ui_core_esm_objectSpread(floating_ui_core_esm_objectSpread({}, state), {}, (_objectSpread3 = {}, floating_ui_core_esm_defineProperty(_objectSpread3, mainAxis, mainAxisCoord), floating_ui_core_esm_defineProperty(_objectSpread3, crossAxis, crossAxisCoord), _objectSpread3)));
        return floating_ui_core_esm_objectSpread(floating_ui_core_esm_objectSpread({}, limitedCoords), {}, {
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        });
      })();
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
var floating_ui_core_esm_limitShift = function limitShift(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options: options,
    fn: function fn(state) {
      var _ref5;
      var x = state.x,
        y = state.y,
        placement = state.placement,
        rects = state.rects,
        middlewareData = state.middlewareData;
      var _evaluate6 = evaluate(options, state),
        _evaluate6$offset = _evaluate6.offset,
        offset = _evaluate6$offset === void 0 ? 0 : _evaluate6$offset,
        _evaluate6$mainAxis = _evaluate6.mainAxis,
        checkMainAxis = _evaluate6$mainAxis === void 0 ? true : _evaluate6$mainAxis,
        _evaluate6$crossAxis = _evaluate6.crossAxis,
        checkCrossAxis = _evaluate6$crossAxis === void 0 ? true : _evaluate6$crossAxis;
      var coords = {
        x: x,
        y: y
      };
      var crossAxis = getSideAxis(placement);
      var mainAxis = getOppositeAxis(crossAxis);
      var mainAxisCoord = coords[mainAxis];
      var crossAxisCoord = coords[crossAxis];
      var rawOffset = evaluate(offset, state);
      var computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : floating_ui_core_esm_objectSpread({
        mainAxis: 0,
        crossAxis: 0
      }, rawOffset);
      if (checkMainAxis) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        var limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        var limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        var _len = mainAxis === 'y' ? 'width' : 'height';
        var isOriginSide = ['top', 'left'].includes(getSide(placement));
        var _limitMin = rects.reference[crossAxis] - rects.floating[_len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        var _limitMax = rects.reference[crossAxis] + rects.reference[_len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < _limitMin) {
          crossAxisCoord = _limitMin;
        } else if (crossAxisCoord > _limitMax) {
          crossAxisCoord = _limitMax;
        }
      }
      return _ref5 = {}, floating_ui_core_esm_defineProperty(_ref5, mainAxis, mainAxisCoord), floating_ui_core_esm_defineProperty(_ref5, crossAxis, crossAxisCoord), _ref5;
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
var floating_ui_core_esm_size = function size(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options: options,
    fn: function fn(state) {
      return _asyncToGenerator(function* () {
        var placement = state.placement,
          rects = state.rects,
          platform = state.platform,
          elements = state.elements;
        var _evaluate7 = evaluate(options, state),
          _evaluate7$apply = _evaluate7.apply,
          apply = _evaluate7$apply === void 0 ? function () {} : _evaluate7$apply,
          detectOverflowOptions = floating_ui_core_esm_objectWithoutProperties(_evaluate7, _excluded5);
        var overflow = yield detectOverflow(state, detectOverflowOptions);
        var side = getSide(placement);
        var alignment = getAlignment(placement);
        var isYAxis = getSideAxis(placement) === 'y';
        var _rects$floating = rects.floating,
          width = _rects$floating.width,
          height = _rects$floating.height;
        var heightSide;
        var widthSide;
        if (side === 'top' || side === 'bottom') {
          heightSide = side;
          widthSide = alignment === ((yield platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
        } else {
          widthSide = side;
          heightSide = alignment === 'end' ? 'top' : 'bottom';
        }
        var overflowAvailableHeight = height - overflow[heightSide];
        var overflowAvailableWidth = width - overflow[widthSide];
        var noShift = !state.middlewareData.shift;
        var availableHeight = overflowAvailableHeight;
        var availableWidth = overflowAvailableWidth;
        if (isYAxis) {
          var maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          var maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          var xMin = floating_ui_utils_esm_max(overflow.left, 0);
          var xMax = floating_ui_utils_esm_max(overflow.right, 0);
          var yMin = floating_ui_utils_esm_max(overflow.top, 0);
          var yMax = floating_ui_utils_esm_max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : floating_ui_utils_esm_max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : floating_ui_utils_esm_max(overflow.top, overflow.bottom));
          }
        }
        yield apply(floating_ui_core_esm_objectSpread(floating_ui_core_esm_objectSpread({}, state), {}, {
          availableWidth: availableWidth,
          availableHeight: availableHeight
        }));
        var nextDimensions = yield platform.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      })();
    }
  };
};

// CONCATENATED MODULE: ../node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.esm.js
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  var _getComputedStyle = floating_ui_utils_dom_esm_getComputedStyle(element),
    overflow = _getComputedStyle.overflow,
    overflowX = _getComputedStyle.overflowX,
    overflowY = _getComputedStyle.overflowY,
    display = _getComputedStyle.display;
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  var webkit = isWebKit();
  var css = floating_ui_utils_dom_esm_getComputedStyle(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(function (value) {
    return (css.willChange || '').includes(value);
  }) || ['paint', 'layout', 'strict', 'content'].some(function (value) {
    return (css.contain || '').includes(value);
  });
}
function getContainingBlock(element) {
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function floating_ui_utils_dom_esm_getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  var result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  var parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  var scrollableAncestor = getNearestOverflowAncestor(node);
  var isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  var win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

// CONCATENATED MODULE: ../node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.js
function floating_ui_dom_esm_typeof(obj) { "@babel/helpers - typeof"; return floating_ui_dom_esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, floating_ui_dom_esm_typeof(obj); }
function floating_ui_dom_esm_slicedToArray(arr, i) { return floating_ui_dom_esm_arrayWithHoles(arr) || floating_ui_dom_esm_iterableToArrayLimit(arr, i) || floating_ui_dom_esm_unsupportedIterableToArray(arr, i) || floating_ui_dom_esm_nonIterableRest(); }
function floating_ui_dom_esm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function floating_ui_dom_esm_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function floating_ui_dom_esm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function floating_ui_dom_esm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function floating_ui_dom_esm_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { floating_ui_dom_esm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { floating_ui_dom_esm_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function floating_ui_dom_esm_toConsumableArray(arr) { return floating_ui_dom_esm_arrayWithoutHoles(arr) || floating_ui_dom_esm_iterableToArray(arr) || floating_ui_dom_esm_unsupportedIterableToArray(arr) || floating_ui_dom_esm_nonIterableSpread(); }
function floating_ui_dom_esm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function floating_ui_dom_esm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return floating_ui_dom_esm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return floating_ui_dom_esm_arrayLikeToArray(o, minLen); }
function floating_ui_dom_esm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function floating_ui_dom_esm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return floating_ui_dom_esm_arrayLikeToArray(arr); }
function floating_ui_dom_esm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function floating_ui_dom_esm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function floating_ui_dom_esm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? floating_ui_dom_esm_ownKeys(Object(source), !0).forEach(function (key) { floating_ui_dom_esm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : floating_ui_dom_esm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function floating_ui_dom_esm_defineProperty(obj, key, value) { key = floating_ui_dom_esm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function floating_ui_dom_esm_toPropertyKey(arg) { var key = floating_ui_dom_esm_toPrimitive(arg, "string"); return floating_ui_dom_esm_typeof(key) === "symbol" ? key : String(key); }
function floating_ui_dom_esm_toPrimitive(input, hint) { if (floating_ui_dom_esm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (floating_ui_dom_esm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





function getCssDimensions(element) {
  var css = floating_ui_utils_dom_esm_getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  var width = parseFloat(css.width) || 0;
  var height = parseFloat(css.height) || 0;
  var hasOffset = isHTMLElement(element);
  var offsetWidth = hasOffset ? element.offsetWidth : width;
  var offsetHeight = hasOffset ? element.offsetHeight : height;
  var shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width: width,
    height: height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  var domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  var rect = domElement.getBoundingClientRect();
  var _getCssDimensions = getCssDimensions(domElement),
    width = _getCssDimensions.width,
    height = _getCssDimensions.height,
    $ = _getCssDimensions.$;
  var x = ($ ? round(rect.width) : rect.width) / width;
  var y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x: x,
    y: y
  };
}
var noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  var win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function floating_ui_dom_esm_getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var domElement = unwrapElement(element);
  var scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  var visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  var x = (clientRect.left + visualOffsets.x) / scale.x;
  var y = (clientRect.top + visualOffsets.y) / scale.y;
  var width = clientRect.width / scale.x;
  var height = clientRect.height / scale.y;
  if (domElement) {
    var win = getWindow(domElement);
    var offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    var currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      var iframeScale = getScale(currentIFrame);
      var iframeRect = currentIFrame.getBoundingClientRect();
      var css = floating_ui_utils_dom_esm_getComputedStyle(currentIFrame);
      var left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      var top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width: width,
    height: height,
    x: x,
    y: y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  var rect = _ref.rect,
    offsetParent = _ref.offsetParent,
    strategy = _ref.strategy;
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var scale = createCoords(1);
  var offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      var offsetRect = floating_ui_dom_esm_getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return floating_ui_dom_esm_getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var scroll = getNodeScroll(element);
  var body = element.ownerDocument.body;
  var width = floating_ui_utils_esm_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  var height = floating_ui_utils_esm_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  var x = -scroll.scrollLeft + getWindowScrollBarX(element);
  var y = -scroll.scrollTop;
  if (floating_ui_utils_dom_esm_getComputedStyle(body).direction === 'rtl') {
    x += floating_ui_utils_esm_max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  var clientRect = floating_ui_dom_esm_getBoundingClientRect(element, true, strategy === 'fixed');
  var top = clientRect.top + element.clientTop;
  var left = clientRect.left + element.clientLeft;
  var scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  var width = element.clientWidth * scale.x;
  var height = element.clientHeight * scale.y;
  var x = left * scale.x;
  var y = top * scale.y;
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  var rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    var visualOffsets = getVisualOffsets(element);
    rect = floating_ui_dom_esm_objectSpread(floating_ui_dom_esm_objectSpread({}, clippingAncestor), {}, {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    });
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  var parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return floating_ui_utils_dom_esm_getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  var cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  var result = getOverflowAncestors(element).filter(function (el) {
    return isElement(el) && getNodeName(el) !== 'body';
  });
  var currentContainingBlockComputedStyle = null;
  var elementIsFixed = floating_ui_utils_dom_esm_getComputedStyle(element).position === 'fixed';
  var currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    var computedStyle = floating_ui_utils_dom_esm_getComputedStyle(currentNode);
    var currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    var shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(function (ancestor) {
        return ancestor !== currentNode;
      });
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  var element = _ref.element,
    boundary = _ref.boundary,
    rootBoundary = _ref.rootBoundary,
    strategy = _ref.strategy;
  var elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  var clippingAncestors = [].concat(floating_ui_dom_esm_toConsumableArray(elementClippingAncestors), [rootBoundary]);
  var firstClippingAncestor = clippingAncestors[0];
  var clippingRect = clippingAncestors.reduce(function (accRect, clippingAncestor) {
    var rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_utils_esm_max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_utils_esm_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var isFixed = strategy === 'fixed';
  var rect = floating_ui_dom_esm_getBoundingClientRect(element, true, isFixed, offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      var offsetRect = floating_ui_dom_esm_getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || floating_ui_utils_dom_esm_getComputedStyle(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  var window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  var offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && floating_ui_utils_dom_esm_getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && floating_ui_utils_dom_esm_getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
var getElementRects = /*#__PURE__*/function () {
  var _ref2 = floating_ui_dom_esm_asyncToGenerator(function* (_ref) {
    var reference = _ref.reference,
      floating = _ref.floating,
      strategy = _ref.strategy;
    var getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    var getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, yield getOffsetParentFn(floating), strategy),
      floating: floating_ui_dom_esm_objectSpread({
        x: 0,
        y: 0
      }, yield getDimensionsFn(floating))
    };
  });
  return function getElementRects(_x) {
    return _ref2.apply(this, arguments);
  };
}();
function isRTL(element) {
  return floating_ui_utils_dom_esm_getComputedStyle(element).direction === 'rtl';
}
var floating_ui_dom_esm_platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect: convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: getDocumentElement,
  getClippingRect: getClippingRect,
  getOffsetParent: getOffsetParent,
  getElementRects: getElementRects,
  getClientRects: getClientRects,
  getDimensions: getDimensions,
  getScale: getScale,
  isElement: isElement,
  isRTL: isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  var io = null;
  var timeoutId;
  var root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    var _element$getBoundingC = element.getBoundingClientRect(),
      left = _element$getBoundingC.left,
      top = _element$getBoundingC.top,
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    var insetTop = floor(top);
    var insetRight = floor(root.clientWidth - (left + width));
    var insetBottom = floor(root.clientHeight - (top + height));
    var insetLeft = floor(left);
    var rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    var options = {
      rootMargin: rootMargin,
      threshold: floating_ui_utils_esm_max(0, min(1, threshold)) || 1
    };
    var isFirstUpdate = true;
    function handleObserve(entries) {
      var ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(function () {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, floating_ui_dom_esm_objectSpread(floating_ui_dom_esm_objectSpread({}, options), {}, {
        // Handle <iframe>s
        root: root.ownerDocument
      }));
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$ancestorScro = _options.ancestorScroll,
    ancestorScroll = _options$ancestorScro === void 0 ? true : _options$ancestorScro,
    _options$ancestorResi = _options.ancestorResize,
    ancestorResize = _options$ancestorResi === void 0 ? true : _options$ancestorResi,
    _options$elementResiz = _options.elementResize,
    elementResize = _options$elementResiz === void 0 ? typeof ResizeObserver === 'function' : _options$elementResiz,
    _options$layoutShift = _options.layoutShift,
    layoutShift = _options$layoutShift === void 0 ? typeof IntersectionObserver === 'function' : _options$layoutShift,
    _options$animationFra = _options.animationFrame,
    animationFrame = _options$animationFra === void 0 ? false : _options$animationFra;
  var referenceEl = unwrapElement(reference);
  var ancestors = ancestorScroll || ancestorResize ? [].concat(floating_ui_dom_esm_toConsumableArray(referenceEl ? getOverflowAncestors(referenceEl) : []), floating_ui_dom_esm_toConsumableArray(getOverflowAncestors(floating))) : [];
  ancestors.forEach(function (ancestor) {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  var cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  var reobserveFrame = -1;
  var resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(function (_ref) {
      var _ref3 = floating_ui_dom_esm_slicedToArray(_ref, 1),
        firstEntry = _ref3[0];
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(function () {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  var frameId;
  var prevRefRect = animationFrame ? floating_ui_dom_esm_getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    var nextRefRect = floating_ui_dom_esm_getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return function () {
    ancestors.forEach(function (ancestor) {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
var floating_ui_dom_esm_computePosition = function computePosition(reference, floating, options) {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  var cache = new Map();
  var mergedOptions = floating_ui_dom_esm_objectSpread({
    platform: floating_ui_dom_esm_platform
  }, options);
  var platformWithCache = floating_ui_dom_esm_objectSpread(floating_ui_dom_esm_objectSpread({}, mergedOptions.platform), {}, {
    _c: cache
  });
  return floating_ui_core_esm_computePosition(reference, floating, floating_ui_dom_esm_objectSpread(floating_ui_dom_esm_objectSpread({}, mergedOptions), {}, {
    platform: platformWithCache
  }));
};

// CONCATENATED MODULE: ../node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.esm.js

var use_isomorphic_layout_effect_esm_index = typeof document !== 'undefined' ? compat_module["useLayoutEffect"] : compat_module["useEffect"];
/* harmony default export */ var use_isomorphic_layout_effect_esm = (use_isomorphic_layout_effect_esm_index);
// CONCATENATED MODULE: ../node_modules/react-select/dist/index-baa8dc4f.esm.js












var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
// ==============================
// NO OP
// ==============================

var noop = function noop() {};

// ==============================
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/
function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}
function classNames(prefix, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }
  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
}
// ==============================
// Clean Value
// ==============================

var index_baa8dc4f_esm_cleanValue = function cleanValue(value) {
  if (isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === 'object' && value !== null) return [value];
  return [];
};

// ==============================
// Clean Common Props
// ==============================

var index_baa8dc4f_esm_cleanCommonProps = function cleanCommonProps(props) {
  //className
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getClassNames;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = _objectWithoutProperties(props, _excluded$4);
  return objectSpread2_objectSpread2({}, innerProps);
};

// ==============================
// Get Style Props
// ==============================

var getStyleProps = function getStyleProps(props, name, classNamesState) {
  var cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    className = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
  };
};

// ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var _newValue = onInputChange(inputValue, actionMeta);
    if (typeof _newValue === 'string') return _newValue;
  }
  return inputValue;
}

// ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}

// Normalized Scroll Top
// ------------------------------

function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}

// Normalized scrollTo & scrollTop
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}

// Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  if (style.position === 'fixed') return document.documentElement;
  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === 'static') {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}

// Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}

// Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

// ==============================
// Get bounding client object
// ==============================

// cannot get keys using array notation with DOMRect
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

// ==============================
// Passive Event Detector
// ==============================

// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
var passiveOptionAccessed = false;
var index_baa8dc4f_esm_options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
// check for SSR
var index_baa8dc4f_esm_w = typeof window !== 'undefined' ? window : {};
if (index_baa8dc4f_esm_w.addEventListener && index_baa8dc4f_esm_w.removeEventListener) {
  index_baa8dc4f_esm_w.addEventListener('p', noop, index_baa8dc4f_esm_options);
  index_baa8dc4f_esm_w.removeEventListener('p', noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var index_baa8dc4f_esm_removeProps = function removeProps(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      key = _ref2[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function (newProps, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};
var _excluded$3 = ["children", "innerProps"],
  _excluded2$1 = ["children", "innerProps"];
function getMenuPlacement(_ref) {
  var preferredMaxHeight = _ref.maxHeight,
    menuEl = _ref.menuEl,
    minHeight = _ref.minHeight,
    preferredPlacement = _ref.placement,
    shouldScroll = _ref.shouldScroll,
    isFixedPosition = _ref.isFixedPosition,
    controlHeight = _ref.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: preferredMaxHeight
  };

  // something went wrong, return default state
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
    scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
    menuBottom = _menuEl$getBoundingCl.bottom,
    menuHeight = _menuEl$getBoundingCl.height,
    menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
    containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      }

      // 4. Forked beviour when there isn't enough space below

      // AUTO: flip the menu, render above
      if (preferredPlacement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      }

      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
      if (preferredPlacement === 'bottom') {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      }

      // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below
      return {
        placement: 'bottom',
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
  }
  return defaultState;
}

// Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}
var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};
var index_baa8dc4f_esm_menuCSS = function menuCSS(_ref2, unstyled) {
  var _objectSpread2;
  var placement = _ref2.placement,
    _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    spacing = _ref2$theme.spacing,
    colors = _ref2$theme.colors;
  return objectSpread2_objectSpread2((_objectSpread2 = {
    label: 'menu'
  }, _defineProperty(_objectSpread2, alignToControl(placement), '100%'), _defineProperty(_objectSpread2, "position", 'absolute'), _defineProperty(_objectSpread2, "width", '100%'), _defineProperty(_objectSpread2, "zIndex", 1), _objectSpread2), unstyled ? {} : {
    backgroundColor: colors.neutral0,
    borderRadius: borderRadius,
    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
    marginBottom: spacing.menuGutter,
    marginTop: spacing.menuGutter
  });
};
var PortalPlacementContext = /*#__PURE__*/Object(compat_module["createContext"])(null);

// NOTE: internal only
var index_baa8dc4f_esm_MenuPlacer = function MenuPlacer(props) {
  var children = props.children,
    minMenuHeight = props.minMenuHeight,
    maxMenuHeight = props.maxMenuHeight,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition,
    menuShouldScrollIntoView = props.menuShouldScrollIntoView,
    theme = props.theme;
  var _ref3 = Object(compat_module["useContext"])(PortalPlacementContext) || {},
    setPortalPlacement = _ref3.setPortalPlacement;
  var ref = Object(compat_module["useRef"])(null);
  var _useState = Object(compat_module["useState"])(maxMenuHeight),
    _useState2 = _slicedToArray(_useState, 2),
    maxHeight = _useState2[0],
    setMaxHeight = _useState2[1];
  var _useState3 = Object(compat_module["useState"])(null),
    _useState4 = _slicedToArray(_useState3, 2),
    placement = _useState4[0],
    setPlacement = _useState4[1];
  var controlHeight = theme.spacing.controlHeight;
  use_isomorphic_layout_effect_esm(function () {
    var menuEl = ref.current;
    if (!menuEl) return;

    // DO NOT scroll if position is fixed
    var isFixedPosition = menuPosition === 'fixed';
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl: menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll: shouldScroll,
      isFixedPosition: isFixedPosition,
      controlHeight: controlHeight
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
  return children({
    ref: ref,
    placerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight: maxHeight
    })
  });
};
var index_baa8dc4f_esm_Menu = function Menu(props) {
  var children = props.children,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'menu', {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};
var Menu$1 = index_baa8dc4f_esm_Menu;

// ==============================
// Menu List
// ==============================

var index_baa8dc4f_esm_menuListCSS = function menuListCSS(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight,
    baseUnit = _ref4.theme.spacing.baseUnit;
  return objectSpread2_objectSpread2({
    maxHeight: maxHeight,
    overflowY: 'auto',
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  }, unstyled ? {} : {
    paddingBottom: baseUnit,
    paddingTop: baseUnit
  });
};
var index_baa8dc4f_esm_MenuList = function MenuList(props) {
  var children = props.children,
    innerProps = props.innerProps,
    innerRef = props.innerRef,
    isMulti = props.isMulti;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'menuList', {
    'menu-list': true,
    'menu-list--is-multi': isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};

// ==============================
// Menu Notices
// ==============================

var index_baa8dc4f_esm_noticeCSS = function noticeCSS(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme,
    baseUnit = _ref5$theme.spacing.baseUnit,
    colors = _ref5$theme.colors;
  return objectSpread2_objectSpread2({
    textAlign: 'center'
  }, unstyled ? {} : {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
  });
};
var noOptionsMessageCSS = index_baa8dc4f_esm_noticeCSS;
var loadingMessageCSS = index_baa8dc4f_esm_noticeCSS;
var index_baa8dc4f_esm_NoOptionsMessage = function NoOptionsMessage(_ref6) {
  var _ref6$children = _ref6.children,
    children = _ref6$children === void 0 ? 'No options' : _ref6$children,
    innerProps = _ref6.innerProps,
    restProps = _objectWithoutProperties(_ref6, _excluded$3);
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restProps), {}, {
    children: children,
    innerProps: innerProps
  }), 'noOptionsMessage', {
    'menu-notice': true,
    'menu-notice--no-options': true
  }), innerProps), children);
};
var index_baa8dc4f_esm_LoadingMessage = function LoadingMessage(_ref7) {
  var _ref7$children = _ref7.children,
    children = _ref7$children === void 0 ? 'Loading...' : _ref7$children,
    innerProps = _ref7.innerProps,
    restProps = _objectWithoutProperties(_ref7, _excluded2$1);
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restProps), {}, {
    children: children,
    innerProps: innerProps
  }), 'loadingMessage', {
    'menu-notice': true,
    'menu-notice--loading': true
  }), innerProps), children);
};

// ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref8) {
  var rect = _ref8.rect,
    offset = _ref8.offset,
    position = _ref8.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var index_baa8dc4f_esm_MenuPortal = function MenuPortal(props) {
  var appendTo = props.appendTo,
    children = props.children,
    controlElement = props.controlElement,
    innerProps = props.innerProps,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition;
  var menuPortalRef = Object(compat_module["useRef"])(null);
  var cleanupRef = Object(compat_module["useRef"])(null);
  var _useState5 = Object(compat_module["useState"])(coercePlacement(menuPlacement)),
    _useState6 = _slicedToArray(_useState5, 2),
    placement = _useState6[0],
    setPortalPlacement = _useState6[1];
  var portalPlacementContext = Object(compat_module["useMemo"])(function () {
    return {
      setPortalPlacement: setPortalPlacement
    };
  }, []);
  var _useState7 = Object(compat_module["useState"])(null),
    _useState8 = _slicedToArray(_useState7, 2),
    computedPosition = _useState8[0],
    setComputedPosition = _useState8[1];
  var updateComputedPosition = Object(compat_module["useCallback"])(function () {
    if (!controlElement) return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset: offset,
        rect: rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  use_isomorphic_layout_effect_esm(function () {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = Object(compat_module["useCallback"])(function () {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: 'ResizeObserver' in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  use_isomorphic_layout_effect_esm(function () {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = Object(compat_module["useCallback"])(function (menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);

  // bail early if required elements aren't present
  if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

  // same wrapper element whether fixed or portalled
  var menuWrapper = emotion_react_esm_jsx("div", _extends({
    ref: setMenuPortalElement
  }, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), 'menuPortal', {
    'menu-portal': true
  }), innerProps), children);
  return emotion_react_esm_jsx(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /*#__PURE__*/Object(compat_module["createPortal"])(menuWrapper, appendTo) : menuWrapper);
};

// ==============================
// Root Container
// ==============================

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
    isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : undefined,
    pointerEvents: isDisabled ? 'none' : undefined,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var index_baa8dc4f_esm_SelectContainer = function SelectContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    isRtl = props.isRtl;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'container', {
    '--is-disabled': isDisabled,
    '--is-rtl': isRtl
  }), innerProps), children);
};

// ==============================
// Value Container
// ==============================

var index_baa8dc4f_esm_valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
  var spacing = _ref2.theme.spacing,
    isMulti = _ref2.isMulti,
    hasValue = _ref2.hasValue,
    controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
  return objectSpread2_objectSpread2({
    alignItems: 'center',
    display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
    flex: 1,
    flexWrap: 'wrap',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  }, unstyled ? {} : {
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
  });
};
var index_baa8dc4f_esm_ValueContainer = function ValueContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isMulti = props.isMulti,
    hasValue = props.hasValue;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
    'value-container': true,
    'value-container--is-multi': isMulti,
    'value-container--has-value': hasValue
  }), innerProps), children);
};

// ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var index_baa8dc4f_esm_IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
    indicators: true
  }), innerProps), children);
};
var _templateObject;
var _excluded$2 = ["size"],
  index_baa8dc4f_esm_excluded2 = ["innerProps", "isRtl", "size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

// ==============================
// Dropdown & Clear Icons
// ==============================
var index_baa8dc4f_esm_ref2 =  true ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : undefined;
var index_baa8dc4f_esm_Svg = function Svg(_ref) {
  var size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded$2);
  return emotion_react_esm_jsx("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: index_baa8dc4f_esm_ref2
  }, props));
};
var index_baa8dc4f_esm_CrossIcon = function CrossIcon(props) {
  return emotion_react_esm_jsx(index_baa8dc4f_esm_Svg, _extends({
    size: 20
  }, props), emotion_react_esm_jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var index_baa8dc4f_esm_DownChevron = function DownChevron(props) {
  return emotion_react_esm_jsx(index_baa8dc4f_esm_Svg, _extends({
    size: 20
  }, props), emotion_react_esm_jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};

// ==============================
// Dropdown & Clear Buttons
// ==============================

var index_baa8dc4f_esm_baseCSS = function baseCSS(_ref3, unstyled) {
  var isFocused = _ref3.isFocused,
    _ref3$theme = _ref3.theme,
    baseUnit = _ref3$theme.spacing.baseUnit,
    colors = _ref3$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'indicatorContainer',
    display: 'flex',
    transition: 'color 150ms'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2,
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  });
};
var dropdownIndicatorCSS = index_baa8dc4f_esm_baseCSS;
var index_baa8dc4f_esm_DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
    indicator: true,
    'dropdown-indicator': true
  }), innerProps), children || emotion_react_esm_jsx(index_baa8dc4f_esm_DownChevron, null));
};
var clearIndicatorCSS = index_baa8dc4f_esm_baseCSS;
var index_baa8dc4f_esm_ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
    indicator: true,
    'clear-indicator': true
  }), innerProps), children || emotion_react_esm_jsx(index_baa8dc4f_esm_CrossIcon, null));
};

// ==============================
// Separator
// ==============================

var index_baa8dc4f_esm_indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled,
    _ref4$theme = _ref4.theme,
    baseUnit = _ref4$theme.spacing.baseUnit,
    colors = _ref4$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2
  });
};
var index_baa8dc4f_esm_IndicatorSeparator = function IndicatorSeparator(props) {
  var innerProps = props.innerProps;
  return emotion_react_esm_jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
    'indicator-separator': true
  })));
};

// ==============================
// Loading
// ==============================

var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var index_baa8dc4f_esm_loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
  var isFocused = _ref5.isFocused,
    size = _ref5.size,
    _ref5$theme = _ref5.theme,
    colors = _ref5$theme.colors,
    baseUnit = _ref5$theme.spacing.baseUnit;
  return objectSpread2_objectSpread2({
    label: 'loadingIndicator',
    display: 'flex',
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2
  });
};
var index_baa8dc4f_esm_LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
    offset = _ref6.offset;
  return emotion_react_esm_jsx("span", {
    css: /*#__PURE__*/emotion_react_esm_css({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : undefined,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  true ? "" : undefined,  true ? "" : undefined)
  });
};
var index_baa8dc4f_esm_LoadingIndicator = function LoadingIndicator(_ref7) {
  var innerProps = _ref7.innerProps,
    isRtl = _ref7.isRtl,
    _ref7$size = _ref7.size,
    size = _ref7$size === void 0 ? 4 : _ref7$size,
    restProps = _objectWithoutProperties(_ref7, index_baa8dc4f_esm_excluded2);
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, restProps), {}, {
    innerProps: innerProps,
    isRtl: isRtl,
    size: size
  }), 'loadingIndicator', {
    indicator: true,
    'loading-indicator': true
  }), innerProps), emotion_react_esm_jsx(index_baa8dc4f_esm_LoadingDot, {
    delay: 0,
    offset: isRtl
  }), emotion_react_esm_jsx(index_baa8dc4f_esm_LoadingDot, {
    delay: 160,
    offset: true
  }), emotion_react_esm_jsx(index_baa8dc4f_esm_LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
var css$1 = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    _ref$theme = _ref.theme,
    colors = _ref$theme.colors,
    borderRadius = _ref$theme.borderRadius,
    spacing = _ref$theme.spacing;
  return objectSpread2_objectSpread2({
    label: 'control',
    alignItems: 'center',
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms'
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  });
};
var index_baa8dc4f_esm_Control = function Control(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    innerRef = props.innerRef,
    innerProps = props.innerProps,
    menuIsOpen = props.menuIsOpen;
  return emotion_react_esm_jsx("div", _extends({
    ref: innerRef
  }, getStyleProps(props, 'control', {
    control: true,
    'control--is-disabled': isDisabled,
    'control--is-focused': isFocused,
    'control--menu-is-open': menuIsOpen
  }), innerProps), children);
};
var Control$1 = index_baa8dc4f_esm_Control;
var _excluded$1 = ["data"];
var groupCSS = function groupCSS(_ref, unstyled) {
  var spacing = _ref.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};
var index_baa8dc4f_esm_Group = function Group(props) {
  var children = props.children,
    cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    Heading = props.Heading,
    headingProps = props.headingProps,
    innerProps = props.innerProps,
    label = props.label,
    theme = props.theme,
    selectProps = props.selectProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'group', {
    group: true
  }), innerProps), emotion_react_esm_jsx(Heading, _extends({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    getClassNames: getClassNames,
    cx: cx
  }), label), emotion_react_esm_jsx("div", null, children));
};
var index_baa8dc4f_esm_groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    colors = _ref2$theme.colors,
    spacing = _ref2$theme.spacing;
  return objectSpread2_objectSpread2({
    label: 'group',
    cursor: 'default',
    display: 'block'
  }, unstyled ? {} : {
    color: colors.neutral40,
    fontSize: '75%',
    fontWeight: 500,
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  });
};
var index_baa8dc4f_esm_GroupHeading = function GroupHeading(props) {
  var _cleanCommonProps = index_baa8dc4f_esm_cleanCommonProps(props);
  _cleanCommonProps.data;
  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
    'group-heading': true
  }), innerProps));
};
var Group$1 = index_baa8dc4f_esm_Group;
var index_baa8dc4f_esm_excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var index_baa8dc4f_esm_inputCSS = function inputCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    value = _ref.value,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({
    visibility: isDisabled ? 'hidden' : 'visible',
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? 'translateZ(0)' : ''
  }, containerStyle), unstyled ? {} : {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    color: colors.neutral80
  });
};
var spacingStyle = {
  gridArea: '1 / 2',
  font: 'inherit',
  minWidth: '2px',
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: '1 1 auto',
  display: 'inline-grid',
  gridArea: '1 / 1 / 2 / 3',
  gridTemplateColumns: '0 min-content',
  '&:after': objectSpread2_objectSpread2({
    content: 'attr(data-value) " "',
    visibility: 'hidden',
    whiteSpace: 'pre'
  }, spacingStyle)
};
var index_baa8dc4f_esm_inputStyle = function inputStyle(isHidden) {
  return objectSpread2_objectSpread2({
    label: 'input',
    color: 'inherit',
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: '100%'
  }, spacingStyle);
};
var index_baa8dc4f_esm_Input = function Input(props) {
  var cx = props.cx,
    value = props.value;
  var _cleanCommonProps = index_baa8dc4f_esm_cleanCommonProps(props),
    innerRef = _cleanCommonProps.innerRef,
    isDisabled = _cleanCommonProps.isDisabled,
    isHidden = _cleanCommonProps.isHidden,
    inputClassName = _cleanCommonProps.inputClassName,
    innerProps = _objectWithoutProperties(_cleanCommonProps, index_baa8dc4f_esm_excluded);
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'input', {
    'input-container': true
  }), {
    "data-value": value || ''
  }), emotion_react_esm_jsx("input", _extends({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: index_baa8dc4f_esm_inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var Input$1 = index_baa8dc4f_esm_Input;
var index_baa8dc4f_esm_multiValueCSS = function multiValueCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    borderRadius = _ref$theme.borderRadius,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'multiValue',
    display: 'flex',
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    margin: spacing.baseUnit / 2
  });
};
var index_baa8dc4f_esm_multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    colors = _ref2$theme.colors,
    cropWithEllipsis = _ref2.cropWithEllipsis;
  return objectSpread2_objectSpread2({
    overflow: 'hidden',
    textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    padding: 3,
    paddingLeft: 6
  });
};
var index_baa8dc4f_esm_multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme,
    spacing = _ref3$theme.spacing,
    borderRadius = _ref3$theme.borderRadius,
    colors = _ref3$theme.colors,
    isFocused = _ref3.isFocused;
  return objectSpread2_objectSpread2({
    alignItems: 'center',
    display: 'flex'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused ? colors.dangerLight : undefined,
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  });
};
var index_baa8dc4f_esm_MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
    innerProps = _ref4.innerProps;
  return emotion_react_esm_jsx("div", innerProps, children);
};
var index_baa8dc4f_esm_MultiValueContainer = index_baa8dc4f_esm_MultiValueGeneric;
var index_baa8dc4f_esm_MultiValueLabel = index_baa8dc4f_esm_MultiValueGeneric;
function index_baa8dc4f_esm_MultiValueRemove(_ref5) {
  var children = _ref5.children,
    innerProps = _ref5.innerProps;
  return emotion_react_esm_jsx("div", _extends({
    role: "button"
  }, innerProps), children || emotion_react_esm_jsx(index_baa8dc4f_esm_CrossIcon, {
    size: 14
  }));
}
var index_baa8dc4f_esm_MultiValue = function MultiValue(props) {
  var children = props.children,
    components = props.components,
    data = props.data,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    removeProps = props.removeProps,
    selectProps = props.selectProps;
  var Container = components.Container,
    Label = components.Label,
    Remove = components.Remove;
  return emotion_react_esm_jsx(Container, {
    data: data,
    innerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, getStyleProps(props, 'multiValue', {
      'multi-value': true,
      'multi-value--is-disabled': isDisabled
    })), innerProps),
    selectProps: selectProps
  }, emotion_react_esm_jsx(Label, {
    data: data,
    innerProps: objectSpread2_objectSpread2({}, getStyleProps(props, 'multiValueLabel', {
      'multi-value__label': true
    })),
    selectProps: selectProps
  }, children), emotion_react_esm_jsx(Remove, {
    data: data,
    innerProps: objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, getStyleProps(props, 'multiValueRemove', {
      'multi-value__remove': true
    })), {}, {
      'aria-label': "Remove ".concat(children || 'option')
    }, removeProps),
    selectProps: selectProps
  }));
};
var MultiValue$1 = index_baa8dc4f_esm_MultiValue;
var index_baa8dc4f_esm_optionCSS = function optionCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    isSelected = _ref.isSelected,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'option',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
    }
  });
};
var index_baa8dc4f_esm_Option = function Option(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    isSelected = props.isSelected,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'option', {
    option: true,
    'option--is-disabled': isDisabled,
    'option--is-focused': isFocused,
    'option--is-selected': isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var Option$1 = index_baa8dc4f_esm_Option;
var index_baa8dc4f_esm_placeholderCSS = function placeholderCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'placeholder',
    gridArea: '1 / 1 / 2 / 3'
  }, unstyled ? {} : {
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var index_baa8dc4f_esm_Placeholder = function Placeholder(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
    placeholder: true
  }), innerProps), children);
};
var Placeholder$1 = index_baa8dc4f_esm_Placeholder;
var index_baa8dc4f_esm_css = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return objectSpread2_objectSpread2({
    label: 'singleValue',
    gridArea: '1 / 1 / 2 / 3',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var index_baa8dc4f_esm_SingleValue = function SingleValue(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    innerProps = props.innerProps;
  return emotion_react_esm_jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
    'single-value': true,
    'single-value--is-disabled': isDisabled
  }), innerProps), children);
};
var SingleValue$1 = index_baa8dc4f_esm_SingleValue;
var index_baa8dc4f_esm_components = {
  ClearIndicator: index_baa8dc4f_esm_ClearIndicator,
  Control: Control$1,
  DropdownIndicator: index_baa8dc4f_esm_DropdownIndicator,
  DownChevron: index_baa8dc4f_esm_DownChevron,
  CrossIcon: index_baa8dc4f_esm_CrossIcon,
  Group: Group$1,
  GroupHeading: index_baa8dc4f_esm_GroupHeading,
  IndicatorsContainer: index_baa8dc4f_esm_IndicatorsContainer,
  IndicatorSeparator: index_baa8dc4f_esm_IndicatorSeparator,
  Input: Input$1,
  LoadingIndicator: index_baa8dc4f_esm_LoadingIndicator,
  Menu: Menu$1,
  MenuList: index_baa8dc4f_esm_MenuList,
  MenuPortal: index_baa8dc4f_esm_MenuPortal,
  LoadingMessage: index_baa8dc4f_esm_LoadingMessage,
  NoOptionsMessage: index_baa8dc4f_esm_NoOptionsMessage,
  MultiValue: MultiValue$1,
  MultiValueContainer: index_baa8dc4f_esm_MultiValueContainer,
  MultiValueLabel: index_baa8dc4f_esm_MultiValueLabel,
  MultiValueRemove: index_baa8dc4f_esm_MultiValueRemove,
  Option: Option$1,
  Placeholder: Placeholder$1,
  SelectContainer: index_baa8dc4f_esm_SelectContainer,
  SingleValue: SingleValue$1,
  ValueContainer: index_baa8dc4f_esm_ValueContainer
};
var index_baa8dc4f_esm_defaultComponents = function defaultComponents(props) {
  return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, index_baa8dc4f_esm_components), props.components);
};

// CONCATENATED MODULE: ../node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === 'number' && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult: lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// CONCATENATED MODULE: ../node_modules/react-select/dist/Select-aecb2a80.esm.js













function _EMOTION_STRINGIFIED_CSS_ERROR__$2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

// Assistive text to describe visual elements. Hidden for sighted users.
var Select_aecb2a80_esm_ref =  true ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : undefined;
var Select_aecb2a80_esm_A11yText = function A11yText(props) {
  return emotion_react_esm_jsx("span", _extends({
    css: Select_aecb2a80_esm_ref
  }, props));
};
var A11yText$1 = Select_aecb2a80_esm_A11yText;
var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
      isMulti = props.isMulti,
      isDisabled = props.isDisabled,
      tabSelectsValue = props.tabSelectsValue,
      context = props.context;
    switch (context) {
      case 'menu':
        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
      case 'input':
        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');
      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
      default:
        return '';
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      labels = props.labels,
      isDisabled = props.isDisabled;
    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option ".concat(label, ", deselected.");
      case 'clear':
        return 'All selected options have been cleared.';
      case 'initial-input-focus':
        return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
      case 'select-option':
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return '';
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
      focused = props.focused,
      options = props.options,
      _props$label2 = props.label,
      label = _props$label2 === void 0 ? '' : _props$label2,
      selectValue = props.selectValue,
      isDisabled = props.isDisabled,
      isSelected = props.isSelected;
    var getArrayIndex = function getArrayIndex(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
    };
    if (context === 'value' && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === 'menu') {
      var disabled = isDisabled ? ' disabled' : '';
      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }
    return '';
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
      resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
  }
};
var Select_aecb2a80_esm_LiveRegion = function LiveRegion(props) {
  var ariaSelection = props.ariaSelection,
    focusedOption = props.focusedOption,
    focusedValue = props.focusedValue,
    focusableOptions = props.focusableOptions,
    isFocused = props.isFocused,
    selectValue = props.selectValue,
    selectProps = props.selectProps,
    id = props.id;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
    getOptionLabel = selectProps.getOptionLabel,
    inputValue = selectProps.inputValue,
    isMulti = selectProps.isMulti,
    isOptionDisabled = selectProps.isOptionDisabled,
    isSearchable = selectProps.isSearchable,
    menuIsOpen = selectProps.menuIsOpen,
    options = selectProps.options,
    screenReaderStatus = selectProps.screenReaderStatus,
    tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps['aria-label'];
  var ariaLive = selectProps['aria-live'];

  // Update aria live message configuration when prop changes
  var messages = Object(compat_module["useMemo"])(function () {
    return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);

  // Update aria live selected option when prop changes
  var ariaSelected = Object(compat_module["useMemo"])(function () {
    var message = '';
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
        selectedOptions = ariaSelection.options,
        removedValue = ariaSelection.removedValue,
        removedValues = ariaSelection.removedValues,
        value = ariaSelection.value;
      // select-option when !isMulti does not return option so we assume selected option is value
      var asOption = function asOption(val) {
        return !Array.isArray(val) ? val : null;
      };

      // If there is just one item from the action then get its label
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel(selected) : '';

      // If there are multiple items from the action then return an array of labels
      var multiSelected = selectedOptions || removedValues || undefined;
      var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
      var onChangeProps = objectSpread2_objectSpread2({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled(selected, selectValue),
        label: label,
        labels: labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
  var ariaFocused = Object(compat_module["useMemo"])(function () {
    var focusMsg = '';
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused: focused,
        label: getOptionLabel(focused),
        isDisabled: isOptionDisabled(focused, selectValue),
        isSelected: isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? 'menu' : 'value',
        selectValue: selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue]);
  var ariaResults = Object(compat_module["useMemo"])(function () {
    var resultsMsg = '';
    if (menuIsOpen && options.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue: inputValue,
        resultsMessage: resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
  var ariaGuidance = Object(compat_module["useMemo"])(function () {
    var guidanceMsg = '';
    if (messages.guidance) {
      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
      guidanceMsg = messages.guidance({
        'aria-label': ariaLabel,
        context: context,
        isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
        isMulti: isMulti,
        isSearchable: isSearchable,
        tabSelectsValue: tabSelectsValue
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  var ScreenReaderText = emotion_react_esm_jsx(compat_module["Fragment"], null, emotion_react_esm_jsx("span", {
    id: "aria-selection"
  }, ariaSelected), emotion_react_esm_jsx("span", {
    id: "aria-context"
  }, ariaContext));
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
  return emotion_react_esm_jsx(compat_module["Fragment"], null, emotion_react_esm_jsx(A11yText$1, {
    id: id
  }, isInitialFocus && ScreenReaderText), emotion_react_esm_jsx(A11yText$1, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var LiveRegion$1 = Select_aecb2a80_esm_LiveRegion;
var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};
for (var Select_aecb2a80_esm_i = 0; Select_aecb2a80_esm_i < diacritics.length; Select_aecb2a80_esm_i++) {
  var diacritic = diacritics[Select_aecb2a80_esm_i];
  for (var Select_aecb2a80_esm_j = 0; Select_aecb2a80_esm_j < diacritic.letters.length; Select_aecb2a80_esm_j++) {
    diacriticToBase[diacritic.letters[Select_aecb2a80_esm_j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};
var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};
var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var Select_aecb2a80_esm_createFilter = function createFilter(config) {
  return function (option, rawInput) {
    // eslint-disable-next-line no-underscore-dangle
    if (option.data.__isNew__) return true;
    var _ignoreCase$ignoreAcc = objectSpread2_objectSpread2({
        ignoreCase: true,
        ignoreAccents: true,
        stringify: defaultStringify,
        trim: true,
        matchFrom: 'any'
      }, config),
      ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
      ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
      stringify = _ignoreCase$ignoreAcc.stringify,
      trim = _ignoreCase$ignoreAcc.trim,
      matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};
var Select_aecb2a80_esm_excluded = ["innerRef"];
function DummyInput(_ref) {
  var innerRef = _ref.innerRef,
    props = _objectWithoutProperties(_ref, Select_aecb2a80_esm_excluded);
  // Remove animation props not meant for HTML elements
  var filteredProps = index_baa8dc4f_esm_removeProps(props, 'onExited', 'in', 'enter', 'exit', 'appear');
  return emotion_react_esm_jsx("input", _extends({
    ref: innerRef
  }, filteredProps, {
    css: /*#__PURE__*/emotion_react_esm_css({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: 'transparent',
      fontSize: 'inherit',
      gridArea: '1 / 1 / 2 / 3',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(.01)'
    },  true ? "" : undefined,  true ? "" : undefined)
  }));
}
var cancelScroll = function cancelScroll(event) {
  event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var isBottom = Object(compat_module["useRef"])(false);
  var isTop = Object(compat_module["useRef"])(false);
  var touchStart = Object(compat_module["useRef"])(0);
  var scrollTarget = Object(compat_module["useRef"])(null);
  var handleEventDelta = Object(compat_module["useCallback"])(function (event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
      scrollTop = _scrollTarget$current.scrollTop,
      scrollHeight = _scrollTarget$current.scrollHeight,
      clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;

    // reset bottom/top flags
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    }

    // bottom limit
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;

      // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }

    // cancel scroll
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = Object(compat_module["useCallback"])(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = Object(compat_module["useCallback"])(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = Object(compat_module["useCallback"])(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = Object(compat_module["useCallback"])(function (el) {
    // bail early if no element is available to attach to
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener('wheel', onWheel, notPassive);
    el.addEventListener('touchstart', onTouchStart, notPassive);
    el.addEventListener('touchmove', onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = Object(compat_module["useCallback"])(function (el) {
    // bail early if no element is available to detach from
    if (!el) return;
    el.removeEventListener('wheel', onWheel, false);
    el.removeEventListener('touchstart', onTouchStart, false);
    el.removeEventListener('touchmove', onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  Object(compat_module["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}
var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};
function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
    _ref$accountForScroll = _ref.accountForScrollbars,
    accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = Object(compat_module["useRef"])({});
  var scrollTarget = Object(compat_module["useRef"])(null);
  var addScrollLock = Object(compat_module["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }

    // apply the lock styles and padding if this is the first scroll lock
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }

    // account for touch devices
    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions);

      // Allow scroll on provided target
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }

    // increment active scroll locks
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = Object(compat_module["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    // safely decrement active scroll locks
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

    // reapply original body styles, if any
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }

    // remove touch listeners
    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  Object(compat_module["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}
function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var blurSelectInput = function blurSelectInput() {
  return document.activeElement && document.activeElement.blur();
};
var _ref2$1 =  true ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : undefined;
function ScrollManager(_ref) {
  var children = _ref.children,
    lockEnabled = _ref.lockEnabled,
    _ref$captureEnabled = _ref.captureEnabled,
    captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return emotion_react_esm_jsx(compat_module["Fragment"], null, lockEnabled && emotion_react_esm_jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}
function Select_aecb2a80_esm_EMOTION_STRINGIFIED_CSS_ERROR_() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Select_aecb2a80_esm_ref2 =  true ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : undefined;
var Select_aecb2a80_esm_RequiredInput = function RequiredInput(_ref) {
  var name = _ref.name,
    onFocus = _ref.onFocus;
  return emotion_react_esm_jsx("input", {
    required: true,
    name: name,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: onFocus,
    css: Select_aecb2a80_esm_ref2
    // Prevent `Switching from uncontrolled to controlled` error
    ,

    value: "",
    onChange: function onChange() {}
  });
};
var RequiredInput$1 = Select_aecb2a80_esm_RequiredInput;
var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var Select_aecb2a80_esm_isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};
var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: index_baa8dc4f_esm_groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: index_baa8dc4f_esm_indicatorSeparatorCSS,
  input: index_baa8dc4f_esm_inputCSS,
  loadingIndicator: index_baa8dc4f_esm_loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: index_baa8dc4f_esm_menuCSS,
  menuList: index_baa8dc4f_esm_menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: index_baa8dc4f_esm_multiValueCSS,
  multiValueLabel: index_baa8dc4f_esm_multiValueLabelCSS,
  multiValueRemove: index_baa8dc4f_esm_multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: index_baa8dc4f_esm_optionCSS,
  placeholder: index_baa8dc4f_esm_placeholderCSS,
  singleValue: index_baa8dc4f_esm_css,
  valueContainer: index_baa8dc4f_esm_valueContainerCSS
};
// Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // initialize with source styles
  var styles = objectSpread2_objectSpread2({}, source);

  // massage in target styles
  Object.keys(target).forEach(function (keyAsString) {
    var key = keyAsString;
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}
var Select_aecb2a80_esm_colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var Select_aecb2a80_esm_borderRadius = 4;
// Used to calculate consistent margin/padding on elements
var Select_aecb2a80_esm_baseUnit = 4;
// The minimum height of the control
var Select_aecb2a80_esm_controlHeight = 38;
// The amount of space between the control and menu */
var menuGutter = Select_aecb2a80_esm_baseUnit * 2;
var Select_aecb2a80_esm_spacing = {
  baseUnit: Select_aecb2a80_esm_baseUnit,
  controlHeight: Select_aecb2a80_esm_controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: Select_aecb2a80_esm_borderRadius,
  colors: Select_aecb2a80_esm_colors,
  spacing: Select_aecb2a80_esm_spacing
};
var defaultProps = {
  'aria-live': 'polite',
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: Select_aecb2a80_esm_createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: Select_aecb2a80_esm_isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = Select_aecb2a80_esm_getOptionLabel(props, option);
  var value = getOptionValue(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if ('options' in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }).filter(notNullish);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
    inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
    isSelected = categorizedOption.isSelected,
    label = categorizedOption.label,
    value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
    lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}
var Select_aecb2a80_esm_getOptionLabel = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;
  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue(props, option);
  return selectValue.some(function (i) {
    return getOptionValue(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
    isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select_aecb2a80_esm_Select = /*#__PURE__*/function (_Component) {
  _inherits(Select, _Component);
  var _super = _createSuper(Select);
  // Misc. Instance Properties
  // ------------------------------

  // TODO

  // Refs
  // ------------------------------

  // Lifecycle
  // ------------------------------

  function Select(_props) {
    var _this;
    _classCallCheck(this, Select);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;
    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange(newValue, actionMeta);
    };
    _this.setValue = function (newValue, action, option) {
      var _this$props2 = _this.props,
        closeMenuOnSelect = _this$props2.closeMenuOnSelect,
        isMulti = _this$props2.isMulti,
        inputValue = _this$props2.inputValue;
      _this.onInputChange('', {
        action: 'set-value',
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      // when the select value should change, we should reset focusedValue
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };
    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
        blurInputOnSelect = _this$props3.blurInputOnSelect,
        isMulti = _this$props3.isMulti,
        name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        })), 'deselect-option', newValue);
      } else if (!isDisabled) {
        // Select option if option is not disabled
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), 'select-option', newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), 'select-option');
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: 'select-option',
          option: newValue,
          name: name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;
      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: 'clear',
        removedValues: selectValue
      });
    };
    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };
    _this.getValue = function () {
      return _this.state.selectValue;
    };
    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function (data) {
      return Select_aecb2a80_esm_getOptionLabel(_this.props, data);
    };
    _this.getOptionValue = function (data) {
      return getOptionValue(_this.props, data);
    };
    _this.getStyles = function (key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function (key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function () {
      return index_baa8dc4f_esm_defaultComponents(_this.props);
    };
    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: objectSpread2_objectSpread2({
          value: value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function (event) {
      // Event captured by dropdown indicator
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
        isMulti = _this$props4.isMulti,
        menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };
    _this.onTouchStart = function (_ref2) {
      var touches = _ref2.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }

      // reset move vars
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function (event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: 'input-change',
        prevInputValue: prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function (event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange('', {
        action: 'input-blur',
        prevInputValue: prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      _this.setState({
        focusedOption: focusedOption
      });
    };
    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
        isMulti = _this$props5.isMulti,
        backspaceRemovesValue = _this$props5.backspaceRemovesValue,
        escapeClearsValue = _this$props5.escapeClearsValue,
        inputValue = _this$props5.inputValue,
        isClearable = _this$props5.isClearable,
        isDisabled = _this$props5.isDisabled,
        menuIsOpen = _this$props5.menuIsOpen,
        onKeyDown = _this$props5.onKeyDown,
        tabSelectsValue = _this$props5.tabSelectsValue,
        openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
        focusedOption = _this$state.focusedOption,
        focusedValue = _this$state.focusedValue,
        selectValue = _this$state.selectValue;
      if (isDisabled) return;
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }

      // Block option hover events when the user has just pressed a key
      _this.blockOptionHover = true;
      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;
          _this.focusValue('previous');
          break;
        case 'ArrowRight':
          if (!isMulti || inputValue) return;
          _this.focusValue('next');
          break;
        case 'Delete':
        case 'Backspace':
          if (inputValue) return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case 'Tab':
          if (_this.isComposing) return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
          // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange('', {
              action: 'menu-close',
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case ' ':
          // space
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu('first');
            break;
          }
          if (!focusedOption) return;
          _this.selectOption(focusedOption);
          break;
        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }
          break;
        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }
          break;
        case 'PageUp':
          if (!menuIsOpen) return;
          _this.focusOption('pageup');
          break;
        case 'PageDown':
          if (!menuIsOpen) return;
          _this.focusOption('pagedown');
          break;
        case 'Home':
          if (!menuIsOpen) return;
          _this.focusOption('first');
          break;
        case 'End':
          if (!menuIsOpen) return;
          _this.focusOption('last');
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = index_baa8dc4f_esm_cleanValue(_props.value);

    // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusedOption = focusableOptions[optionIndex];
    }
    return _this;
  }
  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }

      // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
        isDisabled = _this$props6.isDisabled,
        menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
      // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled ||
      // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programmatically disabled while focused
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: true
        });
      }

      // scroll the focused option into view if necessary
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }

    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange('', {
        action: 'menu-close',
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }

    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }

    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state,
        selectValue = _this$state2.selectValue,
        isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }

      // only scroll if the menu isn't already open
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        focusedValue = _this$state3.focusedValue;

      // Only multiselects support value focusing
      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;
      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'
      var focusedIndex = options.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value:
    // ==============================
    // Getters
    // ==============================

    function getTheme() {
      // Use the default theme if there are no customisations.
      if (!this.props.theme) {
        return defaultTheme;
      }
      // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.
      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      }
      // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.
      return objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
        cx = this.cx,
        getStyles = this.getStyles,
        getClassNames = this.getClassNames,
        getValue = this.getValue,
        selectOption = this.selectOption,
        setValue = this.setValue,
        props = this.props;
      var isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue: clearValue,
        cx: cx,
        getStyles: getStyles,
        getClassNames: getClassNames,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        selectProps: props,
        setValue: setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
        isClearable = _this$props7.isClearable,
        isMulti = _this$props7.isMulti;

      // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable
      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    }

    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value:
    // ==============================
    // Composition Handlers
    // ==============================

    function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value:
    // ==============================
    // Touch Handlers
    // ==============================

    function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value:
    // ==============================
    // Renderers
    // ==============================
    function renderInput() {
      var _this$props8 = this.props,
        isDisabled = _this$props8.isDisabled,
        isSearchable = _this$props8.isSearchable,
        inputId = _this$props8.inputId,
        inputValue = _this$props8.inputValue,
        tabIndex = _this$props8.tabIndex,
        form = _this$props8.form,
        menuIsOpen = _this$props8.menuIsOpen,
        required = _this$props8.required;
      var _this$getComponents = this.getComponents(),
        Input = _this$getComponents.Input;
      var _this$state4 = this.state,
        inputIsHidden = _this$state4.inputIsHidden,
        ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId('input');

      // aria attributes makes the JSX "noisy", separated for clarity
      var ariaAttributes = objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2({
        'aria-autocomplete': 'list',
        'aria-expanded': menuIsOpen,
        'aria-haspopup': true,
        'aria-errormessage': this.props['aria-errormessage'],
        'aria-invalid': this.props['aria-invalid'],
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby'],
        'aria-required': required,
        role: 'combobox'
      }, menuIsOpen && {
        'aria-controls': this.getElementId('listbox'),
        'aria-owns': this.getElementId('listbox')
      }), !isSearchable && {
        'aria-readonly': true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
        'aria-describedby': this.getElementId('live-region')
      } : {
        'aria-describedby': this.getElementId('placeholder')
      });
      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/compat_module["createElement"](DummyInput, _extends({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex: tabIndex,
          inputMode: "none",
          form: form,
          value: ""
        }, ariaAttributes));
      }
      return /*#__PURE__*/compat_module["createElement"](Input, _extends({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(),
        MultiValue = _this$getComponents2.MultiValue,
        MultiValueContainer = _this$getComponents2.MultiValueContainer,
        MultiValueLabel = _this$getComponents2.MultiValueLabel,
        MultiValueRemove = _this$getComponents2.MultiValueRemove,
        SingleValue = _this$getComponents2.SingleValue,
        Placeholder = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props,
        controlShouldRenderValue = _this$props9.controlShouldRenderValue,
        isDisabled = _this$props9.isDisabled,
        isMulti = _this$props9.isMulti,
        inputValue = _this$props9.inputValue,
        placeholder = _this$props9.placeholder;
      var _this$state5 = this.state,
        selectValue = _this$state5.selectValue,
        focusedValue = _this$state5.focusedValue,
        isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/compat_module["createElement"](Placeholder, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused,
          innerProps: {
            id: this.getElementId('placeholder')
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /*#__PURE__*/compat_module["createElement"](MultiValue, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: key,
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /*#__PURE__*/compat_module["createElement"](SingleValue, _extends({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
        ClearIndicator = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props,
        isDisabled = _this$props10.isDisabled,
        isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/compat_module["createElement"](ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
        LoadingIndicator = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props,
        isDisabled = _this$props11.isDisabled,
        isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/compat_module["createElement"](LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
        DropdownIndicator = _this$getComponents5.DropdownIndicator,
        IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

      // separator doesn't make sense without the dropdown indicator
      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/compat_module["createElement"](IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
        DropdownIndicator = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/compat_module["createElement"](DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(),
        Group = _this$getComponents7.Group,
        GroupHeading = _this$getComponents7.GroupHeading,
        Menu = _this$getComponents7.Menu,
        MenuList = _this$getComponents7.MenuList,
        MenuPortal = _this$getComponents7.MenuPortal,
        LoadingMessage = _this$getComponents7.LoadingMessage,
        NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
        Option = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
        captureMenuScroll = _this$props12.captureMenuScroll,
        inputValue = _this$props12.inputValue,
        isLoading = _this$props12.isLoading,
        loadingMessage = _this$props12.loadingMessage,
        minMenuHeight = _this$props12.minMenuHeight,
        maxMenuHeight = _this$props12.maxMenuHeight,
        menuIsOpen = _this$props12.menuIsOpen,
        menuPlacement = _this$props12.menuPlacement,
        menuPosition = _this$props12.menuPosition,
        menuPortalTarget = _this$props12.menuPortalTarget,
        menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
        noOptionsMessage = _this$props12.noOptionsMessage,
        onMenuScrollToTop = _this$props12.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null;

      // TODO: Internal Option Type here
      var render = function render(props, id) {
        var type = props.type,
          data = props.data,
          isDisabled = props.isDisabled,
          isSelected = props.isSelected,
          label = props.label,
          value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /*#__PURE__*/compat_module["createElement"](Option, _extends({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var _data = item.data,
              options = item.options,
              groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/compat_module["createElement"](Group, _extends({}, commonProps, {
              key: groupId,
              data: _data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/compat_module["createElement"](LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });
        if (_message === null) return null;
        menuUI = /*#__PURE__*/compat_module["createElement"](NoOptionsMessage, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/compat_module["createElement"](index_baa8dc4f_esm_MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
          _ref4$placerProps = _ref4.placerProps,
          placement = _ref4$placerProps.placement,
          maxHeight = _ref4$placerProps.maxHeight;
        return /*#__PURE__*/compat_module["createElement"](Menu, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove,
            id: _this4.getElementId('listbox')
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/compat_module["createElement"](ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/compat_module["createElement"](MenuList, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            isLoading: isLoading,
            maxHeight: maxHeight,
            focusedOption: focusedOption
          }), menuUI);
        }));
      });

      // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`
      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/compat_module["createElement"](MenuPortal, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props,
        delimiter = _this$props13.delimiter,
        isDisabled = _this$props13.isDisabled,
        isMulti = _this$props13.isMulti,
        name = _this$props13.name,
        required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (required && !this.hasValue() && !isDisabled) {
        return /*#__PURE__*/compat_module["createElement"](RequiredInput$1, {
          name: name,
          onFocus: this.onValueInputFocus
        });
      }
      if (!name || isDisabled) return;
      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/compat_module["createElement"]("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/compat_module["createElement"]("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/compat_module["createElement"]("input", {
            name: name,
            type: "hidden",
            value: ""
          });
          return /*#__PURE__*/compat_module["createElement"]("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
        return /*#__PURE__*/compat_module["createElement"]("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state,
        ariaSelection = _this$state6.ariaSelection,
        focusedOption = _this$state6.focusedOption,
        focusedValue = _this$state6.focusedValue,
        isFocused = _this$state6.isFocused,
        selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /*#__PURE__*/compat_module["createElement"](LiveRegion$1, _extends({}, commonProps, {
        id: this.getElementId('live-region'),
        ariaSelection: ariaSelection,
        focusedOption: focusedOption,
        focusedValue: focusedValue,
        isFocused: isFocused,
        selectValue: selectValue,
        focusableOptions: focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
        Control = _this$getComponents8.Control,
        IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
        SelectContainer = _this$getComponents8.SelectContainer,
        ValueContainer = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props,
        className = _this$props14.className,
        id = _this$props14.id,
        isDisabled = _this$props14.isDisabled,
        menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/compat_module["createElement"](SelectContainer, _extends({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/compat_module["createElement"](Control, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/compat_module["createElement"](ValueContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/compat_module["createElement"](IndicatorsContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
        clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
        inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
        ariaSelection = state.ariaSelection,
        isFocused = state.isFocused,
        prevWasFocused = state.prevWasFocused;
      var options = props.options,
        value = props.value,
        menuIsOpen = props.menuIsOpen,
        inputValue = props.inputValue,
        isMulti = props.isMulti;
      var selectValue = index_baa8dc4f_esm_cleanValue(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      // some updates should toggle the state of the input visibility
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        // If `value` or `defaultValue` props are not empty then announce them
        // when the Select is initially focused
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: 'initial-input-focus'
        };
        hasKeptFocus = !prevWasFocused;
      }

      // If the 'initial-input-focus' action has been set already
      // then reset the ariaSelection to null
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
        newAriaSelection = null;
      }
      return objectSpread2_objectSpread2(objectSpread2_objectSpread2(objectSpread2_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select;
}(compat_module["Component"]);
Select_aecb2a80_esm_Select.defaultProps = defaultProps;

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("yO+l");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("nxTg");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("RiSW");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("eef+");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createSuper.js
var createSuper = __webpack_require__("Pe5x");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("5WRv");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("e+GP");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("hc4W");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("OvAC");

// CONCATENATED MODULE: ../node_modules/react-select/dist/react-select.esm.js

























var StateManagedSelect = /*#__PURE__*/Object(compat_module["forwardRef"])(function (props, ref) {
  var baseSelectProps = useStateManager(props);
  return /*#__PURE__*/compat_module["createElement"](Select_aecb2a80_esm_Select, _extends({
    ref: ref
  }, baseSelectProps));
});
var StateManagedSelect$1 = StateManagedSelect;
var react_select_esm_NonceProvider = function NonceProvider(_ref) {
  var nonce = _ref.nonce,
    children = _ref.children,
    cacheKey = _ref.cacheKey;
  var emotionCache = Object(compat_module["useMemo"])(function () {
    return emotion_cache_esm_createCache({
      key: cacheKey,
      nonce: nonce
    });
  }, [cacheKey, nonce]);
  return /*#__PURE__*/compat_module["createElement"](CacheProvider, {
    value: emotionCache
  }, children);
};


/***/ }),

/***/ "WI9V":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "Zhxd":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("+Sw5");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

/***/ }),

/***/ "e+GP":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "eef+":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("WI9V");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "h031":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EbY7");
/* harmony import */ var _assets_header_loader_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9WSe");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var CDFormStyleButton = function CDFormStyleButton(_ref) {
  var props = _ref.props,
    loading = _ref.loading;
  var txt = "Check Your Eligibility";
  var getText = function getText() {
    return txt.split("").map(function (t, i) {
      return h("span", {
        key: i
      }, t);
    });
  };
  return h("div", {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].cdStyleContent
  }, h("button", _extends({}, props, {
    class: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].cdButton,
    type: "submit"
  }), h("div", null, getText()), loading && h("img", {
    src: _assets_header_loader_gif__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "",
    className: "loader-icon"
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (CDFormStyleButton);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "hc4W":
/***/ (function(module, exports) {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "iNmH":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("+Sw5");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "kluZ":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "nOXW":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP")["default"];
var toPrimitive = __webpack_require__("s9iv");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "nxTg":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("+3YS");
var iterableToArrayLimit = __webpack_require__("S411");
var unsupportedIterableToArray = __webpack_require__("Zhxd");
var nonIterableRest = __webpack_require__("+bRE");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "ofxU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var data = [{
  name: "Afghanistan",
  topLevelDomain: [".af"],
  alpha2Code: "AF",
  alpha3Code: "AFG",
  callingCodes: ["93"],
  capital: "Kabul",
  altSpellings: ["AF", "Afġānistān"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 40218234,
  latlng: [33, 65],
  demonym: "Afghan",
  area: 652230,
  timezones: ["UTC+04:30"],
  borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
  nativeName: "افغانستان",
  numericCode: "004",
  flags: {
    svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
  },
  currencies: [{
    code: "AFN",
    name: "Afghan afghani",
    symbol: "؋"
  }],
  languages: [{
    iso639_1: "ps",
    iso639_2: "pus",
    name: "Pashto",
    nativeName: "پښتو"
  }, {
    iso639_1: "uz",
    iso639_2: "uzb",
    name: "Uzbek",
    nativeName: "Oʻzbek"
  }, {
    iso639_1: "tk",
    iso639_2: "tuk",
    name: "Turkmen",
    nativeName: "Türkmen"
  }],
  translations: {
    br: "Afghanistan",
    pt: "Afeganistão",
    nl: "Afghanistan",
    hr: "Afganistan",
    fa: "افغانستان",
    de: "Afghanistan",
    es: "Afganistán",
    fr: "Afghanistan",
    ja: "アフガニスタン",
    it: "Afghanistan",
    hu: "Afganisztán"
  },
  flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
  regionalBlocs: [{
    acronym: "SAARC",
    name: "South Asian Association for Regional Cooperation"
  }],
  cioc: "AFG",
  independent: true
}, {
  name: "Åland Islands",
  topLevelDomain: [".ax"],
  alpha2Code: "AX",
  alpha3Code: "ALA",
  callingCodes: ["358"],
  capital: "Mariehamn",
  altSpellings: ["AX", "Aaland", "Aland", "Ahvenanmaa"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 28875,
  latlng: [60.116667, 19.9],
  demonym: "Ålandish",
  area: 1580,
  timezones: ["UTC+02:00"],
  nativeName: "Åland",
  numericCode: "248",
  flags: {
    svg: "https://flagcdn.com/ax.svg",
    png: "https://flagcdn.com/w320/ax.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "sv",
    iso639_2: "swe",
    name: "Swedish",
    nativeName: "svenska"
  }],
  translations: {
    br: "Åland",
    pt: "Ilhas de Aland",
    nl: "Ålandeilanden",
    hr: "Ålandski otoci",
    fa: "جزایر الند",
    de: "Åland",
    es: "Alandia",
    fr: "Åland",
    ja: "オーランド諸島",
    it: "Isole Aland",
    hu: "Åland-szigetek"
  },
  flag: "https://flagcdn.com/ax.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  independent: false
}, {
  name: "Albania",
  topLevelDomain: [".al"],
  alpha2Code: "AL",
  alpha3Code: "ALB",
  callingCodes: ["355"],
  capital: "Tirana",
  altSpellings: ["AL", "Shqipëri", "Shqipëria", "Shqipnia"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 2837743,
  latlng: [41, 20],
  demonym: "Albanian",
  area: 28748,
  gini: 33.2,
  timezones: ["UTC+01:00"],
  borders: ["MNE", "GRC", "MKD", "UNK"],
  nativeName: "Shqipëria",
  numericCode: "008",
  flags: {
    svg: "https://flagcdn.com/al.svg",
    png: "https://flagcdn.com/w320/al.png"
  },
  currencies: [{
    code: "ALL",
    name: "Albanian lek",
    symbol: "L"
  }],
  languages: [{
    iso639_1: "sq",
    iso639_2: "sqi",
    name: "Albanian",
    nativeName: "Shqip"
  }],
  translations: {
    br: "Albania",
    pt: "Albânia",
    nl: "Albanië",
    hr: "Albanija",
    fa: "آلبانی",
    de: "Albanien",
    es: "Albania",
    fr: "Albanie",
    ja: "アルバニア",
    it: "Albania",
    hu: "Albánia"
  },
  flag: "https://flagcdn.com/al.svg",
  regionalBlocs: [{
    acronym: "CEFTA",
    name: "Central European Free Trade Agreement"
  }],
  cioc: "ALB",
  independent: true
}, {
  name: "Algeria",
  topLevelDomain: [".dz"],
  alpha2Code: "DZ",
  alpha3Code: "DZA",
  callingCodes: ["213"],
  capital: "Algiers",
  altSpellings: ["DZ", "Dzayer", "Algérie"],
  subregion: "Northern Africa",
  region: "Africa",
  population: 44700000,
  latlng: [28, 3],
  demonym: "Algerian",
  area: 2381741,
  gini: 27.6,
  timezones: ["UTC+01:00"],
  borders: ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
  nativeName: "الجزائر",
  numericCode: "012",
  flags: {
    svg: "https://flagcdn.com/dz.svg",
    png: "https://flagcdn.com/w320/dz.png"
  },
  currencies: [{
    code: "DZD",
    name: "Algerian dinar",
    symbol: "د.ج"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Aljeria",
    pt: "Argélia",
    nl: "Algerije",
    hr: "Alžir",
    fa: "الجزایر",
    de: "Algerien",
    es: "Argelia",
    fr: "Algérie",
    ja: "アルジェリア",
    it: "Algeria",
    hu: "Algéria"
  },
  flag: "https://flagcdn.com/dz.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "ALG",
  independent: true
}, {
  name: "American Samoa",
  topLevelDomain: [".as"],
  alpha2Code: "AS",
  alpha3Code: "ASM",
  callingCodes: ["1"],
  capital: "Pago Pago",
  altSpellings: ["AS", "Amerika Sāmoa", "Amelika Sāmoa", "Sāmoa Amelika"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 55197,
  latlng: [-14.33333333, -170],
  demonym: "American Samoan",
  area: 199,
  timezones: ["UTC-11:00"],
  nativeName: "American Samoa",
  numericCode: "016",
  flags: {
    svg: "https://flagcdn.com/as.svg",
    png: "https://flagcdn.com/w320/as.png"
  },
  currencies: [{
    code: "USD",
    name: "United States Dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "sm",
    iso639_2: "smo",
    name: "Samoan",
    nativeName: "gagana fa'a Samoa"
  }],
  translations: {
    br: "Samoa Amerikan",
    pt: "Samoa Americana",
    nl: "Amerikaans Samoa",
    hr: "Američka Samoa",
    fa: "ساموآی آمریکا",
    de: "Amerikanisch-Samoa",
    es: "Samoa Americana",
    fr: "Samoa américaines",
    ja: "アメリカ領サモア",
    it: "Samoa Americane",
    hu: "Amerikai Szamoa"
  },
  flag: "https://flagcdn.com/as.svg",
  cioc: "ASA",
  independent: false
}, {
  name: "Andorra",
  topLevelDomain: [".ad"],
  alpha2Code: "AD",
  alpha3Code: "AND",
  callingCodes: ["376"],
  capital: "Andorra la Vella",
  altSpellings: ["AD", "Principality of Andorra", "Principat d'Andorra"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 77265,
  latlng: [42.5, 1.5],
  demonym: "Andorran",
  area: 468,
  timezones: ["UTC+01:00"],
  borders: ["FRA", "ESP"],
  nativeName: "Andorra",
  numericCode: "020",
  flags: {
    svg: "https://flagcdn.com/ad.svg",
    png: "https://flagcdn.com/w320/ad.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "ca",
    iso639_2: "cat",
    name: "Catalan",
    nativeName: "català"
  }],
  translations: {
    br: "Andorra",
    pt: "Andorra",
    nl: "Andorra",
    hr: "Andora",
    fa: "آندورا",
    de: "Andorra",
    es: "Andorra",
    fr: "Andorre",
    ja: "アンドラ",
    it: "Andorra",
    hu: "Andorra"
  },
  flag: "https://flagcdn.com/ad.svg",
  cioc: "AND",
  independent: true
}, {
  name: "Angola",
  topLevelDomain: [".ao"],
  alpha2Code: "AO",
  alpha3Code: "AGO",
  callingCodes: ["244"],
  capital: "Luanda",
  altSpellings: ["AO", "República de Angola", "ʁɛpublika de an'ɡɔla"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 32866268,
  latlng: [-12.5, 18.5],
  demonym: "Angolan",
  area: 1246700,
  gini: 51.3,
  timezones: ["UTC+01:00"],
  borders: ["COG", "COD", "ZMB", "NAM"],
  nativeName: "Angola",
  numericCode: "024",
  flags: {
    svg: "https://flagcdn.com/ao.svg",
    png: "https://flagcdn.com/w320/ao.png"
  },
  currencies: [{
    code: "AOA",
    name: "Angolan kwanza",
    symbol: "Kz"
  }],
  languages: [{
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }],
  translations: {
    br: "Angola",
    pt: "Angola",
    nl: "Angola",
    hr: "Angola",
    fa: "آنگولا",
    de: "Angola",
    es: "Angola",
    fr: "Angola",
    ja: "アンゴラ",
    it: "Angola",
    hu: "Angola"
  },
  flag: "https://flagcdn.com/ao.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "ANG",
  independent: true
}, {
  name: "Anguilla",
  topLevelDomain: [".ai"],
  alpha2Code: "AI",
  alpha3Code: "AIA",
  callingCodes: ["1"],
  capital: "The Valley",
  altSpellings: ["AI"],
  subregion: "Caribbean",
  region: "Americas",
  population: 13452,
  latlng: [18.25, -63.16666666],
  demonym: "Anguillian",
  area: 91,
  timezones: ["UTC-04:00"],
  nativeName: "Anguilla",
  numericCode: "660",
  flags: {
    svg: "https://flagcdn.com/ai.svg",
    png: "https://flagcdn.com/w320/ai.png"
  },
  currencies: [{
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Anguilla",
    pt: "Anguila",
    nl: "Anguilla",
    hr: "Angvila",
    fa: "آنگویلا",
    de: "Anguilla",
    es: "Anguilla",
    fr: "Anguilla",
    ja: "アンギラ",
    it: "Anguilla",
    hu: "Anguilla"
  },
  flag: "https://flagcdn.com/ai.svg",
  independent: false
}, {
  name: "Antarctica",
  topLevelDomain: [".aq"],
  alpha2Code: "AQ",
  alpha3Code: "ATA",
  callingCodes: ["672"],
  subregion: "Antarctica",
  region: "Polar",
  population: 1000,
  latlng: [-74.65, 4.48],
  demonym: "Antarctic",
  area: 14000000,
  timezones: ["UTC-03:00", "UTC+03:00", "UTC+05:00", "UTC+06:00", "UTC+07:00", "UTC+08:00", "UTC+10:00", "UTC+12:00"],
  nativeName: "Antarctica",
  numericCode: "010",
  flags: {
    svg: "https://flagcdn.com/aq.svg",
    png: "https://flagcdn.com/w320/aq.png"
  },
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "ru",
    iso639_2: "rus",
    name: "Russian",
    nativeName: "Русский"
  }],
  translations: {
    br: "Antarktika",
    pt: "Antárctida",
    nl: "Antarctica",
    hr: "Antarktika",
    fa: "جنوبگان",
    de: "Antarktika",
    es: "Antártida",
    fr: "Antarctique",
    ja: "南極大陸",
    it: "Antartide",
    hu: "Antarktisz"
  },
  flag: "https://flagcdn.com/aq.svg",
  independent: false
}, {
  name: "Antigua and Barbuda",
  topLevelDomain: [".ag"],
  alpha2Code: "AG",
  alpha3Code: "ATG",
  callingCodes: ["1"],
  capital: "Saint John's",
  altSpellings: ["AG"],
  subregion: "Caribbean",
  region: "Americas",
  population: 97928,
  latlng: [17.05, -61.8],
  demonym: "Antiguan, Barbudan",
  area: 442,
  timezones: ["UTC-04:00"],
  nativeName: "Antigua and Barbuda",
  numericCode: "028",
  flags: {
    svg: "https://flagcdn.com/ag.svg",
    png: "https://flagcdn.com/w320/ag.png"
  },
  currencies: [{
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Antigua ha Barbuda",
    pt: "Antígua e Barbuda",
    nl: "Antigua en Barbuda",
    hr: "Antigva i Barbuda",
    fa: "آنتیگوا و باربودا",
    de: "Antigua und Barbuda",
    es: "Antigua y Barbuda",
    fr: "Antigua-et-Barbuda",
    ja: "アンティグア・バーブーダ",
    it: "Antigua e Barbuda",
    hu: "Antigua és Barbuda"
  },
  flag: "https://flagcdn.com/ag.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "ANT",
  independent: true
}, {
  name: "Argentina",
  topLevelDomain: [".ar"],
  alpha2Code: "AR",
  alpha3Code: "ARG",
  callingCodes: ["54"],
  capital: "Buenos Aires",
  altSpellings: ["AR", "Argentine Republic", "República Argentina"],
  subregion: "South America",
  region: "Americas",
  population: 45376763,
  latlng: [-34, -64],
  demonym: "Argentinean",
  area: 2780400,
  gini: 42.9,
  timezones: ["UTC-03:00"],
  borders: ["BOL", "BRA", "CHL", "PRY", "URY"],
  nativeName: "Argentina",
  numericCode: "032",
  flags: {
    svg: "https://flagcdn.com/ar.svg",
    png: "https://flagcdn.com/w320/ar.png"
  },
  currencies: [{
    code: "ARS",
    name: "Argentine peso",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }, {
    iso639_1: "gn",
    iso639_2: "grn",
    name: "Guaraní",
    nativeName: "Avañe'ẽ"
  }],
  translations: {
    br: "Arc'hantina",
    pt: "Argentina",
    nl: "Argentinië",
    hr: "Argentina",
    fa: "آرژانتین",
    de: "Argentinien",
    es: "Argentina",
    fr: "Argentine",
    ja: "アルゼンチン",
    it: "Argentina",
    hu: "Argentína"
  },
  flag: "https://flagcdn.com/ar.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "ARG",
  independent: true
}, {
  name: "Armenia",
  topLevelDomain: [".am"],
  alpha2Code: "AM",
  alpha3Code: "ARM",
  callingCodes: ["374"],
  capital: "Yerevan",
  altSpellings: ["AM", "Hayastan", "Republic of Armenia", "Հայաստանի Հանրապետություն"],
  subregion: "Western Asia",
  region: "Asia",
  population: 2963234,
  latlng: [40, 45],
  demonym: "Armenian",
  area: 29743,
  gini: 29.9,
  timezones: ["UTC+04:00"],
  borders: ["AZE", "GEO", "IRN", "TUR"],
  nativeName: "Հայաստան",
  numericCode: "051",
  flags: {
    svg: "https://flagcdn.com/am.svg",
    png: "https://flagcdn.com/w320/am.png"
  },
  currencies: [{
    code: "AMD",
    name: "Armenian dram",
    symbol: "֏"
  }],
  languages: [{
    iso639_1: "hy",
    iso639_2: "hye",
    name: "Armenian",
    nativeName: "Հայերեն"
  }],
  translations: {
    br: "Armenia",
    pt: "Arménia",
    nl: "Armenië",
    hr: "Armenija",
    fa: "ارمنستان",
    de: "Armenien",
    es: "Armenia",
    fr: "Arménie",
    ja: "アルメニア",
    it: "Armenia",
    hu: "Örményország"
  },
  flag: "https://flagcdn.com/am.svg",
  regionalBlocs: [{
    acronym: "EEU",
    name: "Eurasian Economic Union",
    otherAcronyms: ["EAEU"]
  }],
  cioc: "ARM",
  independent: true
}, {
  name: "Aruba",
  topLevelDomain: [".aw"],
  alpha2Code: "AW",
  alpha3Code: "ABW",
  callingCodes: ["297"],
  capital: "Oranjestad",
  altSpellings: ["AW"],
  subregion: "Caribbean",
  region: "Americas",
  population: 106766,
  latlng: [12.5, -69.96666666],
  demonym: "Aruban",
  area: 180,
  timezones: ["UTC-04:00"],
  nativeName: "Aruba",
  numericCode: "533",
  flags: {
    svg: "https://flagcdn.com/aw.svg",
    png: "https://flagcdn.com/w320/aw.png"
  },
  currencies: [{
    code: "AWG",
    name: "Aruban florin",
    symbol: "ƒ"
  }],
  languages: [{
    iso639_1: "nl",
    iso639_2: "nld",
    name: "Dutch",
    nativeName: "Nederlands"
  }, {
    iso639_1: "pa",
    iso639_2: "pan",
    name: "(Eastern) Punjabi",
    nativeName: "ਪੰਜਾਬੀ"
  }],
  translations: {
    br: "Aruba",
    pt: "Aruba",
    nl: "Aruba",
    hr: "Aruba",
    fa: "آروبا",
    de: "Aruba",
    es: "Aruba",
    fr: "Aruba",
    ja: "アルバ",
    it: "Aruba",
    hu: "Aruba"
  },
  flag: "https://flagcdn.com/aw.svg",
  cioc: "ARU",
  independent: true
}, {
  name: "Australia",
  topLevelDomain: [".au"],
  alpha2Code: "AU",
  alpha3Code: "AUS",
  callingCodes: ["61"],
  capital: "Canberra",
  altSpellings: ["AU"],
  subregion: "Australia and New Zealand",
  region: "Oceania",
  population: 25687041,
  latlng: [-27, 133],
  demonym: "Australian",
  area: 7692024,
  gini: 34.4,
  timezones: ["UTC+05:00", "UTC+06:30", "UTC+07:00", "UTC+08:00", "UTC+09:30", "UTC+10:00", "UTC+10:30", "UTC+11:30"],
  nativeName: "Australia",
  numericCode: "036",
  flags: {
    svg: "https://flagcdn.com/au.svg",
    png: "https://flagcdn.com/w320/au.png"
  },
  currencies: [{
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Aostralia",
    pt: "Austrália",
    nl: "Australië",
    hr: "Australija",
    fa: "استرالیا",
    de: "Australien",
    es: "Australia",
    fr: "Australie",
    ja: "オーストラリア",
    it: "Australia",
    hu: "Ausztrália"
  },
  flag: "https://flagcdn.com/au.svg",
  cioc: "AUS",
  independent: true
}, {
  name: "Austria",
  topLevelDomain: [".at"],
  alpha2Code: "AT",
  alpha3Code: "AUT",
  callingCodes: ["43"],
  capital: "Vienna",
  altSpellings: ["AT", "Österreich", "Osterreich", "Oesterreich"],
  subregion: "Central Europe",
  region: "Europe",
  population: 8917205,
  latlng: [47.33333333, 13.33333333],
  demonym: "Austrian",
  area: 83871,
  gini: 30.8,
  timezones: ["UTC+01:00"],
  borders: ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
  nativeName: "Österreich",
  numericCode: "040",
  flags: {
    svg: "https://flagcdn.com/at.svg",
    png: "https://flagcdn.com/w320/at.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "de",
    iso639_2: "deu",
    name: "German",
    nativeName: "Deutsch"
  }],
  translations: {
    br: "Aostria",
    pt: "Áustria",
    nl: "Oostenrijk",
    hr: "Austrija",
    fa: "اتریش",
    de: "Österreich",
    es: "Austria",
    fr: "Autriche",
    ja: "オーストリア",
    it: "Austria",
    hu: "Ausztria"
  },
  flag: "https://flagcdn.com/at.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "AUT",
  independent: true
}, {
  name: "Azerbaijan",
  topLevelDomain: [".az"],
  alpha2Code: "AZ",
  alpha3Code: "AZE",
  callingCodes: ["994"],
  capital: "Baku",
  altSpellings: ["AZ", "Republic of Azerbaijan", "Azərbaycan Respublikası"],
  subregion: "Western Asia",
  region: "Asia",
  population: 10110116,
  latlng: [40.5, 47.5],
  demonym: "Azerbaijani",
  area: 86600,
  gini: 26.6,
  timezones: ["UTC+04:00"],
  borders: ["ARM", "GEO", "IRN", "RUS", "TUR"],
  nativeName: "Azərbaycan",
  numericCode: "031",
  flags: {
    svg: "https://flagcdn.com/az.svg",
    png: "https://flagcdn.com/w320/az.png"
  },
  currencies: [{
    code: "AZN",
    name: "Azerbaijani manat",
    symbol: "₼"
  }],
  languages: [{
    iso639_1: "az",
    iso639_2: "aze",
    name: "Azerbaijani",
    nativeName: "azərbaycan dili"
  }],
  translations: {
    br: "Azerbaidjan",
    pt: "Azerbaijão",
    nl: "Azerbeidzjan",
    hr: "Azerbajdžan",
    fa: "آذربایجان",
    de: "Aserbaidschan",
    es: "Azerbaiyán",
    fr: "Azerbaïdjan",
    ja: "アゼルバイジャン",
    it: "Azerbaijan",
    hu: "Azerbajdzsán"
  },
  flag: "https://flagcdn.com/az.svg",
  cioc: "AZE",
  independent: true
}, {
  name: "Bahamas",
  topLevelDomain: [".bs"],
  alpha2Code: "BS",
  alpha3Code: "BHS",
  callingCodes: ["1"],
  capital: "Nassau",
  altSpellings: ["BS", "Commonwealth of the Bahamas"],
  subregion: "Caribbean",
  region: "Americas",
  population: 393248,
  latlng: [24.25, -76],
  demonym: "Bahamian",
  area: 13943,
  timezones: ["UTC-05:00"],
  nativeName: "Bahamas",
  numericCode: "044",
  flags: {
    svg: "https://flagcdn.com/bs.svg",
    png: "https://flagcdn.com/w320/bs.png"
  },
  currencies: [{
    code: "BSD",
    name: "Bahamian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Bahamas",
    pt: "Baamas",
    nl: "Bahama’s",
    hr: "Bahami",
    fa: "باهاما",
    de: "Bahamas",
    es: "Bahamas",
    fr: "Bahamas",
    ja: "バハマ",
    it: "Bahamas",
    hu: "Bahama-szigetek"
  },
  flag: "https://flagcdn.com/bs.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "BAH",
  independent: true
}, {
  name: "Bahrain",
  topLevelDomain: [".bh"],
  alpha2Code: "BH",
  alpha3Code: "BHR",
  callingCodes: ["973"],
  capital: "Manama",
  altSpellings: ["BH", "Kingdom of Bahrain", "Mamlakat al-Baḥrayn"],
  subregion: "Western Asia",
  region: "Asia",
  population: 1701583,
  latlng: [26, 50.55],
  demonym: "Bahraini",
  area: 765,
  timezones: ["UTC+03:00"],
  nativeName: "‏البحرين",
  numericCode: "048",
  flags: {
    svg: "https://flagcdn.com/bh.svg",
    png: "https://flagcdn.com/w320/bh.png"
  },
  currencies: [{
    code: "BHD",
    name: "Bahraini dinar",
    symbol: ".د.ب"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Bahrein",
    pt: "Barém",
    nl: "Bahrein",
    hr: "Bahrein",
    fa: "بحرین",
    de: "Bahrain",
    es: "Bahrein",
    fr: "Bahreïn",
    ja: "バーレーン",
    it: "Bahrein",
    hu: "Bahrein"
  },
  flag: "https://flagcdn.com/bh.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "BRN",
  independent: true
}, {
  name: "Bangladesh",
  topLevelDomain: [".bd"],
  alpha2Code: "BD",
  alpha3Code: "BGD",
  callingCodes: ["880"],
  capital: "Dhaka",
  altSpellings: ["BD", "People's Republic of Bangladesh", "Gônôprôjatôntri Bangladesh"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 164689383,
  latlng: [24, 90],
  demonym: "Bangladeshi",
  area: 147570,
  gini: 32.4,
  timezones: ["UTC+06:00"],
  borders: ["MMR", "IND"],
  nativeName: "Bangladesh",
  numericCode: "050",
  flags: {
    svg: "https://flagcdn.com/bd.svg",
    png: "https://flagcdn.com/w320/bd.png"
  },
  currencies: [{
    code: "BDT",
    name: "Bangladeshi taka",
    symbol: "৳"
  }],
  languages: [{
    iso639_1: "bn",
    iso639_2: "ben",
    name: "Bengali",
    nativeName: "বাংলা"
  }],
  translations: {
    br: "Bangladesh",
    pt: "Bangladeche",
    nl: "Bangladesh",
    hr: "Bangladeš",
    fa: "بنگلادش",
    de: "Bangladesch",
    es: "Bangladesh",
    fr: "Bangladesh",
    ja: "バングラデシュ",
    it: "Bangladesh",
    hu: "Banglades"
  },
  flag: "https://flagcdn.com/bd.svg",
  regionalBlocs: [{
    acronym: "SAARC",
    name: "South Asian Association for Regional Cooperation"
  }],
  cioc: "BAN",
  independent: true
}, {
  name: "Barbados",
  topLevelDomain: [".bb"],
  alpha2Code: "BB",
  alpha3Code: "BRB",
  callingCodes: ["1"],
  capital: "Bridgetown",
  altSpellings: ["BB"],
  subregion: "Caribbean",
  region: "Americas",
  population: 287371,
  latlng: [13.16666666, -59.53333333],
  demonym: "Barbadian",
  area: 430,
  timezones: ["UTC-04:00"],
  nativeName: "Barbados",
  numericCode: "052",
  flags: {
    svg: "https://flagcdn.com/bb.svg",
    png: "https://flagcdn.com/w320/bb.png"
  },
  currencies: [{
    code: "BBD",
    name: "Barbadian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Barbados",
    pt: "Barbados",
    nl: "Barbados",
    hr: "Barbados",
    fa: "باربادوس",
    de: "Barbados",
    es: "Barbados",
    fr: "Barbade",
    ja: "バルバドス",
    it: "Barbados",
    hu: "Barbados"
  },
  flag: "https://flagcdn.com/bb.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "BAR",
  independent: true
}, {
  name: "Belarus",
  topLevelDomain: [".by"],
  alpha2Code: "BY",
  alpha3Code: "BLR",
  callingCodes: ["375"],
  capital: "Minsk",
  altSpellings: ["BY", "Bielaruś", "Republic of Belarus", "Белоруссия", "Республика Беларусь", "Belorussiya", "Respublika Belarus’"],
  subregion: "Eastern Europe",
  region: "Europe",
  population: 9398861,
  latlng: [53, 28],
  demonym: "Belarusian",
  area: 207600,
  gini: 25.3,
  timezones: ["UTC+03:00"],
  borders: ["LVA", "LTU", "POL", "RUS", "UKR"],
  nativeName: "Белару́сь",
  numericCode: "112",
  flags: {
    svg: "https://flagcdn.com/by.svg",
    png: "https://flagcdn.com/w320/by.png"
  },
  currencies: [{
    code: "BYN",
    name: "New Belarusian ruble",
    symbol: "Br"
  }, {
    code: "BYR",
    name: "Old Belarusian ruble",
    symbol: "Br"
  }],
  languages: [{
    iso639_1: "be",
    iso639_2: "bel",
    name: "Belarusian",
    nativeName: "беларуская мова"
  }, {
    iso639_1: "ru",
    iso639_2: "rus",
    name: "Russian",
    nativeName: "Русский"
  }],
  translations: {
    br: "Belarus",
    pt: "Bielorrússia",
    nl: "Wit-Rusland",
    hr: "Bjelorusija",
    fa: "بلاروس",
    de: "Weißrussland",
    es: "Bielorrusia",
    fr: "Biélorussie",
    ja: "ベラルーシ",
    it: "Bielorussia",
    hu: "Fehéroroszország"
  },
  flag: "https://flagcdn.com/by.svg",
  regionalBlocs: [{
    acronym: "EEU",
    name: "Eurasian Economic Union",
    otherAcronyms: ["EAEU"]
  }],
  cioc: "BLR",
  independent: true
}, {
  name: "Belgium",
  topLevelDomain: [".be"],
  alpha2Code: "BE",
  alpha3Code: "BEL",
  callingCodes: ["32"],
  capital: "Brussels",
  altSpellings: ["BE", "België", "Belgie", "Belgien", "Belgique", "Kingdom of Belgium", "Koninkrijk België", "Royaume de Belgique", "Königreich Belgien"],
  subregion: "Western Europe",
  region: "Europe",
  population: 11555997,
  latlng: [50.83333333, 4],
  demonym: "Belgian",
  area: 30528,
  gini: 27.2,
  timezones: ["UTC+01:00"],
  borders: ["FRA", "DEU", "LUX", "NLD"],
  nativeName: "België",
  numericCode: "056",
  flags: {
    svg: "https://flagcdn.com/be.svg",
    png: "https://flagcdn.com/w320/be.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "nl",
    iso639_2: "nld",
    name: "Dutch",
    nativeName: "Nederlands"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "de",
    iso639_2: "deu",
    name: "German",
    nativeName: "Deutsch"
  }],
  translations: {
    br: "Belgia",
    pt: "Bélgica",
    nl: "België",
    hr: "Belgija",
    fa: "بلژیک",
    de: "Belgien",
    es: "Bélgica",
    fr: "Belgique",
    ja: "ベルギー",
    it: "Belgio",
    hu: "Belgium"
  },
  flag: "https://flagcdn.com/be.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "BEL",
  independent: true
}, {
  name: "Belize",
  topLevelDomain: [".bz"],
  alpha2Code: "BZ",
  alpha3Code: "BLZ",
  callingCodes: ["501"],
  capital: "Belmopan",
  altSpellings: ["BZ"],
  subregion: "Central America",
  region: "Americas",
  population: 397621,
  latlng: [17.25, -88.75],
  demonym: "Belizean",
  area: 22966,
  gini: 53.3,
  timezones: ["UTC-06:00"],
  borders: ["GTM", "MEX"],
  nativeName: "Belize",
  numericCode: "084",
  flags: {
    svg: "https://flagcdn.com/bz.svg",
    png: "https://flagcdn.com/w320/bz.png"
  },
  currencies: [{
    code: "BZD",
    name: "Belize dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Belize",
    pt: "Belize",
    nl: "Belize",
    hr: "Belize",
    fa: "بلیز",
    de: "Belize",
    es: "Belice",
    fr: "Belize",
    ja: "ベリーズ",
    it: "Belize",
    hu: "Belize"
  },
  flag: "https://flagcdn.com/bz.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }, {
    acronym: "CAIS",
    name: "Central American Integration System",
    otherAcronyms: ["SICA"],
    otherNames: ["Sistema de la Integración Centroamericana,"]
  }],
  cioc: "BIZ",
  independent: true
}, {
  name: "Benin",
  topLevelDomain: [".bj"],
  alpha2Code: "BJ",
  alpha3Code: "BEN",
  callingCodes: ["229"],
  capital: "Porto-Novo",
  altSpellings: ["BJ", "Republic of Benin", "République du Bénin"],
  subregion: "Western Africa",
  region: "Africa",
  population: 12123198,
  latlng: [9.5, 2.25],
  demonym: "Beninese",
  area: 112622,
  gini: 47.8,
  timezones: ["UTC+01:00"],
  borders: ["BFA", "NER", "NGA", "TGO"],
  nativeName: "Bénin",
  numericCode: "204",
  flags: {
    svg: "https://flagcdn.com/bj.svg",
    png: "https://flagcdn.com/w320/bj.png"
  },
  currencies: [{
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Benin",
    pt: "Benim",
    nl: "Benin",
    hr: "Benin",
    fa: "بنین",
    de: "Benin",
    es: "Benín",
    fr: "Bénin",
    ja: "ベナン",
    it: "Benin",
    hu: "Benin"
  },
  flag: "https://flagcdn.com/bj.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "BEN",
  independent: true
}, {
  name: "Bermuda",
  topLevelDomain: [".bm"],
  alpha2Code: "BM",
  alpha3Code: "BMU",
  callingCodes: ["1"],
  capital: "Hamilton",
  altSpellings: ["BM", "The Islands of Bermuda", "The Bermudas", "Somers Isles"],
  subregion: "Northern America",
  region: "Americas",
  population: 63903,
  latlng: [32.33333333, -64.75],
  demonym: "Bermudian",
  area: 54,
  timezones: ["UTC-04:00"],
  nativeName: "Bermuda",
  numericCode: "060",
  flags: {
    svg: "https://flagcdn.com/bm.svg",
    png: "https://flagcdn.com/w320/bm.png"
  },
  currencies: [{
    code: "BMD",
    name: "Bermudian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Bermuda",
    pt: "Bermudas",
    nl: "Bermuda",
    hr: "Bermudi",
    fa: "برمودا",
    de: "Bermuda",
    es: "Bermudas",
    fr: "Bermudes",
    ja: "バミューダ",
    it: "Bermuda",
    hu: "Bermuda"
  },
  flag: "https://flagcdn.com/bm.svg",
  cioc: "BER",
  independent: false
}, {
  name: "Bhutan",
  topLevelDomain: [".bt"],
  alpha2Code: "BT",
  alpha3Code: "BTN",
  callingCodes: ["975"],
  capital: "Thimphu",
  altSpellings: ["BT", "Kingdom of Bhutan"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 771612,
  latlng: [27.5, 90.5],
  demonym: "Bhutanese",
  area: 38394,
  gini: 37.4,
  timezones: ["UTC+06:00"],
  borders: ["CHN", "IND"],
  nativeName: "ʼbrug-yul",
  numericCode: "064",
  flags: {
    svg: "https://flagcdn.com/bt.svg",
    png: "https://flagcdn.com/w320/bt.png"
  },
  currencies: [{
    code: "BTN",
    name: "Bhutanese ngultrum",
    symbol: "Nu."
  }, {
    code: "INR",
    name: "Indian rupee",
    symbol: "₹"
  }],
  languages: [{
    iso639_1: "dz",
    iso639_2: "dzo",
    name: "Dzongkha",
    nativeName: "རྫོང་ཁ"
  }],
  translations: {
    br: "Bhoutan",
    pt: "Butão",
    nl: "Bhutan",
    hr: "Butan",
    fa: "بوتان",
    de: "Bhutan",
    es: "Bután",
    fr: "Bhoutan",
    ja: "ブータン",
    it: "Bhutan",
    hu: "Bhután"
  },
  flag: "https://flagcdn.com/bt.svg",
  regionalBlocs: [{
    acronym: "SAARC",
    name: "South Asian Association for Regional Cooperation"
  }],
  cioc: "BHU",
  independent: true
}, {
  name: "Bolivia (Plurinational State of)",
  topLevelDomain: [".bo"],
  alpha2Code: "BO",
  alpha3Code: "BOL",
  callingCodes: ["591"],
  capital: "Sucre",
  altSpellings: ["BO", "Buliwya", "Wuliwya", "Plurinational State of Bolivia", "Estado Plurinacional de Bolivia", "Buliwya Mamallaqta", "Wuliwya Suyu", "Tetã Volívia"],
  subregion: "South America",
  region: "Americas",
  population: 11673029,
  latlng: [-17, -65],
  demonym: "Bolivian",
  area: 1098581,
  gini: 41.6,
  timezones: ["UTC-04:00"],
  borders: ["ARG", "BRA", "CHL", "PRY", "PER"],
  nativeName: "Bolivia",
  numericCode: "068",
  flags: {
    svg: "https://flagcdn.com/bo.svg",
    png: "https://flagcdn.com/w320/bo.png"
  },
  currencies: [{
    code: "BOB",
    name: "Bolivian boliviano",
    symbol: "Bs."
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }, {
    iso639_1: "ay",
    iso639_2: "aym",
    name: "Aymara",
    nativeName: "aymar aru"
  }, {
    iso639_1: "qu",
    iso639_2: "que",
    name: "Quechua",
    nativeName: "Runa Simi"
  }],
  translations: {
    br: "Bolivia",
    pt: "Bolívia",
    nl: "Bolivia",
    hr: "Bolivija",
    fa: "بولیوی",
    de: "Bolivien",
    es: "Bolivia",
    fr: "Bolivie",
    ja: "ボリビア多民族国",
    it: "Bolivia",
    hu: "Bolívia"
  },
  flag: "https://flagcdn.com/bo.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "BOL",
  independent: true
}, {
  name: "Bonaire, Sint Eustatius and Saba",
  topLevelDomain: [".an", ".nl"],
  alpha2Code: "BQ",
  alpha3Code: "BES",
  callingCodes: ["599"],
  capital: "Kralendijk",
  altSpellings: ["BQ", "Boneiru"],
  subregion: "Caribbean",
  region: "Americas",
  population: 17408,
  latlng: [12.15, -68.266667],
  demonym: "Dutch",
  area: 294,
  timezones: ["UTC-04:00"],
  nativeName: "Bonaire",
  numericCode: "535",
  flags: {
    svg: "https://flagcdn.com/bq.svg",
    png: "https://flagcdn.com/w320/bq.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "nl",
    iso639_2: "nld",
    name: "Dutch",
    nativeName: "Nederlands"
  }],
  translations: {
    br: "Bonaire, Sint Eustatius ha Saba",
    pt: "Bonaire",
    nl: "Caribisch Nederland",
    hr: "Bonaire, Sint Eustatius and Saba",
    fa: "بونیر",
    de: "Bonaire, Sint Eustatius und Saba",
    es: "Bonaire, Sint Eustatius and Saba",
    fr: "Bonaire, Saint-Eustache et Saba",
    ja: "Bonaire, Sint Eustatius and Saba",
    it: "Bonaire, Saint-Eustache e Saba",
    hu: "Bonaire"
  },
  flag: "https://flagcdn.com/bq.svg",
  independent: true
}, {
  name: "Bosnia and Herzegovina",
  topLevelDomain: [".ba"],
  alpha2Code: "BA",
  alpha3Code: "BIH",
  callingCodes: ["387"],
  capital: "Sarajevo",
  altSpellings: ["BA", "Bosnia-Herzegovina", "Босна и Херцеговина"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 3280815,
  latlng: [44, 18],
  demonym: "Bosnian, Herzegovinian",
  area: 51209,
  gini: 33,
  timezones: ["UTC+01:00"],
  borders: ["HRV", "MNE", "SRB"],
  nativeName: "Bosna i Hercegovina",
  numericCode: "070",
  flags: {
    svg: "https://flagcdn.com/ba.svg",
    png: "https://flagcdn.com/w320/ba.png"
  },
  currencies: [{
    code: "BAM",
    name: "Bosnia and Herzegovina convertible mark",
    symbol: "KM"
  }],
  languages: [{
    iso639_1: "bs",
    iso639_2: "bos",
    name: "Bosnian",
    nativeName: "bosanski jezik"
  }, {
    iso639_1: "hr",
    iso639_2: "hrv",
    name: "Croatian",
    nativeName: "hrvatski jezik"
  }, {
    iso639_1: "sr",
    iso639_2: "srp",
    name: "Serbian",
    nativeName: "српски језик"
  }],
  translations: {
    br: "Bosnia-ha-Herzegovina",
    pt: "Bósnia e Herzegovina",
    nl: "Bosnië en Herzegovina",
    hr: "Bosna i Hercegovina",
    fa: "بوسنی و هرزگوین",
    de: "Bosnien und Herzegowina",
    es: "Bosnia y Herzegovina",
    fr: "Bosnie-Herzégovine",
    ja: "ボスニア・ヘルツェゴビナ",
    it: "Bosnia ed Erzegovina",
    hu: "Bosznia-Hercegovina"
  },
  flag: "https://flagcdn.com/ba.svg",
  regionalBlocs: [{
    acronym: "CEFTA",
    name: "Central European Free Trade Agreement"
  }],
  cioc: "BIH",
  independent: true
}, {
  name: "Botswana",
  topLevelDomain: [".bw"],
  alpha2Code: "BW",
  alpha3Code: "BWA",
  callingCodes: ["267"],
  capital: "Gaborone",
  altSpellings: ["BW", "Republic of Botswana", "Lefatshe la Botswana"],
  subregion: "Southern Africa",
  region: "Africa",
  population: 2351625,
  latlng: [-22, 24],
  demonym: "Motswana",
  area: 582000,
  gini: 53.3,
  timezones: ["UTC+02:00"],
  borders: ["NAM", "ZAF", "ZMB", "ZWE"],
  nativeName: "Botswana",
  numericCode: "072",
  flags: {
    svg: "https://flagcdn.com/bw.svg",
    png: "https://flagcdn.com/w320/bw.png"
  },
  currencies: [{
    code: "BWP",
    name: "Botswana pula",
    symbol: "P"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "tn",
    iso639_2: "tsn",
    name: "Tswana",
    nativeName: "Setswana"
  }],
  translations: {
    br: "Botswana",
    pt: "Botsuana",
    nl: "Botswana",
    hr: "Bocvana",
    fa: "بوتسوانا",
    de: "Botswana",
    es: "Botswana",
    fr: "Botswana",
    ja: "ボツワナ",
    it: "Botswana",
    hu: "Botswana"
  },
  flag: "https://flagcdn.com/bw.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "BOT",
  independent: true
}, {
  name: "Bouvet Island",
  topLevelDomain: [".bv"],
  alpha2Code: "BV",
  alpha3Code: "BVT",
  callingCodes: ["47"],
  altSpellings: ["BV", "Bouvetøya", "Bouvet-øya"],
  subregion: "South Antarctic Ocean",
  region: "Antarctic Ocean",
  population: 0,
  latlng: [-54.43333333, 3.4],
  demonym: "Norwegian",
  area: 49,
  timezones: ["UTC+01:00"],
  nativeName: "Bouvetøya",
  numericCode: "074",
  flags: {
    svg: "https://flagcdn.com/bv.svg",
    png: "https://flagcdn.com/w320/bv.png"
  },
  currencies: [{
    code: "NOK",
    name: "Norwegian krone",
    symbol: "kr"
  }],
  languages: [{
    iso639_1: "no",
    iso639_2: "nor",
    name: "Norwegian",
    nativeName: "Norsk"
  }, {
    iso639_1: "nb",
    iso639_2: "nob",
    name: "Norwegian Bokmål",
    nativeName: "Norsk bokmål"
  }, {
    iso639_1: "nn",
    iso639_2: "nno",
    name: "Norwegian Nynorsk",
    nativeName: "Norsk nynorsk"
  }],
  translations: {
    br: "Enez Bouvet",
    pt: "Ilha Bouvet",
    nl: "Bouveteiland",
    hr: "Otok Bouvet",
    fa: "جزیره بووه",
    de: "Bouvetinsel",
    es: "Isla Bouvet",
    fr: "Île Bouvet",
    ja: "ブーベ島",
    it: "Isola Bouvet",
    hu: "Bouvet-sziget"
  },
  flag: "https://flagcdn.com/bv.svg",
  independent: false
}, {
  name: "Brazil",
  topLevelDomain: [".br"],
  alpha2Code: "BR",
  alpha3Code: "BRA",
  callingCodes: ["55"],
  capital: "Brasília",
  altSpellings: ["BR", "Brasil", "Federative Republic of Brazil", "República Federativa do Brasil"],
  subregion: "South America",
  region: "Americas",
  population: 212559409,
  latlng: [-10, -55],
  demonym: "Brazilian",
  area: 8515767,
  gini: 53.4,
  timezones: ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
  borders: ["ARG", "BOL", "COL", "FRA", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
  nativeName: "Brasil",
  numericCode: "076",
  flags: {
    svg: "https://flagcdn.com/br.svg",
    png: "https://flagcdn.com/w320/br.png"
  },
  currencies: [{
    code: "BRL",
    name: "Brazilian real",
    symbol: "R$"
  }],
  languages: [{
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }],
  translations: {
    br: "Brazil",
    pt: "Brasil",
    nl: "Brazilië",
    hr: "Brazil",
    fa: "برزیل",
    de: "Brasilien",
    es: "Brasil",
    fr: "Brésil",
    ja: "ブラジル",
    it: "Brasile",
    hu: "Brazília"
  },
  flag: "https://flagcdn.com/br.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "BRA",
  independent: true
}, {
  name: "British Indian Ocean Territory",
  topLevelDomain: [".io"],
  alpha2Code: "IO",
  alpha3Code: "IOT",
  callingCodes: ["246"],
  capital: "Diego Garcia",
  altSpellings: ["IO"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 3000,
  latlng: [-6, 71.5],
  demonym: "Indian",
  area: 60,
  timezones: ["UTC+06:00"],
  nativeName: "British Indian Ocean Territory",
  numericCode: "086",
  flags: {
    svg: "https://flagcdn.com/io.svg",
    png: "https://flagcdn.com/w320/io.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Tiriad breizhveurat Meurvor Indez",
    pt: "Território Britânico do Oceano Índico",
    nl: "Britse Gebieden in de Indische Oceaan",
    hr: "Britanski Indijskooceanski teritorij",
    fa: "قلمرو بریتانیا در اقیانوس هند",
    de: "Britisches Territorium im Indischen Ozean",
    es: "Territorio Británico del Océano Índico",
    fr: "Territoire britannique de l'océan Indien",
    ja: "イギリス領インド洋地域",
    it: "Territorio britannico dell'oceano indiano",
    hu: "Brit Indiai-óceáni Terület"
  },
  flag: "https://flagcdn.com/io.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  independent: true
}, {
  name: "United States Minor Outlying Islands",
  topLevelDomain: [".us"],
  alpha2Code: "UM",
  alpha3Code: "UMI",
  callingCodes: ["246"],
  altSpellings: ["UM"],
  subregion: "Northern America",
  region: "Americas",
  population: 300,
  demonym: "American",
  timezones: ["UTC-11:00", "UTC-10:00", "UTC+12:00"],
  nativeName: "United States Minor Outlying Islands",
  numericCode: "581",
  flags: {
    svg: "https://flagcdn.com/um.svg",
    png: "https://flagcdn.com/w320/um.png"
  },
  currencies: [{
    code: "GBP",
    name: "British pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Minor A-bell Stadoù-Unanet",
    pt: "Ilhas Menores Distantes dos Estados Unidos",
    nl: "Kleine afgelegen eilanden van de Verenigde Staten",
    hr: "Mali udaljeni otoci SAD-a",
    fa: "جزایر کوچک حاشیه‌ای ایالات متحده آمریکا",
    de: "Kleinere Inselbesitzungen der Vereinigten Staaten",
    es: "Islas Ultramarinas Menores de Estados Unidos",
    fr: "Îles mineures éloignées des États-Unis",
    ja: "合衆国領有小離島",
    it: "Isole minori esterne degli Stati Uniti d'America",
    hu: "Amerikai Egyesült Államok lakatlan külbirtokai"
  },
  flag: "https://flagcdn.com/um.svg",
  independent: false
}, {
  name: "Virgin Islands (British)",
  topLevelDomain: [".vg"],
  alpha2Code: "VG",
  alpha3Code: "VGB",
  callingCodes: ["1"],
  capital: "Road Town",
  altSpellings: ["VG"],
  subregion: "Caribbean",
  region: "Americas",
  population: 30237,
  latlng: [18.431383, -64.62305],
  demonym: "Virgin Islander",
  area: 151,
  timezones: ["UTC-04:00"],
  nativeName: "British Virgin Islands",
  numericCode: "092",
  flags: {
    svg: "https://flagcdn.com/vg.svg",
    png: "https://flagcdn.com/w320/vg.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Gwerc'h Breizhveurat",
    pt: "Ilhas Virgens Britânicas",
    nl: "Britse Maagdeneilanden",
    hr: "Britanski Djevičanski Otoci",
    fa: "جزایر ویرجین بریتانیا",
    de: "Britische Jungferninseln",
    es: "Islas Vírgenes del Reino Unido",
    fr: "Îles Vierges britanniques",
    ja: "イギリス領ヴァージン諸島",
    it: "Isole Vergini Britanniche",
    hu: "Brit Virgin-szigetek"
  },
  flag: "https://flagcdn.com/vg.svg",
  cioc: "IVB",
  independent: false
}, {
  name: "Virgin Islands (U.S.)",
  topLevelDomain: [".vi"],
  alpha2Code: "VI",
  alpha3Code: "VIR",
  callingCodes: ["1 340"],
  capital: "Charlotte Amalie",
  altSpellings: ["VI", "USVI", "American Virgin Islands", "U.S. Virgin Islands"],
  subregion: "Caribbean",
  region: "Americas",
  population: 106290,
  latlng: [18.34, -64.93],
  demonym: "Virgin Islander",
  area: 346.36,
  timezones: ["UTC-04:00"],
  nativeName: "Virgin Islands of the United States",
  numericCode: "850",
  flags: {
    svg: "https://flagcdn.com/vi.svg",
    png: "https://flagcdn.com/w320/vi.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Gwerc'h ar Stadoù-Unanet",
    pt: "Ilhas Virgens Americanas",
    nl: "Verenigde Staten Maagdeneilanden",
    hr: "Virgin Islands (U.S.)",
    fa: "جزایر ویرجین آمریکا",
    de: "Amerikanische Jungferninseln",
    es: "Islas Vírgenes de los Estados Unidos",
    fr: "Îles Vierges des États-Unis",
    ja: "アメリカ領ヴァージン諸島",
    it: "Isole Vergini americane",
    hu: "Amerikai Virgin-szigetek"
  },
  flag: "https://flagcdn.com/vi.svg",
  cioc: "ISV",
  independent: false
}, {
  name: "Brunei Darussalam",
  topLevelDomain: [".bn"],
  alpha2Code: "BN",
  alpha3Code: "BRN",
  callingCodes: ["673"],
  capital: "Bandar Seri Begawan",
  altSpellings: ["BN", "Nation of Brunei", " the Abode of Peace"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 437483,
  latlng: [4.5, 114.66666666],
  demonym: "Bruneian",
  area: 5765,
  timezones: ["UTC+08:00"],
  borders: ["MYS"],
  nativeName: "Negara Brunei Darussalam",
  numericCode: "096",
  flags: {
    svg: "https://flagcdn.com/bn.svg",
    png: "https://flagcdn.com/w320/bn.png"
  },
  currencies: [{
    code: "BND",
    name: "Brunei dollar",
    symbol: "$"
  }, {
    code: "SGD",
    name: "Singapore dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "ms",
    iso639_2: "msa",
    name: "Malay",
    nativeName: "bahasa Melayu"
  }],
  translations: {
    br: "Brunei",
    pt: "Brunei",
    nl: "Brunei",
    hr: "Brunej",
    fa: "برونئی",
    de: "Brunei",
    es: "Brunei",
    fr: "Brunei",
    ja: "ブルネイ・ダルサラーム",
    it: "Brunei",
    hu: "Brunei"
  },
  flag: "https://flagcdn.com/bn.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "BRU",
  independent: true
}, {
  name: "Bulgaria",
  topLevelDomain: [".bg"],
  alpha2Code: "BG",
  alpha3Code: "BGR",
  callingCodes: ["359"],
  capital: "Sofia",
  altSpellings: ["BG", "Republic of Bulgaria", "Република България"],
  subregion: "Eastern Europe",
  region: "Europe",
  population: 6927288,
  latlng: [43, 25],
  demonym: "Bulgarian",
  area: 110879,
  gini: 41.3,
  timezones: ["UTC+02:00"],
  borders: ["GRC", "MKD", "ROU", "SRB", "TUR"],
  nativeName: "България",
  numericCode: "100",
  flags: {
    svg: "https://flagcdn.com/bg.svg",
    png: "https://flagcdn.com/w320/bg.png"
  },
  currencies: [{
    code: "BGN",
    name: "Bulgarian lev",
    symbol: "лв"
  }],
  languages: [{
    iso639_1: "bg",
    iso639_2: "bul",
    name: "Bulgarian",
    nativeName: "български език"
  }],
  translations: {
    br: "Bulgaria",
    pt: "Bulgária",
    nl: "Bulgarije",
    hr: "Bugarska",
    fa: "بلغارستان",
    de: "Bulgarien",
    es: "Bulgaria",
    fr: "Bulgarie",
    ja: "ブルガリア",
    it: "Bulgaria",
    hu: "Bulgária"
  },
  flag: "https://flagcdn.com/bg.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "BUL",
  independent: true
}, {
  name: "Burkina Faso",
  topLevelDomain: [".bf"],
  alpha2Code: "BF",
  alpha3Code: "BFA",
  callingCodes: ["226"],
  capital: "Ouagadougou",
  altSpellings: ["BF"],
  subregion: "Western Africa",
  region: "Africa",
  population: 20903278,
  latlng: [13, -2],
  demonym: "Burkinabe",
  area: 272967,
  gini: 35.3,
  timezones: ["UTC"],
  borders: ["BEN", "CIV", "GHA", "MLI", "NER", "TGO"],
  nativeName: "Burkina Faso",
  numericCode: "854",
  flags: {
    svg: "https://flagcdn.com/bf.svg",
    png: "https://flagcdn.com/w320/bf.png"
  },
  currencies: [{
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "ff",
    iso639_2: "ful",
    name: "Fula",
    nativeName: "Fulfulde"
  }],
  translations: {
    br: "Burkina Faso",
    pt: "Burquina Faso",
    nl: "Burkina Faso",
    hr: "Burkina Faso",
    fa: "بورکینافاسو",
    de: "Burkina Faso",
    es: "Burkina Faso",
    fr: "Burkina Faso",
    ja: "ブルキナファソ",
    it: "Burkina Faso",
    hu: "Burkina Faso"
  },
  flag: "https://flagcdn.com/bf.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "BUR",
  independent: true
}, {
  name: "Burundi",
  topLevelDomain: [".bi"],
  alpha2Code: "BI",
  alpha3Code: "BDI",
  callingCodes: ["257"],
  capital: "Gitega",
  altSpellings: ["BI", "Republic of Burundi", "Republika y'Uburundi", "République du Burundi"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 11890781,
  latlng: [-3.5, 30],
  demonym: "Burundian",
  area: 27834,
  gini: 38.6,
  timezones: ["UTC+02:00"],
  borders: ["COD", "RWA", "TZA"],
  nativeName: "Burundi",
  numericCode: "108",
  flags: {
    svg: "https://flagcdn.com/bi.svg",
    png: "https://flagcdn.com/w320/bi.png"
  },
  currencies: [{
    code: "BIF",
    name: "Burundian franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "rn",
    iso639_2: "run",
    name: "Kirundi",
    nativeName: "Ikirundi"
  }],
  translations: {
    br: "Burundi",
    pt: "Burúndi",
    nl: "Burundi",
    hr: "Burundi",
    fa: "بوروندی",
    de: "Burundi",
    es: "Burundi",
    fr: "Burundi",
    ja: "ブルンジ",
    it: "Burundi",
    hu: "Burundi"
  },
  flag: "https://flagcdn.com/bi.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "BDI",
  independent: true
}, {
  name: "Cambodia",
  topLevelDomain: [".kh"],
  alpha2Code: "KH",
  alpha3Code: "KHM",
  callingCodes: ["855"],
  capital: "Phnom Penh",
  altSpellings: ["KH", "Kingdom of Cambodia"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 16718971,
  latlng: [13, 105],
  demonym: "Cambodian",
  area: 181035,
  timezones: ["UTC+07:00"],
  borders: ["LAO", "THA", "VNM"],
  nativeName: "Kâmpŭchéa",
  numericCode: "116",
  flags: {
    svg: "https://flagcdn.com/kh.svg",
    png: "https://flagcdn.com/w320/kh.png"
  },
  currencies: [{
    code: "KHR",
    name: "Cambodian riel",
    symbol: "៛"
  }, {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "km",
    iso639_2: "khm",
    name: "Khmer",
    nativeName: "ខ្មែរ"
  }],
  translations: {
    br: "Kambodja",
    pt: "Camboja",
    nl: "Cambodja",
    hr: "Kambodža",
    fa: "کامبوج",
    de: "Kambodscha",
    es: "Camboya",
    fr: "Cambodge",
    ja: "カンボジア",
    it: "Cambogia",
    hu: "Kambodzsa"
  },
  flag: "https://flagcdn.com/kh.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "CAM",
  independent: true
}, {
  name: "Cameroon",
  topLevelDomain: [".cm"],
  alpha2Code: "CM",
  alpha3Code: "CMR",
  callingCodes: ["237"],
  capital: "Yaoundé",
  altSpellings: ["CM", "Republic of Cameroon", "République du Cameroun"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 26545864,
  latlng: [6, 12],
  demonym: "Cameroonian",
  area: 475442,
  gini: 46.6,
  timezones: ["UTC+01:00"],
  borders: ["CAF", "TCD", "COG", "GNQ", "GAB", "NGA"],
  nativeName: "Cameroon",
  numericCode: "120",
  flags: {
    svg: "https://flagcdn.com/cm.svg",
    png: "https://flagcdn.com/w320/cm.png"
  },
  currencies: [{
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Kameroun",
    pt: "Camarões",
    nl: "Kameroen",
    hr: "Kamerun",
    fa: "کامرون",
    de: "Kamerun",
    es: "Camerún",
    fr: "Cameroun",
    ja: "カメルーン",
    it: "Camerun",
    hu: "Kamerun"
  },
  flag: "https://flagcdn.com/cm.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "CMR",
  independent: true
}, {
  name: "Canada",
  topLevelDomain: [".ca"],
  alpha2Code: "CA",
  alpha3Code: "CAN",
  callingCodes: ["1"],
  capital: "Ottawa",
  altSpellings: ["CA"],
  subregion: "Northern America",
  region: "Americas",
  population: 38005238,
  latlng: [60, -95],
  demonym: "Canadian",
  area: 9984670,
  gini: 33.3,
  timezones: ["UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC-03:30"],
  borders: ["USA"],
  nativeName: "Canada",
  numericCode: "124",
  flags: {
    svg: "https://flagcdn.com/ca.svg",
    png: "https://flagcdn.com/w320/ca.png"
  },
  currencies: [{
    code: "CAD",
    name: "Canadian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Kanada",
    pt: "Canadá",
    nl: "Canada",
    hr: "Kanada",
    fa: "کانادا",
    de: "Kanada",
    es: "Canadá",
    fr: "Canada",
    ja: "カナダ",
    it: "Canada",
    hu: "Kanada"
  },
  flag: "https://flagcdn.com/ca.svg",
  regionalBlocs: [{
    acronym: "NAFTA",
    name: "North American Free Trade Agreement",
    otherNames: ["Tratado de Libre Comercio de América del Norte", "Accord de Libre-échange Nord-Américain"]
  }],
  cioc: "CAN",
  independent: true
}, {
  name: "Cabo Verde",
  topLevelDomain: [".cv"],
  alpha2Code: "CV",
  alpha3Code: "CPV",
  callingCodes: ["238"],
  capital: "Praia",
  altSpellings: ["CV", "Republic of Cabo Verde", "República de Cabo Verde"],
  subregion: "Western Africa",
  region: "Africa",
  population: 555988,
  latlng: [16, -24],
  demonym: "Cape Verdian",
  area: 4033,
  gini: 42.4,
  timezones: ["UTC-01:00"],
  nativeName: "Cabo Verde",
  numericCode: "132",
  flags: {
    svg: "https://flagcdn.com/cv.svg",
    png: "https://flagcdn.com/w320/cv.png"
  },
  currencies: [{
    code: "CVE",
    name: "Cape Verdean escudo",
    symbol: "Esc"
  }],
  languages: [{
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }],
  translations: {
    br: "Kab Glas",
    pt: "Cabo Verde",
    nl: "Kaapverdië",
    hr: "Zelenortska Republika",
    fa: "کیپ ورد",
    de: "Kap Verde",
    es: "Cabo Verde",
    fr: "Cap Vert",
    ja: "カーボベルデ",
    it: "Capo Verde",
    hu: "Zöld-foki Köztársaság"
  },
  flag: "https://flagcdn.com/cv.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "CPV",
  independent: true
}, {
  name: "Cayman Islands",
  topLevelDomain: [".ky"],
  alpha2Code: "KY",
  alpha3Code: "CYM",
  callingCodes: ["1"],
  capital: "George Town",
  altSpellings: ["KY"],
  subregion: "Caribbean",
  region: "Americas",
  population: 65720,
  latlng: [19.5, -80.5],
  demonym: "Caymanian",
  area: 264,
  timezones: ["UTC-05:00"],
  nativeName: "Cayman Islands",
  numericCode: "136",
  flags: {
    svg: "https://flagcdn.com/ky.svg",
    png: "https://flagcdn.com/w320/ky.png"
  },
  currencies: [{
    code: "KYD",
    name: "Cayman Islands dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Cayman",
    pt: "Ilhas Caimão",
    nl: "Caymaneilanden",
    hr: "Kajmanski otoci",
    fa: "جزایر کیمن",
    de: "Kaimaninseln",
    es: "Islas Caimán",
    fr: "Îles Caïmans",
    ja: "ケイマン諸島",
    it: "Isole Cayman",
    hu: "Kajmán-szigetek"
  },
  flag: "https://flagcdn.com/ky.svg",
  cioc: "CAY",
  independent: false
}, {
  name: "Central African Republic",
  topLevelDomain: [".cf"],
  alpha2Code: "CF",
  alpha3Code: "CAF",
  callingCodes: ["236"],
  capital: "Bangui",
  altSpellings: ["CF", "Central African Republic", "République centrafricaine"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 4829764,
  latlng: [7, 21],
  demonym: "Central African",
  area: 622984,
  gini: 56.2,
  timezones: ["UTC+01:00"],
  borders: ["CMR", "TCD", "COD", "COG", "SSD", "SDN"],
  nativeName: "Ködörösêse tî Bêafrîka",
  numericCode: "140",
  flags: {
    svg: "https://flagcdn.com/cf.svg",
    png: "https://flagcdn.com/w320/cf.png"
  },
  currencies: [{
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "sg",
    iso639_2: "sag",
    name: "Sango",
    nativeName: "yângâ tî sängö"
  }],
  translations: {
    br: "Republik Kreizafrikan",
    pt: "República Centro-Africana",
    nl: "Centraal-Afrikaanse Republiek",
    hr: "Srednjoafrička Republika",
    fa: "جمهوری آفریقای مرکزی",
    de: "Zentralafrikanische Republik",
    es: "República Centroafricana",
    fr: "République centrafricaine",
    ja: "中央アフリカ共和国",
    it: "Repubblica Centrafricana",
    hu: "Közép-afrikai Köztársaság"
  },
  flag: "https://flagcdn.com/cf.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "CAF",
  independent: true
}, {
  name: "Chad",
  topLevelDomain: [".td"],
  alpha2Code: "TD",
  alpha3Code: "TCD",
  callingCodes: ["235"],
  capital: "N'Djamena",
  altSpellings: ["TD", "Tchad", "Republic of Chad", "République du Tchad"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 16425859,
  latlng: [15, 19],
  demonym: "Chadian",
  area: 1284000,
  gini: 43.3,
  timezones: ["UTC+01:00"],
  borders: ["CMR", "CAF", "LBY", "NER", "NGA", "SDN"],
  nativeName: "Tchad",
  numericCode: "148",
  flags: {
    svg: "https://flagcdn.com/td.svg",
    png: "https://flagcdn.com/w320/td.png"
  },
  currencies: [{
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Tchad",
    pt: "Chade",
    nl: "Tsjaad",
    hr: "Čad",
    fa: "چاد",
    de: "Tschad",
    es: "Chad",
    fr: "Tchad",
    ja: "チャド",
    it: "Ciad",
    hu: "Csád"
  },
  flag: "https://flagcdn.com/td.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "CHA",
  independent: true
}, {
  name: "Chile",
  topLevelDomain: [".cl"],
  alpha2Code: "CL",
  alpha3Code: "CHL",
  callingCodes: ["56"],
  capital: "Santiago",
  altSpellings: ["CL", "Republic of Chile", "República de Chile"],
  subregion: "South America",
  region: "Americas",
  population: 19116209,
  latlng: [-30, -71],
  demonym: "Chilean",
  area: 756102,
  gini: 44.4,
  timezones: ["UTC-06:00", "UTC-04:00"],
  borders: ["ARG", "BOL", "PER"],
  nativeName: "Chile",
  numericCode: "152",
  flags: {
    svg: "https://flagcdn.com/cl.svg",
    png: "https://flagcdn.com/w320/cl.png"
  },
  currencies: [{
    code: "CLP",
    name: "Chilean peso",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Chile",
    pt: "Chile",
    nl: "Chili",
    hr: "Čile",
    fa: "شیلی",
    de: "Chile",
    es: "Chile",
    fr: "Chili",
    ja: "チリ",
    it: "Cile",
    hu: "Chile"
  },
  flag: "https://flagcdn.com/cl.svg",
  regionalBlocs: [{
    acronym: "PA",
    name: "Pacific Alliance",
    otherNames: ["Alianza del Pacífico"]
  }, {
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "CHI",
  independent: true
}, {
  name: "China",
  topLevelDomain: [".cn"],
  alpha2Code: "CN",
  alpha3Code: "CHN",
  callingCodes: ["86"],
  capital: "Beijing",
  altSpellings: ["CN", "Zhōngguó", "Zhongguo", "Zhonghua", "People's Republic of China", "中华人民共和国", "Zhōnghuá Rénmín Gònghéguó"],
  subregion: "Eastern Asia",
  region: "Asia",
  population: 1402112000,
  latlng: [35, 105],
  demonym: "Chinese",
  area: 9640011,
  gini: 38.5,
  timezones: ["UTC+08:00"],
  borders: ["AFG", "BTN", "MMR", "HKG", "IND", "KAZ", "PRK", "KGZ", "LAO", "MAC", "MNG", "PAK", "RUS", "TJK", "VNM", "NPL"],
  nativeName: "中国",
  numericCode: "156",
  flags: {
    svg: "https://flagcdn.com/cn.svg",
    png: "https://flagcdn.com/w320/cn.png"
  },
  currencies: [{
    code: "CNY",
    name: "Chinese yuan",
    symbol: "¥"
  }],
  languages: [{
    iso639_1: "zh",
    iso639_2: "zho",
    name: "Chinese",
    nativeName: "中文 (Zhōngwén)"
  }],
  translations: {
    br: "Sina",
    pt: "China",
    nl: "China",
    hr: "Kina",
    fa: "چین",
    de: "China",
    es: "China",
    fr: "Chine",
    ja: "中国",
    it: "Cina",
    hu: "Kína"
  },
  flag: "https://flagcdn.com/cn.svg",
  cioc: "CHN",
  independent: true
}, {
  name: "Christmas Island",
  topLevelDomain: [".cx"],
  alpha2Code: "CX",
  alpha3Code: "CXR",
  callingCodes: ["61"],
  capital: "Flying Fish Cove",
  altSpellings: ["CX", "Territory of Christmas Island"],
  subregion: "Australia and New Zealand",
  region: "Oceania",
  population: 2072,
  latlng: [-10.5, 105.66666666],
  demonym: "Christmas Island",
  area: 135,
  timezones: ["UTC+07:00"],
  nativeName: "Christmas Island",
  numericCode: "162",
  flags: {
    svg: "https://flagcdn.com/cx.svg",
    png: "https://flagcdn.com/w320/cx.png"
  },
  currencies: [{
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Enez Christmas",
    pt: "Ilha do Natal",
    nl: "Christmaseiland",
    hr: "Božićni otok",
    fa: "جزیره کریسمس",
    de: "Weihnachtsinsel",
    es: "Isla de Navidad",
    fr: "Île Christmas",
    ja: "クリスマス島",
    it: "Isola di Natale",
    hu: "Karácsony-sziget"
  },
  flag: "https://flagcdn.com/cx.svg",
  independent: false
}, {
  name: "Cocos (Keeling) Islands",
  topLevelDomain: [".cc"],
  alpha2Code: "CC",
  alpha3Code: "CCK",
  callingCodes: ["61"],
  capital: "West Island",
  altSpellings: ["CC", "Territory of the Cocos (Keeling) Islands", "Keeling Islands"],
  subregion: "Australia and New Zealand",
  region: "Oceania",
  population: 550,
  latlng: [-12.5, 96.83333333],
  demonym: "Cocos Islander",
  area: 14,
  timezones: ["UTC+06:30"],
  nativeName: "Cocos (Keeling) Islands",
  numericCode: "166",
  flags: {
    svg: "https://flagcdn.com/cc.svg",
    png: "https://flagcdn.com/w320/cc.png"
  },
  currencies: [{
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Cocos (Keeling)",
    pt: "Ilhas dos Cocos",
    nl: "Cocoseilanden",
    hr: "Kokosovi Otoci",
    fa: "جزایر کوکوس",
    de: "Kokosinseln",
    es: "Islas Cocos o Islas Keeling",
    fr: "Îles Cocos",
    ja: "ココス（キーリング）諸島",
    it: "Isole Cocos e Keeling",
    hu: "Kókusz-szigetek"
  },
  flag: "https://flagcdn.com/cc.svg",
  independent: false
}, {
  name: "Colombia",
  topLevelDomain: [".co"],
  alpha2Code: "CO",
  alpha3Code: "COL",
  callingCodes: ["57"],
  capital: "Bogotá",
  altSpellings: ["CO", "Republic of Colombia", "República de Colombia"],
  subregion: "South America",
  region: "Americas",
  population: 50882884,
  latlng: [4, -72],
  demonym: "Colombian",
  area: 1141748,
  gini: 51.3,
  timezones: ["UTC-05:00"],
  borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
  nativeName: "Colombia",
  numericCode: "170",
  flags: {
    svg: "https://flagcdn.com/co.svg",
    png: "https://flagcdn.com/w320/co.png"
  },
  currencies: [{
    code: "COP",
    name: "Colombian peso",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Kolombia",
    pt: "Colômbia",
    nl: "Colombia",
    hr: "Kolumbija",
    fa: "کلمبیا",
    de: "Kolumbien",
    es: "Colombia",
    fr: "Colombie",
    ja: "コロンビア",
    it: "Colombia",
    hu: "Kolumbia"
  },
  flag: "https://flagcdn.com/co.svg",
  regionalBlocs: [{
    acronym: "PA",
    name: "Pacific Alliance",
    otherNames: ["Alianza del Pacífico"]
  }, {
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "COL",
  independent: true
}, {
  name: "Comoros",
  topLevelDomain: [".km"],
  alpha2Code: "KM",
  alpha3Code: "COM",
  callingCodes: ["269"],
  capital: "Moroni",
  altSpellings: ["KM", "Union of the Comoros", "Union des Comores", "Udzima wa Komori", "al-Ittiḥād al-Qumurī"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 869595,
  latlng: [-12.16666666, 44.25],
  demonym: "Comoran",
  area: 1862,
  gini: 45.3,
  timezones: ["UTC+03:00"],
  nativeName: "Komori",
  numericCode: "174",
  flags: {
    svg: "https://flagcdn.com/km.svg",
    png: "https://flagcdn.com/w320/km.png"
  },
  currencies: [{
    code: "KMF",
    name: "Comorian franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Komorez",
    pt: "Comores",
    nl: "Comoren",
    hr: "Komori",
    fa: "کومور",
    de: "Union der Komoren",
    es: "Comoras",
    fr: "Comores",
    ja: "コモロ",
    it: "Comore",
    hu: "Comore-szigetek"
  },
  flag: "https://flagcdn.com/km.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "COM",
  independent: true
}, {
  name: "Congo",
  topLevelDomain: [".cg"],
  alpha2Code: "CG",
  alpha3Code: "COG",
  callingCodes: ["242"],
  capital: "Brazzaville",
  altSpellings: ["CG", "Congo-Brazzaville"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 5518092,
  latlng: [-1, 15],
  demonym: "Congolese",
  area: 342000,
  gini: 48.9,
  timezones: ["UTC+01:00"],
  borders: ["AGO", "CMR", "CAF", "COD", "GAB"],
  nativeName: "République du Congo",
  numericCode: "178",
  flags: {
    svg: "https://flagcdn.com/cg.svg",
    png: "https://flagcdn.com/w320/cg.png"
  },
  currencies: [{
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "ln",
    iso639_2: "lin",
    name: "Lingala",
    nativeName: "Lingála"
  }],
  translations: {
    br: "Kongo-Brazzaville",
    pt: "Congo",
    nl: "Congo [Republiek]",
    hr: "Kongo",
    fa: "کنگو",
    de: "Kongo",
    es: "Congo",
    fr: "Congo",
    ja: "コンゴ共和国",
    it: "Congo",
    hu: "Kongói Köztársaság"
  },
  flag: "https://flagcdn.com/cg.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "CGO",
  independent: true
}, {
  name: "Congo (Democratic Republic of the)",
  topLevelDomain: [".cd"],
  alpha2Code: "CD",
  alpha3Code: "COD",
  callingCodes: ["243"],
  capital: "Kinshasa",
  altSpellings: ["CD", "DR Congo", "Congo-Kinshasa", "DRC"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 89561404,
  latlng: [0, 25],
  demonym: "Congolese",
  area: 2344858,
  gini: 42.1,
  timezones: ["UTC+01:00", "UTC+02:00"],
  borders: ["AGO", "BDI", "CAF", "COG", "RWA", "SSD", "TZA", "UGA", "ZMB"],
  nativeName: "République démocratique du Congo",
  numericCode: "180",
  flags: {
    svg: "https://flagcdn.com/cd.svg",
    png: "https://flagcdn.com/w320/cd.png"
  },
  currencies: [{
    code: "CDF",
    name: "Congolese franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "ln",
    iso639_2: "lin",
    name: "Lingala",
    nativeName: "Lingála"
  }, {
    iso639_1: "kg",
    iso639_2: "kon",
    name: "Kongo",
    nativeName: "Kikongo"
  }, {
    iso639_1: "sw",
    iso639_2: "swa",
    name: "Swahili",
    nativeName: "Kiswahili"
  }, {
    iso639_1: "lu",
    iso639_2: "lub",
    name: "Luba-Katanga",
    nativeName: "Tshiluba"
  }],
  translations: {
    br: "Kongo-Kinshasa",
    pt: "RD Congo",
    nl: "Congo [DRC]",
    hr: "Kongo, Demokratska Republika",
    fa: "جمهوری کنگو",
    de: "Kongo (Dem. Rep.)",
    es: "Congo (Rep. Dem.)",
    fr: "Congo (Rép. dém.)",
    ja: "コンゴ民主共和国",
    it: "Congo (Rep. Dem.)",
    hu: "Kongói Demokratikus Köztársaság"
  },
  flag: "https://flagcdn.com/cd.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "COD",
  independent: true
}, {
  name: "Cook Islands",
  topLevelDomain: [".ck"],
  alpha2Code: "CK",
  alpha3Code: "COK",
  callingCodes: ["682"],
  capital: "Avarua",
  altSpellings: ["CK", "Kūki 'Āirani"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 18100,
  latlng: [-21.23333333, -159.76666666],
  demonym: "Cook Islander",
  area: 236,
  timezones: ["UTC-10:00"],
  nativeName: "Cook Islands",
  numericCode: "184",
  flags: {
    svg: "https://flagcdn.com/ck.svg",
    png: "https://flagcdn.com/w320/ck.png"
  },
  currencies: [{
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$"
  }, {
    code: "CKD",
    name: "Cook Islands dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_2: "rar",
    name: "Cook Islands Māori",
    nativeName: "Māori"
  }],
  translations: {
    br: "Inizi Cook",
    pt: "Ilhas Cook",
    nl: "Cookeilanden",
    hr: "Cookovo Otočje",
    fa: "جزایر کوک",
    de: "Cookinseln",
    es: "Islas Cook",
    fr: "Îles Cook",
    ja: "クック諸島",
    it: "Isole Cook",
    hu: "Cook-szigetek"
  },
  flag: "https://flagcdn.com/ck.svg",
  cioc: "COK",
  independent: true
}, {
  name: "Costa Rica",
  topLevelDomain: [".cr"],
  alpha2Code: "CR",
  alpha3Code: "CRI",
  callingCodes: ["506"],
  capital: "San José",
  altSpellings: ["CR", "Republic of Costa Rica", "República de Costa Rica"],
  subregion: "Central America",
  region: "Americas",
  population: 5094114,
  latlng: [10, -84],
  demonym: "Costa Rican",
  area: 51100,
  gini: 48.2,
  timezones: ["UTC-06:00"],
  borders: ["NIC", "PAN"],
  nativeName: "Costa Rica",
  numericCode: "188",
  flags: {
    svg: "https://flagcdn.com/cr.svg",
    png: "https://flagcdn.com/w320/cr.png"
  },
  currencies: [{
    code: "CRC",
    name: "Costa Rican colón",
    symbol: "₡"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Costa Rica",
    pt: "Costa Rica",
    nl: "Costa Rica",
    hr: "Kostarika",
    fa: "کاستاریکا",
    de: "Costa Rica",
    es: "Costa Rica",
    fr: "Costa Rica",
    ja: "コスタリカ",
    it: "Costa Rica",
    hu: "Costa Rica"
  },
  flag: "https://flagcdn.com/cr.svg",
  regionalBlocs: [{
    acronym: "CAIS",
    name: "Central American Integration System",
    otherAcronyms: ["SICA"],
    otherNames: ["Sistema de la Integración Centroamericana,"]
  }],
  cioc: "CRC",
  independent: true
}, {
  name: "Croatia",
  topLevelDomain: [".hr"],
  alpha2Code: "HR",
  alpha3Code: "HRV",
  callingCodes: ["385"],
  capital: "Zagreb",
  altSpellings: ["HR", "Hrvatska", "Republic of Croatia", "Republika Hrvatska"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 4047200,
  latlng: [45.16666666, 15.5],
  demonym: "Croatian",
  area: 56594,
  gini: 29.7,
  timezones: ["UTC+01:00"],
  borders: ["BIH", "HUN", "MNE", "SRB", "SVN"],
  nativeName: "Hrvatska",
  numericCode: "191",
  flags: {
    svg: "https://flagcdn.com/hr.svg",
    png: "https://flagcdn.com/w320/hr.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "hr",
    iso639_2: "hrv",
    name: "Croatian",
    nativeName: "hrvatski jezik"
  }],
  translations: {
    br: "Kroatia",
    pt: "Croácia",
    nl: "Kroatië",
    hr: "Hrvatska",
    fa: "کرواسی",
    de: "Kroatien",
    es: "Croacia",
    fr: "Croatie",
    ja: "クロアチア",
    it: "Croazia",
    hu: "Horvátország"
  },
  flag: "https://flagcdn.com/hr.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "CRO",
  independent: true
}, {
  name: "Cuba",
  topLevelDomain: [".cu"],
  alpha2Code: "CU",
  alpha3Code: "CUB",
  callingCodes: ["53"],
  capital: "Havana",
  altSpellings: ["CU", "Republic of Cuba", "República de Cuba"],
  subregion: "Caribbean",
  region: "Americas",
  population: 11326616,
  latlng: [21.5, -80],
  demonym: "Cuban",
  area: 109884,
  timezones: ["UTC-05:00"],
  nativeName: "Cuba",
  numericCode: "192",
  flags: {
    svg: "https://flagcdn.com/cu.svg",
    png: "https://flagcdn.com/w320/cu.png"
  },
  currencies: [{
    code: "CUC",
    name: "Cuban convertible peso",
    symbol: "$"
  }, {
    code: "CUP",
    name: "Cuban peso",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Kuba",
    pt: "Cuba",
    nl: "Cuba",
    hr: "Kuba",
    fa: "کوبا",
    de: "Kuba",
    es: "Cuba",
    fr: "Cuba",
    ja: "キューバ",
    it: "Cuba",
    hu: "Kuba"
  },
  flag: "https://flagcdn.com/cu.svg",
  cioc: "CUB",
  independent: true
}, {
  name: "Curaçao",
  topLevelDomain: [".cw"],
  alpha2Code: "CW",
  alpha3Code: "CUW",
  callingCodes: ["599"],
  capital: "Willemstad",
  altSpellings: ["CW", "Curacao", "Kòrsou", "Country of Curaçao", "Land Curaçao", "Pais Kòrsou"],
  subregion: "Caribbean",
  region: "Americas",
  population: 155014,
  latlng: [12.116667, -68.933333],
  demonym: "Dutch",
  area: 444,
  timezones: ["UTC-04:00"],
  nativeName: "Curaçao",
  numericCode: "531",
  flags: {
    svg: "https://flagcdn.com/cw.svg",
    png: "https://flagcdn.com/w320/cw.png"
  },
  currencies: [{
    code: "ANG",
    name: "Netherlands Antillean guilder",
    symbol: "ƒ"
  }],
  languages: [{
    iso639_1: "nl",
    iso639_2: "nld",
    name: "Dutch",
    nativeName: "Nederlands"
  }, {
    iso639_1: "pa",
    iso639_2: "pan",
    name: "(Eastern) Punjabi",
    nativeName: "ਪੰਜਾਬੀ"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Curaçao",
    pt: "Curaçao",
    nl: "Curaçao",
    hr: "Curaçao",
    fa: "کوراسائو",
    de: "Curaçao",
    es: "Curaçao",
    fr: "Curaçao",
    ja: "Curaçao",
    it: "Curaçao",
    hu: "Curaçao"
  },
  flag: "https://flagcdn.com/cw.svg",
  independent: false
}, {
  name: "Cyprus",
  topLevelDomain: [".cy"],
  alpha2Code: "CY",
  alpha3Code: "CYP",
  callingCodes: ["357"],
  capital: "Nicosia",
  altSpellings: ["CY", "Kýpros", "Kıbrıs", "Republic of Cyprus", "Κυπριακή Δημοκρατία", "Kıbrıs Cumhuriyeti"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 1207361,
  latlng: [35, 33],
  demonym: "Cypriot",
  area: 9251,
  gini: 32.7,
  timezones: ["UTC+02:00"],
  borders: ["GBR"],
  nativeName: "Κύπρος",
  numericCode: "196",
  flags: {
    svg: "https://flagcdn.com/cy.svg",
    png: "https://flagcdn.com/w320/cy.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "el",
    iso639_2: "ell",
    name: "Greek (modern)",
    nativeName: "ελληνικά"
  }, {
    iso639_1: "tr",
    iso639_2: "tur",
    name: "Turkish",
    nativeName: "Türkçe"
  }, {
    iso639_1: "hy",
    iso639_2: "hye",
    name: "Armenian",
    nativeName: "Հայերեն"
  }],
  translations: {
    br: "Kiprenez",
    pt: "Chipre",
    nl: "Cyprus",
    hr: "Cipar",
    fa: "قبرس",
    de: "Zypern",
    es: "Chipre",
    fr: "Chypre",
    ja: "キプロス",
    it: "Cipro",
    hu: "Ciprus"
  },
  flag: "https://flagcdn.com/cy.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "CYP",
  independent: true
}, {
  name: "Czech Republic",
  topLevelDomain: [".cz"],
  alpha2Code: "CZ",
  alpha3Code: "CZE",
  callingCodes: ["420"],
  capital: "Prague",
  altSpellings: ["CZ", "Česká republika", "Česko"],
  subregion: "Central Europe",
  region: "Europe",
  population: 10698896,
  latlng: [49.75, 15.5],
  demonym: "Czech",
  area: 78865,
  gini: 25,
  timezones: ["UTC+01:00"],
  nativeName: "Česká republika",
  numericCode: "203",
  flags: {
    svg: "https://flagcdn.com/cz.svg",
    png: "https://flagcdn.com/w320/cz.png"
  },
  currencies: [{
    code: "CZK",
    name: "Czech koruna",
    symbol: "Kč"
  }],
  languages: [{
    iso639_1: "cs",
    iso639_2: "ces",
    name: "Czech",
    nativeName: "čeština"
  }, {
    iso639_1: "sk",
    iso639_2: "slk",
    name: "Slovak",
    nativeName: "slovenčina"
  }],
  translations: {
    br: "Tchekia",
    pt: "República Checa",
    nl: "Tsjechië",
    hr: "Češka",
    fa: "جمهوری چک",
    de: "Tschechische Republik",
    es: "República Checa",
    fr: "République tchèque",
    ja: "チェコ",
    it: "Repubblica Ceca",
    hu: "Csehország"
  },
  flag: "https://flagcdn.com/cz.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "CZE",
  independent: true
}, {
  name: "Denmark",
  topLevelDomain: [".dk"],
  alpha2Code: "DK",
  alpha3Code: "DNK",
  callingCodes: ["45"],
  capital: "Copenhagen",
  altSpellings: ["DK", "Danmark", "Kingdom of Denmark", "Kongeriget Danmark"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 5831404,
  latlng: [56, 10],
  demonym: "Danish",
  area: 43094,
  gini: 28.2,
  timezones: ["UTC-04:00", "UTC-03:00", "UTC-01:00", "UTC", "UTC+01:00"],
  borders: ["DEU"],
  nativeName: "Danmark",
  numericCode: "208",
  flags: {
    svg: "https://flagcdn.com/dk.svg",
    png: "https://flagcdn.com/w320/dk.png"
  },
  currencies: [{
    code: "DKK",
    name: "Danish krone",
    symbol: "kr"
  }],
  languages: [{
    iso639_1: "da",
    iso639_2: "dan",
    name: "Danish",
    nativeName: "dansk"
  }],
  translations: {
    br: "Danmark",
    pt: "Dinamarca",
    nl: "Denemarken",
    hr: "Danska",
    fa: "دانمارک",
    de: "Dänemark",
    es: "Dinamarca",
    fr: "Danemark",
    ja: "デンマーク",
    it: "Danimarca",
    hu: "Dánia"
  },
  flag: "https://flagcdn.com/dk.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "DEN",
  independent: true
}, {
  name: "Djibouti",
  topLevelDomain: [".dj"],
  alpha2Code: "DJ",
  alpha3Code: "DJI",
  callingCodes: ["253"],
  capital: "Djibouti",
  altSpellings: ["DJ", "Jabuuti", "Gabuuti", "Republic of Djibouti", "République de Djibouti", "Gabuutih Ummuuno", "Jamhuuriyadda Jabuuti"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 988002,
  latlng: [11.5, 43],
  demonym: "Djibouti",
  area: 23200,
  gini: 41.6,
  timezones: ["UTC+03:00"],
  borders: ["ERI", "ETH", "SOM"],
  nativeName: "Djibouti",
  numericCode: "262",
  flags: {
    svg: "https://flagcdn.com/dj.svg",
    png: "https://flagcdn.com/w320/dj.png"
  },
  currencies: [{
    code: "DJF",
    name: "Djiboutian franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Djibouti",
    pt: "Djibuti",
    nl: "Djibouti",
    hr: "Džibuti",
    fa: "جیبوتی",
    de: "Dschibuti",
    es: "Yibuti",
    fr: "Djibouti",
    ja: "ジブチ",
    it: "Gibuti",
    hu: "Dzsibuti"
  },
  flag: "https://flagcdn.com/dj.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "DJI",
  independent: true
}, {
  name: "Dominica",
  topLevelDomain: [".dm"],
  alpha2Code: "DM",
  alpha3Code: "DMA",
  callingCodes: ["1"],
  capital: "Roseau",
  altSpellings: ["DM", "Dominique", "Wai‘tu kubuli", "Commonwealth of Dominica"],
  subregion: "Caribbean",
  region: "Americas",
  population: 71991,
  latlng: [15.41666666, -61.33333333],
  demonym: "Dominican",
  area: 751,
  timezones: ["UTC-04:00"],
  nativeName: "Dominica",
  numericCode: "212",
  flags: {
    svg: "https://flagcdn.com/dm.svg",
    png: "https://flagcdn.com/w320/dm.png"
  },
  currencies: [{
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Dominika",
    pt: "Dominica",
    nl: "Dominica",
    hr: "Dominika",
    fa: "دومینیکا",
    de: "Dominica",
    es: "Dominica",
    fr: "Dominique",
    ja: "ドミニカ国",
    it: "Dominica",
    hu: "Dominikai Közösség"
  },
  flag: "https://flagcdn.com/dm.svg",
  cioc: "DMA",
  independent: true
}, {
  name: "Dominican Republic",
  topLevelDomain: [".do"],
  alpha2Code: "DO",
  alpha3Code: "DOM",
  callingCodes: ["1"],
  capital: "Santo Domingo",
  altSpellings: ["DO"],
  subregion: "Caribbean",
  region: "Americas",
  population: 10847904,
  latlng: [19, -70.66666666],
  demonym: "Dominican",
  area: 48671,
  gini: 41.9,
  timezones: ["UTC-04:00"],
  borders: ["HTI"],
  nativeName: "República Dominicana",
  numericCode: "214",
  flags: {
    svg: "https://flagcdn.com/do.svg",
    png: "https://flagcdn.com/w320/do.png"
  },
  currencies: [{
    code: "DOP",
    name: "Dominican peso",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Republik Dominikan",
    pt: "República Dominicana",
    nl: "Dominicaanse Republiek",
    hr: "Dominikanska Republika",
    fa: "جمهوری دومینیکن",
    de: "Dominikanische Republik",
    es: "República Dominicana",
    fr: "République dominicaine",
    ja: "ドミニカ共和国",
    it: "Repubblica Dominicana",
    hu: "Dominikai Köztársaság"
  },
  flag: "https://flagcdn.com/do.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }, {
    acronym: "CAIS",
    name: "Central American Integration System",
    otherAcronyms: ["SICA"],
    otherNames: ["Sistema de la Integración Centroamericana,"]
  }],
  cioc: "DOM",
  independent: true
}, {
  name: "Ecuador",
  topLevelDomain: [".ec"],
  alpha2Code: "EC",
  alpha3Code: "ECU",
  callingCodes: ["593"],
  capital: "Quito",
  altSpellings: ["EC", "Republic of Ecuador", "República del Ecuador"],
  subregion: "South America",
  region: "Americas",
  population: 17643060,
  latlng: [-2, -77.5],
  demonym: "Ecuadorean",
  area: 276841,
  gini: 45.7,
  timezones: ["UTC-06:00", "UTC-05:00"],
  borders: ["COL", "PER"],
  nativeName: "Ecuador",
  numericCode: "218",
  flags: {
    svg: "https://flagcdn.com/ec.svg",
    png: "https://flagcdn.com/w320/ec.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Ecuador",
    pt: "Equador",
    nl: "Ecuador",
    hr: "Ekvador",
    fa: "اکوادور",
    de: "Ecuador",
    es: "Ecuador",
    fr: "Équateur",
    ja: "エクアドル",
    it: "Ecuador",
    hu: "Ecuador"
  },
  flag: "https://flagcdn.com/ec.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "ECU",
  independent: true
}, {
  name: "Egypt",
  topLevelDomain: [".eg"],
  alpha2Code: "EG",
  alpha3Code: "EGY",
  callingCodes: ["20"],
  capital: "Cairo",
  altSpellings: ["EG", "Arab Republic of Egypt"],
  subregion: "Northern Africa",
  region: "Africa",
  population: 102334403,
  latlng: [27, 30],
  demonym: "Egyptian",
  area: 1002450,
  gini: 31.5,
  timezones: ["UTC+02:00"],
  borders: ["ISR", "LBY", "SDN"],
  nativeName: "مصر‎",
  numericCode: "818",
  flags: {
    svg: "https://flagcdn.com/eg.svg",
    png: "https://flagcdn.com/w320/eg.png"
  },
  currencies: [{
    code: "EGP",
    name: "Egyptian pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Egipt",
    pt: "Egipto",
    nl: "Egypte",
    hr: "Egipat",
    fa: "مصر",
    de: "Ägypten",
    es: "Egipto",
    fr: "Égypte",
    ja: "エジプト",
    it: "Egitto",
    hu: "Egyiptom"
  },
  flag: "https://flagcdn.com/eg.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "EGY",
  independent: true
}, {
  name: "El Salvador",
  topLevelDomain: [".sv"],
  alpha2Code: "SV",
  alpha3Code: "SLV",
  callingCodes: ["503"],
  capital: "San Salvador",
  altSpellings: ["SV", "Republic of El Salvador", "República de El Salvador"],
  subregion: "Central America",
  region: "Americas",
  population: 6486201,
  latlng: [13.83333333, -88.91666666],
  demonym: "Salvadoran",
  area: 21041,
  gini: 38.8,
  timezones: ["UTC-06:00"],
  borders: ["GTM", "HND"],
  nativeName: "El Salvador",
  numericCode: "222",
  flags: {
    svg: "https://flagcdn.com/sv.svg",
    png: "https://flagcdn.com/w320/sv.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "El Salvador",
    pt: "El Salvador",
    nl: "El Salvador",
    hr: "Salvador",
    fa: "السالوادور",
    de: "El Salvador",
    es: "El Salvador",
    fr: "Salvador",
    ja: "エルサルバドル",
    it: "El Salvador",
    hu: "Salvador"
  },
  flag: "https://flagcdn.com/sv.svg",
  regionalBlocs: [{
    acronym: "CAIS",
    name: "Central American Integration System",
    otherAcronyms: ["SICA"],
    otherNames: ["Sistema de la Integración Centroamericana,"]
  }],
  cioc: "ESA",
  independent: true
}, {
  name: "Equatorial Guinea",
  topLevelDomain: [".gq"],
  alpha2Code: "GQ",
  alpha3Code: "GNQ",
  callingCodes: ["240"],
  capital: "Malabo",
  altSpellings: ["GQ", "Republic of Equatorial Guinea", "República de Guinea Ecuatorial", "République de Guinée équatoriale", "República da Guiné Equatorial"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 1402985,
  latlng: [2, 10],
  demonym: "Equatorial Guinean",
  area: 28051,
  timezones: ["UTC+01:00"],
  borders: ["CMR", "GAB"],
  nativeName: "Guinea Ecuatorial",
  numericCode: "226",
  flags: {
    svg: "https://flagcdn.com/gq.svg",
    png: "https://flagcdn.com/w320/gq.png"
  },
  currencies: [{
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }, {
    iso639_2: "fan",
    name: "Fang",
    nativeName: "Fang"
  }],
  translations: {
    br: "Ginea ar C'heheder",
    pt: "Guiné Equatorial",
    nl: "Equatoriaal-Guinea",
    hr: "Ekvatorijalna Gvineja",
    fa: "گینه استوایی",
    de: "Äquatorial-Guinea",
    es: "Guinea Ecuatorial",
    fr: "Guinée-Équatoriale",
    ja: "赤道ギニア",
    it: "Guinea Equatoriale",
    hu: "Egyenlítői-Guinea"
  },
  flag: "https://flagcdn.com/gq.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "GEQ",
  independent: true
}, {
  name: "Eritrea",
  topLevelDomain: [".er"],
  alpha2Code: "ER",
  alpha3Code: "ERI",
  callingCodes: ["291"],
  capital: "Asmara",
  altSpellings: ["ER", "State of Eritrea", "ሃገረ ኤርትራ", "Dawlat Iritriyá", "ʾErtrā", "Iritriyā", ""],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 5352000,
  latlng: [15, 39],
  demonym: "Eritrean",
  area: 117600,
  timezones: ["UTC+03:00"],
  borders: ["DJI", "ETH", "SDN"],
  nativeName: "ኤርትራ",
  numericCode: "232",
  flags: {
    svg: "https://flagcdn.com/er.svg",
    png: "https://flagcdn.com/w320/er.png"
  },
  currencies: [{
    code: "ERN",
    name: "Eritrean nakfa",
    symbol: "Nfk"
  }],
  languages: [{
    iso639_1: "ti",
    iso639_2: "tir",
    name: "Tigrinya",
    nativeName: "ትግርኛ"
  }, {
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_2: "tig",
    name: "Tigre",
    nativeName: "ትግረ"
  }, {
    iso639_2: "kun",
    name: "Kunama",
    nativeName: "Kunama"
  }, {
    iso639_2: "ssy",
    name: "Saho",
    nativeName: "Saho"
  }, {
    iso639_2: "byn",
    name: "Bilen",
    nativeName: "ብሊና"
  }, {
    iso639_2: "nrb",
    name: "Nara",
    nativeName: "Nara"
  }, {
    iso639_1: "aa",
    iso639_2: "aar",
    name: "Afar",
    nativeName: "Afar"
  }],
  translations: {
    br: "Eritrea",
    pt: "Eritreia",
    nl: "Eritrea",
    hr: "Eritreja",
    fa: "اریتره",
    de: "Eritrea",
    es: "Eritrea",
    fr: "Érythrée",
    ja: "エリトリア",
    it: "Eritrea",
    hu: "Eritrea"
  },
  flag: "https://flagcdn.com/er.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "ERI",
  independent: true
}, {
  name: "Estonia",
  topLevelDomain: [".ee"],
  alpha2Code: "EE",
  alpha3Code: "EST",
  callingCodes: ["372"],
  capital: "Tallinn",
  altSpellings: ["EE", "Eesti", "Republic of Estonia", "Eesti Vabariik"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 1331057,
  latlng: [59, 26],
  demonym: "Estonian",
  area: 45227,
  gini: 30.3,
  timezones: ["UTC+02:00"],
  borders: ["LVA", "RUS"],
  nativeName: "Eesti",
  numericCode: "233",
  flags: {
    svg: "https://flagcdn.com/ee.svg",
    png: "https://flagcdn.com/w320/ee.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "et",
    iso639_2: "est",
    name: "Estonian",
    nativeName: "eesti"
  }],
  translations: {
    br: "Estonia",
    pt: "Estónia",
    nl: "Estland",
    hr: "Estonija",
    fa: "استونی",
    de: "Estland",
    es: "Estonia",
    fr: "Estonie",
    ja: "エストニア",
    it: "Estonia",
    hu: "Észtország"
  },
  flag: "https://flagcdn.com/ee.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "EST",
  independent: true
}, {
  name: "Ethiopia",
  topLevelDomain: [".et"],
  alpha2Code: "ET",
  alpha3Code: "ETH",
  callingCodes: ["251"],
  capital: "Addis Ababa",
  altSpellings: ["ET", "ʾĪtyōṗṗyā", "Federal Democratic Republic of Ethiopia", "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 114963583,
  latlng: [8, 38],
  demonym: "Ethiopian",
  area: 1104300,
  gini: 35,
  timezones: ["UTC+03:00"],
  borders: ["DJI", "ERI", "KEN", "SOM", "SSD", "SDN"],
  nativeName: "ኢትዮጵያ",
  numericCode: "231",
  flags: {
    svg: "https://flagcdn.com/et.svg",
    png: "https://flagcdn.com/w320/et.png"
  },
  currencies: [{
    code: "ETB",
    name: "Ethiopian birr",
    symbol: "Br"
  }],
  languages: [{
    iso639_1: "am",
    iso639_2: "amh",
    name: "Amharic",
    nativeName: "አማርኛ"
  }],
  translations: {
    br: "Etiopia",
    pt: "Etiópia",
    nl: "Ethiopië",
    hr: "Etiopija",
    fa: "اتیوپی",
    de: "Äthiopien",
    es: "Etiopía",
    fr: "Éthiopie",
    ja: "エチオピア",
    it: "Etiopia",
    hu: "Etiópia"
  },
  flag: "https://flagcdn.com/et.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "ETH",
  independent: true
}, {
  name: "Falkland Islands (Malvinas)",
  topLevelDomain: [".fk"],
  alpha2Code: "FK",
  alpha3Code: "FLK",
  callingCodes: ["500"],
  capital: "Stanley",
  altSpellings: ["FK", "Islas Malvinas"],
  subregion: "South America",
  region: "Americas",
  population: 2563,
  latlng: [-51.75, -59],
  demonym: "Falkland Islander",
  area: 12173,
  timezones: ["UTC-04:00"],
  nativeName: "Falkland Islands",
  numericCode: "238",
  flags: {
    svg: "https://flagcdn.com/fk.svg",
    png: "https://flagcdn.com/w320/fk.png"
  },
  currencies: [{
    code: "FKP",
    name: "Falkland Islands pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Maloù",
    pt: "Ilhas Falkland",
    nl: "Falklandeilanden [Islas Malvinas]",
    hr: "Falklandski Otoci",
    fa: "جزایر فالکلند",
    de: "Falklandinseln",
    es: "Islas Malvinas",
    fr: "Îles Malouines",
    ja: "フォークランド（マルビナス）諸島",
    it: "Isole Falkland o Isole Malvine",
    hu: "Falkland-szigetek"
  },
  flag: "https://flagcdn.com/fk.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  independent: false
}, {
  name: "Faroe Islands",
  topLevelDomain: [".fo"],
  alpha2Code: "FO",
  alpha3Code: "FRO",
  callingCodes: ["298"],
  capital: "Tórshavn",
  altSpellings: ["FO", "Føroyar", "Færøerne"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 48865,
  latlng: [62, -7],
  demonym: "Faroese",
  area: 1393,
  timezones: ["UTC+00:00"],
  nativeName: "Føroyar",
  numericCode: "234",
  flags: {
    svg: "https://flagcdn.com/fo.svg",
    png: "https://flagcdn.com/w320/fo.png"
  },
  currencies: [{
    code: "DKK",
    name: "Danish krone",
    symbol: "kr"
  }, {
    code: "FOK",
    name: "Faroese króna",
    symbol: "kr"
  }],
  languages: [{
    iso639_1: "fo",
    iso639_2: "fao",
    name: "Faroese",
    nativeName: "føroyskt"
  }],
  translations: {
    br: "Inizi Faero",
    pt: "Ilhas Faroé",
    nl: "Faeröer",
    hr: "Farski Otoci",
    fa: "جزایر فارو",
    de: "Färöer-Inseln",
    es: "Islas Faroe",
    fr: "Îles Féroé",
    ja: "フェロー諸島",
    it: "Isole Far Oer",
    hu: "Feröer"
  },
  flag: "https://flagcdn.com/fo.svg",
  independent: false
}, {
  name: "Fiji",
  topLevelDomain: [".fj"],
  alpha2Code: "FJ",
  alpha3Code: "FJI",
  callingCodes: ["679"],
  capital: "Suva",
  altSpellings: ["FJ", "Viti", "Republic of Fiji", "Matanitu ko Viti", "Fijī Gaṇarājya"],
  subregion: "Melanesia",
  region: "Oceania",
  population: 896444,
  latlng: [-18, 175],
  demonym: "Fijian",
  area: 18272,
  gini: 36.7,
  timezones: ["UTC+12:00"],
  nativeName: "Fiji",
  numericCode: "242",
  flags: {
    svg: "https://flagcdn.com/fj.svg",
    png: "https://flagcdn.com/w320/fj.png"
  },
  currencies: [{
    code: "FJD",
    name: "Fijian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "fj",
    iso639_2: "fij",
    name: "Fijian",
    nativeName: "vosa Vakaviti"
  }, {
    iso639_2: "hif",
    name: "Fiji Hindi",
    nativeName: "फ़िजी बात"
  }, {
    iso639_2: "rtm",
    name: "Rotuman",
    nativeName: "Fäeag Rotuma"
  }],
  translations: {
    br: "Fidji",
    pt: "Fiji",
    nl: "Fiji",
    hr: "Fiđi",
    fa: "فیجی",
    de: "Fidschi",
    es: "Fiyi",
    fr: "Fidji",
    ja: "フィジー",
    it: "Figi",
    hu: "Fidzsi-szigetek"
  },
  flag: "https://flagcdn.com/fj.svg",
  cioc: "FIJ",
  independent: true
}, {
  name: "Finland",
  topLevelDomain: [".fi"],
  alpha2Code: "FI",
  alpha3Code: "FIN",
  callingCodes: ["358"],
  capital: "Helsinki",
  altSpellings: ["FI", "Suomi", "Republic of Finland", "Suomen tasavalta", "Republiken Finland"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 5530719,
  latlng: [64, 26],
  demonym: "Finnish",
  area: 338424,
  gini: 27.3,
  timezones: ["UTC+02:00"],
  borders: ["NOR", "SWE", "RUS"],
  nativeName: "Suomi",
  numericCode: "246",
  flags: {
    svg: "https://flagcdn.com/fi.svg",
    png: "https://flagcdn.com/w320/fi.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fi",
    iso639_2: "fin",
    name: "Finnish",
    nativeName: "suomi"
  }, {
    iso639_1: "sv",
    iso639_2: "swe",
    name: "Swedish",
    nativeName: "svenska"
  }],
  translations: {
    br: "Finland",
    pt: "Finlândia",
    nl: "Finland",
    hr: "Finska",
    fa: "فنلاند",
    de: "Finnland",
    es: "Finlandia",
    fr: "Finlande",
    ja: "フィンランド",
    it: "Finlandia",
    hu: "Finnország"
  },
  flag: "https://flagcdn.com/fi.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "FIN",
  independent: true
}, {
  name: "France",
  topLevelDomain: [".fr"],
  alpha2Code: "FR",
  alpha3Code: "FRA",
  callingCodes: ["33"],
  capital: "Paris",
  altSpellings: ["FR", "French Republic", "République française"],
  subregion: "Western Europe",
  region: "Europe",
  population: 67391582,
  latlng: [46, 2],
  demonym: "French",
  area: 640679,
  gini: 32.4,
  timezones: ["UTC-10:00", "UTC-09:30", "UTC-09:00", "UTC-08:00", "UTC-04:00", "UTC-03:00", "UTC+01:00", "UTC+02:00", "UTC+03:00", "UTC+04:00", "UTC+05:00", "UTC+10:00", "UTC+11:00", "UTC+12:00"],
  borders: ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
  nativeName: "France",
  numericCode: "250",
  flags: {
    svg: "https://flagcdn.com/fr.svg",
    png: "https://flagcdn.com/w320/fr.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Frañs",
    pt: "França",
    nl: "Frankrijk",
    hr: "Francuska",
    fa: "فرانسه",
    de: "Frankreich",
    es: "Francia",
    fr: "France",
    ja: "フランス",
    it: "Francia",
    hu: "Franciaország"
  },
  flag: "https://flagcdn.com/fr.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "FRA",
  independent: true
}, {
  name: "French Guiana",
  topLevelDomain: [".gf"],
  alpha2Code: "GF",
  alpha3Code: "GUF",
  callingCodes: ["594"],
  capital: "Cayenne",
  altSpellings: ["GF", "Guiana", "Guyane"],
  subregion: "South America",
  region: "Americas",
  population: 254541,
  latlng: [4, -53],
  demonym: "French Guianan",
  timezones: ["UTC-03:00"],
  borders: ["BRA", "SUR"],
  nativeName: "Guyane française",
  numericCode: "254",
  flags: {
    svg: "https://flagcdn.com/gf.svg",
    png: "https://flagcdn.com/w320/gf.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Gwiana C'hall",
    pt: "Guiana Francesa",
    nl: "Frans-Guyana",
    hr: "Francuska Gvajana",
    fa: "گویان فرانسه",
    de: "Französisch Guyana",
    es: "Guayana Francesa",
    fr: "Guayane",
    ja: "フランス領ギアナ",
    it: "Guyana francese",
    hu: "Francia Guyana"
  },
  flag: "https://flagcdn.com/gf.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }, {
    acronym: "EU",
    name: "European Union"
  }],
  independent: false
}, {
  name: "French Polynesia",
  topLevelDomain: [".pf"],
  alpha2Code: "PF",
  alpha3Code: "PYF",
  callingCodes: ["689"],
  capital: "Papeetē",
  altSpellings: ["PF", "Polynésie française", "French Polynesia", "Pōrīnetia Farāni"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 280904,
  latlng: [-15, -140],
  demonym: "French Polynesian",
  area: 4167,
  timezones: ["UTC-10:00", "UTC-09:30", "UTC-09:00"],
  nativeName: "Polynésie française",
  numericCode: "258",
  flags: {
    svg: "https://flagcdn.com/pf.svg",
    png: "https://flagcdn.com/w320/pf.png"
  },
  currencies: [{
    code: "XPF",
    name: "CFP franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Polinezia C'hall",
    pt: "Polinésia Francesa",
    nl: "Frans-Polynesië",
    hr: "Francuska Polinezija",
    fa: "پلی‌نزی فرانسه",
    de: "Französisch-Polynesien",
    es: "Polinesia Francesa",
    fr: "Polynésie française",
    ja: "フランス領ポリネシア",
    it: "Polinesia Francese",
    hu: "Francia Polinézia"
  },
  flag: "https://flagcdn.com/pf.svg",
  independent: false
}, {
  name: "French Southern Territories",
  topLevelDomain: [".tf"],
  alpha2Code: "TF",
  alpha3Code: "ATF",
  callingCodes: ["262"],
  capital: "Port-aux-Français",
  altSpellings: ["TF"],
  subregion: "Southern Africa",
  region: "Africa",
  population: 140,
  latlng: [-49.25, 69.167],
  demonym: "French",
  area: 7747,
  timezones: ["UTC+05:00"],
  nativeName: "Territoire des Terres australes et antarctiques françaises",
  numericCode: "260",
  flags: {
    svg: "https://flagcdn.com/tf.svg",
    png: "https://flagcdn.com/w320/tf.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Douaroù Aostral hag Antarktikel Frañs",
    pt: "Terras Austrais e Antárticas Francesas",
    nl: "Franse Gebieden in de zuidelijke Indische Oceaan",
    hr: "Francuski južni i antarktički teritoriji",
    fa: "سرزمین‌های جنوبی و جنوبگانی فرانسه",
    de: "Französische Süd- und Antarktisgebiete",
    es: "Tierras Australes y Antárticas Francesas",
    fr: "Terres australes et antarctiques françaises",
    ja: "フランス領南方・南極地域",
    it: "Territori Francesi del Sud",
    hu: "Francia déli és antarktiszi területek"
  },
  flag: "https://flagcdn.com/tf.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  independent: false
}, {
  name: "Gabon",
  topLevelDomain: [".ga"],
  alpha2Code: "GA",
  alpha3Code: "GAB",
  callingCodes: ["241"],
  capital: "Libreville",
  altSpellings: ["GA", "Gabonese Republic", "République Gabonaise"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 2225728,
  latlng: [-1, 11.75],
  demonym: "Gabonese",
  area: 267668,
  gini: 38,
  timezones: ["UTC+01:00"],
  borders: ["CMR", "COG", "GNQ"],
  nativeName: "Gabon",
  numericCode: "266",
  flags: {
    svg: "https://flagcdn.com/ga.svg",
    png: "https://flagcdn.com/w320/ga.png"
  },
  currencies: [{
    code: "XAF",
    name: "Central African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Gabon",
    pt: "Gabão",
    nl: "Gabon",
    hr: "Gabon",
    fa: "گابن",
    de: "Gabun",
    es: "Gabón",
    fr: "Gabon",
    ja: "ガボン",
    it: "Gabon",
    hu: "Gabon"
  },
  flag: "https://flagcdn.com/ga.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "GAB",
  independent: true
}, {
  name: "Gambia",
  topLevelDomain: [".gm"],
  alpha2Code: "GM",
  alpha3Code: "GMB",
  callingCodes: ["220"],
  capital: "Banjul",
  altSpellings: ["GM", "Republic of the Gambia"],
  subregion: "Western Africa",
  region: "Africa",
  population: 2416664,
  latlng: [13.46666666, -16.56666666],
  demonym: "Gambian",
  area: 11295,
  gini: 35.9,
  timezones: ["UTC+00:00"],
  borders: ["SEN"],
  nativeName: "Gambia",
  numericCode: "270",
  flags: {
    svg: "https://flagcdn.com/gm.svg",
    png: "https://flagcdn.com/w320/gm.png"
  },
  currencies: [{
    code: "GMD",
    name: "Gambian dalasi",
    symbol: "D"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Gambia",
    pt: "Gâmbia",
    nl: "Gambia",
    hr: "Gambija",
    fa: "گامبیا",
    de: "Gambia",
    es: "Gambia",
    fr: "Gambie",
    ja: "ガンビア",
    it: "Gambia",
    hu: "Gambia"
  },
  flag: "https://flagcdn.com/gm.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "GAM",
  independent: true
}, {
  name: "Georgia",
  topLevelDomain: [".ge"],
  alpha2Code: "GE",
  alpha3Code: "GEO",
  callingCodes: ["995"],
  capital: "Tbilisi",
  altSpellings: ["GE", "Sakartvelo"],
  subregion: "Western Asia",
  region: "Asia",
  population: 3714000,
  latlng: [42, 43.5],
  demonym: "Georgian",
  area: 69700,
  gini: 35.9,
  timezones: ["UTC-04:00"],
  borders: ["ARM", "AZE", "RUS", "TUR"],
  nativeName: "საქართველო",
  numericCode: "268",
  flags: {
    svg: "https://flagcdn.com/ge.svg",
    png: "https://flagcdn.com/w320/ge.png"
  },
  currencies: [{
    code: "GEL",
    name: "Georgian Lari",
    symbol: "ლ"
  }],
  languages: [{
    iso639_1: "ka",
    iso639_2: "kat",
    name: "Georgian",
    nativeName: "ქართული"
  }],
  translations: {
    br: "Jorjia",
    pt: "Geórgia",
    nl: "Georgië",
    hr: "Németország",
    fa: "گرجستان",
    de: "Georgien",
    es: "Georgia",
    fr: "Géorgie",
    ja: "グルジア",
    it: "Georgia",
    hu: "Grúzia"
  },
  flag: "https://flagcdn.com/ge.svg",
  cioc: "GEO",
  independent: true
}, {
  name: "Germany",
  topLevelDomain: [".de"],
  alpha2Code: "DE",
  alpha3Code: "DEU",
  callingCodes: ["49"],
  capital: "Berlin",
  altSpellings: ["DE", "Federal Republic of Germany", "Bundesrepublik Deutschland"],
  subregion: "Central Europe",
  region: "Europe",
  population: 83240525,
  latlng: [51, 9],
  demonym: "German",
  area: 357114,
  gini: 31.9,
  timezones: ["UTC+01:00"],
  borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
  nativeName: "Deutschland",
  numericCode: "276",
  flags: {
    svg: "https://flagcdn.com/de.svg",
    png: "https://flagcdn.com/w320/de.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "de",
    iso639_2: "deu",
    name: "German",
    nativeName: "Deutsch"
  }],
  translations: {
    br: "Alamagn",
    pt: "Alemanha",
    nl: "Duitsland",
    hr: "Njemačka",
    fa: "آلمان",
    de: "Deutschland",
    es: "Alemania",
    fr: "Allemagne",
    ja: "ドイツ",
    it: "Germania",
    hu: "Grúzia"
  },
  flag: "https://flagcdn.com/de.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "GER",
  independent: true
}, {
  name: "Ghana",
  topLevelDomain: [".gh"],
  alpha2Code: "GH",
  alpha3Code: "GHA",
  callingCodes: ["233"],
  capital: "Accra",
  altSpellings: ["GH"],
  subregion: "Western Africa",
  region: "Africa",
  population: 31072945,
  latlng: [8, -2],
  demonym: "Ghanaian",
  area: 238533,
  gini: 43.5,
  timezones: ["UTC"],
  borders: ["BFA", "CIV", "TGO"],
  nativeName: "Ghana",
  numericCode: "288",
  flags: {
    svg: "https://flagcdn.com/gh.svg",
    png: "https://flagcdn.com/w320/gh.png"
  },
  currencies: [{
    code: "GHS",
    name: "Ghanaian cedi",
    symbol: "₵"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Ghana",
    pt: "Gana",
    nl: "Ghana",
    hr: "Gana",
    fa: "غنا",
    de: "Ghana",
    es: "Ghana",
    fr: "Ghana",
    ja: "ガーナ",
    it: "Ghana",
    hu: "Ghána"
  },
  flag: "https://flagcdn.com/gh.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "GHA",
  independent: true
}, {
  name: "Gibraltar",
  topLevelDomain: [".gi"],
  alpha2Code: "GI",
  alpha3Code: "GIB",
  callingCodes: ["350"],
  capital: "Gibraltar",
  altSpellings: ["GI"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 33691,
  latlng: [36.13333333, -5.35],
  demonym: "Gibraltar",
  area: 6,
  timezones: ["UTC+01:00"],
  borders: ["ESP"],
  nativeName: "Gibraltar",
  numericCode: "292",
  flags: {
    svg: "https://flagcdn.com/gi.svg",
    png: "https://flagcdn.com/w320/gi.png"
  },
  currencies: [{
    code: "GIP",
    name: "Gibraltar pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Jibraltar",
    pt: "Gibraltar",
    nl: "Gibraltar",
    hr: "Gibraltar",
    fa: "جبل‌طارق",
    de: "Gibraltar",
    es: "Gibraltar",
    fr: "Gibraltar",
    ja: "ジブラルタル",
    it: "Gibilterra",
    hu: "Gibraltár"
  },
  flag: "https://flagcdn.com/gi.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  independent: false
}, {
  name: "Greece",
  topLevelDomain: [".gr"],
  alpha2Code: "GR",
  alpha3Code: "GRC",
  callingCodes: ["30"],
  capital: "Athens",
  altSpellings: ["GR", "Elláda", "Hellenic Republic", "Ελληνική Δημοκρατία"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 10715549,
  latlng: [39, 22],
  demonym: "Greek",
  area: 131990,
  gini: 32.9,
  timezones: ["UTC+02:00"],
  borders: ["ALB", "BGR", "TUR", "MKD"],
  nativeName: "Ελλάδα",
  numericCode: "300",
  flags: {
    svg: "https://flagcdn.com/gr.svg",
    png: "https://flagcdn.com/w320/gr.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "el",
    iso639_2: "ell",
    name: "Greek (modern)",
    nativeName: "ελληνικά"
  }],
  translations: {
    br: "Gres",
    pt: "Grécia",
    nl: "Griekenland",
    hr: "Grčka",
    fa: "یونان",
    de: "Griechenland",
    es: "Grecia",
    fr: "Grèce",
    ja: "ギリシャ",
    it: "Grecia",
    hu: "Görögország"
  },
  flag: "https://flagcdn.com/gr.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "GRE",
  independent: true
}, {
  name: "Greenland",
  topLevelDomain: [".gl"],
  alpha2Code: "GL",
  alpha3Code: "GRL",
  callingCodes: ["299"],
  capital: "Nuuk",
  altSpellings: ["GL", "Grønland"],
  subregion: "Northern America",
  region: "Americas",
  population: 56367,
  latlng: [72, -40],
  demonym: "Greenlandic",
  area: 2166086,
  timezones: ["UTC-04:00", "UTC-03:00", "UTC-01:00", "UTC+00:00"],
  nativeName: "Kalaallit Nunaat",
  numericCode: "304",
  flags: {
    svg: "https://flagcdn.com/gl.svg",
    png: "https://flagcdn.com/w320/gl.png"
  },
  currencies: [{
    code: "DKK",
    name: "Danish krone",
    symbol: "kr"
  }],
  languages: [{
    iso639_1: "kl",
    iso639_2: "kal",
    name: "Greenlandic",
    nativeName: "kalaallisut"
  }],
  translations: {
    br: "Greunland",
    pt: "Gronelândia",
    nl: "Groenland",
    hr: "Grenland",
    fa: "گرینلند",
    de: "Grönland",
    es: "Groenlandia",
    fr: "Groenland",
    ja: "グリーンランド",
    it: "Groenlandia",
    hu: "Grönland"
  },
  flag: "https://flagcdn.com/gl.svg",
  independent: false
}, {
  name: "Grenada",
  topLevelDomain: [".gd"],
  alpha2Code: "GD",
  alpha3Code: "GRD",
  callingCodes: ["1"],
  capital: "St. George's",
  altSpellings: ["GD"],
  subregion: "Caribbean",
  region: "Americas",
  population: 112519,
  latlng: [12.11666666, -61.66666666],
  demonym: "Grenadian",
  area: 344,
  timezones: ["UTC-04:00"],
  nativeName: "Grenada",
  numericCode: "308",
  flags: {
    svg: "https://flagcdn.com/gd.svg",
    png: "https://flagcdn.com/w320/gd.png"
  },
  currencies: [{
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Grenada",
    pt: "Granada",
    nl: "Grenada",
    hr: "Grenada",
    fa: "گرنادا",
    de: "Grenada",
    es: "Grenada",
    fr: "Grenade",
    ja: "グレナダ",
    it: "Grenada",
    hu: "Grenada"
  },
  flag: "https://flagcdn.com/gd.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "GRN",
  independent: true
}, {
  name: "Guadeloupe",
  topLevelDomain: [".gp"],
  alpha2Code: "GP",
  alpha3Code: "GLP",
  callingCodes: ["590"],
  capital: "Basse-Terre",
  altSpellings: ["GP", "Gwadloup"],
  subregion: "Caribbean",
  region: "Americas",
  population: 400132,
  latlng: [16.25, -61.583333],
  demonym: "Guadeloupian",
  timezones: ["UTC-04:00"],
  nativeName: "Guadeloupe",
  numericCode: "312",
  flags: {
    svg: "https://flagcdn.com/gp.svg",
    png: "https://flagcdn.com/w320/gp.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Gwadeloup",
    pt: "Guadalupe",
    nl: "Guadeloupe",
    hr: "Gvadalupa",
    fa: "جزیره گوادلوپ",
    de: "Guadeloupe",
    es: "Guadalupe",
    fr: "Guadeloupe",
    ja: "グアドループ",
    it: "Guadeloupa",
    hu: "Guadeloupe"
  },
  flag: "https://flagcdn.com/gp.svg",
  independent: false
}, {
  name: "Guam",
  topLevelDomain: [".gu"],
  alpha2Code: "GU",
  alpha3Code: "GUM",
  callingCodes: ["1"],
  capital: "Hagåtña",
  altSpellings: ["GU", "Guåhån"],
  subregion: "Micronesia",
  region: "Oceania",
  population: 168783,
  latlng: [13.46666666, 144.78333333],
  demonym: "Guamanian",
  area: 549,
  timezones: ["UTC+10:00"],
  nativeName: "Guam",
  numericCode: "316",
  flags: {
    svg: "https://flagcdn.com/gu.svg",
    png: "https://flagcdn.com/w320/gu.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "ch",
    iso639_2: "cha",
    name: "Chamorro",
    nativeName: "Chamoru"
  }, {
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Guam",
    pt: "Guame",
    nl: "Guam",
    hr: "Guam",
    fa: "گوام",
    de: "Guam",
    es: "Guam",
    fr: "Guam",
    ja: "グアム",
    it: "Guam",
    hu: "Guam"
  },
  flag: "https://flagcdn.com/gu.svg",
  cioc: "GUM",
  independent: false
}, {
  name: "Guatemala",
  topLevelDomain: [".gt"],
  alpha2Code: "GT",
  alpha3Code: "GTM",
  callingCodes: ["502"],
  capital: "Guatemala City",
  altSpellings: ["GT"],
  subregion: "Central America",
  region: "Americas",
  population: 16858333,
  latlng: [15.5, -90.25],
  demonym: "Guatemalan",
  area: 108889,
  gini: 48.3,
  timezones: ["UTC-06:00"],
  borders: ["BLZ", "SLV", "HND", "MEX"],
  nativeName: "Guatemala",
  numericCode: "320",
  flags: {
    svg: "https://flagcdn.com/gt.svg",
    png: "https://flagcdn.com/w320/gt.png"
  },
  currencies: [{
    code: "GTQ",
    name: "Guatemalan quetzal",
    symbol: "Q"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Guatemala",
    pt: "Guatemala",
    nl: "Guatemala",
    hr: "Gvatemala",
    fa: "گواتمالا",
    de: "Guatemala",
    es: "Guatemala",
    fr: "Guatemala",
    ja: "グアテマラ",
    it: "Guatemala",
    hu: "Guatemala"
  },
  flag: "https://flagcdn.com/gt.svg",
  regionalBlocs: [{
    acronym: "CAIS",
    name: "Central American Integration System",
    otherAcronyms: ["SICA"],
    otherNames: ["Sistema de la Integración Centroamericana,"]
  }],
  cioc: "GUA",
  independent: true
}, {
  name: "Guernsey",
  topLevelDomain: [".gg"],
  alpha2Code: "GG",
  alpha3Code: "GGY",
  callingCodes: ["44"],
  capital: "St. Peter Port",
  altSpellings: ["GG", "Bailiwick of Guernsey", "Bailliage de Guernesey"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 62999,
  latlng: [49.46666666, -2.58333333],
  demonym: "Channel Islander",
  area: 78,
  timezones: ["UTC+00:00"],
  nativeName: "Guernsey",
  numericCode: "831",
  flags: {
    svg: "https://flagcdn.com/gg.svg",
    png: "https://flagcdn.com/w320/gg.png"
  },
  currencies: [{
    code: "GBP",
    name: "British pound",
    symbol: "£"
  }, {
    code: "GGP",
    name: "Guernsey pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Gwernenez",
    pt: "Guernsey",
    nl: "Guernsey",
    hr: "Guernsey",
    fa: "گرنزی",
    de: "Guernsey",
    es: "Guernsey",
    fr: "Guernesey",
    ja: "ガーンジー",
    it: "Guernsey",
    hu: "Guernsey"
  },
  flag: "https://flagcdn.com/gg.svg",
  independent: false
}, {
  name: "Guinea",
  topLevelDomain: [".gn"],
  alpha2Code: "GN",
  alpha3Code: "GIN",
  callingCodes: ["224"],
  capital: "Conakry",
  altSpellings: ["GN", "Republic of Guinea", "République de Guinée"],
  subregion: "Western Africa",
  region: "Africa",
  population: 13132792,
  latlng: [11, -10],
  demonym: "Guinean",
  area: 245857,
  gini: 33.7,
  timezones: ["UTC"],
  borders: ["CIV", "GNB", "LBR", "MLI", "SEN", "SLE"],
  nativeName: "Guinée",
  numericCode: "324",
  flags: {
    svg: "https://flagcdn.com/gn.svg",
    png: "https://flagcdn.com/w320/gn.png"
  },
  currencies: [{
    code: "GNF",
    name: "Guinean franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "ff",
    iso639_2: "ful",
    name: "Fula",
    nativeName: "Fulfulde"
  }],
  translations: {
    br: "Ginea",
    pt: "Guiné",
    nl: "Guinee",
    hr: "Gvineja",
    fa: "گینه",
    de: "Guinea",
    es: "Guinea",
    fr: "Guinée",
    ja: "ギニア",
    it: "Guinea",
    hu: "Guinea"
  },
  flag: "https://flagcdn.com/gn.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "GUI",
  independent: true
}, {
  name: "Guinea-Bissau",
  topLevelDomain: [".gw"],
  alpha2Code: "GW",
  alpha3Code: "GNB",
  callingCodes: ["245"],
  capital: "Bissau",
  altSpellings: ["GW", "Republic of Guinea-Bissau", "República da Guiné-Bissau"],
  subregion: "Western Africa",
  region: "Africa",
  population: 1967998,
  latlng: [12, -15],
  demonym: "Guinea-Bissauan",
  area: 36125,
  gini: 50.7,
  timezones: ["UTC"],
  borders: ["GIN", "SEN"],
  nativeName: "Guiné-Bissau",
  numericCode: "624",
  flags: {
    svg: "https://flagcdn.com/gw.svg",
    png: "https://flagcdn.com/w320/gw.png"
  },
  currencies: [{
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }],
  translations: {
    br: "Ginea-Bissau",
    pt: "Guiné-Bissau",
    nl: "Guinee-Bissau",
    hr: "Gvineja Bisau",
    fa: "گینه بیسائو",
    de: "Guinea-Bissau",
    es: "Guinea-Bisáu",
    fr: "Guinée-Bissau",
    ja: "ギニアビサウ",
    it: "Guinea-Bissau",
    hu: "Bissau-Guinea"
  },
  flag: "https://flagcdn.com/gw.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "GBS",
  independent: true
}, {
  name: "Guyana",
  topLevelDomain: [".gy"],
  alpha2Code: "GY",
  alpha3Code: "GUY",
  callingCodes: ["592"],
  capital: "Georgetown",
  altSpellings: ["GY", "Co-operative Republic of Guyana"],
  subregion: "South America",
  region: "Americas",
  population: 786559,
  latlng: [5, -59],
  demonym: "Guyanese",
  area: 214969,
  gini: 45.1,
  timezones: ["UTC-04:00"],
  borders: ["BRA", "SUR", "VEN"],
  nativeName: "Guyana",
  numericCode: "328",
  flags: {
    svg: "https://flagcdn.com/gy.svg",
    png: "https://flagcdn.com/w320/gy.png"
  },
  currencies: [{
    code: "GYD",
    name: "Guyanese dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Guyana",
    pt: "Guiana",
    nl: "Guyana",
    hr: "Gvajana",
    fa: "گویان",
    de: "Guyana",
    es: "Guyana",
    fr: "Guyane",
    ja: "ガイアナ",
    it: "Guyana",
    hu: "Guyana"
  },
  flag: "https://flagcdn.com/gy.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }, {
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "GUY",
  independent: true
}, {
  name: "Haiti",
  topLevelDomain: [".ht"],
  alpha2Code: "HT",
  alpha3Code: "HTI",
  callingCodes: ["509"],
  capital: "Port-au-Prince",
  altSpellings: ["HT", "Republic of Haiti", "République d'Haïti", "Repiblik Ayiti"],
  subregion: "Caribbean",
  region: "Americas",
  population: 11402533,
  latlng: [19, -72.41666666],
  demonym: "Haitian",
  area: 27750,
  gini: 41.1,
  timezones: ["UTC-05:00"],
  borders: ["DOM"],
  nativeName: "Haïti",
  numericCode: "332",
  flags: {
    svg: "https://flagcdn.com/ht.svg",
    png: "https://flagcdn.com/w320/ht.png"
  },
  currencies: [{
    code: "HTG",
    name: "Haitian gourde",
    symbol: "G"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "ht",
    iso639_2: "hat",
    name: "Haitian",
    nativeName: "Kreyòl ayisyen"
  }],
  translations: {
    br: "Haiti",
    pt: "Haiti",
    nl: "Haïti",
    hr: "Haiti",
    fa: "هائیتی",
    de: "Haiti",
    es: "Haiti",
    fr: "Haïti",
    ja: "ハイチ",
    it: "Haiti",
    hu: "Haiti"
  },
  flag: "https://flagcdn.com/ht.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "HAI",
  independent: true
}, {
  name: "Heard Island and McDonald Islands",
  topLevelDomain: [".hm", ".aq"],
  alpha2Code: "HM",
  alpha3Code: "HMD",
  callingCodes: ["672"],
  altSpellings: ["HM"],
  subregion: "Antarctic",
  region: "Antarctic",
  population: 0,
  latlng: [-53.1, 72.51666666],
  demonym: "Heard and McDonald Islander",
  area: 412,
  timezones: ["UTC+05:00"],
  nativeName: "Heard Island and McDonald Islands",
  numericCode: "334",
  flags: {
    svg: "https://flagcdn.com/hm.svg",
    png: "https://flagcdn.com/w320/hm.png"
  },
  currencies: [{
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Heard ha McDonald",
    pt: "Ilha Heard e Ilhas McDonald",
    nl: "Heard- en McDonaldeilanden",
    hr: "Otok Heard i otočje McDonald",
    fa: "جزیره هرد و جزایر مک‌دونالد",
    de: "Heard und die McDonaldinseln",
    es: "Islas Heard y McDonald",
    fr: "Îles Heard-et-MacDonald",
    ja: "ハード島とマクドナルド諸島",
    it: "Isole Heard e McDonald",
    hu: "Heard-sziget és McDonald-szigetek"
  },
  flag: "https://flagcdn.com/hm.svg",
  independent: false
}, {
  name: "Vatican City",
  topLevelDomain: [".va"],
  alpha2Code: "VA",
  alpha3Code: "VAT",
  callingCodes: ["379"],
  capital: "Vatican City",
  altSpellings: ["Vatican", "The Vatican"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 451,
  latlng: [41.9, 12.45],
  demonym: "Vatican",
  area: 0.44,
  timezones: ["UTC+01:00"],
  borders: ["ITA"],
  nativeName: "Status Civitatis Vaticanae",
  numericCode: "336",
  flags: {
    svg: "https://flagcdn.com/va.svg",
    png: "https://flagcdn.com/w320/va.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "la",
    iso639_2: "lat",
    name: "Latin",
    nativeName: "latine"
  }, {
    iso639_1: "it",
    iso639_2: "ita",
    name: "Italian",
    nativeName: "Italiano"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "Français"
  }, {
    iso639_1: "de",
    iso639_2: "deu",
    name: "German",
    nativeName: "Deutsch"
  }],
  translations: {
    br: "Vatikan",
    pt: "Vaticano",
    nl: "Heilige Stoel",
    hr: "Sveta Stolica",
    fa: "سریر مقدس",
    de: "Heiliger Stuhl",
    es: "Santa Sede",
    fr: "Saint-Siège",
    ja: "聖座",
    it: "Santa Sede",
    hu: "Vatikán"
  },
  flag: "https://flagcdn.com/va.svg",
  independent: true
}, {
  name: "Honduras",
  topLevelDomain: [".hn"],
  alpha2Code: "HN",
  alpha3Code: "HND",
  callingCodes: ["504"],
  capital: "Tegucigalpa",
  altSpellings: ["HN", "Republic of Honduras", "República de Honduras"],
  subregion: "Central America",
  region: "Americas",
  population: 9904608,
  latlng: [15, -86.5],
  demonym: "Honduran",
  area: 112492,
  gini: 48.2,
  timezones: ["UTC-06:00"],
  borders: ["GTM", "SLV", "NIC"],
  nativeName: "Honduras",
  numericCode: "340",
  flags: {
    svg: "https://flagcdn.com/hn.svg",
    png: "https://flagcdn.com/w320/hn.png"
  },
  currencies: [{
    code: "HNL",
    name: "Honduran lempira",
    symbol: "L"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Honduras",
    pt: "Honduras",
    nl: "Honduras",
    hr: "Honduras",
    fa: "هندوراس",
    de: "Honduras",
    es: "Honduras",
    fr: "Honduras",
    ja: "ホンジュラス",
    it: "Honduras",
    hu: "Honduras"
  },
  flag: "https://flagcdn.com/hn.svg",
  regionalBlocs: [{
    acronym: "CAIS",
    name: "Central American Integration System",
    otherAcronyms: ["SICA"],
    otherNames: ["Sistema de la Integración Centroamericana,"]
  }],
  cioc: "HON",
  independent: true
}, {
  name: "Hungary",
  topLevelDomain: [".hu"],
  alpha2Code: "HU",
  alpha3Code: "HUN",
  callingCodes: ["36"],
  capital: "Budapest",
  altSpellings: ["HU"],
  subregion: "Central Europe",
  region: "Europe",
  population: 9749763,
  latlng: [47, 20],
  demonym: "Hungarian",
  area: 93028,
  gini: 29.6,
  timezones: ["UTC+01:00"],
  borders: ["AUT", "HRV", "ROU", "SRB", "SVK", "SVN", "UKR"],
  nativeName: "Magyarország",
  numericCode: "348",
  flags: {
    svg: "https://flagcdn.com/hu.svg",
    png: "https://flagcdn.com/w320/hu.png"
  },
  currencies: [{
    code: "HUF",
    name: "Hungarian forint",
    symbol: "Ft"
  }],
  languages: [{
    iso639_1: "hu",
    iso639_2: "hun",
    name: "Hungarian",
    nativeName: "magyar"
  }],
  translations: {
    br: "Hungaria",
    pt: "Hungria",
    nl: "Hongarije",
    hr: "Mađarska",
    fa: "مجارستان",
    de: "Ungarn",
    es: "Hungría",
    fr: "Hongrie",
    ja: "ハンガリー",
    it: "Ungheria",
    hu: "Magyarország"
  },
  flag: "https://flagcdn.com/hu.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "HUN",
  independent: true
}, {
  name: "Hong Kong",
  topLevelDomain: [".hk"],
  alpha2Code: "HK",
  alpha3Code: "HKG",
  callingCodes: ["852"],
  capital: "City of Victoria",
  altSpellings: ["HK", "香港"],
  subregion: "Eastern Asia",
  region: "Asia",
  population: 7481800,
  latlng: [22.25, 114.16666666],
  demonym: "Chinese",
  area: 1104,
  timezones: ["UTC+08:00"],
  borders: ["CHN"],
  nativeName: "香港",
  numericCode: "344",
  flags: {
    svg: "https://flagcdn.com/hk.svg",
    png: "https://flagcdn.com/w320/hk.png"
  },
  currencies: [{
    code: "HKD",
    name: "Hong Kong dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "zh",
    iso639_2: "zho",
    name: "Chinese",
    nativeName: "中文 (Zhōngwén)"
  }],
  translations: {
    br: "Hong Kong",
    pt: "Hong Kong",
    nl: "Hongkong",
    hr: "Hong Kong",
    fa: "هنگ‌کنگ",
    de: "Hong Kong",
    es: "Hong Kong",
    fr: "Hong Kong",
    ja: "香港",
    it: "Hong Kong",
    hu: "Hong Kong"
  },
  flag: "https://flagcdn.com/hk.svg",
  cioc: "HKG",
  independent: false
}, {
  name: "Iceland",
  topLevelDomain: [".is"],
  alpha2Code: "IS",
  alpha3Code: "ISL",
  callingCodes: ["354"],
  capital: "Reykjavík",
  altSpellings: ["IS", "Island", "Republic of Iceland", "Lýðveldið Ísland"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 366425,
  latlng: [65, -18],
  demonym: "Icelander",
  area: 103000,
  gini: 26.1,
  timezones: ["UTC"],
  nativeName: "Ísland",
  numericCode: "352",
  flags: {
    svg: "https://flagcdn.com/is.svg",
    png: "https://flagcdn.com/w320/is.png"
  },
  currencies: [{
    code: "ISK",
    name: "Icelandic króna",
    symbol: "kr"
  }],
  languages: [{
    iso639_1: "is",
    iso639_2: "isl",
    name: "Icelandic",
    nativeName: "Íslenska"
  }],
  translations: {
    br: "Island",
    pt: "Islândia",
    nl: "IJsland",
    hr: "Island",
    fa: "ایسلند",
    de: "Island",
    es: "Islandia",
    fr: "Islande",
    ja: "アイスランド",
    it: "Islanda",
    hu: "Izland"
  },
  flag: "https://flagcdn.com/is.svg",
  regionalBlocs: [{
    acronym: "EFTA",
    name: "European Free Trade Association"
  }],
  cioc: "ISL",
  independent: true
}, {
  name: "India",
  topLevelDomain: [".in"],
  alpha2Code: "IN",
  alpha3Code: "IND",
  callingCodes: ["91"],
  capital: "New Delhi",
  altSpellings: ["IN", "Bhārat", "Republic of India", "Bharat Ganrajya"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 1380004385,
  latlng: [20, 77],
  demonym: "Indian",
  area: 3287590,
  gini: 35.7,
  timezones: ["UTC+05:30"],
  borders: ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
  nativeName: "भारत",
  numericCode: "356",
  flags: {
    svg: "https://flagcdn.com/in.svg",
    png: "https://flagcdn.com/w320/in.png"
  },
  currencies: [{
    code: "INR",
    name: "Indian rupee",
    symbol: "₹"
  }],
  languages: [{
    iso639_1: "hi",
    iso639_2: "hin",
    name: "Hindi",
    nativeName: "हिन्दी"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "India",
    pt: "Índia",
    nl: "India",
    hr: "Indija",
    fa: "هند",
    de: "Indien",
    es: "India",
    fr: "Inde",
    ja: "インド",
    it: "India",
    hu: "India"
  },
  flag: "https://flagcdn.com/in.svg",
  regionalBlocs: [{
    acronym: "SAARC",
    name: "South Asian Association for Regional Cooperation"
  }],
  cioc: "IND",
  independent: true
}, {
  name: "Indonesia",
  topLevelDomain: [".id"],
  alpha2Code: "ID",
  alpha3Code: "IDN",
  callingCodes: ["62"],
  capital: "Jakarta",
  altSpellings: ["ID", "Republic of Indonesia", "Republik Indonesia"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 273523621,
  latlng: [-5, 120],
  demonym: "Indonesian",
  area: 1904569,
  gini: 38.2,
  timezones: ["UTC+07:00", "UTC+08:00", "UTC+09:00"],
  borders: ["TLS", "MYS", "PNG"],
  nativeName: "Indonesia",
  numericCode: "360",
  flags: {
    svg: "https://flagcdn.com/id.svg",
    png: "https://flagcdn.com/w320/id.png"
  },
  currencies: [{
    code: "IDR",
    name: "Indonesian rupiah",
    symbol: "Rp"
  }],
  languages: [{
    iso639_1: "id",
    iso639_2: "ind",
    name: "Indonesian",
    nativeName: "Bahasa Indonesia"
  }],
  translations: {
    br: "Indonezia",
    pt: "Indonésia",
    nl: "Indonesië",
    hr: "Indonezija",
    fa: "اندونزی",
    de: "Indonesien",
    es: "Indonesia",
    fr: "Indonésie",
    ja: "インドネシア",
    it: "Indonesia",
    hu: "Indonézia"
  },
  flag: "https://flagcdn.com/id.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "INA",
  independent: true
}, {
  name: "Ivory Coast",
  topLevelDomain: [".ci"],
  alpha2Code: "CI",
  alpha3Code: "CIV",
  callingCodes: ["225"],
  capital: "Yamoussoukro",
  altSpellings: ["CI", "Ivory Coast", "Republic of Côte d'Ivoire", "République de Côte d'Ivoire"],
  subregion: "Western Africa",
  region: "Africa",
  population: 26378275,
  latlng: [8, -5],
  demonym: "Ivorian",
  area: 322463,
  gini: 41.5,
  timezones: ["UTC"],
  borders: ["BFA", "GHA", "GIN", "LBR", "MLI"],
  nativeName: "Côte d'Ivoire",
  numericCode: "384",
  flags: {
    svg: "https://flagcdn.com/ci.svg",
    png: "https://flagcdn.com/w320/ci.png"
  },
  currencies: [{
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Aod an Olifant",
    pt: "Costa do Marfim",
    nl: "Ivoorkust",
    hr: "Obala Bjelokosti",
    fa: "ساحل عاج",
    de: "Elfenbeinküste",
    es: "Costa de Marfil",
    fr: "Côte d'Ivoire",
    ja: "コートジボワール",
    it: "Costa D'Avorio",
    hu: "Elefántcsontpart"
  },
  flag: "https://flagcdn.com/ci.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "CIV",
  independent: true
}, {
  name: "Iran (Islamic Republic of)",
  topLevelDomain: [".ir"],
  alpha2Code: "IR",
  alpha3Code: "IRN",
  callingCodes: ["98"],
  capital: "Tehran",
  altSpellings: ["IR", "Islamic Republic of Iran", "Jomhuri-ye Eslāmi-ye Irān"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 83992953,
  latlng: [32, 53],
  demonym: "Iranian",
  area: 1648195,
  gini: 42,
  timezones: ["UTC+03:30"],
  borders: ["AFG", "ARM", "AZE", "IRQ", "PAK", "TUR", "TKM"],
  nativeName: "ایران",
  numericCode: "364",
  flags: {
    svg: "https://flagcdn.com/ir.svg",
    png: "https://flagcdn.com/w320/ir.png"
  },
  currencies: [{
    code: "IRR",
    name: "Iranian rial",
    symbol: "﷼"
  }],
  languages: [{
    iso639_1: "fa",
    iso639_2: "fas",
    name: "Persian (Farsi)",
    nativeName: "فارسی"
  }],
  translations: {
    br: "Iran",
    pt: "Irão",
    nl: "Iran",
    hr: "Iran",
    fa: "ایران",
    de: "Iran",
    es: "Iran",
    fr: "Iran",
    ja: "イラン・イスラム共和国",
    it: "Iran (Islamic Republic of)",
    hu: "Irán"
  },
  flag: "https://flagcdn.com/ir.svg",
  cioc: "IRI",
  independent: true
}, {
  name: "Iraq",
  topLevelDomain: [".iq"],
  alpha2Code: "IQ",
  alpha3Code: "IRQ",
  callingCodes: ["964"],
  capital: "Baghdad",
  altSpellings: ["IQ", "Republic of Iraq", "Jumhūriyyat al-‘Irāq"],
  subregion: "Western Asia",
  region: "Asia",
  population: 40222503,
  latlng: [33, 44],
  demonym: "Iraqi",
  area: 438317,
  gini: 29.5,
  timezones: ["UTC+03:00"],
  borders: ["IRN", "JOR", "KWT", "SAU", "SYR", "TUR"],
  nativeName: "العراق",
  numericCode: "368",
  flags: {
    svg: "https://flagcdn.com/iq.svg",
    png: "https://flagcdn.com/w320/iq.png"
  },
  currencies: [{
    code: "IQD",
    name: "Iraqi dinar",
    symbol: "ع.د"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }, {
    iso639_1: "ku",
    iso639_2: "kur",
    name: "Kurdish",
    nativeName: "Kurdî"
  }],
  translations: {
    br: "Irak",
    pt: "Iraque",
    nl: "Irak",
    hr: "Irak",
    fa: "عراق",
    de: "Irak",
    es: "Irak",
    fr: "Irak",
    ja: "イラク",
    it: "Iraq",
    hu: "Irak"
  },
  flag: "https://flagcdn.com/iq.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "IRQ",
  independent: true
}, {
  name: "Ireland",
  topLevelDomain: [".ie"],
  alpha2Code: "IE",
  alpha3Code: "IRL",
  callingCodes: ["353"],
  capital: "Dublin",
  altSpellings: ["IE", "Éire", "Republic of Ireland", "Poblacht na hÉireann"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 4994724,
  latlng: [53, -8],
  demonym: "Irish",
  area: 70273,
  gini: 31.4,
  timezones: ["UTC"],
  borders: ["GBR"],
  nativeName: "Éire",
  numericCode: "372",
  flags: {
    svg: "https://flagcdn.com/ie.svg",
    png: "https://flagcdn.com/w320/ie.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "ga",
    iso639_2: "gle",
    name: "Irish",
    nativeName: "Gaeilge"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Iwerzhon",
    pt: "Irlanda",
    nl: "Ierland",
    hr: "Irska",
    fa: "ایرلند",
    de: "Irland",
    es: "Irlanda",
    fr: "Irlande",
    ja: "アイルランド",
    it: "Irlanda",
    hu: "Írország"
  },
  flag: "https://flagcdn.com/ie.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "IRL",
  independent: true
}, {
  name: "Isle of Man",
  topLevelDomain: [".im"],
  alpha2Code: "IM",
  alpha3Code: "IMN",
  callingCodes: ["44"],
  capital: "Douglas",
  altSpellings: ["IM", "Ellan Vannin", "Mann", "Mannin"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 85032,
  latlng: [54.25, -4.5],
  demonym: "Manx",
  area: 572,
  timezones: ["UTC+00:00"],
  nativeName: "Isle of Man",
  numericCode: "833",
  flags: {
    svg: "https://flagcdn.com/im.svg",
    png: "https://flagcdn.com/w320/im.png"
  },
  currencies: [{
    code: "GBP",
    name: "British pound",
    symbol: "£"
  }, {
    code: "IMP[G]",
    name: "Manx pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "gv",
    iso639_2: "glv",
    name: "Manx",
    nativeName: "Gaelg"
  }],
  translations: {
    br: "Enez Vanav",
    pt: "Ilha de Man",
    nl: "Isle of Man",
    hr: "Otok Man",
    fa: "جزیره من",
    de: "Insel Man",
    es: "Isla de Man",
    fr: "Île de Man",
    ja: "マン島",
    it: "Isola di Man",
    hu: "Man"
  },
  flag: "https://flagcdn.com/im.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  independent: false
}, {
  name: "Israel",
  topLevelDomain: [".il"],
  alpha2Code: "IL",
  alpha3Code: "ISR",
  callingCodes: ["972"],
  capital: "Jerusalem",
  altSpellings: ["IL", "State of Israel", "Medīnat Yisrā'el"],
  subregion: "Western Asia",
  region: "Asia",
  population: 9216900,
  latlng: [31.5, 34.75],
  demonym: "Israeli",
  area: 20770,
  gini: 39,
  timezones: ["UTC+02:00"],
  borders: ["EGY", "JOR", "LBN", "SYR"],
  nativeName: "יִשְׂרָאֵל",
  numericCode: "376",
  flags: {
    svg: "https://flagcdn.com/il.svg",
    png: "https://flagcdn.com/w320/il.png"
  },
  currencies: [{
    code: "ILS",
    name: "Israeli new shekel",
    symbol: "₪"
  }],
  languages: [{
    iso639_1: "he",
    iso639_2: "heb",
    name: "Hebrew (modern)",
    nativeName: "עברית"
  }, {
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Israel",
    pt: "Israel",
    nl: "Israël",
    hr: "Izrael",
    fa: "اسرائیل",
    de: "Israel",
    es: "Israel",
    fr: "Israël",
    ja: "イスラエル",
    it: "Israele",
    hu: "Izrael"
  },
  flag: "https://flagcdn.com/il.svg",
  cioc: "ISR",
  independent: true
}, {
  name: "Italy",
  topLevelDomain: [".it"],
  alpha2Code: "IT",
  alpha3Code: "ITA",
  callingCodes: ["39"],
  capital: "Rome",
  altSpellings: ["IT", "Italian Republic", "Repubblica italiana"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 59554023,
  latlng: [42.83333333, 12.83333333],
  demonym: "Italian",
  area: 301336,
  gini: 35.9,
  timezones: ["UTC+01:00"],
  borders: ["AUT", "FRA", "SMR", "SVN", "CHE", "VAT"],
  nativeName: "Italia",
  numericCode: "380",
  flags: {
    svg: "https://flagcdn.com/it.svg",
    png: "https://flagcdn.com/w320/it.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "it",
    iso639_2: "ita",
    name: "Italian",
    nativeName: "Italiano"
  }],
  translations: {
    br: "Italia",
    pt: "Itália",
    nl: "Italië",
    hr: "Italija",
    fa: "ایتالیا",
    de: "Italien",
    es: "Italia",
    fr: "Italie",
    ja: "イタリア",
    it: "Italia",
    hu: "Olaszország"
  },
  flag: "https://flagcdn.com/it.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "ITA",
  independent: true
}, {
  name: "Jamaica",
  topLevelDomain: [".jm"],
  alpha2Code: "JM",
  alpha3Code: "JAM",
  callingCodes: ["1"],
  capital: "Kingston",
  altSpellings: ["JM"],
  subregion: "Caribbean",
  region: "Americas",
  population: 2961161,
  latlng: [18.25, -77.5],
  demonym: "Jamaican",
  area: 10991,
  gini: 45.5,
  timezones: ["UTC-05:00"],
  nativeName: "Jamaica",
  numericCode: "388",
  flags: {
    svg: "https://flagcdn.com/jm.svg",
    png: "https://flagcdn.com/w320/jm.png"
  },
  currencies: [{
    code: "JMD",
    name: "Jamaican dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Jamaika",
    pt: "Jamaica",
    nl: "Jamaica",
    hr: "Jamajka",
    fa: "جامائیکا",
    de: "Jamaika",
    es: "Jamaica",
    fr: "Jamaïque",
    ja: "ジャマイカ",
    it: "Giamaica",
    hu: "Jamaica"
  },
  flag: "https://flagcdn.com/jm.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "JAM",
  independent: true
}, {
  name: "Japan",
  topLevelDomain: [".jp"],
  alpha2Code: "JP",
  alpha3Code: "JPN",
  callingCodes: ["81"],
  capital: "Tokyo",
  altSpellings: ["JP", "Nippon", "Nihon"],
  subregion: "Eastern Asia",
  region: "Asia",
  population: 125836021,
  latlng: [36, 138],
  demonym: "Japanese",
  area: 377930,
  gini: 32.9,
  timezones: ["UTC+09:00"],
  nativeName: "日本",
  numericCode: "392",
  flags: {
    svg: "https://flagcdn.com/jp.svg",
    png: "https://flagcdn.com/w320/jp.png"
  },
  currencies: [{
    code: "JPY",
    name: "Japanese yen",
    symbol: "¥"
  }],
  languages: [{
    iso639_1: "ja",
    iso639_2: "jpn",
    name: "Japanese",
    nativeName: "日本語 (にほんご)"
  }],
  translations: {
    br: "Japan",
    pt: "Japão",
    nl: "Japan",
    hr: "Japan",
    fa: "ژاپن",
    de: "Japan",
    es: "Japón",
    fr: "Japon",
    ja: "日本",
    it: "Giappone",
    hu: "Japán"
  },
  flag: "https://flagcdn.com/jp.svg",
  cioc: "JPN",
  independent: true
}, {
  name: "Jersey",
  topLevelDomain: [".je"],
  alpha2Code: "JE",
  alpha3Code: "JEY",
  callingCodes: ["44"],
  capital: "Saint Helier",
  altSpellings: ["JE", "Bailiwick of Jersey", "Bailliage de Jersey", "Bailliage dé Jèrri"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 100800,
  latlng: [49.25, -2.16666666],
  demonym: "Channel Islander",
  area: 116,
  timezones: ["UTC+01:00"],
  nativeName: "Jersey",
  numericCode: "832",
  flags: {
    svg: "https://flagcdn.com/je.svg",
    png: "https://flagcdn.com/w320/je.png"
  },
  currencies: [{
    code: "GBP",
    name: "British pound",
    symbol: "£"
  }, {
    code: "JEP[G]",
    name: "Jersey pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Jerzenez",
    pt: "Jersey",
    nl: "Jersey",
    hr: "Jersey",
    fa: "جرزی",
    de: "Jersey",
    es: "Jersey",
    fr: "Jersey",
    ja: "ジャージー",
    it: "Isola di Jersey",
    hu: "Jersey"
  },
  flag: "https://flagcdn.com/je.svg",
  independent: false
}, {
  name: "Jordan",
  topLevelDomain: [".jo"],
  alpha2Code: "JO",
  alpha3Code: "JOR",
  callingCodes: ["962"],
  capital: "Amman",
  altSpellings: ["JO", "Hashemite Kingdom of Jordan", "al-Mamlakah al-Urdunīyah al-Hāshimīyah"],
  subregion: "Western Asia",
  region: "Asia",
  population: 10203140,
  latlng: [31, 36],
  demonym: "Jordanian",
  area: 89342,
  gini: 33.7,
  timezones: ["UTC+03:00"],
  borders: ["IRQ", "ISR", "SAU", "SYR"],
  nativeName: "الأردن",
  numericCode: "400",
  flags: {
    svg: "https://flagcdn.com/jo.svg",
    png: "https://flagcdn.com/w320/jo.png"
  },
  currencies: [{
    code: "JOD",
    name: "Jordanian dinar",
    symbol: "د.ا"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Jordania",
    pt: "Jordânia",
    nl: "Jordanië",
    hr: "Jordan",
    fa: "اردن",
    de: "Jordanien",
    es: "Jordania",
    fr: "Jordanie",
    ja: "ヨルダン",
    it: "Giordania",
    hu: "Jordánia"
  },
  flag: "https://flagcdn.com/jo.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "JOR",
  independent: true
}, {
  name: "Kazakhstan",
  topLevelDomain: [".kz", ".қаз"],
  alpha2Code: "KZ",
  alpha3Code: "KAZ",
  callingCodes: ["76", "77"],
  capital: "Nur-Sultan",
  altSpellings: ["KZ", "Qazaqstan", "Казахстан", "Republic of Kazakhstan", "Қазақстан Республикасы", "Qazaqstan Respublïkası", "Республика Казахстан", "Respublika Kazakhstan"],
  subregion: "Central Asia",
  region: "Asia",
  population: 18754440,
  latlng: [48, 68],
  demonym: "Kazakhstani",
  area: 2724900,
  gini: 27.8,
  timezones: ["UTC+05:00", "UTC+06:00"],
  borders: ["CHN", "KGZ", "RUS", "TKM", "UZB"],
  nativeName: "Қазақстан",
  numericCode: "398",
  flags: {
    svg: "https://flagcdn.com/kz.svg",
    png: "https://flagcdn.com/w320/kz.png"
  },
  currencies: [{
    code: "KZT",
    name: "Kazakhstani tenge",
    symbol: "₸"
  }],
  languages: [{
    iso639_1: "kk",
    iso639_2: "kaz",
    name: "Kazakh",
    nativeName: "қазақ тілі"
  }, {
    iso639_1: "ru",
    iso639_2: "rus",
    name: "Russian",
    nativeName: "Русский"
  }],
  translations: {
    br: "Kazakstan",
    pt: "Cazaquistão",
    nl: "Kazachstan",
    hr: "Kazahstan",
    fa: "قزاقستان",
    de: "Kasachstan",
    es: "Kazajistán",
    fr: "Kazakhstan",
    ja: "カザフスタン",
    it: "Kazakistan",
    hu: "Kazahsztán"
  },
  flag: "https://flagcdn.com/kz.svg",
  regionalBlocs: [{
    acronym: "EEU",
    name: "Eurasian Economic Union",
    otherAcronyms: ["EAEU"]
  }],
  cioc: "KAZ",
  independent: true
}, {
  name: "Kenya",
  topLevelDomain: [".ke"],
  alpha2Code: "KE",
  alpha3Code: "KEN",
  callingCodes: ["254"],
  capital: "Nairobi",
  altSpellings: ["KE", "Republic of Kenya", "Jamhuri ya Kenya"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 53771300,
  latlng: [1, 38],
  demonym: "Kenyan",
  area: 580367,
  gini: 40.8,
  timezones: ["UTC+03:00"],
  borders: ["ETH", "SOM", "SSD", "TZA", "UGA"],
  nativeName: "Kenya",
  numericCode: "404",
  flags: {
    svg: "https://flagcdn.com/ke.svg",
    png: "https://flagcdn.com/w320/ke.png"
  },
  currencies: [{
    code: "KES",
    name: "Kenyan shilling",
    symbol: "Sh"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "sw",
    iso639_2: "swa",
    name: "Swahili",
    nativeName: "Kiswahili"
  }],
  translations: {
    br: "Kenya",
    pt: "Quénia",
    nl: "Kenia",
    hr: "Kenija",
    fa: "کنیا",
    de: "Kenia",
    es: "Kenia",
    fr: "Kenya",
    ja: "ケニア",
    it: "Kenya",
    hu: "Kenya"
  },
  flag: "https://flagcdn.com/ke.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "KEN",
  independent: true
}, {
  name: "Kiribati",
  topLevelDomain: [".ki"],
  alpha2Code: "KI",
  alpha3Code: "KIR",
  callingCodes: ["686"],
  capital: "South Tarawa",
  altSpellings: ["KI", "Republic of Kiribati", "Ribaberiki Kiribati"],
  subregion: "Micronesia",
  region: "Oceania",
  population: 119446,
  latlng: [1.41666666, 173],
  demonym: "I-Kiribati",
  area: 811,
  gini: 37,
  timezones: ["UTC+12:00", "UTC+13:00", "UTC+14:00"],
  nativeName: "Kiribati",
  numericCode: "296",
  flags: {
    svg: "https://flagcdn.com/ki.svg",
    png: "https://flagcdn.com/w320/ki.png"
  },
  currencies: [{
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  }, {
    code: "KID",
    name: "Kiribati dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Kiribati",
    pt: "Quiribáti",
    nl: "Kiribati",
    hr: "Kiribati",
    fa: "کیریباتی",
    de: "Kiribati",
    es: "Kiribati",
    fr: "Kiribati",
    ja: "キリバス",
    it: "Kiribati",
    hu: "Kiribati"
  },
  flag: "https://flagcdn.com/ki.svg",
  cioc: "KIR",
  independent: true
}, {
  name: "Kuwait",
  topLevelDomain: [".kw"],
  alpha2Code: "KW",
  alpha3Code: "KWT",
  callingCodes: ["965"],
  capital: "Kuwait City",
  altSpellings: ["KW", "State of Kuwait", "Dawlat al-Kuwait"],
  subregion: "Western Asia",
  region: "Asia",
  population: 4270563,
  latlng: [29.5, 45.75],
  demonym: "Kuwaiti",
  area: 17818,
  timezones: ["UTC+03:00"],
  borders: ["IRQ", "SAU"],
  nativeName: "الكويت",
  numericCode: "414",
  flags: {
    svg: "https://flagcdn.com/kw.svg",
    png: "https://flagcdn.com/w320/kw.png"
  },
  currencies: [{
    code: "KWD",
    name: "Kuwaiti dinar",
    symbol: "د.ك"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Koweit",
    pt: "Kuwait",
    nl: "Koeweit",
    hr: "Kuvajt",
    fa: "کویت",
    de: "Kuwait",
    es: "Kuwait",
    fr: "Koweït",
    ja: "クウェート",
    it: "Kuwait",
    hu: "Kuvait"
  },
  flag: "https://flagcdn.com/kw.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "KUW",
  independent: true
}, {
  name: "Kyrgyzstan",
  topLevelDomain: [".kg"],
  alpha2Code: "KG",
  alpha3Code: "KGZ",
  callingCodes: ["996"],
  capital: "Bishkek",
  altSpellings: ["KG", "Киргизия", "Kyrgyz Republic", "Кыргыз Республикасы", "Kyrgyz Respublikasy"],
  subregion: "Central Asia",
  region: "Asia",
  population: 6591600,
  latlng: [41, 75],
  demonym: "Kirghiz",
  area: 199951,
  gini: 29.7,
  timezones: ["UTC+06:00"],
  borders: ["CHN", "KAZ", "TJK", "UZB"],
  nativeName: "Кыргызстан",
  numericCode: "417",
  flags: {
    svg: "https://flagcdn.com/kg.svg",
    png: "https://flagcdn.com/w320/kg.png"
  },
  currencies: [{
    code: "KGS",
    name: "Kyrgyzstani som",
    symbol: "с"
  }],
  languages: [{
    iso639_1: "ky",
    iso639_2: "kir",
    name: "Kyrgyz",
    nativeName: "Кыргызча"
  }, {
    iso639_1: "ru",
    iso639_2: "rus",
    name: "Russian",
    nativeName: "Русский"
  }],
  translations: {
    br: "Kirgizstan",
    pt: "Quirguizistão",
    nl: "Kirgizië",
    hr: "Kirgistan",
    fa: "قرقیزستان",
    de: "Kirgisistan",
    es: "Kirguizistán",
    fr: "Kirghizistan",
    ja: "キルギス",
    it: "Kirghizistan",
    hu: "Kirgizisztán"
  },
  flag: "https://flagcdn.com/kg.svg",
  regionalBlocs: [{
    acronym: "EEU",
    name: "Eurasian Economic Union",
    otherAcronyms: ["EAEU"]
  }],
  cioc: "KGZ",
  independent: true
}, {
  name: "Lao People's Democratic Republic",
  topLevelDomain: [".la"],
  alpha2Code: "LA",
  alpha3Code: "LAO",
  callingCodes: ["856"],
  capital: "Vientiane",
  altSpellings: ["LA", "Lao", "Laos", "Lao People's Democratic Republic", "Sathalanalat Paxathipatai Paxaxon Lao"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 7275556,
  latlng: [18, 105],
  demonym: "Laotian",
  area: 236800,
  gini: 38.8,
  timezones: ["UTC+07:00"],
  borders: ["MMR", "KHM", "CHN", "THA", "VNM"],
  nativeName: "ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ",
  numericCode: "418",
  flags: {
    svg: "https://flagcdn.com/la.svg",
    png: "https://flagcdn.com/w320/la.png"
  },
  currencies: [{
    code: "LAK",
    name: "Lao kip",
    symbol: "₭"
  }],
  languages: [{
    iso639_1: "lo",
    iso639_2: "lao",
    name: "Lao",
    nativeName: "ພາສາລາວ"
  }],
  translations: {
    br: "Laos",
    pt: "Laos",
    nl: "Laos",
    hr: "Laos",
    fa: "لائوس",
    de: "Laos",
    es: "Laos",
    fr: "Laos",
    ja: "ラオス人民民主共和国",
    it: "Laos",
    hu: "Laosz"
  },
  flag: "https://flagcdn.com/la.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "LAO",
  independent: true
}, {
  name: "Latvia",
  topLevelDomain: [".lv"],
  alpha2Code: "LV",
  alpha3Code: "LVA",
  callingCodes: ["371"],
  capital: "Riga",
  altSpellings: ["LV", "Republic of Latvia", "Latvijas Republika"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 1901548,
  latlng: [57, 25],
  demonym: "Latvian",
  area: 64559,
  gini: 35.1,
  timezones: ["UTC+02:00"],
  borders: ["BLR", "EST", "LTU", "RUS"],
  nativeName: "Latvija",
  numericCode: "428",
  flags: {
    svg: "https://flagcdn.com/lv.svg",
    png: "https://flagcdn.com/w320/lv.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "lv",
    iso639_2: "lav",
    name: "Latvian",
    nativeName: "latviešu valoda"
  }],
  translations: {
    br: "Latvia",
    pt: "Letónia",
    nl: "Letland",
    hr: "Latvija",
    fa: "لتونی",
    de: "Lettland",
    es: "Letonia",
    fr: "Lettonie",
    ja: "ラトビア",
    it: "Lettonia",
    hu: "Lettország"
  },
  flag: "https://flagcdn.com/lv.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "LAT",
  independent: true
}, {
  name: "Lebanon",
  topLevelDomain: [".lb"],
  alpha2Code: "LB",
  alpha3Code: "LBN",
  callingCodes: ["961"],
  capital: "Beirut",
  altSpellings: ["LB", "Lebanese Republic", "Al-Jumhūrīyah Al-Libnānīyah"],
  subregion: "Western Asia",
  region: "Asia",
  population: 6825442,
  latlng: [33.83333333, 35.83333333],
  demonym: "Lebanese",
  area: 10452,
  gini: 31.8,
  timezones: ["UTC+02:00"],
  borders: ["ISR", "SYR"],
  nativeName: "لبنان",
  numericCode: "422",
  flags: {
    svg: "https://flagcdn.com/lb.svg",
    png: "https://flagcdn.com/w320/lb.png"
  },
  currencies: [{
    code: "LBP",
    name: "Lebanese pound",
    symbol: "ل.ل"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Liban",
    pt: "Líbano",
    nl: "Libanon",
    hr: "Libanon",
    fa: "لبنان",
    de: "Libanon",
    es: "Líbano",
    fr: "Liban",
    ja: "レバノン",
    it: "Libano",
    hu: "Libanon"
  },
  flag: "https://flagcdn.com/lb.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "LIB",
  independent: true
}, {
  name: "Lesotho",
  topLevelDomain: [".ls"],
  alpha2Code: "LS",
  alpha3Code: "LSO",
  callingCodes: ["266"],
  capital: "Maseru",
  altSpellings: ["LS", "Kingdom of Lesotho", "Muso oa Lesotho"],
  subregion: "Southern Africa",
  region: "Africa",
  population: 2142252,
  latlng: [-29.5, 28.5],
  demonym: "Mosotho",
  area: 30355,
  gini: 44.9,
  timezones: ["UTC+02:00"],
  borders: ["ZAF"],
  nativeName: "Lesotho",
  numericCode: "426",
  flags: {
    svg: "https://flagcdn.com/ls.svg",
    png: "https://flagcdn.com/w320/ls.png"
  },
  currencies: [{
    code: "LSL",
    name: "Lesotho loti",
    symbol: "L"
  }, {
    code: "ZAR",
    name: "South African rand",
    symbol: "R"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "st",
    iso639_2: "sot",
    name: "Southern Sotho",
    nativeName: "Sesotho"
  }],
  translations: {
    br: "Lesotho",
    pt: "Lesoto",
    nl: "Lesotho",
    hr: "Lesoto",
    fa: "لسوتو",
    de: "Lesotho",
    es: "Lesotho",
    fr: "Lesotho",
    ja: "レソト",
    it: "Lesotho",
    hu: "Lesotho"
  },
  flag: "https://flagcdn.com/ls.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "LES",
  independent: true
}, {
  name: "Liberia",
  topLevelDomain: [".lr"],
  alpha2Code: "LR",
  alpha3Code: "LBR",
  callingCodes: ["231"],
  capital: "Monrovia",
  altSpellings: ["LR", "Republic of Liberia"],
  subregion: "Western Africa",
  region: "Africa",
  population: 5057677,
  latlng: [6.5, -9.5],
  demonym: "Liberian",
  area: 111369,
  gini: 35.3,
  timezones: ["UTC"],
  borders: ["GIN", "CIV", "SLE"],
  nativeName: "Liberia",
  numericCode: "430",
  flags: {
    svg: "https://flagcdn.com/lr.svg",
    png: "https://flagcdn.com/w320/lr.png"
  },
  currencies: [{
    code: "LRD",
    name: "Liberian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Liberia",
    pt: "Libéria",
    nl: "Liberia",
    hr: "Liberija",
    fa: "لیبریا",
    de: "Liberia",
    es: "Liberia",
    fr: "Liberia",
    ja: "リベリア",
    it: "Liberia",
    hu: "Libéria"
  },
  flag: "https://flagcdn.com/lr.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "LBR",
  independent: true
}, {
  name: "Libya",
  topLevelDomain: [".ly"],
  alpha2Code: "LY",
  alpha3Code: "LBY",
  callingCodes: ["218"],
  capital: "Tripoli",
  altSpellings: ["LY", "State of Libya", "Dawlat Libya"],
  subregion: "Northern Africa",
  region: "Africa",
  population: 6871287,
  latlng: [25, 17],
  demonym: "Libyan",
  area: 1759540,
  timezones: ["UTC+01:00"],
  borders: ["DZA", "TCD", "EGY", "NER", "SDN", "TUN"],
  nativeName: "‏ليبيا",
  numericCode: "434",
  flags: {
    svg: "https://flagcdn.com/ly.svg",
    png: "https://flagcdn.com/w320/ly.png"
  },
  currencies: [{
    code: "LYD",
    name: "Libyan dinar",
    symbol: "ل.د"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Libia",
    pt: "Líbia",
    nl: "Libië",
    hr: "Libija",
    fa: "لیبی",
    de: "Libyen",
    es: "Libia",
    fr: "Libye",
    ja: "リビア",
    it: "Libia",
    hu: "Líbia"
  },
  flag: "https://flagcdn.com/ly.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "LBA",
  independent: true
}, {
  name: "Liechtenstein",
  topLevelDomain: [".li"],
  alpha2Code: "LI",
  alpha3Code: "LIE",
  callingCodes: ["423"],
  capital: "Vaduz",
  altSpellings: ["LI", "Principality of Liechtenstein", "Fürstentum Liechtenstein"],
  subregion: "Central Europe",
  region: "Europe",
  population: 38137,
  latlng: [47.26666666, 9.53333333],
  demonym: "Liechtensteiner",
  area: 160,
  timezones: ["UTC+01:00"],
  borders: ["AUT", "CHE"],
  nativeName: "Liechtenstein",
  numericCode: "438",
  flags: {
    svg: "https://flagcdn.com/li.svg",
    png: "https://flagcdn.com/w320/li.png"
  },
  currencies: [{
    code: "CHF",
    name: "Swiss franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "de",
    iso639_2: "deu",
    name: "German",
    nativeName: "Deutsch"
  }],
  translations: {
    br: "Liechtenstein",
    pt: "Listenstaine",
    nl: "Liechtenstein",
    hr: "Lihtenštajn",
    fa: "لیختن‌اشتاین",
    de: "Liechtenstein",
    es: "Liechtenstein",
    fr: "Liechtenstein",
    ja: "リヒテンシュタイン",
    it: "Liechtenstein",
    hu: "Liechtenstein"
  },
  flag: "https://flagcdn.com/li.svg",
  regionalBlocs: [{
    acronym: "EFTA",
    name: "European Free Trade Association"
  }],
  cioc: "LIE",
  independent: true
}, {
  name: "Lithuania",
  topLevelDomain: [".lt"],
  alpha2Code: "LT",
  alpha3Code: "LTU",
  callingCodes: ["370"],
  capital: "Vilnius",
  altSpellings: ["LT", "Republic of Lithuania", "Lietuvos Respublika"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 2794700,
  latlng: [56, 24],
  demonym: "Lithuanian",
  area: 65300,
  gini: 35.7,
  timezones: ["UTC+02:00"],
  borders: ["BLR", "LVA", "POL", "RUS"],
  nativeName: "Lietuva",
  numericCode: "440",
  flags: {
    svg: "https://flagcdn.com/lt.svg",
    png: "https://flagcdn.com/w320/lt.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "lt",
    iso639_2: "lit",
    name: "Lithuanian",
    nativeName: "lietuvių kalba"
  }],
  translations: {
    br: "Lituania",
    pt: "Lituânia",
    nl: "Litouwen",
    hr: "Litva",
    fa: "لیتوانی",
    de: "Litauen",
    es: "Lituania",
    fr: "Lituanie",
    ja: "リトアニア",
    it: "Lituania",
    hu: "Litvánia"
  },
  flag: "https://flagcdn.com/lt.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "LTU",
  independent: true
}, {
  name: "Luxembourg",
  topLevelDomain: [".lu"],
  alpha2Code: "LU",
  alpha3Code: "LUX",
  callingCodes: ["352"],
  capital: "Luxembourg",
  altSpellings: ["LU", "Grand Duchy of Luxembourg", "Grand-Duché de Luxembourg", "Großherzogtum Luxemburg", "Groussherzogtum Lëtzebuerg"],
  subregion: "Western Europe",
  region: "Europe",
  population: 632275,
  latlng: [49.75, 6.16666666],
  demonym: "Luxembourger",
  area: 2586,
  gini: 35.4,
  timezones: ["UTC+01:00"],
  borders: ["BEL", "FRA", "DEU"],
  nativeName: "Lëtzebuerg",
  numericCode: "442",
  flags: {
    svg: "https://flagcdn.com/lu.svg",
    png: "https://flagcdn.com/w320/lu.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "de",
    iso639_2: "deu",
    name: "German",
    nativeName: "Deutsch"
  }, {
    iso639_1: "lb",
    iso639_2: "ltz",
    name: "Luxembourgish",
    nativeName: "Lëtzebuergesch"
  }],
  translations: {
    br: "Luksembourg",
    pt: "Luxemburgo",
    nl: "Luxemburg",
    hr: "Luksemburg",
    fa: "لوکزامبورگ",
    de: "Luxemburg",
    es: "Luxemburgo",
    fr: "Luxembourg",
    ja: "ルクセンブルク",
    it: "Lussemburgo",
    hu: "Luxemburg"
  },
  flag: "https://flagcdn.com/lu.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "LUX",
  independent: true
}, {
  name: "Macao",
  topLevelDomain: [".mo"],
  alpha2Code: "MO",
  alpha3Code: "MAC",
  callingCodes: ["853"],
  altSpellings: ["MO", "澳门", "Macao Special Administrative Region of the People's Republic of China", "中華人民共和國澳門特別行政區", "Região Administrativa Especial de Macau da República Popular da China"],
  subregion: "Eastern Asia",
  region: "Asia",
  population: 649342,
  latlng: [22.16666666, 113.55],
  demonym: "Chinese",
  area: 30,
  timezones: ["UTC+08:00"],
  borders: ["CHN"],
  nativeName: "澳門",
  numericCode: "446",
  flags: {
    svg: "https://flagcdn.com/mo.svg",
    png: "https://flagcdn.com/w320/mo.png"
  },
  currencies: [{
    code: "MOP",
    name: "Macanese pataca",
    symbol: "P"
  }],
  languages: [{
    iso639_1: "zh",
    iso639_2: "zho",
    name: "Chinese",
    nativeName: "中文 (Zhōngwén)"
  }, {
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }],
  translations: {
    br: "Makao",
    pt: "Macau",
    nl: "Macao",
    hr: "Makao",
    fa: "مکائو",
    de: "Macao",
    es: "Macao",
    fr: "Macao",
    ja: "マカオ",
    it: "Macao",
    hu: "Makaó"
  },
  flag: "https://flagcdn.com/mo.svg",
  independent: false
}, {
  name: "North Macedonia",
  topLevelDomain: [".mk"],
  alpha2Code: "MK",
  alpha3Code: "MKD",
  callingCodes: ["389"],
  capital: "Skopje",
  altSpellings: ["MK", "Republic of Macedonia", "Република Македонија"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 2083380,
  latlng: [41.83333333, 22],
  demonym: "Macedonian",
  area: 25713,
  gini: 33,
  timezones: ["UTC+01:00"],
  borders: ["ALB", "BGR", "GRC", "UNK", "SRB"],
  nativeName: "Македонија",
  numericCode: "807",
  flags: {
    svg: "https://flagcdn.com/mk.svg",
    png: "https://flagcdn.com/w320/mk.png"
  },
  currencies: [{
    code: "MKD",
    name: "Macedonian denar",
    symbol: "ден"
  }],
  languages: [{
    iso639_1: "mk",
    iso639_2: "mkd",
    name: "Macedonian",
    nativeName: "македонски јазик"
  }],
  translations: {
    br: "Makedonia an Norzh",
    pt: "Macedónia",
    nl: "Macedonië",
    hr: "Makedonija",
    de: "Mazedonien",
    es: "Macedonia",
    fr: "Macédoine",
    ja: "マケドニア旧ユーゴスラビア共和国",
    it: "Macedonia",
    hu: "Macedónia"
  },
  flag: "https://flagcdn.com/mk.svg",
  regionalBlocs: [{
    acronym: "CEFTA",
    name: "Central European Free Trade Agreement"
  }],
  cioc: "MKD",
  independent: true
}, {
  name: "Madagascar",
  topLevelDomain: [".mg"],
  alpha2Code: "MG",
  alpha3Code: "MDG",
  callingCodes: ["261"],
  capital: "Antananarivo",
  altSpellings: ["MG", "Republic of Madagascar", "Repoblikan'i Madagasikara", "République de Madagascar"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 27691019,
  latlng: [-20, 47],
  demonym: "Malagasy",
  area: 587041,
  gini: 42.6,
  timezones: ["UTC+03:00"],
  nativeName: "Madagasikara",
  numericCode: "450",
  flags: {
    svg: "https://flagcdn.com/mg.svg",
    png: "https://flagcdn.com/w320/mg.png"
  },
  currencies: [{
    code: "MGA",
    name: "Malagasy ariary",
    symbol: "Ar"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "mg",
    iso639_2: "mlg",
    name: "Malagasy",
    nativeName: "fiteny malagasy"
  }],
  translations: {
    br: "Madagaskar",
    pt: "Madagáscar",
    nl: "Madagaskar",
    hr: "Madagaskar",
    fa: "ماداگاسکار",
    de: "Madagaskar",
    es: "Madagascar",
    fr: "Madagascar",
    ja: "マダガスカル",
    it: "Madagascar",
    hu: "Madagaszkár"
  },
  flag: "https://flagcdn.com/mg.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "MAD",
  independent: true
}, {
  name: "Malawi",
  topLevelDomain: [".mw"],
  alpha2Code: "MW",
  alpha3Code: "MWI",
  callingCodes: ["265"],
  capital: "Lilongwe",
  altSpellings: ["MW", "Republic of Malawi"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 19129955,
  latlng: [-13.5, 34],
  demonym: "Malawian",
  area: 118484,
  gini: 44.7,
  timezones: ["UTC+02:00"],
  borders: ["MOZ", "TZA", "ZMB"],
  nativeName: "Malawi",
  numericCode: "454",
  flags: {
    svg: "https://flagcdn.com/mw.svg",
    png: "https://flagcdn.com/w320/mw.png"
  },
  currencies: [{
    code: "MWK",
    name: "Malawian kwacha",
    symbol: "MK"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "ny",
    iso639_2: "nya",
    name: "Chichewa",
    nativeName: "chiCheŵa"
  }],
  translations: {
    br: "Malawi",
    pt: "Malávi",
    nl: "Malawi",
    hr: "Malavi",
    fa: "مالاوی",
    de: "Malawi",
    es: "Malawi",
    fr: "Malawi",
    ja: "マラウイ",
    it: "Malawi",
    hu: "Malawi"
  },
  flag: "https://flagcdn.com/mw.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "MAW",
  independent: true
}, {
  name: "Malaysia",
  topLevelDomain: [".my"],
  alpha2Code: "MY",
  alpha3Code: "MYS",
  callingCodes: ["60"],
  capital: "Kuala Lumpur",
  altSpellings: ["MY"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 32365998,
  latlng: [2.5, 112.5],
  demonym: "Malaysian",
  area: 330803,
  gini: 41.1,
  timezones: ["UTC+08:00"],
  borders: ["BRN", "IDN", "THA"],
  nativeName: "Malaysia",
  numericCode: "458",
  flags: {
    svg: "https://flagcdn.com/my.svg",
    png: "https://flagcdn.com/w320/my.png"
  },
  currencies: [{
    code: "MYR",
    name: "Malaysian ringgit",
    symbol: "RM"
  }],
  languages: [{
    iso639_1: "ms",
    iso639_2: "zsm",
    name: "Malaysian",
    nativeName: "بهاس مليسيا"
  }],
  translations: {
    br: "Malaysia",
    pt: "Malásia",
    nl: "Maleisië",
    hr: "Malezija",
    fa: "مالزی",
    de: "Malaysia",
    es: "Malasia",
    fr: "Malaisie",
    ja: "マレーシア",
    it: "Malesia",
    hu: "Malajzia"
  },
  flag: "https://flagcdn.com/my.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "MAS",
  independent: true
}, {
  name: "Maldives",
  topLevelDomain: [".mv"],
  alpha2Code: "MV",
  alpha3Code: "MDV",
  callingCodes: ["960"],
  capital: "Malé",
  altSpellings: ["MV", "Maldive Islands", "Republic of the Maldives", "Dhivehi Raajjeyge Jumhooriyya"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 540542,
  latlng: [3.25, 73],
  demonym: "Maldivan",
  area: 300,
  gini: 31.3,
  timezones: ["UTC+05:00"],
  nativeName: "Maldives",
  numericCode: "462",
  flags: {
    svg: "https://flagcdn.com/mv.svg",
    png: "https://flagcdn.com/w320/mv.png"
  },
  currencies: [{
    code: "MVR",
    name: "Maldivian rufiyaa",
    symbol: ".ރ"
  }],
  languages: [{
    iso639_1: "dv",
    iso639_2: "div",
    name: "Divehi",
    nativeName: "ދިވެހި"
  }],
  translations: {
    br: "Maldivez",
    pt: "Maldivas",
    nl: "Maldiven",
    hr: "Maldivi",
    fa: "مالدیو",
    de: "Malediven",
    es: "Maldivas",
    fr: "Maldives",
    ja: "モルディブ",
    it: "Maldive",
    hu: "Maldív-szigetek"
  },
  flag: "https://flagcdn.com/mv.svg",
  regionalBlocs: [{
    acronym: "SAARC",
    name: "South Asian Association for Regional Cooperation"
  }],
  cioc: "MDV",
  independent: true
}, {
  name: "Mali",
  topLevelDomain: [".ml"],
  alpha2Code: "ML",
  alpha3Code: "MLI",
  callingCodes: ["223"],
  capital: "Bamako",
  altSpellings: ["ML", "Republic of Mali", "République du Mali"],
  subregion: "Western Africa",
  region: "Africa",
  population: 20250834,
  latlng: [17, -4],
  demonym: "Malian",
  area: 1240192,
  gini: 33,
  timezones: ["UTC"],
  borders: ["DZA", "BFA", "GIN", "CIV", "MRT", "NER", "SEN"],
  nativeName: "Mali",
  numericCode: "466",
  flags: {
    svg: "https://flagcdn.com/ml.svg",
    png: "https://flagcdn.com/w320/ml.png"
  },
  currencies: [{
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Mali",
    pt: "Mali",
    nl: "Mali",
    hr: "Mali",
    fa: "مالی",
    de: "Mali",
    es: "Mali",
    fr: "Mali",
    ja: "マリ",
    it: "Mali",
    hu: "Mali"
  },
  flag: "https://flagcdn.com/ml.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "MLI",
  independent: true
}, {
  name: "Malta",
  topLevelDomain: [".mt"],
  alpha2Code: "MT",
  alpha3Code: "MLT",
  callingCodes: ["356"],
  capital: "Valletta",
  altSpellings: ["MT", "Republic of Malta", "Repubblika ta' Malta"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 525285,
  latlng: [35.83333333, 14.58333333],
  demonym: "Maltese",
  area: 316,
  gini: 28.7,
  timezones: ["UTC+01:00"],
  nativeName: "Malta",
  numericCode: "470",
  flags: {
    svg: "https://flagcdn.com/mt.svg",
    png: "https://flagcdn.com/w320/mt.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "mt",
    iso639_2: "mlt",
    name: "Maltese",
    nativeName: "Malti"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Malta",
    pt: "Malta",
    nl: "Malta",
    hr: "Malta",
    fa: "مالت",
    de: "Malta",
    es: "Malta",
    fr: "Malte",
    ja: "マルタ",
    it: "Malta",
    hu: "Málta"
  },
  flag: "https://flagcdn.com/mt.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "MLT",
  independent: true
}, {
  name: "Marshall Islands",
  topLevelDomain: [".mh"],
  alpha2Code: "MH",
  alpha3Code: "MHL",
  callingCodes: ["692"],
  capital: "Majuro",
  altSpellings: ["MH", "Republic of the Marshall Islands", "Aolepān Aorōkin M̧ajeļ"],
  subregion: "Micronesia",
  region: "Oceania",
  population: 59194,
  latlng: [9, 168],
  demonym: "Marshallese",
  area: 181,
  timezones: ["UTC+12:00"],
  nativeName: "M̧ajeļ",
  numericCode: "584",
  flags: {
    svg: "https://flagcdn.com/mh.svg",
    png: "https://flagcdn.com/w320/mh.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "mh",
    iso639_2: "mah",
    name: "Marshallese",
    nativeName: "Kajin M̧ajeļ"
  }],
  translations: {
    br: "Inizi Marshall",
    pt: "Ilhas Marshall",
    nl: "Marshalleilanden",
    hr: "Maršalovi Otoci",
    fa: "جزایر مارشال",
    de: "Marshallinseln",
    es: "Islas Marshall",
    fr: "Îles Marshall",
    ja: "マーシャル諸島",
    it: "Isole Marshall",
    hu: "Marshall-szigetek"
  },
  flag: "https://flagcdn.com/mh.svg",
  cioc: "MHL",
  independent: true
}, {
  name: "Martinique",
  topLevelDomain: [".mq"],
  alpha2Code: "MQ",
  alpha3Code: "MTQ",
  callingCodes: ["596"],
  capital: "Fort-de-France",
  altSpellings: ["MQ"],
  subregion: "Caribbean",
  region: "Americas",
  population: 378243,
  latlng: [14.666667, -61],
  demonym: "French",
  timezones: ["UTC-04:00"],
  nativeName: "Martinique",
  numericCode: "474",
  flags: {
    svg: "https://flagcdn.com/mq.svg",
    png: "https://flagcdn.com/w320/mq.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Martinik",
    pt: "Martinica",
    nl: "Martinique",
    hr: "Martinique",
    fa: "مونتسرات",
    de: "Martinique",
    es: "Martinica",
    fr: "Martinique",
    ja: "マルティニーク",
    it: "Martinica",
    hu: "Martinique"
  },
  flag: "https://flagcdn.com/mq.svg",
  independent: false
}, {
  name: "Mauritania",
  topLevelDomain: [".mr"],
  alpha2Code: "MR",
  alpha3Code: "MRT",
  callingCodes: ["222"],
  capital: "Nouakchott",
  altSpellings: ["MR", "Islamic Republic of Mauritania", "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"],
  subregion: "Western Africa",
  region: "Africa",
  population: 4649660,
  latlng: [20, -12],
  demonym: "Mauritanian",
  area: 1030700,
  gini: 32.6,
  timezones: ["UTC"],
  borders: ["DZA", "MLI", "SEN", "ESH"],
  nativeName: "موريتانيا",
  numericCode: "478",
  flags: {
    svg: "https://flagcdn.com/mr.svg",
    png: "https://flagcdn.com/w320/mr.png"
  },
  currencies: [{
    code: "MRO",
    name: "Mauritanian ouguiya",
    symbol: "UM"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Maouritania",
    pt: "Mauritânia",
    nl: "Mauritanië",
    hr: "Mauritanija",
    fa: "موریتانی",
    de: "Mauretanien",
    es: "Mauritania",
    fr: "Mauritanie",
    ja: "モーリタニア",
    it: "Mauritania",
    hu: "Mauritánia"
  },
  flag: "https://flagcdn.com/mr.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "MTN",
  independent: true
}, {
  name: "Mauritius",
  topLevelDomain: [".mu"],
  alpha2Code: "MU",
  alpha3Code: "MUS",
  callingCodes: ["230"],
  capital: "Port Louis",
  altSpellings: ["MU", "Republic of Mauritius", "République de Maurice"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 1265740,
  latlng: [-20.28333333, 57.55],
  demonym: "Mauritian",
  area: 2040,
  gini: 36.8,
  timezones: ["UTC+04:00"],
  nativeName: "Maurice",
  numericCode: "480",
  flags: {
    svg: "https://flagcdn.com/mu.svg",
    png: "https://flagcdn.com/w320/mu.png"
  },
  currencies: [{
    code: "MUR",
    name: "Mauritian rupee",
    symbol: "₨"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Moris",
    pt: "Maurícia",
    nl: "Mauritius",
    hr: "Mauricijus",
    fa: "موریس",
    de: "Mauritius",
    es: "Mauricio",
    fr: "Île Maurice",
    ja: "モーリシャス",
    it: "Mauritius",
    hu: "Mauritius"
  },
  flag: "https://flagcdn.com/mu.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "MRI",
  independent: true
}, {
  name: "Mayotte",
  topLevelDomain: [".yt"],
  alpha2Code: "YT",
  alpha3Code: "MYT",
  callingCodes: ["262"],
  capital: "Mamoudzou",
  altSpellings: ["YT", "Department of Mayotte", "Département de Mayotte"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 226915,
  latlng: [-12.83333333, 45.16666666],
  demonym: "French",
  timezones: ["UTC+03:00"],
  nativeName: "Mayotte",
  numericCode: "175",
  flags: {
    svg: "https://flagcdn.com/yt.svg",
    png: "https://flagcdn.com/w320/yt.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Mayotte",
    pt: "Mayotte",
    nl: "Mayotte",
    hr: "Mayotte",
    fa: "مایوت",
    de: "Mayotte",
    es: "Mayotte",
    fr: "Mayotte",
    ja: "マヨット",
    it: "Mayotte",
    hu: "Mayotte"
  },
  flag: "https://flagcdn.com/yt.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  independent: false
}, {
  name: "Mexico",
  topLevelDomain: [".mx"],
  alpha2Code: "MX",
  alpha3Code: "MEX",
  callingCodes: ["52"],
  capital: "Mexico City",
  altSpellings: ["MX", "Mexicanos", "United Mexican States", "Estados Unidos Mexicanos"],
  subregion: "North America",
  region: "Americas",
  population: 128932753,
  latlng: [23, -102],
  demonym: "Mexican",
  area: 1964375,
  gini: 45.4,
  timezones: ["UTC-08:00", "UTC-07:00", "UTC-06:00"],
  borders: ["BLZ", "GTM", "USA"],
  nativeName: "México",
  numericCode: "484",
  flags: {
    svg: "https://flagcdn.com/mx.svg",
    png: "https://flagcdn.com/w320/mx.png"
  },
  currencies: [{
    code: "MXN",
    name: "Mexican peso",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Mec'hiko",
    pt: "México",
    nl: "Mexico",
    hr: "Meksiko",
    fa: "مکزیک",
    de: "Mexiko",
    es: "México",
    fr: "Mexique",
    ja: "メキシコ",
    it: "Messico",
    hu: "Mexikó"
  },
  flag: "https://flagcdn.com/mx.svg",
  regionalBlocs: [{
    acronym: "PA",
    name: "Pacific Alliance",
    otherNames: ["Alianza del Pacífico"]
  }, {
    acronym: "NAFTA",
    name: "North American Free Trade Agreement",
    otherNames: ["Tratado de Libre Comercio de América del Norte", "Accord de Libre-échange Nord-Américain"]
  }],
  cioc: "MEX",
  independent: true
}, {
  name: "Micronesia (Federated States of)",
  topLevelDomain: [".fm"],
  alpha2Code: "FM",
  alpha3Code: "FSM",
  callingCodes: ["691"],
  capital: "Palikir",
  altSpellings: ["FM", "Federated States of Micronesia"],
  subregion: "Micronesia",
  region: "Oceania",
  population: 115021,
  latlng: [6.91666666, 158.25],
  demonym: "Micronesian",
  area: 702,
  gini: 40.1,
  timezones: ["UTC+10:00", "UTC+11:00"],
  nativeName: "Micronesia",
  numericCode: "583",
  flags: {
    svg: "https://flagcdn.com/fm.svg",
    png: "https://flagcdn.com/w320/fm.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Mikronezia",
    pt: "Micronésia",
    nl: "Micronesië",
    hr: "Mikronezija",
    fa: "ایالات فدرال میکرونزی",
    de: "Mikronesien",
    es: "Micronesia",
    fr: "Micronésie",
    ja: "ミクロネシア連邦",
    it: "Micronesia",
    hu: "Mikronézia"
  },
  flag: "https://flagcdn.com/fm.svg",
  cioc: "FSM",
  independent: true
}, {
  name: "Moldova (Republic of)",
  topLevelDomain: [".md"],
  alpha2Code: "MD",
  alpha3Code: "MDA",
  callingCodes: ["373"],
  capital: "Chișinău",
  altSpellings: ["MD", "Republic of Moldova", "Republica Moldova"],
  subregion: "Eastern Europe",
  region: "Europe",
  population: 2617820,
  latlng: [47, 29],
  demonym: "Moldovan",
  area: 33846,
  gini: 25.7,
  timezones: ["UTC+02:00"],
  borders: ["ROU", "UKR"],
  nativeName: "Moldova",
  numericCode: "498",
  flags: {
    svg: "https://flagcdn.com/md.svg",
    png: "https://flagcdn.com/w320/md.png"
  },
  currencies: [{
    code: "MDL",
    name: "Moldovan leu",
    symbol: "L"
  }],
  languages: [{
    iso639_1: "ro",
    iso639_2: "ron",
    name: "Romanian",
    nativeName: "Română"
  }],
  translations: {
    br: "Moldova",
    pt: "Moldávia",
    nl: "Moldavië",
    hr: "Moldova",
    fa: "مولداوی",
    de: "Moldawie",
    es: "Moldavia",
    fr: "Moldavie",
    ja: "モルドバ共和国",
    it: "Moldavia",
    hu: "Moldova"
  },
  flag: "https://flagcdn.com/md.svg",
  regionalBlocs: [{
    acronym: "CEFTA",
    name: "Central European Free Trade Agreement"
  }],
  cioc: "MDA",
  independent: true
}, {
  name: "Monaco",
  topLevelDomain: [".mc"],
  alpha2Code: "MC",
  alpha3Code: "MCO",
  callingCodes: ["377"],
  capital: "Monaco",
  altSpellings: ["MC", "Principality of Monaco", "Principauté de Monaco"],
  subregion: "Western Europe",
  region: "Europe",
  population: 39244,
  latlng: [43.73333333, 7.4],
  demonym: "Monegasque",
  area: 2.02,
  timezones: ["UTC+01:00"],
  borders: ["FRA"],
  nativeName: "Monaco",
  numericCode: "492",
  flags: {
    svg: "https://flagcdn.com/mc.svg",
    png: "https://flagcdn.com/w320/mc.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Monako",
    pt: "Mónaco",
    nl: "Monaco",
    hr: "Monako",
    fa: "موناکو",
    de: "Monaco",
    es: "Mónaco",
    fr: "Monaco",
    ja: "モナコ",
    it: "Principato di Monaco",
    hu: "Monaco"
  },
  flag: "https://flagcdn.com/mc.svg",
  cioc: "MON",
  independent: true
}, {
  name: "Mongolia",
  topLevelDomain: [".mn"],
  alpha2Code: "MN",
  alpha3Code: "MNG",
  callingCodes: ["976"],
  capital: "Ulan Bator",
  altSpellings: ["MN"],
  subregion: "Eastern Asia",
  region: "Asia",
  population: 3278292,
  latlng: [46, 105],
  demonym: "Mongolian",
  area: 1564110,
  gini: 32.7,
  timezones: ["UTC+07:00", "UTC+08:00"],
  borders: ["CHN", "RUS"],
  nativeName: "Монгол улс",
  numericCode: "496",
  flags: {
    svg: "https://flagcdn.com/mn.svg",
    png: "https://flagcdn.com/w320/mn.png"
  },
  currencies: [{
    code: "MNT",
    name: "Mongolian tögrög",
    symbol: "₮"
  }],
  languages: [{
    iso639_1: "mn",
    iso639_2: "mon",
    name: "Mongolian",
    nativeName: "Монгол хэл"
  }],
  translations: {
    br: "Mongolia",
    pt: "Mongólia",
    nl: "Mongolië",
    hr: "Mongolija",
    fa: "مغولستان",
    de: "Mongolei",
    es: "Mongolia",
    fr: "Mongolie",
    ja: "モンゴル",
    it: "Mongolia",
    hu: "Mongólia"
  },
  flag: "https://flagcdn.com/mn.svg",
  cioc: "MGL",
  independent: true
}, {
  name: "Montenegro",
  topLevelDomain: [".me"],
  alpha2Code: "ME",
  alpha3Code: "MNE",
  callingCodes: ["382"],
  capital: "Podgorica",
  altSpellings: ["ME", "Crna Gora"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 621718,
  latlng: [42.5, 19.3],
  demonym: "Montenegrin",
  area: 13812,
  gini: 38.5,
  timezones: ["UTC+01:00"],
  borders: ["ALB", "BIH", "HRV", "UNK", "SRB"],
  nativeName: "Црна Гора",
  numericCode: "499",
  flags: {
    svg: "https://flagcdn.com/me.svg",
    png: "https://flagcdn.com/w320/me.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "sr",
    iso639_2: "srp",
    name: "Serbian",
    nativeName: "српски језик"
  }, {
    iso639_1: "bs",
    iso639_2: "bos",
    name: "Bosnian",
    nativeName: "bosanski jezik"
  }, {
    iso639_1: "sq",
    iso639_2: "sqi",
    name: "Albanian",
    nativeName: "Shqip"
  }, {
    iso639_1: "hr",
    iso639_2: "hrv",
    name: "Croatian",
    nativeName: "hrvatski jezik"
  }],
  translations: {
    br: "Montenegro",
    pt: "Montenegro",
    nl: "Montenegro",
    hr: "Crna Gora",
    fa: "مونته‌نگرو",
    de: "Montenegro",
    es: "Montenegro",
    fr: "Monténégro",
    ja: "モンテネグロ",
    it: "Montenegro",
    hu: "Montenegró"
  },
  flag: "https://flagcdn.com/me.svg",
  regionalBlocs: [{
    acronym: "CEFTA",
    name: "Central European Free Trade Agreement"
  }],
  cioc: "MNE",
  independent: true
}, {
  name: "Montserrat",
  topLevelDomain: [".ms"],
  alpha2Code: "MS",
  alpha3Code: "MSR",
  callingCodes: ["1"],
  capital: "Plymouth",
  altSpellings: ["MS"],
  subregion: "Caribbean",
  region: "Americas",
  population: 4922,
  latlng: [16.75, -62.2],
  demonym: "Montserratian",
  area: 102,
  timezones: ["UTC-04:00"],
  nativeName: "Montserrat",
  numericCode: "500",
  flags: {
    svg: "https://flagcdn.com/ms.svg",
    png: "https://flagcdn.com/w320/ms.png"
  },
  currencies: [{
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Montserrat",
    pt: "Monserrate",
    nl: "Montserrat",
    hr: "Montserrat",
    fa: "مایوت",
    de: "Montserrat",
    es: "Montserrat",
    fr: "Montserrat",
    ja: "モントセラト",
    it: "Montserrat",
    hu: "Montserrat"
  },
  flag: "https://flagcdn.com/ms.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  independent: false
}, {
  name: "Morocco",
  topLevelDomain: [".ma"],
  alpha2Code: "MA",
  alpha3Code: "MAR",
  callingCodes: ["212"],
  capital: "Rabat",
  altSpellings: ["MA", "Kingdom of Morocco", "Al-Mamlakah al-Maġribiyah"],
  subregion: "Northern Africa",
  region: "Africa",
  population: 36910558,
  latlng: [32, -5],
  demonym: "Moroccan",
  area: 446550,
  gini: 39.5,
  timezones: ["UTC"],
  borders: ["DZA", "ESH", "ESP"],
  nativeName: "المغرب",
  numericCode: "504",
  flags: {
    svg: "https://flagcdn.com/ma.svg",
    png: "https://flagcdn.com/w320/ma.png"
  },
  currencies: [{
    code: "MAD",
    name: "Moroccan dirham",
    symbol: "د.م."
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Maroko",
    pt: "Marrocos",
    nl: "Marokko",
    hr: "Maroko",
    fa: "المغرب",
    de: "Marokko",
    es: "Marruecos",
    fr: "Maroc",
    ja: "モロッコ",
    it: "Marocco",
    hu: "Marokkó"
  },
  flag: "https://flagcdn.com/ma.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "MAR",
  independent: true
}, {
  name: "Mozambique",
  topLevelDomain: [".mz"],
  alpha2Code: "MZ",
  alpha3Code: "MOZ",
  callingCodes: ["258"],
  capital: "Maputo",
  altSpellings: ["MZ", "Republic of Mozambique", "República de Moçambique"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 31255435,
  latlng: [-18.25, 35],
  demonym: "Mozambican",
  area: 801590,
  gini: 54,
  timezones: ["UTC+02:00"],
  borders: ["MWI", "ZAF", "SWZ", "TZA", "ZMB", "ZWE"],
  nativeName: "Moçambique",
  numericCode: "508",
  flags: {
    svg: "https://flagcdn.com/mz.svg",
    png: "https://flagcdn.com/w320/mz.png"
  },
  currencies: [{
    code: "MZN",
    name: "Mozambican metical",
    symbol: "MT"
  }],
  languages: [{
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }],
  translations: {
    br: "Mozambik",
    pt: "Moçambique",
    nl: "Mozambique",
    hr: "Mozambik",
    fa: "موزامبیک",
    de: "Mosambik",
    es: "Mozambique",
    fr: "Mozambique",
    ja: "モザンビーク",
    it: "Mozambico",
    hu: "Mozambik"
  },
  flag: "https://flagcdn.com/mz.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "MOZ",
  independent: true
}, {
  name: "Myanmar",
  topLevelDomain: [".mm"],
  alpha2Code: "MM",
  alpha3Code: "MMR",
  callingCodes: ["95"],
  capital: "Naypyidaw",
  altSpellings: ["MM", "Burma", "Republic of the Union of Myanmar", "Pyidaunzu Thanmăda Myăma Nainngandaw"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 54409794,
  latlng: [22, 98],
  demonym: "Burmese",
  area: 676578,
  gini: 30.7,
  timezones: ["UTC+06:30"],
  borders: ["BGD", "CHN", "IND", "LAO", "THA"],
  nativeName: "Myanma",
  numericCode: "104",
  flags: {
    svg: "https://flagcdn.com/mm.svg",
    png: "https://flagcdn.com/w320/mm.png"
  },
  currencies: [{
    code: "MMK",
    name: "Burmese kyat",
    symbol: "Ks"
  }],
  languages: [{
    iso639_1: "my",
    iso639_2: "mya",
    name: "Burmese",
    nativeName: "ဗမာစာ"
  }],
  translations: {
    br: "Myanmar",
    pt: "Myanmar",
    nl: "Myanmar",
    hr: "Mijanmar",
    fa: "میانمار",
    de: "Myanmar",
    es: "Myanmar",
    fr: "Myanmar",
    ja: "ミャンマー",
    it: "Birmania",
    hu: "Mianmar"
  },
  flag: "https://flagcdn.com/mm.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "MYA",
  independent: true
}, {
  name: "Namibia",
  topLevelDomain: [".na"],
  alpha2Code: "NA",
  alpha3Code: "NAM",
  callingCodes: ["264"],
  capital: "Windhoek",
  altSpellings: ["NA", "Namibië", "Republic of Namibia"],
  subregion: "Southern Africa",
  region: "Africa",
  population: 2540916,
  latlng: [-22, 17],
  demonym: "Namibian",
  area: 825615,
  gini: 59.1,
  timezones: ["UTC+01:00"],
  borders: ["AGO", "BWA", "ZAF", "ZMB"],
  nativeName: "Namibia",
  numericCode: "516",
  flags: {
    svg: "https://flagcdn.com/na.svg",
    png: "https://flagcdn.com/w320/na.png"
  },
  currencies: [{
    code: "NAD",
    name: "Namibian dollar",
    symbol: "$"
  }, {
    code: "ZAR",
    name: "South African rand",
    symbol: "R"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "af",
    iso639_2: "afr",
    name: "Afrikaans",
    nativeName: "Afrikaans"
  }],
  translations: {
    br: "Namibia",
    pt: "Namíbia",
    nl: "Namibië",
    hr: "Namibija",
    fa: "نامیبیا",
    de: "Namibia",
    es: "Namibia",
    fr: "Namibie",
    ja: "ナミビア",
    it: "Namibia",
    hu: "Namíbia"
  },
  flag: "https://flagcdn.com/na.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "NAM",
  independent: true
}, {
  name: "Nauru",
  topLevelDomain: [".nr"],
  alpha2Code: "NR",
  alpha3Code: "NRU",
  callingCodes: ["674"],
  capital: "Yaren",
  altSpellings: ["NR", "Naoero", "Pleasant Island", "Republic of Nauru", "Ripublik Naoero"],
  subregion: "Micronesia",
  region: "Oceania",
  population: 10834,
  latlng: [-0.53333333, 166.91666666],
  demonym: "Nauruan",
  area: 21,
  gini: 34.8,
  timezones: ["UTC+12:00"],
  nativeName: "Nauru",
  numericCode: "520",
  flags: {
    svg: "https://flagcdn.com/nr.svg",
    png: "https://flagcdn.com/w320/nr.png"
  },
  currencies: [{
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "na",
    iso639_2: "nau",
    name: "Nauruan",
    nativeName: "Dorerin Naoero"
  }],
  translations: {
    br: "Nauru",
    pt: "Nauru",
    nl: "Nauru",
    hr: "Nauru",
    fa: "نائورو",
    de: "Nauru",
    es: "Nauru",
    fr: "Nauru",
    ja: "ナウル",
    it: "Nauru",
    hu: "Nauru"
  },
  flag: "https://flagcdn.com/nr.svg",
  cioc: "NRU",
  independent: true
}, {
  name: "Nepal",
  topLevelDomain: [".np"],
  alpha2Code: "NP",
  alpha3Code: "NPL",
  callingCodes: ["977"],
  capital: "Kathmandu",
  altSpellings: ["NP", "Federal Democratic Republic of Nepal", "Loktāntrik Ganatantra Nepāl"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 29136808,
  latlng: [28, 84],
  demonym: "Nepalese",
  area: 147181,
  gini: 32.8,
  timezones: ["UTC+05:45"],
  borders: ["CHN", "IND"],
  nativeName: "नेपाल",
  numericCode: "524",
  flags: {
    svg: "https://flagcdn.com/np.svg",
    png: "https://flagcdn.com/w320/np.png"
  },
  currencies: [{
    code: "NPR",
    name: "Nepalese rupee",
    symbol: "₨"
  }],
  languages: [{
    iso639_1: "ne",
    iso639_2: "nep",
    name: "Nepali",
    nativeName: "नेपाली"
  }],
  translations: {
    br: "Nepal",
    pt: "Nepal",
    nl: "Nepal",
    hr: "Nepal",
    fa: "نپال",
    de: "Népal",
    es: "Nepal",
    fr: "Népal",
    ja: "ネパール",
    it: "Nepal",
    hu: "Nepál"
  },
  flag: "https://flagcdn.com/np.svg",
  regionalBlocs: [{
    acronym: "SAARC",
    name: "South Asian Association for Regional Cooperation"
  }],
  cioc: "NEP",
  independent: true
}, {
  name: "Netherlands",
  topLevelDomain: [".nl"],
  alpha2Code: "NL",
  alpha3Code: "NLD",
  callingCodes: ["31"],
  capital: "Amsterdam",
  altSpellings: ["NL", "Holland", "Nederland"],
  subregion: "Western Europe",
  region: "Europe",
  population: 17441139,
  latlng: [52.5, 5.75],
  demonym: "Dutch",
  area: 41850,
  gini: 28.1,
  timezones: ["UTC-04:00", "UTC+01:00"],
  borders: ["BEL", "DEU"],
  nativeName: "Nederland",
  numericCode: "528",
  flags: {
    svg: "https://flagcdn.com/nl.svg",
    png: "https://flagcdn.com/w320/nl.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "nl",
    iso639_2: "nld",
    name: "Dutch",
    nativeName: "Nederlands"
  }],
  translations: {
    br: "Izelvroioù",
    pt: "Países Baixos",
    nl: "Nederland",
    hr: "Nizozemska",
    fa: "پادشاهی هلند",
    de: "Niederlande",
    es: "Países Bajos",
    fr: "Pays-Bas",
    ja: "オランダ",
    it: "Paesi Bassi",
    hu: "Hollandia"
  },
  flag: "https://flagcdn.com/nl.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "NED",
  independent: true
}, {
  name: "New Caledonia",
  topLevelDomain: [".nc"],
  alpha2Code: "NC",
  alpha3Code: "NCL",
  callingCodes: ["687"],
  capital: "Nouméa",
  altSpellings: ["NC"],
  subregion: "Melanesia",
  region: "Oceania",
  population: 271960,
  latlng: [-21.5, 165.5],
  demonym: "New Caledonian",
  area: 18575,
  timezones: ["UTC+11:00"],
  nativeName: "Nouvelle-Calédonie",
  numericCode: "540",
  flags: {
    svg: "https://flagcdn.com/nc.svg",
    png: "https://flagcdn.com/w320/nc.png"
  },
  currencies: [{
    code: "XPF",
    name: "CFP franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Kaledonia-Nevez",
    pt: "Nova Caledónia",
    nl: "Nieuw-Caledonië",
    hr: "Nova Kaledonija",
    fa: "کالدونیای جدید",
    de: "Neukaledonien",
    es: "Nueva Caledonia",
    fr: "Nouvelle-Calédonie",
    ja: "ニューカレドニア",
    it: "Nuova Caledonia",
    hu: "Új-Kaledónia"
  },
  flag: "https://flagcdn.com/nc.svg",
  independent: false
}, {
  name: "New Zealand",
  topLevelDomain: [".nz"],
  alpha2Code: "NZ",
  alpha3Code: "NZL",
  callingCodes: ["64"],
  capital: "Wellington",
  altSpellings: ["NZ", "Aotearoa"],
  subregion: "Australia and New Zealand",
  region: "Oceania",
  population: 5084300,
  latlng: [-41, 174],
  demonym: "New Zealander",
  area: 270467,
  timezones: ["UTC-11:00", "UTC-10:00", "UTC+12:00", "UTC+12:45", "UTC+13:00"],
  nativeName: "New Zealand",
  numericCode: "554",
  flags: {
    svg: "https://flagcdn.com/nz.svg",
    png: "https://flagcdn.com/w320/nz.png"
  },
  currencies: [{
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "mi",
    iso639_2: "mri",
    name: "Māori",
    nativeName: "te reo Māori"
  }],
  translations: {
    br: "Zeland-Nevez",
    pt: "Nova Zelândia",
    nl: "Nieuw-Zeeland",
    hr: "Novi Zeland",
    fa: "نیوزیلند",
    de: "Neuseeland",
    es: "Nueva Zelanda",
    fr: "Nouvelle-Zélande",
    ja: "ニュージーランド",
    it: "Nuova Zelanda",
    hu: "Új-Zéland"
  },
  flag: "https://flagcdn.com/nz.svg",
  cioc: "NZL",
  independent: true
}, {
  name: "Nicaragua",
  topLevelDomain: [".ni"],
  alpha2Code: "NI",
  alpha3Code: "NIC",
  callingCodes: ["505"],
  capital: "Managua",
  altSpellings: ["NI", "Republic of Nicaragua", "República de Nicaragua"],
  subregion: "Central America",
  region: "Americas",
  population: 6624554,
  latlng: [13, -85],
  demonym: "Nicaraguan",
  area: 130373,
  gini: 46.2,
  timezones: ["UTC-06:00"],
  borders: ["CRI", "HND"],
  nativeName: "Nicaragua",
  numericCode: "558",
  flags: {
    svg: "https://flagcdn.com/ni.svg",
    png: "https://flagcdn.com/w320/ni.png"
  },
  currencies: [{
    code: "NIO",
    name: "Nicaraguan córdoba",
    symbol: "C$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Nicaragua",
    pt: "Nicarágua",
    nl: "Nicaragua",
    hr: "Nikaragva",
    fa: "نیکاراگوئه",
    de: "Nicaragua",
    es: "Nicaragua",
    fr: "Nicaragua",
    ja: "ニカラグア",
    it: "Nicaragua",
    hu: "Nicaragua"
  },
  flag: "https://flagcdn.com/ni.svg",
  regionalBlocs: [{
    acronym: "CAIS",
    name: "Central American Integration System",
    otherAcronyms: ["SICA"],
    otherNames: ["Sistema de la Integración Centroamericana,"]
  }],
  cioc: "NCA",
  independent: true
}, {
  name: "Niger",
  topLevelDomain: [".ne"],
  alpha2Code: "NE",
  alpha3Code: "NER",
  callingCodes: ["227"],
  capital: "Niamey",
  altSpellings: ["NE", "Nijar", "Republic of Niger", "République du Niger"],
  subregion: "Western Africa",
  region: "Africa",
  population: 24206636,
  latlng: [16, 8],
  demonym: "Nigerien",
  area: 1267000,
  gini: 34.3,
  timezones: ["UTC+01:00"],
  borders: ["DZA", "BEN", "BFA", "TCD", "LBY", "MLI", "NGA"],
  nativeName: "Niger",
  numericCode: "562",
  flags: {
    svg: "https://flagcdn.com/ne.svg",
    png: "https://flagcdn.com/w320/ne.png"
  },
  currencies: [{
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Niger",
    pt: "Níger",
    nl: "Niger",
    hr: "Niger",
    fa: "نیجر",
    de: "Niger",
    es: "Níger",
    fr: "Niger",
    ja: "ニジェール",
    it: "Niger",
    hu: "Niger"
  },
  flag: "https://flagcdn.com/ne.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "NIG",
  independent: true
}, {
  name: "Nigeria",
  topLevelDomain: [".ng"],
  alpha2Code: "NG",
  alpha3Code: "NGA",
  callingCodes: ["234"],
  capital: "Abuja",
  altSpellings: ["NG", "Nijeriya", "Naíjíríà", "Federal Republic of Nigeria"],
  subregion: "Western Africa",
  region: "Africa",
  population: 206139587,
  latlng: [10, 8],
  demonym: "Nigerian",
  area: 923768,
  gini: 35.1,
  timezones: ["UTC+01:00"],
  borders: ["BEN", "CMR", "TCD", "NER"],
  nativeName: "Nigeria",
  numericCode: "566",
  flags: {
    svg: "https://flagcdn.com/ng.svg",
    png: "https://flagcdn.com/w320/ng.png"
  },
  currencies: [{
    code: "NGN",
    name: "Nigerian naira",
    symbol: "₦"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Nigeria",
    pt: "Nigéria",
    nl: "Nigeria",
    hr: "Nigerija",
    fa: "نیجریه",
    de: "Nigeria",
    es: "Nigeria",
    fr: "Nigéria",
    ja: "ナイジェリア",
    it: "Nigeria",
    hu: "Nigéria"
  },
  flag: "https://flagcdn.com/ng.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "NGR",
  independent: true
}, {
  name: "Niue",
  topLevelDomain: [".nu"],
  alpha2Code: "NU",
  alpha3Code: "NIU",
  callingCodes: ["683"],
  capital: "Alofi",
  altSpellings: ["NU"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 1470,
  latlng: [-19.03333333, -169.86666666],
  demonym: "Niuean",
  area: 260,
  timezones: ["UTC-11:00"],
  nativeName: "Niuē",
  numericCode: "570",
  flags: {
    svg: "https://flagcdn.com/nu.svg",
    png: "https://flagcdn.com/w320/nu.png"
  },
  currencies: [{
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$"
  }, {
    code: "NZD",
    name: "Niue dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Niue",
    pt: "Niue",
    nl: "Niue",
    hr: "Niue",
    fa: "نیووی",
    de: "Niue",
    es: "Niue",
    fr: "Niue",
    ja: "ニウエ",
    it: "Niue",
    hu: "Niue"
  },
  flag: "https://flagcdn.com/nu.svg",
  independent: true
}, {
  name: "Norfolk Island",
  topLevelDomain: [".nf"],
  alpha2Code: "NF",
  alpha3Code: "NFK",
  callingCodes: ["672"],
  capital: "Kingston",
  altSpellings: ["NF", "Territory of Norfolk Island", "Teratri of Norf'k Ailen"],
  subregion: "Australia and New Zealand",
  region: "Oceania",
  population: 2302,
  latlng: [-29.03333333, 167.95],
  demonym: "Norfolk Islander",
  area: 36,
  timezones: ["UTC+11:30"],
  nativeName: "Norfolk Island",
  numericCode: "574",
  flags: {
    svg: "https://flagcdn.com/nf.svg",
    png: "https://flagcdn.com/w320/nf.png"
  },
  currencies: [{
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Enez Norfolk",
    pt: "Ilha Norfolk",
    nl: "Norfolkeiland",
    hr: "Otok Norfolk",
    fa: "جزیره نورفک",
    de: "Norfolkinsel",
    es: "Isla de Norfolk",
    fr: "Île de Norfolk",
    ja: "ノーフォーク島",
    it: "Isola Norfolk",
    hu: "Norfolk-sziget"
  },
  flag: "https://flagcdn.com/nf.svg",
  independent: false
}, {
  name: "Korea (Democratic People's Republic of)",
  topLevelDomain: [".kp"],
  alpha2Code: "KP",
  alpha3Code: "PRK",
  callingCodes: ["850"],
  capital: "Pyongyang",
  altSpellings: ["KP", "Democratic People's Republic of Korea", "조선민주주의인민공화국", "Chosŏn Minjujuŭi Inmin Konghwaguk"],
  subregion: "Eastern Asia",
  region: "Asia",
  population: 25778815,
  latlng: [40, 127],
  demonym: "North Korean",
  area: 120538,
  timezones: ["UTC+09:00"],
  borders: ["CHN", "KOR", "RUS"],
  nativeName: "북한",
  numericCode: "408",
  flags: {
    svg: "https://flagcdn.com/kp.svg",
    png: "https://flagcdn.com/w320/kp.png"
  },
  currencies: [{
    code: "KPW",
    name: "North Korean won",
    symbol: "₩"
  }],
  languages: [{
    iso639_1: "ko",
    iso639_2: "kor",
    name: "Korean",
    nativeName: "한국어"
  }],
  translations: {
    br: "Korea an Norzh",
    pt: "Coreia do Norte",
    nl: "Noord-Korea",
    hr: "Sjeverna Koreja",
    fa: "کره جنوبی",
    de: "Nordkorea",
    es: "Corea del Norte",
    fr: "Corée du Nord",
    ja: "朝鮮民主主義人民共和国",
    it: "Corea del Nord",
    hu: "Észak-Korea"
  },
  flag: "https://flagcdn.com/kp.svg",
  cioc: "PRK",
  independent: true
}, {
  name: "Northern Mariana Islands",
  topLevelDomain: [".mp"],
  alpha2Code: "MP",
  alpha3Code: "MNP",
  callingCodes: ["1"],
  capital: "Saipan",
  altSpellings: ["MP", "Commonwealth of the Northern Mariana Islands", "Sankattan Siha Na Islas Mariånas"],
  subregion: "Micronesia",
  region: "Oceania",
  population: 57557,
  latlng: [15.2, 145.75],
  demonym: "American",
  area: 464,
  timezones: ["UTC+10:00"],
  nativeName: "Northern Mariana Islands",
  numericCode: "580",
  flags: {
    svg: "https://flagcdn.com/mp.svg",
    png: "https://flagcdn.com/w320/mp.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "ch",
    iso639_2: "cha",
    name: "Chamorro",
    nativeName: "Chamoru"
  }],
  translations: {
    br: "Inizi Mariana an Norzh",
    pt: "Ilhas Marianas",
    nl: "Noordelijke Marianeneilanden",
    hr: "Sjevernomarijanski otoci",
    fa: "جزایر ماریانای شمالی",
    de: "Nördliche Marianen",
    es: "Islas Marianas del Norte",
    fr: "Îles Mariannes du Nord",
    ja: "北マリアナ諸島",
    it: "Isole Marianne Settentrionali",
    hu: "Északi-Mariana-szigetek"
  },
  flag: "https://flagcdn.com/mp.svg",
  independent: false
}, {
  name: "Norway",
  topLevelDomain: [".no"],
  alpha2Code: "NO",
  alpha3Code: "NOR",
  callingCodes: ["47"],
  capital: "Oslo",
  altSpellings: ["NO", "Norge", "Noreg", "Kingdom of Norway", "Kongeriket Norge", "Kongeriket Noreg"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 5379475,
  latlng: [62, 10],
  demonym: "Norwegian",
  area: 323802,
  gini: 27.6,
  timezones: ["UTC+01:00"],
  borders: ["FIN", "SWE", "RUS"],
  nativeName: "Norge",
  numericCode: "578",
  flags: {
    svg: "https://flagcdn.com/no.svg",
    png: "https://flagcdn.com/w320/no.png"
  },
  currencies: [{
    code: "NOK",
    name: "Norwegian krone",
    symbol: "kr"
  }],
  languages: [{
    iso639_1: "no",
    iso639_2: "nor",
    name: "Norwegian",
    nativeName: "Norsk"
  }, {
    iso639_1: "nb",
    iso639_2: "nob",
    name: "Norwegian Bokmål",
    nativeName: "Norsk bokmål"
  }, {
    iso639_1: "nn",
    iso639_2: "nno",
    name: "Norwegian Nynorsk",
    nativeName: "Norsk nynorsk"
  }],
  translations: {
    br: "Norvegia",
    pt: "Noruega",
    nl: "Noorwegen",
    hr: "Norveška",
    fa: "نروژ",
    de: "Norwegen",
    es: "Noruega",
    fr: "Norvège",
    ja: "ノルウェー",
    it: "Norvegia",
    hu: "Norvégia"
  },
  flag: "https://flagcdn.com/no.svg",
  regionalBlocs: [{
    acronym: "EFTA",
    name: "European Free Trade Association"
  }],
  cioc: "NOR",
  independent: true
}, {
  name: "Oman",
  topLevelDomain: [".om"],
  alpha2Code: "OM",
  alpha3Code: "OMN",
  callingCodes: ["968"],
  capital: "Muscat",
  altSpellings: ["OM", "Sultanate of Oman", "Salṭanat ʻUmān"],
  subregion: "Western Asia",
  region: "Asia",
  population: 5106622,
  latlng: [21, 57],
  demonym: "Omani",
  area: 309500,
  timezones: ["UTC+04:00"],
  borders: ["SAU", "ARE", "YEM"],
  nativeName: "عمان",
  numericCode: "512",
  flags: {
    svg: "https://flagcdn.com/om.svg",
    png: "https://flagcdn.com/w320/om.png"
  },
  currencies: [{
    code: "OMR",
    name: "Omani rial",
    symbol: "ر.ع."
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Oman",
    pt: "Omã",
    nl: "Oman",
    hr: "Oman",
    fa: "عمان",
    de: "Oman",
    es: "Omán",
    fr: "Oman",
    ja: "オマーン",
    it: "oman",
    hu: "Omán"
  },
  flag: "https://flagcdn.com/om.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "OMA",
  independent: true
}, {
  name: "Pakistan",
  topLevelDomain: [".pk"],
  alpha2Code: "PK",
  alpha3Code: "PAK",
  callingCodes: ["92"],
  capital: "Islamabad",
  altSpellings: ["PK", "Pākistān", "Islamic Republic of Pakistan", "Islāmī Jumhūriya'eh Pākistān"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 220892331,
  latlng: [30, 70],
  demonym: "Pakistani",
  area: 881912,
  gini: 31.6,
  timezones: ["UTC+05:00"],
  borders: ["AFG", "CHN", "IND", "IRN"],
  nativeName: "Pakistan",
  numericCode: "586",
  flags: {
    svg: "https://flagcdn.com/pk.svg",
    png: "https://flagcdn.com/w320/pk.png"
  },
  currencies: [{
    code: "PKR",
    name: "Pakistani rupee",
    symbol: "₨"
  }],
  languages: [{
    iso639_1: "ur",
    iso639_2: "urd",
    name: "Urdu",
    nativeName: "اردو"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Pakistan",
    pt: "Paquistão",
    nl: "Pakistan",
    hr: "Pakistan",
    fa: "پاکستان",
    de: "Pakistan",
    es: "Pakistán",
    fr: "Pakistan",
    ja: "パキスタン",
    it: "Pakistan",
    hu: "Pakisztán"
  },
  flag: "https://flagcdn.com/pk.svg",
  regionalBlocs: [{
    acronym: "SAARC",
    name: "South Asian Association for Regional Cooperation"
  }],
  cioc: "PAK",
  independent: true
}, {
  name: "Palau",
  topLevelDomain: [".pw"],
  alpha2Code: "PW",
  alpha3Code: "PLW",
  callingCodes: ["680"],
  capital: "Ngerulmud",
  altSpellings: ["PW", "Republic of Palau", "Beluu er a Belau"],
  subregion: "Micronesia",
  region: "Oceania",
  population: 18092,
  latlng: [7.5, 134.5],
  demonym: "Palauan",
  area: 459,
  timezones: ["UTC+09:00"],
  nativeName: "Palau",
  numericCode: "585",
  flags: {
    svg: "https://flagcdn.com/pw.svg",
    png: "https://flagcdn.com/w320/pw.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Palau",
    pt: "Palau",
    nl: "Palau",
    hr: "Palau",
    fa: "پالائو",
    de: "Palau",
    es: "Palau",
    fr: "Palaos",
    ja: "パラオ",
    it: "Palau",
    hu: "Palau"
  },
  flag: "https://flagcdn.com/pw.svg",
  cioc: "PLW",
  independent: true
}, {
  name: "Palestine, State of",
  topLevelDomain: [".ps"],
  alpha2Code: "PS",
  alpha3Code: "PSE",
  callingCodes: ["970"],
  capital: "Ramallah",
  altSpellings: ["PS", "State of Palestine", "Dawlat Filasṭin"],
  subregion: "Western Asia",
  region: "Asia",
  population: 4803269,
  latlng: [31.9, 35.2],
  demonym: "Palestinian",
  gini: 33.7,
  timezones: ["UTC+02:00"],
  borders: ["ISR", "EGY", "JOR"],
  nativeName: "فلسطين",
  numericCode: "275",
  flags: {
    svg: "https://flagcdn.com/ps.svg",
    png: "https://flagcdn.com/w320/ps.png"
  },
  currencies: [{
    code: "EGP",
    name: "Egyptian pound",
    symbol: "E£"
  }, {
    code: "ILS",
    name: "Israeli new shekel",
    symbol: "₪"
  }, {
    code: "JOD",
    name: "Jordanian dinar",
    symbol: "د.أ"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Palestina",
    pt: "Palestina",
    nl: "Palestijnse gebieden",
    hr: "Palestina",
    fa: "فلسطین",
    de: "Palästina",
    es: "Palestina",
    fr: "Palestine",
    ja: "パレスチナ",
    it: "Palestina",
    hu: "Palesztina"
  },
  flag: "https://flagcdn.com/ps.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "PLE",
  independent: true
}, {
  name: "Panama",
  topLevelDomain: [".pa"],
  alpha2Code: "PA",
  alpha3Code: "PAN",
  callingCodes: ["507"],
  capital: "Panama City",
  altSpellings: ["PA", "Republic of Panama", "República de Panamá"],
  subregion: "Central America",
  region: "Americas",
  population: 4314768,
  latlng: [9, -80],
  demonym: "Panamanian",
  area: 75417,
  gini: 49.8,
  timezones: ["UTC-05:00"],
  borders: ["COL", "CRI"],
  nativeName: "Panamá",
  numericCode: "591",
  flags: {
    svg: "https://flagcdn.com/pa.svg",
    png: "https://flagcdn.com/w320/pa.png"
  },
  currencies: [{
    code: "PAB",
    name: "Panamanian balboa",
    symbol: "B/."
  }, {
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Panama",
    pt: "Panamá",
    nl: "Panama",
    hr: "Panama",
    fa: "پاناما",
    de: "Panama",
    es: "Panamá",
    fr: "Panama",
    ja: "パナマ",
    it: "Panama",
    hu: "Panama"
  },
  flag: "https://flagcdn.com/pa.svg",
  regionalBlocs: [{
    acronym: "CAIS",
    name: "Central American Integration System",
    otherAcronyms: ["SICA"],
    otherNames: ["Sistema de la Integración Centroamericana,"]
  }],
  cioc: "PAN",
  independent: true
}, {
  name: "Papua New Guinea",
  topLevelDomain: [".pg"],
  alpha2Code: "PG",
  alpha3Code: "PNG",
  callingCodes: ["675"],
  capital: "Port Moresby",
  altSpellings: ["PG", "Independent State of Papua New Guinea", "Independen Stet bilong Papua Niugini"],
  subregion: "Melanesia",
  region: "Oceania",
  population: 8947027,
  latlng: [-6, 147],
  demonym: "Papua New Guinean",
  area: 462840,
  gini: 41.9,
  timezones: ["UTC+10:00"],
  borders: ["IDN"],
  nativeName: "Papua Niugini",
  numericCode: "598",
  flags: {
    svg: "https://flagcdn.com/pg.svg",
    png: "https://flagcdn.com/w320/pg.png"
  },
  currencies: [{
    code: "PGK",
    name: "Papua New Guinean kina",
    symbol: "K"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Papoua-Ginea Nevez",
    pt: "Papua Nova Guiné",
    nl: "Papoea-Nieuw-Guinea",
    hr: "Papua Nova Gvineja",
    fa: "پاپوآ گینه نو",
    de: "Papua-Neuguinea",
    es: "Papúa Nueva Guinea",
    fr: "Papouasie-Nouvelle-Guinée",
    ja: "パプアニューギニア",
    it: "Papua Nuova Guinea",
    hu: "Pápua Új-Guinea"
  },
  flag: "https://flagcdn.com/pg.svg",
  cioc: "PNG",
  independent: true
}, {
  name: "Paraguay",
  topLevelDomain: [".py"],
  alpha2Code: "PY",
  alpha3Code: "PRY",
  callingCodes: ["595"],
  capital: "Asunción",
  altSpellings: ["PY", "Republic of Paraguay", "República del Paraguay", "Tetã Paraguái"],
  subregion: "South America",
  region: "Americas",
  population: 7132530,
  latlng: [-23, -58],
  demonym: "Paraguayan",
  area: 406752,
  gini: 45.7,
  timezones: ["UTC-04:00"],
  borders: ["ARG", "BOL", "BRA"],
  nativeName: "Paraguay",
  numericCode: "600",
  flags: {
    svg: "https://flagcdn.com/py.svg",
    png: "https://flagcdn.com/w320/py.png"
  },
  currencies: [{
    code: "PYG",
    name: "Paraguayan guaraní",
    symbol: "₲"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }, {
    iso639_1: "gn",
    iso639_2: "grn",
    name: "Guaraní",
    nativeName: "Avañe'ẽ"
  }],
  translations: {
    br: "Paraguay",
    pt: "Paraguai",
    nl: "Paraguay",
    hr: "Paragvaj",
    fa: "پاراگوئه",
    de: "Paraguay",
    es: "Paraguay",
    fr: "Paraguay",
    ja: "パラグアイ",
    it: "Paraguay",
    hu: "Paraguay"
  },
  flag: "https://flagcdn.com/py.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "PAR",
  independent: true
}, {
  name: "Peru",
  topLevelDomain: [".pe"],
  alpha2Code: "PE",
  alpha3Code: "PER",
  callingCodes: ["51"],
  capital: "Lima",
  altSpellings: ["PE", "Republic of Peru", " República del Perú"],
  subregion: "South America",
  region: "Americas",
  population: 32971846,
  latlng: [-10, -76],
  demonym: "Peruvian",
  area: 1285216,
  gini: 41.5,
  timezones: ["UTC-05:00"],
  borders: ["BOL", "BRA", "CHL", "COL", "ECU"],
  nativeName: "Perú",
  numericCode: "604",
  flags: {
    svg: "https://flagcdn.com/pe.svg",
    png: "https://flagcdn.com/w320/pe.png"
  },
  currencies: [{
    code: "PEN",
    name: "Peruvian sol",
    symbol: "S/."
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Perou",
    pt: "Peru",
    nl: "Peru",
    hr: "Peru",
    fa: "پرو",
    de: "Peru",
    es: "Perú",
    fr: "Pérou",
    ja: "ペルー",
    it: "Perù",
    hu: "Peru"
  },
  flag: "https://flagcdn.com/pe.svg",
  regionalBlocs: [{
    acronym: "PA",
    name: "Pacific Alliance",
    otherNames: ["Alianza del Pacífico"]
  }, {
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "PER",
  independent: true
}, {
  name: "Philippines",
  topLevelDomain: [".ph"],
  alpha2Code: "PH",
  alpha3Code: "PHL",
  callingCodes: ["63"],
  capital: "Manila",
  altSpellings: ["PH", "Republic of the Philippines", "Repúblika ng Pilipinas"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 109581085,
  latlng: [13, 122],
  demonym: "Filipino",
  area: 342353,
  gini: 42.3,
  timezones: ["UTC+08:00"],
  nativeName: "Pilipinas",
  numericCode: "608",
  flags: {
    svg: "https://flagcdn.com/ph.svg",
    png: "https://flagcdn.com/w320/ph.png"
  },
  currencies: [{
    code: "PHP",
    name: "Philippine peso",
    symbol: "₱"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Filipinez",
    pt: "Filipinas",
    nl: "Filipijnen",
    hr: "Filipini",
    fa: "جزایر الندفیلیپین",
    de: "Philippinen",
    es: "Filipinas",
    fr: "Philippines",
    ja: "フィリピン",
    it: "Filippine",
    hu: "Fülöp-szigetek"
  },
  flag: "https://flagcdn.com/ph.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "PHI",
  independent: true
}, {
  name: "Pitcairn",
  topLevelDomain: [".pn"],
  alpha2Code: "PN",
  alpha3Code: "PCN",
  callingCodes: ["64"],
  capital: "Adamstown",
  altSpellings: ["PN", "Pitcairn Henderson Ducie and Oeno Islands"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 56,
  latlng: [-25.06666666, -130.1],
  demonym: "Pitcairn Islander",
  area: 47,
  timezones: ["UTC-08:00"],
  nativeName: "Pitcairn Islands",
  numericCode: "612",
  flags: {
    svg: "https://flagcdn.com/pn.svg",
    png: "https://flagcdn.com/w320/pn.png"
  },
  currencies: [{
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$"
  }, {
    code: "PND",
    name: "Pitcairn Islands dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Pitcairn",
    pt: "Ilhas Picárnia",
    nl: "Pitcairneilanden",
    hr: "Pitcairnovo otočje",
    fa: "پیتکرن",
    de: "Pitcairn",
    es: "Islas Pitcairn",
    fr: "Îles Pitcairn",
    ja: "ピトケアン",
    it: "Isole Pitcairn",
    hu: "Pitcairn-szigetek"
  },
  flag: "https://flagcdn.com/pn.svg",
  independent: true
}, {
  name: "Poland",
  topLevelDomain: [".pl"],
  alpha2Code: "PL",
  alpha3Code: "POL",
  callingCodes: ["48"],
  capital: "Warsaw",
  altSpellings: ["PL", "Republic of Poland", "Rzeczpospolita Polska"],
  subregion: "Central Europe",
  region: "Europe",
  population: 37950802,
  latlng: [52, 20],
  demonym: "Polish",
  area: 312679,
  gini: 30.2,
  timezones: ["UTC+01:00"],
  borders: ["BLR", "CZE", "DEU", "LTU", "RUS", "SVK", "UKR"],
  nativeName: "Polska",
  numericCode: "616",
  flags: {
    svg: "https://flagcdn.com/pl.svg",
    png: "https://flagcdn.com/w320/pl.png"
  },
  currencies: [{
    code: "PLN",
    name: "Polish złoty",
    symbol: "zł"
  }],
  languages: [{
    iso639_1: "pl",
    iso639_2: "pol",
    name: "Polish",
    nativeName: "język polski"
  }],
  translations: {
    br: "Polonia",
    pt: "Polónia",
    nl: "Polen",
    hr: "Poljska",
    fa: "لهستان",
    de: "Polen",
    es: "Polonia",
    fr: "Pologne",
    ja: "ポーランド",
    it: "Polonia",
    hu: "Lengyelország"
  },
  flag: "https://flagcdn.com/pl.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "POL",
  independent: true
}, {
  name: "Portugal",
  topLevelDomain: [".pt"],
  alpha2Code: "PT",
  alpha3Code: "PRT",
  callingCodes: ["351"],
  capital: "Lisbon",
  altSpellings: ["PT", "Portuguesa", "Portuguese Republic", "República Portuguesa"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 10305564,
  latlng: [39.5, -8],
  demonym: "Portuguese",
  area: 92090,
  gini: 33.5,
  timezones: ["UTC-01:00", "UTC"],
  borders: ["ESP"],
  nativeName: "Portugal",
  numericCode: "620",
  flags: {
    svg: "https://flagcdn.com/pt.svg",
    png: "https://flagcdn.com/w320/pt.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }],
  translations: {
    br: "Portugal",
    pt: "Portugal",
    nl: "Portugal",
    hr: "Portugal",
    fa: "پرتغال",
    de: "Portugal",
    es: "Portugal",
    fr: "Portugal",
    ja: "ポルトガル",
    it: "Portogallo",
    hu: "Portugália"
  },
  flag: "https://flagcdn.com/pt.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "POR",
  independent: true
}, {
  name: "Puerto Rico",
  topLevelDomain: [".pr"],
  alpha2Code: "PR",
  alpha3Code: "PRI",
  callingCodes: ["1"],
  capital: "San Juan",
  altSpellings: ["PR", "Commonwealth of Puerto Rico", "Estado Libre Asociado de Puerto Rico"],
  subregion: "Caribbean",
  region: "Americas",
  population: 3194034,
  latlng: [18.25, -66.5],
  demonym: "Puerto Rican",
  area: 8870,
  timezones: ["UTC-04:00"],
  nativeName: "Puerto Rico",
  numericCode: "630",
  flags: {
    svg: "https://flagcdn.com/pr.svg",
    png: "https://flagcdn.com/w320/pr.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Puerto Rico",
    pt: "Porto Rico",
    nl: "Puerto Rico",
    hr: "Portoriko",
    fa: "پورتو ریکو",
    de: "Puerto Rico",
    es: "Puerto Rico",
    fr: "Porto Rico",
    ja: "プエルトリコ",
    it: "Porto Rico",
    hu: "Puerto Rico"
  },
  flag: "https://flagcdn.com/pr.svg",
  cioc: "PUR",
  independent: false
}, {
  name: "Qatar",
  topLevelDomain: [".qa"],
  alpha2Code: "QA",
  alpha3Code: "QAT",
  callingCodes: ["974"],
  capital: "Doha",
  altSpellings: ["QA", "State of Qatar", "Dawlat Qaṭar"],
  subregion: "Western Asia",
  region: "Asia",
  population: 2881060,
  latlng: [25.5, 51.25],
  demonym: "Qatari",
  area: 11586,
  timezones: ["UTC+03:00"],
  borders: ["SAU"],
  nativeName: "قطر",
  numericCode: "634",
  flags: {
    svg: "https://flagcdn.com/qa.svg",
    png: "https://flagcdn.com/w320/qa.png"
  },
  currencies: [{
    code: "QAR",
    name: "Qatari riyal",
    symbol: "ر.ق"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Katar",
    pt: "Catar",
    nl: "Qatar",
    hr: "Katar",
    fa: "قطر",
    de: "Katar",
    es: "Catar",
    fr: "Qatar",
    ja: "カタール",
    it: "Qatar",
    hu: "Katar"
  },
  flag: "https://flagcdn.com/qa.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "QAT",
  independent: true
}, {
  name: "Republic of Kosovo",
  topLevelDomain: [""],
  alpha2Code: "XK",
  alpha3Code: "UNK",
  callingCodes: ["383"],
  capital: "Pristina",
  altSpellings: ["XK", "Република Косово"],
  subregion: "Eastern Europe",
  region: "Europe",
  population: 1775378,
  latlng: [42.666667, 21.166667],
  demonym: "Kosovar",
  area: 10908,
  gini: 29,
  timezones: ["UTC+01:00"],
  borders: ["ALB", "MKD", "MNE", "SRB"],
  nativeName: "Republika e Kosovës",
  numericCode: "926",
  flags: {
    svg: "https://flagcdn.com/xk.svg",
    png: "https://flagcdn.com/w320/xk.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "sq",
    iso639_2: "sqi",
    name: "Albanian",
    nativeName: "Shqip"
  }, {
    iso639_1: "sr",
    iso639_2: "srp",
    name: "Serbian",
    nativeName: "српски језик"
  }],
  translations: {
    br: "Kosovo",
    pt: "Kosovo",
    nl: "Republiek van Kosovo",
    hr: "Kosovo",
    fa: "کوزوو",
    de: "Republic of Kosovo",
    es: "Kosovo",
    fr: "Kosovo",
    ja: "Republic of Kosovo",
    it: "Republic of Kosovo",
    hu: "Koszovó"
  },
  flag: "https://flagcdn.com/xk.svg",
  regionalBlocs: [{
    acronym: "CEFTA",
    name: "Central European Free Trade Agreement"
  }],
  independent: true
}, {
  name: "Réunion",
  topLevelDomain: [".re"],
  alpha2Code: "RE",
  alpha3Code: "REU",
  callingCodes: ["262"],
  capital: "Saint-Denis",
  altSpellings: ["RE", "Reunion"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 840974,
  latlng: [-21.15, 55.5],
  demonym: "French",
  timezones: ["UTC+04:00"],
  nativeName: "La Réunion",
  numericCode: "638",
  flags: {
    svg: "https://flagcdn.com/re.svg",
    png: "https://flagcdn.com/w320/re.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Reünion",
    pt: "Reunião",
    nl: "Réunion",
    hr: "Réunion",
    fa: "رئونیون",
    de: "Réunion",
    es: "Reunión",
    fr: "Réunion",
    ja: "レユニオン",
    it: "Riunione",
    hu: "Réunion"
  },
  flag: "https://flagcdn.com/re.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  independent: false
}, {
  name: "Romania",
  topLevelDomain: [".ro"],
  alpha2Code: "RO",
  alpha3Code: "ROU",
  callingCodes: ["40"],
  capital: "Bucharest",
  altSpellings: ["RO", "Rumania", "Roumania", "România"],
  subregion: "Eastern Europe",
  region: "Europe",
  population: 19286123,
  latlng: [46, 25],
  demonym: "Romanian",
  area: 238391,
  gini: 35.8,
  timezones: ["UTC+02:00"],
  borders: ["BGR", "HUN", "MDA", "SRB", "UKR"],
  nativeName: "România",
  numericCode: "642",
  flags: {
    svg: "https://flagcdn.com/ro.svg",
    png: "https://flagcdn.com/w320/ro.png"
  },
  currencies: [{
    code: "RON",
    name: "Romanian leu",
    symbol: "lei"
  }],
  languages: [{
    iso639_1: "ro",
    iso639_2: "ron",
    name: "Romanian",
    nativeName: "Română"
  }],
  translations: {
    br: "Roumania",
    pt: "Roménia",
    nl: "Roemenië",
    hr: "Rumunjska",
    fa: "رومانی",
    de: "Rumänien",
    es: "Rumania",
    fr: "Roumanie",
    ja: "ルーマニア",
    it: "Romania",
    hu: "Románia"
  },
  flag: "https://flagcdn.com/ro.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "ROU",
  independent: true
}, {
  name: "Russian Federation",
  topLevelDomain: [".ru"],
  alpha2Code: "RU",
  alpha3Code: "RUS",
  callingCodes: ["7"],
  capital: "Moscow",
  altSpellings: ["RU", "Rossiya", "Russian Federation", "Российская Федерация", "Rossiyskaya Federatsiya"],
  subregion: "Eastern Europe",
  region: "Europe",
  population: 144104080,
  latlng: [60, 100],
  demonym: "Russian",
  area: 17124442,
  gini: 37.5,
  timezones: ["UTC+03:00", "UTC+04:00", "UTC+06:00", "UTC+07:00", "UTC+08:00", "UTC+09:00", "UTC+10:00", "UTC+11:00", "UTC+12:00"],
  borders: ["AZE", "BLR", "CHN", "EST", "FIN", "GEO", "KAZ", "PRK", "LVA", "LTU", "MNG", "NOR", "POL", "UKR"],
  nativeName: "Россия",
  numericCode: "643",
  flags: {
    svg: "https://flagcdn.com/ru.svg",
    png: "https://flagcdn.com/w320/ru.png"
  },
  currencies: [{
    code: "RUB",
    name: "Russian ruble",
    symbol: "₽"
  }],
  languages: [{
    iso639_1: "ru",
    iso639_2: "rus",
    name: "Russian",
    nativeName: "Русский"
  }],
  translations: {
    br: "Rusia",
    pt: "Rússia",
    nl: "Rusland",
    hr: "Rusija",
    fa: "روسیه",
    de: "Russland",
    es: "Rusia",
    fr: "Russie",
    ja: "ロシア連邦",
    it: "Russia",
    hu: "Oroszország"
  },
  flag: "https://flagcdn.com/ru.svg",
  regionalBlocs: [{
    acronym: "EEU",
    name: "Eurasian Economic Union",
    otherAcronyms: ["EAEU"]
  }],
  cioc: "RUS",
  independent: true
}, {
  name: "Rwanda",
  topLevelDomain: [".rw"],
  alpha2Code: "RW",
  alpha3Code: "RWA",
  callingCodes: ["250"],
  capital: "Kigali",
  altSpellings: ["RW", "Republic of Rwanda", "Repubulika y'u Rwanda", "République du Rwanda"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 12952209,
  latlng: [-2, 30],
  demonym: "Rwandan",
  area: 26338,
  gini: 43.7,
  timezones: ["UTC+02:00"],
  borders: ["BDI", "COD", "TZA", "UGA"],
  nativeName: "Rwanda",
  numericCode: "646",
  flags: {
    svg: "https://flagcdn.com/rw.svg",
    png: "https://flagcdn.com/w320/rw.png"
  },
  currencies: [{
    code: "RWF",
    name: "Rwandan franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "rw",
    iso639_2: "kin",
    name: "Kinyarwanda",
    nativeName: "Ikinyarwanda"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Rwanda",
    pt: "Ruanda",
    nl: "Rwanda",
    hr: "Ruanda",
    fa: "رواندا",
    de: "Ruanda",
    es: "Ruanda",
    fr: "Rwanda",
    ja: "ルワンダ",
    it: "Ruanda",
    hu: "Ruanda"
  },
  flag: "https://flagcdn.com/rw.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "RWA",
  independent: true
}, {
  name: "Saint Barthélemy",
  topLevelDomain: [".bl"],
  alpha2Code: "BL",
  alpha3Code: "BLM",
  callingCodes: ["590"],
  capital: "Gustavia",
  altSpellings: ["BL", "St. Barthelemy", "Collectivity of Saint Barthélemy", "Collectivité de Saint-Barthélemy"],
  subregion: "Caribbean",
  region: "Americas",
  population: 9417,
  latlng: [18.5, -63.41666666],
  demonym: "Saint Barthélemy Islander",
  area: 21,
  timezones: ["UTC-04:00"],
  nativeName: "Saint-Barthélemy",
  numericCode: "652",
  flags: {
    svg: "https://flagcdn.com/bl.svg",
    png: "https://flagcdn.com/w320/bl.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Saint-Barthélemy",
    pt: "São Bartolomeu",
    nl: "Saint Barthélemy",
    hr: "Saint Barthélemy",
    fa: "سن-بارتلمی",
    de: "Saint-Barthélemy",
    es: "San Bartolomé",
    fr: "Saint-Barthélemy",
    ja: "サン・バルテルミー",
    it: "Antille Francesi",
    hu: "Saint-Barthélemy"
  },
  flag: "https://flagcdn.com/bl.svg",
  independent: false
}, {
  name: "Saint Helena, Ascension and Tristan da Cunha",
  topLevelDomain: [".sh"],
  alpha2Code: "SH",
  alpha3Code: "SHN",
  callingCodes: ["290"],
  capital: "Jamestown",
  altSpellings: ["SH"],
  subregion: "Western Africa",
  region: "Africa",
  population: 4255,
  latlng: [-15.95, -5.7],
  demonym: "Saint Helenian",
  timezones: ["UTC+00:00"],
  nativeName: "Saint Helena",
  numericCode: "654",
  flags: {
    svg: "https://flagcdn.com/sh.svg",
    png: "https://flagcdn.com/w320/sh.png"
  },
  currencies: [{
    code: "SHP",
    name: "Saint Helena pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Saint Helena, Ascension ha Tristan da Cunha",
    pt: "Santa Helena",
    nl: "Sint-Helena",
    hr: "Sveta Helena",
    fa: "سنت هلنا، اسنشن و تریستان دا کونا",
    de: "Sankt Helena",
    es: "Santa Helena",
    fr: "Sainte-Hélène",
    ja: "セントヘレナ・アセンションおよびトリスタンダクーニャ",
    it: "Sant'Elena",
    hu: "Szent Ilona"
  },
  flag: "https://flagcdn.com/sh.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  independent: false
}, {
  name: "Saint Kitts and Nevis",
  topLevelDomain: [".kn"],
  alpha2Code: "KN",
  alpha3Code: "KNA",
  callingCodes: ["1"],
  capital: "Basseterre",
  altSpellings: ["KN", "Federation of Saint Christopher and Nevis"],
  subregion: "Caribbean",
  region: "Americas",
  population: 53192,
  latlng: [17.33333333, -62.75],
  demonym: "Kittian and Nevisian",
  area: 261,
  timezones: ["UTC-04:00"],
  nativeName: "Saint Kitts and Nevis",
  numericCode: "659",
  flags: {
    svg: "https://flagcdn.com/kn.svg",
    png: "https://flagcdn.com/w320/kn.png"
  },
  currencies: [{
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Saint Kitts ha Nevis",
    pt: "São Cristóvão e Neves",
    nl: "Saint Kitts en Nevis",
    hr: "Sveti Kristof i Nevis",
    fa: "سنت کیتس و نویس",
    de: "St. Kitts und Nevis",
    es: "San Cristóbal y Nieves",
    fr: "Saint-Christophe-et-Niévès",
    ja: "セントクリストファー・ネイビス",
    it: "Saint Kitts e Nevis",
    hu: "Saint Kitts és Nevis"
  },
  flag: "https://flagcdn.com/kn.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "SKN",
  independent: true
}, {
  name: "Saint Lucia",
  topLevelDomain: [".lc"],
  alpha2Code: "LC",
  alpha3Code: "LCA",
  callingCodes: ["1"],
  capital: "Castries",
  altSpellings: ["LC"],
  subregion: "Caribbean",
  region: "Americas",
  population: 183629,
  latlng: [13.88333333, -60.96666666],
  demonym: "Saint Lucian",
  area: 616,
  gini: 51.2,
  timezones: ["UTC-04:00"],
  nativeName: "Saint Lucia",
  numericCode: "662",
  flags: {
    svg: "https://flagcdn.com/lc.svg",
    png: "https://flagcdn.com/w320/lc.png"
  },
  currencies: [{
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Santez-Lusia",
    pt: "Santa Lúcia",
    nl: "Saint Lucia",
    hr: "Sveta Lucija",
    fa: "سنت لوسیا",
    de: "Saint Lucia",
    es: "Santa Lucía",
    fr: "Saint-Lucie",
    ja: "セントルシア",
    it: "Santa Lucia",
    hu: "Saint Lucia"
  },
  flag: "https://flagcdn.com/lc.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "LCA",
  independent: true
}, {
  name: "Saint Martin (French part)",
  topLevelDomain: [".mf", ".fr", ".gp"],
  alpha2Code: "MF",
  alpha3Code: "MAF",
  callingCodes: ["590"],
  capital: "Marigot",
  altSpellings: ["MF", "Collectivity of Saint Martin", "Collectivité de Saint-Martin"],
  subregion: "Caribbean",
  region: "Americas",
  population: 38659,
  latlng: [18.08333333, -63.95],
  demonym: "Saint Martin Islander",
  area: 53,
  timezones: ["UTC-04:00"],
  borders: ["SXM", "NLD"],
  nativeName: "Saint-Martin",
  numericCode: "663",
  flags: {
    svg: "https://flagcdn.com/mf.svg",
    png: "https://flagcdn.com/w320/mf.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "nl",
    iso639_2: "nld",
    name: "Dutch",
    nativeName: "Nederlands"
  }],
  translations: {
    br: "Saint-Martin",
    pt: "Ilha São Martinho",
    nl: "Saint-Martin",
    hr: "Sveti Martin",
    fa: "سینت مارتن",
    de: "Saint Martin",
    es: "Saint Martin",
    fr: "Saint-Martin",
    ja: "サン・マルタン（フランス領）",
    it: "Saint Martin",
    hu: "Saint-Martin"
  },
  flag: "https://flagcdn.com/mf.svg",
  independent: false
}, {
  name: "Saint Pierre and Miquelon",
  topLevelDomain: [".pm"],
  alpha2Code: "PM",
  alpha3Code: "SPM",
  callingCodes: ["508"],
  capital: "Saint-Pierre",
  altSpellings: ["PM", "Collectivité territoriale de Saint-Pierre-et-Miquelon"],
  subregion: "Northern America",
  region: "Americas",
  population: 6069,
  latlng: [46.83333333, -56.33333333],
  demonym: "French",
  area: 242,
  timezones: ["UTC-03:00"],
  nativeName: "Saint-Pierre-et-Miquelon",
  numericCode: "666",
  flags: {
    svg: "https://flagcdn.com/pm.svg",
    png: "https://flagcdn.com/w320/pm.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Sant-Pêr-ha-Mikelon",
    pt: "São Pedro e Miquelon",
    nl: "Saint Pierre en Miquelon",
    hr: "Sveti Petar i Mikelon",
    fa: "سن پیر و میکلن",
    de: "Saint-Pierre und Miquelon",
    es: "San Pedro y Miquelón",
    fr: "Saint-Pierre-et-Miquelon",
    ja: "サンピエール島・ミクロン島",
    it: "Saint-Pierre e Miquelon",
    hu: "Saint-Pierre és Miquelon"
  },
  flag: "https://flagcdn.com/pm.svg",
  independent: false
}, {
  name: "Saint Vincent and the Grenadines",
  topLevelDomain: [".vc"],
  alpha2Code: "VC",
  alpha3Code: "VCT",
  callingCodes: ["1"],
  capital: "Kingstown",
  altSpellings: ["VC"],
  subregion: "Caribbean",
  region: "Americas",
  population: 110947,
  latlng: [13.25, -61.2],
  demonym: "Saint Vincentian",
  area: 389,
  timezones: ["UTC-04:00"],
  nativeName: "Saint Vincent and the Grenadines",
  numericCode: "670",
  flags: {
    svg: "https://flagcdn.com/vc.svg",
    png: "https://flagcdn.com/w320/vc.png"
  },
  currencies: [{
    code: "XCD",
    name: "East Caribbean dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Sant-Visant hag ar Grenadinez",
    pt: "São Vicente e Granadinas",
    nl: "Saint Vincent en de Grenadines",
    hr: "Sveti Vincent i Grenadini",
    fa: "سنت وینسنت و گرنادین‌ها",
    de: "Saint Vincent und die Grenadinen",
    es: "San Vicente y Granadinas",
    fr: "Saint-Vincent-et-les-Grenadines",
    ja: "セントビンセントおよびグレナディーン諸島",
    it: "Saint Vincent e Grenadine",
    hu: "Saint Vincent és a Grenadine-szigetek"
  },
  flag: "https://flagcdn.com/vc.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "VIN",
  independent: true
}, {
  name: "Samoa",
  topLevelDomain: [".ws"],
  alpha2Code: "WS",
  alpha3Code: "WSM",
  callingCodes: ["685"],
  capital: "Apia",
  altSpellings: ["WS", "Independent State of Samoa", "Malo Saʻoloto Tutoʻatasi o Sāmoa"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 198410,
  latlng: [-13.58333333, -172.33333333],
  demonym: "Samoan",
  area: 2842,
  gini: 38.7,
  timezones: ["UTC+13:00"],
  nativeName: "Samoa",
  numericCode: "882",
  flags: {
    svg: "https://flagcdn.com/ws.svg",
    png: "https://flagcdn.com/w320/ws.png"
  },
  currencies: [{
    code: "WST",
    name: "Samoan tālā",
    symbol: "T"
  }],
  languages: [{
    iso639_1: "sm",
    iso639_2: "smo",
    name: "Samoan",
    nativeName: "gagana fa'a Samoa"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Samoa",
    pt: "Samoa",
    nl: "Samoa",
    hr: "Samoa",
    fa: "ساموآ",
    de: "Samoa",
    es: "Samoa",
    fr: "Samoa",
    ja: "サモア",
    it: "Samoa",
    hu: "Szamoa"
  },
  flag: "https://flagcdn.com/ws.svg",
  cioc: "SAM",
  independent: true
}, {
  name: "San Marino",
  topLevelDomain: [".sm"],
  alpha2Code: "SM",
  alpha3Code: "SMR",
  callingCodes: ["378"],
  capital: "City of San Marino",
  altSpellings: ["SM", "Republic of San Marino", "Repubblica di San Marino"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 33938,
  latlng: [43.76666666, 12.41666666],
  demonym: "Sammarinese",
  area: 61,
  timezones: ["UTC+01:00"],
  borders: ["ITA"],
  nativeName: "San Marino",
  numericCode: "674",
  flags: {
    svg: "https://flagcdn.com/sm.svg",
    png: "https://flagcdn.com/w320/sm.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "it",
    iso639_2: "ita",
    name: "Italian",
    nativeName: "Italiano"
  }],
  translations: {
    br: "San Marino",
    pt: "São Marinho",
    nl: "San Marino",
    hr: "San Marino",
    fa: "سان مارینو",
    de: "San Marino",
    es: "San Marino",
    fr: "Saint-Marin",
    ja: "サンマリノ",
    it: "San Marino",
    hu: "San Marino"
  },
  flag: "https://flagcdn.com/sm.svg",
  cioc: "SMR",
  independent: true
}, {
  name: "Sao Tome and Principe",
  topLevelDomain: [".st"],
  alpha2Code: "ST",
  alpha3Code: "STP",
  callingCodes: ["239"],
  capital: "São Tomé",
  altSpellings: ["ST", "Democratic Republic of São Tomé and Príncipe", "República Democrática de São Tomé e Príncipe"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 219161,
  latlng: [1, 7],
  demonym: "Sao Tomean",
  area: 964,
  gini: 56.3,
  timezones: ["UTC"],
  nativeName: "São Tomé e Príncipe",
  numericCode: "678",
  flags: {
    svg: "https://flagcdn.com/st.svg",
    png: "https://flagcdn.com/w320/st.png"
  },
  currencies: [{
    code: "STD",
    name: "São Tomé and Príncipe dobra",
    symbol: "Db"
  }],
  languages: [{
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }],
  translations: {
    br: "São Tomé ha Príncipe",
    pt: "São Tomé e Príncipe",
    nl: "Sao Tomé en Principe",
    hr: "Sveti Toma i Princip",
    fa: "کواترو دو فرویرو",
    de: "São Tomé und Príncipe",
    es: "Santo Tomé y Príncipe",
    fr: "Sao Tomé-et-Principe",
    ja: "サントメ・プリンシペ",
    it: "São Tomé e Príncipe",
    hu: "São Tomé és Príncipe"
  },
  flag: "https://flagcdn.com/st.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "STP",
  independent: true
}, {
  name: "Saudi Arabia",
  topLevelDomain: [".sa"],
  alpha2Code: "SA",
  alpha3Code: "SAU",
  callingCodes: ["966"],
  capital: "Riyadh",
  altSpellings: ["SA", "Kingdom of Saudi Arabia", "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"],
  subregion: "Western Asia",
  region: "Asia",
  population: 34813867,
  latlng: [25, 45],
  demonym: "Saudi Arabian",
  area: 2149690,
  timezones: ["UTC+03:00"],
  borders: ["IRQ", "JOR", "KWT", "OMN", "QAT", "ARE", "YEM"],
  nativeName: "العربية السعودية",
  numericCode: "682",
  flags: {
    svg: "https://flagcdn.com/sa.svg",
    png: "https://flagcdn.com/w320/sa.png"
  },
  currencies: [{
    code: "SAR",
    name: "Saudi riyal",
    symbol: "ر.س"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Arabia Saoudat",
    pt: "Arábia Saudita",
    nl: "Saoedi-Arabië",
    hr: "Saudijska Arabija",
    fa: "عربستان سعودی",
    de: "Saudi-Arabien",
    es: "Arabia Saudí",
    fr: "Arabie Saoudite",
    ja: "サウジアラビア",
    it: "Arabia Saudita",
    hu: "Szaúd-Arábia"
  },
  flag: "https://flagcdn.com/sa.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "KSA",
  independent: true
}, {
  name: "Senegal",
  topLevelDomain: [".sn"],
  alpha2Code: "SN",
  alpha3Code: "SEN",
  callingCodes: ["221"],
  capital: "Dakar",
  altSpellings: ["SN", "Republic of Senegal", "République du Sénégal"],
  subregion: "Western Africa",
  region: "Africa",
  population: 16743930,
  latlng: [14, -14],
  demonym: "Senegalese",
  area: 196722,
  gini: 40.3,
  timezones: ["UTC"],
  borders: ["GMB", "GIN", "GNB", "MLI", "MRT"],
  nativeName: "Sénégal",
  numericCode: "686",
  flags: {
    svg: "https://flagcdn.com/sn.svg",
    png: "https://flagcdn.com/w320/sn.png"
  },
  currencies: [{
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Senegal",
    pt: "Senegal",
    nl: "Senegal",
    hr: "Senegal",
    fa: "سنگال",
    de: "Senegal",
    es: "Senegal",
    fr: "Sénégal",
    ja: "セネガル",
    it: "Senegal",
    hu: "Szenegál"
  },
  flag: "https://flagcdn.com/sn.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "SEN",
  independent: true
}, {
  name: "Serbia",
  topLevelDomain: [".rs"],
  alpha2Code: "RS",
  alpha3Code: "SRB",
  callingCodes: ["381"],
  capital: "Belgrade",
  altSpellings: ["RS", "Srbija", "Republic of Serbia", "Република Србија", "Republika Srbija"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 6908224,
  latlng: [44, 21],
  demonym: "Serbian",
  area: 88361,
  gini: 36.2,
  timezones: ["UTC+01:00"],
  borders: ["BIH", "BGR", "HRV", "HUN", "UNK", "MKD", "MNE", "ROU"],
  nativeName: "Србија",
  numericCode: "688",
  flags: {
    svg: "https://flagcdn.com/rs.svg",
    png: "https://flagcdn.com/w320/rs.png"
  },
  currencies: [{
    code: "RSD",
    name: "Serbian dinar",
    symbol: "дин."
  }],
  languages: [{
    iso639_1: "sr",
    iso639_2: "srp",
    name: "Serbian",
    nativeName: "српски језик"
  }],
  translations: {
    br: "Serbia",
    pt: "Sérvia",
    nl: "Servië",
    hr: "Srbija",
    fa: "صربستان",
    de: "Serbien",
    es: "Serbia",
    fr: "Serbie",
    ja: "セルビア",
    it: "Serbia",
    hu: "Szerbia"
  },
  flag: "https://flagcdn.com/rs.svg",
  regionalBlocs: [{
    acronym: "CEFTA",
    name: "Central European Free Trade Agreement"
  }],
  cioc: "SRB",
  independent: true
}, {
  name: "Seychelles",
  topLevelDomain: [".sc"],
  alpha2Code: "SC",
  alpha3Code: "SYC",
  callingCodes: ["248"],
  capital: "Victoria",
  altSpellings: ["SC", "Republic of Seychelles", "Repiblik Sesel", "République des Seychelles"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 98462,
  latlng: [-4.58333333, 55.66666666],
  demonym: "Seychellois",
  area: 452,
  gini: 32.1,
  timezones: ["UTC+04:00"],
  nativeName: "Seychelles",
  numericCode: "690",
  flags: {
    svg: "https://flagcdn.com/sc.svg",
    png: "https://flagcdn.com/w320/sc.png"
  },
  currencies: [{
    code: "SCR",
    name: "Seychellois rupee",
    symbol: "₨"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Sechelez",
    pt: "Seicheles",
    nl: "Seychellen",
    hr: "Sejšeli",
    fa: "سیشل",
    de: "Seychellen",
    es: "Seychelles",
    fr: "Seychelles",
    ja: "セーシェル",
    it: "Seychelles",
    hu: "Seychelle-szigetek"
  },
  flag: "https://flagcdn.com/sc.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "SEY",
  independent: true
}, {
  name: "Sierra Leone",
  topLevelDomain: [".sl"],
  alpha2Code: "SL",
  alpha3Code: "SLE",
  callingCodes: ["232"],
  capital: "Freetown",
  altSpellings: ["SL", "Republic of Sierra Leone"],
  subregion: "Western Africa",
  region: "Africa",
  population: 7976985,
  latlng: [8.5, -11.5],
  demonym: "Sierra Leonean",
  area: 71740,
  gini: 35.7,
  timezones: ["UTC"],
  borders: ["GIN", "LBR"],
  nativeName: "Sierra Leone",
  numericCode: "694",
  flags: {
    svg: "https://flagcdn.com/sl.svg",
    png: "https://flagcdn.com/w320/sl.png"
  },
  currencies: [{
    code: "SLL",
    name: "Sierra Leonean leone",
    symbol: "Le"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Sierra Leone",
    pt: "Serra Leoa",
    nl: "Sierra Leone",
    hr: "Sijera Leone",
    fa: "سیرالئون",
    de: "Sierra Leone",
    es: "Sierra Leone",
    fr: "Sierra Leone",
    ja: "シエラレオネ",
    it: "Sierra Leone",
    hu: "Sierra Leone"
  },
  flag: "https://flagcdn.com/sl.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "SLE",
  independent: true
}, {
  name: "Singapore",
  topLevelDomain: [".sg"],
  alpha2Code: "SG",
  alpha3Code: "SGP",
  callingCodes: ["65"],
  capital: "Singapore",
  altSpellings: ["SG", "Singapura", "Republik Singapura", "新加坡共和国"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 5685807,
  latlng: [1.36666666, 103.8],
  demonym: "Singaporean",
  area: 710,
  timezones: ["UTC+08:00"],
  nativeName: "Singapore",
  numericCode: "702",
  flags: {
    svg: "https://flagcdn.com/sg.svg",
    png: "https://flagcdn.com/w320/sg.png"
  },
  currencies: [{
    code: "SGD",
    name: "Singapore dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "ms",
    iso639_2: "msa",
    name: "Malay",
    nativeName: "bahasa Melayu"
  }, {
    iso639_1: "ta",
    iso639_2: "tam",
    name: "Tamil",
    nativeName: "தமிழ்"
  }, {
    iso639_1: "zh",
    iso639_2: "zho",
    name: "Chinese",
    nativeName: "中文 (Zhōngwén)"
  }],
  translations: {
    br: "Singapour",
    pt: "Singapura",
    nl: "Singapore",
    hr: "Singapur",
    fa: "سنگاپور",
    de: "Singapur",
    es: "Singapur",
    fr: "Singapour",
    ja: "シンガポール",
    it: "Singapore",
    hu: "Szingapúr"
  },
  flag: "https://flagcdn.com/sg.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "SIN",
  independent: true
}, {
  name: "Sint Maarten (Dutch part)",
  topLevelDomain: [".sx"],
  alpha2Code: "SX",
  alpha3Code: "SXM",
  callingCodes: ["1"],
  capital: "Philipsburg",
  altSpellings: ["SX"],
  subregion: "Caribbean",
  region: "Americas",
  population: 40812,
  latlng: [18.033333, -63.05],
  demonym: "Dutch",
  area: 34,
  timezones: ["UTC-04:00"],
  borders: ["MAF"],
  nativeName: "Sint Maarten",
  numericCode: "534",
  flags: {
    svg: "https://flagcdn.com/sx.svg",
    png: "https://flagcdn.com/w320/sx.png"
  },
  currencies: [{
    code: "ANG",
    name: "Netherlands Antillean guilder",
    symbol: "ƒ"
  }],
  languages: [{
    iso639_1: "nl",
    iso639_2: "nld",
    name: "Dutch",
    nativeName: "Nederlands"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Sint Maarten",
    pt: "São Martinho",
    nl: "Sint Maarten",
    hr: "Sint Maarten (Dutch part)",
    fa: "سینت مارتن",
    de: "Sint Maarten (niederl. Teil)",
    es: "Sint Maarten (Dutch part)",
    fr: "Saint Martin (partie néerlandaise)",
    ja: "Sint Maarten (Dutch part)",
    it: "Saint Martin (parte olandese)",
    hu: "Sint Maarten"
  },
  flag: "https://flagcdn.com/sx.svg",
  independent: false
}, {
  name: "Slovakia",
  topLevelDomain: [".sk"],
  alpha2Code: "SK",
  alpha3Code: "SVK",
  callingCodes: ["421"],
  capital: "Bratislava",
  altSpellings: ["SK", "Slovak Republic", "Slovenská republika"],
  subregion: "Central Europe",
  region: "Europe",
  population: 5458827,
  latlng: [48.66666666, 19.5],
  demonym: "Slovak",
  area: 49037,
  gini: 25,
  timezones: ["UTC+01:00"],
  borders: ["AUT", "CZE", "HUN", "POL", "UKR"],
  nativeName: "Slovensko",
  numericCode: "703",
  flags: {
    svg: "https://flagcdn.com/sk.svg",
    png: "https://flagcdn.com/w320/sk.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "sk",
    iso639_2: "slk",
    name: "Slovak",
    nativeName: "slovenčina"
  }],
  translations: {
    br: "Slovakia",
    pt: "Eslováquia",
    nl: "Slowakije",
    hr: "Slovačka",
    fa: "اسلواکی",
    de: "Slowakei",
    es: "República Eslovaca",
    fr: "Slovaquie",
    ja: "スロバキア",
    it: "Slovacchia",
    hu: "Szlovákia"
  },
  flag: "https://flagcdn.com/sk.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "SVK",
  independent: true
}, {
  name: "Slovenia",
  topLevelDomain: [".si"],
  alpha2Code: "SI",
  alpha3Code: "SVN",
  callingCodes: ["386"],
  capital: "Ljubljana",
  altSpellings: ["SI", "Republic of Slovenia", "Republika Slovenija"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 2100126,
  latlng: [46.11666666, 14.81666666],
  demonym: "Slovene",
  area: 20273,
  gini: 24.6,
  timezones: ["UTC+01:00"],
  borders: ["AUT", "HRV", "ITA", "HUN"],
  nativeName: "Slovenija",
  numericCode: "705",
  flags: {
    svg: "https://flagcdn.com/si.svg",
    png: "https://flagcdn.com/w320/si.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "sl",
    iso639_2: "slv",
    name: "Slovene",
    nativeName: "slovenski jezik"
  }],
  translations: {
    br: "Slovenia",
    pt: "Eslovénia",
    nl: "Slovenië",
    hr: "Slovenija",
    fa: "اسلوونی",
    de: "Slowenien",
    es: "Eslovenia",
    fr: "Slovénie",
    ja: "スロベニア",
    it: "Slovenia",
    hu: "Szlovénia"
  },
  flag: "https://flagcdn.com/si.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "SLO",
  independent: true
}, {
  name: "Solomon Islands",
  topLevelDomain: [".sb"],
  alpha2Code: "SB",
  alpha3Code: "SLB",
  callingCodes: ["677"],
  capital: "Honiara",
  altSpellings: ["SB"],
  subregion: "Melanesia",
  region: "Oceania",
  population: 686878,
  latlng: [-8, 159],
  demonym: "Solomon Islander",
  area: 28896,
  gini: 37.1,
  timezones: ["UTC+11:00"],
  nativeName: "Solomon Islands",
  numericCode: "090",
  flags: {
    svg: "https://flagcdn.com/sb.svg",
    png: "https://flagcdn.com/w320/sb.png"
  },
  currencies: [{
    code: "SBD",
    name: "Solomon Islands dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Salomon",
    pt: "Ilhas Salomão",
    nl: "Salomonseilanden",
    hr: "Solomonski Otoci",
    fa: "جزایر سلیمان",
    de: "Salomonen",
    es: "Islas Salomón",
    fr: "Îles Salomon",
    ja: "ソロモン諸島",
    it: "Isole Salomone",
    hu: "Salamon-szigetek"
  },
  flag: "https://flagcdn.com/sb.svg",
  cioc: "SOL",
  independent: true
}, {
  name: "Somalia",
  topLevelDomain: [".so"],
  alpha2Code: "SO",
  alpha3Code: "SOM",
  callingCodes: ["252"],
  capital: "Mogadishu",
  altSpellings: ["SO", "aṣ-Ṣūmāl", "Federal Republic of Somalia", "Jamhuuriyadda Federaalka Soomaaliya", "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 15893219,
  latlng: [10, 49],
  demonym: "Somali",
  area: 637657,
  gini: 36.8,
  timezones: ["UTC+03:00"],
  borders: ["DJI", "ETH", "KEN"],
  nativeName: "Soomaaliya",
  numericCode: "706",
  flags: {
    svg: "https://flagcdn.com/so.svg",
    png: "https://flagcdn.com/w320/so.png"
  },
  currencies: [{
    code: "SOS",
    name: "Somali shilling",
    symbol: "Sh"
  }],
  languages: [{
    iso639_1: "so",
    iso639_2: "som",
    name: "Somali",
    nativeName: "Soomaaliga"
  }, {
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Somalia",
    pt: "Somália",
    nl: "Somalië",
    hr: "Somalija",
    fa: "سومالی",
    de: "Somalia",
    es: "Somalia",
    fr: "Somalie",
    ja: "ソマリア",
    it: "Somalia",
    hu: "Szomália"
  },
  flag: "https://flagcdn.com/so.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "SOM",
  independent: true
}, {
  name: "South Africa",
  topLevelDomain: [".za"],
  alpha2Code: "ZA",
  alpha3Code: "ZAF",
  callingCodes: ["27"],
  capital: "Pretoria",
  altSpellings: ["ZA", "RSA", "Suid-Afrika", "Republic of South Africa"],
  subregion: "Southern Africa",
  region: "Africa",
  population: 59308690,
  latlng: [-29, 24],
  demonym: "South African",
  area: 1221037,
  gini: 63,
  timezones: ["UTC+02:00"],
  borders: ["BWA", "LSO", "MOZ", "NAM", "SWZ", "ZWE"],
  nativeName: "South Africa",
  numericCode: "710",
  flags: {
    svg: "https://flagcdn.com/za.svg",
    png: "https://flagcdn.com/w320/za.png"
  },
  currencies: [{
    code: "ZAR",
    name: "South African rand",
    symbol: "R"
  }],
  languages: [{
    iso639_1: "af",
    iso639_2: "afr",
    name: "Afrikaans",
    nativeName: "Afrikaans"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "nr",
    iso639_2: "nbl",
    name: "Southern Ndebele",
    nativeName: "isiNdebele"
  }, {
    iso639_1: "st",
    iso639_2: "sot",
    name: "Southern Sotho",
    nativeName: "Sesotho"
  }, {
    iso639_1: "ss",
    iso639_2: "ssw",
    name: "Swati",
    nativeName: "SiSwati"
  }, {
    iso639_1: "tn",
    iso639_2: "tsn",
    name: "Tswana",
    nativeName: "Setswana"
  }, {
    iso639_1: "ts",
    iso639_2: "tso",
    name: "Tsonga",
    nativeName: "Xitsonga"
  }, {
    iso639_1: "ve",
    iso639_2: "ven",
    name: "Venda",
    nativeName: "Tshivenḓa"
  }, {
    iso639_1: "xh",
    iso639_2: "xho",
    name: "Xhosa",
    nativeName: "isiXhosa"
  }, {
    iso639_1: "zu",
    iso639_2: "zul",
    name: "Zulu",
    nativeName: "isiZulu"
  }],
  translations: {
    br: "Suafrika",
    pt: "República Sul-Africana",
    nl: "Zuid-Afrika",
    hr: "Južnoafrička Republika",
    fa: "آفریقای جنوبی",
    de: "Republik Südafrika",
    es: "República de Sudáfrica",
    fr: "Afrique du Sud",
    ja: "南アフリカ",
    it: "Sud Africa",
    hu: "Dél-afrikai Köztársaság"
  },
  flag: "https://flagcdn.com/za.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "RSA",
  independent: true
}, {
  name: "South Georgia and the South Sandwich Islands",
  topLevelDomain: [".gs"],
  alpha2Code: "GS",
  alpha3Code: "SGS",
  callingCodes: ["500"],
  capital: "King Edward Point",
  altSpellings: ["GS", "South Georgia and the South Sandwich Islands"],
  subregion: "South America",
  region: "Americas",
  population: 30,
  latlng: [-54.5, -37],
  demonym: "South Georgia and the South Sandwich Islander",
  timezones: ["UTC-02:00"],
  nativeName: "South Georgia",
  numericCode: "239",
  flags: {
    svg: "https://flagcdn.com/gs.svg",
    png: "https://flagcdn.com/w320/gs.png"
  },
  currencies: [{
    code: "FKP",
    name: "Falkland Islands Pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Georgia ar Su hag Inizi Sandwich ar Su",
    pt: "Ilhas Geórgia do Sul e Sanduíche do Sul",
    nl: "Zuid-Georgia en Zuidelijke Sandwicheilanden",
    hr: "Južna Georgija i otočje Južni Sandwich",
    fa: "جزایر جورجیای جنوبی و ساندویچ جنوبی",
    de: "Südgeorgien und die Südlichen Sandwichinseln",
    es: "Islas Georgias del Sur y Sandwich del Sur",
    fr: "Géorgie du Sud-et-les Îles Sandwich du Sud",
    ja: "サウスジョージア・サウスサンドウィッチ諸島",
    it: "Georgia del Sud e Isole Sandwich Meridionali",
    hu: "Déli-Georgia és Déli-Sandwich-szigetek"
  },
  flag: "https://flagcdn.com/gs.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  independent: false
}, {
  name: "Korea (Republic of)",
  topLevelDomain: [".kr"],
  alpha2Code: "KR",
  alpha3Code: "KOR",
  callingCodes: ["82"],
  capital: "Seoul",
  altSpellings: ["KR", "Republic of Korea"],
  subregion: "Eastern Asia",
  region: "Asia",
  population: 51780579,
  latlng: [37, 127.5],
  demonym: "South Korean",
  area: 100210,
  gini: 31.4,
  timezones: ["UTC+09:00"],
  borders: ["PRK"],
  nativeName: "대한민국",
  numericCode: "410",
  flags: {
    svg: "https://flagcdn.com/kr.svg",
    png: "https://flagcdn.com/w320/kr.png"
  },
  currencies: [{
    code: "KRW",
    name: "South Korean won",
    symbol: "₩"
  }],
  languages: [{
    iso639_1: "ko",
    iso639_2: "kor",
    name: "Korean",
    nativeName: "한국어"
  }],
  translations: {
    br: "Korea ar Su",
    pt: "Coreia do Sul",
    nl: "Zuid-Korea",
    hr: "Južna Koreja",
    fa: "کره شمالی",
    de: "Südkorea",
    es: "Corea del Sur",
    fr: "Corée du Sud",
    ja: "大韓民国",
    it: "Corea del Sud",
    hu: "Dél-Korea"
  },
  flag: "https://flagcdn.com/kr.svg",
  cioc: "KOR",
  independent: true
}, {
  name: "Spain",
  topLevelDomain: [".es"],
  alpha2Code: "ES",
  alpha3Code: "ESP",
  callingCodes: ["34"],
  capital: "Madrid",
  altSpellings: ["ES", "Kingdom of Spain", "Reino de España"],
  subregion: "Southern Europe",
  region: "Europe",
  population: 47351567,
  latlng: [40, -4],
  demonym: "Spanish",
  area: 505992,
  gini: 34.7,
  timezones: ["UTC", "UTC+01:00"],
  borders: ["AND", "FRA", "GIB", "PRT", "MAR"],
  nativeName: "España",
  numericCode: "724",
  flags: {
    svg: "https://flagcdn.com/es.svg",
    png: "https://flagcdn.com/w320/es.png"
  },
  currencies: [{
    code: "EUR",
    name: "Euro",
    symbol: "€"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Spagn",
    pt: "Espanha",
    nl: "Spanje",
    hr: "Španjolska",
    fa: "اسپانیا",
    de: "Spanien",
    es: "España",
    fr: "Espagne",
    ja: "スペイン",
    it: "Spagna",
    hu: "Spanyolország"
  },
  flag: "https://flagcdn.com/es.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "ESP",
  independent: true
}, {
  name: "Sri Lanka",
  topLevelDomain: [".lk"],
  alpha2Code: "LK",
  alpha3Code: "LKA",
  callingCodes: ["94"],
  capital: "Sri Jayawardenepura Kotte",
  altSpellings: ["LK", "ilaṅkai", "Democratic Socialist Republic of Sri Lanka"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 21919000,
  latlng: [7, 81],
  demonym: "Sri Lankan",
  area: 65610,
  gini: 39.3,
  timezones: ["UTC+05:30"],
  borders: ["IND"],
  nativeName: "śrī laṃkāva",
  numericCode: "144",
  flags: {
    svg: "https://flagcdn.com/lk.svg",
    png: "https://flagcdn.com/w320/lk.png"
  },
  currencies: [{
    code: "LKR",
    name: "Sri Lankan rupee",
    symbol: "Rs"
  }],
  languages: [{
    iso639_1: "si",
    iso639_2: "sin",
    name: "Sinhalese",
    nativeName: "සිංහල"
  }, {
    iso639_1: "ta",
    iso639_2: "tam",
    name: "Tamil",
    nativeName: "தமிழ்"
  }],
  translations: {
    br: "Sri Lanka",
    pt: "Sri Lanka",
    nl: "Sri Lanka",
    hr: "Šri Lanka",
    fa: "سری‌لانکا",
    de: "Sri Lanka",
    es: "Sri Lanka",
    fr: "Sri Lanka",
    ja: "スリランカ",
    it: "Sri Lanka",
    hu: "Srí Lanka"
  },
  flag: "https://flagcdn.com/lk.svg",
  regionalBlocs: [{
    acronym: "SAARC",
    name: "South Asian Association for Regional Cooperation"
  }],
  cioc: "SRI",
  independent: true
}, {
  name: "Sudan",
  topLevelDomain: [".sd"],
  alpha2Code: "SD",
  alpha3Code: "SDN",
  callingCodes: ["249"],
  capital: "Khartoum",
  altSpellings: ["SD", "Republic of the Sudan", "Jumhūrīyat as-Sūdān"],
  subregion: "Northern Africa",
  region: "Africa",
  population: 43849269,
  latlng: [15, 30],
  demonym: "Sudanese",
  area: 1886068,
  gini: 34.2,
  timezones: ["UTC+03:00"],
  borders: ["CAF", "TCD", "EGY", "ERI", "ETH", "LBY", "SSD"],
  nativeName: "السودان",
  numericCode: "729",
  flags: {
    svg: "https://flagcdn.com/sd.svg",
    png: "https://flagcdn.com/w320/sd.png"
  },
  currencies: [{
    code: "SDG",
    name: "Sudanese pound",
    symbol: "ج.س."
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Soudan",
    pt: "Sudão",
    nl: "Soedan",
    hr: "Sudan",
    fa: "سودان",
    de: "Sudan",
    es: "Sudán",
    fr: "Soudan",
    ja: "スーダン",
    it: "Sudan",
    hu: "Szudán"
  },
  flag: "https://flagcdn.com/sd.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "SUD",
  independent: true
}, {
  name: "South Sudan",
  topLevelDomain: [".ss"],
  alpha2Code: "SS",
  alpha3Code: "SSD",
  callingCodes: ["211"],
  capital: "Juba",
  altSpellings: ["SS"],
  subregion: "Middle Africa",
  region: "Africa",
  population: 11193729,
  latlng: [7, 30],
  demonym: "South Sudanese",
  area: 619745,
  gini: 44.1,
  timezones: ["UTC+03:00"],
  borders: ["CAF", "COD", "ETH", "KEN", "SDN", "UGA"],
  nativeName: "South Sudan",
  numericCode: "728",
  flags: {
    svg: "https://flagcdn.com/ss.svg",
    png: "https://flagcdn.com/w320/ss.png"
  },
  currencies: [{
    code: "SSP",
    name: "South Sudanese pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Soudan ar Su",
    pt: "Sudão do Sul",
    nl: "Zuid-Soedan",
    hr: "Južni Sudan",
    fa: "سودان جنوبی",
    de: "Südsudan",
    es: "Sudán del Sur",
    fr: "Soudan du Sud",
    ja: "南スーダン",
    it: "Sudan del sud",
    hu: "Dél-Szudán"
  },
  flag: "https://flagcdn.com/ss.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "SSD",
  independent: true
}, {
  name: "Suriname",
  topLevelDomain: [".sr"],
  alpha2Code: "SR",
  alpha3Code: "SUR",
  callingCodes: ["597"],
  capital: "Paramaribo",
  altSpellings: ["SR", "Sarnam", "Sranangron", "Republic of Suriname", "Republiek Suriname"],
  subregion: "South America",
  region: "Americas",
  population: 586634,
  latlng: [4, -56],
  demonym: "Surinamer",
  area: 163820,
  gini: 57.9,
  timezones: ["UTC-03:00"],
  borders: ["BRA", "FRA", "GUF", "GUY"],
  nativeName: "Suriname",
  numericCode: "740",
  flags: {
    svg: "https://flagcdn.com/sr.svg",
    png: "https://flagcdn.com/w320/sr.png"
  },
  currencies: [{
    code: "SRD",
    name: "Surinamese dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "nl",
    iso639_2: "nld",
    name: "Dutch",
    nativeName: "Nederlands"
  }],
  translations: {
    br: "Surinam",
    pt: "Suriname",
    nl: "Suriname",
    hr: "Surinam",
    fa: "سورینام",
    de: "Suriname",
    es: "Surinam",
    fr: "Surinam",
    ja: "スリナム",
    it: "Suriname",
    hu: "Suriname"
  },
  flag: "https://flagcdn.com/sr.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }, {
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "SUR",
  independent: true
}, {
  name: "Svalbard and Jan Mayen",
  topLevelDomain: [".sj"],
  alpha2Code: "SJ",
  alpha3Code: "SJM",
  callingCodes: ["47"],
  capital: "Longyearbyen",
  altSpellings: ["SJ", "Svalbard and Jan Mayen Islands"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 2562,
  latlng: [78, 20],
  demonym: "Norwegian",
  timezones: ["UTC+01:00"],
  nativeName: "Svalbard og Jan Mayen",
  numericCode: "744",
  flags: {
    svg: "https://flagcdn.com/sj.svg",
    png: "https://flagcdn.com/w320/sj.png"
  },
  currencies: [{
    code: "NOK",
    name: "Norwegian krone",
    symbol: "kr"
  }],
  languages: [{
    iso639_1: "no",
    iso639_2: "nor",
    name: "Norwegian",
    nativeName: "Norsk"
  }],
  translations: {
    br: "Svalbard ha Jan Mayen",
    pt: "Svalbard",
    nl: "Svalbard en Jan Mayen",
    hr: "Svalbard i Jan Mayen",
    fa: "سوالبارد و یان ماین",
    de: "Svalbard und Jan Mayen",
    es: "Islas Svalbard y Jan Mayen",
    fr: "Svalbard et Jan Mayen",
    ja: "スヴァールバル諸島およびヤンマイエン島",
    it: "Svalbard e Jan Mayen",
    hu: "Spitzbergák és Jan Mayen-szigetek"
  },
  flag: "https://flagcdn.com/sj.svg",
  independent: false
}, {
  name: "Swaziland",
  topLevelDomain: [".sz"],
  alpha2Code: "SZ",
  alpha3Code: "SWZ",
  callingCodes: ["268"],
  capital: "Mbabane",
  altSpellings: ["SZ", "weSwatini", "Swatini", "Ngwane", "Kingdom of Swaziland", "Umbuso waseSwatini"],
  subregion: "Southern Africa",
  region: "Africa",
  population: 1160164,
  latlng: [-26.5, 31.5],
  demonym: "Swazi",
  area: 17364,
  gini: 54.6,
  timezones: ["UTC+02:00"],
  borders: ["MOZ", "ZAF"],
  nativeName: "Swaziland",
  numericCode: "748",
  flags: {
    svg: "https://flagcdn.com/sz.svg",
    png: "https://flagcdn.com/w320/sz.png"
  },
  currencies: [{
    code: "SZL",
    name: "Swazi lilangeni",
    symbol: "L"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "ss",
    iso639_2: "ssw",
    name: "Swati",
    nativeName: "SiSwati"
  }],
  translations: {
    br: "Eswatini",
    pt: "Suazilândia",
    nl: "Swaziland",
    hr: "Svazi",
    fa: "سوازیلند",
    de: "Swasiland",
    es: "Suazilandia",
    fr: "Swaziland",
    ja: "スワジランド",
    it: "Swaziland",
    hu: "Szváziföld"
  },
  flag: "https://flagcdn.com/sz.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "SWZ",
  independent: true
}, {
  name: "Sweden",
  topLevelDomain: [".se"],
  alpha2Code: "SE",
  alpha3Code: "SWE",
  callingCodes: ["46"],
  capital: "Stockholm",
  altSpellings: ["SE", "Kingdom of Sweden", "Konungariket Sverige"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 10353442,
  latlng: [62, 15],
  demonym: "Swedish",
  area: 450295,
  gini: 30,
  timezones: ["UTC+01:00"],
  borders: ["FIN", "NOR"],
  nativeName: "Sverige",
  numericCode: "752",
  flags: {
    svg: "https://flagcdn.com/se.svg",
    png: "https://flagcdn.com/w320/se.png"
  },
  currencies: [{
    code: "SEK",
    name: "Swedish krona",
    symbol: "kr"
  }],
  languages: [{
    iso639_1: "sv",
    iso639_2: "swe",
    name: "Swedish",
    nativeName: "svenska"
  }],
  translations: {
    br: "Sveden",
    pt: "Suécia",
    nl: "Zweden",
    hr: "Švedska",
    fa: "سوئد",
    de: "Schweden",
    es: "Suecia",
    fr: "Suède",
    ja: "スウェーデン",
    it: "Svezia",
    hu: "Svédország"
  },
  flag: "https://flagcdn.com/se.svg",
  regionalBlocs: [{
    acronym: "EU",
    name: "European Union"
  }],
  cioc: "SWE",
  independent: true
}, {
  name: "Switzerland",
  topLevelDomain: [".ch"],
  alpha2Code: "CH",
  alpha3Code: "CHE",
  callingCodes: ["41"],
  capital: "Bern",
  altSpellings: ["CH", "Swiss Confederation", "Schweiz", "Suisse", "Svizzera", "Svizra"],
  subregion: "Central Europe",
  region: "Europe",
  population: 8636896,
  latlng: [47, 8],
  demonym: "Swiss",
  area: 41284,
  gini: 33.1,
  timezones: ["UTC+01:00"],
  borders: ["AUT", "FRA", "ITA", "LIE", "DEU"],
  nativeName: "Schweiz",
  numericCode: "756",
  flags: {
    svg: "https://flagcdn.com/ch.svg",
    png: "https://flagcdn.com/w320/ch.png"
  },
  currencies: [{
    code: "CHF",
    name: "Swiss franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "de",
    iso639_2: "deu",
    name: "German",
    nativeName: "Deutsch"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }, {
    iso639_1: "it",
    iso639_2: "ita",
    name: "Italian",
    nativeName: "Italiano"
  }, {
    iso639_2: "roh",
    name: "Romansh"
  }],
  translations: {
    br: "Suis",
    pt: "Suíça",
    nl: "Zwitserland",
    hr: "Švicarska",
    fa: "سوئیس",
    de: "Schweiz",
    es: "Suiza",
    fr: "Suisse",
    ja: "スイス",
    it: "Svizzera",
    hu: "Svájc"
  },
  flag: "https://flagcdn.com/ch.svg",
  regionalBlocs: [{
    acronym: "EFTA",
    name: "European Free Trade Association"
  }],
  cioc: "SUI",
  independent: true
}, {
  name: "Syrian Arab Republic",
  topLevelDomain: [".sy"],
  alpha2Code: "SY",
  alpha3Code: "SYR",
  callingCodes: ["963"],
  capital: "Damascus",
  altSpellings: ["SY", "Syrian Arab Republic", "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"],
  subregion: "Western Asia",
  region: "Asia",
  population: 17500657,
  latlng: [35, 38],
  demonym: "Syrian",
  area: 185180,
  gini: 37.5,
  timezones: ["UTC+02:00"],
  borders: ["IRQ", "ISR", "JOR", "LBN", "TUR"],
  nativeName: "سوريا",
  numericCode: "760",
  flags: {
    svg: "https://flagcdn.com/sy.svg",
    png: "https://flagcdn.com/w320/sy.png"
  },
  currencies: [{
    code: "SYP",
    name: "Syrian pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Siria",
    pt: "Síria",
    nl: "Syrië",
    hr: "Sirija",
    fa: "سوریه",
    de: "Syrien",
    es: "Siria",
    fr: "Syrie",
    ja: "シリア・アラブ共和国",
    it: "Siria",
    hu: "Szíria"
  },
  flag: "https://flagcdn.com/sy.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "SYR",
  independent: true
}, {
  name: "Taiwan",
  topLevelDomain: [".tw"],
  alpha2Code: "TW",
  alpha3Code: "TWN",
  callingCodes: ["886"],
  capital: "Taipei",
  altSpellings: ["TW", "Táiwān", "Republic of China", "中華民國", "Zhōnghuá Mínguó"],
  subregion: "Eastern Asia",
  region: "Asia",
  population: 23503349,
  latlng: [23.5, 121],
  demonym: "Taiwanese",
  area: 36193,
  timezones: ["UTC+08:00"],
  nativeName: "臺灣",
  numericCode: "158",
  flags: {
    svg: "https://flagcdn.com/tw.svg",
    png: "https://flagcdn.com/w320/tw.png"
  },
  currencies: [{
    code: "TWD",
    name: "New Taiwan dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "zh",
    iso639_2: "zho",
    name: "Chinese",
    nativeName: "中文 (Zhōngwén)"
  }],
  translations: {
    br: "Taiwan",
    pt: "Taiwan",
    nl: "Taiwan",
    hr: "Tajvan",
    fa: "تایوان",
    de: "Taiwan",
    es: "Taiwán",
    fr: "Taïwan",
    ja: "台湾（中華民国）",
    it: "Taiwan",
    hu: "Tajvan"
  },
  flag: "https://flagcdn.com/tw.svg",
  cioc: "TPE",
  independent: true
}, {
  name: "Tajikistan",
  topLevelDomain: [".tj"],
  alpha2Code: "TJ",
  alpha3Code: "TJK",
  callingCodes: ["992"],
  capital: "Dushanbe",
  altSpellings: ["TJ", "Toçikiston", "Republic of Tajikistan", "Ҷумҳурии Тоҷикистон", "Çumhuriyi Toçikiston"],
  subregion: "Central Asia",
  region: "Asia",
  population: 9537642,
  latlng: [39, 71],
  demonym: "Tadzhik",
  area: 143100,
  gini: 34,
  timezones: ["UTC+05:00"],
  borders: ["AFG", "CHN", "KGZ", "UZB"],
  nativeName: "Тоҷикистон",
  numericCode: "762",
  flags: {
    svg: "https://flagcdn.com/tj.svg",
    png: "https://flagcdn.com/w320/tj.png"
  },
  currencies: [{
    code: "TJS",
    name: "Tajikistani somoni",
    symbol: "ЅМ"
  }],
  languages: [{
    iso639_1: "tg",
    iso639_2: "tgk",
    name: "Tajik",
    nativeName: "тоҷикӣ"
  }, {
    iso639_1: "ru",
    iso639_2: "rus",
    name: "Russian",
    nativeName: "Русский"
  }],
  translations: {
    br: "Tadjikistan",
    pt: "Tajiquistão",
    nl: "Tadzjikistan",
    hr: "Tađikistan",
    fa: "تاجیکستان",
    de: "Tadschikistan",
    es: "Tayikistán",
    fr: "Tadjikistan",
    ja: "タジキスタン",
    it: "Tagikistan",
    hu: "Tádzsikisztán"
  },
  flag: "https://flagcdn.com/tj.svg",
  cioc: "TJK",
  independent: true
}, {
  name: "Tanzania, United Republic of",
  topLevelDomain: [".tz"],
  alpha2Code: "TZ",
  alpha3Code: "TZA",
  callingCodes: ["255"],
  capital: "Dodoma",
  altSpellings: ["TZ", "United Republic of Tanzania", "Jamhuri ya Muungano wa Tanzania"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 59734213,
  latlng: [-6, 35],
  demonym: "Tanzanian",
  area: 945087,
  gini: 40.5,
  timezones: ["UTC+03:00"],
  borders: ["BDI", "COD", "KEN", "MWI", "MOZ", "RWA", "UGA", "ZMB"],
  nativeName: "Tanzania",
  numericCode: "834",
  flags: {
    svg: "https://flagcdn.com/tz.svg",
    png: "https://flagcdn.com/w320/tz.png"
  },
  currencies: [{
    code: "TZS",
    name: "Tanzanian shilling",
    symbol: "Sh"
  }],
  languages: [{
    iso639_1: "sw",
    iso639_2: "swa",
    name: "Swahili",
    nativeName: "Kiswahili"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Tanzania",
    pt: "Tanzânia",
    nl: "Tanzania",
    hr: "Tanzanija",
    fa: "تانزانیا",
    de: "Tansania",
    es: "Tanzania",
    fr: "Tanzanie",
    ja: "タンザニア",
    it: "Tanzania",
    hu: "Tanzánia"
  },
  flag: "https://flagcdn.com/tz.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "TAN",
  independent: true
}, {
  name: "Thailand",
  topLevelDomain: [".th"],
  alpha2Code: "TH",
  alpha3Code: "THA",
  callingCodes: ["66"],
  capital: "Bangkok",
  altSpellings: ["TH", "Prathet", "Thai", "Kingdom of Thailand", "ราชอาณาจักรไทย", "Ratcha Anachak Thai"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 69799978,
  latlng: [15, 100],
  demonym: "Thai",
  area: 513120,
  gini: 34.9,
  timezones: ["UTC+07:00"],
  borders: ["MMR", "KHM", "LAO", "MYS"],
  nativeName: "ประเทศไทย",
  numericCode: "764",
  flags: {
    svg: "https://flagcdn.com/th.svg",
    png: "https://flagcdn.com/w320/th.png"
  },
  currencies: [{
    code: "THB",
    name: "Thai baht",
    symbol: "฿"
  }],
  languages: [{
    iso639_1: "th",
    iso639_2: "tha",
    name: "Thai",
    nativeName: "ไทย"
  }],
  translations: {
    br: "Thailand",
    pt: "Tailândia",
    nl: "Thailand",
    hr: "Tajland",
    fa: "تایلند",
    de: "Thailand",
    es: "Tailandia",
    fr: "Thaïlande",
    ja: "タイ",
    it: "Tailandia",
    hu: "Thaiföld"
  },
  flag: "https://flagcdn.com/th.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "THA",
  independent: true
}, {
  name: "Timor-Leste",
  topLevelDomain: [".tl"],
  alpha2Code: "TL",
  alpha3Code: "TLS",
  callingCodes: ["670"],
  capital: "Dili",
  altSpellings: ["TL", "East Timor", "Democratic Republic of Timor-Leste", "República Democrática de Timor-Leste", "Repúblika Demokrátika Timór-Leste"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 1318442,
  latlng: [-8.83333333, 125.91666666],
  demonym: "East Timorese",
  area: 14874,
  gini: 28.7,
  timezones: ["UTC+09:00"],
  borders: ["IDN"],
  nativeName: "Timor-Leste",
  numericCode: "626",
  flags: {
    svg: "https://flagcdn.com/tl.svg",
    png: "https://flagcdn.com/w320/tl.png"
  },
  currencies: [{
    code: "USD",
    name: "United States Dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "pt",
    iso639_2: "por",
    name: "Portuguese",
    nativeName: "Português"
  }],
  translations: {
    br: "Timor ar Reter",
    pt: "Timor Leste",
    nl: "Oost-Timor",
    hr: "Istočni Timor",
    fa: "تیمور شرقی",
    de: "Timor-Leste",
    es: "Timor Oriental",
    fr: "Timor oriental",
    ja: "東ティモール",
    it: "Timor Est",
    hu: "Kelet-Timor"
  },
  flag: "https://flagcdn.com/tl.svg",
  cioc: "TLS",
  independent: true
}, {
  name: "Togo",
  topLevelDomain: [".tg"],
  alpha2Code: "TG",
  alpha3Code: "TGO",
  callingCodes: ["228"],
  capital: "Lomé",
  altSpellings: ["TG", "Togolese", "Togolese Republic", "République Togolaise"],
  subregion: "Western Africa",
  region: "Africa",
  population: 8278737,
  latlng: [8, 1.16666666],
  demonym: "Togolese",
  area: 56785,
  gini: 43.1,
  timezones: ["UTC"],
  borders: ["BEN", "BFA", "GHA"],
  nativeName: "Togo",
  numericCode: "768",
  flags: {
    svg: "https://flagcdn.com/tg.svg",
    png: "https://flagcdn.com/w320/tg.png"
  },
  currencies: [{
    code: "XOF",
    name: "West African CFA franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Togo",
    pt: "Togo",
    nl: "Togo",
    hr: "Togo",
    fa: "توگو",
    de: "Togo",
    es: "Togo",
    fr: "Togo",
    ja: "トーゴ",
    it: "Togo",
    hu: "Togo"
  },
  flag: "https://flagcdn.com/tg.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "TOG",
  independent: true
}, {
  name: "Tokelau",
  topLevelDomain: [".tk"],
  alpha2Code: "TK",
  alpha3Code: "TKL",
  callingCodes: ["690"],
  capital: "Fakaofo",
  altSpellings: ["TK"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 1411,
  latlng: [-9, -172],
  demonym: "Tokelauan",
  area: 12,
  timezones: ["UTC+13:00"],
  nativeName: "Tokelau",
  numericCode: "772",
  flags: {
    svg: "https://flagcdn.com/tk.svg",
    png: "https://flagcdn.com/w320/tk.png"
  },
  currencies: [{
    code: "NZD",
    name: "New Zealand dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Tokelau",
    pt: "Toquelau",
    nl: "Tokelau",
    hr: "Tokelau",
    fa: "توکلائو",
    de: "Tokelau",
    es: "Islas Tokelau",
    fr: "Tokelau",
    ja: "トケラウ",
    it: "Isole Tokelau",
    hu: "Tokelau-szigetek"
  },
  flag: "https://flagcdn.com/tk.svg",
  independent: false
}, {
  name: "Tonga",
  topLevelDomain: [".to"],
  alpha2Code: "TO",
  alpha3Code: "TON",
  callingCodes: ["676"],
  capital: "Nuku'alofa",
  altSpellings: ["TO"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 105697,
  latlng: [-20, -175],
  demonym: "Tongan",
  area: 747,
  gini: 37.6,
  timezones: ["UTC+13:00"],
  nativeName: "Tonga",
  numericCode: "776",
  flags: {
    svg: "https://flagcdn.com/to.svg",
    png: "https://flagcdn.com/w320/to.png"
  },
  currencies: [{
    code: "TOP",
    name: "Tongan paʻanga",
    symbol: "T$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "to",
    iso639_2: "ton",
    name: "Tonga (Tonga Islands)",
    nativeName: "faka Tonga"
  }],
  translations: {
    br: "Tonga",
    pt: "Tonga",
    nl: "Tonga",
    hr: "Tonga",
    fa: "تونگا",
    de: "Tonga",
    es: "Tonga",
    fr: "Tonga",
    ja: "トンガ",
    it: "Tonga",
    hu: "Tonga"
  },
  flag: "https://flagcdn.com/to.svg",
  cioc: "TGA",
  independent: true
}, {
  name: "Trinidad and Tobago",
  topLevelDomain: [".tt"],
  alpha2Code: "TT",
  alpha3Code: "TTO",
  callingCodes: ["1"],
  capital: "Port of Spain",
  altSpellings: ["TT", "Republic of Trinidad and Tobago"],
  subregion: "Caribbean",
  region: "Americas",
  population: 1399491,
  latlng: [11, -61],
  demonym: "Trinidadian",
  area: 5130,
  gini: 40.3,
  timezones: ["UTC-04:00"],
  nativeName: "Trinidad and Tobago",
  numericCode: "780",
  flags: {
    svg: "https://flagcdn.com/tt.svg",
    png: "https://flagcdn.com/w320/tt.png"
  },
  currencies: [{
    code: "TTD",
    name: "Trinidad and Tobago dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Trinidad ha Tobago",
    pt: "Trindade e Tobago",
    nl: "Trinidad en Tobago",
    hr: "Trinidad i Tobago",
    fa: "ترینیداد و توباگو",
    de: "Trinidad und Tobago",
    es: "Trinidad y Tobago",
    fr: "Trinité et Tobago",
    ja: "トリニダード・トバゴ",
    it: "Trinidad e Tobago",
    hu: "Trinidad és Tobago"
  },
  flag: "https://flagcdn.com/tt.svg",
  regionalBlocs: [{
    acronym: "CARICOM",
    name: "Caribbean Community",
    otherNames: ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
  }],
  cioc: "TTO",
  independent: true
}, {
  name: "Tunisia",
  topLevelDomain: [".tn"],
  alpha2Code: "TN",
  alpha3Code: "TUN",
  callingCodes: ["216"],
  capital: "Tunis",
  altSpellings: ["TN", "Republic of Tunisia", "al-Jumhūriyyah at-Tūnisiyyah"],
  subregion: "Northern Africa",
  region: "Africa",
  population: 11818618,
  latlng: [34, 9],
  demonym: "Tunisian",
  area: 163610,
  gini: 32.8,
  timezones: ["UTC+01:00"],
  borders: ["DZA", "LBY"],
  nativeName: "تونس",
  numericCode: "788",
  flags: {
    svg: "https://flagcdn.com/tn.svg",
    png: "https://flagcdn.com/w320/tn.png"
  },
  currencies: [{
    code: "TND",
    name: "Tunisian dinar",
    symbol: "د.ت"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Tunizia",
    pt: "Tunísia",
    nl: "Tunesië",
    hr: "Tunis",
    fa: "تونس",
    de: "Tunesien",
    es: "Túnez",
    fr: "Tunisie",
    ja: "チュニジア",
    it: "Tunisia",
    hu: "Tunézia"
  },
  flag: "https://flagcdn.com/tn.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }, {
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "TUN",
  independent: true
}, {
  name: "Turkey",
  topLevelDomain: [".tr"],
  alpha2Code: "TR",
  alpha3Code: "TUR",
  callingCodes: ["90"],
  capital: "Ankara",
  altSpellings: ["TR", "Turkiye", "Republic of Turkey", "Türkiye Cumhuriyeti"],
  subregion: "Western Asia",
  region: "Asia",
  population: 84339067,
  latlng: [39, 35],
  demonym: "Turkish",
  area: 783562,
  gini: 41.9,
  timezones: ["UTC+03:00"],
  borders: ["ARM", "AZE", "BGR", "GEO", "GRC", "IRN", "IRQ", "SYR"],
  nativeName: "Türkiye",
  numericCode: "792",
  flags: {
    svg: "https://flagcdn.com/tr.svg",
    png: "https://flagcdn.com/w320/tr.png"
  },
  currencies: [{
    code: "TRY",
    name: "Turkish lira",
    symbol: "₺"
  }],
  languages: [{
    iso639_1: "tr",
    iso639_2: "tur",
    name: "Turkish",
    nativeName: "Türkçe"
  }],
  translations: {
    br: "Turkia",
    pt: "Turquia",
    nl: "Turkije",
    hr: "Turska",
    fa: "ترکیه",
    de: "Türkei",
    es: "Turquía",
    fr: "Turquie",
    ja: "トルコ",
    it: "Turchia",
    hu: "Törökország"
  },
  flag: "https://flagcdn.com/tr.svg",
  cioc: "TUR",
  independent: true
}, {
  name: "Turkmenistan",
  topLevelDomain: [".tm"],
  alpha2Code: "TM",
  alpha3Code: "TKM",
  callingCodes: ["993"],
  capital: "Ashgabat",
  altSpellings: ["TM"],
  subregion: "Central Asia",
  region: "Asia",
  population: 6031187,
  latlng: [40, 60],
  demonym: "Turkmen",
  area: 488100,
  gini: 40.8,
  timezones: ["UTC+05:00"],
  borders: ["AFG", "IRN", "KAZ", "UZB"],
  nativeName: "Türkmenistan",
  numericCode: "795",
  flags: {
    svg: "https://flagcdn.com/tm.svg",
    png: "https://flagcdn.com/w320/tm.png"
  },
  currencies: [{
    code: "TMT",
    name: "Turkmenistan manat",
    symbol: "m"
  }],
  languages: [{
    iso639_1: "tk",
    iso639_2: "tuk",
    name: "Turkmen",
    nativeName: "Türkmen"
  }, {
    iso639_1: "ru",
    iso639_2: "rus",
    name: "Russian",
    nativeName: "Русский"
  }],
  translations: {
    br: "Turkmenistan",
    pt: "Turquemenistão",
    nl: "Turkmenistan",
    hr: "Turkmenistan",
    fa: "ترکمنستان",
    de: "Turkmenistan",
    es: "Turkmenistán",
    fr: "Turkménistan",
    ja: "トルクメニスタン",
    it: "Turkmenistan",
    hu: "Türkmenisztán"
  },
  flag: "https://flagcdn.com/tm.svg",
  cioc: "TKM",
  independent: true
}, {
  name: "Turks and Caicos Islands",
  topLevelDomain: [".tc"],
  alpha2Code: "TC",
  alpha3Code: "TCA",
  callingCodes: ["1"],
  capital: "Cockburn Town",
  altSpellings: ["TC"],
  subregion: "Caribbean",
  region: "Americas",
  population: 38718,
  latlng: [21.75, -71.58333333],
  demonym: "Turks and Caicos Islander",
  area: 948,
  timezones: ["UTC-04:00"],
  nativeName: "Turks and Caicos Islands",
  numericCode: "796",
  flags: {
    svg: "https://flagcdn.com/tc.svg",
    png: "https://flagcdn.com/w320/tc.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Inizi Turks ha Caicos",
    pt: "Ilhas Turcas e Caicos",
    nl: "Turks- en Caicoseilanden",
    hr: "Otoci Turks i Caicos",
    fa: "جزایر تورکس و کایکوس",
    de: "Turks- und Caicosinseln",
    es: "Islas Turks y Caicos",
    fr: "Îles Turques-et-Caïques",
    ja: "タークス・カイコス諸島",
    it: "Isole Turks e Caicos",
    hu: "Turks- és Caicos-szigetek"
  },
  flag: "https://flagcdn.com/tc.svg",
  independent: false
}, {
  name: "Tuvalu",
  topLevelDomain: [".tv"],
  alpha2Code: "TV",
  alpha3Code: "TUV",
  callingCodes: ["688"],
  capital: "Funafuti",
  altSpellings: ["TV"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 11792,
  latlng: [-8, 178],
  demonym: "Tuvaluan",
  area: 26,
  gini: 39.1,
  timezones: ["UTC+12:00"],
  nativeName: "Tuvalu",
  numericCode: "798",
  flags: {
    svg: "https://flagcdn.com/tv.svg",
    png: "https://flagcdn.com/w320/tv.png"
  },
  currencies: [{
    code: "AUD",
    name: "Australian dollar",
    symbol: "$"
  }, {
    code: "TVD[G]",
    name: "Tuvaluan dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Tuvalu",
    pt: "Tuvalu",
    nl: "Tuvalu",
    hr: "Tuvalu",
    fa: "تووالو",
    de: "Tuvalu",
    es: "Tuvalu",
    fr: "Tuvalu",
    ja: "ツバル",
    it: "Tuvalu",
    hu: "Tuvalu"
  },
  flag: "https://flagcdn.com/tv.svg",
  cioc: "TUV",
  independent: true
}, {
  name: "Uganda",
  topLevelDomain: [".ug"],
  alpha2Code: "UG",
  alpha3Code: "UGA",
  callingCodes: ["256"],
  capital: "Kampala",
  altSpellings: ["UG", "Republic of Uganda", "Jamhuri ya Uganda"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 45741000,
  latlng: [1, 32],
  demonym: "Ugandan",
  area: 241550,
  gini: 42.8,
  timezones: ["UTC+03:00"],
  borders: ["COD", "KEN", "RWA", "SSD", "TZA"],
  nativeName: "Uganda",
  numericCode: "800",
  flags: {
    svg: "https://flagcdn.com/ug.svg",
    png: "https://flagcdn.com/w320/ug.png"
  },
  currencies: [{
    code: "UGX",
    name: "Ugandan shilling",
    symbol: "Sh"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "sw",
    iso639_2: "swa",
    name: "Swahili",
    nativeName: "Kiswahili"
  }],
  translations: {
    br: "Ouganda",
    pt: "Uganda",
    nl: "Oeganda",
    hr: "Uganda",
    fa: "اوگاندا",
    de: "Uganda",
    es: "Uganda",
    fr: "Uganda",
    ja: "ウガンダ",
    it: "Uganda",
    hu: "Uganda"
  },
  flag: "https://flagcdn.com/ug.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "UGA",
  independent: true
}, {
  name: "Ukraine",
  topLevelDomain: [".ua"],
  alpha2Code: "UA",
  alpha3Code: "UKR",
  callingCodes: ["380"],
  capital: "Kyiv",
  altSpellings: ["UA", "Ukrayina"],
  subregion: "Eastern Europe",
  region: "Europe",
  population: 44134693,
  latlng: [49, 32],
  demonym: "Ukrainian",
  area: 603700,
  gini: 26.6,
  timezones: ["UTC+02:00"],
  borders: ["BLR", "HUN", "MDA", "POL", "ROU", "RUS", "SVK"],
  nativeName: "Україна",
  numericCode: "804",
  flags: {
    svg: "https://flagcdn.com/ua.svg",
    png: "https://flagcdn.com/w320/ua.png"
  },
  currencies: [{
    code: "UAH",
    name: "Ukrainian hryvnia",
    symbol: "₴"
  }],
  languages: [{
    iso639_1: "uk",
    iso639_2: "ukr",
    name: "Ukrainian",
    nativeName: "Українська"
  }],
  translations: {
    br: "Ukraina",
    pt: "Ucrânia",
    nl: "Oekraïne",
    hr: "Ukrajina",
    fa: "وکراین",
    de: "Ukraine",
    es: "Ucrania",
    fr: "Ukraine",
    ja: "ウクライナ",
    it: "Ucraina",
    hu: "Ukrajna"
  },
  flag: "https://flagcdn.com/ua.svg",
  cioc: "UKR",
  independent: true
}, {
  name: "United Arab Emirates",
  topLevelDomain: [".ae"],
  alpha2Code: "AE",
  alpha3Code: "ARE",
  callingCodes: ["971"],
  capital: "Abu Dhabi",
  altSpellings: ["AE", "UAE"],
  subregion: "Western Asia",
  region: "Asia",
  population: 9890400,
  latlng: [24, 54],
  demonym: "Emirati",
  area: 83600,
  gini: 26,
  timezones: ["UTC+04:00"],
  borders: ["OMN", "SAU"],
  nativeName: "دولة الإمارات العربية المتحدة",
  numericCode: "784",
  flags: {
    svg: "https://flagcdn.com/ae.svg",
    png: "https://flagcdn.com/w320/ae.png"
  },
  currencies: [{
    code: "AED",
    name: "United Arab Emirates dirham",
    symbol: "د.إ"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Emirelezhioù Arab Unanet",
    pt: "Emirados árabes Unidos",
    nl: "Verenigde Arabische Emiraten",
    hr: "Ujedinjeni Arapski Emirati",
    fa: "امارات متحده عربی",
    de: "Vereinigte Arabische Emirate",
    es: "Emiratos Árabes Unidos",
    fr: "Émirats arabes unis",
    ja: "アラブ首長国連邦",
    it: "Emirati Arabi Uniti",
    hu: "Egyesült Arab Emírségek"
  },
  flag: "https://flagcdn.com/ae.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "UAE",
  independent: true
}, {
  name: "United Kingdom of Great Britain and Northern Ireland",
  topLevelDomain: [".uk"],
  alpha2Code: "GB",
  alpha3Code: "GBR",
  callingCodes: ["44"],
  capital: "London",
  altSpellings: ["GB", "UK", "Great Britain"],
  subregion: "Northern Europe",
  region: "Europe",
  population: 67215293,
  latlng: [54, -2],
  demonym: "British",
  area: 242900,
  gini: 35.1,
  timezones: ["UTC-08:00", "UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00", "UTC", "UTC+01:00", "UTC+02:00", "UTC+06:00"],
  borders: ["IRL"],
  nativeName: "United Kingdom",
  numericCode: "826",
  flags: {
    svg: "https://flagcdn.com/gb.svg",
    png: "https://flagcdn.com/w320/gb.png"
  },
  currencies: [{
    code: "GBP",
    name: "British pound",
    symbol: "£"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Rouantelezh-Unanet",
    pt: "Reino Unido",
    nl: "Verenigd Koninkrijk",
    hr: "Ujedinjeno Kraljevstvo",
    fa: "بریتانیای کبیر و ایرلند شمالی",
    de: "Vereinigtes Königreich",
    es: "Reino Unido",
    fr: "Royaume-Uni",
    ja: "イギリス",
    it: "Regno Unito",
    hu: "Nagy-Britannia"
  },
  flag: "https://flagcdn.com/gb.svg",
  cioc: "GBR",
  independent: true
}, {
  name: "United States of America",
  topLevelDomain: [".us"],
  alpha2Code: "US",
  alpha3Code: "USA",
  callingCodes: ["1"],
  capital: "Washington, D.C.",
  altSpellings: ["US", "USA", "United States of America"],
  subregion: "Northern America",
  region: "Americas",
  population: 329484123,
  latlng: [38, -97],
  demonym: "American",
  area: 9629091,
  gini: 41.4,
  timezones: ["UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC+10:00", "UTC+12:00"],
  borders: ["CAN", "MEX"],
  nativeName: "United States",
  numericCode: "840",
  flags: {
    svg: "https://flagcdn.com/us.svg",
    png: "https://flagcdn.com/w320/us.png"
  },
  currencies: [{
    code: "USD",
    name: "United States dollar",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Stadoù-Unanet",
    pt: "Estados Unidos",
    nl: "Verenigde Staten",
    hr: "Sjedinjene Američke Države",
    fa: "ایالات متحده آمریکا",
    de: "Vereinigte Staaten von Amerika",
    es: "Estados Unidos",
    fr: "États-Unis",
    ja: "アメリカ合衆国",
    it: "Stati Uniti D'America",
    hu: "Amerikai Egyesült Államok"
  },
  flag: "https://flagcdn.com/us.svg",
  regionalBlocs: [{
    acronym: "NAFTA",
    name: "North American Free Trade Agreement",
    otherNames: ["Tratado de Libre Comercio de América del Norte", "Accord de Libre-échange Nord-Américain"]
  }],
  cioc: "USA",
  independent: true
}, {
  name: "Uruguay",
  topLevelDomain: [".uy"],
  alpha2Code: "UY",
  alpha3Code: "URY",
  callingCodes: ["598"],
  capital: "Montevideo",
  altSpellings: ["UY", "Oriental Republic of Uruguay", "República Oriental del Uruguay"],
  subregion: "South America",
  region: "Americas",
  population: 3473727,
  latlng: [-33, -56],
  demonym: "Uruguayan",
  area: 181034,
  gini: 39.7,
  timezones: ["UTC-03:00"],
  borders: ["ARG", "BRA"],
  nativeName: "Uruguay",
  numericCode: "858",
  flags: {
    svg: "https://flagcdn.com/uy.svg",
    png: "https://flagcdn.com/w320/uy.png"
  },
  currencies: [{
    code: "UYU",
    name: "Uruguayan peso",
    symbol: "$"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Uruguay",
    pt: "Uruguai",
    nl: "Uruguay",
    hr: "Urugvaj",
    fa: "اروگوئه",
    de: "Uruguay",
    es: "Uruguay",
    fr: "Uruguay",
    ja: "ウルグアイ",
    it: "Uruguay",
    hu: "Uruguay"
  },
  flag: "https://flagcdn.com/uy.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "URU",
  independent: true
}, {
  name: "Uzbekistan",
  topLevelDomain: [".uz"],
  alpha2Code: "UZ",
  alpha3Code: "UZB",
  callingCodes: ["998"],
  capital: "Tashkent",
  altSpellings: ["UZ", "Republic of Uzbekistan", "O‘zbekiston Respublikasi", "Ўзбекистон Республикаси"],
  subregion: "Central Asia",
  region: "Asia",
  population: 34232050,
  latlng: [41, 64],
  demonym: "Uzbekistani",
  area: 447400,
  gini: 35.3,
  timezones: ["UTC+05:00"],
  borders: ["AFG", "KAZ", "KGZ", "TJK", "TKM"],
  nativeName: "O‘zbekiston",
  numericCode: "860",
  flags: {
    svg: "https://flagcdn.com/uz.svg",
    png: "https://flagcdn.com/w320/uz.png"
  },
  currencies: [{
    code: "UZS",
    name: "Uzbekistani so'm",
    symbol: "so'm"
  }],
  languages: [{
    iso639_1: "uz",
    iso639_2: "uzb",
    name: "Uzbek",
    nativeName: "Oʻzbek"
  }, {
    iso639_1: "ru",
    iso639_2: "rus",
    name: "Russian",
    nativeName: "Русский"
  }],
  translations: {
    br: "Ouzbekistan",
    pt: "Usbequistão",
    nl: "Oezbekistan",
    hr: "Uzbekistan",
    fa: "ازبکستان",
    de: "Usbekistan",
    es: "Uzbekistán",
    fr: "Ouzbékistan",
    ja: "ウズベキスタン",
    it: "Uzbekistan",
    hu: "Üzbegisztán"
  },
  flag: "https://flagcdn.com/uz.svg",
  cioc: "UZB",
  independent: false
}, {
  name: "Vanuatu",
  topLevelDomain: [".vu"],
  alpha2Code: "VU",
  alpha3Code: "VUT",
  callingCodes: ["678"],
  capital: "Port Vila",
  altSpellings: ["VU", "Republic of Vanuatu", "Ripablik blong Vanuatu", "République de Vanuatu"],
  subregion: "Melanesia",
  region: "Oceania",
  population: 307150,
  latlng: [-16, 167],
  demonym: "Ni-Vanuatu",
  area: 12189,
  gini: 37.6,
  timezones: ["UTC+11:00"],
  nativeName: "Vanuatu",
  numericCode: "548",
  flags: {
    svg: "https://flagcdn.com/vu.svg",
    png: "https://flagcdn.com/w320/vu.png"
  },
  currencies: [{
    code: "VUV",
    name: "Vanuatu vatu",
    symbol: "Vt"
  }],
  languages: [{
    iso639_1: "bi",
    iso639_2: "bis",
    name: "Bislama",
    nativeName: "Bislama"
  }, {
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Vanuatu",
    pt: "Vanuatu",
    nl: "Vanuatu",
    hr: "Vanuatu",
    fa: "وانواتو",
    de: "Vanuatu",
    es: "Vanuatu",
    fr: "Vanuatu",
    ja: "バヌアツ",
    it: "Vanuatu",
    hu: "Vanuatu"
  },
  flag: "https://flagcdn.com/vu.svg",
  cioc: "VAN",
  independent: true
}, {
  name: "Venezuela (Bolivarian Republic of)",
  topLevelDomain: [".ve"],
  alpha2Code: "VE",
  alpha3Code: "VEN",
  callingCodes: ["58"],
  capital: "Caracas",
  altSpellings: ["VE", "Bolivarian Republic of Venezuela", "República Bolivariana de Venezuela"],
  subregion: "South America",
  region: "Americas",
  population: 28435943,
  latlng: [8, -66],
  demonym: "Venezuelan",
  area: 916445,
  gini: 44.8,
  timezones: ["UTC-04:00"],
  borders: ["BRA", "COL", "GUY"],
  nativeName: "Venezuela",
  numericCode: "862",
  flags: {
    svg: "https://flagcdn.com/ve.svg",
    png: "https://flagcdn.com/w320/ve.png"
  },
  currencies: [{
    code: "VEF",
    name: "Venezuelan bolívar",
    symbol: "Bs S"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Venezuela",
    pt: "Venezuela",
    nl: "Venezuela",
    hr: "Venezuela",
    fa: "ونزوئلا",
    de: "Venezuela",
    es: "Venezuela",
    fr: "Venezuela",
    ja: "ベネズエラ・ボリバル共和国",
    it: "Venezuela",
    hu: "Venezuela"
  },
  flag: "https://flagcdn.com/ve.svg",
  regionalBlocs: [{
    acronym: "USAN",
    name: "Union of South American Nations",
    otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
    otherNames: ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
  }],
  cioc: "VEN",
  independent: true
}, {
  name: "Vietnam",
  topLevelDomain: [".vn"],
  alpha2Code: "VN",
  alpha3Code: "VNM",
  callingCodes: ["84"],
  capital: "Hanoi",
  altSpellings: ["VN", "Socialist Republic of Vietnam", "Cộng hòa Xã hội chủ nghĩa Việt Nam"],
  subregion: "South-Eastern Asia",
  region: "Asia",
  population: 97338583,
  latlng: [16.16666666, 107.83333333],
  demonym: "Vietnamese",
  area: 331212,
  gini: 35.7,
  timezones: ["UTC+07:00"],
  borders: ["KHM", "CHN", "LAO"],
  nativeName: "Việt Nam",
  numericCode: "704",
  flags: {
    svg: "https://flagcdn.com/vn.svg",
    png: "https://flagcdn.com/w320/vn.png"
  },
  currencies: [{
    code: "VND",
    name: "Vietnamese đồng",
    symbol: "₫"
  }],
  languages: [{
    iso639_1: "vi",
    iso639_2: "vie",
    name: "Vietnamese",
    nativeName: "Tiếng Việt"
  }],
  translations: {
    br: "Viêt Nam",
    pt: "Vietname",
    nl: "Vietnam",
    hr: "Vijetnam",
    fa: "ویتنام",
    de: "Vietnam",
    es: "Vietnam",
    fr: "Viêt Nam",
    ja: "ベトナム",
    it: "Vietnam",
    hu: "Vietnám"
  },
  flag: "https://flagcdn.com/vn.svg",
  regionalBlocs: [{
    acronym: "ASEAN",
    name: "Association of Southeast Asian Nations"
  }],
  cioc: "VIE",
  independent: true
}, {
  name: "Wallis and Futuna",
  topLevelDomain: [".wf"],
  alpha2Code: "WF",
  alpha3Code: "WLF",
  callingCodes: ["681"],
  capital: "Mata-Utu",
  altSpellings: ["WF", "Territory of the Wallis and Futuna Islands", "Territoire des îles Wallis et Futuna"],
  subregion: "Polynesia",
  region: "Oceania",
  population: 11750,
  latlng: [-13.3, -176.2],
  demonym: "Wallis and Futuna Islander",
  area: 142,
  timezones: ["UTC+12:00"],
  nativeName: "Wallis et Futuna",
  numericCode: "876",
  flags: {
    svg: "https://flagcdn.com/wf.svg",
    png: "https://flagcdn.com/w320/wf.png"
  },
  currencies: [{
    code: "XPF",
    name: "CFP franc",
    symbol: "Fr"
  }],
  languages: [{
    iso639_1: "fr",
    iso639_2: "fra",
    name: "French",
    nativeName: "français"
  }],
  translations: {
    br: "Wallis ha Futuna",
    pt: "Wallis e Futuna",
    nl: "Wallis en Futuna",
    hr: "Wallis i Fortuna",
    fa: "والیس و فوتونا",
    de: "Wallis und Futuna",
    es: "Wallis y Futuna",
    fr: "Wallis-et-Futuna",
    ja: "ウォリス・フツナ",
    it: "Wallis e Futuna",
    hu: "Wallis és Futuna"
  },
  flag: "https://flagcdn.com/wf.svg",
  independent: false
}, {
  name: "Western Sahara",
  topLevelDomain: [".eh"],
  alpha2Code: "EH",
  alpha3Code: "ESH",
  callingCodes: ["212"],
  capital: "El Aaiún",
  altSpellings: ["EH", "Taneẓroft Tutrimt"],
  subregion: "Northern Africa",
  region: "Africa",
  population: 510713,
  latlng: [24.5, -13],
  demonym: "Sahrawi",
  area: 266000,
  timezones: ["UTC+00:00"],
  borders: ["DZA", "MRT", "MAR"],
  nativeName: "الصحراء الغربية",
  numericCode: "732",
  flags: {
    svg: "https://flagcdn.com/eh.svg",
    png: "https://flagcdn.com/w320/eh.png"
  },
  currencies: [{
    code: "MAD",
    name: "Moroccan dirham",
    symbol: "د.م."
  }, {
    code: "DZD",
    name: "Algerian dinar",
    symbol: "د.ج"
  }],
  languages: [{
    iso639_1: "es",
    iso639_2: "spa",
    name: "Spanish",
    nativeName: "Español"
  }],
  translations: {
    br: "Sahara ar C'hornôg",
    pt: "Saara Ocidental",
    nl: "Westelijke Sahara",
    hr: "Zapadna Sahara",
    fa: "جمهوری دموکراتیک عربی صحرا",
    de: "Westsahara",
    es: "Sahara Occidental",
    fr: "Sahara Occidental",
    ja: "西サハラ",
    it: "Sahara Occidentale",
    hu: "Nyugat-Szahara"
  },
  flag: "https://flagcdn.com/eh.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  independent: false
}, {
  name: "Yemen",
  topLevelDomain: [".ye"],
  alpha2Code: "YE",
  alpha3Code: "YEM",
  callingCodes: ["967"],
  capital: "Sana'a",
  altSpellings: ["YE", "Yemeni Republic", "al-Jumhūriyyah al-Yamaniyyah"],
  subregion: "Western Asia",
  region: "Asia",
  population: 29825968,
  latlng: [15, 48],
  demonym: "Yemeni",
  area: 527968,
  gini: 36.7,
  timezones: ["UTC+03:00"],
  borders: ["OMN", "SAU"],
  nativeName: "اليَمَن",
  numericCode: "887",
  flags: {
    svg: "https://flagcdn.com/ye.svg",
    png: "https://flagcdn.com/w320/ye.png"
  },
  currencies: [{
    code: "YER",
    name: "Yemeni rial",
    symbol: "﷼"
  }],
  languages: [{
    iso639_1: "ar",
    iso639_2: "ara",
    name: "Arabic",
    nativeName: "العربية"
  }],
  translations: {
    br: "Yemen",
    pt: "Iémen",
    nl: "Jemen",
    hr: "Jemen",
    fa: "یمن",
    de: "Jemen",
    es: "Yemen",
    fr: "Yémen",
    ja: "イエメン",
    it: "Yemen",
    hu: "Jemen"
  },
  flag: "https://flagcdn.com/ye.svg",
  regionalBlocs: [{
    acronym: "AL",
    name: "Arab League",
    otherNames: ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
  }],
  cioc: "YEM",
  independent: true
}, {
  name: "Zambia",
  topLevelDomain: [".zm"],
  alpha2Code: "ZM",
  alpha3Code: "ZMB",
  callingCodes: ["260"],
  capital: "Lusaka",
  altSpellings: ["ZM", "Republic of Zambia"],
  subregion: "Eastern Africa",
  region: "Africa",
  population: 18383956,
  latlng: [-15, 30],
  demonym: "Zambian",
  area: 752618,
  gini: 57.1,
  timezones: ["UTC+02:00"],
  borders: ["AGO", "BWA", "COD", "MWI", "MOZ", "NAM", "TZA", "ZWE"],
  nativeName: "Zambia",
  numericCode: "894",
  flags: {
    svg: "https://flagcdn.com/zm.svg",
    png: "https://flagcdn.com/w320/zm.png"
  },
  currencies: [{
    code: "ZMW",
    name: "Zambian kwacha",
    symbol: "ZK"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }],
  translations: {
    br: "Zambia",
    pt: "Zâmbia",
    nl: "Zambia",
    hr: "Zambija",
    fa: "زامبیا",
    de: "Sambia",
    es: "Zambia",
    fr: "Zambie",
    ja: "ザンビア",
    it: "Zambia",
    hu: "Zambia"
  },
  flag: "https://flagcdn.com/zm.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "ZAM",
  independent: true
}, {
  name: "Zimbabwe",
  topLevelDomain: [".zw"],
  alpha2Code: "ZW",
  alpha3Code: "ZWE",
  callingCodes: ["263"],
  capital: "Harare",
  altSpellings: ["ZW", "Republic of Zimbabwe"],
  subregion: "Southern Africa",
  region: "Africa",
  population: 14862927,
  latlng: [-20, 30],
  demonym: "Zimbabwean",
  area: 390757,
  gini: 50.3,
  timezones: ["UTC+02:00"],
  borders: ["BWA", "MOZ", "ZAF", "ZMB"],
  nativeName: "Zimbabwe",
  numericCode: "716",
  flags: {
    svg: "https://flagcdn.com/zw.svg",
    png: "https://flagcdn.com/w320/zw.png"
  },
  currencies: [{
    code: "ZMW",
    name: "Zambian kwacha",
    symbol: "K"
  }],
  languages: [{
    iso639_1: "en",
    iso639_2: "eng",
    name: "English",
    nativeName: "English"
  }, {
    iso639_1: "sn",
    iso639_2: "sna",
    name: "Shona",
    nativeName: "chiShona"
  }, {
    iso639_1: "nd",
    iso639_2: "nde",
    name: "Northern Ndebele",
    nativeName: "isiNdebele"
  }],
  translations: {
    br: "Zimbabwe",
    pt: "Zimbabué",
    nl: "Zimbabwe",
    hr: "Zimbabve",
    fa: "زیمباوه",
    de: "Simbabwe",
    es: "Zimbabue",
    fr: "Zimbabwe",
    ja: "ジンバブエ",
    it: "Zimbabwe",
    hu: "Zimbabwe"
  },
  flag: "https://flagcdn.com/zw.svg",
  regionalBlocs: [{
    acronym: "AU",
    name: "African Union",
    otherNames: ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
  }],
  cioc: "ZIM",
  independent: true
}];

/***/ }),

/***/ "s9iv":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "xVO4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("9K2m");
} else {}

/***/ }),

/***/ "yO+l":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("OvAC");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

};;
//# sourceMappingURL=2.chunk.6af9e.js.map