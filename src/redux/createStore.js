import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; // redux middleware for async actions
import rootReducer from '../redux/reducers';
import createMiddleware from './middleware/clientMiddleware';

export default function createApiClientStore(client, data) {
  const middleware = createMiddleware(client);
  let finalCreateStore = applyMiddleware(middleware)(createStore);

  const store = finalCreateStore(rootReducer, data);
  store.client = client;

  // const { devTools, persistState } = require('redux-devtools');
  // finalCreateStore = compose(
  //   applyMiddleware(middleware),
  //   devTools(),
  //   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  // )(createStore);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../redux/reducers', () => {
      const nextRootReducer = require('../redux/reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
