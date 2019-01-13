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

/***/ "./components/Header/ProjectHeader.js":
/*!********************************************!*\
  !*** ./components/Header/ProjectHeader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Section */ "./components/styles/Section/index.js");
/* harmony import */ var _styles_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.js */ "./components/styles/styles.js");
var _jsxFileName = "/home/leon/Documents/Programming/Website/components/Header/ProjectHeader.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var InfoTilte = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ProjectHeader__InfoTilte",
  componentId: "cy8zsr-0"
})(["letter-spacing:3px;font-weight:bold;margin-bottom:8px;font-size:16px;"]);
var InfoText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ProjectHeader__InfoText",
  componentId: "cy8zsr-1"
})(["letter-spacing:0.9px;font-size:16px;font-weight:100;line-height:2;"]);
var ProjectInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ProjectHeader__ProjectInfo",
  componentId: "cy8zsr-2"
})(["margin:20px;max-width:400px;flex-grow:1;text-align:center;"]);

var ProfileHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileHeader, _Component);

  function ProfileHeader() {
    _classCallCheck(this, ProfileHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProfileHeader).apply(this, arguments));
  }

  _createClass(ProfileHeader, [{
    key: "render",
    value: function render() {
      var Information = this.props.information.map(function (info) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectInfo, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoTilte, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, " ", info.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoText, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, info.text));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_styles_js__WEBPACK_IMPORTED_MODULE_3__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
        center: true,
        header: true,
        color: "#f2f2f0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, Information));
    }
  }]);

  return ProfileHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ }),

/***/ "./components/PineappleGallery.js":
/*!****************************************!*\
  !*** ./components/PineappleGallery.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/leon/Documents/Programming/Website/components/PineappleGallery.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var FeatureTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PineappleGallery__FeatureTitle",
  componentId: "sc-1xvkkjv-0"
})(["letter-spacing:3px;font-weight:bold;margin-bottom:8px;font-size:16px;width:400px;"]);
var FeatureText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PineappleGallery__FeatureText",
  componentId: "sc-1xvkkjv-1"
})(["letter-spacing:0.9px;width:400px;font-size:16px;font-weight:100;line-height:2;"]);
var Feature = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PineappleGallery__Feature",
  componentId: "sc-1xvkkjv-2"
})(["justify-content:center;align-items:center;flex-direction:column;display:flex;width:600px;margin:10px;"]);
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PineappleGallery__Main",
  componentId: "sc-1xvkkjv-3"
})(["font-family:Calibri,sans-serif;display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;width:80%;padding-left:10%;padding-right:10%;"]);
var Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PineappleGallery__Div",
  componentId: "sc-1xvkkjv-4"
})(["justify-content:center;align-items:center;flex-grow:1;display:flex;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "PineappleGallery__Image",
  componentId: "sc-1xvkkjv-5"
})(["height:600px;object-fit:cover;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "PineappleGallery__Button",
  componentId: "sc-1xvkkjv-6"
})(["background-color:#162238;border:none;color:white;height:48px;width:48px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;border-radius:50%;"]);
var Gallery = [{
  title: "GRADES",
  text: " In the Grade Planner, the student can enter his own notes. So he has a direct overview of his grade point and a grade pre-announcement for his next testimonial.",
  image: "/static/images/pineapple/grades_pineapple.png"
}, {
  title: "QUIZ",
  text: "The app is not only intended to inform, but also to assist students in learning by incorporating a quiz function that queries quiz questions created by the teachers of each class based on the current school material or prepare for the next exam. <br /> <br /> In the quiz, the students can prove their knowledge. The Quizzes are created by the teachers and are meant to be the student help to learn the lesson easier.",
  image: "/static/images/pineapple/quiz_pineapple.png"
}, {
  title: "EXAMS",
  text: "The exam plan is automatically loaded into the app and contains all necessary information for planning the exam phase.",
  image: "/static/images/pineapple/exams_pineapple.png"
}, {
  title: "HOMEWORK",
  text: "With the task scheduler, the student can easily and easily organize and manage their homework.",
  image: "/static/images/pineapple/homework_pineapple.png"
}, {
  title: "TIMETABLE",
  text: "The timetable automatically integrates the customized substitution plan for the student.",
  image: "/static/images/pineapple/course_pineapple.png"
}];

var PineappleGallery =
/*#__PURE__*/
function (_Component) {
  _inherits(PineappleGallery, _Component);

  function PineappleGallery(props) {
    var _this;

    _classCallCheck(this, PineappleGallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PineappleGallery).call(this, props));
    _this.state = {
      currentFeature: 0
    };
    _this.nextFeature = _this.nextFeature.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(PineappleGallery, [{
    key: "nextFeature",
    value: function nextFeature(e) {
      console.log("SOME");

      if (this.state.currentFeature + 1 > Gallery.length - 1) {
        this.setState({
          currentFeature: 0
        });
      } else {
        this.setState({
          currentFeature: this.state.currentFeature + 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Feature, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeatureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, Gallery[this.state.currentFeature].title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeatureText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        dangerouslySetInnerHTML: {
          __html: Gallery[this.state.currentFeature].text
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
        src: Gallery[this.state.currentFeature].image,
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        onClick: this.nextFeature,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, ">"));
    }
  }]);

  return PineappleGallery;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PineappleGallery);

/***/ }),

