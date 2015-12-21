var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app'
  ],

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    root: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'src/components')
    ],
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ],
        exclude: /node_modules/
      },
      {test: /\.css$/, loaders: ['style', 'css', 'postcss'], include: /node_modules/},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.gif/, loader: 'url-loader?limit=10000&mimetype=image/gif'},
      {test: /\.jpg/, loader: 'url-loader?limit=10000&mimetype=image/jpg'},
      {test: /\.png/, loader: 'url-loader?limit=10000&mimetype=image/png'}
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      },
      __DEV__: process.env.NODE_ENV === 'development'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  postcss: [
    require('autoprefixer'),
    require('postcss-color-rgba-fallback'),
    require('postcss-focus'),
    require('postcss-hexrgba'),
    require('postcss-opacity'),
    require('postcss-nested')
  ]
};
