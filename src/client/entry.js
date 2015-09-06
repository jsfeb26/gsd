// Entry point for client

import React from "react";
import Router from "react-router";
import { Provider } from 'react-redux';
import configureStore from '../shared/store/configureStore';
import rootReducer from '../shared/reducers/index';

// get initial state from server render initial state
const initialState = window.__INITIAL_STATE__;

// redux store
const store = configureStore(rootReducer, initialState);

// element where we mount React JavaScript
let rootElement = document.getElementById('react-app');

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  // creating react component based on route and react-router routes
  // Mount component onto rootElement
  // Again Handler is a built in react-router componenent
  // Instead of renderToString like in server.js we use React.render
  React.render(
    <Provider store={store}>
      {() => <Handler />}
    </Provider>,
    rootElement
  );
});
