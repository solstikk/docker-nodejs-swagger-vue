const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const swaggerDoc = require('./swagger.json');
const swaggerTools = require('swagger-tools');

const app = express();
const compiler = webpack(config);

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, './static')));

swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerMetadata());
  app.use(middleware.swaggerValidator({
    validateResponse: true,
  }));
  app.use(middleware.swaggerRouter({
    controllers: path.join(__dirname, 'api/'),
  }));
  app.use(middleware.swaggerUi());
  app.use((err, req, res, next) => {
    console.log(JSON.stringify(err));
    if (err.failedValidation) {
      res.status(400).json({ message: err.message, results: err.results });
    } else {
      res.status(500).json({ message: err.message });
    }
    next();
  });

  app.listen(8080, () => {
    console.log('Listening on port 8080!\n');
  });
});
