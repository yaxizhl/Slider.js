const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  // entry: ['@babel/polyfill', './src/slider.js'],
  entry: './src/slider.js',
  devServer: {
    index: 'index.html',
    contentBase: ['./', './dist']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: 'Slider.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
