const express = require('express');

const SiteController = require('./controllers/SiteController');

const routes = express.Router();

routes.get('/', SiteController.index);

routes.get('/skills', SkillController.index);

routes.post('/skills/store', SkillController.store);

routes.post('/skills/update', SkillController.update);

routes.get('/skills/:skill_id', SkillController.show);

routes.post('/skills/delete/', SkillController.delete);


routes.get('/curses', CurseController.index);

routes.post('/curses/store', CurseController.store);

routes.post('/curses/update', CurseController.update);

routes.get('/curses/:curse_id', CurseController.show);

routes.post('/curses/delete/', CurseController.delete);


routes.get('/experiences', ExperienceController.index);

routes.post('/experiences/store', ExperienceController.store);

routes.post('/experiences/update', ExperienceController.update);

routes.get('/experiences/:experience_id', ExperienceController.show);

routes.post('/experiences/delete/', ExperienceController.delete);


module.exports = routes;