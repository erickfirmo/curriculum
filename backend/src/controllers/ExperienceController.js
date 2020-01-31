const Experience = require('../models/Experience');

module.exports = {
    async index(req, res) {

        const experiences = Experience.find({});

        return res.json(experiences);
    }
}