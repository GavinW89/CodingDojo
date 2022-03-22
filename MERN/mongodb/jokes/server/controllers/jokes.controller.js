const Joke = require('../models/jokes.model');

module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
    .then(newJoke => res.json(newJoke))
    .catch((err) => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.updateJoke = (req,res) => {
    Joke.updateOne({_id: req.params._id}, req.body)
        .then(updateJoke => res.json(updateJoke ))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => res.json({result}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(oneJoke => res.json({ oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}