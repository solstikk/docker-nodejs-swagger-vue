const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, './static')));
app.listen(8080, () => {
  console.log('Example app listening on port 8080!\n');
});
