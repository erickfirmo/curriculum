const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    company: String,
    office: String,
    activities: [String],
    start_date: String,
    end_date: String,
});

module.exports = mongoose.model('Experience', ExperienceSchema);