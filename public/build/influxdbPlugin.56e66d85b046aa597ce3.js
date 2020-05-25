(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["influxdbPlugin"],{

/***/ "./public/app/features/explore/AdHocFilter.tsx":
/*!*****************************************************!*\
  !*** ./public/app/features/explore/AdHocFilter.tsx ***!
  \*****************************************************/
/*! exports provided: AdHocFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdHocFilter", function() { return AdHocFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    label: key-value-container;\n    display: flex;\n    flex-flow: row nowrap;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Select = _grafana_ui__WEBPACK_IMPORTED_MODULE_1__["LegacyForms"].Select;


var getStyles = function getStyles(theme) {
  return {
    keyValueContainer: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject())
  };
};

var ChangeType;

(function (ChangeType) {
  ChangeType["Key"] = "key";
  ChangeType["Value"] = "value";
  ChangeType["Operator"] = "operator";
})(ChangeType || (ChangeType = {}));

var AdHocFilter = function AdHocFilter(props) {
  var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
  var styles = getStyles(theme);

  var onChange = function onChange(changeType) {
    return function (item) {
      var onKeyChanged = props.onKeyChanged,
          onValueChanged = props.onValueChanged,
          onOperatorChanged = props.onOperatorChanged;

      if (!item.value) {
        return;
      }

      switch (changeType) {
        case ChangeType.Key:
          onKeyChanged(item.value);
          break;

        case ChangeType.Operator:
          onOperatorChanged(item.value);
          break;

        case ChangeType.Value:
          onValueChanged(item.value);
          break;
      }
    };
  };

  var stringToOption = function stringToOption(value) {
    return {
      label: value,
      value: value
    };
  };

  var keys = props.keys,
      initialKey = props.initialKey,
      keysPlaceHolder = props.keysPlaceHolder,
      initialOperator = props.initialOperator,
      values = props.values,
      initialValue = props.initialValue,
      valuesPlaceHolder = props.valuesPlaceHolder;
  var operators = ['=', '!='];
  var keysAsOptions = keys ? keys.map(stringToOption) : [];
  var selectedKey = initialKey ? keysAsOptions.filter(function (option) {
    return option.value === initialKey;
  }) : undefined;
  var valuesAsOptions = values ? values.map(stringToOption) : [];
  var selectedValue = initialValue ? valuesAsOptions.filter(function (option) {
    return option.value === initialValue;
  }) : undefined;
  var operatorsAsOptions = operators.map(stringToOption);
  var selectedOperator = initialOperator ? operatorsAsOptions.filter(function (option) {
    return option.value === initialOperator;
  }) : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])([styles.keyValueContainer])
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    options: keysAsOptions,
    isSearchable: true,
    value: selectedKey,
    onChange: onChange(ChangeType.Key),
    placeholder: keysPlaceHolder
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    options: operatorsAsOptions,
    value: selectedOperator,
    onChange: onChange(ChangeType.Operator)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    options: valuesAsOptions,
    isSearchable: true,
    value: selectedValue,
    onChange: onChange(ChangeType.Value),
    placeholder: valuesPlaceHolder
  }));
};

/***/ }),

/***/ "./public/app/features/explore/AdHocFilterField.tsx":
/*!**********************************************************!*\
  !*** ./public/app/features/explore/AdHocFilterField.tsx ***!
  \**********************************************************/
/*! exports provided: DEFAULT_REMOVE_FILTER_VALUE, AdHocFilterField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_REMOVE_FILTER_VALUE", function() { return DEFAULT_REMOVE_FILTER_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdHocFilterField", function() { return AdHocFilterField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AdHocFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdHocFilter */ "./public/app/features/explore/AdHocFilter.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





var DEFAULT_REMOVE_FILTER_VALUE = '-- remove filter --';

var addFilterButton = function addFilterButton(onAddFilter) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "gf-form-label gf-form-label--btn query-part",
    onClick: onAddFilter
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "plus"
  }));
};

var AdHocFilterField =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AdHocFilterField, _React$PureComponent);

  function AdHocFilterField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdHocFilterField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdHocFilterField)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      pairs: []
    };
    _this.loadTagKeys =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$props, datasource, extendedOptions, options, tagKeys, keys;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, datasource = _this$props.datasource, extendedOptions = _this$props.extendedOptions;
              options = extendedOptions || {};

              if (!datasource.getTagKeys) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return datasource.getTagKeys(options);

            case 5:
              _context.t0 = _context.sent;
              _context.next = 9;
              break;

            case 8:
              _context.t0 = [];

            case 9:
              tagKeys = _context.t0;
              keys = tagKeys.map(function (tagKey) {
                return tagKey.text;
              });
              return _context.abrupt("return", keys);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.loadTagValues =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(key) {
        var _this$props2, datasource, extendedOptions, options, tagValues, values;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = _this.props, datasource = _this$props2.datasource, extendedOptions = _this$props2.extendedOptions;
                options = extendedOptions || {};

                if (!datasource.getTagValues) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return datasource.getTagValues(_objectSpread({}, options, {
                  key: key
                }));

              case 5:
                _context2.t0 = _context2.sent;
                _context2.next = 9;
                break;

              case 8:
                _context2.t0 = [];

              case 9:
                tagValues = _context2.t0;
                values = tagValues.map(function (tagValue) {
                  return tagValue.text;
                });
                return _context2.abrupt("return", values);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.onKeyChanged = function (index) {
      return (
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(key) {
            var onPairsChanged, values, _pairs;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(key !== DEFAULT_REMOVE_FILTER_VALUE)) {
                      _context3.next = 9;
                      break;
                    }

                    onPairsChanged = _this.props.onPairsChanged;
                    _context3.next = 4;
                    return _this.loadTagValues(key);

                  case 4:
                    values = _context3.sent;
                    _pairs = _this.updatePairs(_this.state.pairs, index, {
                      key: key,
                      values: values
                    });

                    _this.setState({
                      pairs: _pairs
                    }, function () {
                      return onPairsChanged(_pairs);
                    });

                    _context3.next = 10;
                    break;

                  case 9:
                    _this.onRemoveFilter(index);

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }()
      );
    };

    _this.onValueChanged = function (index) {
      return function (value) {
        var pairs = _this.updatePairs(_this.state.pairs, index, {
          value: value
        });

        _this.setState({
          pairs: pairs
        }, function () {
          return _this.props.onPairsChanged(pairs);
        });
      };
    };

    _this.onOperatorChanged = function (index) {
      return function (operator) {
        var pairs = _this.updatePairs(_this.state.pairs, index, {
          operator: operator
        });

        _this.setState({
          pairs: pairs
        }, function () {
          return _this.props.onPairsChanged(pairs);
        });
      };
    };

    _this.onAddFilter =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var keys, pairs;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this.loadTagKeys();

            case 2:
              keys = _context4.sent;
              pairs = _this.state.pairs.concat(_this.updatePairs([], 0, {
                keys: keys
              }));

              _this.setState({
                pairs: pairs
              }, function () {
                return _this.props.onPairsChanged(pairs);
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    _this.onRemoveFilter =
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(index) {
        var pairs;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                pairs = _this.state.pairs.reduce(function (allPairs, pair, pairIndex) {
                  if (pairIndex === index) {
                    return allPairs;
                  }

                  return allPairs.concat(pair);
                }, []);

                _this.setState({
                  pairs: pairs
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }();

    return _this;
  }

  _createClass(AdHocFilterField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(prevProps.extendedOptions, this.props.extendedOptions) === false) {
        var _pairs2 = [];
        this.setState({
          pairs: _pairs2
        }, function () {
          return _this2.props.onPairsChanged(_pairs2);
        });
      }
    }
  }, {
    key: "updatePairs",
    value: function updatePairs(pairs, index, pair) {
      if (pairs.length === 0) {
        return [{
          key: pair.key || '',
          keys: pair.keys || [],
          operator: pair.operator || '',
          value: pair.value || '',
          values: pair.values || []
        }];
      }

      var newPairs = [];

      for (var pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
        var newPair = pairs[pairIndex];

        if (index === pairIndex) {
          newPairs.push(_objectSpread({}, newPair, {
            key: pair.key || newPair.key,
            value: pair.value || newPair.value,
            operator: pair.operator || newPair.operator,
            keys: pair.keys || newPair.keys,
            values: pair.values || newPair.values
          }));
          continue;
        }

        newPairs.push(newPair);
      }

      return newPairs;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var pairs = this.state.pairs;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, pairs.length < 1 && addFilterButton(this.onAddFilter), pairs.map(function (pair, index) {
        var adHocKey = "adhoc-filter-".concat(index, "-").concat(pair.key, "-").concat(pair.value);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "align-items-center flex-grow-1",
          key: adHocKey
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdHocFilter__WEBPACK_IMPORTED_MODULE_3__["AdHocFilter"], {
          keys: [DEFAULT_REMOVE_FILTER_VALUE].concat(pair.keys),
          values: pair.values,
          initialKey: pair.key,
          initialOperator: pair.operator,
          initialValue: pair.value,
          onKeyChanged: _this3.onKeyChanged(index),
          onOperatorChanged: _this3.onOperatorChanged(index),
          onValueChanged: _this3.onValueChanged(index)
        }), index < pairs.length - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\xA0AND\xA0"), index === pairs.length - 1 && addFilterButton(_this3.onAddFilter));
      }));
    }
  }]);

  return AdHocFilterField;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx":
