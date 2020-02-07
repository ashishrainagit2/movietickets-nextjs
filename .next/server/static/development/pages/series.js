module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => {
  return __jsx("div", {
    role: "contentinfo",
    className: "jsx-168396010" + " " + "member-footer"
  }, __jsx("div", {
    className: "jsx-168396010" + " " + "social-links"
  }, __jsx("a", {
    href: "https://www.facebook.com/NetflixIN/",
    target: "_blank",
    "aria-label": "facebook",
    className: "jsx-168396010" + " " + "social-link"
  }, __jsx("span", {
    focusable: "true",
    className: "jsx-168396010" + " " + "span-icon span-icon-facebook-logo"
  })), __jsx("a", {
    href: "https://www.instagram.com/Netflix_IN/",
    target: "_blank",
    "aria-label": "instagram",
    className: "jsx-168396010" + " " + "social-link"
  }, __jsx("span", {
    focusable: "true",
    className: "jsx-168396010" + " " + "span-icon span-icon-instagram-logo"
  })), __jsx("a", {
    href: "https://twitter.com/netflixindia",
    target: "_blank",
    "aria-label": "twitter",
    className: "jsx-168396010" + " " + "social-link"
  }, __jsx("span", {
    focusable: "true",
    className: "jsx-168396010" + " " + "span-icon span-icon-twitter-logo"
  })), __jsx("a", {
    href: "https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg",
    target: "_blank",
    "aria-label": "youtube",
    className: "jsx-168396010" + " " + "social-link"
  }, __jsx("span", {
    focusable: "true",
    className: "jsx-168396010" + " " + "span-icon span-icon-youtube-logo"
  }))), __jsx("ul", {
    className: "jsx-168396010" + " " + "member-footer-links"
  }, __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "/browse/subtitles",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Audio and Subtitles"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "/browse/audio-description",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Audio Description"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "https://help.netflix.com/",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Help Centre"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "/redeem",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Gift Cards"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "https://media.netflix.com/",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Media Centre"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "http://ir.netflix.com/",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Investor Relations"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "https://jobs.netflix.com/",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Jobs"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "https://help.netflix.com/legal/termsofuse",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Terms of Use"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "https://help.netflix.com/legal/privacy",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Privacy"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "https://help.netflix.com/legal/notices",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Legal Notices"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "/Cookies",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Cookie Preferences"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "https://help.netflix.com/support/2101",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Corporate Information"))), __jsx("li", {
    className: "jsx-168396010" + " " + "member-footer-link-wrapper"
  }, __jsx("a", {
    href: "https://help.netflix.com/contactus",
    className: "jsx-168396010" + " " + "member-footer-link"
  }, __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-link-content"
  }, "Contact Us")))), __jsx("div", {
    className: "jsx-168396010" + " " + "member-footer-service"
  }, __jsx("button", {
    className: "jsx-168396010" + " " + "service-code"
  }, "Service Code")), __jsx("div", {
    className: "jsx-168396010" + " " + "member-footer-copyright"
  }, __jsx("span", {
    className: "jsx-168396010"
  }, "\xA9 1997-2019 ABC, Inc."), __jsx("span", {
    className: "jsx-168396010" + " " + "member-footer-copyright-instance"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "168396010"
  }, ".member-footer.jsx-168396010{max-width:980px;margin:20px auto 0;padding:0 4%;color:#808080;}.member-footer.jsx-168396010 .social-links.jsx-168396010{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:1em;}.member-footer.jsx-168396010 .social-links.jsx-168396010 .social-link.jsx-168396010{margin-right:15px;}.member-footer.jsx-168396010 .social-links.jsx-168396010 .social-link.jsx-168396010 .svg-icon.jsx-168396010{fill:#808080;height:25px;width:36px;}.member-footer.jsx-168396010 .member-footer-help.jsx-168396010{font-size:16px;margin-bottom:30px;color:#fff;padding:0;}.member-footer.jsx-168396010 .member-footer-links.jsx-168396010{font-size:13px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin:0 0 14px 0;padding:0;}.member-footer.jsx-168396010 .member-footer-link-wrapper.jsx-168396010{list-style-type:none;-webkit-box-flex:0;-webkit-flex:0 0 50%;-moz-box-flex:0;-ms-flex:0 0 50%;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;margin-bottom:16px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}@media (min-width:800px){.member-footer.jsx-168396010 .member-footer-link-wrapper.jsx-168396010{-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;}}.member-footer.jsx-168396010 .member-footer-link.jsx-168396010{color:white;-webkit-text-decoration:none;text-decoration:none;}.member-footer.jsx-168396010 .member-footer-link.jsx-168396010:hover{-webkit-text-decoration:underline;text-decoration:underline;}.member-footer.jsx-168396010 .member-footer-link-update.jsx-168396010{font-weight:bold;}.member-footer.jsx-168396010 .member-footer-copyright.jsx-168396010{font-size:11px;margin-bottom:15px;}.member-footer.jsx-168396010 .member-footer-copyright-instance.jsx-168396010{padding:0 4px;display:inline-block;}.member-footer.jsx-168396010 .service-code.jsx-168396010{margin-bottom:20px;font-size:13px;padding:0.5em;}.member-footer.jsx-168396010 .copy-text-block.jsx-168396010+.copy-text-block.jsx-168396010{margin-top:3px;}.service-code.jsx-168396010{background:transparent;color:#808080;border:solid 1px #808080;font-size:1.3rem;padding:0.5rem;}.service-code.jsx-168396010:hover{cursor:pointer;color:#fff;}.sortGallery.jsx-168396010{float:right;font-size:14px;text-align:right;}.sortGallery.jsx-168396010 .nfDropDown.theme-lakira.jsx-168396010{margin-left:10px;min-width:240px;}.sortGallery.jsx-168396010 ul.maturitySelectors.jsx-168396010 li.jsx-168396010{display:inline-block;list-style:none;margin-left:13px;}.sortGallery.jsx-168396010 ul.maturitySelectors.jsx-168396010 li.jsx-168396010 label.jsx-168396010{display:inline;}.sortGallery.jsx-168396010 ul.maturitySelectors.jsx-168396010 li.jsx-168396010 input.jsx-168396010{display:none;}.sortGallery.jsx-168396010 ul.maturitySelectors.jsx-168396010 li.jsx-168396010 input.jsx-168396010+label.jsx-168396010{border:1px solid #333;padding:6px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;display:inline-block;position:relative;margin-right:3px;top:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmEsQUFHcUMsQUFNSSxBQVFGLEFBR0wsQUFLRSxBQU1BLEFBeUJNLEFBYUksQUFNYixBQUljLEFBR1QsQUFHRixBQUlELEFBSUssQUFLSixBQUdRLEFBT1IsQUFJSCxBQUtLLEFBSUksQUFLTixBQUdGLEFBR1MsWUF4REQsQUFxQ04sQ0E1RkgsQUE2R2QsQ0F4Q3VCLENBaEVGLEFBTUMsQUFzREQsQUFhckIsQUFVYSxBQWtCYixDQTNIcUIsQ0ErRXJCLEFBbUNrQixDQXBHbEIsQ0E0RWlCLENBcEZNLENBK0NGLEFBaUVILENBV0osQ0EvRHNCLEFBZ0NwQixFQWhGSCxDQXdGYixDQUltQixNQUtuQixDQTVGYSxBQTREYixBQVFnQixBQXVDVSxDQWpJWCxBQTRCUSxBQTBEdkIsQ0FwRUEsQ0FnRjJCLEFBb0JSLEdBakVJLENBL0NKLEdBd0duQixDQXZGWSxHQXRCSSxBQTBGaEIsR0F6QjJCLEdBcUQzQixDQS9GQSxDQUttQixFQXRCRyxBQTJISSxFQXZEMUIsQ0FyQnFCLENBcERyQixBQXNFQSxBQTJCbUIsV0FyRUcsSUF5QkMsQ0EvQ1IsQ0E0RkUsQUErQlMsY0FwR1gsQ0F5QlEsQUE2Q3ZCLENBK0J1QixxQkFDSCxDQWxFbEIsaUJBbUVpQixXQTdFRSxNQThFWCxDQTlIVSxPQStIcEIsS0E5RWdDLEdBMUJBLEdBdEJoQyx3QkFpRGdDLEdBMUJELHdCQTJCQyxLQTFCSCxpQkEyQjdCLFVBMUJnQywyQkFDRCwwQkFDRix1QkFDQSxxRUFDSix1QkFDQSxtQkFDQSx5REFDQyx3QkFDTywrQkFDUCxxQkFDQyxxQkFDTSw2R0FDYixrQkFDUixVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByb2xlPVwiY29udGVudGluZm9cIiBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9OZXRmbGl4SU4vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cImZhY2Vib29rXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbi1pY29uIHNwYW4taWNvbi1mYWNlYm9vay1sb2dvXCIgZm9jdXNhYmxlPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9OZXRmbGl4X0lOL1wiIHRhcmdldD1cIl9ibGFua1wiIGFyaWEtbGFiZWw9XCJpbnN0YWdyYW1cIj48c3BhbiBjbGFzc05hbWU9XCJzcGFuLWljb24gc3Bhbi1pY29uLWluc3RhZ3JhbS1sb2dvXCIgZm9jdXNhYmxlPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9uZXRmbGl4aW5kaWFcIiB0YXJnZXQ9XCJfYmxhbmtcIiBhcmlhLWxhYmVsPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuLWljb24gc3Bhbi1pY29uLXR3aXR0ZXItbG9nb1wiIGZvY3VzYWJsZT1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNaU056QmdGdWJfV1dpbDZUT1RZd0FnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgYXJpYS1sYWJlbD1cInlvdXR1YmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbi1pY29uIHNwYW4taWNvbi15b3V0dWJlLWxvZ29cIiBmb2N1c2FibGU9XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT48L2Rpdj48dWwgY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rc1wiPjxsaSBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmstd3JhcHBlclwiPjxhIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGlua1wiIGhyZWY9XCIvYnJvd3NlL3N1YnRpdGxlc1wiPjxzcGFuIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGluay1jb250ZW50XCI+QXVkaW8gYW5kIFN1YnRpdGxlczwvc3Bhbj48L2E+PC9saT48bGkgY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rLXdyYXBwZXJcIj48YSBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmtcIiBocmVmPVwiL2Jyb3dzZS9hdWRpby1kZXNjcmlwdGlvblwiPjxzcGFuIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGluay1jb250ZW50XCI+QXVkaW8gRGVzY3JpcHRpb248L3NwYW4+PC9hPjwvbGk+PGxpIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGluay13cmFwcGVyXCI+PGEgY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rXCIgaHJlZj1cImh0dHBzOi8vaGVscC5uZXRmbGl4LmNvbS9cIj48c3BhbiBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmstY29udGVudFwiPkhlbHAgQ2VudHJlPC9zcGFuPjwvYT48L2xpPjxsaSBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmstd3JhcHBlclwiPjxhIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGlua1wiIGhyZWY9XCIvcmVkZWVtXCI+PHNwYW4gY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rLWNvbnRlbnRcIj5HaWZ0IENhcmRzPC9zcGFuPjwvYT48L2xpPjxsaSBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmstd3JhcHBlclwiPjxhIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGlua1wiIGhyZWY9XCJodHRwczovL21lZGlhLm5ldGZsaXguY29tL1wiPjxzcGFuIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGluay1jb250ZW50XCI+TWVkaWEgQ2VudHJlPC9zcGFuPjwvYT48L2xpPjxsaSBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmstd3JhcHBlclwiPjxhIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGlua1wiIGhyZWY9XCJodHRwOi8vaXIubmV0ZmxpeC5jb20vXCI+PHNwYW4gY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rLWNvbnRlbnRcIj5JbnZlc3RvciBSZWxhdGlvbnM8L3NwYW4+PC9hPjwvbGk+PGxpIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGluay13cmFwcGVyXCI+PGEgY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rXCIgaHJlZj1cImh0dHBzOi8vam9icy5uZXRmbGl4LmNvbS9cIj48c3BhbiBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmstY29udGVudFwiPkpvYnM8L3NwYW4+PC9hPjwvbGk+PGxpIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGluay13cmFwcGVyXCI+PGEgY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rXCIgaHJlZj1cImh0dHBzOi8vaGVscC5uZXRmbGl4LmNvbS9sZWdhbC90ZXJtc29mdXNlXCI+PHNwYW4gY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rLWNvbnRlbnRcIj5UZXJtcyBvZiBVc2U8L3NwYW4+PC9hPjwvbGk+PGxpIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGluay13cmFwcGVyXCI+PGEgY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rXCIgaHJlZj1cImh0dHBzOi8vaGVscC5uZXRmbGl4LmNvbS9sZWdhbC9wcml2YWN5XCI+PHNwYW4gY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rLWNvbnRlbnRcIj5Qcml2YWN5PC9zcGFuPjwvYT48L2xpPjxsaSBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmstd3JhcHBlclwiPjxhIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGlua1wiIGhyZWY9XCJodHRwczovL2hlbHAubmV0ZmxpeC5jb20vbGVnYWwvbm90aWNlc1wiPjxzcGFuIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGluay1jb250ZW50XCI+TGVnYWwgTm90aWNlczwvc3Bhbj48L2E+PC9saT48bGkgY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rLXdyYXBwZXJcIj48YSBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmtcIiBocmVmPVwiL0Nvb2tpZXNcIj48c3BhbiBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmstY29udGVudFwiPkNvb2tpZSBQcmVmZXJlbmNlczwvc3Bhbj48L2E+PC9saT48bGkgY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rLXdyYXBwZXJcIj48YSBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmtcIiBocmVmPVwiaHR0cHM6Ly9oZWxwLm5ldGZsaXguY29tL3N1cHBvcnQvMjEwMVwiPjxzcGFuIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGluay1jb250ZW50XCI+Q29ycG9yYXRlIEluZm9ybWF0aW9uPC9zcGFuPjwvYT48L2xpPjxsaSBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLWxpbmstd3JhcHBlclwiPjxhIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItbGlua1wiIGhyZWY9XCJodHRwczovL2hlbHAubmV0ZmxpeC5jb20vY29udGFjdHVzXCI+PHNwYW4gY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1saW5rLWNvbnRlbnRcIj5Db250YWN0IFVzPC9zcGFuPjwvYT48L2xpPjwvdWw+PGRpdiBjbGFzc05hbWU9XCJtZW1iZXItZm9vdGVyLXNlcnZpY2VcIj48YnV0dG9uIGNsYXNzTmFtZT1cInNlcnZpY2UtY29kZVwiPlNlcnZpY2UgQ29kZTwvYnV0dG9uPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWZvb3Rlci1jb3B5cmlnaHRcIj48c3Bhbj7CqSAxOTk3LTIwMTkgQUJDLCBJbmMuPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cIm1lbWJlci1mb290ZXItY29weXJpZ2h0LWluc3RhbmNlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5tZW1iZXItZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA0JTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubWVtYmVyLWZvb3RlciAuc29jaWFsLWxpbmtzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubWVtYmVyLWZvb3RlciAuc29jaWFsLWxpbmtzIC5zb2NpYWwtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5tZW1iZXItZm9vdGVyIC5zb2NpYWwtbGlua3MgLnNvY2lhbC1saW5rIC5zdmctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICM4MDgwODA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubWVtYmVyLWZvb3RlciAubWVtYmVyLWZvb3Rlci1oZWxwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5tZW1iZXItZm9vdGVyIC5tZW1iZXItZm9vdGVyLWxpbmtzIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxNHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubWVtYmVyLWZvb3RlciAubWVtYmVyLWZvb3Rlci1saW5rLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleDogMCAwIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtZmxleDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4OiAwIDAgNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLm1lbWJlci1mb290ZXIgLm1lbWJlci1mb290ZXItbGluay13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm1lbWJlci1mb290ZXIgLm1lbWJlci1mb290ZXItbGluayB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm1lbWJlci1mb290ZXIgLm1lbWJlci1mb290ZXItbGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm1lbWJlci1mb290ZXIgLm1lbWJlci1mb290ZXItbGluay11cGRhdGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5tZW1iZXItZm9vdGVyIC5tZW1iZXItZm9vdGVyLWNvcHlyaWdodCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5tZW1iZXItZm9vdGVyIC5tZW1iZXItZm9vdGVyLWNvcHlyaWdodC1pbnN0YW5jZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubWVtYmVyLWZvb3RlciAuc2VydmljZS1jb2RlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5tZW1iZXItZm9vdGVyIC5jb3B5LXRleHQtYmxvY2sgKyAuY29weS10ZXh0LWJsb2NrIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLnNlcnZpY2UtY29kZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzgwODA4MDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5zZXJ2aWNlLWNvZGU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLnNvcnRHYWxsZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLnNvcnRHYWxsZXJ5IC5uZkRyb3BEb3duLnRoZW1lLWxha2lyYSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLnNvcnRHYWxsZXJ5IHVsLm1hdHVyaXR5U2VsZWN0b3JzIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5zb3J0R2FsbGVyeSB1bC5tYXR1cml0eVNlbGVjdG9ycyBsaSBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5zb3J0R2FsbGVyeSB1bC5tYXR1cml0eVNlbGVjdG9ycyBsaSBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuc29ydEdhbGxlcnkgdWwubWF0dXJpdHlTZWxlY3RvcnMgbGkgaW5wdXQgKyBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/components/Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/MovieOnTopCard.js":
/*!**************************************!*\
  !*** ./components/MovieOnTopCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const MovieOnTopCard = props => {
  const ImagePath = "https://image.tmdb.org/t/p/original/" + props.posterImg;
  return __jsx("div", {
    className: "jsx-266223550" + " " + "masterImage"
  }, __jsx("img", {
    src: ImagePath,
    alt: "Main Poster",
    className: "jsx-266223550"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "266223550"
  }, ".masterImage.jsx-266223550{text-align:center;margin:0 auto;overflow:hidden;height :600px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL01vdmllT25Ub3BDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUt3QixBQUd1QyxrQkFDSixjQUNFLGdCQUNGLGNBQ0gsV0FDZiIsImZpbGUiOiIvVXNlcnMvYXNoaXNocmFpbmEvRGVza3RvcC9naXRodWItcHJvamVjdHMvbmV4dGpzLXByb2plY3QvY29tcG9uZW50cy9Nb3ZpZU9uVG9wQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1vdmllT25Ub3BDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgSW1hZ2VQYXRoID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIiArIHByb3BzLnBvc3RlckltZztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc3RlckltYWdlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17SW1hZ2VQYXRofSBhbHQ9XCJNYWluIFBvc3RlclwiLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAubWFzdGVySW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiA2MDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tYXN0ZXJJbWFnZSBpbWcge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllT25Ub3BDYXJkIl19 */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/components/MovieOnTopCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieOnTopCard);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  title = 'Movie Info'
}) => __jsx("div", {
  className: "jsx-2280129429"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-2280129429"
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-2280129429"
})), __jsx("header", {
  className: "jsx-2280129429"
}, __jsx(_nav__WEBPACK_IMPORTED_MODULE_4__["default"], null)), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2280129429"
}, ".jsx-2280129429{background:#141414;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQk8sQUFFOEIsbUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi9uYXYnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnTW92aWUgSW5mbycgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8aGVhZGVyPlxuICAgICAgICA8TmF2IC8+XG4gICAgPC9oZWFkZXI+XG5cbiAgICB7Y2hpbGRyZW59XG5cbiAgICA8Rm9vdGVyLz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/components/layout.js */")));

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const links = [{
  href: '/series',
  label: 'Series'
}, {
  href: '/films',
  label: 'Films'
}, {
  href: '/recent',
  label: 'Recently Added'
}, {
  href: '/list',
  label: 'My List'
}, {
  href: '/streaming',
  label: 'Streaming'
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const handler = () => {
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
    pathname: '/home',
    query: {
      name: 'test'
    }
  });
};

