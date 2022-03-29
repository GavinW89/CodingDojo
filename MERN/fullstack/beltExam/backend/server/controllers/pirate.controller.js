const Pirate = require('../models/pirate.model')

module.exports.findAll =(req,res) => {
    Pirate.find()
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json ({ message: 'Something Went Wrong', error: err}))
}

module.exports.findOne =(req,res) => {
    Pirate.findOne({_id: req.params._id}, req.body)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json ({ message: 'Something Went Wrong', error: err}))
}

module.exports.create =(req,res) => {
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json ({ message: 'Something Went Wrong', error: err}))
}

module.exports.update =(req,res) => {
    Pirate.findOne({_id: req.params._id}, req.body, {runValidators:true})
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json ({ message: 'Something Went Wrong', error: err}))
}

module.exports.deletePirate = (req,res) => {
    Pirate.deleteOne ({_id: req.params._id}, req.body)
        .then(results => res.json({results}))
        .catch(err => res.status(400).json({ message: 'Somethind Went Wrong', error: err}));
}

module.exports.update = (req,res) => {
    Pirate.findOneAndUpdate ({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message: 'Something Went Wrong', error: err}))
}