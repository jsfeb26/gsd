import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import { getItems as getItems } from '../../redux/actions/ItemActions';
import * as ItemActions from '../../redux/actions/ItemActions';

@connect(
  state => ({ items: state.Item.items }),
  dispatch => bindActionCreators(ItemActions, dispatch)
)
export default class Home extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired
  }

  static fetchData(store) {
    return store.dispatch(getItems());
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <Header addItem={this.props.addItem} />
        <ItemList items={items} />
      </div>
    );
  }
}
