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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MovieOnTopCard */ "./components/MovieOnTopCard.js");





var _jsxFileName = "/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








var Home = function Home(_ref) {
  var movieDataResults = _ref.movieDataResults,
      tvDataResults = _ref.tvDataResults,
      MovieOnTop = _ref.MovieOnTop;
  {
    console.log("ashish", typeof {
      MovieOnTop: MovieOnTop
    }); //object

    console.log("ashish2", _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(MovieOnTop)); //objects which has one key, of same name, that is an array of objects
    // { movieData: 
    //     [ { popularity: 441.229,
    //         vote_count: 5591,
    //         video: false,
    //         poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    //         id: 475557}]
    // }
  }
  return __jsx("div", {
    className: "jsx-1801834541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1801834541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Movie List"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-1801834541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1801834541" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_12__["default"], {
    posterImg: MovieOnTop['poster_path'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1801834541" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1801834541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-1801834541" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, movieDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-1801834541" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1801834541" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1801834541",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-1801834541",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })))));
  }))), __jsx("br", {
    className: "jsx-1801834541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1801834541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1801834541" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1801834541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Popular Shows"), __jsx("div", {
    className: "jsx-1801834541" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, tvDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-1801834541" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1801834541" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
        lineNumber: 69
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1801834541",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-1801834541",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })))));
  }))), __jsx("div", {
    className: "jsx-1801834541" + " " + "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1801834541",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1801834541",
    __self: this
  }, ".main.jsx-1801834541{marign :10px;text-align:center;color:white;}.movieWrapper.jsx-1801834541{display:inline-block;vertical-align:top;border:1px solid grey;min-height:300px;overfllow:scroll;text-align:center;background:black;min-height:473px;width:300px;position:relative;}.row.jsx-1801834541{width:100%;overflow:scroll;position:relative;}.name.jsx-1801834541{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-1801834541{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-1801834541{min-height :500px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmdCLEFBR2UsQUFLUyxBQWVGLEFBS1AsQUFJQSxBQUtZLFdBYkEsQ0FLRixBQUlaLENBN0JlLEtBa0NELEdBN0JMLENBeUJELEtBVFEsSUFwQlIsS0FrQ2pCLElBN0JxQixBQXlCckIsR0E3QkYsRUFvQkssaUJBZmEsRUFtQmhCLGVBbEJnQixpQkFDQyxrQkFDRCxpQkFDTSxpQkFDTixZQUNPLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvYXNoaXNocmFpbmEvRGVza3RvcC9naXRodWItcHJvamVjdHMvbmV4dGpzLXByb2plY3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTW92aWVPblRvcENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZU9uVG9wQ2FyZCdcblxuXG5jb25zdCBIb21lID0gKHttb3ZpZURhdGFSZXN1bHRzLCB0dkRhdGFSZXN1bHRzLCBNb3ZpZU9uVG9wIH0pID0+IHtcbntjb25zb2xlLmxvZyhcImFzaGlzaFwiICwgdHlwZW9mKHtNb3ZpZU9uVG9wfSkpICAvL29iamVjdFxuY29uc29sZS5sb2coXCJhc2hpc2gyXCIgLCBPYmplY3Qua2V5cyhNb3ZpZU9uVG9wKSkgLy9vYmplY3RzIHdoaWNoIGhhcyBvbmUga2V5LCBvZiBzYW1lIG5hbWUsIHRoYXQgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuXG4vLyB7IG1vdmllRGF0YTogXG4vLyAgICAgWyB7IHBvcHVsYXJpdHk6IDQ0MS4yMjksXG4vLyAgICAgICAgIHZvdGVfY291bnQ6IDU1OTEsXG4vLyAgICAgICAgIHZpZGVvOiBmYWxzZSxcbi8vICAgICAgICAgcG9zdGVyX3BhdGg6ICcvdWREY2xKb0hqZmpiOEVrZ3NkNEZEdGVPa0NVLmpwZycsXG4vLyAgICAgICAgIGlkOiA0NzU1NTd9XVxuLy8gfVxuXG59XG5yZXR1cm4gKFxuICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Nb3ZpZSBMaXN0PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cdDxMYXlvdXQ+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJNb3ZpZUluRm9jdXNcIj4gXG4gICAgICAgICAgICB7Lyoge09iamVjdC5rZXlzKE1vdmllT25Ub3ApLm1hcCgoa2V5TmFtZSwgaSk9PnsgKi99XG4gICAgICAgICAgICAgICAgey8qIHJldHVybiAoICovfVxuICAgICAgICAgICAgICAgICAgICA8TW92aWVPblRvcENhcmQgcG9zdGVySW1nPXtNb3ZpZU9uVG9wWydwb3N0ZXJfcGF0aCddfS8+XG4gICAgICAgICAgICAgICAgey8qICkgKi99XG4gICAgICAgICAgICB7LyogfSl9ICovfVxuICAgICAgICA8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICA8aDI+UG9wdWxhciBNb3ZpZXM8L2gyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0XHR7bW92aWVEYXRhUmVzdWx0cy5tYXAoKHZhbHVlICwgaSk9Pntcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vdmllV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5VW5pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWUvW3BpZF1cIiBhcz17e3BhdGhuYW1lOiBcIi9tb3ZpZS9cIiArIHZhbHVlLmlkICwgcXVlcnkgOiB7bmFtZSA6ICdmb3JkZW1vJ319fSBwcmVmZXRjaD17ZmFsc2V9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC9cIiArIHZhbHVlLnBvc3Rlcl9wYXRofSBhbHQ9XCJNb3ZpZSBJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICAgIDxoMj5Qb3B1bGFyIFNob3dzPC9oMj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXHRcdFx0XHRcdFx0e3R2RGF0YVJlc3VsdHMubWFwKCh2YWx1ZSAsIGkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb3ZpZVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheVVuaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllL1twaWRdXCIgYXM9e3twYXRobmFtZTogXCIvbW92aWUvXCIgKyB2YWx1ZS5pZCAsIHF1ZXJ5IDoge25hbWUgOiAnZm9yZGVtbyd9fX0gcHJlZmV0Y2g9e2ZhbHNlfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAvXCIgKyB2YWx1ZS5wb3N0ZXJfcGF0aH0gYWx0PVwiTW92aWUgSW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cdFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cbiAgICBcdDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgIFx0XHQ8c3Bhbj4xPC9zcGFuPlxuICAgIFx0PC9kaXY+XG5cdDwvTGF5b3V0PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuXHQubWFpbiB7XG5cdFx0bWFyaWduIDoxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiAgY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cdH1cblx0Lm1vdmllV3JhcHBlciB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcblx0XHRtaW4taGVpZ2h0OiAzMDBweDtcblx0XHRvdmVyZmxsb3c6IHNjcm9sbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ3M3B4O1xuICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIC5kaXNwbGF5VW5pdCB7XG4gICAgICAgIFxuICAgIH1cbiAgICAgIC5yb3d7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gIFx0Lm5hbWUge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR0ZXh0LWRlY29yYXRpb24gOiBub25lO1xuICBcdH1cbiAgXHQucGFnaW5hdGlvbntcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0d2lkdGg6IDkwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFx0fVxuICBcdC5Nb3ZpZUluRm9jdXMge1xuICAgICAgICBtaW4taGVpZ2h0IDogNTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXHR9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICAgKVxufVxuXG4vLyBIb21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cmVxfSkgPT4ge1xuLy8gXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJylcbi8vIFx0Y29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbi8vICAgICBjb25zb2xlLmxvZyhcImFzaGlzaDEyM1wiICwgdHlwZW9mKGpzb24pKSAvL29iamVjdFxuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pICBcbi8vICAgICAvLyB7IHBhZ2U6IDEsXG4vLyAgICAgLy8gICAgIHRvdGFsX3Jlc3VsdHM6IDEwMDAwLFxuLy8gICAgIC8vICAgICB0b3RhbF9wYWdlczogNTAwXG4vLyAgICAgLy8gfVxuLy8gXHRyZXR1cm4ge21vdmllRGF0YSA6IGpzb24ucmVzdWx0c31cbi8vIH1cblxuXG5cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcblxuICAgIGNvbnN0IFttb3ZpZURhdGEsIHR2RGF0YSxNb3ZpZU9uVG9wXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL3R2P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmc29ydF9ieT1wb3B1bGFyaXR5LmRlc2MmcGFnZT0xJnRpbWV6b25lPUFtZXJpY2ElMkZOZXdfWW9yayZpbmNsdWRlX251bGxfZmlyc3RfYWlyX2RhdGVzPWZhbHNlYCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvNTA4OTY1P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVNgKS50aGVuKHIgPT4gci5qc29uKCkpXG5cbiAgICAgIF0pO1xuXHQvLyBjb25zb2xlLmxvZyhcImFiXCIsIHR5cGVvZihtb3ZpZURhdGEpKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWJjXCIgLCAobW92aWVEYXRhKSlcbiAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG1vdmllRGF0YVJlc3VsdHMgOiBtb3ZpZURhdGEucmVzdWx0cyxcbiAgICAgICAgdHZEYXRhUmVzdWx0cyA6IHR2RGF0YS5yZXN1bHRzLFxuICAgICAgICBNb3ZpZU9uVG9wIDogTW92aWVPblRvcFxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js */"), __jsx("style", {
    global: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "\n        * {\n            box-sizing : border-box;\n        }\n    "));
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
            return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1").then(function (r) {
              return r.json();
            }), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://api.themoviedb.org/3/discover/tv?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false").then(function (r) {
              return r.json();
            }), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://api.themoviedb.org/3/movie/508965?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US").then(function (r) {
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
//# sourceMappingURL=index.js.dbfcd2b54d5e843f00f0.hot-update.js.map