const express = require('express');

const SiteController = require('./controllers/SiteController');

const routes = express.Router();

routes.get('/', SiteController.index);

module.exports = routes;