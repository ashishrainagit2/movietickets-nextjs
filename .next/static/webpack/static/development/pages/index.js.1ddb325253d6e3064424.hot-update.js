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
    className: "jsx-3911437571",
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
    className: "jsx-3911437571" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " Movie in focus"), __jsx("div", {
    className: "jsx-3911437571" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3911437571",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-3911437571" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3911437571",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, data.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-3911437571" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3911437571",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-3911437571",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
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
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3911437571" + " " + "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, " ", value.original_title.slice(0, 10), " ")));
  })))), __jsx("div", {
    className: "jsx-3911437571" + " " + "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3911437571",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3911437571",
    __self: this
  }, ".main.jsx-3911437571{marign :10px;text-align:center;color:white;}.movieWrapper.jsx-3911437571{display:inline-block;vertical-align:top;border:1px solid grey;min-width:23%;min-height:300px;overfllow:hidden;text-align:center;background:black;min-height:473px;}.row.jsx-3911437571{overflow:hidden;}.name.jsx-3911437571{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-3911437571{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-3911437571{min-height :500px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2dCLEFBR2UsQUFLUyxBQVlHLEFBR1osQUFJQSxBQUtNLFlBUkksQUFJWixDQXhCZSxHQWlCckIsRUFZSCxHQXhCa0IsQ0FvQkQsU0F4QkEsU0FLSSxBQW9CckIsR0F4QkYsbUJBS2UsRUFjYixZQWJnQixpQkFDQSxpQkFDQyxrQkFDRCxpQkFDQSxpQkFDYiIsImZpbGUiOiIvVXNlcnMvYXNoaXNocmFpbmEvRGVza3RvcC9naXRodWItcHJvamVjdHMvbmV4dGpzLXByb2plY3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IEhvbWUgPSAoe2RhdGF9KSA9PiAoXG5cbiAgPGRpdj5cblx0PExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5Gb2N1c1wiPiBNb3ZpZSBpbiBmb2N1czwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICAgIDxoMj5Qb3B1bGFyIE1vdmllczwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e2RhdGEubWFwKCh2YWx1ZSAsIGkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb3ZpZVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQ8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0PGltZyBzcmM9e1wiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC9cIiArIHZhbHVlLnBvc3Rlcl9wYXRofSBhbHQ9XCJNb3ZpZSBJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvbW92aWUvW3BpZF1cIiBhcz17e3BhdGhuYW1lOiBcIi9tb3ZpZS9cIiArIHZhbHVlLmlkICwgcXVlcnkgOiB7bmFtZSA6ICdmb3JkZW1vJ319fSBwcmVmZXRjaD17ZmFsc2V9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYW1lXCI+IHsodmFsdWUub3JpZ2luYWxfdGl0bGUpLnNsaWNlKDAsIDEwKX0gPC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgXHRcdDxzcGFuPjE8L3NwYW4+XG4gICAgXHQ8L2Rpdj5cblx0PC9MYXlvdXQ+XG5cbiAgICA8c3R5bGUganN4PntgXG5cdC5tYWluIHtcblx0XHRtYXJpZ24gOjEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246ICBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblx0fVxuXHQubW92aWVXcmFwcGVyIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuXHRcdG1pbi13aWR0aDogMjMlO1xuXHRcdG1pbi1oZWlnaHQ6IDMwMHB4O1xuXHRcdG92ZXJmbGxvdzogaGlkZGVuO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kOiBibGFjaztcblx0XHRtaW4taGVpZ2h0OiA0NzNweDtcbiAgICAgIH1cbiAgICAgIC5yb3d7XG4gICAgICAgIC8vICAgd2lkdGg6IDEwMDAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgXHQubmFtZSB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XG4gIFx0fVxuICBcdC5wYWdpbmF0aW9ue1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR3aWR0aDogOTAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXHR9XG4gIFx0Lk1vdmllSW5Gb2N1cyB7XG5cdFx0bWluLWhlaWdodCA6IDUwMHB4O1xuICBcdH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cmVxfSkgPT4ge1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJylcblx0Y29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcblx0Y29uc29sZS5sb2coanNvbilcblx0cmV0dXJuIHtkYXRhIDoganNvbi5yZXN1bHRzfVxufVxuXG5cblxuLy8gSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcbi8vIFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaW5kZXgnKVxuLy8gXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuLy8gXHRjb25zb2xlLmxvZygnPj4+JywoZGF0YSkpXG4vLyBcdGNvbnNvbGUubG9nKCc+Pj48PDwnLHR5cGVvZihkYXRhKSlcbi8vIFx0cmV0dXJuIChkYXRhKVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js */"));
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
//# sourceMappingURL=index.js.1ddb325253d6e3064424.hot-update.js.map