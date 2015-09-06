'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _ItemReducer = require('./ItemReducer');

var _ItemReducer2 = _interopRequireDefault(_ItemReducer);

var rootReducer = (0, _redux.combineReducers)({
  ItemReducer: _ItemReducer2['default']
});

exports['default'] = rootReducer;
module.exports = exports['default'];