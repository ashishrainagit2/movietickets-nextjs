webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");


var _jsxFileName = "/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var Home = function Home(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "jsx-173578329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-173578329" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " Movie in focus"), __jsx("div", {
    className: "jsx-173578329" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-173578329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-173578329" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, data.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-173578329" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-173578329" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/movie/[pid]",
      as: {
        pathname: "/movie/" + value.id,
        query: {
          name: 'fordemo'
        }
      },
      prefetch: false,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-173578329",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-173578329",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })))));
  }))), __jsx("div", {
    className: "jsx-173578329" + " " + "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-173578329",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "173578329",
    __self: this
  }, ".main.jsx-173578329{marign :10px;text-align:center;color:white;}.movieWrapper.jsx-173578329{display:inline-block;vertical-align:top;border:1px solid grey;min-height:300px;overfllow:scroll;text-align:center;background:black;min-height:473px;width:300px;position:relative;}.row.jsx-173578329{width:100%;overflow:scroll;position:relative;}.name.jsx-173578329{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-173578329{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-173578329{min-height :500px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2dCLEFBR2UsQUFLUyxBQWVGLEFBS1AsQUFJQSxBQUtNLFdBYk0sQ0FLRixBQUlaLENBN0JlLEtBa0N4QixHQTdCa0IsQ0F5QkQsS0FUUSxJQXBCUixTQUtJLEFBeUJyQixHQTdCRixFQW9CSyxpQkFmYSxFQW1CaEIsZUFsQmdCLGlCQUNDLGtCQUNELGlCQUNNLGlCQUNOLFlBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcblxuY29uc3QgSG9tZSA9ICh7ZGF0YX0pID0+IChcblxuICA8ZGl2PlxuXHQ8TGF5b3V0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiTW92aWVJbkZvY3VzXCI+IE1vdmllIGluIGZvY3VzPC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgICAgPGgyPlBvcHVsYXIgTW92aWVzPC9oMj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0e2RhdGEubWFwKCh2YWx1ZSAsIGkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb3ZpZVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheVVuaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllL1twaWRdXCIgYXM9e3twYXRobmFtZTogXCIvbW92aWUvXCIgKyB2YWx1ZS5pZCAsIHF1ZXJ5IDoge25hbWUgOiAnZm9yZGVtbyd9fX0gcHJlZmV0Y2g9e2ZhbHNlfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAvXCIgKyB2YWx1ZS5wb3N0ZXJfcGF0aH0gYWx0PVwiTW92aWUgSW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgXHRcdDxzcGFuPjE8L3NwYW4+XG4gICAgXHQ8L2Rpdj5cblx0PC9MYXlvdXQ+XG5cbiAgICA8c3R5bGUganN4PntgXG5cdC5tYWluIHtcblx0XHRtYXJpZ24gOjEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246ICBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblx0fVxuXHQubW92aWVXcmFwcGVyIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuXHRcdG1pbi1oZWlnaHQ6IDMwMHB4O1xuXHRcdG92ZXJmbGxvdzogc2Nyb2xsO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgbWluLWhlaWdodDogNDczcHg7XG4gICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgLmRpc3BsYXlVbml0IHtcbiAgICAgICAgXG4gICAgfVxuICAgICAgLnJvd3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgXHQubmFtZSB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XG4gIFx0fVxuICBcdC5wYWdpbmF0aW9ue1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR3aWR0aDogOTAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXHR9XG4gIFx0Lk1vdmllSW5Gb2N1cyB7XG5cdFx0bWluLWhlaWdodCA6IDUwMHB4O1xuICBcdH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGdsb2JhbD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmcgOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MScpXG5cdGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cdGNvbnNvbGUubG9nKGpzb24pXG5cdHJldHVybiB7ZGF0YSA6IGpzb24ucmVzdWx0c31cbn1cblxuXG5cbi8vIEhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtyZXF9KSA9PiB7XG4vLyBcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2luZGV4Jylcbi8vIFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vIFx0Y29uc29sZS5sb2coJz4+PicsKGRhdGEpKVxuLy8gXHRjb25zb2xlLmxvZygnPj4+PDw8Jyx0eXBlb2YoZGF0YSkpXG4vLyBcdHJldHVybiAoZGF0YSlcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js */"), __jsx("style", {
    global: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\n        * {\n            box-sizing : border-box;\n        }\n    "));
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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1');

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            console.log(json);
            return _context.abrupt("return", {
              data: json.results
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
}(); // Home.getInitialProps = async ({req}) => {
// 	const res = await fetch('http://localhost:3000/api/index')
// 	const data = await res.json()
// 	console.log('>>>',(data))
// 	console.log('>>><<<',typeof(data))
// 	return (data)
// }


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c6c213f298bf762d5460.hot-update.js.map