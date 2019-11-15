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
    className: "jsx-858904055",
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
    className: "jsx-858904055" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " Movie in focus"), __jsx("h2", {
    className: "jsx-858904055",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-858904055" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-858904055" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-858904055",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-858904055",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, data.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-858904055" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-858904055",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-858904055",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/movie/[pid]",
      as: {
        pathname: "/movie/" + value.id,
        query: {
          name: 'fordemo'
        }
      },
      prefetch: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-858904055" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, " ", value.original_title.slice(0, 10), " ")));
  }))))), __jsx("div", {
    className: "jsx-858904055" + " " + "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-858904055",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "858904055",
    __self: this
  }, ".main.jsx-858904055{marign :10px;text-align:center;}.movieWrapper.jsx-858904055{display:inline-block;vertical-align:top;border:1px solid grey;min-width:23%;min-height:300px;overfllow:hidden;text-align:center;background:black;min-height:473px;}.name.jsx-858904055{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-858904055{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-858904055{min-height :500px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2dCLEFBR2UsQUFJUyxBQVdULEFBSUEsQUFLTSxZQVJJLEFBSVosQ0FuQlMsS0F3QmxCLEdBcEJrQixDQWdCRCxTQW5CbkIsU0FJdUIsQUFnQnJCLHNCQWZhLEVBVWIsWUFUZ0IsaUJBQ0EsaUJBQ0Msa0JBQ0QsaUJBQ0EsaUJBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcblxuY29uc3QgSG9tZSA9ICh7ZGF0YX0pID0+IChcblxuICA8ZGl2PlxuXHQ8TGF5b3V0PlxuICAgICAgICBcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5Gb2N1c1wiPiBNb3ZpZSBpbiBmb2N1czwvZGl2PlxuICAgICAgICA8aDI+UG9wdWxhciBNb3ZpZXM8L2gyPlxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7ZGF0YS5tYXAoKHZhbHVlICwgaSk9Pntcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vdmllV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQ8aW1nIHNyYz17XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwL1wiICsgdmFsdWUucG9zdGVyX3BhdGh9IGFsdD1cIk1vdmllIEltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9tb3ZpZS9bcGlkXVwiIGFzPXt7cGF0aG5hbWU6IFwiL21vdmllL1wiICsgdmFsdWUuaWQgLCBxdWVyeSA6IHtuYW1lIDogJ2ZvcmRlbW8nfX19IHByZWZldGNoPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hbWVcIj4geyh2YWx1ZS5vcmlnaW5hbF90aXRsZSkuc2xpY2UoMCwgMTApfSA8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgXHRcdDxzcGFuPjE8L3NwYW4+XG4gICAgXHQ8L2Rpdj5cblx0PC9MYXlvdXQ+XG5cbiAgICA8c3R5bGUganN4PntgXG5cdC5tYWluIHtcblx0XHRtYXJpZ24gOjEwcHg7XG5cdFx0dGV4dC1hbGlnbjogIGNlbnRlcjtcblx0fVxuXHQubW92aWVXcmFwcGVyIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuXHRcdG1pbi13aWR0aDogMjMlO1xuXHRcdG1pbi1oZWlnaHQ6IDMwMHB4O1xuXHRcdG92ZXJmbGxvdzogaGlkZGVuO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kOiBibGFjaztcblx0XHRtaW4taGVpZ2h0OiA0NzNweDtcbiAgXHR9XG4gIFx0Lm5hbWUge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR0ZXh0LWRlY29yYXRpb24gOiBub25lO1xuICBcdH1cbiAgXHQucGFnaW5hdGlvbntcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0d2lkdGg6IDkwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFx0fVxuICBcdC5Nb3ZpZUluRm9jdXMge1xuXHRcdG1pbi1oZWlnaHQgOiA1MDBweDtcbiAgXHR9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MScpXG5cdGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cdGNvbnNvbGUubG9nKGpzb24pXG5cdHJldHVybiB7ZGF0YSA6IGpzb24ucmVzdWx0c31cbn1cblxuXG5cbi8vIEhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtyZXF9KSA9PiB7XG4vLyBcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2luZGV4Jylcbi8vIFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vIFx0Y29uc29sZS5sb2coJz4+PicsKGRhdGEpKVxuLy8gXHRjb25zb2xlLmxvZygnPj4+PDw8Jyx0eXBlb2YoZGF0YSkpXG4vLyBcdHJldHVybiAoZGF0YSlcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js */"));
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
//# sourceMappingURL=index.js.a69ff0548c381fbcec89.hot-update.js.map