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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MovieOnTopCard */ "./components/MovieOnTopCard.js");




var _jsxFileName = "/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








var playHandler = function playHandler() {
  alert("1");
};

var Home = function Home(_ref) {
  var movieDataResults = _ref.movieDataResults,
      tvDataResults = _ref.tvDataResults,
      MovieOnTop = _ref.MovieOnTop;
  return __jsx("div", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Movie List"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1806224573" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    posterImg: MovieOnTop['poster_path'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1806224573" + " " + "trailerWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("iframe", {
    width: "100%",
    height: "543",
    src: "https://www.youtube.com/embed/FHxhr6KAaUw",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true,
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1806224573" + " " + "MovieInFocusDetailsWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1806224573" + " " + "MovieOnTopTitleWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, MovieOnTop['original_title']), __jsx("div", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, MovieOnTop['overview']), __jsx("div", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("button", {
    onClick: playHandler,
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Play"), __jsx("button", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "MyList"), __jsx("button", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "More Info")))), __jsx("div", {
    className: "jsx-1806224573" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-1806224573" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, movieDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-1806224573" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1806224573" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1806224573",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-1806224573",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })))));
  }))), __jsx("br", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1806224573" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Popular Shows"), __jsx("div", {
    className: "jsx-1806224573" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, tvDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-1806224573" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1806224573" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
        lineNumber: 72
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1806224573",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-1806224573",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })))));
  }))), __jsx("div", {
    className: "jsx-1806224573" + " " + "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1806224573",
    __self: this
  }, ".main.jsx-1806224573{marign :10px;text-align:center;color:white;}.movieWrapper.jsx-1806224573{display:inline-block;vertical-align:top;border:1px solid grey;min-height:300px;overfllow:scroll;text-align:center;background:black;min-height:473px;width:300px;position:relative;}.row.jsx-1806224573{width:100%;overflow:scroll;position:relative;}.name.jsx-1806224573{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-1806224573{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-1806224573{min-height :500px;text-align:center;margin:0 auto;max-height:600px;}.MovieInFocusDetailsWrapper.jsx-1806224573{position:relative;top:-1900px;color:white;width:600px;text-align:left;left:60px;line-height:25px;}.MovieOnTopTitleWrapper.jsx-1806224573{font-size:36px;font-weight:bold;margin:10px 0px;}.MovieInFocusDetailsWrapper.jsx-1806224573 button.jsx-1806224573{width :100px;padding:10px;margin:10px;border-radius :5px;}.trailerWrapper.jsx-1806224573{display :none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RmdCLEFBR2UsQUFLUyxBQWVGLEFBS1AsQUFJQSxBQUtZLEFBTUUsQUFTSCxBQU1GLEFBTUMsV0F4Q0UsQ0FLRixBQUlaLENBN0JlLEFBdURKLENBTWpCLENBWnFCLEdBZkQsQUFNSixHQW5DRCxDQXlCRCxJQTBCRSxDQW5DTSxHQW9CTixDQXhDRixDQWlETSxJQWZKLEVBc0JPLEVBbkRMLEFBeUJyQixFQVdtQixDQXhDckIsRUFvQkssR0E2QkEsRUFmbUIsSUFPQyxHQWVwQixLQW5EYSxFQW1CaEIsR0FXRyxHQU9jLFNBcENELENBcUNRLGdCQXBDUCxDQXFDZCxpQkFwQ2EsaUJBQ00saUJBQ04sWUFDTyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FzaGlzaHJhaW5hL0Rlc2t0b3AvZ2l0aHViLXByb2plY3RzL25leHRqcy1wcm9qZWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IE1vdmllT25Ub3BDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVPblRvcENhcmQnXG5cbmNvbnN0IHBsYXlIYW5kbGVyID0gKCkgPT4ge1xuICAgYWxlcnQoXCIxXCIpO1xufVxuXG5jb25zdCBIb21lID0gKHttb3ZpZURhdGFSZXN1bHRzLCB0dkRhdGFSZXN1bHRzLCBNb3ZpZU9uVG9wIH0pID0+IHtcbnJldHVybiAoXG4gIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1vdmllIExpc3Q8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIGtleT1cInZpZXdwb3J0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblx0PExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5Gb2N1c1wiPiBcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllT25Ub3BDYXJkIHBvc3RlckltZz17TW92aWVPblRvcFsncG9zdGVyX3BhdGgnXX0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsZXJXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjU0M1wiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0ZIeGhyNktBYVV3XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW92aWVJbkZvY3VzRGV0YWlsc1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNb3ZpZU9uVG9wVGl0bGVXcmFwcGVyXCI+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNb3ZpZU9uVG9wWydvcmlnaW5hbF90aXRsZSddfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtNb3ZpZU9uVG9wWydvdmVydmlldyddfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGxheUhhbmRsZXJ9PlBsYXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TXlMaXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPk1vcmUgSW5mbzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICA8aDI+UG9wdWxhciBNb3ZpZXM8L2gyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0XHR7bW92aWVEYXRhUmVzdWx0cy5tYXAoKHZhbHVlICwgaSk9Pntcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vdmllV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5VW5pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWUvW3BpZF1cIiBhcz17e3BhdGhuYW1lOiBcIi9tb3ZpZS9cIiArIHZhbHVlLmlkICwgcXVlcnkgOiB7bmFtZSA6ICdmb3JkZW1vJ319fSBwcmVmZXRjaD17ZmFsc2V9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC9cIiArIHZhbHVlLnBvc3Rlcl9wYXRofSBhbHQ9XCJNb3ZpZSBJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICAgIDxoMj5Qb3B1bGFyIFNob3dzPC9oMj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXHRcdFx0XHRcdFx0e3R2RGF0YVJlc3VsdHMubWFwKCh2YWx1ZSAsIGkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb3ZpZVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheVVuaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllL1twaWRdXCIgYXM9e3twYXRobmFtZTogXCIvbW92aWUvXCIgKyB2YWx1ZS5pZCAsIHF1ZXJ5IDoge25hbWUgOiAnZm9yZGVtbyd9fX0gcHJlZmV0Y2g9e2ZhbHNlfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAvXCIgKyB2YWx1ZS5wb3N0ZXJfcGF0aH0gYWx0PVwiTW92aWUgSW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cdFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cbiAgICBcdDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgIFx0XHQ8c3Bhbj4xPC9zcGFuPlxuICAgIFx0PC9kaXY+XG5cdDwvTGF5b3V0PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuXHQubWFpbiB7XG5cdFx0bWFyaWduIDoxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiAgY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cdH1cblx0Lm1vdmllV3JhcHBlciB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcblx0XHRtaW4taGVpZ2h0OiAzMDBweDtcblx0XHRvdmVyZmxsb3c6IHNjcm9sbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ3M3B4O1xuICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIC5kaXNwbGF5VW5pdCB7XG4gICAgICAgIFxuICAgIH1cbiAgICAgIC5yb3d7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gIFx0Lm5hbWUge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR0ZXh0LWRlY29yYXRpb24gOiBub25lO1xuICBcdH1cbiAgXHQucGFnaW5hdGlvbntcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0d2lkdGg6IDkwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFx0fVxuICBcdC5Nb3ZpZUluRm9jdXMge1xuICAgICAgICBtaW4taGVpZ2h0IDogNTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgfVxuICAgICAgLk1vdmllSW5Gb2N1c0RldGFpbHNXcmFwcGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtMTkwMHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgICAgLk1vdmllT25Ub3BUaXRsZVdyYXBwZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgfVxuXG4gICAgICAuTW92aWVJbkZvY3VzRGV0YWlsc1dyYXBwZXIgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aCA6IDEwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1cHg7XG4gICAgICB9XG4gICAgICAudHJhaWxlcldyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXkgOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUgZ2xvYmFsPntgXG4gICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZyA6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbiAgICApXG59XG5cbi8vIEhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtyZXF9KSA9PiB7XG4vLyBcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT1jMThhOGM2M2JlZTlkNjY2NjVhNDg2YTYyNGQ0ODE3NyZsYW5ndWFnZT1lbi1VUyZwYWdlPTEnKVxuLy8gXHRjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuLy8gICAgIGNvbnNvbGUubG9nKFwiYXNoaXNoMTIzXCIgLCB0eXBlb2YoanNvbikpIC8vb2JqZWN0XG4vLyAgICAgY29uc29sZS5sb2coanNvbikgIFxuLy8gICAgIC8vIHsgcGFnZTogMSxcbi8vICAgICAvLyAgICAgdG90YWxfcmVzdWx0czogMTAwMDAsXG4vLyAgICAgLy8gICAgIHRvdGFsX3BhZ2VzOiA1MDBcbi8vICAgICAvLyB9XG4vLyBcdHJldHVybiB7bW92aWVEYXRhIDoganNvbi5yZXN1bHRzfVxuLy8gfVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cmVxfSkgPT4ge1xuXG4gICAgY29uc3QgW21vdmllRGF0YSwgdHZEYXRhLE1vdmllT25Ub3BdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xYCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZGlzY292ZXIvdHY/YXBpX2tleT1jMThhOGM2M2JlZTlkNjY2NjVhNDg2YTYyNGQ0ODE3NyZsYW5ndWFnZT1lbi1VUyZzb3J0X2J5PXBvcHVsYXJpdHkuZGVzYyZwYWdlPTEmdGltZXpvbmU9QW1lcmljYSUyRk5ld19Zb3JrJmluY2x1ZGVfbnVsbF9maXJzdF9haXJfZGF0ZXM9ZmFsc2VgKS50aGVuKHIgPT4gci5qc29uKCkpLFxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS81MDg5NjU/YXBpX2tleT1jMThhOGM2M2JlZTlkNjY2NjVhNDg2YTYyNGQ0ODE3NyZsYW5ndWFnZT1lbi1VU2ApLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIF0pO1xuICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW92aWVEYXRhUmVzdWx0cyA6IG1vdmllRGF0YS5yZXN1bHRzLFxuICAgICAgICB0dkRhdGFSZXN1bHRzIDogdHZEYXRhLnJlc3VsdHMsXG4gICAgICAgIE1vdmllT25Ub3AgOiBNb3ZpZU9uVG9wXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js */"), __jsx("style", {
    global: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "\n        * {\n            box-sizing : border-box;\n        }\n        body {\n            background: #141414;\n        }\n    "));
}; // Home.getInitialProps = async ({req}) => {
// 	const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1')
// 	const json = await res.json()
//     console.log("ashish123" , typeof(json)) //object
//     console.log(json)  
//     // { page: 1,
//     //     total_results: 10000,
//     //     total_pages: 500
//     // }
// 	return {movieData : json.results}
// }


Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, _ref4, _ref5, movieData, tvData, MovieOnTop;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1").then(function (r) {
              return r.json();
            }), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://api.themoviedb.org/3/discover/tv?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false").then(function (r) {
              return r.json();
            }), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("https://api.themoviedb.org/3/movie/508965?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US").then(function (r) {
              return r.json();
            })]);

          case 3:
            _ref4 = _context.sent;
            _ref5 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, 3);
            movieData = _ref5[0];
            tvData = _ref5[1];
            MovieOnTop = _ref5[2];
            return _context.abrupt("return", {
              movieDataResults: movieData.results,
              tvDataResults: tvData.results,
              MovieOnTop: MovieOnTop
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
//# sourceMappingURL=index.js.f908064c5d15ab486d1d.hot-update.js.map