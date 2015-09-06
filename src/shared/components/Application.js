import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddItem from './AddItem';
import ItemList from './ItemList';
import Footer from './Footer';
import * as ItemActions from '../actions/ItemActions';

class Application extends Component {
  render() {
    // Injected by connect() call:
    // const { dispatch, visibleItems, visibilityFilter } = this.props;
    return (
      <div>
        Test
      </div>
    );
  }
}

Application.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemActions, dispatch);
}

export default connect(mapDispatchToProps)(Application);
