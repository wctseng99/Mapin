const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    title: { 
        type: String,
        required: true,
        min: 3,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    desc: {
        type: String,
        min: 3,
    },
    lat: {
        type: Number,
        required: true,
    },
    lon: {
        type: Number,
        required: true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Pin', PinSchema);