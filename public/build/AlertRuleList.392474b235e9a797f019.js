(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AlertRuleList"],{

/***/ "./public/app/features/alerting/AlertRuleItem.tsx":
/*!********************************************************!*\
  !*** ./public/app/features/alerting/AlertRuleItem.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-highlight-words */ "./node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // @ts-ignore




var AlertRuleItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AlertRuleItem, _PureComponent);

  function AlertRuleItem() {
    _classCallCheck(this, AlertRuleItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(AlertRuleItem).apply(this, arguments));
  }

  _createClass(AlertRuleItem, [{
    key: "renderText",
    value: function renderText(text) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight_words__WEBPACK_IMPORTED_MODULE_1___default.a, {
        highlightClassName: "highlight-search-match",
        textToHighlight: text,
        searchWords: [this.props.search]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          rule = _this$props.rule,
          onTogglePause = _this$props.onTogglePause;
      var ruleUrl = "".concat(rule.url, "?editPanel=").concat(rule.panelId, "&tab=alert");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "alert-rule-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        size: "xl",
        name: rule.stateIcon,
        className: "alert-rule-item__icon ".concat(rule.stateClass)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert-rule-item__body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert-rule-item__header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert-rule-item__name"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ruleUrl
      }, this.renderText(rule.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert-rule-item__text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "".concat(rule.stateClass)
      }, this.renderText(rule.stateText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "alert-rule-item__time"
      }, " for ", rule.stateAge))), rule.info && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "small muted alert-rule-item__info"
      }, this.renderText(rule.info))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert-rule-item__actions"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["HorizontalGroup"], {
        spacing: "sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        placement: "bottom",
        content: "Pausing an alert rule prevents it from executing"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "secondary",
        size: "sm",
        icon: rule.state === 'paused' ? 'play' : 'pause',
        onClick: onTogglePause
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        placement: "right",
        content: "Edit alert rule"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LinkButton"], {
        size: "sm",
        variant: "secondary",
        href: ruleUrl,
        icon: "cog"
      })))));
    }
  }]);

  return AlertRuleItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AlertRuleItem);

/***/ }),

/***/ "./public/app/features/alerting/AlertRuleList.tsx":
/*!********************************************************!*\
  !*** ./public/app/features/alerting/AlertRuleList.tsx ***!
  \********************************************************/
/*! exports provided: AlertRuleList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertRuleList", function() { return AlertRuleList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/components/Page/Page */ "./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _AlertRuleItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AlertRuleItem */ "./public/app/features/alerting/AlertRuleItem.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/app_events */ "./public/app/core/app_events.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/actions */ "./public/app/core/actions/index.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/selectors/navModel */ "./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/types */ "./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/actions */ "./public/app/features/alerting/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/selectors */ "./public/app/features/alerting/state/selectors.ts");
/* harmony import */ var app_core_components_FilterInput_FilterInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/core/components/FilterInput/FilterInput */ "./public/app/core/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state/reducers */ "./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var AlertRuleList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AlertRuleList, _PureComponent);

  function AlertRuleList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AlertRuleList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AlertRuleList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.stateFilters = [{
      label: 'All',
      value: 'all'
    }, {
      label: 'OK',
      value: 'ok'
    }, {
      label: 'Not OK',
      value: 'not_ok'
    }, {
      label: 'Alerting',
      value: 'alerting'
    }, {
      label: 'No Data',
      value: 'no_data'
    }, {
      label: 'Paused',
      value: 'paused'
    }, {
      label: 'Pending',
      value: 'pending'
    }];

    _this.onStateFilterChanged = function (option) {
      _this.props.updateLocation({
        query: {
          state: option.value
        }
      });
    };

    _this.onOpenHowTo = function () {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_5__["default"].emit(app_types__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].showModal, {
        src: 'public/app/features/alerting/partials/alert_howto.html',
        modalClass: 'confirm-modal',
        model: {}
      });
    };

    _this.onSearchQueryChange = function (value) {
      _this.props.setSearchQuery(value);
    };

    _this.onTogglePause = function (rule) {
      _this.props.togglePauseAlertRule(rule.id, {
        paused: rule.state !== 'paused'
      });
    };

    _this.alertStateFilterOption = function (_ref) {
      var text = _ref.text,
          value = _ref.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: value,
        value: value
      }, text);
    };

    return _this;
  }

  _createClass(AlertRuleList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchRules();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.stateFilter !== this.props.stateFilter) {
        this.fetchRules();
      }
    }
  }, {
    key: "fetchRules",
    value: function () {
      var _fetchRules = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.getAlertRulesAsync({
                  state: this.getStateFilter()
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchRules() {
        return _fetchRules.apply(this, arguments);
      }

      return fetchRules;
    }()
  }, {
    key: "getStateFilter",
    value: function getStateFilter() {
      var stateFilter = this.props.stateFilter;

      if (stateFilter) {
        return stateFilter.toString();
      }

      return 'all';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          navModel = _this$props.navModel,
          alertRules = _this$props.alertRules,
          search = _this$props.search,
          isLoading = _this$props.isLoading;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        navModel: navModel
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        isLoading: isLoading
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-action-bar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form gf-form--grow"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_FilterInput_FilterInput__WEBPACK_IMPORTED_MODULE_11__["FilterInput"], {
        labelClassName: "gf-form--has-input-icon gf-form--grow",
        inputClassName: "gf-form-input",
        placeholder: "Search alerts",
        value: search,
        onChange: this.onSearchQueryChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "gf-form-label"
      }, "States"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-13"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__["Select"], {
        options: this.stateFilters,
        onChange: this.onStateFilterChanged,
        value: this.getStateFilter()
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-action-bar__spacer"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        variant: "secondary",
        onClick: this.onOpenHowTo
      }, "How to add an alert")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
        className: "alert-rule-list"
      }, alertRules.map(function (rule) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AlertRuleItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          rule: rule,
          key: rule.id,
          search: search,
          onTogglePause: function onTogglePause() {
            return _this2.onTogglePause(rule);
          }
        });
      })))));
    }
  }]);

  return AlertRuleList;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    navModel: Object(app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__["getNavModel"])(state.navIndex, 'alert-list'),
    alertRules: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_10__["getAlertRuleItems"])(state.alertRules),
    stateFilter: state.location.query.state,
    search: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_10__["getSearchQuery"])(state.alertRules),
    isLoading: state.alertRules.isLoading
  };
};

