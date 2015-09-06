'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _itemReducer = require('./itemReducer');

var _itemReducer2 = _interopRequireDefault(_itemReducer);

var rootReducer = (0, _redux.combineReducers)({
  itemReducer: _itemReducer2['default']
});

exports['default'] = rootReducer;
module.exports = exports['default'];