// webpack.config.js
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Tell webpack to start bundling our app at app/index.js
  entry: path.resolve(__dirname, 'app'),
  // Output our app to the dist/ directory
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Emit source maps so we can debug our code in the browser
  //devtool: 'source-map',
  // Tell webpack to run our source code through Babel
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.
  plugins: [
    // Configure HtmlPlugin to use our own index.html file
    // as a template.
    // Check out https://github.com/jantimon/html-webpack-plugin
    // for the full list of options.
    new HtmlPlugin({
      template: 'app/index.html'
    }),
    new CopyWebpackPlugin([{
     from: "./app/assets", to: "./assets"
    }])
  ]
}
