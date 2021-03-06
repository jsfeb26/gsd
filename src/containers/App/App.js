import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createTransitionHook } from '../../helpers/universalRouter';
import AddItem from '../../components/AddItem';
import ItemList from '../../components/ItemList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as ItemActions from '../../redux/actions/ItemActions';

const title = 'GSD - Social Productivity App';
const description = 'Social Productivity App for Getting Things Done';

const meta = {
  title,
  description,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:site_name': title,
      'og:locale:': 'en_US',
      'og:title': title,
      'og:description': description
    }
  }
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { router, store } = this.context;
    this.transitionHook = createTransitionHook(store);
    router.addTransitionHook(this.transitionHook);
  }

  componentWillReceiveProps(nextProps) {
    // can handle login logout
  }

  componentWillUnmount() {
    const { router } = this.context;
    router.removeTransitionHook(this.transitionHook);
  }

  render() {
    const { children } = this.props;

    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">
            GSD List
          </h2>
          {children}
        </div>
      </div>
    );
  }
}
