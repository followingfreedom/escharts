var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:['./index.js'],
  output: {
    path:__dirname+"/build/",
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel-loader',
        query: {presets: ['es2015','react']},
          include: path.join(__dirname, '.')
      },
      // css-modules need
      {
        test: /\.css$/,
          loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
      }
    ]
  },
  devServer:{
        hot:true,
        inline:true,
        proxy: {
            '/data/api/*': {
                target: 'http://localhost:9090',
                secure: false
            }
        }
  }
};