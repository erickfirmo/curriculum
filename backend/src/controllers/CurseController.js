const Curse = require('../models/Curse');

module.exports = {
    async index(req, res) {
        

        return res.json(curses);
    }
}