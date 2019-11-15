webpackHotUpdate("static/development/pages/movie/[pid].js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ashishraina/Desktop/github-projects/nextjs-project/components/nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var links = [{
  href: '/series',
  label: 'Series'
}, {
  href: '/films',
  label: 'Films'
}, {
  href: '/recent',
  label: 'Recently Added'
}, {
  href: '/list',
  label: 'My List'
}, {
  href: '/streaming',
  label: 'Streaming'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});

var handler = function handler() {
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
    pathname: '/home',
    query: {
      name: 'test'
    }
  });
};

var handleRouteChange = function handleRouteChange(url) {
  alert('App is changing to: ' + url);
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeError', function (err, url) {
  if (err.cancelled) {
    console.log("Route to ".concat(url, " was cancelled!"));
  }
});
next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeStart', handleRouteChange);
next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.off('routeChangeStart', handleRouteChange);

var Nav = function Nav() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-3507002081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3507002081" + " " + "navHolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3507002081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3507002081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    src: "/logomi.png",
    alt: "logo image",
    className: "jsx-3507002081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-3507002081" + " " + "whitespace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\xA0"), __jsx("li", {
    className: "jsx-3507002081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    replace: true,
    scroll: false,
    passHref: true,
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3507002081",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Movies"))), links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return __jsx("li", {
      key: key,
      className: "jsx-3507002081",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-3507002081",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, label));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3507002081",
    __self: this
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}nav.jsx-3507002081{text-align:center;width:90%;margin :0 auto;}.navHolder.jsx-3507002081{background:white;padding:10px 0;border:1px solid #808080;}ul.jsx-3507002081{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav.jsx-3507002081>ul.jsx-3507002081{padding:4px 16px;}li.jsx-3507002081{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-3507002081{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}img.jsx-3507002081{max-height :100px;}.whitespace.jsx-3507002081{width:50%;}.MovieInFocus.jsx-3507002081{min-height :500px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGdCLEFBR2tCLEFBS1MsQUFLRCxBQUtKLEFBR0ksQUFHSixBQU1DLEFBS0ksQUFHUixBQUdRLFNBcENLLENBa0N6QixJQVJ1QixHQWpCTixBQVFqQixDQWJXLEFBMkJYLEFBTUEsVUFoQ2lCLElBS1UsV0FKM0IsY0FLQSxPQWdCaUIsVUFiakIsQUFNa0IsS0FRbEIsV0FQcUIsS0FwQnJCLHdGQXFCeUIsbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInIFxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnL3NlcmllcycsIGxhYmVsOiAnU2VyaWVzJyB9LFxuICB7IGhyZWY6ICcvZmlsbXMnLCBsYWJlbDogJ0ZpbG1zJyB9LFxuICB7IGhyZWY6ICcvcmVjZW50JywgbGFiZWw6ICdSZWNlbnRseSBBZGRlZCcgfSxcbiAgeyBocmVmOiAnL2xpc3QnLCBsYWJlbDogJ015IExpc3QnIH0sXG4gIHsgaHJlZjogJy9zdHJlYW1pbmcnLCBsYWJlbDogJ1N0cmVhbWluZycgfSxcblxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgUm91dGVyLnB1c2goe1xuICAgIHBhdGhuYW1lOiAnL2hvbWUnLFxuICAgIHF1ZXJ5OiB7IG5hbWU6ICd0ZXN0JyB9LFxuICB9KVxufSBcblxuY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xuICBhbGVydCgnQXBwIGlzIGNoYW5naW5nIHRvOiAnICsgIHVybClcbn1cblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIChlcnIsIHVybCkgPT4ge1xuICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgIGNvbnNvbGUubG9nKGBSb3V0ZSB0byAke3VybH0gd2FzIGNhbmNlbGxlZCFgKVxuICB9XG59KVxuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5Sb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gIDxkaXY+XG4gIDxuYXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZIb2xkZXJcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ29taS5wbmdcIiBhbHQ9XCJsb2dvIGltYWdlXCIvPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7LyogPGxpPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZXJ9PmhlcmU8L3NwYW4+XG4gICAgICAgIDwvbGk+ICovfVxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2hpdGVzcGFjZVwiPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgcmVwbGFjZSBzY3JvbGw9e2ZhbHNlfSBwYXNzSHJlZiBwcmVmZXRjaD17ZmFsc2V9PlxuICAgICAgICAgICAgPGE+TW92aWVzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT4gXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIFxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6OTAlO1xuICAgICAgICBtYXJnaW4gOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAubmF2SG9sZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzgwODA4MDtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIG5hdiA+IHVsIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQgOiAxMDBweDtcbiAgICAgIH1cbiAgICAgIC53aGl0ZXNwYWNlIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICAgIC5Nb3ZpZUluRm9jdXMge1xuICAgICAgICBtaW4taGVpZ2h0IDogNTAwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl19 */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/components/nav.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=[pid].js.fdc800bc333ea84a4353.hot-update.js.map