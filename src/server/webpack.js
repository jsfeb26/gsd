// Simply creates WebpackDevServer and runs it on localhost:5001
// Calls config file from webpack.config.dev.js

import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "../../webpack.config.dev";

var server = new WebpackDevServer(webpack(config), {
  // webpack-dev-server options
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
});

server.listen(5001, "localhost", function() {});
