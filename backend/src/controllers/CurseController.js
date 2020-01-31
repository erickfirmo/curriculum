const Curse = require('../models/Curse');

module.exports = {
    async index(req, res) {
        
        const curses = await Curse.find({});

        return res.json(curses);
    }
}