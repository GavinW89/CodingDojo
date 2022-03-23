const { modelName } = require('../models/product.model');
const Product = require('../models/product.model')

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err=>res.json(err));
}

module.exports.findAll= (req,res) => {
    Product.find()
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.findOne = (req,res) => {
    Product.findOne({ _id: req.params._id })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req,res) => {
    Product.updateOne({_id: req.params._id}, req.body)
        .then(updateProduct => res.json(updateProduct ))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then(result => res.json({result}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}