/*!****************************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx ***!
  \****************************************************************************/
/*! exports provided: ConfigEditor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
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




var Select = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Select,
    Input = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].Input,
    SecretFormField = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["LegacyForms"].SecretFormField;
var httpModes = [{
  label: 'GET',
  value: 'GET'
}, {
  label: 'POST',
  value: 'POST'
}];
var ConfigEditor =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ConfigEditor, _PureComponent);

  function ConfigEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfigEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfigEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onResetPassword = function () {
      Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["updateDatasourcePluginResetOption"])(_this.props, 'password');
    };

    return _this;
  }

  _createClass(ConfigEditor, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          onOptionsChange = _this$props.onOptionsChange;
      var secureJsonFields = options.secureJsonFields;
      var secureJsonData = options.secureJsonData || {};
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["DataSourceHttpSettings"], {
        showAccessOptions: true,
        dataSourceConfig: options,
        defaultUrl: "http://localhost:8086",
        onChange: onOptionsChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "page-heading"
      }, "InfluxDB Details"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10"
      }, "Database"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-20",
        value: options.database || '',
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceOption"])(this.props, 'database')
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10"
      }, "User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-20",
        value: options.user || '',
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceOption"])(this.props, 'user')
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SecretFormField, {
        isConfigured: secureJsonFields && secureJsonFields.password,
        value: secureJsonData.password || '',
        label: "Password",
        labelWidth: 10,
        inputWidth: 20,
        onReset: this.onResetPassword,
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceSecureJsonDataOption"])(this.props, 'password')
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10",
        tooltip: "You can use either GET or POST HTTP method to query your InfluxDB database. The POST method allows you to perform heavy requests (with a lots of WHERE clause) while the GET method will restrict you and return an error if the query is too large."
      }, "HTTP Method"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
        className: "width-10",
        value: httpModes.find(function (httpMode) {
          return httpMode.value === options.jsonData.httpMode;
        }),
        options: httpModes,
        defaultValue: options.jsonData.httpMode,
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceJsonDataOptionSelect"])(this.props, 'httpMode')
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "grafana-info-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Database Access"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "SHOW MEASUREMENTS ON _internal"), " or ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "SELECT * FROM \"_internal\"..\"database\" LIMIT 10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "To support data isolation and security, make sure appropriate permissions are configured in InfluxDB."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["InlineFormLabel"], {
        className: "width-10",
        tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute."
      }, "Min time interval"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "width-10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
        className: "width-10",
        placeholder: "10s",
        value: options.jsonData.timeInterval || '',
        onChange: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["onUpdateDatasourceJsonDataOption"])(this.props, 'timeInterval')
      }))))));
    }
  }]);

  return ConfigEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
/* harmony default export */ __webpack_exports__["default"] = (ConfigEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx":
/*!********************************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CHEAT_SHEET_ITEMS = [{
  title: 'Getting started',
  label: 'Start by selecting a measurement and field from the dropdown above. You can then use the tag selector to further narrow your search.'
}];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "InfluxDB Cheat Sheet"), CHEAT_SHEET_ITEMS.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item",
      key: item.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item__title"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cheat-sheet-item__label"
    }, item.label));
  }));
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxLogsQueryField.tsx":
/*!************************************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/components/InfluxLogsQueryField.tsx ***!
  \************************************************************************************/
/*! exports provided: pairsAreValid, InfluxLogsQueryField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairsAreValid", function() { return pairsAreValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluxLogsQueryField", function() { return InfluxLogsQueryField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../influx_query_model */ "./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var app_features_explore_AdHocFilterField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/features/explore/AdHocFilterField */ "./public/app/features/explore/AdHocFilterField.tsx");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/features/templating/template_srv */ "./public/app/features/templating/template_srv.ts");
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../query_builder */ "./public/app/plugins/datasource/influxdb/query_builder.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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







// Helper function for determining if a collection of pairs are valid
// where a valid pair is either fully defined, or not defined at all, but not partially defined
function pairsAreValid(pairs) {
  return !pairs || pairs.every(function (pair) {
    var allDefined = !!(pair.key && pair.operator && pair.value);
    var allEmpty = pair.key === undefined && pair.operator === undefined && pair.value === undefined;
    return allDefined || allEmpty;
  });
}

function getChooserText(_ref) {
  var measurement = _ref.measurement,
      field = _ref.field,
      error = _ref.error;

  if (error) {
    return '(No measurement found)';
  }

  if (measurement) {
    return "Measurements (".concat(measurement, "/").concat(field, ")");
  }

  return 'Measurements';
}

var InfluxLogsQueryField =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(InfluxLogsQueryField, _React$PureComponent);

  function InfluxLogsQueryField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InfluxLogsQueryField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InfluxLogsQueryField)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.templateSrv = new app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__["TemplateSrv"]();
    _this.state = {
      measurements: [],
      measurement: null,
      field: null,
      error: null
    };

    _this.onMeasurementsChange =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(values) {
        var query, measurement, field;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _this.props.query;
                measurement = values[0];
                field = values[1];

                _this.setState({
                  measurement: measurement,
                  field: field
                }, function () {
                  _this.onPairsChanged(query.tags);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.onPairsChanged = function (pairs) {
      var query = _this.props.query;
      var _this$state = _this.state,
          measurement = _this$state.measurement,
          field = _this$state.field;
      var queryModel = new _influx_query_model__WEBPACK_IMPORTED_MODULE_2__["default"](_objectSpread({}, query, {
        resultFormat: 'table',
        groupBy: [],
        select: [[{
          type: 'field',
          params: [field]
        }]],
        tags: pairs,
        limit: '1000',
        measurement: measurement
      }), _this.templateSrv);

      _this.props.onChange(queryModel.target); // Only run the query if measurement & field are set, and there are no invalid pairs


      if (measurement && field && pairsAreValid(pairs)) {
        _this.props.onRunQuery();
      }
    };

    return _this;
  }

  _createClass(InfluxLogsQueryField, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var datasource, queryBuilder, measureMentsQuery, influxMeasurements, measurements, index, measurementObj, _queryBuilder, fieldsQuery, influxFields, fields, message;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                datasource = this.props.datasource;
                _context2.prev = 1;
                queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_5__["InfluxQueryBuilder"]({
                  measurement: '',
                  tags: []
                }, datasource.database);
                measureMentsQuery = queryBuilder.buildExploreQuery('MEASUREMENTS');
                _context2.next = 6;
                return datasource.metricFindQuery(measureMentsQuery);

              case 6:
                influxMeasurements = _context2.sent;
                measurements = [];
                index = 0;

              case 9:
                if (!(index < influxMeasurements.length)) {
                  _context2.next = 21;
                  break;
                }

                measurementObj = influxMeasurements[index];
                _queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_5__["InfluxQueryBuilder"]({
                  measurement: measurementObj.text,
                  tags: []
                }, datasource.database);
                fieldsQuery = _queryBuilder.buildExploreQuery('FIELDS');
                _context2.next = 15;
                return datasource.metricFindQuery(fieldsQuery);

              case 15:
                influxFields = _context2.sent;
                fields = influxFields.map(function (field) {
                  return {
                    label: field.text,
                    value: field.text,
                    children: []
                  };
                });
                measurements.push({
                  label: measurementObj.text,
                  value: measurementObj.text,
                  children: fields
                });

              case 18:
                index++;
                _context2.next = 9;
                break;

              case 21:
                this.setState({
                  measurements: measurements
                });
                _context2.next = 29;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](1);
                message = _context2.t0 && _context2.t0.message ? _context2.t0.message : _context2.t0;
                console.error(_context2.t0);
                this.setState({
                  error: message
                });

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 24]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.query.measurement && !this.props.query.measurement) {
        this.setState({
          measurement: null,
          field: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var datasource = this.props.datasource;
      var _this$state2 = this.state,
          measurements = _this$state2.measurements,
          measurement = _this$state2.measurement,
          field = _this$state2.field,
          error = _this$state2.error;
      var cascadeText = getChooserText({
        measurement: measurement,
        field: field,
        error: error
      });
      var hasMeasurement = measurements && measurements.length > 0;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form-inline gf-form-inline--nowrap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gf-form flex-shrink-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ButtonCascader"], {
        options: measurements,
        disabled: !hasMeasurement,
        value: [measurement, field],
        onChange: this.onMeasurementsChange
      }, cascadeText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-shrink-1 flex-flow-column-nowrap"
      }, measurement && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_features_explore_AdHocFilterField__WEBPACK_IMPORTED_MODULE_3__["AdHocFilterField"], {
        onPairsChanged: this.onPairsChanged,
        datasource: datasource,
        extendedOptions: {
          measurement: measurement
        }
      }), error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "gf-form-label gf-form-label--transparent gf-form-label--error m-l-2"
      }, error) : null));
    }
  }]);

  return InfluxLogsQueryField;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx":
