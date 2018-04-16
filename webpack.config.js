var path = require('path');
var prod = process.env.NODE_ENV == 'production'
var config = {
  entry: ['./src/index.js'],
  output: {
    library: 'Units',
    path: path.resolve(__dirname, 'dist'),
    filename: 'Units.'+(prod? 'min.': '')+'js',
    libraryTarget: 'umd',
    umdNamedDefine: true
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

var configA = {
  ...config,
  output: {
    library: 'Units',
    path: path.resolve(__dirname, 'dist'),
    filename: 'Units.common.'+(prod? 'min.': '')+'js',
    libraryTarget: 'commonjs2'
  },
}

var configB = {
  ...config,
    output: {
      library: 'Units',
      path: path.resolve(__dirname, 'dist'),
      filename: 'Units.'+(prod? 'min.': '')+'js',
      libraryTarget: 'global'
    },
}

module.exports = [
  configA, configB
]