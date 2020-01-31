const Skill = require('../models/Skill');
const Curse = require('../models/Curse');
const Experience = require('../models/Experience');

module.exports = {
    async index(req, res) {
        const skill = await Skill.find({});
        const curse = await Curse.find({});
        const experience = await Experience.find({});

        return res.json({
            skill: skill,
            curse: curse,
            experience: experience
        });
    }
}