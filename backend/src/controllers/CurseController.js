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
    },

    async update(req, res) {
        
        const { name, hours, school, yeard, curse_id } = req.body;

        const curse = await Curse.update({ id: curse_id }, {
            name,
            hours,
            school,
            yeard
        });

        return res.json(curse);
    },

    async show(req, res) {

        const { curse_id } = req.params;

        const curse = await Curse.findOne({ id: curse_id });

        return res.json(curse);
    },

    async delete(req, res) {

        const { curse_id } = req.body;

        const curse = Curse.deleteOne({ id: curse_id });

        return res.json(curse);
    }
}