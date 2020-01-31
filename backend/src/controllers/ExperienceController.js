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
    },

    async update(req, res) {

        const { company, office, activities, start_date, end_date, experience_id } = req.body;

        experience = await Experience.update({ id: experience_id }, { company, office, activities, start_date, end_date });
    
        return res.json(experience);
    }
}