"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// connects to the mongo database

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

//import itemRoutes from "./routes/item";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

//app.use(bodyParser.json());
//app.use(express.static('public'));

var _sharedRoutes = require("../shared/routes");

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

require('./db/connect');
var app = (0, _express2["default"])();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/*', function (req, res) {
  _reactRouter2["default"].run(_sharedRoutes2["default"], req.url, function (Handler) {
    var content = _react2["default"].renderToString(_react2["default"].createElement(Handler, null));
    res.render('index', { content: content });
  });
});

//app.use('/', itemRoutes);
//app.use('*', function(req, res) {
//  res.status(404).json({message: 'Not Found' });
//});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

exports.app = app;