"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// connects to the mongo database

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactRedux = require('react-redux');

var _sharedRoutes = require("../shared/routes");

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

// react-router routes

var _sharedReducersIndex = require('../shared/reducers/index');

var _sharedReducersIndex2 = _interopRequireDefault(_sharedReducersIndex);

var _sharedStoreConfigureStore = require('../shared/store/configureStore');

var _sharedStoreConfigureStore2 = _interopRequireDefault(_sharedStoreConfigureStore);

require('./db/connect');

var app = (0, _express2["default"])();
var port = 5000;

// app.use(bodyParser.json());
// app.use(express.static('public'));

// Route Handler for all routes
// And then use react-router to handle all routes
// This is fired every time the sever side recieves a request
app.use(handleRender);

function handleRender(req, res) {
  var params = _qs2["default"].parse(req.query);

  var initialState = {};

  // Create a new Redux store instance
  var store = (0, _sharedStoreConfigureStore2["default"])(initialState);

  // use req.url to render a string based on react-router routes
  // Handler is built in to react-router
  _reactRouter2["default"].run(_sharedRoutes2["default"], req.url, function (Handler) {
    // react code rendered to string
    // need to still wrap with Provider
    var content = _react2["default"].renderToString(_react2["default"].createElement(
      _reactRedux.Provider,
      { store: store },
      function () {
        return _react2["default"].createElement(Handler, null);
      }
    ));

    // Grab the initial state from our Redux store
    var finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(content, finalState));
  });
}

function renderFullPage(content, initialState) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n        <title>GSD - Social Productivity App</title>\n        <meta charset=\"UTF-8\">\n        <meta http-equiv=\"X-VA-Compatible\", content=\"IE=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\">\n      </head>\n      <body>\n        <div id=\"react-app\">" + content + "</div>\n        <script>\n          window.__INITIAL_STATE__ = " + JSON.stringify(initialState) + ";\n        </script>\n        <script scr=\"http://localhost:5001/js/app.js\"></script>\n      </body>\n    </html>\n    ";
}

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Listening on port " + port + ". Open up http://localhost:" + port + "/ in your browser.");
  }
});

exports["default"] = app;
module.exports = exports["default"];