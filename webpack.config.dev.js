var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [ // entry point for webpack-dev-server to enter
    'webpack-dev-server/client?http://localhost:5001',
    'webpack/hot/only-dev-server',
    './src/client/entry',
  ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'app.js',
    publicPath: 'http://localhost:5001/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
}