/***/ "./components/styles/Card/Header.js":
/*!******************************************!*\
  !*** ./components/styles/Card/Header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Header",
  componentId: "sc-14tddt5-0"
})(["padding:16px;display:inline-block;width:100%;text-align:center;font-weight:bold;box-sizing:border-box;letter-spacing:2px;font-size:20px;"]);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/styles/Card/Icon.js":
/*!****************************************!*\
  !*** ./components/styles/Card/Icon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Icon",
  componentId: "sc-1vizrr3-0"
})(["width:100px;height:100px;object-fit:contain;"]);
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/styles/Card/Image.js":
/*!*****************************************!*\
  !*** ./components/styles/Card/Image.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Image",
  componentId: "sc-8n9orz-0"
})(["height:240px;background-image:", ";border-radius:8px 8px 0px 0px;display:flex;justify-content:center;background-size:350px 240px;align-items:center;"], function (props) {
  return props.url ? props.url : "";
});
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/styles/Card/Text.js":
/*!****************************************!*\
  !*** ./components/styles/Card/Text.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Text",
  componentId: "sc-1kvbldj-0"
})(["padding:0px 16px 16px 16px;letter-spacing:1.2px;line-height:2.2;font-size:14px;font-weight:100;color:#777777;"]);
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/styles/Card/index.js":
/*!*****************************************!*\
  !*** ./components/styles/Card/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/styles/Card/Header.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./components/styles/Card/Icon.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ "./components/styles/Card/Image.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./components/styles/Card/Text.js");





var Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Card",
  componentId: "sdb92q-0"
})(["width:350px;margin:20px;height:550px;background:#ffffff;box-shadow:0 0 30px rgba(0,0,0,0.3);font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;display:flex;border-radius:8px;flex-direction:column;"]);
Card.Header = _Header__WEBPACK_IMPORTED_MODULE_1__["default"];
Card.Text = _Text__WEBPACK_IMPORTED_MODULE_4__["default"];
Card.Icon = _Icon__WEBPACK_IMPORTED_MODULE_2__["default"];
Card.Image = _Image__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/styles/ImageButton.js":
/*!******************************************!*\
  !*** ./components/styles/ImageButton.js ***!
  \******************************************/
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
var _jsxFileName = "/home/leon/Documents/Programming/Website/components/styles/ImageButton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SVG = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "ImageButton__SVG",
  componentId: "owqkm7-0"
})(["margin-left:8px;width:24px;height:24px;object-fit:contain;fill:", ";"], function (props) {
  return props.textcolor ? props.textcolor : "white";
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "ImageButton__Button",
  componentId: "owqkm7-1"
})(["cursor:pointer;font-family:Calibri,sans-serif;letter-spacing:1px;color:", ";background:", ";font-size:16px;margin:0.5em;padding:0.25em 1em;border:2px solid ", ";border-radius:20px;display:inline-flex;box-shadow:2px 2px 2px 1px rgba(0,0,0,0.2);align-items:center;transition:all 0.3s ease;&:hover{transform:scale(1.3);}"], function (props) {
  return props.textcolor ? props.textcolor : "white";
}, function (props) {
  return props.color ? props.color : "black";
}, function (props) {
  return props.color ? props.color : "black";
});

