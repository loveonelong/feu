const webpack = require('webpack')
const path = require('path')

const package = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

const config = {
  entry: path.resolve(rootPath, 'main.js'),
  output: {
    filename: `${package.name}.min.js`,
    path: path.resolve(rootPath, 'dist'),
    library: `${package.name}`,
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: { presets: ['es2015'] },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = config
