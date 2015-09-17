require('./server/db/connect'); // connects to the mongo database
import Express from "express";
import qs from 'qs';
import path from 'path';
import React from "react";
import Router from "react-router";
import { Provider } from 'react-redux';
import httpProxy from 'http-proxy';
import PrettyError from 'pretty-error';
import favicon from 'serve-favicon';
import compression from 'compression';

import routes from "./shared/routes"; // react-router routes
import rootReducer from './shared/reducers/index';
import configureStore from './shared/store/configureStore';
import config from './config';

// Settings from config file
const port = config.port;
const apiPort = config.apiPort;
const appName = config.app.name;

const pretty = new PrettyError();
const app = Express();
// proxy for api server
const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:' + apiPort
});

// use compression to serve static files
// app.use(compression());
// app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
// app.use(require('serve-static')(path.join(__dirname, '..', 'static')));

// Proxy to API server
// handle all requests to /api/*
app.use('/api', (req, res) => {
  proxy.web(req, res);
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
// need to investigate this
proxy.on('error', (error, req, res) => {
  let json;
  console.log('proxy error', error);
  if (!res.headersSent) {
    res.writeHead(500, {'content-type': 'application/json'});
  }

  json = { error: 'proxy_error', reason: error.message };
  res.end(JSON.stringify(json));
});

// Route Handler for all routes other then /api/*
// And then use react-router to handle all routes
app.use((req, res) => {
  // if (__DEVELOPMENT__) {
  //   // Do not cache webpack stats: the script file would change since
  //   // hot module replacement is enabled in the development env
  //   webpackIsomorphicTools.refresh();
  // }

  const params = qs.parse(req.query);

  let initialState = {};

  // Create a new Redux store instance
  const store = configureStore(initialState);

  // use req.url to render a string based on react-router routes
  // Handler is built in to react-router
  Router.run(routes, req.url, Handler => {
    // react code rendered to string
    // need to still wrap with Provider
    let content = React.renderToString(
      <Provider store={store}>
        { () => <Handler /> }
      </Provider>);

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(content, finalState));
  });
});

function renderFullPage(content, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>GSD - Social Productivity App</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-VA-Compatible", content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      </head>
      <body>
        <div id="react-app">${content}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="http://localhost:5001/dist/bundle.js"></script>
      </body>
    </html>
    `;
}

if (port) {
  app.listen(port, (error) => {
    if (error) {
      console.error(error);
    }

    console.info('----\n==> ✅  %s is running.', appName);
    console.info('==> 💻  Open http://localhost:%s in a browser to view the app.', port);
  });
}
else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}

// probably won't need to export
export default app;
