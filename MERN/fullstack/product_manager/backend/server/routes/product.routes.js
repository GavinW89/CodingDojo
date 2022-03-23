const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/create', ProductController.createProduct)
    app.get('/findall', ProductController.findAll)
}