/*!*******************************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfluxStartPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfluxCheatSheet */ "./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var InfluxStartPage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(InfluxStartPage, _PureComponent);

  function InfluxStartPage() {
    _classCallCheck(this, InfluxStartPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(InfluxStartPage).apply(this, arguments));
  }

  _createClass(InfluxStartPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClickExample: this.props.onClickExample
      });
    }
  }]);

  return InfluxStartPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/datasource.ts":
/*!**************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/datasource.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfluxDatasource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
/* harmony import */ var _influx_series__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./influx_series */ "./public/app/plugins/datasource/influxdb/influx_series.ts");
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./influx_query_model */ "./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./response_parser */ "./public/app/plugins/datasource/influxdb/response_parser.ts");
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query_builder */ "./public/app/plugins/datasource/influxdb/query_builder.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var InfluxDatasource =
/*#__PURE__*/
function (_DataSourceApi) {
  InfluxDatasource.$inject = ["instanceSettings", "templateSrv"];

  _inherits(InfluxDatasource, _DataSourceApi);

  /** @ngInject */
  function InfluxDatasource(instanceSettings, templateSrv) {
    var _this;

    _classCallCheck(this, InfluxDatasource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfluxDatasource).call(this, instanceSettings));
    _this.templateSrv = templateSrv;
    _this.type = 'influxdb';
    _this.urls = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(instanceSettings.url.split(','), function (url) {
      return url.trim();
    });
    _this.username = instanceSettings.username;
    _this.password = instanceSettings.password;
    _this.name = instanceSettings.name;
    _this.database = instanceSettings.database;
    _this.basicAuth = instanceSettings.basicAuth;
    _this.withCredentials = instanceSettings.withCredentials;
    var settingsData = instanceSettings.jsonData || {};
    _this.interval = settingsData.timeInterval;
    _this.httpMode = settingsData.httpMode || 'GET';
    _this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_4__["default"]();
    return _this;
  }

  _createClass(InfluxDatasource, [{
    key: "query",
    value: function query(options) {
      var _this2 = this;

      var timeFilter = this.getTimeFilter(options);
      var scopedVars = options.scopedVars;

      var targets = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(options.targets);

      var queryTargets = [];
      var queryModel;
      var i, y;

      var allQueries = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(targets, function (target) {
        if (target.hide) {
          return '';
        }

        queryTargets.push(target); // backward compatibility

        scopedVars.interval = scopedVars.__interval;
        queryModel = new _influx_query_model__WEBPACK_IMPORTED_MODULE_3__["default"](target, _this2.templateSrv, scopedVars);
        return queryModel.render(true);
      }).reduce(function (acc, current) {
        if (current !== '') {
          acc += ';' + current;
        }

        return acc;
      });

      if (allQueries === '') {
        return Promise.resolve({
          data: []
        });
      } // add global adhoc filters to timeFilter


      var adhocFilters = this.templateSrv.getAdhocFilters(this.name);

      if (adhocFilters.length > 0) {
        timeFilter += ' AND ' + queryModel.renderAdhocFilters(adhocFilters);
      } // replace grafana variables


      scopedVars.timeFilter = {
        value: timeFilter
      }; // replace templated variables

      allQueries = this.templateSrv.replace(allQueries, scopedVars);
      return this._seriesQuery(allQueries, options).then(function (data) {
        if (!data || !data.results) {
          return [];
        }

        var seriesList = [];

        for (i = 0; i < data.results.length; i++) {
          var result = data.results[i];

          if (!result || !result.series) {
            continue;
          }

          var target = queryTargets[i];
          var alias = target.alias;

          if (alias) {
            alias = _this2.templateSrv.replace(target.alias, options.scopedVars);
          }

          var influxSeries = new _influx_series__WEBPACK_IMPORTED_MODULE_2__["default"]({
            series: data.results[i].series,
            alias: alias
          });

          switch (target.resultFormat) {
            case 'table':
              {
                seriesList.push(influxSeries.getTable());
                break;
              }

            default:
              {
                var timeSeries = influxSeries.getTimeSeries();

                for (y = 0; y < timeSeries.length; y++) {
                  seriesList.push(timeSeries[y]);
                }

                break;
              }
          }
        }

        return {
          data: seriesList
        };
      });
    }
  }, {
    key: "annotationQuery",
    value: function annotationQuery(options) {
      if (!options.annotation.query) {
        return Promise.reject({
          message: 'Query missing in annotation definition'
        });
      }

      var timeFilter = this.getTimeFilter({
        rangeRaw: options.rangeRaw,
        timezone: options.timezone
      });
      var query = options.annotation.query.replace('$timeFilter', timeFilter);
      query = this.templateSrv.replace(query, null, 'regex');
      return this._seriesQuery(query, options).then(function (data) {
        if (!data || !data.results || !data.results[0]) {
          throw {
            message: 'No results in response from InfluxDB'
          };
        }

        return new _influx_series__WEBPACK_IMPORTED_MODULE_2__["default"]({
          series: data.results[0].series,
          annotation: options.annotation
        }).getAnnotations();
      });
    }
  }, {
    key: "targetContainsTemplate",
    value: function targetContainsTemplate(target) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = target.groupBy[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var group = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = group.params[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var param = _step2.value;

              if (this.templateSrv.variableExists(param)) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var i in target.tags) {
        if (this.templateSrv.variableExists(target.tags[i].value)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "interpolateVariablesInQueries",
    value: function interpolateVariablesInQueries(queries, scopedVars) {
      var _this3 = this;

      if (!queries || queries.length === 0) {
        return [];
      }

      var expandedQueries = queries;

      if (queries && queries.length > 0) {
        expandedQueries = queries.map(function (query) {
          var expandedQuery = _objectSpread({}, query, {
            datasource: _this3.name,
            measurement: _this3.templateSrv.replace(query.measurement, scopedVars, 'regex')
          });

          if (query.rawQuery) {
            expandedQuery.query = _this3.templateSrv.replace(query.query, scopedVars, 'regex');
          }

          if (query.tags) {
            var expandedTags = query.tags.map(function (tag) {
              var expandedTag = _objectSpread({}, tag, {
                value: _this3.templateSrv.replace(tag.value, null, 'regex')
              });

              return expandedTag;
            });
            expandedQuery.tags = expandedTags;
          }

          return expandedQuery;
        });
      }

      return expandedQueries;
    }
  }, {
    key: "metricFindQuery",
    value: function metricFindQuery(query, options) {
      var _this4 = this;

      var interpolated = this.templateSrv.replace(query, null, 'regex');
      return this._seriesQuery(interpolated, options).then(function (resp) {
        return _this4.responseParser.parse(query, resp);
      });
    }
  }, {
    key: "getTagKeys",
    value: function getTagKeys() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_5__["InfluxQueryBuilder"]({
        measurement: options.measurement || '',
        tags: []
      }, this.database);
      var query = queryBuilder.buildExploreQuery('TAG_KEYS');
      return this.metricFindQuery(query, options);
    }
  }, {
    key: "getTagValues",
    value: function getTagValues() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_5__["InfluxQueryBuilder"]({
        measurement: options.measurement || '',
        tags: []
      }, this.database);
      var query = queryBuilder.buildExploreQuery('TAG_VALUES', options.key);
      return this.metricFindQuery(query, options);
    }
  }, {
    key: "_seriesQuery",
    value: function _seriesQuery(query, options) {
      if (!query) {
        return Promise.resolve({
          results: []
        });
      }

      if (options && options.range) {
        var timeFilter = this.getTimeFilter({
          rangeRaw: options.range,
          timezone: options.timezone
        });
        query = query.replace('$timeFilter', timeFilter);
      }

      return this._influxRequest(this.httpMode, '/query', {
        q: query,
        epoch: 'ms'
      }, options);
    }
  }, {
    key: "serializeParams",
    value: function serializeParams(params) {
      if (!params) {
        return '';
      }

      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(params, function (memo, value, key) {
        if (value === null || value === undefined) {
          return memo;
        }

        memo.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        return memo;
      }, []).join('&');
    }
  }, {
    key: "testDatasource",
    value: function testDatasource() {
      var queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_5__["InfluxQueryBuilder"]({
        measurement: '',
        tags: []
      }, this.database);
      var query = queryBuilder.buildExploreQuery('RETENTION POLICIES');
      return this._seriesQuery(query).then(function (res) {
        var error = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(res, 'results[0].error');

        if (error) {
          return {
            status: 'error',
            message: error
          };
        }

        return {
          status: 'success',
          message: 'Data source is working'
        };
      }).catch(function (err) {
        return {
          status: 'error',
          message: err.message
        };
      });
    }
  }, {
    key: "_influxRequest",
    value: function _influxRequest(method, url, data, options) {
      var currentUrl = this.urls.shift();
      this.urls.push(currentUrl);
      var params = {};

      if (this.username) {
        params.u = this.username;
        params.p = this.password;
      }

      if (options && options.database) {
        params.db = options.database;
      } else if (this.database) {
        params.db = this.database;
      }

      if (method === 'POST' && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(data, 'q')) {
        // verb is POST and 'q' param is defined
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(params, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.omit(data, ['q']));

        data = this.serializeParams(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(data, ['q']));
      } else if (method === 'GET' || method === 'POST') {
        // verb is GET, or POST without 'q' param
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(params, data);

        data = null;
      }

      var req = {
        method: method,
        url: currentUrl + url,
        params: params,
        data: data,
        precision: 'ms',
        inspect: {
          type: 'influxdb'
        },
        paramSerializer: this.serializeParams
      };
      req.headers = req.headers || {};

      if (this.basicAuth || this.withCredentials) {
        req.withCredentials = true;
      }

      if (this.basicAuth) {
        req.headers.Authorization = this.basicAuth;
      }

      if (method === 'POST') {
        req.headers['Content-type'] = 'application/x-www-form-urlencoded';
      }

      return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__["getBackendSrv"])().datasourceRequest(req).then(function (result) {
        return result.data;
      }, function (err) {
        if (Number.isInteger(err.status) && err.status !== 0 || err.status >= 300) {
          if (err.data && err.data.error) {
            throw {
              message: 'InfluxDB Error: ' + err.data.error,
              data: err.data,
              config: err.config
            };
          } else {
            throw {
              message: 'Network Error: ' + err.statusText + '(' + err.status + ')',
              data: err.data,
              config: err.config
            };
          }
        } else {
          throw err;
        }
      });
    }
  }, {
    key: "getTimeFilter",
    value: function getTimeFilter(options) {
      var from = this.getInfluxTime(options.rangeRaw.from, false, options.timezone);
      var until = this.getInfluxTime(options.rangeRaw.to, true, options.timezone);
      var fromIsAbsolute = from[from.length - 1] === 'ms';

      if (until === 'now()' && !fromIsAbsolute) {
        return 'time >= ' + from;
      }

      return 'time >= ' + from + ' and time <= ' + until;
    }
  }, {
    key: "getInfluxTime",
    value: function getInfluxTime(date, roundUp, timezone) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(date)) {
        if (date === 'now') {
          return 'now()';
        }

        var parts = /^now-(\d+)([dhms])$/.exec(date);

        if (parts) {
          var amount = parseInt(parts[1], 10);
          var unit = parts[2];
          return 'now() - ' + amount + unit;
        }

        date = _grafana_data__WEBPACK_IMPORTED_MODULE_1__["dateMath"].parse(date, roundUp, timezone);
      }

      return date.valueOf() + 'ms';
    }
  }]);

  return InfluxDatasource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_1__["DataSourceApi"]);



