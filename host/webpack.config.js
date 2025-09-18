const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        home: 'home@http://localhost:3002/remoteEntry.js',
        about: 'about@http://localhost:3003/remoteEntry.js',
        angularRemoteApp: 'angularRemoteApp@http://localhost:3004/remoteEntry.js',
        careers: 'careers@http://localhost:3005/remoteEntry.js',
        support: 'support@http://localhost:3006/remoteEntry.js',
      },
      exposes: {
        "./store": "./src/store/index.ts",
      },
      shared: {
        react: { singleton: true, requiredVersion: false, eager: true },
        'react-dom': { singleton: true, requiredVersion: false, eager: true },
        '@reduxjs/toolkit': { singleton: true, requiredVersion: false, eager: true},

      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 3001,
    open: true,
    historyApiFallback: true,
  },
};
