'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = items;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _actionsItemActionsJs = require('../actions/ItemActions.js');

function items(state, action) {
  if (state === undefined) state = [];

  switch (action.type) {
    case _actionsItemActionsJs.ADD_ITEM:
      return [].concat(_toConsumableArray(state), [{
        text: action.value,
        completed: false
      }]);
    case _actionsItemActionsJs.COMPLETE_ITEM:
      return [].concat(_toConsumableArray(state.slice(0, action.id)), [Object.assign({}, state[action.id], {
        completed: true
      })], _toConsumableArray(state.slice(action.id + 1)));
    default:
      return state;
  }
}

module.exports = exports['default'];