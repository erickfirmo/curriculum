const Skill = require('../models/Skill');
const Curse = require('../models/Curse');
const Experience = require('../models/Experience');

module.exports = {
    async index(req, res) {
        const skills = await Skill.find({});
        const curses = await Curse.find({});
        const experiences = await Experience.find({});

        return res.json({
            skills,
            curses,
            experiences
        });
    }
}