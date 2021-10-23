const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

console.log(common);

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
  },
});