var ImageButton =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageButton, _Component);

  function ImageButton() {
    _classCallCheck(this, ImageButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageButton).apply(this, arguments));
  }

  _createClass(ImageButton, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        color: this.props.color,
        textcolor: this.props.textcolor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        style: {
          color: "inherit",
          textDecoration: "inherit",
          display: "inherit",
          alignItems: "inherit"
        },
        href: this.props.link,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.props.text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SVG, {
        viewBox: "0 0 877.547 855.818",
        fill: this.props.color,
        textcolor: this.props.textcolor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        id: "github",
        class: "cls-1",
        d: "M438.773.3C196.351.3,0,196.758,0,439.07,0,632.971,125.709,797.4,300.011,855.356c21.939,4.132,29.983-9.434,29.983-21.1,0-10.421-.366-38.027-.548-74.591C207.393,786.14,181.652,700.8,181.652,700.8c-19.964-50.642-48.814-64.171-48.814-64.171-39.746-27.2,3.071-26.655,3.071-26.655,44.06,3.071,67.205,45.194,67.205,45.194,39.124,67.1,102.71,47.717,127.793,36.491,3.949-28.374,15.247-47.717,27.789-58.686C261.253,622,158.836,584.268,158.836,416.144c0-47.9,17-87.023,45.157-117.738-4.936-11.079-19.745-55.688,3.839-116.129,0,0,36.747-11.774,120.663,44.974,35.1-9.763,72.4-14.589,109.693-14.809,37.3.219,74.591,5.046,109.693,14.809C631.248,170.5,668,182.278,668,182.278c23.584,60.441,8.775,105.05,4.388,116.129,27.972,30.714,44.974,69.838,44.974,117.738,0,168.562-102.563,205.675-200.19,216.461,15.357,13.163,29.617,40.075,29.617,81.173,0,58.723-.548,105.891-.548,120.151,0,11.518,7.679,25.229,30.166,20.842,175.546-57.552,301.145-222.092,301.145-415.7C877.547,196.758,681.086.3,438.773.3",
        transform: "translate(0 -0.297)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })))));
    }
  }]);

  return ImageButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ImageButton);

/***/ }),

/***/ "./components/styles/Section/Content.js":
/*!**********************************************!*\
  !*** ./components/styles/Section/Content.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Content",
  componentId: "arndvz-0"
})(["width:50%;flex-grow:1;"]);
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/styles/Section/Header.js":
/*!*********************************************!*\
  !*** ./components/styles/Section/Header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Header",
  componentId: "umn5y5-0"
})(["text-align:", ";flex-basis:100%;flex-grow:1;font-size:calc(15px + 1vw);font-weight:200;line-height:2;margin:24px;"], function (props) {
  return props.right ? "right" : "left";
});
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/styles/Section/Text.js":
/*!*******************************************!*\
  !*** ./components/styles/Section/Text.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Text",
  componentId: "exiecq-0"
})(["flex-grow:1;font-size:16px;font-weight:100;line-height:2;margin:24px;"]);
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/styles/Section/Topic.js":
/*!********************************************!*\
  !*** ./components/styles/Section/Topic.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Topic = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Topic",
  componentId: "sc-1u1yc9j-0"
})(["padding-right:", ";padding-left:", ";font-size:12px;letter-spacing:3px;padding-top:8px;padding-bottom:8px;color:#ffffff;margin-left:20px;margin-top:40px;display:inline-block;background:", ";"], function (props) {
  return props.right ? "8px" : "30px";
}, function (props) {
  return props.right ? "30px" : "8px";
}, function (props) {
  return props.color ? props.color : "#000000";
});
/* harmony default export */ __webpack_exports__["default"] = (Topic);

