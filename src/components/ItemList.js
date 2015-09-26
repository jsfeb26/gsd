import React, { Component, PropTypes } from 'react';
import Item from './Item';

export default class ItemList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderList() {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return <h4>
        Add an item to get started.
      </h4>
    }
    else {
      return this.props.items.map(item => {
        return <li key={item.id}>
          {item.text}
        </li>
      });
    }
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};

