const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module:{
    rules :
    [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: 'assets/images'
        },
        {
          from: path.resolve(__dirname, 'src/assets/songs'),
          to: 'assets/songs'
        },
        {
          from: path.resolve(__dirname, 'src/assets/styles'),
          to: 'assets/styles'
        }
      ]
    })
  ],
  optimization:{
    minimize: true,
    minimizer:[

      new TerserPlugin()
    ]
  }


}