var mapDispatchToProps = {
  updateLocation: app_core_actions__WEBPACK_IMPORTED_MODULE_6__["updateLocation"],
  getAlertRulesAsync: _state_actions__WEBPACK_IMPORTED_MODULE_9__["getAlertRulesAsync"],
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_12__["setSearchQuery"],
  togglePauseAlertRule: _state_actions__WEBPACK_IMPORTED_MODULE_9__["togglePauseAlertRule"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(AlertRuleList)));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./public/app/features/alerting/state/actions.ts":
/*!*******************************************************!*\
  !*** ./public/app/features/alerting/state/actions.ts ***!
  \*******************************************************/
/*! exports provided: getAlertRulesAsync, togglePauseAlertRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlertRulesAsync", function() { return getAlertRulesAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePauseAlertRule", function() { return togglePauseAlertRule; });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./public/app/features/alerting/state/reducers.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function getAlertRulesAsync(options) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var rules;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_1__["loadAlertRules"])());
                _context.next = 3;
                return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getBackendSrv"])().get('/api/alerts', options);

              case 3:
                rules = _context.sent;
                dispatch(Object(_reducers__WEBPACK_IMPORTED_MODULE_1__["loadedAlertRules"])(rules));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}
function togglePauseAlertRule(id, options) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var stateFilter;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getBackendSrv"])().post("/api/alerts/".concat(id, "/pause"), options);

              case 2:
                stateFilter = getState().location.query.state || 'all';
                dispatch(getAlertRulesAsync({
                  state: stateFilter.toString()
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

/***/ }),

/***/ "./public/app/features/alerting/state/selectors.ts":
/*!*********************************************************!*\
  !*** ./public/app/features/alerting/state/selectors.ts ***!
  \*********************************************************/
/*! exports provided: getSearchQuery, getAlertRuleItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchQuery", function() { return getSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlertRuleItems", function() { return getAlertRuleItems; });
var getSearchQuery = function getSearchQuery(state) {
  return state.searchQuery;
};
var getAlertRuleItems = function getAlertRuleItems(state) {
  var regex = new RegExp(state.searchQuery, 'i');
  return state.items.filter(function (item) {
    return regex.test(item.name) || regex.test(item.stateText) || regex.test(item.info);
  });
};

/***/ })

}]);
//# sourceMappingURL=AlertRuleList.392474b235e9a797f019.js.map