'use strict';

HTTP = require('HTTP');

const HOSTNAME = '127.0.0.1',
    PORT = 3333;

const express = require('express'),
    es6Renderer = require('express-es6-template-engine');

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
});

const rootController = require('./routes/index'),
    rangersController = require('./routes/rangers');

module.exports = rootController;
module.exports = rangersController;