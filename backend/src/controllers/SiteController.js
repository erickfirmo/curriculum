const Skill = require('../models/Skill');
const Curse = require('../models/Curse');


module.exports = {
    async index(req, res) {
        const skill = await Skill.find({});
        const curse = await Curse.find({});

        return res.json({
            skill: skill,
            curse: curse,
        });
    }
}