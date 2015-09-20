import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ""
    };
  }
  static propTypes = {
    text: PropTypes.string,
    addItem: PropTypes.func.isRequired
  };

  handleClick () {
    this.saveItem();
  }

  handleInputChange (e) {
    this.setState({ text: e.target.value.trim() });
  }

  handleEnter (e) {
    if (e.which === 13) {
      this.saveItem();
    }
  }

  saveItem () {
    if (this.state.text.length > 0) {
      this.props.addItem(this.state.text);
      this.setState({ text: "" });
    }
  }

  render() {
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange.bind(this)}
        onKeyDown={this.handleEnter.bind(this)}
        type="text"
        className="form-control" />

      <span className="input-group-btn">
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-default"
          type="button">
          Add
        </button>
      </span>
    </div>
  }
}
