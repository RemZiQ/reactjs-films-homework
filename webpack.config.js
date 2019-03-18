const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'build'),
  },
   module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'assets/images/[name].[ext]'}  
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'assets/fonts/[name].[ext]'} 
          }

       ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin('css/styles.css')
  ]
};