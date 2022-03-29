const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters." ]
    },
    url: {
        type: String,
        required: [true, "Please Provide a Url"]
    },
    numChest: {
        type: Number,
        required: [true, "All Pirates Must Have A Hidden Treasure"],
        min: [1, "At Least One of your chests must be hidden!"]
    },
    catchphrase: {
        type: String,
        required: [true, "All Pirates Must Have A Catch Phrase"],
        minLength: [3, "Your catchphrase must be at least 3 characters"]
    },
    position: {
        type: String,
        required: [true, "All Pirates Have A Position On This Ship"]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Please specify this data"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Please specify this data"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Please specify this data"]
    },
},{timestamps: true});

const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;