/***/ }),

/***/ "./components/styles/Section/index.js":
/*!********************************************!*\
  !*** ./components/styles/Section/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/styles/Section/Header.js");
/* harmony import */ var _Topic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Topic */ "./components/styles/Section/Topic.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text */ "./components/styles/Section/Text.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./components/styles/Section/Content.js");





var Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Section",
  componentId: "sc-1f7wd9e-0"
})(["justify-content:", ";width:80%;padding-left:10%;padding-right:10%;margin-top:", ";display:flex;background:", ";flex-direction:", ";flex-wrap:wrap;@media (max-width:500px){width:94%;padding-left:3%;padding-right:3%;}"], function (props) {
  return props.center ? "center" : "left";
}, function (props) {
  return props.header ? "0px" : "20px";
}, function (props) {
  return props.color ? props.color : "#FFFFFF";
}, function (props) {
  return props.right ? "row-reverse" : "row";
});
Section.Content = _Content__WEBPACK_IMPORTED_MODULE_4__["default"];
Section.Header = _Header__WEBPACK_IMPORTED_MODULE_1__["default"];
Section.Topic = _Topic__WEBPACK_IMPORTED_MODULE_2__["default"];
Section.Text = _Text__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/styles/styles.js":
/*!*************************************!*\
  !*** ./components/styles/styles.js ***!
  \*************************************/
/*! exports provided: Emphasize, FeatureTitle, FeatureText, Feature, Fact, List, NavbarStyled, Div, Main, NavbarLink, FactList, SecurityList, ImageList, Image, LinkStyled, ImageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emphasize", function() { return Emphasize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureTitle", function() { return FeatureTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureText", function() { return FeatureText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fact", function() { return Fact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarStyled", function() { return NavbarStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLink", function() { return NavbarLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactList", function() { return FactList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityList", function() { return SecurityList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageList", function() { return ImageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkStyled", function() { return LinkStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageContainer", function() { return ImageContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var Emphasize = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.b.withConfig({
  displayName: "styles__Emphasize",
  componentId: "sc-1tf71qo-0"
})(["color:", ";"], function (props) {
  return props.color ? props.color : "#000000";
});
var FeatureTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__FeatureTitle",
  componentId: "sc-1tf71qo-1"
})(["letter-spacing:3px;font-weight:bold;margin-bottom:8px;font-size:16px;"]);
var FeatureText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__FeatureText",
  componentId: "sc-1tf71qo-2"
})(["letter-spacing:0.9px;font-size:16px;font-weight:100;line-height:2;"]);
var Feature = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Feature",
  componentId: "sc-1tf71qo-3"
})(["text-align:", ";margin:20px;width:250px;flex-grow:1;"], function (props) {
  return props.center ? "center" : "left";
});
var Fact = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Fact",
  componentId: "sc-1tf71qo-4"
})(["text-align:center;font-size:calc(13px + 1vw);font-family:Calibri,sans-serif;line-height:2;font-weight:100;margin:24px;"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__List",
  componentId: "sc-1tf71qo-5"
})(["justify-content:", ";width:80%;padding-left:10%;padding-right:10%;margin-top:20px;display:flex;flex-direction:", ";flex-wrap:wrap;"], function (props) {
  return props.center ? "center" : "left";
}, function (props) {
  return props.right ? "row-reverse" : "row";
});
var NavbarStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__NavbarStyled",
  componentId: "sc-1tf71qo-6"
})(["padding-top:10px;list-style-type:none;width:80%;padding-left:10%;padding-right:10%;"]);
var Div = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Div",
  componentId: "sc-1tf71qo-7"
})(["background:", ";height:57px;"], function (props) {
  return props.color ? props.color : "#000000";
});
var Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Main",
  componentId: "sc-1tf71qo-8"
})(["font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;"]);
var NavbarLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "styles__NavbarLink",
  componentId: "sc-1tf71qo-9"
})(["font-family:\"Courier New\",Courier,monospace;padding:10px;float:right;font-size:14px;letter-spacing:6px;:first-child{font-size:24px;letter-spacing:10px;float:left;}"]);
var FactList = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(List).withConfig({
  displayName: "styles__FactList",
  componentId: "sc-1tf71qo-10"
})(["justify-content:center;background:", ";"], function (props) {
  return props.color ? props.color : "#000000";
});
var SecurityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(List).withConfig({
  displayName: "styles__SecurityList",
  componentId: "sc-1tf71qo-11"
})(["height:450px;"]);
var ImageList = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(List).withConfig({
  displayName: "styles__ImageList",
  componentId: "sc-1tf71qo-12"
})(["padding-top:40px;padding-bottom:40px;background:", ";"], function (props) {
  return props.color ? props.color : "#000000";
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-1tf71qo-13"
})(["width:12.5%;height:30%;"]);
var LinkStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(next_link__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "styles__LinkStyled",
  componentId: "sc-1tf71qo-14"
})(["padding:10px;color:", ";text-decoration:none;"], function (props) {
  return props.textcolor ? props.textcolor : "#ffffff";
});
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ImageContainer",
  componentId: "sc-1tf71qo-15"
})(["flex-grow:1;width:44%;min-width:400px;display:flex;align-items:center;justify-content:center;"]);

/***/ }),

