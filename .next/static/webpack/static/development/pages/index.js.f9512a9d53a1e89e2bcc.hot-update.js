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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MovieOnTopCard */ "./components/MovieOnTopCard.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





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
    className: "jsx-3097220768"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("title", {
    className: "jsx-3097220768"
  }, "Movie List"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-3097220768"
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx("div", {
    className: "jsx-3097220768" + " " + "MovieInFocus"
  }, __jsx("div", {
    id: "posterCard",
    className: "jsx-3097220768"
  }, __jsx(_components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
    posterImg: MovieOnTop['poster_path']
  })), __jsx("div", {
    id: "trailerWrapper",
    className: "jsx-3097220768" + " " + "trailerWrapper"
  }, __jsx("iframe", {
    width: "100%",
    height: "543",
    src: "https://www.youtube.com/embed/FHxhr6KAaUw",
    frameborder: "0",
    allow: "autoplay; encrypted-media",
    allowfullscreen: true,
    className: "jsx-3097220768"
  })), __jsx("div", {
    className: "jsx-3097220768" + " " + "MovieInFocusDetailsWrapper"
  }, __jsx("div", {
    className: "jsx-3097220768" + " " + "MovieOnTopTitleWrapper"
  }, MovieOnTop['original_title']), __jsx("div", {
    className: "jsx-3097220768"
  }, MovieOnTop['overview']), __jsx("div", {
    className: "jsx-3097220768"
  }, __jsx("button", {
    onClick: playHandler,
    className: "jsx-3097220768"
  }, "Play"), __jsx("button", {
    className: "jsx-3097220768"
  }, "MyList"), __jsx("button", {
    className: "jsx-3097220768"
  }, "More Info")))), __jsx("div", {
    className: "jsx-3097220768" + " " + 'main'
  }, __jsx("h2", {
    className: "jsx-3097220768"
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-3097220768" + " " + 'row'
  }, __jsx("div", {
    className: "jsx-3097220768" + " " + "cardCarosel"
  }, movieDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-3097220768" + " " + "movieWrapper"
    }, __jsx("div", {
      className: "jsx-3097220768" + " " + "displayUnit"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/movie/[pid]",
      as: {
        pathname: "/movie/" + value.id,
        query: {
          name: 'fordemo'
        }
      },
      prefetch: false,
      passHref: true
    }, __jsx("div", {
      className: "jsx-3097220768"
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-3097220768"
    })))));
  })))), __jsx("br", {
    className: "jsx-3097220768"
  }), __jsx("br", {
    className: "jsx-3097220768"
  }), __jsx("div", {
    className: "jsx-3097220768" + " " + 'main'
  }, __jsx("h2", {
    className: "jsx-3097220768"
  }, "Popular Shows"), __jsx("div", {
    className: "jsx-3097220768" + " " + 'row'
  }, __jsx("div", {
    className: "jsx-3097220768" + " " + "cardCarosel"
  }, tvDataResults.map(function (value, i) {
    return __jsx("div", {
      className: "jsx-3097220768" + " " + "movieWrapper"
    }, __jsx("div", {
      className: "jsx-3097220768" + " " + "displayUnit"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/movie/[pid]",
      as: {
        pathname: "/movie/" + value.id,
        query: {
          name: 'fordemo'
        }
      },
      prefetch: false,
      passHref: true
    }, __jsx("div", {
      className: "jsx-3097220768"
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-3097220768"
    })))));
  })))), __jsx("div", {
    className: "jsx-3097220768" + " " + "pagination"
  }, __jsx("span", {
    className: "jsx-3097220768"
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3097220768"
  }, ".main.jsx-3097220768{marign :10px;color:white;}.movieWrapper.jsx-3097220768{display:inline-block;vertical-align:top;border:1px solid grey;min-height:300px;overfllow:scroll;text-align:center;background:black;min-height:473px;width:300px;position:relative;}.row.jsx-3097220768{width:100%;overflow:scroll;position:relative;}.name.jsx-3097220768{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-3097220768{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-3097220768{min-height :500px;text-align:center;margin:0 auto;max-height:600px;}.MovieInFocusDetailsWrapper.jsx-3097220768{position:relative;top:-500px;color:white;width:600px;text-align:left;left:60px;line-height:25px;}.MovieOnTopTitleWrapper.jsx-3097220768{font-size:36px;font-weight:bold;margin:10px 0px;}.MovieInFocusDetailsWrapper.jsx-3097220768 button.jsx-3097220768{width :100px;padding:10px;margin:10px;border-radius :5px;}.trailerWrapper.jsx-3097220768{display :none;}.cardCarosel.jsx-3097220768{width :6020px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR2dCLEFBR2UsQUFJUyxBQWVGLEFBS1AsQUFJQSxBQUtZLEFBTUUsQUFTSCxBQU1GLEFBTUMsQUFHQSxXQTNDRSxDQUtGLEFBSVosQ0E1QlEsQUFzREcsQ0FNakIsQUFHaUIsQ0FmSSxHQWZELEFBTUwsR0FuQ0EsQ0F5QkQsR0E1Qm5CLENBc0RxQixDQW5DTSxBQTRDdEIsRUF4QmdCLEdBU0ksSUFmSixFQXNCTyxFQW5ETCxBQXlCckIsQ0FXbUIsSUFwQmhCLEdBNkJBLEVBZm1CLEdBT0MsSUFlcEIsS0FuRGEsRUFtQmhCLEdBV0csRUFPYyxVQXBDRCxBQXFDUSxpQkFwQ1AsQUFxQ2Qsa0JBcENhLGlCQUNNLGlCQUNOLFlBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTW92aWVPblRvcENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZU9uVG9wQ2FyZCdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgcGxheUhhbmRsZXIgPSAoKSA9PiB7XG4gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhaWxlcldyYXBwZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0ZXJDYXJkJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuY29uc3QgSG9tZSA9ICh7bW92aWVEYXRhUmVzdWx0cywgdHZEYXRhUmVzdWx0cywgTW92aWVPblRvcCB9KSA9PiB7XG5yZXR1cm4gKFxuICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Nb3ZpZSBMaXN0PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cdDxMYXlvdXQ+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJNb3ZpZUluRm9jdXNcIj4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3N0ZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVPblRvcENhcmQgICBwb3N0ZXJJbWc9e01vdmllT25Ub3BbJ3Bvc3Rlcl9wYXRoJ119Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhaWxlcldyYXBwZXJcIiBpZD1cInRyYWlsZXJXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjU0M1wiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0ZIeGhyNktBYVV3XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhXCIgYWxsb3dmdWxsc2NyZWVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNb3ZpZUluRm9jdXNEZXRhaWxzV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdmllT25Ub3BUaXRsZVdyYXBwZXJcIj4gIFxuICAgICAgICAgICAgICAgICAgICAgICAge01vdmllT25Ub3BbJ29yaWdpbmFsX3RpdGxlJ119XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge01vdmllT25Ub3BbJ292ZXJ2aWV3J119XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGF5SGFuZGxlcn0+UGxheTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5NeUxpc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TW9yZSBJbmZvPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICAgIDxoMj5Qb3B1bGFyIE1vdmllczwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRDYXJvc2VsXCI+XG4gICAgICAgICAgICAgICAgICAgIHttb3ZpZURhdGFSZXN1bHRzLm1hcCgodmFsdWUgLCBpKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlVbml0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllL1twaWRdXCIgYXM9e3twYXRobmFtZTogXCIvbW92aWUvXCIgKyB2YWx1ZS5pZCAsIHF1ZXJ5IDoge25hbWUgOiAnZm9yZGVtbyd9fX0gcHJlZmV0Y2g9e2ZhbHNlfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwL1wiICsgdmFsdWUucG9zdGVyX3BhdGh9IGFsdD1cIk1vdmllIEltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XHRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgICAgPGgyPlBvcHVsYXIgU2hvd3M8L2gyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkQ2Fyb3NlbFwiPlxuXHRcdFx0XHRcdFx0e3R2RGF0YVJlc3VsdHMubWFwKCh2YWx1ZSAsIGkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb3ZpZVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheVVuaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllL1twaWRdXCIgYXM9e3twYXRobmFtZTogXCIvbW92aWUvXCIgKyB2YWx1ZS5pZCAsIHF1ZXJ5IDoge25hbWUgOiAnZm9yZGVtbyd9fX0gcHJlZmV0Y2g9e2ZhbHNlfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAvXCIgKyB2YWx1ZS5wb3N0ZXJfcGF0aH0gYWx0PVwiTW92aWUgSW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cdFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cbiAgICBcdDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgIFx0XHQ8c3Bhbj4xPC9zcGFuPlxuICAgIFx0PC9kaXY+XG5cdDwvTGF5b3V0PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuXHQubWFpbiB7XG5cdFx0bWFyaWduIDoxMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cdH1cblx0Lm1vdmllV3JhcHBlciB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcblx0XHRtaW4taGVpZ2h0OiAzMDBweDtcblx0XHRvdmVyZmxsb3c6IHNjcm9sbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ3M3B4O1xuICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIC5kaXNwbGF5VW5pdCB7XG4gICAgICAgIFxuICAgIH1cbiAgICAgIC5yb3d7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gIFx0Lm5hbWUge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR0ZXh0LWRlY29yYXRpb24gOiBub25lO1xuICBcdH1cbiAgXHQucGFnaW5hdGlvbntcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0d2lkdGg6IDkwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFx0fVxuICBcdC5Nb3ZpZUluRm9jdXMge1xuICAgICAgICBtaW4taGVpZ2h0IDogNTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgfVxuICAgICAgLk1vdmllSW5Gb2N1c0RldGFpbHNXcmFwcGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtNTAwcHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICB9XG4gICAgICAuTW92aWVPblRvcFRpdGxlV3JhcHBlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5Nb3ZpZUluRm9jdXNEZXRhaWxzV3JhcHBlciBidXR0b24ge1xuICAgICAgICAgIHdpZHRoIDogMTAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDVweDtcbiAgICAgIH1cbiAgICAgIC50cmFpbGVyV3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheSA6IG5vbmU7XG4gICAgICB9XG4gICAgICAuY2FyZENhcm9zZWwge1xuICAgICAgICAgIHdpZHRoIDogNjAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxNDE0MTQ7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICAgIClcbn1cblxuLy8gSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcbi8vIFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MScpXG4vLyBcdGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4vLyAgICAgY29uc29sZS5sb2coXCJhc2hpc2gxMjNcIiAsIHR5cGVvZihqc29uKSkgLy9vYmplY3Rcbi8vICAgICBjb25zb2xlLmxvZyhqc29uKSAgXG4vLyAgICAgLy8geyBwYWdlOiAxLFxuLy8gICAgIC8vICAgICB0b3RhbF9yZXN1bHRzOiAxMDAwMCxcbi8vICAgICAvLyAgICAgdG90YWxfcGFnZXM6IDUwMFxuLy8gICAgIC8vIH1cbi8vIFx0cmV0dXJuIHttb3ZpZURhdGEgOiBqc29uLnJlc3VsdHN9XG4vLyB9XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtzdG9yZSAscmVxfSkgPT4ge1xuICAgIC8vc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdGT08nLCBwYXlsb2FkOiAnZm9vJ30pO1xuICAgIGNvbnN0IFttb3ZpZURhdGEsIHR2RGF0YSxNb3ZpZU9uVG9wXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL3R2P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmc29ydF9ieT1wb3B1bGFyaXR5LmRlc2MmcGFnZT0xJnRpbWV6b25lPUFtZXJpY2ElMkZOZXdfWW9yayZpbmNsdWRlX251bGxfZmlyc3RfYWlyX2RhdGVzPWZhbHNlYCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvNTA4OTY1P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVNgKS50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICBdKTtcbiAgICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG1vdmllRGF0YVJlc3VsdHMgOiBtb3ZpZURhdGEucmVzdWx0cyxcbiAgICAgICAgdHZEYXRhUmVzdWx0cyA6IHR2RGF0YS5yZXN1bHRzLFxuICAgICAgICBNb3ZpZU9uVG9wIDogTW92aWVPblRvcFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSkoSG9tZSk7XG4iXX0= */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/index.js */"), __jsx("style", {
    global: true
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
    var store, req, _ref4, _ref5, movieData, tvData, MovieOnTop;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref2.store, req = _ref2.req;
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(function (state) {
  return state;
})(Home));

/***/ })

})
//# sourceMappingURL=index.js.f9512a9d53a1e89e2bcc.hot-update.js.map