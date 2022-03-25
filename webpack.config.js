const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    clean: true,
  },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/favicon.ico'),
    }),
  ],
};
