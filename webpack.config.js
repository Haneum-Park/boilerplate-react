const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
// typescript
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = !(
  (process.env.NODE_ENV || 'development') === 'development'
);

if (process.env.mode === 'development') console.log('개발모드입니다. d-ocean-back을 켜두시기 바랍니다.');

const port = isProduction ? 80 : 8000;
const host = isProduction ? '0.0.0.0' : 'localhost';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    clean: true,
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
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
        use: 'html-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.()$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: './dist',
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|pdf|ico)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]',
            publicPath: './dist/',
            limit: 10000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, '.'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, './'),
      '@config': path.resolve(__dirname, 'config/'),
      '@image': path.resolve(__dirname, 'src/public/images/'),
      '@src': path.resolve(__dirname, 'src/'),
      '@comp': path.resolve(__dirname, 'src/components/'),
      '@store': path.resolve(__dirname, 'src/stores/'),
      '@util': path.resolve(__dirname, 'src/utils/'),
      '@hook': path.resolve(__dirname, 'src/hooks/'),
      '@router': path.resolve(__dirname, 'src/routers/'),
      '@page': path.resolve(__dirname, 'src/pages/'),
      '@constant': path.resolve(__dirname, 'src/constants/'),
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
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: './public/favicon.ico',
    }),
    new ForkTsCheckerWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     { from: './public/robots.txt', to: 'robots.txt' },
    //     { from: './public/sitemap.xml', to: 'sitemap.xml' },
    //     { from: './public/ogImage.png', to: 'ogImage.png' },
    //   ],
    // }),
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

if (isProduction) {
  module.exports.plugins.push(new uglifyjsWebpackPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
  }));
}