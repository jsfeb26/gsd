// Entry point for client

"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactRedux = require('react-redux');

var _sharedStoreConfigureStore = require('../shared/store/configureStore');

var _sharedStoreConfigureStore2 = _interopRequireDefault(_sharedStoreConfigureStore);

var _sharedReducersIndex = require('../shared/reducers/index');

var _sharedReducersIndex2 = _interopRequireDefault(_sharedReducersIndex);

// get initial state from server render initial state
var initialState = window.__INITIAL_STATE__;

// redux store
var store = (0, _sharedStoreConfigureStore2["default"])(_sharedReducersIndex2["default"], initialState);

// element where we mount React JavaScript
var rootElement = document.getElementById('react-app');

_reactRouter2["default"].run(routes, _reactRouter2["default"].HistoryLocation, function (Handler, state) {
  // creating react component based on route and react-router routes
  // Mount component onto rootElement
  // Again Handler is a built in react-router componenent
  // Instead of renderToString like in server.js we use React.render
  _react2["default"].render(_react2["default"].createElement(
    _reactRedux.Provider,
    { store: store },
    function () {
      return _react2["default"].createElement(Handler, null);
    }
  ), rootElement);
});