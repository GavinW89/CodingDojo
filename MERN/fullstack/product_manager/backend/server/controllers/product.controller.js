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