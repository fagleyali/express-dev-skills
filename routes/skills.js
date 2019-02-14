var express = require('express');
var skillRouter = express.Router();
const skillsController = require('../controllers/skills')
/* GET users listing. */
skillRouter.get('/', skillsController.getAllSkills);
skillRouter.delete('/:id', skillsController.delete);
skillRouter.get('/new', skillsController.newSkill);
skillRouter.get('/:id', skillsController.getOneSkill);
skillRouter.get('/:id/edit', skillsController.edit);
skillRouter.put('/:id', skillsController.update);
skillRouter.post('/',skillsController.create);

module.exports = skillRouter;
