const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    './src/js/index.js',
    './src/scss/all.scss',
  ],
  module: {
    rules: [{
      test: /\.(scss|sass)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
      }
    },
    {
      test: /\.pug/,
      loader: ['html-loader', 'pug-html-loader']
    },
    {
      test: /\.(png|jpe?g|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '../image',
            outputPath: './image',
          },
        },
      ],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/page/index.pug',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, 'dist'),
      filename: 'css/all.css'
    })
  ],
};