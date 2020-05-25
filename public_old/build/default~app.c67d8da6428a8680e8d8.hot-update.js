webpackHotUpdate("default~app",{

/***/ "./public/app/core/components/Branding/Branding.tsx":
/*!**********************************************************!*\
  !*** ./public/app/core/components/Branding/Branding.tsx ***!
  \**********************************************************/
/*! exports provided: Branding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Branding", function() { return Branding; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    background-size: cover;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: url(public/img/login_background_", ".svg);\n    background-size: cover;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var LoginLogo = function LoginLogo(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: className,
    src: "public/img/fontys_icon.svg",
    alt: "roomsensors"
  });
};

var LoginBackground = function LoginBackground(_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var background = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), theme.isDark ? 'dark' : 'light');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(background, className)
  }, children);
};

var MenuLogo = function MenuLogo(_ref3) {
  var className = _ref3.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: className,
    src: "public/img/fontys_icon.svg",
    alt: "roomsensors"
  });
};

var LoginBoxBackground = function LoginBoxBackground() {
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), theme.isLight ? 'rgba(6, 30, 200, 0.1 )' : 'rgba(18, 28, 41, 0.65)');
};

var Branding = function Branding() {
  _classCallCheck(this, Branding);
};
Branding.LoginLogo = LoginLogo;
Branding.LoginBackground = LoginBackground;
Branding.MenuLogo = MenuLogo;
Branding.LoginBoxBackground = LoginBoxBackground;
Branding.AppTitle = 'Roomsensors';
Branding.LoginTitle = 'Welcome to Roomsensors';

Branding.GetLoginSubTitle = function () {
  var slogans = ["Don't get in the way of the data", 'Your single pane of glass', 'Built better together', 'Democratising data'];
  var count = slogans.length;
  return slogans[Math.floor(Math.random() * count)];
};

/***/ })

})
//# sourceMappingURL=default~app.c67d8da6428a8680e8d8.hot-update.js.map