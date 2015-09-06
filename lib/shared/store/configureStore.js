'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = configureStore;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

// redux middleware for async actions

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2['default'])(_redux.createStore);

function configureStore(initialState) {
  var store = createStoreWithMiddleware(_reducers2['default'], initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', function () {
      var nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

module.exports = exports['default'];