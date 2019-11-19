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
    className: "jsx-2255948584",
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
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Movie List"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-2255948584",
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
    className: "jsx-2255948584" + " " + "MovieInFocus",
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
  }), __jsx("div", {
    className: "jsx-2255948584" + " " + "MovieInFocusDetailsWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Name : TESTNAME"), __jsx("br", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Details: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ab, est voluptates quas doloribus error quia, laboriosam amet nisi nostrum ad nam atque a soluta, ipsam nobis odit temporibus totam."), __jsx("br", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Play"), __jsx("button", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "MyList"), __jsx("button", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "More Info")))), __jsx("div", {
    className: "jsx-2255948584" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-2255948584" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, movieDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-2255948584" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2255948584" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
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
        lineNumber: 61
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2255948584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-2255948584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })))));
  }))), __jsx("br", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2255948584" + " " + 'main',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Popular Shows"), __jsx("div", {
    className: "jsx-2255948584" + " " + 'row',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, tvDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-2255948584" + " " + "movieWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2255948584" + " " + "displayUnit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
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
        lineNumber: 81
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2255948584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-2255948584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })))));
  }))), __jsx("div", {
    className: "jsx-2255948584" + " " + "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2255948584",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2255948584",
    __self: this
  }, ".main.jsx-2255948584{marign :10px;text-align:center;color:white;}.movieWrapper.jsx-2255948584{display:inline-block;vertical-align:top;border:1px solid grey;min-height:300px;overfllow:scroll;text-align:center;background:black;min-height:473px;width:300px;position:relative;}.row.jsx-2255948584{width:100%;overflow:scroll;position:relative;}.name.jsx-2255948584{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-2255948584{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-2255948584{min-height :500px;text-align:center;margin:0 auto;max-height:600px;}.MovieInFocusDetailsWrapper.jsx-2255948584{position:relative;top:-1700px;color:white;width:600px;text-align:left;left:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR2dCLEFBR2UsQUFLUyxBQWVGLEFBS1AsQUFJQSxBQUtZLEFBTUUsV0FuQkYsQ0FLRixBQUlaLENBN0JlLEtBa0NELEFBTUosR0FuQ0QsQ0F5QkQsS0FUUSxHQW9CTixDQXhDRixLQWtDRSxJQTdCRSxBQXlCckIsRUFXbUIsQ0F4Q3JCLEVBb0JLLEtBY21CLElBT0MsUUFwQ1AsRUFtQmhCLEdBV0csR0FPYyxTQXBDRCxDQXFDYixnQkFwQ2Msa0JBQ0QsaUJBQ00saUJBQ04sWUFDTyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2FzaGlzaHJhaW5hL0Rlc2t0b3AvZ2l0aHViLXByb2plY3RzL25leHRqcy1wcm9qZWN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IE1vdmllT25Ub3BDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVPblRvcENhcmQnXG5cblxuY29uc3QgSG9tZSA9ICh7bW92aWVEYXRhUmVzdWx0cywgdHZEYXRhUmVzdWx0cywgTW92aWVPblRvcCB9KSA9PiB7XG57Y29uc29sZS5sb2coXCJhc2hpc2hcIiAsIHR5cGVvZih7TW92aWVPblRvcH0pKSAgLy9vYmplY3RcbmNvbnNvbGUubG9nKFwiYXNoaXNoMlwiICwgT2JqZWN0LmtleXMoTW92aWVPblRvcCkpIC8vb2JqZWN0cyB3aGljaCBoYXMgb25lIGtleSwgb2Ygc2FtZSBuYW1lLCB0aGF0IGlzIGFuIGFycmF5IG9mIG9iamVjdHNcblxuLy8geyBtb3ZpZURhdGE6IFxuLy8gICAgIFsgeyBwb3B1bGFyaXR5OiA0NDEuMjI5LFxuLy8gICAgICAgICB2b3RlX2NvdW50OiA1NTkxLFxuLy8gICAgICAgICB2aWRlbzogZmFsc2UsXG4vLyAgICAgICAgIHBvc3Rlcl9wYXRoOiAnL3VkRGNsSm9IamZqYjhFa2dzZDRGRHRlT2tDVS5qcGcnLFxuLy8gICAgICAgICBpZDogNDc1NTU3fV1cbi8vIH1cblxufVxucmV0dXJuIChcbiAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TW92aWUgTGlzdDwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAga2V5PVwidmlld3BvcnRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXHQ8TGF5b3V0PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiTW92aWVJbkZvY3VzXCI+IFxuICAgICAgICAgICAgey8qIHtPYmplY3Qua2V5cyhNb3ZpZU9uVG9wKS5tYXAoKGtleU5hbWUsIGkpPT57ICovfVxuICAgICAgICAgICAgICAgIHsvKiByZXR1cm4gKCAqL31cbiAgICAgICAgICAgICAgICAgICAgPE1vdmllT25Ub3BDYXJkIHBvc3RlckltZz17TW92aWVPblRvcFsncG9zdGVyX3BhdGgnXX0vPlxuICAgICAgICAgICAgICAgIHsvKiApICovfVxuICAgICAgICAgICAgey8qIH0pfSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW92aWVJbkZvY3VzRGV0YWlsc1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgOiBURVNUTkFNRVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICBEZXRhaWxzOiBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWNjdXNhbnRpdW0gYWIsIGVzdCB2b2x1cHRhdGVzIHF1YXMgZG9sb3JpYnVzIGVycm9yIHF1aWEsIGxhYm9yaW9zYW0gYW1ldCBuaXNpIG5vc3RydW0gYWQgbmFtIGF0cXVlIGEgc29sdXRhLCBpcHNhbSBub2JpcyBvZGl0IHRlbXBvcmlidXMgdG90YW0uXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+UGxheTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5NeUxpc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TW9yZSBJbmZvPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICAgIDxoMj5Qb3B1bGFyIE1vdmllczwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cblx0XHRcdFx0XHRcdHttb3ZpZURhdGFSZXN1bHRzLm1hcCgodmFsdWUgLCBpKT0+e1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW92aWVXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlVbml0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZS9bcGlkXVwiIGFzPXt7cGF0aG5hbWU6IFwiL21vdmllL1wiICsgdmFsdWUuaWQgLCBxdWVyeSA6IHtuYW1lIDogJ2ZvcmRlbW8nfX19IHByZWZldGNoPXtmYWxzZX0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwL1wiICsgdmFsdWUucG9zdGVyX3BhdGh9IGFsdD1cIk1vdmllIEltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fSl9XHRcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgICAgPGgyPlBvcHVsYXIgU2hvd3M8L2gyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0XHR7dHZEYXRhUmVzdWx0cy5tYXAoKHZhbHVlICwgaSk9Pntcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vdmllV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5VW5pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWUvW3BpZF1cIiBhcz17e3BhdGhuYW1lOiBcIi9tb3ZpZS9cIiArIHZhbHVlLmlkICwgcXVlcnkgOiB7bmFtZSA6ICdmb3JkZW1vJ319fSBwcmVmZXRjaD17ZmFsc2V9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC9cIiArIHZhbHVlLnBvc3Rlcl9wYXRofSBhbHQ9XCJNb3ZpZSBJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgXHRcdDxzcGFuPjE8L3NwYW4+XG4gICAgXHQ8L2Rpdj5cblx0PC9MYXlvdXQ+XG5cbiAgICA8c3R5bGUganN4PntgXG5cdC5tYWluIHtcblx0XHRtYXJpZ24gOjEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246ICBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblx0fVxuXHQubW92aWVXcmFwcGVyIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuXHRcdG1pbi1oZWlnaHQ6IDMwMHB4O1xuXHRcdG92ZXJmbGxvdzogc2Nyb2xsO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgbWluLWhlaWdodDogNDczcHg7XG4gICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgLmRpc3BsYXlVbml0IHtcbiAgICAgICAgXG4gICAgfVxuICAgICAgLnJvd3tcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgXHQubmFtZSB7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XG4gIFx0fVxuICBcdC5wYWdpbmF0aW9ue1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR3aWR0aDogOTAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXHR9XG4gIFx0Lk1vdmllSW5Gb2N1cyB7XG4gICAgICAgIG1pbi1oZWlnaHQgOiA1MDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICB9XG4gICAgICAuTW92aWVJbkZvY3VzRGV0YWlsc1dyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC0xNzAwcHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxNDE0MTQ7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICAgIClcbn1cblxuLy8gSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcbi8vIFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MScpXG4vLyBcdGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4vLyAgICAgY29uc29sZS5sb2coXCJhc2hpc2gxMjNcIiAsIHR5cGVvZihqc29uKSkgLy9vYmplY3Rcbi8vICAgICBjb25zb2xlLmxvZyhqc29uKSAgXG4vLyAgICAgLy8geyBwYWdlOiAxLFxuLy8gICAgIC8vICAgICB0b3RhbF9yZXN1bHRzOiAxMDAwMCxcbi8vICAgICAvLyAgICAgdG90YWxfcGFnZXM6IDUwMFxuLy8gICAgIC8vIH1cbi8vIFx0cmV0dXJuIHttb3ZpZURhdGEgOiBqc29uLnJlc3VsdHN9XG4vLyB9XG5cblxuXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtyZXF9KSA9PiB7XG5cbiAgICBjb25zdCBbbW92aWVEYXRhLCB0dkRhdGEsTW92aWVPblRvcF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT1jMThhOGM2M2JlZTlkNjY2NjVhNDg2YTYyNGQ0ODE3NyZsYW5ndWFnZT1lbi1VUyZwYWdlPTFgKS50aGVuKHIgPT4gci5qc29uKCkpLFxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3Zlci90dj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnNvcnRfYnk9cG9wdWxhcml0eS5kZXNjJnBhZ2U9MSZ0aW1lem9uZT1BbWVyaWNhJTJGTmV3X1lvcmsmaW5jbHVkZV9udWxsX2ZpcnN0X2Fpcl9kYXRlcz1mYWxzZWApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLzUwODk2NT9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTYCkudGhlbihyID0+IHIuanNvbigpKVxuXG4gICAgICBdKTtcblx0Ly8gY29uc29sZS5sb2coXCJhYlwiLCB0eXBlb2YobW92aWVEYXRhKSlcbiAgICAvLyBjb25zb2xlLmxvZyhcImFiY1wiICwgKG1vdmllRGF0YSkpXG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgICBtb3ZpZURhdGFSZXN1bHRzIDogbW92aWVEYXRhLnJlc3VsdHMsXG4gICAgICAgIHR2RGF0YVJlc3VsdHMgOiB0dkRhdGEucmVzdWx0cyxcbiAgICAgICAgTW92aWVPblRvcCA6IE1vdmllT25Ub3BcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js */"), __jsx("style", {
    global: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
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
//# sourceMappingURL=index.js.49e41d109a295c7de80f.hot-update.js.map