/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_query_model.ts":
/*!**********************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/influx_query_model.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfluxQueryModel; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query_part */ "./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/utils/kbn */ "./public/app/core/utils/kbn.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var InfluxQueryModel =
/*#__PURE__*/
function () {
  InfluxQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

  /** @ngInject */
  function InfluxQueryModel(target, templateSrv, scopedVars) {
    _classCallCheck(this, InfluxQueryModel);

    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    target.policy = target.policy || 'default';
    target.resultFormat = target.resultFormat || 'time_series';
    target.orderByTime = target.orderByTime || 'ASC';
    target.tags = target.tags || [];
    target.groupBy = target.groupBy || [{
      type: 'time',
      params: ['$__interval']
    }, {
      type: 'fill',
      params: ['null']
    }];
    target.select = target.select || [[{
      type: 'field',
      params: ['value']
    }, {
      type: 'mean',
      params: []
    }]];
    this.updateProjection();
  }

  _createClass(InfluxQueryModel, [{
    key: "updateProjection",
    value: function updateProjection() {
      this.selectModels = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.target.select, function (parts) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(parts, _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create);
      });
      this.groupByParts = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.target.groupBy, _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create);
    }
  }, {
    key: "updatePersistedParts",
    value: function updatePersistedParts() {
      this.target.select = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.selectModels, function (selectParts) {
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(selectParts, function (part) {
          return {
            type: part.def.type,
            params: part.params
          };
        });
      });
    }
  }, {
    key: "hasGroupByTime",
    value: function hasGroupByTime() {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.target.groupBy, function (g) {
        return g.type === 'time';
      });
    }
  }, {
    key: "hasFill",
    value: function hasFill() {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(this.target.groupBy, function (g) {
        return g.type === 'fill';
      });
    }
  }, {
    key: "addGroupBy",
    value: function addGroupBy(value) {
      var stringParts = value.match(/^(\w+)\((.*)\)$/);

      if (!stringParts || !this.target.groupBy) {
        return;
      }

      var typePart = stringParts[1];
      var arg = stringParts[2];
      var partModel = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create({
        type: typePart,
        params: [arg]
      });
      var partCount = this.target.groupBy.length;

      if (partCount === 0) {
        this.target.groupBy.push(partModel.part);
      } else if (typePart === 'time') {
        this.target.groupBy.splice(0, 0, partModel.part);
      } else if (typePart === 'tag') {
        if (this.target.groupBy[partCount - 1].type === 'fill') {
          this.target.groupBy.splice(partCount - 1, 0, partModel.part);
        } else {
          this.target.groupBy.push(partModel.part);
        }
      } else {
        this.target.groupBy.push(partModel.part);
      }

      this.updateProjection();
    }
  }, {
    key: "removeGroupByPart",
    value: function removeGroupByPart(part, index) {
      var categories = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].getCategories();

      if (part.def.type === 'time') {
        // remove fill
        this.target.groupBy = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(this.target.groupBy, function (g) {
          return g.type !== 'fill';
        }); // remove aggregations

        this.target.select = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.target.select, function (s) {
          return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(s, function (part) {
            var partModel = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create(part);

            if (partModel.def.category === categories.Aggregations) {
              return false;
            }

            if (partModel.def.category === categories.Selectors) {
              return false;
            }

            return true;
          });
        });
      }

      this.target.groupBy.splice(index, 1);
      this.updateProjection();
    }
  }, {
    key: "removeSelect",
    value: function removeSelect(index) {
      this.target.select.splice(index, 1);
      this.updateProjection();
    }
  }, {
    key: "removeSelectPart",
    value: function removeSelectPart(selectParts, part) {
      // if we remove the field remove the whole statement
      if (part.def.type === 'field') {
        if (this.selectModels.length > 1) {
          var modelsIndex = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.indexOf(this.selectModels, selectParts);

          this.selectModels.splice(modelsIndex, 1);
        }
      } else {
        var partIndex = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.indexOf(selectParts, part);

        selectParts.splice(partIndex, 1);
      }

      this.updatePersistedParts();
    }
  }, {
    key: "addSelectPart",
    value: function addSelectPart(selectParts, type) {
      var partModel = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create({
        type: type
      });
      partModel.def.addStrategy(selectParts, partModel, this);
      this.updatePersistedParts();
    }
  }, {
    key: "renderTagCondition",
    value: function renderTagCondition(tag, index, interpolate) {
      var str = '';
      var operator = tag.operator;
      var value = tag.value;

      if (index > 0) {
        str = (tag.condition || 'AND') + ' ';
      }

      if (!operator) {
        if (/^\/.*\/$/.test(value)) {
          operator = '=~';
        } else {
          operator = '=';
        }
      } // quote value unless regex


      if (operator !== '=~' && operator !== '!~') {
        if (interpolate) {
          value = this.templateSrv.replace(value, this.scopedVars);
        }

        if (operator !== '>' && operator !== '<') {
          value = "'" + value.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
        }
      } else if (interpolate) {
        value = this.templateSrv.replace(value, this.scopedVars, 'regex');
      }

      return str + '"' + tag.key + '" ' + operator + ' ' + value;
    }
  }, {
    key: "getMeasurementAndPolicy",
    value: function getMeasurementAndPolicy(interpolate) {
      var policy = this.target.policy;
      var measurement = this.target.measurement || 'measurement';

      if (!measurement.match('^/.*/$')) {
        measurement = '"' + measurement + '"';
      } else if (interpolate) {
        measurement = this.templateSrv.replace(measurement, this.scopedVars, 'regex');
      }

      if (policy !== 'default') {
        policy = '"' + this.target.policy + '".';
      } else {
        policy = '';
      }

      return policy + measurement;
    }
  }, {
    key: "interpolateQueryStr",
    value: function interpolateQueryStr(value, variable, defaultFormatFn) {
      // if no multi or include all do not regexEscape
      if (!variable.multi && !variable.includeAll) {
        return value;
      }

      if (typeof value === 'string') {
        return app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__["default"].regexEscape(value);
      }

      var escapedValues = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(value, app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__["default"].regexEscape);

      return '(' + escapedValues.join('|') + ')';
    }
  }, {
    key: "render",
    value: function render(interpolate) {
      var _this = this;

      var target = this.target;

      if (target.rawQuery) {
        if (interpolate) {
          return this.templateSrv.replace(target.query, this.scopedVars, this.interpolateQueryStr);
        } else {
          return target.query;
        }
      }

      var query = 'SELECT ';
      var i, y;

      for (i = 0; i < this.selectModels.length; i++) {
        var parts = this.selectModels[i];
        var selectText = '';

        for (y = 0; y < parts.length; y++) {
          var part = parts[y];
          selectText = part.render(selectText);
        }

        if (i > 0) {
          query += ', ';
        }

        query += selectText;
      }

      query += ' FROM ' + this.getMeasurementAndPolicy(interpolate) + ' WHERE ';

      var conditions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(target.tags, function (tag, index) {
        return _this.renderTagCondition(tag, index, interpolate);
      });

      if (conditions.length > 0) {
        query += '(' + conditions.join(' ') + ') AND ';
      }

      query += '$timeFilter';
      var groupBySection = '';

      for (i = 0; i < this.groupByParts.length; i++) {
        var _part = this.groupByParts[i];

        if (i > 0) {
          // for some reason fill has no separator
          groupBySection += _part.def.type === 'fill' ? ' ' : ', ';
        }

        groupBySection += _part.render('');
      }

      if (groupBySection.length) {
        query += ' GROUP BY ' + groupBySection;
      }

      if (target.fill) {
        query += ' fill(' + target.fill + ')';
      }

      if (target.orderByTime === 'DESC') {
        query += ' ORDER BY time DESC';
      }

      if (target.limit) {
        query += ' LIMIT ' + target.limit;
      }

      if (target.slimit) {
        query += ' SLIMIT ' + target.slimit;
      }

      if (target.tz) {
        query += " tz('" + target.tz + "')";
      }

      return query;
    }
  }, {
    key: "renderAdhocFilters",
    value: function renderAdhocFilters(filters) {
      var _this2 = this;

      var conditions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filters, function (tag, index) {
        return _this2.renderTagCondition(tag, index, true);
      });

      return conditions.join(' ');
    }
  }]);

  return InfluxQueryModel;
}();



