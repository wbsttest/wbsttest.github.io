(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8yPs":function(e,n,t){"use strict";n.a=t.p+"16854d8b06e0a86608ffe8fe3651d0ec.svg"},"9jMb":function(e,n,t){"use strict";t.r(n),function(e){var r=t("QRet"),o=t("GKof"),u=t("okHz"),i=t("PP9n"),a=t("bLYV");n.default=()=>{const n=new URLSearchParams(window.location.search).get("lid"),t="undefined"!=typeof window&&window.location.pathname,[c,l]=Object(r.l)();Object(r.d)((()=>{"undefined"!=typeof window&&"/result/"!==window.location.pathname&&window.scrollTo({top:0,behavior:"smooth"})}),[]);Object(r.d)((()=>{n&&(async e=>{try{let n;await fetch("https://service.canadadistrict.com/forms/unsubscribeLead",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({leadId:e})}).then((e=>e.json())).then((e=>n=e))}catch(e){l(e.response.data.msg||e.response.data.message||"Something went wrong")}})(n)}),[n]);return e(u.default,null,e("div",{class:i.a.thankyou},e("div",{class:i.a.container},e("img",{src:o.a,alt:"thankyou"}),e("h2",null,"Thank You!"),e("p",null,"/thank-you/email_verification/"===t||"/thank-you/email_verification"===t?"Your email is confirmed.":"/thank-you/unsubscribe/"===t||"/thank-you/unsubscribe"===t?"You were successfully removed from our mailing list.":"An immigration professional will contact you shortly to complete\n              your profile evaluation and discuss the next steps."))),""!==c&&c?e(a.a,{message:c,closeAction:()=>{l("")}}):null)}}.call(this,t("hosL").h)},GKof:function(e,n,t){"use strict";n.a=t.p+"17b30ceb931de43f89f96367eab1912b.svg"},PP9n:function(e,n){"use strict";n.a={thankyou:"thankyou__swI9+",container:"container__8auha"}},TR5t:function(e,n){"use strict";n.a={errortoast:"errortoast__ne9ep",errortoastgrid:"errortoastgrid__mhsRp",errortoasticon:"errortoasticon__3Q0lk",errortoastcontent:"errortoastcontent__4dMEL",errortoastclose:"errortoastclose__BMc5p"}},bLYV:function(e,n,t){"use strict";(function(e){var r=t("bPE1"),o=t("8yPs"),u=t("TR5t");n.a=({message:n,closeAction:t})=>e("div",{class:u.a.errortoast},e("div",{className:u.a.errortoastgrid},e("div",{className:u.a.errortoasticon},e("img",{src:o.a,alt:"icon"})),e("div",{className:u.a.errortoastcontent},e("p",null,n))),e("div",{className:u.a.errortoastclose,onClick:t,role:"presentation"},e("img",{src:r.a,alt:"icon"})))}).call(this,t("hosL").h)},bPE1:function(e,n,t){"use strict";n.a=t.p+"00850586a6b565e9aabd0c72e02ab5ea.svg"},l8WD:function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function o(e,n){for(var t in e)if("__source"!==t&&!(t in n))return!0;for(var r in n)if("__source"!==r&&e[r]!==n[r])return!0;return!1}function u(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n}function i(e){this.props=e}function a(e,n){function t(e){var t=this.props.ref,r=t==e.ref;return!r&&t&&(t.call?t(null):t.current=null),n?!n(this.props,e)||!r:o(this.props,e)}function r(n){return this.shouldComponentUpdate=t,Object(A.createElement)(e,n)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}function c(e){function n(n){var t=r({},n);return delete t.ref,e(t,n.ref||null)}return n.$$typeof=U,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}function l(e,n,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=r({},e)).__c&&(e.__c.__P===t&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return l(e,n,t)}))),e}function s(e,n,t){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return s(e,n,t)})),e.__c&&e.__c.__P===n&&(e.__e&&t.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=t)),e}function f(){this.__u=0,this.t=null,this.__b=null}function _(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function d(e){function n(n){if(t||(t=e()).then((function(e){r=e.default||e}),(function(e){o=e})),o)throw o;if(!r)throw t;return Object(A.createElement)(r,n)}var t,r,o;return n.displayName="Lazy",n.__f=!0,n}function p(){this.u=null,this.o=null}function h(e){return this.getChildContext=function(){return e.context},e.children}function m(e){var n=this,t=e.i;n.componentWillUnmount=function(){Object(A.render)(null,n.l),n.l=null,n.i=null},n.i&&n.i!==t&&n.componentWillUnmount(),e.__v?(n.l||(n.i=t,n.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(e){this.childNodes.push(e),n.i.appendChild(e)},insertBefore:function(e){this.childNodes.push(e),n.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),n.i.removeChild(e)}}),Object(A.render)(Object(A.createElement)(h,{context:n.context},e.__v),n.l)):n.l&&n.componentWillUnmount()}function v(e,n){var t=Object(A.createElement)(m,{__v:e,i:n});return t.containerInfo=n,t}function y(e,n,t){return null==n.__k&&(n.textContent=""),Object(A.render)(e,n),"function"==typeof t&&t(),e?e.__c:null}function b(e,n,t){return Object(A.hydrate)(e,n),"function"==typeof t&&t(),e?e.__c:null}function C(){}function g(){return this.cancelBubble}function O(){return this.defaultPrevented}function E(e){return A.createElement.bind(null,e)}function w(e){return!!e&&e.$$typeof===W}function k(e){return w(e)?A.cloneElement.apply(null,arguments):e}function S(e){return!!e.__k&&(Object(A.render)(null,e),!0)}function R(e){return e&&(e.base||1===e.nodeType&&e)||null}function N(e){e()}function j(e){return e}function P(){return[!1,N]}function x(e,n){var t=n(),r=Object(L.l)({h:{__:t,v:n}}),o=r[0].h,i=r[1];return Object(L.h)((function(){o.__=t,o.v=n,u(o.__,n())||i({h:o})}),[e,t,n]),Object(L.d)((function(){return u(o.__,o.v())||i({h:o}),e((function(){u(o.__,o.v())||i({h:o})}))}),[e]),t}t.r(n),t.d(n,"Children",(function(){return D})),t.d(n,"PureComponent",(function(){return i})),t.d(n,"StrictMode",(function(){return re})),t.d(n,"Suspense",(function(){return f})),t.d(n,"SuspenseList",(function(){return p})),t.d(n,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return X})),t.d(n,"cloneElement",(function(){return k})),t.d(n,"createFactory",(function(){return E})),t.d(n,"createPortal",(function(){return v})),t.d(n,"default",(function(){return ue})),t.d(n,"findDOMNode",(function(){return R})),t.d(n,"flushSync",(function(){return te})),t.d(n,"forwardRef",(function(){return c})),t.d(n,"hydrate",(function(){return b})),t.d(n,"isValidElement",(function(){return w})),t.d(n,"lazy",(function(){return d})),t.d(n,"memo",(function(){return a})),t.d(n,"render",(function(){return y})),t.d(n,"startTransition",(function(){return N})),t.d(n,"unmountComponentAtNode",(function(){return S})),t.d(n,"unstable_batchedUpdates",(function(){return ne})),t.d(n,"useDeferredValue",(function(){return j})),t.d(n,"useInsertionEffect",(function(){return oe})),t.d(n,"useSyncExternalStore",(function(){return x})),t.d(n,"useTransition",(function(){return P})),t.d(n,"version",(function(){return ee}));var A=t("hosL");t.d(n,"Component",(function(){return A.Component})),t.d(n,"Fragment",(function(){return A.Fragment})),t.d(n,"createContext",(function(){return A.createContext})),t.d(n,"createElement",(function(){return A.createElement})),t.d(n,"createRef",(function(){return A.createRef}));var L=t("QRet");t.d(n,"useCallback",(function(){return L.a})),t.d(n,"useContext",(function(){return L.b})),t.d(n,"useDebugValue",(function(){return L.c})),t.d(n,"useEffect",(function(){return L.d})),t.d(n,"useErrorBoundary",(function(){return L.e})),t.d(n,"useId",(function(){return L.f})),t.d(n,"useImperativeHandle",(function(){return L.g})),t.d(n,"useLayoutEffect",(function(){return L.h})),t.d(n,"useMemo",(function(){return L.i})),t.d(n,"useReducer",(function(){return L.j})),t.d(n,"useRef",(function(){return L.k})),t.d(n,"useState",(function(){return L.l})),(i.prototype=new A.Component).isPureReactComponent=!0,i.prototype.shouldComponentUpdate=function(e,n){return o(this.props,e)||o(this.state,n)};var T=A.options.__b;A.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),T&&T(e)};var U="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,I=function(e,n){return null==e?null:Object(A.toChildArray)(Object(A.toChildArray)(e).map(n))},D={map:I,forEach:I,count:function(e){return e?Object(A.toChildArray)(e).length:0},only:function(e){var n=Object(A.toChildArray)(e);if(1!==n.length)throw"Children.only";return n[0]},toArray:A.toChildArray},F=A.options.__e;A.options.__e=function(e,n,t,r){if(e.then)for(var o,u=n;u=u.__;)if((o=u.__c)&&o.__c)return null==n.__e&&(n.__e=t.__e,n.__k=t.__k),o.__c(e,n);F(e,n,t,r)};var M=A.options.unmount;A.options.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&!0===e.__h&&(e.type=null),M&&M(e)},(f.prototype=new A.Component).__c=function(e,n){var t=n.__c,r=this;null==r.t&&(r.t=[]),r.t.push(t);var o=_(r.__v),u=!1,i=function(){u||(u=!0,t.__R=null,o?o(a):a())};t.__R=i;var a=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=s(e,e.__c.__P,e.__c.__O)}var n;for(r.setState({__a:r.__b=null});n=r.t.pop();)n.forceUpdate()}},c=!0===n.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(i,i)},f.prototype.componentWillUnmount=function(){this.t=[]},f.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=l(this.__b,t,r.__O=r.__P)}this.__b=null}var o=n.__a&&Object(A.createElement)(A.Fragment,null,e.fallback);return o&&(o.__h=null),[Object(A.createElement)(A.Fragment,null,n.__a?null:e.children),o]};var V=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};(p.prototype=new A.Component).__a=function(e){var n=this,t=_(n.__v),r=n.o.get(e);return r[0]++,function(o){var u=function(){n.props.revealOrder?(r.push(o),V(n,e,r)):o()};t?t(u):u()}},p.prototype.render=function(e){this.u=null,this.o=new Map;var n=Object(A.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},p.prototype.componentDidUpdate=p.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(n,t){V(e,t,n)}))};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,B=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Y=/[A-Z0-9]/g,$="undefined"!=typeof document,z=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};A.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(A.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})}));var J=A.options.event;A.options.event=function(e){return J&&(e=J(e)),e.persist=C,e.isPropagationStopped=g,e.isDefaultPrevented=O,e.nativeEvent=e};var Q,G={enumerable:!1,configurable:!0,get:function(){return this.class}},K=A.options.vnode;A.options.vnode=function(e){"string"==typeof e.type&&function(e){var n=e.props,t=e.type,r={};for(var o in n){var u=n[o];if(!("value"===o&&"defaultValue"in n&&null==u||$&&"children"===o&&"noscript"===t||"class"===o||"className"===o)){var i=o.toLowerCase();"defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===u?u="":"ondoubleclick"===i?o="ondblclick":"onchange"!==i||"input"!==t&&"textarea"!==t||z(n.type)?"onfocus"===i?o="onfocusin":"onblur"===i?o="onfocusout":H.test(o)?o=i:-1===t.indexOf("-")&&B.test(o)?o=o.replace(Y,"-$&").toLowerCase():null===u&&(u=void 0):i=o="oninput","oninput"===i&&r[o=i]&&(o="oninputCapture"),r[o]=u}}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(A.toChildArray)(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=Object(A.toChildArray)(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",G)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),e.props=r}(e),e.$$typeof=W,K&&K(e)};var Z=A.options.__r;A.options.__r=function(e){Z&&Z(e),Q=e.__c};var q=A.options.diffed;A.options.diffed=function(e){q&&q(e);var n=e.props,t=e.__e;null!=t&&"textarea"===e.type&&"value"in n&&n.value!==t.value&&(t.value=null==n.value?"":n.value),Q=null};var X={ReactCurrentDispatcher:{current:{readContext:function(e){return Q.__n[e.__c].props.value}}}},ee="17.0.2",ne=function(e,n){return e(n)},te=function(e,n){return e(n)},re=A.Fragment,oe=L.h,ue={useState:L.l,useId:L.f,useReducer:L.j,useEffect:L.d,useLayoutEffect:L.h,useInsertionEffect:oe,useTransition:P,useDeferredValue:j,useSyncExternalStore:x,startTransition:N,useRef:L.k,useImperativeHandle:L.g,useMemo:L.i,useCallback:L.a,useContext:L.b,useDebugValue:L.c,version:"17.0.2",Children:D,render:y,hydrate:b,unmountComponentAtNode:S,createPortal:v,createElement:A.createElement,createContext:A.createContext,createFactory:E,cloneElement:k,createRef:A.createRef,Fragment:A.Fragment,isValidElement:w,findDOMNode:R,Component:A.Component,PureComponent:i,memo:a,forwardRef:c,flushSync:te,unstable_batchedUpdates:ne,StrictMode:re,Suspense:f,SuspenseList:p,lazy:d,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X}}}]);
//# sourceMappingURL=1.chunk.ab034.esm.js.map