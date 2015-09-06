'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ItemText = (function (_Component) {
  _inherits(ItemText, _Component);

  function ItemText(props, context) {
    _classCallCheck(this, ItemText);

    _get(Object.getPrototypeOf(ItemText.prototype), 'constructor', this).call(this, props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  _createClass(ItemText, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var text = e.target.value.trim();
      if (e.which == 13) {
        this.props.onSave(text);

        if (this.props.newItem) {
          this.setState({ text: '' });
        }
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ text: e.target.value });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      if (!this.props.newItem) {
        this.props.onSave(e.target.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('input', { className: (0, _classnames2['default'])({
          edit: this.props.editing,
          'new-todo': this.props.newItem
        }),
        type: 'text',
        placeholder: this.props.placeholder,
        autoFocus: 'true',
        value: this.state.text,
        onBlur: this.handleBlur.bind(this),
        onChange: this.handleChange.bind(this),
        onKeyDown: this.handleSubmit.bind(this) });
    }
  }]);

  return ItemText;
})(_react.Component);

ItemText.propTypes = {
  onSave: _react.PropTypes.func.isRequired,
  text: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  editing: _react.PropTypes.bool,
  newItem: _react.PropTypes.bool
};

exports['default'] = ItemText;
module.exports = exports['default'];