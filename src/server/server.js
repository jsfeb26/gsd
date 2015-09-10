require('./db/connect'); // connects to the mongo database
import express from "express";
import bodyParser from "body-parser";
import qs from 'qs';
import path from 'path';
import React from "react";
import Router from "react-router";
import { Provider } from 'react-redux';
import routes from "../shared/routes"; // react-router routes
import rootReducer from '../shared/reducers/index';
import configureStore from '../shared/store/configureStore';

const app = express();
const port = 5000;
app.set('views', './views');
app.set('view engine', 'jade');
// app.use(require('serve-static')(path.join(__dirname, 'dist')));

// app.use(bodyParser.json());
// app.use(express.static('public'));

// Route Handler for all routes
// And then use react-router to handle all routes
// This is fired every time the sever side recieves a request
app.use(handleRender);

function handleRender(req, res) {
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
    // res.render('index', { content: content });
  });
}

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

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  }
  else {
    console.info(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});

export default app;
