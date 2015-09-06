'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.addItem = addItem;
exports.completeItem = completeItem;
var ADD_ITEM = 'ADD_ITEM';
exports.ADD_ITEM = ADD_ITEM;
var COMPLETE_ITEM = 'COMPLETE_ITEM';

exports.COMPLETE_ITEM = COMPLETE_ITEM;

function addItem(text) {
  return { type: types.ADD_ITEM, value: text };
}

function completeItem(index) {
  return { type: types.COMPLETE_ITEM, id: index };
}