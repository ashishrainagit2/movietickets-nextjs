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
  console.log("data>>>", data);
  return __jsx("div", {
    className: "jsx-80570465",
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
    className: "jsx-80570465" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-80570465",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("img", {
    src: "https://image.tmdb.org/t/p/w300/" + data.poster_path,
    className: "jsx-80570465",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("span", {
    className: "jsx-80570465",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, data.original_title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "80570465",
    __self: this
  }, ".main.jsx-80570465{marign :10px;border:1px solid grey;color:white;width:90%;margin:10px auto;}.MovieInFocus.jsx-80570465{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9tb3ZpZS9bcGlkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ3dCLEFBRzZCLEFBT0MsYUFOUSxBQU96QixzQkFOZSxZQUNELFVBQ08saUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9tb3ZpZS9bcGlkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXYnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IEhvbWUgPSAoe2RhdGF9KSA9PiB7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ0FwcCBpcyBjaGFuZ2luZyB0bzogJywgdXJsKVxuICAgIC8vICAgICB9XG4gICAgICBcbiAgICAvLyAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIC8vICAgICByZXR1cm4gKCkgPT4ge1xuICAgIC8vICAgICAgIFJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sIFtdKSAgXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zb2xlLmxvZyhcImRhdGE+Pj5cIiwgZGF0YSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwL1wiICsgZGF0YS5wb3N0ZXJfcGF0aH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEub3JpZ2luYWxfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgICAgICBtYXJpZ24gOjEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuTW92aWVJbkZvY3VzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtxdWVyeX0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL1wiICsgcXVlcnkucGlkICsgXCI/YXBpX2tleT1jMThhOGM2M2JlZTlkNjY2NjVhNDg2YTYyNGQ0ODE3NyZsYW5ndWFnZT1lbi1VU1wiO1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXG5cdGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cdGNvbnNvbGUubG9nKFwiPj4+XCIsIGpzb24pXG5cdHJldHVybiB7ZGF0YSA6IGpzb259XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdfQ== */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/movie/[pid].js */"));
};

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, url, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            console.log(query);
            url = "https://api.themoviedb.org/3/movie/" + query.pid + "?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US";
            _context.next = 5;
            return fetch(url);

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            json = _context.sent;
            console.log(">>>", json);
            return _context.abrupt("return", {
              data: json
            });

          case 11:
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
//# sourceMappingURL=[pid].js.55418c28d0fc61d8b7f1.hot-update.js.map