const Skill = require('../models/Skill');
const Experience = require('../models/Experience');


module.exports = {
    async index(req, res) {
        const skill = await Skill.find({});
        const experience = await Experience.find({});

        return res.json(skill);
    }
}