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
  return __jsx("div", {
    className: "jsx-1669571771",
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
    className: "jsx-1669571771" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Movie : ", data.original_title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1669571771",
    __self: this
  }, ".main.jsx-1669571771{marign :10px;border:1px solid grey;}.MovieInFocus.jsx-1669571771{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9tb3ZpZS9bcGlkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QndCLEFBR3lCLEFBSUssYUFISSxBQUlyQixzQkFIQSIsImZpbGUiOiIvVXNlcnMvYXNoaXNocmFpbmEvRGVza3RvcC9naXRodWItcHJvamVjdHMvbmV4dGpzLXByb2plY3QvcGFnZXMvbW92aWUvW3BpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCBIb21lID0gKHtkYXRhfSkgPT4ge1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdBcHAgaXMgY2hhbmdpbmcgdG86ICcsIHVybClcbiAgICAvLyAgICAgfVxuICAgICAgXG4gICAgLy8gICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICAvLyAgICAgcmV0dXJuICgpID0+IHtcbiAgICAvLyAgICAgICBSb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9LCBbXSkgIFxuXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICAgICAgICAgIE1vdmllIDoge2RhdGEub3JpZ2luYWxfdGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIG1hcmlnbiA6MTBweDtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgZ3JleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5Nb3ZpZUluRm9jdXMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcbiAgICBcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvMzMzP2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVNgKVxuXHRjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXHRjb25zb2xlLmxvZyhcIj4+PlwiLCBqc29uKVxuXHRyZXR1cm4ge2RhdGEgOiBqc29ufVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXX0= */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/movie/[pid].js */"));
};

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return fetch("https://api.themoviedb.org/3/movie/333?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US");

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            console.log(">>>", json);
            return _context.abrupt("return", {
              data: json
            });

          case 9:
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
//# sourceMappingURL=[pid].js.33612a541f9126bf16bf.hot-update.js.map