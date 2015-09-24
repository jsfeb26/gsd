import superagent from 'superagent';
import config from '../config';

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class ApiClient_ {
  constructor(req) {
    // loop through each request method
    // return a new promise for each one
    // if the request is successfull then resolve each promise
    console.log('apiclient');
    ['get', 'post', 'put', 'patch', 'del']
      .forEach((method) => {
        this[method] = (path, options) => {
          return new Promise((resolve, reject) => {
            console.log('apiClient ' + 'promise');
            console.log(path);
            const request = superagent[method](this.formatUrl(path));
            console.log(request);
            if (options && options.params) {
              request.query(options.params);
            }

            // if (isServer) {
            //   // if there is a cookie set as the new request cookie
            //   if (req.get('cookie')) {
            //     request.set('cookie', req.get('cookie'));
            //   }
            // }

            // if there is an options.data send it with the new request
            if (options && options.data) {
              request.send(options.data);
            }

            request.end((err, res) => {
              if (err) {
                reject(res.body || err);
              }
              else {
                resolve(res.body);
              }
            });
          });
        };
      });
  }

  formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? '/' + path : path;
    console.log(adjustedPath);
    if (isServer) {
      console.log('isServer');
      // Preped host and port of the API server to the path
      return 'http://localhost:' + config.apiPort + adjustedPath;
    }
    console.log('api');

    // Prepend '/api' to the relative URL, to proxy to API server
    return '/api' + adjustedPath;
  }
}

const ApiClient = ApiClient_;

export default ApiClient;
