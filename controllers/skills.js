const skillDB = require('../models/skill')
const skillsController = {}

skillsController.getAllSkills = function (req, res){
    const skills = skillDB.getAll()
    const time = req.time
  
  res.render('skills/index', {skills, time});
}

skillsController.getOneSkill = function(req, res){
    const skill = skillDB.getOne(req.params.id)
    res.render('skills/skill',{skill})
}

skillsController.newSkill = function(req,res){
    res.render('skills/new'  );
}


 
skillsController.create = function (req, res) {
  req.body.done = false;
 skillDB.create(req.body);
  res.redirect('/skills');
}

skillsController.delete = function(req,res){
    skillDB.deleteOne(req.params.id);
   res.redirect('/skills');
}

skillsController.edit =  function(req,res){
  let skill = skillDB.getOne(req.params.id);
  res.render('skills/edit',{skill});
}

skillsController.update = function(req,res){
  skillDB.update(req.params.id, req.body);
  res.redirect('/skills')
}

module.exports = skillsController;