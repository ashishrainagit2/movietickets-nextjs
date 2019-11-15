webpackHotUpdate("static/development/pages/index.js",{

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
  }))), __jsx("div", {
    className: "jsx-3507002081" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, " Movie in focus"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3507002081",
    __self: this
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}nav.jsx-3507002081{text-align:center;width:90%;margin :0 auto;}.navHolder.jsx-3507002081{background:white;padding:10px 0;border:1px solid #808080;}ul.jsx-3507002081{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav.jsx-3507002081>ul.jsx-3507002081{padding:4px 16px;}li.jsx-3507002081{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-3507002081{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}img.jsx-3507002081{max-height :100px;}.whitespace.jsx-3507002081{width:50%;}.MovieInFocus.jsx-3507002081{min-height :500px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWdCLEFBR2tCLEFBS1MsQUFLRCxBQUtKLEFBR0ksQUFHSixBQU1DLEFBS0ksQUFHUixBQUdRLFNBcENLLENBa0N6QixJQVJ1QixHQWpCTixBQVFqQixDQWJXLEFBMkJYLEFBTUEsVUFoQ2lCLElBS1UsV0FKM0IsY0FLQSxPQWdCaUIsVUFiakIsQUFNa0IsS0FRbEIsV0FQcUIsS0FwQnJCLHdGQXFCeUIsbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInIFxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnL3NlcmllcycsIGxhYmVsOiAnU2VyaWVzJyB9LFxuICB7IGhyZWY6ICcvZmlsbXMnLCBsYWJlbDogJ0ZpbG1zJyB9LFxuICB7IGhyZWY6ICcvcmVjZW50JywgbGFiZWw6ICdSZWNlbnRseSBBZGRlZCcgfSxcbiAgeyBocmVmOiAnL2xpc3QnLCBsYWJlbDogJ015IExpc3QnIH0sXG4gIHsgaHJlZjogJy9zdHJlYW1pbmcnLCBsYWJlbDogJ1N0cmVhbWluZycgfSxcblxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgUm91dGVyLnB1c2goe1xuICAgIHBhdGhuYW1lOiAnL2hvbWUnLFxuICAgIHF1ZXJ5OiB7IG5hbWU6ICd0ZXN0JyB9LFxuICB9KVxufSBcblxuY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xuICBhbGVydCgnQXBwIGlzIGNoYW5naW5nIHRvOiAnICsgIHVybClcbn1cblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIChlcnIsIHVybCkgPT4ge1xuICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgIGNvbnNvbGUubG9nKGBSb3V0ZSB0byAke3VybH0gd2FzIGNhbmNlbGxlZCFgKVxuICB9XG59KVxuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5Sb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gIDxkaXY+XG4gIDxuYXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZIb2xkZXJcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ29taS5wbmdcIiBhbHQ9XCJsb2dvIGltYWdlXCIvPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7LyogPGxpPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZXJ9PmhlcmU8L3NwYW4+XG4gICAgICAgIDwvbGk+ICovfVxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2hpdGVzcGFjZVwiPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgcmVwbGFjZSBzY3JvbGw9e2ZhbHNlfSBwYXNzSHJlZiBwcmVmZXRjaD17ZmFsc2V9PlxuICAgICAgICAgICAgPGE+TW92aWVzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT4gXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIFxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5Gb2N1c1wiPiBNb3ZpZSBpbiBmb2N1czwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgbmF2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDo5MCU7XG4gICAgICAgIG1hcmdpbiA6IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIC5uYXZIb2xkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgbmF2ID4gdWwge1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodCA6IDEwMHB4O1xuICAgICAgfVxuICAgICAgLndoaXRlc3BhY2Uge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgLk1vdmllSW5Gb2N1cyB7XG4gICAgICAgIG1pbi1oZWlnaHQgOiA1MDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXX0= */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/components/nav.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.62f9f36046e2533b2a6f.hot-update.js.map