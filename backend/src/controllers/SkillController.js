const Skill = require('../models/Skill');

module.exports = {
    async index(req, res) {
        const skills = await Skill.find({});

        return res.json(skills);
    },

    async store(req, res) {
        const { name, level } = req.body;

        const skill = await Skill.create({
            name,
            level,
        })

        return res.json(skill);
    },

    async update(req, res) {
        
        const { name, level, skill_id  } = req.body;

        const skill = await Skill.update({ id: skill_id }, {
            name,
            level
        });

        return res.json(skill);
    },

    async show(req, res) {

        const { skill_id } = req.params;

        const skill = await Skill.findOne({ id: skill_id });

        return res.json(skill);

    }
}