/***/ "./pages/pineapple.js":
/*!****************************!*\
  !*** ./pages/pineapple.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styles/styles.js */ "./components/styles/styles.js");
/* harmony import */ var _components_styles_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/Section */ "./components/styles/Section/index.js");
/* harmony import */ var _components_styles_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/Card */ "./components/styles/Card/index.js");
/* harmony import */ var _components_Header_ProjectHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/ProjectHeader.js */ "./components/Header/ProjectHeader.js");
/* harmony import */ var _components_PineappleGallery_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PineappleGallery.js */ "./components/PineappleGallery.js");
/* harmony import */ var _components_styles_ImageButton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/ImageButton.js */ "./components/styles/ImageButton.js");
var _jsxFileName = "/home/leon/Documents/Programming/Website/pages/pineapple.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var SECTION_COLOR = "#162238";
var EMPHASIZE_COLOR = "#162238";
var FACT_COLOR = "#f2f2f0";

var Pineapple =
/*#__PURE__*/
function (_Component) {
  _inherits(Pineapple, _Component);

  function Pineapple() {
    _classCallCheck(this, Pineapple);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pineapple).apply(this, arguments));
  }

  _createClass(Pineapple, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "relative"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "pineapple banner",
        style: {
          width: "100%",
          objectFit: "contain"
        },
        src: "static/images/pineapple/PineappleBanner.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_ImageButton_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "Get started",
        color: "#ffffff",
        textcolor: "#000",
        link: "https://github.com/LeonErath/Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_ProjectHeader_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        information: [{
          title: "Dream Team",
          text: "Gero Embser (iOS-App), Leon Erath (Android App), Florian Brandt (Server)"
        }, {
          title: "AWARDS",
          text: "Top 10 of 1600 Projects"
        }, {
          title: "PROJECT",
          text: "1 year."
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Topic, {
        color: SECTION_COLOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "PROBLEM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "We want to use the spirit of the times and use the features of the smartphone to help students organize their everyday school life."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "The computer science and especially the use of the smartphone is increasing more and more. Nowadays, it is hard to think away. The smartphone is now a must for many students, but many schools are still reluctant to actively integrate the smartphone into everyday school life.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), "Our project is about a school planner, which should", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Emphasize"], {
        color: EMPHASIZE_COLOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "make the school day easier"), " ", "for the pupils. The planner should remember as an app to the homework or also to practice time for exams. The goal of the project is to develop a fully functional app for Android and iOS that can be", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Emphasize"], {
        color: EMPHASIZE_COLOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "actively integrated into the everyday life of the school."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["ImageContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          height: "260px",
          objectFit: "contain"
        },
        src: "/static/images/pineapple/stress.png",
        alt: "Stress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["FactList"], {
        color: FACT_COLOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Fact"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "More than", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Emphasize"], {
        color: EMPHASIZE_COLOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "85% of all students"), " ", "uses a smartphones. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), "98% of all smartphones use the android or ios operating system.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), "Therefore, an", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Emphasize"], {
        color: EMPHASIZE_COLOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "android and iOS app"), " ", "ist the perfect solution!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Topic, {
        color: SECTION_COLOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "SOLUTION"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "For each student, his or her own timetable, substitution plan, exam plan are put together and suitable articles of the website are dynamically displayed to him/her on the basis of his personal subjects and courses."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
        right: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_ImageButton_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "Android",
        link: "/pineappleios",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_ImageButton_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "iOS",
        link: "/pineappleandroid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PineappleGallery_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["ImageList"], {
        color: "#f2f2f0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: "/static/images/pineapple/grades_pineapple.png",
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: "/static/images/pineapple/loginscreen_pineapple.png",
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: "/static/images/pineapple/exams_pineapple.png",
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: "/static/images/pineapple/class_selection_pineapple.png",
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: "/static/images/pineapple/exam_detail_pineapple.png",
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: "/static/images/pineapple/course_pineapple.png",
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: "/static/images/pineapple/quiz_pineapple.png",
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: "/static/images/pineapple/homework_pineapple.png",
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Topic, {
        color: SECTION_COLOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "SECURITY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Data protection is the most important factor for a successfull school app."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "The data will be treated with the utmost confidence and the personal data will be protected against possible attackers. The app is only available to students of the Episcopal Marienschule M\xF6nchengladbach and represents a project from students to students pose.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          flexWrap: "wrap",
          width: "80%",
          paddingLeft: "10%",
          paddingRight: "10%",
          display: "flex",
          justifyContent: "space-evenly"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Image, {
        url: "url(/static/images/pineapple/encrpytion.png)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Icon, {
        src: "/static/images/pineapple/encrpytion_icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "Encryption"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "Every connection to the server is encrypted with SSL / TLS. Each school has its own server so that no data can be tapped from other schools. In addition, only one app can be used for one student only. This ensures security and independence.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Image, {
        url: "url(/static/images/pineapple/law.png)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Icon, {
        src: "/static/images/pineapple/law_icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "Law"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "The app meets the requirements of the law of data economy (\xA73a BDSG). This means only a minimal exchange of data with the server takes place. Only the individual data for each student will be transferred. Even with theft of a cell phone, no data can be collected from other students.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Image, {
        url: "url(/static/images/pineapple/authentication.png)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Icon, {
        src: "/static/images/pineapple/authentication_icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Authentication"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Text, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Access to the app is only available to authenticated users. These different authentication options can be used:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }), "- Face-to-face authentication", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), "- Moodle/ILIAS", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }), "- LDAP / Active Directory"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Topic, {
        color: SECTION_COLOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "LONG TERM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_Section__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "To ensure the long-term success of the app, three things have been done.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["List"], {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Feature"], {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["FeatureTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Multigenerational project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["FeatureText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "App-AG - Students learn from students to persist over several generations")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Feature"], {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["FeatureTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "OpenSource"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["FeatureText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "sustainable and long-term community development free use for everyone")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["Feature"], {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["FeatureTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "Easy Integration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles_styles_js__WEBPACK_IMPORTED_MODULE_1__["FeatureText"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "Basis: Untis adaptation to any school possible"))));
    }
  }]);

  return Pineapple;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pineapple);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/pineapple.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/pineapple.js */"./pages/pineapple.js");


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
//# sourceMappingURL=pineapple.js.map