var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./lib/zuma.js",
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "bundle.js"
  },
  // 
  // module: {
  //   rules: [
  //     {
  //       test: [/\.jsx?$/, /\.js?$/],
  //       exclude: /node_modules/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['env', 'react']
  //       }
  //     }
  //   ]
  // },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
