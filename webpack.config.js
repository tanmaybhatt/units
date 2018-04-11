var path = require('path');
var prod = process.env.NODE_ENV == 'production'
module.exports = {
  entry: ['./src/index.js'],
  output: {
    library: 'Units',
    path: path.resolve(__dirname, 'dist'),
    filename: 'Units.'+(prod? 'min.': '')+'js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname), "node_modules"],    
  },
  mode: process.env.NODE_ENV || 'development'
};