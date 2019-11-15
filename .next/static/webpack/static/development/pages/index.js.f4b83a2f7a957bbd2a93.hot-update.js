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
    className: "jsx-2343136489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2343136489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2343136489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-2343136489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    src: "/logomi.png",
    alt: "logo image",
    className: "jsx-2343136489",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-2343136489" + " " + "whitespace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\xA0"), __jsx("li", {
    className: "jsx-2343136489",
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
    className: "jsx-2343136489",
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
      className: "jsx-2343136489",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-2343136489",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, label));
  }))), __jsx("div", {
    className: "jsx-2343136489" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, " Movie in focus"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2343136489",
    __self: this
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}nav.jsx-2343136489{text-align:center;width:90%;margin :0 auto;}nav.jsx-2343136489 div.jsx-2343136489:first-child{background:white;}ul.jsx-2343136489{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav.jsx-2343136489>ul.jsx-2343136489{padding:4px 16px;}li.jsx-2343136489{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-2343136489{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}img.jsx-2343136489{max-height :100px;}.whitespace.jsx-2343136489{width:50%;}.MovieInFocus.jsx-2343136489{min-height :500px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWdCLEFBR2tCLEFBS1MsQUFLRCxBQUdKLEFBR0ksQUFHSixBQU1DLEFBS0ksQUFHUixBQUdRLFNBbENLLENBZ0N6QixJQVJ1QixHQWZ2QixBQU1BLENBWFcsQUF5QlgsQUFNQSxVQTlCaUIsZUFDakIscUJBbUJpQixVQWJqQixBQU1rQixLQVFsQixXQVBxQixLQWxCckIsd0ZBbUJ5QixtR0FDekIiLCJmaWxlIjoiL1VzZXJzL2FzaGlzaHJhaW5hL0Rlc2t0b3AvZ2l0aHViLXByb2plY3RzL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcicgXG5cbmNvbnN0IGxpbmtzID0gW1xuICB7IGhyZWY6ICcvc2VyaWVzJywgbGFiZWw6ICdTZXJpZXMnIH0sXG4gIHsgaHJlZjogJy9maWxtcycsIGxhYmVsOiAnRmlsbXMnIH0sXG4gIHsgaHJlZjogJy9yZWNlbnQnLCBsYWJlbDogJ1JlY2VudGx5IEFkZGVkJyB9LFxuICB7IGhyZWY6ICcvbGlzdCcsIGxhYmVsOiAnTXkgTGlzdCcgfSxcbiAgeyBocmVmOiAnL3N0cmVhbWluZycsIGxhYmVsOiAnU3RyZWFtaW5nJyB9LFxuXG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICBSb3V0ZXIucHVzaCh7XG4gICAgcGF0aG5hbWU6ICcvaG9tZScsXG4gICAgcXVlcnk6IHsgbmFtZTogJ3Rlc3QnIH0sXG4gIH0pXG59IFxuXG5jb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XG4gIGFsZXJ0KCdBcHAgaXMgY2hhbmdpbmcgdG86ICcgKyAgdXJsKVxufVxuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKGVyciwgdXJsKSA9PiB7XG4gIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgY29uc29sZS5sb2coYFJvdXRlIHRvICR7dXJsfSB3YXMgY2FuY2VsbGVkIWApXG4gIH1cbn0pXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcblJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5cbmNvbnN0IE5hdiA9ICgpID0+IChcbiAgPGRpdj5cbiAgPG5hdj5cbiAgICA8ZGl2PlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGltZyBzcmM9XCIvbG9nb21pLnBuZ1wiIGFsdD1cImxvZ28gaW1hZ2VcIi8+XG4gICAgICA8L2xpPlxuICAgICAgey8qIDxsaT5cbiAgICAgICAgPHNwYW4gb25DbGljaz17aGFuZGxlcn0+aGVyZTwvc3Bhbj5cbiAgICAgIDwvbGk+ICovfVxuICAgICAgPGxpIGNsYXNzTmFtZT1cIndoaXRlc3BhY2VcIj5cbiAgICAgICAgJm5ic3A7XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPScvJyByZXBsYWNlIHNjcm9sbD17ZmFsc2V9IHBhc3NIcmVmIHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgPGE+TW92aWVzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPiBcbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgICAgXG4gICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5Gb2N1c1wiPiBNb3ZpZSBpbiBmb2N1czwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgbmF2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDo5MCU7XG4gICAgICAgIG1hcmdpbiA6IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIG5hdiAgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICBuYXYgPiB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0IDogMTAwcHg7XG4gICAgICB9XG4gICAgICAud2hpdGVzcGFjZSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAuTW92aWVJbkZvY3VzIHtcbiAgICAgICAgbWluLWhlaWdodCA6IDUwMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdfQ== */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/components/nav.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.f4b83a2f7a957bbd2a93.hot-update.js.map