/*!
 * FTP Web Template
 * Copyright 2023 Ricardo do Canto
 */

const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'js', 'template.js') },

  output: { clean: true, filename: 'js/template.js', path: path.resolve(__dirname, 'dist') },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/template.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    open: true,
  },
};
