webpackHotUpdate("default~app",{

/***/ "./public/app/core/components/Login/LoginPage.tsx":
/*!********************************************************!*\
  !*** ./public/app/core/components/Login/LoginPage.tsx ***!
  \********************************************************/
/*! exports provided: LoginPage, getLoginStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginStyles", function() { return getLoginStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _UserSignup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSignup */ "./public/app/core/components/Login/UserSignup.tsx");
/* harmony import */ var _LoginServiceButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginServiceButtons */ "./public/app/core/components/Login/LoginServiceButtons.tsx");
/* harmony import */ var _LoginCtrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginCtrl */ "./public/app/core/components/Login/LoginCtrl.tsx");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm */ "./public/app/core/components/Login/LoginForm.tsx");
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChangePassword */ "./public/app/core/components/Login/ChangePassword.tsx");
/* harmony import */ var app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/components/Branding/Branding */ "./public/app/core/components/Branding/Branding.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
var _this = undefined;

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n      animation: ", " ease-out 0.2s;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      padding: ", ";\n      @media (max-width: 320px) {\n        padding: ", ";\n      }\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      flex-grow: 1;\n      max-width: 415px;\n      width: 100%;\n      transform: translate(0px, 0px);\n      transition: 0.25s ease;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n      overflow-y: hidden;\n      align-items: center;\n      justify-content: center;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      max-width: 550px;\n      width: 100%;\n      display: flex;\n      align-items: stretch;\n      flex-direction: column;\n      position: relative;\n      justify-content: center;\n      z-index: 1;\n      min-height: 320px;\n      border-radius: 3px;\n      padding: 20px 0;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      font-size: ", ";\n      color: ", ";\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      font-size: '32px';\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      text-align: center;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      padding: ", ";\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      width: 100%;\n      max-width: 100px;\n      margin-bottom: 15px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      justify-content: center;\n      width: 100%;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      min-height: 100vh;\n      background-position: center;\n      background-repeat: no-repeat;\n      min-width: 100%;\n      margin-left: 0;\n      background-color: $black;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nfrom{\n  transform: translate(-400px, 0px);\n}\n\nto{\n  transform: translate(0px, 0px);\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Libraries

 // Components








var LoginPage = function LoginPage() {
  var title = _this.getPageTitle;
  document.title = title ? title + ' - ' + app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_7__["Branding"].AppTitle : 'Roomsensors';
  var loginStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["useStyles"])(getLoginStyles);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_7__["Branding"].LoginBackground, {
    className: loginStyles.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(loginStyles.loginContent, app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_7__["Branding"].LoginBoxBackground())
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: loginStyles.loginLogoWrapper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_7__["Branding"].LoginLogo, {
    className: loginStyles.loginLogo
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: loginStyles.titleWrapper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: loginStyles.mainTitle
  }, app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_7__["Branding"].LoginTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: loginStyles.subTitle
  }, app_core_components_Branding_Branding__WEBPACK_IMPORTED_MODULE_7__["Branding"].GetLoginSubTitle()))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginCtrl__WEBPACK_IMPORTED_MODULE_4__["default"], null, function (_ref) {
    var loginHint = _ref.loginHint,
        passwordHint = _ref.passwordHint,
        ldapEnabled = _ref.ldapEnabled,
        authProxyEnabled = _ref.authProxyEnabled,
        disableLoginForm = _ref.disableLoginForm,
        disableUserSignUp = _ref.disableUserSignUp,
        login = _ref.login,
        isLoggingIn = _ref.isLoggingIn,
        changePassword = _ref.changePassword,
        skipPasswordChange = _ref.skipPasswordChange,
        isChangingPassword = _ref.isChangingPassword;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: loginStyles.loginOuterBox
    }, !isChangingPassword && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "".concat(loginStyles.loginInnerBox, " ").concat(isChangingPassword ? 'hidden' : ''),
      id: "login-view"
    }, !disableLoginForm && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_5__["LoginForm"], {
      displayForgotPassword: !(ldapEnabled || authProxyEnabled),
      onSubmit: login,
      loginHint: loginHint,
      passwordHint: passwordHint,
      isLoggingIn: isLoggingIn
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginServiceButtons__WEBPACK_IMPORTED_MODULE_3__["LoginServiceButtons"], null), !disableUserSignUp && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserSignup__WEBPACK_IMPORTED_MODULE_2__["UserSignup"], null)), isChangingPassword && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["cx"])(loginStyles.loginInnerBox, loginStyles.enterAnimation)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChangePassword__WEBPACK_IMPORTED_MODULE_6__["ChangePassword"], {
      onSubmit: changePassword,
      onSkip: skipPasswordChange
    })));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearfix"
  })));
};
var flyInAnimation = Object(emotion__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var getLoginStyles = function getLoginStyles(theme) {
  return {
    container: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2()),
    submitButton: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3()),
    loginLogo: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4()),
    loginLogoWrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5(), theme.spacing.lg),
    titleWrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6()),
    mainTitle: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7()),
    subTitle: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8(), theme.typography.size.md, theme.colors.textSemiWeak),
    loginContent: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject9()),
    loginOuterBox: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject10()),
    loginInnerBox: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11(), theme.spacing.xl, theme.spacing.lg),
    enterAnimation: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject12(), flyInAnimation)
  };
};

/***/ })

})
//# sourceMappingURL=default~app.78d99052966be6fd3e9f.hot-update.js.map