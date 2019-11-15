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
    className: "jsx-4142240162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-4142240162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-4142240162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("img", {
    src: "/logomi.png",
    alt: "logo image",
    className: "jsx-4142240162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-4142240162" + " " + "whitespace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\xA0"), __jsx("li", {
    className: "jsx-4142240162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
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
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-4142240162",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Movies"))), links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return __jsx("li", {
      key: key,
      className: "jsx-4142240162",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-4142240162",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, label));
  })), __jsx("div", {
    className: "jsx-4142240162" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, " Movie in focus"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4142240162",
    __self: this
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}nav.jsx-4142240162{text-align:center;width:90%;margin :0 auto;}ul.jsx-4142240162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav.jsx-4142240162>ul.jsx-4142240162{padding:4px 16px;}li.jsx-4142240162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-4142240162{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}img.jsx-4142240162{max-height :100px;}.whitespace.jsx-4142240162{width:50%;}.MovieInFocus.jsx-4142240162{min-height :500px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RGdCLEFBR2tCLEFBS1MsQUFLTCxBQUdJLEFBR0osQUFNQyxBQUtJLEFBR1IsQUFHUSxTQS9CSyxDQTZCekIsSUFSdUIsR0FUdkIsQ0FSVyxBQXNCWCxBQU1BLFVBM0JpQixlQUNqQixxQkFnQmlCLFVBYmpCLEFBTWtCLEtBUWxCLFdBUHFCLEtBZnJCLHdGQWdCeUIsbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInIFxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnL3NlcmllcycsIGxhYmVsOiAnU2VyaWVzJyB9LFxuICB7IGhyZWY6ICcvZmlsbXMnLCBsYWJlbDogJ0ZpbG1zJyB9LFxuICB7IGhyZWY6ICcvcmVjZW50JywgbGFiZWw6ICdSZWNlbnRseSBBZGRlZCcgfSxcbiAgeyBocmVmOiAnL2xpc3QnLCBsYWJlbDogJ015IExpc3QnIH0sXG4gIHsgaHJlZjogJy9zdHJlYW1pbmcnLCBsYWJlbDogJ1N0cmVhbWluZycgfSxcblxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgUm91dGVyLnB1c2goe1xuICAgIHBhdGhuYW1lOiAnL2hvbWUnLFxuICAgIHF1ZXJ5OiB7IG5hbWU6ICd0ZXN0JyB9LFxuICB9KVxufSBcblxuY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xuICBhbGVydCgnQXBwIGlzIGNoYW5naW5nIHRvOiAnICsgIHVybClcbn1cblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIChlcnIsIHVybCkgPT4ge1xuICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgIGNvbnNvbGUubG9nKGBSb3V0ZSB0byAke3VybH0gd2FzIGNhbmNlbGxlZCFgKVxuICB9XG59KVxuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5Sb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gIDxkaXY+XG4gIDxuYXY+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8aW1nIHNyYz1cIi9sb2dvbWkucG5nXCIgYWx0PVwibG9nbyBpbWFnZVwiLz5cbiAgICAgIDwvbGk+XG4gICAgICB7LyogPGxpPlxuICAgICAgICA8c3BhbiBvbkNsaWNrPXtoYW5kbGVyfT5oZXJlPC9zcGFuPlxuICAgICAgPC9saT4gKi99XG4gICAgICA8bGkgY2xhc3NOYW1lPVwid2hpdGVzcGFjZVwiPlxuICAgICAgICAmbmJzcDtcbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nIHJlcGxhY2Ugc2Nyb2xsPXtmYWxzZX0gcGFzc0hyZWYgcHJlZmV0Y2g9e2ZhbHNlfT5cbiAgICAgICAgICA8YT5Nb3ZpZXM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICB7bGlua3MubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntsYWJlbH08L2E+IFxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgICBcbiAgICA8L3VsPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTW92aWVJbkZvY3VzXCI+IE1vdmllIGluIGZvY3VzPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXZlbmlyIE5leHQsIEF2ZW5pcixcbiAgICAgICAgICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICBuYXYge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgbWFyZ2luIDogMCBhdXRvO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgbmF2ID4gdWwge1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodCA6IDEwMHB4O1xuICAgICAgfVxuICAgICAgLndoaXRlc3BhY2Uge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuICAgICAgLk1vdmllSW5Gb2N1cyB7XG4gICAgICAgIG1pbi1oZWlnaHQgOiA1MDBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXX0= */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/components/nav.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.c2e2cafe28a92ea1580f.hot-update.js.map