const Job = require("../models/job.model")

module.exports.testResponse = (req, res) => {
    res.json({message: "test response here!"})
}

module.exports.findAll = (req,res)=> {
    Job.find({})
        .then(results => res.json(results))
        .catch(err=>res.status(400).json({message: "error in the database",err}))
}

module.exports.create = (req,res)=>{
    Job.create(req.body)
        .then(results => res.json(results))
        .catch(err=>res.status(400).json({message: "error in the database",err}))

}
module.exports.findOne = (req,res)=>{
    Job.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err=>res.status(400).json({message: "error in the database",err}))

}
module.exports.deleteOne = (req,res)=>{
    Job.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err=>res.status(400).json({message: "error in the database",err}))

}
module.exports.updateOne = (req,res)=>{
    Job.updateOne({_id: req.params._id}, req.body)
        .then(results => res.json(results))
        .catch(err=>res.status(400).json({message: "error in the database",err}))

}
