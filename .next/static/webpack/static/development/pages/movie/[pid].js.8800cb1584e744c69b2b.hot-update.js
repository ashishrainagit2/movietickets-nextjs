webpackHotUpdate("static/development/pages/movie/[pid].js",{

/***/ "./pages/movie/[pid].js":
/*!******************************!*\
  !*** ./pages/movie/[pid].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/nav */ "./components/nav.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");


var _jsxFileName = "/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/movie/[pid].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var Home = function Home(_ref) {
  var data = _ref.data;
  // useEffect(() => {
  //     const handleRouteChange = url => {
  //       console.log('App is changing to: ', url)
  //     }
  //     Router.events.on('routeChangeStart', handleRouteChange)
  //     return () => {
  //       Router.events.off('routeChangeStart', handleRouteChange)
  //     }
  //   }, [])  
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var pid = router.query.pid;
  console.log("pid>>>", pid);
  return __jsx("div", {
    className: "jsx-3757798942",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3757798942" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Movie : ", data.original_title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3757798942",
    __self: this
  }, ".main.jsx-3757798942{marign :10px;border:1px solid grey;}.MovieInFocus.jsx-3757798942{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9tb3ZpZS9bcGlkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QndCLEFBRzZCLEFBSUMsYUFIUSxBQUl6QixzQkFIQSIsImZpbGUiOiIvVXNlcnMvYXNoaXNocmFpbmEvRGVza3RvcC9naXRodWItcHJvamVjdHMvbmV4dGpzLXByb2plY3QvcGFnZXMvbW92aWUvW3BpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBIb21lID0gKHtkYXRhfSkgPT4ge1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdBcHAgaXMgY2hhbmdpbmcgdG86ICcsIHVybClcbiAgICAvLyAgICAgfVxuICAgICAgXG4gICAgLy8gICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IHtcbiAgICAvLyAgICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9LCBbXSkgIFxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IHBpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc29sZS5sb2coXCJwaWQ+Pj5cIiwgcGlkKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICAgICAgICAgICAgTW92aWUgOiB7ZGF0YS5vcmlnaW5hbF90aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICAgIG1hcmlnbiA6MTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuTW92aWVJbkZvY3VzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtyZXF9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL1wiICsge3BpZH0gKyBcIj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTXCI7XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybClcblx0Y29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcblx0Y29uc29sZS5sb2coXCI+Pj5cIiwganNvbilcblx0cmV0dXJuIHtkYXRhIDoganNvbn1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl19 */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/movie/[pid].js */"));
};

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, url, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            url = "https://api.themoviedb.org/3/movie/" + {
              pid: pid
            } + "?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US";
            _context.next = 4;
            return fetch(url);

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            json = _context.sent;
            console.log(">>>", json);
            return _context.abrupt("return", {
              data: json
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=[pid].js.8800cb1584e744c69b2b.hot-update.js.map