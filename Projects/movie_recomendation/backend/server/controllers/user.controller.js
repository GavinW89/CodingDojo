const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const{secret} = require("../config/jwt");

class UserController{
    register(req, res){
        user.save()
        .then(() =>{
            res
            .cookie("usertoken", jwt.sign({_id:user._id}, secret,{httpOnly: true}))
            .json({msg:"success", user:user})
        })
        .catch(err=> res.json(err))

    }

    login(req,res){
        User.findOne({email:req.body.email})
        .then(user => { 
            if(user == null){
                res.json({msg:"Invalid login attempt"}) //email is not found
                
            }else{
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid=>{
                        if(passwordIsValid){
                            res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly:true})
                            .json({msg:"success!"});
                        }else{
                            res.json({msg:"Invalid login attempt"})//incorrect password
                        }
                    })
                    .catch(err => res.json({msg:"Invalid login attempt", err}))
            }
        })  
        .catch(err=>res.json(err))
    }

    
}

    module.exports.getAll = (req,res) => {
        User.find().sort({name:1})
        .then(results => res.json(results))
        .catch(err=> res.status(400).json({message: "Did not work!", err}))
    }


// module.exports.findAll = (req,res) => {
//     User.find().sort({name:1})
//     .then(results => res.json(results))
//     .catch(err=> res.status(400).json({message: "Did not work!", err}))
// }

// module.exports.register = (req,res) => {
//     User.create(req.body)
//     .then(results => res.json(results))
//     .catch(err=> res.status(400).json({message: "Did not work!", err}))
// }

// module.exports.findOne = (req, res) => {
//     User.findOne({_id: req.params._id})
//     .then(results => res.json(results))
//     .catch(err => res.status(400).json({message: "Did not work", err}))
// }