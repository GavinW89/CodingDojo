const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema ({
    setup: String,
    punchline: String
},
{
    timestamps: true //auto updated and created at
})

const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke