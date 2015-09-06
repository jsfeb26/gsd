'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _redux = require('redux');

var _ItemReducer = require('./ItemReducer');

var ItemReducer = _interopRequireWildcard(_ItemReducer);

var rootReducer = (0, _redux.combineReducers)(ItemReducer);

exports['default'] = rootReducer;
module.exports = exports['default'];