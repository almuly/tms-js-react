const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  watch: true, // or flag in package.json
  devServer: {
    port: 8000,
    hot: true,
    open: true, // or flag in package.json
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