const handleRouteChange = url => {
  alert('App is changing to: ' + url);
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeError', (err, url) => {
  if (err.cancelled) {
    console.log(`Route to ${url} was cancelled!`);
  }
});
next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeStart', handleRouteChange);
next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.off('routeChangeStart', handleRouteChange);

const Nav = () => __jsx("div", null, __jsx("nav", {
  className: "jsx-279221868"
}, __jsx("div", {
  className: "jsx-279221868" + " " + "navHolder"
}, __jsx("ul", {
  className: "jsx-279221868"
}, __jsx("li", {
  className: "jsx-279221868"
}, __jsx("img", {
  src: "/logomi.png",
  alt: "logo image",
  className: "jsx-279221868"
})), __jsx("li", {
  className: "jsx-279221868" + " " + "whitespace"
}, "\xA0"), __jsx("li", {
  className: "jsx-279221868"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  replace: true,
  scroll: false,
  passHref: true,
  prefetch: false
}, __jsx("a", {
  className: "jsx-279221868"
}, "Movies"))), links.map(({
  key,
  href,
  label
}) => __jsx("li", {
  key: key,
  className: "jsx-279221868"
}, __jsx("a", {
  href: href,
  className: "jsx-279221868"
}, label))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "279221868"
}, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}nav.jsx-279221868{text-align:center;margin :0 auto;}.navHolder.jsx-279221868{background:white;padding:10px 0;border:1px solid #808080;}ul.jsx-279221868{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}nav.jsx-279221868>ul.jsx-279221868{padding:4px 16px;}li.jsx-279221868{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-279221868{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}img.jsx-279221868{max-height :100px;}.whitespace.jsx-279221868{width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGdCLEFBR2tCLEFBS1MsQUFJRCxBQUtKLEFBR0ksQUFHSixBQU1DLEFBS0ksQUFHUixTQWhDYSxDQWlDekIsSUFSdUIsR0FqQk4sQUFRakIsQ0FaaUIsQUEwQmpCLGNBckIyQixDQUozQix3QkFLQSxPQWdCaUIsVUFiakIsQUFNa0IsS0FRbEIsV0FQcUIsS0FuQnJCLHdGQW9CeUIsbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInIFxuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnL3NlcmllcycsIGxhYmVsOiAnU2VyaWVzJyB9LFxuICB7IGhyZWY6ICcvZmlsbXMnLCBsYWJlbDogJ0ZpbG1zJyB9LFxuICB7IGhyZWY6ICcvcmVjZW50JywgbGFiZWw6ICdSZWNlbnRseSBBZGRlZCcgfSxcbiAgeyBocmVmOiAnL2xpc3QnLCBsYWJlbDogJ015IExpc3QnIH0sXG4gIHsgaHJlZjogJy9zdHJlYW1pbmcnLCBsYWJlbDogJ1N0cmVhbWluZycgfSxcblxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YFxuICByZXR1cm4gbGlua1xufSlcblxuY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgUm91dGVyLnB1c2goe1xuICAgIHBhdGhuYW1lOiAnL2hvbWUnLFxuICAgIHF1ZXJ5OiB7IG5hbWU6ICd0ZXN0JyB9LFxuICB9KVxufSBcblxuY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xuICBhbGVydCgnQXBwIGlzIGNoYW5naW5nIHRvOiAnICsgIHVybClcbn1cblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIChlcnIsIHVybCkgPT4ge1xuICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgIGNvbnNvbGUubG9nKGBSb3V0ZSB0byAke3VybH0gd2FzIGNhbmNlbGxlZCFgKVxuICB9XG59KVxuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5Sb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gIDxkaXY+XG4gIDxuYXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZIb2xkZXJcIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ29taS5wbmdcIiBhbHQ9XCJsb2dvIGltYWdlXCIvPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7LyogPGxpPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZXJ9PmhlcmU8L3NwYW4+XG4gICAgICAgIDwvbGk+ICovfVxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwid2hpdGVzcGFjZVwiPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgcmVwbGFjZSBzY3JvbGw9e2ZhbHNlfSBwYXNzSHJlZiBwcmVmZXRjaD17ZmFsc2V9PlxuICAgICAgICAgICAgPGE+TW92aWVzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0+e2xhYmVsfTwvYT4gXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIFxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luIDogMCBhdXRvO1xuICAgICAgfVxuICAgICAgLm5hdkhvbGRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICBuYXYgPiB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0IDogMTAwcHg7XG4gICAgICB9XG4gICAgICAud2hpdGVzcGFjZSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICBcbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXX0= */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/components/nav.js */")));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/series.js":
/*!*************************!*\
  !*** ./pages/series.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MovieOnTopCard */ "./components/MovieOnTopCard.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const Home = ({
  movieDataResults,
  tvDataResults,
  MovieOnTop
}) => {
  return __jsx("div", {
    className: "jsx-1702395662"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", {
    className: "jsx-1702395662"
  }, "Movie List"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-1702395662"
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx("div", {
    className: "jsx-1702395662" + " " + "MovieInFocus"
  }, __jsx(_components_MovieOnTopCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    posterImg: MovieOnTop['poster_path']
  }), __jsx("div", {
    className: "jsx-1702395662" + " " + "trailerWrapper"
  }, __jsx("iframe", {
    width: "100%",
    height: "543",
    src: "https://www.youtube.com/embed/FHxhr6KAaUw",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true,
    className: "jsx-1702395662"
  })), __jsx("div", {
    className: "jsx-1702395662" + " " + "MovieInFocusDetailsWrapper"
  }, __jsx("div", {
    className: "jsx-1702395662" + " " + "MovieOnTopTitleWrapper"
  }, MovieOnTop['original_title']), __jsx("div", {
    className: "jsx-1702395662"
  }, MovieOnTop['overview']), __jsx("div", {
    className: "jsx-1702395662"
  }, __jsx("button", {
    className: "jsx-1702395662"
  }, "Play"), __jsx("button", {
    className: "jsx-1702395662"
  }, "MyList"), __jsx("button", {
    className: "jsx-1702395662"
  }, "More Info")))), __jsx("div", {
    className: "jsx-1702395662" + " " + 'main'
  }, __jsx("h2", {
    className: "jsx-1702395662"
  }, "Popular Movies"), __jsx("div", {
    className: "jsx-1702395662" + " " + 'row'
  }, movieDataResults.map((value, i) => {
    return __jsx("div", {
      className: "jsx-1702395662" + " " + "movieWrapper"
    }, __jsx("div", {
      className: "jsx-1702395662" + " " + "displayUnit"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      className: "jsx-1702395662"
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-1702395662"
    })))));
  }))), __jsx("br", {
    className: "jsx-1702395662"
  }), __jsx("br", {
    className: "jsx-1702395662"
  }), __jsx("div", {
    className: "jsx-1702395662" + " " + 'main'
  }, __jsx("h2", {
    className: "jsx-1702395662"
  }, "Popular Shows"), __jsx("div", {
    className: "jsx-1702395662" + " " + 'row'
  }, tvDataResults.map((value, i) => {
    return __jsx("div", {
      className: "jsx-1702395662" + " " + "movieWrapper"
    }, __jsx("div", {
      className: "jsx-1702395662" + " " + "displayUnit"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      className: "jsx-1702395662"
    }, __jsx("img", {
      src: "https://image.tmdb.org/t/p/w300/" + value.poster_path,
      alt: "Movie Image",
      className: "jsx-1702395662"
    })))));
  }))), __jsx("div", {
    className: "jsx-1702395662" + " " + "pagination"
  }, __jsx("span", {
    className: "jsx-1702395662"
  }, "1"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1702395662"
  }, ".main.jsx-1702395662{marign :10px;text-align:center;color:white;}.movieWrapper.jsx-1702395662{display:inline-block;vertical-align:top;border:1px solid grey;min-height:300px;overfllow:scroll;text-align:center;background:black;min-height:473px;width:300px;position:relative;}.row.jsx-1702395662{width:100%;overflow:scroll;position:relative;}.name.jsx-1702395662{color:white;-webkit-text-decoration :none;text-decoration :none;}.pagination.jsx-1702395662{color:white;width:90%;text-align:center;}.MovieInFocus.jsx-1702395662{min-height :500px;text-align:center;margin:0 auto;max-height:600px;}.MovieInFocusDetailsWrapper.jsx-1702395662{position:relative;top:-1900px;color:white;width:600px;text-align:left;left:60px;line-height:25px;}.MovieOnTopTitleWrapper.jsx-1702395662{font-size:36px;font-weight:bold;margin:10px 0px;}.MovieInFocusDetailsWrapper.jsx-1702395662 button.jsx-1702395662{width :100px;padding:10px;margin:10px;border-radius :5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZXJpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZnQixBQUdlLEFBS1MsQUFlRixBQUtQLEFBSUEsQUFLWSxBQU1FLEFBU0gsQUFNRixXQWxDRyxDQUtGLEFBSVosQ0E3QmUsQUF1REosRUFOSSxHQWZELEFBTUosR0FuQ0QsQ0F5QkQsSUEwQkUsQ0FuQ00sR0FvQk4sQ0F4Q0YsQ0FpRE0sSUFmSixFQXNCTyxFQW5ETCxBQXlCckIsRUFXbUIsQ0F4Q3JCLEVBb0JLLEdBNkJBLEVBZm1CLElBT0MsR0FlcEIsS0FuRGEsRUFtQmhCLEdBV0csR0FPYyxTQXBDRCxDQXFDUSxnQkFwQ1AsQ0FxQ2QsaUJBcENhLGlCQUNNLGlCQUNOLFlBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hc2hpc2hyYWluYS9EZXNrdG9wL2dpdGh1Yi1wcm9qZWN0cy9uZXh0anMtcHJvamVjdC9wYWdlcy9zZXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTW92aWVPblRvcENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZU9uVG9wQ2FyZCdcblxuXG5jb25zdCBIb21lID0gKHttb3ZpZURhdGFSZXN1bHRzLCB0dkRhdGFSZXN1bHRzLCBNb3ZpZU9uVG9wIH0pID0+IHtcbnJldHVybiAoXG4gIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1vdmllIExpc3Q8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIGtleT1cInZpZXdwb3J0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblx0PExheW91dD5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIk1vdmllSW5Gb2N1c1wiPiBcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllT25Ub3BDYXJkIHBvc3RlckltZz17TW92aWVPblRvcFsncG9zdGVyX3BhdGgnXX0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsZXJXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjU0M1wiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0ZIeGhyNktBYVV3XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW92aWVJbkZvY3VzRGV0YWlsc1dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNb3ZpZU9uVG9wVGl0bGVXcmFwcGVyXCI+ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNb3ZpZU9uVG9wWydvcmlnaW5hbF90aXRsZSddfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtNb3ZpZU9uVG9wWydvdmVydmlldyddfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gPlBsYXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TXlMaXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPk1vcmUgSW5mbzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICA8aDI+UG9wdWxhciBNb3ZpZXM8L2gyPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0XHR7bW92aWVEYXRhUmVzdWx0cy5tYXAoKHZhbHVlICwgaSk9Pntcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vdmllV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5VW5pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWUvW3BpZF1cIiBhcz17e3BhdGhuYW1lOiBcIi9tb3ZpZS9cIiArIHZhbHVlLmlkICwgcXVlcnkgOiB7bmFtZSA6ICdmb3JkZW1vJ319fSBwcmVmZXRjaD17ZmFsc2V9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC9cIiArIHZhbHVlLnBvc3Rlcl9wYXRofSBhbHQ9XCJNb3ZpZSBJbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH0pfVx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICAgIDxoMj5Qb3B1bGFyIFNob3dzPC9oMj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXHRcdFx0XHRcdFx0e3R2RGF0YVJlc3VsdHMubWFwKCh2YWx1ZSAsIGkpPT57XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb3ZpZVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheVVuaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21vdmllL1twaWRdXCIgYXM9e3twYXRobmFtZTogXCIvbW92aWUvXCIgKyB2YWx1ZS5pZCAsIHF1ZXJ5IDoge25hbWUgOiAnZm9yZGVtbyd9fX0gcHJlZmV0Y2g9e2ZhbHNlfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAvXCIgKyB2YWx1ZS5wb3N0ZXJfcGF0aH0gYWx0PVwiTW92aWUgSW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KX1cdFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cbiAgICBcdDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgIFx0XHQ8c3Bhbj4xPC9zcGFuPlxuICAgIFx0PC9kaXY+XG5cdDwvTGF5b3V0PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuXHQubWFpbiB7XG5cdFx0bWFyaWduIDoxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiAgY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cdH1cblx0Lm1vdmllV3JhcHBlciB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcblx0XHRtaW4taGVpZ2h0OiAzMDBweDtcblx0XHRvdmVyZmxsb3c6IHNjcm9sbDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ3M3B4O1xuICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIC5kaXNwbGF5VW5pdCB7XG4gICAgICAgIFxuICAgIH1cbiAgICAgIC5yb3d7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gIFx0Lm5hbWUge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHR0ZXh0LWRlY29yYXRpb24gOiBub25lO1xuICBcdH1cbiAgXHQucGFnaW5hdGlvbntcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0d2lkdGg6IDkwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFx0fVxuICBcdC5Nb3ZpZUluRm9jdXMge1xuICAgICAgICBtaW4taGVpZ2h0IDogNTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgfVxuICAgICAgLk1vdmllSW5Gb2N1c0RldGFpbHNXcmFwcGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtMTkwMHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBsZWZ0OiA2MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgICAgLk1vdmllT25Ub3BUaXRsZVdyYXBwZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgfVxuXG4gICAgICAuTW92aWVJbkZvY3VzRGV0YWlsc1dyYXBwZXIgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aCA6IDEwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxzdHlsZSBnbG9iYWw+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxNDE0MTQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYWlsZXJXcmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4gICAgKVxufVxuXG4vLyBIb21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cmVxfSkgPT4ge1xuLy8gXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJylcbi8vIFx0Y29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbi8vICAgICBjb25zb2xlLmxvZyhcImFzaGlzaDEyM1wiICwgdHlwZW9mKGpzb24pKSAvL29iamVjdFxuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pICBcbi8vICAgICAvLyB7IHBhZ2U6IDEsXG4vLyAgICAgLy8gICAgIHRvdGFsX3Jlc3VsdHM6IDEwMDAwLFxuLy8gICAgIC8vICAgICB0b3RhbF9wYWdlczogNTAwXG4vLyAgICAgLy8gfVxuLy8gXHRyZXR1cm4ge21vdmllRGF0YSA6IGpzb24ucmVzdWx0c31cbi8vIH1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3JlcX0pID0+IHtcblxuICAgIGNvbnN0IFttb3ZpZURhdGEsIHR2RGF0YSxNb3ZpZU9uVG9wXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PWMxOGE4YzYzYmVlOWQ2NjY2NWE0ODZhNjI0ZDQ4MTc3Jmxhbmd1YWdlPWVuLVVTJnBhZ2U9MWApLnRoZW4ociA9PiByLmpzb24oKSksXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL3R2P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVMmc29ydF9ieT1wb3B1bGFyaXR5LmRlc2MmcGFnZT0xJnRpbWV6b25lPUFtZXJpY2ElMkZOZXdfWW9yayZpbmNsdWRlX251bGxfZmlyc3RfYWlyX2RhdGVzPWZhbHNlYCkudGhlbihyID0+IHIuanNvbigpKSxcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvNTA4OTY1P2FwaV9rZXk9YzE4YThjNjNiZWU5ZDY2NjY1YTQ4NmE2MjRkNDgxNzcmbGFuZ3VhZ2U9ZW4tVVNgKS50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICBdKTtcbiAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG1vdmllRGF0YVJlc3VsdHMgOiBtb3ZpZURhdGEucmVzdWx0cyxcbiAgICAgICAgdHZEYXRhUmVzdWx0cyA6IHR2RGF0YS5yZXN1bHRzLFxuICAgICAgICBNb3ZpZU9uVG9wIDogTW92aWVPblRvcFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/ashishraina/Desktop/github-projects/nextjs-project/pages/series.js */"), __jsx("style", {
    global: true
  }, `
        * {
            box-sizing : border-box;
        }
        body {
            background: #141414;
        }
        .trailerWrapper {
            display:none;
        }
    `));
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


Home.getInitialProps = async ({
  req
}) => {
  const [movieData, tvData, MovieOnTop] = await _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(`https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1`).then(r => r.json()), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(`https://api.themoviedb.org/3/discover/tv?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`).then(r => r.json()), isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(`https://api.themoviedb.org/3/movie/508965?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US`).then(r => r.json())]);
  return {
    movieDataResults: movieData.results,
    tvDataResults: tvData.results,
    MovieOnTop: MovieOnTop
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/series.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashishraina/Desktop/github-projects/nextjs-project/pages/series.js */"./pages/series.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=series.js.map