// backend/models/IconModel.js
const mongoose = require('mongoose');

const IconSchema = new mongoose.Schema({
    iconName: {
        type: String,
        required: true
    },
    userId: {
        type: String, // Storing the Google user's _id from the userModel
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const IconModel = mongoose.model('icons', IconSchema);
module.exports = IconModel;