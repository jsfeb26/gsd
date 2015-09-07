'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _AddItem = require('./AddItem');

var _AddItem2 = _interopRequireDefault(_AddItem);

var _ItemList = require('./ItemList');

var _ItemList2 = _interopRequireDefault(_ItemList);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _actionsItemActions = require('../actions/ItemActions');

var ItemActions = _interopRequireWildcard(_actionsItemActions);

var Application = (function (_Component) {
  _inherits(Application, _Component);

  function Application() {
    _classCallCheck(this, Application);

    _get(Object.getPrototypeOf(Application.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Application, [{
    key: 'render',
    value: function render() {
      // Injected by connect() call:
      // const { dispatch, visibleItems, visibilityFilter } = this.props;
      return _react2['default'].createElement(
        'div',
        { className: 'row panel panel-default' },
        _react2['default'].createElement(
          'div',
          { className: 'col-md-8 col-md-offset-2' },
          _react2['default'].createElement(
            'h2',
            { className: 'text-center' },
            'GSD List'
          ),
          _react2['default'].createElement(_Header2['default'], null)
        )
      );
    }
  }]);

  return Application;
})(_react.Component);

Application.propTypes = {};

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(ItemActions, dispatch);
}

exports['default'] = (0, _reactRedux.connect)(mapDispatchToProps)(Application);
module.exports = exports['default'];