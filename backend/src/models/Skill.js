const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: String,
    level: Number
});

module.exports = mongoose.model('Skill', SkillSchema);