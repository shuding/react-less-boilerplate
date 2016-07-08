var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    javascript: path.join(__dirname, 'app', 'app.jsx'),
    html: path.join(__dirname, 'app', 'index.html')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader : 'style!css!less'
      },
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel?presets[]=react,presets[]=es2015'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]          
  },
  resolve : {
    extensions: ['', '.js', '.jsx', '.es6']
  }
};
