const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/create', ProductController.createProduct);
    app.get('/findall', ProductController.findAll);
    app.get('/findOne/:_id', ProductController.findOne);
    app.patch('/updateProduct/:_id', ProductController.updateProduct);
    app.delete('/deleteProduct/:_id', ProductController.deleteProduct);
}