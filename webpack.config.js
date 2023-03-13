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
        test: /\.(d.ts|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
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
        test: /\.(png|jpg|jpeg|gif|pdf|ico|svg|)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              fallback: 'file-loader',
            },
          },
        ],
      },
      {
        test: /\.(woff2|woff2|ttf|otf|eot)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              fallback: 'file-loader',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.txt'],
    modules: [path.resolve(__dirname, '.'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@public': path.resolve(__dirname, 'public'),
      '@src': path.resolve(__dirname, 'src'),
      '@comp': path.resolve(__dirname, 'src/components'),
      '@atom': path.resolve(__dirname, 'src/components/atoms'),
      '@block': path.resolve(__dirname, 'src/components/blocks'),
      '@page': path.resolve(__dirname, 'src/components/pages'),
      '@store': path.resolve(__dirname, 'src/stores'),
      '@router': path.resolve(__dirname, 'src/routers'),
      '@hook': path.resolve(__dirname, 'src/hooks'),
      '@util': path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        argv: JSON.stringify(process.argv),
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/favicon.ico'),
    }),
  ],
};
