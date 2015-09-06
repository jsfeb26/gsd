import React, { Component, PropTypes } from 'react';
import Item from './Item';

export default class ItemList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) =>
          <Item {...item}
                key={index}
                onClick={() => this.props.onItemClick(index)} />
        )}
      </ul>
    );
  }
}

ItemList.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};

