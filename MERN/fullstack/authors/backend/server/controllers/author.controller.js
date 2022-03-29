const Author = require('../models/author.model')

module.exports.findAll = (req,res) => {
    Author.find()
        .then(author => res.json(author))
        .catch(err => res.status(400).json ({ message: 'Something Went Wrong', error: err}));
}

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch((err) => res.status(400).json({ message: 'Something Went Wrong', error: err}));
}

module.exports.updateAuthor = (req,res) => {
    Author.updateOne({_id: req.params._id}, req.body , {runValidators:true})
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.status(400).json({ message: 'Something Went Wrong', error: err}));
}

module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne ({_id: req.params._id}, req.body)
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({ message: 'Somethind Went Wrong', error: err}));
}

module.exports.updateAuthor = (req,res) => {
    Author.findOne ({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: 'Something Went Wrong', error: err}))
}

