const Job = require('../models/job.model');

module.exports.allJobs = (req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

module.exports.createJob = (req,res) => {
    Job.create(req.body)
    .then(newJob => res.json(newJob))
    .catch((err) => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.updateJob = (req,res) => {
    Job.updateOne({_id: req.params._id}, req.body)
        .then(updateJob => res.json(updateJob ))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteJob = (req, res) => {
    Job.deleteOne({ _id: req.params._id })
        .then(result => res.json({result}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findJob = (req, res) => {
    Job.findOne({ _id: req.params._id })
        .then(oneJob => res.json({ oneJob }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}