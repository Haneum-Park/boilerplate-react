/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');
const common = require('./webpack.config');

dotenv.config({
  path: path.resolve(__dirname, '../.dev.env'),
});

module.exports = [
  merge(common, {
    mode: 'development',
    devtool: 'source-map',
    optimization: {
      minimize: false,
      emitOnErrors: true,
      runtimeChunk: {
        name: 'runtime',
      },
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    devServer: {
      host: 'localhost',
      port: process.env.PORT || 8000,
      open: true,
      compress: true,
      historyApiFallback: true,
      hot: true,
      liveReload: true,
      static: {
        publicPath: path.join(__dirname, 'dist'),
        watch: true,
      },
      client: {
        logging: 'log',
        // progress: true,
      },
    },
  }),
];
