const skillDb = [
    {
        id:1,
        title: "JavaScript",
        description: "A Multipurpose Programming Language"
    },
    {
        id:2,
        title: "NodeJS",
        description: "A JavaScript runtime based off of the JavaScript V8 Engine"
    },
    {
        id:3,
        title: "Python",
        description: "A dynamically OOP Programming Language"
    }
]


module.exports ={
    getAll: function (){
        return skillDb

},
    getOne: function (skillId){
        console.log(skillId)
        const skill = skillDb.filter(skill=> parseInt(skillId) === skill.id)
        console.log('line 28', skillDb)
        return skill.length > 0 ? skill[0] : "Skill not found"
    },

    create: function(skill){
        skill.id = Math.floor(Math.random() * 100) + 3
        skillDb.push(skill);
    },

    deleteOne: function(id){
        skillDb.splice(id,1);
    },

    update: function(id, updatedSkill){
        updatedSkill.id = parseInt(updatedSkill.id)
        skillDb.forEach(skill => {
            if(skill.id === parseInt(id)){
                const idx = skillDb.indexOf(skill)
                skillDb[idx] = updatedSkill
            } 
        })
        
    }
}
