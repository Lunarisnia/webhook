const http = require('http');
const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
const appMiddlewares = require('./middlewares/app.middleware');

app.use(appMiddlewares);
app.use('/static', express.static('public'));
app.use(indexRoutes);

const server = http.createServer(app);

module.exports = server;