/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_series.ts":
/*!*****************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/influx_series.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfluxSeries; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/table_model */ "./public/app/core/table_model.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var InfluxSeries =
/*#__PURE__*/
function () {
  function InfluxSeries(options) {
    _classCallCheck(this, InfluxSeries);

    this.series = options.series;
    this.alias = options.alias;
    this.annotation = options.annotation;
  }

  _createClass(InfluxSeries, [{
    key: "getTimeSeries",
    value: function getTimeSeries() {
      var _this = this;

      var output = [];
      var i, j;

      if (this.series.length === 0) {
        return output;
      }

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.series, function (series) {
        var columns = series.columns.length;

        var tags = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(series.tags, function (value, key) {
          return key + ': ' + value;
        });

        for (j = 1; j < columns; j++) {
          var seriesName = series.name;
          var columnName = series.columns[j];

          if (columnName !== 'value') {
            seriesName = seriesName + '.' + columnName;
          }

          if (_this.alias) {
            seriesName = _this._getSeriesName(series, j);
          } else if (series.tags) {
            seriesName = seriesName + ' {' + tags.join(', ') + '}';
          }

          var datapoints = [];

          if (series.values) {
            for (i = 0; i < series.values.length; i++) {
              datapoints[i] = [series.values[i][j], series.values[i][0]];
            }
          }

          output.push({
            target: seriesName,
            datapoints: datapoints
          });
        }
      });

      return output;
    }
  }, {
    key: "_getSeriesName",
    value: function _getSeriesName(series, index) {
      var regex = /\$(\w+)|\[\[([\s\S]+?)\]\]/g;
      var segments = series.name.split('.');
      return this.alias.replace(regex, function (match, g1, g2) {
        var group = g1 || g2;
        var segIndex = parseInt(group, 10);

        if (group === 'm' || group === 'measurement') {
          return series.name;
        }

        if (group === 'col') {
          return series.columns[index];
        }

        if (!isNaN(segIndex)) {
          return segments[segIndex];
        }

        if (group.indexOf('tag_') !== 0) {
          return match;
        }

        var tag = group.replace('tag_', '');

        if (!series.tags) {
          return match;
        }

        return series.tags[tag];
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations() {
      var _this2 = this;

      var list = [];

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.series, function (series) {
        var titleCol = null;
        var timeCol = null;
        var tagsCol = [];
        var textCol = null;

        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(series.columns, function (column, index) {
          if (column === 'time') {
            timeCol = index;
            return;
          }

          if (column === 'sequence_number') {
            return;
          }

          if (column === _this2.annotation.titleColumn) {
            titleCol = index;
            return;
          }

          if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes((_this2.annotation.tagsColumn || '').replace(' ', '').split(','), column)) {
            tagsCol.push(index);
            return;
          }

          if (column === _this2.annotation.textColumn) {
            textCol = index;
            return;
          } // legacy case


          if (!titleCol && textCol !== index) {
            titleCol = index;
          }
        });

        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(series.values, function (value) {
          var data = {
            annotation: _this2.annotation,
            time: +new Date(value[timeCol]),
            title: value[titleCol],
            // Remove empty values, then split in different tags for comma separated values
            tags: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(tagsCol.filter(function (t) {
              return value[t];
            }).map(function (t) {
              return value[t].split(',');
            })),
            text: value[textCol]
          };
          list.push(data);
        });
      });

      return list;
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var table = new app_core_table_model__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var i, j;

      if (this.series.length === 0) {
        return table;
      }

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.series, function (series, seriesIndex) {
        if (seriesIndex === 0) {
          j = 0; // Check that the first column is indeed 'time'

          if (series.columns[0] === 'time') {
            // Push this now before the tags and with the right type
            table.columns.push({
              text: 'Time',
              type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["FieldType"].time
            });
            j++;
          }

          lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(series.tags), function (key) {
            table.columns.push({
              text: key
            });
          });

          for (; j < series.columns.length; j++) {
            table.columns.push({
              text: series.columns[j]
            });
          }
        }

        if (series.values) {
          for (i = 0; i < series.values.length; i++) {
            var values = series.values[i];
            var reordered = [values[0]];

            if (series.tags) {
              for (var key in series.tags) {
                if (series.tags.hasOwnProperty(key)) {
                  reordered.push(series.tags[key]);
                }
              }
            }

            for (j = 1; j < values.length; j++) {
              reordered.push(values[j]);
            }

            table.rows.push(reordered);
          }
        }
      });

      return table;
    }
  }]);

  return InfluxSeries;
}();



/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/module.ts":
/*!**********************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/module.ts ***!
  \**********************************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasource */ "./public/app/plugins/datasource/influxdb/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query_ctrl */ "./public/app/plugins/datasource/influxdb/query_ctrl.ts");
/* harmony import */ var _components_InfluxLogsQueryField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/InfluxLogsQueryField */ "./public/app/plugins/datasource/influxdb/components/InfluxLogsQueryField.tsx");
/* harmony import */ var _components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InfluxStartPage */ "./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ConfigEditor */ "./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var InfluxAnnotationsQueryCtrl = function InfluxAnnotationsQueryCtrl() {
  _classCallCheck(this, InfluxAnnotationsQueryCtrl);
};

InfluxAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_4__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_0__["default"]).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_5__["default"]).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_1__["InfluxQueryCtrl"]).setAnnotationQueryCtrl(InfluxAnnotationsQueryCtrl).setExploreLogsQueryField(_components_InfluxLogsQueryField__WEBPACK_IMPORTED_MODULE_2__["InfluxLogsQueryField"]).setExploreStartPage(_components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_builder.ts":
/*!*****************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/query_builder.ts ***!
  \*****************************************************************/
/*! exports provided: InfluxQueryBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluxQueryBuilder", function() { return InfluxQueryBuilder; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/utils/kbn */ "./public/app/core/utils/kbn.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




function renderTagCondition(tag, index) {
  var str = '';
  var operator = tag.operator;
  var value = tag.value;

  if (index > 0) {
    str = (tag.condition || 'AND') + ' ';
  }

  if (!operator) {
    if (/^\/.*\/$/.test(tag.value)) {
      operator = '=~';
    } else {
      operator = '=';
    }
  } // quote value unless regex or number


  if (operator !== '=~' && operator !== '!~' && isNaN(+value)) {
    value = "'" + value + "'";
  }

  return str + '"' + tag.key + '" ' + operator + ' ' + value;
}

var InfluxQueryBuilder =
/*#__PURE__*/
function () {
  function InfluxQueryBuilder(target, database) {
    _classCallCheck(this, InfluxQueryBuilder);

    this.target = target;
    this.database = database;
  }

  _createClass(InfluxQueryBuilder, [{
    key: "buildExploreQuery",
    value: function buildExploreQuery(type, withKey, withMeasurementFilter) {
      var query;
      var measurement;
      var policy;

      if (type === 'TAG_KEYS') {
        query = 'SHOW TAG KEYS';
        measurement = this.target.measurement;
        policy = this.target.policy;
      } else if (type === 'TAG_VALUES') {
        query = 'SHOW TAG VALUES';
        measurement = this.target.measurement;
        policy = this.target.policy;
      } else if (type === 'MEASUREMENTS') {
        query = 'SHOW MEASUREMENTS';

        if (withMeasurementFilter) {
          query += ' WITH MEASUREMENT =~ /' + app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__["default"].regexEscape(withMeasurementFilter) + '/';
        }
      } else if (type === 'FIELDS') {
        measurement = this.target.measurement;
        policy = this.target.policy;

        if (!measurement.match('^/.*/')) {
          measurement = '"' + measurement + '"';

          if (policy && policy !== 'default') {
            policy = '"' + policy + '"';
            measurement = policy + '.' + measurement;
          }
        }

        return 'SHOW FIELD KEYS FROM ' + measurement;
      } else if (type === 'RETENTION POLICIES') {
        query = 'SHOW RETENTION POLICIES on "' + this.database + '"';
        return query;
      }

      if (measurement) {
        if (!measurement.match('^/.*/') && !measurement.match(/^merge\(.*\)/)) {
          measurement = '"' + measurement + '"';
        }

        if (policy && policy !== 'default') {
          policy = '"' + policy + '"';
          measurement = policy + '.' + measurement;
        }

        query += ' FROM ' + measurement;
      }

      if (withKey) {
        query += ' WITH KEY = "' + withKey + '"';
      }

      if (this.target.tags && this.target.tags.length > 0) {
        var whereConditions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(this.target.tags, function (memo, tag) {
          // do not add a condition for the key we want to explore for
          if (tag.key === withKey) {
            return memo;
          }

          memo.push(renderTagCondition(tag, memo.length));
          return memo;
        }, []);

        if (whereConditions.length > 0) {
          query += ' WHERE ' + whereConditions.join(' ');
        }
      }

      if (type === 'MEASUREMENTS') {
        query += ' LIMIT 100'; //Solve issue #2524 by limiting the number of measurements returned
        //LIMIT must be after WITH MEASUREMENT and WHERE clauses
        //This also could be used for TAG KEYS and TAG VALUES, if desired
      }

      return query;
    }
  }]);

  return InfluxQueryBuilder;
}();

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_ctrl.ts":
/*!**************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/query_ctrl.ts ***!
  \**************************************************************/
/*! exports provided: InfluxQueryCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluxQueryCtrl", function() { return InfluxQueryCtrl; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query_builder */ "./public/app/plugins/datasource/influxdb/query_builder.ts");
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./influx_query_model */ "./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query_part */ "./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/plugins/sdk */ "./public/app/plugins/sdk.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var InfluxQueryCtrl =
/*#__PURE__*/
function (_QueryCtrl) {
  InfluxQueryCtrl.$inject = ["$scope", "$injector", "templateSrv", "uiSegmentSrv"];

  _inherits(InfluxQueryCtrl, _QueryCtrl);

  /** @ngInject */
  function InfluxQueryCtrl($scope, $injector, templateSrv, uiSegmentSrv) {
    var _this;

    _classCallCheck(this, InfluxQueryCtrl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfluxQueryCtrl).call(this, $scope, $injector));
    _this.templateSrv = templateSrv;
    _this.uiSegmentSrv = uiSegmentSrv;
    _this.target = _this.target;
    _this.queryModel = new _influx_query_model__WEBPACK_IMPORTED_MODULE_3__["default"](_this.target, templateSrv, _this.panel.scopedVars);
    _this.queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_2__["InfluxQueryBuilder"](_this.target, _this.datasource.database);
    _this.groupBySegment = _this.uiSegmentSrv.newPlusButton();
    _this.resultFormats = [{
      text: 'Time series',
      value: 'time_series'
    }, {
      text: 'Table',
      value: 'table'
    }];
    _this.policySegment = uiSegmentSrv.newSegment(_this.target.policy);

    if (!_this.target.measurement) {
      _this.measurementSegment = uiSegmentSrv.newSelectMeasurement();
    } else {
      _this.measurementSegment = uiSegmentSrv.newSegment(_this.target.measurement);
    }

    _this.tagSegments = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _this.target.tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var tag = _step.value;

        if (!tag.operator) {
          if (/^\/.*\/$/.test(tag.value)) {
            tag.operator = '=~';
          } else {
            tag.operator = '=';
          }
        }

        if (tag.condition) {
          _this.tagSegments.push(uiSegmentSrv.newCondition(tag.condition));
        }

        _this.tagSegments.push(uiSegmentSrv.newKey(tag.key));

        _this.tagSegments.push(uiSegmentSrv.newOperator(tag.operator));

        _this.tagSegments.push(uiSegmentSrv.newKeyValue(tag.value));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    _this.fixTagSegments();

    _this.buildSelectMenu();

    _this.removeTagFilterSegment = uiSegmentSrv.newSegment({
      fake: true,
      value: '-- remove tag filter --'
    });
    return _this;
  }

  _createClass(InfluxQueryCtrl, [{
    key: "removeOrderByTime",
    value: function removeOrderByTime() {
      this.target.orderByTime = 'ASC';
    }
  }, {
    key: "buildSelectMenu",
    value: function buildSelectMenu() {
      var categories = _query_part__WEBPACK_IMPORTED_MODULE_4__["default"].getCategories();
      this.selectMenu = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(categories, function (memo, cat, key) {
        var menu = {
          text: key,
          submenu: cat.map(function (item) {
            return {
              text: item.type,
              value: item.type
            };
          })
        };
        memo.push(menu);
        return memo;
      }, []);
    }
  }, {
    key: "getGroupByOptions",
    value: function getGroupByOptions() {
      var _this2 = this;

      var query = this.queryBuilder.buildExploreQuery('TAG_KEYS');
      return this.datasource.metricFindQuery(query).then(function (tags) {
        var options = [];

        if (!_this2.queryModel.hasFill()) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'fill(null)'
          }));
        }

        if (!_this2.target.limit) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'LIMIT'
          }));
        }

        if (!_this2.target.slimit) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'SLIMIT'
          }));
        }

        if (!_this2.target.tz) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'tz'
          }));
        }

        if (_this2.target.orderByTime === 'ASC') {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'ORDER BY time DESC'
          }));
        }

        if (!_this2.queryModel.hasGroupByTime()) {
          options.push(_this2.uiSegmentSrv.newSegment({
            value: 'time($interval)'
          }));
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var tag = _step2.value;
            options.push(_this2.uiSegmentSrv.newSegment({
              value: 'tag(' + tag.text + ')'
            }));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return options;
      }).catch(this.handleQueryError.bind(this));
    }
  }, {
    key: "groupByAction",
    value: function groupByAction() {
      switch (this.groupBySegment.value) {
        case 'LIMIT':
          {
            this.target.limit = 10;
            break;
          }

        case 'SLIMIT':
          {
            this.target.slimit = 10;
            break;
          }

        case 'tz':
          {
            this.target.tz = 'UTC';
            break;
          }

        case 'ORDER BY time DESC':
          {
            this.target.orderByTime = 'DESC';
            break;
          }

        default:
          {
            this.queryModel.addGroupBy(this.groupBySegment.value);
          }
      }

      var plusButton = this.uiSegmentSrv.newPlusButton();
      this.groupBySegment.value = plusButton.value;
      this.groupBySegment.html = plusButton.html;
      this.panelCtrl.refresh();
    }
  }, {
    key: "addSelectPart",
    value: function addSelectPart(selectParts, cat, subitem) {
      this.queryModel.addSelectPart(selectParts, subitem.value);
      this.panelCtrl.refresh();
    }
  }, {
    key: "handleSelectPartEvent",
    value: function handleSelectPartEvent(selectParts, part, evt) {
      switch (evt.name) {
        case 'get-param-options':
          {
            var fieldsQuery = this.queryBuilder.buildExploreQuery('FIELDS');
            return this.datasource.metricFindQuery(fieldsQuery).then(this.transformToSegments(true)).catch(this.handleQueryError.bind(this));
          }

        case 'part-param-changed':
          {
            this.panelCtrl.refresh();
            break;
          }

        case 'action':
          {
            this.queryModel.removeSelectPart(selectParts, part);
            this.panelCtrl.refresh();
            break;
          }

        case 'get-part-actions':
          {
            return Promise.resolve([{
              text: 'Remove',
              value: 'remove-part'
            }]);
          }
      }
    }
  }, {
    key: "handleGroupByPartEvent",
    value: function handleGroupByPartEvent(part, index, evt) {
      switch (evt.name) {
        case 'get-param-options':
          {
            var tagsQuery = this.queryBuilder.buildExploreQuery('TAG_KEYS');
            return this.datasource.metricFindQuery(tagsQuery).then(this.transformToSegments(true)).catch(this.handleQueryError.bind(this));
          }

        case 'part-param-changed':
          {
            this.panelCtrl.refresh();
            break;
          }

        case 'action':
          {
            this.queryModel.removeGroupByPart(part, index);
            this.panelCtrl.refresh();
            break;
          }

        case 'get-part-actions':
          {
            return Promise.resolve([{
              text: 'Remove',
              value: 'remove-part'
            }]);
          }
      }
    }
  }, {
    key: "fixTagSegments",
    value: function fixTagSegments() {
      var count = this.tagSegments.length;
      var lastSegment = this.tagSegments[Math.max(count - 1, 0)];

      if (!lastSegment || lastSegment.type !== 'plus-button') {
        this.tagSegments.push(this.uiSegmentSrv.newPlusButton());
      }
    }
  }, {
    key: "measurementChanged",
    value: function measurementChanged() {
      this.target.measurement = this.measurementSegment.value;
      this.panelCtrl.refresh();
    }
  }, {
    key: "getPolicySegments",
    value: function getPolicySegments() {
      var policiesQuery = this.queryBuilder.buildExploreQuery('RETENTION POLICIES');
      return this.datasource.metricFindQuery(policiesQuery).then(this.transformToSegments(false)).catch(this.handleQueryError.bind(this));
    }
  }, {
    key: "policyChanged",
    value: function policyChanged() {
      this.target.policy = this.policySegment.value;
      this.panelCtrl.refresh();
    }
  }, {
    key: "toggleEditorMode",
    value: function toggleEditorMode() {
      try {
        this.target.query = this.queryModel.render(false);
      } catch (err) {
        console.log('query render error');
      }

      this.target.rawQuery = !this.target.rawQuery;
    }
  }, {
    key: "getMeasurements",
    value: function getMeasurements(measurementFilter) {
      var query = this.queryBuilder.buildExploreQuery('MEASUREMENTS', undefined, measurementFilter);
      return this.datasource.metricFindQuery(query).then(this.transformToSegments(true)).catch(this.handleQueryError.bind(this));
    }
  }, {
    key: "handleQueryError",
    value: function handleQueryError(err) {
      this.error = err.message || 'Failed to issue metric query';
      return [];
    }
  }, {
    key: "transformToSegments",
    value: function transformToSegments(addTemplateVars) {
      var _this3 = this;

      return function (results) {
        var segments = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(results, function (segment) {
          return _this3.uiSegmentSrv.newSegment({
            value: segment.text,
            expandable: segment.expandable
          });
        });

        if (addTemplateVars) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _this3.templateSrv.getVariables()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var variable = _step3.value;
              segments.unshift(_this3.uiSegmentSrv.newSegment({
                type: 'value',
                value: '/^$' + variable.name + '$/',
                expandable: true
              }));
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }

        return segments;
      };
    }
  }, {
    key: "getTagsOrValues",
    value: function getTagsOrValues(segment, index) {
      var _this4 = this;

      if (segment.type === 'condition') {
        return Promise.resolve([this.uiSegmentSrv.newSegment('AND'), this.uiSegmentSrv.newSegment('OR')]);
      }

      if (segment.type === 'operator') {
        var nextValue = this.tagSegments[index + 1].value;

        if (/^\/.*\/$/.test(nextValue)) {
          return Promise.resolve(this.uiSegmentSrv.newOperators(['=~', '!~']));
        } else {
          return Promise.resolve(this.uiSegmentSrv.newOperators(['=', '!=', '<>', '<', '>']));
        }
      }

      var query, addTemplateVars;

      if (segment.type === 'key' || segment.type === 'plus-button') {
        query = this.queryBuilder.buildExploreQuery('TAG_KEYS');
        addTemplateVars = false;
      } else if (segment.type === 'value') {
        query = this.queryBuilder.buildExploreQuery('TAG_VALUES', this.tagSegments[index - 2].value);
        addTemplateVars = true;
      }

      return this.datasource.metricFindQuery(query).then(this.transformToSegments(addTemplateVars)).then(function (results) {
        if (segment.type === 'key') {
          results.splice(0, 0, angular__WEBPACK_IMPORTED_MODULE_0___default.a.copy(_this4.removeTagFilterSegment));
        }

        return results;
      }).catch(this.handleQueryError.bind(this));
    }
  }, {
    key: "getFieldSegments",
    value: function getFieldSegments() {
      var fieldsQuery = this.queryBuilder.buildExploreQuery('FIELDS');
      return this.datasource.metricFindQuery(fieldsQuery).then(this.transformToSegments(false)).catch(this.handleQueryError);
    }
  }, {
    key: "tagSegmentUpdated",
    value: function tagSegmentUpdated(segment, index) {
      this.tagSegments[index] = segment; // handle remove tag condition

      if (segment.value === this.removeTagFilterSegment.value) {
        this.tagSegments.splice(index, 3);

        if (this.tagSegments.length === 0) {
          this.tagSegments.push(this.uiSegmentSrv.newPlusButton());
        } else if (this.tagSegments.length > 2) {
          this.tagSegments.splice(Math.max(index - 1, 0), 1);

          if (this.tagSegments[this.tagSegments.length - 1].type !== 'plus-button') {
            this.tagSegments.push(this.uiSegmentSrv.newPlusButton());
          }
        }
      } else {
        if (segment.type === 'plus-button') {
          if (index > 2) {
            this.tagSegments.splice(index, 0, this.uiSegmentSrv.newCondition('AND'));
          }

          this.tagSegments.push(this.uiSegmentSrv.newOperator('='));
          this.tagSegments.push(this.uiSegmentSrv.newFake('select tag value', 'value', 'query-segment-value'));
          segment.type = 'key';
          segment.cssClass = 'query-segment-key';
        }

        if (index + 1 === this.tagSegments.length) {
          this.tagSegments.push(this.uiSegmentSrv.newPlusButton());
        }
      }

      this.rebuildTargetTagConditions();
    }
  }, {
    key: "rebuildTargetTagConditions",
    value: function rebuildTargetTagConditions() {
      var _this5 = this;

      var tags = [];
      var tagIndex = 0;
      var tagOperator = '';

      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(this.tagSegments, function (segment2, index) {
        if (segment2.type === 'key') {
          if (tags.length === 0) {
            tags.push({});
          }

          tags[tagIndex].key = segment2.value;
        } else if (segment2.type === 'value') {
          tagOperator = _this5.getTagValueOperator(segment2.value, tags[tagIndex].operator);

          if (tagOperator) {
            _this5.tagSegments[index - 1] = _this5.uiSegmentSrv.newOperator(tagOperator);
            tags[tagIndex].operator = tagOperator;
          }

          tags[tagIndex].value = segment2.value;
        } else if (segment2.type === 'condition') {
          tags.push({
            condition: segment2.value
          });
          tagIndex += 1;
        } else if (segment2.type === 'operator') {
          tags[tagIndex].operator = segment2.value;
        }
      });

      this.target.tags = tags;
      this.panelCtrl.refresh();
    }
  }, {
    key: "getTagValueOperator",
    value: function getTagValueOperator(tagValue, tagOperator) {
      if (tagOperator !== '=~' && tagOperator !== '!~' && /^\/.*\/$/.test(tagValue)) {
        return '=~';
      } else if ((tagOperator === '=~' || tagOperator === '!~') && /^(?!\/.*\/$)/.test(tagValue)) {
        return '=';
      }

      return null;
    }
  }, {
    key: "getCollapsedText",
    value: function getCollapsedText() {
      return this.queryModel.render(false);
    }
  }]);

  return InfluxQueryCtrl;
}(app_plugins_sdk__WEBPACK_IMPORTED_MODULE_5__["QueryCtrl"]);
InfluxQueryCtrl.templateUrl = 'partials/query.editor.html';

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_part.ts":
/*!**************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/query_part.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/components/query_part/query_part */ "./public/app/core/components/query_part/query_part.ts");


