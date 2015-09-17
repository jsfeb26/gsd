import config from '../config';

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class ApiClient_ {
  constructor(req) {
    ['get', 'post', 'put', 'patch', 'del']
      .forEach((method) => {
        this[method] = (path, options) => {
          return new Promise((resolve, reject) => {

          });
        };
      });
  }
}
