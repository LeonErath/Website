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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/leon/Documents/Programming/Website/pages/index.js";



var About = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__About",
  componentId: "ekrvgx-0"
})(["width:60%;margin-left:80px;margin-right:80px;margin-top:100px;margin-bottom:80px;font-family:\"Open Sans\";"]);
var AboutTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__AboutTitle",
  componentId: "ekrvgx-1"
})(["font-size:28px;margin-left:8px;margin-right:8px;margin-bottom:20px;"]);
var AboutText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__AboutText",
  componentId: "ekrvgx-2"
})(["margin:8px;line-height:2;font-size:16px;"]);
var Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Div",
  componentId: "ekrvgx-3"
})(["margin-bottom:30px;margin-top:30px;font-family:\"Open Sans\";"]);
var Project = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Project",
  componentId: "ekrvgx-4"
})(["width:100%;max-height:1200px;display:flex;align-items:center;flex-direction:row;align-content:stretch;flex-basis:40%;flex-wrap:wrap;"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__List",
  componentId: "ekrvgx-5"
})(["width:100%;display:flex;flex-direction:column;"]);
var Project2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Project2",
  componentId: "ekrvgx-6"
})(["max-height:1200px;display:flex;align-items:center;flex-direction:row;align-content:stretch;flex-basis:40%;flex-wrap:wrap-reverse;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Description",
  componentId: "ekrvgx-7"
})(["margin:10px;font-size:16px;letter-spacing:2px;line-height:2;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Title",
  componentId: "ekrvgx-8"
})(["margin:10px;font-weight:bold;font-size:30px;letter-spacing:10px;"]);
var LinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(next_link__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "pages__LinkStyled",
  componentId: "ekrvgx-9"
})(["margin:10px;letter-spacing:2px;font-size:14px;color:#9f9f9f;text-decoration:none;font-weight:400;"]);
var Element = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Element",
  componentId: "ekrvgx-10"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;min-width:300px;flex-basis:50%;flex-grow:1;"]);

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, " Hey, I'm Leon."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "I am 20 years old, living in Mannheim Germany. I love developing Apps and want to take you with me, on my way to become a Developer.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "JournalismFuture Ad",
    src: "/static/images/journalismfuture/journalismfuture.png",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "JF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Read the news of tomorrow!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    href: "/journalismfuture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "=> View Project"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "PINEAPPLE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "The ultimate school organizer!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), "An app from students for students."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    href: "/pineapple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "=> View Project")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Pineapple Ad",
    src: "/static/images/pineapple/bmsapp4.png",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Eve Ad",
    src: "/static/images/eve/eve.png",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "EVE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Bot's going on?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), "A maschine learning chatbot", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), "Created with Go and Python"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    href: "/eve",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "=> View Project"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Text2Music"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Create music from text", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    href: "/t2m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "=> View Project")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "T2M Ad",
    src: "/static/images/t2m.png",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Cloudy Ad",
    src: "/static/images/cloudy.png",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "CLOUDY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "An alternative way to look", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }), " at weather forecast."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    href: "/cloudy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "=> View Project"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Project, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "WATCHLIST"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "See upcoming Movies and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), "save them into your Watchlist", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), " to watch them later.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkStyled, {
    href: "/watchlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "=> View Project")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Watchlist Ad",
    src: "/static/images/watchlist.png",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map