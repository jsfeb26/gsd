// Simply creates WebpackDevServer and runs it on localhost:5001
// Calls config file from webpack.config.dev.js

var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("../../webpack.config.dev");

new WebpackDevServer(webpack(config), {
  // webpack-dev-server options
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
}).listen(config.devServerPort, 'localhost', function (err, result) {
  if (err) {
    console.error(err);
  }

  console.log('Hot load server listening on port ' + config.devServerPort);
});
