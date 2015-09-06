// react-router routes that link client and server

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _componentsApplication = require("./components/Application");

var _componentsApplication2 = _interopRequireDefault(_componentsApplication);

exports["default"] = _react2["default"].createElement(
  _reactRouter.Route,
  { handler: _componentsApplication2["default"], path: "/" },
  "//",
  _react2["default"].createElement(_reactRouter.Route, { path: "additem/" })
);
module.exports = exports["default"];