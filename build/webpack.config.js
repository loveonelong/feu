const webpack = require('webpack')
const path = require('path')

const package = require('../package.json')

const rootPath = path.resolve(__dirname, '../')

let config = {
  entry: path.resolve(rootPath, './src/main.ts'),
  output: {
    filename: `${package.name}.min.js`,
    path: path.resolve(rootPath, 'dist'),
    library: `${package.name}`,
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    loaders: [
      // {
      //   test: /\.js$/,
      //   loader: "babel-loader",
      //   query: {
      //     presets: ['es2015']
      //   },
      //   include: [path.resolve(__dirname, '../src')]
      // },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, '../src')]

      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  }
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  config.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ])
}

module.exports = config
