// Entry point for client
import React from "react";
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Location from 'react-router/lib/Location';
import queryString from 'query-string';

import createStore from './redux/createStore';
import ApiClient from './helpers/ApiClient';
import universalRouter from './helpers/universalRouter';

const client = new ApiClient(true);
const history = new BrowserHistory();

// get initial state from server render initial state
const initialState = window.__INITIAL_STATE__;

// redux store
const store = createStore(client, initialState);

// element where we mount React JavaScript
let rootElement = document.getElementById('react-app');

const search = document.location.search;
const query = search && queryString.parse(search);
const location = new Location(document.location.pathname, query);

universalRouter(location, history, store)
  .then(({ component }) => {
    React.render(component, rootElement);
  }, (error) => {
    console.error(error);
  });

// Router.run(routes, Router.HistoryLocation, (Handler, state) => {
//   // creating react component based on route and react-router routes
//   // Mount component onto rootElement
//   // Again Handler is a built in react-router componenent
//   // Instead of renderToString like in server.js we use React.render
//   React.render(
//     <Provider store={store}>
//       {() => <Handler />}
//     </Provider>,
//     rootElement
//   );
// });

// if (process.env.NODE_ENV !== 'production') {
//   window.React = React; // enable debugger
//   const reactRoot = window.document.getElementById('content');
//
//   if (!reactRoot || !reactRoot.firstChild || !reactRoot.firstChild.attributes || !reactRoot.firstChild.attributes['data-react-checksum']) {
//     console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
//   }
// }
