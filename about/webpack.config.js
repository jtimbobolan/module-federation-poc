const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;
const { exposeVueComponentAsReactBridge } = require('@module-federation/bridge-vue3');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: '@vue/runtime-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'about',
      filename: 'remoteEntry.js',
      remotes: {
        host: 'host@http://localhost:3001/remoteEntry.js',
      },
      exposes: {
        './AboutReact': './src/main.js',
      },
      shared: {
        vue: { singleton: true, requiredVersion: false, eager: true },
        "vue-router": { singleton: true, requiredVersion: false, eager: true },
        '@reduxjs/toolkit': { singleton: true, requiredVersion: false },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 3003,
    open: true,
    historyApiFallback: true,
  },
};
