import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import * as ItemActions from '../../shared/actions/ItemActions';

@connect(
  state => ({ items: state.items }),
  dispatch => bindActionCreators(ItemActions, dispatch)
)
export default class Home extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired
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
