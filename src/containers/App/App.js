import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createTransitionHook } from '../../helper/universalRouter';
import AddItem from '../../shared/components/AddItem';
import ItemList from '../../shared/components/ItemList';
import Footer from '../../shared/components/Footer';
import Header from '../../shared/components/Header';
import * as ItemActions from '../../shared/actions/ItemActions';

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

@connect(
  state => ({ items: state.items })
  // dispatch => bindActionCreators(ItemActions, dispatch)
)

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
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

  // static fetchData(store) {
  //   console.log('fetinch mad data');
  // }
  // <Header addItem={this.props.ItemActions.addItem} />
  // <ItemList items={items} />

  render() {
    const { items } = this.props;

    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">
            GSD List
          </h2>
          {this.props.children}
        </div>
      </div>
    );
  }
}
