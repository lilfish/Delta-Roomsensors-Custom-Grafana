(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NotificationsListPage"],{

/***/ "./public/app/core/hooks/useNavModel.ts":
/*!**********************************************!*\
  !*** ./public/app/core/hooks/useNavModel.ts ***!
  \**********************************************/
/*! exports provided: useNavModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNavModel", function() { return useNavModel; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors/navModel */ "./public/app/core/selectors/navModel.ts");


var useNavModel = function useNavModel(id) {
  var navIndex = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.navIndex;
  });
  return Object(_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__["getNavModel"])(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/alerting/NotificationsListPage.tsx":
/*!****************************************************************!*\
  !*** ./public/app/features/alerting/NotificationsListPage.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/components/EmptyListCTA/EmptyListCTA */ "./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/components/Page/Page */ "./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use */ "./node_modules/react-use/esm/index.js");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/hooks/useNavModel */ "./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var deleteNotification =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(id) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getBackendSrv"])().delete("/api/alert-notifications/".concat(id));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function deleteNotification(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getNotifications =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getBackendSrv"])().get("/api/alert-notifications");

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getNotifications() {
    return _ref2.apply(this, arguments);
  };
}();

var NotificationsListPage = function NotificationsListPage() {
  var navModel = Object(app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_5__["useNavModel"])('channels');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      notifications = _useState2[0],
      setNotifications = _useState2[1];

  var _useAsyncFn = Object(react_use__WEBPACK_IMPORTED_MODULE_4__["useAsyncFn"])(getNotifications),
      _useAsyncFn2 = _slicedToArray(_useAsyncFn, 2),
      state = _useAsyncFn2[0],
      fetchNotifications = _useAsyncFn2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchNotifications().then(function (res) {
      setNotifications(res);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, null, state.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, state.error), !!notifications.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-action-bar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-action-bar__spacer"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["LinkButton"], {
    icon: "channel-add",
    href: "alerting/notification/new"
  }, "New channel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "filter-table filter-table--hover"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      minWidth: '200px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      minWidth: '100px'
    }
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    style: {
      width: '1%'
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, notifications.map(function (notification) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: notification.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "link-td"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "alerting/notification/".concat(notification.id, "/edit")
    }, notification.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "link-td"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "alerting/notification/".concat(notification.id, "/edit")
    }, notification.type)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["HorizontalGroup"], {
      justify: "flex-end"
    }, notification.isDefault && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      disabled: true,
      variant: "secondary",
      size: "sm"
    }, "default"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "destructive",
      icon: "times",
      size: "sm",
      onClick: function onClick() {
        deleteNotification(notification.id);
        setNotifications(notifications.filter(function (notify) {
          return notify.id !== notification.id;
        }));
        fetchNotifications();
      }
    }))));
  })))), !(notifications.length || state.loading) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "There are no notification channels defined yet",
    buttonIcon: "channel-add",
    buttonLink: "alerting/notification/new",
    buttonTitle: "Add channel",
    proTip: "You can include images in your alert notifications.",
    proTipLink: "http://docs.grafana.org/alerting/notifications/",
    proTipLinkTitle: "Learn more",
    proTipTarget: "_blank"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationsListPage);

/***/ })

}]);
//# sourceMappingURL=NotificationsListPage.cffcc0d0f2d99877a1f4.js.map