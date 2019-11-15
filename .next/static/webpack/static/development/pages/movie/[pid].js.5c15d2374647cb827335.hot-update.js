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
    className: "jsx-2030630261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2030630261" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2030630261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: "https://image.tmdb.org/t/p/w1280/" + data.backdrop_path,
    className: "jsx-2030630261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2030630261" + " " + "detailsHolder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, data.original_title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2030630261",
    __self: this
  }, ".main.jsx-2030630261{marign :10px;border:1px solid grey;color:white;width:90%;margin:10px auto;}.MovieInFocus.jsx-2030630261{display:none;}.detailsHolder.jsx-2030630261{text-align :center;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9tb3ZpZS9bcGlkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ3dCLEFBRzZCLEFBT0MsQUFHTSxhQVRFLEFBT3pCLE1BR2UsV0FDZixLQVZlLFlBQ0QsVUFDTyxpQkFDckIiLCJmaWxlIjoiL1VzZXJzL2FzaGlzaHJhaW5hL0Rlc2t0b3AvZ2l0aHViLXByb2plY3RzL25leHRqcy1wcm9qZWN0L3BhZ2VzL21vdmllL1twaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcblxuY29uc3QgSG9tZSA9ICh7ZGF0YX0pID0+IHtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gdXJsID0+IHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnQXBwIGlzIGNoYW5naW5nIHRvOiAnLCB1cmwpXG4gICAgLy8gICAgIH1cbiAgICAgIFxuICAgIC8vICAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgLy8gICAgIHJldHVybiAoKSA9PiB7XG4gICAgLy8gICAgICAgUm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSwgW10pICBcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3cxMjgwL1wiICsgZGF0YS5iYWNrZHJvcF9wYXRofSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzSG9sZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5vcmlnaW5hbF90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICAgICAgbWFyaWduIDoxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgZ3JleTtcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLk1vdmllSW5Gb2N1cyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXRhaWxzSG9sZGVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5LCBwYXRobmFtZX0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIjEucXVlcnlcIiwgcXVlcnkpO1xuICAgIGNvbnNvbGUubG9nKFwicGF0aG5hbWVcIiwgcGF0aG5hbWUpO1xuICAgIC8vY29uc29sZS5sb2coXCJhc1BhdGhcIiwgYXNQYXRoKTtcbiAgICAvL2NvbnNvbGUubG9nKFwicmVxXCIsIHJlcSk7XG4gICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzKTtcbiAgICBjb25zb2xlLmxvZyhcImpzb25QYWdlUmVzXCIsIGpzb25QYWdlUmVzKTtcbiAgICBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpO1xuXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL1wiICsgcXVlcnkucGlkICsgXCI/YXBpX2tleT1jMThhOGM2M2JlZTlkNjY2NjVhNDg2YTYyNGQ0ODE3NyZsYW5ndWFnZT1lbi1VU1wiO1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXG5cdGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cdHJldHVybiB7ZGF0YSA6IGpzb259XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdfQ== */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/movie/[pid].js */"), __jsx("style", {
    global: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\n                li:first-child {\n                    display:none;\n                }    \n            "));
};

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, pathname, url, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query, pathname = _ref2.pathname;
            console.log("1.query", query);
            console.log("pathname", pathname); //console.log("asPath", asPath);
            //console.log("req", req);

            console.log("res", res);
            console.log("jsonPageRes", jsonPageRes);
            console.log("err", err);
            url = "https://api.themoviedb.org/3/movie/" + query.pid + "?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US";
            _context.next = 9;
            return fetch(url);

          case 9:
            res = _context.sent;
            _context.next = 12;
            return res.json();

          case 12:
            json = _context.sent;
            return _context.abrupt("return", {
              data: json
            });

          case 14:
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
//# sourceMappingURL=[pid].js.5c15d2374647cb827335.hot-update.js.map