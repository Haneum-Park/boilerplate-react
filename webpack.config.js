const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = !((process.env.NODE_ENV || 'development') === 'development');

const port = isProduction ? 80 : 8000;
const host = isProduction ? '0.0.0.0' : 'localhost';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: ['./src/index.js'],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(path.resolve(), '/dist'),
    publicPath: '/',
    clean: true,
  },
  devtool: 'source-map',
  optimization: {
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
              !isProduction && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|pdf|ico|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.txt'],
    modules: [path.resolve(__dirname, '.'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@config': path.resolve(__dirname, 'config'),
      '@src': path.resolve(__dirname, 'src'),
      '@comp': path.resolve(__dirname, 'src/components'),
      '@atomic': path.resolve(__dirname, 'src/components/atomics'),
      '@molecule': path.resolve(__dirname, 'src/components/molecules'),
      '@organism': path.resolve(__dirname, 'src/components/organisms'),
      '@page': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/stores'),
      '@router': path.resolve(__dirname, 'src/routers'),
      '@hook': path.resolve(__dirname, 'src/hooks'),
      '@image': path.resolve(__dirname, 'src/images'),
      '@util': path.resolve(__dirname, 'src/utils'),
      '@static': path.resolve(__dirname, 'src/statics'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        argv: JSON.stringify(process.argv),
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          mode: JSON.stringify(process.env.mode ? process.env.mode : 'production'),
        },
      },
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/robots.txt', to: 'robots.txt' },
        { from: './public/sitemap.xml', to: 'sitemap.xml' },
      ],
    }),
  ],
  devServer: {
    host,
    port,
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
};
