import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import config from './config';
import PrettyError from 'pretty-error';

import * as actions from './actions/index';

const pretty = new PrettyError();
const app = express();
app.use(session({
  secret: 'thinkful',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));
app.use(bodyParser.json());

app.use((req, res) => {
  const matcher = req.url.split('?')[0].split('/').slice(1);

  let action = false;
  let params = null
  let apiActions = actions;
  let sliceIndex = 0;

  for (let actionName of matcher) {
    if (apiActions[actionName]) {
      action = apiActions[actionName];
    }

    if (typeof action === 'function') {
      params = matcher.slice(++sliceIndex);
      break;
    }

    apiActions = action;
    ++sliceIndex;
  }

  if (action && typeof action == 'function') {
    action(req, params)
      .then((result) => {
        res.json(result);
      }, (reason) => {
        if (reason && reason.redirect) {
          res.redirect(reason.redirect);
        }
        else {
          console.error('API ERROR:', pretty.render(reason));
          res.status(reason.status || 500).json(reason);
        }
      });
  }
  else {
    res.status(404).end('NOT FOUND');
  }
});

if (config.apiPort) {
  app.listen(config.apiPort, (err) => {
    if (err) {
      console.error(err);
    }

    console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
    console.info('==> 💻  Send requests to http://localhost:%s', config.apiPort);
  });
}
else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
