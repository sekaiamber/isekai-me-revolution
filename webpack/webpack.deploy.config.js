var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var WebpackShellPlugin = require('webpack-shell-plugin');

var routers = require('./routers.deploy.json').routers;

var entry = {
  vendors: ['react', 'react-dom']
};
routers.forEach((r) => {
  entry[r.name] = r.entry;
});
var plugins = routers.map(r => new HtmlWebpackPlugin({
  template: r.template,
  filename: r.filename,
  chunks: [r.name, 'vendors'],
  favicon: './assets/images/favicon.ico',
  inject: 'body',
  hash: true
}));

var config = {
  context: path.join(__dirname, '..', '/root'),
  entry,
  output: {
    path: path.join(__dirname, '..', '/root/dist'),
    publicPath: '//assets.isekai.me/',
    filename: '[name].bundle.[hash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')), // judge if dev environment.
      __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')) // judge if secret environment.
    }),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 20000 }),
    new webpack.optimize.OccurenceOrderPlugin(false),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true
    }),
    new CommonsChunkPlugin('vendors', 'vendors.[hash].js', Infinity),
    new ExtractTextPlugin("[name].[hash].css"),
    new webpack.optimize.DedupePlugin(),
    new WebpackShellPlugin({
      onBuildExit: [
        'echo',
        'echo ==============',
        'echo      WORK',
        'echo ==============',
        'echo',
        'node webpack/deploy.js',
      ]
    })
  ].concat(plugins),
  module: {
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass')
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
    ]
  },
  resolve: {
    // 設定後只需要寫 require('file') 而不用寫成 require('file.jsx')
    extensions: ['', '.js', '.json', '.jsx', '.reactx', 'react']
  },
  externals: {
    react: "React",
    'react-dom': "ReactDOM",
    redux: "Redux",
    'react-redux': "ReactRedux",
    lodash: "_",
    wilddog: "wilddog",
    marked: "marked",
    jquery: "jQuery",
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