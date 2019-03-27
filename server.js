const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();

if (process.env.NODE_ENV === 'development '){
  const config = require('./config/webpack/webpack.config');
  const compiler = webpack(config);

  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));

  // Serve the files on port 3000.
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
  });
}

if(process.env.NODE_ENV === 'production '){
  app.use(express.static('dist'));
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, function () {
    console.log('Example app listening on port 3000! 2222\n');
  });
}
