var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  context: path.join(__dirname, '..', '/root/src'),
  entry: {
    // Add each page's entry here
    index: './index/start',
    message: './message/start',
    wedding: './wedding/start',
  },
  output: {
    path: path.join(__dirname, '..', '/root/build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')), // judge if dev environment.
      __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')) // judge if secret environment.
    }),
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: './../templates/index.dev.html',
      filename: 'index.html',
      chunks: ['index'],
      favicon: './../assets/images/favicon.ico',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './../templates/index.dev.html',
      filename: 'message.html',
      chunks: ['message'],
      favicon: './../assets/images/favicon.ico',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './../templates/index.dev.html',
      filename: 'wedding.html',
      chunks: ['wedding'],
      favicon: './../assets/images/favicon.ico',
      inject: 'body'
    })
  ],
  module: {
    perLoaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      },
      {
        test: /.reactx$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      ,
      {
        test: /.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=10000!img?progressive=true'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.reactx$/,
        loader: 'reactx-loader'
      },
    ],
    noParse: []
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.reactx', 'react'],
    alias: {}
  },
  devtool: 'eval-source-map',
  jshint: {
    "esnext": true
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: {
      index: 'index.html',
      rewrites: [
        { from: /\/index/, to: '/index.html' },
        { from: /\/message/, to: '/message.html' },
        { from: /\/wedding/, to: '/wedding.html' },
      ]
    },
    // proxy: {
    //   '/api/v1/*': {
    //     target: 'http://123.59.79.196',
    //     secure: false
    //   }
    // }
  },
  reactx: {
    // loaders for each langs
    loaders: {
      js: 'babel',
      coffee: 'babel!coffee',
      sass: 'style-loader!css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass'
    },
    // whether use source map
    sourceMap: true
  }
};

module.exports = config;