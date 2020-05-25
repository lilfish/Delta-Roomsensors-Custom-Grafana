webpackHotUpdate(1,{

/***/ "./public/app/features/admin/LicenseChrome.tsx":
/*!*****************************************************!*\
  !*** ./public/app/features/admin/LicenseChrome.tsx ***!
  \*****************************************************/
/*! exports provided: LicenseChrome, Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenseChrome", function() { return LicenseChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      height: 137px;\n      padding: 40px 0 0 79px;\n      position: relative;\n      background: url('", "') right;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      text-align: center;\n      padding: 16px;\n      background: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      padding: 36px 79px;\n      background: ", ";\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var title = {
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '123%'
};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["stylesFactory"])(function (theme) {
  var backgroundUrl = theme.isDark ? 'public/img/licensing/header_dark.svg' : 'public/img/licensing/header_light.svg';
  var footerBg = theme.isDark ? theme.palette.dark9 : theme.palette.gray6;
  return {
    container: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), theme.colors.panelBg),
    footer: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), footerBg),
    header: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), backgroundUrl)
  };
});
var LicenseChrome = function LicenseChrome(_ref) {
  var header = _ref.header,
      editionNotice = _ref.editionNotice,
      subheader = _ref.subheader,
      children = _ref.children;
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var styles = getStyles(theme);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.header
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    style: title
  }, header), subheader && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, subheader), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
    size: "128px",
    style: {
      boxShadow: '0px 0px 24px rgba(24, 58, 110, 0.45)',
      background: '#0A1C36',
      position: 'absolute',
      top: '19px',
      left: '71%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "public/img/fontys_icon.svg",
    alt: "roomsensors",
    width: "80px",
    style: {
      position: 'absolute',
      left: '23px',
      top: '20px'
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.container
  }, children), editionNotice && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.footer
  }, editionNotice));
};
var Circle = function Circle(_ref2) {
  var size = _ref2.size,
      style = _ref2.style,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({
      width: size,
      height: size,
      position: 'absolute',
      bottom: 0,
      right: 0,
      borderRadius: '50%'
    }, style)
  }, children);
};

/***/ })

})
//# sourceMappingURL=1.c67d8da6428a8680e8d8.hot-update.js.map