var index = [];
var categories = {
  Aggregations: [],
  Selectors: [],
  Transformations: [],
  Predictors: [],
  Math: [],
  Aliasing: [],
  Fields: []
};

function createPart(part) {
  var def = index[part.type];

  if (!def) {
    throw {
      message: 'Could not find query part ' + part.type
    };
  }

  return new app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["QueryPart"](part, def);
}

function register(options) {
  index[options.type] = new app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["QueryPartDef"](options);
  options.category.push(index[options.type]);
}

var groupByTimeFunctions = [];

function aliasRenderer(part, innerExpr) {
  return innerExpr + ' AS ' + '"' + part.params[0] + '"';
}

function fieldRenderer(part, innerExpr) {
  if (part.params[0] === '*') {
    return '*';
  }

  return '"' + part.params[0] + '"';
}

function replaceAggregationAddStrategy(selectParts, partModel) {
  // look for existing aggregation
  for (var i = 0; i < selectParts.length; i++) {
    var part = selectParts[i];

    if (part.def.category === categories.Aggregations) {
      if (part.def.type === partModel.def.type) {
        return;
      } // count distinct is allowed


      if (part.def.type === 'count' && partModel.def.type === 'distinct') {
        break;
      } // remove next aggregation if distinct was replaced


      if (part.def.type === 'distinct') {
        var morePartsAvailable = selectParts.length >= i + 2;

        if (partModel.def.type !== 'count' && morePartsAvailable) {
          var nextPart = selectParts[i + 1];

          if (nextPart.def.category === categories.Aggregations) {
            selectParts.splice(i + 1, 1);
          }
        } else if (partModel.def.type === 'count') {
          if (!morePartsAvailable || selectParts[i + 1].def.type !== 'count') {
            selectParts.splice(i + 1, 0, partModel);
          }

          return;
        }
      }

      selectParts[i] = partModel;
      return;
    }

    if (part.def.category === categories.Selectors) {
      selectParts[i] = partModel;
      return;
    }
  }

  selectParts.splice(1, 0, partModel);
}

