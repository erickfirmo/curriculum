const Experience = require('../models/Experience');

module.exports = {
    async index(req, res) {

        const experiences = Experience.find({});

        return res.json(experiences);
    },

    async store(req, res) {

        const { company, office, activities, start_date, end_date } = req.body;

        experience = await Experience.create({
            company,
            office,
            activities,
            start_date,
            end_date
        });

        return res.json(experience);
    }
}