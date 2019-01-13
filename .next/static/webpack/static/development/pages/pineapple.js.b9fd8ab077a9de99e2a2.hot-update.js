webpackHotUpdate("static/development/pages/pineapple.js",{

/***/ "./components/PineappleGallery.js":
/*!****************************************!*\
  !*** ./components/PineappleGallery.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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



var FeatureTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PineappleGallery__FeatureTitle",
  componentId: "sc-1xvkkjv-0"
})(["letter-spacing:3px;font-weight:bold;margin-bottom:8px;font-size:16px;width:400px;"]);
var FeatureText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PineappleGallery__FeatureText",
  componentId: "sc-1xvkkjv-1"
})(["letter-spacing:0.9px;width:400px;font-size:16px;font-weight:100;line-height:2;"]);
var Feature = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PineappleGallery__Feature",
  componentId: "sc-1xvkkjv-2"
})(["justify-content:center;align-items:center;flex-direction:column;display:flex;width:600px;margin:10px;"]);
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PineappleGallery__Main",
  componentId: "sc-1xvkkjv-3"
})(["font-family:Calibri,sans-serif;display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;width:80%;padding-left:10%;padding-right:10%;"]);
var Div = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PineappleGallery__Div",
  componentId: "sc-1xvkkjv-4"
})(["justify-content:center;align-items:center;flex-grow:1;display:flex;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "PineappleGallery__Image",
  componentId: "sc-1xvkkjv-5"
})(["height:600px;object-fit:cover;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "PineappleGallery__Button",
  componentId: "sc-1xvkkjv-6"
})(["background-color:#162238;border:none;color:white;height:48px;width:48px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;border-radius:50%;"]);
var Gallery = [{
  title: "GRADES",
  text: " In the Grade Planner, the student can enter his own notes. So he has a direct overview of his grade point and a grade pre-announcement for his next testimonial.",
  image: "./images/pineapple/grades_pineapple.png"
}, {
  title: "ARTICLE",
  text: "Also current news and information about the daily happenings in the school are indicated. In addition, the website of our school, the Episcopal Marienschule Mönchengladbach, and their web articles are integrated into the app and dynamically tailored to the interests of the user and displayed. ",
  image: ""
}, {
  title: "QUIZ",
  text: "The app is not only intended to inform, but also to assist students in learning by incorporating a quiz function that queries quiz questions created by the teachers of each class based on the current school material or prepare for the next exam. <br /> <br /> In the quiz, the students can prove their knowledge. The Quizzes are created by the teachers and are meant to be the student help to learn the lesson easier.",
  image: "./images/pineapple/quiz_pineapple.png"
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
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Feature, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeatureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, Gallery[this.state.currentFeature].title, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FeatureText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        dangerouslySetInnerHTML: {
          __html: Gallery[this.state.currentFeature].text
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
        src: Gallery[this.state.currentFeature].image,
        alt: "Pineapple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        onClick: this.nextFeature,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, ">"));
    }
  }]);

  return PineappleGallery;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PineappleGallery);

/***/ })

})
//# sourceMappingURL=pineapple.js.b9fd8ab077a9de99e2a2.hot-update.js.map