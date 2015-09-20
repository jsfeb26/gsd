import React from 'react';
import Router from 'react-router';
import createRoutes from '../routes';
import { Provider } from 'react-redux';

const getFetchData = (component = {}) => {
  // recursively go through all of the components in the routes
  // and if they have a mehtod called fetchData then call it
  // Wrapped Component is from react-router?
  return component.WrappedComponent ? getFetchData(component.WrappedComponent) : component.fetchData;
};

export function createTransitionHook(store) {
  return (nextState, transition, callback) => {
    const { params, location: { query } } = nextState;
    const promises = nextState.branch
      .map(route => route.component)                              // pull out individual route components
      .filter((component) => getFetchData(component))             // only get ones that have a static fetchData()
      .map(getFetchData)                                          // pull out fetch data methods
      .map(fetchData => fetchData(store, params, query || {}));   // invoke fetchData methods and save promises
    Promise.all(promises)
      .then(() => {
        callback();
      }, (error) => {
        callback(error);
      });
  };
};

export default function universalRouter(location, history, store) {
  const routes = createRoutes(store);
  return new Promise((resolve, reject) => {
    Router.run(routes, location, [createTransitionHook(store)], (error, initialState, transition) => {
      if (error) {
        return reject(error);
      }

      if (transition && transition.redirectInfo) {
        return resolve({
          transition,
          isRedirect: true
        });
      }

      if (history) { // only on client side
        initialState.history = history;
      }

      const component = (
        <Provider store={store} key="provider">
          { () => <Router {...initialState} children={routes} /> }
        </Provider>
      );

      return resolve({
        component,
        isRedirect: false
      });
    });
  });
}
