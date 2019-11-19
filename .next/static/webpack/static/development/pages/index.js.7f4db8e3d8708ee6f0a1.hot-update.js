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
  document.getElementById('trailerWrapper').style.display = 'block';
  document.getElementById('posterCard').style.display = 'none';
};

var Home = function Home(_ref) {
  var movieDataResults = _ref.movieDataResults,
      tvDataResults = _ref.tvDataResults,
      MovieOnTop = _ref.MovieOnTop;
  return __jsx("div", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Movie List"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3097220768" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    id: "posterCard",
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    posterImg: MovieOnTop['poster_path'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("div", {
    id: "trailerWrapper",
    className: "jsx-3097220768" + " " + "trailerWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("iframe", {
    width: "100%",
    height: "543",
    src: "https://www.youtube.com/embed/FHxhr6KAaUw",
    frameborder: "0",
    allow: "autoplay; encrypted-media",
    allowfullscreen: true,
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3097220768" + " " + "MovieInFocusDetailsWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3097220768" + " " + "MovieOnTopTitleWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, MovieOnTop['original_title']), __jsx("div", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, MovieOnTop['overview']), __jsx("div", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("button", {
    onClick: playHandler,
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Play"), __jsx("button", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "MyList"), __jsx("button", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "More Info")))), __jsx("div", {
    className: "jsx-3097220768" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-3097220768" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3097220768" + " " + "cardCarosel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, movieDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-3097220768" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3097220768" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
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
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3097220768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-3097220768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })))));
  })))), __jsx("br", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3097220768" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Popular Shows"), __jsx("div", {
    className: "jsx-3097220768" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3097220768" + " " + "cardCarosel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, tvDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-3097220768" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3097220768" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
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
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3097220768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-3097220768",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })))));
  })))), __jsx("div", {
    className: "jsx-3097220768" + " " + "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3097220768",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3097220768",
    __self: this
  }, ".main.jsx-3097220768{marign :10px;color:white;}.movieWrapper.jsx-3097220768{display:inline-block;vertical-align:top;border:1px solid grey;min-height:300px;overfllow:scroll;text-align:center;background:black;min-height:473px;width:300px;position:relative;}.row.jsx-3097220768{width:100%;overflow:scroll;position:relative;}.name.jsx-3097220768{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-3097220768{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-3097220768{min-height :500px;text-align:center;margin:0 auto;max-height:600px;}.MovieInFocusDetailsWrapper.jsx-3097220768{position:relative;top:-500px;color:white;width:600px;text-align:left;left:60px;line-height:25px;}.MovieOnTopTitleWrapper.jsx-3097220768{font-size:36px;font-weight:bold;margin:10px 0px;}.MovieInFocusDetailsWrapper.jsx-3097220768 button.jsx-3097220768{width :100px;padding:10px;margin:10px;border-radius :5px;}.trailerWrapper.jsx-3097220768{display :none;}.cardCarosel.jsx-3097220768{width :6020px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRmdCLEFBR2UsQUFJUyxBQWVGLEFBS1AsQUFJQSxBQUtZLEFBTUUsQUFTSCxBQU1GLEFBTUMsQUFHQSxXQTNDRSxDQUtGLEFBSVosQ0E1QlEsQUFzREcsQ0FNakIsQUFHaUIsQ0FmSSxHQWZELEFBTUwsR0FuQ0EsQ0F5QkQsR0E1Qm5CLENBc0RxQixDQW5DTSxBQTRDdEIsRUF4QmdCLEdBU0ksSUFmSixFQXNCTyxFQW5ETCxBQXlCckIsQ0FXbUIsSUFwQmhCLEdBNkJBLEVBZm1CLEdBT0MsSUFlcEIsS0FuRGEsRUFtQmhCLEdBV0csRUFPYyxVQXBDRCxBQXFDUSxpQkFwQ1AsQUFxQ2Qsa0JBcENhLGlCQUNNLGlCQUNOLFlBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBNb3ZpZU9uVG9wQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL01vdmllT25Ub3BDYXJkJ1xuXG5jb25zdCBwbGF5SGFuZGxlciA9ICgpID0+IHtcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFpbGVyV3JhcHBlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3RlckNhcmQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5jb25zdCBIb21lID0gKHttb3ZpZURhdGFSZXN1bHRzLCB0dkRhdGFSZXN1bHRzLCBNb3ZpZU9uVG9wIH0pID0+IHtcbnJldHVybiAoXG4gIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1vdmllIExpc3Q8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIGtleT1cInZpZXdwb3J0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblx0PExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5Gb2N1c1wiPiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvc3RlckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZU9uVG9wQ2FyZCAgIHBvc3RlckltZz17TW92aWVPblRvcFsncG9zdGVyX3BhdGgnXX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFpbGVyV3JhcHBlclwiIGlkPVwidHJhaWxlcldyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTQzXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvRkh4aHI2S0FhVXdcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWFcIiBhbGxvd2Z1bGxzY3JlZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5Gb2N1c0RldGFpbHNXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW92aWVPblRvcFRpdGxlV3JhcHBlclwiPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7TW92aWVPblRvcFsnb3JpZ2luYWxfdGl0bGUnXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7TW92aWVPblRvcFsnb3ZlcnZpZXcnXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BsYXlIYW5kbGVyfT5QbGF5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPk15TGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Nb3JlIEluZm88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgICAgPGgyPlBvcHVsYXIgTW92aWVzPC9oMj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZENhcm9zZWxcIj5cbiAgICAgICAgICAgICAgICAgICAge21vdmllRGF0YVJlc3VsdHMubWFwKCh2YWx1ZSAsIGkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheVVuaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWUvW3BpZF1cIiBhcz17e3BhdGhuYW1lOiBcIi9tb3ZpZS9cIiArIHZhbHVlLmlkICwgcXVlcnkgOiB7bmFtZSA6ICdmb3JkZW1vJ319fSBwcmVmZXRjaD17ZmFsc2V9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAvXCIgKyB2YWx1ZS5wb3N0ZXJfcGF0aH0gYWx0PVwiTW92aWUgSW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cdFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG4gICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICA8aDI+UG9wdWxhciBTaG93czwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRDYXJvc2VsXCI+XG5cdFx0XHRcdFx0XHR7dHZEYXRhUmVzdWx0cy5tYXAoKHZhbHVlICwgaSk9Pntcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vdmllV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5VW5pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWUvW3BpZF1cIiBhcz17e3BhdGhuYW1lOiBcIi9tb3ZpZS9cIiArIHZhbHVlLmlkICwgcXVlcnkgOiB7bmFtZSA6ICdmb3JkZW1vJ319fSBwcmVmZXRjaD17ZmFsc2V9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC9cIiArIHZhbHVlLnBvc3Rlcl9wYXRofSBhbHQ9XCJNb3ZpZSBJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVx0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgXHRcdDxzcGFuPjE8L3NwYW4+XG4gICAgXHQ8L2Rpdj5cblx0PC9MYXlvdXQ+XG5cbiAgICA8c3R5bGUganN4PntgXG5cdC5tYWluIHtcblx0XHRtYXJpZ24gOjEwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblx0fVxuXHQubW92aWVXcmFwcGVyIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuXHRcdG1pbi1oZWlnaHQ6IDMwMHB4O1xuXHRcdG92ZXJmbGxvdzogc2Nyb2xsO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgbWluLWhlaWdodDogNDczcHg7XG4gICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgLmRpc3BsYXlVbml0IHtcbiAgICAgICAgXG4gICAgfVxuICAgICAgLnJvd3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgXHQubmFtZSB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XG4gIFx0fVxuICBcdC5wYWdpbmF0aW9ue1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR3aWR0aDogOTAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXHR9XG4gIFx0Lk1vdmllSW5Gb2N1cyB7XG4gICAgICAgIG1pbi1oZWlnaHQgOiA1MDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICB9XG4gICAgICAuTW92aWVJbkZvY3VzRGV0YWlsc1dyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC01MDBweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgIH1cbiAgICAgIC5Nb3ZpZU9uVG9wVGl0bGVXcmFwcGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIH1cblxuICAgICAgLk1vdmllSW5Gb2N1c0RldGFpbHNXcmFwcGVyIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGggOiAxMDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzIDogNXB4O1xuICAgICAgfVxuICAgICAgLnRyYWlsZXJXcmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5IDogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5jYXJkQ2Fyb3NlbCB7XG4gICAgICAgICAgd2lkdGggOiA2MDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGdsb2JhbD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmcgOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE0MTQxNDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICAgKVxufVxuXG4vLyBIb21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cmVxfSkgPT4ge1xuLy8gXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJylcbi8vIFx0Y29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbi8vICAgICBjb25zb2xlLmxvZyhcImFzaGlzaDEyM1wiICwgdHlwZW9mKGpzb24pKSAvL29iamVjdFxuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pICBcbi8vICAgICAvLyB7IHBhZ2U6IDEsXG4vLyAgICAgLy8gICAgIHRvdGFsX3Jlc3VsdHM6IDEwMDAwLFxuLy8gICAgIC8vICAgICB0b3RhbF9wYWdlczogNTAwXG4vLyAgICAgLy8gfVxuLy8gXHRyZXR1cm4ge21vdmllRGF0YSA6IGpzb24ucmVzdWx0c31cbi8vIH1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcblxuICAgIGNvbnN0IFttb3ZpZURhdGEsIHR2RGF0YSxNb3ZpZU9uVG9wXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL3R2P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmc29ydF9ieT1wb3B1bGFyaXR5LmRlc2MmcGFnZT0xJnRpbWV6b25lPUFtZXJpY2ElMkZOZXdfWW9yayZpbmNsdWRlX251bGxfZmlyc3RfYWlyX2RhdGVzPWZhbHNlYCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvNTA4OTY1P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVNgKS50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICBdKTtcbiAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG1vdmllRGF0YVJlc3VsdHMgOiBtb3ZpZURhdGEucmVzdWx0cyxcbiAgICAgICAgdHZEYXRhUmVzdWx0cyA6IHR2RGF0YS5yZXN1bHRzLFxuICAgICAgICBNb3ZpZU9uVG9wIDogTW92aWVPblRvcFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js */"), __jsx("style", {
    global: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
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
//# sourceMappingURL=index.js.7f4db8e3d8708ee6f0a1.hot-update.js.map