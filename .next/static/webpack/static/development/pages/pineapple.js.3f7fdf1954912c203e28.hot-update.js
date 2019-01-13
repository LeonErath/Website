webpackHotUpdate("static/development/pages/pineapple.js",{

/***/ "./pages/pineapple.js":
/*!****************************!*\
  !*** ./pages/pineapple.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        url: "url(./images/pineapple/encrpytion.png)",
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/pineapple")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=pineapple.js.3f7fdf1954912c203e28.hot-update.js.map