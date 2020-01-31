const mongoose = require('mongoose');

const CurseSchema = new mongoose.Schema({
    name: String,
    hours: Number,
    school: String,
    yeard: Number,
});

module.exports = mongoose.model('Curse', CurseSchema);