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
    }
}