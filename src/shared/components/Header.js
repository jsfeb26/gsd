import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  handleClick () {
    console.log("I was clicked");
  }
  render() {
    return <div className="input-group">
      <input type="text" className="form-control" />
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default"
          type="button">
          Add
        </button>
      </span>
    </div>
  }
}
