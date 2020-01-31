const Skill = require('../models/Skill');

module.exports = {
    async index(req, res) {
        const skill = Skill.find({});

        return res.json(skill);
    }
}