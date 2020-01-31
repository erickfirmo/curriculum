const express = require('express');

const SiteController = require('./controllers/SiteController');

const routes = express.Router();

routes.get('/', SiteController.index);

routes.get('/skills', SkillController.index);

routes.post('/skills/store', SkillController.store);

routes.post('/skills/update', SkillController.update);

routes.get('/skills/:skill_id', SkillController.show);

routes.post('/skills/delete/', SkillController.delete);

module.exports = routes;