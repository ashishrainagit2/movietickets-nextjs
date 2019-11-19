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
  console.log("1");
  document.getElementById('trailerWrapper').style.display = 'block';
};

var Home = function Home(_ref) {
  var movieDataResults = _ref.movieDataResults,
      tvDataResults = _ref.tvDataResults,
      MovieOnTop = _ref.MovieOnTop;
  return __jsx("div", {
    className: "jsx-1806224573",
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
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Movie List"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-1806224573",
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
    className: "jsx-1806224573" + " " + "MovieInFocus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "posterCard",
    posterImg: MovieOnTop['poster_path'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("div", {
    id: "trailerWrapper",
    className: "jsx-1806224573" + " " + "trailerWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
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
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1806224573" + " " + "MovieInFocusDetailsWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1806224573" + " " + "MovieOnTopTitleWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, MovieOnTop['original_title']), __jsx("div", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, MovieOnTop['overview']), __jsx("div", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("button", {
    onClick: playHandler,
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Play"), __jsx("button", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "MyList"), __jsx("button", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "More Info")))), __jsx("div", {
    className: "jsx-1806224573" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-1806224573" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, movieDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-1806224573" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1806224573" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
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
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1806224573",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-1806224573",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })))));
  }))), __jsx("br", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1806224573" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Popular Shows"), __jsx("div", {
    className: "jsx-1806224573" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, tvDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-1806224573" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1806224573" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
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
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1806224573",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-1806224573",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })))));
  }))), __jsx("div", {
    className: "jsx-1806224573" + " " + "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1806224573",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1806224573",
    __self: this
  }, ".main.jsx-1806224573{marign :10px;text-align:center;color:white;}.movieWrapper.jsx-1806224573{display:inline-block;vertical-align:top;border:1px solid grey;min-height:300px;overfllow:scroll;text-align:center;background:black;min-height:473px;width:300px;position:relative;}.row.jsx-1806224573{width:100%;overflow:scroll;position:relative;}.name.jsx-1806224573{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-1806224573{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-1806224573{min-height :500px;text-align:center;margin:0 auto;max-height:600px;}.MovieInFocusDetailsWrapper.jsx-1806224573{position:relative;top:-1900px;color:white;width:600px;text-align:left;left:60px;line-height:25px;}.MovieOnTopTitleWrapper.jsx-1806224573{font-size:36px;font-weight:bold;margin:10px 0px;}.MovieInFocusDetailsWrapper.jsx-1806224573 button.jsx-1806224573{width :100px;padding:10px;margin:10px;border-radius :5px;}.trailerWrapper.jsx-1806224573{display :none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RmdCLEFBR2UsQUFLUyxBQWVGLEFBS1AsQUFJQSxBQUtZLEFBTUUsQUFTSCxBQU1GLEFBTUMsV0F4Q0UsQ0FLRixBQUlaLENBN0JlLEFBdURKLENBTWpCLENBWnFCLEdBZkQsQUFNSixHQW5DRCxDQXlCRCxJQTBCRSxDQW5DTSxHQW9CTixDQXhDRixDQWlETSxJQWZKLEVBc0JPLEVBbkRMLEFBeUJyQixFQVdtQixDQXhDckIsRUFvQkssR0E2QkEsRUFmbUIsSUFPQyxHQWVwQixLQW5EYSxFQW1CaEIsR0FXRyxHQU9jLFNBcENELENBcUNRLGdCQXBDUCxDQXFDZCxpQkFwQ2EsaUJBQ00saUJBQ04sWUFDTyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FzaGlzaHJhaW5hL0Rlc2t0b3AvZ2l0aHViLXByb2plY3RzL25leHRqcy1wcm9qZWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IE1vdmllT25Ub3BDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVPblRvcENhcmQnXG5cbmNvbnN0IHBsYXlIYW5kbGVyID0gKCkgPT4ge1xuICAgY29uc29sZS5sb2coXCIxXCIpO1xuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYWlsZXJXcmFwcGVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmNvbnN0IEhvbWUgPSAoe21vdmllRGF0YVJlc3VsdHMsIHR2RGF0YVJlc3VsdHMsIE1vdmllT25Ub3AgfSkgPT4ge1xucmV0dXJuIChcbiAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TW92aWUgTGlzdDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAga2V5PVwidmlld3BvcnRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXHQ8TGF5b3V0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiTW92aWVJbkZvY3VzXCI+IFxuICAgICAgICAgICAgICAgICAgICA8TW92aWVPblRvcENhcmQgIGlkPVwicG9zdGVyQ2FyZFwiIHBvc3RlckltZz17TW92aWVPblRvcFsncG9zdGVyX3BhdGgnXX0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsZXJXcmFwcGVyXCIgaWQ9XCJ0cmFpbGVyV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1NDNcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9GSHhocjZLQWFVd1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5Gb2N1c0RldGFpbHNXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW92aWVPblRvcFRpdGxlV3JhcHBlclwiPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7TW92aWVPblRvcFsnb3JpZ2luYWxfdGl0bGUnXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7TW92aWVPblRvcFsnb3ZlcnZpZXcnXX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BsYXlIYW5kbGVyfT5QbGF5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPk15TGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Nb3JlIEluZm88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgICAgPGgyPlBvcHVsYXIgTW92aWVzPC9oMj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXHRcdFx0XHRcdFx0e21vdmllRGF0YVJlc3VsdHMubWFwKCh2YWx1ZSAsIGkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb3ZpZVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheVVuaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllL1twaWRdXCIgYXM9e3twYXRobmFtZTogXCIvbW92aWUvXCIgKyB2YWx1ZS5pZCAsIHF1ZXJ5IDoge25hbWUgOiAnZm9yZGVtbyd9fX0gcHJlZmV0Y2g9e2ZhbHNlfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAvXCIgKyB2YWx1ZS5wb3N0ZXJfcGF0aH0gYWx0PVwiTW92aWUgSW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cdFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG4gICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICA8aDI+UG9wdWxhciBTaG93czwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cblx0XHRcdFx0XHRcdHt0dkRhdGFSZXN1bHRzLm1hcCgodmFsdWUgLCBpKT0+e1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW92aWVXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlVbml0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZS9bcGlkXVwiIGFzPXt7cGF0aG5hbWU6IFwiL21vdmllL1wiICsgdmFsdWUuaWQgLCBxdWVyeSA6IHtuYW1lIDogJ2ZvcmRlbW8nfX19IHByZWZldGNoPXtmYWxzZX0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwL1wiICsgdmFsdWUucG9zdGVyX3BhdGh9IGFsdD1cIk1vdmllIEltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fSl9XHRcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG4gICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICBcdFx0PHNwYW4+MTwvc3Bhbj5cbiAgICBcdDwvZGl2PlxuXHQ8L0xheW91dD5cblxuICAgIDxzdHlsZSBqc3g+e2Bcblx0Lm1haW4ge1xuXHRcdG1hcmlnbiA6MTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogIGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXHR9XG5cdC5tb3ZpZVdyYXBwZXIge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG5cdFx0bWluLWhlaWdodDogMzAwcHg7XG5cdFx0b3ZlcmZsbG93OiBzY3JvbGw7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICBtaW4taGVpZ2h0OiA0NzNweDtcbiAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAuZGlzcGxheVVuaXQge1xuICAgICAgICBcbiAgICB9XG4gICAgICAucm93e1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICBcdC5uYW1lIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0dGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcbiAgXHR9XG4gIFx0LnBhZ2luYXRpb257XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHdpZHRoOiA5MCU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICBcdH1cbiAgXHQuTW92aWVJbkZvY3VzIHtcbiAgICAgICAgbWluLWhlaWdodCA6IDUwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgIH1cbiAgICAgIC5Nb3ZpZUluRm9jdXNEZXRhaWxzV3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTE5MDBweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbGVmdDogNjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgIH1cbiAgICAgIC5Nb3ZpZU9uVG9wVGl0bGVXcmFwcGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIH1cblxuICAgICAgLk1vdmllSW5Gb2N1c0RldGFpbHNXcmFwcGVyIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGggOiAxMDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzIDogNXB4O1xuICAgICAgfVxuICAgICAgLnRyYWlsZXJXcmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5IDogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGdsb2JhbD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmcgOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE0MTQxNDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICAgKVxufVxuXG4vLyBIb21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cmVxfSkgPT4ge1xuLy8gXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJylcbi8vIFx0Y29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbi8vICAgICBjb25zb2xlLmxvZyhcImFzaGlzaDEyM1wiICwgdHlwZW9mKGpzb24pKSAvL29iamVjdFxuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pICBcbi8vICAgICAvLyB7IHBhZ2U6IDEsXG4vLyAgICAgLy8gICAgIHRvdGFsX3Jlc3VsdHM6IDEwMDAwLFxuLy8gICAgIC8vICAgICB0b3RhbF9wYWdlczogNTAwXG4vLyAgICAgLy8gfVxuLy8gXHRyZXR1cm4ge21vdmllRGF0YSA6IGpzb24ucmVzdWx0c31cbi8vIH1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcblxuICAgIGNvbnN0IFttb3ZpZURhdGEsIHR2RGF0YSxNb3ZpZU9uVG9wXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL3R2P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmc29ydF9ieT1wb3B1bGFyaXR5LmRlc2MmcGFnZT0xJnRpbWV6b25lPUFtZXJpY2ElMkZOZXdfWW9yayZpbmNsdWRlX251bGxfZmlyc3RfYWlyX2RhdGVzPWZhbHNlYCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvNTA4OTY1P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVNgKS50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICBdKTtcbiAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG1vdmllRGF0YVJlc3VsdHMgOiBtb3ZpZURhdGEucmVzdWx0cyxcbiAgICAgICAgdHZEYXRhUmVzdWx0cyA6IHR2RGF0YS5yZXN1bHRzLFxuICAgICAgICBNb3ZpZU9uVG9wIDogTW92aWVPblRvcFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js */"), __jsx("style", {
    global: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
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
//# sourceMappingURL=index.js.f687d15da9b8ebd83f15.hot-update.js.map