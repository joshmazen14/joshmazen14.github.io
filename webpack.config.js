const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const { JSDOM } = require('jsdom');

const dom = new JSDOM();

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    inline: false,
    hot: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    }
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true,
      globals: {
        window: dom.window,
        document: dom.window.document,
        navigator: dom.window.navigator
      }
    }),
    new LiveReloadPlugin(),
  ],
}