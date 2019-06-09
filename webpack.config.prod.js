const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[hash].js'
  },
  module: {
    rules: [
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
      },
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
});