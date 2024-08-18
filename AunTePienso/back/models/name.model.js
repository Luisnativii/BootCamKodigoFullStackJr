// models/name.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NameSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    count: {
        type: Number,
        required: true,
        default: 1
    }
}, { timestamps: true });

module.exports = mongoose.model('Name', NameSchema);
