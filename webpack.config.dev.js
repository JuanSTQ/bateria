const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'development',
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
      inject: "true",
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
  devServer:{
    contentBase: path.join(__dirname,'dist'),
    compress: true,
    port: 3004,
    open: true,
  }


}