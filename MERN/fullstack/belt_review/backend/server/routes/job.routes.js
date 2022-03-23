const JobController = require('../controllers/job.controller');
const Job = require('../models/job.model');

module.exports = app => {
    app.get('/allJobs', JobController.allJobs);
    app.get('/oneJob/:_id', JobController.findJob);
    app.post('/createJob', JobController.createJob);
    app.patch('/updateJob/:_id', JobController.updateJob);
    app.delete('/deleteJob/:_id', JobController.deleteJob);

}