function addTransformationStrategy(selectParts, partModel) {
  var i; // look for index to add transformation

  for (i = 0; i < selectParts.length; i++) {
    var part = selectParts[i];

    if (part.def.category === categories.Math || part.def.category === categories.Aliasing) {
      break;
    }
  }

  selectParts.splice(i, 0, partModel);
}

function addMathStrategy(selectParts, partModel) {
  var partCount = selectParts.length;

  if (partCount > 0) {
    // if last is math, replace it
    if (selectParts[partCount - 1].def.type === 'math') {
      selectParts[partCount - 1] = partModel;
      return;
    } // if next to last is math, replace it


    if (partCount > 1 && selectParts[partCount - 2].def.type === 'math') {
      selectParts[partCount - 2] = partModel;
      return;
    } else if (selectParts[partCount - 1].def.type === 'alias') {
      // if last is alias add it before
      selectParts.splice(partCount - 1, 0, partModel);
      return;
    }
  }

  selectParts.push(partModel);
}

function addAliasStrategy(selectParts, partModel) {
  var partCount = selectParts.length;

  if (partCount > 0) {
    // if last is alias, replace it
    if (selectParts[partCount - 1].def.type === 'alias') {
      selectParts[partCount - 1] = partModel;
      return;
    }
  }

  selectParts.push(partModel);
}

function addFieldStrategy(selectParts, partModel, query) {
  // copy all parts
  var parts = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(selectParts, function (part) {
    return createPart({
      type: part.def.type,
      params: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.clone(part.params)
    });
  });

  query.selectModels.push(parts);
}

register({
  type: 'field',
  addStrategy: addFieldStrategy,
  category: categories.Fields,
  params: [{
    type: 'field',
    dynamicLookup: true
  }],
  defaultParams: ['value'],
  renderer: fieldRenderer
}); // Aggregations

register({
  type: 'count',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'distinct',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'integral',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'mean',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'median',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'mode',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'sum',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
}); // transformations

register({
  type: 'derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'spread',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'non_negative_derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'non_negative_difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'moving_average',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'window',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }],
  defaultParams: [10],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'cumulative_sum',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'stddev',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'time',
  category: groupByTimeFunctions,
  params: [{
    name: 'interval',
    type: 'time',
    options: ['$__interval', '1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['$__interval'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'fill',
  category: groupByTimeFunctions,
  params: [{
    name: 'fill',
    type: 'string',
    options: ['none', 'null', '0', 'previous', 'linear']
  }],
  defaultParams: ['null'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'elapsed',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
}); // predictions

register({
  type: 'holt_winters',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'holt_winters_with_fit',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
}); // Selectors

register({
  type: 'bottom',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'first',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'last',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'max',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'min',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'percentile',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'nth',
    type: 'int'
  }],
  defaultParams: [95],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'top',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["functionRenderer"]
});
register({
  type: 'tag',
  category: groupByTimeFunctions,
  params: [{
    name: 'tag',
    type: 'string',
    dynamicLookup: true
  }],
  defaultParams: ['tag'],
  renderer: fieldRenderer
});
register({
  type: 'math',
  addStrategy: addMathStrategy,
  category: categories.Math,
  params: [{
    name: 'expr',
    type: 'string'
  }],
  defaultParams: [' / 100'],
  renderer: app_core_components_query_part_query_part__WEBPACK_IMPORTED_MODULE_1__["suffixRenderer"]
});
register({
  type: 'alias',
  addStrategy: addAliasStrategy,
  category: categories.Aliasing,
  params: [{
    name: 'name',
    type: 'string',
    quote: 'double'
  }],
  defaultParams: ['alias'],
  renderMode: 'suffix',
  renderer: aliasRenderer
});
/* harmony default export */ __webpack_exports__["default"] = ({
  create: createPart,
  getCategories: function getCategories() {
    return categories;
  },
  replaceAggregationAdd: replaceAggregationAddStrategy
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/response_parser.ts":
/*!*******************************************************************!*\
  !*** ./public/app/plugins/datasource/influxdb/response_parser.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponseParser; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ResponseParser =
/*#__PURE__*/
function () {
  function ResponseParser() {
    _classCallCheck(this, ResponseParser);
  }

  _createClass(ResponseParser, [{
    key: "parse",
    value: function parse(query, results) {
      if (!results || results.results.length === 0) {
        return [];
      }

      var influxResults = results.results[0];

      if (!influxResults.series) {
        return [];
      }

      var normalizedQuery = query.toLowerCase();
      var isValueFirst = normalizedQuery.indexOf('show field keys') >= 0 || normalizedQuery.indexOf('show retention policies') >= 0;
      var res = {};

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(influxResults.series, function (serie) {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(serie.values, function (value) {
          if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(value)) {
            // In general, there are 2 possible shapes for the returned value.
            // The first one is a two-element array,
            // where the first element is somewhat a metadata value:
            // the tag name for SHOW TAG VALUES queries,
            // the time field for SELECT queries, etc.
            // The second shape is an one-element array,
            // that is containing an immediate value.
            // For example, SHOW FIELD KEYS queries return such shape.
            // Note, pre-0.11 versions return
            // the second shape for SHOW TAG VALUES queries
            // (while the newer versions—first).
            if (isValueFirst) {
              addUnique(res, value[0]);
            } else if (value[1] !== undefined) {
              addUnique(res, value[1]);
            } else {
              addUnique(res, value[0]);
            }
          } else {
            addUnique(res, value);
          }
        });
      }); // @ts-ignore problems with typings for this _.map only accepts [] but this needs to be object


      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(res, function (value) {
        // @ts-ignore
        return {
          text: value.toString()
        };
      });
    }
  }]);

  return ResponseParser;
}();



function addUnique(arr, value) {
  arr[value] = value;
}

/***/ })

}]);
//# sourceMappingURL=influxdbPlugin.56e66d85b046aa597ce3.js.map