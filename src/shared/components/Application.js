import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddItem from './AddItem';
import ItemList from './ItemList';
import Footer from './Footer';
import Header from './Header';
import * as ItemActions from '../actions/ItemActions';

class Application extends Component {
  render() {
    // Injected by connect() call:
    // const { dispatch, visibleItems, visibilityFilter } = this.props;
    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">
            GSD List
          </h2>
          <Header />
        </div>
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
