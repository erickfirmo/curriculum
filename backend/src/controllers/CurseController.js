const Curse = require('../models/Curse');

module.exports = {
    async index(req, res) {
        
        const curses = await Curse.find({});

        return res.json(curses);
    },

    async store(req, res) {
        
        const { name, hours, school, yeard } = req.body;

        const curse = await Curse.create({
            name,
            hours,
            school,
            yeard
        })

        return res.json(curse);
    }
}