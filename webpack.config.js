// This file dictates how the local webpack package bundles and compiles the
// JSX code that react uses into older JS code that can be used in most browsers

// HTML webpack inserts the code into the app/index.html <body> tag
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

// this defines which files are bundled and by what.
// our JS files are bundled by a package called Babel, which takes the react-JSX
// components and translates them into more compatible JS

// The webpack package takes an "entry" js file and bundles our code into an "output" js file
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
