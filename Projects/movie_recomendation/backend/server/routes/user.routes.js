const UserController = require("../controllers/User.controller")
const {register, login, getAll} = require('../controllers/user.controller')

module.exports = app => {

    // app.post("/api/users/register", UserController.register);
    app.post('/api/users/register', function(req, res){
        UserController.register
    })
    // app.post("/api/users/login", UserController.login);
    app.post('/api/users/login', function(req,res){
        UserController.login
    })

    app.get("/api/users/getall", UserController.getAll);
    // app.post('/api/users/getall', function(req,res){
    //     UserController.getAll
    // })


}